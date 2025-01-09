import React from 'react';

export default function PackageBasicInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Basic Information</h2>
      <div className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Package Name</label>
          <input
            type="text"
            id="name"
            className="w-full h-10 px-3 bg-[#111111]  rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="e.g., Mountain Trek Adventure"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm text-gray-400 mb-1">Location</label>
          <input
            type="text"
            id="location"
            className="w-full h-10 px-3 bg-[#111111]  rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="e.g., Manali, India"
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm text-gray-400 mb-1">Duration</label>
          <input
            type="text"
            id="duration"
            className="w-full h-10 px-3 bg-[#111111]  rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="e.g., 3 days"
          />
        </div>
      </div>
    </div>
  );
}