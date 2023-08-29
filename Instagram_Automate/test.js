
const schedulerFunc=require('./schedule')
a=['24 4 30 8 *','25 4 30 8 *','22 4 30 8 *','27 4 30 8 *']
b=['/Users/user_00/Desktop/Project_Insta/insta_automate/Instagram_Automate/Images/3.jpg','/Users/user_00/Desktop/Project_Insta/insta_automate/Instagram_Automate/Images/3.jpg','/Users/user_00/Desktop/Project_Insta/insta_automate/Instagram_Automate/Images/4.jpg','/Users/user_00/Desktop/Project_Insta/insta_automate/Instagram_Automate/Images/5.jpg']
console.log(a[0])
const tryf= async()=>{
    for(i=0;i<4;i++){
        console.warn("Function"+i+"Scheduling")
        console.log(a[i])
await schedulerFunc.scheduler(a[i],b[i]);
console.warn("Function"+i+"Scheduled Done!")
}
}
tryf();
