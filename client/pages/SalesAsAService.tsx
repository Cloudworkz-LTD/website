import Header from "../components/Header";

export default function SalesAsAService() {
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
              src="https://api.builder.io/api/v1/image/assets/TEMP/5cc08a262d95ecd64787b15a256888f3b796930e?width=800"
              alt=""
              className="absolute w-[120%] h-[120%] object-cover mix-blend-multiply opacity-40"
              style={{
                transform: "rotate(-15deg) translate(-10%, -10%)",
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-kenyan text-4xl md:text-6xl lg:text-8xl xl:text-[180px] font-normal leading-[87%] uppercase tracking-tight mb-8">
              <span className="text-cloudworkz-primary block">
                Sales-as-a-Service
              </span>
            </h1>
            <p className="text-cloudworkz-black font-archivo text-xl md:text-2xl lg:text-3xl font-bold leading-[120%] uppercase max-w-4xl">
              A plug-and-play growth team embedded in your business. From first outreach to booked calls, our Sales Pods keep your pipeline moving.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 lg:py-32" style={{ padding: "150px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-cloudworkz-black font-kenyan text-4xl md:text-6xl lg:text-8xl font-normal leading-[87%] uppercase tracking-tight text-center mb-16">
            What You Get
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-cloudworkz-primary/10 flex items-center justify-center mb-8">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-2xl lg:text-3xl font-bold uppercase mb-4">
                Dedicated Sales Team
              </h3>
              <p className="text-cloudworkz-black font-archivo text-lg leading-[140%]">
                Expert sales professionals assigned exclusively to your account, understanding your product and market deeply.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-cloudworkz-primary/10 flex items-center justify-center mb-8">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3L21 21"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9V13L15 7L13 5L9 9Z"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 12.5L21 6"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-2xl lg:text-3xl font-bold uppercase mb-4">
                Advanced Outreach
              </h3>
              <p className="text-cloudworkz-black font-archivo text-lg leading-[140%]">
                Multi-channel prospecting including email sequences, LinkedIn automation, and phone outreach campaigns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-cloudworkz-primary/10 flex items-center justify-center mb-8">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 13H13L17 9L13 5H3V13Z"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 17V13"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="#126AF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-2xl lg:text-3xl font-bold uppercase mb-4">
                Pipeline Management
              </h3>
              <p className="text-cloudworkz-black font-archivo text-lg leading-[140%]">
                Complete CRM management, lead qualification, and sales funnel optimization to maximize conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="text-cloudworkz-black font-kenyan text-4xl md:text-6xl lg:text-8xl font-normal leading-[87%] uppercase tracking-tight text-center mb-16">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-cloudworkz-primary flex items-center justify-center mb-6">
                <span className="text-white font-archivo text-xl font-bold">1</span>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-xl font-bold uppercase mb-4">
                Discovery & Setup
              </h3>
              <p className="text-cloudworkz-black font-archivo text-base leading-[140%]">
                We learn your business, ideal customers, and value proposition to create targeted campaigns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-cloudworkz-primary flex items-center justify-center mb-6">
                <span className="text-white font-archivo text-xl font-bold">2</span>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-xl font-bold uppercase mb-4">
                Lead Generation
              </h3>
              <p className="text-cloudworkz-black font-archivo text-base leading-[140%]">
                Our team identifies and reaches out to high-quality prospects across multiple channels.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-cloudworkz-primary flex items-center justify-center mb-6">
                <span className="text-white font-archivo text-xl font-bold">3</span>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-xl font-bold uppercase mb-4">
                Qualification
              </h3>
              <p className="text-cloudworkz-black font-archivo text-base leading-[140%]">
                We qualify leads and schedule meetings with your ideal customers ready to buy.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-cloudworkz-primary flex items-center justify-center mb-6">
                <span className="text-white font-archivo text-xl font-bold">4</span>
              </div>
              <h3 className="text-cloudworkz-primary font-archivo text-xl font-bold uppercase mb-4">
                Handoff & Support
              </h3>
              <p className="text-cloudworkz-black font-archivo text-base leading-[140%]">
                Seamless handoff to your sales team with full context and ongoing pipeline support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-24 lg:py-32" style={{ padding: "150px 40px" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-cloudworkz-black font-kenyan text-4xl md:text-6xl lg:text-8xl font-normal leading-[87%] uppercase tracking-tight text-center mb-16">
            Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-cloudworkz-primary font-kenyan text-6xl lg:text-8xl font-normal leading-[87%] mb-4">
                3X
              </div>
              <p className="text-cloudworkz-black font-archivo text-xl font-bold uppercase">
                Average Pipeline Growth
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-cloudworkz-primary font-kenyan text-6xl lg:text-8xl font-normal leading-[87%] mb-4">
                50%
              </div>
              <p className="text-cloudworkz-black font-archivo text-xl font-bold uppercase">
                Faster Sales Cycles
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-cloudworkz-primary font-kenyan text-6xl lg:text-8xl font-normal leading-[87%] mb-4">
                90%
              </div>
              <p className="text-cloudworkz-black font-archivo text-xl font-bold uppercase">
                Client Satisfaction Rate
              </p>
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
              Ready to Scale Your Sales?
            </h2>

            {/* Description */}
            <p className="text-right text-cloudworkz-black font-archivo text-lg md:text-xl lg:text-2xl xl:text-[20px] font-normal leading-[100%] w-full">
              Get your dedicated sales team today.
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
                  fill="url(#pattern0_sales_cta_section)"
                />
                <defs>
                  <pattern
                    id="pattern0_sales_cta_section"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_sales_cta_section"
                      transform="matrix(0.000811134 0 0 0.000488281 -0.330601 0)"
                    />
                  </pattern>
                  <image
                    id="image0_sales_cta_section"
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
