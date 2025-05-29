import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import SongItems from './SongItems'


function ViewHome() {
  return (
    <>
      <NavBar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Your Top Playlist</h1>
        <div className='flex overflow-auto'>
           {/* albumsData is an array, here iam mapping the data passing item and index.item is a object iterating one by one 
          index is for no duplicate im passing index as a key*/}
          {albumsData.map((item,index) => (<AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Recently Played</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(
            <SongItems
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
            />
            ))}
        </div>
      </div>
    </>
  )
}

export default ViewHome