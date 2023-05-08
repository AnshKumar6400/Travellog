import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import photo from "../assets/beachfile/beach.jpg"
import {BiSearch} from 'react-icons/bi'
import Header from './Header.jsx'
import {BsPerson} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {TfiClose} from 'react-icons/tfi'
import Image from './Image'

// [#000B1B]

function Home() {
  return(
    <div className='flex justify-center '>
      <div className='fixed'>
    <Header/>
    </div>
    <Image/>
    <h1 className=' absolute gap-2 rounded-full bg-white w-fit    items-center justify-center flex flex-row p-5 font-Verula  z-[20] text-2xl bottom-10'>

          Find your Place
          <form className='flex  flex-row bottom-2' >
          <input className='outline-none bg-transparent focus:border-b-2 align-middle hover:border-b-2 w-32 px-2 border-white'>
          </input>
          <button className='ham' >
            <BiSearch size={23}/>
          </button>
          </form>
          </h1>
        
       
    </div>
  )

}
export default Home;