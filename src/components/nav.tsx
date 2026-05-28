export function Nav() {
  return (
    <nav className="flex items-center justify-between px-[clamp(1.5rem,5vw,3rem)] py-6">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        / fahruraji
      </span>
      <a
        href="mailto:fahrurrozy4214@gmail.com"
        className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        Say hello →
      </a>
    </nav>
  )
}
