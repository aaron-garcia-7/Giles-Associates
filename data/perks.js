import {
  faCompass,
  faClock,
  faSackDollar,
  faCouch,
  faUser,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const perks = [
  {
    title: "Be your own boss",
    icon: faCompass,
    // description: `We're here to support you from the start.`,
  },
  {
    title: "Set your own schedule and fees",
    icon: faClock,
    // description: `We know that it's YOUR business.`,
  },
  {
    title: "Keep 100% of what you make",
    icon: faSackDollar,
    // description: `Custom designed suites that you're going to love!`,
  },
  {
    title: "Private, fully furnished offices to lease",
    icon: faCouch,
    // description: `Work how you want, when you want.`,
  },
  {
    title: "Referrals to help build your practice",
    icon: faUser,
    // description: `Work how you want, when you want.`,
  },
  {
    title: "Opportunities for mentorship",
    icon: faLightbulb,
    // description: `Work how you want, when you want.`,
  },
];

perks.forEach((obj, index) => (obj.id = index + 1));

export default perks;
