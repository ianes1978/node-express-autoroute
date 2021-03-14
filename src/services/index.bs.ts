import codegen from 'codegen.macro'
import { Express } from 'express';


codegen`
    var glob = require("glob")
        const list=  glob.sync("**/*.route.ts",{cwd:__dirname})
        const {paths,filenames,imports,objNames,appUseRoute,APIs} = list.reduce((acc,pathRoute)=>{
           const filename = pathRoute.split('/').slice(-1);
           const path = pathRoute.split('/').slice(0,-1);
           acc.paths.push('/'+path.join('/')+'/');
           acc.filenames.push(filename[0]);
           const objName = filename[0].split('.').slice(0,1)[0];
           acc.objNames.push(objName);
           acc.imports.push('import '+objName+' from "./'+pathRoute+'";'); 
           acc.APIs.push("/"+path.join('/')+"/"+objName)
           acc.appUseRoute.push("app.use('/"+path.join('/')+"/"+objName+"', "+objName+");"); 
           return acc
        },{paths:[],filenames:[],imports:[],objNames:[],appUseRoute:[],APIs:[]})
        console.log('API:',APIs)
       
    module.exports = [
        imports.join(''),
        "export default function (app: Express) {",
        appUseRoute.join(''),
        " }"

    ].join('')
    `


    








   
 