import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import CursorEffect from "../components/CursorEffect";
import {
  RevealText,
  JustifiedRevealText,
  FadeInUp,
  StaggerContainer,
} from "../components/animations";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const featureBlocksRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set different initial positions for each block to create staggered effect
      // Set different initial positions for each block completely hidden.

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

      // Animate each block individually with better spaced triggers
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
        delay: 0.2,
        scrollTrigger: {
          trigger: featureBlocksRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(block3Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: featureBlocksRef.current,
          start: "top 40%",
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
          <video
            src="https://cdn.builder.io/o/assets%2F1eaa4255fd854d84bde8758c04e23344%2F3bcd5136504848eb8a5488f72f006867?alt=media&token=1b26be58-ca3b-4c63-89f1-f7452153ea8f&apiKey=1eaa4255fd854d84bde8758c04e23344"
            className="absolute object-cover mix-blend-multiply"
            style={{
              width: "2434px",
              height: "1250px",
              left: "0px",
              top: "0px",
            }}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>
      {/* Header over background */}
      <Header />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-start pt-[60px] md:pt-[90px] px-4 md:px-6 lg:px-10">
        <div className="flex flex-col w-full lg:w-auto">
          {/* Hero Title - Left Side */}
          <h1 className="font-kenyan text-[clamp(80px,12vw,180px)] leading-[87%] uppercase flex flex-col justify-start items-start max-w-full lg:max-w-[1015px]">
            <div className="flex flex-row gap-2 items-baseline">
              <RevealText
                className="text-cloudworkz-primary"
                splitBy="words"
                stagger={0.15}
                delay={0.2}
              >
                Start
              </RevealText>
              <RevealText
                className="text-cloudworkz-black"
                splitBy="words"
                stagger={0.15}
                delay={0.2}
              >
                with
              </RevealText>
            </div>
            <div className="flex flex-col sm:flex-row">
              <RevealText
                className="text-cloudworkz-black sm:mr-4"
                splitBy="words"
                stagger={0.15}
                delay={0.6}
              >
                the problem
              </RevealText>
            </div>
          </h1>

          {/* Description below hero title */}
          <FadeInUp delay={1.5} duration={0.8}>
            <div className="font-kenyan text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[-0.02em] uppercase text-cloudworkz-black max-w-full lg:max-w-[1015px] mt-4 md:mt-6">
              Practical solutions that fit <br /> your tools and your team
            </div>
          </FadeInUp>
        </div>

        {/* CTA Section - Right Side */}
        <StaggerContainer
          className="flex flex-col justify-start lg:justify-end items-start gap-4 w-full lg:w-auto lg:max-w-[322px] mt-8 lg:mt-auto"
          delay={1.8}
          stagger={0.3}
        >
          {/* Description Text */}
          <p className="text-cloudworkz-black font-archivo text-xl md:text-2xl font-semibold leading-none uppercase w-full max-w-md lg:max-w-none">
            We help organisations diagnose what is really going on, then choose
            the simplest route to value.
          </p>

          {/* CTA Block */}
          <div className="flex items-center gap-3">
            {/* CTA Text */}
            <div className="w-[106px] text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase">
              Contact us
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors p-7 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
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
                  d="M6 7C6 6.44772 6.44772 6 7 6L17 6C17.5523 6 18 6.44772 18 7L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 8L7 8C6.44772 8 6 7.55229 6 7Z"
                  fill="#126AF9"
                />
              </svg>
            </button>
          </div>
        </StaggerContainer>
      </div>
      {/* CloudWorkz Description Section */}
      <section className="relative z-10 pt-[80px] md:pt-[120px] lg:pt-[150px] px-4 md:px-6 lg:px-10">
        <JustifiedRevealText splitBy="words" stagger={0.08} delay={0.2}>
          <div className="max-w-full lg:max-w-[1017px] text-left md:text-justify justified-reveal-container text-[clamp(24px,4.5vw,50px)] leading-[0.95] tracking-[-0.02em] uppercase">
            <span className="font-archivo text-cloudworkz-primary">
              Cloudworkz{" "}
            </span>
            <span className="font-kenyan text-cloudworkz-primary text-[clamp(36px,6vw,80px)]">
              *
            </span>{" "}
            <span className="font-archivo text-[#323232]">
              helps teams find the simplest route to value. Modern capability
              that feels natural, not disruptive.
            </span>
          </div>
        </JustifiedRevealText>
      </section>
      {/* Feature Blocks Section */}
      <section
        className="relative z-10 flex items-center justify-center py-[80px] md:py-[120px] lg:py-[150px] px-4 md:px-8 lg:px-16"
        ref={featureBlocksRef}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-2 lg:gap-0 w-full max-w-[1356px] overflow-hidden">
          {/* Block 1 - Start with the problem */}
          <div
            ref={block1Ref}
            className="flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-10 w-full max-w-[300px] md:max-w-[400px] lg:w-[452px] h-[500px] md:h-[600px] lg:h-[755px] p-[30px_20px] md:p-[40px_30px] lg:p-[58px_40px] rounded-[120px] md:rounded-[150px] lg:rounded-[250px] bg-cover bg-center bg-no-repeat mx-auto"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/81098206588618cbe52f2de3b00ce7b9b713b154?width=904')",
            }}
          >
            <h3 className="font-kenyan text-[60px] md:text-[70px] lg:text-[90px] font-normal leading-[100%] tracking-[-1.8px] uppercase text-white">
              Start with the problem
            </h3>
            <p className="font-archivo text-lg md:text-lg lg:text-xl font-normal leading-[100%] text-white">
              We diagnose what is really going on, define success, and choose
              the simplest, most effective route to value
            </p>
          </div>

          {/* Block 2 - Proof of value */}
          <div
            ref={block2Ref}
            className="flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-10 w-full max-w-[300px] md:max-w-[400px] lg:w-[452px] h-[500px] md:h-[600px] lg:h-[755px] p-[30px_20px] md:p-[40px_30px] lg:p-[58px_40px] rounded-[120px] md:rounded-[150px] lg:rounded-[250px] bg-cover bg-center bg-no-repeat mx-auto"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/5f7be80d4ebc755eaa61ad5e88212092a594781e?width=904')",
            }}
          >
            <h3 className="font-kenyan text-[60px] md:text-[70px] lg:text-[90px] font-normal leading-[100%] tracking-[-1.8px] uppercase text-white">
              Proof of value
            </h3>
            <p className="font-archivo text-lg md:text-lg lg:text-xl font-normal leading-[100%] text-white">
              Test the simplest route to value and measure impact on time, cost,
              quality and risk
            </p>
          </div>

          {/* Block 3 - Built to fit your tools */}
          <div
            ref={block3Ref}
            className="flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-10 w-full max-w-[300px] md:max-w-[400px] lg:w-[452px] h-[500px] md:h-[600px] lg:h-[755px] p-[30px_20px] md:p-[40px_30px] lg:p-[58px_40px] rounded-[120px] md:rounded-[150px] lg:rounded-[250px] bg-cover bg-center bg-no-repeat mx-auto"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/514d417fa855b888cc5675511ede7309fbc05ecc?width=904')",
            }}
          >
            <h3 className="font-kenyan text-[60px] md:text-[70px] lg:text-[90px] font-normal leading-[100%] tracking-[-1.8px] uppercase text-white">
              Built to fit your tools
            </h3>
            <p className="font-archivo text-lg md:text-lg lg:text-xl font-normal leading-[100%] text-white">
              Vendor agnostic and outcome driven. We weave modern capability
              into the systems you already use, with security, governance,
              documentation and training as standard
            </p>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative z-10 w-full overflow-hidden py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-[21px] text-[clamp(80px,12vw,120px)] font-kenyan font-normal leading-[100%] tracking-[-0.02em] uppercase">
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
      <section className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12">
        <StaggerContainer
          className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12 xl:gap-16 py-8 md:py-10 lg:py-12 border-b-2 border-cloudworkz-primary"
          stagger={0.3}
          delay={0.2}
        >
          {/* Service Title */}
          <div className="flex flex-col items-start gap-5 flex-1 w-full">
            <RevealText
              className="text-cloudworkz-primary font-archivo text-[clamp(40px,8vw,80px)] font-semibold leading-[80%] tracking-[-1.6px] uppercase max-w-full lg:max-w-[535px]"
              splitBy="words"
              stagger={0.1}
            >
              Human in the loop where it matters
            </RevealText>
          </div>

          {/* Description Block */}
          <div className="flex flex-col items-start lg:items-end gap-8 lg:gap-12 w-full lg:w-[348px] lg:self-stretch">
            <FadeInUp delay={0.4} y={30}>
              <div className="text-cloudworkz-black text-left lg:text-justify font-archivo text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold leading-[1.1] uppercase max-w-full lg:max-w-[340px]">
                So people handle judgement, safety and exceptions where
                automation shouldn’t. Lorem ipsum dolor sit amet
              </div>
            </FadeInUp>
          </div>
        </StaggerContainer>
      </section>
      {/* The Cloudworkz App Section */}
      <section className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12">
        <StaggerContainer
          className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12 xl:gap-16 py-8 md:py-10 lg:py-12 border-b-2 border-cloudworkz-primary"
          stagger={0.3}
          delay={0.2}
        >
          {/* Service Title */}
          <div className="flex flex-col items-start gap-5 flex-1 min-w-0">
            <RevealText
              className="text-cloudworkz-primary font-archivo text-[clamp(40px,8vw,80px)] font-semibold leading-[80%] tracking-[-1.6px] uppercase max-w-[584px]"
              splitBy="words"
              stagger={0.1}
            >
              Clear documentat
              <br />
              ion and training
            </RevealText>
          </div>

          {/* Description Block */}
          <div className="flex flex-col items-start lg:items-end gap-8 lg:gap-12 w-full lg:w-[348px] lg:self-stretch">
            <FadeInUp delay={0.4} y={30}>
              <div className="text-cloudworkz-black text-left lg:text-justify font-archivo text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold leading-[1.1] uppercase max-w-full lg:max-w-[340px]">
                Guide teams to adopt, operate and improve solutions with
                confidence. Lorem ipsum dolor sit amet
              </div>
            </FadeInUp>
          </div>
        </StaggerContainer>
      </section>

      {/* Transparent Metrics Section */}
      <section className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12">
        <StaggerContainer
          className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12 xl:gap-[50px] py-8 md:py-10 lg:py-12 xl:py-[50px] border-b-2 border-cloudworkz-primary"
          stagger={0.3}
          delay={0.2}
        >
          {/* Service Title */}
          <div className="flex flex-col items-start gap-5 flex-1 w-full">
            <RevealText
              className="text-cloudworkz-primary font-archivo text-[clamp(40px,8vw,80px)] font-semibold leading-[80%] tracking-[-1.6px] uppercase max-w-full lg:max-w-[584px]"
              splitBy="words"
              stagger={0.1}
            >
              Transpar
              <br />
              ent metrics
            </RevealText>
          </div>

          {/* Description Block */}
          <div className="flex flex-col items-start lg:items-end gap-8 lg:gap-12 xl:gap-[50px] w-full lg:w-[348px] lg:self-stretch">
            <FadeInUp delay={0.4} y={30}>
              <div className="text-cloudworkz-black text-left lg:text-justify font-archivo text-lg md:text-xl lg:text-2xl xl:text-[32px] font-semibold leading-[100%] uppercase max-w-full lg:max-w-[340px]">
                So leaders see risk, cost and ROI in real time
              </div>
            </FadeInUp>
          </div>
        </StaggerContainer>
      </section>

      {/* Background Image Section */}
      <section className="relative w-full overflow-visible pt-[120px] md:pt-[180px] lg:pt-[220px] px-4 md:px-6 lg:pl-[40px]">
        <div className="relative w-full min-h-[400px] md:min-h-[600px] lg:min-h-[800px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7fb5a2d2c5f9899915d6e7d3b3c6161eb270691?width=3652"
            alt=""
            className="absolute z-50 w-auto h-auto max-w-none hidden md:block"
            style={{
              width: "1826px",
              height: "1215px",
              left: "-100px",
              top: "-246px",
              filter: "blur(0.5px)",
            }}
          />

          {/* Content above image */}
          <StaggerContainer
            className="relative z-[60] flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-[50px] max-w-none w-full mt-auto px-4 md:px-6 lg:px-10"
            stagger={0.4}
            delay={0.2}
          >
            {/* Left content */}
            <div className="flex flex-col items-start flex-1 gap-0">
              <div className="font-kenyan text-[clamp(60px,10vw,120px)] leading-[100%] tracking-[-0.02em] uppercase">
                <JustifiedRevealText
                  splitBy="words"
                  stagger={0.08}
                  delay={0.2}
                  className="inline"
                >
                  WHAT WE
                </JustifiedRevealText>
                <JustifiedRevealText
                  splitBy="words"
                  stagger={0.08}
                  delay={0.2}
                  className="inline text-cloudworkz-primary"
                >
                  {" DELIVER"}
                </JustifiedRevealText>
              </div>
              <FadeInUp delay={0.4} className="-mt-3 md:-mt-2 lg:-mt-1">
                <div className="w-full text-cloudworkz-black text-left md:text-justify font-archivo text-lg md:text-2xl lg:text-[32px] font-normal leading-[100%] tracking-[-0.02em]">
                  The simplest effective answer: an AI agent when conversations
                  and decisions need coverage, an automation when tasks repeat,
                  or sometimes a clearer process with no code at all.
                </div>
              </FadeInUp>
            </div>

            {/* Right visual element */}
            <div className="flex-shrink-0 w-full lg:w-auto flex items-start self-start">
              <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:w-[580px] h-[240px] md:h-[300px] lg:h-[348px] mx-auto lg:mx-0">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 580 348"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <pattern
                      id="pattern0_what_deliver"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        href="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F92c4c23d96414da0b3d06eebb06175e4?format=webp&width=800"
                        width="1"
                        height="1"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>
                  <path
                    d="M580 174C580 270.103 501.896 348 405.538 348L174.462 348C78.1036 348 -1.18066e-05 270.103 -7.60578e-06 174C-3.40497e-06 77.8967 78.1036 -2.19386e-05 174.462 -1.77266e-05L405.538 -7.62598e-06C501.896 -3.41402e-06 580 77.8967 580 174Z"
                    fill="url(#pattern0_what_deliver)"
                  />
                  <path
                    d="M580 174C580 270.103 501.896 348 405.538 348L174.462 348C78.1036 348 -1.18066e-05 270.103 -7.60578e-06 174C-3.40497e-06 77.8967 78.1036 -2.19386e-05 174.462 -1.77266e-05L405.538 -7.62598e-06C501.896 -3.41402e-06 580 77.8967 580 174Z"
                    fill="black"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </section>
      {/* Video Section */}
      <section className="relative z-10 flex h-[500px] md:h-[600px] lg:h-[800px] px-4 md:px-6 lg:px-10 py-[30px] md:py-[40px] lg:py-[50px] flex-col justify-end items-start lg:items-end gap-6 md:gap-8 lg:gap-[39px] w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
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

        {/* Overlay Content - Glassmorphic Card */}
        <FadeInUp
          delay={0.2}
          className="relative z-20 w-full flex justify-center lg:justify-start"
        >
          <div className="flex flex-col items-end gap-4 md:gap-5 lg:gap-6 w-full max-w-[700px] p-6 md:p-7 lg:p-[40px_40px_15px_40px] rounded-[25px] md:rounded-[30px] lg:rounded-[40px] border border-white bg-white/20 backdrop-blur-[7px]">
            {/* Text Content */}
            <div className="w-full text-white text-justify font-archivo text-sm md:text-lg lg:text-xl font-semibold leading-[100%] uppercase">
              <p className="mb-2 md:mb-3 lg:mb-4">
                From problem to proof - What you get:
              </p>
              <ul className="space-y-0.5 md:space-y-1 lg:space-y-1">
                <li className="leading-tight">
                  • A clear problem statement with success criteria.
                </li>
                <li className="leading-tight">
                  • A working proof of value inside your tools.
                </li>
                <li className="leading-tight">
                  • A one-page impact snapshot covering time, cost, quality and
                  risk
                </li>
                <li className="leading-tight">
                  • Next-step options, only extending what works
                </li>
              </ul>
            </div>

            {/* CTA Block */}
            <div className="flex items-center gap-3">
              <div className="text-cloudworkz-primary font-archivo text-sm md:text-base font-semibold leading-[110%] uppercase">
                Contact Us
              </div>
              <button
                onClick={() => {
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-6 md:h-6"
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
        </FadeInUp>
      </section>
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
        {/* Text Block Section */}
        <section
          id="contact-section"
          className="relative w-full overflow-hidden"
        >
          {/* Content Layer */}
          <div className="relative z-10 px-4 md:px-6 lg:px-12 xl:px-[180px] pt-[100px] md:pt-[150px] lg:pt-[200px] pb-[100px] md:pb-[150px] lg:pb-[120px]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-8 lg:gap-[31px]">
                {/* Text Content */}
                <StaggerContainer
                  className="flex flex-col items-center lg:items-end gap-4 md:gap-5 max-w-full lg:max-w-4xl lg:flex-1"
                  stagger={0.3}
                  delay={0.2}
                >
                  {/* Title */}
                  <JustifiedRevealText
                    className="text-center lg:text-right font-kenyan text-[clamp(28px,6vw,60px)] font-normal leading-[1.1] uppercase"
                    splitBy="words"
                    stagger={0.08}
                  >
                    <span className="text-cloudworkz-black">
                      Want to learn more?
                    </span>
                  </JustifiedRevealText>

                  {/* Description */}
                  <FadeInUp y={30}>
                    <p className="text-center lg:text-right text-cloudworkz-black font-archivo font-semibold text-base md:text-lg lg:text-xl xl:text-[24px] leading-[1.1] max-w-full lg:max-w-3xl uppercase">
                      To book a call, request a proposal or for <br />
                      any other enquiry please email
                    </p>
                  </FadeInUp>

                  {/* CTA Block */}
                  <div className="flex items-center justify-center lg:justify-end gap-3 mt-4 w-full lg:w-auto">
                    <div className="text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase">
                      tom@cloudworkz.com
                    </div>
                  </div>
                </StaggerContainer>

                {/* Rounded Gradient Element */}
                <div className="flex-shrink-0 mt-8 lg:mt-0">
                  <div className="w-24 h-40 md:w-32 md:h-52 lg:w-40 lg:h-64 xl:w-[183px] xl:h-[304px] mx-auto lg:mx-0">
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

        {/* Footer */}
        <footer className="relative z-10 flex flex-col items-center lg:items-start gap-8 md:gap-12 lg:gap-[61px] w-full px-4 md:px-6 lg:px-10 py-[20px] md:py-[40px] lg:py-[60px]">
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
                <div className="text-cloudworkz-black font-archivo text-sm md:text-base font-normal leading-[1] tracking-[-0.02em] uppercase text-center md:text-left">
                  555 123 4567
                </div>
              </StaggerContainer>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col items-center md:items-start gap-8 md:gap-12 lg:gap-[77px] w-full md:w-1/3">
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
              className="flex flex-col items-center md:items-start gap-3 md:gap-4 lg:gap-[18px] w-full md:w-1/3"
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
