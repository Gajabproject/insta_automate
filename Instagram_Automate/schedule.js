const cron = require('node-cron');
const childProcess = require('child_process');
const scriptFunc=require('./app');

// Schedule the task to run at 9:00 AM on January 1st
// '31 21 27 8 *'
const scheduler=(Stamp,imgPath)=>{
    console.log("Running:",Stamp)
    cron.schedule(Stamp, () => {
        console.log('Running the task...');
        console.log(Stamp);
        scriptFunc.f1(imgPath);
        // Run your Node.js script using child_process.spawn or other methods
        // const scriptProcess = 
    
        // scriptProcess.stdout.on('data', (data) => {
        //     console.log(`Script output: ${data}`);
        // });
    
        // scriptProcess.stderr.on('data', (data) => {
        //     console.error(`Script error: ${data}`);
        // });
    
        // scriptProcess.on('close', (code) => {
        //     console.log(`Script exited with code ${code}`);
        // });
    });
}

module.exports['scheduler']=scheduler;