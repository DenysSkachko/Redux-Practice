import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-white min-h-screen w-screen">
      <Sidebar />
      <main className="flex-1 p-15 pl-40">
        {children}
      </main>
    </div>
  );
};

export default Layout;
