import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "SPECIAL PROJECTS",
      answer:
        "Our special projects offer tailored logistics solutions for businesses with unique transport requirements, managing the project from start to finish.",
    },
    {
      question: "HAULAGE",
      answer:
        "Our haulage services provide reliable and efficient transportation and efficient transportation of goods by road, ensuring timely and cost-effective delivery.",
    },
    {
      question: "FREQUENTLY ASKED QUESTIONS",
      answer: [
        {
          question: "Why should we choose Tretize Logistics?",
          answer:
            "We deliver around the country\nSatisfaction guaranteed\nA proven track record\nWe care about you\nWe have made technology-led innovations\nLong-lasting Customer relationships",
        },
        {
          question: "Where is Tretize Logistics located?",
          answer:
            "We are located across the country with our major Locations in KADUNA, ABUJA and LAGOS:\nLAGOS: 33, Little Road Yaba\nABUJA: C13,BlockD,2XL Mall,Road 11, off 3rd Avenue,Beside Zenith Bank,Gwarimpa.\nKADUNA:25 Ahmadu Bello Way,(C.S.S Bookshop Building)",
        },
        {
          question: "What is Tretize's area of expertise?",
          answer:
            "Air Freight Import and Export Services\nSea Import and Export Operations\nTruck Load and Less-than-truck-load Haulage Services\nWarehousing and Distribution\nSpecial projects",
        },
        {
          question: "What is Tretize's mission and vision?",
          answer:
            "MISSION\nTo create an efficient and effective system that can guarantee peace of mind\nVISION\nTo be the world's leading logistics provider",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-10 md:p-16" id="faq">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-6">
          <h3
            className="text-xl md:text-2xl font-semibold mb-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            {activeIndex === index ? (
              <FontAwesomeIcon icon={faMinus} className="mr-2 text-gray-600" />
            ) : (
              <FontAwesomeIcon icon={faPlus} className="mr-2 text-gray-600" />
            )}
            {item.question}
          </h3>
          <div
            className={`overflow-hidden transition-max-height ease-in-out duration-300 ${
              activeIndex === index ? "max-h-100" : "max-h-0"
            }`}
          >
            {Array.isArray(item.answer) ? (
              <ul className="list-disc pl-4">
                {item.answer.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-gray-600 mb-2">
                    {subItem.question ? (
                      <strong>{subItem.question}</strong>
                    ) : null}
                    {subItem.answer}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 mb-2">{item.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
