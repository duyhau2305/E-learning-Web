import React, { useState } from 'react';
import { FaHome, FaCalendarAlt, FaFileAlt, FaChalkboardTeacher, FaTasks, FaPencilAlt } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';

// Import or define your components here
import CourseManagement from '../components/TeacherDashboard/CourseManagement';
import DocumentManagement from '../components/TeacherDashboard/DocumentManagement';
import AssignmentManagement from '../components/TeacherDashboard/AssignmentManagement';
import ExamManagement from '../components/TeacherDashboard/ExamManagement';

const Dashboard = () => {
  // State to keep track of the active component
  const [activeComponent, setActiveComponent] = useState('courses');

  // Function to render the active component based on state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <CourseManagement />;
      case 'document management':
        return <DocumentManagement />;
      case 'course management':
        return <CourseManagement />;
      case 'assignments':
        return <AssignmentManagement />;
      case 'exams':
        return <ExamManagement />;
      default:
        return <CourseManagement />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex mt-40">
      {/* Sidebar */}
      <div className="w-1/8 p-5 bg-primary text-white">
        <h2 className="font-semibold text-xl mb-5">Teacher's Home</h2>
        <nav className="space-y-3">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('dashboard')}>
            <FaHome /><span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('document management')}>
            <FaFileAlt /><span>Document Management</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('course management')}>
            <FaChalkboardTeacher /><span>Courses Managements</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('assignments')}>
            <FaTasks /><span>Assignments Management</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('exams')}>
            <FaPencilAlt /><span>Exams Management</span>
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="w-5/8 flex-1">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
