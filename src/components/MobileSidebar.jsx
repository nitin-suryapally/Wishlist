const MobileSidebar = ({isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className="md:hidden z-20 top-0 left-0 right-0 h-[60px] flex [&>*]:my-auto px-2">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Watchlists</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-red-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default MobileSidebar;
