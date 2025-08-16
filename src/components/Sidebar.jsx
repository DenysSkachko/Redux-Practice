import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarLink from './ui/SidebarLink';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="sidebar"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-25 fixed top-0 min-h-screen bg-primary text-primary-alt flex flex-col items-center pl-2.5 pt-7.5 gap-7.5"
          >
            <img
              src="./main.svg"
              alt="Logo"
              width={30}
              height={30}
              className="py-7 cursor-pointer"
              onClick={() => setOpen(false)}
            />

            <SidebarLink
              to="/"
              icon={<img src="./menu.svg" alt="Menu" width={30} height={30} />}
            />
            <SidebarLink
              to="/bookmarks"
              icon={<img src="./book.svg" alt="Bookmarks" width={30} height={30} />}
            />
            <SidebarLink to="/search" icon={<FaSearch size={30} />} />
            <SidebarLink to="/add" icon={<FaPlus size={30} />} />
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <motion.img
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          src="./main.svg"
          alt="Logo"
          width={30}
          height={30}
          className="fixed top-14.5 left-10 cursor-pointer z-50"
          onClick={() => setOpen(true)}
        />
      )}
    </>
  );
};

export default Sidebar;
