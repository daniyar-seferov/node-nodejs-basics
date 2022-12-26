import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
	createReadStream,
	createWriteStream
} from 'fs';

const sourceFile = `${process.cwd()}/src/zip/files/fileToCompress.txt`;
const destinationFile = `${process.cwd()}/src/zip/files/archive.gz`;

const compress = async () => {
	const gzip = createGzip();
	const source = createReadStream(sourceFile);
	const destination = createWriteStream(destinationFile);

	pipeline(source, gzip, destination, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await compress();