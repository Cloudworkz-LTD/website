import Header from "../components/Header";

const CloudworkzApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex px-10 py-32 items-start gap-20 w-full overflow-hidden">
        {/* Background Image - Rotated */}
        <div className="absolute -left-64 -bottom-80 w-[2433px] h-[2307px] rotate-75 mix-blend-multiply opacity-60">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/4958bff6fa36aa232c74ae5aa189627c0b65d8f4?width=4867"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="font-kenyan text-[12rem] xl:text-[15rem] leading-[0.87] uppercase font-normal">
            <span className="text-cloudworkz-black">The </span>
            <span className="text-cloudworkz-primary">Cloudworkz </span>
            <span className="text-cloudworkz-black">App</span>
          </h1>
        </div>
        
        {/* App Image */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-80 h-[500px] rounded-[148px] overflow-hidden bg-gradient-to-b from-blue-400 to-orange-400">
            {/* Placeholder for app mockup */}
            <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded-full blur-lg"></div>
              <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white/25 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Execution Infrastructure */}
      <section className="flex px-10 pb-32 items-start gap-96 w-full">
        <div className="flex flex-col items-start gap-5 max-w-2xl">
          <h2 className="font-archivo text-[3.4rem] font-semibold leading-[0.95] tracking-tight uppercase text-cloudworkz-primary text-justify">
            Execution Infrastructure for Modern Growth Teams
          </h2>
        </div>
        
        <div className="flex flex-col items-start gap-8 max-w-xs">
          <p className="font-archivo text-xl text-cloudworkz-black text-justify leading-tight">
            The Cloudworkz App is a modular platform that automates execution across your go-to-market systems, not just sales.
          </p>
          <p className="font-archivo text-xl text-cloudworkz-black text-justify leading-tight">
            From lead intake to content generation, data enrichment to onboarding, it connects your stack, applies your logic, and gets work done.
          </p>
        </div>
      </section>

      {/* Section 3 - What It Can Automate */}
      <section className="flex px-10 py-24 flex-col items-start gap-2 w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          <h2 className="font-kenyan text-[5.6rem] font-normal leading-tight tracking-tight uppercase text-cloudworkz-black">
            What It Can Automate
          </h2>
          <div className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black text-justify">
            Lead intake from forms, ads, or spreadsheets<br/>
            Intelligent routing to sales, CS, or execs<br/>
            Personalised content generation and multichannel formatting<br/>
            CRM sync, deal tracking, and investor data management<br/>
            Onboarding workflows and payment handling<br/>
            Segmentation, enrichment, and campaign planning
          </div>
        </div>
      </section>

      {/* Section 4 - Core Engines */}
      <section className="flex w-full px-10 py-24 flex-col items-start">
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <h2 className="font-kenyan text-[7.5rem] font-normal leading-tight tracking-tight uppercase">
            <span className="text-cloudworkz-primary">Core </span>
            <span className="text-cloudworkz-black">Engines</span>
          </h2>
        </div>
        
        <div className="flex flex-col items-start w-full">
          {/* Sales Engine */}
          <div className="flex py-12 justify-between items-end w-full border-b-2 border-cloudworkz-primary">
            <div className="flex flex-col items-start gap-5 max-w-2xl">
              <h3 className="font-archivo text-[3.4rem] font-semibold leading-[0.95] tracking-tight uppercase text-cloudworkz-primary text-justify">
                Sales Engine
              </h3>
              <p className="font-archivo text-2xl font-semibold leading-tight tracking-tight uppercase text-cloudworkz-black text-justify max-w-md">
                Automates the workflows behind prospecting, routing, and conversion.
              </p>
            </div>
            
            <div className="flex flex-col justify-end items-start gap-2 max-w-lg">
              <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                Key Modules
              </h4>
              <div className="font-archivo text-base text-cloudworkz-black text-justify leading-tight max-w-lg">
                Lead intake & qualification<br/>
                Intelligent routing based on persona, value, or timing<br/>
                Follow-ups and reactivation<br/>
                Handoffs to CS or execs
              </div>
            </div>
          </div>
          
          {/* Content Engine */}
          <div className="flex py-12 justify-between items-end w-full border-b-2 border-cloudworkz-primary">
            <div className="flex flex-col items-start gap-5 max-w-2xl">
              <h3 className="font-archivo text-[3.4rem] font-semibold leading-[0.95] tracking-tight uppercase text-cloudworkz-primary text-justify">
                Content Engine
              </h3>
              <p className="font-archivo text-2xl font-semibold leading-tight tracking-tight uppercase text-cloudworkz-black text-justify max-w-md">
                Generates and manages personalised messaging and content across every channel.
              </p>
            </div>
            
            <div className="flex flex-col justify-end items-start gap-2 max-w-lg">
              <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                Key Modules
              </h4>
              <div className="font-archivo text-base text-cloudworkz-black text-justify leading-tight max-w-lg">
                Persona-based message generation<br/>
                Multichannel formatting (email, LinkedIn, WhatsApp)<br/>
                Deck and doc automation<br/>
                A/B testing and copy optimisation<br/>
                Compliant content tagging
              </div>
            </div>
          </div>
          
          {/* Data Engine */}
          <div className="flex py-12 justify-between items-start w-full border-b-2 border-cloudworkz-primary">
            <div className="flex flex-col items-start gap-5 max-w-2xl">
              <h3 className="font-archivo text-[3.4rem] font-semibold leading-[0.95] tracking-tight uppercase text-cloudworkz-primary text-justify">
                Data Engine
              </h3>
              <p className="font-archivo text-2xl font-semibold leading-tight tracking-tight uppercase text-cloudworkz-black text-justify max-w-md">
                Powers the intelligence layer behind your growth execution, from campaign planning to outcome feedback.
              </p>
            </div>
            
            <div className="flex items-start gap-6 max-w-lg">
              <div className="flex flex-col items-start gap-6 flex-1">
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    DataPrep
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Clean, deduplicate, and normalise leads from multiple sources
                  </p>
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    DataLynx
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Add firmographic, location, and investor-specific traits to your data
                  </p>
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    FilterCraft
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Apply campaign-specific filters (e.g. by region, investor type, persona)
                  </p>
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    DialPlan Designer
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Auto-generate daily calling or outreach plans by priority and timing
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-start gap-6 flex-1">
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    SignalRank
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Score leads using configurable logic based on enrichment, behaviour, or past outcomes
                  </p>
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    Feedback Loop
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Capture outreach results and reintegrate insights into lead targeting
                  </p>
                </div>
                
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-archivo text-2xl font-semibold leading-tight uppercase text-cloudworkz-black">
                    DataPath AI
                  </h4>
                  <p className="font-archivo text-base text-cloudworkz-black text-justify leading-tight">
                    Analyse past performance to recommend better targeting or sequencing for future campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Modular by Design */}
      <section className="flex w-full px-10 py-32 justify-between items-start relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute -left-96 -top-48 w-[1826px] h-[1215px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b75f450e2b9f1f0b8e904dd490b35eca12d87b91?width=3652"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-start max-w-2xl">
          <h2 className="font-kenyan text-[7.5rem] font-normal leading-tight tracking-tight uppercase mb-8">
            <span className="text-cloudworkz-primary">Modular<br/></span>
            <span className="text-cloudworkz-black">by Design</span>
          </h2>
          <p className="font-archivo text-2xl text-cloudworkz-black text-justify leading-tight tracking-tight max-w-lg">
            Turn on only what you need. Add logic, AI agents, or new engines as you grow.
            Built to flex with your stack or run independently.
          </p>
        </div>
        
        <div className="relative z-10 flex-shrink-0">
          <div className="w-[560px] h-[336px] rounded-[180px] overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Statistics and CTA */}
      <section className="flex w-full px-10 py-32 justify-between items-center relative">
        <div className="flex items-center gap-3">
          <span className="font-archivo text-base font-semibold leading-tight uppercase text-cloudworkz-primary">
            start scaling
          </span>
          <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform -rotate-90"
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
        
        <div className="flex items-center gap-6">
          {/* Stat 1 */}
          <div className="flex flex-col items-start py-8 w-80">
            <div className="flex items-start">
              <span className="font-archivo text-[8.75rem] font-semibold leading-tight tracking-tight uppercase text-cloudworkz-primary">
                2.4
              </span>
              <span className="font-archivo text-[5rem] font-bold leading-tight uppercase text-cloudworkz-primary">
                x
              </span>
            </div>
            <h3 className="font-archivo text-[2.5rem] font-bold leading-tight text-cloudworkz-primary">
              CONVERSION<br/>RATE
            </h3>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-start py-8 w-80">
            <div className="flex items-start">
              <span className="font-archivo text-[8.75rem] font-semibold leading-tight tracking-tight uppercase text-cloudworkz-primary">
                85
              </span>
              <span className="font-archivo text-[5rem] font-bold leading-tight uppercase text-cloudworkz-primary">
                %
              </span>
            </div>
            <h3 className="font-archivo text-[2.5rem] font-bold leading-tight text-cloudworkz-primary">
              LEAD<br/>QUALITY
            </h3>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col items-start py-8 w-80">
            <div className="flex items-start">
              <span className="font-archivo text-[8.75rem] font-semibold leading-tight tracking-tight uppercase text-cloudworkz-primary">
                3.2
              </span>
              <span className="font-archivo text-[5rem] font-bold leading-tight uppercase text-cloudworkz-primary">
                K
              </span>
            </div>
            <h3 className="font-archivo text-[2.5rem] font-bold leading-tight text-cloudworkz-primary">
              ACTIVE<br/>LEADS
            </h3>
          </div>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute right-0 bottom-0 w-[1744px] h-[500px] rounded-[250px] border-2 border-cloudworkz-primary transform translate-x-[584px] translate-y-[35px]"></div>
      </section>

      {/* Footer */}
      <footer className="flex w-full px-10 pt-64 pb-8 flex-col items-start gap-16">
        <div className="flex items-start gap-5 w-full">
          <div className="flex flex-col items-start gap-28 w-80">
            <h3 className="font-kenyan text-[2.5rem] font-normal leading-tight tracking-tight uppercase text-cloudworkz-black">
              Contact Us
            </h3>
            <div className="flex flex-col items-start gap-5 w-52">
              <p className="font-archivo text-base text-cloudworkz-black">
                info@cloudworkz.com
              </p>
              <p className="hidden font-archivo text-base text-cloudworkz-black">
                555 123 4567
              </p>
              <div className="font-archivo text-base text-cloudworkz-black leading-tight">
                <p>86-90 Paul Street</p>
                <p>London</p>
                <p>EC2A 4NE</p>
              </div>
            </div>
          </div>
          
          <div className="hidden flex flex-col items-start gap-20 w-80">
            <h3 className="font-kenyan text-[2.5rem] font-normal leading-tight tracking-tight uppercase text-cloudworkz-black">
              Follow Us
            </h3>
            <div className="flex flex-col items-start gap-5 w-22">
              <p className="font-archivo text-base text-cloudworkz-black">LinkedIn</p>
              <p className="font-archivo text-base text-cloudworkz-black">Twitter</p>
              <p className="font-archivo text-base text-cloudworkz-black">Facebook</p>
            </div>
          </div>
          
          <div className="hidden flex flex-col items-start gap-5 w-80">
            <p className="font-archivo text-base text-cloudworkz-black w-32">
              Privacy Policy
            </p>
            <p className="font-archivo text-base text-cloudworkz-black w-38">
              Terms of Service
            </p>
          </div>
        </div>
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2ca41c4ebe4ba18e91febe21b8f069e137f71166?width=2720"
          alt="Cloudworkz logo"
          className="w-full max-w-4xl h-auto"
        />
      </footer>
    </div>
  );
};

export default CloudworkzApp;
