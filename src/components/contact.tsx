import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="reveal py-20" style={{ '--i': 5 } as React.CSSProperties}>
      <p className="text-xs text-neutral mb-12 max-w-[45ch]">
        Also: milk enjoyer, former game modder, runs a Telegram bot 24/7 on a VPS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted pt-1">
          Get in touch
        </p>
        <div>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <a
              href="mailto:fahrurrozy4214@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <Mail size={14} />
              Email
            </a>
            <a
              href="https://github.com/fhrrrzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <Github size={14} />
              GitHub
              <ArrowUpRight size={10} />
            </a>
            <a
              href="https://linkedin.com/in/fhrrrzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <Linkedin size={14} />
              LinkedIn
              <ArrowUpRight size={10} />
            </a>
          </div>
          <p className="text-xs text-neutral max-w-[45ch]">
            Open to freelance and collaborations. Async preferred, WIB timezone, evenings and weekends. I like owning a clear scope end-to-end.
          </p>
        </div>
      </div>
    </section>
  )
}
