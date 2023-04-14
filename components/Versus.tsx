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
  // add more properties here if needed
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
  const [hotReload, setHotReload] = useState(false);

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
  const handleRandomCharacter = async (cardNumber: number) => {
    const characters = await fetchCharacters();
    const randomCharacter =
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
    <div className=" flex flex-col  items-center versus-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Character 1"
          value={character1}
          onChange={(e) => setCharacter1(e.target.value)}
          className="text-black"
        />
        <div>
          <h3>VS</h3>
        </div>
        <input
          type="text"
          placeholder="Character 2"
          value={character2}
          onChange={(e) => setCharacter2(e.target.value)}
          className="text-black"
        />
        <button type="submit">Battle!</button>
      </form>
      {characters1Data && characters2Data && (
        <div className="">
          <Card
            characters={characters1Data}
            hotReload={hotReload}
            setHotReload={setHotReload}
          />
          <button onClick={() => handleRandomCharacter(1)}>Random</button>
          <h1 className="m-5">Versus</h1>
          <Card
            characters={characters2Data}
            hotReload={hotReload}
            setHotReload={setHotReload}
          />
          <button onClick={() => handleRandomCharacter(2)}>Random</button>
        </div>
      )}
    </div>
  );
};

export default Versus;
