

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
// //     // Is the same as this...
// //     profileDataArr.forEach(profileItem => console.log(profileItem))
// //     ;
// //   };
  
// //   printProfileData(profileDataArgs);

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {};

// // Function call to initialize app
// init();

// const generatePage = () => 'Name: Jane, Github: janehub';

// console.log(generatePage());

const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;



  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });