const fetch = require("node-fetch");

const loginUser = {
    name: "admin",
    password: "aaaaaaaa"
}

const registerUser = {
    email: "admin@admin.com",
    name: "admin",
    birthday: "1990-2-2",
    password: "aaaaaaaa",
    phone: "1923352344123"
}

/*
headers: {
	    'Authorization': 'Basic'+btoa('username:password'),
	    'content-type': 'application/json',
	    'accept': 'application/json'
	},
*/

/* token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzMjQ1YTEwLTA3YTctNGFjNy1iNTAyLTdlMzhmZjU3NDliNSIsImlhdCI6MTU1MTE5MjI2MywiZXhwIjoxNTUzNzg0MjYzfQ.sPL5W7iOoXcCtmY2-meoKFDt5-x8ONapdkdiM43YGJw
*/
// login


// fetch('http://localhost:9000/api/v1/auth/login', {
//   	method: 'post',
// 	body: JSON.stringify(loginUser),
// 	headers: {
// 	    'content-type': 'application/json',
// 	    'accept': 'application/json',
// 	    'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDA4YWYyLWJhNDgtNDQzMy1iYWNlLTkyMThhOTRhZWQ5NiIsImlhdCI6MTU1MDkzNjQ3MywiZXhwIjoxNTUzNTI4NDczfQ.49Xf72ajwJkYvY5vs1MpqzqweQbXRKt5ygUi8pbX7Ts'
// 	},
// }).then(function(response){
// 	console.log(response.statusText);
// 	return response.json();
// })
// .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
// });


// register

fetch('http://localhost:9000/api/v1/auth/register', {
  	method: 'post',
	body: JSON.stringify(registerUser),
	headers: {
	    'content-type': 'application/json',
	    'accept': 'application/json'
	},
}).then(function(response){
	console.log(response.statusText);
	return response.json();
})
.then(function(myJson) {
    console.log(JSON.stringify(myJson));
});




// fetch('http://localhost:9000/api/v1/class', {
//   	method: 'get',
// 	headers: {
// 		'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmNDhhNzE1LWM2ZmItNDI2Ny1hYjEzLWVmNWUyYTEyY2ZkZiIsImlhdCI6MTU1MTE4MTkxMiwiZXhwIjoxNTUxMjY4MzEyfQ.dwJp0ZqzmAG1wkz0bvyVtDlSOFechLz9VF-vAejsE00'
// 	},
// }).then(function(response){
// 	console.log(response.statusText);
// 	return response.json();
// })
// .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
// })
// .catch(function() {
//     console.log("error");
// });