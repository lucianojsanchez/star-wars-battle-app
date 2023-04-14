const fetchCharacters = async () => {
  const response = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  );
  const data = await response.json();
  return data.map(
    (character: {
      name: string;
      image: string;
      species: string;
      mass: string;
      height: string;
      manufacturer: string;
      cybernetics: string;
      homeworld: string;
    }) => ({
      name: character.name,
      image: character.image,
      species: character.species,
      mass: character.mass,
      height: character.height,
      manufacturer: character.manufacturer,
      cybernetics: character.cybernetics,
      homeworld: character.homeworld,
    })
  );
};

export default fetchCharacters;
