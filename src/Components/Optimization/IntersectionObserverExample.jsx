// import React, { useEffect, useRef } from "react";

// function IntersectionObserverComponent() {
//   const boxRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];

//         // When box enters viewport
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       {
//         threshold: 0.2 // fire when 20% visible
//       }
//     );

//     if (boxRef.current) {
//       observer.observe(boxRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div style={{ height: "150vh", padding: "40px" }}>
//       <h2 className="text-green-600">Scroll down to see the box fade in</h2>

//       <div
//         ref={boxRef}
//         className=" border bg-green-300"
//         // style={{
//         //   width: "200px",
//         //   height: "200px",
//         //   background: "green",
//         //   marginTop: "200px",
//         //   opacity: 0,
//         //   transition: "opacity 1s ease-out"
//         // }}
//       >
//         I fade in when visible
//       </div>
//     </div>
//   );
// }

// export default IntersectionObserverComponent;
