import { Request, Response } from "express";
import { DeleUSerUseCase } from "../use-cases/deleteUser.use-case";
import { DeleteUser } from "../repositories/deleteUser.repositorie";

export class DeleteUserRoute {
  static async deleteUser(request: Request, response: Response) {
    const { id } = request.params;

    console.log(id);

    if (!id) {
      return response.status(400).json({ message: "Id is missing a type" });
    }

    try {
      const DeleUser = new DeleteUser();
      const DeleUserUseCase = new DeleUSerUseCase(DeleUser);

      await DeleUserUseCase.execute(id);
      return response.status(200).json({ message: "User delete success" });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
