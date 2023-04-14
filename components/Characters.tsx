"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import fetchCharacters from "@/utils/fetchCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCharacters();
      setCharacters(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {characters.map((character) => (
        <Card characters={character} />
      ))}
    </>
  );
};

export default Characters;
