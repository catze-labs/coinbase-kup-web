import type { ComponentPropsWithRef } from 'react'
import React from 'react'

export interface TextInputProps extends ComponentPropsWithRef<'input'> {}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type || 'text'}
        className="border border-gray-300 rounded-sm px-2 py-1"
        {...rest}
      />
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput