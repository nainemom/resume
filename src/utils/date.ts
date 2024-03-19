import { toPersianDigits } from "./string";

export function formatDate(date?: Date) {
  if (!date) {
    return 'اکنون'
  }
  return new Intl.DateTimeFormat('fa-IR', {
    // day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function calcPeriodSize(period: [Date] | [Date, Date]) {
  const d1 = period[0].getTime();
  const d2 = !period[1] ? Date.now() : period[1].getTime();
  const offsetDays = (d2 - d1) / 86400000;
  const offsetMonths = Math.round(offsetDays / 30);

  const years = Math.floor(offsetMonths / 12);
  const months = offsetMonths % 12;
  const yearsStr = `${years > 0 ? `${years} سال` : ''}`
  const monthsStr = `${months > 0 ? `${months} ماه` : ''}`
  return toPersianDigits(`${yearsStr}${yearsStr && monthsStr ? ' و ' : ''}${monthsStr}`);
}
