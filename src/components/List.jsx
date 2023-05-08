import React from 'react'
import {  CircularProgress,Box,InputLabel,Card,CardMedia,MenuItem,FormControl,Select, CardContent, Typography, Chip } from '@mui/material'
import mountain from '../assets/mountain_files/mountain.jpg'
import {FaAddressBook} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
function List({places,childclicked,type,settype,setrating,rating}) {
       
    
    console.log({childclicked})
  return (

    <div className=' h-full  absolute w-[500px] bg-white  z-[9] shadow-lg left-0 max-h-full '>
        <ul className='flex gap-3 flex-col  items-center  justify-center font-semibold'>
        <li className='mt-[60px]  sm:mt-[65px] lg:mt-[89px] flex justify-center p-6  text-4xl w-full bg-teal-400   font-Poppins '>
            Around You
        </li>
        </ul>
        <div className='flex flex-row'>
    <FormControl variant="standard"  sx={{ m: 1, minWidth: 120 }} className='  outline-none  w-[80%]'>
  <InputLabel className=' outline-0' >Type</InputLabel>
  <Select
    value={type}
    onChange={(e)=>{settype(e.target.value)}}    
  >
    <MenuItem value={'restaurants'}>Restaurants</MenuItem>
    <MenuItem value={'hotels'}>Hotels</MenuItem>
    <MenuItem value={'attractions'}>Attractions</MenuItem>
  </Select>
</FormControl>
<FormControl variant="standard"  sx={{ m: 1, minWidth: 120 }}  className=' w-[80%] outline-none  w-full'>
  <InputLabel className=' outline-0' >Ratings</InputLabel>
  <Select
    value={rating}
    onChange={(e)=>{setrating(e.target.value)}}    
  >
    <MenuItem value={0}>All</MenuItem>
    <MenuItem value={3}>Above 3.0</MenuItem>
    <MenuItem value={4}>Above 4.0</MenuItem>
    <MenuItem value={4.5}>Above 4..5</MenuItem>
  </Select>
</FormControl>
</div>
<div className='flex flex-col h-[100%] overflow-y-scroll'>
{places?.map((x)=>{
        return(
            <div className='flex px-2 my-1 gap-5  shadow-[0 0 0 0] flex-col'>
            <Card elevation={6} className=''>
            <CardMedia
              style={{height:250,fontSize:30}}
              image={x.photo?x.photo.images.large.url:'https://live.staticflickr.com/6048/6367974673_0b947d88c9.jpg'}
              title={x.name} classname=' text-4xl'/>
              <CardContent>
                <h1 className='text-xl font-medium font-Verula'>{x.name}</h1>
                <Box display='flex' justifyContent='space-between'>
                  <Typography variant='subtitle1'>Price</Typography>
                  <Typography glutterBottom variant="subtitle1">{x.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                  <Typography variant='subtitle1'>Ranking</Typography>
                  <Typography glutterBottom variant="subtitle1">{x.ranking}</Typography>
                  </Box>
                {x?.awards?.map((award)=>(
                  <Box display='flex' justify-content='space-between'>
                    <img src={award.images.small} alt={award.display_name}></img>
                  </Box>
                  ))}
                {x?.cuisine?.map(({name})=>(
                  <Chip key={name} size="small" label={name} className='mr-2 mb-2'></Chip>
                ))
                
                }
                {
                  x?.address &&(
                    <Typography glutterBottom variant='subtitle2' className='flex gap-10 justify-between'>
                   <FaAddressBook size={20}/>
                       {x.address}
                    </Typography>
                  )
                }
               {
                  x?.phone &&(
                    <Typography glutterBottom variant='subtitle2' className='flex gap-5 justify-between'>
                       <BsTelephoneFill />
                       {x.phone}
                    </Typography>
                  )
                }
                
             
              </CardContent>
           
          </Card>
          
            </div>
           
  )
})}
 </div>






        </div>
  )
}

export default List