import HeroButton from "./HeroButton";

interface props {
  image: string;
  title: string;
  text: string;
  buttonName: string;
  isAuthorised: boolean;
  isContractOwner: boolean;
}

const AcademicHero = ({
  image,
  title,
  text,
  buttonName,
  isAuthorised,
  isContractOwner,
}: props) => {
  return (
    <div className="flex justify-center gap-44 p-14 bg-gradient-to-r from-pink-500 via-red-500 whitespace-pre-line">
      <div>
        {/* hero image */}
        <img src={image} alt="" height={350} width={350}/>
      </div>
      <div>
        {/* hero text */}
        <h1 className="text-4xl font-bold mt-20">{title}</h1>
        <p className="text-xl font-light mt-5">{text}</p>
        <div>
          <HeroButton
            isContractOwner={isContractOwner}
            isAuthorised={isAuthorised}
            title={buttonName}
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicHero;
