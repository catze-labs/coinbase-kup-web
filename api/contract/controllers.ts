import Caver from 'caver-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blob } from 'nft.storage'
import abi from './abi'
import * as contractService from './services'

export type PostPayload = {
  attackCount: number
  imageBlob: Blob
}

export async function setMetadataUri(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { imageBlob, attackCount } = req.body

      const buf = new Buffer(imageBlob, 'base64')

      const blob = new Blob([buf], { type: 'image/png' })

      const metadata = await contractService.getNFTMetadata(attackCount, blob)

      res.status(200).json(metadata)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error })
    }
  }
}

export async function ensureAttackAmount(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { address, uri } = req.body

    try {
      const caver = new Caver(`${process.env.RPC_URL}/${process.env.API_KEY}`)
      const key = caver.wallet.keyring.createFromPrivateKey(
        process.env.KEY_RING,
      )
      caver.wallet.add(key)

      const contract = new caver.contract(abi, process.env.CONTRACT_ADDRESS)

      const tx = await contract.methods
        .ensureAttackAmount(
          address,
          // key.address,
          uri,
        )
        .send({
          // from: address,
          from: key.address,
          gasPrice: '75000000000',
          gas: 1000000,
        })

      res.status(200).json(tx)
    } catch (error: any) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }
}