import SocialLinksContainer from "./SocialLinks.style"
import {  Link } from "@mui/material"
import { IconLinkedin, IconGithub, IconWeb} from "../../common/Icons"

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer
    justifyContent={{lg:"flex-start", xs:"center"}}
    >
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
    </SocialLinksContainer>
  )
}
export default SocialLinks
