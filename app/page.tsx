import Link from "next/link";

// Verified project data from GitHub and web scraping
const projects = [
  {
    id: "solana-chatgpt-kit",
    title: "Solana ChatGPT Kit",
    description: "World's first ChatGPT app with native Solana wallet integration. Perform blockchain operations through natural language without leaving the conversation.",
    tags: ["Solana", "AI Agents", "x402 Protocol", "ChatGPT"],
    stats: { stars: 24, forks: 8 },
    links: {
      github: "https://github.com/The-x-35/solana-chatgpt-kit",
    },
    tagStyle: "default",
  },
  {
    id: "vibegame",
    title: "Vibe Game Fun",
    description: "No-code game builder and launchpad on Solana. Users drag-and-drop to deploy and tokenize games with pump.fun x TikTok style virality.",
    tags: ["Solana Gaming", "No-Code Builder", "Tokenization", "Launchpad"],
    links: {
      live: "https://vibegame.fun",
      github: "https://github.com/The-x-35/vibegame",
    },
    tagStyle: "purple",
  },
  {
    id: "solana-agent-kit",
    title: "Solana Agent Kit Contributions",
    description: "Contributed to SendAI's Solana Agent Kit expanding its utility. Built Telegram bots for arcade agents performing onchain tasks like rock-paper-scissors with SOL bets.",
    tags: ["Solana", "AI", "Telegram Bots", "Onchain Actions"],
    stats: { stars: 1600, forks: 823 },
    links: {
      github: "https://github.com/sendaifun/solana-agent-kit",
    },
    tagStyle: "cyan",
  },
  {
    id: "rps-solana-blinks",
    title: "Rock Paper Scissors Blinks",
    description: "Solana blockchain betting application for Rock Paper Scissors using Dialect Blinks. Fun, tokenized gaming experiences on Solana.",
    tags: ["Solana Blinks", "Gaming", "Betting", "Dialect"],
    links: {
      github: "https://github.com/The-x-35/rps-solana-blinks",
    },
    tagStyle: "default",
  },
  {
    id: "tab-locker-room",
    title: "Tab Locker Room",
    description: "Chrome extension enabling password-protected tabs for enhanced browser privacy. Secure your sensitive tabs with a simple lock mechanism.",
    tags: ["Chrome Extension", "Privacy", "Security", "JavaScript"],
    stats: { stars: 3, forks: 3 },
    links: {
      github: "https://github.com/The-x-35/tab-locker-room",
    },
    tagStyle: "purple",
  },
];

const achievements = [
  {
    title: "Superteam India Member",
    description: "Active member of Superteam India, contributing to the Solana ecosystem through development and community building.",
    tags: ["Community", "Solana Ecosystem", "Networking"],
    icon: "trophy",
  },
  {
    title: "Solana Foundation Contributor",
    description: "First contribution to SolanaFndn: Added Solana ChatGPT Kit to Template Marketplace. Enabled x402-powered AI agents on mainnet.",
    tags: ["Open-Source", "Infrastructure", "AI x Blockchain"],
    icon: "code",
  },
  {
    title: "SendArcade Organization Member",
    description: "Part of SendArcade organization, contributing to gaming and AI products in the Solana ecosystem.",
    tags: ["Gaming", "AI", "Organization"],
    icon: "game",
  },
  {
    title: "GitHub Achievements",
    description: "Earned Starstruck and Pull Shark badges for significant open-source contributions and repository impact.",
    tags: ["Open Source", "Recognition", "GitHub"],
    icon: "star",
  },
];

// Icon components
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
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

const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <polyline points="19 12 12 19 5 12"/>
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2 15h-4v-1h4v1zm1.85-5.39l-.85.6V14h-4v-1.79l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.79 3.13-2.15 4.11z"/>
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const GameIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const StarBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const getAchievementIcon = (icon: string) => {
  switch (icon) {
    case "trophy": return <TrophyIcon />;
    case "code": return <CodeIcon />;
    case "game": return <GameIcon />;
    case "star": return <StarBadgeIcon />;
    default: return <TrophyIcon />;
  }
};

