import { useState } from 'react'

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

const s = {
  announcementBar: { background: '#4CAF50', color: '#fff', textAlign: 'center' as const, padding: '10px 16px', fontSize: '14px', fontWeight: 600 },
  socialProofBar: { background: '#E8F5E9', textAlign: 'center' as const, padding: '8px 16px', fontSize: '13px', color: '#388E3C' },
  section: { padding: '60px 20px' },
  sectionAlt: { padding: '60px 20px', background: '#FFF8F0' },
  sectionGreen: { padding: '60px 20px', background: '#E8F5E9' },
  h2: { fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' },
  subtitle: { fontSize: '1.1rem', color: '#555', maxWidth: '700px', marginBottom: '32px' },
  cta: { display: 'inline-block', background: '#4CAF50', color: '#fff', padding: '16px 36px', borderRadius: '50px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'transform 0.2s' },
  ctaAccent: { display: 'inline-block', background: '#FFA500', color: '#fff', padding: '16px 36px', borderRadius: '50px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: 'pointer' },
  card: { background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #eee' },
  grid2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' },
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' },
  grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
  tag: { display: 'inline-block', background: '#E8F5E9', color: '#388E3C', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, marginBottom: '12px' },
  starRow: { color: '#FFA500', fontSize: '18px', marginBottom: '8px' },
}

function BundleCard({ title, badge, price, origPrice, savings, features, checkout, popular }: {
  title: string; badge?: string; price: string; origPrice: string; savings: string;
  features: string[]; checkout: string; popular?: boolean
}) {
  return (
    <div style={{ ...s.card, border: popular ? '2px solid #4CAF50' : '1px solid #eee', position: 'relative' }}>
      {badge && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#4CAF50', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>{badge}</div>}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '4px', marginTop: badge ? '8px' : 0 }}>{title}</h3>
      <div style={{ margin: '12px 0' }}>
        <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '8px' }}>{origPrice}</span>
        <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4CAF50' }}>{price}</span>
      </div>
      <p style={{ fontSize: '13px', color: '#B76E79', fontWeight: 600, marginBottom: '16px' }}>{savings}</p>
      <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
        {features.map((f, i) => <li key={i} style={{ padding: '4px 0', fontSize: '14px' }}>→ {f}</li>)}
      </ul>
      <a href={checkout} style={popular ? s.cta : { ...s.cta, background: '#222' }}>Add to Cart — {price}</a>
    </div>
  )
}

function ReviewCard({ stars, title, body, name, age, location }: {
  stars: number; title: string; body: string; name: string; age: number; location: string
}) {
  return (
    <div style={{ ...s.card, textAlign: 'left' }}>
      <div style={s.starRow}>{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
      <h4 style={{ fontWeight: 700, marginBottom: '8px' }}>"{title}"</h4>
      <p style={{ fontSize: '14px', color: '#555', marginBottom: '12px', lineHeight: 1.6 }}>{body}</p>
      <p style={{ fontSize: '13px', fontWeight: 600 }}>— {name}, {age} | Verified Purchase | {location}</p>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #eee', padding: '16px 0', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontWeight: 600, fontSize: '15px' }}>{q}</h4>
        <span style={{ fontSize: '20px', color: '#999' }}>{open ? '−' : '+'}</span>
      </div>
      {open && <p style={{ marginTop: '12px', fontSize: '14px', color: '#555', lineHeight: 1.7 }}>{a}</p>}
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* Announcement Bar */}
      <div style={s.announcementBar}>🔥 LIMITED TIME: 25% OFF with code SECRET25 — Ends Soon</div>

      {/* Social Proof Bar */}
      <div style={s.socialProofBar}>★★★★★ 4.8/5 from 2,847 verified reviews | Trusted by 15,000+ women</div>

      {/* Hero */}
      <section style={{ ...s.section, background: 'linear-gradient(180deg, #FFF8F0 0%, #fff 100%)' }}>
        <div className="container">
          <div style={s.grid2}>
            <div>
              <span style={s.tag}>LITTLE MISS MINERAL</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px' }}>
                Clinical-Grade Red Light Therapy. Finally at a Price That Makes Sense.
              </h1>
              <p style={s.subtitle}>
                Dual-wavelength LED mask that reaches your collagen-producing cells 4mm below the surface — where no serum ever could. 10 minutes. No cords. No clinic. Just results.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '24px', fontSize: '15px' }}>
                <li style={{ padding: '4px 0' }}>✓ 630-660nm Red + 830-850nm Near-Infrared</li>
                <li style={{ padding: '4px 0' }}>✓ Soft medical-grade silicone — conforms to every face shape</li>
                <li style={{ padding: '4px 0' }}>✓ Wireless, USB-C rechargeable — use anywhere</li>
                <li style={{ padding: '4px 0' }}>✓ 10-minute auto-shutoff sessions</li>
                <li style={{ padding: '4px 0' }}>✓ 100-day money-back guarantee</li>
              </ul>
              <div style={s.starRow}>★★★★★ <span style={{ color: '#555', fontSize: '14px' }}>4.8/5.0 (2,847 Reviews) | 15,000+ Happy Customers</span></div>
              <a href={CHECKOUT.complete} style={s.cta}>Shop LuxeBeam — From $249</a>
            </div>
            <div>
              <img src={IMG.hero} alt="LuxeBeam Red Light Therapy LED Face Mask" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section style={s.section}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
            <img src={IMG.angleSide} alt="LuxeBeam side angle" />
            <img src={IMG.angleBack} alt="LuxeBeam back view" />
            <img src={IMG.charging} alt="LuxeBeam USB-C charging" />
            <img src={IMG.box} alt="LuxeBeam packaging" />
            <img src={IMG.stand} alt="LuxeBeam on stand" />
          </div>
        </div>
      </section>

      {/* Bundle Selector */}
      <section style={s.sectionAlt} id="bundles">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={s.h2}>Choose Your Ritual</h2>
          <div style={s.grid3}>
            <BundleCard
              title="Essential"
              price="$249"
              origPrice="$399"
              savings="Save $150 vs. retail"
              features={['Full-face 120-LED coverage', 'Wireless, USB-C rechargeable', 'Carrying pouch included']}
              checkout={CHECKOUT.essential}
            />
            <BundleCard
              title="Complete Ritual"
              badge="⭐ MOST POPULAR"
              price="$329"
              origPrice="$478"
              savings="Save $149 + Free Shipping"
              features={['Everything in Essential', 'LMM Collagen Renewal Serum', 'Hard-shell premium carrying case', 'Quickstart ritual guide']}
              checkout={CHECKOUT.complete}
              popular
            />
            <BundleCard
              title="Ultimate Glow"
              badge="💎 BEST VALUE"
              price="$449"
              origPrice="$649"
              savings="Save $200 — Our Most Complete System"
              features={['Everything in Complete Ritual', 'Hyaluronic prep mist', 'Targeted eye contour attachment', 'Priority customer support']}
              checkout={CHECKOUT.ultimate}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={s.section}>
        <div className="container">
          <h2 style={{ ...s.h2, textAlign: 'center' }}>What 10 Minutes of Light Can Do</h2>
          <div style={s.grid2}>
            <div>
              <img src={IMG.heroLifestyle} alt="Woman using LuxeBeam on couch" />
            </div>
            <div>
              {[
                { icon: '🔬', title: 'Reaches Where Creams Can\'t', desc: 'Dual wavelengths penetrate 4-10mm into the dermis — directly energizing the fibroblasts that produce collagen and elastin.' },
                { icon: '✨', title: 'Visible Results in Weeks', desc: 'Clinical wavelengths boost cellular ATP production by up to 200%. Users report smoother, firmer skin within 3-4 weeks.' },
                { icon: '🪶', title: 'Featherlight Silicone Fit', desc: 'Soft medical-grade silicone contours to your face — no gaps, no sliding, no pressure marks.' },
                { icon: '🔋', title: 'Truly Wireless', desc: 'USB-C rechargeable with 5+ sessions per charge. No cord tethering you to an outlet.' },
                { icon: '⏱️', title: '10-Minute Sessions', desc: 'Auto-shutoff timer. Use while watching TV, reading, or winding down for the night.' },
                { icon: '💰', title: '35-62% Less Than Competitors', desc: 'Same clinical wavelengths as masks costing $395-$650. We cut the celebrity markup, not the technology.' },
                { icon: '🛡️', title: 'Built to Last', desc: 'Premium silicone rated for 50,000+ hours. No more masks dying after 3 months.' },
                { icon: '🌿', title: 'Works With Your Routine', desc: 'Red and NIR light actually enhance topical absorption. Your existing skincare works harder.' },
              ].map((b, i) => (
                <div key={i} style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700 }}>{b.icon} {b.title}</h3>
                  <p style={{ fontSize: '14px', color: '#555' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section style={s.sectionGreen}>
        <div className="container">
          <div style={s.grid2}>
            <div>
              <span style={s.tag}>THE SCIENCE</span>
              <h2 style={s.h2}>Deep-Cell Light Activation™</h2>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
                Collagen is produced by fibroblasts — specialized cells living in the dermis, 1-4mm below your skin's surface. No cream, no matter how expensive, can reach them.
              </p>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
                <strong>630-660nm (Red Light)</strong> — Penetrates the upper dermis. Stimulates collagen production. Reduces redness and inflammation.
              </p>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
                <strong>830-850nm (Near-Infrared)</strong> — Penetrates 4-10mm deep, reaching the mitochondria inside your fibroblasts. Triggers cytochrome c oxidase, ramping up ATP production by up to 200%.
              </p>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#388E3C' }}>
                Energized fibroblasts produce more collagen and elastin — actual structural renewal from the inside out.
              </p>
            </div>
            <div>
              <img src={IMG.mechanism} alt="Deep-Cell Light Activation mechanism diagram" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section style={s.section}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ ...s.h2, textAlign: 'center' }}>What's Inside Your LuxeBeam</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
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
              ].map(([spec, detail], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 600 }}>{spec}</td>
                  <td style={{ padding: '12px 8px', color: '#555' }}>{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: 600, color: '#388E3C' }}>
            No app required. One button. One mode. 10 minutes. Done.
          </p>
        </div>
      </section>

      {/* Before/After */}
      <section style={s.sectionAlt}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={s.h2}>Real Women. Real Skin. Real Results.</h2>
          <p style={{ ...s.subtitle, margin: '0 auto 32px' }}>Results shown after 4-8 weeks of consistent use (5-7 sessions per week, 10 minutes per session). Individual results may vary.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <img src={IMG.ba1} alt="Before and after — Jennifer M., 45, 6 weeks" />
            <img src={IMG.ba2} alt="Before and after — Diane K., 52, 8 weeks" />
          </div>
        </div>
      </section>

      {/* In Use Image */}
      <section style={s.section}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img src={IMG.inUse} alt="Woman using LuxeBeam at bathroom vanity" style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '16px' }} />
        </div>
      </section>

      {/* Reviews */}
      <section style={s.sectionGreen}>
        <div className="container">
          <h2 style={{ ...s.h2, textAlign: 'center' }}>What Our Customers Are Saying</h2>
          <div style={s.grid3}>
            <ReviewCard stars={5} title="My skin looks like I just walked out of a facial" body="I've been using the LuxeBeam for about 6 weeks now and the difference is honestly shocking. My fine lines around my eyes have softened, my skin has this glow that I haven't had since my 30s." name="Michelle T." age={44} location="Austin, TX" />
            <ReviewCard stars={5} title="The one thing in my routine I actually look forward to" body="I put this on every night while watching TV with my husband. 10 minutes, I barely notice it's on. After about 3 weeks my skin started looking alive — plumper and more even-toned." name="Karen L." age={51} location="Denver, CO" />
            <ReviewCard stars={5} title="Same wavelengths, half the price — no catch" body="I'm an engineer so I researched this extensively before buying. The wavelengths are identical to what Omnilux and CurrentBody use. The only difference? This one doesn't cost $470." name="David R." age={46} location="Seattle, WA" />
            <ReviewCard stars={5} title="Finally, something that works at a deeper level" body="I've spent literally thousands on serums that promise collagen but deliver nothing. After 4 weeks my laugh lines are visibly less deep and my skin texture is so much smoother." name="Christine M." age={49} location="Portland, OR" />
            <ReviewCard stars={5} title="Replaced my retinol and I'm not going back" body="My dermatologist suggested red light therapy. Within a month my skin looked better than it did on retinol — WITHOUT the peeling, dryness, and sun sensitivity." name="Amanda J." age={42} location="San Diego, CA" />
            <ReviewCard stars={5} title="I was skeptical. Now I'm obsessed." body="Red and near-infrared at these wavelengths have solid research behind them. After 5 weeks of daily use, my forehead lines are softer and my overall skin texture is noticeably improved." name="Dr. Lisa W." age={47} location="Boston, MA" />
          </div>
        </div>
      </section>

      {/* UGC */}
      <section style={s.section}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '500px' }}>
          <img src={IMG.ugc} alt="Customer selfie testimonial" />
        </div>
      </section>

      {/* Price Comparison */}
      <section style={s.sectionAlt}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={s.h2}>Why Pay More for the Same Wavelengths?</h2>
          <img src={IMG.priceChart} alt="Price comparison chart — LuxeBeam vs competitors" style={{ maxWidth: '700px', margin: '0 auto' }} />
        </div>
      </section>

      {/* FAQ */}
      <section style={s.section}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ ...s.h2, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <FAQItem q="How quickly will I see results?" a="Most users report noticeable improvements in skin texture and tone within 3-4 weeks of consistent daily use. More significant changes to fine lines and firmness typically appear at 6-8 weeks. Consistency is key — we recommend 5-7 sessions per week." />
          <FAQItem q="Is this safe for all skin types?" a="Yes. Red and near-infrared light therapy is non-invasive, UV-free, and suitable for all skin types and tones. The LuxeBeam does not emit UV or blue light." />
          <FAQItem q="How does this compare to Omnilux, CurrentBody, and Dr. Dennis Gross?" a="LuxeBeam uses the same clinically-studied wavelengths (630-660nm red + 830-850nm NIR). The key differences: we're 35-62% less expensive, fully wireless, USB-C rechargeable, and our soft silicone conforms to all face shapes." />
          <FAQItem q="Can I use serums or moisturizer with the mask?" a="Absolutely — we recommend it. Apply your serum or moisturizer first, then put on the mask. Red and near-infrared light actually enhance topical absorption." />
          <FAQItem q="Is it really wireless?" a="Yes, fully wireless. USB-C rechargeable with 5+ sessions per charge. No cord. No outlet dependency." />
          <FAQItem q="Does it get hot during use?" a="The LuxeBeam stays cool to warm during the entire 10-minute session. Our LED configuration is designed for thermal comfort." />
          <FAQItem q="What if it doesn't work for me?" a="We offer a 100-day money-back guarantee. Full refund, no restocking fees, no video proof required, no hassle." />
          <FAQItem q="How long does the mask last?" a="The LEDs are rated for 50,000+ hours — that's over 13 years of daily 10-minute sessions." />
          <FAQItem q="Do I need an app?" a="No. One button, one mode, 10-minute auto-shutoff. No app, no Bluetooth, no unnecessary complexity." />
          <FAQItem q="What's the difference between the three bundles?" a="Essential ($249) — the mask and carrying pouch. Complete Ritual ($329) — adds Collagen Renewal Serum and a premium case. Ultimate Glow ($449) — adds hyaluronic prep mist, eye contour attachment, and priority support. Most customers choose Complete Ritual." />
        </div>
      </section>

      {/* Trust */}
      <section style={s.sectionGreen}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={s.h2}>Your Purchase Is Protected</h2>
          <div style={s.grid4}>
            {['100-Day Money-Back Guarantee', 'Free US Shipping', 'Secure 256-bit SSL Checkout', 'USB-C Rechargeable', '50,000+ Hour LED Life'].map((badge, i) => (
              <div key={i} style={{ ...s.card, padding: '20px', textAlign: 'center' }}>
                <p style={{ fontWeight: 600, fontSize: '14px' }}>{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ ...s.section, background: 'linear-gradient(180deg, #FFF8F0 0%, #fff 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={s.h2}>Start Your 10-Minute Glow Ritual Tonight</h2>
          <p style={{ ...s.subtitle, margin: '0 auto 24px' }}>Join 15,000+ women who replaced their most expensive serums with 10 minutes of light.</p>
          <p style={{ fontWeight: 600, marginBottom: '24px', color: '#B76E79' }}>Use code SECRET25 at checkout for 25% off any bundle.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CHECKOUT.essential} style={s.cta}>Shop LuxeBeam — From $249</a>
            <a href={CHECKOUT.complete} style={s.ctaAccent}>Get the Complete Ritual — $329</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', color: '#999', textAlign: 'center', padding: '32px 20px', fontSize: '13px' }}>
        <p>© 2026 Little Miss Mineral. All rights reserved.</p>
        <p style={{ marginTop: '8px' }}>These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
      </footer>
    </>
  )
}
