// const mysql = require("mysql")

// //configuration

// const connection= mysql.createConnection({
//     host:,
//     user:,
//     database:,
//     password:
// })
// connection.connect(err=>{


    var array = [
        [
            'Alpha2',
            'На английском'
        ],
        [
            'AB',
            'Abkhazia'
        ],
        [
            'AU',
            'Australia'
        ],
        [
            'AT',
            'Austria'
        ],
        [
            'AZ',
            'Azerbaijan'
        ],
        [
            'AL',
            'Albania'
        ],
        [
            'DZ',
            'Algeria'
        ],
        [
            'AS',
            'American Samoa'
        ],
        [
            'AI',
            'Anguilla'
        ],
        [
            'AO',
            'Angola'
        ],
        [
            'AD',
            'Andorra'
        ],
        [
            'AQ',
            'Antarctica'
        ],
        [
            'AG',
            'Antigua and Barbuda'
        ],
        [
            'AR',
            'Argentina'
        ],
        [
            'AM',
            'Armenia'
        ],
        [
            'AW',
            'Aruba'
        ],
        [
            'AF',
            'Afghanistan'
        ],
        [
            'BS',
            'Bahamas'
        ],
        [
            'BD',
            'Bangladesh'
        ],
        [
            'BB',
            'Barbados'
        ],
        [
            'BH',
            'Bahrain'
        ],
        [
            'BY',
            'Belarus'
        ],
        [
            'BZ',
            'Belize'
        ],
        [
            'BE',
            'Belgium'
        ],
        [
            'BJ',
            'Benin'
        ],
        [
            'BM',
            'Bermuda'
        ],
        [
            'BG',
            'Bulgaria'
        ],
        [
            'BO',
            'Bolivia, plurinational state of'
        ],
        [
            'BQ',
            'Bonaire, Sint Eustatius and Saba'
        ],
        [
            'BA',
            'Bosnia and Herzegovina'
        ],
        [
            'BW',
            'Botswana'
        ],
        [
            'BR',
            'Brazil'
        ],
        [
            'IO',
            'British Indian Ocean Territory'
        ],
        [
            'BN',
            'Brunei Darussalam'
        ],
        [
            'BF',
            'Burkina Faso'
        ],
        [
            'BI',
            'Burundi'
        ],
        [
            'BT',
            'Bhutan'
        ],
        [
            'VU',
            'Vanuatu'
        ],
        [
            'HU',
            'Hungary'
        ],
        [
            'VE',
            'Venezuela'
        ],
        [
            'VG',
            'Virgin Islands, British'
        ],
        [
            'VI',
            'Virgin Islands, U.S.'
        ],
        [
            'VN',
            'Vietnam'
        ],
        [
            'GA',
            'Gabon'
        ],
        [
            'HT',
            'Haiti'
        ],
        [
            'GY',
            'Guyana'
        ],
        [
            'GM',
            'Gambia'
        ],
        [
            'GH',
            'Ghana'
        ],
        [
            'GP',
            'Guadeloupe'
        ],
        [
            'GT',
            'Guatemala'
        ],
        [
            'GN',
            'Guinea'
        ],
        [
            'GW',
            'Guinea-Bissau'
        ],
        [
            'DE',
            'Germany'
        ],
        [
            'GG',
            'Guernsey'
        ],
        [
            'GI',
            'Gibraltar'
        ],
        [
            'HN',
            'Honduras'
        ],
        [
            'HK',
            'Hong Kong'
        ],
        [
            'GD',
            'Grenada'
        ],
        [
            'GL',
            'Greenland'
        ],
        [
            'GR',
            'Greece'
        ],
        [
            'GE',
            'Georgia'
        ],
        [
            'GU',
            'Guam'
        ],
        [
            'DK',
            'Denmark'
        ],
        [
            'JE',
            'Jersey'
        ],
        [
            'DJ',
            'Djibouti'
        ],
        [
            'DM',
            'Dominica'
        ],
        [
            'DO',
            'Dominican Republic'
        ],
        [
            'EG',
            'Egypt'
        ],
        [
            'ZM',
            'Zambia'
        ],
        [
            'EH',
            'Western Sahara'
        ],
        [
            'ZW',
            'Zimbabwe'
        ],
        [
            'IL',
            'Israel'
        ],
        [
            'IN',
            'India'
        ],
        [
            'ID',
            'Indonesia'
        ],
        [
            'JO',
            'Jordan'
        ],
        [
            'IQ',
            'Iraq'
        ],
        [
            'IR',
            'Iran, Islamic Republic of'
        ],
        [
            'IE',
            'Ireland'
        ],
        [
            'IS',
            'Iceland'
        ],
        [
            'ES',
            'Spain'
        ],
        [
            'IT',
            'Italy'
        ],
        [
            'YE',
            'Yemen'
        ],
        [
            'CV',
            'Cape Verde'
        ],
        [
            'KZ',
            'Kazakhstan'
        ],
        [
            'KH',
            'Cambodia'
        ],
        [
            'CM',
            'Cameroon'
        ],
        [
            'CA',
            'Canada'
        ],
        [
            'QA',
            'Qatar'
        ],
        [
            'KE',
            'Kenya'
        ],
        [
            'CY',
            'Cyprus'
        ],
        [
            'KG',
            'Kyrgyzstan'
        ],
        [
            'KI',
            'Kiribati'
        ],
        [
            'CN',
            'China'
        ],
        [
            'CC',
            'Cocos (Keeling) Islands'
        ],
        [
            'CO',
            'Colombia'
        ],
        [
            'KM',
            'Comoros'
        ],
        [
            'CG',
            'Congo'
        ],
        [
            'CD',
            'Congo, Democratic Republic of the'
        ],
        [
            'KP',
            'Korea, Democratic People\'s republic of'
        ],
        [
            'KR',
            'Korea, Republic of'
        ],
        [
            'CR',
            'Costa Rica'
        ],
        [
            'CI',
            'Cote d\'Ivoire'
        ],
        [
            'CU',
            'Cuba'
        ],
        [
            'KW',
            'Kuwait'
        ],
        [
            'CW',
            'Curaçao'
        ],
        [
            'LA',
            'Lao People\'s Democratic Republic'
        ],
        [
            'LV',
            'Latvia'
        ],
        [
            'LS',
            'Lesotho'
        ],
        [
            'LB',
            'Lebanon'
        ],
        [
            'LY',
            'Libyan Arab Jamahiriya'
        ],
        [
            'LR',
            'Liberia'
        ],
        [
            'LI',
            'Liechtenstein'
        ],
        [
            'LT',
            'Lithuania'
        ],
        [
            'LU',
            'Luxembourg'
        ],
        [
            'MU',
            'Mauritius'
        ],
        [
            'MR',
            'Mauritania'
        ],
        [
            'MG',
            'Madagascar'
        ],
        [
            'YT',
            'Mayotte'
        ],
        [
            'MO',
            'Macao'
        ],
        [
            'MW',
            'Malawi'
        ],
        [
            'MY',
            'Malaysia'
        ],
        [
            'ML',
            'Mali'
        ],
        [
            'UM',
            'United States Minor Outlying Islands'
        ],
        [
            'MV',
            'Maldives'
        ],
        [
            'MT',
            'Malta'
        ],
        [
            'MA',
            'Morocco'
        ],
        [
            'MQ',
            'Martinique'
        ],
        [
            'MH',
            'Marshall Islands'
        ],
        [
            'MX',
            'Mexico'
        ],
        [
            'FM',
            'Micronesia, Federated States of'
        ],
        [
            'MZ',
            'Mozambique'
        ],
        [
            'MD',
            'Moldova'
        ],
        [
            'MC',
            'Monaco'
        ],
        [
            'MN',
            'Mongolia'
        ],
        [
            'MS',
            'Montserrat'
        ],
        [
            'MM',
            'Myanmar'
        ],
        [
            'NA',
            'Namibia'
        ],
        [
            'NR',
            'Nauru'
        ],
        [
            'NP',
            'Nepal'
        ],
        [
            'NE',
            'Niger'
        ],
        [
            'NG',
            'Nigeria'
        ],
        [
            'NL',
            'Netherlands'
        ],
        [
            'NI',
            'Nicaragua'
        ],
        [
            'NU',
            'Niue'
        ],
        [
            'NZ',
            'New Zealand'
        ],
        [
            'NC',
            'New Caledonia'
        ],
        [
            'NO',
            'Norway'
        ],
        [
            'AE',
            'United Arab Emirates'
        ],
        [
            'OM',
            'Oman'
        ],
        [
            'BV',
            'Bouvet Island'
        ],
        [
            'IM',
            'Isle of Man'
        ],
        [
            'NF',
            'Norfolk Island'
        ],
        [
            'CX',
            'Christmas Island'
        ],
        [
            'HM',
            'Heard Island and McDonald Islands'
        ],
        [
            'KY',
            'Cayman Islands'
        ],
        [
            'CK',
            'Cook Islands'
        ],
        [
            'TC',
            'Turks and Caicos Islands'
        ],
        [
            'PK',
            'Pakistan'
        ],
        [
            'PW',
            'Palau'
        ],
        [
            'PS',
            'Palestinian Territory, Occupied'
        ],
        [
            'PA',
            'Panama'
        ],
        [
            'VA',
            'Holy See (Vatican City State)'
        ],
        [
            'PG',
            'Papua New Guinea'
        ],
        [
            'PY',
            'Paraguay'
        ],
        [
            'PE',
            'Peru'
        ],
        [
            'PN',
            'Pitcairn'
        ],
        [
            'PL',
            'Poland'
        ],
        [
            'PT',
            'Portugal'
        ],
        [
            'PR',
            'Puerto Rico'
        ],
        [
            'MK',
            'Macedonia, The Former Yugoslav Republic Of'
        ],
        [
            'RE',
            'Reunion'
        ],
        [
            'RU',
            'Russian Federation'
        ],
        [
            'RW',
            'Rwanda'
        ],
        [
            'RO',
            'Romania'
        ],
        [
            'WS',
            'Samoa'
        ],
        [
            'SM',
            'San Marino'
        ],
        [
            'ST',
            'Sao Tome and Principe'
        ],
        [
            'SA',
            'Saudi Arabia'
        ],
        [
            'SH',
            'Saint Helena, Ascension And Tristan Da Cunha'
        ],
        [
            'MP',
            'Northern Mariana Islands'
        ],
        [
            'BL',
            'Saint Barthélemy'
        ],
        [
            'MF',
            'Saint Martin (French Part)'
        ],
        [
            'SN',
            'Senegal'
        ],
        [
            'VC',
            'Saint Vincent and the Grenadines'
        ],
        [
            'LC',
            'Saint Lucia'
        ],
        [
            'KN',
            'Saint Kitts and Nevis'
        ],
        [
            'PM',
            'Saint Pierre and Miquelon'
        ],
        [
            'RS',
            'Serbia'
        ],
        [
            'SC',
            'Seychelles'
        ],
        [
            'SG',
            'Singapore'
        ],
        [
            'SX',
            'Sint Maarten'
        ],
        [
            'SY',
            'Syrian Arab Republic'
        ],
        [
            'SK',
            'Slovakia'
        ],
        [
            'SI',
            'Slovenia'
        ],
        [
            'GB',
            'United Kingdom'
        ],
        [
            'US',
            'United States'
        ],
        [
            'SB',
            'Solomon Islands'
        ],
        [
            'SO',
            'Somalia'
        ],
        [
            'SD',
            'Sudan'
        ],
        [
            'SR',
            'Suriname'
        ],
        [
            'SL',
            'Sierra Leone'
        ],
        [
            'TJ',
            'Tajikistan'
        ],
        [
            'TH',
            'Thailand'
        ],
        [
            'TW',
            'Taiwan, Province of China'
        ],
        [
            'TZ',
            'Tanzania, United Republic Of'
        ],
        [
            'TL',
            'Timor-Leste'
        ],
        [
            'TG',
            'Togo'
        ],
        [
            'TK',
            'Tokelau'
        ],
        [
            'TO',
            'Tonga'
        ],
        [
            'TT',
            'Trinidad and Tobago'
        ],
        [
            'TV',
            'Tuvalu'
        ],
        [
            'TN',
            'Tunisia'
        ],
        [
            'TM',
            'Turkmenistan'
        ],
        [
            'TR',
            'Turkey'
        ],
        [
            'UG',
            'Uganda'
        ],
        [
            'UZ',
            'Uzbekistan'
        ],
        [
            'UA',
            'Ukraine'
        ],
        [
            'WF',
            'Wallis and Futuna'
        ],
        [
            'UY',
            'Uruguay'
        ],
        [
            'FO',
            'Faroe Islands'
        ],
        [
            'FJ',
            'Fiji'
        ],
        [
            'PH',
            'Philippines'
        ],
        [
            'FI',
            'Finland'
        ],
        [
            'FK',
            'Falkland Islands (Malvinas)'
        ],
        [
            'FR',
            'France'
        ],
        [
            'GF',
            'French Guiana'
        ],
        [
            'PF',
            'French Polynesia'
        ],
        [
            'TF',
            'French Southern Territories'
        ],
        [
            'HR',
            'Croatia'
        ],
        [
            'CF',
            'Central African Republic'
        ],
        [
            'TD',
            'Chad'
        ],
        [
            'ME',
            'Montenegro'
        ],
        [
            'CZ',
            'Czech Republic'
        ],
        [
            'CL',
            'Chile'
        ],
        [
            'CH',
            'Switzerland'
        ],
        [
            'SE',
            'Sweden'
        ],
        [
            'SJ',
            'Svalbard and Jan Mayen'
        ],
        [
            'LK',
            'Sri Lanka'
        ],
        [
            'EC',
            'Ecuador'
        ],
        [
            'GQ',
            'Equatorial Guinea'
        ],
        [
            'AX',
            'Åland Islands'
        ],
        [
            'SV',
            'El Salvador'
        ],
        [
            'ER',
            'Eritrea'
        ],
        [
            'SZ',
            'Eswatini'
        ],
        [
            'EE',
            'Estonia'
        ],
        [
            'ET',
            'Ethiopia'
        ],
        [
            'ZA',
            'South Africa'
        ],
        [
            'GS',
            'South Georgia and the South Sandwich Islands'
        ],
        [
            'OS',
            'South Ossetia'
        ],
        [
            'SS',
            'South Sudan'
        ],
        [
            'JM',
            'Jamaica'
        ],
        [
            'JP',
            'Japan'
        ]
    ];


