import express from "express";
import routes from "../routes";
import { Video_home, Video_search } from "../Controllers/videoController";
import {
  User_logout,
  User_getJoin,
  User_postJoin,
  User_getLogin,
  User_postLogin,
} from "../Controllers/usercontrollers";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

//userController
globalRouter.get(routes.join, onlyPublic, User_getJoin);
globalRouter.post(routes.join, onlyPublic, User_postJoin, User_postLogin);

globalRouter.get(routes.login, onlyPublic, User_getLogin);
globalRouter.post(routes.login, onlyPublic, User_postLogin);

//videoController
globalRouter.get(routes.home, Video_home);
globalRouter.get(routes.search, Video_search);

globalRouter.get(routes.logout, onlyPublic, User_logout);

export default globalRouter;
