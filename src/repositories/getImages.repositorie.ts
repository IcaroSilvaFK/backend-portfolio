import { prisma } from "../configs/prisma";

export class GetImages {
  async getAll() {
    try {
      return prisma.images.findMany();
    } catch (error) {
      throw new Error();
    }
  }
}
