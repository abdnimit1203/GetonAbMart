import { Link, NavLink } from "react-router-dom";
import NavHeader from "../Shared/NavHeader";
import { FiSearch } from "react-icons/fi";
import SearchBar from "./SearchBar";

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
            : "hover:bg-primary  px-3 py-2 hover:text-slate-800 transition duration-200 rounded-xl lg:text-lg"
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
            : "hover:bg-primary px-3 py-2 hover:text-slate-800 transition duration-200 rounded-xl lg:text-lg"
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
            : "hover:bg-primary px-3 py-2 hover:text-slate-800 transition duration-200 rounded-xl lg:text-lg flex items-center"
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
          <div className="w-full navbar bg-slate-800 text-white flex-1 justify-between px-[10%]">
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
            <div className="flex-1 lg:flex-none px-2 mx-2 font-bold">
              <Link>
                <img src="/logo.png" alt="logo" className="w-48" />
              </Link>
            </div>
            <div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <FiSearch className="md:hidden text-2xl text-white" />
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box modal-open bg-slate-800">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                      ✕
                    </button>
                  </form>

                  <SearchBar />
                </div>
              </dialog>
            </div>
            <div className="hidden md:block">
              <SearchBar />
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
          <ul className="menu p-4 w-80 min-h-full bg-slate-800 text-white">
            {/* Sidebar content here */}
            {navlinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
