import React from 'react'
import SearchInput from './SearchInput'
import Sidebar from './Sidebar'



const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen flex p-4'>
        <Sidebar />
        <main className='w-full h-full px-6'>
        <SearchInput />
            {children}
        </main>
    </div>
  )
}



export default Layout