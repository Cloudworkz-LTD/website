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
      // Set initial state for all blocks
      gsap.set([block1Ref.current, block2Ref.current, block3Ref.current], {
        opacity: 0,
        y: 100,
      });

      // Create a timeline for sequential animations controlled by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureBlocksRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 2,
        },
      });

      // Add animations to timeline with stagger
      tl.to(block1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          block2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3",
        ) // Start slightly before previous animation ends
        .to(
          block3Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        ); // Start earlier before previous animation ends
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
        className="relative z-10 flex items-center justify-center py-[150px] px-10"
        ref={featureBlocksRef}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 max-w-7xl w-full">
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

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-[828px] px-8 lg:px-12">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}
