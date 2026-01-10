import Link from "next/link";
import { notFound } from "next/navigation";

// Project case study data with verified information
const projectCaseStudies: Record<string, {
  title: string;
  tagline: string;
  problem: string;
  approach: string[];
  outcome: string[];
  techStack: { name: string; category: string }[];
  links: { label: string; url: string; type: "github" | "live" | "docs" }[];
  tags: string[];
  stats?: { stars?: number; forks?: number };
}> = {
  "solana-chatgpt-kit": {
    title: "Solana ChatGPT Kit",
    tagline: "World's first ChatGPT app with native Solana wallet integration",
    problem: "Blockchain interactions typically require navigating multiple platforms, managing private keys, and understanding complex interfaces. Users wanting to perform simple operations like swapping tokens or checking balances had to leave their AI assistant context and use separate wallet applications or DEX interfaces.",
    approach: [
      "Designed a ChatGPT integration that enables native Solana wallet connections without exposing private keys",
      "Implemented the x402 payment protocol for secure, low-cost API transactions ($0.001 USDC fees)",
      "Built interactive widgets that render directly within ChatGPT for seamless user experience",
      "Integrated Jupiter Exchange for token swaps with real-time price quotes",
      "Added support for Solana Name Service (.sol) and AllDomains TLDs for human-readable addresses",
    ],
    outcome: [
      "First x402 protocol integration on Solana mainnet",
      "24+ GitHub stars and 8 forks demonstrating community adoption",
      "Shipped in under a weekend as a hackathon project",
      "Currently used by 2 live applications including VibeyAI",
      "Added to Solana Foundation Template Marketplace",
      "Enables swaps, transfers, staking, and token lookups through natural language",
    ],
    techStack: [
      { name: "Next.js 15", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Solana Web3.js", category: "Blockchain" },
      { name: "SPL Token", category: "Blockchain" },
      { name: "Jupiter Aggregator", category: "DeFi" },
      { name: "OpenAI Apps SDK", category: "AI" },
      { name: "Model Context Protocol", category: "AI" },
      { name: "Bonfida SNS", category: "Identity" },
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/The-x-35/solana-chatgpt-kit", type: "github" },
    ],
    tags: ["Solana", "AI Agents", "x402 Protocol", "ChatGPT", "DeFi"],
    stats: { stars: 24, forks: 8 },
  },
  "vibegame": {
    title: "Vibe Game Fun",
    tagline: "No-code game builder and launchpad on Solana",
    problem: "Creating and monetizing games traditionally requires extensive development knowledge and resources. The barrier to entry for game creators is high, and integrating blockchain tokenization adds another layer of complexity that most creators cannot navigate.",
    approach: [
      "Built a drag-and-drop game builder interface requiring zero coding knowledge",
      "Integrated Solana blockchain for native tokenization of games",
      "Created a launchpad system inspired by pump.fun for viral game distribution",
      "Developed community templates to help users get started quickly",
      "Implemented Privy wallet integration for seamless onboarding",
      "Added x402 protocol support for AI features through VibeyAI agent",
    ],
    outcome: [
      "Shipped 6+ products currently in maintenance mode",
      "Presented at OnlyDevs event covering virality and tokenization",
      "Presented at Shipyard Popup showcasing the platform",
      "Democratized game creation with onchain ownership",
      "Part of Send Arcade Fun ecosystem",
      "Associated with Send Arcade Pte Ltd",
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Solana Web3.js", category: "Blockchain" },
      { name: "Privy", category: "Wallet" },
      { name: "Tailwind CSS", category: "Styling" },
    ],
    links: [
      { label: "Live Platform", url: "https://vibegame.fun", type: "live" },
      { label: "GitHub Repository", url: "https://github.com/The-x-35/vibegame", type: "github" },
    ],
    tags: ["Solana Gaming", "No-Code", "Tokenization", "Launchpad"],
  },
  "solana-agent-kit": {
    title: "Solana Agent Kit Contributions",
    tagline: "AI-powered onchain interactions for Telegram bots",
    problem: "AI agents needed a standardized way to interact with Solana blockchain protocols. Developers building AI-powered applications lacked tools to connect their agents to onchain actions like transfers, swaps, and gaming mechanics.",
    approach: [
      "Contributed to SendAI's official Solana Agent Kit repository",
      "Built Telegram bots that enable arcade agents to perform onchain tasks",
      "Implemented rock-paper-scissors game with SOL betting mechanics",
      "Created educational content including 60-second Replit guide for AI agents",
      "Expanded kit utility with practical gaming use cases",
    ],
    outcome: [
      "Contributed to a repository with 1.6k+ stars and 823+ forks",
      "Enabled real-time onchain interactions through Telegram",
      "Combined Solana blockchain with AI for practical applications",
      "Part of SendArcade organization's open-source ecosystem",
      "Tutorial content helps onboard new developers",
    ],
    techStack: [
      { name: "TypeScript", category: "Language" },
      { name: "Solana Web3.js", category: "Blockchain" },
      { name: "Telegram Bot API", category: "Platform" },
      { name: "AI/ML", category: "AI" },
    ],
    links: [
      { label: "Solana Agent Kit", url: "https://github.com/sendaifun/solana-agent-kit", type: "github" },
    ],
    tags: ["Solana", "AI", "Telegram Bots", "Onchain Actions", "Gaming"],
    stats: { stars: 1600, forks: 823 },
  },
  "rps-solana-blinks": {
    title: "Rock Paper Scissors Blinks",
    tagline: "Solana blockchain betting game using Dialect Blinks",
    problem: "Traditional betting games require complex smart contract deployments and user interfaces. Dialect Blinks offered a new paradigm for shareable, interactive blockchain actions, but lacked engaging gaming use cases that could demonstrate the technology's potential.",
    approach: [
      "Developed a Rock Paper Scissors game leveraging Dialect Blinks infrastructure",
      "Implemented SOL betting mechanics with secure escrow",
      "Created shareable game links that work across social platforms",
      "Built on Solana for fast, low-cost transactions",
      "Designed for viral distribution through blink sharing",
    ],
    outcome: [
      "Demonstrated Dialect Blinks gaming capabilities",
      "Part of Send Arcade's tokenized gaming ecosystem",
      "Learned from mentors in the Solana community",
      "Shipped viral, interactive Solana features",
      "Open-source contribution to the ecosystem",
    ],
    techStack: [
      { name: "Solana Blinks", category: "Blockchain" },
      { name: "Dialect SDK", category: "Infrastructure" },
      { name: "TypeScript", category: "Language" },
      { name: "Solana Web3.js", category: "Blockchain" },
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/The-x-35/rps-solana-blinks", type: "github" },
    ],
    tags: ["Solana Blinks", "Gaming", "Betting", "Dialect"],
  },
  "tab-locker-room": {
    title: "Tab Locker Room",
    tagline: "Chrome extension for password-protected browser tabs",
    problem: "Browser users often need to step away from their computers or share screens while having sensitive tabs open. Existing solutions either close tabs entirely or require complex window management, disrupting workflow and potentially losing important session data.",
    approach: [
      "Developed a Chrome extension that enables per-tab password protection",
      "Implemented secure local storage for password hashing",
      "Created intuitive UI for locking and unlocking tabs",
      "Built lightweight solution with minimal performance impact",
      "Focused on user privacy with no external data transmission",
    ],
    outcome: [
      "3 GitHub stars showing community interest",
      "3 forks indicating developer adoption",
      "Provides privacy enhancement without session disruption",
      "Developed during IIT Bombay's FOSSx Summer of Code",
      "Open-source contribution to browser security tools",
    ],
    techStack: [
      { name: "JavaScript", category: "Language" },
      { name: "Chrome Extension API", category: "Platform" },
      { name: "HTML/CSS", category: "Frontend" },
      { name: "Local Storage", category: "Storage" },
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/The-x-35/tab-locker-room", type: "github" },
    ],
    tags: ["Chrome Extension", "Privacy", "Security", "JavaScript"],
    stats: { stars: 3, forks: 3 },
  },
};

// Icon components
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ForkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="18" r="3"/>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="18" cy="6" r="3"/>
    <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/>
    <path d="M12 12v3"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#14f195]">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export function generateStaticParams() {
  return Object.keys(projectCaseStudies).map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const project = projectCaseStudies[id];
    if (!project) {
      return { title: "Project Not Found" };
    }
    return {
      title: `${project.title} | Arpit Singh Bhatia`,
      description: project.tagline,
    };
  });
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectCaseStudies[id];

  if (!project) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    Frontend: "tag",
    Language: "tag-purple",
    Styling: "tag-cyan",
    Blockchain: "tag",
    DeFi: "tag-purple",
    AI: "tag-cyan",
    Identity: "tag",
    Platform: "tag-purple",
    Wallet: "tag-cyan",
    Infrastructure: "tag",
    Storage: "tag-purple",
  };

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030303]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold tracking-tight hover:text-[#9eff00] transition-colors">
            ASB
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/#projects" className="text-sm text-[#a1a1a1] hover:text-white transition-colors">
              All Projects
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative pt-24 pb-20">
        {/* Background effects */}
        <div className="orb orb-1" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />

        <article className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#a1a1a1] hover:text-[#9eff00] transition-colors mb-12 group"
          >
            <ArrowLeftIcon />
            <span className="group-hover:underline">Back to Projects</span>
          </Link>

          {/* Header */}
          <header className="mb-16">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-[#a1a1a1]">{project.tagline}</p>

            {/* Stats & Links */}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {project.stats && (
                <div className="flex items-center gap-4 text-sm text-[#666666]">
                  {project.stats.stars && (
                    <span className="flex items-center gap-1">
                      <StarIcon />
                      {project.stats.stars >= 1000
                        ? `${(project.stats.stars / 1000).toFixed(1)}k`
                        : project.stats.stars} stars
                    </span>
                  )}
                  {project.stats.forks && (
                    <span className="flex items-center gap-1">
                      <ForkIcon />
                      {project.stats.forks} forks
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-${link.type === "live" ? "primary" : "secondary"} text-sm py-2 px-4`}
                  >
                    {link.type === "github" ? <GithubIcon /> : <ExternalLinkIcon />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </header>

          {/* Image placeholder */}
          <div className="image-placeholder h-80 mb-16 flex items-center justify-center">
            <span className="text-[#666666] text-lg font-display font-medium">
              {project.title}
            </span>
          </div>

          {/* Problem */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#ff2d92]/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ff2d92]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold">The Problem</h2>
            </div>
            <p className="text-[#a1a1a1] text-lg leading-relaxed">{project.problem}</p>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#9945ff]">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold">The Approach</h2>
            </div>
            <ul className="space-y-4">
              {project.approach.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <span className="text-[#a1a1a1] text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#14f195]/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#14f195]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold">The Outcome</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.outcome.map((item, index) => (
                <div key={index} className="card p-4 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#9eff00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#9eff00] text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-[#a1a1a1]">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#9eff00]/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#9eff00]">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`tag ${categoryColors[tech.category] || "tag"}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="card p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              Interested in this project?
            </h3>
            <p className="text-[#a1a1a1] mb-6">
              Check out the code, star the repository, or reach out to discuss potential collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-${link.type === "live" ? "primary" : "secondary"}`}
                >
                  {link.type === "github" ? <GithubIcon /> : <ExternalLinkIcon />}
                  {link.label}
                </a>
              ))}
              <Link href="/#contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#666666]">
            &copy; {new Date().getFullYear()} Arpit Singh Bhatia. All rights reserved.
          </div>
          <Link href="/" className="text-sm text-[#a1a1a1] hover:text-[#9eff00] transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </>
  );
}
