import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { renderStars } from "../../common/utils";

export default function Feedback() {
  const dataList = [
    {
      name: "Oliver Beddows",
      role: "UX designer",
      star: 5,
      description:
        "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
    },
    {
      name: "Madley Pondor",
      role: "UX designer",
      star: 5,
      description:
        "Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze",
    },
  ];
  return (
    <section className="feedback-container bg-white py-[110px] relative z-10">
      <div className="container-content max-w-[1320px] px-3 w-full mx-auto relative z-10">
        <div className="section-header text-center mb-[50px]">
          <span className="subtitle text-primary tracking-[5px] text-xl -translate-y-2 font-medium">
            LOVED BY 200,000+ STUDENTS
          </span>
          <h2 className="title text-[40px] font-bold text-black leading-[52px]">
            Students Community Feedback
          </h2>
        </div>
        <div className="content-container flex items-center gap-4">
          <div className="col-left w-1/2 relative z-10">
            <div className="thumb-left border-[10px] border-white rounded relative">
              <img src="/assets/image/feedback/01.jpg" />
              <Link
                to="https://www.youtube.com/embed/MU3qrgR2Kkc"
                className="play-btn absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-primary"
              >
                <FaPlay size={20} />
              </Link>
            </div>
          </div>
          <div className="col-right w-1/2 relative z-10">
            {dataList.map((e) =>(
              <div className="content-item px-[30px] py-[10px] bg-white" key={e.name}>
                <div className="top-item-content flex items-center justify-between py-3.75 border-b border-b-[#ecf0f3]">
                  <div className="item-left flex items-center gap-2">
                    <div className="img-thumb rounded-full">
                      <img src={`/assets/image/feedback/${e.name.replace(" ", "")}.jpg`}/>
                    </div>
                    <div className="">
                      <Link to="#" className="text-black text-lg font-bold transi duration-300 hover:text-primary">{e.name}</Link>
                      <p className="text-lg ">{e.role}</p>
                    </div>
                  </div>
                  <div className="star flex items-center">{renderStars(e.star)}</div>
                </div>
                <div className="bottom-item-content pt-5 pb-[10px] text-lg">
                  {e.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
