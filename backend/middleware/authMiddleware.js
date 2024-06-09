import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read the JWT from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      // Decode the token to get the user ID
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Now 'decoded' is an object that has a userId property on it
      req.user = await User.findById(decoded.userId).select('-password'); // theres no reason to return the password, even that it is hashed.

      // *** this user object (line 17) will be on req object in all our routes!!!

      next();
    } catch (error) {
      ews.status(401);
      throw new Error('Not Authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as admin');
  }
};

export { protect, admin };
