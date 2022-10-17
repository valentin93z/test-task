import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectRoute = ({ route, setRoute }) => {
  const dataRoute = [
    { value: "A-B", description: "из A в B (билет - 700р.)" },
    { value: "B-A", description: "из B в A (билет - 700р.)" },
    { value: "A-B-A", description: "из A в B и обратно в А (билет - 1200р.)" },
  ];

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="route">Маршрут</InputLabel>
      <Select
        id="route"
        value={route}
        label="Маршрут"
        onChange={(e) => setRoute(e.target.value)}
      >
        {dataRoute.map((route) => (
          <MenuItem key={route.value} value={route.value}>{route.description}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectRoute;
