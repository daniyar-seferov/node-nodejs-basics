import { open } from "fs/promises";
import { createHmac } from "crypto";

const calculateHash = async () => {
	const sourceFile = `${process.cwd()}/src/hash/files/fileToCalculateHashFor.txt`;
	const errorMessage = 'FS operation failed';
	let filehandle = null;
	const secret = 'asfegewb';
	const hmac = createHmac('sha256', secret);

	try {
		filehandle = await open(sourceFile);

		for await (const line of filehandle.readLines()) {
			hmac.update(line);
		}
		console.log(`${hmac.digest('hex')}`);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	} finally {
		await filehandle?.close();
	}
};

await calculateHash();