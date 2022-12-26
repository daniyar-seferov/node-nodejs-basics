import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import {
	createReadStream,
	createWriteStream
} from 'fs';

const sourceFile = `${process.cwd()}/src/zip/files/archive.gz`;
const destinationFile = `${process.cwd()}/src/zip/files/fileToCompress.txt`;

const decompress = async () => {
	const gunzip = createGunzip();
	const source = createReadStream(sourceFile);
	const destination = createWriteStream(destinationFile);

	pipeline(source, gunzip, destination, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await decompress();