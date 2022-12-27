/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
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
      <div className="animate-buoyancy-1 w-40 lg:w-auto">
        <img src="/landing/logo-cup.svg" alt="cup" className="rotate-[15deg]" />
      </div>
    </header>
  )
}

export default React.memo(Hero)