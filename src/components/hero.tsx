export function Hero() {
  return (
    <header className="reveal pt-20 pb-24 border-b border-rule" style={{ '--i': 0 } as React.CSSProperties}>
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
        <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
        Portfolio · 2025 Edition
      </p>
      <h1 className="font-display text-[clamp(4rem,12vw,8rem)] font-light leading-none tracking-tighter text-ink">
        200k+
      </h1>
      <p className="text-lg font-normal mt-4 text-ink max-w-[45ch]">
        rows of equipment data unified across 71 factories. Months of manual work, collapsed into hours.
      </p>
      <p className="mt-6 text-sm text-muted max-w-[50ch]">
        Frontend specialist. Fullstack when needed. Also ships paperless platforms, AI workspaces, and the occasional Telegram bot.
      </p>
      <a
        href="#contact"
        className="inline-block mt-8 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        Get in touch →
      </a>
    </header>
  )
}
