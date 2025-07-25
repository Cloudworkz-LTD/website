import Header from "@/components/Header";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section based on Figma design */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/0b1d5506f2c774d4fe2d20c11147e2c717fcb2c7?width=3005"
            alt=""
            className="w-full h-full object-cover opacity-40 mix-blend-multiply transform rotate-[105deg] scale-150"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Main Heading */}
            <div className="lg:col-span-7 xl:col-span-8">
              <h1 className="font-kenyan text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] leading-[87%] uppercase">
                <span className="text-cloudworkz-primary">We Build</span>
                <span className="text-cloudworkz-black"> Systems That Work</span>
              </h1>
            </div>

            {/* Right Side - Circular Content */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
                {/* Circular Background with Image */}
                <div 
                  className="w-full h-full rounded-full flex items-end justify-center p-6 sm:p-8 lg:p-10"
                  style={{
                    backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/4536d6a6ca5818952a61dda081387c7f237d233b?width=1982')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Text Content */}
                  <div className="text-center text-white mb-4 sm:mb-6 lg:mb-8">
                    <p className="font-archivo text-lg sm:text-xl lg:text-2xl font-normal leading-[100%] uppercase max-w-[260px] text-justify">
                      Cloudworkz was born to solve startup chaos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
