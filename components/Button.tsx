import { ComponentProps, useCallback } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  loading?: boolean
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  onClick,
  children,
  ...rest
}) => {
  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-300 text-gray-500',
    ghost: 'bg-transparent text-gray-400',
  }

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault()
        return
      }

      onClick?.(e)
    },
    [loading, onClick],
  )

  return (
    <button
      className={clsx([
        'rounded p-2 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed',
        variantClasses[variant],
        loading && 'animate-pulse cursor-wait',
      ])}
      onClick={handleClick}
      {...rest}
    >
      <div>{children}</div>
    </button>
  )
}
export default Button