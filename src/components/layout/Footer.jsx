import { Mail, MessageCircle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { useLanguage } from '@/contexts/LanguageContext'
import { SITE, footer } from '@/data/content'

const socials = [
  { href: SITE.socials.github, label: 'GitHub', icon: GitHubIcon },
  { href: SITE.socials.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
  { href: SITE.socials.whatsapp, label: 'WhatsApp', icon: MessageCircle },
  { href: SITE.socials.email, label: 'Email', icon: Mail },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold">
            {SITE.name}
            <span className="text-[var(--primary)]">.</span>
          </p>
          {/* <p className="mt-1 text-sm text-[var(--muted)]">
            © {year} {SITE.name}. {t(footer.rights)}
          </p> */}
          <p className="mt-1 text-xs text-[var(--muted)]">{t(footer.built)}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
