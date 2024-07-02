import { Button } from "@mui/material"

interface ButtonsProp {
  text: string
}

const FormSubmitButton: React.FC<ButtonsProp> = ({ text }) => {
  return <Button type="submit" variant="contained" 
  sx={{
    textTransform:"none",
    fontFamily:"var(--font-base)",
    fontSize:"1.1rem",
    borderRadius:"18px",
    backgroundColor:"var(--primary-color-base)",
    padding:"12px",
    boxShadow:"0 2px 2px var(--black-op-semi)",
    transition:"all 0.2s ease",
    "&:hover":{
      backgroundColor:"var(--primary-color-semidark)",
      boxShadow:"0 2px 2px var(--black-op-dark)",
    },

    "&:focus":{
      backgroundColor:"var(--black-op-light)",
      boxShadow:"0 2px 2px var(--black-op-semi) inset",
    }
  }}>{text}</Button>
}

export default FormSubmitButton
