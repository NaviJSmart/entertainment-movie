import React from 'react'
interface navTitleProps  {
    navTitle: string
}

const NavItem = ({navTitle} : navTitleProps) => {
  return (
    <li><a className="px-3 py-2 rounded-full cursor-pointer hover:bg-slate-700 transition-all" href={navTitle.toLowerCase()}>{navTitle}</a></li>
  )
}

export default NavItem