import Card from "@/components/Card";
import React from "react";
import fetchCharacters from "@/utils/fetchCharacters";
import Characters from "@/components/Characters";

const page = async () => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <Characters />
    </div>
  );
};

export default page;
