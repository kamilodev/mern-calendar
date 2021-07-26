export const hello = () => {
   const day = new Date()
   const hours = day.getHours()
   const niceDay = hours >= 0 && hours <= 12
   const niceAfternoon = hours >= 14 && hours < 20

   return niceDay === true ? 'Buenos días '
   : niceAfternoon === true ? 'Buenas tardes '
   : 'Buenas noches '
}