import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
            <div className='flex space-x-6 mb-2'>
                <a href='#'
                    target='_blank'
                >
                    <FaFacebook />
                </a>
                <a href='#'
                    target='_blank'
                >
                    <FaInstagram />
                </a>
                <a href='#'
                    target='_blank'
                >
                    <FaLinkedin />

                </a>
            </div>
            <p className='text-sm'>&copy; 2024 VastuSpaze. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer