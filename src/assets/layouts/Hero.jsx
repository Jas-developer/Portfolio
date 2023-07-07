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
              <span className="text-2xl font-semibold text-green-500 drop-shadow-2xl md:text-2xl lg:text-4xl lg:font-bold">
                <strong className="text-orange-600">FULL</strong> STACK SOFTWARE
              </span>
              <br />
              <span className=" text-2xl font-semibold drop-shadow-2xl md:text-2xl lg:text-4xl">
                DEVELOPER
              </span>
              <div className="mt-4">
                <button className="w-36 rounded-md bg-black p-2 font-semibold  text-white hover:bg-gray-700 hover:text-xl hover:shadow-2xl md:w-32 md:p-1 lg:w-48 lg:p-2.5">
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
