import React, { useRef } from 'react'

function UseRef() {

    const containerElement = useRef(0)
    const inputRef = useRef(null);

    const handleBtnClick = () => {
        inputRef.current.style.color = "white"
        inputRef.current.style.backgroundColor = "red"
    }

    const generatweRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const handleContainerClick = () => {

        const color = generatweRandomColor()
        containerElement.current.style.backgroundColor = color
        containerElement.current.style.color = "white"
    }
    const containerStyle = { backgroundColor: "red", color: "blue", }
    console.log(inputRef)
    return (
        <div ref={containerElement} onClick={handleContainerClick} className='h-screen' >
            Hello World
            <input ref={inputRef} placeholder="Type here..." />

            <button onClick={handleBtnClick}>Change Color</button>
        </div>
    )
}

export default UseRef







// import React, { useEffect, useRef } from 'react'

// function DemoApp() {
//   const demoRef = useRef(20)
//   const inp = useRef()

//   let a = 20

//   useEffect(() => {
//     console.log("Div Element:", demoRef.current)
//     console.log("Input Element:", inp.current.value)
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form Submitted")
//     console.log("Input Value:", inp.current.value)
//   }

//   return (
//     <div>

//       <form action="" onSubmit={handleSubmit}>


//         <input type="text" name="" id="" ref={inp} />
//         <button type="submit">Submit</button>

//       </form>

//       <div ref={demoRef}>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint saepe odit maiores sunt! Odit non quasi maxime nesciunt explicabo unde in animi numquam earum accusantium? Officia, deserunt? Dolorem officiis libero quisquam sequi at nulla eos, veritatis cumque, eveniet quos recusandae. Modi quia harum sint delectus facilis a dignissimos ducimus mollitia nesciunt quaerat odio fugiat hic perspiciatis repellendus provident ipsum iste veniam totam, corporis adipisci cum. Atque fugit obcaecati animi a doloremque at? Possimus excepturi sit numquam voluptatem voluptatibus impedit voluptas, quod voluptate ipsa sed accusantium, minus rem deleniti assumenda reiciendis. At nesciunt dignissimos consequuntur alias, velit sequi ducimus nisi id, dicta porro rerum maiores maxime. Obcaecati pariatur sed beatae similique sequi sint, sit impedit vel atque nulla earum saepe magni perspiciatis asperiores id unde fugiat cumque, fugit debitis error architecto voluptates tempore mollitia. Iste doloribus molestiae cum, distinctio odio, alias odit nisi amet et commodi eos voluptas optio molestias quos natus, tempore vero corrupti minus. Rerum voluptates accusamus alias dicta a eum distinctio excepturi? Asperiores exercitationem beatae, voluptatum iusto minima dolorem doloremque nulla ipsam. Quisquam nulla molestiae laboriosam neque sed, nisi excepturi deleniti eligendi vitae expedita cupiditate nobis ad mollitia corporis aperiam sunt. Accusantium culpa maiores alias obcaecati impedit hic.
//       </div>
//     </div>
//   )
// }

// export default DemoApp