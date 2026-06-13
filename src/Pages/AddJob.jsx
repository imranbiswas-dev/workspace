import { useContext, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "./../Components/Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const Guidelines = [
    {
      title: "Complete the Form Carefully",
      desc: "Fill out all the required fields, including a descriptive title, accurate budget range, and a valid deadline to attract the best candidates for your project.",
    },
    {
      title: "Track via 'My Posted Jobs'",
      desc: `Once successfully published, you can manage, update, or remove your active job listings anytime directly from the My Posted Jobs page.`,
    },
    {
      title: "Manage Offers in 'Bid Requests'",
      desc: "When freelancers place bids on your project, all proposals will instantly appear on your Bid Requests page, where you can accept or reject them.",
    },
  ];

  // === submit to database ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("deadline", startDate.toISOString());
    const newData = Object.fromEntries(formData.entries());

    const jobData = {
      ...newData,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    // === Throw data to database ===
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, jobData);
      toast.success("Post job post successfully");

      // form reset
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Post Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12 gap-5">
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center gap-30">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Easiest way to post your Job
              </h1>

              <div className="mt-8 space-y-5">
                {Guidelines.map((text, index) => (
                  <div key={index} className="flex gap-3 ">
                    <IoMdCheckmarkCircleOutline size={44} color="green" />
                    <span className="space-y-1">
                      <h2 className="text-2xl font-semibold">{text.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {text.desc.includes("My Posted Jobs") ? (
                          <>
                            {text.desc.split("My Posted Jobs")[0]}
                            <Link
                              to="/my-posted-jobs"
                              className="text-green-600 dark:text-green-400 font-semibold underline hover:text-green-700 transition-colors"
                            >
                              My Posted Jobs
                            </Link>
                            {text.desc.split("My Posted Jobs")[1]}
                          </>
                        ) : text.desc.includes("Bid Requests") ? (
                          <>
                            {text.desc.split("Bid Requests")[0]}
                            <Link
                              to="/bid-requests"
                              className="text-green-600 dark:text-green-400 font-semibold underline hover:text-green-700 transition-colors"
                            >
                              Bid Requests
                            </Link>
                            {text.desc.split("Bid Requests")[1]}
                          </>
                        ) : (
                          text.desc
                        )}
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to home button */}
          </div>

          {/* Right Form */}
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
              <h2 className="text-lg font-semibold text-gray-700 capitalize ">
                Post a Job
              </h2>

              {/* Submit Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 " htmlFor="job_title">
                      Job Title
                    </label>
                    <input
                      id="job_title"
                      name="job_title"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 " htmlFor="emailAddress">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      disabled
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700">Deadline</label>

                    {/* Date Picker Input Field */}
                    <DatePicker
                      className="border p-2 rounded-md border-gray-200   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700 " htmlFor="category">
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="border p-2 rounded-md"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Graphics Design">Graphic Design</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 " htmlFor="min_price">
                      Minimum Price
                    </label>
                    <input
                      id="min_price"
                      name="min_price"
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                      Maximum Price
                    </label>
                    <input
                      id="max_price"
                      name="max_price"
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-gray-700 " htmlFor="description">
                    Job Image
                  </label>
                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    name="job_image"
                    id="image"
                  ></input>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-gray-700 " htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    name="description"
                    id="description"
                  ></textarea>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Post
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddJob;
