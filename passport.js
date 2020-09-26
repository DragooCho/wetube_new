import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
  facebookLoginCallback,
  githubLoginCallback,
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
      scope: "user:email",
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`,
    },
    facebookLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

//strategy는 로그인 하는 방식...즉 깃헙,페이스북 같은username과 password로 로그인 하는것들을 해줌

//serializeUser는 user.id를 백앤드로 전송해줌. 민감한 정보를 담지 않음
//deserialize는 그 쿠키의 정보를 어떻게 사용자로 전환하는가를 의미

//기존의 (User.serializeUser())함수가
//Error: Failed to serialize user into session 에러
//를 일으켜서 (function (user, done) {done(null, user);으로
//전환함. 위튜브 #6.8 강의 시점에서는 동작을 잘함.
