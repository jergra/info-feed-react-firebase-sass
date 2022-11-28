import React, { useEffect, useState } from 'react'
import './_header.scss'

import '../categoriesBar/_categoriesBar.scss'

import { MdPowerSettingsNew } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {database} from '../../firebase'

const Header = () => {

   const history = useHistory()
   var [speed, setSpeed] = useState(null)
   const [terms, setTerms] = useState('')
   const [pages, setPages] = useState('')

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

   const handleSubmit3 = e => {
      e.preventDefault()
      database.ref(`users/${user.uid}/name`).set({
         userName: userName,
      }).catch(alert);
      database.ref(`users/${user.uid}/speed`).set({
         speed: speed,
      }).catch(alert);
       history.push('/')
       window.location.reload()
   }
   const handleSubmit5 = e => {
      e.preventDefault()
      database.ref(`users/${user.uid}/terms`).set({
         terms: terms,
      }).catch(alert);
       history.push('/')
       window.location.reload()
   }
   const handleSubmit4 = e => {
      e.preventDefault()
      database.ref(`users/${user.uid}/email`).set({
         userEmail: userEmail,
      }).catch(alert);
      database.ref(`users/${user.uid}/pages`).set({
         pages: pages
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
      
      database.ref(`users/${user.uid}/speed`).on('value', snapshot => {
         if (snapshot.val() === null) {
            setSpeed('3')
         } else {
            var speed = snapshot.val().speed
            setSpeed(speed)
         }
      });
      
      database.ref(`users/${user.uid}/terms`).on('value', snapshot => {
         if (snapshot.val() === null) {
            setTerms('web development, coding, javascript, HTML, Python, css, data science, classical piano music, piano, Liszt, Bach, Rachmaninoff, Chopin, language learning, ESL, German, Spanish, Japanese, Danish, fitness, fishing, cooking, travel, Indonesia, Munich')
         } else {
            var terms = snapshot.val().terms
            setTerms(terms)
         }
      });
      
      database.ref(`users/${user.uid}/pages`).on('value', snapshot => {
         if (snapshot.val() === null) {
            setPages('https://twitter.com/home\nhttps://nationalpost.com\nhttps://www.aldaily.com\nhttps://quillette.com/\nhttps://www.nytimes.com\nhttps://www.transparent.com/word-of-the-day/today/chinese.html\nhttps://www.lastampa.it/\nhttps://www.aljazeera.com\nhttps://www.transparent.com/word-of-the-day/today/japanese.html\nhttps://www.newstatesman.com/international\nhttps://vancouversun.com/\nhttp://www.theweathernetwork.com/weather/canada/british-columbia/vancouver/\nhttps://www.bbc.com/news\nhttps://www.foxnews.com/\nhttps://vancouver.craigslist.org/search/apa?max_price=900&availabilityMode=0&sale_date=all+dates\nhttp://www.globeandmail.com\nhttps://www.ledevoir.com/\nhttps://www.sueddeutsche.de/\nhttps://slate.com/\nhttps://www.transparent.com/word-of-the-day/today/german.html')
         } else {
            var pages = snapshot.val().pages
            setPages(pages)
         }
      });
   }, [])


   const newPage = () => {

      const urls = pages.split("\n");
      const words = terms.split(",")
      console.log('urls.length, words.length:', urls.length, words.length)
      const x = Math.floor(Math.random() * urls.length + 7);
         
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      
      if (x < urls.length) {
         console.log('x, urls[x]:', x, urls[x]) 
         const window1 = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
         window1.focus()
         if (urls[x].length) {
            window1.location = urls[x]
         } else {
            window1.location = urls[1]
         }
      }  
      if (x >= urls.length) {
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
         console.log('searchTerms:', searchTerm1, searchTerm2, searchTerm3)
         if (z === 1) {
            if (x === urls.length) {
               console.log('google:', x) 
               window1.location = "https://www.google.com/search?q="+searchTerm1+"+"+searchTerm2;
            }
            if (x === urls.length + 1) {
               console.log('google news:', x) 
               window1.location = "https://news.google.com/search?q="+searchTerm1+"+"+searchTerm2+"&hl=en-CA&lr&ie=UTF-8&oe=UTF-8&sa=N&scoring=d&gl=CA&ceid=CA:en";
            }
            if (x === urls.length + 2) {
               console.log('google videos:', x) 
               window1.location = "https://www.google.ca/search?tbm=vid&q="+searchTerm1+"+"+searchTerm2;
            }
            if (x === urls.length + 3) {
               console.log('google books:', x) 
               window1.location = "https://www.google.ca/search?tbm=bks&tbo=1&q="+searchTerm1+"%20"+searchTerm2+"&btnG=Search+Books";
            }
            if (x === urls.length + 4) {
               console.log('google images:', x) 
               window1.location =  "https://www.google.ca/search?hl=en&tbm=isch&q="+searchTerm1+"+"+searchTerm2;
            }
            if (x === urls.length + 5) {
               console.log('google scholar:', x) 
               window1.location = "https://scholar.google.ca/scholar?q="+searchTerm1+"%20"+searchTerm2+"&hl=en&btnG=Search&as_sdt=1%2C5&as_sdtp=on";
            }
            if (x === urls.length + 6) {
               console.log('youtube:', x) 
               window1.location = "https://www.youtube.com/results?search_query="+searchTerm1+"%20"+searchTerm2;
            }
         }
         if (z === 2) {
            if (x === urls.length) {
               console.log('google:', x) 
               window1.location = "https://www.google.com/search?q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length + 1) {
               console.log('google news:', x) 
               window1.location = "https://news.google.com/search?q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3+"&hl=en-CA&lr&ie=UTF-8&oe=UTF-8&sa=N&scoring=d&gl=CA&ceid=CA:en";
            }
            if (x === urls.length + 2) {
               console.log('google videos:', x) 
               window1.location = "https://www.google.ca/search?tbm=vid&q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length + 3) {
               console.log('google books:', x) 
               window1.location = "https://www.google.ca/search?tbm=bks&tbo=1&q="+searchTerm1+"%20"+searchTerm2+"+"+searchTerm3+"&btnG=Search+Books";
            }
            if (x === urls.length + 4) {
               console.log('google images:', x) 
               window1.location =  "https://www.google.ca/search?hl=en&tbm=isch&q="+searchTerm1+"+"+searchTerm2+"+"+searchTerm3;
            }
            if (x === urls.length + 5) {
               console.log('google scholar:', x) 
               window1.location = "https://scholar.google.ca/scholar?q="+searchTerm1+"%20"+searchTerm2+"+"+searchTerm3+"&hl=en&btnG=Search&as_sdt=1%2C5&as_sdtp=on";
            }
            if (x === urls.length + 6) {
               console.log('youtube:', x) 
               window1.location = "https://www.youtube.com/results?search_query="+searchTerm1+"%20"+searchTerm2+"+"+searchTerm3;
            }
            
         }
      }
   }

   useEffect(() => {
      if (speed) {
         var theSpeed = speed
      } else {
         theSpeed = '4'
      }
      const interval = setInterval(() => {
         newPage()
      }, parseFloat(theSpeed) * 60000);
      return () => clearInterval(interval);
   });

    
   return (
      <div>
         
      <div id="header">
         <div className="top" style={{marginLeft: -300}}>
            <div>
               <img
                  src={require('../../screens/loginScreen/information-icon.png').default}
                  alt=''
                  className='header__logo'
               />
            </div>
         </div>

         <div className='header2' style={{marginTop: 40}}>
            <form onSubmit={handleSubmit3}>
               <div style={{width: 500, marginLeft: 10}}>
               </div>
               <div style={{width: 980, marginLeft: 10, marginTop: 12, marginBottom: 40}}>
                  <button onClick={() => newPage()} style={{paddingTop: 20, paddingBottom: 20, borderRadius: 8}}>
                     <div>
                        <div><MdPowerSettingsNew size={40} /></div>
                        <div style={{marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 30}}>
                           Start
                        </div>
                     </div>
                  </button>
               </div>  
               
               <div style={{width: 220, marginLeft: 8, marginTop: 12, fontSize: 25}}>Speed (minutes)</div>
               <div style={{display: 'flex'}}>
                  <input 
                     id="customSpeed"
                     className="speed"
                     type="text" 
                     style={{width: 50, textAlign: 'center'}}
                     //placeholder={speed}
                     defaultValue={speed}
                     onChange={e => setSpeed(e.target.value)}
                  />
                  <div style={{ width: 90, height: 50, marginTop: 17, marginLeft: 20}}>
                     <button type='submit' style={{borderRadius: 8}}>
                        Save
                     </button>
                  </div>
               </div>
            </form>
            
            <form onSubmit={handleSubmit5}>
               <div style={{width: 530, marginLeft: 10, marginTop: 12, marginBottom: 5, fontSize: 25}}>Terms</div>
               <div style={{display: 'flex'}}>
                  <textarea
                     id="customTerms"
                     className="terms"
                     type="text" 
                     style={{width:480, height:280}}
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
            
            <form onSubmit={handleSubmit4}>
               <div style={{display: 'flex'}}>
                  <div style={{marginLeft: 10, marginTop: 30, marginBottom: 5, fontSize: 25}}>Fixed Pages</div>
                  <div style={{marginLeft: 10, marginTop: 35, fontSize: 20}}>(searches using random terms from the above)</div>
               </div>
               <div style={{display: 'flex', marginBottom: 30}}>
                  <div
                     style={{
                        border: '1.2px solid',
                        color: '#b1bdb4',
                        marginLeft: 5,
                        marginTop: 5,
                        padding: 5,
                        paddingRight: 10,
                        fontWeight: 500
                     }}
                  >
                     <div>https://www.google.com/search?q=</div>
                     <div>https://news.google.com/search?q=</div>
                     <div>https://www.google.ca/search?tbm=vid&q=</div>
                     <div>https://www.google.ca/search?tbm=bks&tbo=1&q=</div>
                     <div>https://www.google.ca/search?hl=en&tbm=isch&q=</div>
                     <div>https://scholar.google.ca/scholar?q=</div>
                     <div>https://www.youtube.com/results?search_query=</div>
                  </div>
                  <div
                     style={{
                        border: '1.2px solid',
                        color: '#b1bdb4',
                        marginLeft: 10,
                        marginTop: 5,
                        padding: 5,
                        paddingRight: 10,
                        fontWeight: 500
                     }}
                  >
                     <div>google search</div>
                     <div>google news search</div>
                     <div>google videos search</div>
                     <div>google books search</div>
                     <div>google images search</div>
                     <div>google scholar search</div>
                     <div>youtube search</div>
                  </div>
               </div>
               <div style={{width: 600, marginLeft: 10, marginBottom: 5, fontSize: 25}}>Custom Pages</div>
               <div style={{display: 'flex'}}>
                  <textarea
                     id="customPages"
                     style={{width:730, height:780, marginBottom: 40}}
                     placeholder={pages}
                     defaultValue={pages}
                     onChange={e => setPages(e.target.value)}
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

