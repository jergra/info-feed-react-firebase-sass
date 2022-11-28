
import {
    CHANNEL_DETAILS_FAIL,
    CHANNEL_VIDEOS_REQUEST,
    CHANNEL_VIDEOS_SUCCESS,
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    RELATED_VIDEO_FAIL,
    RELATED_VIDEO_REQUEST,
    RELATED_VIDEO_SUCCESS,
    SEARCHED_VIDEO_FAIL,
    SEARCHED_VIDEO_REQUEST,
    SEARCHED_VIDEO_SUCCESS,
    SELECTED_VIDEO_FAIL,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    SUBSCRIPTIONS_CHANNEL_FAIL,
    SUBSCRIPTIONS_CHANNEL_REQUEST,
    SUBSCRIPTIONS_CHANNEL_SUCCESS,
    REGION_CATEGORIES_FAIL,
    REGION_CATEGORIES_REQUEST,
    REGION_CATEGORIES_SUCCESS,
 } from '../actionType'
 
import request from '../../api'

export const getPopularVideos = (query) => async (dispatch, getState) => {

   if (query === undefined) {
      query = '0,CA'
   }
   if (query === ',') {
      query = '0,CA'
   }

   const newInput = query.split(",")
   
   try {
      dispatch({
         type: HOME_VIDEOS_REQUEST,
      })
      const { data } = await request('/videos', {
         params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            videoCategoryId: newInput[0],
            regionCode: newInput[1],
            maxResults: 6,
            //pageToken: getState().homeVideos.nextPageToken,
         },
      })
      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: data.items,
            //nextPageToken: data.nextPageToken,
            category: '0',
         },
      })
   } catch (error) {
      console.log(error.message)
      dispatch({
         type: HOME_VIDEOS_FAIL,
         payload: error.message,
      })
   }
}
 
