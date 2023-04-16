"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import fetchCharacters from "@/utils/fetchCharacters";

interface Character {
  name: string;
  image: string;
  species: string;
  mass: string;
  height: string;
  manufacturer: string;
  cybernetics: string;
  homeworld: string;
}

const Versus = () => {
  const [character1, setCharacter1] = useState("");
  const [character2, setCharacter2] = useState("");
  const [characters1Data, setCharacters1Data] = useState<Character | null>(
    null
  );
  const [characters2Data, setCharacters2Data] = useState<Character | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const characters = await fetchCharacters();
      const character1Data = characters.find((character: { name: string }) =>
        character.name.toLowerCase().includes("luke")
      );
      const character2Data = characters.find((character: { name: string }) =>
        character.name.toLowerCase().includes("vader")
      );
      setCharacters1Data(character1Data);
      setCharacters2Data(character2Data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const characters = await fetchCharacters();
    const character1Data = characters.find((character: { name: string }) =>
      character.name.toLowerCase().includes(character1.toLowerCase())
    );
    const character2Data = characters.find((character: { name: string }) =>
      character.name.toLowerCase().includes(character2.toLowerCase())
    );

    if (!character1Data) {
      alert(`Character 1 "${character1}" not found`);
      return;
    }

    if (!character2Data) {
      alert(`Character 2 "${character2}" not found`);
      return;
    }

    setCharacters1Data(character1Data);
    setCharacters2Data(character2Data);
  };
  const handleRandomCharacter = async (cardNumber: number): Promise<void> => {
    const characters: Character[] = await fetchCharacters();
    const randomCharacter: Character =
      characters[Math.floor(Math.random() * characters.length)];

    if (cardNumber === 1) {
      setCharacters1Data(randomCharacter);
    } else {
      setCharacters2Data(randomCharacter);
    }

    console.log(
      `Character 1: ${characters1Data?.name}, Character 2: ${characters2Data?.name}`
    );
  };

  return (
    <div className=" flex flex-col mt-20 items-center mx-5 py-1 ">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <form
            className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <label className="block text-white text-center font-bold mb-2">
              Character 1
            </label>
            <input
              type="text"
              placeholder="Search"
              value={character1}
              onChange={(e) => setCharacter1(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <p className="my-4 items-center text-center font-bold text-white">
              VS
            </p>

            <label className="block text-white text-center font-bold mb-2">
              Character 2
            </label>
            <input
              type="text"
              placeholder="Search"
              value={character2}
              onChange={(e) => setCharacter2(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              className="bg-[#EEDB00] shadow-[#EEDB00]/50 shadow-lg hover:bg-[#eeda00c8] text-black font-bold py-2 px-4 rounded w-full my-3"
              type="submit"
            >
              Battle!
            </button>
          </form>
        </div>
      </div>
      {characters1Data && characters2Data && (
        <div className="w-full max-w-[900px]">
          <Card characters={characters1Data} />
          <button
            className="bg-blue-500 hover:bg-blue-700 shadow-blue-500/50 shadow-lg text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => handleRandomCharacter(1)}
          >
            Random
          </button>

          <p className="my-4 items-center text-center font-bold text-white">
            VS
          </p>

          <Card characters={characters2Data} />
          <button
            className="bg-red-500 hover:bg-red-700 shadow-red-500/50 shadow-lg text-white font-bold py-2 px-4 rounded w-full mb-10"
            onClick={() => handleRandomCharacter(2)}
          >
            Random
          </button>
        </div>
      )}
    </div>
  );
};

export default Versus;
