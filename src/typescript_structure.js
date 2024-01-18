const path = require("path");
const fs = require("fs");
let current_dir=process.cwd()

async function root_dir(){

    let data={
        1:"src",
        2:"config",
        3:"tests"
    }

    let data2={
        1:"readme.md",
        2:".gitignore",
        3:"tsconfig.json"
    }
    
    for(let element in data){
        let dir_path=path.join(current_dir,data[element]);
        if(!fs.existsSync(dir_path)){
            fs.mkdirSync(data[element]);
            console.log(`${data[element]} created successfully`);
        }
        else{
            console.log(`${data[element]} directory already exists, skipping...`);
        }
    }

    for(let element in data2){
        let fs_path=path.join(current_dir,data2[element])
        if(!fs.existsSync(fs_path)){
            fs.writeFileSync(data2[element],'');
            console.log(`${data2[element]} created successfully`);

        }
        else{
            console.log(`${data2[element]} files already exists, skipping... `)
        }
    }

    


}

async function src(){
    let data=['controllers','middlewares','models','routes','services'];
    let dir_path=path.join(current_dir,"src");
    data.forEach(file=>{
        let filePath=path.join(dir_path,file)
        if(!fs.existsSync(filePath)){
            fs.mkdirSync(filePath);
            console.log(`${file} directory created successfully!`);
        }
        else{
            console.log(`${file} directory already exists, skipping...`);
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
            console.log(`${file} already exists, skipping...`);
        }
    })
}

async function create_typescript(){
    let rt=await root_dir();
    let sr = await src();
    let cg = await config();
}

module.exports=create_typescript;