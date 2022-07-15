import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        h1 heading
      </Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1">
        h4 heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5 heading
      </Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle 1 heading</Typography>
      <Typography variant="subtitle2">subtitle 2 heading</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
        magnam illo quas illum minus, aperiam, iusto optio quisquam veniam
        obcaecati quasi libero aspernatur alias quia modi minima excepturi ad.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum
        quam deserunt optio atque illo iste! Qui ullam ut nisi. Porro adipisci
        eius nesciunt excepturi id! Eius nemo asperiores natus?
      </Typography>
    </div>
  );
};
