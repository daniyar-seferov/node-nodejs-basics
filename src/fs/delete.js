import { rm } from 'fs/promises';

const remove = async () => {
	const sourceFile = `${process.cwd()}/src/fs/files/fileToRemove.txt`;
	const errorMessage = 'FS operation failed';

	try {
		await rm(sourceFile);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await remove();