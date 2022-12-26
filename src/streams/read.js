import { open } from 'fs/promises';

const sourceFile = `${process.cwd()}/src/streams/files/fileToRead.txt`;

const read = async () => {
	const fd = await open(sourceFile);
	fd.createReadStream().pipe(process.stdout);
};

await read();