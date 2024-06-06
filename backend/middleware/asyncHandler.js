// in this way we don't have to have all this try catch blocks- we can handle errors through express.
// function that takes request, response and next, its gonna resolve a promise, and if it resolves it gonna call 'next' which then calls the next pice of middleware
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
