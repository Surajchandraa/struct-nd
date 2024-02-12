const fs = require('fs');
const path = require('path');
let current_dir=process.cwd();
const ansi = require("./ansi");

async function root_dir(){

    let data={
        1:"public",
        2:"src",
        3:"config",
        4:"tests"
    }

    let data2={
        1:"readme.md",
        2:".gitignore"
    }
    
    for(let element in data){
        let dir_path=path.join(current_dir,data[element]);
        if(!fs.existsSync(dir_path)){
            fs.mkdirSync(data[element]);
            console.log(`${data[element]} created successfully`);
        }
        else{
            console.log(ansi.fgRed+`"${data[element]}" directory already exists, skipping...`+ansi.reset);
        }
    }

    for(let element in data2){
        let fs_path=path.join(current_dir,data2[element])
        if(!fs.existsSync(fs_path)){
            fs.writeFileSync(data2[element],'');
            console.log(`${data2[element]} created successfully`);

        }
        else{
            console.log(ansi.fgRed+`"${data2[element]}" files already exists, skipping... `+ansi.reset)
        }
    }

    


}

async function public(){
    let data3=['css','images','scripts'];
let public_path=path.join(current_dir,'public');
    data3.forEach(file=>{
        let filePath = path.join(public_path, file);
            
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
            console.log(`${file} directory created successfully!`);
        } else {
            console.log(ansi.fgRed+`"${file}" directory already exists, skipping...`+ansi.reset);
        }
    })
}


async function src(){
    let data=['controllers','middlewares','models','routes','services','views'];
    let src_path=path.join(current_dir,'src');
    data.forEach(file=>{
        let filePath = path.join(src_path, file);
        
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
            console.log(`${file} directory created successfully!`);
        } else {
            console.log(ansi.fgRed+`"${file}" directory already exists, skipping...`+ansi.reset);
        }
    })

    
}

async function config(){
    let data2=['database.js','environment.js'];
    let config_path=path.join(current_dir,'config');
    data2.forEach(file=>{
        let filePath = path.join(config_path, file);

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            console.log(`${file} created successfully!`);
        } else {
            console.log(ansi.fgRed+`"${file}" already exists, skipping...`+ansi.reset);
        }
    })
}

async function create_express(){
    let rt=await root_dir();
    let pb=await public();
    let sr = await src();
    let cg = await config();
}

module.exports=create_express;