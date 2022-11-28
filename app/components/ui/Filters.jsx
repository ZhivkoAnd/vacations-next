import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="material-box-dropdown">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          Sort by
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="filter"
          onChange={handleChange}
          sx={{ color: "white" }}
        >
          <MenuItem value={10}>Date ascending</MenuItem>
          <MenuItem value={20}>Date descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
