import Card from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Cities() {
  const [cities,setCities] = useState() 
  const [search, setSearch] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:8000/api/city?city=")
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
      
  },[])

  const setInputValue = (event)=>{
    setSearch(event.target.value)
  }

  return (
    <>
        <section className='flex flex-col min-h-screen items-center justify-center py-28 gap-4
        bg-[url(https://images.pexels.com/photos/2310648/pexels-photo-2310648.jpeg)] bg-cover w-full'>
          <form className='relative'>
            <input type="search" placeholder='City search' className='py-2 pr-12 pl-4 rounded-md outline-none' onKeyUp={setInputValue} />
            <button type='submit' className={`absolute top-0 right-0 bg-primary-dark p-2 rounded-r-md ${search? "animate-pulse-infinite" : ""}`}><FaSearch size={25} color='fff'/></button>
          </form>
          <h2 className='font-serif font-extrabold text-6xl drop-shadow-[2px_5px_5px_rgb(255,255,255)] text-primary'>Cities:</h2>
          <div className='flex flex-wrap justify-center gap-5 w-full'>
            {cities?.map((city)=> <Card key={city._id} background={city.img} title={city.city} subTitle={city.country}/>)}
          </div>
        </section>
    </>
  )
}