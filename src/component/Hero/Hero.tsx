import heroImage from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="w-full md:w-3/5">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg md:px-7 md:py-3.5">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-600 shadow-sm transition duration-300 hover:border-slate-300 hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-3/5 md:justify-end">
          <img
            src={heroImage}
            alt="Development Stack"
            className="w-64 object-contain sm:w-72 md:w-80 lg:w-150"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
