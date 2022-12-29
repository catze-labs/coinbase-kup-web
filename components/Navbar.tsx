/* eslint-disable @next/next/no-img-element */
import LoginForm from '@/features/Auth/components/LoginForm'
import useModalStore from '@/store/useModalStore'
import Link from 'next/link'
import React from 'react'
import { NoSSR } from './NoSSR'

const NavBar: React.FC = () => {
  const { openModal } = useModalStore()

  return (
    <NoSSR>
      <nav className="fixed top-0 left-0 z-50 right-0 h-nav-mobile lg:h-nav-h bg-white shadow-nav">
        <div className="flex w-full h-nav-mobile lg:h-nav-h justify-between items-center px-4 lg:px-[50px]">
          <Link href="/#hero">
            <img
              src="/logo-gnb.svg"
              alt="logo"
              width={114}
              height={30}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-12">
            <ul className="hidden lg:flex items-center gap-[50px] text-xl font-bold">
              <li>
                <a className="hover:underline" href="#whatiskup">
                  What is KUP?
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#whykup">
                  Why KUP?
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#contract">
                  Contract
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#wehave">
                  We have
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#play">
                  Play
                </a>
              </li>
            </ul>
            <button
              className="px-4 lg:w-[180px] h-[50px] bg-white rounded-xl flex-center border border-orange"
              onClick={() =>
                openModal({
                  title: 'Sign In',
                  component: <LoginForm />,
                })
              }
            >
              <span className="text-orange text-base font-bold leading-none">
                Connect <br className="lg:hidden" />
                Wallet
              </span>
            </button>
          </div>
        </div>
      </nav>
    </NoSSR>
  )
}

export default NavBar