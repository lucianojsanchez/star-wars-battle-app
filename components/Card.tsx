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
  return (
    <div className="group pt-5">
      <div className="overflow-hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-0">
        <img
          src={characters.image}
          alt={characters.name}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        />
        <div className="overflow-hidden flex flex-col justify-between p-4 leading-normal ">
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
            {characters.homeworld
              ? characters.homeworld.charAt(0).toUpperCase() +
                characters.homeworld.slice(1)
              : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
