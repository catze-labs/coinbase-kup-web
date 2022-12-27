import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import FullPageScroll from '../components/FullPageScroll'

import Architecture from '../components/sections/Architecture'
import Hero from '../components/sections/Hero'
import WhatIsKup from '../components/sections/WhatIsKup'
import WhatWeHave from '../components/sections/WhatWeHave'
import WhyKup from '../components/sections/WhyKup'

const Landing: React.FC = () => {
  useEffect(() => {}, [])

  return (
    <Layout>
      <Hero />
      <WhatIsKup />
      <WhyKup />
      <Architecture />
      <WhatWeHave />
    </Layout>
  )
}

export default Landing