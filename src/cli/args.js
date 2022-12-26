const prefix = '--';

const parseArgs = () => {

	const argsParts = process.argv.slice(2).reduce((acc, value, index, array) => {
		if (value.startsWith(prefix)) {
			const formattedProp = `${value.replace(prefix, '')} is ${array[index + 1]}`;
			return [...acc, formattedProp];
		}
		return acc;
	}, []);

	const stringifiedArgs = argsParts.join(', ');
	console.log(stringifiedArgs);
};

parseArgs();