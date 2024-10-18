import React from 'react'
import { contactInfo } from '../constants'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";



const ContactUs = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='my-20'>
            <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12'>Contact Us</h2>
            <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>
                {contactInfo.text}
            </p>
            <div className='flex flex-col lg:flex-row justify-around mx-4'>
                <div className='flex mb-8 lg:mb-0'>
                    <FaPhoneAlt className='text-3xl mr-4' />
                    <div>
                    <p className='text-lg font-semibold'>{contactInfo.phone.label}</p>
                        <p className='text-lg text-neutral-600'>{contactInfo.phone.value}</p>
                    </div>
                </div>
                <div className='flex mb-8 lg:mb-0'>
                    <MdEmail  className='text-3xl mr-4' />
                    <div>
                    <p className='text-lg font-semibold'>{contactInfo.email.label}</p>
                        <p className='text-lg text-neutral-600'>{contactInfo.email.value}</p>
                    </div>
                </div>
                <div className='flex mb-8 lg:mb-0'>
                    <FaAddressBook className='text-3xl mr-4'  />
                    <div>
                    <p className='text-lg font-semibold'>{contactInfo.address.label}</p>
                        <p className='text-lg text-neutral-600'>{contactInfo.address.value}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs