export default function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="flex justify-between items-end px-8 lg:px-12 py-6 lg:py-8 h-[98px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7017ab23eb3bbe11cd6b41c3281f2d73a486ba72?width=754"
            alt="CloudWorkz Logo"
            className="h-8 lg:h-12 w-auto"
          />
        </div>

        {/* Navigation Menu - Block Buttons */}
        <nav className="hidden md:flex items-end space-x-8 lg:space-x-12">
          <button className="text-cloudworkz-black font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer">
            OUR STORY
          </button>
          <button className="text-cloudworkz-black font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer">
            WHAT WE DO
          </button>
          <button className="text-cloudworkz-black font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer">
            INSIGHTS
          </button>
          <button className="text-cloudworkz-black font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer">
            HOW IT WORKS
          </button>
          <button className="text-cloudworkz-black font-kenyan text-2xl lg:text-[35px] uppercase tracking-[1.05px] leading-[87%] transition-all duration-300 hover:text-cloudworkz-primary hover:italic hover:scale-105 cursor-pointer">
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
