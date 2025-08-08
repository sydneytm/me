import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Grid, Stack, TextField } from "@mui/material";
import "./contact.css";
export const Contact = () => {
  return (
    <>
      {/* <TextField></TextField> */}
      <Stack direction="row" spacing={3} marginBottom={"30px"}>
        <p>dog dog dog dog dog dog dog dog dog dog dog dog </p>
        <GitHubIcon
          className="icon"
          onClick={() => {
            window.location.href = "https://github.com/sydneytm";
          }}
          fontSize="large"
          sx={{ color: "black" }}
        ></GitHubIcon>
        <LinkedInIcon
          className="icon"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/sydney-ter-molen-340969260";
          }}
          fontSize="large"
          sx={{ color: "black" }}
        />
        <MailOutlineIcon
          className="icon"
          fontSize="large"
          sx={{ color: "black" }}
          onClick={() => {
            console.log("Git ");
            window.location.href = "mailto:your.email@example.com";
          }}
        />
        <p>dog dog dog dog dog dog dog dog dog dog dog dog</p>
      </Stack>
    </>
  );
};
