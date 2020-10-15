import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  postSpliceComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment, postSpliceComment);

export default apiRouter;
