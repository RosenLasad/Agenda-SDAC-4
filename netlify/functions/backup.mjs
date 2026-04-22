import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore({ name: "sdac-agenda", consistency: "strong" });

  // Leggo quale chiave contiene lo "stato principale"
  const meta = await store.get("owner-meta", { type: "json" });
  const stateKey = meta?.key;
  if (!stateKey) return;

  const state = await store.get(stateKey, { type: "json" });
  if (!state) return;

  // Nome backup: data UTC (semplice e non ambiguo)
  const d = new Date();
  const ymd = d.toISOString().slice(0, 10); // YYYY-MM-DD
  const backupKey = `backups/${ymd}.json`;

  await store.setJSON(backupKey, {
    backedUpAtUTC: d.toISOString(),
    stateKey,
    state
  });
};

// Eseguita in timezone UTC (cron in UTC) :contentReference[oaicite:1]{index=1}
export const config = {
  schedule: "@daily"
};
