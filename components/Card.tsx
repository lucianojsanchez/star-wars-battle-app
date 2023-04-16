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
    boxShadow:
      "0 0 0 3px rgba(239, 68, 68, 0.5), 0 0 0 6px rgba(239, 68, 68, 0.3)",
    height: "260px",
    width: "260px",
  };

  return (
    <div className="group py-2">
      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg  shadow-gray-600/20 shadow-xl md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900  dark:hover:bg-gray-700 m-0 flex flex-col items-center max-h-full py-5 px-4">
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
          } object-cover rounded-t-lg md:rounded-none md:rounded-l-lg w-64
          h-64 mt-1`}
          onLoad={() => setLoading(false)}
        />
        <div
          className={`${
            loading ? "hidden" : ""
          } overflow-hidden leading-normal  ml-10`}
        >
          <div className="">
            <h2 className="mb-2 text-2xl font-robotocondensed font-bold tracking-tight text-gray-900 dark:text-white">
              {characters.name}
            </h2>
            <div className="font-source font-semibold">
              <h3>
                <span className="text-[#EEDB00]">Species:</span>{" "}
                {characters.species.charAt(0).toUpperCase() +
                  characters.species.slice(1)}
              </h3>
              <p>
                <span className="text-[#EEDB00]">Weight:</span>{" "}
                {characters.mass ? `${characters.mass} kg` : "Unknown"}
              </p>
              <p>
                <span className="text-[#EEDB00]">Height:</span>{" "}
                {characters.height ? `${characters.height} m` : "Unknown"}
              </p>
              {characters.manufacturer ? (
                <p>
                  <span className="text-[#EEDB00]">Manufacturer:</span>{" "}
                  {characters.manufacturer}
                </p>
              ) : characters.cybernetics ? (
                <p>
                  <span className="text-[#EEDB00]">Cybernetics:</span>{" "}
                  {characters.cybernetics}
                </p>
              ) : null}
              <p>
                <span className="text-[#EEDB00]">Homeworld:</span>{" "}
                {Array.isArray(characters.homeworld)
                  ? characters.homeworld
                      .map((hw) => hw.charAt(0).toUpperCase() + hw.slice(1))
                      .join(", ")
                  : (characters.homeworld ?? "Unknown")
                      .charAt(0)
                      .toUpperCase() +
                    (characters.homeworld ?? "Unknown").slice(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
