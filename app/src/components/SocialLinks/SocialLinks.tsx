import SocialLinksContainer from "./SocialLinks.style"
import { Stack, Box, Link, Divider } from "@mui/material"
import { IconLinkedin, IconGithub, IconWeb, IconMail } from "../../common/Icons"

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer>
      <Link
        href="https://www.linkedin.com/in/carlosaj98"
        target="_blank"
        width={"30px"}
        height={"30px"}
        className="social-media-links"
      >
        <IconLinkedin />
      </Link>
      <Link
      href="https://github.com/carlosaj98"
        target="_blank"
        width={"30px"}
        height={"30px"}
        className="social-media-links"
      >
        <IconGithub />
      </Link>
      <Link
      href="https://www.carlosaj.com"
        target="_blank"
        width={"30px"}
        height={"30px"}
        className="social-media-links"
      >
        <IconWeb />
      </Link>
      <Divider orientation="vertical" />
      <Stack
        className="mail-container"
        flexDirection={"row"}
        alignItems={"center"}
        gap={"12px"}
      >
        <Box width={"30px"} height={"30px"}>
          <IconMail />
        </Box>
        <p>carlosalvarezj.job@gmail.com</p>
      </Stack>
    </SocialLinksContainer>
  )
}
export default SocialLinks
