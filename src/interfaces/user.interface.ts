interface IUserProps {
  email: string;
}

export interface IUserMethods {
  insert: (data: IUserProps) => Promise<void>;
}
