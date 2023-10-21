import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const getPalette = (mode) => ({
  // mode,
  ...(mode === "light"
    ? {
        primary: {
          main: "#001F3F", // Darker shade of blue
          light: "#003F7F", // Even darker
          lighter: "#006FCF", // Even darker
          dark: "#00131F", // Dark blue shade
        },
        secondary: {
          main: "#004C99", // Darker shade of blue
          light: "#0073CC", // Even darker
          lighter: "#0099FF", // Even darker
          dark: "#003766", // Dark blue shade
          dark2: "#002E5D", // Add another shade of dark blue
          darker: "#002343", // Add a darker shade of blue
        },
        text: {
          primary: "#004C99", // Match the secondary main color
          secondary: grey[300],
        },
        divider: grey[500],
        background: {
          default: "#001C33", // Darker blue background
          paper: "#001F3F", // Match the primary main color
        },
        custom: {
          nodeColor: "#FFFFFF",
        },
      }
    : {
        primary: {
          main: "#001F3F", // Darker shade of blue
          light: "#003F7F", // Even darker
          lighter: "#006FCF", // Even darker
          dark: "#00131F", // Dark blue shade
        },
        secondary: {
          main: "#004C99", // Darker shade of blue
          light: "#0073CC", // Even darker
          lighter: "#0099FF", // Even darker
          dark: "#003766", // Dark blue shade
          dark2: "#002E5D", // Add another shade of dark blue
          darker: "#002343", // Add a darker shade of blue
        },
        text: {
          primary: "#004C99", // Match the secondary main color
          secondary: grey[300],
        },
        divider: grey[500],
        background: {
          default: "#001C33", // Darker blue background
          paper: "#001F3F", // Match the primary main color
        },
      }),
});

export default function getTheme(mode) {
  const isLightMode = mode === "light";

  return createTheme({
    palette: getPalette(mode),
    shadows: [
      "none",
      `0px 0px 10px -3px  ${mode === "light" ? grey[500] : "transparent"}`,
    ],
    typography: {
      fontFamily: "Sora",
      fontWeightLight: 200,
      fontWeightMedium: 300,
      fontWeightRegular: 400,
      fontWeightBold: 500,
    },
    custom: {
      main: {
        background: isLightMode ? "#F3F5FA" : "#151221",
      },
      node: {
        color: isLightMode ? "#FFFFFF" : "#7770a9",
        mazeWallColor: !isLightMode ? "#2E2659" : "#2E2659",
      },
      topBar: {
        background: isLightMode ? "#FFFFFF" : "#232843",
        textColor: !isLightMode ? grey[300] : "#251f47",
      },
    },
  });
}

