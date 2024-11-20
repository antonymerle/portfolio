import { StaticImageData } from "next/image";
import {
  faLineChart,
  faWater,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import istexUPPA from "../public/istex-uppa.jpg";
import kanban from "../public/kanban.jpg";
import wordle from "../public/wordle.jpg";
import joliShop from "../public/joliShop.jpg";
import alatempera from "../public/a-la-tempera.jpg";
import hyproom from "../public/hyproom.jpg";

export interface IMainProject {
  title: string;
  description: string;
  projectImage: {
    imageImport: StaticImageData;
    width: number;
    height: number;
    imageAlt: string;
  };
  stack: Array<String>;
  repoURL: string;
  liveURL: string;
  justify: string;
}

export const mainProjects = [
  {
    title: "Hyproom",
    projectImage: {
      imageImport: hyproom,
      width: 800,
      height: 450,
      imageAlt: "hyproom image",
    },
    stack: ["NextJS", "Golang", "mySQL"],
    repoURL: "https://github.com/antonymerle/hyproom-frontend",
    liveURL: "http://www.hyproom.com/",
    justify: "left",
  },
  {
    title: "A la tempera",
    projectImage: {
      imageImport: alatempera,
      width: 800,
      height: 450,
      imageAlt:
        "a la tempera, vente en ligne de peintures décoratives pour chambre d'enfant",
    },
    stack: ["NextJS", "MongoDB", "Stripe"],
    repoURL: "https://github.com/antonymerle/alatempera",
    liveURL: "http://www.alatempera.com/",
    justify: "right",
  },
  {
    title: "JoliShop",
    projectImage: {
      imageImport: joliShop,
      width: 800,
      height: 450,
      imageAlt: "joliShop ecommerce screencap",
    },
    stack: ["NextJS", "Sanity.io", "Stripe"],
    repoURL: "https://github.com/antonymerle/ecommerce",
    liveURL: "https://jolishop.vercel.app/",
    justify: "left",
  },
  {
    title: "ISTEX-UPPA",
    projectImage: {
      imageImport: istexUPPA,
      width: 800,
      height: 450,
      imageAlt: "istex uppa screencap",
    },
    stack: ["TypeScript", "Angular", "rxjs"],
    repoURL: "https://github.com/antonymerle/istex-uppa",
    liveURL: "https://istex-uppa.vercel.app/",
    justify: "right",
  },
  {
    title: "Kanban",
    projectImage: {
      imageImport: kanban,
      width: 800,
      height: 450,
      imageAlt: "kanban screencap",
    },
    stack: ["NodeJS", "Express", "Socket.io", "React"],
    repoURL: "https://github.com/antonymerle/kanban-backend",
    liveURL: "https://kanban-frontend-nine.vercel.app/",
    justify: "left",
  },
  {
    title: "Wordle",
    projectImage: {
      imageImport: wordle,
      width: 800,
      height: 450,
      imageAlt: "wordle game screencap",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    repoURL: "https://github.com/antonymerle/wordle",
    liveURL: "https://wordle-bay-one.vercel.app/",
    justify: "right",
  },
];

export const sideProjects = [
  {
    projectIcon: faLineChart,
    title: "SISE ANALYTICS",
    description:
      "SISE Analytics is a dashboard that fetches Full-Time-Equivalent (FTE) of french universities, process the data and export it on a SpreadSheet. Sise Analytics helps academic libraries to manage their electronic resources acquisitions based on that FTE data.",
    repoURL: "https://git.univ-pau.fr/amerle001/sise-analytics",
    liveURL: "https://sise-analytics.vercel.app/",
  },
  {
    projectIcon: faWater,
    title: "BOARD.LEASE",
    description:
      "Board.lease is a platform made by surfers for surfers. On board.lease, you can rent your board on your future holiday spot. If you're a local, you can put your surfboard to rent, make a little money and help a fellow surfer ! Board.lease is an academic project designed to be displayed on mobile phones only.",
    repoURL: "https://github.com/antonymerle/boardLeaseBackend",
    liveURL: "https://board-lease-frontend.vercel.app/",
  },
  {
    projectIcon: faShieldHalved,
    title: "PHISH-EYE",
    description:
      "PhishEye is a web browser extension designed to protect Université de Pau webmail users from phishing. Attacks being often predictables, the extension is able to detect malicious links, sanitize them and display an informative message to the user.",
    repoURL: "https://git.univ-pau.fr/amerle001/phishEye",
    liveURL: "https://git.univ-pau.fr/amerle001/phishEye/-/releases",
  },
];
