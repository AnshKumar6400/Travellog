import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";
import Header from "./components/Home";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Maps from "./components/Maps";
import { getplacedata } from "./api";
import List from "./components/List";
import Chat from "./components/Chat";
import React from "react";
import Places from "./components/Places";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies= new Cookies()

const App=()=>{
  const [places,setplaces]=useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])
  const [coordinates,setcoordinates]=React.useState({ lat:0,lng:0})
  const [bounds,setbounds]=useState({ne:0,sw:0})
  const [childclicked,setchildclicked]=useState(null)
  const [type,settype]=React.useState('restaurants')
    const [rating,setrating]=React.useState('')
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
          setcoordinates({lat:latitude,lng:longitude})
      })
  },[])

  useEffect(()=>{

      // console.log(coordinates,bounds)
    getplacedata(type,bounds.ne,bounds.sw).then((data)=>{
      console.log(data)
      setplaces(data)
      
    })
  },[type,coordinates,bounds])

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>} >
    </Route>
    <Route path="/home" element={<Home/>} >
      </Route>
    <Route path="/Explore" element={
      <div>
    <Explore/>
  
    <Maps setcoordinates={setcoordinates}
        setbounds={setbounds}
        coordinates={coordinates}
        places={places}
        setchildclicked={setchildclicked}
       
    />
     <List places={places}
     childclicked={childclicked}
     type={type}
     settype={settype}
     rating={rating}
     setrating={setrating}

     />
     {console.log(places)}
    </div>
  } >
      </Route>
   
    <Route path="/Maps" element={<Maps/>} >

      </Route>
      <Route path="/Places" element={<Places/>} >

      </Route>
      <Route path="/Chat" element={<Chat/>} >

      </Route>
    </Routes>
    
    </Router>
  )
};

export default App;
