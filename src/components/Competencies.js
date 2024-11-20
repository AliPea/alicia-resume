import React from "react";

const Competencies = () => {
  return (
    <section className="print:mb-2">

      <h2 className="text-lg font-bold mb-4 text-gray-800 uppercase tracking-wide print:text-sm print:mb-1">
        Key Competencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-2">
        <div className="space-y-2 print:space-y-0">
          <h4 className="font-semibold text-gray-700 bg-gray-50 p-2 rounded print:bg-transparent print:p-0 print:mb-0.5 print:text-sm">
            Technical Expertise
          </h4>
          <ul className="list-disc pl-4 space-y-1 text-sm print:text-xs print:space-y-0 print:pl-3">
            <li>Full Stack Development</li>
            <li>Modern Web Technologies</li>
            <li>Software Architecture</li>
            <li>Technical Documentation</li>
            <li>Code Review & Mentoring</li>
            <li>JS Frameworks & Performance & Debugging</li>
          </ul>
        </div>

        <div className="space-y-2 print:space-y-0">
          <h4 className="font-semibold text-gray-700 bg-gray-50 p-2 rounded print:bg-transparent print:p-0 print:mb-0.5 print:text-sm">
            Curriculum Development
          </h4>
          <ul className="list-disc pl-4 space-y-1 text-sm print:text-xs print:space-y-0 print:pl-3">
            <li>Instructional Design & Planning</li>
            <li>Technical Content Development</li>
            <li>Interactive Workshop Creation</li>
            <li>Student Progress Assessment</li>
            <li>Continuous Program Improvement</li>
          </ul>
        </div>

        <div className="space-y-2 print:space-y-0">
          <h4 className="font-semibold text-gray-700 bg-gray-50 p-2 rounded print:bg-transparent print:p-0 print:mb-0.5">
            Program Management
          </h4>
          <ul className="list-disc pl-4 space-y-1 text-sm print:text-xs print:space-y-0 print:pl-3">
            <li>Strategic Program Planning</li>
            <li>Stakeholder Collaboration</li>
            <li>Learning Analytics & KPIs</li>
            <li>Cross-functional Leadership</li>
            <li>Vendor & Resource Management</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Competencies;