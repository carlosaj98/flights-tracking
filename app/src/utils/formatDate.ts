const today = new Date()

const yesterday = new Date(today)
yesterday.setDate(today.getDate() - 1)

const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

function formatDate(dateOption: -1 | 0 | 1) {
  let date: Date = today
  if (dateOption === -1) date = yesterday
  if (dateOption === 0) date = today
  if (dateOption === 1) date = tomorrow
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export default formatDate
