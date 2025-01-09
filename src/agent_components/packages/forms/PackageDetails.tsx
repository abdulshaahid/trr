import React, { useState } from 'react';

const commonHighlights = [
  'Meals Included',
  'Transportation',
  'Professional Guide',
  'Accommodation',
  'Equipment',
  'Photography',
  'Insurance',
  'First Aid',
  'Camping',
  'Hiking',
  'City Tours',
  'Local Cuisine',
  'Wildlife Safaris',
  'Adventure Sports',
  'Cultural Experiences'
];

export default function PackageDetails() {
  const [selectedHighlights, setSelectedHighlights] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleHighlight = (highlight) => {
    if (selectedHighlights.includes(highlight)) {
      // Remove if already selected
      setSelectedHighlights(selectedHighlights.filter((item) => item !== highlight));
    } else {
      // Add if not already selected
      setSelectedHighlights([...selectedHighlights, highlight]);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="space-y-4">
      {/* Package Details Section */}
      <h2 className="text-lg font-semibold text-white">Package Details</h2>
      <div className="space-y-3">
        <div>
          <label htmlFor="description" className="block text-sm text-gray-400 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full p-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors resize-none"
            placeholder="Describe your package..."
          />
        </div>
      </div>

      {/* Package Highlights Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Package Highlights</h2>

        {/* Selected Highlights */}
        <div className="space-y-2">
          {selectedHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center justify-between p-3 bg-[#111111] rounded-xl text-white"
            >
              <span>{highlight}</span>
              <button
                onClick={() => toggleHighlight(highlight)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add More Highlights Button */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-2 bg-[#37e5a5] text-black rounded-xl hover:bg-[#37e5a5]/90 transition-colors font-medium"
        >
          + Add More Highlights
        </button>

        {/* Scrollable Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#151515] w-11/12 max-w-lg rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">Select Highlights</h2>
              <div className="h-64 overflow-y-auto space-y-2">
                {commonHighlights.map((highlight) => (
                  <label
                    key={highlight}
                    className="flex items-center gap-2 p-3 bg-[#111111] rounded-xl cursor-pointer hover:bg-[#37e5a5]/20 transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="accent-[#37e5a5]"
                      checked={selectedHighlights.includes(highlight)}
                      onChange={() => toggleHighlight(highlight)}
                    />
                    <span className="text-white text-sm">{highlight}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 py-2 bg-[#1f1f1f] text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 py-2 bg-[#37e5a5] text-black rounded-xl hover:bg-[#37e5a5]/90 transition-colors font-medium"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
