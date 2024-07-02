const fs=require('fs');
const path=require('path');
const ansi=require("./ansi");


function CreateDirIfNotExist(dirpath,dirname){
    return new Promise((resolve,reject)=>{
        if(!fs.existsSync(dirpath)){
            fs.mkdir(dirpath,(err)=>{
                if(err){
                    console.error("error in creating directory", err);
                    reject(err);
                }
                else{
                    console.log(ansi.fgGreen+"directory created sucessfully",dirname + ansi.reset);
                    resolve();
                }
            })
        }
        else{
            console.log(ansi.fgYellow+"directory already exists",dirname +ansi.reset);
            resolve();
        }
    })

    
}


function CreateFileIfNotExist(filepath,filename){
    return new Promise((resolve,reject)=>{
        if(!fs.existsSync(filepath)){
            fs.writeFile(filename,'',(err)=>{
                if(err){
                    console.error("error in creating file",err);
                    reject(err);
                }
                else{
                    console.log(ansi.fgGreen+"File created sucessfully",filename+ansi.reset);
                    resolve();
                }
            })
        }
        else{
            console.log(ansi.fgGreen+"file already exists",filename+ansi.reset);
            resolve();
        }
    })
}

module.exports={CreateDirIfNotExist,CreateFileIfNotExist};