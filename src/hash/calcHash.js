import { readFile } from "fs/promises";
import { createHash } from "crypto";

const sourceFile = `${process.cwd()}/src/hash/files/fileToCalculateHashFor.txt`;
const errorMessage = 'FS operation failed';

const calculateHash = async () => {

	try {
		const fileContent = await readFile(sourceFile);
		const hash = createHash('sha256').update(fileContent);
		console.log(`${hash.digest('hex')}`);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error(errorMessage);
		}
		throw err;
	}
};

await calculateHash();