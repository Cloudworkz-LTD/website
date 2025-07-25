import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="relative z-10 w-full">
      <div className="flex justify-between items-end px-8 lg:px-12 py-6 lg:py-8 h-[98px]">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7017ab23eb3bbe11cd6b41c3281f2d73a486ba72?width=754"
            alt="CloudWorkz Logo"
            className="h-8 lg:h-12 w-auto"
          />
        </Link>

        {/* Navigation Menu - Block Buttons */}
        <nav className="hidden md:flex items-end space-x-8 lg:space-x-12">
          <Link
            to="/our-story"
            className={`font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-75 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer ${
              location.pathname === "/our-story"
                ? "text-cloudworkz-primary italic scale-105"
                : "text-cloudworkz-black"
            }`}
          >
            OUR STORY
          </Link>
          <Link
            to="/what-we-do"
            className={`font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-75 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer ${
              location.pathname === "/what-we-do"
                ? "text-cloudworkz-primary italic scale-105"
                : "text-cloudworkz-black"
            }`}
          >
            WHAT WE DO
          </Link>
          <Link
            to="/insights"
            className={`font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-75 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer ${
              location.pathname === "/insights"
                ? "text-cloudworkz-primary italic scale-105"
                : "text-cloudworkz-black"
            }`}
          >
            INSIGHTS
          </Link>
          <Link
            to="/how-it-works"
            className={`font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-75 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer ${
              location.pathname === "/how-it-works"
                ? "text-cloudworkz-primary italic scale-105"
                : "text-cloudworkz-black"
            }`}
          >
            HOW IT WORKS
          </Link>
          <button className="text-cloudworkz-black font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-75 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer">
            GET IN TOUCH
          </button>
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
