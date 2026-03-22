import './globals.css';
import Link from 'next/link';

const isReviewsSite = process.env.NEXT_PUBLIC_SITE === 'reviews';

export const metadata = {
  metadataBase: new URL(isReviewsSite ? 'https://reviews.orkolabs.com' : 'https://www.orkolabs.com'),
  title: isReviewsSite
    ? 'Affiliate Content Hub — Product Reviews & Buying Guides'
    : 'Orko Labs — Reviews, ROI Calculators & Digital Tools',
  description: isReviewsSite
    ? 'Buyer-focused product reviews and comparison guides with clear tradeoffs, budget tiers, and affiliate disclosures.'
    : 'Practical digital products, calculators, and revenue-focused web assets from Orko Labs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1733768466473341"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <header className="siteHeader">
          <div className="wrap navRow">
            <Link href="/" className="brand">Orko Labs</Link>
            <nav className="topNav">
              {isReviewsSite ? <a href="https://www.orkolabs.com">All Projects</a> : <Link href="/">All Projects</Link>}
              <a href="https://reviews.orkolabs.com">Reviews</a>
              <Link href="/how-we-test">How we test</Link>
              <Link href="/editorial-policy">Editorial policy</Link>
              <Link href="/disclosure">Disclosure</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <div className="affiliateBar">
          As an Amazon Associate I earn from qualifying purchases. <Link href="/disclosure">Learn more</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
