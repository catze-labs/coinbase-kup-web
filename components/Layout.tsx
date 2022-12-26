import { PropsWithChildren } from 'react'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 w-full min-h-screen flex-center">
        {children}
      </div>
    </div>
  )
}

export default Layout