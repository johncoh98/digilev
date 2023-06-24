import React,{ useState } from 'react';
import { Link } from 'react-scroll'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';
import Logo from '../../public/DigiLev-removebg-preview.png'
import { useTranslation } from 'react-i18next';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = ()=>{
    setMenuOpen(!menuOpen);
  }

  

  return (
    <nav className='w-full md:fixed my-4 md:my-0 h-0 md:h-16  z-10 '>
      <div className='flex bg-white  justify-end items-center px-4 h-full w-full 2xl:px-16'>
      <Image 
         src={Logo}
         height={280}
         alt='logo'
         className='left-[-40px] absolute'
         />
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex text-gray-800'>
            <Link to="home" smooth={true}  duration={500} offset={-80}>
              <li className='font-bold ml-10 uppercase hover:border-b hover:border-blue-500 hover:text-blue-500 text-xl cursor-pointer'>Home</li>
            </Link>
            <Link to="about" smooth={true}  duration={500} offset={-80}>
              <li className='font-bold ml-10 uppercase hover:border-b hover:border-blue-500 hover:text-blue-500 text-xl cursor-pointer'>About</li>
            </Link>
            <Link to='services' smooth={true}  duration={500} offset={-80}>
              <li className='font-bold ml-10 uppercase hover:border-b hover:border-blue-500 hover:text-blue-500 text-xl cursor-pointer'>Services</li>
            </Link>
            <Link to='contact' smooth={true}  duration={500} offset={-80}>
              <li className='font-bold ml-10 uppercase hover:border-b hover:border-blue-500 hover:text-blue-500 text-xl cursor-pointer'>Contact</li>
            </Link>
            
          </ul>
        </div>
        <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25}  color='blue' />
        </div>
      </div>
      <div className={
        menuOpen
        ?"fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-zinc-800 p-10 ease-in duration-500"
        :"fixed left-[100%] top-0 p-10 ease-in duration-500"
      }>
        <div className='flex w-full items-center justify-end'>
         <div onClick={handleNav} className='cursor-pointer'>
          <AiOutlineClose size={25} color="white" />
        </div>
        </div>
        <div className='flex-col py-4'>
          <ul className='text-zinc-50 '>
            <Link to="home" smooth={true}  duration={500} offset={-80}>
              <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer hover:text-blue-500'>Home</li>
            </Link>
            <Link to="about" smooth={true}  duration={500} offset={-80}>
              <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer hover:text-blue-500'>About</li>
            </Link>
            <Link to="services" smooth={true}  duration={500} offset={-80}>
            <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer hover:text-blue-500'>Services</li>
            </Link>
            <Link to="contact" smooth={true}  duration={500} offset={-80}>
            <li onClick={()=> setMenuOpen(false)} className='py-4 cursor-pointer hover:text-blue-500'>Contact</li>
            </Link>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar