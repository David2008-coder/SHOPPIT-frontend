export function FormatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString('en-GB', {
      year: 'numeric', 
      month: 'long',
      day: '2-digit',
      hour: '2-digits',
      // second: "2-digit",
      // hout12: "2-digit",
      hour12: true
    }).replace(',', '');
}