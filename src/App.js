import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { Navbar } from "./components/Navbar";
import Pagination from "./components/Pagination"; // Import the Pagination component

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    // Replace 'your-json-file.json' with the path to your JSON file
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error('Error reading JSON file:', error);
      });
  }, []);

  const filteredCars = () => {
    let currentCars = [];
    if (!jsonData || searchQuery.trim() === '') {
      currentCars = jsonData;
    } else {
      currentCars = jsonData.filter((detail) =>
        detail.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return currentCars;
  };

  const totalPages = Math.ceil(filteredCars().length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCars().slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="App">
        <Navbar setSearchQuery={setSearchQuery} />
        <div className="flex flex-wrap items-center justify-around">
          {currentItems.length === 0 && <p>No data to show.</p>}
          {currentItems.map((detail) => (
            <Card key={detail.id} detail={detail} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

export default App;
