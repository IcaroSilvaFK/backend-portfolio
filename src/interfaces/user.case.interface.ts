export interface IUserProps {
  email: string;
}

export interface INewUser {
  create: (user: IUserProps) => Promise<{ message: string }>;
}
