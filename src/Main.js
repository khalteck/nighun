const main = () => {
  return (
    <div className="w-full min-h-screen bg-blue-50">
      <section className="top--section h-[500px] md:h-[600px] relative">
        <div className="overlay px-3 py-10 lg:p-[80px] block md:flex items-start justify-between">
          <div className="mb-8 md:mb-0">
            <img
              alt=""
              src="/images/logo.jpeg"
              className="w-[100px] md:w-[200px] h-[70px] md:h-[150px] rounded-lg"
            />
          </div>
          <div className="hero--text hidden md:block md:text-[60px] p-6 bg-black/40">
            WEBSITE
            <br /> UNDER
            <br /> CONSTRUCTION
          </div>
          <div className="hero--text block md:hidden text-[1.5rem] p-6 bg-black/40 rounded-lg">
            WEBSITE
            <br /> UNDER CONSTRUCTION
          </div>
        </div>
        <div className="w-[90%] md:w-2/5 md:h-[400px] bg-blue-50 shadow-xl rounded-lg p-5 absolute bottom-[-50px] md:bottom-[-150px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-20">
          <div className="w-full flex gap-[100px] justify-center">
            <div className="w-[60px]">
              <img
                alt=""
                src="/images/icons8-hungary-48.png"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-[60px]">
              <img
                alt=""
                src="/images/icons8-nigeria-flag-48.png"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="w-full flex">
            <img alt="" src="/images/budapest.png" className="w-1/2 h-auto " />
            <img alt="" src="/images/lagos.png" className="w-1/2 h-auto " />
          </div>
        </div>
      </section>

      <div className="w-full flex">
        <div className="w-full flex mt-[80px] justify-end px-10">
          {/* <h1 className="text-[4rem] font-bold text-slate-700">
            Under Construction
          </h1> */}
          <img
            alt=""
            src="/images/taxi-construction.png"
            className="w-[220px] md:w-[300px] h-auto mx-auto md:mx-0 swing"
          />
        </div>
      </div>
    </div>
  );
};

export default main;
