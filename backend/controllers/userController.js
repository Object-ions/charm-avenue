import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// @desc Auth user and get token
// @route POST '/api/users/login'
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    // Create the token
    // The first object with the payload, and what we want to set in the payload is the user id. second item is the secret (we want to put it in the environment variable), last thing is the expiration date for the token (1d / 30d / ...)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', //if its in production mode it will be true (uses the https)
      sameSite: 'strict', // will prevent attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, //this is in milliseconds, the cookie will expire in 30 days (like the token)
    });

    // Validate email and password
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Register user
// @route POST '/api/users'
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('Register user');
});

// @desc Logout user and Clear cookie
// @route POST '/api/users/logout'
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  // jwt is the cookie name, we set it to an empty string in order to empty it
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'Logged out successfully' });
});

// @desc Get user profile
// @route GET '/api/users/profile'
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get user Profile');
});

// @desc Update user profile (this is for the user to update its own profile, so we will use the token vs the admin access)
// @route PUT '/api/users/profile'
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update user Profile');
});

// @desc Get users
// @route GET '/api/users'
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get users');
});

// @desc Get user by id
// @route GET '/api/users/:id'
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('Get user by id');
});

// @desc Delete user
// @route DELETE '/api/users/:id'
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete user');
});

// @desc Update user
// @route PUT '/api/users/:id'
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user');
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
