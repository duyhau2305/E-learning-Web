import {
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { courses, filters } from "../configs/fakeData";

import { BiAbacus } from "react-icons/bi";
import ListCourses from "../components/ListCourses";

export default function Courses() {
  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Archives: Courses
        </p>
        <p className="text-base text-center">Home / Course Page</p>
      </div>
      <div className="py-6 primary-bg">
        <div className="container max-w-[1340px] mx-auto px-4 md:flex gap-6">
          <div className="flex items-center gap-1">
            <BiAbacus size={20} className="text-white" />
            <p className="text-white text-lg">Filters</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-2">
            {filters.map((f, i) => (
              <div className="relative">
                <select
                  key={i}
                  className="rounded p-2.5 outline-none w-full appearance-none"
                >
                  {f.options.map((o, ix) => (
                    <option key={ix}>{o}</option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <MdKeyboardArrowDown size={20}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-w-[1340px] mx-auto px-4 py-28">
        <div className="flex w-full justify-between mb-6">
          <p>Showing 1-6 of 10 results</p>
          <div className="flex gap-1">
            <p>Sort by:</p>
            <select className="bg-secondary outline-none primary-color">
              {filters
                .find((f) => f.type == "skills")
                ?.options.map((o, i) => (
                  <option key={i} className="primary-color bg-white">{o}</option>
                ))}
            </select>
          </div>
        </div>
        <ListCourses courses={courses} />
        <div className="flex justify-center items-center mt-10 gap-3">
          <a className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black shadow">
            <MdChevronLeft size={20} />
          </a>
          <a className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black shadow">
            01
          </a>
          <a className="w-12 h-12 rounded-full flex items-center justify-center primary-bg text-white shadow">
            02
          </a>
          <a className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black shadow">
            03
          </a>
          <a className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black shadow">
            <MdChevronRight size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
