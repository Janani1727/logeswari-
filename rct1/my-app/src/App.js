import React from 'react'
import Navbar from './components/navbar'
import AllRoutes from './Routes/AllRoutes'



const App = () => {
  return (
    <div>
    
      <Navbar />
      
      <AllRoutes />

    
    </div>
  )
}

export default App



// const [count, setCount] = useState(0);

  // const [name, setName] = useState("loge");

  // function handleAdd(){
  //   setCount(count+1)
  // }

  // function handleMinus(){
  //   setCount(count-1)
  // }



  // <div>
  //       <h1>the count is {count}</h1>

  //       <button onClick={() => setCount(count + 1)}>Add</button>
  //       <button onClick={() => setCount(count - 1)}>minus</button>
  //     </div> 

  //      <div>

  //       <h1>the name is {name}</h1>

  //       <button  onClick={() =>setName("Janani")}>change</button>
  //     </div> 
      
  //    <div>
  //       <h1>the count is {count}</h1>

  //       <button onClick={handleAdd}>Add</button>
  //      <button onClick={handleMinus}>minus</button>
  //     </div>  