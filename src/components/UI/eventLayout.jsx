import React from 'react'

export default function eventLayout(props) {
  return (
    
   
  <div className="flex  space-x-2 p-4 py-5">
    {/* Small Square Image */}
    <div className="w-22 h-12  rounded flex-shrink-0">
      <img
        src={require("../../assets/imgs/icons/dummy.png")}
        alt="event img"
        
      ></img>
    </div>

    {/* Text and Views */}
    <div className="">
      <div className="font-Poppins  text-xs font-[500] ">
       {props.title}
      </div>
      <div className="text-xs text-[#747474]">
        Views: <span className="font-bold">{props.views}</span>
      </div>
    </div>
  </div>

  )
}
