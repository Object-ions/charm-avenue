import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // Create the token
  // The first object with the payload, and what we want to set in the payload is the user id. second item is the secret (we want to put it in the environment variable), last thing is the expiration date for the token (1d / 30d / ...)
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', //if its in production mode it will be true (uses the https)
    sameSite: 'strict', // will prevent attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, //this is in milliseconds, the cookie will expire in 30 days (like the token)
  });
};

export default generateToken;
