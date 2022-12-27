/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps } from 'react'

const VerticalLine: React.FC = React.memo(
  () => {
    return (
      <div className="w-0.5 h-12 relative overflow-hidden">
        <hr
          className="w-0.5 bg-orange absolute top-0 left-0"
          style={{ animation: 'dropLine 1.4s ease-in-out infinite' }}
        />
      </div>
    )
  },
  () => true,
)
VerticalLine.displayName = 'VerticalLine'

const WhatIsKup: React.FC<ComponentProps<'div'>> = () => {
  return (
    <article className="full-screen pt-nav-h flex-center bg-gradient-to-r from-main-ligtest to-white gap-[225px]">
      <div className="flex flex-col gap-2.5 items-center">
        <figure className="w-full">
          <img
            src="/landing/logo-klaytn.png"
            alt="Klaytn"
            width={186}
            height={56}
          />
        </figure>

        <VerticalLine />

        <figure className="w-full">
          <img
            src="/landing/logo-unity.png"
            alt="Unity"
            width={164}
            height={60}
          />
        </figure>

        <VerticalLine />

        <figure className="w-full">
          <img
            src="/landing/logo-playfab.png"
            alt="Unity"
            width={206}
            height={60}
          />
        </figure>
      </div>
      <div className="max-w-[470px]">
        <h2 className="text-5xl font-bold text-main-default mb-7 tracking-tighter">
          What is KUP?
        </h2>
        <p className="text-base font-normal leading-5">
          KUP stands for Klaytn, Unity, and Playfab.
          <br />
          it is a connection between Unity, Playfab and Klaytn to manage data
          while interacting within the metaverse. The partnership secures the
          users data ownership and preservation by processing important data
          with Klaytn blockchain.
          <br />
          KUP helps Unity developers focus on the domain they are confident in.
          By utilizing KUP, they help build an easily accessible metaverse.
        </p>
      </div>
    </article>
  )
}

export default React.memo(WhatIsKup)