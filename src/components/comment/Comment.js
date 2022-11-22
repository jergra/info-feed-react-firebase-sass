import React from 'react'
import moment from 'moment'
import './_comment.scss'
const Comment = ({ comment }) => {
   const {
      authorDisplayName,
      authorProfileImageUrl,
      publishedAt,
      textDisplay,
   } = comment

   const NTextDisplay = textDisplay.replaceAll('&amp;', '&')
   const NNTextDisplay = NTextDisplay.replaceAll('</b>', '')
   const NNNTextDisplay = NNTextDisplay.replaceAll('<i>', '')
   const NNNNTextDisplay = NNNTextDisplay.replaceAll('</i>', '')
   const NNNNNTextDisplay = NNNNTextDisplay.replaceAll('&#39;', "'")
   const NNNNNNTextDisplay = NNNNNTextDisplay.replaceAll('&quot;', '"')
   const NNNNNNNTextDisplay = NNNNNNTextDisplay.replaceAll('<b>', '')
   
   var newTextDisplay = NNNNNNNTextDisplay.replaceAll('<br>', '')
   var part1 = ''
   var aLink = ''
   var part2 = ''
   //var modifiedTextDisplay = ''
   if (newTextDisplay.includes('</a>')) {
      console.log('newTextDisplay:', newTextDisplay)
      const startPosition = newTextDisplay.indexOf('<a')
      const endPosition = newTextDisplay.indexOf('</a>')
      //console.log('startPosition:', startPosition)
      //console.log('endPosition:', endPosition)
      const startLink = newTextDisplay.indexOf('href=')
      const endLink = newTextDisplay.indexOf('">')
      //console.log('startLink:', startLink)
      //console.log('endLink:', endLink)
      const theLink = newTextDisplay.substring(startLink + 6, endLink)
      //console.log('theLink:', theLink)
      part1 = newTextDisplay.substring(0, startPosition)
      const startClickable = newTextDisplay.indexOf('">')
      const endClickable = newTextDisplay.indexOf('</a>')
      //console.log('startClickable:', startClickable)
      //console.log('endClickable:', endClickable)
      const clickableText = newTextDisplay.substring(startClickable + 2, endClickable)
      //console.log('clickableText:', clickableText)
      aLink = <a href={theLink}>{clickableText}</a>
      part2 = newTextDisplay.substring(endPosition + 4, newTextDisplay.length)
      //console.log('part1:', part1)
      //console.log('aLink:', aLink)
      //console.log('part2:', part2)
      console.log('newTextDisplay:', newTextDisplay)
      
      return (
         <div className='p-2 comment d-flex'>
            <img
               src={authorProfileImageUrl}
               alt=''
               className='mr-3 rounded-circle'
            />
            <div className='comment__body'>
               <p className='mb-1 comment__header'>
                  {authorDisplayName} • {moment(publishedAt).fromNow()}
               </p>
               <p className='mb-0'>{part1}{aLink}{part2}</p>
            </div>
         </div>
      )
   } else {
      
      return (
         <div className='p-2 comment d-flex'>
            <img
               src={authorProfileImageUrl}
               alt=''
               className='mr-3 rounded-circle'
            />
            <div className='comment__body'>
               <p className='mb-1 comment__header'>
                  {authorDisplayName} • {moment(publishedAt).fromNow()}
               </p>
               <p className='mb-0'>{newTextDisplay}</p>
            </div>
         </div>
      )
   }
}

export default Comment

