import { Card, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
export function SkillsCard(props) {
  const [isHover, setHover] = useState(false);
  const controls = useAnimation();
  const handleHover = async () => {
    setHover(true);
    await controls.start({ scale: 2, transition: { duration: 0.2 } });
    await controls.start({ scale: 1, transition: { duration: 0.2 } });
  };
  return (
    <motion.div
      onHoverStart={() => handleHover()}
      onHoverEnd={() => setHover(false)}
      animate={{
        scale: isHover ? 1.2 : 1,
      }}
    >
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
