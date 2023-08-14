import React, { useState, useEffect } from "react";
import dataa from "../../data"
import DoubleLineList from "./doubleLineList";
function App() {
  const [selectedOption, setSelectedOption] = useState("Accomodation");
  const [data, setData] = useState([]); // Initialize with an empty array
  const options = [
    "Accomodation",
    "Campus",
    "Other",
  ];
  useEffect(() => {
    // Fetch data from the API based on the selectedOption and update the state
    fetchData(selectedOption);
  }, [selectedOption]);

  const fetchData = async (option) => {
    // Implement your API fetching logic here
    // For example:
    console.log(option);
    const response = await fetch(`your-api-url/${option}`);
    const fetchedData = await response.json();
    setData(fetchedData);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {/* Options */}
      <div className="flex px-2  space-x-2 ">
        {options.map((option) => (
          <button
            className={`underline text-[#8F8F8F] ${
              selectedOption === option ? "text-[#E78F00]" : ""
            }`}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Display Data */}

      {/*} {data.map((item) => (
          <div key={item.id}>{item.title}</div>
       ))}*/}
 {dataa.map((sect, index) => (
    
        sect.student_talk && (
          <ul className=" px-2 py-3">
            {sect.student_talk.map((talk) => (
              
             <DoubleLineList key={talk.id} title={talk.title} url={talk.url}></DoubleLineList>
             ))}
             </ul>
           )
       
       ))}
          
        
        
    
    </div>
  );
}

export default App;
