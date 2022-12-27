import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function useKlip() {
  const [klip, setKlip] = useState<any>(null)
  const [requestKey, setRequestKey] = useState<string | null>(null)
  const [isSupported, setIsSupported] = useState<boolean>(true)
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)
  const bappName = 'KUP'

  const LoadKlipScript = () => {
    return (
      <Script
        src="/klipSDK-2.2.0.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          setKlip(window?.klipSDK)
        }}
      />
    )
  }

  useEffect(() => {
    if (!klip) return

    klip.prepare.auth({ bappName }).then(({ request_key }: any) => {
      setRequestKey(request_key)
    })
  }, [klip])

  const loginKlip = async () => {
    if (!klip) {
      setIsSupported(false)
      return
    }
    klip.request(requestKey, () => setIsSupported(false), true)

    // interval until status is changed
    const interval = setInterval(async () => {
      const { status, result } = await klip.getResult(requestKey)
      if (status === 'completed') {
        setSelectedAddress(result['klaytn_address'])
        clearInterval(interval)
      }
    }, 500)
  }

  return {
    isKlipSupported: isSupported,
    selectedAddress,
    LoadKlipScript,
    requestKey,
    loginKlip,
  }
}
