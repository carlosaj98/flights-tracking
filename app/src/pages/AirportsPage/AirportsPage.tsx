import AirportsPageContainer from "./AirportsPage.style"
import SectionMain from "./sections/SectionMain"

const AirportsPage: React.FC = () => {
  return (
    <AirportsPageContainer sx={{ alignItems: "center" }}>
      <SectionMain />
    </AirportsPageContainer>
  )
}
export default AirportsPage
