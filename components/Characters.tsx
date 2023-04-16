"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import fetchCharacters from "@/utils/fetchCharacters";
import ReactPaginate from "react-paginate";

const Characters = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCharacters();
      setCharacters(result);
    };
    fetchData();
  }, []);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCharacters.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <form
        className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label className="block text-white text-center font-bold mb-2 mt-10">
          Search any Character
        </label>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </form>
      {characters.length > 0 && (
        <>
          <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-4 sm:grid-cols-2 mx-5 my-5">
            {currentItems.map((character) => (
              <Card key={character.name} characters={character} />
            ))}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(filteredCharacters.length / itemsPerPage)}
            onPageChange={(data) => setCurrentPage(data.selected)}
            containerClassName={
              "text-white flex flex-row flex-wrap items-center justify-center my-auto mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            }
            pageClassName={"px-2 py-3 rounded-lg "}
            pageLinkClassName={
              "px-3 py-2 bg-[#EEDB00] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900  dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#EEDB00] font-bold"
            }
            activeLinkClassName={
              "px-3 py-2 text-blue-600 font-bold border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:text-[#EEDB00] shadow-[#EEDB00]/50 shadow-sm"
            }
            previousClassName={"mr-2"}
            nextClassName={"ml-2"}
            previousLinkClassName={
              "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#EEDB00] font-bold dark:bg-gray-900  dark:hover:bg-gray-700"
            }
            nextLinkClassName={
              "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#EEDB00] font-bold dark:bg-gray-900  dark:hover:bg-gray-700"
            }
            disabledClassName={"opacity-50 pointer-events-none"}
            breakClassName={"text-gray-500 font-bold"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
          />
        </>
      )}{" "}
    </>
  );
};

export default Characters;
