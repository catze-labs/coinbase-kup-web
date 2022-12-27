import type { AbstractCaver } from 'caver-js'
import KlipSDK from './klipSDK'

declare global {
  interface Window {
    klaytn?: Klaytn
    caver?: AbstractCaver
    klipSDK?: any
    ethereum?: any
  }
}

export const klaytn = window.klaytn
export const caver = window.caver
export const klipSDK = window.klipSDK
export const ethereum = window.ethereum