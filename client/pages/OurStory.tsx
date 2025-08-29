import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const member1Ref = useRef<HTMLDivElement>(null);
  const member2Ref = useRef<HTMLDivElement>(null);
  const member3Ref = useRef<HTMLDivElement>(null);
  const member4Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions for each team member
      gsap.set([member1Ref.current, member2Ref.current], {
        opacity: 0,
        y: 150,
      });

      gsap.set(member3Ref.current, {
        opacity: 0,
        y: 350, // 150px base + 200px offset
      });

      gsap.set(member4Ref.current, {
        opacity: 0,
        y: 550, // 150px base + 400px offset
      });

      // Create a timeline for synchronized ending
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 80%",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });

      // Animate all members to end at the same time
      tl.to(
        member1Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        0,
      )
        .to(
          member2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power2.out",
          },
          0.2,
        )
        .to(
          member3Ref.current,
          {
            opacity: 1,
            y: 0, // This removes the 200px offset
            duration: 1.0,
            ease: "power2.out",
          },
          0.4,
        )
        .to(
          member4Ref.current,
          {
            opacity: 1,
            y: 0, // This removes the 400px offset
            duration: 1.0,
            ease: "power2.out",
          },
          0.6,
        );
    }, teamSectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section based on reference design */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0b1d5506f2c774d4fe2d20c11147e2c717fcb2c7?width=3005"
            alt=""
            className="w-full h-full object-cover opacity-20 mix-blend-multiply transform rotate-[105deg] scale-110"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 lg:gap-16">
            {/* Left Side - Main Heading */}
            <div className="flex-1 max-w-4xl text-center lg:text-left">
              <h1 className="font-kenyan text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] 2xl:text-[180px] leading-[87%] uppercase">
                <span className="text-cloudworkz-primary block">WE BUILD</span>
                <span className="text-cloudworkz-black block">
                  SYSTEMS THAT
                </span>
                <span className="text-cloudworkz-black block">WORK</span>
              </h1>
            </div>

            {/* Right Side - Circular Content */}
            <div className="flex-shrink-0 mt-8 lg:mt-0">
              <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[525px] xl:h-[425px] mx-auto lg:mx-0 lg:right-[-40px] xl:right-[-81px]">
                {/* Circular Background with Image */}
                <div
                  className="w-full h-full flex items-end justify-center p-6 sm:p-8 lg:p-10"
                  style={{
                    backgroundImage:
                      "url('https://api.builder.io/api/v1/image/assets/TEMP/4536d6a6ca5818952a61dda081387c7f237d233b?width=1982')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-archivo font-semibold text-cloudworkz-primary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[80px] leading-[95%] tracking-[-0.03em] uppercase text-center sm:text-left lg:text-justify">
            We provide structure to businesses that want execution, not excuses.
          </h2>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        {/* Marquee Text */}
        <div className="overflow-hidden py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="flex items-center gap-3 sm:gap-5 whitespace-nowrap">
            <div className="animate-marquee flex items-center gap-3 sm:gap-5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="font-kenyan text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] leading-[100%] tracking-[-0.02em] uppercase"
                >
                  <span className="text-cloudworkz-black">Our</span>
                  <span className="text-cloudworkz-primary"> Vision</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section with Background */}
        <div
          className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-16 flex justify-between items-center"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/dffafe7fbcce3e41695aae8b8e98be45a8e61ec0?width=2880')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* Team Section */}
      <section
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20"
        ref={teamSectionRef}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="font-kenyan text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] leading-[100%] tracking-[-0.02em] uppercase mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <span className="text-cloudworkz-black">Our </span>
            <span className="text-cloudworkz-primary">Team</span>
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Tom King */}
            <div
              className="flex flex-col items-center sm:items-start gap-4 sm:gap-6"
              ref={member1Ref}
            >
              <div className="w-full max-w-[250px] sm:max-w-[284px] h-[350px] sm:h-[400px] lg:h-[471px] rounded-[100px] sm:rounded-[142px] overflow-hidden bg-gray-100 mx-auto sm:mx-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F753d3c374d9147d0953d516d520684fd?format=webp&width=800"
                  alt="Tom King"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-xl sm:text-2xl lg:text-[30px] leading-[100%] uppercase">
                    Tom King
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-lg sm:text-xl lg:text-2xl leading-[100%]">
                    CEO
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-sm sm:text-base leading-[120%] sm:leading-[100%] text-center sm:text-justify">
                  A certified Scaling Up coach and seasoned CEO with a
                  background in tech, marketing, and finance. Helps growth-stage
                  companies find momentum through structure
                </p>
              </div>
            </div>

            {/* William Corke */}
            <div
              className="flex flex-col items-center sm:items-start gap-4 sm:gap-6"
              ref={member2Ref}
            >
              <div className="w-full max-w-[250px] sm:max-w-[284px] h-[350px] sm:h-[400px] lg:h-[471px] rounded-[100px] sm:rounded-[142px] overflow-hidden bg-gray-100 mx-auto sm:mx-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F753d3c374d9147d0953d516d520684fd?format=webp&width=800"
                  alt="William Corke"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-xl sm:text-2xl lg:text-[30px] leading-[100%] uppercase">
                    William Corke
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-lg sm:text-xl lg:text-2xl leading-[100%]">
                    Head of Service
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-sm sm:text-base leading-[120%] sm:leading-[100%] text-center sm:text-justify">
                  EIS/SEIS-accredited advisor with deep experience in
                  alternative investments and operational compliance
                </p>
              </div>
            </div>

            {/* Werner Snyman */}
            <div
              className="flex flex-col items-center sm:items-start gap-4 sm:gap-6"
              ref={member3Ref}
            >
              <div className="w-full max-w-[250px] sm:max-w-[284px] h-[350px] sm:h-[400px] lg:h-[471px] rounded-[100px] sm:rounded-[142px] overflow-hidden bg-gray-100 mx-auto sm:mx-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F5298ccdc196642cd8aa746f54af917f9?format=webp&width=800"
                  alt="Werner Snyman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-xl sm:text-2xl lg:text-[30px] leading-[100%] uppercase">
                    Werner Snyman
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-lg sm:text-xl lg:text-2xl leading-[100%]">
                    Head of Product
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-sm sm:text-base leading-[120%] sm:leading-[100%] text-center sm:text-justify">
                  Designs and runs the internal systems behind our services.
                  Blends product thinking with deep industry experience
                </p>
              </div>
            </div>

            {/* Claudia Chavez */}
            <div
              className="flex flex-col items-center sm:items-start gap-4 sm:gap-6"
              ref={member4Ref}
            >
              <div className="w-full max-w-[250px] sm:max-w-[284px] h-[350px] sm:h-[400px] lg:h-[471px] rounded-[100px] sm:rounded-[142px] overflow-hidden bg-gray-100 mx-auto sm:mx-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F592342c571824d60945bef8290e17a35?format=webp&width=800"
                  alt="Claudia Chavez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-xl sm:text-2xl lg:text-[30px] leading-[100%] uppercase">
                    Claudia Chavez
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-lg sm:text-xl lg:text-2xl leading-[100%]">
                    Co-Founder & Commercial Director
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-sm sm:text-base leading-[120%] sm:leading-[100%] text-center sm:text-justify">
                  Expert in commercial strategy and project delivery. Focused on
                  keeping our client operations smooth and outcomes sharp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div
        className="flex flex-col relative min-h-screen"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Fd7789645b053464baee50f04d975ac9a?format=webp&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
        }}
      >
        {/* Text Block Section */}
        <section className="relative w-full overflow-hidden">
          {/* Content Layer */}
          <div className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12 xl:gap-16">
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-5 max-w-4xl lg:flex-1 text-center lg:text-right">
                  {/* Title */}
                  <h2 className="font-kenyan text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[50px] 2xl:text-[60px] font-normal leading-[110%] uppercase">
                    <span className="text-cloudworkz-black">
                      You don't need more dashboards.{" "}
                    </span>
                    <span className="text-cloudworkz-primary">
                      You need a system that gets the work done
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-cloudworkz-black font-archivo text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-[24px] font-normal leading-[120%] lg:leading-[110%] max-w-3xl">
                    Cloudworkz gives you the tools — and the team — to move
                    faster, close smarter, and scale without chaos.
                  </p>

                  {/* CTA Block */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="text-cloudworkz-primary font-archivo text-sm sm:text-base font-semibold leading-[110%] uppercase">
                      Let's Build Together
                    </div>
                    <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform rotate-0 sm:w-6 sm:h-6"
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
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="w-24 h-40 md:w-32 md:h-52 lg:w-36 lg:h-60 xl:w-[150px] xl:h-[250px] 2xl:w-[183px] 2xl:h-[304px]">
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
        <footer className="relative z-10 flex flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 lg:gap-16 w-full">
            {/* Contact Us Section */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 w-full sm:w-auto">
              <h3 className="text-cloudworkz-black font-kenyan text-2xl sm:text-3xl lg:text-[35px] xl:text-[40px] font-normal leading-[100%] tracking-[-0.8px] uppercase">
                Contact Us
              </h3>
              <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5">
                <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                  info@cloudworkz.com
                </div>
                <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                  555 123 4567
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 w-full sm:w-auto">
              <h3 className="text-cloudworkz-black font-kenyan text-2xl sm:text-3xl lg:text-[35px] xl:text-[40px] font-normal leading-[100%] tracking-[-0.8px] uppercase">
                Follow Us
              </h3>
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                  LinkedIn
                </div>
                <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                  Twitter
                </div>
                <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                  Facebook
                </div>
              </div>
            </div>

            {/* Legal Links Section */}
            <div className="flex flex-col items-start gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                Privacy Policy
              </div>
              <div className="text-cloudworkz-black font-archivo text-sm sm:text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                Terms of Service
              </div>
            </div>
          </div>

          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2ca41c4ebe4ba18e91febe21b8f069e137f71166?width=2720"
            alt="CloudWorkz Logo"
            className="w-full max-w-[800px] sm:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1360px] h-auto"
          />
        </footer>
      </div>
    </div>
  );
}
