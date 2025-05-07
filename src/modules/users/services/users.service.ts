import { CreateUserRequest } from "../dtos/create-user-request.dto";
import { CreateUserResponse } from "../dtos/create-user-response.dto";
import User from "../models/user.model";

class UsersService {
  async createUser(UserData: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      const newUser = new User(UserData);
      const createdUser = await newUser.save();
      const userResponse = CreateUserResponse.create(createdUser.username, createdUser.email, createdUser.createdAt, createdUser.updatedAt);
      return userResponse;
    } catch (error) {
      throw({ message: 'Could not create user', error });
    }
  }
}

export default new UsersService();