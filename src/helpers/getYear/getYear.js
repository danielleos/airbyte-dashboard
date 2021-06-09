export default function getYear(datetimeStr) {
  const date = new Date(datetimeStr)
  return date.getFullYear()
}