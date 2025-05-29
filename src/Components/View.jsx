import React, { useEffect, useRef } from 'react'
import ViewHome from './ViewHome'
import {Routes,Route, useLocation} from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets';

function View() {
  const displayRef = useRef();
  const location = useLocation();
const isAlbum = location.pathname.includes("album");
const AlbumId =isAlbum?location.pathname.slice(-1):"";
const bgclr= albumsData[Number(AlbumId)].bgColor;
console .log(bgclr);

useEffect(()=>{
  if(isAlbum)
    {
    displayRef.current.style.background =`linear-gradient(${bgclr},#121212)`;
  }
  else{
    displayRef.current.style.background="#121212";
  }
})

  return (
    <div 
    ref={displayRef} 
    className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
        <Routes>
            <Route path='/' element={<ViewHome/>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default View