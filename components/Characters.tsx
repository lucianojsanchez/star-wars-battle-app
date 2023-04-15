"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import fetchCharacters from "@/utils/fetchCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <>
      <form
        className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label className="block text-white text-center font-bold mb-2">
          Search
        </label>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </form>

      <div className="grid grid-cols-3 gap-4">
        {filteredCharacters.map((character) => (
          <Card characters={character} />
        ))}
      </div>
    </>
  );
};

export default Characters;
