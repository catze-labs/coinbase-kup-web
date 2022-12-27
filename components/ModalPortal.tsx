import React, { PropsWithChildren } from 'react'
import reactDom from 'react-dom'

const ModalPortal: React.FC<PropsWithChildren> = ({ children }) => {
  if (typeof document === 'undefined') return null

  const el: HTMLElement | null = document.getElementById('modal')

  if (!el) {
    return null
  }

  return reactDom.createPortal(children, el)
}
export default ModalPortal