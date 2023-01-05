/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { ComponentProps } from 'react'

const WhatWeHave: React.FC<ComponentProps<'div'>> = () => {
  return (
    <article
      id="wehave"
      className={clsx([
        `full-screen flex-center relative bg-yellow gap-12 lg:gap-24`,
        `flex-col lg:flex-row`,
        `px-4`,
      ])}
    >
      {/* White Layer */}
      <div className="full-screen absolute top-0 left-0 right-0 bottom-0 bg-white opacity-80 z-0"></div>

      <div className="z-10 w-full lg:max-w-[460px]">
        <h2 className="text-center lg:text-right text-3xl lg:text-5xl font-bold text-main-default mb-4 lg:mb-8 tracking-tighter">
          We have...
        </h2>

        <p className="text-center lg:text-right text-base mb-9">
          <span className="font-bold">Yooldo - Trouble Punk : Cyber galz</span>
          <br />
          Klaytn BlockChain + Unity Game + Playfab data
        </p>

        <div className="flex justify-center lg:justify-end">
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
      <div className="z-10 relative w-[438px]">
        <div className="w-full flex justify-end items-start animate-buoyancy-1">
          <img
            src="/landing/troublepunk.png"
            alt="troublepunk"
            width={438}
            height={562}
          />
        </div>

        <img
          className="absolute bottom-20 left-0 translate-y-full"
          src="/landing/card-shadow.svg"
          alt="shadow"
          width={380}
          height={63}
        />
      </div>
    </article>
  )
}

export default WhatWeHave