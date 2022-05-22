import { DeleteUser } from "../repositories/deleteUser.repositorie";

export class DeleUSerUseCase {
  constructor(private deleUserService: DeleteUser) {}
  async execute(id: string) {
    try {
      const response = await this.deleUserService.delete(id);

      return response;
    } catch (error) {
      throw new Error();
    }
  }
}
