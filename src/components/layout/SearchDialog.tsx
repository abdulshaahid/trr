import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const suggestions = [
  "Popular destinations",
  "Trending locations",
  "Best rated hotels",
  "Adventure tours",
  "Local experiences",
  "Food tours"
];

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [focused, setFocused] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboardOpen = window.innerHeight < window.screen.height * 0.8;
      setKeyboardOpen(isKeyboardOpen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[600px] p-0 gap-0 bg-[#121212] border-none rounded-3xl overflow-hidden"
        style={{
          position: "fixed",
          top: keyboardOpen ? "5%" : "10%", // Adjust dynamically
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="p-4">
          <div
            className={`flex items-center gap-3 bg-black rounded-2xl p-4 transition-all ${
              focused ? "ring-2 ring-[#37e5a5]" : "ring-1 ring-white/10"
            }`}
          >
            <Search className="w-5 h-5 text-white/60" />
            <input
              className="bg-transparent text-white placeholder:text-white/60 flex-1 outline-none"
              placeholder="Where to?"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>

        <div className="bg-black p-4">
          <h3 className="text-white/60 text-sm font-medium mb-3 px-4">Suggestions</h3>
          <div className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left text-white/80 hover:text-white hover:bg-white/5 px-4 py-2 rounded-xl transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
