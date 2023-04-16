import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-screen bg-[url('https://free4kwallpapers.com/uploads/originals/2020/09/14/a-minimalist-star-wars-i-made-wallpaper.jpg')] bg-cover bg-center sm:bg-content ">
      <div className="bg-[#1b1b1b]/50 absolute inset-0 bg-cover ">
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-white text-4xl sm:text-6xl mb-6 md:mb-8 font-star-wars tracking-[.09em] leading-tight text-center">
              Welcome to the{" "}
              <span
                className="text-black"
                style={{
                  WebkitTextStroke: "1px #EEDB00",
                }}
              >
                Star Wars
              </span>{" "}
              Battle Website
            </h1>
            <p className="text-[#f0f0f0] text-base sm:text-lg md:text-xl mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto text-center font-source">
              Explore epic battles between iconic characters from the Star Wars
              universe and discover new ones! Let's delve into the thrilling
              world of lightsabers, the Force, and intergalactic warfare.
            </p>
            <Link href="/characters">
              <button className="bg-yellow-400 hover:bg-yellow-500 shadow-[#EEDB00]/50 shadow-lg text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
