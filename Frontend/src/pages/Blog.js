import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Robotics in Manufacturing",
      excerpt: "Discover how advanced robotics is transforming the manufacturing industry...",
      date: "March 15, 2024",
      category: "Industry Insights",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "AI Integration in Modern Robots",
      excerpt: "Exploring the revolutionary impact of artificial intelligence in robotics...",
      date: "March 12, 2024",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Collaborative Robots: The New Workforce",
      excerpt: "How cobots are changing the way humans and machines work together...",
      date: "March 10, 2024",
      category: "Innovation",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden pt-20">
      {/* Footer-style background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>
      <div className="container mx-auto px-4 py-12 z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Blog & News</h1>
        
        {/* Featured Post */}
        <div className="group perspective-1000 mb-12">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent 
              backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)]
              transition-all duration-500 transform hover:scale-[1.02] group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
              before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]
              before:bg-[length:250%_250%] before:animate-shimmer before:rounded-2xl
              overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 aspect-video bg-white/10 rounded-lg"></div>
              <div className="w-full md:w-1/2">
                <span className="text-white/60 text-sm">Featured</span>
                <h2 className="text-2xl font-bold text-white mt-2 mb-4">Revolutionizing Industries: The Rise of Autonomous Robots</h2>
                <p className="text-gray-300 mb-6">An in-depth look at how autonomous robots are transforming various industries, from manufacturing to healthcare, and what the future holds for this revolutionary technology.</p>
                <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                  <span>March 18, 2024</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm 
                    hover:bg-white/20 transition-all duration-300 border border-white/10">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="group perspective-1000">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent 
                  backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                  transition-all duration-500 transform hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
                  before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]
                  before:bg-[length:250%_250%] before:animate-shimmer before:rounded-2xl
                  overflow-hidden">
                <div className="aspect-video bg-white/10 rounded-lg mb-4"></div>
                <span className="text-white/60 text-sm">{post.category}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm 
                      hover:bg-white/20 transition-all duration-300 border border-white/10">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 