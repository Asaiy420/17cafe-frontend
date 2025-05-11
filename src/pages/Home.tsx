import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Modern Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/api/placeholder/1500/800"
          alt="Aesthetic Coffee Shop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* Hero Section */}
        <main className="flex-1 flex flex-col md:flex-row items-center px-8 md:px-16 py-12 w-full">
          {/* Left: Headline & Description */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block px-4 py-1 bg-amber-400/10 text-amber-400 text-xs tracking-widest uppercase font-medium rounded-full mb-6">
              Specialty Coffee & Artisanal Pastries
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Experience the{" "}
              <span className="text-amber-400">Perfect Blend</span>
            </h1>
            <p className="text-lg text-neutral-300 mb-8 max-w-lg leading-relaxed">
              Where every cup tells a story and every visit creates a memory.
              Premium coffee, artisanal pastries, and a warm atmosphere to make
              your day special.
            </p>
            <div className="flex gap-4 mb-8">
              <Link
                to="/menu"
                className="bg-amber-400 hover:bg-amber-300 text-black font-medium px-8 py-3 rounded-md text-sm transition-all"
              >
                VIEW MENU
              </Link>
              <Link
                to="/locations"
                className="bg-transparent border border-neutral-600 hover:border-white text-white font-medium px-8 py-3 rounded-md text-sm transition-all"
              >
                FIND US
              </Link>
            </div>
          </div>

          {/* Right: Info Card */}
          <div className="flex-1 flex justify-end mt-10 md:mt-0">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 w-full max-w-md">
              <div className="flex items-center justify-center mb-8">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45 20H15C12.2386 20 10 22.2386 10 25V40C10 47.1797 15.8203 53 23 53H37C44.1797 53 50 47.1797 50 40V25C50 22.2386 47.7614 20 45 20Z"
                    fill="#292524"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 20V16C18 13.7909 19.7909 12 22 12H38C40.2091 12 42 13.7909 42 16V20"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M30 32V40"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 36H36"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-xs text-neutral-400 mb-1">HOURS</p>
                  <p className="text-white font-medium">7AM - 8PM</p>
                  <p className="text-amber-400 text-xs mt-1">Mon-Sat</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-xs text-neutral-400 mb-1">LOCATION</p>
                  <p className="text-white font-medium">123 Coffee St</p>
                  <p className="text-amber-400 text-xs mt-1">Downtown</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-neutral-300 text-sm">Open Now</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="w-full py-6 px-8 md:px-16 border-t border-neutral-800 bg-black">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; 2025 17 Beans Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-amber-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-amber-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-amber-400">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
