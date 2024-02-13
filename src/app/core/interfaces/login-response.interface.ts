import { IUser } from '.';

export interface ILoginResponse {
  user: IUser;
  token: string;
}
