import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-[var(--primary)] text-[#04140a] hover:bg-[var(--primary-hover)] shadow-[0_0_24px_var(--glow)]',
  secondary:
    'bg-transparent border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]',
  ghost:
    'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)]',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  download,
  ariaLabel,
  target,
  rel,
  disableMotion = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${variants[variant]} ${className}`

  const motionProps = disableMotion
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        transition: { type: 'spring', stiffness: 400, damping: 22 },
      }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
