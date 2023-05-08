import axios from "axios";

const getplacedata= async(type,sw,ne)=>{
try{


    const {data:{data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      //b7dac7b09bmshe42d1c2d59b62f9p1e6219jsne9e32869d825
      //'54e027ba1dmsh9c5fef400d056f6p1bb7a0jsn694a850f14b7'
      // 021e2391d6msh3feb07a1c2090edp1f9e70jsn49c10cabdf92
      // 088c1be8f7msh415e8efbc4d5af0p1f7ebbjsnf970b5bf4dfd
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key':  '088c1be8f7msh415e8efbc4d5af0p1f7ebbjsnf970b5bf4dfd',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    // console.log(data)
    return data
  
    }
catch (error) {
    console.log('error')
}
}
export {getplacedata}