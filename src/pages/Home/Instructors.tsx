import React from "react";
import { renderStars } from "../../common/utils";
import { FaBook, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Instructors() {
  const dataList = [
    {
      name: "Emilee Logan",
      role: "Master of Education Degree",
      star: 5,
      courses: "08 courses",
      students: "30 students",
    },
    {
      name: "Donald Logan",
      role: "Master of Education Degree",
      star: 5,
      courses: "08 courses",
      students: "30 students",
    },
    {
      name: "Oliver Porter",
      role: "Master of Education Degree",
      star: 5,
      courses: "08 courses",
      students: "30 students",
    },
    {
      name: "Nahla Jones",
      role: "Master of Education Degree",
      star: 5,
      courses: "08 courses",
      students: "30 students",
    },
  ];
  return (
    <section className="bg-secondary instructors-container py-[110px]">
      <div className="container-content max-w-[1320px] px-3 w-full mx-auto">
        <div className="section-header text-center mb-[50px]">
          <span className="subtitle text-primary tracking-[5px] text-xl -translate-y-2 font-medium">
            World-class Instructors
          </span>
          <h2 className="title text-[40px] font-bold text-black leading-[52px]">
            Classes Taught By Real Creators
          </h2>
        </div>
        <div className="content-instructor grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pxl:grid-cols-4 gap-5">
          {dataList.map((e) => (
            <Link
              to="#"
              className="instructor w-full hover:-translate-y-2 item text-center mx-auto  rounded transition-all duration-300 bg-white shadow-[hsla(0,0%,53%,.1)]"
            >
              <div className="inner-content mx-auto text-center pt-[30px] px-3.75 pb-5">
                <div className="img-instructor mb-5">
                  <img
                    src={`/assets/image/instructors/${e.name.replace(
                      " ",
                      ""
                    )}.jpg`}
                    alt={e.name}
                    className="mx-auto"
                  />
                </div>
                <h2 className="mb-1 font-bold text-black text-2xl name-instructor">
                  {e.name}
                </h2>
                <p className="text-lg mb-[5px]">{e.role}</p>
                <p className="star-list flex items-center justify-center">
                  {renderStars(e.star)}
                </p>
              </div>
              <div className="p-3.75 border-t border-t-[#ecf0f3] flex items-center justify-between">
                <span className="courses flex items-center gap-2">
                  <FaBook size={16} />
                  <span className="">{e.courses}</span>
                </span>
                <span className="flex items-center gap-2">
                  <FaUsers size={16} />
                  <span className="">{e.students}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mt-[30px]">
        <p>
          Want to help people learn, grow and achieve more in life? {" "}
          <Link to="/team" className="text-primary font-semibold">Become an instructor</Link>
        </p>
      </div>
    </section>
  );
}
