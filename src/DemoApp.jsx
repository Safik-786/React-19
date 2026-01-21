import React from 'react'

function DemoApp() {
  let name = "adam"

  let authenticate = true

  if (authenticate) {
    return (
      <>
        <Child name={name} age={20} />
      </>
    )
  } else {
    return <h2>Please Login</h2>
  }


  // return (
  //   <div className='px-20'>

  //     <h2>My Name is {name}</h2>
  //     {1 + 2}
  //     {
  //       authenticate ? <Child /> : <h2>Please Login</h2>
  //     }


  //   </div>
  // )
}

export default DemoApp




function Child({ name, age }) {
  return (
    <div>

      <h2>
        {
          name
        }
      </h2>
      <p>{age}</p>
      <br />
      this is child component
    </div>
  )
}

