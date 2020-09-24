import moment from 'moment'

const formatDate = (date: string | undefined) => {
  if (!date) return '--:--'
  const isToday = moment(date).isSame(moment(), 'day')
  if (isToday) return moment(date).format('H:mm')
  const isPreviousYear = !moment(date).isSame(moment(), 'year')
  if (isPreviousYear) return moment(date).format('H:mm (D.M.YYYY)')
  return moment(date).format('H:mm (D.M.)')
}

const formatSeconds = (date: number, format = 'H[h] m[m] ss[s]') => {
  return moment.utc(date).format(format)
}

const capitalizeFirstLetter = (string: string | undefined | null) => {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase()
}

export { formatSeconds, formatDate, capitalizeFirstLetter }
