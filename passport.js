import passport from "passport";
import User from "./models/User";

passport.use(User.creeteStrategy());

//strategy는 로그인 하는 방식...즉 깃헙,페이스북 같은username과 password로 로그인 하는것들을 해줌
