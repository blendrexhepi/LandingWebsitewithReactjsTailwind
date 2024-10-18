import React from 'react'
import { PortofolioProjects } from '../constants'

const Portfolio = () => {
  return (
    <div className='max-w-7xl mx-auto border-b-2' id='portofolio'>
        <div className='mb-20'>
            <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12'>Portofolio</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {PortofolioProjects.map((portofolio) => (
                    <div key={portofolio.id} className='group relative overflow-hidden rounded-3xl mx-4'>
                        <img className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' src={portofolio.image}/>
                        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
                            <h3 className='mb-2 text-xl font-medium'>{portofolio.title}</h3>
                            <p className='mb-12 p-4'>{portofolio.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio