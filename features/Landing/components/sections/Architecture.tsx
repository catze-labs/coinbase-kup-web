/* eslint-disable @next/next/no-img-element */
import { ComponentProps } from 'react'

const Architecture: React.FC<ComponentProps<'div'>> = () => {
  return (
    <div className="flex items-center justify-between full-screen relative bg-orange pt-nav-h">
      <picture className="ml-32">
        <source
          media="(min-width: 768px)"
          srcSet="/landing/architecture.png"
          width={654}
          height={454}
        />
        <source
          media="(min-width: 490px) and (max-width: 767px)"
          srcSet="/landing/architecture-tablet.png"
          width={490}
          height={346}
        />
        <img
          src="/landing/architecture-mobile.png"
          alt="architecture"
          width={340}
          height={232}
        />
      </picture>
      <div className="w-72 h-full mr-[109px] flex flex-col items-start relative">
        <img
          src="/landing/contract-path.svg"
          alt="contract-path"
          className="absolute top-0 -right-4"
          width={138}
          height={120}
        />
        <div className="w-fit mt-[100px]">
          <p className="text-center text-main-default text-3xl font-bold">
            Do it!
          </p>
          <p className="text-5xl leading-normal font-bold text-main-default">
            Contract
          </p>
        </div>
        <img
          src="/landing/logo-cup-arch.svg"
          alt="cup"
          className="mt-[74px]"
          width={205}
          height={160}
        />
      </div>
    </div>
  )
}
export default Architecture