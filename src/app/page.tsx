"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [bgColor, setBgColor] = useState("#ffffff")

  const handleClick = () => {
    const randomColor = Math.floor(Math.random() * 16_777_216)
      .toString(16)
      .padStart(6, "0")
    setBgColor(`#${randomColor}`)
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  const number = 6581
  const transformedText = number.toString().padStart(16, "*")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-slate-800 text-slate-100 text-center rounded-2xl shadow-xl p-6 mb-4">
        <h1 className=" text-2xl font-bold p-4 rounded-lg">
          Random{" "}
          <span className="bg-gradient-to-r from-pink-300 to-sky-300 bg-clip-text text-transparent">
            Color Generator
          </span>
        </h1>
        <p>
          Background Color:&nbsp;
          <span className="font-bold uppercase">{bgColor}</span>
        </p>
      </div>

      <button
        className="bg-slate-800 text-slate-100 text-center border-2 cursor-pointer hover:scale-105 font-semibold transition-transform p-2 rounded-lg"
        onClick={handleClick}
      >
        Generate a new color {transformedText}
      </button>
      <h4 className="text-8xl font-bold bg-gradient-to-tr from-red-400 to-sky-500 bg-clip-text text-transparent">
        HENRY
      </h4>
    </div>
  )
}
