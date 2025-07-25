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
              In this section, we share what we've learned building systems, running sales, and designing smart workflows across industries and stages
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
                Real-world examples of how we structure, automate and optimise workflows using Cloudworkz.
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
                Strategic breakdowns of what's working in sales, RevOps, and content execution.
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
                Tips on how to connect your stack to Cloudworkz, use our modules, or get more from your own tools.
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
    </div>
  );
}
