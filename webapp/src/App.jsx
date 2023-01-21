import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import useStyles from "./styles";

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
} from "@mui/material";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.myPaper}>
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
      </Paper>
    </>
  );
};

export default App;
