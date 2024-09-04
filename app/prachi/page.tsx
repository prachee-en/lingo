import { Button } from "@/components/ui/button";
import { StarIcon, LockIcon } from "lucide-react";

export default function Component() {
  const levels = [
    { number: 1, status: "completed" },
    { number: 2, status: "completed" },
    { number: 3, status: "current" },
    { number: 4, status: "locked" },
    { number: 5, status: "locked" },
    { number: 6, status: "locked" },
    { number: 7, status: "locked" },
    { number: 8, status: "locked" },
  ];

  return (
    <div className="relative w-full h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-200 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
      {/* Dotted Line */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 400 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200,50 L200,1150"
          stroke="#FFD700"
          strokeWidth="5"
          strokeDasharray="10 15"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-20">
        {levels.map((level, index) => (
          <div
            key={level.number}
            className="relative flex justify-center items-center"
          >
            <Button
              variant={level.status === "current" ? "default" : "outline"}
              size="lg"
              className={`w-32 h-32 rounded-full text-3xl font-bold transition-all transform hover:scale-110 duration-300 ${
                level.status === "completed"
                  ? "bg-green-400 text-white hover:bg-green-500 hover:rotate-12 shadow-lg"
                  : level.status === "current"
                  ? "bg-pink-500 text-white hover:bg-pink-600 hover:rotate-12 shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } ${level.status === "current" ? "animate-bounce" : ""}`}
              disabled={level.status === "locked"}
            >
              {level.status === "completed" ? (
                <StarIcon className="h-10 w-10 animate-spin-slow text-yellow-300" />
              ) : level.status === "locked" ? (
                <LockIcon className="h-8 w-8" />
              ) : (
                level.number
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
