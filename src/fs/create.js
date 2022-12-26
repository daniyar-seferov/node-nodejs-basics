import { writeFile } from 'fs/promises';

const filename = `${process.cwd()}/src/fs/files/fresh.txt`;
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
	try {
		await writeFile(filename, content, { flag: 'wx' });
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await create();