import { Router } from "express";
import { DeleteUserRoute } from "../interceptors/deleteUser";
import { GetUsersRoute } from "../interceptors/getUsers";
import { NewUser } from "../interceptors/newUser";

const routes = Router();

routes.post("/", NewUser.NewUserRoute);
routes.get("/", GetUsersRoute.getAllUsers);
routes.delete("/", DeleteUserRoute.deleteUser);

export { routes };
