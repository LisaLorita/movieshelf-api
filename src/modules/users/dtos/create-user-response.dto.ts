export class CreateUserResponse {
  username!: string;
  email!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(username: string, email: string, createdAt: Date, updatedAt: Date) {
    this.username = username;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static create(username: string, email: string, createdAt: Date, updatedAt: Date): CreateUserResponse {
    return new CreateUserResponse(username, email, createdAt, updatedAt);
  }
}