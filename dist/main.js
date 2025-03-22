// @bun @bytecode @bun-cjs
(function(exports, require, module, __filename, __dirname) {var{defineProperty:w,getOwnPropertyNames:B,getOwnPropertyDescriptor:C}=Object,D=Object.prototype.hasOwnProperty;var x=new WeakMap,E=(j)=>{var b=x.get(j),q;if(b)return b;if(b=w({},"__esModule",{value:!0}),j&&typeof j==="object"||typeof j==="function")B(j).map((u)=>!D.call(b,u)&&w(b,u,{get:()=>j[u],enumerable:!(q=C(j,u))||q.enumerable}));return x.set(j,b),b};var F=(j,b)=>{for(var q in b)w(j,q,{get:b[q],enumerable:!0,configurable:!0,set:(u)=>b[q]=()=>u})};var G={};F(G,{ErrorHandler:()=>z});module.exports=E(G);class z{channel;constructor(j){this.channel=j}async sendError(j,b){if(!j)return["failed","undefinedParam"];let q="formatting";try{let u="",A=String(j instanceof Error?j.stack:j).replace(/\(file:\/\/\/.*\/|C:\\.*\\/g,"  workspace\\").replace(/\( \(|<anonymous>/g,"").split(`
`);for(let v of A)if(!/node_modules|node:internal/.test(v))u+=v+`
`;if(q="logging",console.error(j),await this.channel.send(u),!b)return"logged";if(q="replying","isChatInputCommand"in b){if(b.replied||b.deferred){let v=await b.fetchReply();await b.editReply({content:`## Something went wrong, the error has been logged. **The response below may be bugged or inaccurate** 

${v.content}`,components:[]})}else if(b.isRepliable())await b.reply({content:"Something went wrong, the error has been logged",flags:"Ephemeral",components:[]})}else await b.reply("Something went wrong, the error has been logged");return"sucess"}catch{return["failed",q]}}}})

//# debugId=059664BACC9163DD64756E2164756E21