export const getRegionCategories = (region) => async (dispatch) => {
   if (region === undefined) {
      region = 'CA'
   }
   try {
      dispatch({
         type: REGION_CATEGORIES_REQUEST,
      })
      const { data } = await request('/videoCategories', {
         params: {
            part: 'snippet',
            regionCode: region,
         },
      })
      dispatch({
         type: REGION_CATEGORIES_SUCCESS,
         payload: {
            regionCategories: data.items,
            category: region,
         },
      })
   } catch (error) {
      console.log(error.message)
      dispatch({
         type: REGION_CATEGORIES_FAIL,
         payload: error.message,
      })
   }
}

 export const getVideosByCategory = (keyword, location, locationRadius) => async (dispatch) => {
    
    var newKeyword = ''
    var newLocation = ""
    var newLocationRadius =  ""
    if (location) {
       newKeyword = keyword
       newLocation = location
       newLocationRadius =  locationRadius
    }
    if (!location) {
       newKeyword = keyword
       newLocation = "49.208442, -123.122645"
       newLocationRadius =  "50mi"
    }
    if (!locationRadius) {
      newKeyword = keyword
      newLocation = "49.208442, -123.122645"
      newLocationRadius =  "50mi"
   }

       if (newLocationRadius === "") {
         newLocationRadius = "50km"
       }
       if (newLocationRadius.includes("miles")) {
         newLocationRadius = newLocationRadius.replace("miles", "mi")
       }
       if (newLocationRadius.includes("kilometers")) {
         newLocationRadius = newLocationRadius.replace("kilometers", "km")
       }
       if (newLocationRadius.includes("kms")) {
         newLocationRadius = newLocationRadius.replace("kms", "km")
       }
       if (newLocationRadius.includes(" ")) {
         newLocationRadius = newLocationRadius.replace(" ", "")
       }
       
       try {
       dispatch({
          type: HOME_VIDEOS_REQUEST,
       })
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             location: newLocation,
             locationRadius: newLocationRadius,
             maxResults: 6,
             //pageToken: getState().homeVideos.nextPageToken,
             q: newKeyword,
             type: 'video',
          },
       })
 
       dispatch({
          type: HOME_VIDEOS_SUCCESS,
          payload: {
             videos: data.items,
             //nextPageToken: data.nextPageToken,
             category: keyword,
          },
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: HOME_VIDEOS_FAIL,
          payload: error.message,
       })
    }
 }

 export const getVideoById = id => async dispatch => {
    try {
       dispatch({
          type: SELECTED_VIDEO_REQUEST,
       })
 
       const { data } = await request('/videos', {
          params: {
             part: 'snippet,statistics',
             id: id,
          },
       })
       dispatch({
          type: SELECTED_VIDEO_SUCCESS,
          payload: data.items[0],
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: SELECTED_VIDEO_FAIL,
          payload: error.message,
       })
    }
 }
 
 export const getRelatedVideos = id => async dispatch => {
    try {
       dispatch({
          type: RELATED_VIDEO_REQUEST,
       })
 
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             relatedToVideoId: id,
             maxResults: 6,
             type: 'video',
          },
       })
       dispatch({
          type: RELATED_VIDEO_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data.message)
       dispatch({
          type: RELATED_VIDEO_FAIL,
          payload: error.response.data.message,
       })
    }
 }
 
 export const getVideosBySearch = keyword => async (dispatch) => {
    const newInput = keyword.split(",")
    if (newInput.length === 3) {
       newInput.splice(1, 1, "49.208442", "-123.122645")
    }
   
    if (newInput.length === 4 && newInput[0].length < 3 && (newInput[0].includes("1") || newInput[0].includes("2") )) {
   
    try {
       dispatch({
          type: SEARCHED_VIDEO_REQUEST,
       })
       const LatLong = newInput[1] + "," + newInput[2]
       
       if (newInput[3] === "") {
         newInput[3] = "50km"
       }
       if (newInput[3].includes("miles")) {
         newInput[3] = newInput[3].replace("miles", "mi")
       }
       if (newInput[3].includes("kilometers")) {
         newInput[3] = newInput[3].replace("kilometers", "km")
       }
       if (newInput[3].includes("kms")) {
         newInput[3] = newInput[3].replace("kms", "km")
       }
       if (newInput[3].includes(" ")) {
         newInput[3] = newInput[3].replace(" ", "")
       }
   
       var Radius = newInput[3].split(" ").join("")
       if (Radius === "") {
          Radius = "50km"
       }
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             location: LatLong,
             locationRadius: Radius,
             maxResults: 6,
             videoCategoryId: newInput[0],
             type: 'video',
          },
       })
       dispatch({
          type: SEARCHED_VIDEO_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: SEARCHED_VIDEO_FAIL,
          payload: error.message,
       })
    }
   }
   else if (newInput.length === 4) {
      try {
         dispatch({
            type: SEARCHED_VIDEO_REQUEST,
         })
         const LatLong = newInput[1] + "," + newInput[2]
         
         if (newInput[3] === "") {
            newInput[3] = "50km"
         }
         if (newInput[3].includes("miles")) {
           newInput[3] = newInput[3].replace("miles", "mi")
         }
         if (newInput[3].includes("kilometers")) {
           newInput[3] = newInput[3].replace("kilometers", "km")
         }
         if (newInput[3].includes("kms")) {
           newInput[3] = newInput[3].replace("kms", "km")
         }
         if (newInput[3].includes(" ")) {
            newInput[3] = newInput[3].replace(" ", "")
          }
         
         Radius = newInput[3].split(" ").join("")
         if (Radius === "") {
            Radius = "50km"
         }
         
         const { data } = await request('/search', {
            params: {
               part: 'snippet',
               location: LatLong,
               locationRadius: Radius,
               maxResults: 6,
               q: newInput[0],
               type: 'video',
            },
         })
         dispatch({
            type: SEARCHED_VIDEO_SUCCESS,
            payload: data.items,
         })
      } catch (error) {
         console.log(error.message)
         dispatch({
            type: SEARCHED_VIDEO_FAIL,
            payload: error.message,
         })
      }
     }
   
   if (newInput.length === 2) {
      try {
         dispatch({
            type: SEARCHED_VIDEO_REQUEST,
         })
         
         const { data } = await request('/search', {
            params: {
               part: 'snippet',
               regionCode: newInput[0],
               videoCategoryId: newInput[1],
               maxResults: 6,
               q: '',
               type: 'video',
            },
         })
         dispatch({
            type: SEARCHED_VIDEO_SUCCESS,
            payload: data.items,
         })
      } catch (error) {
         console.log(error.message)
         dispatch({
            type: SEARCHED_VIDEO_FAIL,
            payload: error.message,
         })
      }
   }
 }

 
 export const getSubscribedChannels = () => async (dispatch, getState) => {
    try {
       dispatch({
          type: SUBSCRIPTIONS_CHANNEL_REQUEST,
       })
       const { data } = await request('/subscriptions', {
          params: {
             part: 'snippet,contentDetails',
 
             mine: true,
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })
       dispatch({
          type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data)
       dispatch({
          type: SUBSCRIPTIONS_CHANNEL_FAIL,
          payload: error.response.data,
       })
    }
 }
 
 export const getVideosByChannel = id => async dispatch => {
    try {
       dispatch({
          type: CHANNEL_VIDEOS_REQUEST,
       })
 
       const {
          data: { items },
       } = await request('/channels', {
          params: {
             part: 'contentDetails',
             id: id,
          },
       })
       const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads
       
       const { data } = await request('/playlistItems', {
          params: {
             part: 'snippet,contentDetails',
             playlistId: uploadPlaylistId,
             maxResults: 6,
          },
       })
 
       dispatch({
          type: CHANNEL_VIDEOS_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data.message)
       dispatch({
          type: CHANNEL_DETAILS_FAIL,
          payload: error.response.data,
       })
    }
 }

 