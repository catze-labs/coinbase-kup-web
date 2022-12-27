/* eslint-disable @next/next/no-img-element */
import { ComponentProps } from 'react'

const WhyKup: React.FC<ComponentProps<'div'>> = () => {
  return (
    <div className="flex-center full-screen pt-nav-h bg-main-default gap-20">
      <div className="max-w-[450px]">
        <h2 className="text-white tracking-tighter text-5xl font-bold mb-7 text-right">
          Why KUP?
        </h2>
        <p className="text-white text-base leading-5 text-right">
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
        className="relative"
        style={{ width: 434, height: 464 }}
      >
        <img
          src="/landing/pulley.png"
          alt="pulley"
          width={321}
          height={127}
          className="absolute z-20 top-0 left-0"
        />

        <img
          src="/landing/logo-klaytn-light.svg"
          alt="Klaytn"
          width={140}
          height={42}
          className="absolute top-40 left-32"
        />

        <img
          src="/landing/swing.svg"
          alt="Klaytn"
          className="absolute top-24 left-56 z-10"
          style={{
            animation: 'pulleyUp 6s ease-in-out infinite',
          }}
        />

        <img
          src="/landing/cloud.svg"
          alt="cloud"
          width={380}
          height={148}
          className="absolute bottom-0 right-0 z-0 animate-buoyancy-1"
        />
      </div>
    </div>
  )
}

export default WhyKup