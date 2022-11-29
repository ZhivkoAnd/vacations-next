import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect({
  setFilterDateAscending,
  setFilterDateDescending,
}) {
  const [sort, setSort] = useState("");

  const handleChange = (e) => {
    setSort(e.target.value);
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
          label="filter"
          sx={{ color: "white" }}
          onChange={handleChange}
          value={sort}
        >
          <MenuItem value="ascending" onClick={setFilterDateAscending}>
            Date ascending
          </MenuItem>
          <MenuItem value="descending" onClick={setFilterDateDescending}>
            Date descending
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
