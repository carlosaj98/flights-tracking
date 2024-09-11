import { Stack, Box, Typography } from "@mui/material"
import SocialLinks from "../../../components/SocialLinks/SocialLinks"

const SectionContact: React.FC = () => {
  return (
    <Stack component={"section"} alignItems={"center"} gap={"32px"}>
      <Stack id="contact-header" alignItems={"center"} textAlign={"center"}>
        <Typography
          variant={"h3"}
          fontFamily={"var(--font-base)"}
          fontSize={"2.25rem"}
          fontWeight={"600"}
        >
          Contact
        </Typography>
        <Typography
          fontFamily={"var(--font-base)"}
          fontSize={"1.25rem"}
          fontWeight={"500"}
          color={"var(--gray-semidark)"}
        >
          Discover who is behind this project and reach me
        </Typography>
      </Stack>
      <Stack
        id="contact-info-container"
        width={"100%"}
        flexDirection={{ lg: "row", xs: "column" }}
        justifyContent={{ lg: "space-between", xs: "center" }}
        alignItems={"center"}
        gap={{ lg: "0px", xs: "24px" }}
      >
        <Box
          id="contact-image"
          width={{ lg: "400px", xs: "250px" }}
          height={{ lg: "400px", xs: "250px" }}
        >
          <img src="/contact_image.png" width={"100%"} height={"100%"} />
        </Box>
        <Stack
          maxWidth={{ lg: "50%", xs: "100%" }}
          textAlign={{ lg: "start", xs: "center" }}
          justifyContent={"center"}
          gap={"24px"}
          id="contact-text"
          color={"var(--gray-dark)"}
        >
          <p>
            I am Carlos, the creator of this website dedicated to real-time
            flight tracking. My passion for technology and 3D design led me to
            develop this platform with the goal of providing an innovative,
            accurate, and easy-to-use tool for travelers and enthusiasts.
          </p>
          <p>
            This project has been built using a combination of technologies,
            including <span>HTML, CSS, TypeScript, React, and Three.js</span>. I
            also use a flight tracking API to provide real-time data called
            <a href="https://aviationstack.com"> AviationStack</a>, using its
            free tier.
          </p>
          <p>
            If you have any questions, inquiries, or suggestions, feel free to
            contact me through the form. I'm here to help!
          </p>
          <SocialLinks />
        </Stack>
      </Stack>
    </Stack>
  )
}
export default SectionContact
