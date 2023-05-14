import React from 'react'
import Map from './page/Map'
import Form from './page/Form'

export default function App() {
  return (
    <div className='w-full h-[100vh] lg:p-6 p-4 bg-gradient-to-r from-green-400 to-blue-500'>
      <h1 className='font-bold text-blue-900 text-2xl mb-4 text-left'>Weather Buddy</h1>
      <div className='flex flex-col lg:flex-row gap-3'>
        <div className='lg:w-[30%] lg:h-full w-[100%] h-[30vh] '>
          <Form />
        </div>
        
        <div className='lg:w-[70%] lg:h-[80vh] w-[90%] mx-auto h-[60vh]'>
          <Map />
        </div>
        
      </div>
    </div>
  )
}
