import React, { useState } from 'react'

const IMG = {
  hero: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/hero-product-front.png',
  heroLifestyle: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/hero-lifestyle-couch.png',
  angleSide: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/product-angle-side.png',
  angleBack: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/product-angle-back.png',
  charging: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/product-detail-charging.png',
  box: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/product-angle-box.png',
  stand: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/hero-product-on-stand.png',
  mechanism: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/mechanism-diagram.png',
  ba1: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/before-after-cheek-45.png',
  ba2: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/before-after-forehead-52.png',
  inUse: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/in-use-bathroom-vanity.png',
  ugc: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/ugc-selfie-testimonial.png',
  priceChart: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/price-comparison-chart.png',
}

const CHECKOUT = {
  essential: 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25',
  complete: 'https://orthocliner.myshopify.com/cart/48083744293019:1?discount=SECRET25',
  ultimate: 'https://orthocliner.myshopify.com/cart/48083744325787:1?discount=SECRET25',
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <div className={`faq-q${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>{q}</div>
      <div className={`faq-a${open ? ' open' : ''}`}>{a}</div>
    </div>
  )
}

const heroImages = [IMG.hero, IMG.heroLifestyle, IMG.angleSide, IMG.angleBack, IMG.charging, IMG.box, IMG.stand]

export default function App() {
  const [mainImg, setMainImg] = useState(0)

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        🔥 LIMITED TIME: 25% OFF with code SECRET25 — Ends Soon
      </div>
      <div className="social-proof-bar">
        <span className="stars">★★★★★</span> 4.8/5 from 2,847 verified reviews | Trusted by 15,000+ women
      </div>

      {/* Hero */}
      <div className="container">
        <section className="hero">
          <div className="hero-images">
            <img src={heroImages[mainImg]} alt="LuxeBeam Red Light Therapy Mask" className="hero-main-img" />
            <div className="hero-thumbs">
              {heroImages.map((src, i) => (
                <img key={i} src={src} alt={`View ${i+1}`} className={i === mainImg ? 'active' : ''} onClick={() => setMainImg(i)} />
              ))}
            </div>
          </div>
          <div className="hero-content">
            <h1>Clinical-Grade Red Light Therapy. Finally at a Price That Makes Sense.</h1>
            <p className="subtitle">Dual-wavelength LED mask that reaches your collagen-producing cells 4mm below the surface — where no serum ever could. 10 minutes. No cords. No clinic. Just results.</p>
            <ul className="hero-benefits">
              <li>✓ 630-660nm Red + 830-850nm Near-Infrared (clinically matched wavelengths)</li>
              <li>✓ Soft medical-grade silicone — conforms to every face shape</li>
              <li>✓ Wireless, USB-C rechargeable — use anywhere</li>
              <li>✓ 10-minute auto-shutoff sessions</li>
              <li>✓ 100-day money-back guarantee</li>
            </ul>
            <div className="hero-rating">
              <span className="stars">★★★★★</span> 4.8/5.0 (2,847 Reviews) | 15,000+ Happy Customers
            </div>
            <a href={CHECKOUT.complete} className="cta-btn">Shop Now — From $249</a>
          </div>
        </section>
      </div>

      {/* Bundles */}
      <section className="bundles section-alt">
        <div className="container">
          <h2>Choose Your Ritual</h2>
          <div className="bundle-grid">
            <div className="bundle-card">
              <h3>Essential</h3>
              <p className="bundle-desc">LuxeBeam™ LED Face Mask</p>
              <div className="bundle-price">
                <span className="original">$399</span>
                <span className="current">$249</span>
                <span className="savings">Save $150 vs. retail</span>
              </div>
              <ul className="bundle-features">
                <li>→ Full-face 120-LED coverage</li>
                <li>→ Wireless, USB-C rechargeable</li>
                <li>→ Carrying pouch included</li>
              </ul>
              <a href={CHECKOUT.essential} className="cta-btn">Add to Cart — $249</a>
            </div>
            <div className="bundle-card popular">
              <span className="bundle-badge">⭐ MOST POPULAR</span>
              <h3>Complete Ritual</h3>
              <p className="bundle-desc">Mask + Collagen Renewal Serum + Premium Case</p>
              <div className="bundle-price">
                <span className="original">$478</span>
                <span className="current">$329</span>
                <span className="savings">Save $149 + Free Shipping</span>
              </div>
              <ul className="bundle-features">
                <li>→ Everything in Essential</li>
                <li>→ LMM Collagen Renewal Serum</li>
                <li>→ Hard-shell premium carrying case</li>
                <li>→ Quickstart ritual guide</li>
              </ul>
              <a href={CHECKOUT.complete} className="cta-btn cta-btn-secondary">Add to Cart — $329</a>
            </div>
            <div className="bundle-card">
              <span className="bundle-badge" style={{background:'var(--gold)'}}>💎 BEST VALUE</span>
              <h3>Ultimate Glow</h3>
              <p className="bundle-desc">Full System with Eye Contour Attachment</p>
              <div className="bundle-price">
                <span className="original">$649</span>
                <span className="current">$449</span>
                <span className="savings">Save $200 — Most Complete System</span>
              </div>
              <ul className="bundle-features">
                <li>→ Everything in Complete Ritual</li>
                <li>→ Hyaluronic prep mist</li>
                <li>→ Eye contour attachment</li>
                <li>→ Priority customer support</li>
              </ul>
              <a href={CHECKOUT.ultimate} className="cta-btn">Add to Cart — $449</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2>What 10 Minutes of Light Can Do</h2>
          <div className="benefits-grid">
            {[
              ['🔬', 'Reaches Where Creams Can\'t', 'Dual wavelengths penetrate 4-10mm into the dermis — directly energizing the fibroblasts that produce collagen and elastin. Your $80 serum only reaches the top 0.1mm.'],
              ['✨', 'Visible Results in Weeks', 'Clinical wavelengths (630-660nm + 830-850nm) are shown to boost cellular ATP production by up to 200%. Users report smoother, firmer skin within 3-4 weeks.'],
              ['🪶', 'Featherlight Silicone Fit', 'Soft medical-grade silicone contours to your face — no gaps, no sliding, no pressure marks. Unlike rigid masks that leave red marks.'],
              ['🔋', 'Truly Wireless', 'USB-C rechargeable with 5+ sessions per charge. No cord tethering you to an outlet. Use it on the couch, in bed, or at your vanity.'],
              ['⏱️', '10-Minute Sessions', 'Auto-shutoff timer. Just put it on while watching TV, reading, or winding down. The one part of your routine you\'ll actually look forward to.'],
              ['💰', '35-62% Less Than Competitors', 'Same clinical wavelengths as masks costing $395-$650. We cut the celebrity markup, not the technology.'],
              ['🛡️', 'Built to Last', 'Reinforced LED connections and premium silicone rated for 50,000+ hours. Because a $400 mask shouldn\'t die after 3 months.'],
              ['🌿', 'Works With Your Routine', 'Layer your favorite serums underneath — red and NIR light actually enhance topical absorption. Your existing skincare works harder.'],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="benefit-card">
                <h3>{icon} {title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="section section-alt">
        <div className="container">
          <h2>The Science: Deep-Cell Light Activation™</h2>
          <div className="science-content">
            <p><strong>The problem:</strong> Collagen is produced by fibroblasts, specialized cells living in the dermis — 1-4mm below your skin's surface. No cream, no matter how expensive, can reach them.</p>
            <h3>630-660nm (Red Light)</h3>
            <p>Penetrates the upper dermis. Stimulates surface-level collagen production. Reduces redness and inflammation. Improves skin tone and texture.</p>
            <h3>830-850nm (Near-Infrared)</h3>
            <p>Penetrates 4-10mm deep, reaching the mitochondria inside your fibroblasts. This triggers cytochrome c oxidase, which ramps up ATP production by up to 200%.</p>
            <img src={IMG.mechanism} alt="Deep-Cell Light Activation mechanism" className="science-img" />
            <p><strong>The result:</strong> Energized fibroblasts produce more collagen and elastin — the structural proteins that keep skin firm, plump, and smooth. Not a topical coating. Actual structural renewal from the inside out.</p>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="section">
        <div className="container">
          <h2>What's Inside Your LuxeBeam</h2>
          <div className="specs-table">
            <table>
              <tbody>
                {[
                  ['Red LEDs', '630-660nm (60 LEDs)'],
                  ['Near-Infrared LEDs', '830-850nm (60 LEDs)'],
                  ['Total LEDs', '120'],
                  ['Irradiance', '25-30 mW/cm² at skin contact'],
                  ['Material', 'Medical-grade soft silicone'],
                  ['Weight', '180g (6.3 oz)'],
                  ['Charging', 'USB-C, 2-hour full charge'],
                  ['Battery Life', '5+ sessions per charge'],
                  ['Session Timer', '10-minute auto-shutoff'],
                  ['LED Lifespan', '50,000+ hours'],
                  ['Coverage', 'Full face including forehead, cheeks, chin, nose'],
                ].map(([k, v], i) => (
                  <tr key={i}><td>{k}</td><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
            <p style={{textAlign:'center', marginTop:16, fontSize:14, color:'var(--text-secondary)'}}>
              <strong>No app required.</strong> One button. One mode. 10 minutes. Done.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section section-alt">
        <div className="container">
          <h2>Real Women. Real Skin. Real Results.</h2>
          <p style={{textAlign:'center', fontSize:14, color:'var(--text-secondary)', marginBottom:24, marginTop:-16}}>
            Results shown after 4-8 weeks of consistent use. Individual results may vary.
          </p>
          <div className="ba-grid">
            <div className="ba-card">
              <img src={IMG.ba1} alt="Before and after - cheek area" />
              <p>Jennifer M., 45 — 6 weeks</p>
            </div>
            <div className="ba-card">
              <img src={IMG.ba2} alt="Before and after - forehead" />
              <p>Diane K., 52 — 8 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Use */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <img src={IMG.inUse} alt="LuxeBeam in use at bathroom vanity" style={{borderRadius:'var(--radius)', maxWidth:600, margin:'0 auto'}} />
        </div>
      </section>

      {/* Reviews */}
      <section className="section section-alt">
        <div className="container">
          <h2>What Our Customers Are Saying</h2>
          <div className="reviews-grid">
            {[
              ['★★★★★', '"My skin looks like I just walked out of a facial"', 'I\'ve been using the LuxeBeam for about 6 weeks now and the difference is honestly shocking. My fine lines around my eyes have softened, my skin has this glow that I haven\'t had since my 30s.', 'Michelle T., 44 | Austin, TX'],
              ['★★★★★', '"The one thing in my routine I actually look forward to"', 'I put this on every night while watching TV. After about 3 weeks my skin started looking alive. My daughter asked what I was doing differently.', 'Karen L., 51 | Denver, CO'],
              ['★★★★★', '"Same wavelengths, half the price — no catch"', 'I\'m an engineer so I researched this extensively. The wavelengths are identical to Omnilux and CurrentBody. My wife says my skin looks 5 years younger.', 'David R., 46 | Seattle, WA'],
              ['★★★★☆', '"Good results, wish it came in more colors"', 'The mask works great — my skin is smoother and the redness around my nose improved. Results-wise? Absolutely worth it.', 'Priya S., 38 | Chicago, IL'],
              ['★★★★★', '"Finally, something that works at a deeper level"', 'After 4 weeks my laugh lines are visibly less deep and my skin texture is so much smoother. Worth every penny.', 'Christine M., 49 | Portland, OR'],
              ['★★★★★', '"Replaced my retinol and I\'m not going back"', 'Within a month my skin looked better than it did on retinol — WITHOUT the peeling, dryness, and sun sensitivity.', 'Amanda J., 42 | San Diego, CA'],
            ].map(([stars, title, body, reviewer], i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{stars}</div>
                <h4>{title}</h4>
                <p>{body}</p>
                <div className="reviewer">— {reviewer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <img src={IMG.ugc} alt="Customer selfie testimonial" style={{borderRadius:'var(--radius)', maxWidth:500, margin:'0 auto'}} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              ['How quickly will I see results?', 'Most users report noticeable improvements in skin texture and tone within 3-4 weeks of consistent daily use. More significant changes to fine lines and firmness typically appear at 6-8 weeks. We recommend 5-7 sessions per week.'],
              ['Is this safe for all skin types?', 'Yes. Red and near-infrared light therapy is non-invasive, UV-free, and suitable for all skin types and tones. The LuxeBeam does not emit UV or blue light.'],
              ['How does this compare to Omnilux, CurrentBody, and Dr. Dennis Gross?', 'LuxeBeam uses the same clinically-studied wavelengths. We\'re 35-62% less expensive, fully wireless, USB-C rechargeable, and our soft silicone conforms to all face shapes.'],
              ['Can I use serums or moisturizer with the mask?', 'Absolutely — we recommend it. Apply your serum first, then put on the mask. Red and NIR light enhance topical absorption.'],
              ['Is it really wireless?', 'Yes, fully wireless. USB-C rechargeable with 5+ sessions per charge. No cord. No outlet dependency.'],
              ['Does it get hot during use?', 'The LuxeBeam stays cool to warm during the entire 10-minute session. Our LED configuration is designed for thermal comfort.'],
              ['What if it doesn\'t work for me?', '100-day money-back guarantee. No restocking fees. No video proof required. No hassle.'],
              ['How long does the mask last?', 'LEDs rated for 50,000+ hours — over 13 years of daily 10-minute sessions. Medical-grade silicone for long-term durability.'],
              ['Do I need an app?', 'No. One button, one mode, 10-minute auto-shutoff. No app, no Bluetooth, no unnecessary complexity.'],
              ['What\'s the difference between the three bundles?', 'Essential ($249) — mask and carrying pouch. Complete Ritual ($329) — adds Collagen Serum and premium case. Ultimate Glow ($449) — adds hyaluronic mist, eye contour attachment, and priority support.'],
            ].map(([q, a], i) => <FAQ key={i} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <h2>See How We Compare</h2>
          <img src={IMG.priceChart} alt="Price comparison chart" style={{borderRadius:'var(--radius)', maxWidth:700, margin:'0 auto'}} />
        </div>
      </section>

      {/* Trust */}
      <section className="section section-alt trust-section">
        <div className="container">
          <h2>Your Purchase Is Protected</h2>
          <p className="trust-body">
            <strong>100-Day Money-Back Guarantee</strong> — Try LuxeBeam risk-free. If you don't see results, we'll refund every penny. No restocking fees. No video proof. No fine print.
          </p>
          <div className="trust-badges">
            <div className="trust-badge"><span className="trust-icon">🛡️</span>100-Day Guarantee</div>
            <div className="trust-badge"><span className="trust-icon">🚚</span>Free US Shipping</div>
            <div className="trust-badge"><span className="trust-icon">🔒</span>Secure Checkout</div>
            <div className="trust-badge"><span className="trust-icon">🔌</span>USB-C Rechargeable</div>
            <div className="trust-badge"><span className="trust-icon">💡</span>50,000+ Hour LEDs</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Start Your 10-Minute Glow Ritual Tonight</h2>
          <p>Join 15,000+ women who replaced their most expensive serums with 10 minutes of light.<br/>Use code <strong>SECRET25</strong> at checkout for 25% off any bundle.</p>
          <div className="cta-group">
            <a href={CHECKOUT.essential} className="cta-btn">Shop LuxeBeam — From $249</a>
            <a href={CHECKOUT.complete} className="cta-btn cta-btn-secondary">Get the Complete Ritual — $329</a>
          </div>
        </div>
      </section>
    </>
  )
}
