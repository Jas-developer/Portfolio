const Hero = ({ discription }) => {
  return (
    <div className="md:mx-24 lg:mx-48">
      <div className="grid  md:grid-cols-2 ">
        <div className="grid-item ">
          <div className="ml-2 flex justify-center ">
            <img src="./jason-profile.png" alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="grid-item">
          <div className="flex ">
            <div className="p-4  md:mt-24 lg:mt-48">
              <div className="flex flex-col gap-3">
                <div className="flex-item flex flex-row text-3xl font-semibold lg:text-4xl">
                  Full Stack Software Engineer
                </div>
                <span className="pr-6 text-lg font-semibold text-gray-900">
                  A 21-year-old software engineer based in Davao City,
                  Philippines.
                </span>
                <div className="flex-item"></div>
              </div>
              <div className="mt-2 flex flex-row gap-2">
                <button className="w-36 bg-gray-700  p-2 font-semibold text-white transition-all duration-700 hover:scale-110 lg:w-40">
                  Hire Me
                </button>
                <button className="text-lg font-bold text-gray-700 underline">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 font-semibold text-gray-500 md:mx-3 lg:mx-10">
        {discription}
      </div>
    </div>
  );
};

export default Hero;
