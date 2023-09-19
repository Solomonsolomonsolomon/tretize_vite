

import {Link} from "react-router-dom";
const ContactUsFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" id="contact">
      <div className="max-w-screen-xl mx-auto p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
            <p>
              TEL:{" "}
              <a href="tel:+2348186408365" className="text-blue-50">
                +234-818-640-8365
              </a>
            </p>
            <p>
              MOB:{" "}
              <a href="tel:+2348036090618" className="text-blue-50">
                +234-803-609-0618
              </a>
            </p>
            <p>
              MAIL:{" "}
              <a href="mailto:tretize3ts@yahoo.com" className="text-blue-50">
                tretize3ts@yahoo.com
              </a>
            </p>
            <p>
              MAIL2:{" "}
              <a href="mailto:microsd2@yahoo.com" className="text-blue-50">
                microsd2@yahoo.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">INFORMATION</h3>
            <ul className="text-gray-400">
              <li>
                <a href="/about" className="hover:text-blue-50">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/privacypolicy" className="hover:text-blue-50">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/termsandconditions"
                  className="hover:text-blue-50"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} Tretize Logistics LTD. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
