import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//strategy는 로그인 하는 방식...즉 깃헙,페이스북 같은username과 password로 로그인 하는것들을 해줌

//serializeUser는 user.id를 백앤드로 전송해줌. 민감한 정보를 담지 않음
//deserialize는 그 쿠키의 정보를 어떻게 사용자로 전환하는가를 의미
