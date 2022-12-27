/* eslint-disable @next/next/no-img-element */
import { CheckCircleIcon, WalletIcon } from '@heroicons/react/24/solid'
import Button from '@/components/Buttton'
import React, { useCallback, useEffect, useState } from 'react'
import useKaikas from '../hooks/useKaikas'
import useKlip from '../hooks/useKlip'
import clsx from 'clsx'
import useMetaMask from '../hooks/useMetaMask'
import useCoinbase from '../hooks/useCoinbase'
import useModalStore from '@/store/useModalStore'
import LoginForm from '@/features/Auth/components/LoginForm'
import ContractInteract from './ContractIntract'

enum WalletType {
  MetaMask = 'MetaMask',
  Kaikas = 'Kaikas',
  Klip = 'Klip',
  Coinbase = 'Coinbase'
}

const WalletConnect: React.FC = () => {
  const { openModal } = useModalStore()

  /**
   * Selected Wallet
   */
  const [selectedWalletType, setSelectedWalletType] =
    useState<WalletType | null>(null)

  useEffect(() => {
    return () => {
      setSelectedWalletType(null)
    }
  }, [])

  /**
   * Wallet Hooks
   */
  const {
    isKaikasSupported,
    selectedAddress: kaikasWalletAddress,
    loginKaikas,
  } = useKaikas()
  const {
    isKlipSupported,
    selectedAddress: klipWalletAddress,
    LoadKlipScript,
    loginKlip,
  } = useKlip()
  const {
    isMetaMaskSupported,
    loginMetaMask,
    selectedAddress: mataMaskWalletAddress,
  } = useMetaMask()
  const {
    isCoinbaseSupported,
    loginCoinbase,
    selectedAddress: coinbaseWalletAddress,
  } = useCoinbase()

  /**
   * Header UI
   */
  const Header = React.memo(
    () => (
      <div className="flex gap-2 justify-center text-main-light items-center">
        <WalletIcon className="w-6" />
        <p className="text-sm font-medium">Connect your Klaytn Wallet</p>
      </div>
    ),
    () => true,
  )
  Header.displayName = 'Header'

  /**
   * Check Wallet Address
   */
  const confirmedWalletAddress = useCallback(() => {
    if (selectedWalletType === WalletType.Kaikas) {
      return kaikasWalletAddress
    }

    if (selectedWalletType === WalletType.Klip) {
      return klipWalletAddress
    }

    if (selectedWalletType === WalletType.MetaMask) {
      return mataMaskWalletAddress
    }

    if (selectedWalletType === WalletType.Coinbase) {
      return coinbaseWalletAddress
    }
  }, [
    selectedWalletType,
    kaikasWalletAddress,
    mataMaskWalletAddress,
    klipWalletAddress,
    coinbaseWalletAddress
  ])

  useEffect(() => {
    const address = confirmedWalletAddress()
    if (address) {
      setTimeout(() => {
        openModal({
          title: 'Contract',
          component: <ContractInteract address={confirmedWalletAddress()} />,
        })
      }, 1500)
    }
  }, [confirmedWalletAddress])

  return (
    <>
      <LoadKlipScript />
      <div className="flex flex-col gap-4">
        <div
          className={clsx([
            `px-3 py-2 rounded min-h-[180px] transition-all duration-500`,
            confirmedWalletAddress()
              ? `border-4 border-orange border-solid`
              : `border-2 border-dotted border-main-light`,
          ])}
        >
          {confirmedWalletAddress() ? (
            <div className="flex flex-col justify-center items-center h-44">
              <CheckCircleIcon className="w-6 text-orange ping" />
              <p className="text-base font-bold text-center text-orange mb-4">
                {selectedWalletType} Connected!
              </p>
              <p className="text-[10px] text-main-light font-normal tracking-tighter">
                {confirmedWalletAddress()}
              </p>
            </div>
          ) : (
            <>
              <Header />
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <Button
                    variant="gray"
                    className="font-normal gap-2"
                    onClick={() => {
                      setSelectedWalletType(WalletType.MetaMask)
                      loginMetaMask()
                    }}
                  >
                    <img
                      src="/wallets/metamask.svg"
                      width={20}
                      height={18}
                      alt="metamask"
                    />
                    <span className="w-20">Metamask</span>
                  </Button>
                  {!isMetaMaskSupported && (
                    <p className="text-xs text-tequila-light">
                      Please install Metamask
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Button
                    variant="gray"
                    className={clsx([
                      `font-normal gap-2`,
                      !isKaikasSupported &&
                        'border border-tequila-light cursor-not-allowed grayscale',
                    ])}
                    onClick={() => {
                      setSelectedWalletType(WalletType.Kaikas)
                      loginKaikas()
                    }}
                  >
                    <img
                      src="/wallets/kaikas.png"
                      width={21}
                      height={19}
                      alt="kaikas"
                    />
                    <span className="w-20">Kaikas</span>
                  </Button>
                  {!isKaikasSupported && (
                    <p className="text-xs text-tequila-light">
                      Kaikas is not installed
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Button
                    variant="gray"
                    className={clsx([
                      `font-normal gap-2`,
                      !isKlipSupported &&
                        'border border-tequila-light cursor-not-allowed grayscale',
                    ])}
                    onClick={() => {
                      setSelectedWalletType(WalletType.Klip)
                      loginKlip()
                    }}
                  >
                    <img
                      src="/wallets/klip.png"
                      width={20}
                      height={20}
                      alt="klip"
                    />
                    <span className="w-20">Klip</span>
                  </Button>
                  {!isKlipSupported && (
                    <p className="text-xs text-tequila-light">
                      Klip is only supported on mobile
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Button
                    variant="gray"
                    className={clsx([
                      `font-normal gap-2`,
                      !isCoinbaseSupported &&
                        'border border-tequila-light cursor-not-allowed grayscale',
                    ])}
                    onClick={() => {
                      setSelectedWalletType(WalletType.Coinbase)
                      loginCoinbase()
                    }}
                  >
                    <img
                      src="/wallets/coinbase.png"
                      width={20}
                      height={20}
                      alt="coinbase"
                    />
                    <span className="w-20">Coinbase</span>
                  </Button>
                  {!isCoinbaseSupported && (
                    <p className="text-xs text-tequila-light">
                      Coinbase wallet is not installed.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {!confirmedWalletAddress() && (
          <Button
            variant="secondary"
            onClick={() => {
              if (confirmedWalletAddress()) {
                setSelectedWalletType(null)
              } else {
                openModal({
                  title: 'Sign in',
                  component: <LoginForm />,
                })
              }
            }}
          >
            Go Back
          </Button>
        )}
      </div>
    </>
  )
}

export default WalletConnect
