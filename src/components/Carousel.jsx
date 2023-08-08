import {useState} from 'react'
import data from "../assets/data.json";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function Carousel() {
  const [position,setPosition] = useState(0)
  const next = () => {data.length % 4+1 >= position ?
                        setPosition(position + 1):
                        setPosition(0)}
  const back = () => {position == 0?
                        setPosition(data.length/4-1):
                        setPosition(position-1)
                      console.log(position)}
  return (
  <div className="grid grid-rows-2 grid-cols-2 place-content-center gap-2 w-[19rem] md:w-[27rem] xl:w-[40.5rem] relative">
      {data.slice(position*4,position*4+4).map((info, key)=>{
        return (
          <div key={key} className="relative w-36 md:w-52 xl:w-80">
            <img src={info.img} alt={info.city} className="w-36 h-36 md:w-52 md:h-52 xl:w-80 xl:h-80 object-cover rounded-md"/>
            <div className="bg-dark bg-opacity-80 absolute z-10 left-0 bottom-0 w-36 md:w-52 xl:w-80 text-white text-center rounded-b-md">
              <h3 className="text-lg font-bold">{info.city}</h3>
              <h4 className="text-sm opacity-50">{info.country}</h4>
            </div>
          </div>
        )})}
        <button onClick={back} className="absolute left-0 z-20 bg-white h-full w-10 opacity-0 hover:opacity-100 hover:bg-opacity-20 flex items-center justify-center transition-all duration-500"><BsFillArrowLeftCircleFill color="#1c1c1c"/></button>
        <button onClick={next} className="absolute right-0 z-20 bg-white h-full w-10 opacity-0 hover:opacity-100 hover:bg-opacity-20 flex items-center justify-center transition-all duration-500"><BsFillArrowRightCircleFill color="#1c1c1c"/></button>
    </div>
  )
}
