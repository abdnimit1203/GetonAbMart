import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";

const NavHeader = () => {
  return (
    <div className="bg-slate-700 w-full text-white py-2 px-[10%] text-xs md:text-base">
      <div className="flex justify-between">
        <div className="hover:text-primary cursor-pointer">20% discount on products for students!</div>
        <div className="flex gap-4">
          <Link className="hover:text-primary">Order Tracking</Link>
          <Link className="border-r-2 pr-6 hover:text-primary">FAQs</Link>
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="hover:text-primary">
              Language (US) <FaCaretDown className="inline" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2  rounded-box w-52  relative bg-transparent pt-4"
            >
              <div className="absolute arrow -top-0 right-5 ">
                <TiArrowSortedUp className="text-3xl text-gray-700 " />
              </div>
              <div className="bg-gray-700 py-3 rounded-md ">

              <li>
                <a className="hover:text-primary">English (US)</a>
              </li>
              <li>
                <a className="hover:text-primary">Bengali (বাংলা)</a>
              </li>
              <li>
                <a className="hover:text-primary">Chinese (中国)</a>
              </li>
              <li>
                <a className="hover:text-primary">Malay (ملايو)</a>
              </li>
              </div>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
