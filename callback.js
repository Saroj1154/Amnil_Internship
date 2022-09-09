function greeting(name) {
	alert(`Hello ${name}`);
}

function message() {
	const name = prompt('Please enter your name');
	greeting(name);
}

message(greeting);

