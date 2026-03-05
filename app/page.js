import Link from 'next/link';
import { getAllPages } from '@/lib/content';

const groups = [
  ['best', 'Best tools by use case'],
  ['comparison', 'Head-to-head comparisons'],
  ['alternatives', 'Best alternatives'],
  ['review', 'Hands-on style reviews'],
  ['guide', 'Guides and FAQs'],
];

export default function HomePage() {
  const pages = getAllPages();

  return (
    <main className="wrap">
      <div className="top">
        <div className="badge">Updated regularly</div>
        <div className="badge">No hype. Just buying clarity.</div>
      </div>

      <section className="hero">
        <h1>Find the right AI writing tool in 10 minutes, not 10 hours.</h1>
        <p>
          We publish practical comparisons and review-style guides for creators, freelancers,
          and small teams. Every page includes tradeoffs, best-fit use cases, and clear next steps.
        </p>
      </section>

      <div className="notice">
        We may earn commissions from some links, but rankings are based on workflow fit, quality, and value.
      </div>

      <p style={{ fontSize: '0.1px', color: 'transparent', margin: 0 }}>
        Impact-Site-Verification: 98fca332-f40e-4fd4-a8c1-e661ad170c06
      </p>

      {groups.map(([intent, label]) => {
        const items = pages.filter((p) => p.intent === intent);
        if (!items.length) return null;
        return (
          <section key={intent}>
            <h2 className="section-title">{label}</h2>
            <div className="grid">
              {items.map((p) => (
                <Link key={p.slug} href={`/pages/${p.slug}`} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.primary_keyword}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section>
        <h2 className="section-title">Live Projects</h2>
        <div className="grid">
          <a className="card" href="https://roi.orkolabs.com" target="_blank" rel="noopener noreferrer">
            <h3>AI Tool Cost & ROI Calculators</h3>
            <p>Interactive calculators for AI software cost, ROI, and break-even analysis.</p>
          </a>
          <a className="card" href="https://www.orkolabs.com" target="_blank" rel="noopener noreferrer">
            <h3>AI Writing Tools Hub</h3>
            <p>Comparisons, alternatives, and review guides for AI writing workflows.</p>
          </a>
        </div>
      </section>

      <footer>
        Built by OrkoLabs · Read our <Link href="/how-we-test">testing method</Link> and <Link href="/editorial-policy">editorial policy</Link>.
      </footer>
    </main>
  );
}