export default function Home() {
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
            <a href="#about" className="text-sm text-[#a1a1a1] hover:text-white transition-colors hidden sm:block">About</a>
            <a href="#projects" className="text-sm text-[#a1a1a1] hover:text-white transition-colors hidden sm:block">Projects</a>
            <a href="#achievements" className="text-sm text-[#a1a1a1] hover:text-white transition-colors hidden sm:block">Achievements</a>
            <a href="#contact" className="btn-primary text-xs py-2 px-4">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background orbs */}
          <div className="orb orb-1" aria-hidden="true" />
          <div className="orb orb-2" aria-hidden="true" />
          <div className="grid-bg" aria-hidden="true" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#14f195] animate-pulse" />
                <span className="text-sm text-[#a1a1a1]">Available for Web3 projects</span>
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up stagger-1">
              Arpit Singh<br />
              <span className="gradient-text-animated">Bhatia</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#a1a1a1] max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2 font-light">
              Blockchain Developer & Solana Ecosystem Builder
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up stagger-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDownIcon />
              </a>
              <a href="https://github.com/The-x-35" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <GithubIcon />
                GitHub
              </a>
            </div>

            {/* Stats bar */}
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up stagger-4">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-[#9eff00]">44+</div>
                <div className="text-sm text-[#666666] mt-1">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-[#14f195]">67</div>
                <div className="text-sm text-[#666666] mt-1">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-[#9945ff]">19</div>
                <div className="text-sm text-[#666666] mt-1">Stars Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-[#ff2d92]">Pro</div>
                <div className="text-sm text-[#666666] mt-1">GitHub Status</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDownIcon />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section relative">
          <div className="orb orb-3" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="tag mb-6">About Me</span>
                <h2 className="section-title mt-4">
                  Building the future of<br />
                  <span className="gradient-text">decentralized finance</span>
                </h2>
                <div className="space-y-6 text-[#a1a1a1] text-lg leading-relaxed">
                  <p>
                    Computer Science and Engineering undergraduate at IIIT Una (Class of 2027), with a strong passion for
                    cybersecurity, web development, and blockchain technology.
                  </p>
                  <p>
                    As a developer at AviciMoney, I focus on building onchain financial tools and applications.
                    Previously contributed to Send Arcade Fun and Vibe Game Fun, shipping multiple products in the
                    Solana gaming and AI space.
                  </p>
                  <p>
                    Active member of Superteam India and part of the SendArcade organization,
                    contributing to gaming and AI products in the Solana ecosystem.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card p-6">
                  <div className="text-[#9eff00] mb-3">
                    <CodeIcon />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Blockchain Dev</h3>
                  <p className="text-sm text-[#666666]">Solana, Web3.js, SPL Tokens, Smart Contracts</p>
                </div>
                <div className="card p-6">
                  <div className="text-[#9945ff] mb-3">
                    <GameIcon />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Gaming</h3>
                  <p className="text-sm text-[#666666]">Tokenized games, No-code builders, Blinks</p>
                </div>
                <div className="card p-6">
                  <div className="text-[#14f195] mb-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">AI Agents</h3>
                  <p className="text-sm text-[#666666]">ChatGPT integration, Telegram bots, x402</p>
                </div>
                <div className="card p-6">
                  <div className="text-[#ff2d92] mb-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Security</h3>
                  <p className="text-sm text-[#666666]">Cybersecurity, Privacy tools, Browser extensions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section relative">
          <div className="grid-bg" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="tag-purple tag mb-6">Projects</span>
              <h2 className="section-title mt-4">
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Open-source tools and applications building the future of decentralized technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <article key={project.id} className={`card p-6 flex flex-col animate-fade-in-up stagger-${index + 1}`}>
                  {/* Image placeholder */}
                  <div className="image-placeholder mb-6 flex items-center justify-center">
                    <span className="text-[#666666] text-sm font-medium">
                      {project.title}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
                  <p className="text-[#a1a1a1] text-sm mb-4 flex-grow">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`tag text-xs ${
                          project.tagStyle === "purple" ? "tag-purple" :
                          project.tagStyle === "cyan" ? "tag-cyan" : ""
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-[#666666]">
                      <span className="flex items-center gap-1">
                        <StarIcon />
                        {project.stats.stars >= 1000 ? `${(project.stats.stars / 1000).toFixed(1)}k` : project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <ForkIcon />
                        {project.stats.forks}
                      </span>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#9eff00] transition-colors"
                      >
                        <GithubIcon />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#14f195] transition-colors"
                      >
                        <ExternalLinkIcon />
                        Live
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#9945ff] transition-colors ml-auto"
                    >
                      Case Study
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section relative">
          <div className="orb orb-2" style={{ top: '20%', left: '60%' }} aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="tag-cyan tag mb-6">Achievements</span>
              <h2 className="section-title mt-4">
                Recognition & <span className="gradient-text">Milestones</span>
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Key accomplishments in the blockchain and open-source community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <article key={achievement.title} className={`card p-8 animate-fade-in-up stagger-${index + 1}`}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9945ff]/20 to-[#14f195]/20 flex items-center justify-center text-[#9eff00]">
                      {getAchievementIcon(achievement.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-2">{achievement.title}</h3>
                      <p className="text-[#a1a1a1] text-sm mb-4">{achievement.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tags.map((tag) => (
                          <span key={tag} className="tag text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section relative">
          <div className="grid-bg" aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="tag mb-6">Get in Touch</span>
            <h2 className="section-title mt-4 mb-6">
              Let&apos;s build something<br />
              <span className="gradient-text">amazing together</span>
            </h2>
            <p className="section-subtitle mx-auto mb-12">
              Open to collaborations, Web3 projects, and interesting conversations about blockchain technology.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://github.com/The-x-35"
                target="_blank"
                rel="noopener noreferrer"
                className="card px-8 py-6 flex items-center gap-4 hover:border-[#9eff00]/40 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#9eff00]/10 transition-colors">
                  <GithubIcon />
                </div>
                <div className="text-left">
                  <div className="font-display font-semibold">GitHub</div>
                  <div className="text-sm text-[#666666]">@The-x-35</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/arpit-singh-bhatia"
                target="_blank"
                rel="noopener noreferrer"
                className="card px-8 py-6 flex items-center gap-4 hover:border-[#0077b5]/40 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5]/20 transition-colors">
                  <LinkedInIcon />
                </div>
                <div className="text-left">
                  <div className="font-display font-semibold">LinkedIn</div>
                  <div className="text-sm text-[#666666]">arpit-singh-bhatia</div>
                </div>
              </a>

              <a
                href="https://twitter.com/Arpitx35"
                target="_blank"
                rel="noopener noreferrer"
                className="card px-8 py-6 flex items-center gap-4 hover:border-white/20 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <TwitterIcon />
                </div>
                <div className="text-left">
                  <div className="font-display font-semibold">X (Twitter)</div>
                  <div className="text-sm text-[#666666]">@Arpitx35</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#666666]">
              &copy; {new Date().getFullYear()} Arpit Singh Bhatia. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/The-x-35" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white transition-colors">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/arpit-singh-bhatia" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white transition-colors">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/Arpitx35" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
