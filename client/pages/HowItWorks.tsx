import Header from "../components/Header";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 px-8 lg:px-10 py-20 lg:py-36">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Hero Text */}
            <div className="flex-1 w-full lg:max-w-[1240px]">
              <h1 className="font-kenyan text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[180px] font-normal leading-[87%] uppercase">
                <span className="text-cloudworkz-primary">Smart Sales</span>
                <span className="text-cloudworkz-black"> in Weeks, Not Months</span>
              </h1>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 w-full lg:max-w-[1105px] relative">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/486bb2362c2909336ef78223a641ba0a32c19985?width=2218" 
                  alt="Smart Sales Background" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consult Section */}
      <section className="relative z-10 px-8 lg:px-10 py-20 lg:py-36">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Consult Text */}
            <div className="flex-1 w-full lg:max-w-[1240px]">
              <h2 className="font-kenyan text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[180px] font-normal leading-[87%] uppercase">
                <span className="text-cloudworkz-primary">Smart Sales</span>
                <span className="text-cloudworkz-black"> in Weeks, Not Months</span>
              </h2>
            </div>
            
            {/* Consult Image */}
            <div className="flex-1 w-full lg:max-w-[1105px] relative">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/486bb2362c2909336ef78223a641ba0a32c19985?width=2218" 
                  alt="Consult Background" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as home page */}
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
        {/* Footer */}
        <footer
          className="relative z-10 flex flex-col items-start gap-[61px] w-full mt-auto"
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
    </div>
  );
}
