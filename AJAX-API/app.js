// const req = new XMLHttpRequest();

// let data;

// // callback function berhasil
// req.onload = function() {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// // callback function gagal
// req.onerror = function() {
//   console.log("error", this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1');
// myReq.setRequestHeader('Accept', 'application/json');
// req.send();


//menggunakan method fetch
// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     if(!res.ok) {
//       throw ERROR('Could not fetch the data for that resources');
//     }
//     return res.json();
//   })

//   .then((data) => {
//     console.log('json req 1', data);
//     return fetch('https://swapi.dev/api/people/3')
//   })
  
//   .then((res) => {
//     console.log('json req 2');
//     if(!res.ok) {
//       throw ERROR('Could not fetch the data for that resources');
//     }
//     return res.json();
//   })

//   .then((data) => {
//     console.log(data);
//   })

//   .catch((err) => {
//     console.log('error', err);
//   }); 

// membuat lebih sedehana dengan fetch
const loadPeople = async () => {
  try {
    const req = await fetch('https://swapi.dev/api/people/1');
    const data = await req.json();
    console.log(data);
  
    const req2 = await fetch('https://swapi.dev/api/people/2');
    const data2 = await req2.json();
    console.log(data2);

  } catch(err){
    console.log('error', err);
  }

};

loadPeople();