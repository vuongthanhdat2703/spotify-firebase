import React from 'react'

export default function DetailSong() {
  return (
    <div className='col-span-1 text-white'>
      <h2 className='text-cyan-500 font-bold'>Now Playing</h2>
      <h2 className='text-slate-400 text-2xl mt-2'>Sing me to sleep</h2>
      <div className='w-[240px] m-auto mt-10'>
        <img className='w-full' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"></img>
      </div>
      <div className='flex justify-evenly items-center mt-10'>
        <img className='w-[70px] rounded-full' src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"></img>
        <span>Già cùng nhau là được</span>
      </div>
    </div>
  )
}
