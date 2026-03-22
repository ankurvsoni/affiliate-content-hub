// Hub homepage — served on www.orkolabs.com (NEXT_PUBLIC_SITE !== 'reviews')

const projects = [
  {
    title: 'AI Tool ROI Calculators',
    href: 'https://roi.orkolabs.com',
    desc: 'Fast ROI and pricing calculators for common AI tool adoption decisions.',
  },
  {
    title: 'Invoice Recon',
    href: 'https://recon.orkolabs.com',
    desc: 'Invoice reconciliation workflow utility for cleaner monthly finance ops.',
  },
  {
    title: 'Affiliate Content Hub',
    href: 'https://reviews.orkolabs.com',
    desc: 'Buyer-focused product reviews with clear tradeoffs and budget tiers.',
  },
  {
    title: 'ABCD Cricket',
    href: 'https://cricket.orkolabs.com',
    desc: '2-player turn-based ABCD cricket game for quick local matches.',
  },
];

export default function HubHomePage() {
  return (
    <main className="wrap">
      <div className="top">
        <div className="badge">Orko Labs Projects</div>
      </div>
      <section className="hero">
        <h1>Orko Labs Projects</h1>
        <p>Practical digital products, calculators, and revenue-focused web assets.</p>
      </section>
      <section>
        <div className="grid">
          {projects.map((project) => (
            <a
              key={project.title}
              className="card"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
