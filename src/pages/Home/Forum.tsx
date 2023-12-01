import React, { useState } from 'react';
import { FaRegFolder, FaRegClock, FaRegCommentDots } from 'react-icons/fa';

const forumCategories = [
  {
    categoryId: 1,
    categoryName: "Site Management",
    threads: [
      {
        threadId: 't1',
        threadTitle: "Announcements",
        threadDescription: "Official site news and announcements.",
        topics: 41,
        posts: 966,
        lastPost: { title: "Maintenance Downtime", by: "Admin", date: "15-11-2023, 23:16" },
      },
      {
        threadId: 't2',
        threadTitle: "Site Feedback",
        threadDescription: "Have feedback for the site? Post it here.",
        topics: 114,
        posts: 1532,
        lastPost: { title: "New Forum Section Request", by: "Member123", date: "14-11-2023, 15:42" },
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: "General Discussion",
    threads: [
      {
        threadId: 't3',
        threadTitle: "Introductions",
        threadDescription: "New to the community? Introduce yourself here.",
        topics: 59,
        posts: 238,
        lastPost: { title: "Hello from Australia!", by: "SydneySider", date: "16-11-2023, 09:22" },
      },
      {
        threadId: 't4',
        threadTitle: "General Chat",
        threadDescription: "Discuss anything that doesn't fit elsewhere.",
        topics: 88,
        posts: 789,
        lastPost: { title: "Upcoming Movie Discussion", by: "MovieBuff", date: "15-11-2023, 21:30" },
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: "Support",
    threads: [
      {
        threadId: 't5',
        threadTitle: "Tech Support",
        threadDescription: "Having trouble with your tech? Get help here.",
        topics: 205,
        posts: 642,
        lastPost: { title: "Laptop Won't Start", by: "Techie101", date: "17-11-2023, 10:15" },
      },
      {
        threadId: 't6',
        threadTitle: "Site Help",
        threadDescription: "Questions about using the site? Ask here.",
        topics: 39,
        posts: 157,
        lastPost: { title: "How to Change Profile Pic", by: "NewUser", date: "16-11-2023, 14:05" },
      },
    ],
  },
  // Add more categories and threads as needed
];

const Forum = () => {
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  const handleThreadClick = (threadId) => {
    setSelectedThreadId(selectedThreadId === threadId ? null : threadId);
  };

  const renderPosts = (thread) => {
    return thread.posts.map(post => (
      <div key={post.postId} className="bg-gray-100 p-4 rounded my-2">
        {post.content}
      </div>
    ));
  };

  return (
    <div className="container mx-auto my-8 p-4">
      {forumCategories.map((category) => (
        <div key={category.categoryId} className="mb-8">
          <h2 className="text-xl font-bold my-2">{category.categoryName}</h2>
          {category.threads.map((thread) => (
            <div key={thread.threadId} className="bg-white p-4 rounded shadow mb-4">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => handleThreadClick(thread.threadId)}>
                <div className="flex items-center">
                  <FaRegFolder className="text-blue-500 mr-2" size="2em" />
                  <div>
                    <h3 className="font-semibold">{thread.threadTitle}</h3>
                    <p className="text-sm text-gray-600">{thread.threadDescription}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-sm text-gray-600 mb-1">
                    <FaRegCommentDots className="mr-1" />
                    {thread.topics} Topics / {thread.posts} Posts
                  </div>
                  <div className="flex items-center justify-end text-sm text-gray-600">
                    <FaRegClock className="mr-1" />
                    Last post: {thread.lastPost.title} by {thread.lastPost.by} on {thread.lastPost.date}
                  </div>
                </div>
              </div>
              {selectedThreadId === thread.threadId && (
                <div className="mt-4">
                  {renderPosts(thread)}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forum;
