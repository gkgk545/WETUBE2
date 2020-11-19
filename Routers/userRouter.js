import express from "express";
import routes from "../routes";
import {
  User_userDetail,
  User_editProfile,
  User_changePassword,
} from "../Controllers/usercontrollers";

import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, User_editProfile);
userRouter.get(routes.changePassword, onlyPrivate, User_changePassword);
userRouter.get(routes.userDetail(), User_userDetail);

export default userRouter;
