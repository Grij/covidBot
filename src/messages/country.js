const countryEmoji = require('country-emoji');

module.exports = (data) => {
    return `
    Страна: *${data.country}* ${countryEmoji.flag(data.country) || ''}
    ===========================
    Всего подтвержденных: *${data.cases.total}*
    Новых за сутки: *${data.cases.new}*
    Под наблюдением: *${data.cases.active}*
    Вылеченные: *${data.cases.recovered}*
    Погибшие: *${data.deaths.total}*
    `
}

