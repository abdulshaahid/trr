import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';

const EditProfilePage = () => {
  return (
    <div className="mt-16 min-h-screen bg-black pb-20">
      <header className="flex items-center p-6 border-b border-gray-800">
        <Link to="/profile" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Edit Profile</h1>
      </header>

      <div className="p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-[#00FF9D] p-2 rounded-full">
              <Camera size={20} className="text-black" />
            </button>
          </div>
          <button className="text-[#00FF9D]">Change Photo</button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue=""
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Username</label>
            <input
              type="text"
              defaultValue=""
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              defaultValue=""
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone</label>
            <input
              type="tel"
              defaultValue=""
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Location</label>
            <input
              type="text"
              defaultValue=""
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Bio</label>
            <textarea
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] h-32"
              defaultValue=""
            ></textarea>
          </div>

          <button className="w-full bg-[#00FF9D] text-black font-semibold py-3 rounded-lg">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;