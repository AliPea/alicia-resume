import React from "react";
import { Printer } from "lucide-react";
import Header from "./components/Header";
import Competencies from "./components/Competencies";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Education from "./components/Education";

const App = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition-colors print:hidden"
      >
        <Printer size={20} />
        <span>Print Resume</span>
      </button>

      {/* Added print margins */}
      <div className="max-w-4xl mx-auto p-8 bg-white print:p-8 print:max-w-none">
        <div className="space-y-8 print:space-y-4">
          <Header />
          <Competencies />
          <Experience />
          {/* Added extra spacing before Technologies */}
          <div className="mt-8 print:mt-6">
            <Technologies />
          </div>
          {/* Added extra spacing before Education */}
          <div className="mt-8 print:mt-6">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;