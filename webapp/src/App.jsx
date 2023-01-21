import React from "react";
import { useState } from "react";
import { useEffect } from "react";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  searchBar,
  Paper,
  withStyles,
  makeStyles,
  Input,
} from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline>
        <main>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Enter a YouTube URL...
            </Typography>
          </Container>
        </main>
      </CssBaseline>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>

          <TextField id="outlined-basic"  variant="outlined" />          


        </Grid>
      </Grid>
    </>
  );
};

export default App;
