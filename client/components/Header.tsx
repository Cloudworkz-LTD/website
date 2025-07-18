export default function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="flex justify-between items-end px-8 lg:px-12 py-6 lg:py-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/975cad6ee425fbccdfcaa5350fa4648247130820?width=2880"
            alt="CloudWorkz Logo"
            className="h-8 lg:h-12 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <a
            href="#our-story"
            className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wider font-medium transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 hover:font-semibold"
          >
            OUR STORY
          </a>
          <a
            href="#what-we-do"
            className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wider font-medium transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 hover:font-semibold"
          >
            WHAT WE DO
          </a>
          <a
            href="#insights"
            className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wider font-medium transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 hover:font-semibold"
          >
            INSIGHTS
          </a>
          <a
            href="#how-it-works"
            className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wider font-medium transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 hover:font-semibold"
          >
            HOW IT WORKS
          </a>
          <a
            href="#get-in-touch"
            className="text-cloudworkz-black font-archivo text-sm lg:text-base uppercase tracking-wider font-medium transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 hover:font-semibold"
          >
            GET IN TOUCH
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-cloudworkz-black p-2">
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
      </div>
    </header>
  );
}
