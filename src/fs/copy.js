import { mkdir, readdir, copyFile, constants } from 'fs/promises';

const sourceDirectory = `${process.cwd()}/src/fs/files`;
const destinationDirectory = `${process.cwd()}/src/fs/files_copy`;
const errorMessage = 'FS operation failed';

const copy = async () => {
	try {
		await mkdir(destinationDirectory);
		const files = await readdir(sourceDirectory);

		const promises = files.map((file) => copyFile(`${sourceDirectory}/${file}`, `${destinationDirectory}/${file}`, constants.COPYFILE_EXCL));
		await Promise.all(promises);
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await copy();
