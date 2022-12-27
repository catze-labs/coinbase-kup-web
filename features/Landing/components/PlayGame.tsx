/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import { useEffect, useState } from 'react'

const PlayGame = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true)
  useEffect(() => {
    const userAgent = navigator.userAgent
    setIsDesktop(
      !userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    )
  }, [])

  return (
    <article
      id="play"
      className={clsx([
        'full-screen flex-center bg-[url(/landing/game-bg.jpg)] bg-cover bg-right',
        'flex-col pt-nav-mobile gap-16 px-4',
        'lg:flex-row lg:pt-nav-h lg:gap-[225px]',
      ])}
    >
      <div className="flex flex-col gap-10 rounded-lg bg-[rgba(255,255,255,0.7)] p-6 min-w-[360px]">
        <div className="text-center w-full text-main-default font-bold">
          <p className="text-base mb-4">Download KUP Example Game</p>
          <h2 className="text-3xl">Chop Chop</h2>
        </div>
        <div className="flex justify-center gap-3">
          {!isDesktop && (
            <p className="p-2 text-base font-bold bg-main-light rounded text-white">
              Only available on Desktop
            </p>
          )}
          {isDesktop && (
            <>
              <a
                rel="noopener noreferrer"
                className="flex gap-2 rounded p-2 bg-main-default"
                href="https://kup.fra1.digitaloceanspaces.com/win/unity-39-develop-chop-chop-kup-main-win-7.zip"
              >
                <img
                  src="/landing/icon-window.svg"
                  alt="window"
                  width={24}
                  height={24}
                />
                <span className="flex flex-col gap-0">
                  <span className="text-base font-bold text-white leading-none">
                    Window
                  </span>
                  <span className="text-[8px] font-normal text-white opacity-80 leading-none">
                    808MB
                  </span>
                </span>
              </a>
              <a
                rel="noopener noreferrer"
                className="flex gap-2 rounded p-2 bg-main-default"
                href="https://kup.fra1.digitaloceanspaces.com/mac/unity-39-develop-chop-chop-kup-main-mac-7.zip"
              >
                <img
                  src="/landing/icon-mac.svg"
                  alt="mac"
                  width={24}
                  height={24}
                />
                <span className="flex flex-col gap-0">
                  <span className="text-base font-bold text-white leading-none">
                    Mac OS
                  </span>
                  <span className="text-[8px] font-normal text-white opacity-80 leading-none">
                    941MB
                  </span>
                </span>
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default PlayGame
