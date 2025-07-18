export default function Index() {
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
              width: "100%",
              height: "120%",
              left: "0px",
              top: "0px",
            }}
          />
        </div>
      </section>

      {/* Header over background */}
      <header className="relative z-10 p-8 lg:p-12">
        <nav className="flex items-center justify-between">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dd9a482b213c606eedb5a52774ad84dbc586a1de?width=2714"
            alt="CloudWorkz Logo"
            className="h-8 lg:h-12 w-auto"
          />

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#home"
              className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wide transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wide transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wide transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wide transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cloudworkz-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>
    </div>
  );
}
