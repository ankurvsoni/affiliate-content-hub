export const metadata = {
  title: 'Contact | Affiliate Content Hub',
  description: 'Contact us for corrections, updates, or partnership questions.',
};

export default function ContactPage() {
  return (
    <main className="page">
      <article className="container">
        <h1>Contact</h1>
        <p>If you spot an error, outdated recommendation, or broken link, please contact us.</p>
        <p>
          Email: <a href="mailto:hello@orkolabs.com">hello@orkolabs.com</a>
        </p>
        <p>
          We review correction requests and link issues quickly and prioritize updates that affect buyer
          decisions.
        </p>
      </article>
    </main>
  );
}
