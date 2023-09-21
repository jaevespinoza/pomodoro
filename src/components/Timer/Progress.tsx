import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ProgressStyle = makeStyles({});

const Progress = () => {
  const classes = ProgressStyle();

  return <CircularProgress variant="determinate" value={25} />;
};
