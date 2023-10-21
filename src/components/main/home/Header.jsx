import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Header = ({ show }) => {
  const { colorMode } = useSelector(({ ui }) => ui);

  return (
    <Stack sx={{ opacity: show ? 1 : 0, transition: "3s" }}>
      <Typography
        sx={{
          transition: "all 0.3s",
          fontSize: { xs: 13, sm: 15, md: 18, lg: 24, xl: 26 },
          mb: "-5%",
        }}
        textAlign="center"
        color={colorMode === "light" ? "secondary.dark" : "secondary.lighter"}
        fontWeight={300}
        children="DS & Algo"
      />
      <Typography
        sx={{
        transition: "all 0.3s",
        fontSize: { xs: 45, sm: 50, md: 60, lg: 80, xl: 90 },
        WebkitTextFillColor: "transparent",
        background: "linear-gradient(10deg, #0074E4 30%, #0055E4 50%, #0035E4 80%)", // Change the gradient colors here
        WebkitBackgroundClip: "text",
        filter: `drop-shadow(3px 3px 0px ${
          colorMode === "light" ? "#2E2659" : "#FFFFFF"
      })`,
    }}
    fontWeight={800}
    textAlign="center"
    textTransform="uppercase"
    children="Visualizer"
  />

    </Stack>
  );
};

export default Header;
