"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ErrorHandler=void 0;class e{realChannel;constructor(e,n){this.realChannel=e,n&&(this.sendError=this.sendError.bind(this),process.on("unhandledRejection",(e=>{this.sendError(e)})),process.on("uncaughtException",(e=>{console.log("sdfdsf"),this.sendError(e)})))}get channel(){return this.realChannel}set channel(e){"send"in e&&"function"==typeof e.send?this.realChannel=e:console.error("Cannot change channel to a invalid variable! Variable attempted to be changed to:\n",e)}async sendError(e,n){if(!e)return["failed","undefinedParam"];let r="formatting";try{let t="";const o=String(e instanceof Error?e.stack:e).replace(/\(file:\/\/\/.*\/|C:\\.*\\/g,"  workspace\\").replace(/\( \(|<anonymous>/g,"").split("\n");for(const e of o)/node_modules|node:internal/.test(e)||(t+=e+"\n");if(r="logging",console.error(e),await this.realChannel.send(t),!n)return"logged";if(r="replying","isChatInputCommand"in n)if(n.replied||n.deferred){const e=await n.fetchReply();await n.editReply({content:`## Something went wrong, the error has been logged. **The response below may be bugged or inaccurate** \n\n${e.content}`,components:[]})}else n.isRepliable()&&await n.reply({content:"Something went wrong, the error has been logged",flags:"Ephemeral",components:[]});else await n.reply("Something went wrong, the error has been logged");return"sucess"}catch{return["failed",r]}}}exports.ErrorHandler=e,module.exports=e;