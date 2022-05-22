import { prisma } from "../configs/prisma";

export class GetUsers {
  async getAll() {
    try {
      const users = await prisma.username.findMany();

      return users;
    } catch (error) {
      throw new Error();
    }
  }
}
