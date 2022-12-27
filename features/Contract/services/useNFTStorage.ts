import axios from 'axios'
import { useState } from 'react'

type NFTStorageResponse = {
  ipnft: string
  url: string
}

export default function useNFTStorage() {
  const [metadataUrl, setMetadataUrl] = useState<NFTStorageResponse | null>(
    null,
  )

  const [base64, setBase64] = useState<string | null>(null)

  const getExampleImage = async (cb: (base64data: string) => void) => {
    const imageOriginUrl =
      'https://arweave.net/wglIV7K_YGwUpbFK5mxE-Jtnb3iimAsYFCLwtOMMzCg?ext=png'
    const r = await fetch(imageOriginUrl)
    if (!r.ok) {
      throw new Error(`error fetching image: [${r.status}]`)
    }

    const blob = await r.blob()

    // base64 encode the image
    const reader = new FileReader()
    reader.readAsDataURL(blob)

    reader.onloadend = async () => {
      const base64data = String(reader.result).split(',')[1]
      cb(base64data)
    }
  }

  const storeExampleNFT = async (
    attackCount: number,
    cb: (data: NFTStorageResponse) => void,
  ) => {
    if (!attackCount) {
      return null
    }

    await getExampleImage((base64) => {
      axios
        .post<NFTStorageResponse>('/api/contract/metadata', {
          imageBlob: base64,
          attackCount,
        })
        .then(({ data }) => {
          setMetadataUrl(data)
          cb(data)
        })
    })
  }

  return { metadataUrl, storeExampleNFT }
}
