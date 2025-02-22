import React from "react";

const SchoolInfo = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
      <div className="max-w-5xl w-full bg-white p-8 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">A. General Information:</h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {[
              ["Name of the School", "SUKANTI INTERNATIONAL SCHOOL"],
              ["Affiliation No", "1530302"],
              ["School Code", "16003"],
              ["Address", "Dhubamunda, S.Kalapathar, Sonepur, Odisha, PIN-767017"],
              ["Principal Name & Qualification", "Santos Kumar Bash, M.A., B.Ed., LLB"],
              ["School Email", <a href="mailto:sissonepur2015@gmail.com" className="text-blue-500 underline">sissonepur2015@gmail.com</a>],
              ["Contact", "+91 94375 64825 , +91 76840 43075"]
            ].map(([label, value], index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3 font-semibold">{label}</td>
                <td className="border border-gray-300 p-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">B. Documents and Information:</h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {[
              "Copies of Affiliation/Upgradation Letter",
              "Company Registration Certificate",
              "Copy of NOC",
              "Copy of Recognition",
              "Valid Building Safety Certificate",
              "Valid Fire Safety Certificate",
              "DEO Certificate",
              "Water & Sanitation Certificates",
              "YouTube Video of School Infrastructure"
            ].map((doc, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{doc}</td>
                <td className="border border-gray-300 p-3 text-center text-red-500 text-xl">{index === 8 ? "▶️" : "📄"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">C. Result and Academic:</h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {["Fee Structure of the School", "Annual Academic Calendar", "List of School Management Committee", "List of Parent Teacher Association Members", "Last Three Years Result of Board Examination"].map((doc, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{doc}</td>
                <td className="border border-gray-300 p-3 text-center text-red-500 text-xl">{index === 4 ? "Not Applicable" : "📄"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">D. Staff:</h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {["Principal", "Total No of Teachers (21 - PGT: 5, TGT: 7, PRT: 9)", "Teachers Section Ratio (2.6:1)", "Details of Special Educator: P Narasimha Murty", "Details of Counsellor and Wellness Trainer: Saptaprayag Khamari"].map((info, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{info}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">E. School Infrastructure:</h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {["No. and Size of Classrooms: 29 Rooms of 50 SqM each", "No. and Size of Laboratories: Phy Lab: 74 Sqm, Chem Lab: 74 Sqm, Bio Lab: 74 Sqm, Computer Lab: 74 Sqm", "Internet Facility: Yes (100 MBPS)", "No. of Girls Toilets: 36", "No. of Boys Toilets: 50", "YouTube Video of School Infrastructure"].map((info, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{info}</td>
                <td className="border border-gray-300 p-3 text-center text-red-500 text-xl">{index === 5 ? "▶️" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolInfo;
