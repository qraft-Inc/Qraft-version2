import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "font-semibold",
    "transition-all",
    "duration-300",
    "ease-out",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "relative",
    "overflow-hidden",
    "group",
    "touch-manipulation",
    "active:scale-95",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-gradient-to-r",
          "from-primary-600",
          "to-primary-500",
          "text-white",
          "shadow-lg",
          "active:shadow-md",
          "sm:hover:shadow-xl",
          "sm:hover:scale-105",
          "sm:hover:from-primary-700",
          "sm:hover:to-primary-600",
        ],
        secondary: [
          "bg-white",
          "text-primary-600",
          "border-2",
          "border-primary-600",
          "active:bg-primary-50",
          "sm:hover:bg-primary-50",
          "sm:hover:border-primary-700",
          "shadow-md",
          "sm:hover:shadow-lg",
        ],
        accent: [
          "bg-gradient-to-r",
          "from-accent-600",
          "to-accent-500",
          "text-white",
          "shadow-lg",
          "active:shadow-md",
          "sm:hover:shadow-xl",
          "sm:hover:scale-105",
          "sm:hover:from-accent-700",
          "sm:hover:to-accent-600",
        ],
        ghost: [
          "bg-transparent",
          "text-primary-600",
          "active:bg-primary-50",
          "sm:hover:bg-primary-50",
        ],
        outline: [
          "bg-transparent",
          "text-neutral-700",
          "border-2",
          "border-neutral-300",
          "active:border-primary-500",
          "active:bg-neutral-50",
          "sm:hover:border-primary-500",
          "sm:hover:text-primary-600",
          "sm:hover:bg-neutral-50",
        ],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-2", "px-4"],
        md: ["min-w-24", "h-full", "min-h-11", "text-base", "py-2.5", "px-5"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-base", "sm:text-lg", "py-3", "px-6"],
        xl: ["min-w-40", "h-full", "min-h-14", "text-lg", "sm:text-xl", "py-4", "px-8"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline }))} {...props}>
      <span className="relative z-10">{props.children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
    </a>
  )
}
