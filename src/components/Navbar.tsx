export default function Navbar() {
  return (
    <div className="flex  gap-2 items-center border-4 border-gray-950">
      <div className="navbar h-20 bg-base-100  rounded-lg flex-1">
        <div className="navbar-start">
          <a href="/">
            <a className="text-2xl font-bold text-gray-900 hover:text-gray-800 hidden md:inline">
              <span className="sr-only">Home</span>
              HUMMY
            </a>
          </a>
          {/* dropdown */}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <a className="btn btn-ghost text-lg md:hidden">Hummy</a>
          <ul className="justify-between gap-5 hidden md:flex">
            <li>Home</li>
            <li>Sell</li>
            <li>Maps</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-8 w-5 md:w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle inline-flex md:hidden">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <button className="btn h-20 w-1/6 bg-[#FC7B53] hover:bg-gray-400 hidden md:inline-flex">
        <span className="text-lg text-[#0A0909]">Shop Now</span>
      </button>
    </div>
  );
}
