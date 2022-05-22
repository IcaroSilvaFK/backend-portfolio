import { INewUser, IUserProps } from "../interfaces/user.case.interface";
import { prisma } from "../configs/prisma";

export class CreateUser implements INewUser {
  async create({ email }: IUserProps) {
    try {
      await prisma.username.create({
        data: {
          email,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }
}
