const parseArgs = () => {
	let isParam = false;

	const parameters = process.argv.filter((val) => {
		if (val.startsWith('--')) {
			isParam = true;
			return true;
		}
		if (isParam) {
			isParam = false;
			return true;
		}
		return false;
	}).map((val, index, parameters) => {
		if (val.startsWith('--')) {
			return `${val.slice(2)} is ${parameters[index + 1]}`;
		}
	}).filter(val => val).join(', ');

	console.log(parameters);
};

parseArgs();