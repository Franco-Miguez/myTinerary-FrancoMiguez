import Layout from '../layouts/Layout'
import Button from '../components/Button'
import PGrey from '../components/PGrey'
import Carousel from '../components/Carousel'

export default function Index() {
  return (
    <>
      <Layout>
        <section className='flex min-h-screen items-center justify-center px-20 gap-4'>
          <div className='p-4 flex flex-col gap-3'>
            <h3 className='font-bold text-3xl'>Find the perfect destination</h3>
            <PGrey className='text-dark opacity-60'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</PGrey>
            <Button>View More</Button>
          </div>
          <img
            src="https://img.freepik.com/foto-gratis/feliz-pareja-viajando-verano-bicicleta-mirando-mapa-turismo_285396-621.jpg"
            alt="two people see a map"
            className='object-cover h-1/6'/>
        </section>
        <section className='flex justify-center items-center min-h-screen'>
          <Carousel/>
        </section>
      </Layout>
    </>
  )
}