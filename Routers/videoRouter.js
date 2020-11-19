import express from "express";
import routes from "../routes";
import {
  Video_videos,
  Video_videoDetail,
  Video_delVideo,
  Video_getUpload,
  Video_postUpload,
  Video_postEditVideo,
  Video_getEditVideo,
} from "../Controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";
import { on } from "nodemon";

const videoRouter = express.Router();

videoRouter.get(routes.videos, Video_videos);

//Upload
videoRouter.get(routes.upload, onlyPrivate, Video_getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, Video_postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), Video_videoDetail);

//Editing Video
videoRouter.get(routes.editVideo(), onlyPrivate, Video_getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, Video_postEditVideo);

videoRouter.get(routes.delVideo(), onlyPrivate, Video_delVideo);

export default videoRouter;
