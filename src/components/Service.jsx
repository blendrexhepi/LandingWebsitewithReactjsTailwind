import React from 'react'
import { ServicesContent } from '../constants'

const Service = () => {
  return (
    <div className='max-w-7xl mx-auto border-b-2 ' id='services'>
        <div className='my-20'>
            <h2 className='text-center font-bold text-xl lg:text-3xl tracking-tight uppercase mb-20 '>Our Home Renovation Services</h2>
            {ServicesContent.map((service,index) => (
                <div key={index} className='mb-12 mx-4 flex flex-col lg:flex-row'>
                    <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                        <img className='w-full h-[50vh] object-cover rounded-lg' src={service.image}></img>
                    </div>
                    <div className={`lg:w-1/2 flex flex-col mt-7 ${
                        index % 2 === 0 ? 'lg:pl-12': 'lg:pr-12'
                    }`}>
                        <h3 className='text-xl lg:text-2xl font-medium mb-2'>{service.title}</h3>
                        <p className='mb-4 lg:tracking-wide text-lg lg;text-xl '>{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Service