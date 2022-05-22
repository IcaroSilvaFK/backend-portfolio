import { prisma } from "../configs/prisma";

export class DeleteUser {
  async delete(id: string) {
    try {
      await prisma.username.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }
}
