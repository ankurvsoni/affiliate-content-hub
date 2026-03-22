// Reviews homepage — served on reviews.orkolabs.com (NEXT_PUBLIC_SITE === 'reviews')
import Link from 'next/link';

const featuredGuides = [
  { slug: 'best-mothers-day-gifts-amazon', title: "Best Mother's Day Gifts on Amazon", desc: 'Practical picks by budget and personality that actually land.' },
  { slug: 'easter-basket-fillers-amazon', title: 'Best Easter Basket Fillers on Amazon', desc: 'Age-based picks that avoid novelty clutter and low-value bundles.' },
  { slug: 'best-graduation-gifts-amazon', title: 'Best Graduation Gifts on Amazon', desc: "Practical picks they'll actually use, by budget and life stage." },
  { slug: 'best-sunscreen-amazon', title: 'Best Sunscreen on Amazon', desc: 'Face, body, and sport picks with SPF and formula breakdowns.' },
  { slug: 'best-water-bottles-amazon', title: 'Best Water Bottles on Amazon', desc: 'Insulated, sport, and everyday picks by use case.' },
  { slug: 'best-outdoor-furniture-amazon', title: 'Best Outdoor Furniture on Amazon', desc: 'Patio, balcony, and small space picks with durability tradeoffs.' },
  { slug: 'dry-shampoo-best-amazon', title: 'Best Dry Shampoo on Amazon', desc: 'Hair-type breakdown with residue and scent tradeoffs.' },
];

const deskSetupGuides = [
  'best-standing-desk-solopreneurs',
  'desk-setup-under-500-solopreneurs',
  'best-ergonomic-chair-under-500-solopreneurs',
  'monitor-arm-vs-monitor-riser-solopreneurs',
  'best-cable-management-kits-desk',
  'monitor-light-bar-vs-desk-lamp-eye-strain',
];

export default function ReviewsHomePage() {
  return (
    <main className="wrap">
      <div className="top">
        <div className="badge">Affiliate Content Hub</div>
        <div className="badge">reviews.orkolabs.com</div>
      </div>
      <section className="hero">
        <h1>Product Reviews & Buying Guides</h1>
        <p>Practical affiliate content focused on real tradeoffs, budget tiers, and clear recommendations for buyers.</p>
        <p style={{ marginTop: 10 }}><Link href="/all-guides"><strong>Browse all guides →</strong></Link></p>
      </section>
      <section>
        <h2 className="section-title">Trending Now</h2>
        <div className="grid">
          {featuredGuides.map((g) => (
            <Link key={g.slug} className="card" href={`/pages/${g.slug}`}>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">Desk Setup Cluster</h2>
        <p className="muted">Our original evergreen cluster is still live and updated.</p>
        <div className="grid">
          {deskSetupGuides.map((slug) => (
            <Link key={slug} className="card" href={`/pages/${slug}`}>
              <h3>{slug.replace(/-/g, ' ')}</h3>
              <p>Buyer-focused comparisons and practical setup tradeoffs.</p>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title">Editorial Promise</h2>
        <div className="notice">We include clear pros/cons, "who should skip this," common mistakes, and budget recommendations in every guide.</div>
      </section>
      <footer>
        Affiliate disclosure in every post · <Link href="/editorial-policy">Editorial policy</Link> · <Link href="/disclosure">Disclosure</Link> · <Link href="/all-guides">All Guides</Link>
      </footer>
    </main>
  );
}
