import React from 'react'
import DisplayData from './DisplayData'
import Form from './Form'

function CRUD() {
  return (
    <section className='w-full flex'>
        <div className='w-2/3'>
            <DisplayData/>
        </div>
        <div className='w-1/3'>
            <Form/>
        </div>

      
    </section>
  )
}

export default CRUD
