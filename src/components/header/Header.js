import React, { useEffect, useState } from 'react'
import './_header.scss'

import '../categoriesBar/_categoriesBar.scss'

import { AiOutlineSearch, AiFillCaretRight } from 'react-icons/ai'
import { MdNotifications, MdApps, MdPowerSettingsNew } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {database} from '../../firebase'
import { isCompositeComponent } from 'react-dom/test-utils'

const Header = () => {

   const history = useHistory()

   //const [input, setInput] = useState('')
   var [location, setLocation] = useState('')
   const [locationRadius, setLocationRadius] = useState('')

   //const [category, setCategory] = useState('')
   
   const [terms, setTerms] = useState('')

   var user = useSelector(state => state.auth?.user)
   if (user == null) {
      user = {
         "name": "Randy Smith",
         "uid": "Randy Smith",
         "photoURL": ""
      }
   }
   
   const userName = user.name
   const userEmail = user.email

   //console.log('userName, userEmail:', userName, userEmail)
   
   // const handleSubmit1 = e => {
   //    e.preventDefault()
   //    history.push(`/search/${[input, location, locationRadius]}`)
   // }
   // const handleSubmit2 = e => {
   //    e.preventDefault()
   //    history.push(`/search/${[category, location, locationRadius]}`)
   // }
   const handleSubmit3 = e => {
      e.preventDefault()
      database.ref(`users/${user.uid}/name`).set({
         userName: userName,
      }).catch(alert);
      database.ref(`users/${user.uid}/location`).set({
         location: location,
      }).catch(alert);
       history.push('/')
       window.location.reload()
   }
   const handleSubmit5 = e => {
      e.preventDefault()
      database.ref(`users/${user.uid}/locationRadius`).set({
         locationRadius: locationRadius,
      }).catch(alert);
       history.push('/')
       window.location.reload()
   }
   const handleSubmit4 = e => {
      e.preventDefault()
      database.ref(`users/${user.uid}/email`).set({
         userEmail: userEmail,
      }).catch(alert);
      database.ref(`users/${user.uid}/terms`).set({
         terms: terms
      }).catch(alert);
       history.push('/')
   }
   
   useEffect(() => {
      if (user == null) {
         user = {
           "name": "Randy Smith",
           "uid": "Randy Smith",
           "photoURL": ""
         }
      }
      
      database.ref(`users/${user.uid}/location`).on('value', snapshot => {
         if (snapshot.val() === null) {
            setLocation('3')
         } else {
         
         let response1 = Object.values(snapshot.val())
         //console.log("response1:", response1)
         
         var loc = snapshot.val().location
         setLocation(loc)
         }
      });
      database.ref(`users/${user.uid}/locationRadius`).on('value', snapshot => {
      if (snapshot.val() === null) {
         setLocationRadius('web development, coding, javascript, HTML, Python, css, data science, classical piano music, piano, Liszt, Bach, Rachmaninoff, Chopin, language learning, ESL, German, Spanish, Japanese, Danish, fitness, fishing, cooking, travel, Indonesia, Munich')
      } else {
         let response2 = Object.values(snapshot.val())
         //console.log("response2:", response2)

         var rad = snapshot.val().locationRadius
         setLocationRadius(rad)
      }
      });
      database.ref(`users/${user.uid}/terms`).on('value', snapshot => {
      if (snapshot.val() === null) {
         setTerms('https://nationalpost.com, https://www.aldaily.com, https://www.nytimes.com, https://www.transparent.com/word-of-the-day/today/chinese.html, https://www.lastampa.it/, https://www.aftenposten.no/, https://www.transparent.com/word-of-the-day/today/japanese.html, https://www.newstatesman.com/international, https://vancouversun.com/, https://www.thestar.com/, http://www.theweathernetwork.com/weather/canada/british-columbia/vancouver/, https://mewe.com/myworld, https://www.bbc.com/news, https://vancouver.craigslist.org/search/apa?max_price=900&availabilityMode=0&sale_date=all+dates, https://www.dn.se/, http://www.globeandmail.com, https://www.ledevoir.com/, https://www.sueddeutsche.de/, https://slate.com/, https://www.transparent.com/word-of-the-day/today/german.html, googleNews(), googleVideo(), google(), googleBooks(), youtube(), googleImage(), googleScholar()')
      } else {
         let response3 = Object.values(snapshot.val())
         //console.log("response3:", response3)
         
         var terms = snapshot.val().terms
         setTerms(terms)
      }
      });
   }, [])


   function firstPage() {
      const urls = terms.split(", ");
      //const window1 = window.open("", "w1", 'height=' + screen.height + ',width=' + screen.width + ',resizable=yes,scrollbars=yes');
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      
      if (urls.length >= 8) {
         const window1 = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
         window1.focus();
         const y = Math.floor(Math.random() * (urls.length - 7));
         window1.location = urls[y]
         //console.log('y, urls[y]:', y, urls[y])
      } else {
         const window1 = window.open("https://www.aldaily.com", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes')
         window1.focus();
      }
   }

        
   function newPage() {
      //console.log('terms:', terms)
      //console.log('locationRadius:', locationRadius)
      const urls = terms.split(", ");
      const words = locationRadius.split(", ")
      // console.log('urls:', urls)
      // console.log('words:', words)
      console.log('urls.length:', urls.length)
      console.log('words.length:', words.length)
      const x = Math.floor(Math.random() * urls.length);
         
      //const window1 = window.open("", "w1", 'height=' + screen.height + ',width=' + screen.width + ',resizable=yes,scrollbars=yes');
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      
      if (urls.length >= 8 && x < urls.length - 7) {
            //console.log('x, urls[x]:', x, urls[x]) 
            const window1 = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
            window1.focus()
            window1.location = urls[x]
      }  
      if (urls.length < 8) {
            const window1 = window.open("https://www.aldaily.com", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes')
            window1.focus();
      }
      if (urls.length >= 8 && x >= urls.length - 7) {
         //console.log('x, urls[x]:', x, urls[x]) 
         const window1 = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
         window1.focus()
         const z = Math.floor(Math.random() * 2 + 1);
         const randomNumber1 = Math.floor(Math.random() * words.length)
         const randomNumber2 = Math.floor(Math.random() * words.length)
         const randomNumber3 = Math.floor(Math.random() * words.length)
         const searchTerm1 = words[randomNumber1]
         const searchTerm2 = words[randomNumber2]
         const searchTerm3 = words[randomNumber3]
         //console.log('searchTerms:', searchTerm1, searchTerm2, searchTerm3)
         if (z === 1) {
            if (x === urls.length - 7) {
               window1.location = "https://news.google.com/search?q="+searchTerm1+"+"+searchTerm2+"&hl=en-CA&lr&ie=UTF-8&oe=UTF-8&sa=N&scoring=d&gl=CA&ceid=CA:en";
            }
            if (x === urls.length - 6) {
               window1.location = "https://www.google.ca/search?tbm=vid&q="+searchTerm1+"+"+searchTerm2;
            }
            if (x === urls.length - 5) {
               window1.location = "https://www.google.com/search?q="+searchTerm1+"+"+searchTerm2;
            }
            if (x === urls.length - 4) {
               window1.location = "https://www.google.ca/search?tbm=bks&tbo=1&q="+searchTerm1+"%20"+searchTerm2+"&btnG=Search+Books";
            }
            if (x === urls.length - 3) {
               window1.location = "https://www.youtube.com/results?search_query="+searchTerm1+"%20"+searchTerm2;
            }
            if (x === urls.length - 2) {
               window1.location =  "https://www.google.ca/search?hl=en&tbm=isch&q="+searchTerm1+"+"+searchTerm2;
            }
            if (x === urls.length - 1) {
               window1.location = "https://scholar.google.ca/scholar?q="+searchTerm1+"%20"+searchTerm2+"&hl=en&btnG=Search&as_sdt=1%2C5&as_sdtp=on";
            }
         }
         if (z === 2) {
            if (x === urls.length - 7) {
               window1.location = "https://news.google.com/search?q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3+"&hl=en-CA&lr&ie=UTF-8&oe=UTF-8&sa=N&scoring=d&gl=CA&ceid=CA:en";
            }
            if (x === urls.length - 6) {
               window1.location = "https://www.google.ca/search?tbm=vid&q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length - 5) {
               window1.location = "https://www.google.com/search?q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length - 4) {
               window1.location = "https://www.google.ca/search?tbm=bks&tbo=1&q="+searchTerm1+"%20"+searchTerm2+"+"+searchTerm3+"&btnG=Search+Books";
            }
            if (x === urls.length - 3) {
               window1.location = "https://www.youtube.com/results?search_query="+searchTerm1+"%20"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length - 2) {
               window1.location =  "https://www.google.ca/search?hl=en&tbm=isch&q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length - 1) {
               window1.location = "https://scholar.google.ca/scholar?q="+searchTerm1+"%20"+searchTerm2+"+"+searchTerm3+"&hl=en&btnG=Search&as_sdt=1%2C5&as_sdtp=on";
            }
         }
      }   
   }

        
   useEffect(() => {
      const interval = setInterval(() => {
         newPage()
      }, 60000);
      return () => clearInterval(interval);
   });

    
   return (
      <div>
         
      <div id="header">
         <div className="top" style={{marginLeft: -300}}>
            <div>
               <img
                  //src='https://pngimg.com/uploads/youtube/youtube_PNG2.png'
                  src={require('../../screens/loginScreen/information-icon.png').default}
                  alt=''
                  className='header__logo'
               />
            </div>
            {/* <div className='header1__icons'>
               <img src={user?.photoURL} alt='avatar' />
            </div>
            <div className='header1__icons'>
               <img style={{visibility: 'hidden'}} src={user?.photoURL} alt='avatar' />
               <MdNotifications  size={28}/>
               <MdApps size={28} />
            </div> */}
         </div>

         <div className='header2' style={{marginTop: 40}}>
            <form onSubmit={handleSubmit3}>
               <div style={{width: 500, marginLeft: 10}}>
               </div>
               <div style={{width: 980, marginLeft: 10, marginTop: 12, marginBottom: 40}}>
                  <button onClick={() => firstPage()} style={{paddingTop: 20, paddingBottom: 20, borderRadius: 8}}>
                     <div>
                        <div><MdPowerSettingsNew size={40} /></div>
                        <div style={{marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 30}}>
                           Start
                        </div>
                     </div>
                  </button>
               </div>  
               <div style={{width: 180, marginLeft: 8, marginTop: 12}}>Speed (minutes)</div>
               <div style={{display: 'flex'}}>
                  <input 
                     id="customLoc3"
                     className="location"
                     type="text" 
                     style={{width: 50}}
                     placeholder={location}
                     defaultValue={location}
                     onChange={e => setLocation(e.target.value)}
                  />
                  <div style={{ width: 90, height: 50, marginTop: 13, marginLeft: 20}}>
                     <button type='submit' style={{borderRadius: 8}}>
                        Save
                     </button>
                  </div>
               </div>
            </form>
            <form onSubmit={handleSubmit5}>
               <div style={{width: 530, marginLeft: 10, marginTop: 12}}>Terms</div>
               <div style={{display: 'flex'}}>
                  <textarea
                     id="customRad3"
                     className="radius"
                     type="text" 
                     style={{width:480, height:280}}
                     placeholder={locationRadius}
                     defaultValue={locationRadius}
                     onChange={e => setLocationRadius(e.target.value)}
                  />
                  <div style={{ width: 90, height: 50, marginTop: 6, marginLeft: 20}}>
                     <button type='submit' style={{borderRadius: 8}}>
                        Save
                     </button>
                  </div>
               </div>
            </form>
            <form onSubmit={handleSubmit4}>
               <div style={{width: 530, marginLeft: 10, marginTop: 30}}>Pages</div>
               <div style={{display: 'flex'}}>
                  <textarea
                     id="customTerms"
                     style={{width:730, height:780, marginBottom: 40}}
                     placeholder={terms}
                     defaultValue={terms}
                     onChange={e => setTerms(e.target.value)}
                  />
                  <div style={{ width: 90, height: 50, marginTop: 6, marginLeft: 20}}>
                     <button type='submit' style={{borderRadius: 8}}>
                        Save
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
   )
}

export default Header

      


