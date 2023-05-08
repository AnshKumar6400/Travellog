import React from 'react'
import {auth,provider} from '../firebase-config.js'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
import { Chatdata } from './Chatdata.jsx'
import Header from './Header.jsx'
import photo from '../assets/beachfile/beach.jpg'
const cookie=new Cookies()

const Chat=()=> {
    const [isAuth,setisAuth]=React.useState(cookie.get('auth-token'))
    const [room,setroom]=React.useState('')
    const roomInputref=React.useRef(null)
    const signin= async()=>{
    try{
    const result=   await signInWithPopup(auth,provider)
    cookie.set('auth-token',result.user.refreshToken)
    setisAuth(true)
    } catch(err){
        console.log(err)
    }
    }
    if (!isAuth){
  return (
    <div >
    <Header/>
    <div className='flex items-center m-3 justify-center h-[100vh]'>
    <div className='bg-white h-full  gap-5 w-[95%]  justify-center  items-center shadow-lg flex flex-col font-Verula'>
     <div> <p className=' font-Poppins text-4xl text-red-900'> Sign in with google</p></div> 
      <div><button onClick={signin} className='rounded-lg border-b-[10px] hover:border-[0px] border-red-400 p-3 bg-red-100'>Sign in</button></div> 

    </div>
    </div>
    </div>
    
  )
    }
    return <div>
        {
            room?(<Chatdata room={room}/>):

          (  <div>
            <Header/>
            <img className='w-full overflow-hidden' src={photo}>
            </img>
            <div className='h-[100vh]'>
                <h1></h1>
          <div className='flex gap-3 overflow-y-hidden absolute z-[100] top-0 w-full items-center h-[100vh] justify-center flex-col'>
            <span className='text-6xl text-white absolute top-[10rem] font-semibold'>Chat With Community!</span>
            <div className='flex flex-row'>
                <label className='flex justify-center font-Verula text-3xl font-semibold  items-center'>
                    Enter room name
                </label>
          
                <input className='border-[2px] px-3 w-[150px] m-2 rounded-xl' ref={roomInputref}/>
                </div>
                <button className='bg-blue-900 py-2 px-4 text-white rounded-full' onClick={()=>setroom(roomInputref.current.value)}>Enter Chat</button>

            </div>
            </div>
            </div>)
        }
    </div>
}

export default Chat