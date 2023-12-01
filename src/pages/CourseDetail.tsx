import * as UserReducers from "../lib/redux/user/reducers";

import { BsFillBarChartFill, BsHourglassSplit } from "react-icons/bs";
import {
  FaBook,
  FaCheck,
  FaPhotoVideo,
  FaPlay,
  FaRegPlayCircle,
  FaRss,
  FaStar,
  FaStarHalf,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";
import { GrCertificate, GrLanguage } from "react-icons/gr";
import { IoAlarmOutline, IoTimeOutline } from "react-icons/io5";

import { BiAbacus } from "react-icons/bi";
import SocialMedia from "../components/SocialMedia";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const course = {
  idCourse: 6,
  nameCourse: "Fundamentals of Adobe XD Theory Learn New",
  saleOff: 30,
  descrip:
    "The most impressive is collection of share me online college courses",
  courseImage: "/assets/image/course-detail.jpg",
  price: 89,
  rating: 5,
  reviewAmount: 3,
  lessonAmount: 18,
  duration: 10,
  classType: "Online",
  class: 8,
  level: "Beginner",
  quizzes: 0,
  passParcent: 80,
  certificate: "Yes",
  language: "English",
  author: "William Smmith",
  authorImage: "/assets/image/ava-big-author.jpg",
  authorDescrip:
    "I'm an Afro-Latina digital artist originally from Long Island, NY. I love to paint design and photo manpulate in Adobe Photoshop while helping others learn too. Follow me on Instagram or tweet me",
  authorJob: "Assistant Teacher",
  overview:
    "In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.",
  learnedSkill: [
    "Ready to begin working on real-world data modeling projects",
    "Expanded responsibilities as part of an existing role",
    "Be able to create Flyers, Brochures, Advertisements",
    "Find a new position involving data modeling.",
    "Work with color and Gradients and Grids",
  ],
  learned: [
    "In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course",
    "By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.",
  ],
  content: [
    {
      name: "Introduction",
      lessons: 5,
      totalTime: "17:35",
      videos: [
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "How to set up your photoshop workspace",
          timeLesson: "08:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
      ],
    },
    {
      name: "How to Create Mixed Media Art in Adobe Photoshop",
      lessons: 4,
      totalTime: "30:35",
      videos: [
        {
          nameLesson: "Welcome to the course",
          timeLesson: "20:30",
        },
        {
          nameLesson: "How to set up your photoshop workspace",
          timeLesson: "08:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
        {
          nameLesson: "Welcome to the course",
          timeLesson: "02:30",
        },
      ],
    },
  ],
  listComments: [
    {
      id: 1,
      author: "Linsa Faith",
      authorAvatar: "/public/assets/image/ava-1.jpg",
      date: "Jun 5, 2022",
      time: "12:41 pm",
      rating: 5,
      contentComment:
        "The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth",
    },
    {
      id: 2,
      author: "Mahdi Mahmud",
      authorAvatar: "/public/assets/image/ava-1.jpg",
      date: "Jun 5, 2022",
      time: "12:41 pm",
      rating: 4.5,
      contentComment:
        "The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth",
    },
  ],
};

const categories = [
  {
    nameCategory: "Personal Development",
    amount: 30,
  },
  {
    nameCategory: "Photography",
    amount: 73,
  },
  {
    nameCategory: "Teaching and Academics",
    amount: 52,
  },
  {
    nameCategory: "Art and Design",
    amount: 35,
  },
  {
    nameCategory: "Business",
    amount: 57,
  },
  {
    nameCategory: "Data Science",
    amount: 36,
  },
  {
    nameCategory: "Finance",
    amount: 25,
  },
  {
    nameCategory: "Marketing",
    amount: 15,
  },
];

export default function CourseDetail() {
  const navigate = useNavigate();
  const loginSuccess = useSelector(UserReducers.loginSuccess);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [enrolled, setEnrolled] = useState(false);

  const handleClick = (nextIndex: any) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderStars = (rating: any) => {
    let stars = [];
    let fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="primary-color" />);
    }
    if (rating - fullStars >= 0.5) {
      stars.push(<FaStarHalf className="primary-color" />);
    }
    return stars;
  };

  return (
    <div className="w-full">
      <div
        className="h-[730px] md:h-[600px] pt-[150px] md:pt-[200px]"
        style={{
          backgroundImage: `url('/public/assets/image/banner-detail.jpg')`,
        }}
      >
        <div className="container max-w-[1340px] mx-auto px-4 flex justify-between flex-col-reverse md:flex-row">
          <div className="flex flex-col md:w-2/5 gap-4 pt-14">
            <div className="flex gap-2">
              <div className="bg-[#26c976] py-1 px-4 rounded text-white font-bold flex items-center">
                <span className="bg-[#ffffff80] w-[6px] h-[6px] rounded-full inline-block mr-1"></span>
                Adobe XD
              </div>
              <div className="primary-bg py-1 px-4 rounded text-white flex items-center">
                {course.saleOff}% Off
              </div>
            </div>
            <p className="text-2xl md:text-4xl font-bold text-black">
              {course.nameCourse}
            </p>
            <p className="text-[18px] text-[#555]">{course.descrip}</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={course.authorImage}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-medium text-base">{course.author}</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  {renderStars(course.rating)}
                </div>
                <p>{course.reviewAmount} reviews</p>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 p-3 bg-white rounded-md relative">
            <img src={course.courseImage} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <FaPlay className="primary-color" size={26} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-16 md:py-28">
        <div className="container max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-4">
          <div className="flex flex-col md:w-2/3 gap-8 px-2">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-3xl text-black">Course Overview</p>
              <p className="text-lg">{course.overview}</p>
              <p className="font-bold text-2xl text-black">
                What You'll Learn in This Course:
              </p>
              <div className="flex flex-col gap-1">
                {course.learnedSkill.map((item: any, index: any) => (
                  <div className="flex items-center gap-2" key={index}>
                    <FaCheck className="primary-color" />
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {course.learned.map((item: any, index: any) => (
                  <p className="text-lg" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold text-black">Course Content</p>
              <div className="flex flex-col gap-1">
                {course.content.map((c: any, i: any) => (
                  <div key={i}>
                    <button
                    type="button"
                      className="w-full bg-[#26c976] p-4 flex justify-between"
                      onClick={() => handleClick(i)}
                    >
                      <span className="text-lg text-white font-bold">
                        {i + 1}.{c.name}
                      </span>
                      <span className="text-lg text-white font-medium">
                        {c.lessons} lesson, {c.totalTime}
                      </span>
                    </button>
                    <div className={`transition-all duration-200 origin-top ${expandedIndex === i ? " scale-y-100 h-auto visible" : "scale-y-0 h-0 invisible opacity-0"}`}>
                      {c.videos.map((vid: any, idx: any) => (
                        <div
                          className={`w-full p-4 flex justify-between items-center ${
                            idx % 2 !== 0 ? "bg-white" : ""
                          }`}
                        >
                          <p className="text-base text-[#555]">
                            {i + 1}.{idx + 1} {vid.nameLesson} {vid.timeLesson}
                          </p>
                          <FaRegPlayCircle size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row px-6 py-7 bg-white shadow gap-7">
              <img src={course.authorImage} className="w-[150px] h-[150px]" />
              <div className="flex-1 flex flex-col items-center gap-3">
                <div>
                  <p className="text-xl font-bold text-black">
                    {course.author}
                  </p>
                  <p className="text-lg">{course.authorJob}</p>
                </div>
                <p>{course.authorDescrip}</p>
                <SocialMedia />
              </div>
            </div>
            <div className="shadow bg-white">
              <div className="py-5 px-7 text-xl font-bold text-black border-b md:mb-7">
                {course.listComments.length} Comment
              </div>
              <div className="py-5 px-7 flex flex-col gap-5">
                {course.listComments.map((c, i) => (
                  <div className="md:flex gap-5">
                    <img
                      src={c.authorAvatar}
                      className="w-14 h-14 md:w-24 md:h-24"
                    />
                    <div className="flex-1">
                      <div className="md:flex items-center justify-between">
                        <div>
                          <p className="font-bold text-xl text-black">
                            {c.author}
                          </p>
                          <p className="text-base">
                            {c.date} at {c.time}
                          </p>
                        </div>
                        <div className="flex">{renderStars(c.rating)}</div>
                      </div>
                      <p className="text-lg">{c.contentComment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="shadow bg-white">
              <div className="py-5 px-7 text-xl font-bold text-black border-b mb-7">
                Leave a Comment
              </div>
              <form className="py-5 px-7 flex-wrap flex justify-between gap-y-5">
                <input
                  type="text"
                  className="input bg-[#ecf0f3] w-[48%]"
                  placeholder="Your Name *"
                />
                <input
                  type="text"
                  className="input bg-[#ecf0f3] w-[48%]"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  className="input bg-[#ecf0f3] w-full"
                  placeholder="Write a Subject"
                />
                <textarea
                  className="input bg-[#ecf0f3] w-full"
                  rows="7"
                  placeholder="Your Message"
                ></textarea>
                <button className="button">SEND COMMENT</button>
              </form>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-8 px-2">
            <div className="bg-white gap-8">
              <div className="flex primary-bg p-4 justify-between">
                <p className="text-2xl text-white font-bold">${course.price}</p>
                <div className="flex items-center gap-1">
                  <IoTimeOutline className="text-white" size={20} />
                  <p className="text-lg text-white">Limited time offer</p>
                </div>
              </div>
              <div className="p-2.5">
                <div className="flex px-4 py-3 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <IoAlarmOutline size={20} />
                    <p className="text-lg">Course Level</p>
                  </div>
                  <p className="text-lg">{course.level}</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between bg-[#f9f9f9]">
                  <div className="flex items-center gap-1">
                    <FaBook size={18} />
                    <p className="text-lg">Course Duration</p>
                  </div>
                  <p className="text-lg">{course.duration}</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsFillBarChartFill size={18} />
                    <p className="text-lg">Online Class</p>
                  </div>
                  <p className="text-lg">{course.class}</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between bg-[#f9f9f9]">
                  <div className="flex items-center gap-1">
                    <FaPhotoVideo size={18} />
                    <p className="text-lg">Lessons</p>
                  </div>
                  <p className="text-lg">{course.lessonAmount}x</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BiAbacus size={20} />
                    <p className="text-lg">Quizzes</p>
                  </div>
                  <p className="text-lg">{course.quizzes}</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between bg-[#f9f9f9]">
                  <div className="flex items-center gap-1">
                    <BsHourglassSplit size={18} />
                    <p className="text-lg">Pass parcentages</p>
                  </div>
                  <p className="text-lg">{course.level}</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <GrCertificate size={18} />
                    <p className="text-lg">Certificate</p>
                  </div>
                  <p className="text-lg">{course.certificate}</p>
                </div>
                <div className="flex px-4 py-3 items-center justify-between bg-[#f9f9f9]">
                  <div className="flex items-center gap-1">
                    <GrLanguage size={18} />
                    <p className="text-lg">Language</p>
                  </div>
                  <p className="text-lg">{course.language}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="font-bold text-lg text-black mb-1">
                    Secure Payment:
                  </p>
                  <img src="/public/assets/image/payments.jpg" />
                  <p className="font-bold text-lg text-black mb-1 mt-3">
                    Share This Course:
                  </p>
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#55acee]">
                      <FaTwitter className="text-white" />
                    </div>
                    <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#3b5998]">
                      <FaVimeoV className="text-white" />
                    </div>
                    <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#ffdf40]">
                      <FaRss className="text-white" />
                    </div>
                  </div>
                  <button
                    className="button bg-[#26c976] mt-5"
                    onClick={() => {
                      loginSuccess ? setEnrolled(true) : navigate("/login");
                    }}
                  >
                    {enrolled ? "View" : "Enrolled Now"}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white gap-8">
              <div className="primary-bg p-4 p-2.5 px-7">
                <p className="text-2xl text-white font-bold">
                  Course Categories
                </p>
              </div>
              <div className="p-3">
                {categories.map((c: any, i: any) => (
                  <div
                    className={`flex px-3 py-4 justify-between items-center ${
                      i % 2 !== 0 && "bg-[#f9f9f9]"
                    }`}
                    key={i}
                  >
                    <p className="text-lg">{c.nameCategory}</p>
                    <p className="text-lg">{c.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
