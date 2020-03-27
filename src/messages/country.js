const countryEmoji = require('country-emoji');
module.exports = (data) => {
    if (data.cases.new === null) {
     data.cases.new = '0'
    }
    return `
    Страна: *${data.country}* ${countryEmoji.flag(data.country) || ''}
    ===========================
    🔸Всего подтвержденных: *${data.cases.total}*
    🔸Новых за сутки: *${data.cases.new}*
    🔸Под наблюдением: *${data.cases.active}*
    🔸Вылеченные: *${data.cases.recovered}*
    🔸Погибшие: *${data.deaths.total}*
    ===========================
    😥 *СМЕРТНОСТЬ: ${(data.deaths.total/data.cases.total*100).toFixed(2)}%*
    `
    // СМЕРТНОСТЬ: *${data.procentDeath}%*
    // const procentDeath = ${data.deaths.total}*${data.cases.total}/100*100;
}

