import React from "react"
import "./_sidebar.scss"
import { AiFillGithub } from 'react-icons/ai'
import {
   MdExitToApp,
} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { log_out } from "../../redux/actions/auth.action"

const Sidebar = ({ sidebar, handleToggleSidebar }) => {

   var user = useSelector(state => state.auth?.user)

   const dispatch = useDispatch()
   const logOutHandler = () => {
      dispatch(log_out())
   }
   
   return (
      <nav
        className={sidebar ? "sidebar open" : "sidebar"}
        onClick={() => handleToggleSidebar(false)}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}
      >
         <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className='header1__icons' style={{marginTop: 40}}>
               <img src={user?.photoURL} alt='' />
            </div>
            <div style={{marginTop: 40}}>
               <div style={{display: 'flex', cursor: 'pointer'}}>
                  <div onClick={logOutHandler}><MdExitToApp size={23} /></div>
                  <div style={{fontSize: 25, color: '#b1bdb4'}} onClick={logOutHandler}>
                     &nbsp;&nbsp;Sign out
                  </div>
               </div>
            </div>
         </div>
            
         <div className='header1__icons' style={{marginBottom: 50}}>
            <a href='https://github.com/jergra/info-feed-react-firebase-sass' target='_blank' rel="noreferrer">
               <AiFillGithub size={40} />
            </a>
         </div>
      </nav>
   )
}

export default Sidebar

