import React, { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/009/731/074/non_2x/cosmetics-or-skin-care-product-ads-with-bottle-banner-ad-for-beauty-products-leaf-and-sea-background-glittering-light-effect-design-vector.jpg",
      alt: "Hydrating Serum",
    },
    {
      img: "https://www.shutterstock.com/image-photo/different-types-collagen-skin-care-260nw-1971650855.jpg",
      alt: "Collagen Cream",
    },
    {
      img: "https://www.shutterstock.com/image-vector/ad-banner-beauty-products-mockups-260nw-1780339214.jpg",
      alt: "Beauty Set",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrev = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const goToNext = () =>
    setActiveSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="w-full bg-pink-200  ">
      <div className=" mx-auto relative overflow-hidden rounded-2xl shadow-lg">
        {/* SLIDER WRAPPER */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full relative aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/4]"
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  {slide.alt}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* PREV BUTTON */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2.5 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2.5 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === i ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
