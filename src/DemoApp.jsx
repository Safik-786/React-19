import React from 'react'


let number = 20
function DemoApp() {
  let a = 20;
  let b = 30;
  let sum = a + b

  return (
    <div>
      Number {number}
      <h2>Sum= {sum} </h2>
    </div>
  )
}

export default DemoApp




function DemoApp2() {
  return (
    <div>
      This is demoapp
    </div>
  )
}

export { DemoApp2 }
