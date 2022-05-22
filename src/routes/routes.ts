import { Router } from "express";
import { GetUsersRoute } from "../interceptors/getUsers";
import { NewUser } from "../interceptors/newUser";

const routes = Router();

routes.post("/", NewUser.NewUserRoute);
routes.get("/", GetUsersRoute.getAllUsers);

export { routes };
