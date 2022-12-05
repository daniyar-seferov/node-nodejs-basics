import { open } from 'fs/promises';

const create = async () => {
	const filename = `${process.cwd()}/src/fs/files/fresh.txt`;
	const content = 'I am fresh and young';
	const errorMessage = 'FS operation failed';
	let filehandle = null;

	try {
		filehandle = await open(filename, 'wx');
		await filehandle.write(content);
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw new Error(errorMessage);
		}
		throw err;
	} finally {
		await filehandle?.close();
	}
};

await create();