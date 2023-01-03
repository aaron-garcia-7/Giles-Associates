const perks = [
  {
    title: "2 weeks free rent at move in",
    description: `We're here to support you from the start.`,
  },
  {
    title: "Keep 100% of what you earn",
    description: `We know that it's YOUR business.`,
  },
  {
    title: "Private, Fully Equipped Suites",
    description: `Custom designed suites that you're going to love!`,
  },
  {
    title: "Set your own hours and prices",
    description: `Work how you want, when you want.`,
  },
];

perks.forEach((obj, index) => (obj.id = index + 1));

export default perks;
