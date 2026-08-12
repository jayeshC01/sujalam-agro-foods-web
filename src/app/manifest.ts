import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sujalam Agro Foods",
    short_name: "Sujalam",
    description:
      "Pure, cold-pressed & wood-pressed edible and non-edible oils from Sujalam Agro Foods.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf9",
    theme_color: "#123a20",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
