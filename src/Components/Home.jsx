import React from 'react'
import Sidebar from './Sidebar'


function Home() {
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
            <Sidebar/>
        </div>
      
    </div>
  )
}

export default Home