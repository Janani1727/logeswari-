import React, { useEffect, useState } from 'react'
import "../styles/camera.css"



const Camera = () => {

    const [data,setData] = useState([])

    useEffect(()=>{

      async  function fetchData(){
          let res=await fetch(`https://digital-express.vercel.app/cameras`)
          let data= await res.json()
          // console.log(data)
          setData(data)
        }

        fetchData()
    },[])

    const addtocart=(id)=>{
      // console.log(id)
      localStorage.setItem('prodId', JSON.stringify(id))
    
    }

  return (

  <div id="main">
    <div id='left'></div>

    <div id='right'>

       {
        data.map((el)=>{
          return(
            <div id="card" key={el.id} onClick={()=>addtocart(el.id)}>

            <img src={el.img} alt="" />
            <h4>{el.name}</h4>
            <p>{el.price}</p>
            <p>{el.discount}</p>
            <p></p>
          </div>
          )
        })
      } 

   
    </div>
  </div>
  )
}

export default Camera