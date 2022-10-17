import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectTimeBA = ({ timeBA, setTimeBA, setEndTimeBA, endTimeAB, formatDate, calculateEnd }) => {
  const dataTimeBA = [
    { value: new Date(Date.UTC(2022, 10, 17, 15, 30, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 15, 45, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 16, 0, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 16, 15, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 16, 35, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 18, 50, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 18, 55, 0)) },
  ];

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="timeBA">Выберите время (из B в A)</InputLabel>
      <Select
        id="timeBA"
        value={timeBA}
        label="Выберите время (из B в A)"
        onChange={(e) => {
          setTimeBA(e.target.value);
          setEndTimeBA(calculateEnd(e.target.value));
        }}
      >
        {dataTimeBA.map((time, index) => {
          const description = formatDate(time.value);
          return (
            <MenuItem key={index} value={description} disabled={endTimeAB > description ? true : false}> 
              {description}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectTimeBA;


