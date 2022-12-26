import { readFile } from "fs/promises";

const sourceFile = `${process.cwd()}/src/fs/files/fileToRead.txt`;
const errorMessage = 'FS operation failed';

const read = async () => {
	try {
		const content = await readFile(sourceFile, 'utf8');
		console.log(content);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await read();