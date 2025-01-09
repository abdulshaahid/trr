  import { useState } from "react";
  import { User, Settings, Search, Bell } from "lucide-react";
  import TrpdLogo from "../../assets/trpd.svg";
  import { useNavigate } from "react-router-dom";

  export function Navbar() {
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);
    const navigate = useNavigate();

    const suggestions = [
      "Explore Paris",
      "Weekend Getaways",
      "Adventure Trails",
      "Top Beaches",
    ];
    const handleNotificationClick = () => {
      navigate("/notifications"); // Navigate to the notifications page
    };
    const handlehomeClick = () => {
      navigate("/"); // Navigate to the notifications page
    };
    return (
      <>
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div       onClick={handlehomeClick}
 className="flex items-center space-x-2">
              <img src={TrpdLogo} alt="Trawayl Logo" className="w-10 h-10" />
              <span className="text-gray-200 font-bold text-l">trawayl</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setSearchModalOpen(true)} // Open the modal
              >
                <Search className="w-6 h-6 text-white opacity-80" />
              </button>
              <button
      onClick={handleNotificationClick}
      className="p-2 hover:bg-white/10 rounded-full transition-colors"
    >
      <Bell className="w-6 h-6 text-white opacity-80" />
    </button>
            </div>
          </div>
        </nav>

        {/* Search Modal */}
        {isSearchModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
            {/* Modal Background */}
            <div
              className="absolute inset-0"
              onClick={() => setSearchModalOpen(false)} // Close the modal on clicking outside
            ></div>

            {/* Modal Content */}
            <div className="relative z-10 bg-[#111111] rounded-3xl p-6 w-11/12 max-w-lg shadow-lg">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="packages, trips, vehicles..."
                  className="w-full px-6 py-3 text-white bg-[#000000] rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37e5a5] transition-all"
                />
                <Search
                  className="absolute top-1/2 transform -translate-y-1/2 right-4 w-5 h-5 text-gray-400"
                />
              </div>

              {/* Suggestions */}
              <ul className="mt-6 space-y-3">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-3 bg-[#111111] text-light rounded-xl hover:bg-[#1d1d1d] transition-all cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
