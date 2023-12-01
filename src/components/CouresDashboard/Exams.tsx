import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Exams = () => {
  const generateFakeExams = () => {
    const exams = [];
    for (let i = 1; i <= 8; i++) {
      const exam = {
        idExam: i,
        nameExam: `Exam ${i}`,
        examImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi7mlThwUTnTTs3dgHOWNSFbAVHLlSE99iw&usqp=CAU", // Thay đổi đường dẫn ảnh
        deadline: "2023-12-31", // Thay đổi deadline
        author: "Jane Smith", // Thay đổi tác giả
      };
      exams.push(exam);
    }
    return exams;
  };

  const [exams, setExams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const examsPerPage = 4; // Số lượng exams trên mỗi trang

  useEffect(() => {
    // Generate fake exams
    const fakeExams = generateFakeExams();
    setExams(fakeExams);
  }, []);

  // Tính toán các exams hiển thị trên trang hiện tại
  const indexOfLastExam = currentPage * examsPerPage;
  const indexOfFirstExam = indexOfLastExam - examsPerPage;
  const currentExams = exams.slice(indexOfFirstExam, indexOfLastExam);

  // Thay đổi trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container max-w-[1340px] py-bottom:2">
      {/* Exam List */}
      <div>
        {currentExams.map((exam) => (
          <div key={exam.idExam} className="exam-item flex gap-4 my-4 p-4 border rounded shadow">
            <img src={exam.examImage} alt={`Exam ${exam.idExam}`} className="w-16 h-16 rounded" />
            <div>
              <h3 className="text-lg font-semibold">{exam.nameExam}</h3>
              <p className="text-sm">Deadline: {exam.deadline}</p>
              <p className="text-sm">Author: {exam.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-3">
        <a
          className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black shadow cursor-pointer"
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
        >
          <MdChevronLeft size={20} />
        </a>
        {/* Hiển thị các số trang */}
        {[...Array(Math.ceil(exams.length / examsPerPage))].map((_, index) => (
          <a
            key={index}
            onClick={() => paginate(index + 1)}
            className={`${
              currentPage === index + 1 ? 'bg-gray-200' : 'bg-white'
            } w-12 h-12 rounded-full flex items-center justify-center text-black shadow cursor-pointer`}
          >
            {index + 1}
          </a>
        ))}
        <a
          className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black shadow cursor-pointer"
          onClick={() =>
            setCurrentPage(currentPage < Math.ceil(exams.length / examsPerPage) ? currentPage + 1 : currentPage)
          }
        >
          <MdChevronRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default Exams;
