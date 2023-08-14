import React from 'react'

export default function GroceryStore(props) {
  return (
    <div className='container p-2'>
     <div className='picture rounded p-2'>
        <img src={props.g_image} alt="grocery"></img>
     </div>
     <div>
        <h3 className='text-center text-sm font-bold font-Poppins'>{props.title}</h3>
     </div>
    </div>
  )
}
