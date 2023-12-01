import React, { useState } from 'react';
import {FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert('Thank you for your message!');
  };

  return (
    <div className="flex  mx-auto my-60 p-6 border border-gray-300 rounded-md shadow-lg">
      <div className="w-2/5 mt-10 md:mt-0 p-6 border border-gray-300 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Thông Tin Liên Hệ</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaMapMarker className="flex-shrink-0 mt-1 mr-2" />
              <p>Đại Học Bách Khoa Hà Nội, 1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Việt Nam</p>
            </div>
            <div className="flex items-start">
              <FaPhone className="flex-shrink-0 mt-1 mr-2" />
              <div>
                <p>0987 902 822 (Tư vấn khóa học)</p>
                <p>0818 123 593 (Góp ý/Khiếu nại)</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="flex-shrink-0 mt-1 mr-2" />
              <p>duyhau2305@gmail.com</p>
            </div>
            {/* Social Media Links */}
            <div>
              {/* Add social media links if necessary */}
            </div>
          </div>
        </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 w-3/5 mx-6" >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div>
          <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary h-32"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Send Message
        </button>
        
      </form>
     
      </div>
   
  );
};

export default Contact;
