import Header from "../components/Header";

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
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex justify-between items-start pt-[150px] px-10">
        {/* Hero Title - Left Side */}
        <h1 className="font-kenyan text-[120px] leading-[120px] uppercase flex flex-col justify-start items-start">
          <div className='flex flex-row'>
            <span className="text-cloudworkz-black">Your Portal to </span>
            <span className="text-cloudworkz-primary">Practical</span>
          </div>
        </h1>

        {/* CTA Section - Right Side */}
        <div className="flex flex-col justify-end items-start gap-[14px] w-[322px] mt-auto">
          {/* Description Text */}
          <p className="text-cloudworkz-black font-archivo text-2xl leading-[100%] w-full">
            Step into a workspace where structure accelerates momentum.
          </p>

          {/* CTA Block */}
          <div className="flex items-center gap-3">
            {/* CTA Text */}
            <div className="text-cloudworkz-primary font-archivo text-base font-semibold leading-[110%] uppercase">
              Start
              <br />
              Scaling
              <br />
              Today
            </div>

            {/* CTA Button */}
            <button className="w-20 h-20 rounded-full border border-cloudworkz-primary flex items-center justify-center hover:bg-cloudworkz-primary/10 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-[828px] px-8 lg:px-12">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}
