import moment from 'moment-jalaali';


export function formatCurrency(value) {
  return new Intl.NumberFormat("fa-IR").format(value) + " ریال";
}


export function formatDate(dateStr) {
    return moment(dateStr).format('jD jMMM jYYYY, HH:mm');
}


  export function calcMinutesLeft(dateStr) {
    const d1 = new Date().getTime();
    const d2 = new Date(dateStr).getTime();
    return Math.round((d2 - d1) / 60000);
  }

