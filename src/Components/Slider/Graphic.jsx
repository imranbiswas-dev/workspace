import banner from "../../assets/Slider/carousel2.jpg";
const Graphic = () => {
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
              Hire Expert <span class="text-teal-500">Graphic Designers</span>{" "}
              for Your Brand
            </h1>

            <p className="w-9/12 mx-auto text-gray-300">
              Bring your identity to life. Find top talent for custom logos,
              modern UI/UX wireframes, and eye-catching marketing materials that
              set your business apart from the competition.
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

export default Graphic;
