import { useEffect, useState } from 'react';
import { clarityEvent } from '../utils/analytics';

// Checkout layout matched to the main funnel (legaltags.site) v2 design:
// header + striped border, hero (label + personalized headline + 4 benefits),
// the conversion block ($300 credit stamp + optional coupon banner + Google
// trust strip + SamCart embed + payment logos + decline fallback), money-back
// guarantee, 3-step "how it works", and the verifiable-trust footer.
//
// Offer-page note: these funnels apply a SamCart coupon (e.g. NIGHTOWL100), so
// we intentionally do NOT render the main funnel's regular-price reveal box —
// showing a regular price next to a coupon-discounted charge would mismatch.
// SamCart drives the actual charge; the coupon banner reflects the discount.
export default function CheckoutTemplate({
  samcartSlug = '',
  vehicleLabel = 'Vehicle Registration',
  vehicleSubtitle = '',
  headlineAction = 'Registration',
  headlineVehicle = 'Vehicle',
  includesPlates = true,
  benefits = null,
  // Accepted for backward compat with the per-vehicle pages; not rendered in v2.
  priceAfter = null,
  socialProof = [],
  includedItems = null,
  testimonials = null,
  faqOverrides = null,
  heroImage = null,
}) {
  const [contactInfo, setContactInfo] = useState({ fullName: '', email: '', phone: '' });

  const fireClarityEvent = clarityEvent;

  const isRetitle = headlineAction.toLowerCase().includes('retitle');

  // Coupon rides in via URL param from the offer page (gated by its live
  // countdown). Empty when absent, so SamCart charges the standard price.
  const couponCode = (() => {
    try { return new URLSearchParams(window.location.search).get('coupon') || ''; }
    catch (e) { return ''; }
  })();

  useEffect(() => {
    const existing = document.querySelector('script[src="https://static.samcart.com/checkouts/sc-checkout.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://static.samcart.com/checkouts/sc-checkout.js';
      script.defer = true;
      document.body.appendChild(script);
    }

    try {
      const saved = localStorage.getItem('legalTagsContact');
      if (saved) {
        const parsed = JSON.parse(saved);
        setContactInfo({ fullName: parsed.fullName || '', email: parsed.email || '', phone: parsed.phone || '' });
      }
    } catch (e) {}

    fireClarityEvent('checkout_page_view', { product_slug: samcartSlug, vehicle_label: vehicleLabel });
  }, []);

  const firstName = contactInfo.fullName.split(' ')[0];

  const defaultBenefits = [
    { title: 'No Annual State Inspections', desc: 'Montana does not require annual safety or emissions inspections.' },
    { title: 'No Sales Tax', desc: 'Save thousands on high-value vehicles vs your home state.' },
    ...(includesPlates
      ? [{ title: 'Permanent Registration', desc: 'Vehicles 11+ years old qualify (qualifying vehicles): pay once, never renew.' }]
      : []
    ),
    { title: 'No Title? No Problem', desc: 'We retitle vehicles other states say are impossible.' },
  ];
  const benefitsToShow = benefits || defaultBenefits;

  return (
    <div style={{ fontFamily: "'DM Mono', monospace", background: '#f5f1e8', minHeight: '100vh', color: '#1a1a1a' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Oswald:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .condensed { font-family: 'Oswald', sans-serif; }
        .serif { font-family: 'Libre Baskerville', serif; }
        .mono { font-family: 'DM Mono', monospace; }
        .stamp {
          display: inline-block; border: 3px solid #8b1a1a; color: #8b1a1a;
          padding: 5px 12px; font-family: 'Oswald', sans-serif; font-weight: 700;
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          transform: rotate(-2deg); position: relative;
        }
        .stamp::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; border: 1px solid #8b1a1a; opacity: 0.5; }
        .striped-border { background: repeating-linear-gradient(-45deg, #1e3a5f, #1e3a5f 10px, #8b1a1a 10px, #8b1a1a 20px); height: 4px; }
        .check-item { display: flex; align-items: flex-start; gap: 10px; padding: 6px 0; }
        .checkmark { width: 20px; height: 20px; background: #1e3a5f; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; margin-top: 2px; border-radius: 2px; }
        .samcart-wrapper { background: #fff; border: 3px solid #1e3a5f; border-radius: 12px; padding: 20px 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
      `}</style>

      {/* 1. HEADER */}
      <header style={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e0d5' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src="/images/legal-tags-logo.webp" alt="Legal Tags" style={{ height: '36px', width: 'auto', display: 'block' }} />
        </a>
        <a href="tel:406-510-0599" className="mono" onClick={() => fireClarityEvent('phone_click_header')} style={{ fontSize: '12px', color: '#1e3a5f', textDecoration: 'none', fontWeight: '500' }}>📞 406-510-0599</a>
      </header>
      <div className="striped-border" />

      {/* 2. HERO — vehicle label + personalized headline + 4 benefits */}
      <section style={{ padding: '20px 20px 8px', maxWidth: '700px', margin: '0 auto' }}>
        <div className="condensed" style={{ fontSize: '12px', fontWeight: '600', color: '#8b1a1a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px', textAlign: 'center' }}>
          {vehicleLabel}
        </div>
        <h1 className="condensed" style={{ fontSize: 'clamp(20px, 5.5vw, 28px)', fontWeight: '700', lineHeight: '1.15', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', marginBottom: '6px' }}>
          {firstName
            ? <>{firstName}, complete your <span style={{ color: '#8b1a1a' }}>Montana {headlineAction.toLowerCase()}</span></>
            : <>Complete your <span style={{ color: '#8b1a1a' }}>Montana {headlineAction.toLowerCase()}</span></>
          }
        </h1>
        {vehicleSubtitle && (
          <p className="mono" style={{ fontSize: '12px', color: '#666', textAlign: 'center', marginBottom: '14px' }}>
            {vehicleSubtitle}
          </p>
        )}
        <div style={{ background: '#fff', border: '1px solid #e5e0d5', borderRadius: '8px', padding: '12px 16px', maxWidth: '520px', margin: '0 auto' }}>
          {benefitsToShow.map((item, i) => (
            <div key={i} className="check-item">
              <div className="checkmark">✓</div>
              <div>
                <span className="condensed" style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a5f', letterSpacing: '0.3px' }}>{item.title}: </span>
                <span className="mono" style={{ fontSize: '12px', color: '#555' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONVERSION BLOCK — credit stamp + coupon banner + trust strip + SamCart */}
      <section style={{ padding: '8px 20px 20px', maxWidth: '520px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <div className="stamp">$300 LLC Credit Applied</div>
        </div>

        {couponCode && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#e8f4e8', border: '2px solid #2d7a2d', borderRadius: '8px', padding: '8px 12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '14px' }}>🏷️</span>
            <span className="condensed" style={{ fontSize: '12px', fontWeight: '700', color: '#1a5c1a', letterSpacing: '0.5px' }}>Discount code {couponCode} applied at checkout</span>
          </div>
        )}

        <a
          href="https://www.google.com/search?q=Legal+Tags+Philipsburg+MT"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => fireClarityEvent('google_reviews_click', 'checkout_trust_strip')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '10px', padding: '10px 12px', marginBottom: '10px',
            background: '#fff', border: '1.5px solid #d4cfc4', borderRadius: '6px',
            textDecoration: 'none', color: '#1a1a1a'
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ color: '#f5b800', fontSize: '12px', letterSpacing: '1px', lineHeight: '1' }}>★★★★★</div>
              <div className="mono" style={{ fontSize: '9px', color: '#666', marginTop: '2px', letterSpacing: '0.3px' }}>GOOGLE</div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="condensed" style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.3px', color: '#1a1a1a' }}>
                4.8 from 273 reviews
              </div>
              <div className="mono" style={{ fontSize: '10px', color: '#666', lineHeight: '1.3', marginTop: '1px' }}>
                Verified MT business · Philipsburg, MT
              </div>
            </div>
          </div>
          <span className="mono" style={{ fontSize: '11px', color: '#1e3a5f', flexShrink: 0, fontWeight: '500' }}>Verify →</span>
        </a>

        <div className="samcart-wrapper">
          <sc-checkout product={samcartSlug} subdomain="legaltags" coupon={couponCode}></sc-checkout>
        </div>

        {/* Payment logos + decline fallback */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '10px', padding: '8px 0', flexWrap: 'wrap' }}>
          {[
            { label: 'VISA', bg: '#1a1f71', color: '#fff', style: { fontStyle: 'italic', fontWeight: '900', letterSpacing: '-1px' } },
            { label: 'MC', bg: '#eb001b', color: '#fff', style: { fontWeight: '900', fontSize: '10px' } },
            { label: 'AMEX', bg: '#007bc1', color: '#fff', style: { fontWeight: '700', fontSize: '9px', letterSpacing: '0.5px' } },
            { label: 'PayPal', bg: '#003087', color: '#fff', style: { fontStyle: 'italic', fontWeight: '700', fontSize: '9px' } },
          ].map((card, i) => (
            <div key={i} style={{ background: card.bg, color: card.color, padding: '3px 8px', borderRadius: '3px', fontFamily: "'Oswald', sans-serif", fontSize: '11px', ...card.style }}>
              {card.label}
            </div>
          ))}
          <div style={{ background: '#000', color: '#fff', padding: '3px 8px', borderRadius: '3px', fontFamily: "'Oswald', sans-serif", fontSize: '9px', fontWeight: '700', letterSpacing: '0.5px' }}>
            AFTERPAY
          </div>
          <div style={{ background: '#ffb3c7', color: '#1a1a1a', padding: '3px 8px', borderRadius: '3px', fontFamily: "'Oswald', sans-serif", fontSize: '9px', fontWeight: '700', letterSpacing: '0.5px' }}>
            KLARNA
          </div>
        </div>

        <div style={{ background: '#faf8f4', border: '1px solid #e5e0d5', borderRadius: '8px', padding: '10px 14px', marginTop: '8px', textAlign: 'center' }}>
          <p className="mono" style={{ fontSize: '11px', color: '#666' }}>Card declined? Can't qualify for Afterpay/Klarna?</p>
          <a href="tel:406-510-0599" className="condensed" onClick={() => fireClarityEvent('phone_click_declined_card')} style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', textDecoration: 'none', display: 'block', marginTop: '2px', letterSpacing: '1px' }}>
            📞 406-510-0599
          </a>
          <span className="mono" style={{ fontSize: '9px', color: '#999' }}>Budget-friendly options · M-F 8am-8pm MT</span>
        </div>
      </section>

      {/* 4. MONEY-BACK GUARANTEE */}
      <section style={{ padding: '0 20px 20px', maxWidth: '520px', margin: '0 auto' }}>
        <div style={{ background: '#fff', border: '2px solid #1e3a5f', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '4px' }}>🛡️</div>
          <h3 className="condensed" style={{ fontSize: '15px', fontWeight: '700', color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
            100% Money-Back Guarantee
          </h3>
          <p className="mono" style={{ fontSize: '12px', color: '#555', lineHeight: '1.5' }}>
            If we can't legally register and title your vehicle in Montana, you get all your money back. No questions asked.
          </p>
        </div>
      </section>

      {/* 5. HOW IT WORKS — 3 steps */}
      <section style={{ padding: '0 20px 24px', maxWidth: '520px', margin: '0 auto' }}>
        <h3 className="condensed" style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', textAlign: 'center' }}>
          What happens after you order
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { num: '1', text: 'We create your Montana LLC same-day' },
            { num: '2', text: `You submit vehicle info (Make, Model, Year, VIN), vehicle ${isRetitle ? 'retitled' : 'registered'} with Montana DMV` },
            { num: '3', text: includesPlates ? 'Official Montana plates ship to your door (~3 days)' : 'Official title ships to your door' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '28px', background: '#1e3a5f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Oswald', sans-serif", fontSize: '13px', fontWeight: '700', color: '#fff', flexShrink: 0 }}>{s.num}</div>
              <span className="mono" style={{ fontSize: '13px', color: '#1a1a1a', lineHeight: '1.4' }}>{s.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FOOTER — verifiable trust signals */}
      <footer style={{ background: '#1a1a1a', color: '#f5f1e8', padding: '24px 20px 32px', textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: '11px', marginBottom: '8px' }}>
          <a href="tel:406-510-0599" onClick={() => fireClarityEvent('phone_click_footer')} style={{ color: '#f5f1e8', textDecoration: 'none', fontWeight: '500' }}>📞 406-510-0599</a>
          <span style={{ opacity: 0.4, margin: '0 10px' }}>|</span>
          <a href="mailto:support@legaltags.com" onClick={() => fireClarityEvent('email_click_footer')} style={{ color: '#f5f1e8', textDecoration: 'none', fontWeight: '500' }}>✉ support@legaltags.com</a>
        </div>
        <div className="mono" style={{ fontSize: '11px', opacity: 0.8, marginBottom: '6px' }}>M-F 8am-8pm Mountain Time</div>
        <div className="mono" style={{ fontSize: '11px', opacity: 0.8, marginBottom: '12px' }}>126 W Broadway #107, Philipsburg, MT 59858</div>
        <div className="mono" style={{ fontSize: '10px', opacity: 0.6, marginBottom: '10px' }}>
          <a href="https://biz.sosmt.gov/api/report/FromActiveReport/0/Agents/0" target="_blank" rel="noopener noreferrer" onClick={() => fireClarityEvent('mt_sos_verify_click', 'checkout_footer')} style={{ color: '#f5f1e8', textDecoration: 'underline' }}>
            Verified MT Registered Agent (SOS)
          </a>
        </div>
        <div className="mono" style={{ fontSize: '10px', opacity: 0.5, marginBottom: '6px' }}>
          <a href="https://legaltags.com/privacy-policy" target="_blank" rel="noopener noreferrer" onClick={() => fireClarityEvent('privacy_policy_click', 'checkout_footer')} style={{ color: '#f5f1e8', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ opacity: 0.5, margin: '0 6px' }}>·</span>
          <a href="https://legaltags.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" onClick={() => fireClarityEvent('terms_of_service_click', 'checkout_footer')} style={{ color: '#f5f1e8', textDecoration: 'none' }}>Terms of Service</a>
        </div>
        <span className="mono" style={{ fontSize: '9px', opacity: 0.3 }}>© 2026 Legal Tags · All Rights Reserved</span>
      </footer>
    </div>
  );
}
