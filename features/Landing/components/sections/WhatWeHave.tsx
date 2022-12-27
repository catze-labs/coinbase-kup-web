/* eslint-disable @next/next/no-img-element */
import { ComponentProps } from 'react'

const WhatWeHave: React.FC<ComponentProps<'div'>> = () => {
  return (
    <div className="full-screen flex-center relative bg-yellow gap-24">
      {/* White Layer */}
      <div className="full-screen absolute top-0 left-0 right-0 bottom-0 bg-white opacity-80 z-0"></div>

      <div className="z-10 max-w-[460px]">
        <h2 className="text-right text-5xl font-bold text-main-default mb-8 tracking-tighter">
          We have...
        </h2>

        <p className="text-right text-base mb-9">
          <span className="font-bold">Yooldo - Trouble Punk : Cyber galz</span>
          <br />
          Klaytn BlockChain + Unity Game + Playfab data
        </p>

        <div className="flex justify-end">
          <a
            href="https://troublepunk.com/"
            rel="noreferrer"
            target="_blank"
            className="px-5 py-2.5 rounded bg-main-default text-white text-base"
          >
            More view
          </a>
        </div>
      </div>
      <div className="z-10 relative w-[308px]">
        <div className="w-full flex justify-end items-start animate-buoyancy-1">
          <img
            src="/landing/troublepunk.png"
            alt="troublepunk"
            width={266}
            height={400}
            className="rotate-12"
          />
        </div>

        <img
          className="absolute -bottom-0 left-0 translate-y-full"
          src="/landing/card-shadow.svg"
          alt="shadow"
          width={308}
          height={63}
        />
      </div>
    </div>
  )
}

export default WhatWeHave