import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img className='spinner' src={loading} alt="Loading..." />
    </div>
  )
}

export default Spinner