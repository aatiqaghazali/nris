import React from "react";

export default function movieCard(props) {
  const ratings = props.ratings;

  return (
    <div className=" p-2 ">
      
      <div className="rounded-lg">
        <img src={props.img} alt="movie img" className="rounded-lg"></img>
      </div>
      <h3 className="font-bold text-sm py-2 ">{props.title}</h3>
      <div className="container ratings">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <button key={index}>
              <svg
                className={`w-6 h-auto ${index <= ratings ? 'text-stars-0' : 'text-white '} fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                
                viewBox="0 0 512 512"
              >
                <path stroke="black" stroke-width="5" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
            </button>
          ))}
        </div>
        <div>
          <ul className=" list-disc px-3 ">
          <li>
             <div className="grid grid-cols-2  text-sm">
              <div className="underline">CineJosh</div><div className="text-right text-points-0 font-bold">
                {props.CineJosh}
              </div>
             </div>
            </li>
          <li>
            <div className="grid grid-cols-2 text-sm ">
            <div className="underline">TeluguMirchi</div><div className="text-right text-points-0 font-bold">
            {props.Telugu}
              </div></div>
             
            
            </li>
          <li>
            <div className="grid grid-cols-2  text-sm">
            <div className="underline">123Telugu</div><div className="text-right text-points-0 font-bold">
            {props.Telugu123}
              </div></div>
            </li>
          <li>
            <div className="grid grid-cols-2  text-sm">
            <div className="underline">telugubulletin</div><div className="text-right text-points-0 font-bold">
            {props.telugubulletin}
              </div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
