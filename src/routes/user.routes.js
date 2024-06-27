import { Router } from "express";
import {
    loginUser,
    logoutUser,
    registerUser,
    getOrders,
    getUsers,
    verifyEmail
} from "../controllers/user.controller.js"
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/verifyEmail").post(verifyEmail)

router.route('/getOrdersOfSpecificUser')
  .get(verifyJWT, authorizeRoles('admin'), getOrders)
router.route("/getUserWhoPlacedOrder").get(verifyJWT,getUsers);



export default router