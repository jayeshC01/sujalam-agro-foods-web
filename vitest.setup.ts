import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

// jsdom 30 delegates localStorage to Node's flag-gated `--experimental-webstorage`
// API, which is unavailable in this environment, leaving `window.localStorage`
// undefined. Replace it with a minimal in-memory implementation so tests can
// exercise the app's real localStorage-backed persistence.
class MemoryStorage implements Storage {
  #store = new Map<string, string>();

  get length() {
    return this.#store.size;
  }

  clear() {
    this.#store.clear();
  }

  getItem(key: string) {
    return this.#store.has(key) ? this.#store.get(key)! : null;
  }

  key(index: number) {
    return Array.from(this.#store.keys())[index] ?? null;
  }

  removeItem(key: string) {
    this.#store.delete(key);
  }

  setItem(key: string, value: string) {
    this.#store.set(key, String(value));
  }
}

for (const target of [globalThis, window] as const) {
  Object.defineProperty(target, "localStorage", {
    value: new MemoryStorage(),
    writable: true,
    configurable: true,
  });
}
