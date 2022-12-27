import { useEffect, useState } from 'react'

interface MetaMaskAccountResponse {
  id?: string
  jsonrpc?: string
  result: string[]
}

export default function useMetaMask() {
  const [isSupported, setIsSupported] = useState<boolean>(true)
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  useEffect(() => {
    if (!window?.ethereum) {
      setIsSupported(false)
    }
  }, [])

  const loginMetaMask = async () => {
    if (window?.ethereum) {
      const { result }: MetaMaskAccountResponse = await window.ethereum.send(
        'eth_requestAccounts',
      )

      if (!result?.length) {
        alert('Please allow access to your wallet')
      }

      setSelectedAddress(result[0])
    }
  }

  return {
    isMetaMaskSupported: isSupported,
    selectedAddress,
    loginMetaMask,
  }
}