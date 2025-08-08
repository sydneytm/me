import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Grid, Stack, TextField } from "@mui/material";
import "./contact.css";

import { motion, scale } from "framer-motion";
import { Mail } from "@mui/icons-material";
const ContactIcon = (props) => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.5 }}>
        <props.component
          fontSize="large"
          className="icon"
          onClick={() => {
            window.location3.href = props.link;
          }}
        ></props.component>
      </motion.div>
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <Stack direction="row" spacing={3} marginBottom={"30px"}>
        <p>dog dog dog dog dog dog dog dog dog dog dog dog </p>
        <ContactIcon
          link="https://github.com/sydneytm"
          component={GitHubIcon}
        />
        <ContactIcon
          link="https://www.linkedin.com/in/sydney-ter-molen-340969260"
          component={LinkedInIcon}
        />

        <ContactIcon
          link="mailto:your.email@example.com"
          component={MailOutlineIcon}
        />
        <p>dog dog dog dog dog dog dog dog dog dog dog dog</p>
      </Stack>
    </>
  );
};
