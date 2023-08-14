import React from 'react'

export default function News(props) {
  return (
    <div className='container p-2 border-x-2 border-cyan-50'>
     <div className='picture rounded p-3 px-1 '>
        <img src={props.n_video} alt="grocery"></img>
     </div>
     <div>
        <h3 className='text-start text-xs font-Poppins'>{props.title}</h3>
     </div>
    </div>
  )
}
