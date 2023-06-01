// let LemparDadu = Math.floor(Math.random() * 6) + 1;

// console.log(LemparDadu);

// function lemparDadu() {

//  console.log(Math.floor(Math.random() * 6) + 1);

// };

// lemparDadu();

// function selamatDatang(name) {

//   console.log(`Hallo, ${name} Selamat Datang`);
//   console.log('');

// }

// selamatDatang('Nani');

// looping js node.js

// const tech = 'node.js';

// for (let i = 0; i < 3; i++){

//   console.log(`Hello, world this is ${tech}`);

// }

// const belokKanan = true;

// if (belokKanan == false){
//   console.log('belok kekanan');
// } else {
//   console.log('belok kekiri');
// }

// nested if
const password = prompt("buat password");

// password harus sepanjang 6 karakter
if (password.length >= 6){
  if (password.indexOf(' ') === -1){
    console.log("Password tervalidasi");
  } else {
    console.log("password tidak boleh ada sepasi");
  }
} else {
  console.log("Password minimal 6 karakter");
}

