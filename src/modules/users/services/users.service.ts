// import { CreateUserRequest } from "../dtos/create-user-request.dto";
// import { CreateUserResponse } from "../dtos/create-user-response.dto";
import User from "../models/user.model";
import { UserRequest, UserResponse } from "../models/users.types";

class UsersService {
  async createUser(UserData: UserRequest): Promise<UserResponse> {
    try {
      const newUser = new User(UserData);
      const createdUser = await newUser.save();
      return {
        id: createdUser._id.toString(),
        username: createdUser.username,
        email: createdUser.email,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
      };
    } catch (error) {
      throw({ message: 'Could not create user', error });
    }
  }
}

export default new UsersService();