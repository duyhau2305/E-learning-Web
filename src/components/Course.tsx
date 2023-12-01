import { Link } from "react-router-dom";
import { FaPhotoVideo } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { BsFillBarChartFill } from "react-icons/bs";

import { renderStars } from "../common/utils";

export default function Course({ item }: { item: any }) {

  return (
    <div className="p-4 bg-white border">
      <div className="overflow-hidden">
        <img src={item.courseImage} className="w-full max-w-full hover:scale-105 duration-300"/>
      </div>
      
      <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] primary-bg rounded-full flex items-center justify-center text-white font-bold text-xl ml-auto mr-[20px] -mt-[30px] relative">
        ${item.price}
      </div>
      <div className="flex flex-col px-[15px] gap-4">
        <div className="flex gap-3">
          <div className="primary-bg py-1 px-4 rounded text-white font-bold flex items-center">
            <span className="bg-[#ffffff80] w-[6px] h-[6px] rounded-full inline-block mr-1"></span>
            Adobe XD
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">{renderStars(item.rating)}</div>
            <p>{item.reviewAmount} reviews</p>
          </div>
        </div>
        <Link to={`/course-detail/${item.idCourse}`} className="text-2xl font-bold hover:text-[#f16126]">{item.nameCourse}</Link>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <FaPhotoVideo className="primary-color" />
            <p className="text-base text-[#555]">{item.lessonAmount}X Lesson</p>
          </div>
          <div className="flex items-center gap-1">
            <BsFillBarChartFill className="primary-color" />
            <p className="text-base text-[#555]">{item.classType} Class</p>
          </div>
        </div>
        <div className="flex justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <img src={item.authorImage} className="w-10 h-10 rounded-full" />
            <p className="font-medium text-base">{item.author}</p>
          </div>
          <div className="flex items-center gap-1">
            
            <button className="font-medium text-base">Read More </button>
            <RiShareBoxFill className="primary-color" />
          </div>
        </div>
      </div>
    </div>
  );
}
