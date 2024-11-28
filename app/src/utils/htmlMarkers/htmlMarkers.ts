import "./htmlMarkers.style.css"

function htmlMarkers(text: string) {
  const containerEl = document.createElement("div")
  containerEl.className = "marker-container"

  const htmlContent = `<p>${text}</p><div id="svg-container">`

  containerEl.innerHTML = htmlContent

  return containerEl
}
export default htmlMarkers
