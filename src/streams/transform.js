import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';

const reverseString = (str) => str.split('').reverse().join('');

class MyTransformStream extends Transform {
	_transform(chunk, encoding, callback) {
		callback(null, reverseString(chunk.toString()));
	}

	_flush(callback) {
		callback(null, EOL);
	}
}

const transform = async () => {
  const transformStream = new MyTransformStream();

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();