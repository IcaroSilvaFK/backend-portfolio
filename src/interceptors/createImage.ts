import { Request, Response } from "express";
import { CreateImage } from "../repositories/createImage.repositorie";
import { CreateImageUseCase } from "../use-cases/createImage.use-case";

export class CreateImageInterceptor {
  static async createImage(request: Request, response: Response) {
    const createImageRepositorie = new CreateImage();
    const createImageUseCase = new CreateImageUseCase(createImageRepositorie);

    const { image_url, alt } = request.body;

    if (!image_url || !alt) {
      return response
        .status(404)
        .json({ message: "Image or Alt is missing a type" });
    }

    try {
      const data = await createImageUseCase.execute({ image_url, alt });

      return response.status(201).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
