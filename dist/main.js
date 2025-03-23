"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ErrorHandler=void 0;class e{logChannel;constructor(e){this.logChannel=e}get channel(){return this.logChannel}set channel(e){"send"in e&&"function"==typeof e.send?this.logChannel=e:console.error("Cannot change channel to a invalid variable! Variable attempted to be changed to:\n",e)}async sendError(e,n){if(!e)return["failed","undefinedParam"];let t="formatting";try{let r="";const o=String(e instanceof Error?e.stack:e).replace(/\(file:\/\/\/.*\/|C:\\.*\\/g,"  workspace\\").replace(/\( \(|<anonymous>/g,"").split("\n");for(const e of o)/node_modules|node:internal/.test(e)||(r+=e+"\n");t="logging",console.error(e);const a=await this.logChannel.send(r);if(!n)return["logged",a];if(t="replying","isChatInputCommand"in n){let e;if(n.replied||n.deferred){const t=await n.fetchReply();e=await n.editReply({content:`## Something went wrong, the error has been logged. **The response below may be bugged or inaccurate** \n\n${t.content}`,components:[]})}else{if(!n.isRepliable())return["failed",t];e=await n.reply({content:"Something went wrong, the error has been logged",flags:"Ephemeral",components:[]})}return["sucess",a,e]}return["sucess",a,await n.reply("Something went wrong, the error has been logged")]}catch{return["failed",t]}}}exports.ErrorHandler=e,module.exports=e;