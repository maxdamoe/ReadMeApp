

// // const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// // const printProfileData = profileDataArr => {
// //     // This...
// //     for (let i = 0; i < profileDataArr.length; i += 1) {
// //       console.log(profileDataArr[i]);
// //     }
  
// //     console.log('================');
  
// // //     // Is the same as this...
// // //     profileDataArr.forEach(profileItem => console.log(profileItem))
// // //     ;
// // //   };
  
// // //   printProfileData(profileDataArgs);

// // // TODO: Include packages needed for this application

// // // TODO: Create an array of questions for user input
// // const questions = [];

// // // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // // TODO: Create a function to initialize app
// // function init() {};

// // // Function call to initialize app
// // init();

// // const generatePage = () => 'Name: Jane, Github: janehub';

// // console.log(generatePage());

// const inquirer = require('inquirer');

// // const fs = require('fs');
// // const [name, github] = profileDataArgs;

// // const generatePage = require('./src/page-template');

// // const pageHTML = generatePage(name, github);

// // fs.writeFile('./index.html', pageHTML, err => {
// //   if (err) throw err;

// //   console.log('Portfolio complete! Check out index.html to see the output!');
// // });


// const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//       }
//     ]);
//   };
  
//   promptUser().then(answers => console.log(answers));

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});