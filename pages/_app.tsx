import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'

import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer
        draggable
        position='top-center'
        progressStyle={{ background: '#FBB03B' }}
      />
    </RecoilRoot>
  )
}

export default App