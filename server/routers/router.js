import { Router } from "express";
import * as ApiControllers from "../controllers/apis/apiCon.js";
import * as AppControllers from "../controllers/appcon/appCon.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.route("/api/get").get(ApiControllers.getMethod);
router.route("/api/register").post(ApiControllers.register);
router.route("/api/login").post(ApiControllers.login);



export default router;