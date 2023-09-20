import React, { useState } from "react";
import Header from "../components/Header";
import Writing from "../components/Writing";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import AboutUs from "../components/About";
import ContactUsFooter from "../components/ContactUs";
import Spinner from "../components/Spinner";

const LandingPage:React.FC = () => {
  const [imagesStillLoading, setImagesStillLoading] = useState(true);

  if (imagesStillLoading)
    return (
      <>
        <Spinner />{" "}
        <div className=" hidden ">
          <Offer setImagesStillLoading={setImagesStillLoading} />
        </div>
      </>
    );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Writing />
      <Offer setImagesStillLoading={setImagesStillLoading} />
      <FAQ />
      <AboutUs />
      <ContactUsFooter />
    </div>
  );
};

export default LandingPage;
