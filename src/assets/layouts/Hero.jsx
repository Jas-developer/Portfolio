const Hero = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:mx-24 lg:mx-48">
      <div className="grid-item inline-flex sm:flex ">
        <div className="grid-row grid gap-2 p-4">
          <div className="text-2xl md:text-2xl lg:text-4xl">
            <span className="w-100 block">
              <b>Full-Stack </b>Software Engineer
            </span>
          </div>
          <div className="block font-semibold lg:text-xl">
            <span>Based in Davao City</span>
            <span> Philippines.</span>
          </div>
          <div className="mt-3 block">
            <span>Open Source Enthusiast | Lifelong Learner</span>
          </div>
          <div className="block">
            <button className="mt-3  rounded-sm bg-gray-400 p-2 px-5">
              + Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
      <div className="grid-item ">
        <img src="" alt="" />
        <h1>Jason Evaristo</h1>
      </div>
    </div>
  );
};

export default Hero;
