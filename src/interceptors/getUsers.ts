import { Request, Response } from "express";
import { GetAllEmails } from "../use-cases/getAllEmails.use-case";
import { GetUsers } from "../repositories/getUSer.repositorie";

export class GetUsersRoute {
  static async getAllUsers(request: Request, response: Response) {
    try {
      const getAllEmailsRepositorie = new GetUsers();
      const getAllEmailsUseCase = new GetAllEmails(getAllEmailsRepositorie);
      const data = await getAllEmailsUseCase.execute();

      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
