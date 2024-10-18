import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Links } from '../constants';



const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='border-b-2 '>
        <div className='flex justify-between items-center max-w-7xl py-8'>
            <div className='font-bold pl-3'>
                <a href='#'>
                    VASTUSPAZE
                </a>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open Menu'} className='text-2xl pr-2'>
                    {isOpen ? <IoMdClose /> : <MdOutlineMenu/> }
                </button>
            </div>
            <div className='hidden md:flex space-x-8 pr-2'>
                {Links.map((link,index) => (
                    <a key={index} href={link.link} className='uppercase text-sm'>
                        {link.name}
                    </a>
                )) }
            </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
        {Links.map((link,index) => (
                    <a key={index} href={link.link} className='uppercase text-lg font-medium block py-2 tracking-wide'>
                         {link.name}
                    </a>
                )) }
        </div>
    </div>
  )
}

export default Navbar