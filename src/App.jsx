import { useState } from "react"
import { Component } from "./component/post-component"
const App =  function(){
return(
   <div
      style={{
        display: "flex",
        justifyContent: "center",   // ✅ horizontal center
        alignItems: "center",       // optional vertical center feel
        flexDirection: "column",    // posts stack vertically
        background: "#636e72",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginTop: 100 }}>
        <Components  />
      </div>
    </div>
)
}



const Components = function(){
    const [posts, updatedPost] =  useState([])   // updatePost = [{name =bharat}.....]

    const addedPosts = posts.map((post, index) => 
      < Component 
        key={index}
       name={post.name}
       subtitle={post.subtitle}
       time={post.time}
       image={post.image}
       description={post.description}

      />
      // addposts = [<component> , <components/>]
    )
    function addPost(){

      updatedPost([...posts,{
        name:"Harkirat",
          subtitle:"20 followers" ,
          time:"2m ago",
          image:"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
          description:"What to know how to win big? Check out how these folks won $5600 in bounties."
        
      }])
       
    }


    return(
      <>
          <button onClick={addPost}> Add Post</button>
          {addedPosts}
      </>
    )
}


export default App;