import { CreateImage } from "../repositories/createImage.repositorie";

interface IExecuteProps {
  image_url: string;
  alt: string;
}

export class CreateImageUseCase {
  constructor(private createImageService: CreateImage) {}

  async execute({ alt, image_url }: IExecuteProps) {
    try {
      const response = await this.createImageService.createImage({
        image_url,
        alt,
      });

      return response;
    } catch (error) {
      throw new Error();
    }
  }
}
