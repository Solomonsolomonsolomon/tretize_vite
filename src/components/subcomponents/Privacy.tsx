import React from "react";
import Header from "./Header(sub)";
const Privacy: React.FC = () => {
  window.onbeforeunload = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <Header />
      <section className="max-w-screen-xl mx-auto p-10 md:p-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Privacy Policy
        </h2>
        <p className="text-gray-600 mb-6">
          {" "}
          At Tretize Logistics, we take your privacy seriously and are committed
          to protecting the personal information you provide to us. This privacy
          policy outlines our practices for collecting, using, and disclosing
          personal information. By using our services, you agree to the terms of
          this privacy policy.
        </p>
        <p className="text-gray-600 mb-6">
          {" "}
          Collection of Personal Information We collect personal information
          from you when you use our services or interact with us. This
          information may include your name, address, email address, phone
          number, payment information, and other information you provide to us.
          We may also collect information about your use of our services,
          including your browsing history and IP address. We may collect
          personal information in various ways, including: Directly from you:
          You may provide personal information to us when you create an account,
          place an order, complete a form, or contact us for customer support.
          Automatically: We may automatically collect certain information about
          your use of our services, such as your IP address, browser type,
          device type, and operating system. We may also use cookies and other
          tracking technologies to collect information about your browsing
          behavior on our website. Use of Personal Information We use personal
          information to provide and improve our services, to communicate with
          you, and to comply with legal and regulatory requirements.
        </p>
        <p className="text-gray-600 mb-6">
          {" "}
          Specifically, we use personal information for the following purposes:
          To provide and fulfill our services: We use personal information to
          process orders, ship products, and provide customer support. To
          personalize your experience: We may use personal information to tailor
          our services to your preferences and interests. To communicate with
          you: We may use personal information to send you emails or other
          messages about your orders or our services. To improve our services:
          We use personal information to analyze how our services are used and
          to identify areas for improvement. To comply with legal and regulatory
          requirements: We may use personal information to comply with legal or
          regulatory requirements, such as tax or accounting obligations.
        </p>
        <p className="text-gray-600 mb-6">
          {" "}
          Disclosure of Personal Information We may disclose personal
          information to third-party service providers who assist us in
          providing our services, such as payment processors, shipping
          companies, or marketing agencies. We may also disclose personal
          information to government agencies or law enforcement officials in
          response to legal requests or to protect our rights and property. We
          may also share personal information with other third parties in the
          following circumstances: With your consent: We may share personal
          information with third parties if you have given us your consent to do
          so.
        </p>
        <p className="text-gray-600 mb-6">
          {" "}
          In connection with a merger or acquisition: If we are involved in a
          merger, acquisition, or sale of all or a portion of our assets,
          personal information may be transferred as part of that transaction.
          To protect our rights and property: We may share personal information
          with third parties if we believe that such disclosure is necessary to
          protect our rights or property, to comply with a court order or legal
          process, or to enforce our terms and conditions.
        </p>
        <p className="text-gray-600 mb-6">
          Protection of Personal Information We take reasonable measures to
          protect personal information from unauthorized access, disclosure, or
          misuse. We restrict access to personal information to employees who
          need to know that information to provide our services. We also use
          encryption and other security measures to protect personal information
          transmitted through our website. We cannot guarantee the security of
          any information transmitted to or from our website, and you provide
          such information at your own risk. If you have reason to believe that
          your interaction with us is no longer secure, please contact us
          immediately.
          <p />
          <p className="text-gray-600 mb-6">
            {" "}
            Cookies and Tracking Technologies We may use cookies and other
            tracking technologies to enhance your experience on our website and
            to analyze how our services are used. Cookies are small data files
            that are placed on your device when you visit our website. They
            allow us to remember your preferences and personalize your
            experience. We may also use cookies and other tracking technologies
            to collect information about your browsing behavior on our website
            and to analyze how our services are used. You can set your browser
            to refuse all or some browser cookies, or to alert you when websites
            set or access cookies. If you disable or refuse cookies, please note
            that some parts of our website may become inaccessible or not
            function properly.
          </p>
          <p className="text-gray-600 mb-6">
            {" "}
            Third-Party Websites and Services Our website may contain links to
            third-party websites or services that are not owned or controlled by
            Tretize Logistics. We are not responsible for the privacy practices
            of these websites or services. We encourage you to review the
            privacy policies of these websites or services before providing any
            personal information.
          </p>{" "}
          Children's Privacy Our services are not intended for children under
          the age of 13. We do not knowingly collect personal information from
          children under the age of 13. If you are a parent or guardian and
          believe that we have collected personal information from your child,
          please contact us immediately. Changes to this Privacy Policy We
          reserve the right to modify or update this privacy policy at any time.
        </p>
        <p className="text-gray-600 mb-6">
          {" "}
          If we make material changes to this privacy policy, we will notify you
          by email or by posting a notice on our website. Your continued use of
          our services after we have notified you of the changes to this privacy
          policy will signify your acceptance of those changes.{" "}
        </p>
        <p className="text-gray-600 mb-6">
          Contact Us If you have any questions or concerns about this privacy
          policy or our privacy practices, please contact us at
          privacy@tretize.com. We will respond to your inquiry as soon as
          possible.
        </p>{" "}
        <p className="text-gray-600 mb-6">
          Conclusion Tretize Logistics values your privacy and is committed to
          protecting your personal information. We collect and use personal
          information only for the purposes described in this privacy policy,
          and we take reasonable measures to protect personal information from
          unauthorized access, disclosure, or misuse. We may update this privacy
          policy from time to time, and we will notify you of any material
          changes. If you have any questions or concerns about our privacy
          practices, please contact us at privacy@tretize.com.{" "}
        </p>
      </section>
    </>
  );
};

export default Privacy;
