
import { Link } from 'react-router-dom'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { MdFavorite } from 'react-icons/md'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'

import avatarImg from "../assets/avatar.png"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {



    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    
    const cartItems = useSelector((state)=>state.cart.cartItems)
   
    const {currentUser, logout} = useAuth();

    const hangleLogOut = ()=>{
        logout()
    }
    
    const navigation=[
        {
            name:'Dashboard',href:'/dashboard'
        },
        {
            name:'Orders',href:'/orders'
        },
        {
            name:'Cart Page',href:'/cart'
        },
        {
            name:'Check-Out',href:'/checkout'
        }
    ] 

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className="flex justify-between items-center ">
        {/* Left Side */}
        <div className='flex items-center md:gap-16 gap-4 ' >
            <Link to="/" ><HiOutlineBars3CenterLeft size={32} /></Link>

            {/* Search Input */}
        <div className='relative sm:w-72  w-45 space-x-2'>
        <CiSearch  className="absolute inline-block left-2 inset-y-1/2 transform -translate-y-1/2"/> 
        <input type="text"  placeholder='Search Here' className="bg-[#C0C0C0]
        w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>   
        </div>
        </div>

        {/* Right Side */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>
            <div >
                {currentUser ? <>
                <button onClick={()=>setIsDropdownOpen(!isDropdownOpen)} className='relative '>
                   <img src={avatarImg} alt="avatarImage" className={`size-7 rounded-full ${currentUser ?"ring-2 ring-blue-500":''}`} /> 
                </button>
            {/* Show Drop Down */}
            {
                isDropdownOpen &&(
                    <div className='absolute mt-2 left-0  w-40 bg-gray-100 shadow-lg rounded-md z-40'>
                        <ul className='py-2'>
                            {
                                navigation.map((item)=>(
                                    <li key={item.name} onClick={()=>setIsDropdownOpen(false)} >
                                        <Link className='block  px-4 py-2 text-md hover:bg-[#C0C0C0]' to={item.href}>{item.name}</Link>
                                    </li>
                                ))
                            } 
                            <li>
                                <button onClick={hangleLogOut} className='block w-full text-left px-4 py-2 text-md hover:bg-[#C0C0C0]'>Logout</button>
                            </li>
                        </ul>
                    </div>
                )
            }
                
                </>: <Link  to="/login"><CiUser className='size-6' /></Link>}
            </div>
            
            <button className=' relative hidden sm:flex p-1 sm:px-6 items-center rounded-sm md:flex'>
                
                
                <MdFavorite size={28}   />
            </button>
            <Link to="/cart" className='bg-primary/80 hover:bg-primary p-1 sm:px-6 px-2 flex items-center  rounded-sm'>
            <CiShoppingCart size={32} />
            {
                cartItems.length > 0  ? <span className='text-lg font-semibold sm:ml-1 text-favorite '>{cartItems.length}</span>: <span className='text-lg font-semibold sm:ml-1 text-favorite '>0</span>
            }
            
            </Link>
            
        </div>
        </nav></header>
  )
}

export default Navbar