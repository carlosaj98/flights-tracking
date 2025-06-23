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

          //Blue Base = --blue-500
          "--blue-50": "#eff6ff",
          "--blue-100": "#dae9ff",
          "--blue-200": "#bed9ff",
          "--blue-300": "#91c2ff",
          "--blue-400": "#5da1fd",
          "--blue-500": "#347afa",
          "--blue-600": "#215cef",
          "--blue-700": "#1947dc",
          "--blue-800": "#1b3ab2",
          "--blue-900": "#1c368c",
          "--blue-950": "#162255",

          //Orange Base = --orange-400
          "--orange-50": "#fffaeb",
          "--orange-100": "#fef1c7",
          "--orange-200": "#fce28b",
          "--orange-300": "#fbcc4e",
          "--orange-400": "#fabc34",
          "--orange-500": "#f4960c",
          "--orange-600": "#d87007",
          "--orange-700": "#b34d0a",
          "--orange-800": "#913c0f",
          "--orange-900": "#773110",
          "--orange-950": "#451803",

          "--neutral-50": "#fafafa",
          "--neutral-100": "#f5f5f5",
          "--neutral-200": "#e5e5e5",
          "--neutral-300": "#d4d4d4",
          "--neutral-400": "#a1a1a1",
          "--neutral-500": "#737373",
          "--neutral-600": "#525252",
          "--neutral-700": "#404040",
          "--neutral-800": "#262626",
          "--neutral-900": "#171717",
          "--neutral-950": "#0a0a0a",

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

          "--background-color": "#f5f5f5",

          "--font-base": "Poppins, sans-serif",
        },

        "*": {
          boxSizing: "border-box",
          padding: 0,
          margin: 0,
        },

        "::-webkit-scrollbar": {
          width: "12px",
        },

        "::-webkit-scrollbar-track": {
          background: "var(--background-color)",
        },

        "::-webkit-scrollbar-thumb": {
          background: "var(--gray-base)",
          borderRadius: "16px",
          cursor: "pointer",
          border: "2px solid var(--background-color)",
          "&:hover": {
            background: "var(--gray-dark)",
          },
        },

        body: {
          backgroundColor: "white",
          fontFamily: "var(--font-base)",
          overflowX: "hidden",
        },

        ".Toastify__toast": {
          borderRadius: "18px",
          padding: "12px",
          marginTop: "24px",
        },
      }}
    />
  )
}
export default GlobalCSS
