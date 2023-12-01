import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Assignments = () => {
  const generateFakeAssignments = () => {
    const assignments = [];
    for (let i = 1; i <= 8; i++) {
      const assignment = {
        idAssignment: i,
        nameAssignment: `Assignment ${i}`,
        assignmentImage: "https://www.hoteljob.vn/uploads/images/17-01-19-10/assignment-logo.pngx", // Thay đổi đường dẫn ảnh
        deadline: "2023-12-31", // Thay đổi deadline
        author: "John Doe", // Thay đổi tác giả
      };
      assignments.push(assignment);
    }
    return assignments;
  };

  const [assignments, setAssignments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const assignmentsPerPage = 4; // Số lượng assignments trên mỗi trang

  useEffect(() => {
    // Generate fake assignments
    const fakeAssignments = generateFakeAssignments();
    setAssignments(fakeAssignments);
  }, []);

  // Tính toán các assignments hiển thị trên trang hiện tại
  const indexOfLastAssignment = currentPage * assignmentsPerPage;
  const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
  const currentAssignments = assignments.slice(indexOfFirstAssignment, indexOfLastAssignment);

  // Thay đổi trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container max-w-[1340px] py-bottom:2">
      {/* Assignment List */}
      <div>
        {currentAssignments.map((assignment) => (
          <div key={assignment.idAssignment} className="assignment-item flex gap-4 my-4 p-4 border rounded shadow">
            <img src={assignment.assignmentImage} alt={`Assignment ${assignment.idAssignment}`} className="w-16 h-16 rounded" />
            <div>
              <h3 className="text-lg font-semibold">{assignment.nameAssignment}</h3>
              <p className="text-sm">Deadline: {assignment.deadline}</p>
              <p className="text-sm">Author: {assignment.author}</p>
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
        {[...Array(Math.ceil(assignments.length / assignmentsPerPage))].map((_, index) => (
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
            setCurrentPage(currentPage < Math.ceil(assignments.length / assignmentsPerPage) ? currentPage + 1 : currentPage)
          }
        >
          <MdChevronRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default Assignments;
