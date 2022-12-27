import { useEffect, useState } from 'react'
import CoinbaseWalletSDK from'@coinbase/wallet-sdk'



export default function useCoinbase() {
  const APP_NAME = 'KUP'

  const APP_LOGO_URL = ''

  const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/fcb656a7b4d14c9f9b0803a5d7475877'

  const DEFAULT_CHAIN_ID = 1001

  // Initialize Coinbase Wallet SDK

  const coinbaseWallet = new CoinbaseWalletSDK({

    appName: APP_NAME,

    appLogoUrl: APP_LOGO_URL,

    darkMode: false

  })

  // Initialize a Web3 Provider object
  const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID);

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const loginCoinbase = async () => {
    if (window?.ethereum) {
      const res: any = await ethereum.request({ method: 'eth_requestAccounts' });
      setSelectedAddress(res[0]);
    }
  }
  return {
    isCoinbaseSupported: true,
    selectedAddress: selectedAddress,
    loginCoinbase: loginCoinbase,
  }
}
