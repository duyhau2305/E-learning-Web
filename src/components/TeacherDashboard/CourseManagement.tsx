import React, { useState, useEffect } from 'react';

const CourseManagement = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [lesson, setLesson] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [courses, setCourses] = useState([]);
  const [editCourseId, setEditCourseId] = useState(null); // Course ID being edited

  // Load courses from local storage when the component mounts
  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  // Save courses to local storage when they change
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editCourseId !== null) {
      // If editing an existing course, update it
      const updatedCourses = courses.map((course) => {
        if (course.courseId === editCourseId) {
          return {
            courseId: editCourseId,
            courseName,
            lesson,
            category,
            startDate,
            endDate,
          };
        }
        return course;
      });
      setCourses(updatedCourses);
      setEditCourseId(null); // Clear the editing state
    } else {
      // If not editing, add a new course
      const newCourse = {
        courseId,
        courseName,
        lesson,
        category,
        startDate,
        endDate,
      };
      setCourses((prevCourses) => [...prevCourses, newCourse]);
    }

    // Reset form fields
    setCourseId('');
    setCourseName('');
    setLesson('');
    setCategory('');
    setStartDate('');
    setEndDate('');
  };

  const handleCancel = () => {
    // Reset form fields and editing state
    setCourseId('');
    setCourseName('');
    setLesson('');
    setCategory('');
    setStartDate('');
    setEndDate('');
    setEditCourseId(null);
  };

  const handleEdit = (courseId) => {
    // Find the course being edited
    const editedCourse = courses.find((course) => course.courseId === courseId);
    if (editedCourse) {
      // Set form fields with the values of the course being edited
      setCourseId(editedCourse.courseId);
      setCourseName(editedCourse.courseName);
      setLesson(editedCourse.lesson);
      setCategory(editedCourse.category);
      setStartDate(editedCourse.startDate);
      setEndDate(editedCourse.endDate);
      setEditCourseId(courseId);
    }
  };

  const handleDelete = (courseId) => {
    // Filter out the course with the given courseId
    const updatedCourses = courses.filter((course) => course.courseId !== courseId);
    setCourses(updatedCourses);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-6">
        {editCourseId !== null ? 'Edit Course' : 'Add Course'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Course ID</label>
            <input
              type="text"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full p-2 border rounded"
              disabled={editCourseId !== null} // Disable when editing
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Lesson</label>
            <input
              type="text"
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">Select a category</option>
              <option value="backend">Lập trình Backend</option>
              <option value="web">Thiết kế Web</option>
              <option value="database">Lập trình di động</option>
              <option value="frontend">Lập trình Front end</option>
              <option value="fullstack">Lập trình Full Stack</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
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
            {editCourseId !== null ? 'Save' : 'Add'}
          </button>
        </div>
      </form>

      {/* Table to display the list of added courses */}
      {courses.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">Courses List</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Lesson</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{course.courseId}</td>
                  <td className="px-4 py-2">{course.courseName}</td>
                  <td className="px-4 py-2">{course.lesson}</td>
                  <td className="px-4 py-2">{course.category}</td>
                  <td className="px-4 py-2">{course.startDate}</td>
                  <td className="px-4 py-2">{course.endDate}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(course.courseId)}
                      className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(course.courseId)}
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

export default CourseManagement;
