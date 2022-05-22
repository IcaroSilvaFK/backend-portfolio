import { Router } from "express";

import { DeleteUserRoute } from "../interceptors/deleteUser";
import { GetUsersRoute } from "../interceptors/getUsers";
import { NewUser } from "../interceptors/newUser";
import { HeaderAllow } from "../middleware/headerAllow";

const routes = Router();

routes.post("/", NewUser.NewUserRoute);
routes.get("/", HeaderAllow, GetUsersRoute.getAllUsers);
routes.delete("/:id", HeaderAllow, DeleteUserRoute.deleteUser);

export { routes };
