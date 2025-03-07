import { useContext, lazy, Suspense } from "react";

// import AcademiaBenifits from "../components/AcademiaBenifits";
import AcademicHero from "../components/AcademicHero";
import Loader from "../components/Loader";
// import HowToPublish from "../components/HowToPublish";
const HowToPublish = lazy(() => import("../components/HowToPublish"));
const AcademiaBenifits = lazy(() => import("../components/AcademiaBenifits"));

import { AccountContext, ContextObject } from "../context/Provider";

import academic from "../assets/academia.png";
import fill from "../assets/Prepare and upload.svg";
import register from "../assets/Register.svg";
import publish from "../assets/Publish.svg";
import award from "../assets/Valid Awards.svg";
import secure from "../assets/Secured.svg";
import transparency from "../assets/Transparency.svg";
import authenticated from "../assets/Authentic.svg";

const Academia = () => {
  const { isValidRegistrar, isOwner } =
    useContext<ContextObject>(AccountContext);
  return (
    <div>
      <AcademicHero
        buttonName={
          isOwner
            ? "Assign Registrar"
            : isValidRegistrar
            ? "Upload student data"
            : "You can only verify credentials"
        }
      
        image={academic}
        title="Let's Begin Your Digital 
          Transformational Journey 
          Through Blockchain Based NGC "
        text=" Now publish your student's academic awards easily!"
        isAuthorised={isValidRegistrar}
        isContractOwner={isOwner}
      />
      {/* <Suspense fallback={<Loader />}>
        <HowToPublish
          cardImg2={fill}
          cardImg1={register}
          cardImg3={publish}
          card1Title="Register"
          card1Text="Register your academic institution by connecting wallet to NAD"
          card2Text="Fill the form with student details"
          card2Title="Prepare and Upload"
          card3Text="Publish the certificates on Blockchain for student's access"
          card3Title="Publish"
          title="How to Publish"
        />
      
      </Suspense> */}


<br></br>
<br></br>

      <Suspense fallback={<Loader />}>
        <AcademiaBenifits
          cardImg4={authenticated}
          cardImg1={award}
          cardImg2={secure}
          cardImg3={transparency}
          benifitHeading1="Valid Awards"
          benifitText1="Digital Awards are legally valid under IT Act, 2000"
          benifitHeading2="Secure"
          benifitText2="Secure Issuance of Digital Awards in blockchain"
          benifitHeading3="Transparency"
          benifitText3="Efficient, effective, and transparent administration"
          benifitHeading4="Authenticated by NGC"
          benifitText4="All academic awards verification needs can be addressed by NGC"
          title="Benifits"
        />
      </Suspense>
    </div>
  );
};

export default Academia;
