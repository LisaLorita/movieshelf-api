import mongoose from "mongoose";
import bcrypt from "bcryptjs"; 


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },  
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

UserSchema.pre('save', async function(next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (error) {
    if (error instanceof Error) {
      next(new Error(`Error hashing password: ${error.message}`));
    }
  }
});

const User = mongoose.model("User", UserSchema);

export default User;