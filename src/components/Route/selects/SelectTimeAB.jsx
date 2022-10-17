import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectTimeAB = ({ timeAB, setTimeAB, formatDate, setEndTimeAB, calculateEnd }) => {
  const dataTimeAB = [
    { value: new Date(Date.UTC(2022, 10, 17, 15, 0, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 15, 30, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 15, 45, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 16, 0, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 16, 15, 0)) },
    { value: new Date(Date.UTC(2022, 10, 17, 18, 0, 0)) },
  ];


  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="timeAB">Выберите время (из A в B)</InputLabel>
      <Select
        id="timeAB"
        value={timeAB}
        label="Выберите время (из A в B)"
        onChange={(e) => {
          setTimeAB(e.target.value);
          setEndTimeAB(calculateEnd(e.target.value));
        }}
      >
        {dataTimeAB.map((time, index) => {
          const description = formatDate(time.value);
          return (
            <MenuItem key={index} value={description}>
              {description}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectTimeAB;