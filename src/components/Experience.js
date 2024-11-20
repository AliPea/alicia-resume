import React from "react";

const Experience = () => {
  return (
    <section className="print:mb-2">
      <h2 className="text-lg font-bold mb-4 text-gray-800 uppercase tracking-wide print:text-sm print:mb-1">
        Professional Experience
      </h2>

      <div className="space-y-8 print:space-y-2">
        {/* Nucamp */}
        <div className="bg-gray-50 p-6 rounded print:bg-transparent print:p-0">
          <div className="flex justify-between items-start mb-4 print:mb-0.5">
            <div>
              <h3 className="font-bold text-lg print:text-sm">Technical Curriculum Developer & Instructor</h3>
              <p className="text-gray-600 print:text-xs">Nucamp</p>
            </div>
            <span className="text-sm text-gray-500 print:text-xs">December 2020 - Present</span>
          </div>
          <ul className="space-y-3 print:space-y-0.5 print:text-xs print:leading-tight">
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Curriculum Development:</span> Designed and implemented comprehensive technical curriculum reaching 1000+ learners, covering full-stack development technologies with 90% satisfaction rate</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Program Management:</span> Led end-to-end learning program development including needs assessment, content creation, delivery, and effectiveness evaluation</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Content Creation:</span> Developed multi-modal learning materials including workshop guides, practical exercises, and self-paced modules</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Learning Analytics:</span> Implemented measurement frameworks achieving 85% course completion rate and 4.8/5 satisfaction score</span>
            </li>
          </ul>
        </div>

        {/* Honeydue */}
        <div className="bg-gray-50 p-6 rounded print:bg-transparent print:p-0">
          <div className="flex justify-between items-start mb-4 print:mb-0.5">
            <div>
              <h3 className="font-bold text-lg print:text-sm">Front End Engineer - Contractor</h3>
              <p className="text-gray-600 print:text-xs">Honeydue App</p>
            </div>
            <span className="text-sm text-gray-500 print:text-xs">06/2019 - 08/2019</span>
          </div>
          <ul className="space-y-3 print:space-y-0.5 print:text-xs print:leading-tight">
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Market Growth:</span> Redesigned and localized marketing pages for European and North American markets, serving 6,000+ daily visitors</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Feature Development:</span> Implemented virtual debit card feature with 600+ active users within first month</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Performance:</span> Drove 30% increase in daily traffic through SEO optimization and enhanced user experience</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Automation:</span> Built admin tools and chatbot system, increasing conversions by 15%</span>
            </li>
          </ul>
        </div>

        {/* MV Code Club */}
        <div className="bg-gray-50 p-6 rounded print:bg-transparent print:p-0">
          <div className="flex justify-between items-start mb-4 print:mb-0.5">
            <div>
              <h3 className="font-bold text-lg print:text-sm">Coding Instructor</h3>
              <p className="text-gray-600 print:text-xs">MV Code Club</p>
            </div>
            <span className="text-sm text-gray-500 print:text-xs">02/2018 - 02/2019</span>
          </div>
          <ul className="space-y-3 print:space-y-0.5 print:text-xs print:leading-tight">
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Educational Impact:</span> Taught fundamentals of programming to 300+ teens and children across six Bay Area schools</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Curriculum Development:</span> Designed creative curricula to improve understanding of core Computer Science concepts</span>
            </li>
          </ul>
        </div>

        {/* SF Chronicle */}
        <div className="bg-gray-50 p-6 rounded print:bg-transparent print:p-0">
          <div className="flex justify-between items-start mb-4 print:mb-0.5">
            <div>
              <h3 className="font-bold text-lg print:text-sm">Front End Engineer - Contractor</h3>
              <p className="text-gray-600 print:text-xs">San Francisco Chronicle</p>
            </div>
            <span className="text-sm text-gray-500 print:text-xs">10/2017 - 01/2018</span>
          </div>
          <ul className="space-y-3 print:space-y-0.5 print:text-xs print:leading-tight">
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Dashboard Development:</span> Built and maintained 100+ responsive marketing dashboards with real-time data visualization</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Integration:</span> Successfully integrated 15+ API services for comprehensive campaign tracking</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Infrastructure:</span> Developed Node.js server infrastructure for live marketing demonstrations</span>
            </li>
          </ul>
        </div>

        {/* British Software Development */}
        <div className="bg-gray-50 p-6 rounded print:bg-transparent print:p-0">
          <div className="flex justify-between items-start mb-4 print:mb-0.5">
            <div>
              <h3 className="font-bold text-lg print:text-sm">Junior Front End Engineer</h3>
              <p className="text-gray-600 print:text-xs">British Software Development</p>
            </div>
            <span className="text-sm text-gray-500 print:text-xs">01/2017 - 05/2017</span>
          </div>
          <ul className="space-y-3 print:space-y-0.5 print:text-xs print:leading-tight">
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Application Development:</span> Created 30+ custom web and mobile applications using modern JavaScript frameworks</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Legacy Systems:</span> Enhanced and maintained legacy projects to improve execution time and documentation</span>
            </li>
            <li className="flex gap-1">
              <span className="text-blue-500 print:text-black">▹</span>
              <span><span className="font-semibold">Client Relations:</span> Participated in technical specification meetings and project planning</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;