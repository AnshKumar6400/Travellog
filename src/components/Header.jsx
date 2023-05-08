import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import photo from "../assets/beachfile/beach.jpg"
import {BiSearch} from 'react-icons/bi'
import Image from './Image'

import {BsPerson} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {TfiClose} from 'react-icons/tfi'

function Header(){

    const [sidebar,setsidebar]=React.useState(false)
      function disappear(){
        setsidebar(!sidebar)
        document.getElementById('ham').classList.add('hidden')
      }
      function appear(){
        setsidebar(!sidebar)
        document.getElementById('ham').classList.remove('hidden')
    
      }
      const vw=window.innerWidth;
      console.log(vw)
      const vh=window.innerHeight;
    
      return(
        <div className=' flex  justify-center  shadow-lg '>
        <div className='flex fixed flex-row  w-[100%] p-8 rounded-sm bg-white shadow-lg   items-center  justify-center text-black  - px-10 z-[10]'>
          <p className='absolute left-3 top-3 font-Poppins font-[800] text-5xl flex flex-row   mx-5'>SOAR</p>
          <div className='flex  flex-row font-Verula   border-black font-bold px-10 w-[50%] justify-center items-center align-middle'>
            <ul className='flex transition max-md:hidden  duration-[2s] flex-row gap-7'>
              <li>
            <Link to='/home' className='hover:border-b-2 transition delay-[1000ms] duration-1000 border-black'>Home</Link>
            </li>
            <li>
            <Link to='/Explore' className='hover:border-b-2  border-black'>Explore</Link>
            </li>
            <li>
            <button className='hover:border-b-2  border-black'>Blogs</button>
            </li>
            <li>
            <Link to='/Places' className='hover:border-b-2  border-black'>Places</Link>
            </li>
            <li>
            <button className='hover:border-b-2  border-black'>Gallery</button>
            </li>
           
            <li>
            <button className='absolute right-10'>   <BsPerson size={23}/></button>
            </li>
            </ul>
            
            <button onClick={disappear} id='ham' className='absolute  md:hidden  right-10 '>
                <RxHamburgerMenu size={23}/>
            </button>
          </div>
          
          </div>
       
          { sidebar?
                <div className='z-20 font-boldx w-[40%] h-full absolute bg-white shadow-xl top-0 right-0 '>
                <button className='z-[100] right-4 absolute bottom-0 '><TfiClose size={23}/></button>
                <ul className=' flex  flex-col font-Verula  bg items-center justify-center  '>
                    <li className='h-20 text-4xl bg-[#9ce0e0]  w-full px-3 flex  font-Poppins  items-center justify-center text-black  '>
                      <span className=''>Hi There!</span> <button className='z-[100] right-10 font-bold  absolute top-4  '><TfiClose  onClick={appear}  color='black' size={23}/></button>
                    </li>
                    <li className='h-10 hover:scale-125 text-xl w-full px-3 flex  items-center justify-center text-black'>
                      <button>Home </button>
                    </li>
                    <li className='h-10 hover:scale-125  hover:text-black  text-xl w-full px-3 flex  items-center justify-center text-black'>
                      Places
                    </li>
                    <li className='h-10 hover:scale-125  hover:text-black  text-xl w-full px-3 flex  items-center justify-center text-black '>
                      Blog
                    </li>
                    <li className='h-10 hover:scale-125 hover:text-black text-xl w-full px-3 flex  items-center justify-center text-black'>
                      Explore 
                    </li>
                    <li className='h-10 hover:scale-125 hover:text-black rounded-bl-lg text-xl w-full px-3 flex  items-center justify-center text-black'>
                      Gallery
                    </li>
          
                </ul>
                <ul>
          
                </ul>
              </div>
          :null}
          </div>
      )
          }
export default Header