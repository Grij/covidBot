/** Veni Vedi Vichi -- made by Andy Gans 8704421@gmail.com */
(function(){
    "use strict";
    //reference to the global object
    var root = this;
    var Country;
    //on the server
    if(typeof exports !== 'undefined'){
        Country = exports;
    }
    //in browser
    else{
        Country = root.Country = {};
    }

    Country["Андора"] = "Andorra";
    Country["ОАЭ"] = "United Arab Emirates";
    Country["Афганистан"] = "Afghanistan";
    Country["Antigua and Barbuda"] = "AG";
    Country["Anguilla"] = "AI";
    Country["Албания"] = "Albania";
    Country["Армения"] = "Armenia";
    Country["Ангола"] = "Angola";
    Country["Antarctica"] = "AQ";
    Country["Аргентина"] = "Argentina";
    Country["Самоа"] = "American SamoaAS";
    Country["Австрия"] = "Austria";
    Country["Австралия"] = "Australia";
    Country["Aruba"] = "AW";
    Country["Åland Islands"] = "AX";
    Country["Azerbaijan"] = "AZ";
    Country["Bosnia and Herzegovina"] = "BA";
    Country["Барбадос"] = "Barbados";
    Country["Бангладеш"] = "Bangladesh";
    Country["Бельгия"] = "Belgium";
    Country["Буркина Фасо"] = "Burkina Faso";
    Country["Болгария"] = "Bulgaria";
    Country["Bahrain"] = "BH";
    Country["Бурунди"] = "Burundi";
    Country["Benin"] = "BJ";
    Country["Saint Barthélemy"] = "BL";
    Country["Бермуды"] = "Bermuda";
    Country["Brunei Darussalam"] = "BN";
    Country["Боливия"] = "Bolivia";
    Country["Bonaire, Sint Eustatius and Saba"] = "BQ";
    Country["Бразилия"] = "Brazil";
    Country["Багамы"] = "Bahamas";
    Country["Bhutan"] = "BT";
    Country["Bouvet Island"] = "BV";
    Country["Botswana"] = "BW";
    Country["Белоруссия"] = "Belarus";
    Country["Belize"] = "BZ";
    Country["Канада"] = "Canada";
    Country["Cocos (Keeling) Islands"] = "CC";
    Country["Congo, the Democratic Republic of the"] = "CD";
    Country["Central African Republic"] = "CF";
    Country["Конго"] = "Congo";
    Country["Швейцария"] = "Switzerland";
    Country["Кот Ди Вуар"] = "Côte d'Ivoire";
    Country["Cook Islands"] = "CK";
    Country["Чили"] = "Chile";
    Country["Камерун"] = "Cameroon";
    Country["Китай"] = "China";
    Country["Колумбия"] = "Colombia";
    Country["Коста Рика"] = "Costa Rica";
    Country["Куба"] = "Cuba";
    Country["Cape Verde"] = "CV";
    Country["Curaçao"] = "CW";
    Country["Christmas Island"] = "CX";
    Country["Кипр"] = "Cyprus";
    Country["Чехия"] = "Czech Republic";
    Country["Германия"] = "Germany";
    Country["Djibouti"] = "DJ";
    Country["Дания"] = "Denmark";
    Country["Dominica"] = "DM";
    Country["Доминиканская Республика"] = "Dominican Republic";
    Country["Algeria"] = "DZ";
    Country["Эквадор"] = "Ecuador";
    Country["Эстония"] = "Estonia";
    Country["Египет"] = "Egypt";
    Country["Western Sahara"] = "EH";
    Country["Eritrea"] = "ER";
    Country["Испания"] = "Spain";
    Country["Эфиопия"] = "Ethiopia";
    Country["Финляндия"] = "Finland";
    Country["Фиджи"] = "Fiji";
    Country["Falkland Islands (Malvinas)"] = "FK";
    Country["Micronesia, Federated States of"] = "FM";
    Country["Faroe Islands"] = "FO";
    Country["Франция"] = "France";
    Country["Габон"] = "Gabon";
    Country["Англия"] = "UK";
    Country["Гренада"] = "Grenada";
    Country["Грузия"] = "Georgia";
    Country["French Guiana"] = "GF";
    Country["Guernsey"] = "GG";
    Country["Гана"] = "Ghana";
    Country["Гибраалтар"] = "Gibraltar";
    Country["Гренландия"] = "Greenland";
    Country["Гамбия"] = "Gambia";
    Country["Гвинея"] = "Guinea";
    Country["Гваделупа"] = "Guadeloupe";
    Country["Equatorial Guinea"] = "GQ";
    Country["Греция"] = "Greece";
    Country["South Georgia and the South Sandwich Islands"] = "GS";
    Country["Гватемала"] = "Guatemala";
    Country["Гуам"] = "Guam";
    Country["Guinea-Bissau"] = "GW";
    Country["Guyana"] = "GY";
    Country["Гонг Конг"] = "Hong Kong";
    Country["Heard Island and McDonald Islands"] = "HM";
    Country["Гондурас"] = "Honduras";
    Country["Хорватия"] = "Croatia";
    Country["Гаити"] = "Haiti";
    Country["Венгрия"] = "Hungary";
    Country["Индонезия"] = "Indonesia";
    Country["Ирландия"] = "Ireland";
    Country["Израиль"] = "Israel";
    Country["Isle of Man"] = "IM";
    Country["Индия"] = "India";
    Country["British Indian Ocean Territory"] = "IO";
    Country["Ирак"] = "Iraq";
    Country["Иран"] = "Iran";
    Country["Iceland"] = "IS";
    Country["Италия"] = "Italy";
    Country["Джерси"] = "Jersey";
    Country["Ямайка"] = "Jamaica";
    Country["Иордания"] = "Jordan";
    Country["Япония"] = "Japan";
    Country["Кения"] = "Kenya";
    Country["Киргизстан"] = "Kyrgyzstan";
    Country["Камоджа"] = "Cambodia";
    Country["Kiribati"] = "KI";
    Country["Comoros"] = "KM";
    Country["Saint Kitts and Nevis"] = "KN";
    Country["Korea, Democratic People's Republic of"] = "KP";
    Country["Korea, Republic of"] = "KR";
    Country["Кувейт"] = "Kuwait";
    Country["Cayman Islands"] = "KY";
    Country["Казахстан"] = "Kazakhstan";
    Country["Lao People's Democratic Republic"] = "LA";
    Country["Lebanon"] = "LB";
    Country["Saint Lucia"] = "LC";
    Country["Liechtenstein"] = "LI";
    Country["Шри Ланка"] = "Sri Lanka";
    Country["Либерия"] = "Liberia";
    Country["Lesotho"] = "LS";
    Country["Литва"] = "Lithuania";
    Country["Люксембург"] = "Luxembourg";
    Country["Латвия"] = "Latvia";
    Country["Libyan Arab Jamahiriya"] = "LY";
    Country["Марокко"] = "Morocco";
    Country["Монако"] = "Monaco";
    Country["Молдова"] = "Moldova";
    Country["Черногория"] = "Montenegro";
    Country["Saint Martin (French part)"] = "MF";
    Country["Мадагаскар"] = "Madagascar";
    Country["Marshall Islands"] = "MH";
    Country["Македония"] = "Macedonia";
    Country["Мали"] = "Mali";
    Country["Myanmar"] = "MM";
    Country["Монголия"] = "Mongolia";
    Country["Макао"] = "Macao";
    Country["Northern Mariana Islands"] = "MP";
    Country["Martinique"] = "MQ";
    Country["Mauritania"] = "MR";
    Country["Montserrat"] = "MS";
    Country["Мальта"] = "Malta";
    Country["Mauritius"] = "MU";
    Country["Мальдивы"] = "Maldives";
    Country["Малави"] = "Malawi";
    Country["Мексика"] = "Mexico";
    Country["Малайзия"] = "Malaysia";
    Country["Мозамбик"] = "Mozambique";
    Country["Намибия"] = "Namibia";
    Country["New Caledonia"] = "NC";
    Country["Нигер"] = "Niger";
    Country["Norfolk Island"] = "NF";
    Country["Нигерия"] = "Nigeria";
    Country["Никарагуа"] = "Nicaragua";
    Country["Нидерланды"] = "Netherlands";
    Country["Норвегия"] = "Norway";
    Country["Непал"] = "Nepal";
    Country["Nauru"] = "NR";
    Country["Niue"] = "NU";
    Country["Новая Зеландия"] = "New Zealand";
    Country["Оман"] = "Oman";
    Country["Панама"] = "Panama";
    Country["Перу"] = "Peru";
    Country["French Polynesia"] = "PF";
    Country["Papua New Guinea"] = "PG";
    Country["Филипины"] = "Philippines";
    Country["Пакистан"] = "Pakistan";
    Country["Польша"] = "Poland";
    Country["Saint Pierre and Miquelon"] = "PM";
    Country["Pitcairn"] = "PN";
    Country["Пуэрто Рико"] = "Puerto Rico";
    Country["Палестина"] = "Palestinian";
    Country["Португалия"] = "Portugal";
    Country["Палау"] = "Palau";
    Country["Парагвай"] = "Paraguay";
    Country["Катар"] = "Qatar";
    Country["Réunion"] = "RE";
    Country["Румыния"] = "Romania";
    Country["Сербия"] = "Serbia";
    Country["Россия"] = "Russia";
    Country["Rwanda"] = "RW";
    Country["Саудовская аравия"] = "Saudi Arabia";
    Country["Соломоновы Острова"] = "Solomon Islands";
    Country["Сейшелы"] = "Seychelles";
    Country["Судан"] = "Sudan";
    Country["Швеция"] = "Sweden";
    Country["Сингапур"] = "Singapore";
    Country["Saint Helena, Ascension and Tristan da Cunha"] = "SH";
    Country["Словения"] = "Slovenia";
    Country["Svalbard and Jan Mayen"] = "SJ";
    Country["Словакия"] = "Slovakia";
    Country["Сиерра Леон"] = "Sierra Leone";
    Country["Сан Марино"] = "San Marino";
    Country["Синегал"] = "Senegal";
    Country["Сомали"] = "Somalia";
    Country["Suriname"] = "SR";
    Country["Sao Tome and Principe"] = "ST";
    Country["El Salvador"] = "SV";
    Country["Sint Maarten (Dutch part)"] = "SX";
    Country["Syrian Arab Republic"] = "SY";
    Country["Swaziland"] = "SZ";
    Country["Turks and Caicos Islands"] = "TC";
    Country["Chad"] = "TD";
    Country["French Southern Territories"] = "TF";
    Country["Того"] = "Togo";
    Country["Таиланд"] = "Thailand";
    Country["Таджикистан"] = "Tajikistan";
    Country["Tokelau"] = "TK";
    Country["Timor-Leste"] = "TL";
    Country["Туркменистан"] = "Turkmenistan";
    Country["Тунис"] = "Tunisia";
    Country["Тонга"] = "Tonga";
    Country["Турция"] = "Turkey";
    Country["Trinidad and Tobago"] = "TT";
    Country["Тувалу"] = "Tuvalu";
    Country["Тайвань"] = "Taiwan";
    Country["Танзания"] = "Tanzania";
    Country["Украина"] = "Ukraine";
    Country["Уганда"] = "Uganda";
    Country["United States Minor Outlying Islands"] = "UM";
    Country["Америка"] = "USA";
    Country["Уругвай"] = "Uruguay";
    Country["Узбекистан"] = "Uzbekistan";
    Country["Ватикан"] = "Vatican";
    Country["Saint Vincent and the Grenadines"] = "VC";
    Country["Venezuela, Bolivarian Republic of"] = "VE";
    Country["Virgin Islands, British"] = "VG";
    Country["Virgin Islands, U.S."] = "VI";
    Country["Вьетнам"] = "Viet Nam";
    Country["Ванау"] = "Vanuatu";
    Country["Wallis and Futuna"] = "WF";
    Country["Самоа"] = "Samoa";
    Country["Емен"] = "Yemen";
    Country["Mayotte"] = "YT";
    Country["ЮАР"] = "South Africa";
    Country["Замбия"] = "Zambia";
    Country["Зимбабве"] = "Zimbabwe";

}).call(this);
