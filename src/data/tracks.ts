export type Category = "groove" | "hypnotic" | "reimagined";

export interface Track {
  title: string;
  source: string;
  duration: string;
  categories: Category[];
  /** Overrides the chapter label (otherwise categories joined with " / ") */
  chapter?: string;
  /** Original artist, kept as data (not shown in Framer either) */
  credit?: string;
  description: string;
  soundcloud: string;
  /** Where the SoundCloud player starts, "m:ss" or "h:mm:ss" */
  start?: string;
  spotify?: string;
  note?: string;
}

const SET = "https://soundcloud.com/nahawandi/irgendwo";

type SetEntry = [title: string, from: string, to: string, cats: Category[], credit?: string, chapter?: string];

const setList: SetEntry[] = [
  ["Al Atrash", "0:00", "5:15", ["reimagined"]],
  ["Chant of the Valley", "5:15", "11:00", ["groove"]],
  ["Law Kan Qalbi", "11:00", "19:38", ["groove", "hypnotic", "reimagined"]],
  ["Cuando Tenga La Tierra (Rework)", "19:38", "25:07", ["hypnotic", "reimagined"]],
  ["Al Bostah (Rework) / Ocean", "25:07", "33:15", ["hypnotic", "reimagined"], "Fairuz / Moses Yoofee Trio"],
  ["Respect (Groovy Soul Rework)", "33:15", "38:30", ["groove", "reimagined"]],
  ["Careless Whisper (Tension Mix)", "38:30", "45:54", ["groove", "hypnotic", "reimagined"]],
  ["Monyati", "45:54", "51:35", ["groove", "hypnotic"]],
  ["Soulitude", "51:35", "56:10", ["groove", "reimagined"]],
  ["Janoob", "56:10", "1:02:23", ["hypnotic", "reimagined"]],
  ["Suns Of Gold (August Rework)", "1:02:23", "1:14:40", ["groove", "hypnotic", "reimagined"]],
  ["Bharat", "1:14:40", "1:22:05", ["groove", "hypnotic"], "Parveen Sultana"],
  ["Der zerstörte Tisch", "1:22:05", "1:27:47", [], undefined, "NAHAWANDI"],
  ["Takalam", "1:27:47", "1:31:25", ["hypnotic"]],
  ["You've Got To Live", "1:31:25", "1:35:06", ["groove"]],
  ["Ones & Zeroes", "1:35:06", "1:39:35", ["groove", "hypnotic"]],
  ["Mawwal", "1:39:35", "1:42:50", ["hypnotic"]],
  ["ID", "1:42:50", "1:45:12", ["groove"]],
  ["Bumba (ID)", "1:45:12", "end", ["groove"]],
];

const pad = (n: number) => String(n).padStart(2, "0");

export const tracks: Track[] = [
  {
    title: "Mawwal",
    source: "RELEASE",
    duration: "SINGLE",
    categories: ["hypnotic"],
    description: "Single release by Nahawandi.",
    soundcloud: "https://soundcloud.com/nahawandi/mawwal-nahawandi",
    spotify: "https://open.spotify.com/track/6B0OfmS3DfAgYmx5vCr9pN",
    note: "ALSO ON SPOTIFY",
  },
  {
    title: "Chant of the Valley",
    source: "RELEASE",
    duration: "SINGLE",
    categories: ["groove"],
    description: "Single release by Nahawandi.",
    soundcloud: "https://soundcloud.com/nahawandi/chant-of-the-valley",
    spotify: "https://open.spotify.com/track/1WSUC3uOputmsMM2SCnxCt",
    note: "ALSO ON SPOTIFY",
  },
  ...setList.map(([title, from, to, categories, credit, chapter], i): Track => ({
    title,
    source: `IRGENDWO SET · ${pad(i + 1)}`,
    duration: from,
    categories,
    chapter,
    credit,
    description: `Track ${i + 1} of 19 in Live at Irgendwo, Bremen. Press play — it starts at ${from}.`,
    soundcloud: SET,
    start: from,
    note: `${from} – ${to.toUpperCase()}`,
  })),
];

export const chapters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "groove", label: "GROOVE" },
  { id: "hypnotic", label: "HYPNOTIC" },
  { id: "reimagined", label: "REIMAGINED" },
];

/** Bilingual number, e.g. 3 -> "03 · ٠٣" */
export const biNum = (n: number) => {
  const western = pad(n);
  const arabic = western.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
  return `${western} · ${arabic}`;
};
