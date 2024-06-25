import dayjs from 'dayjs'
import tuc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
dayjs.extend(tuc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

// console.log(dayjs('20240413T040500').tz('America/New_York').format('YYYY-MM-DD HH:mm:ss'))
// console.log(dayjs.tz.guess('20240413T040500Z'));
// console.log(dayjs('2024-04-13T04:05:00Z').format('YYYY-MM-DD HH:mm:ss'));
console.log(dayjs('20240413T040500Z','YYYYMMDDTHHmmssZ').format('YYYY-MM-DD HH:mm:ss'))