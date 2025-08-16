import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ to, icon }) => {
  const activeClass = 'bg-light';
  const defaultClass = 'hover:bg-light';

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? activeClass : defaultClass} 
        w-full rounded-l-[30px] flex justify-center py-7`
      }
    >
      {icon}
    </NavLink>
  );
};

export default SidebarLink;
