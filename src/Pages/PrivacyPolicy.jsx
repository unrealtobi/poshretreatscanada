import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-customBg py-20 md:py-32 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-raleway font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-4">
          Effective Date: 10/07/2025 <br />
          Last Updated: 09/07/2025
        </p>
      </div>

      {/* 1. Introduction */}
      <div className="p-6 md:p-10 rounded-lg">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          1. Introduction
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          At Posh Retreats, your privacy is a top priority for us. This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          personal information in accordance with applicable Canadian privacy
          laws, including the Personal Information Protection and Electronic
          Documents Act (PIPEDA). By accessing or using our website or services,
          you agree to the terms of this Privacy Policy.
        </p>
      </div>

      {/* 2. Information We Collect */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          2. Information We Collect
        </h2>

        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          2.1 Information You Provide to Us
        </h3>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>
            <strong>Contact Details:</strong> Name, email address, phone number,
            and mailing address.
          </li>
          <li>
            <strong>Identification Information:</strong> Date of birth, passport
            number, visa details (when required for travel arrangements).
          </li>
          <li>
            <strong>Payment Information:</strong> Credit/debit card details
            (processed securely via third-party payment providers).
          </li>
          <li>
            <strong>Travel Preferences:</strong> Destination interests,
            accommodation needs, and special requests.
          </li>
          <li>
            <strong>Communications:</strong> Correspondence with us via email,
            website forms, chat, or social media.
          </li>
        </ul>

        <h3 className="text-xl font-raleway font-semibold text-customGreen mt-4">
          2.2 Information We Collect Automatically
        </h3>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>
            <strong>Cookies & Tracking Data:</strong> To enhance your
            experience, personalize content, and analyze website traffic.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, browser type,
            operating system, device type, and referring URLs.
          </li>
        </ul>
      </div>

      {/* 3. How We Use Your Information */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          3. How We Use Your Information
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We use your personal information to:
        </p>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>Book and manage travel services on your behalf.</li>
          <li>Communicate with you regarding your bookings or inquiries.</li>
          <li>Provide customer service and travel updates.</li>
          <li>Send promotional offers or newsletters (with your consent).</li>
          <li>Improve our services and website experience.</li>
          <li>
            Comply with legal and regulatory obligations, including fraud
            prevention and reporting.
          </li>
        </ul>
      </div>

      {/* 4. Disclosure to Third Parties */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          4. Disclosure to Third Parties
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We only share your personal information where necessary to fulfill
          travel services or comply with legal requirements. This may include:
        </p>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>
            <strong>Travel Suppliers:</strong> Airlines, hotels, tour operators,
            and other providers involved in your travel itinerary.
          </li>
          <li>
            <strong>Payment Providers:</strong> To securely process your
            transactions.
          </li>
          <li>
            <strong>Government and Regulatory Authorities:</strong> Where
            required by law or for fraud detection and prevention.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Each third-party travel provider operates under their own privacy
          policy. We encourage you to review their policies before proceeding
          with bookings.
        </p>
      </div>

      {/* 5. Payments & Financing */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          5. Payments & Financing
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Posh Retreats offers a payment-in-instalment option via{" "}
          <a
            href="https://www.uplift.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-customGreen underline"
          >
            Uplift
          </a>
          . When you choose this option, you will be redirected to Uplift and
          agree to their financing terms. Failure to complete payment as agreed
          may result in cancellation of your booking, and steps may be taken to
          recover the outstanding balance.
        </p>
      </div>

      {/* 6. TICO Protection */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          6. TICO Protection
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          As a registered travel seller operating under TravelOnly Inc. (TICO
          Reg. No. 4316071), your eligible bookings may be protected by the
          Ontario Travel Industry Compensation Fund. Learn more at{" "}
          <a
            href="https://www.tico.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-customGreen underline"
          >
            www.tico.ca
          </a>
          .
        </p>
      </div>

      {/* 7. Your Privacy Rights */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          7. Your Privacy Rights
        </h2>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc pl-6">
          <li>Request access to your personal information.</li>
          <li>Correct inaccuracies in your data.</li>
          <li>Withdraw consent to marketing communications.</li>
          <li>
            Request deletion of your information (subject to legal limits).
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:letstalk@poshretreats.ca"
            className="text-customGreen underline"
          >
            letstalk@poshretreats.ca
          </a>
          .
        </p>
      </div>

      {/* 8. Data Security */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          8. Data Security
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We implement physical, electronic, and administrative safeguards to
          protect your personal data against loss, theft, unauthorized access,
          or disclosure. While we take reasonable precautions, no internet-based
          service is completely secure.
        </p>
      </div>

      {/* 9. Data Retention */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          9. Data Retention
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We retain your personal information only as long as necessary to
          fulfill the purposes outlined in this policy or to meet legal
          obligations. Booking and financial records may be retained for up to 7
          years for audit and compliance purposes.
        </p>
      </div>

      {/* 10. Cookies Policy */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          10. Cookies Policy
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Our website uses cookies to enhance your browsing experience and
          improve functionality. You can control or disable cookies through your
          browser settings. Continued use of our website indicates your
          acceptance of this policy.
        </p>
      </div>

      {/* 11. Changes to This Policy */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          11. Changes to This Policy
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          We reserve the right to update this Privacy Policy from time to time.
          Updates will be posted on this page with a revised effective date.
          Please review it periodically for changes.
        </p>
      </div>

      {/* 12. Contact Information */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          12. Contact Information
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Posh Retreats <br />
          Attn: Bukie Olagbegi <br />
          Phone: +1 437-238-7437 <br />
          Email:{" "}
          <a
            href="mailto:letstalk@poshretreats.ca"
            className="text-customGreen underline"
          >
            letstalk@poshretreats.ca
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
