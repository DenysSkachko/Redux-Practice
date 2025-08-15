import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const activeClass = 'bg-light ';
  const defaultClass = 'hover:bg-light';

  return (
    <div className="w-25 fixed top-0 min-h-screen bg-primary text-primary-alt flex flex-col items-center pl-2.5 pt-7.5 gap-7.5">
      <img src="./main.svg" alt="" width={30} height={30} className="py-7" />

      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? activeClass : defaultClass
          } w-full rounded-l-[30px] flex justify-center py-7`
        }
      >
        <img src="./menu.svg" alt="" width={30} height={30} />
      </NavLink>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          `${
            isActive ? activeClass : defaultClass
          } w-full rounded-l-[30px] flex justify-center py-7`
        }
      >
        <img src="./book.svg" alt="" width={30} height={30} />
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          `${
            isActive ? activeClass : defaultClass
          } w-full rounded-l-[30px] flex justify-center py-7`
        }
      >
        <FaSearch size={30} className="" />
      </NavLink>

      <NavLink
        to="/add"
        className={({ isActive }) =>
          `${
            isActive ? activeClass : defaultClass
          } w-full rounded-l-[30px] flex justify-center py-7`
        }
      >
        <FaPlus size={30} className="" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
