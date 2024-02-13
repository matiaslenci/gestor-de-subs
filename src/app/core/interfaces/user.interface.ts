export interface IUser {
  id: string;
  email: string;
  fullName: string;
  avatar: string;
  isActive: boolean;
  roles: Roles[];
}

export enum Roles {
  admin = 'admin',
  user = 'user',
}
