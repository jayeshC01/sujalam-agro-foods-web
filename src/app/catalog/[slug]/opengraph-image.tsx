import { ImageResponse } from "next/og";
import { formatPrice, getProductBySlug, PRODUCTS } from "@/lib/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const lowestPrice = product
    ? Math.min(...product.packSizes.map((pack) => pack.price))
    : null;

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
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f0ab28",
            marginBottom: 24,
          }}
        >
          Sujalam Agro Foods
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {product?.name ?? "Pure, Wood-Pressed Oils"}
        </div>
        {lowestPrice !== null && (
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              color: "#f0ab28",
            }}
          >
            {`From ${formatPrice(lowestPrice)}`}
          </div>
        )}
      </div>
    ),
    { ...size },
  );
}
