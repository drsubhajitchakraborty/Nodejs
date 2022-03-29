    const fs=require('fs');   // filesystem library including 


                                            // Synchronous WAY

    // fs.mkdirSync('SUBHAJIT');                                             // creating folder

    // fs.writeFileSync('SUBHAJIT/test.txt',"this is for testing");          //file create and writing file 

    // fs.writeFileSync('SUBHAJIT/test.txt',"this is for testing2");         //writing file 

    // fs.appendFileSync('SUBHAJIT/test.txt',"this is for testing3");        //append new text with old txt
    // fs.appendFileSync('ASUBHJIT/test.txt',"this is for testing7 ");

    // const data=fs.readFileSync('SUBHAJIT/test.txt','utf8');               // read file

    // console.log(data);                                                    // print buffer data on console

    // fs.renameSync('SUBHAJIT/b.txt','SUBHAJIT/c.txt');                     //rename file
    
    //fs.unlinkSync('SUBHAJIT/CHAKRABORTY.txt');                             //delete file

    //fs.rmdirSync('SUBHAJIT');                                              // remocve directory

    //fs.renameSync('SUBHAJIT','c');                                         //rename directory


                                        // DIFFERENCE BETWEEN SYNC AND ASYSNC


    /*fs.readFile("SUBHAJIT/test.txt",'UTF-8',
                                (error,data)=>{   console.log("there are "+error);
                                                console.log("before");     //this code execute later cause it takes higher time 
                                                console.log(data);
    });*/

    /*console.log("after");    // this code execute 1st cause it takes less time than upper ASYSNC code*/




                                             // Asynchronous WAY

//fs.mkdir('SUBHAJIT', (error)=>{console.log(error});       // creating folder asynchronous way

/* fs.writeFile("SUBHAJIT/text.txt","This is for testing",
                                                        (error)=>{ console.log(error);         //writing file
            });*/

/* fs.writeFile("SUBHAJIT/text.txt","This is for testing2",
                                                        (error)=>{ console.log(error);      //writing file
            });*/

//fs.appendFile('SUBHAJIT/text.txt',"this is for appendtesting3", (error)=>{console.log(error);});        //append new text with old txt

/*fs.readFile('SUBHAJIT/text.txt',(error,data)=>{console.log(error);
                                                        console.log(data);          // print buffer data on console
                                                       });*/
/*fs.readFile('SUBHAJIT/text.txt','UTF-8',(error,data)=>{console.log(error);
                                                        console.log(data);          // read file
                                                       });*/

/*fs.rename('SUBHAJIT/test.txt','CHAKRABORTY.txt', (error)=>{
    if(error==null)
    {
        console.log("Sucessfully Renamed!!");                                      // To rename a file
    }
    else{
        console.log(error);
    }
});*/

                                //alternative way to rename a file

//fs.rename('SUBHAJIT/C.txt','SUBHAJIT/a.txt', (error)=>{console.log(error);});

//fs.rename('c','cb',(error)=>{console.log(error);});                              //rename directory

/*fs.unlink('SUBHAJIT/b.txt', (error)=>{
    if(error==null)
    {
        console.log("Sucessfully Deleted!!");                                        // To delete a file
    }
    else{
        console.log(error);
    }
});*/

                                //alternative way to delete a file

//fs.unlink('SUBHAJIT/b.txt',(error)=>{console.log(error);});


//fs.rmdir('SUBHAJIT',(error)=>{console.log(error);});                     // remove directory 

//("./directory_name",call_backfunction())     //  this  ./  pointing the home directory, so we dont have to write home directory name 
