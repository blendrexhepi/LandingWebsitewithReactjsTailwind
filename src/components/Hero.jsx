import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto border-b-2'>
        <div className='flex flex-col items-center my-20'>
            <h1 className='font-bold md:text-8xl p-2 sm:text-6xl text-4xl' >VASTUSPAZE</h1>
            <p className='font-medium lg:mb-6 mb-4 tracking-tighter'>
                Reimagine Your Space with Expert Renovation Services
            </p>
            <img className='h-[65vh] w-full object-cover rounded-2xl p-2' alt='hero' src='https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
        </div>
    </div>
  )
}

export default Hero