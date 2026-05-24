# Bail Me

**An open-source excuse rolodex for quick, believable, copy-ready messages.**

Live: https://prangavsinghal.github.io/bailme-mvp

---

## The Problem

Everyone cancels plans. The friction isn't the decision — it's finding the right words fast, in the right tone, without overthinking it.

A poorly-worded cancellation can read as dismissive or dishonest. A message that's too formal sounds cold between friends; too casual in a work context looks unprofessional. Most people end up either sending something they're not happy with, or stalling long enough that it becomes awkward.

---

## The Insight

The job-to-be-done isn't "make up an excuse." It's **maintain the relationship while exiting the commitment gracefully.** Tone and context are the actual variables — not the excuse itself.

That framing led to a simple three-axis taxonomy:

| Axis | Options |
|------|---------|
| **Category** | Work, Social, Family, Health |
| **Intent** | Cancel, Delay, Reschedule |
| **Tone** | Formal, Casual |

Filtering on all three surfaces copy-ready messages for your exact situation in one click.

---

## What I Built

A fully static PWA — no backend, no login, no install required.

**Core flow:** Select category + intent + tone → get 2–3 contextually matched messages → copy with one tap.

**Supporting features:**
- **Favorites** — save messages you reuse. Stored in `localStorage`; no account needed.
- **Library** — full-text search across the entire excuse set for power users.
- **Offline mode** — service worker caches the app on first visit. Works on the metro with no signal.
- **Web Share API** — native share sheet on mobile for direct send to WhatsApp, iMessage, etc.
- **Analytics** — Plausible (privacy-first) tracks copy events, favorite toggles, and category distribution.

---

## Key Product Decisions

**No backend.** The use case is zero-latency — you need the message now, not after an API round trip. A static site with `localStorage` for persistence removes every point of failure.

**Human-authored content over AI generation.** The excuses are curated, not generated. Generic AI output tends to be verbose and easy to spot. Short, specific, and regionally-grounded messages (e.g. Silk Board traffic, Bangalore rains) feel more credible.

**Copy as the primary CTA.** Everything else — filters, favorites, search — exists to get the user to this one action. The button is prominent; the surrounding UI is minimal.

**No login.** An account flow is the exact opposite of the product's value proposition. Favorites persist via `localStorage` and survive browser restarts with zero friction.

---

## What I Cut (and Why)

| Cut | Reason |
|-----|--------|
| User ratings / upvotes | Adds complexity without clear v1 value; content quality is validated manually |
| AI-powered generation | Adds latency and cost to a zero-second use case; also increases risk of obvious or unbelievable output |
| Multi-language support | Good future vector, but requires content investment before UX |
| Excuse editing / submission | Pulls scope toward UGC moderation; easier to curate than govern |

---

## Metrics I'd Track

| Metric | Why |
|--------|-----|
| **Copy rate** (copies / results shown) | Primary success signal — did the user find something worth sending? |
| **Generates per session** | High count = user not satisfied with first result; signals content gaps |
| **Favorites saved** | Proxy for repeat-use value and session depth |
| **Category × intent distribution** | Reveals which life contexts drive the most anxiety; informs content prioritization |
| **Return visit rate** | Validates utility vs. novelty |

---

## If I Were to Extend This

The most natural next step is a **context-aware mode**: the user describes their specific situation in a text box and gets a message tailored to it (names, timing, relationship). That's where AI generation earns its place — not as a replacement for the static library, but as a personalization layer on top of it.

---

## Stack

Pure static site — HTML5, Vanilla JS (ES6 modules), Tailwind CSS (CDN). No frameworks, no runtime dependencies.

**Build (CSV → JS):**
```bash
python scripts/build_excuses_js.py
```
Edits go in `scripts/excuses.csv`. Commit and push to deploy via GitHub Pages.
