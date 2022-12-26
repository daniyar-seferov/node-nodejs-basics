import { readdir } from "fs/promises";

const sourceDirectory = `${process.cwd()}/src/fs/files`;
const errorMessage = 'FS operation failed';

const list = async () => {
	try {
		const files = await readdir(sourceDirectory);
		console.log(files);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await list();