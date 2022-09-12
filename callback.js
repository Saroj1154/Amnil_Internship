
// function greeting(name) {
// 	alert(`Hello ${name}`);
// }

// function message() {
// 	const name = prompt('Please enter your name');
// 	greeting(name);
// }

// message(greeting);

//story main aim ===> buy phone, click photo, upload
function click(upload) {
	console.log(`I clicked a photo`);
	upload();
}
function upload() {
	console.log(`I uploaded the photo`);
}

function buy(click) {
	console.log(`I bought a phone`);
	click(upload);
}

buy(click);

