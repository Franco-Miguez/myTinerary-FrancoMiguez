import { useState } from "react"

export default function Card({background, title, subTitle}){

  const [hover,setHover] = useState(false)

  return(
    <section className="relative" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
      <img src={background+ "?auto=compress&cs=tinysrgb&w=600"} alt={title} 
        className={`object-cover w-96 h-52 rounded-md shadow-xl ${hover? "saturate-100": "saturate-50"}`}/>
      <div className={`absolute bottom-0 bg-dark bg-opacity-80 w-full py-2 text-white text-center
      transition-opacity duration-500 rounded-md
                      ${hover? "opacity-100": "opacity-0"}
      `}>
        <h3 className="font-bold text-lg">{title}</h3>
        <h4 className="text-xs">{subTitle}</h4>
      </div>
    </section>
  )
}