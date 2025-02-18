import { useState } from "react"

import { Stack } from "@mui/material"
import HeroGlobe from "../../../components/HeroGlobe/HeroGlobe"

import HeroForm from "../../../components/HeroForm/HeroForm"
import { formFields, validationSchema } from "../configs/formFields"

import { useFlight } from "../../../hooks/useFlight"

import { FieldValues } from "react-hook-form"

const SectionMain: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { setIsLoading } = useFlight(formData, {
    access_key: import.meta.env.VITE_API_KEY,
    airline_name: formData.airline,
    flight_iata: formData.flight,
    limit: 50,
  })

  return (
    <Stack
      component={"section"}
      id="section-main"
      flexDirection={{ lg: "row", xs: "column" }}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={"24px"}
    >
      <Stack
        id="hero-text-container"
        maxWidth={{ lg: "calc(100% - 700px)"}}
        height={{ lg: "700px", xs: "fit-content" }}
        className="animate__animated animate__fadeIn"
      >
        <Stack textAlign={{ lg: "left", xs: "center" }}>
          <h1>
            Find your <span>Flight</span>!
          </h1>
          <h2>
            Track flights in real time with the possibility of visualize them in
            3D.
          </h2>
        </Stack>
        <HeroForm
          formFields={formFields}
          actionForm={setFormData}
          actionLoading={setIsLoading}
          validation={validationSchema}
        />
      </Stack>
      <Stack
        id="canvas-container"
        width={{md:"100%", xs:"fit-content"}}
        alignItems={"center"}
        className="animate__animated animate__zoomInDown"
      >
        <HeroGlobe />
      </Stack>
    </Stack>
  )
}
export default SectionMain
