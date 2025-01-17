import React from "react";

const about1 = () => {
  return (
    <>
      <div className=" bg-[#0D1117] p-8 md:p-12 lg:px-16 lg:py-24 ">
        <h1 className="text-6xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
          About
        </h1>
        <div className="flex flex-col-reverse items-center gap-16 sm:flex-row-reverse ">
          <div>
            <a
              className="block p-8 pb-0 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-sm"
              href=""
            >
              {/* <div className="grid place-items-start mr-10">
              <a
                href="https://www.bioinnovationcentre.com/
                   "
              >
                <img
                  src="https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png"
                  alt="BIC Logo "
                  height={65}
                  width={175}
                />
              </a>
            </div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 className="mt-3 text-xl font-bold text-white">
                Banglore Innovation Center
              </h3>

              <p className="mt-2 mb-0 text-lg text-gray-300">
                Bangalore Bioinnovation Centre (BBC) is a joint initiative of
                Department of Biotechnology, Government of India and Department
                of Electronics, IT, BT and S&T, Government of Karnataka. It
                works closely with Karnataka Innovation & Technology Society
                (KITS), a nodal centre for implementing schemes of the
                Department of Electronics, IT, BT and S&T, Government of
                Karnataka & its startup cell. It is a State-of-the-art
                translational research and entrepreneurship centre catering to
                all the needs of start-ups in life science.
              </p>
            </a>
          </div>

          <div>
            <a
              className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-sm"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 className="mt-3 text-xl font-bold text-white">
                The conference
              </h3>

              <p className="mt-4 text-lg text-gray-300 	">
                The International Conference on “Applications of Artificial
                Intelligence and Machine Learning in Biotechnology” primarily
                focuses on identifying multiple ways to integrate the two
                distinct domains, thereby changing the global outlook on
                biotechnology. This conference emphasizes bringing experts to
                discuss the emerging trends and recent challenges in the field.
                It also focuses on contributing to the multiple domains of
                biotechnology and equips the research community for the future.
              </p>
            </a>
          </div>

          <div>
            <a
              className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-sm"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 className="mt-3 text-xl font-bold text-white">
                R V College of engineering
              </h3>

              <p className="mt-4 text-sm text-gray-300 	">
                R.V. College of Engineering (RVCE), established in 1963, is one
                of the oldest self-financing premier institutions in the
                country. It is an Autonomous Institution, Affiliated to
                Visvesvaraya Technological University (VTU), Belagavi. The
                institution is managed by Rashtreeya Sikshana Samithi Trust
                (RSST), a nonprofit Trust. Currently, the institution offers 12
                bachelor, 16 master programs and all the departments have been
                recognized as research centres, affiliated to VTU, Belagavi. The
                institution is accredited by NAAC. All the UG programs and
                eligible PG programs have been accredited multiple times by NBA.
                The College currently has student strength more than 5500,
                faculty strength of above 375, technical & administrative staff
                of about 225 and around 200 research scholars are pursuing Ph.D.
                The institution has filed 43 patents since last three years, of
                which 27 patents have been published in the gazette of Indian
                Patent journal.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default about1;
