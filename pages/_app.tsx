import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <div id="modal"></div>
    </RecoilRoot>
  )
}

export default App