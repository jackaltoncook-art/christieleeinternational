# ✈️ Christie Lee International Airport — v2

A live, talking vintage departure board for Christie's 40th. Pure static
files — no server, no API keys. Works forever, on every phone.

## What's on the board

**The booth nations — always flying.** Tokyo (Japan Airlines), Mexico City
(Aeromexico), Amsterdam (KLM), Delhi (Air India), Astana (Air Astana),
Casablanca (Royal Air Maroc), Zurich (Swiss), Reykjavik (Icelandair),
Bora Bora (Air Tahiti Nui) — each with its own illustrated postcard story
that points guests to the matching party booth. Phoenix (American) is
permanently **CANCELLED**, because everyone is already in Phoenix.

**Rotating novelty routes.** Three of six fun flights (Margaritaville,
Memory Lane, Cloud Nine, Fountain of Youth, Roller Rink, Adulthood) rotate
onto the board each hour, so it changes all night. **Flight CL-0040 to the
FABULOUS FORTIES** departs at the top of every hour with a golden flyover
and confetti.

The show is synced to the wall clock — every phone shows the same board at
the same moment, no server needed.

## 🔊 Spoken announcements

Tap **Announcements on** once and the terminal talks — real speech using
the laptop's best installed voices. The board scores every available voice
and automatically picks the most natural-sounding ones (Google / Natural /
Neural / network voices rank first), assigning them to two announcers: the
**Terminal announcer** and the **Gate announcer**.

**Cadence: roughly one announcement per minute.** Flight calls (boarding,
last call, departed — about 45 an hour, in the formal house style:
*"Ladies and gentlemen, Japan Airlines flight J L 40, service to Tokyo, is
now boarding at gate A 2…"*) interleave with an **ambient rotation every
3 minutes**: the Welcome message, the original **Captain Air** promo, the
Happy 40th Birthday announcement, TSA security notices, the lost wallet at
TSA, Captain Air check-in and service notices, the Phoenix cancellation,
and the local time — all playing automatically, no input required. Anyone
walking past the entrance will hear something within a minute.

Every announcement plays the original three-note G–E–C chime first, with a
matching text banner for anyone reading along. Announcements queue, never
overlap. With sound on, the board also makes the real Solari **mechanical
clatter** as the flaps cycle.

**Bilingual calls.** Booth-nation boarding and final calls play in English
first, then in the destination language — Japanese for Tokyo, Spanish for
Mexico City, Dutch, Hindi, German, Icelandic, French (with a Tahitian
*"Ia ora na!"* for Bora Bora), Arabic→French for Casablanca, and
Kazakh→Russian for Astana. The board uses whatever language voices the
laptop has installed and silently skips a language it can't speak, so
nothing ever sounds wrong. (Chrome on a laptop has the widest voice set —
worth a 2-minute sound check on the party machine.)

**Destination Spotlight (TV mode).** On screens 900px and wider, whenever
a flight starts boarding its postcard and story automatically slide over
the board for ~18 seconds, then dismiss — a self-running showcase roughly
every four minutes, no clicking required. Phones are never interrupted;
guests there tap flights themselves.

> Browsers require one tap before audio can play — that's the
> **Announcements on** button. Voice quality depends on the device;
> laptops/desktops and iPhones generally sound best.

## 🎙 Ground Crew (`editor.html`, linked in the footer)

Open the board in one tab (announcements on) and the Ground Crew page in
another tab **on the same device**. From there you can, live:

- **Make an announcement** — one-tap presets (cake is boarding, birthday
  girl arriving, dance floor final call…) or type your own and choose
  which announcer says it. It plays on the board within a second.
- **Page a passenger** — *"Paging passenger Christie Lee. Please report to
  the dance floor immediately."*
- **Add a flight** — destination, gate, departure minute. It joins the
  hourly cycle with auto-generated formal announcements under the
  **Captain Air** banner. (Added flights live on that device's board.)

## Deploy

Drag the folder onto https://app.netlify.com/drop, **or** push to GitHub
and import into Vercel (Framework Preset: **Other**, no build settings —
and make sure `index.html` sits at the repo root, or set the Root
Directory accordingly). Print a QR code of the URL for the tables.

## Big screen setup

Laptop → TV via HDMI, open the URL, press F11 for fullscreen, tap
**Announcements on** once, turn the TV volume up. Open `editor.html` in a
second tab to run the PA desk from the same laptop.

## Files

| File | Purpose |
|---|---|
| `index.html` | Board, show engine, speech + chime, animations |
| `flights.js` | Manifest: booth nations, novelty pool, specials, gags |
| `scenes.js`  | 23 illustrated postcard scenes |
| `editor.html`| Ground Crew: live announcements, paging, add flights |

Customizing: everything is in `flights.js` — destinations, stories, spoken
scripts, the specials, and the comedy-desk lines. It's heavily commented.

---
*Christie Lee International · est. 1986 · all flights depart fabulous*
