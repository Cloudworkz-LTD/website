import { ArrowDownRight, Play } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Logo */}
      <header className="relative z-10 p-8 lg:p-12">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd9a482b213c606eedb5a52774ad84dbc586a1de?width=2714"
          alt="CloudWorkz Logo"
          className="h-8 lg:h-12 w-auto"
        />
      </header>

      {/* Hero Section */}
      <section className="relative px-8 lg:px-12 pb-16 lg:pb-24">
        {/* Background gradient images */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c91039e8c175092fb2267c579184522381329852?width=4130"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Main Headlines */}
            <div className="space-y-8">
              <h1 className="font-kenyan text-6xl sm:text-8xl lg:text-[200px] leading-[0.87] uppercase text-cloudworkz-black tracking-tight">
                Your Portal to
              </h1>
              <h2 className="font-kenyan text-6xl sm:text-8xl lg:text-[200px] leading-[0.87] uppercase text-cloudworkz-primary tracking-tight">
                Opportunities
              </h2>

              {/* Company Description */}
              <div className="mt-16 lg:mt-24">
                <p className="font-archivo text-3xl sm:text-4xl lg:text-[55px] leading-[0.95] uppercase font-medium tracking-tight text-justify">
                  <span className="text-cloudworkz-primary">Cloudworkz</span>{" "}
                  <span className="text-cloudworkz-black">
                    is a dynamic hub connecting visionary investors, startups,
                    and high-growth businesses with AI-powered sales, strategic
                    funding, and acceleration into the future. Discover a world
                    where ideas leap forward
                  </span>
                </p>
                <div className="text-6xl lg:text-[100px] text-cloudworkz-primary font-kenyan mt-8">
                  *
                </div>
              </div>
            </div>

            {/* Right Column - Action Section */}
            <div className="lg:mt-32 space-y-8">
              <p className="font-archivo text-xl lg:text-2xl text-cloudworkz-black leading-tight">
                Step through the crack in time where innovation ignites funding,
                scalability, and success.
              </p>

              <div className="flex items-center gap-3">
                <div className="text-cloudworkz-primary font-archivo font-semibold text-sm uppercase leading-tight tracking-tight">
                  Catch
                  <br />
                  the Future
                  <br />
                  Now
                </div>
                <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
                  <ArrowDownRight
                    size={24}
                    className="text-cloudworkz-primary"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="relative py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Future-Ready Growth */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white">
                <h3 className="font-kenyan text-4xl lg:text-[90px] leading-none uppercase tracking-tight mb-6">
                  Future-Ready Growth
                </h3>
                <p className="font-archivo text-base lg:text-xl">
                  AI-driven solutions for funding and sales that redefine what's
                  possible
                </p>
              </div>
            </div>

            {/* Vision Meets Execution */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white">
                <h3 className="font-kenyan text-4xl lg:text-[90px] leading-none uppercase tracking-tight mb-6">
                  Vision Meets Execution
                </h3>
                <p className="font-archivo text-base lg:text-xl">
                  A network built for tomorrow, linking bold ideas to real
                  outcomes
                </p>
              </div>
            </div>

            {/* Scalable Impact */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white">
                <h3 className="font-kenyan text-4xl lg:text-[90px] leading-none uppercase tracking-tight mb-6">
                  Scalable Impact
                </h3>
                <p className="font-archivo text-base lg:text-xl">
                  Proven strategies to leap forward, designed for sustained
                  success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Now Marquee */}
      <section className="py-16 overflow-hidden">
        <div className="flex space-x-8 animate-pulse">
          <h2 className="font-kenyan text-8xl lg:text-[180px] leading-none uppercase tracking-tight whitespace-nowrap">
            <span className="text-cloudworkz-black">Beyond</span>
            <span className="text-cloudworkz-primary"> Now</span>
          </h2>
          <h2 className="font-kenyan text-8xl lg:text-[180px] leading-none uppercase tracking-tight whitespace-nowrap">
            <span className="text-cloudworkz-black">Beyond</span>
            <span className="text-cloudworkz-primary"> Now</span>
          </h2>
          <h2 className="font-kenyan text-8xl lg:text-[180px] leading-none uppercase tracking-tight whitespace-nowrap">
            <span className="text-cloudworkz-black">Beyond</span>
            <span className="text-cloudworkz-primary"> Now</span>
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Investor Matching */}
          <div className="border-b-2 border-cloudworkz-primary pb-12 lg:pb-16 mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              <div className="space-y-6">
                <h3 className="font-archivo text-4xl lg:text-[80px] leading-[0.8] uppercase font-semibold text-cloudworkz-primary tracking-tight">
                  Investor Matching
                </h3>
                <p className="font-archivo text-sm lg:text-base leading-relaxed text-cloudworkz-black text-justify">
                  Through smart matchmaking and deep industry insight, we help
                  ideas find the backing they deserve. Whether you're seeking
                  seed funding or strategic capital, we make sure your growth
                  journey starts with the right handshake.
                </p>
              </div>
              <div className="space-y-12 lg:space-y-16 text-right">
                <p className="font-archivo text-xl lg:text-[32px] leading-none uppercase font-semibold text-cloudworkz-black">
                  We connect visionary founders with the right investors to
                  spark lasting partnerships.
                </p>
                <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors ml-auto">
                  <ArrowDownRight
                    size={24}
                    className="text-cloudworkz-primary"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* AI-Powered Sales */}
          <div className="border-b-2 border-cloudworkz-primary pb-12 lg:pb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              <div className="space-y-6">
                <h3 className="font-archivo text-4xl lg:text-[80px] leading-[0.8] uppercase font-semibold text-cloudworkz-primary tracking-tight">
                  AI-Powered Sales
                </h3>
                <p className="font-archivo text-sm lg:text-base leading-relaxed text-cloudworkz-black text-justify">
                  Our AI-driven tools help you understand customer behavior,
                  predict opportunities, and close deals faster. It's not just
                  about selling more —it's about selling smarter.
                </p>
              </div>
              <div className="space-y-12 lg:space-y-16 text-right">
                <p className="font-archivo text-xl lg:text-[32px] leading-none uppercase font-semibold text-cloudworkz-black">
                  Supercharge your sales process with smart automation and
                  real-time insights.
                </p>
                <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors ml-auto">
                  <ArrowDownRight
                    size={24}
                    className="text-cloudworkz-primary"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glimpses of Tomorrow */}
      <section className="relative py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="font-kenyan text-6xl lg:text-[180px] leading-none uppercase tracking-tight mb-16">
            <span className="text-cloudworkz-black">Glimpses of </span>
            <span className="text-cloudworkz-primary">Tomorrow</span>
          </h2>

          <div className="relative">
            {/* Video/Image placeholder with play button */}
            <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-3xl relative overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/61c5dc10bd8b897a4fc6c55aab3fe76bd097d8f6?width=2880"
                alt="Future technology visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="flex items-center gap-4 text-white">
                  <span className="font-archivo text-sm uppercase tracking-wider">
                    See how we fuel growth
                  </span>
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                </button>
              </div>
            </div>

            <p className="font-archivo text-lg lg:text-2xl text-cloudworkz-black mt-8 max-w-lg">
              NexGen Robotics secured £5M and soared into the future with
              Cloudworkz's curated investor network.
            </p>
          </div>
        </div>
      </section>

      {/* A Network Beyond Time */}
      <section className="relative py-16 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black -z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2ba6f7df7b76a89faed8d0e7e8b908ff104e45bc?width=4902"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="font-kenyan text-6xl lg:text-[180px] leading-none uppercase tracking-tight text-white mb-8">
                <span className="text-white">A Network </span>
                <span className="text-cloudworkz-primary">Beyond Time</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="font-archivo text-lg lg:text-2xl text-white leading-tight">
                Connect with visionary investors and cutting-edge businesses in
                a hub designed for what's next
              </p>

              <div className="flex items-center gap-3">
                <div className="text-cloudworkz-primary font-archivo font-semibold text-sm uppercase leading-tight tracking-tight">
                  Explore
                  <br />
                  Success
                  <br />
                  Stories
                </div>
                <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
                  <ArrowDownRight
                    size={24}
                    className="text-cloudworkz-primary"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2c863cb7c4614cbe3e669cecb2760966ed672725?width=3652"
                alt="Future visualization"
                className="w-full h-auto rounded-3xl"
              />
            </div>

            <div className="order-1 lg:order-2 text-right space-y-8">
              <h2 className="font-kenyan text-4xl lg:text-[60px] leading-tight uppercase">
                <span className="text-cloudworkz-black">Ready to shape </span>
                <span className="text-cloudworkz-primary">the future?</span>
              </h2>

              <p className="font-archivo text-lg lg:text-2xl text-cloudworkz-black leading-tight">
                Join the Cloudworkz revolution and unlock tomorrow's potential
                today.
              </p>

              <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors ml-auto">
                <ArrowDownRight size={24} className="text-cloudworkz-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
            {/* Contact Us */}
            <div className="space-y-8">
              <h3 className="font-kenyan text-2xl lg:text-[40px] leading-none uppercase text-cloudworkz-black">
                Contact Us
              </h3>
              <div className="space-y-4">
                <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black">
                  info@cloudworkz.com
                </p>
                <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black">
                  555 123 4567
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-8">
              <h3 className="font-kenyan text-2xl lg:text-[40px] leading-none uppercase text-cloudworkz-black">
                Follow Us
              </h3>
              <div className="space-y-3">
                <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black hover:text-cloudworkz-primary cursor-pointer transition-colors">
                  LinkedIn
                </p>
                <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black hover:text-cloudworkz-primary cursor-pointer transition-colors">
                  Twitter
                </p>
                <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black hover:text-cloudworkz-primary cursor-pointer transition-colors">
                  Facebook
                </p>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-3 lg:col-start-4">
              <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black hover:text-cloudworkz-primary cursor-pointer transition-colors">
                Privacy Policy
              </p>
              <p className="font-archivo text-sm uppercase tracking-wide text-cloudworkz-black hover:text-cloudworkz-primary cursor-pointer transition-colors">
                Terms of Service
              </p>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="text-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/39276255b223d8ac837cdceaf04ae4f4e60a347d?width=2720"
              alt="CloudWorkz"
              className="h-12 lg:h-16 w-auto mx-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
