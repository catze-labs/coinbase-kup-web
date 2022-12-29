/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import Image from 'next/image'
import React, { ComponentProps } from 'react'

const Hero: React.FC<ComponentProps<'header'>> = () => {
  return (
    <header
      id="hero"
      className={clsx([
        'full-screen flex-center bg-gradient-to-r from-main-lightest to-white',
        'px-4 flex-col gap-[70px] pt-nav-mobile',
        'lg:pt-nav-h lg:flex-row',
      ])}
    >
      <div className="text-main flex flex-col">
        <p className="text-3xl lg:text-5xl font-bold mb-5">
          It&apos;s not my cup of tea.
        </p>

        <h1 className="flex items-center gap-4 lg:gap-9">
          <span className="text-3xl lg:text-5xl font-bold">I want </span>
          <img
            src="/landing/logo-text.svg"
            alt="KUP"
            className="h-12 lg:h-auto"
          />
        </h1>
      </div>
      <div className="animate-buoyancy-1 w-40 h-[200px] lg:h-[440px] pt-10 lg:w-auto">
        <Image
          src="/landing/hero-cup.png"
          alt="cup"
          width={490}
          height={440}
          className="rotate-[15deg]"
        />

        <img
          src="/landing/hero-bubble.png"
          alt="cup"
          width={80}
          height={80}
          className="rotate-[15deg] block mix-blend-multiply absolute top-0 right-0 lg:right-[90px] w-10 lg:w-[80px]"
        />

        <img
          src="/landing/hero-bubble.png"
          alt="cup"
          width={40}
          height={40}
          className="rotate-[15deg] block mix-blend-multiply absolute top-10 right-10 lg:top-[80px] lg:right-[180px] w-4 lg:w-[40px]"
        />
      </div>
    </header>
  )
}

export default React.memo(Hero)