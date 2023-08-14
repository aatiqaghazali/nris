import React, { useState, useEffect } from "react";
import dataa from "../../data"
import EventList from "./eventLayout";
function App() {
  const [selectedOption, setSelectedOption] = useState("Personal");
  const [data, setData] = useState([]); // Initialize with an empty array
  const options = [
    "Personal",
    "Community",
    "Religious",
    "Cultural",
    "Movie",
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
      <div className="flex justify-center  space-x-2 ">
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
      <div className="grid md:grid-cols-2" key={index}>
        {sect.events && (
         
            sect.events.map((event) => (
              
             <EventList key={event.id} title={event.title} views={event.Views}></EventList>
            ))
        
        )}
      </div>
    ))}
          
        
        
    
    </div>
  );
}

export default App;
