export const metadata = {
  title: 'Privacy Policy | Affiliate Content Hub',
  description: 'How Affiliate Content Hub handles analytics, affiliate links, and visitor data.',
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <article className="container">
        <h1>Privacy Policy</h1>
        <p>We collect limited analytics data to improve this site. We do not sell personal data.</p>

        <h2>What we collect</h2>
        <ul>
          <li>Basic usage analytics (pages viewed, device type, referral source)</li>
          <li>Click activity on outbound links (including affiliate links)</li>
        </ul>

        <h2>Affiliate links and ads</h2>
        <p>
          Some outbound links are affiliate links (including Amazon). If you purchase through these links,
          we may earn a commission at no extra cost to you.
        </p>
        <p>
          We may display ads through Google AdSense, which can use cookies to serve relevant ads according
          to Google policies.
        </p>

        <h2>Third-party services</h2>
        <p>
          Third-party providers (for example, Amazon and Google) may collect data according to their own
          privacy policies when you interact with their services.
        </p>

        <h2>Your choices</h2>
        <p>
          You can manage cookies via your browser settings and use ad personalization controls provided by
          Google.
        </p>
      </article>
    </main>
  );
}
