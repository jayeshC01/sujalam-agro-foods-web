const CLOUD_SIZE = 30;
const CLOUD_PATH =
  "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z";

export function flyToCart(origin: HTMLElement) {
  const target = document.getElementById("cart-indicator");
  if (!target) return;

  const from = origin.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);

  const cloud = document.createElement("div");
  cloud.style.cssText = [
    "position:fixed",
    `left:${from.left + from.width / 2 - CLOUD_SIZE / 2}px`,
    `top:${from.top + from.height / 2 - CLOUD_SIZE / 2}px`,
    `width:${CLOUD_SIZE}px`,
    `height:${CLOUD_SIZE}px`,
    "z-index:100",
    "pointer-events:none",
    "filter:drop-shadow(0 2px 3px rgb(0 0 0 / 0.15))",
    "transition:transform .55s cubic-bezier(.3,.85,.4,1), opacity .55s ease .1s",
    "will-change:transform,opacity",
  ].join(";");
  cloud.innerHTML = `<svg width="${CLOUD_SIZE}" height="${CLOUD_SIZE}" viewBox="0 0 24 24" fill="var(--color-terracotta)"><path d="${CLOUD_PATH}"/></svg>`;
  document.body.appendChild(cloud);

  requestAnimationFrame(() => {
    cloud.style.transform = `translate(${dx}px, ${dy}px) scale(0.3)`;
    cloud.style.opacity = "0";
  });

  const remove = () => cloud.remove();
  cloud.addEventListener("transitionend", remove, { once: true });
  setTimeout(remove, 750);
}
