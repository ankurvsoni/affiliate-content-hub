import Link from 'next/link';

const featuredGuides = [
  { slug: 'easter-basket-fillers-amazon', title: 'Best Easter Basket Fillers on Amazon', desc: 'Age-based picks that avoid novelty clutter and low-value bundles.' },
  { slug: 'dry-shampoo-best-amazon', title: 'Best Dry Shampoo on Amazon', desc: 'Hair-type breakdown with residue and scent tradeoffs.' },
  { slug: 'best-workout-sets-women-amazon', title: 'Best Workout Sets for Women on Amazon', desc: 'Comfort, fabric quality, and fit consistency over hype.' },
  { slug: 'best-sandals-women-amazon', title: 'Best Women\'s Sandals on Amazon', desc: 'Walking comfort and support tradeoffs by use case.' },
  { slug: 'best-vacuum-cleaners-home-amazon', title: 'Best Vacuum Cleaners for Home on Amazon', desc: 'Choose by floor type, pet hair load, and storage reality.' },
  { slug: 'needoh-nice-cube-worth-it', title: 'NeeDoh Nice Cube: Is It Worth It?', desc: 'Trend review with quality and value tradeoffs.' },
  { slug: 'best-dresses-for-women-amazon', title: 'Best Dresses for Women on Amazon', desc: 'Occasion-based picks with fit and fabric checks.' },
];

const deskSetupGuides = [
  'best-standing-desk-solopreneurs','desk-setup-under-500-solopreneurs','best-ergonomic-chair-under-500-solopreneurs','monitor-arm-vs-monitor-riser-solopreneurs','best-cable-management-kits-desk','monitor-light-bar-vs-desk-lamp-eye-strain','best-vertical-mouse-solopreneurs','desk-setup-under-1000-solopreneurs','best-desk-accessories-actually-useful','walking-pad-standing-desk-worth-it',
];

export default function HomePage() {
  return (
    <main className="wrap">
      <div className="top"><div className="badge">Affiliate Content Hub</div><div className="badge">reviews.orkolabs.com</div></div>
      <section className="hero"><h1>Product Reviews & Buying Guides</h1><p>Practical affiliate content focused on real tradeoffs, budget tiers, and clear recommendations for buyers.</p><p style={{ marginTop: 10 }}><Link href="/all-guides"><strong>Browse all guides →</strong></Link></p></section>
      <section><h2 className="section-title">Trending Now</h2><div className="grid">{featuredGuides.map((g)=><Link key={g.slug} className="card" href={`/pages/${g.slug}`}><h3>{g.title}</h3><p>{g.desc}</p></Link>)}</div></section>
      <section><h2 className="section-title">Desk Setup Cluster</h2><p className="muted">Our original evergreen cluster is still live and updated.</p><div className="grid">{deskSetupGuides.slice(0,6).map((slug)=><Link key={slug} className="card" href={`/pages/${slug}`}><h3>{slug.replace(/-/g,' ')}</h3><p>Buyer-focused comparisons and practical setup tradeoffs.</p></Link>)}</div></section>
      <section><h2 className="section-title">Editorial Promise</h2><div className="notice">We include clear pros/cons, “who should skip this,” common mistakes, and budget recommendations in every guide.</div></section>
      <footer>Affiliate disclosure in every post · <Link href="/editorial-policy">Editorial policy</Link> · <Link href="/disclosure">Disclosure</Link> · <Link href="/all-guides">All Guides</Link></footer>
    </main>
  );
}
