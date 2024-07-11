import { GlobalStyles } from "@mui/material"

function GlobalCSS() {
  return (
    <GlobalStyles
      styles={{
        ":root": {
          "--primary-color-extralight": "#bed9ff",
          "--primary-color-light": "#91c2ff",
          "--primary-color-base": "#357af9",
          "--primary-color-dark": "#1a48db",
          "--primary-color-extradark": "#162255",

          "--secondary-color-extralight": "#fef1c7",
          "--secondary-color-light": "#fce28b",
          "--secondary-color-base": "#fabc34",
          "--secondary-color-dark": "#d87007",
          "--secondary-color-extradark": "#773110",

          "--gray-light": "#efefef",
          "--gray-semilight": "#bdbdbd",
          "--gray-base": "#7c7c7c",
          "--gray-semidark": "#525252",
          "--gray-dark": "#3d3d3d",

          "--white-op-semi": "rgba(255,255,255, 0.5)",
          "--white-op-light": "rgba(255,255,255, 0.25)",
          "--white-op-dark": "rgba(255,255,255, 0.75)",

          "--black-op-semi": "rgba(0,0,0, 0.5)",
          "--black-op-light": "rgba(0,0,0, 0.25)",
          "--black-op-dark": "rgba(0,0,0, 0.75)",

          "--background-color": "#f5f5f7",

          "--font-base": "Poppins, sans-serif",
        },

        "*": {
          boxSizing: "border-box",
          padding: 0,
          margin: 0,
        },

        body: {
          fontFamily: "var(--font-base)",
          width: "100vw",
          minHeight: "100vh",
        },
      }}
    />
  )
}
export default GlobalCSS
