export function diffTwoTimes(date) {
  const delta =
    Math.abs(new Date(date).getTime() - new Date('2022-09-01').getTime()) / 1000
  const days = Math.floor(delta / 86400)
  const hours = Math.floor(delta / 3600) % 24
  const minutes = Math.floor(delta / 60) % 60
  const seconds = delta % 60
  return `${days.toLocaleString()}D ${hours.toLocaleString()}H ${minutes.toLocaleString()}M ${seconds.toLocaleString()}S`
}
