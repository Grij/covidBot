const Telegraf = require('telegraf');
const covidService = require('./services/covid');
const formatCountryMsg = require('./messages/country');
const tokenBot = '1051572303:AAGgzhb25npkHWfWQQAUGydXOOoE1bFyCxU'
const BOT_TOKEN = process.env.BOT_TOKEN || tokenBot;

const bot = new Telegraf(BOT_TOKEN);

// commands
// start
bot.start(ctx => ctx.reply
    (`Приветствую тебя!  Я COVID-19 World BOT
Пришли мне страну, в которой ты хочешь узнать официальну статистику заболевших на Латинице

НАПРИМЕР:
Ukraine
Russia
Italy
Spain
Germany
USA`
));
// help
bot.help(ctx=>ctx.reply(
    `Пока я понимаю только латиницу :(`
));

//handlers
bot.hears(/.*/, async ctx => {
    const {data} = await covidService.getByCountry(ctx.message.text);

    if(data && data.results === 0){
      return ctx.reply('Нет такой страны :(');
    } 
    console.log();
    return ctx.replyWithMarkdown(formatCountryMsg(data.response[0]))
});
//

bot.launch()
.then(res => {
    const date = new Date();
    console.log(`Bot launched at ${date}`);
}).catch(err=>console.log(Err));
// launch

