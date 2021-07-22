const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');




const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions'
    },
    {
      type: 'choices',
      choices: ["apache", 'other'],
      name: 'license',
      message: 'What is the license for this project?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please add instructions for how others can contribute to this project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the command(s) necessary to test this project',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Please enter the name of the project creator',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address for questions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username for questions',
    },
]);
  
 

    questions()
    .then((data) => fs.appendFile('index.html', generatePage(data), (err) => { 
    if (err)  
    console.log(err); 
    }))
    .then(() => console.log('Success! Please check index.html to see your completed README file!'))
    .catch((err) => console.error(err))