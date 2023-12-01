import React from "react";
import { FaCalendarAlt, FaCommentAlt, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Blog() {
  // Fake data for demonstration
  const dataList = [
    {
      id: 4,
      name: "Innovations in Distance Learning",
      author: "Jane Doe",
      date: "March 15, 2023",
      description: "Explore the latest trends and technologies in distance education, shaping the future of learning.",
      comments: 12,
      imageUrl: "https://www.dyknow.com/wp-content/uploads/2020/08/distance-learning-innovation-leadership.png"
    },
    {
      id: 3,
      name: "The Impact of AI on Higher Education",
      author: "John Smith",
      date: "April 10, 2023",
      description: "Artificial Intelligence is revolutionizing the educational landscape. Discover how AI is being integrated into higher education.",
      comments: 8,
      imageUrl: "https://camudigitalcampus.com/wp-content/uploads/2021/03/AI-Blog-Image.png"
    },
    {
      id: 2,
      name: "Sustainable Practices in Schools",
      author: "Alice Johnson",
      date: "May 5, 2023",
      description: "A deep dive into how schools around the world are implementing sustainable practices to foster environmental awareness.",
      comments: 5,
      imageUrl: "https://www.dyknow.com/wp-content/uploads/2020/08/distance-learning-innovation-leadership.png"
    },
    {
      id: 1,
      name: "Announcement of system downtime for periodic maintenance February 2023 ",
      author: "Admin Elearning",
      date: "January 8, 2023",
      description: "A deep dive into how schools around the world are implementing sustainable practices to foster environmental awareness.",
      comments: 5,
      imageUrl: "https://megatechco.vn/wp-content/uploads/bao-tri.jpg"
    },
    {
      id: 5,
      name: "Experience the online Taekwondo Physical Education course ",
      author: "Admin Elearning",
      date: "August 8, 2023",
      description: "A deep dive into how schools around the world are implementing sustainable practices to foster environmental awareness.",
      comments: 4,
      imageUrl: "https://cali.vn/storage/app/media/vo-taekwondo-thumbnail.jpg"
    },
    {
      id: 6,
      name: "WELCOME NOVEMBER 20, SCHOOL OF CHEMISTRY AND LIFE SCIENCES APPRECIATE THE PAST, KEEP THE FUTURE ",
      author: "Admin Elearning",
      date: "August 8, 2023",
      description: "A deep dive into how schools around the world are implementing sustainable practices to foster environmental awareness.",
      comments: 8,
      imageUrl: "https://didongviet.vn/dchannel/wp-content/uploads/2022/11/ngay-nha-giao-viet-nam-didongviet-cover.jpg"
    }
  ];

  // Sắp xếp dataList theo trường date
  dataList.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB-dateA; // Sắp xếp theo thứ tự giảm dần (mới nhất đầu)
  });

  return (
    <section className="bg-secondary py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-xl font-medium tracking-wider uppercase inline-block mb-2">
            From Our Blog Posts
          </span>
          <h2 className="text-4xl font-bold text-black leading-tight">
            More Articles From Resource Library
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataList.map((article, i) => (
            <div className="transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1" key={article.id}>
              <div className="w-full">
                <img
                  src={article.imageUrl}
                  alt={`Blog Post ${i + 1}`}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <Link to="#" className="text-2xl font-bold text-black hover:text-primary transition duration-300">
                  {article.name}
                </Link>
                <div className="flex items-center my-4">
                  <span className="flex items-center text-gray-600 mr-4">
                    <FaUser className="text-primary mr-2" />
                    {article.author}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaCalendarAlt className="text-primary mr-2" />
                    {article.date}
                  </span>
                </div>
                <p className="text-gray-700">
                  {article.description}
                </p>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="#" className="flex items-center text-lg font-medium text-black hover:text-primary transition duration-300">
                  Read More
                  <FaExternalLinkAlt className="ml-2" />
                </Link>
                <span className="flex items-center">
                  <FaCommentAlt className="text-gray-600" />
                  <span className="bg-primary text-white text-xs font-semibold ml-2 px-2.5 py-0.5 rounded-full">
                    {article.comments}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
