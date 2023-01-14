import {
  faCompass,
  faClock,
  faSackDollar,
  faCouch,
  faUser,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import compass from "../images/icons/compass.svg";
import clock from "../images/icons/clock.svg";
import dollar from "../images/icons/dollar.svg";
import couch from "../images/icons/couch.svg";
import user from "../images/icons/user.svg";
import bulb from "../images/icons/bulb.svg";

const perks = [
  {
    title1: "Be your",
    title2: "own boss",
    icon: compass,
    // icon: faCompass,
    // description: `We're here to support you from the start.`,
  },
  {
    title1: "Set your own",
    title2: "schedule and fees",
    icon: clock,
    // icon: faClock,
    // description: `We know that it's YOUR business.`,
  },
  {
    title1: "Keep 100% of",
    title2: "what you make",
    icon: dollar,
    // icon: faSackDollar,
    // description: `Custom designed suites that you're going to love!`,
  },
  {
    title1: "Private, furnished",
    title2: "offices to lease",
    icon: couch,
    // icon: faCouch,
    // description: `Work how you want, when you want.`,
  },
  {
    title1: "Referrals to build",
    title2: "your practice",
    icon: user,
    // icon: faUser,
    // description: `Work how you want, when you want.`,
  },
  {
    title1: "Opportunities",
    title2: "for mentorship",
    icon: bulb,
    // icon: faLightbulb,
    // description: `Work how you want, when you want.`,
  },
];

perks.forEach((obj, index) => (obj.id = index + 1));

export default perks;
