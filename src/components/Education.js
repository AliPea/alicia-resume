import React from "react";

const Education = () => {
  return (
    <section>
      <h2 className="text-lg font-bold mb-4 text-gray-800 uppercase tracking-wide print:text-sm print:mb-1">
        Education
      </h2>
      <div className="grid grid-cols-2 gap-6 print:gap-2">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2 print:text-xs print:mb-0.5">U.C. Berkeley</h3>
          <p className="text-sm print:text-xs print:leading-tight">
            B.A. Political Economy, 2014
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2 print:text-xs print:mb-0.5">General Assembly</h3>
          <p className="text-sm print:text-xs print:leading-tight">
            Software Engineering Immersive, 2016
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;