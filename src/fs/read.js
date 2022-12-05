import { open } from "fs/promises";

const read = async () => {
	const sourceFile = `${process.cwd()}/src/fs/files/fileToRead.txt`;
	const errorMessage = 'FS operation failed';
	let filehandle = null;

	try {
		filehandle = await open(sourceFile);

		for await (const line of filehandle.readLines()) {
			console.log(line);
		}
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	} finally {
		await filehandle?.close();
	}
};

await read();