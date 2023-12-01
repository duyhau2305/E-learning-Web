import React, { useState, useEffect } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { courses, coursesed, filters } from "../configs/fakeData";
import { BiAbacus } from "react-icons/bi";
import ListCourses from "../components/ListCourses";

// Tạo dữ liệu giả cho bài tập
const generateFakeAssignments = () => {
  const assignments = [];
  for (let i = 1; i <= 5; i++) {
    const assignment = {
      idAssignment: i,
      nameAssignment: `Assignment ${i}`,
      assignmentImage: "https://www.hoteljob.vn/uploads/images/17-01-19-10/assignment-logo.png", // Thay đổi đường dẫn ảnh
      deadline: "2023-12-31", // Thay đổi deadline
      author: "John Doe", // Thay đổi tác giả
    };
    assignments.push(assignment);
  }
  return assignments;
};

// Tạo dữ liệu giả cho bài thi
const generateFakeExams = () => {
  const exams = [];
  for (let i = 1; i <= 5; i++) {
    const exam = {
      idExam: i,
      nameExam: `Exam ${i}`,
      examImage: "https://blog.cambridgeinternational.org/wp-content/uploads/Exam-tips_resized-1-700x300-1.jpg", // Thay đổi đường dẫn ảnh
      date: "2023-12-15", // Thay đổi ngày thi
      author: "Jane Smith", // Thay đổi tác giả
    };
    exams.push(exam);
  }
  return exams;
};

export default function CoursesEnrolled() {
  const [assignments, setAssignments] = useState([]);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Sử dụng hàm tạo dữ liệu giả cho bài tập và bài thi
    const fakeAssignments = generateFakeAssignments();
    const fakeExams = generateFakeExams();

    // Cập nhật state với dữ liệu giả
    setAssignments(fakeAssignments);
    setExams(fakeExams);
  }, []);

  return (
    <>
      <div className="container max-w-[1340px] py-bottom:2">        
        <ListCourses courses={coursesed} />
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
