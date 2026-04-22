import { getStore } from "@netlify/blobs";
import { getUser } from "@netlify/identity";

function safeKey(s) {
  return String(s || "").replace(/[^a-zA-Z0-9_-]/g, "_");
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

function getIdentityUserFromContext(context) {
  try {
    const rawNetlifyContext = context?.clientContext?.custom?.netlify;
    if (rawNetlifyContext) {
      const decoded = JSON.parse(Buffer.from(rawNetlifyContext, "base64").toString("utf-8"));
      if (decoded && decoded.user) return decoded.user;
    }
  } catch (e) {}

  return context?.clientContext?.user || null;
}

export default async (req, context) => {
  const user = (await getUser().catch(() => null)) || getIdentityUserFromContext(context);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const store = getStore("sdac-agenda");
  const who = safeKey(user.sub || user.id || user.email || "user");
  const key = `state-v1-${who}`;

  try {
    if (req.method === "GET") {
      const data = await store.get(key, {
        type: "json",
        consistency: "strong"
      });

      return json({
        ok: true,
        data: data ?? null,
        key,
        email: user.email || null
      });
    }

    if (req.method === "PUT") {
      let payload;
      try {
        payload = await req.json();
      } catch {
        return json({ ok: false, error: "Invalid JSON body" }, 400);
      }

      if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
        return json({ ok: false, error: "Invalid state payload" }, 400);
      }

      payload.updatedAt = new Date().toISOString();

      await store.setJSON(key, payload);

      await store.setJSON("owner-meta", {
        key,
        email: user.email || null,
        updatedAtUTC: payload.updatedAt
      });

      return json({ ok: true, updatedAt: payload.updatedAt });
    }

    return new Response("Method Not Allowed", { status: 405 });
  } catch (err) {
    return json({ ok: false, error: String(err?.message || err) }, 500);
  }
};