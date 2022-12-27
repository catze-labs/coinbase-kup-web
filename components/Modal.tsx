/* eslint-disable @next/next/no-img-element */
import React, { ComponentPropsWithRef, useCallback } from 'react'

interface ModalProps extends ComponentPropsWithRef<'div'> {
  title?: string
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  onClose,
  ...props
}) => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-main-default opacity-80"
        onClick={onClose}
      />
      <div
        {...props}
        className="fixed z-50 top-1/2 left-1/2 bg-white rounded -translate-x-1/2 -translate-y-1/2"
      >
        <div className="px-6 pt-9 pb-6 w-80 flex flex-col gap-6">
          {title && (
            <div className="flex justify-between items-center">
              <h2 className="text-2xl tracking-tight font-bold">{title}</h2>
              <img src="/logo-gnb.svg" alt="logo" width={81} height={31} />
            </div>
          )}

          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal