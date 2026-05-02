// function App(){
//   return(
//     <div style={{display: "flex", justifyContent :"center" , background:"#636e72"}}>
//     <div style={{ height:"100vh", marginTop : 100 }}>  
//           <Component 
//           name={"Harkirat"}
//           subtitle={"20 followers"} 
//           time={"2m ago"}
//           image={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//           description={"What to know how to win big? Check out how these folks won $5600 in bounties."}
//           />
//           <br />
//           <Component 
//           name={"Ramna"}
//           subtitle={"Promoted"} 
//           // time={"2m ago"}
//           image={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//           description={"How to get hired in 2026? I lost my job in 2023, this is the roadmap I followed to get a job"}          
//           />
//           <br />
//           <Component />
          
        
//   </div>
//     </div>
//   )
// } 
// //  export default App;



 export function Component({ name, subtitle, time, image, description }) {
  return (
    <div
      style={{
        background: "white",
        width: 300,
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 2,
        padding: 30,
        height: "10vh",
        margin: "10px auto",   // ✅ center horizontally
      }}
    >
      <div style={{ display: "flex" }}>
        <img style={{ height: 40, width: 40 }} src={image} alt="user-img" />

        <div style={{ marginLeft: 20 }}>
          <b>{name}</b>
          <div>{subtitle}</div>

          {time !== undefined && (
            <div style={{ display: "flex" }}>
              <span>{time}</span>
              <img
                style={{ height: 17, width: 17, marginLeft: 10 }}
                src="https://thf.bing.com/th/id/OIP.la16pMQi5pjQmik3lkR1JAHaHa"
                alt="clock"
              />
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 20 }}>{description}</div>
    </div>
  );
}