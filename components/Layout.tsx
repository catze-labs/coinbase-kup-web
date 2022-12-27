import { PropsWithChildren } from 'react'
import NavBar from './Navbar'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}

export default Layout