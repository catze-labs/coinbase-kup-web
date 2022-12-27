import Button from '@/components/Buttton'
import useModalStore from '@/store/useModalStore'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useNFTStorage from '../services/useNFTStorage'
import usePlayerStatistics from '../services/usePlayerStatistics'
import ContractSuccess from './ContractSuccess'

const ContractInteract: React.FC<{
  address?: string | null
}> = ({ address }) => {
  const { openModal } = useModalStore()
  const { metadataUrl, storeExampleNFT } = useNFTStorage()
  const { totalAttackCount } = usePlayerStatistics()

  const [loading, setLoading] = useState<boolean>(false)

  const handleInteract = async () => {
    if (!totalAttackCount) return

    setLoading(true)

    /**
     * Store NFT
     */
    storeExampleNFT(totalAttackCount, ({ ipnft, url }: any) => {
      if (url) {
        /**
         * if NFT Stored, ensure
         */
        axios
          .post(`/api/contract/ensureAttackAmount`, {
            address: address,
            uri: url,
          })
          .then(({ data, status }) => {
            status === 200 &&
              openModal({
                title: 'Contract',
                component: (
                  <ContractSuccess
                    txHash={data.transactionHash}
                    ipnft={ipnft}
                  />
                ),
              })
            setLoading(false)
          })
      }
    })
  }

  return (
    <div>
      <div className="h-[160px] p-2 flex-center flex-col gap-2 border-2 border-main-light border-dotted rounded mb-2">
        <p className="text-xl font-bold text-center">Your Total Attack Count</p>
        <div className="flex-center h-20">
          {totalAttackCount === null && (
            <p className="text-xl font-bold text-center text-main-light">
              Loading...
            </p>
          )}
          {totalAttackCount !== null && totalAttackCount >= 0 && (
            <p className="text-5xl font-bold text-center text-tequila-light">
              {totalAttackCount}
            </p>
          )}
        </div>
      </div>
      <Button
        disabled={totalAttackCount === null && !metadataUrl?.url}
        onClick={handleInteract}
        loading={loading}
      >
        {totalAttackCount === null
          ? 'Load Game Statistics...'
          : 'Save count in NFT'}
      </Button>
    </div>
  )
}

export default ContractInteract
