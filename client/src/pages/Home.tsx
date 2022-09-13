import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

function Home() {
  const data = [
    {
      artist: "1",
      name: "1",
      genre: "1",
      year: 1,
    },
    {
      artist: "2",
      name: "2",
      genre: "2",
      year: 2,
    },
    {
      artist: "3",
      name: "3",
      genre: "3",
      year: 3,
    },
    {
      artist: "4",
      name: "4",
      genre: "4",
      year: 4,
    },
    {
      artist: "5",
      name: "5",
      genre: "5",
      year: 5,
    },
  ];

  let rows1: GridRowsProp = data.map((elem, index) => {
    return {
      id: index,
      col1: elem.artist,
      col2: elem.name,
      col3: elem.genre,
      col4: elem.year,
    };
  });

  useEffect(() => {
    // fetch("/api/song").then();
    setRows(data.map((elem, index) => {
      return {
        id: index,
        col1: elem.artist,
        col2: elem.name,
        col3: elem.genre,
        col4: elem.year,
      };
    }))
  }, []);

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Исполнитель", minWidth: 150 },
    { field: "col2", headerName: "Песня" },
    { field: "col3", headerName: "Жанр" },
    { field: "col4", headerName: "Год" },
  ];

  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [artist, setArtist] = useState("");
  const [artists, setArtists] = useState([]);
  const [year, setYear] = useState("");
  const [years, setYears] = useState([]);
  const [selectedPageSize, setSelectedPageSize] = useState(5);
  const [rows, setRows] = useState<GridRowsProp>([]);

  const handleGenreChange = (event: SelectChangeEvent) => {
    const genre = event.target.value;
    setGenre(genre as string);
  };

  const handleArtistChange = (event: SelectChangeEvent) => {
    const artist = event.target.value;
    setArtist(artist as string);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    const selYear = event.target.value;
    setYear(selYear as string);
  };

  const changePageSize = (pageSize: number) => {
    setSelectedPageSize(pageSize);
  };

  return (
    // Playlist
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={9} md={9}>
          <Grid container direction="column">
            <Grid item style={{ marginBottom: "20px" }}>
              <Typography component={"h1"} fontSize={24}>
                Плейлист
              </Typography>
            </Grid>
            <Grid item>
              <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                disableSelectionOnClick
                disableColumnMenu
                rowsPerPageOptions={[5, 10, 15]}
                onPageSizeChange={changePageSize}
                pageSize={selectedPageSize}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Filter */}
        <Grid item xs={3} md={3}>
          <Grid container direction="column" justifyContent="flex-start">
            <Grid item style={{ marginBottom: "20px" }}>
              <Typography component={"h1"} fontSize={24}>
                Фильтр
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent={"flex-start"}
              >
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel>Исполнитель</InputLabel>
                    <Select
                      label="Исполнитель"
                      value={artist}
                      onChange={handleArtistChange}
                    >
                      {}
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel>Жанр</InputLabel>
                    <Select
                      label="Жанр"
                      value={genre}
                      onChange={handleGenreChange}
                    >
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel>Год</InputLabel>
                    <Select
                      label="Год"
                      value={year}
                      onChange={handleYearChange}
                    >
                      <MenuItem value={"none"}>Все</MenuItem>
                      <MenuItem value={"1"}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={"qwe"}>QWE</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
