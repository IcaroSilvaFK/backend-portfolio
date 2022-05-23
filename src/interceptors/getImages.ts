import { Request, Response } from "express";
import { GetImages } from "../repositories/getImages.repositorie";
import { GetAllImagesUseCase } from "../use-cases/getAllImages.use-case";

export class GetImagesInterceptor {
  static async getAllImages(request: Request, response: Response) {
    const getImagesRepositorie = new GetImages();
    const getImagesUseCase = new GetAllImagesUseCase(getImagesRepositorie);

    try {
      const data = await getImagesUseCase.execute();

      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
