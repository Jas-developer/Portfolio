const Hero = () => {
  return (
    <div className=" grid md:ml-14 md:grid-cols-2   md:p-4 lg:ml-32  lg:grid-cols-2">
      <div className="grid-item order-1 p-4 md:ml-5 lg:ml-10">
        <img src="./jason-profile.png" alt="" />
      </div>
      <div className="grid-tem order-2 ml-4 md:mt-28 lg:ml-5 lg:mr-10  lg:mt-36 ">
        <span className="text-3xl font-bold md:p-4 md:text-2xl lg:text-center lg:text-4xl">
          Full Stack Software
        </span>
        <br />
        <span className="text-2xl font-semibold md:p-4 lg:text-center lg:text-3xl">
          Developer.
        </span>{" "}
        <br />
        <div className="md:p-4">
          <button
            className="mt-5 w-48 bg-black p-2 text-center  font-semibold text-white
        "
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
