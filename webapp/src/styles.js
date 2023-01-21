import { CardMedia } from "@mui/material";
import makeStyles from "@mui/material/styles/makeStyles";
import { useThemeProps } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  myPaper: {
    backgroundColor: "blue",
  },
  title: {
    padding: "10px",
  },
}));

export default useStyles;
