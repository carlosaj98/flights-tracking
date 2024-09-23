import { LinearProgress, Stack, Typography, Box } from "@mui/material"

type LoaderProps = {
  status: boolean
}

const Loader: React.FC<LoaderProps> = ({status}) => {
  
  return (
    <>{status &&     <Stack alignItems={"center"} gap={"12px"} padding={"24px 0px"}>
    <Typography className="text-loader">Loading Flights ...</Typography>
    <Box width={"100%"}>
      <LinearProgress
        sx={{
          borderRadius: "18px",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "var(--primary-color-base)",
          },
          backgroundColor: "var(--primary-color-extralight)",
        }}
      />
    </Box>
  </Stack>}</>

  )
}
export default Loader
