import React, { useState } from 'react';
import Modal from 'react-modal';

function ExamManagement() {
  const [isNewExamModalOpen, setIsNewExamModalOpen] = useState(false);

  const openNewExamModal = () => {
    setIsNewExamModalOpen(true);
  };

  const closeNewExamModal = () => {
    setIsNewExamModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Exam Managemnet</h1>
        <div className="mt-2">
          <button
            onClick={openNewExamModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create New Exams
          </button>
        </div>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Enter key word for search"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Search 
        </button>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Exam Management</h2>
          <div>
            <span className="text-gray-500">Sort by:</span>
            <select className="ml-2 border rounded">
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold">Exams 1</h3>
          <p className="text-gray-500">Create At: 01/01/2023</p>
          <p className="mt-2">Question: 10</p>
          <div className="mt-4 flex justify-end space-x-2">
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit
            </button>
            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isNewExamModalOpen}
        onRequestClose={closeNewExamModal}
        contentLabel="Create New Exam Modal"
      >
        <h2 className="text-xl font-semibold mb-4">Create New Exam</h2>
        {/* Thêm các phần tử form để tạo đề thi mới ở đây */}
        <button
          onClick={closeNewExamModal}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ExamManagement;
