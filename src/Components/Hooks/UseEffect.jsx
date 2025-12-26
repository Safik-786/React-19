import React, { useState, useEffect } from "react";



const DependencyExample = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");


  // 🧠 Effect that depends on `count` 

  useEffect(
    () => {
      console.log("🎯 useEffect ran because COUNT changed!");
      return () => {
        console.log("🧹 Cleanup before COUNT effect runs again or unmount");
      };
    },

    [count]); // <-- only runs when count changes 

  // 🧠 Effect that depends on `text` 

  useEffect(() => {
    console.log("✏️ useEffect ran because TEXT changed!");
    return () => {
      console.log("🧹 Cleanup before TEXT effect runs again or unmount");
    };

  }, [text]); // <-- only runs when text changes 


  useEffect(() => {
    console.log("this is for the empty dependency []")
  }, [])

  // 🧠 Effect with multiple dependencies 

  useEffect(() => {
    console.log("🚀 useEffect ran because COUNT or TEXT changed!");
  }, [count, text]);


  useEffect(() => {
    console.log("Use effect without dependenc...")
  })


  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h2>Count: {count}</h2>

      <button className="border p-2" onClick={() => setCount(count + 1)}>Increment Count</button>



      <h2>Text: {text}</h2>

      <button className="border p-2" onClick={() => setText(text === "Hello" ? "Hi" : "Hello")}>

        Toggle Text

      </button>

    </div>

  );

};




function UseConditionalRendering() {
  const [display, setDisplay] = useState(false)


  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Component</button>
      {
        display && (
          <DependencyExample />
        )
      }

    </div>
  )
}

export default UseConditionalRendering


