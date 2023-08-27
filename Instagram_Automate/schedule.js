const cron = require('node-cron');
const childProcess = require('child_process');

// Schedule the task to run at 9:00 AM on January 1st

cron.schedule('31 21 27 8 *', () => {
    console.log('Running the task...');
    
    // Run your Node.js script using child_process.spawn or other methods
    const scriptProcess = childProcess.spawn('node', ['app.js']);

    scriptProcess.stdout.on('data', (data) => {
        console.log(`Script output: ${data}`);
    });

    scriptProcess.stderr.on('data', (data) => {
        console.error(`Script error: ${data}`);
    });

    scriptProcess.on('close', (code) => {
        console.log(`Script exited with code ${code}`);
    });
});
