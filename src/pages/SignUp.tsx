import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!userName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setShowSuccessPopup(true);
    // Logic to handle sign up (e.g., API call) goes here
  };

  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Sign up
        </p>
        <p className="text-base text-center">Home / Sign up</p>
      </div>
      <div className="container mx-auto py-28">
        <div className="max-w-xl mx-auto p-14 px-20 flex flex-col gap-y-5 shadow rounded bg-white">
          <p className="text-3xl font-bold text-center">Register Now</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="User Name"
              className="input w-full"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="button" onClick={handleSignUp}>Get Started Now</button>
          <p className="text-center">
            Are you a member?
            <span>
              <Link to="/"> Login</Link>
            </span>
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="w-9 h-9 rounded-full primary-bg flex items-center justify-center">
              <p className="text-white">OR</p>
            </div>
            <p className="font-bold text-xl">Login With Social Media</p>
            <div className="flex gap-2">
              <a href="" className="social-icon bg-[#3b5998] hover:-translate-y-1 duration-300">
                <FaFacebookF style={{ color: "#fff" }} />
              </a>
              <a href="" className="social-icon bg-[#55acee] hover:-translate-y-1 duration-300">
                <FaTwitter style={{ color: "#fff" }} />
              </a>
              <a href="" className="social-icon bg-[#007bb5] hover:-translate-y-1 duration-300">
                <FaLinkedin style={{ color: "#fff" }} />
              </a>
              <a href="" className="social-icon bg-[#e4405f] hover:-translate-y-1 duration-300">
                <FaInstagram style={{ color: "#fff" }} />
              </a>
              <a href="" className="social-icon bg-[#bd081c] hover:-translate-y-1 duration-300">
                <FaPinterestP style={{ color: "#fff" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .popup-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1000;
          }
          .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            text-align: center;
          }
          .close-button {
            background-color: #ff5f5f;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
          }
        `}
      </style>

      {showSuccessPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>Registration Successful!</p>
            <button className="close-button" onClick={() => setShowSuccessPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
