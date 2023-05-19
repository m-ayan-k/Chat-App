import React from 'react'
import Navbar from './Navbar'
// import Search from './Search'
import Chats from './Chats'
const Search=React.lazy(()=>import("../components/Search"));


export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}
