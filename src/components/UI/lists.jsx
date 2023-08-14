import React from 'react'
import { Link } from 'react-router-dom'

export default function lists(props) {
  return (
   
                  <Link to="">
                    <li className=" font-Poppins font-[500] text-[14px] underline underline-offset-2  py-2">
                     {props.name}
                    </li>
                  </Link>
                 
              
  )
}
