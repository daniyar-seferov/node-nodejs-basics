import { mkdir, readdir, copyFile, constants } from 'fs/promises';

const copy = async () => {
	const sourceDirectory = `${process.cwd()}/src/fs/files`;
	const destinationDirectory = `${process.cwd()}/src/fs/files_copy`;
	const errorMessage = 'FS operation failed';

	try {
		await mkdir(destinationDirectory);
		const files = await readdir(sourceDirectory);
		for (const file of files) {
			await copyFile(`${sourceDirectory}/${file}`, `${destinationDirectory}/${file}`, constants.COPYFILE_EXCL);
		}
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await copy();
