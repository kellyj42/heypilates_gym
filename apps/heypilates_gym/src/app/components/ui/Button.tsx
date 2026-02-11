import Link from "next/link"
import { forwardRef } from "react"
import clsx from "clsx"

type ButtonVariant = "primary" | "secondary" | "outline"

type Props = {
  children: React.ReactNode
  href?: string
  variant?: ButtonVariant
  loading?: boolean
  iconRight?: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-sage to-brand-sageDark text-white hover:from-brand-sageDark hover:to-brand-sage shadow-lg shadow-brand-sage/30",

  /** SECONDARY — Soft action */
  secondary:
    "bg-white text-brand-sageDark border border-brand-sage/40 hover:bg-brand-sage/10 shadow-sm",

  /** OUTLINE — Minimal / text-heavy sections */
  outline:
    "bg-transparent text-brand-charcoal border border-brand-sage/50 hover:border-brand-sageDark hover:text-brand-sageDark",
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      href,
      variant = "primary",
      loading = false,
      iconRight,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const styles = clsx(
      baseStyles,
      variants[variant],
      "px-6 py-3 md:px-8 md:py-4",
      className
    )

    // LINK BUTTON
    if (href) {
      return (
        <Link href={href} className={styles}>
          <span>{children}</span>
          {iconRight}
        </Link>
      )
    }

    // NORMAL BUTTON
    return (
      <button
        ref={ref}
        className={styles}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        )}
        <span>{children}</span>
        {!loading && iconRight}
      </button>
    )
  }
)

Button.displayName = "Button"
