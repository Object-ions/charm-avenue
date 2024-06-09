import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamp: true }
);

// This method will check if the password that the user insert is the same as the password that the user has in the database (encrypted)
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypting the password when user register, before it saved in the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    // if this is not modified password we gonna call the next middleware
    //if we are saving some user data but we are not dealing with the password its just gonna ove on (next)
    next();
  }

  // if we are modifying the password we gonna generate a salt
  const salt = await bcrypt.genSalt(10);
  // "this" refers to the current user that we are saving
  // and instead to save it to plain text we gonna save it to a hash password (that takes the password and the salt)
  this.password = await bcrypt.hash(this.password, salt);
});

const User = new mongoose.model('User', userSchema);

export default User;
