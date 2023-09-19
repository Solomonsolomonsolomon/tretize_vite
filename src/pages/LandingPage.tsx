import React from "react";
import Header from "../components/Header";
import Writing from "../components/Writing";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import AboutUs from "../components/About";
import ContactUsFooter from "../components/ContactUs";

import Spinner from "../components/Spinner";
const LandingPage = () => {
  let [imagesStillLoading, setImagesStillLoading] =
    React.useState<boolean>(false);

  if (imagesStillLoading) return <Spinner />;
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
