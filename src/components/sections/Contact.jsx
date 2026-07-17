import { useState } from 'react'
import { Send } from 'lucide-react'
import Reveal from '@/components/effects/Reveal'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { SITE, contact } from '@/data/content'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--secondary)] focus:border-[var(--primary)]'

  return (
    <section id="contato" className="section-padding bg-[var(--background)]" aria-labelledby="contact-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="contact-title">{t(contact.title)}</span>}
          subtitle={t(contact.subtitle)}
        />

        <div className="mx-auto max-w-xl">
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-soft)]"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-[var(--muted)]">
                  {t(contact.name)}
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className={`${fieldClass} mt-2`}
                    placeholder={t(contact.placeholders.name)}
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm text-[var(--muted)]">
                  {t(contact.email)}
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={`${fieldClass} mt-2`}
                    placeholder={t(contact.placeholders.email)}
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-[var(--muted)]">
                {t(contact.message)}
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className={`${fieldClass} mt-2 resize-y`}
                  placeholder={t(contact.placeholders.message)}
                />
              </label>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Button type="submit">
                  <Send size={16} aria-hidden="true" />
                  {t(contact.send)}
                </Button>
                {sent ? (
                  <p className="text-sm text-[var(--primary)]" role="status">
                    {t(contact.success)}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
