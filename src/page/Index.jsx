import Layout from '../layouts/Layout'
import Button from '../components/Button'
import PGrey from '../components/PGrey'
import Carousel from '../components/Carousel'

export default function Index() {
  return (
    <>
      <Layout>
        <section className='flex flex-col-reverse lg:flex-row min-h-screen items-center justify-center px-4 lg:px-20 gap-4
        bg-[url(https://images.pexels.com/photos/2162685/pexels-photo-2162685.jpeg)] bg-cover'>
          <div className='p-4 flex flex-col gap-3 bg-white rounded-md bg-opacity-50'>
            <h3 className='font-bold text-3xl'>Find the perfect destination</h3>
            <PGrey className='text-dark opacity-60'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</PGrey>
            <Button>View More</Button>
          </div>
          <img
            src="https://img.freepik.com/foto-gratis/feliz-pareja-viajando-verano-bicicleta-mirando-mapa-turismo_285396-621.jpg"
            alt="two people see a map"
            className='object-cover  md:w-5/12 rounded-xl shadow- xl'/>
        </section>
        <section className='flex justify-center items-center min-h-screen xl:py-8
        bg-[url(https://img.freepik.com/foto-gratis/ala-avion-ciudad-fondo_1232-1308.jpg?w=740&t=st=1691500621~exp=1691501221~hmac=1284f85a7870e85ae42e2074ab8c6e231b3fd7827463da0ab7a77838cee704ae)] bg-cover'>
          <Carousel/>
        </section>
      </Layout>
    </>
  )
}