// // import React, { useEffect, useState } from 'react';

// // function DemoApp() {
// //     const [userData, setUserData] = useState([]);

// //     const [form, setForm] = useState({
// //         title: "",
// //         completed: false
// //     });

// //     // -----------------------------------
// //     // HANDLE INPUT CHANGE
// //     // -----------------------------------
// //     const handleChange = (e) => {
// //         const { name, type, value, checked } = e.target;

// //         setForm((prev) => ({
// //             ...prev,
// //             [name]: type === "checkbox" ? checked : value
// //         }));
// //     };

// //     // -----------------------------------
// //     // ADD DATA LOCALLY
// //     // -----------------------------------
// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         const newData = {
// //             userId: Date.now(),          // unique ID
// //             title: form.title,
// //             completed: form.completed
// //         };

// //         setUserData((prev) => [newData, ...prev]);

// //         fetch("https://jsonplaceholder.typicode.com/todos", {
// //             method: "POST",
// //             body: JSON.stringify(newData),
// //             headers: {
// //                 "Content-type": "application/json; charset=UTF-8"
// //             }
// //         })
// //             .then((response) => response.json())
// //             .then((json) => console.log(json));

// //         // Reset form
// //         setForm({
// //             title: "",
// //             completed: false
// //         });
// //     };

// //     // -----------------------------------
// //     // FETCH DATA
// //     // -----------------------------------
// //     const fetchData = async () => {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/todos");

// //         if (response.ok) {
// //             const data = await response.json();
// //             setUserData(data);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchData();
// //     }, []);

// //     return (
// //         <div className="shadow w-full p-4 flex gap-8">

// //             {/* Display list */}
// //             <div className="w-1/2 grid md:grid-cols-3 gap-2 grid-cols-1">
// //                 {userData.map((item) => (
// //                     <div key={item.id} className="shadow p-2">
// //                         <ul>
// //                             <li>User: {item.userId}</li>
// //                             <li>Title: {item.title}</li>
// //                             <li>Completed: {String(item.completed)}</li>
// //                         </ul>
// //                     </div>
// //                 ))}
// //             </div>

// //             {/* Form */}
// //             <div className="w-1/2">
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="mb-2">
// //                         <label>Title</label>
// //                         <input
// //                             type="text"
// //                             name="title"
// //                             value={form.title}
// //                             onChange={handleChange}
// //                             className="border ml-2"
// //                         />
// //                     </div>

// //                     <div className="mb-2">
// //                         <label>Completed</label>
// //                         <input
// //                             type="checkbox"
// //                             name="completed"
// //                             checked={form.completed}
// //                             onChange={handleChange}
// //                             className="ml-2"
// //                         />
// //                     </div>

// //                     <button type="submit" className="border px-3 py-1">
// //                         Submit
// //                     </button>
// //                 </form>
// //             </div>

// //         </div>
// //     );
// // }

// // export default DemoApp;






// // const updateTodo = async (id, updatedData) => {
// //   try {
// //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
// //       method: "PUT",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(updatedData),
// //     });

// //     if (!response.ok) throw new Error("Update failed");

// //     const result = await response.json();

// //     // Update UI locally
// //     setUserData((prev) =>
// //       prev.map((item) => (item.id === id ? result : item))
// //     );

// //     console.log("Updated successfully", result);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };




// import React, { useEffect, useState } from 'react'
// import { axiosInstancs } from './ApiHandling/api/axios';
// import { set } from 'react-hook-form';

// function DemoApp() {
//     const [userData, setUserData] = useState([]);

//     const [error, setError] = useState(null)
//     const [isLoading, setIsLoading] = useState(false)


//     const fetchData = async () => {
//         setIsLoading(true)
//         setError(null)

//         try {
//             const response = await axiosInstancs.get("/users")
//             console.log(response)
//             setUserData(response.data)
//         } catch (error) {
//             setError(error.message)
//         } finally {
//             setIsLoading(false)
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     if (isLoading) {
//         return(
//             <>

//             {
//                 Array.from({ length: 10 }).map((_, index) => (
//                     <div key={index} className="border border-gray-400 m-3 p-4 rounded-xl">
//                         <div className="animate-pulse flex space-x-4">
//                             <div className="flex-1 space-y-6 py-1">
//                                 <div className="h-2 bg-slate-300 rounded"></div>
//                                 <div className="space-y-3">
//                                     <div className="grid grid-cols-3 gap-4">
//                                         <div className="h-2 bg-slate-300 rounded col-span-2"></div>
//                                         <div className="h-2 bg-slate-300 rounded col-span-1"></div>
//                                     </div>
//                                     <div className="h-2 bg-slate-300 rounded"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }

        
            
//             </>
//         )
//     }

//     return (
//         <div>

//             {
//                 error && <p>{error}</p>
//             }

//             {
//                 userData && userData.map((item) => {
//                     return (
//                         <div key={item.id} className="border m-3 p-4 rounded-xl">
//                             <h3 className="font-bold text-lg">{item.name}</h3>
//                             <p>{item.email}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default DemoApp
