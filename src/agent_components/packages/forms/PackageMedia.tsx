import React from "react";
import { ImageIcon } from "lucide-react";

export default function PackageMedia() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Media</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-square bg-[#111111] rounded-xl  hover:border-[#37e5a5] transition-colors cursor-pointer flex flex-col items-center justify-center">
          <ImageIcon className="w-6 h-6 text-gray-400 mb-2" />
          <span className="text-xs text-gray-400">Add Photo</span>
        </div>
      </div>
    </div>
  );
}
