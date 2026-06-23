import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (


    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      
      {/* Card Container */}
      <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-slate-700 transform transition duration-300 hover:scale-105">
        
        {/* Profile Header (Avatar + Name) */}
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-md">
            HL
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-wide">Hawk Logix</h2>
            <p className="text-cyan-400 text-sm font-medium">React Developer</p>
          </div>
        </div>

        {/* Description Section */}
        <p className="mt-4 text-slate-400 text-sm leading-relaxed">
          Building modern web applications with React and Tailwind CSS. No manual CSS files, just pure utility classes!
        </p>

        {/* Skills Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="text-xs bg-slate-700 text-cyan-400 px-3 py-1 rounded-full font-medium">
            #ReactJS
          </span>
          <span className="text-xs bg-slate-700 text-cyan-400 px-3 py-1 rounded-full font-medium">
            #TailwindCSS
          </span>
          <span className="text-xs bg-slate-700 text-cyan-400 px-3 py-1 rounded-full font-medium">
            #Vite
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2.5 px-4 rounded-xl transition duration-200 shadow-lg shadow-cyan-500/20">
            Follow Profile
          </button>
        </div>

      </div>

    </div>


  )
}

export default App


