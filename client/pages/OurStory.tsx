import Header from "@/components/Header";

export default function OurStory() {
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
                >
                  {/* Text Content */}
                  <div className="text-center text-white mb-6 lg:mb-8">
                    <p className="font-archivo text-xl lg:text-2xl font-normal leading-[100%] uppercase max-w-[280px] text-justify">
                      Cloudworkz was born to solve startup chaos.
                    </p>
                  </div>
                </div>
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
        >
          {/* Left Text */}
          <div className="w-80 flex-shrink-0">
            <p className="text-cloudworkz-black font-archivo text-base leading-[100%] text-justify">
              The biggest growth bottleneck isn't ideas — it's follow-through.
            </p>
          </div>

          {/* Right Text */}
          <div className="w-80 flex-shrink-0 flex flex-col justify-end">
            <p className="text-cloudworkz-black font-archivo text-2xl lg:text-[32px] font-semibold leading-[100%] uppercase text-justify">
              That's why Cloudworkz blends human execution with a system that doesn't forget, wait, or drop the ball.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
