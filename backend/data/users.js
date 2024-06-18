import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcryptjs.hashSync('ABC123!@#', 10), //this will hash the password. the 10 represents the level of hashing, is called 'salt' and it is between 1 to 20 (10 is right in he middle)
    isAdmin: true,
  },
  {
    name: 'Guest User',
    email: 'guest@gmail.com',
    password: bcryptjs.hashSync('ABC123!@#', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    password: bcryptjs.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
