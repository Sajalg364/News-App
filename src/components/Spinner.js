import React from 'react'
import loader from './loader.gif'

const Spinner =()=>{
    return (
      <div className='text-center' >
        <img style={{height: '40px', width: '40px'}} src={loader} alt="loading"/>
      </div>
    )
}

export default Spinner 