/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { ComponentProps } from 'react'

const WhyKup: React.FC<ComponentProps<'article'>> = () => {
  return (
    <article
      id="whykup"
      className={clsx([
        `flex-center full-screen bg-main-default gap-10 lg:gap-20`,
        `px-4 flex-col lg:flex-row pt-nav-mobile lg:pt-nav-h`,
      ])}
    >
      <div className="w-full lg:max-w-[450px] order-2 lg:order-1">
        <h2 className="text-white tracking-tighter text-3xl lg:text-5xl font-bold mb-4 lg:mb-7 lg:text-right">
          Why KUP?
        </h2>
        <p className="text-white text-sm lg:text-base leading-5 lg:text-right">
          For a metaverse to succeed, it must provide as much content as
          possible so that users can enjoy content seamlessly and without much
          repetition.
          <br />
          It is cumbersome for content providers (Unity developers) to work in a
          domain that they have little to no practice in. In short, KUP helps
          content providers build a metaverse with ease, even if they are not as
          skilled in other areas. By doing so, they have more time to work on
          the quality of the content itself.
        </p>
      </div>
      <div
        role="image"
        className="relative order-1 flex-0 w-[232px] h-[232px] lg:w-[434px] lg:h-[464px]"
      >
        <img
          src="/landing/pulley.png"
          alt="pulley"
          width={321}
          height={127}
          className="absolute z-20 top-0 left-0 w-[160px] lg:w-[321px] lg:h-[127px]"
        />

        <img
          src="/landing/logo-klaytn-light.svg"
          alt="Klaytn"
          width={140}
          height={42}
          className="absolute top-20 left-16 lg:top-40 lg:left-32 w-[70px] lg:w-[140px] lg:h-[42px]"
        />

        <img
          src="/landing/swing.svg"
          alt="Klaytn"
          className="absolute top-12 left-28 lg:top-24 lg:left-56 z-10 w-[82px] lg:w-[163px] lg:h-[235px]"
          width={163}
          height={235}
          style={{
            animation: 'pulleyUp 6s ease-in-out infinite',
          }}
        />

        <img
          src="/landing/cloud.svg"
          alt="cloud"
          width={380}
          height={148}
          className="absolute bottom-0 right-0 z-0 animate-buoyancy-1 w-[190px] lg:w-[380px] lg:h-[148px]"
        />
      </div>
    </article>
  )
}

export default WhyKup