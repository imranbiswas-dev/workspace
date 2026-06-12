
const Freelance = () => {
  return (
    <div className="lg:h-152 ">
      <div
        className="w-full bg-center bg-cover h-152"
        style={{
          backgroundImage: `url(${"https://www.adp.com/-/media/adp/resourcehub/rh2/images/insight/thumb/freelance-management-thumb.jpg?rev=7f6cf8dd07f748beb3afbc3194601eb9&hash=CB94098D1CC41DF86F81B2B35F85973D"})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/80">
          <div className="text-center space-y-5">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              <span className="text-teal-500">Hire Experts or Get Hired</span>{" "}
              for Your Dream Projects
            </h1>

            <p className="w-9/12 mx-auto text-gray-300">
              Your ultimate micro-job marketplace. Whether you are looking to
              build a website, launch a marketing campaign, or design a stunning
              logo—we bridge the gap between clients and creators.
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

export default Freelance;
