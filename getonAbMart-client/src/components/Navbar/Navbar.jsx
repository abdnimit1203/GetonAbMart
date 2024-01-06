import { Link, NavLink } from "react-router-dom";
import NavHeader from "../Shared/NavHeader";

const Navbar = () => {
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary px-3 py-2 lg:text-lg rounded-xl font-bold"
            : "hover:bg-primary px-3 py-2 hover:text-base-100 transition duration-200 rounded-xl lg:text-lg"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary px-3 py-2 lg:text-lg rounded-xl font-bold"
            : "hover:bg-primary px-3 py-2 hover:text-base-100 transition duration-200 rounded-xl lg:text-lg"
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary px-3 py-2 lg:text-lg rounded-xl font-bold"
            : "hover:bg-primary px-3 py-2 hover:text-base-100 transition duration-200 rounded-xl lg:text-lg flex items-center"
        }
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div>
      <div>
        <NavHeader />
      </div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar bg-slate-800 text-white flex-1 justify-between ">
            <div className="w-fit lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 md:flex-none px-2 mx-2 font-bold">
              <Link>
                <img src="/logo.png" alt="logo" className="w-48" />
              </Link>
            </div>
            <div>
              <div className="join text-slate-800">
              <select className="select select-bordered join-item">
                  <option disabled selected>
                    All category
                  </option>
                  <option>Electronics</option>
                  <option>Mobile</option>
                  <option>Laptops</option>
                </select>
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search"
                    />
                  </div>
                </div>
                
                <div className="indicator">
                 
                  <button className="btn join-item btn-primary">Search</button>
                </div>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navlinks}
              </ul>
            </div>
          </div>
          
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-800">
            {/* Sidebar content here */}
            {navlinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
