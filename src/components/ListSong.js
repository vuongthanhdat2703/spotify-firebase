import React from 'react'

export default function ListSong() {
  return (
    <div className='col-span-2 text-white' >
      <table className='table-auto w-full'>
          <thead className='text-white h-24'>
            <tr>
              <th className='w-[10%]'>#</th>
              <th className='text-left'>Title</th>
              <th className='w-[10%]'>Author</th>
              <th className='w-[15%]'><i className='fa fa-download'></i></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center'>123</td>
              <td>2</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}
