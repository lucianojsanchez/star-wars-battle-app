"use client";
import React, { useState } from "react";
import Card from "./Card";
import fetchCharacters from "@/utils/fetchCharacters";

const Versus = () => {
  const [character1, setCharacter1] = useState("");
  const [character2, setCharacter2] = useState("");
  const [characters1Data, setCharacters1Data] = useState(null);
  const [characters2Data, setCharacters2Data] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const characters = await fetchCharacters();
    const character1Data = characters.find((character: { name: string }) =>
      character.name.toLowerCase().includes(character1.toLowerCase())
    );
    const character2Data = characters.find((character: { name: string }) =>
      character.name.toLowerCase().includes(character2.toLowerCase())
    );
    setCharacters1Data(character1Data);
    setCharacters2Data(character2Data);
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
          <Card characters={characters1Data} />
          <h1>Vs</h1>
          <Card characters={characters2Data} />
        </div>
      )}
    </div>
  );
};

export default Versus;
