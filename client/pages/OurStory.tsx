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
      gsap.set([member1Ref.current, member2Ref.current, member3Ref.current, member4Ref.current], {
        opacity: 0,
        transform: "translateY(150px)",
      });

      // Animate each team member individually with staggered timing
      gsap.to(member1Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(member2Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(member3Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(member4Ref.current, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    }, teamSectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section based on reference design */}
      <section className="relative h-screen flex items-center px-8 lg:px-16 xl:px-20 overflow-hidden">
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Side - Main Heading */}
            <div className="flex-1 max-w-4xl">
              <h1 className="font-kenyan text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] 2xl:text-[200px] leading-[87%] uppercase">
                <span className="text-cloudworkz-primary block">WE BUILD</span>
                <span className="text-cloudworkz-black block">SYSTEMS</span>
                <span className="text-cloudworkz-black block">THAT WORK</span>
              </h1>
            </div>

            {/* Right Side - Circular Content */}
            <div className="flex-shrink-0">
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
                {/* Circular Background with Image */}
                <div
                  className="w-full h-full rounded-full flex items-end justify-center p-8 lg:p-10"
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
      <section className="py-16 lg:py-24 px-8 lg:px-16 xl:px-20">
        <div className="mx-auto">
          <h2 className="font-archivo font-semibold text-cloudworkz-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[95%] tracking-[-0.03em] uppercase text-justify">
            We provide structure to businesses that want execution, not excuses.
          </h2>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24">
        {/* Marquee Text */}
        <div className="overflow-hidden py-8 px-8 lg:px-16 xl:px-20">
          <div className="flex items-center gap-5 whitespace-nowrap">
            <div className="animate-marquee flex items-center gap-5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="font-kenyan text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[180px] leading-[100%] tracking-[-0.02em] uppercase">
                  <span className="text-cloudworkz-black">Our</span>
                  <span className="text-cloudworkz-primary"> Vision</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section with Background */}
        <div
          className="h-[600px] px-8 lg:px-16 xl:px-20 py-16 flex justify-between items-center"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/dffafe7fbcce3e41695aae8b8e98be45a8e61ec0?width=2880')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 px-8 lg:px-16 xl:px-20" ref={teamSectionRef}>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="font-kenyan text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[180px] leading-[100%] tracking-[-0.02em] uppercase mb-16">
            <span className="text-cloudworkz-black">Our </span>
            <span className="text-cloudworkz-primary">Team</span>
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Tom King */}
            <div className="flex flex-col items-start gap-6" ref={member1Ref}>
              <div className="w-full max-w-[284px] h-[471px] rounded-[142px] overflow-hidden bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F753d3c374d9147d0953d516d520684fd?format=webp&width=800"
                  alt="Tom King"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-[30px] leading-[100%] uppercase">
                    Tom King
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-2xl leading-[100%]">
                    CEO
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-base leading-[100%] text-justify">
                  A certified Scaling Up coach and seasoned CEO with a background in tech, marketing, and finance. Helps growth-stage companies find momentum through structure
                </p>
              </div>
            </div>

            {/* William Corke */}
            <div className="flex flex-col items-start gap-6" ref={member2Ref}>
              <div className="w-full max-w-[284px] h-[471px] rounded-[142px] overflow-hidden bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F753d3c374d9147d0953d516d520684fd?format=webp&width=800"
                  alt="William Corke"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-[30px] leading-[100%] uppercase">
                    William Corke
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-2xl leading-[100%]">
                    Head of Service
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-base leading-[100%] text-justify">
                  EIS/SEIS-accredited advisor with deep experience in alternative investments and operational compliance
                </p>
              </div>
            </div>

            {/* Werner Snyman */}
            <div className="flex flex-col items-start gap-6 lg:pt-[200px]">
              <div className="w-full max-w-[284px] h-[471px] rounded-[142px] overflow-hidden bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F7ffa3c8aa060481ab88e616c5cb62507?alt=media&token=b46da86d-1fec-4517-8449-f5e0e5500f53&apiKey=1eaa4255fd854d84bde8758c04e23344"
                  alt="Werner Snyman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-[30px] leading-[100%] uppercase">
                    Werner Snyman
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-2xl leading-[100%]">
                    Head of Product
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-base leading-[100%] text-justify">
                  Designs and runs the internal systems behind our services. Blends product thinking with deep industry experience
                </p>
              </div>
            </div>

            {/* Claudia Chavez */}
            <div className="flex flex-col items-start gap-6 lg:pt-[400px]">
              <div className="w-full max-w-[284px] h-[471px] rounded-[142px] overflow-hidden bg-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F7ffa3c8aa060481ab88e616c5cb62507?alt=media&token=b46da86d-1fec-4517-8449-f5e0e5500f53&apiKey=1eaa4255fd854d84bde8758c04e23344"
                  alt="Claudia Chavez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-archivo font-semibold text-cloudworkz-primary text-[30px] leading-[100%] uppercase">
                    Claudia Chavez
                  </h3>
                  <p className="font-archivo text-cloudworkz-black text-2xl leading-[100%]">
                    Co-Founder & Commercial Director
                  </p>
                </div>
                <p className="font-archivo text-cloudworkz-black text-base leading-[100%] text-justify">
                  Expert in commercial strategy and project delivery. Focused on keeping our client operations smooth and outcomes sharp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
