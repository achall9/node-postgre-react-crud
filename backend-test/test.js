const fetch = require("node-fetch");

const loginUser = {
    email: "a@a.com",
    password: "aaaaaaaa"
}

const registerUser = {
    email: "a@a.com",
    name: "aaa",
    birthday: "1990-2-2",
    password: "aaaaaaaa",
    phone: "19234123"
}

const updateClass = {
	name: 'Experience the beer rodeo',
	description: 'description',
	location: 'Location',
	price: '55',
	seats: '6',
	image_url: 'https://uploads-ssl.webflow.com/5bebfd31fb29cc51aeb8688a/5bebfd31fb29cc4e27b86895_transparent_16_9-p-1080.png',
	start_timestamp: '2019-03-08 20:00:00+07',
	end_timestamp: '2019-03-09 19:00:00+07'
}
/*
const createClass = {
	vendor_id: '5be32eed-06fa-481e-bccb-250956a92b1b',
	name: 'A new Class',
	description: 'New description',
	location: 'New Location',
	price: '55',
	seats: '6',
	image_url: 'https://uploads-ssl.webflow.com/5bebfd31fb29cc51aeb8688a/5bebfd31fb29cc4e27b86895_transparent_16_9-p-1080.png',
	start_timestamp: '2019-03-08 20:00:00+07',
	end_timestamp: '2019-03-09 19:00:00+07'
}

headers: {
	    'Authorization': 'Basic'+btoa('username:password'),
	    'content-type': 'application/json',
	    'accept': 'application/json'
	},
*/

/* token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDA4YWYyLWJhNDgtNDQzMy1iYWNlLTkyMThhOTRhZWQ5NiIsImlhdCI6MTU1MDkzNjQ3MywiZXhwIjoxNTUzNTI4NDczfQ.49Xf72ajwJkYvY5vs1MpqzqweQbXRKt5ygUi8pbX7Ts
*/
test();

async function test(){
// 	await fetch('http://localhost:9000/api/v1/auth/register', {
// 	  	method: 'post',
// 		body: JSON.stringify(registerUser),
// 		headers: {
// 		    'content-type': 'application/json',
// 		    'accept': 'application/json'
// 		},
// 	}).then(function(response){

// 		return response.json();
// 	})
// 	.then(function(myJson) {
// //	    console.log(JSON.stringify(myJson));
// 	});


// 	var token = '';
// 	await fetch('http://localhost:9000/api/v1/auth/login', {
// 	  	method: 'post',
// 		body: JSON.stringify(loginUser),
// 		headers: {
// 		    'content-type': 'application/json',
// 		    'accept': 'application/json'
// 		},
// 	}).then(function(response){
// //		console.log(response.statusText);
// 		return response.json();
// 	})
// 	.then(function(myJson) {
// //		console.log(myJson.data.token);
// 		token = myJson.data.token;
// //	    console.log(JSON.stringify(myJson));
// 	})
// 	.catch(function(error) {
// 		console.log("error occured 1");

// 	});

	
/*	console.log(updateClass);
	await fetch('http://localhost:9000/api/v1/class/54266d87-51e6-4533-969b-803f22e65912', {
	  	method: 'post',
	  	body: JSON.stringify(updateClass),
		headers: {
			'content-type': 'application/json',
		    'accept': 'application/json',
			'authtoken': token
		},
	}).then(function(response){
//		console.log(response.statusText);
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson);
//	    console.log(JSON.stringify(myJson));
	})
	.catch(function() {
	    console.log("error occured");
	});*/

/*	console.log(createClass);
	await fetch('http://localhost:9000/api/v1/class', {
	  	method: 'post',
	  	body: JSON.stringify(createClass),
		headers: {
			'content-type': 'application/json',
		    'accept': 'application/json',
			'authtoken': token
		},
	}).then(function(response){
//		console.log(response.statusText);
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson);
//	    console.log(JSON.stringify(myJson));
	})
	.catch(function() {
	    console.log("error occured");
	});*/



	
// 	await fetch('http://localhost:9000/api/v1/class/b56e99b3-195e-47f0-9567-a1827091d2c7', {
// 	  	method: 'delete',
// 	  	body: JSON.stringify(createClass),
// 		headers: {
// 			'content-type': 'application/json',
// 		    'accept': 'application/json',
// 			'authtoken': token
// 		},
// 	}).then(function(response){
// //		console.log(response.statusText);
// 		return response.json();
// 	})
// 	.then(function(myJson) {
// 		console.log(myJson);
// //	    console.log(JSON.stringify(myJson));
// 	})
// 	.catch(function() {
// 	    console.log("error occured");
// 	});

	/*fetch('http://localhost:9000/api/v1/class/54266d87-51e6-4533-969b-803f22e65912', {
	  	method: 'get',
		headers: {
			'authtoken': token
		},
	}).then(function(response){
//		console.log(response.statusText);
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson.data);
//	    console.log(JSON.stringify(myJson));
	})
	.catch(function() {
	    console.log("error occured");
	});*/
}
