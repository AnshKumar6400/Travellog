import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography,Rating } from '@mui/material';


const Maps=({setcoordinates,setbounds,coordinates,places,setchildclicked})=> {
  
  return (

     <div className='absolute lg:mt-24 right-0 rounded-full mr-10 overflow-hidden  w-[70%]  z-[1] mt-20 h-[500px]'>
    <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyCd--c5UAGP9hrunrcW83kvrUTR7wiTGmE' }}
        defaultCenter={coordinates}
        defaultZoom={7}
        center={coordinates}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
            setcoordinates({lat:e.center.lat,lng:e.center.lng})
            setbounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})

        }}
        onChildClick={(child)=>{
        setchildclicked(child)
        }}
        
        >

          {
            places?.map((place,i)=>(
              <div 
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              className='bg-white cursor-pointer  items-center justify-center flex dlex-col'>
                <Paper elevation={3} className='bg-white' >
                  <div className='flex hover:scale-120 justify-center items-center text-xs' >
                    {place.name}
                  </div>
                  <img className=' w-[100px]'
                  src={place.photo?place.photo.images.large.url:'https://live.staticflickr.com/6048/6367974673_0b947d88c9.jpg'}
                  />
                  <Rating size='small' value={Number(place.rating)}></Rating>
                  
                
                </Paper>

              </div>
            ))
          }
        </GoogleMapReact>

     </div>

  
  )
}

export default Maps