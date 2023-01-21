import React from "react";
import { useState } from "react";

import { useEffect } from "react";

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
    </>
  );
};

export default App;
