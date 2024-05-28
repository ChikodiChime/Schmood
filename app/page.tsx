import React from 'react'
import Image from 'next/image';
import {FaArrowRight} from 'react-icons/fa'


const Home = () => {
  return (
    <section className="py-10 h-screen">
      <div className="container">
        {/* <nav>
        <Image
        src="/logo.svg"
        alt="schmood logo"
        width={300}  // Specify width
        height={300} // Specify height
      />
        </nav> */}
        <div className="flex items-center w-full h-full justify-center ">
          <div className="left">
            <Image
            src="/boy.svg"
            alt="schmood logo"
            width={600}  // Specify width
            height={800}
            />
          </div>
          <div className="w-1/2 text-center space-y-3 flex flex-col items-center jusc'">
            <h1 className='salsa-regular text-6xl font-black text-[#E3694C]'>Can&apos;t figure out what to eat?</h1>
            <p className='text-xl '>We gatchu covered boo!</p>
            <a href='/Moods'  className='px-12 py-3 bg-[#E3694C] text-white flex items-center justify-center gap-2 cursor-pointer'>Next <FaArrowRight/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home