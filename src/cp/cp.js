import { fork } from 'child_process'

const sourceFile = `${process.cwd()}/src/cp/files/script.js`;

const spawnChildProcess = async (args) => {
	const childProcess = fork(sourceFile, args, { silent: true });

	process.stdin.pipe(childProcess.stdin);
	childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( );
