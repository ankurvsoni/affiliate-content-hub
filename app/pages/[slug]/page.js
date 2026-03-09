import Link from 'next/link';
import { getAllPages, getPageBySlug } from '@/lib/content';
import { getAffiliateUrlForSlug } from '@/lib/affiliates';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPages().map((p) => ({ slug: p.slug }));
}

export default async function ContentPage({ params }) {
  const page = getPageBySlug(params.slug);
  if (!page) return notFound();

  const anchoredHtml = page.html
    .replace('<h2>Top picks (live snapshot)</h2>', '<h2 id="top-picks">Top picks (live snapshot)</h2>')
    .replace('<h2>Comparison table</h2>', '<h2 id="comparison-table">Comparison table</h2>')
    .replace('<h2>Who should skip this</h2>', '<h2 id="who-should-skip-this">Who should skip this</h2>')
    .replace('<h2>FAQ</h2>', '<h2 id="faq">FAQ</h2>');

  const productMatch = page.html.match(/https:\/\/www\.amazon\.com\/[^"']*?tag=[^"'\s<)]+/i);
  const hasAmazonLinks = Boolean(productMatch);
  const ctaUrl = productMatch?.[0] || getAffiliateUrlForSlug(page.slug);

  return (
    <main className="page">
      <article className="article">
        <h1>{page.title}</h1>

        {hasAmazonLinks && (
          <div className="notice">
            Editorial note: We focus on real workflow fit and clear tradeoffs. As an Amazon Associate I earn from qualifying purchases.
          </div>
        )}

        <div className="content" dangerouslySetInnerHTML={{ __html: anchoredHtml }} />

        {hasAmazonLinks && (
          <div className="disclosure"><strong>Affiliate disclosure:</strong> Some links on this page may be affiliate links.</div>
        )}

        {hasAmazonLinks && (
          <section className="cta">
            <strong>Quick next step</strong>
            <p>Open your top 2 options side-by-side, compare recent reviews and return policy, and pick the one with fewer recurring complaints.</p>
            <a className="btn" href={ctaUrl} target="_blank" rel="nofollow sponsored noopener"><span aria-hidden="true">🛒</span> Check on Amazon</a>
          </section>
        )}
      </article>
    </main>
  );
}
