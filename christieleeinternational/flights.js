/* ============================================================
   CHRISTIE LEE INTERNATIONAL AIRPORT — FLIGHT MANIFEST
   ------------------------------------------------------------
   The show runs on a 60-minute loop synced to the wall clock,
   so every phone at the party shows the same board at the same
   moment with no server.

   departMin = minute of the hour this flight "departs".
   Status is derived automatically:
     • 25+ min out .... ON TIME
     • 10–25 out ...... CHECK IN
     • 5–10 out ....... BOARDING
     • 2–5 out ........ FINAL CALL
     • 0–2 after ...... DEPARTED  (then resets for next hour)
   Flights with fixedStatus never change (the running gags).
   ============================================================ */

window.AIRPORT = {
  name: "CHRISTIE LEE INTERNATIONAL",
  code: "CLI",
  tagline: "Celebrating 40 years of first-class travel",
  paVoice: "Christie Lee International Airport"
};

window.FLIGHTS = [
  {
    id: "cl1986",
    flight: "CL-1986",
    dest: "NIGHT OWL CITY",
    gate: "A4",
    departMin: 52,
    scene: "cityNight",
    storyTitle: "Where it all began",
    story: "On a quiet night in 1986, a brand-new traveler was issued her very first boarding pass. Witnesses report she arrived slightly ahead of schedule, immediately took command of the cabin, and has been flying first class ever since. Tonight's service retraces that original route — final destination: everywhere.",
    pa: {
      boarding: "Now boarding at gate A4: Flight CL-1986 to Night Owl City, the route that started it all.",
      final: "Final call for Flight CL-1986. Passengers born fabulous, please proceed immediately to gate A4.",
      departed: "Flight CL-1986 has departed. It has been climbing steadily for forty years."
    }
  },
  {
    id: "cl1994",
    flight: "CL-1994",
    dest: "ROLLER RINK",
    gate: "B2",
    departMin: 7,
    scene: "neonRetro",
    storyTitle: "Couples skate only",
    story: "Service to the Roller Rink includes complimentary slap bracelets, a strict no-walking-on-the-carpet-in-skates policy, and one (1) nervous lap during couples skate. The captain has requested that all passengers know every word of the in-flight soundtrack. Historically, this has not been a problem.",
    pa: {
      boarding: "Boarding at gate B2: Flight CL-1994 to the Roller Rink. Please lace up before reaching the jet bridge.",
      final: "Final call, Flight CL-1994. The DJ has queued the last song. You know what it is.",
      departed: "Flight CL-1994 has departed the rink, gliding backwards, with surprising confidence."
    }
  },
  {
    id: "cl1996",
    flight: "CL-1996",
    dest: "MEMORY LANE",
    gate: "A1",
    departMin: 13,
    scene: "suburbSunset",
    storyTitle: "Nonstop nostalgia",
    story: "A leisurely route over landmarks of note: the old neighborhood, the first locker that never opened on the first try, and the exact spot where summer used to last forever. Window seats strongly recommended. Tissues located in the seat-back pocket in front of you.",
    pa: {
      boarding: "Now boarding: Flight CL-1996 to Memory Lane at gate A1. This is a slow, scenic service. No one is in a hurry.",
      final: "Final call for Memory Lane. The streetlights are coming on, which means it is time.",
      departed: "Flight CL-1996 has departed. If you missed it, don't worry — it departs again every hour, like all good memories."
    }
  },
  {
    id: "cl2001",
    flight: "CL-2001",
    dest: "PARIS",
    gate: "C3",
    departMin: 18,
    scene: "paris",
    storyTitle: "The glamour route",
    story: "The flagship of the Christie Lee fleet. In-flight service includes champagne, an unreasonable quantity of pastry, and a captain who insists on pronouncing 'croissant' correctly over the intercom. Upon arrival, passengers are contractually obligated to say 'we'll always have Paris' at least once.",
    pa: {
      boarding: "Bonsoir. Flight CL-2001 to Paris is now boarding at gate C3. Berets are encouraged but not required.",
      final: "Final call for Paris. The Eiffel Tower lights are scheduled to sparkle on arrival. We timed it. You're welcome.",
      departed: "Flight CL-2001 has departed for Paris. Au revoir, and save us a macaron."
    }
  },
  {
    id: "cl5pm",
    flight: "CL-5PM",
    dest: "MARGARITAVILLE",
    gate: "B5",
    departMin: 22,
    scene: "beach",
    storyTitle: "It's 5 o'clock there",
    story: "A precision operation: this aircraft departs at exactly the moment it becomes 5 o'clock somewhere, which our route planners note is always. Cabin crew will pass through the aisle with salt for the rim. Lost shakers will be announced over the PA.",
    pa: {
      boarding: "Flight CL-5PM to Margaritaville now boarding at gate B5. It is, in fact, 5 o'clock there.",
      final: "Final call for Margaritaville. The blender is running and waits for no one.",
      departed: "Flight CL-5PM has departed. Some people claim there's a woman to blame. We know it's nobody's fault."
    }
  },
  {
    id: "cl808",
    flight: "CL-808",
    dest: "HONOLULU",
    gate: "A7",
    departMin: 27,
    scene: "tropical",
    storyTitle: "Lei-over included",
    story: "Direct service to white sand and zero obligations. The flight plan files directly over every email inbox in North America without stopping. Upon landing, all passengers receive a lei and the legal right to ignore their phone for the duration of their stay.",
    pa: {
      boarding: "Aloha. Flight CL-808 to Honolulu is boarding at gate A7. Please silence your phones — permanently, if possible.",
      final: "Final call for Honolulu. The sunset is being held at the gate, but it cannot wait much longer.",
      departed: "Flight CL-808 has departed for Honolulu. Mahalo, and mind the gap between you and your responsibilities."
    }
  },
  {
    id: "cl4040",
    flight: "CL-4040",
    dest: "SECOND WIND",
    gate: "C1",
    departMin: 33,
    scene: "mountainDawn",
    storyTitle: "The climb continues",
    story: "They say the first forty years are just the ascent. This service climbs through the marine layer of your thirties and breaks into clear air, where the view is better, the confidence is bottomless, and you finally know exactly who you are. Cruising altitude: higher than ever.",
    pa: {
      boarding: "Now boarding at gate C1: Flight CL-4040 to Second Wind. Best views of the whole network on this route.",
      final: "Final call for Second Wind. The air up there is incredible. Trust us.",
      departed: "Flight CL-4040 has departed and is climbing beautifully. No turbulence forecast for the next forty years."
    }
  },
  {
    id: "cl0009",
    flight: "CL-0009",
    dest: "CLOUD NINE",
    gate: "A9",
    departMin: 38,
    scene: "clouds",
    storyTitle: "Permanent residency available",
    story: "Christie has held elite status on this route for years. Cloud Nine offers unlimited soft landings, a strict no-bad-news policy, and the particular happiness of being surrounded by your favorite people — which, conveniently, describes tonight exactly.",
    pa: {
      boarding: "Flight CL-0009 to Cloud Nine is boarding at gate A9. Elite members — you know who you are — board at leisure.",
      final: "Final call for Cloud Nine. The cabin is fluffy and the mood is excellent.",
      departed: "Flight CL-0009 has departed. Current altitude: nine. Holding steady."
    }
  },
  {
    id: "cl2086",
    flight: "CL-2086",
    dest: "FOUNTAIN OF YOUTH",
    gate: "B4",
    departMin: 43,
    scene: "fountain",
    storyTitle: "Route quietly discontinued",
    story: "Our cartographers searched for decades and finally located the Fountain of Youth. It turned out to be a good group of friends, a packed calendar of plans, and laughing until your face hurts. The actual fountain was a disappointment. This route now flies directly to the party instead.",
    pa: {
      boarding: "Boarding at gate B4: Flight CL-2086 to the Fountain of Youth. Spoiler: you're already there.",
      final: "Final call for the Fountain of Youth. Drink responsibly. It's mostly champagne.",
      departed: "Flight CL-2086 has departed. Passengers report feeling twenty-five already."
    }
  },
  {
    id: "cl040",
    flight: "CL-040",
    dest: "RIO DE JANEIRO",
    gate: "C7",
    departMin: 47,
    scene: "rio",
    storyTitle: "Carnival service",
    story: "Festive service to the city that never apologizes for dancing. The samba begins at the gate and does not stop. Cabin crew note that passengers celebrating milestone birthdays receive priority access to the conga line, whether they request it or not.",
    pa: {
      boarding: "Flight CL-040 to Rio de Janeiro now boarding at gate C7. The drumline is already on board.",
      final: "Final call for Rio. The conga line is leaving with or without you. Preferably with.",
      departed: "Flight CL-040 has departed for Rio, visibly dancing."
    }
  },
  {
    id: "cl100",
    flight: "CL-100",
    dest: "TOKYO",
    gate: "A2",
    departMin: 57,
    scene: "tokyoNeon",
    storyTitle: "The neon express",
    story: "Overnight service to a skyline that out-sparkles the stars. Itinerary includes karaoke until an hour that will not be disclosed to anyone's children, vending-machine treasures, and the best bowl of ramen of your entire life at 2 a.m. What happens in Shinjuku stays in Shinjuku.",
    pa: {
      boarding: "Flight CL-100 to Tokyo is boarding at gate A2. Karaoke songbooks are in every seat-back pocket.",
      final: "Final call for Tokyo. The microphone is warmed up. You're doing the duet. It's decided.",
      departed: "Flight CL-100 has departed for Tokyo in a blaze of neon. Sayonara!"
    }
  },
  {
    id: "cl0040",
    flight: "CL-0040",
    dest: "FABULOUS FORTIES",
    gate: "40",
    departMin: 0,
    scene: "golden",
    showstopper: true,
    storyTitle: "The flagship route",
    story: "Once an hour, on the hour, the pride of the fleet departs for the Fabulous Forties — a destination of legendary confidence, zero patience for nonsense, and golden-hour lighting at all times. Christie Lee herself holds the inaugural boarding pass. The entire airport stops to watch this one take off. As it should.",
    pa: {
      boarding: "Attention all guests: pre-boarding has begun at gate 40 for Flight CL-0040 to the Fabulous Forties. This is the big one.",
      final: "Final call, Flight CL-0040 to the Fabulous Forties. Gate 40. All eyes on the runway, please.",
      departed: "Ladies and gentlemen — Flight CL-0040 has departed for the Fabulous Forties. Cleared for takeoff: the next forty years. 🥂"
    }
  },
  {
    id: "cl9999",
    flight: "CL-9999",
    dest: "ADULTHOOD",
    gate: "TBD",
    departMin: null,
    fixedStatus: "DELAYED",
    scene: "fog",
    storyTitle: "Indefinitely delayed",
    story: "Flight CL-9999 to Adulthood has been delayed every single day for forty consecutive years, an airline record. Ground crews cite 'a strong preference for fun' and 'honestly, no real desire to board.' Passengers holding tickets are invited to enjoy the lounge indefinitely. Rebooking is not anticipated.",
    pa: {
      periodic: "An update for passengers on Flight CL-9999 to Adulthood: it remains delayed. Indefinitely. We are not sorry."
    }
  },
  {
    id: "cl3939",
    flight: "CL-3939",
    dest: "OVER THE HILL",
    gate: "—",
    departMin: null,
    fixedStatus: "CANCELLED",
    scene: "hill",
    storyTitle: "Cancelled by popular demand",
    story: "Flight CL-3939 to Over the Hill has been cancelled following a unanimous vote by everyone at this party. Investigators found no hill, no decline, and frankly no evidence the destination exists. The aircraft has been reassigned to the Fabulous Forties route, where it belongs.",
    pa: {
      periodic: "Passengers holding tickets for Flight CL-3939 to Over the Hill: that flight has been cancelled. There is no hill. Please enjoy the party."
    }
  }
];
