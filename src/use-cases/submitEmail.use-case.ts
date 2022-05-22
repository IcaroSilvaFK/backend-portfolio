import { INewUser } from "../interfaces/user.case.interface";

interface INewUserUseCase {
  email: string;
}

export class ISubmitEmailUseCase {
  constructor(private createNewUser: INewUser) {}

  async execute({ email }: INewUserUseCase) {
    if (!email) {
      throw new Error("Email is missing a type");
    }

    try {
      await this.createNewUser.create({ email });
    } catch (error) {
      throw new Error("Internal server error");
    }
  }
}
