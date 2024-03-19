export function toPersianDigits(str: string | number) {
  return (str || '').toString().replace(/\d/g, (d) => String.fromCharCode(1776 + parseInt(d, 10)));
}