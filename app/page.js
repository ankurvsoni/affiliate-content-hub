import HubHomePage from './_hub-page';
import ReviewsHomePage from './_reviews-page';

export const metadata = {
  alternates: { canonical: '/' },
};

// NEXT_PUBLIC_SITE controls which homepage to render at build time:
//   'reviews' → reviews.orkolabs.com (affiliate-content-hub Vercel project)
//   unset     → www.orkolabs.com     (ai-writing-tools-hub Vercel project)
export default function HomePage() {
  return process.env.NEXT_PUBLIC_SITE === 'reviews'
    ? <ReviewsHomePage />
    : <HubHomePage />;
}
