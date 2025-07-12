import React from "react";

const Terms = () => {
  return (
    <div className="bg-customBg py-20 md:py-32 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-raleway font-bold text-gray-900">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-4">
          Welcome to Posh Retreats’ Terms and Conditions. Please read these
          carefully, as they outline the terms under which we provide our travel
          services. By booking with us, you agree to these terms.
        </p>
      </div>

      {/* 1. General Information */}
      <div className="p-6 md:p-10 rounded-lg">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          1. General Information
        </h2>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          1.1 Posh Retreats is a Canadian business providing travel services as
          an independent travel advisor operating under the licence of
          TravelOnly Inc., TICO Registration Number 4316071.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          1.2 We are committed to delivering services in accordance with
          Ontario’s Travel Industry Act, 2002, and related regulations, offering
          you consumer protection, transparency, and accountability.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            1.3 Travel Industry Council of Ontario (TICO) Protection
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Posh Retreats, operating under TravelOnly Inc., is registered with
            the Travel Industry Council of Ontario (TICO). This offers you
            protection under the Ontario Travel Industry Compensation Fund,
            which may provide compensation if travel services are not provided
            due to insolvency of a registered travel supplier.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            <strong>TICO Contact Details:</strong>
            <br />
            📍 <span className="font-medium">Address:</span> 4010 Midland
            Avenue, Suite 220, Toronto, ON M1V 5K4
            <br />
            📞 <span className="font-medium">Phone:</span> 1-888-451-TICO (8426)
            <br />
            🌐 <span className="font-medium">Website:</span>{" "}
            <a
              href="https://www.tico.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customGreen underline"
            >
              www.tico.ca
            </a>
          </p>
        </div>
      </div>

      {/* 2. Booking and Payment */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          2. Booking and Payment
        </h2>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            2.1 Booking
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            A deposit or full payment is required to confirm your booking,
            depending on the type of travel service selected and the supplier’s
            requirements.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            2.2 Payment by Instalment
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            We offer a payment-by-instalment option through Uplift (
            <a
              href="https://www.uplift.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customGreen underline"
            >
              www.uplift.com
            </a>
            ), a third-party financing provider. By selecting this option, you
            agree to Uplift’s terms and conditions. Your payment arrangement
            will be subject to their approval, credit checks, and loan servicing
            terms. You are fully responsible for repaying the loan as agreed
            with Uplift. Posh Retreats is not a lender and assumes no
            responsibility for any financing terms or outcomes.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            2.3 Payment Terms
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Unless otherwise agreed at the time of booking, full payment must be
            received as stated during booking. Failure to pay by the deadline
            may result in cancellation and forfeiture of any payments made.
          </p>
        </div>
      </div>

      {/* 3. Changes and Cancellations */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          3. Changes and Cancellations
        </h2>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            3.1 Changes
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Any requested changes to your booking may be subject to fees set by
            the supplier. We will advise you of all costs before confirming
            modifications.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            3.2 Cancellations
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Cancellations are subject to the travel supplier’s terms and
            conditions, which may include non-refundable deposits or
            cancellation fees. Please review supplier terms carefully.
          </p>
        </div>
      </div>

      {/* 4. Your Responsibilities */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          4. Your Responsibilities
        </h2>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            4.1 Accuracy
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            You are responsible for ensuring the accuracy of all personal and
            travel information provided during the booking process.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-raleway font-semibold text-customGreen">
            4.2 Travel Documents
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            You are responsible for securing valid travel documents, including
            passports and visas, where required. Travel insurance is strongly
            recommended and will be offered for all bookings; it remains your
            responsibility to obtain it.
          </p>
        </div>
      </div>

      {/* 5. Complaints */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          5. Complaints
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          5.1 If you encounter any issues during your travel experience, please
          contact us immediately so we can assist in resolving the matter.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          5.2 If the issue remains unresolved and your booking involved a
          TICO-registered supplier, you may file a formal complaint with TICO.
          For full information, visit{" "}
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

      {/* 6. Financial Protection */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          6. Financial Protection
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          6.1 All eligible travel bookings made through Posh Retreats, under
          TravelOnly Inc., may be protected by the Ontario Travel Industry
          Compensation Fund, subject to its terms and eligibility criteria.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          6.2 Learn more at:{" "}
          <a
            href="https://www.tico.ca/consumer-protection/travel-compensation-fund.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-customGreen underline"
          >
            https://www.tico.ca/consumer-protection/travel-compensation-fund.html
          </a>
        </p>
      </div>

      {/* 7. Liability */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          7. Liability
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          7.1 Posh Retreats acts solely as an agent for third-party travel
          suppliers. We are not responsible for the performance, quality, or
          outcomes of services provided by those suppliers. Our liability is
          limited to the proper arrangement and documentation of services as
          confirmed at booking.
        </p>
      </div>

      {/* 8. Governing Law */}
      <div className="p-6 md:p-10 rounded-lg mt-8">
        <h2 className="text-2xl font-raleway font-semibold text-gray-900">
          8. Governing Law
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          8.1 These Terms and Conditions shall be governed by and interpreted in
          accordance with the laws of the Province of Ontario and the applicable
          federal laws of Canada. Any disputes will be subject to the exclusive
          jurisdiction of Ontario courts.
        </p>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-sm md:text-base">
          If you have any questions about these terms, please contact us
          directly.
          <br />
          <strong>
            Thank you for choosing Posh Retreats, operating under TravelOnly
            Inc. – TICO Registration No. 4316071
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Terms;
