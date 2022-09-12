import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

function Home() {
  useEffect(() => {
    fetch("/api/song").then();
  }, []);

  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
    { id: 4, col1: "MUI", col2: "is Amazing" },
    { id: 5, col1: "MUI", col2: "is Amazing" },
    { id: 6, col1: "MUI", col2: "is Amazing" },
    { id: 7, col1: "MUI", col2: "is Amazing" },
    { id: 8, col1: "MUI", col2: "is Amazing" },
    { id: 9, col1: "MUI", col2: "is Amazing" },
    { id: 10, col1: "MUI", col2: "is Amazing" },
    { id: 11, col1: "MUI", col2: "is Amazing" },
    { id: 12, col1: "MUI", col2: "is Amazing" },
    { id: 13, col1: "MUI", col2: "is Amazing" },
    { id: 14, col1: "MUI", col2: "is Amazing" },
    { id: 15, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={10} md={10}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                component={"h1"}
                // style={{ paddingBottom: "32px" }}
              >
                Плейлист
              </Typography>
            </Grid>
            <Grid item>
              <DataGrid rows={rows} columns={columns} autoHeight />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} md={2}>
          <Grid container direction="column" justifyContent="flex-start">
            <Grid item>
              <Typography component={"h1"}>Фильтр</Typography>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel>Genre</InputLabel>
                <Select label="Genre" />
                <MenuItem value={"qwe"}>QWE</MenuItem>
                <MenuItem value={"qwe"}>QWE</MenuItem>
                <MenuItem value={"qwe"}>QWE</MenuItem>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
