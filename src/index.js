import validatePassword from './validate-password';
import {
  fetchAllUsers as z,
  fetchUserById,
  updateUserById,
} from './api-service';

console.log('Hello, sorry');
console.log(validatePassword());
console.log(z());
console.log(fetchUserById());
console.log(updateUserById());
