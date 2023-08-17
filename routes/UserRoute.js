import express from "express";
import {
    getUsers,
    getUserByName,
    saveUser,
    deleteUser,
    updateUser
} from "../controller/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:name", getUserByName);
router.post("/users", saveUser);
router.delete("/users/:name", deleteUser);
router.patch("/users/:name" , updateUser)

export default router;
