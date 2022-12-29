/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const HorizontalLine: React.FC = React.memo(
  () => {
    return (
      <div className="w-3 h-5 -rotate-90 relative overflow-hidden">
        <hr
          className="w-3 h-5 bg-orange absolute top-0 left-0"
          style={{ animation: 'dropLine 1.4s ease-in-out infinite' }}
        />
      </div>
    )
  },
  () => true,
)
HorizontalLine.displayName = 'HorizontalLine'

const WhatIsKup: React.FC<ComponentProps<'div'>> = () => {
  return (
    <article
      id="whatiskup"
      className={clsx([
        'full-screen flex-center bg-main-lightest',
        'flex-col pt-nav-mobile px-4',
        'lg:flex-row lg:pt-nav-h',
      ])}
    >
      <div className="lg:-mr-[70px]">
        <img 
          src="/landing/chain-balls.png"
          className="mix-blend-darken"
        />
      </div>
      <div className="w-full lg:max-w-[470px] lg:mt-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-main-default mb-4 lg:mb-7 tracking-tighter">
          What is KUP?
        </h2>
        <p className="text-sm lg:text-base font-normal leading-5 text-main-default">
          KUP stands for Klaytn, Unity, and Playfab. <br/>
          It is a connection between Unity, Playfab and Klaytn to manage data while interacting within the metaverse.<br/>
          The partnership secures the users data ownership and preservation by processing important data with Klaytn blockchain. <br/>
          KUP helps Unity developers focus on the domain they are confident in. By utilizing KUP, they help build an easily accessible metaverse.
        </p>
        <div className="flex max-w-[300px] mx-4 gap-4 mt-5 lg:max-w-[470px] lg:gap-4 lg:mx-0 items-center lg:mt-[51px] lg:-mr-4">
          <figure className="w-full">
            <img
              src="/landing/logo-klaytn.png"
              alt="Klaytn"
              width={130}
              height={40}
              className="h-6 w-auto lg:h-[40px]"
            />
          </figure>

          <HorizontalLine />

          <figure className="w-full">
            <img
              src="/landing/logo-unity.png"
              alt="Unity"
              width={110}
              height={40}
              className="h-6 w-auto lg:h-[40px] m-auto"
            />
          </figure>

          <HorizontalLine />

          <figure className="w-full">
            <img
              src="/landing/logo-playfab.png"
              alt="Unity"
              width={135}
              height={40}
              className="h-6 w-auto lg:h-[40px]"
            />
          </figure>
        </div>
      </div>
    </article>
  )
}

export default React.memo(WhatIsKup)