import React from 'react'
import Sidebar from './Sidebar'



const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen p-4 flex'>
        <Sidebar />
        <main className='ml-10'>
            {children}
        </main>
    </div>
  )
}

export default Layout