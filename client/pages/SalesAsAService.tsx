import Header from "../components/Header";

export default function SalesAsAService() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-start gap-16 px-8 lg:px-12 py-24 lg:py-32 min-h-screen overflow-hidden">
        {/* Background Image - rotated */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3e31fe29d18433d3eef859ef6ffbd9280c48494c?width=4867"
              alt=""
              className="absolute w-[200%] h-[200%] object-cover opacity-60 mix-blend-multiply"
              style={{
                transform: "rotate(-46deg)",
                right: "-50%",
                bottom: "-50%",
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start gap-16 w-full max-w-7xl mx-auto">
          {/* Main Text */}
          <div className="flex-1">
            <h1 className="font-kenyan text-4xl md:text-6xl lg:text-8xl xl:text-[180px] font-normal leading-[87%] uppercase tracking-tight">
              <span className="text-cloudworkz-primary">Sales</span>
              <span className="text-cloudworkz-black">-as-a-Service</span>
            </h1>
          </div>

          {/* Side Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-80 md:w-60 md:h-96 lg:w-[295px] lg:h-[492px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 295 492"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-full h-full"
              >
                <path
                  d="M147.5 0C228.967 0 295 66.2534 295 147.992L295 344.008C295 425.747 228.967 492 147.5 492C66.0331 492 0 425.747 0 344.008L0 147.992C0 66.2534 66.0331 0 147.5 0Z"
                  fill="url(#pattern0_hero)"
                />
                <defs>
                  <pattern
                    id="pattern0_hero"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_hero"
                      transform="matrix(0 -0.000367398 0.000612745 0 0 1.03493)"
                    />
                  </pattern>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl">
          <div className="flex flex-col gap-5">
            <h2 className="text-cloudworkz-black font-archivo text-2xl md:text-3xl lg:text-[32px] font-semibold leading-[100%] uppercase">
              Plug in a Sales Team. Start Getting Results.
            </h2>
            <p className="text-cloudworkz-primary font-archivo text-3xl md:text-4xl lg:text-[55px] font-semibold leading-[95%] tracking-[-1.65px] uppercase">
              There is no headcount or hiring; just an expert growth pod fully
              embedded into your process.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          {/* How It Works */}
          <div className="flex flex-col gap-12 lg:gap-16 flex-1 max-w-sm">
            <h2 className="text-cloudworkz-black font-kenyan text-6xl md:text-8xl lg:text-[120px] font-normal leading-[100%] tracking-[-2.4px] uppercase">
              How It <span className="text-cloudworkz-primary">Works</span>
            </h2>
            <p className="text-cloudworkz-black font-archivo text-lg md:text-xl font-normal leading-[100%]">
              We define your message, build your playbook, and run your
              pipeline, end to end. You get weekly updates, daily execution, and
              constant iteration. For clients who want more visibility,
              automation, or internal enablement, we can use the platform to
              power their engagement.
            </p>
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-80 h-52 md:w-[438px] md:h-[298px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 438 298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M438 90.9252C438 40.7086 397.256 0 346.995 0C322.043 0 299.437 10.0326 282.997 26.2804C266.558 10.0326 243.951 0 219 0C194.049 0 171.442 10.0326 155.003 26.2804C138.563 10.0326 115.956 0 91.0053 0C40.7446 0 0 40.7086 0 90.9252V207.075C0 257.291 40.7446 298 91.0053 298C115.956 298 138.563 287.968 155.003 271.72C171.442 287.968 194.049 298 219 298C243.951 298 266.558 287.968 282.997 271.72C299.437 287.968 322.043 298 346.995 298C397.256 298 438 257.291 438 207.075V90.9252Z"
                  fill="url(#pattern0_center)"
                />
                <defs>
                  <pattern
                    id="pattern0_center"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_center"
                      transform="matrix(0.000488281 0 0 0.000717675 0 -0.234899)"
                    />
                  </pattern>
                </defs>
              </svg>
            </div>
          </div>

          {/* Why It Works */}
          <div className="flex flex-col gap-12 lg:gap-16 flex-1 max-w-sm items-end text-right">
            <h2 className="text-cloudworkz-black font-kenyan text-6xl md:text-8xl lg:text-[120px] font-normal leading-[100%] tracking-[-2.4px] uppercase">
              <span className="text-cloudworkz-primary">Why </span>
              It Works
            </h2>
            <p className="text-cloudworkz-black font-archivo text-lg md:text-xl font-normal leading-[100%]">
              We've delivered for venture-backed scaleups, founder-led startups,
              and internal GTM teams. You get people who execute, with the
              option to plug into a scale-based system.
            </p>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4373a8701b16bbeba3278cd902172f3f94d6a59c?width=2822"
            alt=""
            className="absolute top-0 left-4 w-[90%] h-[50%] object-cover rounded-[200px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center gap-8 px-8 lg:px-12">
          {/* Investors Text */}
          <div className="text-center">
            <h2 className="text-white font-kenyan text-4xl md:text-5xl lg:text-[72px] font-normal leading-[110%] uppercase mb-4">
              Investors
            </h2>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center gap-6 max-w-md text-center">
            <p className="text-cloudworkz-black font-archivo text-lg md:text-xl font-normal leading-[100%]">
              Get a Growth Team Without Building One Scale your outreach. Start
              real conversations.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-cloudworkz-primary font-archivo text-sm md:text-base font-semibold uppercase tracking-wide">
                Join the Network
              </span>
              <button className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-cloudworkz-primary hover:bg-cloudworkz-primary/10 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-90"
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

          {/* Businesses Text */}
          <div className="text-center">
            <h2 className="text-[#1EF4F4] font-kenyan text-4xl md:text-5xl lg:text-[72px] font-normal leading-[110%] uppercase">
              Businesses
            </h2>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 flex flex-col items-start gap-[61px] w-full"
        style={{ padding: "250px 40px 30px" }}
      >
        <div className="flex items-start gap-5 w-full flex-wrap lg:flex-nowrap">
          {/* Contact Us Section */}
          <div className="flex flex-col items-start gap-[109px] w-full lg:w-[321px]">
            <h3 className="text-cloudworkz-black font-kenyan text-3xl md:text-[40px] font-normal leading-[100%] tracking-[-0.8px] uppercase">
              Contact Us
            </h3>
            <div className="flex flex-col items-start gap-5 w-[207px]">
              <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                info@cloudworkz.com
              </div>
              <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                555 123 4567
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-start gap-[77px] w-full lg:w-[321px]">
            <h3 className="text-cloudworkz-black font-kenyan text-3xl md:text-[40px] font-normal leading-[100%] tracking-[-0.8px] uppercase">
              Follow Us
            </h3>
            <div className="flex flex-col items-start gap-[18px] w-[87px]">
              <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                LinkedIn
              </div>
              <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                Twitter
              </div>
              <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
                Facebook
              </div>
            </div>
          </div>

          {/* Legal Links Section */}
          <div className="flex flex-col items-start gap-[18px] w-full lg:w-[321px]">
            <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
              Privacy Policy
            </div>
            <div className="text-cloudworkz-black font-archivo text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
              Terms of Service
            </div>
          </div>
        </div>

        {/* Logo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2ca41c4ebe4ba18e91febe21b8f069e137f71166?width=2720"
          alt="CloudWorkz Logo"
          className="w-full max-w-[1360px] h-auto"
          style={{ height: "178.678px" }}
        />
      </footer>
    </div>
  );
}
