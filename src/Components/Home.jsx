import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import View from './View'


function Home() {
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
            <Sidebar/>
           <View/>
        </div>
      <Player/>
    </div>
  )
}

export default Home