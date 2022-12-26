import {stat, rename as renamePromise} from 'fs/promises';

const sourceFile = `${process.cwd()}/src/fs/files/wrongFilename.txt`;
const destinationFile = `${process.cwd()}/src/fs/files/properFilename.md`;
const errorMessage = 'FS operation failed';
const errorCodes = ['EEXIST', 'ENOENT'];

const rename = async () => {
	try {
		const fileExists = !!(await stat(destinationFile).catch(e => false));

		if (fileExists) {
			throw new Error(errorMessage);
		}
		await renamePromise(sourceFile, destinationFile);
	} catch (err) {
		if (errorCodes.includes(err.code)) {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await rename();