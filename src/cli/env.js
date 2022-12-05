const parseEnv = () => {
	const parameters = Object.entries(process.env).filter((val, index) => {
		return val[0].includes("RSS_");
	}).map((val, index) => {
		return `${val[0]}=${val[1]}`;
	}).join('; ');

	console.log(parameters);
};

parseEnv();