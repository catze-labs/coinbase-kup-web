/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { ComponentProps } from 'react'

const Architecture: React.FC<ComponentProps<'div'>> = () => {
  return (
    <article
      id="contract"
      className={clsx([
        `flex items-end lg:items-center justify-center gap-12 lg:justify-between full-screen relative bg-orange`,
        `flex-col lg:flex-row`,
        `pt-nav-mobile lg:pt-nav-h`,
      ])}
    >
      <picture className="mx-auto order-2 lg:order-1">
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
      <div className="w-[200px] lg:w-72 lg:h-[85vh] lg:mr-[109px] mr-12 flex flex-col items-start relative lg:order-1">
        <img
          src="/landing/contract-path.svg"
          alt="contract-path"
          className="absolute -top-4 lg:top-0 -right-4 lg:-right-4 w-[69px] h-[70px] lg:w-[138px] lg:h-[120px]"
          width={138}
          height={120}
        />
        <div className="w-fit lg:mt-[100px]">
          <p className="text-center text-main-default text-xl lg:text-3xl font-bold">
            Do it!
          </p>
          <p className="text-3xl lg:text-5xl leading-normal font-bold text-main-default">
            Contract
          </p>
        </div>
        <img
          src="/landing/logo-cup-arch.svg"
          alt="cup"
          width={340}
          height={300}
          className="mt-4 lg:mt-[74px] w-[150px] lg:w-[340px] lg:h-[300px]"
        />
      </div>
    </article>
  )
}
export default Architecture