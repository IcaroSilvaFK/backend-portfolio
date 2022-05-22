import { prisma } from "../configs/prisma";

export class DeleteUser {
  async delete(id: string) {
    const emailExists = await prisma.username.findFirst({
      where: {
        id,
      },
    });

    if (!emailExists) {
      return "Id not exists";
    }

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
