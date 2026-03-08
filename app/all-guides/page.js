import Link from 'next/link';
import { getAllPages } from '../../lib/content';

export const metadata = { title: 'All Guides | Affiliate Content Hub', description: 'Browse all product reviews and buying guides.' };

export default function AllGuidesPage() {
  const pages = getAllPages().filter((p) => p.slug && p.title).sort((a, b) => a.title.localeCompare(b.title));
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
