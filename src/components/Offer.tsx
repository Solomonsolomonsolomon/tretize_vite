import React from "react";
import { Transition } from "react-transition-group";
import Imgg from "./../assets/1.jpg";
import PackagingImg from "./../assets/rosebox-BFdSCxmqvYc-unsplash.webp";
import SpecialProjectImg from "./../assets/barettTop.webp";
import FreightForwardingImg from "./../assets/john-simmons-gXlZtblI0bM-unsplash.webp";
import WareHousingImg from "./../assets/erwan-hesry-RJjY5Hpnifk-unsplash.webp";
import HaulageImg from "../assets/mika-baumeister-WqZwkrBuZIE-unsplash (1).jpg";
interface IProps {
  setImagesStillLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Offer: React.FC<IProps> = ({ setImagesStillLoading }) => {
   const [allImagesLoaded, setAllImagesLoaded] = React.useState(false);
  const offerings = [
    {
      title: "PACKAGING",
      description:
        "Our packaging services provide businesses with customized and efficient solutions to optimize their product packaging, labeling, and assembly needs.",
      imageUrl: PackagingImg,
    },
    {
      title: "TRANSPORTATION",
      description:
        "Our transport services provide reliable and timely delivery solutions for businesses to move goods from one place to another.",
      imageUrl: Imgg,
    },
    {
      title: "WAREHOUSING",
      description:
        "Our responsibility involves the storage of goods in a facility before they are shipped to their final destination.",
      imageUrl: WareHousingImg,
    },
    {
      title: "FREIGHT FORWARDING",
      description:
        "Our Freight forwarding services provide people with a comprehensive and hassle-free solution for international shipping, from custom clearance to documentation to ensure timely and safe delivery.",
      imageUrl: FreightForwardingImg,
    },
    {
      title: "SPECIAL PROJECTS",
      description:
        "Our special projects offer tailored logistics solutions for businesses with unique transport requirements, managing the project from start to finish.",
      imageUrl: SpecialProjectImg,
    },
    {
      title: "HAULAGE",
      description:
        "Our haulage services provide reliable and efficient transportation of goods by road, ensuring timely and cost-effective delivery.",
      imageUrl: HaulageImg,
    },
  ];


  React.useEffect(() => {

    setImagesStillLoading(true);

    //  // setImagesStillLoading(false)

      const imagePromises = offerings.map((offers) => {
        console.log(offers.imageUrl);
        return new Promise((resolve, reject) => {
          let img = new Image();
          img.src = offers.imageUrl;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      Promise.all(imagePromises)
        .then(() => {
          setImagesStillLoading(false);
        })
        .catch((err) => {
          console.log("err loading",err);
        });
    

    return () => { 
    };
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-10 pt-2 md:p-16" id="services">
      <hr className="border-t-4 border-blue-500 w-20 mx-auto mb-8" />
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        What We Offer
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offer, index) => (
          <Transition key={index} in={true} timeout={index * 300}>
            {(state) => (
              <div
                className={`bg-white p-6 rounded-lg shadow-md animate-card transition-transform transform ${
                  state === "entered" ? "translate-x-0" : ""
                }`}
              >
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full  h-[9em] mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p
                // ref={descRefs.current[index]}
                // className={`text-gray-600 text-sm ${
                //   isDescInView[index] ? "slide-in-text" : ""
                // }`}
                >
                  {offer.description}
                </p>
              </div>
            )}
          </Transition>
        ))}
      </div>
      <hr className="border-t-4 border-blue-500 w-20 mx-auto mt-8" />
    </div>
  );
};

export default Offer;
