import React, { useState } from 'react'
import './_regionCategory.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

const RegionCategory = () => {
   
   const history = useHistory()
   var [region, setRegion] = useState('')
   var [category, setCategory] = useState('')

   const handleSubmit = e => {
      e.preventDefault()
      console.log("region, category in RegionCategory: ", region, category)
      history.push(`/search/${[region, category]}`)
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>
              Region: 
              <select className="select1" value={region} onChange={e => setRegion(e.target.value)}>
                <option value="US">US</option>
                <option value="CA">CA</option>
                <option value="GB">GB</option>
                <option value="FR">FR</option>
                <option value="DE">DE</option>
                <option value="IT">IT</option>
                <option value="PL">PL</option>
                <option value="RU">RU</option>
                <option value="SE">SE</option>
                <option value="DK">DK</option>
                <option value="NL">NL</option>
                <option value="TR">TR</option>
                <option value="JP">JP</option>
                <option value="CN">CN</option>
                <option value="IN">IN</option>
                <option value="BR">BR</option>
              </select>
            </label>
            <label>
              Category: 
              <select className="select2" value={category} onChange={e => setCategory(e.target.value)}>
                <option value ="1">Film & Animation</option>
                <option value ="2">Cars & Vehicles</option>
                <option value ="10">Music</option>
                <option value ="15">Pets & Animals</option>
                <option value ="17">Sport</option>
                <option value ="19">Travel & Events</option>
                <option value ="20">Gaming</option>
                <option value ="22">People & Blogs</option>
                <option value ="23">Comedy</option>
                <option value ="24">Entertainment</option>
                <option value ="25">News & Politics</option>
                <option value ="26">How-to & Style</option>
                <option value ="27">Education</option>
                <option value ="28">Science & Technology</option>
                <option value ="29">Non-profits & Activism</option>
              </select>
            </label>
            
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

      </div>
   )
}

export default RegionCategory





