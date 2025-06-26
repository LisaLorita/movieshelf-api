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
    } catch (error: any) {
      if (error.code === 11000 && error.keyPattern) {
        if (error.keyPattern.email) {
          throw { status: 409, message: "Email already exists" };
        }
        if (error.keyPattern.username) {
          throw { status: 409, message: "Username already exists" };
        }
      }
      throw({ message: 'Could not create user', error });
    }
  }
}

export default new UsersService();