export const useContactModal = () => {
  const isContactModalOpen = useState<boolean>('contact_modal_state', () => false)

  const openContactModal = () => {
    isContactModalOpen.value = true
  }

  const closeContactModal = () => {
    isContactModalOpen.value = false
  }

  return {
    isContactModalOpen,
    openContactModal,
    closeContactModal
  }
}
