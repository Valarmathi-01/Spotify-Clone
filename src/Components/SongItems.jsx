import React from 'react'

function SongItems(props) {
  return (
    <div className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded min-w-[155px] max-h-[189px]' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default SongItems