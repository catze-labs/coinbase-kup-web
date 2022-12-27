/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const VerticalLine: React.FC = React.memo(
  () => {
    return (
      <div className="w-0.5 h-6 rotate-90 lg:rotate-0 lg:h-12 relative overflow-hidden">
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
    <article
      id="whatiskup"
      className={clsx([
        'full-screen flex-center bg-main-lightest',
        'flex-col pt-nav-mobile gap-16 px-4',
        'lg:flex-row lg:pt-nav-h lg:gap-[225px]',
      ])}
    >
      <div
        className={clsx([
          `flex gap-8 lg:gap-2.5 items-center flex-row-reverse lg:flex-col`,
        ])}
      >
        <figure className="w-full">
          <img
            src="/landing/logo-klaytn.png"
            alt="Klaytn"
            width={186}
            height={56}
            className="h-6 w-auto lg:h-[56px]"
          />
        </figure>

        <VerticalLine />

        <figure className="w-full">
          <img
            src="/landing/logo-unity.png"
            alt="Unity"
            width={164}
            height={60}
            className="h-6 w-auto lg:h-[60px]"
          />
        </figure>

        <VerticalLine />

        <figure className="w-full">
          <img
            src="/landing/logo-playfab.png"
            alt="Unity"
            width={206}
            height={60}
            className="h-6 w-auto lg:h-[60px]"
          />
        </figure>
      </div>
      <div className="w-full lg:max-w-[470px]">
        <h2 className="text-3xl lg:text-5xl font-bold text-main-default mb-4 lg:mb-7 tracking-tighter">
          What is KUP?
        </h2>
        <p className="text-sm lg:text-base font-normal leading-5">
          KUP stands for Klaytn, Unity, and Playfab.
          <br />
          Klaytn is a metaverse platform solution. Unity is a 3D/2D game engine. And Playfab is a backend platform for live games, also a part of Microsoft.
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