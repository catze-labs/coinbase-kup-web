import { ComponentProps, useCallback } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gray'
  loading?: boolean
}

const LoadingIcon = () => (
  <div className="w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="#E35500"
      className="w-4 h-4"
    >
      <circle cx="12.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
        <animate
          attributeName="fill-opacity"
          begin="100ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="300ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="600ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="800ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="400ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="700ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="500ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="200ms"
          dur="1s"
          values="1;.2;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
)

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  onClick,
  children,
  className,
  disabled,
  ...rest
}) => {
  const variantClasses = {
    primary: 'bg-orange text-white',
    secondary: 'bg-main-default text-white',
    gray: 'bg-main-lightest',
    ghost: 'bg-white hover:bg-gray-100 text-gray-400',
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
        variantClasses[variant],
        'w-full h-10 flex justify-center gap-2 items-center rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed font-medium',
        loading && 'animate-pulse cursor-wait',
        className,
      ])}
      disabled={loading || disabled}
      onClick={handleClick}
      {...rest}
    >
      {!loading && children}

      {loading && <LoadingIcon />}
    </button>
  )
}
export default Button