import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const variants = {
  'primary': 'bg-primary hover:bg-primary/95 active:bg-primary/90 text-white',
  'primary-outlined': 'bg-transparent hover:bg-primary/95 active:bg-primary/90 outline-primary hover:outline-primary/95 active:outline-primary/90 text-primary hover:text-white',
  'primary-inverted': 'bg-primary/25 hover:bg-primary/30 active:bg-primary/35 outline-primary/25 hover:outline-primary/30 active:outline-primary/35 text-primary',

  'success': 'bg-success hover:bg-success/95 active:bg-success/90 text-white',
  'success-outlined': 'bg-transparent hover:bg-success/95 active:bg-success/90 outline-success hover:outline-success/95 active:outline-success/90 text-success hover:text-white',
  'success-inverted': 'bg-success/25 hover:bg-success/30 active:bg-success/35 outline-success/25 hover:outline-success/30 active:outline-success/35 text-success',

  'warning': 'bg-warning hover:bg-warning/95 active:bg-warning/90 text-white',
  'warning-outlined': 'bg-transparent hover:bg-warning/95 active:bg-warning/90 outline-warning hover:outline-warning/95 active:outline-warning/90 text-warning hover:text-white',
  'warning-inverted': 'bg-warning/25 hover:bg-warning/30 active:bg-warning/35 outline-warning/25 hover:outline-warning/30 active:outline-warning/35 text-warning',

  'danger': 'bg-danger hover:bg-danger/95 active:bg-danger/90 text-white',
  'danger-outlined': 'bg-transparent hover:bg-danger/95 active:bg-danger/90 outline-danger hover:outline-danger/95 active:outline-danger/90 text-danger hover:text-white',
  'danger-inverted': 'bg-danger/25 hover:bg-danger/30 active:bg-danger/35 outline-danger/25 hover:outline-danger/30 active:outline-danger/35 text-danger',

  'info': 'bg-info hover:bg-info/95 active:bg-info/90 text-white',
  'info-outlined': 'bg-transparent hover:bg-info/95 active:bg-info/90 outline-info hover:outline-info/95 active:outline-info/90 text-info hover:text-white',
  'info-inverted': 'bg-info/25 hover:bg-info/30 active:bg-info/35 outline-info/25 hover:outline-info/30 active:outline-info/35 text-info',

  'default': 'bg-transparent hover:bg-gray-500/5 active:bg-gray-500/10 outline-gray-500/50 hover:outline-gray-500/60 active:outline-gray-500/70'
}

const Button = ({ children, variant = 'default', className, ...res }) => {
  return (
    <button className={twMerge(
      clsx('py-1 px-3 border-none outline cursor-pointer rounded transition-colors',
        variants[variant],
        className
      )
    )}
      {...res}
    >
      {children}
    </button>
  )
}

export default Button