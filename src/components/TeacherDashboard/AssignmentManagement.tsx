import React, { useState, useEffect } from 'react';

const AssignmentManagement = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [courseID, setCourseID] = useState('');
  const [lessonID, setLessonID] = useState('');
  const [file, setFile] = useState(null); // State for the uploaded file
  const [description, setDescription] = useState('');
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const storedAssignments = localStorage.getItem('assignments');
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      assignmentName,
      deadline,
      courseID,
      lessonID,
      file, // Save the file in the assignment
      description, // Save the description
    };
    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
    setAssignmentName('');
    setDeadline('');
    setCourseID('');
    setLessonID('');
    setFile(null); // Reset the file state
    setDescription('');
  };

  const handleCancel = () => {
    setAssignmentName('');
    setDeadline('');
    setCourseID('');
    setLessonID('');
    setFile(null); // Reset the file state
    setDescription('');
  };

  const handleEdit = (assignmentIndex) => {
    const assignmentToEdit = assignments[assignmentIndex];
    setAssignmentName(assignmentToEdit.assignmentName);
    setDeadline(assignmentToEdit.deadline);
    setCourseID(assignmentToEdit.courseID);
    setLessonID(assignmentToEdit.lessonID);
    setFile(assignmentToEdit.file);
    setDescription(assignmentToEdit.description);

    const updatedAssignments = assignments.filter((_, index) => index !== assignmentIndex);
    setAssignments(updatedAssignments);
  };

  const handleDelete = (assignmentIndex) => {
    const updatedAssignments = assignments.filter((_, index) => index !== assignmentIndex);
    setAssignments(updatedAssignments);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-6">Add Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Assignment Name</label>
          <input
            type="text"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Course ID</label>
          <input
            type="text"
            value={courseID}
            onChange={(e) => setCourseID(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Lesson ID</label>
          <input
            type="text"
            value={lessonID}
            onChange={(e) => setLessonID(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Upload Assignment File</label>
          <input
            type="file"
            accept=".docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border rounded text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
          >
            Add
          </button>
        </div>
      </form>

      {assignments.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">Assignments List</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">Assignment Name</th>
                <th className="px-4 py-2">Deadline</th>
                <th className="px-4 py-2">Course ID</th>
                <th className="px-4 py-2">Lesson ID</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{assignment.assignmentName}</td>
                  <td className="px-4 py-2">{assignment.deadline}</td>
                  <td className="px-4 py-2">{assignment.courseID}</td>
                  <td className="px-4 py-2">{assignment.lessonID}</td>
                  <td className="px-4 py-2">{assignment.description}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AssignmentManagement;
