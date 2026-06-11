import { Link, NavLink } from "react-router";
import logo from "../../assets/Logo/work.png";
import { GoChevronDown } from "react-icons/go";
import SearchBar from "../SearchBox/SearchBar";
import { MdLibraryAdd } from "react-icons/md";
const Navbar = () => {
  return (
      <nav className="bg-base-100 lg:max-w-10/12 lg:mx-auto  mx-5 flex flex-col mb-3">
        <div className="navbar  ">
          <div className="navbar-start">
            <Link to="/" className="flex items-center">
              <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="" />
              <h2 className="text-2xl md:text-3xl font-bold -ml-0.5 ">
                orkspace
              </h2>
            </Link>

            <div className="ml-8 lg:flex gap-8 font-semibold text-lg hidden">
              <NavLink to="dashboard">Dashboard</NavLink>
              <div className="dropdown">
                <div
                  className="flex items-center gap-1 hover:cursor-pointer"
                  tabIndex={0}
                >
                  My Business
                  <GoChevronDown size={20} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <NavLink to="/my-posted-job">My Posted Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-bids">My Bids</NavLink>
                  </li>
                  <li>
                    <NavLink to="/bid-request">Bid Requests</NavLink>
                  </li>
                </ul>
              </div>
              <NavLink to="/find-your-job">Find Your Job</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </div>
          </div>

          <div className="navbar-end">
            <div className="mr-2 md:flex gap-3 hidden">
              <SearchBar />
              <button className="btn btn-neutral rounded-2xl">
                <MdLibraryAdd size={19} /> Add Job
              </button>
            </div>

            <div className=" mr-2 flex sm:hidden">
              <MdLibraryAdd size={29} />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="mx-5 md:hidden ">
        <SearchBar />
      </div>
      </nav>
  );
};

export default Navbar;
