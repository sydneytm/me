import { Card, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import "./skills.css";

export function SkillsCard(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.div className="skillCard" whileHover={{ scale: 1.2 }}>
      <Grid item>
        <Card style={{ textAlign: "center" }}>
          <img
            style={{ paddingBottom: "10px" }}
            src={props.src}
            className="img"
          />
          <p style={{ marginTop: "0px" }}>{props.text}</p>
        </Card>
      </Grid>
    </motion.div>
  );
}
