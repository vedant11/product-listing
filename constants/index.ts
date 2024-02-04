
export const yearsOfProduction = [
  ...Array.from({ length: 150 }, (_, i) => {
    const year = 2024 - i;
    return { title: String(year), value: String(year) };
  }),
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
export const genres = [
  { title: "Action", value: "Action" },
  { title: "Adventure", value: "Adventure" },
  { title: "Animation", value: "Animation" },
  { title: "Comedy", value: "Comedy" },
  { title: "Crime", value: "Crime" },
  { title: "Documentary", value: "Documentary" },
  { title: "Drama", value: "Drama" },
  { title: "Family", value: "Family" },
  { title: "Fantasy", value: "Fantasy" },
  { title: "History", value: "History" },
  { title: "Horror", value: "Horror" },
  { title: "Music", value: "Music" },
  { title: "Mystery", value: "Mystery" },
  { title: "Romance", value: "Romance" },
  { title: "Science Fiction", value: "Science Fiction" },
  { title: "TV Movie", value: "TV" },
  { title: "Thriller", value: "Thriller" },
  { title: "War", value: "War" },
  { title: "Western", value: "Western" },
];
export const pageMax = 500;