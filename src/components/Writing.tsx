import Typed from "typed.js";
import { useRef, useEffect } from "react";
import LogoImage from "./../assets/mika-baumeister-WqZwkrBuZIE-unsplash (1).jpg"; // Replace with your image path

const Writing = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "TRETIZE ROYALE LOGISTICS.",
        "AN END-TO-END LOGISTICS SERVICE PROVIDER",
      ],
      typeSpeed: 60,
      loop: true,
      smartBackSpace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-10 md:p-16 mg:pb-12 text-start flex flex-wrap">
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <div className="text-blue-500 md:w-[40%] sm:w-full lg:w-[50%]">
              <span ref={el}></span>
            </div>
          </h1>
          <p className="text-lg text-gray-500">
            We create an efficient and effective system that guarantees peace of
            mind. We operate in Nigeria with a spread across the country.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img
            src={LogoImage} // Replace with the path to your image
            alt="Logo"
            className="w-full "
          />
        </div>
      </div>
    </>
  );
};

export default Writing;
