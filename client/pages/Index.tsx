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

      {/* Background Image Section */}
      <section className="relative -mt-20 pt-20">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/611f64b69da9b253bec2c300d12a63b02d3f4972?width=4868"
            alt=""
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
            style={{
              minWidth: "120%",
              minHeight: "120%",
              transform: "translate(-10%, -15%)",
            }}
          />
        </div>
      </section>

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

              {/* Company Description */}
              <div className="mt-16 lg:mt-24">
                <p className="font-archivo text-3xl sm:text-4xl lg:text-[55px] leading-[0.95] uppercase font-medium tracking-tight text-justify text-cloudworkz-primary">
                  Cloudworkz
                </p>
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
    </div>
  );
}
