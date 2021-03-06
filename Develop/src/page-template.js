// ------- TITLE ---------
const generatePage = (data) => {
  return ` 

  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>README Generator</title>
</head>

<body>
  <h1>${data.title}</h1>
  <div>
    <h2 id='description'>Description</h2>
    <p>${data.description}</p>
  </div>
  <div>
    <h1> Table of Contents </h2>
    <ul>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#tests">Tests</a></li>
      <li><a href="#questions">Questions</a></li>
    </ul>
  </div>
 <div>
   <h2 id='installation'> ### Installation: </h2>
   <p> In order to install the required dependencies for this project, open the console and run the following command:
    ${data.installation} </p>
 </div>
 <div>
   <h2 id='usage'> ### Usage: </h2>
   <p> ${data.usage} </p>
 </div>
 <div>
   <h2 id='license'> ### License:</h2>
   <p>This project is licensed under: ${data.license}
   </p>
   <p> This is the description based on the license that is chosen!</p>
   <p> this this where the image / badge based on the license would go if I understood how to do it! </p>
 </div>
 <div>
   <h2 id='contributing'> ### Contributing:</h2>
   <p>{data.contributing}</p>
 </div>
 <div>
   <h2 id='tests'>### Tests:</h2>
   <p>In order to test this application, open the console and run the following command:
    ${data.tests}</p>
 </div>
 <div>
   <h2 id='questions'>### Questions:</h2>
   <p>If there are any questions regarding this project, please contact ${data.author} by email at ${data.email}, or reach
    out to them via their github: <a href="https://github.com/${data.github}">Creator Github</a></p>
 </div>
  
</body>
</html>
  `
};

module.exports = generatePage;