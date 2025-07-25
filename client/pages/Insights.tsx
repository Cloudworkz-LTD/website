import Header from "@/components/Header";

export default function Insights() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-end px-4 md:px-10 py-12 md:py-24 lg:py-32">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c3e373440c6c174a1a66997892291a0e2d8adfdd?width=2272"
            alt=""
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="w-full text-4xl md:text-6xl lg:text-8xl xl:text-[180px] font-kenyan uppercase leading-[87%] mb-8 lg:mb-12">
            <span className="text-cloudworkz-black">
              Practical Ideas From the Frontlines of{" "}
            </span>
            <span className="text-cloudworkz-primary">Growth</span>
          </h1>

          {/* Text Block */}
          <div className="flex flex-col items-start gap-6 md:gap-8 max-w-lg ml-auto lg:mr-0">
            <h2 className="text-xl md:text-2xl lg:text-[32px] font-archivo font-bold leading-[100%] tracking-[-0.64px] uppercase text-cloudworkz-black">
              Cloudworkz isn't built on theory, it's built on execution
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-archivo text-cloudworkz-black leading-[100%]">
              In this section, we share what we've learned building systems,
              running sales, and designing smart workflows across industries and
              stages
            </p>
          </div>
        </div>
      </section>

      {/* Insights Content Sections */}
      <section className="px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Execution Playbooks Block */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end py-12 md:py-16 border-b-2 border-cloudworkz-primary gap-6 lg:gap-8">
            <div className="flex flex-col items-start gap-4 md:gap-6 flex-1 max-w-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-[55px] font-archivo font-bold leading-[95%] tracking-[-1.65px] uppercase text-cloudworkz-primary">
                Execution Playbooks
              </h3>
              <p className="text-xl md:text-2xl lg:text-[32px] font-archivo font-bold leading-[100%] tracking-[-0.64px] uppercase text-cloudworkz-black max-w-sm">
                Real-world examples of how we structure, automate and optimise
                workflows using Cloudworkz.
              </p>
            </div>
            <div className="text-base md:text-lg lg:text-xl font-archivo text-cloudworkz-black leading-[100%] max-w-sm">
              <p>Examples:</p>
              <ul className="mt-2 space-y-1">
                <li>• How to structure a lead intake and enrichment flow</li>
                <li>• Creating a modular follow-up system with AI agents</li>
                <li>• Routing logic for founder-led sales teams</li>
              </ul>
            </div>
          </div>

          {/* Sales + Ops Thinking Block */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end py-12 md:py-16 border-b-2 border-cloudworkz-primary gap-6 lg:gap-8">
            <div className="flex flex-col items-start gap-4 md:gap-6 flex-1 max-w-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-[55px] font-archivo font-bold leading-[95%] tracking-[-1.65px] uppercase text-cloudworkz-primary">
                Sales + Ops Thinking
              </h3>
              <p className="text-xl md:text-2xl lg:text-[32px] font-archivo font-bold leading-[100%] tracking-[-0.64px] uppercase text-cloudworkz-black max-w-sm">
                Strategic breakdowns of what's working in sales, RevOps, and
                content execution.
              </p>
            </div>
            <div className="text-base md:text-lg lg:text-xl font-archivo text-cloudworkz-black leading-[100%] max-w-sm">
              <p>Examples:</p>
              <ul className="mt-2 space-y-1">
                <li>• The problem with CRMs (and how we built around them)</li>
                <li>• When to automate, when to delegate</li>
                <li>• What actually slows down sales execution</li>
              </ul>
            </div>
          </div>

          {/* Tooling + Tactics Block */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end py-12 md:py-16 border-b-2 border-cloudworkz-primary gap-6 lg:gap-8">
            <div className="flex flex-col items-start gap-4 md:gap-6 flex-1 max-w-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-[55px] font-archivo font-bold leading-[95%] tracking-[-1.65px] uppercase text-cloudworkz-primary">
                Tooling + Tactics
              </h3>
              <p className="text-xl md:text-2xl lg:text-[32px] font-archivo font-bold leading-[100%] tracking-[-0.64px] uppercase text-cloudworkz-black max-w-sm">
                Tips on how to connect your stack to Cloudworkz, use our
                modules, or get more from your own tools.
              </p>
            </div>
            <div className="text-base md:text-lg lg:text-xl font-archivo text-cloudworkz-black leading-[100%] max-w-sm">
              <p>Examples:</p>
              <ul className="mt-2 space-y-1">
                <li>• Using Google Sheets as your CRM</li>
                <li>• Mapping leads from Webflow forms</li>
                <li>• Setting up Slack alerts from Cloudworkz rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
        {/* Text Block Section */}
        <section className="relative w-full overflow-hidden">
          {/* Content Layer */}
          <div
            className="relative z-10"
            style={{ padding: "200px 180px 250px" }}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 pt-8 lg:pt-16"
                style={{ gap: "31px" }}
              >
                {/* Text Content */}
                <div className="flex flex-col items-end gap-5 max-w-4xl lg:flex-1">
                  {/* Title */}
                  <h2 className="text-right font-kenyan text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal leading-[110%] uppercase">
                    <span className="text-cloudworkz-black">
                      You don't need more dashboards.{" "}
                    </span>
                    <span className="text-cloudworkz-primary">
                      You need a system that gets the work done
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-right text-cloudworkz-black font-archivo text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal leading-[110%] max-w-3xl">
                    Cloudworkz gives you the tools — and the team — to move
                    faster, close smarter, and scale without chaos.
                  </p>

                  {/* CTA Block */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase text-right">
                      Let's Build Together
                    </div>
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
                        fill="url(#pattern0_297_72)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_297_72"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_297_72"
                            transform="matrix(0.000811134 0 0 0.000488281 -0.330601 0)"
                          />
                        </pattern>
                        <image
                          id="image0_297_72"
                          width="2048"
                          height="2048"
                          href="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2F7ddc6c1864874fca9d33f9ddb8f72b61?format=webp&width=800"
                        />
                      </defs>
                    </svg>
                  </div>
                </div>
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
    </div>
  );
}
