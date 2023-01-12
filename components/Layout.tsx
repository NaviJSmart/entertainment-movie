import React from 'react'
import Sidebar from './Sidebar'



const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen p-4 flex'>
        <Sidebar />
        <main >
            {children}
        </main>
    </div>
  )
}

export default Layout