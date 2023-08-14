import React, { useEffect, useState } from "react";
import List from "../UI/lists";
import dataa from "../../data";
export default function TrainingPlacement() {
  const [selectedOption, setSelectedOption] = useState("MySql");
  const [data, setData] = useState([]); // Initialize with an empty array
  const options = [
    "MySql",
    "BA/QA Training ",
    "SAP ",
    "Testing/QA/Validation ",
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
      <div className="flex px-2  space-x-2 pt-2 ">
        {options.map((option) => (
          <button
            className={`underline text-[#8F8F8F] text-sm ${
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
        <div className="categories_content" key={index}>
          {sect.trainings && (
            <ul className="list-disc px-6">
              {sect.trainings.map((training) => (
                <List key={training.id} name={training.title}></List>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
