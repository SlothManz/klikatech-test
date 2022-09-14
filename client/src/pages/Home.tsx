import { useState, useEffect, useRef } from "react";
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
  const [data, setData] = useState<IRow[]>([]);

  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState<string[]>([]);
  const [artist, setArtist] = useState("");
  const [artists, setArtists] = useState<string[]>([]);
  const [year, setYear] = useState("");
  const [years, setYears] = useState<number[]>([]);
  const [selectedPageSize, setSelectedPageSize] = useState(5);
  const [rows, setRows] = useState<GridRowsProp>([]);

  interface IRow {
    id: number;
    artist: string;
    name: string;
    genre: string;
    year: number;
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/song");
      const json = await res.json();
      setData(json);
    }

    fetchData().then(() => {
      setRows(
        data.map((elem: IRow) => {
          return {
            id: elem.id,
            col1: elem.artist,
            col2: elem.name,
            col3: elem.genre,
            col4: elem.year,
          };
        })
      );
      setArtists(
        data.map((elem: IRow) => {
          return elem.artist;
        })
      );
      setGenres(
        data.map((elem: IRow) => {
          return elem.genre;
        })
      );
      setYears([
        ...data.map((elem: IRow) => {
          return elem.year;
        }),
      ]);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/song?genre=${genre}&artist=${artist}&year=${year}`
      );
      const data = await res.json();
      setData(data);
      setRows(
        data.map((elem: IRow) => {
          return {
            id: elem.id,
            col1: elem.artist,
            col2: elem.name,
            col3: elem.genre,
            col4: elem.year,
          };
        })
      );
    }

    fetchData();
  }, [genre, artist, year]);

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Исполнитель", minWidth: 150 },
    { field: "col2", headerName: "Песня", minWidth: 250 },
    { field: "col3", headerName: "Жанр" },
    { field: "col4", headerName: "Год" },
  ];

  function handleGenreChange(event: SelectChangeEvent) {
    const genre = event.target.value;
    return setGenre(genre as string);
  }

  function handleArtistChange(event: SelectChangeEvent) {
    const artist = event.target.value;
    return setArtist(artist as string);
  }

  function handleYearChange(event: SelectChangeEvent) {
    const year = event.target.value;
    return setYear(year as string);
  }

  function changePageSize(pageSize: number) {
    setSelectedPageSize(pageSize);
  }

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
                      <MenuItem value={"none"}>Все</MenuItem>
                      {[...new Set(artists)].map((elem, index) => {
                        return (
                          <MenuItem value={elem} key={index}>
                            {elem}
                          </MenuItem>
                        );
                      })}
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
                      <MenuItem value={"none"}>Все</MenuItem>
                      {[...new Set(genres)].map((elem, index) => {
                        return (
                          <MenuItem value={elem} key={index}>
                            {elem}
                          </MenuItem>
                        );
                      })}
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
                      {/* TODO Artists map */}
                      {[...new Set(years)]
                        .sort((a, b) => a - b)
                        .map((elem, index) => {
                          return (
                            <MenuItem value={elem} key={index}>
                              {elem}
                            </MenuItem>
                          );
                        })}
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
