import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { 
  getPopularVideos, 
  getVideosByCategory 
} from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords = ['All', 'music', 'classical piano', 'coding', 'cooking', 'Gatsby', 'YouTube API', 'next.js', 'react']

const CategoriesBar = (location, locationRadius) => {

  if (location) {
    console.log("location, locationRadius in CategoriesBar: ", location, locationRadius)
  }
  const [activeElement, setActiveElement] = useState('All')
  
  const dispatch = useDispatch()
  
  const handleClick = value => {
    setActiveElement(value)
    if (value === 'All') {
      dispatch(getPopularVideos())
   } else {
      dispatch(getVideosByCategory(value))
   }
  }
  
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span 
          onClick={() => handleClick(value)} 
          key={i}
          className={activeElement === value ? 'active' : ''}
        >
          {value}
        </span>
      ))}
    </div>
  )
}

export default CategoriesBar
