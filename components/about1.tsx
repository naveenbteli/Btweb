/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const about1 = () => {
  return (
    <>
      <section className="relative bg-gray-600">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg"
          alt="Couple on a bed with a dog"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-gray-900 sm:to-transparent"></div>

        <div className="relative px-4 py-32 mx-auto max-w-screen-2xl lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              About:
              <strong className="font-extrabold text-rose-700 sm:block">
                R V College Of Engineering
              </strong>
            </h1>

            <p className="max-w-full mt-4 sm:leading-relaxed sm:text-xl">
              R.V. College of Engineering (RVCE), established in 1963, is one of
              the oldest self-financing premier institutions in the country. It
              is an Autonomous Institution, Affiliated to Visvesvaraya
              Technological University (VTU), Belagavi. The institution is
              managed by Rashtreeya Sikshana Samithi Trust (RSST), a nonprofit
              Trust. Currently, the institution offers 12 bachelor, 16 master
              programs and all the departments have been recognized as research
              centres, affiliated to VTU, Belagavi. The institution is
              accredited by NAAC. All the UG programs and eligible PG programs
              have been accredited multiple times by NBA. The College currently
              has student strength more than 5500, faculty strength of above
              375, technical & administrative staff of about 225 and around 200
              research scholars are pursuing Ph.D. The institution has filed 43
              patents since last three years, of which 27 patents have been
              published in the gazette of Indian Patent journal.
            </p>

            <div className="flex flex-wrap mt-8 text-center gap-4">
              <a
                className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
                href="www.rvce.edu.in"
                target="blank"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about1;
