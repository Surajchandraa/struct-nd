const path = require('path');
const creation = require('./creation');
let current_dir = process.cwd();

async function root_dir() {
    let data = ["src", "config", "tests"];
    let data2 = ["readme.md", ".gitignore"];

    for (let element of data) {
        let pathProvide = path.join(current_dir, element);
        await creation.CreateDirIfNotExist(pathProvide, element);
    }

    for (let element of data2) {
        let pathProvide = path.join(current_dir, element);
        await creation.CreateFileIfNotExist(pathProvide, element);
    }
}

async function src() {
    let data = ['graphql', 'models', 'services'];
    for (let element of data) {
        let pathProvide = path.join(current_dir, 'src', element);
        await creation.CreateDirIfNotExist(pathProvide, element);
    }
}

async function config() {
    let data = ['database.js', 'environment.js'];
    for (let element of data) {
        let pathProvide = path.join(current_dir, 'config', element);
        await creation.CreateFileIfNotExist(pathProvide, element);
    }
}

async function create_graph() {
    try {
        await root_dir();
        await src();
        await config();
    } catch (error) {
        console.error("Error creating project structure", error);
    }
}

module.exports = create_graph;
