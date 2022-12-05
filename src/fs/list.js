import { readdir } from "fs/promises";

const list = async () => {
	const sourceDirectory = `${process.cwd()}/src/fs/files`;
	const errorMessage = 'FS operation failed';

	try {
		const files = await readdir(sourceDirectory);
		for (const file of files) {
			console.log(file);
		}
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await list();