import React, { useState, useEffect } from "react";
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

  const [genre, setGenre] = useState("none");
  const [genres, setGenres] = useState<string[]>([]);
  const [artist, setArtist] = useState("none");
  const [artists, setArtists] = useState<string[]>([]);
  const [year, setYear] = useState("none");
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
      const newRows = data.map((elem: IRow) => {
        return {
          id: elem.id,
          col1: elem.artist,
          col2: elem.name,
          col3: elem.genre,
          col4: elem.year,
        };
      });
      setRows(newRows);
    }

    async function fetchFilters() {
      const res = await fetch("/api/song/filters");
      const json = await res.json();
      const newArtists = json.artists.map((elem: IRow) => {
        return elem.artist;
      });
      setArtists(newArtists);
      const newGenres = json.genres.map((elem: IRow) => {
        return elem.genre;
      });
      setGenres(newGenres);
      const newYears = json.years.map((elem: IRow) => {
        return elem.year;
      });
      setYears(newYears);
    }

    fetchData();
    fetchFilters();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/song?genre=${genre}&artist=${artist}&year=${year}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
    { field: "col1", headerName: "??????????????????????", minWidth: 150 },
    { field: "col2", headerName: "??????????", minWidth: 250 },
    { field: "col3", headerName: "????????" },
    { field: "col4", headerName: "??????" },
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
                ????????????????
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
                ????????????
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
                    <InputLabel>??????????????????????</InputLabel>
                    <Select
                      label="??????????????????????"
                      value={artist}
                      onChange={handleArtistChange}
                    >
                      <MenuItem value={"none"}>??????</MenuItem>
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
                    <InputLabel>????????</InputLabel>
                    <Select
                      label="????????"
                      value={genre}
                      onChange={handleGenreChange}
                    >
                      <MenuItem value={"none"}>??????</MenuItem>
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
                    <InputLabel>??????</InputLabel>
                    <Select
                      label="??????"
                      value={year}
                      onChange={handleYearChange}
                    >
                      <MenuItem value={"none"}>??????</MenuItem>
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
