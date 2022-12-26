import {
	Worker
} from 'worker_threads';
import { cpus } from 'os';

const sourceFile = `${process.cwd()}/src/wt/worker.js`;

const performCalculations = async () => {
	const systemCpuCores = cpus();
	const workers = Array(systemCpuCores.length).fill(null);
	let workersPromises = null;
	let result = null;

	workersPromises = workers.map((worker, index) => new Promise((resolve) => {
		worker = new Worker(sourceFile, {workerData: {number: 10 + index, index}});
		worker.on("message", (msg) => resolve({status: 'resolved', data: msg.result}));
		worker.on("error", (err) => resolve({status: 'error', data: null}));
	}));

	result = await Promise.all(workersPromises);
	console.log(result);
};

await performCalculations();