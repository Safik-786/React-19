let name= "wjefguwifhgufyu"



// let name= {
//   current: "mwbvjwegfwej"
// }




const useRef= (value)=>{
  let obj={}
  obj["current"]= value
  return obj
}


const objref= useRef(2)

console.log(objref)


console.log(objref.current)


