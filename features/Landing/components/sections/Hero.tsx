/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps } from 'react'

const Hero: React.FC<ComponentProps<'header'>> = () => {
  return (
    <header className="full-screen flex-center gap-[70px] pt-nav-h bg-gradient-to-r from-main-ligtest to-white">
      <div className="text-main flex flex-col">
        <p className="text-5xl font-bold mb-5">It&apos;s not my cup of tea.</p>

        <h1 className="flex items-center gap-9">
          <span className="text-5xl font-bold">I want </span>
          <img src="/landing/logo-text.svg" alt="KUP" />
        </h1>
      </div>
      <div className="animate-buoyancy-1">
        <img src="/landing/logo-cup.svg" alt="cup" className="rotate-[15deg]" />
      </div>
    </header>
  )
}

export default React.memo(Hero)