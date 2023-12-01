import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import CourseDetail from '../pages/CourseDetail';
import Courses from '../pages/Courses';
import HomePage from '../pages/Home/Home';
import Layout from '../layout';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ResetPassword from '../pages/ResetPassword';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import Blog from '../pages/Home/Blog';
import Forum from '../pages/Home/Forum';
import Dashboard from '../pages/Dashboard';
import TeacherDashboard from '../pages/TeacherDashboard.tsx';


export default function Routers() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/dashboard" element={<Navigate to="/login" />} />
          )}
            {/* <Route path="/teacherdashboard" element={<TeacherDashboard />} /> */}
          <Route path="/teacherdashboard" element={<TeacherDashboard/>} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}