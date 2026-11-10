// Track content lives in tracks.json, which is edited from /admin.
import data from "./tracks.json";

export type Category = "groove" | "hypnotic" | "reimagined";

export interface Track {
  title: string;
  /** Small label 1, e.g. "RELEASE" or "IRGENDWO SET · 03" */
  source: string;
  /** Small label 3, e.g. "SINGLE" or a timestamp */
  duration: string;
  categories: Category[];
  /** Overrides small label 2 (otherwise the chapters joined with " / ") */
  chapter?: string;
  /** Original artist, kept as data (not shown) */
  credit?: string;
  description: string;
  soundcloud: string;
  /** Where the SoundCloud player starts, "m:ss" or "h:mm:ss" */
  start?: string;
  spotify?: string;
  note?: string;
  /** Artwork image; when empty a placeholder is shown */
  artwork?: string;
  hidden?: boolean;
}

export const tracks: Track[] = (data.tracks as Track[]).filter((t) => !t.hidden);

export const chapters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "groove", label: "GROOVE" },
  { id: "hypnotic", label: "HYPNOTIC" },
  { id: "reimagined", label: "REIMAGINED" },
];

const pad = (n: number) => String(n).padStart(2, "0");

/** Bilingual number, e.g. 3 -> "03 · ٠٣" */
export const biNum = (n: number) => {
  const western = pad(n);
  const arabic = western.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
  return `${western} · ${arabic}`;
};
