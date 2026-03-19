import Link from 'next/link';

export const metadata = {
  title: 'Reviews — Orko Labs',
  description:
    'Explore buyer-focused product reviews and practical comparison guides on reviews.orkolabs.com.',
  alternates: {
    canonical: '/reviews',
  },
};

export default function ReviewsPage() {
  return (
    <main className="wrap">
      <h1>Reviews</h1>
      <p className="muted">
        Our in-depth, buyer-focused product reviews and comparison guides are now published on the dedicated reviews site.
      </p>
      <div className="notice">
        Visit <a href="https://reviews.orkolabs.com">reviews.orkolabs.com</a> for latest guides, pros/cons,
        budget tiers, and recommendation breakdowns.
      </div>
      <p>
        <Link href="/">← Back to Orko Labs projects</Link>
      </p>
    </main>
  );
}
