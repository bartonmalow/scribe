"use strict";Object.defineProperty(exports,"__esModule",{value:true});const cluster=require("cluster");const os=require("os");const scribe_1=require("./scribe");if(cluster.isMaster){let cores=os.cpus();for(let i=0;i<cores.length;i++){cluster.fork()}cluster.on("exit",worker=>{cluster.fork()})}else{scribe_1.createServer()}