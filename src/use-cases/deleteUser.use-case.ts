import { DeleteUser } from "../repositories/deleteUser.repositorie";

export class DeleUSerUseCase {
  constructor(private deleUserService: DeleteUser) {}
  async execute(id: string) {
    try {
      await this.deleUserService.delete(id);
    } catch (error) {
      throw new Error();
    }
  }
}
