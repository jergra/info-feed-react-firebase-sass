import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { 
  getVideosByCategory 
} from '../../redux/actions/videos.action'

import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import './_homeScreen.scss'

import {database} from '../../firebase'

const HomeScreen = () => {

  var location = "49.208442, -123.122645"
  var locationRadius = "40mi"
  var [chosen, setChosen] = useState('')
  
  var user = useSelector(state => state.auth?.user)
  
  if (user == null) {
    user = {
      "name": "Randy Smith",
      "uid": "Randy Smith",
      "photoURL": ""
    }
  }
  

  const dispatch = useDispatch()

  function getData() {
    if (user == null) {
      user = {
        "name": "Randy Smith",
        "uid": "Randy Smith",
        "photoURL": ""
      }
    }
    database.ref(`users/${user.uid}/location`).on('value', snapshot => {
      if (snapshot.val() === null) {
        location = '34,-118'
     } else {
        //let res1 = Object.values(snapshot.val())
        //console.log("res1:", res1)
        location = snapshot.val().location
     }
    });
    database.ref(`users/${user.uid}/locationRadius`).on('value', snapshot => {
      if (snapshot.val() === null) {
        locationRadius = '50mi'
     } else {
        //let res2 = Object.values(snapshot.val())
        //console.log("res2:", res2)
        locationRadius = snapshot.val().locationRadius
     }
    });
    database.ref(`users/${user.uid}/terms`).on('value', snapshot => {
      if (snapshot.val() === null) {
        var theTerms = 'rectangle, Romania, red, Rome, Randolph, rummage'
     } else {
        //let res3 = Object.values(snapshot.val())
        //console.log("res3:", res3)
        theTerms = snapshot.val().terms
     }
        var interests = theTerms.split(",")
        var oneOrTwo = Math.floor(Math.random() * 2) + 1;
        var interest = ""
        for (var i=0;i<oneOrTwo;i++) {
          var index = Math.floor(Math.random() * interests.length)
          interest = interest + interests[index] + " "
        }
        setChosen(interest)
        dispatch(getVideosByCategory(interest, location, locationRadius))
        
    });
  }

  
  useEffect(() => {
    // if there is more to the url than the home address (i.e. /search/etc. is added on)
    // we do not want that reloaded when we press the browser's reload, because that causes
    // an error, so let's do this automated second reload below to clear the error
    // and get us back to home
    if ((window.location == 'https://info-feed-react-firebase-sass.web.app/') 
        || (window.location == 'info-feed-react-firebase-sass.firebaseapp.com')
        || (window.location == 'http://localhost:3000/') 
        || (window.location == 'http://localhost:3001/')) {
    } else {
      window.location.reload()
    }
    
    getData()
    
  }, [])

  var {videos, loading} = useSelector(
    state => state.homeVideos
  )

  return (
      <Container>
        
          {/* <Container style={{marginTop: 150}}>
            
            <div id="interest" style={{marginBottom: 30}}>{chosen}</div>
            
            {!loading ? (
                videos?.map(video => (
                  <VideoHorizontal
                      video={video}
                      key={video.id.videoId}
                      searchScreen
                  />
                ))
            ) : (
                <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='160px' count={20} />
                </SkeletonTheme>
            )}
          </Container> */}
      </Container>
  )
}

export default HomeScreen