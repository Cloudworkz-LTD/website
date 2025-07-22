import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import CursorEffect from "../components/CursorEffect";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const featureBlocksRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set different initial positions for each block to create staggered effect
      // Set different initial positions for each block completely hidden
      gsap.set(block1Ref.current, {
        opacity: 0,
        transform: "translateY(150px)",
      });
      gsap.set(block2Ref.current, {
        opacity: 0,
        transform: "translateY(150px)",
      });
      gsap.set(block3Ref.current, {
        opacity: 0,
        transform: "translateY(150px)",
      });

      // Animate each block individually with widely spaced triggers
      gsap.to(block1Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureBlocksRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(block2Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureBlocksRef.current,
          start: "center center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(block3Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureBlocksRef.current,
          start: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, featureBlocksRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Background Image Section */}
      <section className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/611f64b69da9b253bec2c300d12a63b02d3f4972?width=4868"
            alt=""
            className="absolute object-cover mix-blend-multiply"
            style={{
              width: "2434px",
              height: "1250px",
              left: "0px",
              top: "0px",
            }}
          />
        </div>
      </section>

      {/* Header over background */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex justify-between items-start pt-[150px] px-10">
        <div className="flex flex-col">
          {/* Hero Title - Left Side */}
          <CursorEffect>
            <h1 className="font-kenyan text-[180px] leading-[180px] uppercase flex flex-col justify-start items-start max-w-[1015px]">
              <span className="text-cloudworkz-black">Your Portal</span>
              <div className="flex flex-row">
                <span className="text-cloudworkz-black mr-4">To</span>
                <span className="text-cloudworkz-primary">Practical</span>
              </div>
              <span className="text-cloudworkz-primary">Growth</span>
            </h1>
          </CursorEffect>

          {/* Description below hero title */}
          <div className="font-kenyan text-[64px] leading-[95%] tracking-[-1.92px] uppercase text-cloudworkz-black max-w-[1015px] mt-6">
            Powered by Smart Systems
          </div>
        </div>

        {/* CTA Section - Right Side */}
        <div className="flex flex-col justify-end items-start gap-[14px] w-full max-w-[322px] mt-auto">
          {/* Description Text */}
          <p className="text-cloudworkz-black font-archivo text-2xl leading-[100%] w-full">
            Step into a workspace where structure accelerates momentum.
          </p>

          {/* CTA Block */}
          <div className="flex items-center gap-3">
            {/* CTA Text */}
            <div className="text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase">
              Start
              <br />
              Scaling
              <br />
              Today
            </div>

            {/* CTA Button */}
            <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071Z"
                  fill="#126AF9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 7C6 6.44771 6.44771 6 7 6L17 6C17.5523 6 18 6.44771 18 7L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 8L7 8C6.44771 8 6 7.55229 6 7Z"
                  fill="#126AF9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CloudWorkz Description Section */}
      <section className="relative z-10 pt-[150px] px-10">
        <div className="max-w-[1017px]">
          <p className="text-justify text-[55px] leading-[95%] tracking-[-1.65px] uppercase">
            <span className="font-archivo text-cloudworkz-primary">
              Cloudworkz{" "}
            </span>
            <span className="font-kenyan text-cloudworkz-primary text-[100px]">
              *
            </span>{" "}
            <span className="font-archivo text-[#323232]">
              helps ambitious teams scale faster and build more intelligent
              systems with modular execution tools.
            </span>
          </p>
        </div>
      </section>

      {/* Feature Blocks Section */}
      <section
        className="relative z-10 flex items-center justify-center py-[150px] px-16"
        ref={featureBlocksRef}
      >
        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-0 w-full overflow-hidden">
          {/* Block 1 - Growth, Engineered */}
          <div
            ref={block1Ref}
            className="flex flex-col justify-center items-start gap-10 w-full lg:w-[452px] h-[755px] p-[58px_40px] rounded-[250px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/2ebcfd4c91e939b67637722120478b384f33fa9a?width=904')",
            }}
          />

          {/* Block 2 - Fundamental Tools, Real Outcomes */}
          <div
            ref={block2Ref}
            className="flex flex-col justify-center items-start gap-10 w-full lg:w-[452px] h-[755px] p-[58px_40px] rounded-[250px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/38c2d669cbfb8d2ba2b993bb9e2d6467ee0e84b2?width=904')",
            }}
          />

          {/* Block 3 - Cloudworkz started as a sales engine */}
          <div
            ref={block3Ref}
            className="flex flex-col justify-center items-start gap-10 w-full lg:w-[452px] h-[755px] p-[58px_40px] rounded-[250px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/4c8c6df29b065c1ac32ad3c770857b5a9e784de9?width=904')",
            }}
          />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative z-10 w-full overflow-hidden py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-[21px] text-[clamp(80px,12vw,180px)] font-kenyan font-normal leading-[100%] tracking-[-0.02em] uppercase">
            <div>
              <span className="text-cloudworkz-black">Beyond</span>
              <span className="text-cloudworkz-primary"> Now</span>
            </div>
            <div>
              <span className="text-cloudworkz-black">Beyond</span>
              <span className="text-cloudworkz-primary"> Now</span>
            </div>
            <div>
              <span className="text-cloudworkz-black">Beyond</span>
              <span className="text-cloudworkz-primary"> Now</span>
            </div>
            <div>
              <span className="text-cloudworkz-black">Beyond</span>
              <span className="text-cloudworkz-primary"> Now</span>
            </div>
            <div>
              <span className="text-cloudworkz-black">Beyond</span>
              <span className="text-cloudworkz-primary"> Now</span>
            </div>
            <div>
              <span className="text-cloudworkz-black">Beyond</span>
              <span className="text-cloudworkz-primary"> Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sales-as-a-Service Section */}
      <section className="relative z-10 px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 py-12 lg:py-20 border-b-2 border-cloudworkz-primary">
          {/* Service Title */}
          <div className="flex flex-col items-start gap-5 flex-1 w-full">
            <h2 className="text-cloudworkz-primary font-archivo text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-semibold leading-[80%] tracking-[-1.6px] uppercase max-w-[535px]">
              Sales-as-a-Service
            </h2>
          </div>

          {/* Description Block */}
          <div className="flex flex-col items-end gap-12 lg:gap-16 w-full lg:w-[348px] lg:self-stretch">
            <div className="text-cloudworkz-black text-justify font-archivo text-lg md:text-2xl lg:text-3xl xl:text-[32px] font-semibold leading-[100%] uppercase max-w-[340px]">
              Plug in a trained sales pod to handle outreach, follow-ups, and
              booking - no hiring required.
            </div>

            {/* CTA Button */}
            <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071Z"
                  fill="#126AF9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 7C6 6.44771 6.44771 6 7 6L17 6C17.5523 6 18 6.44771 18 7L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 8L7 8C6.44771 8 6 7.55229 6 7Z"
                  fill="#126AF9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* The Cloudworkz App Section */}
      <section className="relative z-10 px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 py-12 lg:py-20 border-b-2 border-cloudworkz-primary">
          {/* Service Title */}
          <div className="flex flex-col items-start gap-5 flex-1 w-full">
            <h2 className="text-cloudworkz-primary font-archivo text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-semibold leading-[80%] tracking-[-1.6px] uppercase max-w-[584px]">
              The Cloudworkz App
            </h2>
          </div>

          {/* Description Block */}
          <div className="flex flex-col items-end gap-12 lg:gap-16 w-full lg:w-[348px] lg:self-stretch">
            <div className="text-cloudworkz-black text-justify font-archivo text-lg md:text-2xl lg:text-3xl xl:text-[32px] font-semibold leading-[100%] uppercase max-w-[340px]">
              Our modular platform automates internal execution: lead intake,
              CRM sync, follow-ups, onboarding, and more.
            </div>

            {/* CTA Button */}
            <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071Z"
                  fill="#126AF9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 7C6 6.44771 6.44771 6 7 6L17 6C17.5523 6 18 6.44771 18 7L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 8L7 8C6.44771 8 6 7.55229 6 7Z"
                  fill="#126AF9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="relative w-full overflow-visible pt-[150px] pl-[40px]">
        <div className="relative w-full min-h-[600px] lg:min-h-[800px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7fb5a2d2c5f9899915d6e7d3b3c6161eb270691?width=3652"
            alt=""
            className="absolute z-50 w-auto h-auto max-w-none"
            style={{
              width: "1826px",
              height: "1215px",
              left: "-100px",
              top: "-246px",
              filter: "blur(0.5px)",
            }}
          />

          {/* Content above image */}
          <div className="relative z-[60] flex flex-col lg:flex-row items-start gap-12 lg:gap-16 max-w-none w-full">
            {/* Left content */}
            <div className="flex flex-col items-start gap-6 flex-1">
              <h2 className="w-full text-cloudworkz-black font-kenyan text-6xl md:text-8xl lg:text-9xl xl:text-[180px] font-normal leading-[100%] tracking-[-3.6px] uppercase">
                <span className="text-cloudworkz-primary">An Ecosystem</span>
                <span className="text-cloudworkz-black"> Built by Doing</span>
              </h2>

              <div className="w-full text-cloudworkz-black text-justify font-archivo text-lg md:text-2xl lg:text-3xl xl:text-[32px] font-normal leading-[100%] tracking-[-0.64px]">
                Cloudworkz tools start as internal solutions to real problems -
                battle-tested by our team, refined by client needs.
                <br />
                <br />
                From investor matching to sales operations, our ecosystem
                reflects what startups use
              </div>
            </div>

            {/* Right visual element */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="relative w-[580px] h-[348px] mx-auto lg:mx-0">
                <svg
                  width="580"
                  height="348"
                  viewBox="0 0 580 348"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <pattern
                      id="pattern0_ecosystem"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        href="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Ff117951bbb8f4ce78be6ea39654a2df5?format=webp&width=800"
                        width="1"
                        height="1"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M580 174C580 270.103 501.896 348 405.538 348L174.462 348C78.1036 348 -1.18066e-05 270.103 -7.60578e-06 174C-3.40497e-06 77.8967 78.1036 -2.19386e-05 174.462 -1.77266e-05L405.538 -7.62598e-06C501.896 -3.41402e-06 580 77.8967 580 174Z"
                    fill="url(#pattern0_ecosystem)"
                  />
                  <path
                    d="M580 174C580 270.103 501.896 348 405.538 348L174.462 348C78.1036 348 -1.18066e-05 270.103 -7.60578e-06 174C-3.40497e-06 77.8967 78.1036 -2.19386e-05 174.462 -1.77266e-05L405.538 -7.62598e-06C501.896 -3.41402e-06 580 77.8967 580 174Z"
                    fill="black"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative z-10 flex h-[800px] px-10 py-[50px] flex-col justify-end items-end gap-[39px] w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover pt-[50px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://cdn.builder.io/o/assets%2F1eaa4255fd854d84bde8758c04e23344%2F109962f0b73f4609a50dd03378d18a93?alt=media&token=9be012dd-5b2c-4baf-a887-64b81d1a0082&apiKey=1eaa4255fd854d84bde8758c04e23344"
            type="video/mp4"
          />
        </video>

        {/* Overlay Content */}
        <div className="relative z-20 flex flex-col items-start gap-[39px] w-full pl-[691px]">
          <div className="text-cloudworkz-black text-justify font-archivo text-2xl font-normal leading-[100%] tracking-[-0.48px] w-full">
            A modular platform for managing outreach, data, content, and team
            coordination - supported by an embedded sales service when needed.
            <br />
            <br />
            Each part is shaped by what we've seen teams struggle with - and
            what we've had to solve ourselves.
          </div>

          {/* CTA Block */}
          <div className="flex items-center gap-3">
            <div className="text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase">
              Explore
              <br />
              Success
              <br />
              Stories
            </div>
            <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071Z"
                  fill="#126AF9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 7C6 6.44771 6.44771 6 7 6L17 6C17.5523 6 18 6.44771 18 7L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 8L7 8C6.44771 8 6 7.55229 6 7Z"
                  fill="#126AF9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Combined Text Block and Background Section */}
      <section className="relative w-full overflow-hidden min-h-[800px] lg:min-h-[1000px]">
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/28e0c53a96b37b828d9d25744a5c80a52c904956?width=4902"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply"
            style={{
              transform: "translateX(-5%) translateY(-10%)",
            }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 px-8 lg:px-12 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12 pt-8 lg:pt-16">
              {/* Text Content */}
              <div className="flex flex-col items-end gap-5 max-w-4xl lg:flex-1">
                {/* Title */}
                <h2 className="text-right font-kenyan text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal leading-[110%] uppercase">
                  <span className="text-cloudworkz-black">
                    You don't need more dashboards.{" "}
                  </span>
                  <span className="text-cloudworkz-primary">
                    You need a system that gets the work done
                  </span>
                </h2>

                {/* Description */}
                <p className="text-right text-cloudworkz-black font-archivo text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal leading-[110%] max-w-3xl">
                  Cloudworkz gives you the tools — and the team — to move
                  faster, close smarter, and scale without chaos.
                </p>

                {/* CTA Block */}
                <div className="flex items-center gap-3 mt-4">
                  <div className="text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase text-right">
                    Let's Build Together
                  </div>
                  <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-0"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071Z"
                        fill="#126AF9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 7C6 6.44771 6.44771 6 7 6L17 6C17.5523 6 18 6.44771 18 7L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 8L7 8C6.44771 8 6 7.55229 6 7Z"
                        fill="#126AF9"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Rounded Gradient Element */}
              <div className="flex-shrink-0">
                <div className="w-32 h-52 md:w-40 md:h-64 lg:w-44 lg:h-72 xl:w-[183px] xl:h-[304px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 183 304"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-full h-full"
                  >
                    <path
                      d="M91.5 0C142.037 0 183 40.9371 183 91.4422V212.558C183 263.063 142.037 304 91.5 304C40.9629 304 0 263.063 0 212.558V91.4422C0 40.9371 40.9629 0 91.5 0Z"
                      fill="url(#pattern0_297_72)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_297_72"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_297_72"
                          transform="matrix(0.000811134 0 0 0.000488281 -0.330601 0)"
                        />
                      </pattern>
                      <image
                        id="image0_297_72"
                        width="2048"
                        height="2048"
                        href="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F7ddc6c1864874fca9d33f9ddb8f72b61?format=webp&width=800"
                      />
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-[828px] px-8 lg:px-12">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}
