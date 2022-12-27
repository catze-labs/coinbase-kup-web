import { useEffect, useState } from 'react'

export default function useKaikas() {
  const [provider, setProvider] = useState<Klaytn | null>(null)
  const [connected, setConnected] = useState<boolean>(false)
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  useEffect(() => {
    /**
     * Subscribe to klaytn provider
     */
    if (window.klaytn) {
      setProvider(window.klaytn)

      /**
       * if klaytn provider is already connected
       * set connected state to true and set selectedAddress
       */
      if (window.klaytn.selectedAddress) {
        setConnected(true)
        setSelectedAddress(window.klaytn.selectedAddress)
      }
    }
  }, [])

  const loginKaikas = async () => {
    if (provider) {
      const addresses = await provider.enable()

      if (!addresses?.length) {
        alert('Please allow access to your wallet')
      }

      setConnected(true)
      setSelectedAddress(addresses[0])
    } else {
      alert('Please install Klaytn wallet')
    }
  }

  return {
    isKaikasSupported: !!provider,
    selectedAddress,
    connected,
    loginKaikas,
  }
}
