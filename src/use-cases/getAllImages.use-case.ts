import { GetImages } from "../repositories/getImages.repositorie";

export class GetAllImagesUseCase {
  constructor(private imagesService: GetImages) {}
  async execute() {
    const response = await this.imagesService.getAll();

    if (!response) {
      return {
        message: "Cannot images",
      };
    }

    return response;
  }
}
