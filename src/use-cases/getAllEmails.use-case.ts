import { GetUsers } from "../repositories/getUSer.repositorie";

export class GetAllEmails {
  constructor(private userClient: GetUsers) {}

  async execute() {
    try {
      const response = await this.userClient.getAll();

      return response;
    } catch (error) {
      throw new Error();
    }
  }
}
