import mongoose from "mongoose";
import bcrypt from "bcrypt";

const comparePasswords = async (plainText: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(plainText, hashedPassword);
};

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = await bcrypt.hash(user.password, 10);

  next();
});

UserSchema.methods.checkPassword = async function (password) {
  return await comparePasswords(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;