import { Button, Image } from "@mantine/core";
import type { NextPage } from "next";

const dates: Array<{
  date: string;
  title: string;
}> = [
  // {
  //   date: "23rd of May 2022",
  //   title: "Call for abstracts",
  // },
  // {
  //   date: "27th of July, 2022",
  //   title: "Last day for abstract submissions",
  // },
  // {
  //   date: "27th of July, 2022 to 17th of August, 2022",
  //   title: "Screening Process",
  // },
  // {
  //   date: "17th of August, 2022",
  //   title: "Acceptance Notification",
  // },
  // {
  //   date: "17th of August, 2022",
  //   title: "Registration for the conference",
  // },
 
  {
    date: " 30th of September, 2022",
    title: "Abstract  submission",
  },
  {
    date: "07th of October, 2022",
    title: "Acceptance Notification",
  },
  {
    date: "14th of  October 2022",
    title: "Registration deadline for the conference",
  },
  {
    date: "31st of  October 2022",
    title: "Oral and poster-related proceedings",
  },
  {
    date: "15th of  November, 2022",
    title: "Technical paper submission",
  },
  {
    date: "8th, 9th & 10th of December, 2022",
    title: "CONFERENCE",
  },
  {
    date: "31st of December, 2022",
    title: "Final publication",
  },
];

const Dates: NextPage = () => {
  return (
    <>
      {/* //https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png */}
      <aside className="grid place-items-center overflow-hidden bg-[#0d1117]">
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-[#0d1117]">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl text-transparent font-semibold bg-clip-text bg-gradient-to-bl from-blue-500 via-yellow-500 pb-8">
                IMPORTANT DATES
              </h2>
            </div>
            <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
              <table className="min-w-full text-sm divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      DATE
                    </th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      EVENT
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {dates.map((date) => (
                    <tr
                      key={date.date}
                      className="bg-gray-100 hover:bg-gray-200"
                    >
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        {date.date}
                      </td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                        {date.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Dates;
