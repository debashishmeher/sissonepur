import coa from "../doc/Upgradation to Senior Secondary Letter.pdf"
import trust from "../doc/trust.pdf"
import noc from "../doc/noc.pdf"
import recognition from "../doc/Recognition.pdf"
import deocert from "../doc/DEO.pdf"
import water from "../doc/Water.pdf"
import safety from "../doc/safety.pdf"
import fire from "../doc/fire.pdf"
import fee from "../doc/fee.pdf"
import smc from "../doc/smc.pdf"
import pta from "../doc/pta.pdf"
import result from "../doc/result.pdf"
import calender from "../doc/calender.pdf"
import mandatory from "../doc/mandatory.pdf"

const SchoolInfo = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
      <div className="max-w-5xl w-full bg-white p-8 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          A. General Information:
        </h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {[
              ["Name of the School", "SUKANTI INTERNATIONAL SCHOOL"],
              ["Affiliation No", "1530302"],
              ["School Code", "16003"],
              [
                "Address",
                "Dhubamunda, S.Kalapathar, Sonepur, Odisha, PIN-767017",
              ],
              [
                "Principal Name & Qualification",
                "Santosh Kumar Bash, M.A., B.Ed., LLB",
              ],
              [
                "School Email",
                <a
                  href="mailto:sissonepur2015@gmail.com"
                  className="text-blue-500 underline"
                >
                  sissonepur2015@gmail.com
                </a>,
              ],
              ["Contact", "+91 94375 64825 , +91 76840 43075"],
            ].map(([label, value], index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3 font-semibold">
                  {label}
                </td>
                <td className="border border-gray-300 p-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">
          B. Documents and Information:
        </h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {[
              { name: "Copies of Affiliation/Upgradation Letter", file: coa},
              {
                name: "Copy of Societies/Trust/Company Registration Certificate",
                file: trust,
              },
              { name: "Copy of NOC", file:noc },
              { name: "Copy of Recognition", file: recognition },
              { name: "Valid Building Safety Certificate", file: safety },
              { name: "Valid Fire Safety Certificate", file: fire },
              { name: "DEO Certificate", file: deocert },
              { name: "Water, Health & Sanitation Certificates", file: water },
              {
                name: "Link of YouTube video of the Inspection of school",
                file: "https://youtu.be/pYIKPrKoGgE?si=z2WKrl_VK015SWLr",
              },
            ].map((doc, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{doc.name}</td>
                <td className="border border-gray-300 p-3 text-center text-red-500 text-xl">
                  <a href={doc.file} target="_blank" rel="noopener noreferrer" >
                    {doc.file ? "📄" : "No File"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">
          C. Result and Academic:
        </h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>

            {[
              { name: "Fee Structure of the School", file: fee },
              {
                name: "Annual Academic Calendar",
                file: calender,
              },
              { name: "List of School Management Committee", file:smc },
              { name: "List of Parent Teacher Association Members", file: pta },
              { name: "Last Three Years Result of Board Examination", file: result},
              
            ].map((doc, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{doc.name}</td>
                <td className="border border-gray-300 p-3 text-center text-red-500 text-xl">
                  <a href={doc.file} target="_blank" rel="noopener noreferrer" >
                    {doc.file ? "📄" : "No File"}
                  </a>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">
          D. Staff:
        </h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {[
              "Principal :-  Mr.Santosh Kumar Bash",
              "Total No of Teachers :- 48  (PGT: 18, TGT: 20, PRT: 5)",
              "Teachers Section Ratio :- 1.5:1",
              "Details of Special Educator :- Saroj Kumar Pardia",
              "Details of Counsellor and Wellness Trainer :- Pratyush Ranjan Sahu",
            ].map((info, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{info}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800">
          E. School Infrastructure:
        </h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <tbody>
            {[
              "Total Campus area of The School :- 9530.34 SqM",
              "No. and Size of Classrooms :- 32 Rooms of 49 SqM each",
              "No. and Size of Laboratories :- Phy Lab: 55 Sqm, Chem Lab: 55 Sqm, Bio Lab: 83 Sqm, Computer Lab: 64 Sqm, Composite Science Lab: 83 Sqm, Math Lab: 55 Sqm",
              "Internet Facility :- Yes (100 MBPS)",
              "No. of Girls Toilets :- 18",
              "No. of Boys Toilets :- 36",
              "Link of You Tube Video of the school Inspection covering the school infrastructure",
            ].map((info, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border border-gray-300 p-3">{info}</td>
                <td className="border border-gray-300 p-3 text-center text-red-500 text-xl">
                  <a href="https://youtu.be/pYIKPrKoGgE?si=z2WKrl_VK015SWLr" target="_blank" rel="noopener noreferrer" >
                    {index === 6 ? "▶️" : ""}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800 flex flex-wrap gap-1">
          F. Mandatory Public Disclosure: <a href={mandatory} target="_blank" rel="noopener noreferrer">📄</a>
        </h2>
        
      </div>
      
    </div>
  );
};

export default SchoolInfo;
