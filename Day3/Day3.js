const execute=require('child_process');
function executeCommand(command) {
    execute.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
console.log('The node version is:');
executeCommand('node --version');
