function transformDate(date: string, result: "date" | "time" | "full") {
  const newDate = new Date(date)
  const year = newDate.getUTCFullYear()
  const month = String(newDate.getUTCMonth() + 1).padStart(2, "0")
  const day = String(newDate.getUTCDate()).padStart(2, "0")
  const formattedDate = `${year}-${month}-${day}`

  const hours = String(newDate.getUTCHours()).padStart(2, "0")
  const minutes = String(newDate.getUTCMinutes()).padStart(2, "0")
  const formattedTime = `${hours}:${minutes}`

  if (result === "date") return formattedDate
  if (result === "time") return formattedTime
  if (result === "full") return `${formattedDate} - ${formattedTime}`
}

export default transformDate
