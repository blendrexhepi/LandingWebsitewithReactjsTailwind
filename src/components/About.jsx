import React from 'react'

const About = () => {
  return (
    <div className='max-w-6xl mx-auto border-b-2 mt-10 p-4' id='about'>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-7'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-3xl font-bold text-gray-900 mb-10'>About Us</h1>
            <p >At VASTUSPAZE, we specialize in transforming homes into functional, beautiful living spaces. With over 10 years of experience, we are committed to delivering high-quality renovations tailored to your needs.</p>
            <ul className='font-medium mt-10 space-y-5'>
           <li>- Share how the company was founded and what inspired its creation.</li> 
<li>- Talk about the journey, including challenges and milestones.</li>
<li>- Humanize your brand by sharing your motivation and passion.</li>
            </ul>
            <button className='bg-black text-white mx-auto p-3 mt-5 hover:text-orange-300'>See More</button>
         </div> 
         <div>
            <img className='rounded' src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>    
        </div> 
    </div>
    </div>
  )
}

export default About