'use client'

import { Button } from "@/components/ui/button"
import { StarIcon, LockIcon } from "lucide-react"

export function LevelPath() {
  const levels = [
    { number: 1, status: 'completed' },
    { number: 2, status: 'completed' },
    { number: 3, status: 'current' },
    { number: 4, status: 'locked' },
    { number: 5, status: 'locked' },
    { number: 6, status: 'locked' },
    { number: 7, status: 'locked' },
    { number: 8, status: 'locked' },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl shadow-lg">
      <div className="relative">
        <svg className="w-full h-auto" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,50 Q100,100 200,150 T350,250 Q300,350 200,400 T50,500" stroke="#E5E7EB" strokeWidth="20" strokeLinecap="round" fill="none" />
        </svg>
        <div className="absolute inset-0 flex flex-wrap justify-between items-center">
          {levels.map((level, index) => (
            <div key={level.number} className={`w-1/4 p-2 flex justify-center items-center ${index % 2 === 0 ? 'translate-y-16' : ''}`}>
              <Button
                variant={level.status === 'current' ? 'default' : 'outline'}
                size="lg"
                className={`w-20 h-20 rounded-full text-2xl font-bold ${
                  level.status === 'completed' ? 'bg-green-500 text-white hover:bg-green-600' :
                  level.status === 'current' ? 'bg-pink-500 text-white hover:bg-pink-600' :
                  'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={level.status === 'locked'}
              >
                {level.status === 'completed' ? (
                  <StarIcon className="h-10 w-10" />
                ) : level.status === 'locked' ? (
                  <LockIcon className="h-8 w-8" />
                ) : (
                  level.number
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}