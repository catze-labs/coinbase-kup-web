import { NFTStorage, Blob } from 'nft.storage'

type NFT = {
  image: Blob
  name: string
  description: string
  properties: {
    trait_type: string
    value: number
  }
  authors: {
    name: string
  }[]
}

type MetaDataURIs = {
  ipnft: string
  url: string
}

export async function getNFTMetadata(attackCount: number, imageBlob: Blob) {
  const API_KEY = process.env.NFT_STORAGE_API_KEY

  const nft: NFT = {
    image: imageBlob,
    name: 'Sipping a KUP of metaverse',
    description: 'KUP helps developers to build a metaverse easily',
    properties: {
      trait_type: 'attack counter',
      value: attackCount,
    },
    authors: [{ name: 'KUP TEAM' }],
  }

  const client = new NFTStorage({ token: API_KEY })

  const metadata: MetaDataURIs = await client.store<NFT>(nft)

  return metadata
}
