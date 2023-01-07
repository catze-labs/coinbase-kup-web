import axios from 'axios'
import Caver from 'caver-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blob } from 'nft.storage'
import { ftAbi, nftAbi, sbtAbi } from './abi'
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

      // estimate gasPrice
      const { data: gasPrice } = await axios.get<{
        result: string
      }>('https://api.baobab.klaytn.net:8651', {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          jsonrpc: '2.0',
          method: 'klay_gasPrice',
          params: [],
          id: 1,
        },
      })

      const effectiveGasPrice = caver.utils.hexToNumber(gasPrice.result)

      const ftContract = new caver.contract(
        ftAbi,
        process.env.KUPFT_CONTRACT_ADDRESS,
      )

      const ftTx = await ftContract.methods.ensureAttackAmount(address).send({
        from: key.address,
        // gasPrice: '75000000000',
        gasPrice: effectiveGasPrice.toString(),
        gas: 1000000000,
      })

      const nftContract = new caver.contract(
        nftAbi,
        process.env.KUPNFT_CONTRACT_ADDRESS,
      )

      const nftTx = await nftContract.methods
        .ensureAttackAmount(address, uri)
        .send({
          from: key.address,
          // gasPrice: '75000000000',
          gasPrice: effectiveGasPrice.toString(),
          gas: 1000000,
        })

      const sbtContract = new caver.contract(
        sbtAbi,
        process.env.KUPSBT_CONTRACT_ADDRESS,
      )

      const sbtTx = await sbtContract.methods
        .ensureAttackAmount(address, uri)
        .send({
          from: key.address,
          // gasPrice: '75000000000',
          gasPrice: effectiveGasPrice.toString(),
          gas: 1000000,
        })

      res.status(200).json({
        ft: ftTx.transactionHash,
        nft: nftTx.transactionHash,
        sbt: sbtTx.transactionHash,
      })
    } catch (error: any) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }
}