// })
const testFolder = './images/';
const fs = require('fs');
let arr=[];
let index=0;
let mass=[];

/*
строка для проверки с тем, что есть в глобальном массиве
*/
let arrInString="AB,AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET,FI,FJ,FK,FM,FO,FR,GA,GB-ENG,GB-NIR,GB-SCT,GB-WLS,GB,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,HU,ID,IE,IL,IM,IN,IO,IQ,IR,IS,IT,JE,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,OS,PA,PE,PF,PG,PH,PK,PL,PM,PN,PR,PS,PT,PW,PY,QA,RE,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TH,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,UM,US,UY,UZ,VA,VC,VE,VG,VI,VN,VU,WF,WS,XK,YE,YT,ZA,ZM,ZW";
let strInArr=arrInString.split(",")

/*
читаем все файлы с папки без типа файла и записываем в массив arr 
*/ 
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
      arr[index]=file.slice(0,file.indexOf('.')).toUpperCase()
      index++
  });
})


/*
если элементы совпадают, всё записываеться в новый массив (проверка елементов с глобального массива с папочными)
*/
// array.forEach(obj=>{
//     if(arrInString.indexOf(obj[0])+1)
//     mass.push(obj)
//     else
//     console.log("Не совпадает: "+ obj)
// })


/*
если элементы совпадают, всё записываеться в новый массив (проверка папочных елементов с массивными)
*/

let arrr= []

array.forEach(e=>{
    arrr.push(e[0])

})
strInArr.forEach(el=>{
    if(arrr.indexOf(el)+1)
        mass.push(el)
    else
    console.log("Have no match: "+el)
})

console.log("Length of final mass : "+ mass.length)
console.log("Length of global mass : "+ array.length)




/* 
Запись в файл строки (отсюда тянулся массив со значениями), снимать коммент , только когда по-новой выписать строку для сравнения!!!
*/
// fs.appendFile('./index.js', arr, (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//   })