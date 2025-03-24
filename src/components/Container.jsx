import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const Container = ({ children, className, ...res }) => {
  return (
    <div className={twMerge(clsx('container mx-auto px-4'), className)} {...res}>
      {children}
    </div>
  )
}

export default Container