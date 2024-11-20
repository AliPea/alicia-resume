import React from "react";

const Header = () => {
  return (
    <header className="mb-12 print:mb-2">
      <div className="flex justify-between items-start mb-6 print:mb-1">
        <div>
          <h1 className="text-6xl font-bold mb-2 print:text-3xl print:mb-0">
            Alicia Pearse
          </h1>
          <h2 className="text-xl text-gray-600 print:text-xs">
            Software Developer & Coding Instructor
          </h2>
        </div>
        <div className="bg-blue-50 p-6 rounded print:bg-transparent print:p-0">
          <div className="text-right print:text-xs print:leading-none">
            <a href="mailto:hello@aliciapearse.com" className="block hover:text-gray-800">
              hello@aliciapearse.com
            </a>
            <p>415-342-7279</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 text-sm print:hidden">
        <a href="https://aliciapearse.com" className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
          Portfolio ↗
        </a>
        <a href="https://github.com/AliPea" className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
          GitHub ↗
        </a>
        <a href="https://linkedin.com/in/aliciapearse" className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
          LinkedIn ↗
        </a>
      </div>

      <div className="hidden print:block print:text-xs print:text-gray-600 print:mt-0">
        <p className="print:leading-none">
          aliciapearse.com • github.com/AliPea • linkedin.com/in/aliciapearse
        </p>
      </div>
    </header>
  );
};

export default Header;