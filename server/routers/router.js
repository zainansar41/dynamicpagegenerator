import { Router } from "express";
import * as ApiControllers from "../controllers/apis/apiCon.js";
import * as AppControllers from "../controllers/appcon/appCon.js";
import auth from "../middlewares/auth.js";

const router = Router();



export default router;