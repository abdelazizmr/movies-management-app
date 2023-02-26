import React from 'react'
import { filter } from "../../../store/moviesSlice" 
import { useDispatch } from 'react-redux'

const Select = () => {

  const dispatch = useDispatch()
  
  const handleChoice  = (e)=>{
    
    const choice = e.target.value

    // console.log(choice)

    dispatch(filter({type : choice }))
    
  }
  return (
    <select className='select' name="" id="" onChange={(e)=>handleChoice(e)}>
        <option value="">Order by</option>
        <option value="rating-asc">Rating Asc</option>
        <option value="rating-des">Rating Des</option>
        <option value="title-asc">Title A-Z</option>
        <option value="title-des">Title Z-A</option>
    </select>
  )
}

export default Select