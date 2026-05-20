import { useEffect, useState, useRef } from 'react';
import { clarityEvent } from '../utils/analytics';

export default function CheckoutTemplate({
  samcartSlug = '',
  vehicleLabel = 'Vehicle Registration',
  vehicleSubtitle = '',
  headlineAction = 'Registration',
  headlineVehicle = 'Vehicle',
  includesPlates = true,
  includedItems = null,
  benefits = null,
  testimonials = null,
  faqOverrides = null,
  heroImage = null,
}) {
  const [contactInfo, setContactInfo] = useState({ fullName: '', email: '', phone: '' });
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const checkoutRef = useRef(null);

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

    const handleScroll = () => {
      if (checkoutRef.current) {
        const rect = checkoutRef.current.getBoundingClientRect();
        setShowMobileCTA(rect.bottom < 0 || rect.top > window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToCheckout = () => {
    fireClarityEvent('checkout_scroll_to_form');
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const firstName = contactInfo.fullName.split(' ')[0];
  const lastName = contactInfo.fullName.split(' ').slice(1).join(' ');

  const defaultIncludedItems = [
    { text: 'Montana LLC Creation ($300 value)', note: 'FREE' },
    { text: 'Full Vehicle Registration with Montana DMV' },
    ...(includesPlates ? [{ text: 'Official MT Plates Shipped to Your Door' }] : []),
    { text: 'Dedicated Personal Support Rep' },
    { text: '100% Money-Back Guarantee' },
  ];
  const itemsToShow = includedItems || defaultIncludedItems;

  const defaultBenefits = [
    { title: 'No Annual State Inspections', desc: 'No annual safety, emissions, or SMOG tests holding up your registration. Register once, drive on.' },
    { title: 'No Sales Tax', desc: 'Montana has no state sales tax, which means you can save a significant amount compared to registering in states with high sales tax.' },
    ...(includesPlates
      ? [{ title: 'Permanent Registration', desc: 'Vehicles 11+ years old can qualify for permanent registration (qualifying vehicles): pay once, no renewals.' }]
      : []
    ),
    { title: 'No Title? No Problem', desc: "Montana's lack of red tape makes it possible for you to re-title your vehicle if the title has been lost, stolen or damaged!" },
  ];
  const benefitsToShow = benefits || defaultBenefits;

  const defaultTestimonials = [
    { quote: "This is legit as it gets. My Mustang wont pass NY inspection due to mods, not an issue with Legal Tags. 2 week turn around and I am rolling again.", author: 'Jacob Henry', detail: 'Google Review', state: 'New York' },
    { quote: "I have three vehicles registered in Montana through Legal Tags. I've been stopped by the police a couple times asking why I have Montana plates and I told them I have a holding company in Montana. I show them the registration. I have insurance here in California and they send me on my way.", author: 'Bobbie Jo Vann', detail: 'Google Review', state: 'California' },
    { quote: "Legitimate. They received the title and by the Friday of the following week I had my registration and license plates. The whole process was easy and straightforward.", author: 'Steven GM', detail: 'Google Review', state: 'New Jersey' },
  ];
  const testimonialsToShow = testimonials || defaultTestimonials;

  const defaultFaq = [
    { q: 'Is registering in Montana legal?', a: 'Yes. Montana law allows non-residents to register vehicles through a Montana LLC. Thousands of vehicle owners across all 50 states use this method.' },
    { q: 'Do I need to visit Montana?', a: 'No. Everything is handled remotely. LLC created same-day, vehicle registered with Montana DMV, plates shipped to you.' },
    { q: 'Can I drive in my state with Montana plates?', a: 'Yes. Your vehicle is legally registered in Montana. You can drive on Montana plates in any state.' },
    { q: "What's the $300 LLC credit?", a: "Competitors charge $300+ just for LLC setup. We include it free: that's the credit applied to your order." },
  ];
  const faqToShow = faqOverrides || defaultFaq;

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
        .official-seal { width: 36px; height: 36px; border: 2px solid #1e3a5f; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0; }
        .official-seal::before { content: ''; position: absolute; width: 46px; height: 46px; border: 1px dashed #1e3a5f; border-radius: 50%; opacity: 0.5; }
        .striped-border { background: repeating-linear-gradient(-45deg, #1e3a5f, #1e3a5f 10px, #8b1a1a 10px, #8b1a1a 20px); height: 4px; }
        .check-item { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; }
        .checkmark { width: 20px; height: 20px; background: #1e3a5f; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; margin-top: 2px; border-radius: 2px; }
        .pulse-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
        .samcart-wrapper { background: #fff; border: 3px solid #1e3a5f; border-radius: 12px; padding: 20px 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
        .urgency-bar { background: #8b1a1a; color: #fff; padding: 8px 16px; text-align: center; font-family: 'Oswald', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
        .mini-testimonial { background: #faf8f4; border-left: 3px solid #1e3a5f; padding: 12px 16px; margin: 10px 0; border-radius: 0 6px 6px 0; }
        .mobile-sticky-cta { position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; background: #1e3a5f; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 -4px 20px rgba(0,0,0,0.2); transform: translateY(100%); transition: transform 0.3s ease; }
        .mobile-sticky-cta.visible { transform: translateY(0); }
        .guarantee-inline { display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: #f0f7ff; border: 1px solid #c8ddf0; border-radius: 8px; }
        .guarantee-shield { width: 32px; height: 32px; background: #1e3a5f; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 16px; flex-shrink: 0; }
        .progress-bar { display: flex; align-items: center; justify-content: center; gap: 0; margin: 0 auto; max-width: 300px; }
        .progress-circle { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Oswald', sans-serif; font-size: 12px; font-weight: 700; flex-shrink: 0; }
        .progress-circle.done { background: #1e3a5f; color: #fff; }
        .progress-circle.active { background: #8b1a1a; color: #fff; box-shadow: 0 0 0 3px rgba(139,26,26,0.2); }
        .progress-line { width: 40px; height: 3px; margin: 0 4px; }
        .progress-line.done { background: #1e3a5f; }
        .progress-line.pending { background: #e5e0d5; }
        .hero-img { width: 100%; display: block; object-fit: cover; height: 220px; border-radius: 10px; box-shadow: 0 8px 32px rgba(0,0,0,0.18); }
        .order-cta-btn { display: block; width: 100%; background: #8b1a1a; color: #f5f1e8; border: none; padding: 18px 32px; font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 17px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; border-radius: 4px; text-align: center; box-shadow: 0 4px 16px rgba(139,26,26,0.3); }
        @media (max-width: 767px) {
          .two-col { display: flex !important; flex-direction: column !important; }
          .checkout-col { order: 2 !important; }
          .sales-col { order: 1 !important; }
          .desktop-only { display: none !important; }
          .hero-img { height: 200px; }
        }
        @media (min-width: 768px) {
          .two-col { display: grid !important; grid-template-columns: 1fr 420px !important; gap: 40px !important; align-items: start !important; }
          .checkout-col { position: sticky !important; top: 16px !important; }
          .mobile-sticky-cta { display: none !important; }
          .mobile-only { display: none !important; }
          .hero-img { height: 280px; }
        }
        @media (min-width: 1024px) { .two-col { gap: 56px !important; grid-template-columns: 1fr 460px !important; } }
      `}</style>

      {/* Trust Bar */}
      <div className="urgency-bar">
        <span>🔒 $300 LLC CREDIT APPLIED</span>
        <span className="desktop-only"> · FREE MONTANA LLC SETUP ($300 VALUE)</span>
      </div>

      {/* Header */}
      <header style={{ padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e0d5' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src="/images/legal-tags-logo.webp" alt="Legal Tags" style={{ height: '40px', width: 'auto', display: 'block' }} />
        </a>
        <a href="tel:406-510-0599" className="mono" onClick={() => fireClarityEvent('phone_click_header')} style={{ fontSize: '12px', color: '#1e3a5f', textDecoration: 'none', fontWeight: '500' }}>📞 406-510-0599</a>
      </header>

      <div className="striped-border" />

      {/* Progress */}
      <section style={{ padding: '12px 20px 4px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="progress-bar" style={{ marginBottom: '8px' }}>
            <div className="progress-circle done">✓</div>
            <div className="progress-line done" />
            <div className="progress-circle done">✓</div>
            <div className="progress-line pending" />
            <div className="progress-circle active">3</div>
          </div>
          <div className="mono" style={{ fontSize: '11px', color: '#888', letterSpacing: '0.5px' }}>STEP 3 OF 3: COMPLETE PAYMENT</div>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding: '0 20px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="two-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* SALES COLUMN */}
            <div className="sales-col">

              {/* Congratulations block */}
              <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
                <div style={{ display: 'inline-block', background: '#1e3a5f', color: '#fff', fontFamily: "'Oswald', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '2px', padding: '4px 12px', borderRadius: '2px', marginBottom: '10px' }}>
                  Legal in All 50 States
                </div>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: 'clamp(22px, 5vw, 30px)', color: '#8b1a1a', marginBottom: '4px' }}>
                  Congratulations!
                </p>
                <p className="condensed" style={{ fontWeight: '700', fontSize: 'clamp(13px, 3.5vw, 16px)', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  You've Received a <span style={{ color: '#8b1a1a' }}>$300 Credit</span> Toward Your Montana LLC Setup
                </p>
                <p className="condensed" style={{ fontWeight: '700', fontSize: 'clamp(16px, 4.5vw, 22px)', color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  {vehicleLabel}
                </p>
              </div>

              {/* Hero image */}
              {heroImage && (
                <div style={{ marginBottom: '16px' }}>
                  <img className="hero-img" src={heroImage} alt={vehicleLabel} loading="eager" />
                </div>
              )}

              {/* Personalized headline */}
              <h1 className="condensed" style={{ fontSize: 'clamp(18px, 5.5vw, 28px)', fontWeight: '700', lineHeight: '1.15', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                {firstName
                  ? <>{firstName}, Complete Your <span style={{ color: '#8b1a1a' }}>{headlineVehicle} {headlineAction}</span></>
                  : <>Complete Your <span style={{ color: '#8b1a1a' }}>Montana {headlineVehicle} {headlineAction}</span></>
                }
              </h1>
              <p className="condensed" style={{ fontSize: '13px', fontWeight: '500', color: '#666', marginBottom: '12px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                {vehicleSubtitle} · No Sales Tax · No Annual State Inspections{includesPlates ? ' · Plates in 3 Days' : ''}
              </p>

              {/* Mid-page CTA for people already sold from the survey */}
              <div className="mobile-only" style={{ marginBottom: '20px' }}>
                <button onClick={scrollToCheckout} className="order-cta-btn">
                  Complete Your Order →
                </button>
                <p className="mono" style={{ fontSize: '10px', color: '#888', textAlign: 'center', marginTop: '6px' }}>
                  💳 Afterpay & Klarna available · Interest free
                </p>
              </div>

              {/* Why Montana benefits */}
              <div style={{ marginBottom: '16px' }}>
                <h2 className="condensed" style={{ fontSize: '15px', fontWeight: '700', color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                  Why Register in Montana?
                </h2>
                <p className="condensed" style={{ fontSize: '13px', fontWeight: '600', color: '#8b1a1a', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  No Annual State Inspections, No SMOG, and you never visit the DMV again!
                </p>
                {benefitsToShow.map((item, i) => (
                  <div key={i} className="check-item">
                    <div className="checkmark">✓</div>
                    <div>
                      <span className="condensed" style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: '#1e3a5f', letterSpacing: '0.5px' }}>{item.title}: </span>
                      <span className="mono" style={{ fontSize: '12px', color: '#555' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div style={{ background: '#fff', border: '3px solid #1e3a5f', borderRadius: '10px', padding: '20px', marginBottom: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div className="condensed" style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #e5e0d5' }}>
                  🎁 What's Included
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {itemsToShow.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#e8f4e8', padding: '8px 12px', borderRadius: '6px', border: '2px solid #4a9e4a' }}>
                      <span style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '12px', flexShrink: 0, background: '#2d7a2d', color: '#fff' }}>✓</span>
                      <span className="mono" style={{ fontSize: '12px', color: '#1a5c1a', fontWeight: '600', flex: 1 }}>{item.text}</span>
                      {item.note && <span className="condensed" style={{ fontSize: '11px', fontWeight: '700', color: '#fff', background: '#2d7a2d', padding: '2px 8px', borderRadius: '4px', letterSpacing: '1px' }}>{item.note}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              {testimonialsToShow.map((t, i) => (
                <div key={i} className={`mini-testimonial${i === 2 ? ' desktop-only' : ''}`}>
                  <div style={{ color: '#f5c842', fontSize: '12px', marginBottom: '4px' }}>★★★★★</div>
                  <p className="serif" style={{ fontSize: '13px', lineHeight: '1.5', color: '#333', fontStyle: 'italic' }}>"{t.quote}"</p>
                  <div className="mono" style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}><strong style={{ color: '#1a1a1a' }}>{t.author}</strong> · {t.detail} · {t.state}</div>
                </div>
              ))}

              {/* Google reviews */}
              <a href="https://www.google.com/search?q=Legal+Tags+Philipsburg+MT" target="_blank" rel="noopener noreferrer" onClick={() => fireClarityEvent('checkout_google_reviews_click')} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #e5e0d5', borderRadius: '8px', padding: '10px 14px', margin: '16px 0', textDecoration: 'none', color: 'inherit' }}>
                <div>
                  <div style={{ fontSize: '22px', fontWeight: '700', fontFamily: "'Oswald', sans-serif", color: '#1a1a1a', lineHeight: 1 }}>4.8</div>
                  <div style={{ color: '#fbbc04', fontSize: '16px', letterSpacing: '1px' }}>★★★★★</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="condensed" style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Google Reviews</div>
                  <div className="mono" style={{ fontSize: '11px', color: '#888' }}>273 verified reviews</div>
                </div>
                <span className="mono" style={{ fontSize: '11px', color: '#1e3a5f', fontWeight: '500' }}>Verify →</span>
              </a>

              {/* Guarantee */}
              <div style={{ background: '#fff', border: '2px solid #1e3a5f', borderRadius: '10px', padding: '20px', marginBottom: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>🛡️</div>
                <h3 className="condensed" style={{ fontSize: '17px', fontWeight: '700', color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  No Risk, 100% Money Back Guarantee
                </h3>
                <p className="mono" style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>
                  Our policy is very simple. If we can't get your vehicle legally registered and titled in Montana, you get ALL of your money back. There is absolutely no risk to you.
                </p>
              </div>

              {/* How it works */}
              <div style={{ background: '#1e3a5f', borderRadius: '8px', padding: '18px', marginBottom: '16px' }}>
                <h3 className="condensed" style={{ fontSize: '14px', fontWeight: '700', color: '#f5f1e8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  But How Can You {isRetitle ? 'Retitle' : 'Register'} a Vehicle Out-of-State Without Being a Resident?
                </h3>
                <p className="mono" style={{ fontSize: '11px', color: '#b8c4d0', lineHeight: '1.6', marginBottom: '12px' }}>
                  Easy! We'll set you up with a Montana LLC, which fulfills the residency requirements. Once the LLC is set up, your vehicle will be registered under the LLC and issued a Montana plate.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { num: '1', text: 'Instant confirmation email with next steps' },
                    { num: '2', text: 'We create your Montana LLC same-day' },
                    { num: '3', text: 'You submit your vehicle info (Make, Model, Year, VIN)' },
                    { num: '4', text: isRetitle ? 'Title processed with Montana DMV' : 'Vehicle registered with Montana DMV' },
                    { num: '5', text: includesPlates ? 'Official plates shipped to your door (~3 days)' : 'Official title shipped to your door' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '24px', height: '24px', border: '2px solid #f5f1e8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Oswald', sans-serif", fontSize: '11px', fontWeight: '700', color: '#f5f1e8', flexShrink: 0 }}>{s.num}</div>
                      <span className="condensed" style={{ fontSize: '13px', color: '#fff', fontWeight: '500', letterSpacing: '0.5px' }}>{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div style={{ marginBottom: '24px' }}>
                <h3 className="condensed" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', color: '#1a1a1a' }}>Common Questions</h3>
                {faqToShow.map((faq, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #e5e0d5', padding: '10px 0' }}>
                    <h4 className="condensed" style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a5f', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{faq.q}</h4>
                    <p className="mono" style={{ fontSize: '11px', color: '#555', lineHeight: '1.5' }}>{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Mobile CTA before checkout */}
              <div className="mobile-only" style={{ textAlign: 'center', marginBottom: '8px' }}>
                <button onClick={scrollToCheckout} className="order-cta-btn">Complete Your Order →</button>
              </div>

            </div>

            {/* CHECKOUT COLUMN */}
            <div className="checkout-col" ref={checkoutRef}>

              <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                <div className="stamp">$300 LLC Credit Applied</div>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e5e0d5', borderRadius: '8px', padding: '8px 14px', marginBottom: '10px', textAlign: 'center' }}>
                <p className="condensed" style={{ fontSize: '12px', fontWeight: '600', color: '#1e3a5f', letterSpacing: '0.5px' }}>
                  💳 <span style={{ fontStyle: 'italic' }}>Afterpay</span> & <span style={{ fontStyle: 'italic' }}>Klarna</span>: <span style={{ color: '#8b1a1a' }}>Interest Free</span> Payments Available
                </p>
              </div>

              {couponCode && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#e8f4e8', border: '2px solid #2d7a2d', borderRadius: '8px', padding: '8px 12px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}>🏷️</span>
                  <span className="condensed" style={{ fontSize: '12px', fontWeight: '700', color: '#1a5c1a', letterSpacing: '0.5px' }}>Discount code {couponCode} applied at checkout</span>
                </div>
              )}

              <div className="samcart-wrapper">
                <sc-checkout product={samcartSlug} subdomain="legaltags" coupon={couponCode}></sc-checkout>
              </div>

              <div className="guarantee-inline" style={{ marginTop: '10px' }}>
                <div className="guarantee-shield">🛡️</div>
                <div>
                  <div className="condensed" style={{ fontSize: '12px', fontWeight: '600', color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Money-Back Guarantee</div>
                  <p className="mono" style={{ fontSize: '10px', color: '#666', lineHeight: '1.4' }}>Can't register? Full refund. 99.5% success rate · 10,000+ vehicles.</p>
                </div>
              </div>

              {/* Payment method logos */}
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

              {/* SSL + BBB trust */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', padding: '4px 0', flexWrap: 'wrap' }}>
                {['🔒 SSL Secure', '✓ 10,000+ Registered', '✓ BBB Accredited'].map((t, i) => (
                  <span key={i} className="mono" style={{ fontSize: '10px', color: '#888' }}>{t}</span>
                ))}
              </div>

              <div style={{ background: '#faf8f4', border: '1px solid #e5e0d5', borderRadius: '8px', padding: '10px 14px', marginTop: '6px', textAlign: 'center' }}>
                <p className="mono" style={{ fontSize: '11px', color: '#666' }}>Card declined? Can't qualify for Afterpay/Klarna?</p>
                <a href="tel:406-510-0599" className="condensed" onClick={() => fireClarityEvent('phone_click_declined_card')} style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', textDecoration: 'none', display: 'block', marginTop: '2px', letterSpacing: '1px' }}>
                  📞 406-510-0599
                </a>
                <span className="mono" style={{ fontSize: '9px', color: '#999' }}>Budget-friendly options · M-F 8am-8pm MT</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#1a1a1a', color: '#f5f1e8', padding: '14px', textAlign: 'center' }}>
        <div className="condensed" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', lineHeight: '2', color: '#fff' }}>
          ✓ NO SALES TAX &nbsp;·&nbsp; ✓ NO ANNUAL STATE INSPECTIONS &nbsp;·&nbsp; ✓ PLATES IN 3 DAYS &nbsp;·&nbsp; ✓ 10,000+ REGISTERED &nbsp;·&nbsp; ✓ MONEY-BACK GUARANTEE
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', color: '#f5f1e8', padding: '24px 20px 80px', textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: '11px', marginBottom: '8px' }}>
          <a href="tel:406-510-0599" onClick={() => fireClarityEvent('phone_click_footer')} style={{ color: '#f5f1e8', textDecoration: 'none' }}>📞 406-510-0599</a>
          <span style={{ opacity: 0.4, margin: '0 10px' }}>|</span>
          <a href="mailto:support@legaltags.com" onClick={() => fireClarityEvent('email_click_footer')} style={{ color: '#f5f1e8', textDecoration: 'none' }}>✉ support@legaltags.com</a>
        </div>
        <div className="mono" style={{ fontSize: '11px', opacity: 0.7, marginBottom: '8px' }}>M-F 8am-8pm Mountain Time · 126 W Broadway #107, Philipsburg, MT 59858</div>
        <div className="mono" style={{ fontSize: '11px', marginBottom: '12px' }}>
          <a href="https://biz.sosmt.gov/api/report/FromActiveReport/0/Agents/0" target="_blank" rel="noopener noreferrer" onClick={() => fireClarityEvent('mt_sos_verify_click')} style={{ color: '#f5f1e8', textDecoration: 'underline', opacity: 0.8 }}>Verified MT Registered Agent (SOS)</a>
        </div>
        <span className="mono" style={{ fontSize: '9px', opacity: 0.3 }}>© 2026 Legal Tags · All Rights Reserved</span>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`mobile-sticky-cta mobile-only ${showMobileCTA ? 'visible' : ''}`}>
        <div>
          <div className="condensed" style={{ fontSize: '12px', fontWeight: '600', color: '#fff', letterSpacing: '0.5px' }}>$300 Credit Applied</div>
          <div className="mono" style={{ fontSize: '10px', color: '#b8c4d0' }}>Free Montana LLC setup included</div>
        </div>
        <button onClick={scrollToCheckout} style={{ background: '#8b1a1a', color: '#fff', border: 'none', padding: '12px 20px', fontFamily: "'Oswald', sans-serif", fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>
          ORDER NOW →
        </button>
      </div>

    </div>
  );
}
