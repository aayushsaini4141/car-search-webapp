import React, {useState} from 'react'

export const Navbar = ({setSearchQuery: setQuery}) => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
  };

  return (
    <nav className="bg-white shadow-md mx-4 border p-4 rounded-lg">
      <div className="container mx-sm">
        <div className="flex justify-between items-center">
          <div className="relative rounded-full border overflow-hidden text-gray-600 w-full max-w-md">
            <form onSubmit={handleSearch} className="shadow-md">
              <input
                type="text"
                className=" h-10 px-5 pr-16 text-sm w-full focus:outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                <svg
                  className="text-gray-600 h-7 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                  </path>
                </svg>
              </button>
            </form>
          </div>
          <ul className="flex space-x-4">
        
          <li
              className="relative group"
              onMouseEnter={() => toggleAboutDropdown()}
              onMouseLeave={() => toggleAboutDropdown()}
            >
              <a
                href="/"
                className="text-grey-600 hover:text-blue-500"
              >
                About
              </a>
              {aboutDropdownOpen && (
                <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white text-gray-700 group-hover:block">
                  <li>
                    <a href="/" className="block text-black px-4 py-2 hover:bg-blue-200">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="/" className="block text-black px-4 py-2 hover:bg-blue-200">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="/" className="block text-black px-4 py-2 hover:bg-blue-200">
                      Option 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/" className="text-grey-600 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="text-grey-600 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





