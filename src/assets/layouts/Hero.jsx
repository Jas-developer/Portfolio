const Hero = () => {
  return (
    <div className="grid md:mx-24 lg:mx-48 lg:grid-cols-2">
      <div className="grid-item ">
        <div className="flex justify-center  bg-black">
          <img src="./jas.png" alt="" />
        </div>
      </div>
      <div className="grid-item bg-green-400">
        <h1 className="bg-green-400 text-center">RIGHT-HERO-SECTION</h1>
      </div>
    </div>
  );
};

export default Hero;
