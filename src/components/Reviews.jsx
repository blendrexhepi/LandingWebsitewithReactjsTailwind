import React from 'react'
import { Reviewss } from '../constants'

const Reviews = () => {
  return (
    <div className='max-w-7xl mx-auto border-b-2 ' id='reviews'>
        <div className='my-20'>
            <h2 className='text-lg lg:text-3xl tracking-tight text-center uppercase mb-12'>Reviews</h2>
            <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>{Reviewss.introText}</p>
        
        <div className='flex flex-wrap justify-center'>
            {Reviewss.reviews.map((review,index ) => (
                <div className='mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs' key={index}>
                    <p className='mb-4'>{review.review}</p>
                    <div className='flex items-center mt-4'>
                        <img src={review.image} className='w-12 h-12 rounded-full mr-4'/>
                        <div>
                            <p className='text-sm font-bold'>{review.name}</p>
                            <p className='text-sm text-neutral-500'>{review.title}</p>

                        </div>

                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Reviews