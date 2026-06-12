import banner from '../../assets/Slider/carousel1.jpg';
const WebDevSlider = () => {
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
              Expert <span class="text-teal-500">Web Developers</span>  for
              Modern Solutions
            </h1>

            <p className="w-9/12 mx-auto text-gray-300">
              Need a full-stack developer platform or a custom e-commerce site?
              Browse verified tech talents specialized in React, Node.js, and
              cutting-edge frontend architectures to elevate your web presence.
            </p>

            <button class=" px-5 py-2  text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto  focus:outline-none btn bg-teal-700">
              Explore Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevSlider;
