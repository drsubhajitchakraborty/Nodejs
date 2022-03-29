const os = require('os');                        // import OS module


//console.log(os.arch());                         // architecture of operating system


//console.log(os.freemem());                     // free memory of memory(RAM)  in bytes


//console.log(os.freemem()/1024/1024/1024);      // free memory of memory(RAM)  in GB

                       //OR
/*const memory=os.freemem();
console.log(`${memory/1024/1024/1024}`);*/

                      //OR
                     
/*const memory=os.freemem();
console.log(memory/1024/1024/1024);*/



//console.log(os.totalmem());                       //Total memory

                       //OR
//console.log(os.totalmem()/1024/1024/1024);       // Total memory of memory(RAM)  in GB

                       //OR
/*const memory=os.totalmem();
console.log(`${memory/1024/1024/1024}`);*/

//console.log(os.hostname());                       // hostname

//console.log(os.platform());                       // platformname 

//console.log(os.tmpdir());                         // temporary folder path

//console.log(os.type());                           // os type like windows or linux etc

