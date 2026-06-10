# ✈️ Christie Lee International Airport

A live, interactive vintage departure board for Christie's 40th birthday.
Pure static files — no server, no API keys, no accounts. It will work
forever, on every phone, exactly as-is.

## What it does

- **Split-flap departure board** that runs a continuous show synced to the
  wall clock. Every guest's phone shows the *same* board state at the same
  moment — flights check in, board, hit FINAL CALL, and depart on a repeating
  hourly schedule, with a flap animation on every change.
- **Hourly showstopper:** at the top of every hour, Flight CL-0040 departs
  for the FABULOUS FORTIES with a golden jet flyover and confetti.
- **PA announcements** slide in with a classic two-tone gate chime (tap
  "Sound on" — browsers require one tap before audio can play). Running
  gags announce themselves at :16 (ADULTHOOD — still delayed) and :41
  (OVER THE HILL — cancelled, no hill found).
- **Tap any flight** to open an illustrated vintage postcard with that
  route's micro-story. Fourteen hand-drawn SVG scenes.
- **Ground crew editor** (`editor.html`, linked discreetly in the footer):
  add, edit, or remove flights from the device driving your big screen.
  Edits are device-local, so guests' phones keep the standard show.

## Deploy to Vercel (≈3 minutes)

**Easiest — no GitHub needed:**
1. Go to https://vercel.com and sign up (free).
2. Install nothing — just drag this whole folder onto the Vercel dashboard
   ("Add New → Project → Deploy" accepts a folder drag-and-drop via the
   Vercel CLI, *or* use the steps below).

**Via GitHub (recommended, gives you a tidy URL):**
1. Create a new GitHub repo (e.g. `christie-air`) and upload these files.
2. In Vercel: **Add New → Project → Import** your repo → **Deploy**.
   No build settings needed — it's plain HTML.
3. You'll get a URL like `christie-air.vercel.app`. In project settings you
   can rename it to something like `christielee-intl.vercel.app`.

**Netlify alternative:** drag the folder onto https://app.netlify.com/drop. Done.

**Pro tip for the party:** make a QR code pointing at your URL (any free QR
generator) and print it on table cards: *"Scan for live departures."*

## Files

| File | Purpose |
|---|---|
| `index.html` | The departure board — show engine, PA system, animations |
| `flights.js` | The flight manifest: schedule, stories, PA scripts |
| `scenes.js` | The 14 illustrated postcard scenes |
| `editor.html` | Ground crew editor (device-local changes) |

## Customizing

Everything lives in `flights.js` — it's heavily commented. Each flight has:

- `departMin` — the minute of each hour it departs (statuses derive
  automatically: CHECK IN at 25 min out → BOARDING at 10 → FINAL CALL at 4 →
  DEPARTED). `fixedStatus` pins a flight to DELAYED/CANCELLED forever.
- `story` / `storyTitle` — the tap-to-read postcard text.
- `pa.boarding / pa.final / pa.departed` — announcement scripts.
- `scene` — which postcard illustration to use. Available scenes:
  `cityNight, neonRetro, suburbSunset, paris, beach, tropical, mountainDawn,
  clouds, fountain, rio, tokyoNeon, golden, fog, hill` (anything else gets a
  handsome default jet-over-stars card).

Personalizing for Christie: swap any destination, drop inside jokes into the
stories, or change `departMin` so a particular flight's FINAL CALL lands at,
say, cake time. The board re-sorts itself automatically.

## Big screen setup

Open the URL on a laptop → plug into the TV → press F11 for fullscreen →
tap **Sound on** once. That's the whole AV department.

---
*Christie Lee International · est. 1986 · all flights depart fabulous*
