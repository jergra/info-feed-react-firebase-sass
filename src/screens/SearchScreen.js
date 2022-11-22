import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../redux/actions/videos.action'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SearchScreen = () => {
   const { query } = useParams()
   var renderQuery = query.split(",")
   const dispatch = useDispatch()
 
  var user = useSelector(state => state.auth?.user)
  if (user == null) {
     user = {
    "name": "Randy Smith",
    "uid": "Randy Smith",
    "photoURL": ""
  }
  }

   useEffect(() => {
      dispatch(getVideosBySearch(query))
   }, [query, dispatch])
   const { videos, loading } = useSelector(state => state.searchedVideos)
   
   return (
      <Container style={{marginTop: 180}}>
      <div id="interest" style={{marginBottom: 30}}>Search: {renderQuery[0]}</div>
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
      </Container>
   )
}

export default SearchScreen