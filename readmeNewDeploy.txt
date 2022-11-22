make another deployment of this repo:

clone the repo

package.json: change "name" to the new name

delete:
	.git
	.github
	.firebaserc
	firebase-debug.log
	firebase.json
	package-lock.json

npm install

add a project at firebase (stay on the same computer)

add a realtime database to the project

import database json data exported from yt-clone-personal-search

add an app by pressing '</>' to register app, choosing nickname in
step 1 then copying the firebaseConfig info in step 2

put the firebaseConfig in src\firebase.js

from firebase.js, get 'authDomain'
	e.g. yt-custom-search-2.firebaseapp.com
at src/screens/homescreen/HomeScreen.js line 87 change the url to:
	e.g. https://yt-custom-search-2.firebaseapp.com/
at src/screens/homescreen/HomeScreen.js line 88 change the url to:
	e.g. https://yt-custom-search-2.web.app/

under authentication (at firebase) add 'Google'

go to Google Developers Console, find the project in the drop-down (stay on the same computer)

under 'APIs & Services' under 'Library' add 'YouTube Data APIv3' -> enable

under 'APIs & Services' under 'Credentials', create an api key: 'create credentials', 'apikey'

copy this apikey into the .env file

'npm start' to verify local functioning, try making a change to the database contents




deploy without github, direct to firebase: 
(if we are deploying with Github Actions, don't do this. Go to 'deploy using GithubActions' below.)

npm run build

firebase login

firebase init
	ready? Y
	select -> configure files for Firebase Hosting
	Use an existing project
	public directory -> build
	single-page app? N
	builds and deploys with Github? N
	Overwrite? N

firebase deploy




deploy using Github Actions:

add 'CI=false' to build script in package.json
we need .env on github, so make sure .gitignore is not stopping it

Go to github, staying on the same computer

create a new repository (private)

git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/jergra/<project name>.git
git branch -M main
git push -u origin main 

if you are logged in to firebase, logout

firebase login

firebase init
	ready? Y
	select 'Hosting: Configure files'
	Use an existing project
	public directory -> build
	single-page app? y
note:	builds and deploys with Github? y
	Overwrite index.html? N

	For which Github ...? jergra/<project name>
	Set up the workflow ... before every deploy? y
	What script? (npm ci && npm run build)
	Set up automatic ... when PR is merged? Y
	What is the name ... live channel? (main)

	git add .
	git commit -m "add ci/cd"
	git push origin main
	







