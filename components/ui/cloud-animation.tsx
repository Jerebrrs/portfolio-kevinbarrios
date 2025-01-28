"use client"

import { DiJava, DiJavascript } from "react-icons/di"
import { SiSpringboot, SiNestjs, SiTypescript } from "react-icons/si"

const skills = [
  { Icon: DiJava, color: "text-blue-600", size: "text-5xl", position: "bottom-40 left-16" },
  { Icon: DiJavascript, color: "text-yellow-400", size: "text-3xl", position: "top-1/4 right-10" },
  { Icon: SiSpringboot, color: "text-green-500", size: "text-2xl", position: "bottom-16 left-32" },
  { Icon: SiNestjs, color: "text-red-500", size: "text-4xl", position: "bottom-16 right-1/4" },
  { Icon: SiTypescript, color: "text-blue-400", size: "text-4xl", position: "bottom-48 right-10" },
]

export function CloudAnimation() {
  return (
    <div className="absolute inset-0">
      {skills.map(({ Icon, color, size, position }, index) => (
        <div key={index} className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2 left`}>
          <div className="p-4 backdrop-blur-xl rounded-full shadow-2xl">
            <Icon className={`${color} ${size}`} />
          </div>
        </div>
      ))}
    </div>
  )
}

