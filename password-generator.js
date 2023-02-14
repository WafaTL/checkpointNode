 //password generator
var generator = require('generate-password');
 var passwords = generator.generateMultiple(3, {
	length: 10,
	uppercase: false,
    numbers: true
   

});console.log(passwords);