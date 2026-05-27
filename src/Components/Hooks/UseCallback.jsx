// import React, { useState } from "react";

// const Child = React.memo(({ onClick }) => {
//   console.log("Child re-rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// export default function UseCallback() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Button clicked");
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }


// 🔎 What happens now?

// Clicking Increase updates count

// Parent re-renders

// handleClick is NOT recreated

// Child receives the same function reference

// Child does NOT re-render ✅




import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // no dependencies

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}










