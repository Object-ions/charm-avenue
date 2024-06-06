const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); // getting the originalUrl from the request object
  res.status(404); // changing the status on the response object to 404
  next(error); // calling the next pice od middleware passing the error variable
};

// To overwrite the default express handler, we create a fx, that gets passed in not only the req, res,next but also error at the beginning
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // in order to throw an error, if its 200 i want to change it to 500 if its anything else (i.e. 404) its going to stay the same

  let message = err.message; // if we say 'throw new Error' we will have access to the message property in this variable

  // Check for mongoose bad objectId
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = `Resource not found`;
    statusCode = 404;
  }

  // Final response
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'N/A' : err.stack,
  });
};

export { notFound, errorHandler };
