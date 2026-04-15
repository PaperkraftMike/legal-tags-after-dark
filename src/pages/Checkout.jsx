import { useState, useEffect } from 'react';

export default function LegalTagsCheckout() {
  // Contact info passed from the survey (would come from URL params, state, or localStorage)
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    customerType: '',
    vehicleType: ''
  });

  const [billingInfo, setBillingInfo] = useState({
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Load contact info from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('legalTagsContact');
    if (saved) {
      const parsed = JSON.parse(saved);
      setContactInfo(parsed);
    }
  }, []);

  const originalPrice = 997;
  const discount = 300;
  const finalPrice = originalPrice - discount;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // This would integrate with Stripe / GHL webhook
    setTimeout(() => {
      alert('Order submitted! This would process payment via Stripe.\n\n' + JSON.stringify({ contactInfo, billingInfo, paymentMethod }, null, 2));
      setIsProcessing(false);
    }, 1500);
  };

  const vehicleTypeLabels = {
    car: 'Car / Van / SUV',
    truck: 'Truck',
    motorcycle: 'Motorcycle',
    trailer: 'Trailer / Toy Hauler',
    rv: 'RV / Motorhome',
    boat: 'Yacht / Boat',
    offroad: 'Off Road Vehicle',
    import: 'Import Vehicle',
    semi: 'Semi Truck',
    military: 'Military Vehicle',
    lowspeed: 'Ebike',
    temptag: 'Temp Tag Only'
  };

  return (
    <div style={{
      fontFamily: "'DM Mono', monospace",
      background: '#f5f1e8',
      minHeight: '100vh',
      color: '#1a1a1a',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Oswald:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .condensed { font-family: 'Oswald', sans-serif; }
        .serif { font-family: 'Libre Baskerville', serif; }
        .mono { font-family: 'DM Mono', monospace; }
        
        .official-seal {
          width: 48px;
          height: 48px;
          border: 3px solid #1e3a5f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }
        
        .official-seal::before {
          content: '';
          position: absolute;
          width: 58px;
          height: 58px;
          border: 1px dashed #1e3a5f;
          border-radius: 50%;
          opacity: 0.5;
        }
        
        .striped-border {
          background: repeating-linear-gradient(
            -45deg,
            #1e3a5f,
            #1e3a5f 10px,
            #8b1a1a 10px,
            #8b1a1a 20px
          );
          height: 6px;
        }
        
        .form-input {
          background: #fff;
          border: 2px solid #d4cfc4;
          padding: 14px 16px;
          font-size: 16px;
          font-family: 'DM Mono', monospace;
          width: 100%;
          color: #1a1a1a;
          transition: all 0.2s ease;
          border-radius: 6px;
          -webkit-appearance: none;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #1e3a5f;
        }
        
        .form-input::placeholder {
          color: #999;
        }
        
        .btn-primary {
          background: #8b1a1a;
          color: #f5f1e8;
          border: none;
          padding: 20px 32px;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          border-radius: 6px;
        }
        
        .btn-primary:hover {
          background: #6d1515;
          transform: translateY(-1px);
        }
        
        .btn-primary:disabled {
          background: #999;
          cursor: not-allowed;
          transform: none;
        }
        
        .card {
          background: #fff;
          border: 3px solid #1a1a1a;
          box-shadow: 6px 6px 0 #1a1a1a;
        }
        
        .form-label {
          display: block;
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #666;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        .payment-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border: 2px solid #d4cfc4;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          background: #fff;
        }
        
        .payment-option:hover {
          border-color: #1e3a5f;
        }
        
        .payment-option.selected {
          border-color: #1e3a5f;
          background: #f0f7ff;
        }
        
        .radio-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #999;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        
        .payment-option.selected .radio-circle {
          border: 6px solid #1e3a5f;
        }
        
        .summary-sticky {
          position: sticky;
          top: 24px;
        }
        
        @media (max-width: 900px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
          
          .summary-sticky {
            position: static;
          }
          
          .order-summary-wrapper {
            order: -1;
          }
        }
      `}</style>

      {/* Header */}
      <header style={{
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '2px solid #1a1a1a',
        background: '#fff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="official-seal">
            <div className="condensed" style={{ 
              fontSize: '8px', 
              fontWeight: '700', 
              color: '#1e3a5f',
              textAlign: 'center',
              lineHeight: '1.2'
            }}>
              LEGAL<br/>TAGS
            </div>
          </div>
          <div>
            <div className="condensed" style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '2px', color: '#1a1a1a' }}>
              LEGAL TAGS
            </div>
            <div className="mono" style={{ fontSize: '8px', color: '#666', letterSpacing: '1px' }}>
              SECURE CHECKOUT
            </div>
          </div>
        </div>
      </header>

      <div className="striped-border" />

      {/* Congratulations Banner */}
      <section style={{
        background: '#1e3a5f',
        color: '#fff',
        padding: '28px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 className="condensed" style={{
            fontSize: '28px',
            fontWeight: '700',
            letterSpacing: '1px',
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>
            Congratulations{contactInfo.firstName ? `, ${contactInfo.firstName}` : ''}!
          </h1>
          <p className="serif" style={{
            fontSize: '16px',
            opacity: 0.9,
            fontStyle: 'italic',
            lineHeight: '1.5'
          }}>
            You've received a <strong>$300 credit</strong> toward your Montana registration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '32px 20px 60px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          <div className="checkout-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '32px',
            alignItems: 'start'
          }}>
            
            {/* Left Column - Forms */}
            <div>
              <form onSubmit={handleSubmit}>
                
                {/* Contact Information */}
                <div className="card" style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    padding: '16px 20px', 
                    borderBottom: '2px solid #1a1a1a',
                    background: '#faf8f4'
                  }}>
                    <h2 className="condensed" style={{ 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#1e3a5f'
                    }}>
                      Contact Information
                    </h2>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div className="form-row" style={{ marginBottom: '16px' }}>
                      <div>
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={contactInfo.firstName}
                          onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={contactInfo.lastName}
                          onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-input"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="card" style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    padding: '16px 20px', 
                    borderBottom: '2px solid #1a1a1a',
                    background: '#faf8f4'
                  }}>
                    <h2 className="condensed" style={{ 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#1e3a5f'
                    }}>
                      Billing Address
                    </h2>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <label className="form-label">Street Address</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123 Main Street"
                        value={billingInfo.address}
                        onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div>
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-input"
                          value={billingInfo.city}
                          onChange={(e) => setBillingInfo({...billingInfo, city: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-row">
                        <div>
                          <label className="form-label">State</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="CA"
                            maxLength={2}
                            value={billingInfo.state}
                            onChange={(e) => setBillingInfo({...billingInfo, state: e.target.value.toUpperCase()})}
                            required
                          />
                        </div>
                        <div>
                          <label className="form-label">ZIP</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="90210"
                            value={billingInfo.zip}
                            onChange={(e) => setBillingInfo({...billingInfo, zip: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="card" style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    padding: '16px 20px', 
                    borderBottom: '2px solid #1a1a1a',
                    background: '#faf8f4',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <h2 className="condensed" style={{ 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#1e3a5f'
                    }}>
                      Payment Method
                    </h2>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#1e3a5f',
                      color: '#fff',
                      padding: '6px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: '600'
                    }}>
                      SECURE
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    {/* Payment Options */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                      <div 
                        className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        <div className="radio-circle" />
                        <div style={{ flex: 1 }}>
                          <div className="condensed" style={{ fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>
                            Credit / Debit Card
                          </div>
                          <div className="mono" style={{ fontSize: '11px', color: '#666' }}>
                            Visa, Mastercard, American Express, Discover
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className={`payment-option ${paymentMethod === 'afterpay' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('afterpay')}
                      >
                        <div className="radio-circle" />
                        <div style={{ flex: 1 }}>
                          <div className="condensed" style={{ fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>
                            Afterpay / Klarna
                          </div>
                          <div className="mono" style={{ fontSize: '11px', color: '#666' }}>
                            4 interest-free payments of <strong>${(finalPrice / 4).toFixed(2)}</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    {paymentMethod === 'card' && (
                      <div style={{
                        background: '#faf8f4',
                        border: '2px dashed #d4cfc4',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'center'
                      }}>
                        <div className="mono" style={{ fontSize: '13px', color: '#666' }}>
                          Card payment form will be handled by Stripe
                        </div>
                        <div className="mono" style={{ fontSize: '11px', color: '#999', marginTop: '8px' }}>
                          Your card information is encrypted and secure
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'afterpay' && (
                      <div style={{
                        background: '#f0f7ff',
                        border: '2px solid #1e3a5f',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'center'
                      }}>
                        <div className="condensed" style={{ fontSize: '14px', color: '#1e3a5f', marginBottom: '8px' }}>
                          Pay in 4 Interest-Free Installments
                        </div>
                        <div className="mono" style={{ fontSize: '12px', color: '#555' }}>
                          You'll be redirected to Afterpay/Klarna after clicking "Complete Order"
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      style={{
                        width: '20px',
                        height: '20px',
                        marginTop: '2px',
                        accentColor: '#1e3a5f',
                        cursor: 'pointer'
                      }}
                    />
                    <span className="mono" style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>
                      I agree to the <a href="#" style={{ color: '#1e3a5f' }}>Terms of Service</a> and{' '}
                      <a href="#" style={{ color: '#1e3a5f' }}>Privacy Policy</a>. I understand that Legal Tags 
                      will create a Montana LLC on my behalf for vehicle registration purposes.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={!agreedToTerms || isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Complete Order — $${finalPrice}`}
                </button>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '16px'
                }}>
                  <span className="mono" style={{ fontSize: '11px', color: '#888' }}>
                    256-bit SSL encrypted checkout
                  </span>
                </div>

                {/* Guarantees */}
                <div style={{
                  background: '#fff',
                  border: '2px solid #e5e0d5',
                  borderRadius: '8px',
                  padding: '20px',
                  marginTop: '24px'
                }}>
                  <div className="condensed" style={{ 
                    fontSize: '12px', 
                    fontWeight: '600', 
                    letterSpacing: '1px',
                    color: '#666',
                    marginBottom: '12px',
                    textAlign: 'center'
                  }}>
                    INCLUDED GUARANTEES
                  </div>
                  {[
                    '100% Money-Back Guarantee',
                    '99.5% Success Rate',
                    'Same-Day LLC Processing',
                    '2-Day Plate Delivery'
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: i < 3 ? '8px' : 0
                    }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        background: '#1e3a5f',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        color: '#fff'
                      }}>✓</div>
                      <span className="mono" style={{ fontSize: '12px', color: '#444' }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Help Box */}
                <div style={{
                  background: '#1e3a5f',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '20px',
                  marginTop: '16px',
                  textAlign: 'center'
                }}>
                  <div className="condensed" style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                    Questions? We're Here to Help
                  </div>
                  <a href="tel:406-510-0599" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '20px',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: '700',
                    letterSpacing: '1px'
                  }}>
                    406-510-0599
                  </a>
                  <div className="mono" style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>
                    M-F 8am-8pm Mountain Time
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-summary-wrapper">
              <div className="summary-sticky">
                <div className="card">
                  <div style={{ 
                    padding: '16px 20px', 
                    borderBottom: '2px solid #1a1a1a',
                    background: '#faf8f4'
                  }}>
                    <h2 className="condensed" style={{ 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#1e3a5f'
                    }}>
                      Order Summary
                    </h2>
                  </div>
                  <div style={{ padding: '24px' }}>
                    {/* Vehicle Info (if available) */}
                    {contactInfo.vehicleType && (
                      <div style={{
                        background: '#faf8f4',
                        border: '1px solid #e5e0d5',
                        borderRadius: '6px',
                        padding: '12px 16px',
                        marginBottom: '20px'
                      }}>
                        <div className="mono" style={{ fontSize: '10px', color: '#888', marginBottom: '4px' }}>
                          VEHICLE TYPE
                        </div>
                        <div className="condensed" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {vehicleTypeLabels[contactInfo.vehicleType] || contactInfo.vehicleType}
                        </div>
                      </div>
                    )}

                    {/* Package Details */}
                    <div style={{ marginBottom: '20px' }}>
                      <div className="condensed" style={{ 
                        fontSize: '18px', 
                        fontWeight: '700', 
                        marginBottom: '12px' 
                      }}>
                        Montana Vehicle Registration
                      </div>
                      <div className="mono" style={{ fontSize: '12px', color: '#555', lineHeight: '1.8' }}>
                        ✓ Montana LLC Formation<br/>
                        ✓ Vehicle Registration<br/>
                        ✓ Montana License Plates<br/>
                        ✓ All DMV & State Fees<br/>
                        ✓ Registered Agent (1 Year)
                      </div>
                    </div>

                    {/* Pricing */}
                    <div style={{ borderTop: '2px dashed #e5e0d5', paddingTop: '20px' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}>
                        <span className="mono" style={{ fontSize: '14px', color: '#666' }}>Subtotal</span>
                        <span className="mono" style={{ 
                          fontSize: '14px', 
                          color: '#999',
                          textDecoration: 'line-through'
                        }}>${originalPrice}</span>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '16px',
                        background: '#f0fff4',
                        margin: '0 -24px',
                        padding: '12px 24px'
                      }}>
                        <span className="condensed" style={{ fontSize: '14px', fontWeight: '600', color: '#22c55e' }}>
                          $300 Credit Applied
                        </span>
                        <span className="mono" style={{ fontSize: '14px', color: '#22c55e', fontWeight: '600' }}>
                          -${discount}
                        </span>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '16px',
                        borderTop: '2px solid #1a1a1a'
                      }}>
                        <span className="condensed" style={{ fontSize: '18px', fontWeight: '700' }}>Total</span>
                        <span className="condensed" style={{ fontSize: '32px', fontWeight: '700', color: '#8b1a1a' }}>
                          ${finalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Montana Section */}
      <section style={{ 
        background: '#fff',
        borderTop: '3px solid #1a1a1a',
        padding: '48px 20px'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="condensed" style={{
            fontSize: '24px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '8px'
          }}>
            Why Register in Montana?
          </h2>
          <p className="serif" style={{
            fontSize: '14px',
            color: '#666',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '32px'
          }}>
            No inspections, no SMOG, no sales tax — and you never visit the DMV again.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'No Sales Tax', desc: 'Montana has no state sales tax, saving you thousands on high-value vehicles.' },
              { title: 'No Inspections', desc: 'No annual safety or emissions inspections required — ever.' },
              { title: 'Permanent Registration', desc: 'Vehicles 11+ years old can be permanently registered. Pay once, done.' },
              { title: 'Lost Title Solutions', desc: "No title? No problem. Montana's simple process can help you retitle." }
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: '#1e3a5f',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>✓</div>
                <div>
                  <div className="condensed" style={{ 
                    fontSize: '14px', 
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                    color: '#1e3a5f'
                  }}>{item.title}</div>
                  <div className="serif" style={{ fontSize: '13px', color: '#555', lineHeight: '1.5' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ 
        background: '#1e3a5f',
        color: '#fff',
        padding: '48px 20px'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="condensed" style={{
            fontSize: '24px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '32px'
          }}>
            How Does It Work?
          </h2>
          
          <p className="serif" style={{
            fontSize: '15px',
            lineHeight: '1.7',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We'll set you up with a Montana LLC, which fulfills the residency requirements. 
            Once the LLC is set up, your vehicle will be registered under the LLC and issued 
            a Montana plate. This allows you to drive in your state without worrying about 
            transfer regulations. <strong>Your LLC will be created as soon as we process your order</strong>, 
            making the process quick and seamless.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a1a1a',
        color: '#f5f1e8',
        padding: '32px 20px',
        textAlign: 'center'
      }}>
        <div className="condensed" style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '2px', marginBottom: '8px' }}>
          LEGAL TAGS
        </div>
        <div className="mono" style={{ fontSize: '11px', opacity: 0.6, marginBottom: '4px' }}>
          126 W Broadway #107, Philipsburg, MT 59858
        </div>
        <div className="mono" style={{ fontSize: '10px', opacity: 0.4 }}>
          © 2025 Legal Tags · All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
