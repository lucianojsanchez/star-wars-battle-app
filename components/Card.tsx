"use client";
import { useState, CSSProperties } from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

type Props = {
  characters: {
    name: string;
    image: string;
    species: string;
    mass: string;
    height: string;
    manufacturer: string;
    cybernetics: string;
    homeworld: string;
  };
};

const Card = ({ characters }: Props) => {
  const [loading, setLoading] = useState(true);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="group py-2">
      <div className="overflow-hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-0">
        <ClipLoader
          color={"#000"}
          loading={loading}
          cssOverride={override}
          size={150}
        />
        <img
          src={characters.image}
          alt={characters.name}
          className={`${
            loading ? "hidden" : ""
          } object-cover  rounded-t-lg md:rounded-none md:rounded-l-lg w-64
          h-64 mt-1`}
          onLoad={() => setLoading(false)}
        />
        <div
          className={`${
            loading ? "hidden" : ""
          } overflow-hidden flex flex-col justify-between leading-normal px-2 m-1`}
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {characters.name}
          </h2>
          <h3>
            Species:{" "}
            {characters.species.charAt(0).toUpperCase() +
              characters.species.slice(1)}
          </h3>
          <p>Weigth: {characters.mass} kg</p>
          <p>Height: {characters.height} m</p>
          {characters.manufacturer ? (
            <p>Manufacturer: {characters.manufacturer}</p>
          ) : characters.cybernetics ? (
            <p>Cybernetics: {characters.cybernetics}</p>
          ) : null}
          <p>
            Homeworld:{" "}
            {Array.isArray(characters.homeworld)
              ? characters.homeworld
                  .map((hw) => hw.charAt(0).toUpperCase() + hw.slice(1))
                  .join(", ")
              : (characters.homeworld ?? "Unknown").charAt(0).toUpperCase() +
                (characters.homeworld ?? "Unknown").slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
