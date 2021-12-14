const Discord = require('discord.js')
const client = new Discord.Client();
const { token } = require('./config.json')
if(message.content.startsWith('!ping'))
  message.channel.send('pong')
client.login(token)
