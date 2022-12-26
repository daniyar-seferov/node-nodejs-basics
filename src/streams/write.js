import { pipeline } from 'stream/promises';
import fs from 'fs';

const sourceFile = `${process.cwd()}/src/streams/files/fileToWrite.txt`;

const write = async () => {
	try {
		await pipeline(
				process.stdin,
				fs.createWriteStream(sourceFile)
		);
	} catch (error) {
		console.error(error);
	}
};

await write();