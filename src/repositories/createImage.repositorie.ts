import { prisma } from "../configs/prisma";

interface ICreateImageProps {
  image_url: string;
  alt: string;
}

export class CreateImage {
  async createImage({ image_url, alt }: ICreateImageProps) {
    try {
      const response = await prisma.images.create({ data: { image_url, alt } });
      return response;
    } catch (error) {
      throw new Error();
    }
  }
}
