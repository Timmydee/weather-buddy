import React from 'react'
import Map from './page/Map'
import Form from './page/Form'

export default function App() {
  return (
    <div className='w-full h-[100vh] lg:p-20'>
      <h1 className='font-bold text-green-700 text-2xl mb-4 text-left'>Weather Buddy</h1>
      <div className='flex flex-col lg:row'>
        <div className='lg:w-[30%] border lg:h-full w-[100%] h-[30vh] '>
          <Form />
        </div>
        
        <div className='lg:w-[70%] border lg:h-full w-[100%] h-[70vh]'>
          <Map />
        </div>
        
      </div>
    </div>
  )
}
