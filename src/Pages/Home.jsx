import React from 'react'
import Sidebar from '../components/Sidebar'
const Chat=React.lazy(()=>import("../components/Chat"));

export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
