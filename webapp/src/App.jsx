import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
  //For the button
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const openaiTrigger = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a 5 summary paragraphs about the following topic: ${inputValue}. Seperate the paragraphs by new lines`,
      max_tokens: 4000,
    });

    let summaryresp = response.data.choices[0].text;

    console.log(summaryresp);

    document.getElementById("summary").innerHTML = summaryresp;
  };

  const handleClick = () => {
    openaiTrigger();
  };

  const { getSubtitles } = require("youtube-captions-scraper");

  const getAndPrintCaptions = async (videoId, language) => {
    getSubtitles({
      videoID: videoId, // youtube video id
      lang: language, // default: `en`
    }).then((captions) => {
      concat = "";
      //captions.forEach((caption) => console.log(caption.text));
      captions.forEach((caption) => (concat += caption.text));
      //set the input value to the concatenated captions
      setInputValue(concat);
    });
  };

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
              style={{ paddingTop: "200px" }}
              gutterBottom
            >
              Enter a YouTube URL...
            </Typography>
          </Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
          >
            <Grid item>
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "700px" }}
                value={inputValue}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item>
              <Button variant="contained" size="large" onClick={handleClick}>
                Generate
              </Button>
            </Grid>
          </Grid>

          <Paper
            style={{
              borderRadius: 10,
              width: "1000px",
              height: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "100px",
              paddingTop: "50x",
              paddingBottom: "100px",
              backgroundColor: "#d8caf6",
              boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography
              id="summary"
              variant="h5"
              align="center"
              gutterBottom
            ></Typography>
          </Paper>
        </main>
      </CssBaseline>
    </>
  );
};

export default App;
