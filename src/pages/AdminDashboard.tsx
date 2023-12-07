import React, { useState } from 'react';
import { FaHome, FaUsers, FaChalkboardTeacher, FaNewspaper, FaComments } from 'react-icons/fa';

// Import or define your components here
import CourseStatistics from '../components/Admindashboard/CourseStatistics ';
import NewsManagement from '../components/Admindashboard/NewsManagement ';
import UserManagement from '../components/Admindashboard/UserManagement';
import ForumManagement from '../components/Admindashboard/ForumManagement';

const Dashboard= () => {
  const [activeComponent, setActiveComponent] = useState('courses');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <CourseStatistics />;
      case 'user management':
        return <UserManagement />;
      case 'course management':
        return <CourseStatistics />;
      case 'news management':
        return <NewsManagement />;
      case 'forum management':
        return <ForumManagement />;
      default:
        return <CourseStatistics />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex mt-20">
      {/* Sidebar */}
      <div className="w-1/6 p-5 bg-primary text-white">
        <h2 className="font-semibold text-xl mb-5">Admin Dashboard</h2>
        <nav className="space-y-3">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('dashboard')}>
            <FaHome /><span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('user management')}>
            <FaUsers /><span>User Management</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('course management')}>
            <FaChalkboardTeacher /><span>Course Management</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('news management')}>
            <FaNewspaper /><span>News Management</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300" onClick={() => setActiveComponent('forum management')}>
            <FaComments /><span>Forum Management</span>
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="w-5/6 flex-1">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
