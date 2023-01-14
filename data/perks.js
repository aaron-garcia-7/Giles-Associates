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
  },
  {
    title1: "Set your own",
    title2: "schedule and fees",
    icon: clock,
  },
  {
    title1: "Keep 100% of",
    title2: "what you make",
    icon: dollar,
  },
  {
    title1: "Private, furnished",
    title2: "offices to lease",
    icon: couch,
  },
  {
    title1: "Referrals to build",
    title2: "your practice",
    icon: user,
  },
  {
    title1: "Opportunities",
    title2: "for mentorship",
    icon: bulb,
  },
];

perks.forEach((obj, index) => (obj.id = index + 1));

export default perks;
