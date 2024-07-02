const path = require("path");
let creation = require("./creation");
let current_dir = process.cwd();

async function root_dir() {
    let data1 = ["public", "src", "tests"];
    let data2 = [".gitignore", "readme.md", "next.config.js", "jsconfig.json", ".env"];

    for (const element of data1) {
        let pathProvide = path.join(current_dir, element);
        await creation.CreateDirIfNotExist(pathProvide, element);
    }

    for (const element of data2) {
        let pathProvide = path.join(current_dir, element);
        await creation.CreateFileIfNotExist(pathProvide, element);
    }
}

async function src() {
    let data = ["pages", "styles", "utils", "hooks", "contexts", "lib"];
    for (const element of data) {
        let pathProvide = path.join(current_dir, "src", element);
        await creation.CreateDirIfNotExist(pathProvide, element);
    }
}

async function create_nextjs() {
    try {
        await root_dir();
        await src();
    } catch (error) {
        console.error("Error creating project structure", error);
    }
}

module.exports=create_nextjs;
