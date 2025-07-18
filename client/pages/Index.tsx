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

      {/* Hero Title */}
      <h1 className="font-kenyan text-[120px] leading-[120px] uppercase flex flex-col justify-start items-start pt-[150px] pl-10">
        <span className="text-cloudworkz-black">Your Portal to </span>
        <span className="text-cloudworkz-primary">Practical Growth</span>
      </h1>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-[828px] px-8 lg:px-12">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    </div>
  );
}
