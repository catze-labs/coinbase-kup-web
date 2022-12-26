import React, { ComponentProps, ComponentPropsWithRef } from 'react'
import clsx from 'clsx'

interface BoxProps extends ComponentPropsWithRef<'div'> {
  hasBorder?: boolean
  hasPadding?: boolean
}

const Box = React.forwardRef(
  ({ hasBorder = false, hasPadding = false, children }: BoxProps, ref) => (
    <div
      className={clsx([
        hasBorder && 'border border-gray-300',
        hasPadding && 'p-12',
        `rounded bg-white`,
      ])}
    >
      {children}
    </div>
  ),
)

Box.displayName = 'Box'

export default Box