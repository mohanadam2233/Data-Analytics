import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)    }


    return (
        <div className=" flex justify-around items-center h-24 px-4 max-[1240px]: max-auto text-white">
            <h1 className='W-full text-3xl font-bold text-[#00df9a]'>Data.</h1>
            <ul className="hidden md:flex">
                <li className='p-4' >Home</li>
                <li className='p-4' >Companany</li>
                <li className='p-4' >Resource</li>
                <li className='p-4' >Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} className='cursor-pointer'/> :
                    <AiOutlineMenu size={20} className='cursor-pointer'  />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='W-full text-3xl font-bold text-emerald-300 m-4'>React.</h1>
                <ul className="uppercase p-4">
                    <li className='p-4 border-b border-gray-600' >Companany</li>
                    <li className='p-4 border-b border-gray-600' >Home</li>
                    <li className='p-4 border-b border-gray-600' >Resource</li>
                    <li className='p-4 border-b border-gray-600' >Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
