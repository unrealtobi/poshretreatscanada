import React from "react";
import { useRef, useState, useEffect } from "react";
import FAQs from "../Components/PageyComponents/FAQs";
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView];
};
const AboutUs = () => {
  const [countsStarted, setCountsStarted] = useState(false);
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [satisfaction, setSatisfaction] = useState(0);
  const [guidedTours, setGuidedTours] = useState(0);
  const [animate, setAnimate] = useState(false);

  const [destinations, setDestinations] = useState(0);
  const [reviews, setReviews] = useState(0);
  useEffect(() => {
    if (statsInView && !countsStarted) {
      setCountsStarted(true);
      countUp(98, setSatisfaction);
      countUp(30, setGuidedTours);
      countUp(35, setDestinations);
      countUp(39, setReviews);
    }
  }, [statsInView, countsStarted]);
  const countUp = (target, setValue) => {
    const duration = 3000; // 5 seconds
    const intervalTime = 30; // Update every 30ms
    const steps = Math.ceil(duration / intervalTime);
    let current = 0;

    const step = target / steps;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.ceil(current));
      }
    }, intervalTime);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);
  const trips = [
    {
      id: 1,
      title: "Perfectly Curated",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456276/c7eaa10b-f4d8-4e80-b19c-5826f86976d6_fr0o5k.jpg",
      style:
        "md:top-[120px] sm:top-[100px] top-[80px] sm:left-[-50px] md:left-[70px] left-[50px] md:rotate-[12deg] sm:rotate-[20deg] rotate-[-12deg]",
    },
    {
      id: 2,
      title: "Explore Cultures",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737456282/20240611_191633_1_gwcmb7.jpg",
      style:
        "md:top-[290px] top-[40px] md:left-[-70px]  sm:left-[240px] sm:top-[20px] left-[170px] mt-16 md:rotate-[-8.46deg] rotate-[-5.46deg]",
    },
    {
      id: 3,
      title: "Island Hopping ",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455337/IMG_7738_1_bcwvq9.png",
      style:
        "md:top-[500px] top-[450px] md:left-[150px] sm:left-[-50px] left-[160px] md:rotate-[-50.41deg] rotate-[-20.41deg]",
    },
    {
      id: 4,
      title: "ATV Tour",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1732285992/IMG_0829_1_qyoyzy.jpg",
      style:
        "top-[130px] md:right-[70px] sm:top-[90px] sm:right-[-60px] right-[150px] md:rotate-[-12.85deg] sm:rotate-[-28.85deg] rotate-[8.85deg]",
    },
    {
      id: 5,
      title: "Souk Stroll ",
      image: "/Jacknb.jpeg",
      style:
        "md:top-[290px] top-[410px] md:right-[-70px] sm:top-[380px] sm:right-[-60px] right-[50px] mt-16 rotate-[8.46deg]",
    },
    {
      id: 6,
      title: "Cultural Excursions",
      image:
        "https://res.cloudinary.com/dtaqusjav/image/upload/v1737455336/IMG_7736_qarknl.jpg",
      style:
        "md:top-[500px] top-[450px] sm:top-[480px] sm:left-[240px] md:right-[150px] right-[180px] md:rotate-[50.41deg] sm:rotate-[20.41deg] rotate-[-5.41deg] ",
    },
  ];
  return (
    <div className="bg-customBg py-28 md:py-32">
      {/* About Us Section */}
      <div className="text-center flex-col flex justify-center md:py-32  px-4">
        <h1 className="text-3xl md:text-5xl font-raleway font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl md:px-16 mx-auto">
          At Posh Retreats, we're dedicated to crafting extraordinary travel
          experiences tailored to your dreams. With a blend of expertise,
          passion, and personalized service, we turn wanderlust into reality,
          one journey at a time.
        </p>
      </div>

      {/* Travel & Hospitality Section */}
      <div className="relative bg-white mt-16 text-center ">
        <h1
          className="text-5xl md:text-9xl sm:text-6xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: `
        linear-gradient(
          to bottom, 
          rgba(255, 255, 255, 0) 70%, 
          rgba(255, 255, 255, 1) 100%
        ),
        url('/tripbg.png')
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TRAVEL & HOSPITALITY
        </h1>
      </div>

      {/* Unlock Adventures Section */}
      <div className=" mx-auto px-6 md:px-4 grid md:grid-cols-2 gap-8 py-12 items-start">
        {/* Left Section - Longer Image */}
        <div className="relative rounded-2xl sm:h-[500px] sm:w-[450px] overflow-hidden shadow-lg md:h-[543px] h-[515px]">
          <img
            src="/greece.jpeg" // Replace with your actual image path
            alt="Longer Image Description"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section - Text + Wider Image */}
        <div className="flex flex-col space-y-8">
          {/* Text Content */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway">
              Let’s Explore the World, Together
            </h2>
            <p className="text-sm md:text-base font-roboto">
              Posh Retreats is proudly affiliated with TravelOnly Inc., one of
              Canada’s leading travel agencies with over 45 years of experience
              and industry leadership. TravelOnly’s exceptional reputation,
              strong supplier relationships, and robust back-office support
              enable us to provide a seamless, secure, and value-packed travel
              planning experience.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway">
              Licensed and Trusted
            </h2>
            <p className="text-sm md:text-base font-roboto">
              <span className="font-bold">TICO Registration Numbers:</span>
              <br />
              Bukola Olagbegi: TICO #T1597233
              <br />
              TravelOnly Inc.: TICO #4316071
            </p>
            <p className="text-sm md:text-base font-roboto">
              As a registered travel seller in Ontario, we operate under full
              compliance with the Travel Industry Council of Ontario (TICO)
              regulations. This means your travel bookings are protected by
              provincial consumer protection laws, giving you peace of mind from
              the moment you book until you return home.
            </p>
          </div>

          {/* Wider Image */}
          {/* <div className="relative rounded-2xl md:block hidden overflow-hidden shadow-lg h-[220px]">
            <img
              src="/morroco.webp" // Replace with your actual image path
              alt="Wider Image Description"
              className="object-cover w-full h-full"
            />
          </div> */}
        </div>
      </div>
      <section
        ref={statsRef}
        className="bg-customBg md:py-12 md:w-full z-10 md:mt-0 sm:mt-0    pb-12 sm:pb-16 relative"
      >
        <div className="md:w-full w-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-8 md:gap-16  border-gray-300">
            {/* Statistic Item 1 */}
            <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-r-0 ">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold  font-raleway">
                {satisfaction}
                <span className="md:text-5xl sm:text-4xl text-3xl">%</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Satisfaction Rate
              </p>
            </div>

            {/* Statistic Item 2 */}
            <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-r-0">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold font-raleway">
                {guidedTours}
                <span className="md:text-5xl sm:text-4xl text-3xl">+</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Guided Tours
              </p>
            </div>

            {/* Statistic Item 3 */}
            <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-r-0">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold font-raleway">
                {destinations}
                <span className="md:text-5xl sm:text-4xl text-3xl">+</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Destinations
              </p>
            </div>

            {/* Statistic Item 4 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="md:text-6xl sm:text-4xl text-3xl font-bold font-raleway">
                {reviews}
                <span className="md:text-5xl sm:text-4xl text-3xl">+</span>
              </h3>
              <p className="text-gray-700 text-xs md:text-sm sm:text-sm font-roboto mt-2">
                Positive Reviews
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <div className="bg-customBg py-16 md:px-4 px-4 lg:px-24">
        <div className=" mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Image */}
          <div className="relative rounded-2xl md:h-[700px] sm:h-[500px] sm:w-[450px] overflow-hidden shadow-lg">
            <img
              src="/buks.jpg" // Replace with the actual path to the founder's image
              alt="Bukola Olagbegi – Founder of Posh Retreats"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Section - Text */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway">
              Bukola Olagbegi – Founder of Posh Retreats
            </h2>
            <p className="text-sm md:text-base font-roboto">
              With over six years of hands-on experience in the travel industry,
              I’ve been passionately crafting unforgettable journeys and helping
              travellers turn their wanderlust into reality. From luxury escapes
              to culture-rich adventures, I specialize in curating bespoke
              travel experiences that are anything but ordinary.
            </p>
            <p className="text-sm md:text-base font-roboto">
              Posh Retreats was born out of a deep love for travel and a
              personal mission to make exploring the world more accessible,
              especially for those navigating challenges like passport
              privilege. Our goal is to empower travellers of all backgrounds by
              offering transparent guidance on visa processes, sharing insider
              travel tips, and creating a supportive community where
              spontaneous, solo, or group adventures are always encouraged.
            </p>
            <p className="text-sm md:text-base font-roboto">
              We believe in saying yes to new experiences, with no waiting and
              no holding back. Whether you're planning your dream honeymoon or a
              much-needed self-care escape, our trips are designed to immerse
              you in culture, luxury, and ease. At Posh Retreats, every
              itinerary is thoughtfully planned to help you reconnect, explore,
              and unwind without compromise.
            </p>
          </div>
        </div>
      </div>
      <FAQs />
      <section
        className="relative z-30 md:py-72 py-60 sm:py-72 md:pb-96 sm:pb-80 bg-customBg   overflow-hidden"
        style={{
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <div className="flex flex-col justify-center md:px-[330px] px-4 sm:px-24 text-center">
          <h1 className="font-raleway font-bold md:text-5xl mt-12 md:mt-0 translate-y-4 text-4xl text-black">
            About Us
          </h1>
          <p className="font-roboto text-sm mt-8 md:px-40 text-gray-700">
            Whether you're a first-time traveller or a seasoned explorer, Posh
            Retreats is here to help you craft meaningful, seamless, and safe
            travel experiences. No matter your background or travel history, we
            believe the world is meant for you to explore, and we’re here to
            make it happen. Let’s connect and start planning your next
            unforgettable journey.
          </p>
        </div>

        {/* Images Positioned Around Text */}
        <div className="relative  -translate-y-96">
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              style={{
                // Add stagger: each subsequent image delays 150ms more
                transitionDelay: `${index * 150}ms`,
              }}
              className={`absolute px-32
                transition-all 
                duration-700 
                ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
                ${
                  animate
                    ? // Final position: your custom style + scale-100
                      `${trip.style} scale-100`
                    : // Initial position: center + scale-0
                      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
                }
              `}
            >
              {/* Polaroid Container */}
              <div className="bg-white shadow-2xl  overflow-hidden md:w-40 w-24 sm:w-36 md:h-56 h-28 sm:h-44 flex flex-col md:border-8 border-4 border-white">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full md:h-44 sm:h-36 h-20 object-cover"
                />
                <p className="font-pacifico text-xs text-black md:text-base ml-2 mt-2">
                  {trip.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
