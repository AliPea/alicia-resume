import React from "react";

const Technologies = () => {
  return (
    <section className="print:mb-2">
      <h2 className="text-lg font-bold mb-4 text-gray-800 uppercase tracking-wide print:text-sm print:mb-1">
        Tools & Technologies
      </h2>
      <div className="grid grid-cols-2 gap-6 print:gap-2">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2 print:text-xs print:mb-0.5">
            Learning Platforms
          </h3>
          <p className="text-sm print:text-xs print:leading-tight">
            Experience with LMS systems, Articulate Rise, Camtasia, Google
            Workspace, MS Office Suite
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2 print:text-xs print:mb-0.5">
            Development Tools
          </h3>
          <p className="text-sm print:text-xs print:leading-tight">
            React, Node.js, Git, AWS, Modern Web Technologies, Technical
            Documentation Tools
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
