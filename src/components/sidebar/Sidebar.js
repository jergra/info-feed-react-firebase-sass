import React from "react"
import "./_sidebar.scss"
import { AiFillGithub } from 'react-icons/ai'
import {
   MdSubscriptions,
   MdExitToApp,
   MdHome,
} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { log_out } from "../../redux/actions/auth.action"
import { Link } from "react-router-dom"

import { useHistory } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {

   var user = useSelector(state => state.auth?.user)
   
   const history = useHistory()

   const dispatch = useDispatch()
   const logOutHandler = () => {
      dispatch(log_out())
   }
   const handleClick = () => {
        history.push('/')
        window.location.reload()
   }

   return (
      <nav
        className={sidebar ? "sidebar open" : "sidebar"}
        onClick={() => handleToggleSidebar(false)}
        style={{display: 'flex', alignItems: 'center'}}
      >
         {/* <div className='header1__icons' style={{marginLeft: -40}}>
            <img src={user?.photoURL} alt='avatar' />
         </div> */}

         <Link to="/">
         {/* <li>
            <MdHome size={23} />
            <span onClick={() => handleClick()}  >Home</span>
         </li> */}
         </Link>
         
         <Link to="/feed/subscriptions">
            {/* <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
            </li> */}
         </Link>
         
            <div className='header1__icons'>
               <img src={user?.photoURL} alt='' />
            </div>

            <div>
               <a onClick={logOutHandler}>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                     <div><MdExitToApp size={23} /></div>
                     <div style={{fontSize: 23, color: '#b1bdb4', marginLeft: -45}}>Logout</div>
                  </div>
               </a>
            </div>
            
            <div className='header1__icons' style={{marginTop: 200}}>
               <a href='https://github.com/jergra/info-feed-react-firebase-sass' target='_blank' rel="noreferrer">
                  <AiFillGithub size={40} />
               </a>
            </div>
      </nav>
   )
}

export default Sidebar

