import { Router } from "express";
import * as ApiControllers from "../controllers/apis/apiCon.js";
import * as AppControllers from "../controllers/appcon/appCon.js";
import auth from "../middlewares/auth.js";
import appAuth from "../middlewares/appAuth.js";

const router = Router();

router.route("/api/get").get(ApiControllers.getMethod);
router.route("/api/register").post(ApiControllers.register);
router.route("/api/login").post(ApiControllers.login);
router.route('/login').get(AppControllers.GetLogin)
router.route('/signup').post(AppControllers.PostSignup)
router.route('/login').post(AppControllers.PostLogin)
router.route('/home').get(appAuth, AppControllers.GetHome)
router.route('/uploadNavbar').post(AppControllers.uploadNavbar)


export default router;