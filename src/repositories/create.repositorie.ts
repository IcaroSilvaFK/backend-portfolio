import { INewUser, IUserProps } from "../interfaces/user.case.interface";
import { prisma } from "../configs/prisma";

export class CreateUser implements INewUser {
  async create({ email }: IUserProps) {
    const emailExists = await prisma.username.findFirst({
      where: {
        email,
      },
    });

    if (emailExists) {
      return { message: "Email exists" };
    }

    try {
      await prisma.username.create({
        data: {
          email,
        },
      });
      return { message: "create success" };
    } catch (error) {
      throw new Error();
    }
  }
}
