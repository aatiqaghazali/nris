import React from 'react'
import { Link } from 'react-router-dom'

export default function doubleLineList(props) {
  return (
    <>
    <h3 className='text-[14px] text-[#000000]'>{props.title}</h3>
    <Link to="">
    <li className=" font-Poppins font-[500] text-[14px] py-1 text-mustardCategories-0">
     {props.url}
    </li>
  </Link>
    </>
  )
}

