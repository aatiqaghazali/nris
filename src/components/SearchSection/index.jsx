import React, { useState } from 'react'
import "./index.css"
import {CiSearch} from "react-icons/ci"
export default function Index() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== checkboxValue));
    }
  };

  const handleSearch = () => {
    // Perform search logic using selectedCheckboxes and searchValue
    console.log('Selected Checkboxes:', selectedCheckboxes);
    console.log('Search Value:', searchValue);
    // Implement your search logic here
  };


 
  return (
   
    <>
  <div className="relative mb-4 flex w-full flex-wrap items-stretch bg-white rounded-lg">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="what are you looking in Newyork..."
      aria-label="Search"
      aria-describedby="button-addon1" />

   
    <button
      className="relative z-[2]  flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-[900] uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light" onClick={handleSearch}>
     <CiSearch color="#2E9280" fontSize={25} ></CiSearch>
    </button>
  </div>
 <p className='text-white font-Poppins text-sm px-2'>Start Quick Search...</p>
  <div id="checkboxes" className='space-x-2 flex'>
    <input type="checkbox" name="rGroup" value="1" id="r1" checked={selectedCheckboxes.includes('1')}
    onChange={handleCheckboxChange} />
    <label class="whatever  md:w-24 md:h-16 " for="r1">
      <img src={require('../../assets/imgs/icons/food.svg').default}></img>
    </label>
    <input type="checkbox" name="rGroup" value="2" id="r2" checked={selectedCheckboxes.includes('2')}
    onChange={handleCheckboxChange} />
    <label class="whatever  md:w-24 md:h-16   " for="r2"> <img src={require('../../assets/imgs/icons/cali.svg').default}></img></label>
    <input type="checkbox" name="rGroup" value="3" id="r3" checked={selectedCheckboxes.includes('3')}
    onChange={handleCheckboxChange} />
    <label class="whatever  md:w-24 md:h-16 " for="r3"> <img src={require('../../assets/imgs/icons/coffee.svg').default}></img></label>
    <input type="checkbox" name="rGroup" value="4" id="r4" checked={selectedCheckboxes.includes('4')}
    onChange={handleCheckboxChange} />
    <label class="whatever  md:w-24 md:h-16 " for="r4"> <img src={require('../../assets/imgs/icons/dice.svg').default}></img></label>
    <input type="checkbox" name="rGroup" value="5" id="r5" checked={selectedCheckboxes.includes('5')}
    onChange={handleCheckboxChange} />
    <label class="whatever  md:w-24 md:h-16 " for="r5"> <img src={require('../../assets/imgs/icons/car.svg').default}></img></label>
    <input type="checkbox" name="rGroup" value="6" id="r6" checked={selectedCheckboxes.includes('6')}
    onChange={handleCheckboxChange} />
    <label class="whatever  md:w-24 md:h-16 " for="r6"> <img src={require('../../assets/imgs/icons/settings.svg').default}></img></label>


</div>
<div className="relative mb-4 flex  w-60 py-1 px-2 flex-wrap items-stretch bg-black rounded-full">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="serach now"
      aria-label="Search"
      aria-describedby="button-addon1"
      value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} />
      

   
    <button
      className="relative z-[2]  flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-[900] uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light" onClick={handleSearch}>
     <CiSearch color="white" fontSize={25} ></CiSearch>
    </button>
  </div>
</>

  
  )
}
