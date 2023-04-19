import React, { useEffect, useState } from 'react'


const CameraProd = () => {

    const [data,setData] = useState([])
    let id=JSON.parse(localStorage.getItem("prodId"))
    // console.log(id)

    useEffect(()=>{

      async  function fetchData(){
          let res=await fetch(`https://digital-express.vercel.app/cameras/${id}`)
          let data= await res.json()
          console.log(data)
          setData(data)
        }

        fetchData()
    },[])
  return (
    <div> 
              {
        // data.map((el)=>{
        //   return(
            <div id="card" key={data.id} >

            <img src={data.img} alt="" />
            <h4>{data.name}</h4>
            <p>{data.price}</p>
            <p>{data.discount}</p>
            <p></p>
          </div>
        //   )
        // })
      } 
    </div>
  )
}

export default CameraProd