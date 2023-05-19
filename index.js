const readline = require('readline');

// Global variables
let username, role;

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Valid username and role combinations
const validCredentials = [
  { username: 'admin', role: 'admin' },
  { username: 'teacher', role: 'teacher' },
  { username: 'student', role: 'student' }
];

// Grade data
const grades = [
  { role: 'admin', average: 95, letter: 'A' },
  { role: 'teacher', average: 82, letter: 'B' },
  { role: 'student', average: 73, letter: 'C' }
];

// Login function
function login() {
  rl.question("Enter username: ", (enteredUsername) => {
    const matchedCredentials = validCredentials.find(
      (credentials) => credentials.username === enteredUsername
    );

    if (!matchedCredentials) {
      console.log("Invalid username.");
      rl.close();
    } else {
      username = enteredUsername;
      role = matchedCredentials.role;
      displayGrades();
    }
  });
}

// Function to display grades
function displayGrades() {
  const matchedGrade = grades.find((grade) => grade.role === role);

  if (!matchedGrade) {
    console.log("Role out of range.");
  } else {
    console.log(`Hello, ${role}, your average is ${matchedGrade.average}. The letter equivalent is ${matchedGrade.letter}`);
  }

  rl.close();
}

// Example usage of the login function
login();
