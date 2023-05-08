import { Fragment, useEffect, useState } from "react"
import {addDoc, collection,onSnapshot,serverTimestamp,query,where, orderBy} from 'firebase/firestore'
import { async } from "@firebase/util"
import { db,auth } from "../firebase-config"
import Header from "./Header"
export const Chatdata=({room})=>{
    const [newMessage,setnewmessage]=useState('')
    const [messages,setmessages]=useState([])
    const messageRef=collection(db,'messages')
    useEffect(()=>{
        const querymessage=query(messageRef,where("room","==",room),orderBy("createdAt"))
        onSnapshot(querymessage,(snapshot)=>{
            let Messages=[]
            snapshot.forEach((doc)=>{
            Messages.push({...doc.data(),id:doc.id})
            })
            setmessages(Messages)
        })
    },[])
    const handlesubmit=async(e)=>{
        e.preventDefault()
        if (newMessage=='') return;
        await addDoc(messageRef,{
            text:newMessage,
            createdAt:serverTimestamp(),
            user:auth.currentUser.displayName,
            room,
        });
        setnewmessage("")
    }
return (
    <Fragment>
    <Header/>
    <div className="flex absolute w-full top-[8rem]  items-center justify-center">

    <div className="flex gap-2 overflow-y-scroll pb-[20rem] border-4 p-3 rounded-lg border-red-500 items-center justify-center">
        <div className="flex gap-2 w-full justify-between flex-col">{messages.map((message)=>(<div>
            <div className="flex w-fit px-10 rounded-xl flex-row ">
            <h1 className=" text-lg shadow-md mb-3 bg-violet-500 rounded-xl px-10 font-Verula text-white  font-semibold">{message.user}</h1>
            <h1 className="ml-1 mt-2 rounded-xl px-2">{message.text}</h1>
            </div>
            </div>)
                )}
                </div>
    <div className="absolute  bottom-0 ">
       <form onSubmit={handlesubmit} className="w-full">
        <input className="relative w-[30rem] p-3 border-l-2 border-t-2 rounded-xl bottom-1  focus:outline-none " placeholder="type your msg here"
        onChange={(e)=>setnewmessage(e.target.value)}
        value={newMessage}>

        </input>
        <button type='submit'>Send</button>
       </form>
    </div>
    </div>
    </div>
    </Fragment>
)
}