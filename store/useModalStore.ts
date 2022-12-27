import React from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'

export interface ModalAtom {
  active: boolean
  title?: string
  component?: React.ReactNode
}

const modalAtom = atom<ModalAtom>({
  key: 'modalAtom',
  default: {
    active: false,
  },
})

function useModalStore() {
  const [modal, setModal] = useRecoilState(modalAtom)

  const toggleModal = () => {
    setModal({
      ...modal,
      active: !modal.active,
    })
  }

  const openModal = ({
    title,
    component,
  }: {
    title?: string
    component?: React.ReactNode
  }) => {
    setModal({
      ...modal,
      ...(title && { title }),
      ...(component && { component }),
      active: true,
    })
  }

  const closeModal = () => {
    setModal({
      ...modal,
      active: false,
    })
  }

  return {
    modal: useRecoilValue(modalAtom),
    openModal,
    closeModal,
    toggleModal,
  }
}

export default useModalStore
