import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import algoImg from "../../assets/tutorial/algo.png";
import actionsImg from "../../assets/tutorial/actions.png";
import controllersImg from "../../assets/tutorial/controllers.png";
import indicatorsImg from "../../assets/tutorial/indicators.png";
import sourceImg from "../../assets/tutorial/source.png";
import settingsImg from "../../assets/tutorial/settings.png";
import expImg from "../../assets/tutorial/example.png";

const styles = {
  icon: { fontSize: 30, mr: 2 },
  btn: {
    bgcolor: "secondary.main",
    "&:hover": { bgcolor: "secondary.main", opacity: 0.9 },
  },
};

function getSlides(isMobile) {
  return [
    {
      label: "Algorithm",
      icon: <LooksOneIcon sx={styles.icon} />,
      description: `Choose Path-Finding / Sorting algorithm.`,
      img: algoImg,
    },
    {
      label: "Action Buttons",
      icon: <LooksTwoIcon sx={styles.icon} />,
      description: `Use the Action-Buttons to perform various actions related to the
    visualization animation & environment. `,
      img: actionsImg,
    },
    {
      label: "Control Buttons",
      icon: <Looks3Icon sx={styles.icon} />,
      description: `Control the visualization progress and speed.`,
      img: controllersImg,
    },
    {
      label: "Indicators",
      icon: <Looks4Icon sx={styles.icon} />,
      description: `Get live information about the visualization progress.
                  ${
                    !isMobile
                      ? "*Hover your mouse over the icons for description."
                      : "*Hold your finger over the icons for description."
                  }`,
      img: indicatorsImg,
    },
    {
      label: "Tutorial Section",
      icon: <Looks5Icon sx={styles.icon} />,
      description: `Learn more about the algorithm here`,
      img: sourceImg,
    },
    {
      label: "Canvas Settings",
      icon: <Looks6Icon sx={styles.icon} />,
      description: `Change the canvas settings to your liking.`,
      img: settingsImg,
    },
    {
      label: "Visualize & Learn",
      icon: <EmojiEmotionsIcon sx={styles.icon} />,
      description: `Make the most of this tool to assit your learning`,
      img: expImg,
    },
  ];
}

export default getSlides;
