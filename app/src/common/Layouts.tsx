import { Link } from "react-router-dom"
import { Stack, styled } from "@mui/material"

const LinkDetailPage: React.FC = () => {
  const LinkContainer = styled(Stack)({
    height: "100%",
    justifyContent: "center",
    backgroundColor: "var(--primary-color-base)",
    maxWidth: "100px",

    a: {
      textDecoration: "none",
      textAlign: "center",
      color: "white",
      fontWeight: "500",
      width: "100%",
      height: "100%",
      display:"flex",
      alignItems:"center",
      padding:"12px"
    },
  })

  return (
    <LinkContainer>
      <Link to={"#"}>More Details</Link>
    </LinkContainer>
  )
}



export { LinkDetailPage }
