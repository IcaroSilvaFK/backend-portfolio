import { Request, Response } from "express";
import { CreateUser } from "../repositories/create.repositorie";
import { ISubmitEmailUseCase } from "../use-cases/submitEmail.use-case";

export class NewUser {
  static async NewUserRoute(request: Request, response: Response) {
    const { email } = request.body;

    if (!email) {
      return response.status(400).json({ message: "Email is missing a type" });
    }
    try {
      const createNewUserRepositorie = new CreateUser();
      const createUserUseCase = new ISubmitEmailUseCase(
        createNewUserRepositorie
      );
      const { message } = await createUserUseCase.execute({ email });
      if (message === "Email exists") {
        return response.status(400).json({ message });
      }
      return response.status(201).json({ message });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
