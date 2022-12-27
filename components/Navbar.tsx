/* eslint-disable @next/next/no-img-element */
import React from 'react'
import useModal from '@/hooks/useModal'
import Modal from './Modal'
import ModalPortal from './ModalPortal'
import { NoSSR } from './NoSSR'


const NavBar: React.FC = () => {
    const { modalOpen, openModal, closeModal } = useModal();

    return (
    <NoSSR>
        <nav className="fixed top-0 left-0 z-50 right-0 h-nav-h bg-white shadow-nav">
            <div className="flex w-full h-nav-h justify-between items-center px-[50px]">
                <img src="/logo-gnb.svg" alt="logo" width={114} height={30} />
                <div className="flex items-center gap-12">
                    <ul className="flex items-center gap-[50px] text-xl font-bold">
                        <li>
                            <a className="hover:underline" href="#">
                                What is KUP?
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline" href="#">
                                Why KUP?
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline" href="#">
                                Contract
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline" href="#">
                                We have
                            </a>
                        </li>
                    </ul>
                    <button
                        className="w-[180px] h-[50px] bg-orange rounded flex-center"
                        onClick={openModal}
                    >
                        <span className="text-white text-base font-bold">
                        wallet connect
                        </span>
                    </button>
                </div>
            </div>
            <ModalPortal>
                {modalOpen && <Modal title="Wallet" onClose={closeModal} />}
            </ModalPortal>
        </nav>
    </NoSSR>
    )
}

export default NavBar