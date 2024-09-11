import { Stack, Box, Typography } from "@mui/material"

const SectionContact: React.FC = () => {
  return (
    <Stack component={"section"} alignItems={"center"} gap={"64px"}>
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
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box id="contact-image" width={"400px"} height={"400px"}>
          <img src="/contact_image.png" width={"100%"} height={"100%"} />
        </Box>
        <Stack
          maxWidth={"50%"}
          justifyContent={"center"}
          gap={"24px"}
          flexDirection={"column"}
        >
          <p>
            I am Carlos, the creator of this website dedicated to real-time
            flight tracking. My passion for technology and 3D design led me to
            develop this platform with the goal of providing an innovative,
            accurate, and easy-to-use tool for travelers and enthusiasts.
          </p>
          <p>
            This project has been built using a combination of technologies,
            including HTML, CSS, TypeScript, React, and Three.js. I also use a
            flight tracking API to provide real-time data called AviationStack,
            using its free tier (https://aviationstack.com).
          </p>
          <p>
            If you have any questions, inquiries, or suggestions, feel free to
            contact me through the form. I'm here to help!
          </p>
        </Stack>
      </Stack>
      <Stack id="contact-form-container" width={"100%"} maxWidth={"50%"}>
        
      </Stack>
    </Stack>
  )
}
export default SectionContact
