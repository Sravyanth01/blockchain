import hero from "../assets/Hero.png";

const Hero = () => {
  return (
    <div className="flex items-center gap-10 p-14 justify-center hero-gradient">
      {/* hero text */}
      <div>
        <h1 className="text-4xl font-bold">
        Next-Gen Certification
          <br />
          Authentic recognition for your achievements.
        </h1>
        <p className="text-lg mt-4">Publishing certificates on NGC is easy</p>
        <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
          Know more
        </button>
      </div>
      {/* hero image */}
      <div>
        <img src={hero} alt="Hero logo" />
      </div>
    </div>
  );
};

export default Hero;
