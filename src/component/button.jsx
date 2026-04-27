import { useState , useEffect} from "react"


const Button = () => {
    const [count,updateCounter]=  useState(0);

    // guard our code from mounted
    useEffect( ()=>{
      console.log("first mount")
    const id = setInterval(()=>{
      console.log("from setInteraal")
        updateCounter(count => count+1)
    },1000)
     return ()=>{
      console.log("from clearInterval")
        clearInterval(id)
     }
            
       },[])
    //
  return (
    
    <div>
        <h1>{count}</h1>
      {/* <button onClick={updater}>updater Button</button> */}
      {/* <button onClick={resetButton}>reset Button</button> */}
      {/* <button onClick={decreser}>decreser Button</button> */} 
    </div>
  )
}

export default Button
