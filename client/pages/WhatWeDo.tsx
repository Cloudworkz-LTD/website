import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function WhatWeDo() {
  const navigate = useNavigate();

  const handleSalesAsAServiceClick = () => {
    navigate('/sales-as-a-service');
  };

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

      {/* Services Section */}
      <section
        className="relative z-10 py-24 lg:py-32"
        style={{ padding: "150px 40px" }}
      >
        <div className="flex flex-col items-start w-full">
          {/* Service Block 1 - Sales-as-a-Service */}
          <div className="flex flex-col lg:flex-row items-start justify-between w-full py-12 lg:py-16 border-b-2 border-cloudworkz-primary gap-8 lg:gap-12">
            {/* Title */}
            <div className="flex flex-col items-start gap-5 w-full lg:w-[500px] flex-shrink-0">
              <h2 className="text-cloudworkz-primary font-archivo text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-[80%] tracking-[-1.6px] uppercase">
                Sales-as-a-Service
              </h2>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center w-full lg:w-[400px] lg:h-[400px] h-[300px] flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5cc08a262d95ecd64787b15a256888f3b796930e?width=800"
                alt="Sales-as-a-Service"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="flex flex-col justify-center items-end gap-12 lg:gap-16 w-full lg:w-[348px] flex-shrink-0 self-stretch">
              <p className="text-cloudworkz-black text-justify font-archivo text-lg md:text-2xl lg:text-[32px] font-bold leading-[100%] uppercase w-full">
                A plug-and-play growth team embedded in your business. From
                first outreach to booked calls, our Sales Pods keep your
                pipeline moving.
              </p>
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

          {/* Service Block 2 - Cloudworkz App */}
          <div className="flex flex-col lg:flex-row items-start w-full py-12 lg:py-16 border-b-2 border-cloudworkz-primary gap-8 lg:gap-12">
            {/* Image */}
            <div className="flex justify-center items-center w-full lg:w-[400px] lg:h-[400px] h-[300px] flex-shrink-0 order-1 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/96917f53b229f1ba236767005922073243f6d942?width=800"
                alt="Cloudworkz App"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="flex flex-col justify-center items-start gap-5 w-full lg:w-[500px] flex-shrink-0 order-2">
              <h2 className="text-cloudworkz-primary font-archivo text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-[80%] tracking-[-1.6px] uppercase">
                Cloudworkz App
              </h2>
            </div>

            {/* Text Block */}
            <div className="flex flex-col justify-center items-end gap-12 lg:gap-16 w-full lg:w-[348px] flex-shrink-0 order-3">
              <p className="text-cloudworkz-black text-justify font-archivo text-lg md:text-2xl lg:text-[32px] font-bold leading-[100%] uppercase w-full">
                A modular execution platform that automates the work behind
                growth. Cloudworkz connects your tools, data, content, and logic
                into one intelligent system, helping teams move faster without
                adding headcount. Modular by design. Powered by rules. Ready to
                scale.
              </p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full overflow-hidden">
        <div
          className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-[31px] w-full"
          style={{ padding: "200px 40px" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d657b320bc159d7250af2fd53a8d55e128c07f90?width=4902"
              alt=""
              className="absolute w-[170%] h-[170%] object-cover mix-blend-multiply opacity-60"
              style={{
                right: "-60%",
                bottom: "-45%",
              }}
            />
          </div>

          {/* Text Block */}
          <div className="relative z-20 flex flex-col items-end gap-5 flex-1 max-w-4xl">
            {/* Title */}
            <h2 className="text-right font-kenyan text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal leading-[110%] uppercase text-cloudworkz-black w-full">
              Skip the chaos. Scale the results.
            </h2>

            {/* Description */}
            <p className="text-right text-cloudworkz-black font-archivo text-lg md:text-xl lg:text-2xl xl:text-[20px] font-normal leading-[100%] w-full">
              Growth Pods. Automation tools. One partner.
            </p>

            {/* Button */}
            <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors mt-4">
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
                  fill="url(#pattern0_cta_section)"
                />
                <defs>
                  <pattern
                    id="pattern0_cta_section"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_cta_section"
                      transform="matrix(0.000811134 0 0 0.000488281 -0.330601 0)"
                    />
                  </pattern>
                  <image
                    id="image0_cta_section"
                    width="2048"
                    height="2048"
                    href="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F7ddc6c1864874fca9d33f9ddb8f72b61?format=webp&width=800"
                  />
                </defs>
              </svg>
            </div>
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
