import Link from 'next/link';
import { getAllPages } from '../../lib/content';

export const metadata = { title: 'All Guides | Affiliate Content Hub', description: 'Browse all product reviews and buying guides.' };

export default function AllGuidesPage() {
  const blocked = [
    'ai-writing-tools-faq',
    'best-ai-copywriting-tools',
    'best-ai-grammar-checkers',
    'best-ai-paraphrasing-tools',
    'best-ai-research-assistants-writers',
    'best-ai-summarizer-tools',
    'best-ai-tools-for-blog-writing',
    'best-ai-tools-for-email-copy',
    'best-ai-tools-for-seo-content',
    'best-ai-tools-social-media-captions',
    'best-ai-writing-tools-2026',
    'chatgpt-vs-claude-writing',
    'how-to-choose-ai-writing-tool',
    'copy-ai-review',
    'frase-review',
    'jasper-review',
    'notion-ai-review',
    'rytr-review',
    'surfer-seo-review',
    'writesonic-review',
  ];

  const allowed = new Set([
    'easter-basket-fillers-amazon',
    'dry-shampoo-best-amazon',
    'best-workout-sets-women-amazon',
    'best-sandals-women-amazon',
    'best-vacuum-cleaners-home-amazon',
    'needoh-nice-cube-worth-it',
    'best-fidget-toys-like-needoh',
    'best-boneless-couch-amazon',
    'best-dresses-for-women-amazon',
    'best-mothers-day-gifts-amazon',
    'best-sunscreen-amazon',
    'best-graduation-gifts-amazon',
    'best-outdoor-furniture-amazon',
    'best-water-bottles-amazon',
    'best-standing-desk-solopreneurs',
    'desk-setup-under-500-solopreneurs',
    'best-ergonomic-chair-under-500-solopreneurs',
    'monitor-arm-vs-monitor-riser-solopreneurs',
    'best-cable-management-kits-desk',
    'monitor-light-bar-vs-desk-lamp-eye-strain',
    'best-vertical-mouse-solopreneurs',
    'desk-setup-under-1000-solopreneurs',
    'best-desk-accessories-actually-useful',
    'walking-pad-standing-desk-worth-it',
  ]);

  const pages = getAllPages()
    .filter((p) => p.slug && p.title)
    .filter((p) => allowed.has(p.slug))
    .sort((a, b) => a.title.localeCompare(b.title));
  return (
    <main className="wrap">
      <h1>All Guides</h1>
      <p className="muted">Browse every review and buying guide in one place.</p>
      <div className="grid">
        {pages.map((p) => (
          <Link key={p.slug} className="card" href={`/pages/${p.slug}`}>
            <h3>{p.title}</h3>
            <p>{p.meta_description || p.primary_keyword || 'Product review and buying guide.'}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
