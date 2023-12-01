import React, { useState } from 'react';
import { FaHome, FaCalendarAlt, FaFileAlt, FaChalkboardTeacher, FaTasks, FaPencilAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Import or define your components here
import CoursesEnrolled from './CouresEnrolled';
import PrivateFiles from '../components/CouresDashboard/PrivateFiles';
import MyCourses from '../components/CouresDashboard/MyCourses';
import Assignments from '../components/CouresDashboard/Assignments';
import Exams from '../components/CouresDashboard/Exams';

const Dashboard = () => {
  // State to keep track of the active component
  const [activeComponent, setActiveComponent] = useState('dashboard');

  // Function to render the active component based on state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <CoursesEnrolled />;
      case 'privateFiles':
        return <PrivateFiles />;
      case 'myCourses':
        return <MyCourses />;
      case 'assignments':
        return <Assignments />;
      case 'exams':
        return <Exams />;
      default:
        return <CoursesEnrolled />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex mt-40">
      {/* Sidebar */}
      <div className="w-1/8 p-5 bg-primary text-white">
        <h2 className="font-semibold text-xl mb-5">My Home</h2>
        <nav className="space-y-3">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('dashboard')}>
            <FaHome /><span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('privateFiles')}>
            <FaFileAlt /><span>Private Files</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('myCourses')}>
            <FaChalkboardTeacher /><span>My Courses</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('assignments')}>
            <FaTasks /><span>Assignments</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('exams')}>
            <FaPencilAlt /><span>Exams</span>
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="w-5/8 flex-1">
        {renderActiveComponent()}
      </div>

      {/* Right Sidebar for Calendar */}
      <div className="w-2/8 bg-white p-5">
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
