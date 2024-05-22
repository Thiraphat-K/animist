import { User } from "./sharedInterfaces";

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface UserApi {
  getAllUser?: () => Promise<ApiResponse<User[]>>
  getUser?: (id: number) => Promise<ApiResponse<User>>;
  createUser: (user: User) => Promise<ApiResponse<User>>;
}