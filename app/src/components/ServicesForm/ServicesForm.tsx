import ServicesFormContainer from "./ServicesForm.style"
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material"
import { useState, useEffect } from "react"

const ServicesForm: React.FC = () => {
  const [value, setValue] = useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target).value);
  };

  useEffect(()=>{
    console.log(value)
  },[value])
  return (
    <ServicesFormContainer>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </ServicesFormContainer>
  )
}
export default ServicesForm
