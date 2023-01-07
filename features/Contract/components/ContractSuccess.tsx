import { CheckCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ContractSuccess: React.FC<{
  txs: {
    ft: string
    nft: string
    sbt: string
  }
  ipnft: string
}> = ({ txs, ipnft }) => {
  const [nftImageUrl, setNftImageUrl] = useState<string | null>(null)
  useEffect(() => {
    axios
      .get(`https://ipfs.io/ipfs/${ipnft}/metadata.json`)
      .then(({ data: data }) => {
        // image is ipfs://CID -> https://ipfs.io/ipfs/CID
        const blobUrl = `https://ipfs.io/ipfs/${data.image.replace(
          'ipfs://',
          '',
        )}`
        setNftImageUrl(blobUrl)
      })
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <CheckCircleIcon className="w-6 text-orange ping" />
      <p className="text-base font-bold text-center text-orange mb-2">
        Save Success!
      </p>

      <div
        className="bg-main-lightest p-2 w-full rounded flex-grow-0 border-2 border-dotted border-main-light mb-2"
        style={{
          minHeight: '120px',
        }}
      >
        {nftImageUrl && <img src={nftImageUrl} alt="nft" />}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <a
          className="w-full text-center px-4 py-2 text-white bg-orange rounded"
          href={`https://baobab.scope.klaytn.com/tx/${txs.ft}`}
          rel="noreferrer"
          target="_blank"
        >
          FT Transaction Info
        </a>
        <a
          className="w-full text-center px-4 py-2 text-white bg-orange rounded"
          href={`https://baobab.scope.klaytn.com/tx/${txs.nft}`}
          rel="noreferrer"
          target="_blank"
        >
          NFT Transaction Info
        </a>

        <a
          className="w-full text-center px-4 py-2 text-white bg-orange rounded"
          href={`https://baobab.scope.klaytn.com/tx/${txs.sbt}`}
          rel="noreferrer"
          target="_blank"
        >
          SBT Transaction Info
        </a>
      </div>
    </div>
  )
}

export default ContractSuccess