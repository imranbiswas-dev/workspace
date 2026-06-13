import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/Logo/work.png";
import { GoChevronDown } from "react-icons/go";
import SearchBar from "../SearchBox/SearchBar";
import { MdLibraryAdd } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { toast } from "react-hot-toast";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, loading } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logout Successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Logout Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-20">
        <span className="loading loading-spinner text-neutral"></span>
        <p className="ml-2 text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  console.log("Current User:", user)

  return (
    <nav className="bg-base-100 lg:max-w-10/12 lg:mx-auto  mx-5 flex flex-col">
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
          {user ? (
            <div className="flex">
              <div className="mr-2 flex gap-3 ">
                <SearchBar />
                <Link
                  to="/add-job"
                  className="btn btn-neutral rounded-2xl hidden sm:flex"
                >
                  <MdLibraryAdd size={19} /> Post a Job
                </Link>
              </div>

              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Profile"
                      src={
                        user?.photoURL ||
                        user?.providerData?.[0]?.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      className="rounded-full"
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
                    <button
                      className="btn btn-neutral hover:btn-error btn-sm text-white"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="btn btn-neutral  btn-ghost text-lg hover:rounded-2xl"
              >
                Login
              </Link>
              <Link
                to="/signUp"
                className="btn btn-neutral  text-lg rounded-2xl p-5"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
