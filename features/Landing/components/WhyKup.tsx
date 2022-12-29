/* eslint-disable @next/next/no-img-element */
import Spline from '@splinetool/react-spline'
import clsx from 'clsx'
import { ComponentProps, useState } from 'react'
import { useWindowSize } from 'react-use'

const BREAK_POINT = 800

const WhyKup: React.FC<ComponentProps<'article'>> = () => {
  const { width } = useWindowSize()
  const [loaded, setLoaded] = useState<boolean>(false)

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
        <p className="text-white text-sm lg:text-base leading-5 lg:text-right tracking-tight">
          For a metaverse to succeed, it must provide as much content as
          possible so that users can enjoy content seamlessly and without much
          repetition. It is cumbersome for content providers (Unity developers)
          to work in a domain that they have little to no practice in. In short,
          KUP helps content providers build a metaverse with ease, even if they
          are not as skilled in other areas. By doing so, they have more time to
          work on the quality of the content itself.
        </p>
      </div>
      <div
        className="order-1 lg:order-2 relative"
        style={{
          width: width > BREAK_POINT ? 530 : 371,
          height: width > BREAK_POINT ? 600 : 420,
        }}
      >
        <Spline
          scene="https://prod.spline.design/GDvfs1L9lPNpgxgy/scene.splinecode"
          style={{
            position: 'absolute',
            display: 'block',
            top: 0,
            left: 0,
            zoom: width > BREAK_POINT ? 1 : 1 / 1.45,
            pointerEvents: 'none',
          }}
          onLoad={(app) => {
            setLoaded(true)
          }}
        />
        <span
          className="text-sm text-yellow block font-bold text-center w-[80px] h-[34px] tracking-tight"
          style={{
            display: 'block',
            position: 'absolute',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
            transform: 'rotate(-7deg)',
            top: width > 800 ? 250 : 170,
            left: width > 800 ? 260 : 170,
          }}
        >
          Metaverse <br />
          Hitch hikers
        </span>
        <span
          className="text-xl text-yellow block font-bold text-center tracking-tight"
          style={{
            display: 'block',
            position: 'absolute',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
            bottom: width > BREAK_POINT ? 80 : 50,
            left: width > BREAK_POINT ? 170 : 90,
          }}
        >
          Metaverse Hitch hikers
        </span>
        <img
          src="/landing/pulley.png"
          alt="pulley"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            opacity: loaded ? 0 : 1,
          }}
          width={530}
          height={600}
        />
      </div>
    </article>
  )
}

export default WhyKup