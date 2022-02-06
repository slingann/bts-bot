// this automatically installs discord library once run is clicked
const Discord = require('discord.js');
// to connect to discord server
const fetch = require('node-fetch');
const client = new Discord.Client();
const {MessageAttachment} = require("discord.js");
const img1 = new MessageAttachment(
    "bts.jpg"
  )

const img2 = new MessageAttachment(
    "jin.jpg"
  )

const img3 = new MessageAttachment(
    "jinjin.jpg"
  )

const img4 = new MessageAttachment(
    "jinnie.jpg"
  )

const img5 = new MessageAttachment(
    "joon.jpg"
  )

const img6 = new MessageAttachment(
    "kook.jpg"
  )

const img7 = new MessageAttachment(
    "min.jpg"
  )

const img8 = new MessageAttachment(
    "ot7.jpeg"
  )

const img9 = new MessageAttachment(
    "ot72.jpg"
  )

const img10 = new MessageAttachment(
    "suga.jpg"
  )

const words = ["!bts"]
const replies = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if(msg.author.bot) return 
  if(words.some(word => msg.content.includes(word))){
    const randomM = replies[Math.floor(Math.random() * replies.length)]
    msg.reply(randomM)
    msg.reply("listen on spotify: https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX?si=ssZCCb0bRBOw2LqSx96-dQ")
  }
})

client.login(process.env.TOKEN)