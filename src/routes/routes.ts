import { Router } from "express";
import { CreateImageInterceptor } from "../interceptors/createImage";

import { DeleteUserRoute } from "../interceptors/deleteUser";
import { GetImagesInterceptor } from "../interceptors/getImages";
import { GetUsersRoute } from "../interceptors/getUsers";
import { NewUser } from "../interceptors/newUser";

const routes = Router();

routes.post("/", NewUser.NewUserRoute);
routes.get("/", GetUsersRoute.getAllUsers);
routes.delete("/:id", DeleteUserRoute.deleteUser);

// * Images

routes.get("/image", GetImagesInterceptor.getAllImages);
routes.post("/image", CreateImageInterceptor.createImage);

export { routes };
