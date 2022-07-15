import {
  Box,
  Stack,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";

export const Form = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="row" >
      <Box flex={1} overflow="hidden">
        <img src="https://source.unsplash.com/random" />
      </Box>
      <Box px={20} flex={1} overflow="auto" >
        <Typography
          variant="h3"
          sx={{ marginTop: "50px", marginBottom: "35px" }}
        >
          Stepper Goes here
        </Typography>
        <Typography
          justifyContent="center"
          variant="h5"
          sx={{ fontSize: "20px", fontWeight: "700" }}
        >
          Let's get you started
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "13px", color: "#7d7d7d", marginBottom: "45px" }}
        >
          It only takes 2 minutes to plan your campaign
        </Typography>
        <Stack>
          <TextField
            label="Full Name"
            required
            helperText={"Please enter your name here."}
            type="text"
            size="small"
            sx={{ marginBottom: "30px" }}
          />
          <TextField
            label="Phone Number"
            required
            helperText={"Please enter only digits."}
            type="number"
            size="small"
            sx={{ marginBottom: "30px" }}
          />
          <TextField
            label="Email-id"
            required
            helperText={"Please enter your email id."}
            type="email"
            size="small"
            sx={{ marginBottom: "30px" }}
          />
          </Stack>
          <Stack>

          <FormControl>
            <FormLabel id="job-experience-group-label">
              When are you planning to run the campaign?*
            </FormLabel>
            <RadioGroup>
              <FormControlLabel
                labelPlacement="end"
                control={<Radio size="small" color="secondary" />}
                label="within 7 days"
              />
              <FormControlLabel
                labelPlacement="end"
                control={<Radio size="small" color="secondary" />}
                label="within 15 days"
              />
              <FormControlLabel
                labelPlacement="end"
                control={<Radio size="small" color="secondary" />}
                label="within 30 days"
              />
            </RadioGroup>
          </FormControl>
          <Typography variant="h1"> h1 heading</Typography>
          <Typography variant="h1"> h1 heading</Typography>
          <Typography variant="h1"> h1 heading</Typography>
          <Typography variant="h1"> h1 heading</Typography>
          
        </Stack>
      </Box>
    </Box>
  );
};
