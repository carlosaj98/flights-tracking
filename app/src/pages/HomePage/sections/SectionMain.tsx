import { useState } from "react"

import { Stack } from "@mui/material"
import HeroGlobe from "../../../components/HeroGlobe/HeroGlobe"
import HeroDetails from "../../../components/HeroDetails/HeroDetails"
import HeroForm from "../../../components/HeroForm/HeroForm"
import formFields from "../configs/formFields"

import { useFlight } from "../../../hooks/useFlight"

import { FieldValues } from "react-hook-form"

const SectionMain: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { flight, isLoading, setIsLoading } = useFlight(formData, {
    access_key: import.meta.env.VITE_API_KEY,
    airline_name: formData.airline,
    flight_iata: formData.flight,
    limit: 50,
  })

  return (
    <Stack
      component={"section"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100%"}
      gap={"32px"}
    >
      <Stack
        id="hero-container"
        flexDirection={{ lg: "row", xs: "column" }}
        alignItems={"center"}
      >
        <Stack
          id="hero-text-container"
          className="animate__animated animate__fadeInLeft"
        >
          <Stack textAlign={{ lg: "left", xs: "center" }}>
            <h1>
              Find your <span>Flight</span>!
            </h1>
            <h2>
              Track flights in real time with the possibility of visualize them
              in 3D.
            </h2>
          </Stack>

          <HeroForm
            formFields={formFields}
            actionForm={setFormData}
            actionLoading={setIsLoading}
          />
        </Stack>

        <Stack
          id="canvas-container"
          className="animate__animated animate__fadeInRight"
          alignItems={"center"}
        >
          <HeroGlobe />
        </Stack>
      </Stack>
      <HeroDetails data={flight} isLoading={isLoading} />
    </Stack>
  )
}
export default SectionMain
