import Head from 'next/head'

import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ModalPortal from '@/components/ModalPortal'
import { NoSSR } from '@/components/NoSSR'
import useModalStore from '@/store/useModalStore'
import React from 'react'

import Architecture from '../components/Architecture'
import Hero from '../components/Hero'
import WhatIsKup from '../components/WhatIsKup'
import WhatWeHave from '../components/WhatWeHave'
import WhyKup from '../components/WhyKup'

const Landing: React.FC = () => {
  const { modal, closeModal } = useModalStore()

  return (
    <NoSSR>
      <Head>
        <title>KUP</title>
      </Head>
      <Layout>
        <Hero />
        <WhatIsKup />
        <WhyKup />
        <Architecture />
        <WhatWeHave />

        {modal.active && (
          <ModalPortal>
            <Modal onClose={closeModal} title={modal?.title}>
              {modal?.component}
            </Modal>
          </ModalPortal>
        )}
      </Layout>
    </NoSSR>
  )
}

export default Landing