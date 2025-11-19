import { useState } from "react";
import Header from "../components/Header";
import { FadeInUp, StaggerContainer } from "../components/animations";

export default function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 flex items-center px-8 lg:px-10 py-24 lg:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 right-0 w-full max-w-[1105px] h-full pointer-events-none">
          <div className="relative w-full h-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/486bb2362c2909336ef78223a641ba0a32c19985?width=2218"
              alt="Smart Sales Background"
              className="absolute top-[-200px] lg:top-[-370px] right-[-100px] lg:right-[-220px] w-[1109px] h-[1018px] object-cover mix-blend-multiply"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 w-full max-w-[1240px]">
          <h1
            className="font-kenyan text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[180px] font-normal leading-none uppercase text-cloudworkz-black"
            style={{ lineHeight: "0.85" }}
          >
            <span className="text-cloudworkz-primary block">
              Smart Sales
              <span className="text-cloudworkz-black"> in</span>
            </span>
            <span className="text-cloudworkz-black block">
              {" "}
              Weeks, Not Months
            </span>
          </h1>
        </div>
      </section>

      {/* Slider Section */}
      <section className="relative z-10 w-full h-[800px] overflow-hidden bg-white">
        <div className="relative w-full h-full">
          {/* Slider Container */}
          <div
            className="flex w-[3960px] h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 1320}px)` }}
          >
            {/* Slide 1 - Consult */}
            <div
              className="flex w-[1320px] h-[800px] p-10 items-start gap-10 relative"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/f73a5bfa24f134ae38a0f48b3e030022583c9023?width=2640')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-between items-end flex-1 h-full">
                {/* First slide content is entirely in background image */}
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={nextSlide}
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>

            {/* Slide 2 - Build & Automate */}
            <div
              className="flex w-[1320px] h-[800px] p-10 items-start gap-10 relative"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/c28acb39b23d6abc1cfed086919757ce5f796656?width=2640')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-between items-end flex-1 h-full">
                {/* Text Block */}
                <div className="flex flex-col items-start gap-10 w-full">
                  <h2 className="w-full max-w-[794px] text-white font-kenyan text-6xl lg:text-[120px] font-normal leading-[100%] tracking-[-2.4px] uppercase">
                    Build & Automate
                  </h2>
                  <p className="w-full max-w-[402px] text-white text-justify font-archivo text-lg lg:text-[32px] font-semibold leading-[100%] tracking-[-0.64px] uppercase">
                    We install workflows or deploy your sales pod.
                  </p>
                </div>

                {/* CTA Block */}
                <div className="flex items-center gap-5">
                  <div className="text-white font-archivo text-base font-semibold leading-[110%] uppercase">
                    Get Started Today
                  </div>
                  <button
                    onClick={nextSlide}
                    className="flex w-[100px] h-[100px] justify-center items-center rounded-full border-2 border-white hover:bg-white/10 transition-colors"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.33594 16.0003C5.33594 15.2639 5.93289 14.667 6.66927 14.667H25.3359C26.0723 14.667 26.6693 15.2639 26.6693 16.0003C26.6693 16.7367 26.0723 17.3337 25.3359 17.3337H6.66927C5.93289 17.3337 5.33594 16.7367 5.33594 16.0003Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.0546 5.72353C15.5753 5.20283 16.4195 5.20283 16.9402 5.72353L26.2735 15.0569C26.7942 15.5776 26.7942 16.4218 26.2735 16.9425L16.9402 26.2758C16.4195 26.7965 15.5753 26.7965 15.0546 26.2758C14.5339 25.7551 14.5339 24.9109 15.0546 24.3902L23.4451 15.9997L15.0546 7.60915C14.5339 7.08845 14.5339 6.24423 15.0546 5.72353Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 3 - Operate & Optimise */}
            <div
              className="flex w-[1320px] h-[800px] p-10 items-start gap-10 relative"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/5b3ad80e4ef6a40ec5d1046cccfc92e750358cfa?width=2640')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-between items-end flex-1 h-full">
                {/* Text Block */}
                <div className="flex flex-col items-start gap-10 w-full">
                  <h2 className="w-full max-w-[794px] text-white font-kenyan text-6xl lg:text-[120px] font-normal leading-[100%] tracking-[-2.4px] uppercase">
                    Operate & Optimise
                  </h2>
                  <p className="w-full max-w-[402px] text-white text-justify font-archivo text-lg lg:text-[32px] font-semibold leading-[100%] tracking-[-0.64px] uppercase">
                    We run the engine or pod, learn, and improve.
                  </p>
                </div>

                {/* CTA Block */}
                <div className="flex items-center gap-5">
                  <div className="text-white font-archivo text-base font-semibold leading-[110%] uppercase">
                    next step
                  </div>
                  <button
                    onClick={nextSlide}
                    className="flex w-[100px] h-[100px] justify-center items-center rounded-full border-2 border-white hover:bg-white/10 transition-colors"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.33594 16.0003C5.33594 15.2639 5.93289 14.667 6.66927 14.667H25.3359C26.0723 14.667 26.6693 15.2639 26.6693 16.0003C26.6693 16.7367 26.0723 17.3337 25.3359 17.3337H6.66927C5.93289 17.3337 5.33594 16.7367 5.33594 16.0003Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.0546 5.72353C15.5753 5.20283 16.4195 5.20283 16.9402 5.72353L26.2735 15.0569C26.7942 15.5776 26.7942 16.4218 26.2735 16.9425L16.9402 26.2758C16.4195 26.7965 15.5753 26.7965 15.0546 26.2758C14.5339 25.7551 14.5339 24.9109 15.0546 24.3902L23.4451 15.9997L15.0546 7.60915C14.5339 7.08845 14.5339 6.24423 15.0546 5.72353Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as home page */}
      <div
        className="flex flex-col relative min-h-screen"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Fd7789645b053464baee50f04d975ac9a?format=webp&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "calc(50% + 500px) calc(0% - 400px)",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
        }}
      >
        {/* Footer */}
        <footer className="relative z-10 flex flex-col items-center lg:items-start gap-8 md:gap-12 lg:gap-[61px] w-full px-4 md:px-6 lg:px-10 py-[100px] md:py-[150px] lg:py-[250px] pb-[30px]">
          <StaggerContainer
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-5 w-full justify-center md:justify-start"
            stagger={0.2}
            delay={0.2}
          >
            {/* Contact Us Section */}
            <div className="flex flex-col items-center md:items-start gap-8 md:gap-12 lg:gap-[109px] w-full md:w-1/3">
              <FadeInUp y={30}>
                <h3 className="text-cloudworkz-black font-kenyan text-2xl md:text-3xl lg:text-[40px] font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  Contact Us
                </h3>
              </FadeInUp>
              <StaggerContainer
                className="flex flex-col items-center md:items-start gap-3 md:gap-4 lg:gap-5"
                stagger={0.1}
                delay={0.4}
              >
                <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  info@cloudworkz.com
                </div>
                <div className="hidden text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  555 123 4567
                </div>
                <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] text-center md:text-left">
                  <div>86-90 Paul Street</div>
                  <div>London</div>
                  <div>EC2A 4NE</div>
                </div>
              </StaggerContainer>
            </div>

            {/* Follow Us Section */}
            <div className="hidden flex flex-col items-center md:items-start gap-8 md:gap-12 lg:gap-[77px] w-full md:w-1/3">
              <FadeInUp y={30}>
                <h3 className="text-cloudworkz-black font-kenyan text-2xl md:text-3xl lg:text-[40px] font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  Follow Us
                </h3>
              </FadeInUp>
              <StaggerContainer
                className="flex flex-col items-center md:items-start gap-3 md:gap-4 lg:gap-[18px]"
                stagger={0.1}
                delay={0.4}
              >
                <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  LinkedIn
                </div>
                <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  Twitter
                </div>
                <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  Facebook
                </div>
              </StaggerContainer>
            </div>

            {/* Legal Links Section */}
            <StaggerContainer
              className="hidden flex flex-col items-center md:items-start gap-3 md:gap-4 lg:gap-[18px] w-full md:w-1/3"
              stagger={0.1}
              delay={0.6}
            >
              <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                Privacy Policy
              </div>
              <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                Terms of Service
              </div>
            </StaggerContainer>
          </StaggerContainer>

          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2ca41c4ebe4ba18e91febe21b8f069e137f71166?width=2720"
            alt="CloudWorkz Logo"
            className="w-full max-w-[800px] md:max-w-[1000px] lg:max-w-[1360px] h-auto mx-auto lg:mx-0"
          />
        </footer>
      </div>
    </div>
  );
}
