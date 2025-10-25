import React from "react";
import Banner from "../components/Banner";


const ballStyle = {
  width: 200,
  height: 200,
  borderRadius: "50%",
  background: "var(--accent)",
};

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-white">
       <Banner />
      {/* HERO SECTION */}
      <section className="relative flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 max-w-[1300px] py-4 my-12">
        {/* Decorative SVG Line */}
        <svg
          width="736"
          height="423"
          className="absolute top-[50px] sm:top-[200px] sm:right-[-150px]"
          viewBox="0 0 736 423"
          fill="none"
        >
          <path
            d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5"
            stroke="url(#paint0_linear_16_172)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_16_172"
              x1="700.5"
              y1="-3.99998"
              x2="14.5"
              y2="361"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#343045" />
              <stop offset="0.213542" stopColor="#C0B7E8" />
              <stop offset="0.71875" stopColor="#8176AF" />
              <stop offset="1" stopColor="#343045" />
            </linearGradient>
          </defs>
        </svg>

        {/* TEXT */}
        <div className="md:w-[520px] z-20">
          <h1 className="text-3xl md:text-[36px] lg:text-[46px] leading-[56px] font-bold">
            <span className="text-[#00ff26]">Skin </span>
           <span className="text-black">

            Care the best in world
           </span>
            <span className="text-[#c8ff00]"> Virtual Reality</span>
          </h1>
          <p className="text-base text-black mt-4 md:mt-9 mb-10 md:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          </p>
          <div className="flex gap-6 sm:gap-10 items-center">
            <button className="uppercase font-bold text-xs rounded-[40px] py-2 lg:py-4 px-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              Build Your World
            </button>
            <svg
              className="w-8 h-6 sm:w-12 sm:h-9"
              viewBox="0 0 46 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8334 19L2.16669 19M43.8334 19L27.1667 35.6667M43.8334 19L27.1667 2.33333"
                stroke="#C0B7E8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* MOTION IMAGE */}
        <div
          style={ballStyle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center items-center overflow-hidden bg-transparent"
        >
<div className="flex justify-center items-center bg-white py-12">
  <img
    className="w-[450px] md:w-[650px] lg:w-[850px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
    src="https://image.similarpng.com/file/similarpng/original-picture/2021/05/Skin-care-cosmetic-bottle-on-transparent-background-PNG.png"
    alt="Cosmetic Bottle"
  />
</div>
        </div>
      </section>

      {/* CONTACT CARD */}
      <div className="flex relative z-30 justify-center sm:justify-between gap-5 items-center mt-6 mx-auto max-w-[1300px] rounded-[90px] py-3 px-3 sm:p-8 lg:p-14 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
        <div className="flex sm:flex-1 gap-4 lg:gap-6">
          <svg
            width="42"
            height="63"
            viewBox="0 0 42 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668Z"
              fill="#C0B7E8"
            />
          </svg>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Pay Us a Visit</h2>
            <p className="text-sm mt-3">
              Promotion for first Customer with discont 90%
            </p>
          </div>
        </div>
      </div>
      <div>
        <section className="w-full overflow-hidden dark:bg-gray-900">
  <div className="flex flex-col p-8 md:p-12 lg:p-16">
    {/* Cover Image */}
    <img
      src="https://cdn.vectorstock.com/i/preview-1x/04/88/elegant-skincare-banner-vector-50460488.jpg"
      alt="User Cover"
      className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[11rem]"
    />

    {/* Profile Image + Name */}
    <div className="sm:w-[80%] w-[90%] mx-auto flex">
      <img
        src="/public/photo_2025-10-08_12-31-25-removebg-preview.png"
        alt="User Profile"
        className="rounded-3xl lg:w-[12rem]  lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] w-[7rem] h-[7rem]  outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] bottom-[3rem]"
      />
      <h1 className="w-full text-left my-4 sm:mx-4 pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl text-xl font-serif">
        Chea Dane        
      </h1>
    </div>

    {/* Description and Details */}
    <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 -top-4">
      <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore consectetur
        voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente repellendus asperiores
        explicabo, eligendi odit, dolore similique fugiat dolor, doloremque eveniet. Odit, consequatur.
        Ratione voluptate exercitationem hic eligendi vitae animi nam in, est earum culpa illum aliquam.
      </p>

      {/* Details */}
      <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
        <div className="w-full flex sm:flex-row flex-col gap-2 justify-center">
          <div className="w-full">
            <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-black md:text-lg dark:text-black">First Name</dt>
                <dd className="text-lg font-semibold">Chea </dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                <dd className="text-lg font-semibold">Dane</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                <dd className="text-lg font-semibold">14/05/1977</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                <dd className="text-lg font-semibold">Male</dd>
              </div>
            </dl>
          </div>

          <div className="w-full">
            <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                <dd className="text-lg font-semibold">Ethiopia, Addis Ababa</dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                <dd className="text-lg font-semibold">+251913****30</dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                <dd className="text-lg font-semibold">samuel@example.com</dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
                <dd className="text-lg font-semibold hover:text-blue-500">
                  <a href="https://techakim.com">https://www.teclick.com</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Location Map */}
        <div className="my-10 lg:w-[70%] md:h-[14rem] w-full h-[10rem]">
          <h1 className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl text-xl">
            My Location
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
            className="rounded-lg w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
        {/* Add your social link SVGs here */}
      </div>
    </div>
  </div>
</section>

      </div>

      {/* PRICING CARDS */}
      <div className="grid gap-8 mb-16 lg:grid-cols-3 p-4 md:p-8 mt-12">
        {/* BASIC PLAN */}
        <PricingCard
          title="Basic"
          price="$1"
          time="one-time"
          features={["Listed within 2–5 days", "Standard visibility"]}
          unavailable={["Priority listing"]}
          link="https://checkout.dodopayments.com/buy/pdt_To2Pk5SiRrPvvR2fUlEtr"
          buttonColor="bg-gray-900 hover:bg-gray-800"
          buttonText="List Now"
        />

        {/* FASTTRACK PLAN */}
        <PricingCard
          title="FastTrack"
          price="$30"
          time="one-time"
          features={[
            "Listed within 24 hours",
            "Priority listing",
            "7 days in featured section",
          ]}
          highlight
          link="https://checkout.dodopayments.com/buy/pdt_CaoQwT9zsubbLXZsHfcf0"
          buttonColor="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
          buttonText="Get Featured"
        />

        {/* BOOSTED PLAN */}
        <PricingCard
          title="Boosted"
          price="$50"
          time="one-time"
          features={[
            "Listed within 24 hours",
            "Priority listing",
            "30 days in featured section",
          ]}
          link="https://checkout.dodopayments.com/buy/pdt_Xrd9mKf1ypuKzJVLJGo9m"
          buttonColor="bg-gray-900 hover:bg-gray-800"
          buttonText="Boost Now"
        />
      </div>
    </div>
  );
};

export default Home;

/* -------------------- PRICING CARD COMPONENT -------------------- */
const PricingCard = ({
  title,
  price,
  time,
  features,
  unavailable = [],
  highlight = false,
  link,
  buttonColor,
  buttonText,
}) => {
  return (
    <div className="relative">
      {highlight && (
        <div className="absolute left-0 right-0 flex justify-center -top-4">
          <span className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-indigo-600 to-violet-600">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
              />
            </svg>
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`flex flex-col justify-between h-full bg-white border rounded-lg shadow-sm ${
          highlight ? "border-2 border-indigo-400 shadow-lg" : "border-gray-200"
        }`}
      >
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            <span className="ml-2 text-gray-600">{time}</span>
          </div>

          <ul className="mt-6 space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                ✅ {f}
              </li>
            ))}
            {unavailable.map((u, i) => (
              <li key={i} className="flex items-center gap-2 text-red-500">
                ❌ {u}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b-lg bg-gray-50">
          <a
            href={link}
            className={`block w-full px-4 py-2 font-medium text-center text-white rounded-lg transition-colors ${buttonColor}`}
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div>
        
      </div>
      
    </div>
  );
};
