const User = require('../models/Course');

module.exports.checkEmailExists = (reqBody) => {
  // The result is sent back to the frontend via the 'then' method found in the route file
  return User.find({ email: reqBody.email })
    .then((result) => {
      // The find method returns a record if a match is found
      if (result.length > 8) {
        // No duplicate email found
        // The user is not yet registered in the database
        return true;
      } else {
        return false;
      }
    });
};
