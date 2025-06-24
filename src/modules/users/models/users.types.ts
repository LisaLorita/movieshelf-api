export interface UserRequest {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}