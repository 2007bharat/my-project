import { useState } from "react"

 function App(){
  return(
    <>
    <Component />
    <br />
    <Component />
    </>
  )
}



const Component =function(){
  const [notification , setNotification] = useState(0);

  function increment(){
    setNotification(notification+1)
  }
  return(
    <>
    <button onClick={increment}>Toogle Message</button>
    {notification}
    </>
  )
}

export default App;