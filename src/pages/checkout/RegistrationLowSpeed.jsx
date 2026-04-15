export default function RegistrationLowSpeed() {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace",
      background: '#f5f1e8',
      minHeight: '100vh',
      color: '#1a1a1a'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Oswald:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .condensed { font-family: 'Oswald', sans-serif; }
        .mono { font-family: 'DM Mono', monospace; }
        .serif { font-family: 'Libre Baskerville', serif; }
        .official-seal {
          width: 36px; height: 36px; border: 2px solid #1e3a5f; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          position: relative; flex-shrink: 0;
        }
        .official-seal::before {
          content: ''; position: absolute; width: 46px; height: 46px;
          border: 1px dashed #1e3a5f; border-radius: 50%; opacity: 0.5;
        }
        .striped-border {
          background: repeating-linear-gradient(-45deg, #1e3a5f, #1e3a5f 10px, #8b1a1a 10px, #8b1a1a 20px);
          height: 4px;
        }
        .stamp {
          display: inline-block; border: 3px solid #8b1a1a; color: #8b1a1a;
          padding: 5px 12px; font-family: 'Oswald', sans-serif; font-weight: 700;
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          transform: rotate(-2deg); position: relative;
        }
      `}</style>

      {/* Header */}
      <header style={{
        padding: '8px 20px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', borderBottom: '1px solid #e5e0d5'
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
          <div className="official-seal">
            <div className="condensed" style={{ fontSize: '6px', fontWeight: '700', color: '#1e3a5f', textAlign: 'center', lineHeight: '1.2' }}>
              LEGAL<br/>TAGS
            </div>
          </div>
          <div className="condensed" style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '2px', color: '#1a1a1a' }}>LEGAL TAGS</div>
        </a>
        <a href="tel:406-510-0599" className="mono" style={{ fontSize: '12px', color: '#1e3a5f', textDecoration: 'none', fontWeight: '500' }}>
          📞 406-510-0599
        </a>
      </header>

      <div className="striped-border" />

      {/* Content */}
      <section style={{ maxWidth: '600px', margin: '0 auto', padding: '48px 20px', textAlign: 'center' }}>
        <div className="stamp" style={{ marginBottom: '16px' }}>Ebike</div>
        <h1 className="condensed" style={{
          fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: '700', lineHeight: '1.15',
          color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px'
        }}>
          Ebike <span style={{ color: '#8b1a1a' }}>Registration</span>
        </h1>
        <p className="mono" style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '32px' }}>
          Ebikes and electric motorcycles require special registration. 
          Please call us directly so we can help you with your specific vehicle.
        </p>
        <a href="tel:406-510-0599" style={{
          display: 'inline-block', background: '#8b1a1a', color: '#f5f1e8', border: 'none',
          padding: '16px 40px', fontFamily: "'Oswald', sans-serif", fontWeight: '600',
          fontSize: '18px', letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none', borderRadius: '4px', marginBottom: '16px'
        }}>
          Call 406-510-0599
        </a>
        <div className="mono" style={{ fontSize: '12px', color: '#888', marginTop: '8px' }}>
          M-F 8am-8pm MT · We'll walk you through the process
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', color: '#f5f1e8', padding: '24px 20px', textAlign: 'center', marginTop: '80px' }}>
        <div className="mono" style={{ fontSize: '11px', marginBottom: '12px' }}>
          <a href="tel:406-510-0599" style={{ color: '#f5f1e8', textDecoration: 'none' }}>📞 406-510-0599</a>
          <span style={{ opacity: 0.4, margin: '0 10px' }}>|</span>
          <span style={{ opacity: 0.6 }}>M-F 8am-8pm MT</span>
          <span style={{ opacity: 0.4, margin: '0 10px' }}>|</span>
          <span style={{ opacity: 0.5 }}>Philipsburg, MT</span>
        </div>
        <span className="mono" style={{ fontSize: '9px', opacity: 0.3 }}>© 2026 Legal Tags · All Rights Reserved</span>
      </footer>
    </div>
  );
}
