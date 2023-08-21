// const fs= require('fs')

// fs.readFile("message.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile("message.txt", "welcome feeni", (err) => {

import fs from'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';
inquirer
  .prompt([
    {
        name: 'msg',
        message: 'Type in your url: ',
        type: 'input'
    }])
  .then((answers) => {
    var qr_svg = qr.image(answers.msg);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    fs.writeFile('url.txt', answers.msg, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  });
