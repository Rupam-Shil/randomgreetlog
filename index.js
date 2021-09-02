const hello = (name) => {
	console.log(getRandom(name));
};

const getRandom = (name) => {
	const dummy = [
		`Hello ${name}`,
		`Hi, ${name}`,
		`Hey ${name}`,
		`It's nice to meet you ${name}`,
		`It's a pleasure to meet you ${name}`,
		`It's good to see you ${name}`,
		`What's up, ${name}?`,
		`Sup, ${name}?`,
		`How's it going ${name}?`,
		`How have you been ${name}?`,
		`Hola ${name}`,
		`What are you up to these days ${name}`,
		`How are you holding up ${name}`,
		`Howdy! ${name}`,
	];
	const seed = Math.floor(Math.random() * dummy.length);
	return dummy[seed];
};

module.exports = hello;
