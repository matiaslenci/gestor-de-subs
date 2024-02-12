import { IUser } from '.';

export interface IRegisterResponse {
  user: IUser;
  token: string;
}
