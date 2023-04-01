import {
  faLineChart,
  faWater,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const sideProjects = [
  {
    projectIcon: faLineChart,
    title: "SISE ANALYTICS",
    description:
      "SISE Analytics is a dashboard that fetches Full-Time-Equivalent (FTE) of french universities, process the data and export it on a SpreadSheet. Sise Analytics helps academic libraries to manage their electronic resources acquisitions based on that FTE data.",
    repoURL: "https://git.univ-pau.fr/amerle001/sise-analytics",
    liveURL: "https://stats-sise.herokuapp.com/",
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
    title: "PHISHEYE BROWSER EXTENSION",
    description:
      "PhishEye is a web browser extension designed to protect Université de Pau webmail users from phishing mails. Attacks being predictables, the extension is able to detect malicious links, sanitize them and display an informative message to theuser.",
    repoURL: "https://git.univ-pau.fr/amerle001/phishEye",
    liveURL: "https://git.univ-pau.fr/amerle001/phishEye/-/releases",
  },
];

export default sideProjects;
