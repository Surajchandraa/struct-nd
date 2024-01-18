const create_express = require("./src/express_structure");
const create_graph = require("./src/graph_ql_structure");
const create_rest = require("./src/Rest_api_structure");
const create_typescript = require("./src/typescript_structure");

let input = process.argv[2];

async function create(){
if(input=="express"){
    await create_express();
}
else if(input=="rest"){
    await create_rest();
}
else if(input=="graph"){
    await create_graph()
}
else if(input=="typescript"){
    await create_typescript()
}
}


create()