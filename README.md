# 위튜브 웹 어플리케이션
![ex_screenshot](https://dragoocho.netlify.app/static/26036ed739b6b0074e28a8fd3f0588f9/c1b63/wetube.png)
<br />
<br />
## 주요 기술 스택  
javascript, Node.js, Pug
<br />
<br />
## 구현 배경
- heroku에 배포해서 볼 수있는 홈페이지라 처음 접속하면 사이트가 깨어나는데 최대 30초 ~ 1분 정도의 시간이 걸립니다.

<br />

- node.JS 에 베이스를 둔 database, Server 외 벡엔드의 개념을 익히기 위해 시작한 프로젝트였으나    
생소한 개념에 이해하기 힘든 적이 자주 있었고 지금도 이 사이트 구현에 대한 고민은 현재 진행 중 입니다. 

<br />

- 개인적으로 과제을 구현하면서 가장 당혹스럽게 한 것은 그저 배운대로 코드를 진득하게 짰는데도    
불구하고 중간에 여러 오류을 만나는 것 이었습니다. 오타로 인한 건 이해하지만 그 외에 생기는 여러 오류가         
왜 자주 발생하는지 이해를 못했었는데 package.json에 명시된 모듈(앱)들의 버전이 맞지 않는다든지           
앱의 정책이나 성격이 달라져서 노드늘 추가로 넣어준다든지, 로컬에서는 문제없던 동영상 재생시간이 헤로쿠에           
푸시한 사이트에서는 작동을 안 하던지 등 여러 오류가 생겼으며 해결이 아직 안 된 오류도 있습니다.

<br />

- 결과적으로 이 과제물을 제작하면서 저에게는 문제해결능력을 성장시킨 원동력이 됐지만 동시에 node.JS 과      
벡엔드에 대해 모르는 개념이 여전히 많다는걸 실감했고 그런 경험을 바탕으로        
자바스크립트의 개념을 더욱 숙련 시켜야겠다는 개인적인 숙제을 남겼습니다.   
<br />
<br />
<h2>File-tree</h2>
<br />
📦src
 ┣ 📂assets
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📜addComment.js
 ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┣ 📜videoPlayer.js
 ┃ ┃ ┗ 📜videoRecorder.js
 ┃ ┗ 📂scss
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┣ 📜reset.scss
 ┃ ┃ ┃ ┣ 📜utils.scss
 ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜home.scss
 ┃ ┃ ┃ ┣ 📜userProfile.scss
 ┃ ┃ ┃ ┗ 📜videoDetail.scss
 ┃ ┃ ┣ 📂partials
 ┃ ┃ ┃ ┣ 📜footer.scss
 ┃ ┃ ┃ ┣ 📜form.scss
 ┃ ┃ ┃ ┣ 📜header.scss
 ┃ ┃ ┃ ┣ 📜messages.scss
 ┃ ┃ ┃ ┣ 📜socialLogin.scss
 ┃ ┃ ┃ ┣ 📜videoBlock.scss
 ┃ ┃ ┃ ┣ 📜videoPlayer.scss
 ┃ ┃ ┃ ┗ 📜videoRecorder.scss
 ┃ ┃ ┣ 📜main.scss
 ┃ ┃ ┗ 📜styles.scss
 ┣ 📂controllers
 ┃ ┣ 📜userController.js
 ┃ ┗ 📜videoController.js
 ┣ 📂models
 ┃ ┣ 📜Comment.js
 ┃ ┣ 📜User.js
 ┃ ┗ 📜Video.js
 ┣ 📂routers
 ┃ ┣ 📜apiRouter.js
 ┃ ┣ 📜globalRouter.js
 ┃ ┣ 📜userRouter.js
 ┃ ┗ 📜videoRouter.js
 ┣ 📂static
 ┃ ┣ 📜main.js
 ┃ ┗ 📜styles.css
 ┣ 📂uploads
 ┃ ┣ 📂avatars
 ┃ ┗ 📂videos
 ┃ ┃ ┣ 📜08471a8d9857b943f565559a6bb9e088
 ┃ ┃ ┣ 📜f2c8c9a1e8829380c3043a051e544b82
 ┃ ┃ ┗ 📜fe3ecfce1bbecf97d87c328cc74c41db
 ┣ 📂views
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📜main.pug
 ┃ ┣ 📂mixins
 ┃ ┃ ┣ 📜message.pug
 ┃ ┃ ┣ 📜videoBlock.pug
 ┃ ┃ ┗ 📜videoPlayer.pug
 ┃ ┣ 📂partials
 ┃ ┃ ┣ 📜footer.pug
 ┃ ┃ ┣ 📜header.pug
 ┃ ┃ ┗ 📜socialLogin.pug
 ┃ ┣ 📜changePassword.pug
 ┃ ┣ 📜deleteVideo.pug
 ┃ ┣ 📜editProfile.pug
 ┃ ┣ 📜editVideo.pug
 ┃ ┣ 📜home.pug
 ┃ ┣ 📜join.pug
 ┃ ┣ 📜login.pug
 ┃ ┣ 📜search.pug
 ┃ ┣ 📜upload.pug
 ┃ ┣ 📜userDetail.pug
 ┃ ┗ 📜videoDetail.pug
 ┣ 📜app.js
 ┣ 📜db.js
 ┣ 📜init.js
 ┣ 📜middlewares.js
 ┣ 📜passport.js
 ┣ 📜routes.js
 ┗ 📜webpack.config.js
<br />
<br />

## DEMO
https://thawing-bayou-05092.herokuapp.com/
