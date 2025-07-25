import Header from "../components/Header";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 lg:px-12 py-24">
        {/* Background Image - positioned absolutely */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2e97589e4f23e93327f7abe3975ab7522a7594b3?width=3148"
              alt=""
              className="absolute w-[120%] h-[120%] object-cover mix-blend-multiply opacity-60"
              style={{
                transform: "rotate(-105deg) translate(-10%, -10%)",
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-kenyan text-4xl md:text-6xl lg:text-8xl xl:text-[180px] font-normal leading-[87%] uppercase tracking-tight">
              <span className="text-cloudworkz-black block">
                Sales That Execute.{" "}
              </span>
              <span className="text-cloudworkz-primary block">
                Systems That Scale.
              </span>
            </h1>
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
