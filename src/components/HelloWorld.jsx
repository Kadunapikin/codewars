import React from 'react'

const HelloWorld = () => {
    // Using the function keywords, write a function to display Hello World! as a string
    function helloWorld(){
        var str="Hello World!";
        console.log(str);
      }

  return (
    <div>
        <h1>CodeWars Practice</h1>
        <h2>{helloWorld()}</h2>
    </div>
  )
}

export default HelloWorld