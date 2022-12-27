import { useCallback, useState } from 'react'

export default function useModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  return {
    modalOpen,
    openModal,
    closeModal,
  }
}