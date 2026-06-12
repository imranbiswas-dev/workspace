import banner from "../../assets/Slider/carousel3.jpg";
const DigitalMarketing = () => {
  return (
    <div className="lg:h-152 ">
      <div
        className="w-full bg-center bg-cover h-152"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/80">
          <div className="text-center space-y-5">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Explore Top-Tie <span class="text-teal-500">Digital Marketing</span> That Delivers Results
            </h1>

            <p className="w-9/12 mx-auto text-gray-300">
              Whether you need to rank on Google's first page or run viral TikTok campaigns—find elite marketers today, or bid on premium marketing contracts tailored to your expertise.
            </p>

            <button class=" px-5 py-2  text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto  focus:outline-none btn bg-teal-700">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
