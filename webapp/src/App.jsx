import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./fonts/Comfortaa-Regular.ttf";

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
import { Configuration, OpenAIApi } from "openai";
import { getSubtitles } from "youtube-captions-scraper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const App = () => {
  //For the button
  const [inputValue, setInputValue] = useState("");
  const [summary, setSummary] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const openaiTrigger = async () => {
    console.log("triggered: " + summary);
    let finalResponse = "";
    for (let i = 0; i < summary.length; i++) {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write summary about the following text: ${summary[i]}. Seperate the paragraphs by new lines`,
        max_tokens: 4000,
      });

      console.log(response.data.choices[0].text);

      finalResponse += response.data.choices[0].text;
      //let summaryresp = response.data.choices[0].text;
      setSummary(finalResponse);
    }
  };

  const getAndPrintCaptions = async (videoId, language) => {
    console.log("Getting subtitles for video: ", videoId);
    const captions = await getSubtitles({
      videoID: videoId, // youtube video id
      lang: language, // default: `en`
    });

    console.log(captions[0].text);
    console.log("parsing...");
    let concat = "";

    for (let i = 0; i < captions.length; i++) {
      concat += captions[i].text;
      console.log(captions[i].text);
    }
    // captions.forEach((caption) => console.log(caption.text));
    // captions.forEach((caption) => (concat += caption.text));
    //set the input value to the concatenated captions
    setInputValue(concat);
  };

  const postCaptions = async (videoId) => {
    const url = "http://127.0.0.1:5000/captions";
    const payload = { video_id: videoId };

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Access-Control-Allow-Methods": "POST",
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setSummary(data);
    console.log(summary);
    console.log(data);
  };

  const handleClick = async () => {
    //get the video id

    console.log(`${inputValue}`);
    const videoId = inputValue;
    console.log(videoId);
    //get the captions
    await postCaptions(videoId);

    console.log(inputValue);
    //trigger the openai
    openaiTrigger();
  };

  return (
    <>
      <CssBaseline>
        <main>
          <Container maxWidth="md">
            <Typography
              className="comfortaa"
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
            <Typography variant="h5" align="center" gutterBottom>
              {summary}
            </Typography>
          </Paper>
        </main>
      </CssBaseline>
    </>
  );
};

export default App;
