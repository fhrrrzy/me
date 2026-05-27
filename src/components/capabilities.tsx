export function Capabilities() {
  return (
    <section className="reveal py-20 border-b border-rule" style={{ '--i': 1 } as React.CSSProperties}>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted pt-1">
          What I do
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted">
            <span>Vue.js, React, Next.js, TypeScript</span>
            <span>Laravel, Inertia, REST APIs</span>
            <span>PostgreSQL, MySQL, Redis</span>
            <span>Docker, Linux, Cloudflare</span>
            <span>Python automation, Telegram bots</span>
            <span>Data pipelines, Excel validation</span>
          </div>
          <p className="mt-6 text-xs text-neutral max-w-[50ch]">
            If it's repetitive, I build a tool for it. If two systems need to talk, I write the bridge.
          </p>
        </div>
      </div>
    </section>
  )
}
