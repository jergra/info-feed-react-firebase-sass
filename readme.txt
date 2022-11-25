to do:
  update scss file terminology to refer to speed, terms, pages

  try putting location (speed) retrieval in the bottom useEffect
  with an axios await

  make the search pages invisible so that they cannot
  be removed

  remove the youtubeAPI functionality

  make pages individually deletable

  

Nov 22, 2022

C:\dev\info-feed-react-firebase-sass
(on the old computer since it needs node 16; 
an npm install with node 18 will fail)

This has cloned 'C:\webdev\yt-data-api-custom' (old computer)
which is  https://yt-data-api-custom.web.app/
and changed it into an information feed. 

See 'readmeNewDeploy.txt' for instructions on how to turn 
a clone into a new deployment.

This project has authentication such that anyone can sign up 
through google and use the app with his own website feed 
and search terms.

deployed:
  https://info-feed-react-firebase-sass.firebaseapp.com
  https://info-feed-react-firebase-sass.web.app

update:
  git add .
  git commit -m 'message'
  git push

Database rules at Firebase need to look like this:

{
  "rules": {
    "users": {
      "$uid": {
        // Allow only authenticated content owners access to their data
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid"
      }
    }
  }
}



  genealogy of the project:


      november 24, 2021

      'C:\webdev\yt-data-api-custom'

      This is a second deploy of 'C:\webdev\yt-custom' with the 
      code cleaned up. As with C:\webdev\yt-custom', the database
      now uses UIDs instead of names, and has secure rules, so 
      it should continue to run indefinitely.

      start locally:
          npm start

      Uses Github Actions for updates: 
        git add . 
        git commit -m "message" 
        git push

      deployed at firebase:
          https://yt-data-api-custom.web.app/
          https://yt-data-api-custom.firebaseapp.com/


      november 21, 2021

      'C:\webdev\yt-custom'

      this is a deploy of 'C:\webdev\yt-custom-search-2' that 
      uses Github Actions. With Github Actions, updating is simpler: 
        git add . 
        git commit -m "message" 
        git push
        
      See readmeNewDeploy.txt for instructions on how to deploy.

      start locally:
          npm start

      deployed at firebase:
          https://yt-custom-api.web.app/
          https://yt-custom-api.firebaseapp.com/


      november 20, 2021

      THIS WAS UNDEPLOYED

      'C:\webdev\yt-custom-search-2'

      This is a second deploy of:

      'C:\webdev\yt-clone-personal-search'

      It is a relatively simple deploy without need of github.
      See readmeNewDeploy.txt for instructions on how to deploy.

      This is a multi-user app (i.e. it has authentication and a database)
      for finding YouTube videos by location and by the interests of the user. 

      Instructions for making new deploys are in readmeNewDeploy.txt

      - number of videos retrieved is 'maxResults' in video.action.js

      start locally:
          npm start

      deployed at firebase:
          https://yt-custom-search-2.web.app/
          https://yt-custom-search-2.firebaseapp.com/

      To update the deployed website:

          npm run build
          firebase login
          firebase init hosting
        Are you ready to proceed? Y
              Use an existing project? (choose from existing projects)
        What do you want to use as your public directory? (public)
          type 'build' (just the word, no apostrophes)
        Configure as a single-page app? N
        Set up automatic builds and deploys with Github? N
        File build/index.html already exists. Overwrite? N
          firebase deploy --only hosting

        'Follow link' to deployed website. Might need to reload to see changes take effect.

      An alternative to the above githubless deploy would be the use of 
      Github Actions. Deploy of C:\webdev\yt-clone-personal-search using Github 
      Actions is demonstrated in C:\webdev\yt-custom.


      november 17, 2021

      THIS WAS UNDEPLOYED

      'C:\webdev\yt-clone-personal-search'

      This is now a multi-user app (i.e. it has authentication and a database)
      for finding YouTube videos by location and by the interests of the user. 


      november 5, 2021

      'C:\webdev\yt-clone-personal-search' was completed and deployed 
      for a single user. It found Vancouver videos related to my interests.

      The project was a modification of 'C:\webdev\yt-clone>'. 

      This is what C:\webdev\yt-clone was about:
          Latitude and longitude access to youtube api, derived from tutorial:
            Fully Functional YouTube Clone | React | Redux | Firebase | YouTube API 
            by Backbench Coder
            as a 6.75-hour single file:     https://www.youtube.com/watch?v=Mos5QJAje28
            as a playlist:                  https://www.youtube.com/playlist?list=PLQKg8mIgoxKraMfKckMux0tLJfQEivnKv

      - number of videos retrieved is 'maxResults' in video.action.js

      start locally:
          npm start

      deployed at firebase:
          yt-clone-personal-search.web.app
          yt-clone-personal-search.firebaseapp.com

      updates:
          git add .
          git commit -m "message"
          git push

      Updates uses github actions. Go to the repo at github and click 'Actions' 
      to observe the progress of an update.

      Go to the video at 6:11:09 to follow the procedure for deployment
      using github actions.


