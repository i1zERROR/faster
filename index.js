const fetch = require('node-fetch');
const path = require("path");
const fs = require('fs');
const ms = require('ms');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const config = require("./config.json")
const Discord = require("discord.js-selfbot-v13"); 
const listen = app.listen(port, () => {
	console.log(`Server is Ready on port : ${listen.address().port}`);
}); 

app.get('/',async(req,res)=>{
  res.send("hmm");
})
setInterval(()=>{
fetch("https://my-bot-1.agttresssdc.repl.co");
},60000)

require("./ex");
  let tokens = [''];
  tokens.forEach(token=>{
const client = new Discord.Client({
    allowedMentions: {
        // set repliedUser value to `false` to turn off the mention by default
        repliedUser: true
    }
    });
client.on("ready",async ()=>{ 

  console.log(client.user.tag);
  if(config.delayfast.status){
    let channel = client.channels.cache.get(config.delayfast.channel.id);
    if(channel){
      let delay = config.delayfast.delay;
      if(config.delayfast.delay == "random") delay =  3000 + Math.floor(Math.random() * 5000)
      else delay = 1000 * config.delayfast.delay;
      setInterval(()=>{
        channel.send("-اسرع");
      },delay);
        
    }
  }
})
client.on("message",async message=>{
  if(message.author.id == client.user.id)return;
  if (message.channel.id !== config.delayfast.channel.id) return;
  config.autoreply.forEach(autorep=>{
    if(message.content == autorep.message){
      setTimeout(()=>{
        message.channel.sendTyping();
        message.reply(autorep.reply);
      },3000)
    }
  })
  if(config.delayfast){
  if(message.embeds[0]){
  if(message.embeds[0].description){
 if(message.embeds[0].description.includes("لديك __15__ ثانيه لكتابة الجمله بسرعه")){
//let randomt = Math.floor(Math.random() * 3000);
const randomt = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;
  message.channel.sendTyping();

      setTimeout(()=>{
        let r = message.embeds[0].title.split("**").join("").split("َ").join("").split("ً").join("")
      .split("ُ").join("")
      .split("ٌ").join("")
      .split("ٍ").join("")
      .split("ِ").join("")
      .split("ْ").join("")
      .split("ّ").join("");
      message.channel.send(r)
  // message.channel.stopTyping();
      },randomt)
      }
  }
  }
    }
})
client.login(token);

  })
