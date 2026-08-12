import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#123a20",
          color: "#fffdf9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 120,
            width: 120,
            borderRadius: "50%",
            background: "#d68a0a",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#241608"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21c-4.5 0-7-3.5-7-8 0-4 3-7.5 7-11 4 3.5 7 7 7 11 0 4.5-2.5 8-7 8Z" />
            <path d="M12 21v-6" />
          </svg>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
          Sujalam Agro Foods
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 30,
            color: "#f0ab28",
          }}
        >
          Pure, Cold-Pressed &amp; Wood-Pressed Oils
        </div>
      </div>
    ),
    { ...size },
  );
}
