import React, { useContext } from 'react'
import { Songs } from '../Context'
export default function ListSong() {
  const { DataSongs } = useContext(Songs)

  return (
    <div className='col-span-2 text-white overflow-y-scroll' >
      <table className='table-auto w-full '>
        <thead className='text-white h-24'>
          <tr>
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody className='text-slate-300'>
          {DataSongs.map((song, index) => (
            <tr key={index} className='bg-slate-800 h-12 hover:bg-gray-600'>
              <td className='text-center'>{index + 1}</td>
              <td >{song.name}</td>
              <td className='text-center'>{song.author}</td>
              <td className='text-center'><a href='{song.url}'>
                <i className='fa fa-download'></i>
                </a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
