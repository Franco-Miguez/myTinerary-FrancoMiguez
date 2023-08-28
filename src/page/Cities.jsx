import Layout from '../layouts/Layout'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Cities() {

  const {cities,setCities} = useState()

  /*useEffect(() => {
    axios.get('http://localhost:8000/api/city?city=')
    .then(response => setCities(response.data.Cities))
    .catch(err => console.log(err))
  },[])
  */

  return (
    <>
        <section className='flex flex-col-reverse lg:flex-row min-h-screen items-center justify-center px-4 lg:px-20 gap-4
        bg-[url(https://images.pexels.com/photos/2162685/pexels-photo-2162685.jpeg)] bg-cover'>

        </section>
    </>
  )
}