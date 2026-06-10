/* ============================================================
   CHRISTIE LEE INTERNATIONAL — FLIGHT MANIFEST v2
   ------------------------------------------------------------
   BOOTH NATIONS (always on the board — these are the themed
   party booths): Tokyo, Mexico City, Amsterdam, Delhi, Astana,
   Casablanca, Zurich, Phoenix (cancelled), Reykjavik, Bora Bora.

   NOVELTY FLIGHTS rotate in and out: three appear each hour,
   cycling through the pool so the board changes all night.

   The show loops every 60 minutes, synced to the wall clock —
   all phones show the same board at the same moment.

   Booth flights with an `airline` get formal spoken
   announcements generated automatically ("Ladies and
   gentlemen, Japan Airlines flight J L 40 ...").
   Novelty flights carry their own custom scripts.
   ============================================================ */

window.AIRPORT = {
  name: "CHRISTIE LEE INTERNATIONAL",
  code: "CLI",
  tagline: "Celebrating 40 years of first-class travel"
};

/* ---------- The big rotating ambient announcements ---------- */
window.SPECIALS = [
  {
    announcer: 2,
    text: "Welcome to Christie Lee International Airport. We are delighted to have you with us today. For the safety and security of all passengers, please keep your belongings with you at all times and report any unattended luggage to the nearest security officer. On behalf of all our staff, we wish you a safe and wonderful journey."
  },
  {
    announcer: 3,
    text: "Christie Lee International Airport is thrilled to welcome Captain Air to our terminal. Captain Air is now offering daily service to over forty destinations worldwide, with routes designed for the modern traveller. Whether you're jetting off for business or chasing a sunset somewhere spectacular, Captain Air promises first-class comfort at every altitude. Visit the Captain Air desk in Terminal B to learn more. Captain Air — the sky is just the beginning."
  },
  {
    announcer: 2,
    text: "Christie Lee International Airport has a very special announcement. Today marks a milestone birthday for the remarkable woman this airport is named after. On behalf of every gate agent, every pilot, every baggage handler, and every single split-flap letter on our departure boards — happy 40th birthday, Christie. Forty has never looked so first class. And trust us, we display a lot of numbers."
  }
];

/* ---------- Comedy desk: ambient gag announcements ---------- */
window.GAGS = [
  "Attention travelers: a wallet has been found at the T S A checkpoint containing seventeen loyalty cards and one expired coupon. The owner may claim it at the security office, where the coupon will be respectfully disposed of.",
  "Paging passenger Hugh Jest. Passenger Hugh Jest, please report to gate B 4. Your party is waiting, and they are completely out of small talk.",
  "The moving walkway is ending. The moving walkway has been ending for some time now. We thank you for your continued attention to this developing situation.",
  "Lost and found announcement: we have located someone's thirties. They may be collected at the information desk. However, we are told the owner has happily moved on to something better.",
  "A security reminder from Christie Lee International: please do not leave your drink unattended. Unattended drinks will be confiscated, and enjoyed, by the ground crew.",
  "Now arriving at gate 40: four decades of being absolutely iconic. Please stand clear of the doors.",
  "Duty free update: compliments for the birthday girl remain duty free, unlimited, and strongly encouraged at all terminals.",
  "Would the owner of a single high-heeled shoe found on the dance floor please return to the dance floor. The shoe appears to be winning.",
  "Passengers awaiting flight A A 19 86 to Phoenix: that flight has been cancelled, as you are already in Phoenix. Please enjoy the destination you are currently standing in.",
  "An update for passengers on the flight to Adulthood: it remains delayed. Indefinitely. We are not sorry.",
  "Tonight's weather for all departures: clear skies, perfect timing, and a one hundred percent chance of cake.",
  "Christie Lee International reminds guests that the white zone is for immediate celebration and the unloading of gifts only. There is no parking in the white zone."
];

/* ============================================================
   BOOTH NATIONS — permanent fixtures
   ============================================================ */
window.FLIGHTS = [
  {
    id: "tokyo", flight: "JL-40", airline: "Japan Airlines",
    dest: "TOKYO", gate: "A2", departMin: 5, scene: "tokyoNeon", booth: true,
    storyTitle: "The neon express",
    story: "Overnight service to a skyline that out-sparkles the stars: karaoke until an undisclosed hour, vending-machine treasures, and the best bowl of ramen of your life at 2 a.m. Visit the Tokyo booth in the terminal for a taste of the route before you board.",
    i18n: {
      boarding: [{ lang:"ja", text:"皆様にご案内申し上げます。日本航空40便、東京行きは、ただいまよりA2ゲートにてご搭乗を開始いたします。" }],
      final:    [{ lang:"ja", text:"東京行き、日本航空40便、最終のご搭乗案内です。A2ゲートまでお急ぎください。" }]
    }
  },
  {
    id: "mexicocity", flight: "AM-740", airline: "Aeromexico",
    dest: "MEXICO CITY", gate: "B3", departMin: 11, scene: "mexicoCity", booth: true,
    storyTitle: "Altitude and attitude",
    story: "Service to a city 7,000 feet closer to the sun, where the food is legendary, the colors are louder, and every plaza has a band. In-flight meal: tacos al pastor, obviously. The Mexico City booth in the terminal is pouring the good stuff — go say hola.",
    i18n: {
      boarding: [{ lang:"es", text:"Atención, por favor. El vuelo 740 de Aeroméxico con destino a la Ciudad de México está abordando por la puerta B3." }],
      final:    [{ lang:"es", text:"Última llamada para el vuelo 740 de Aeroméxico con destino a la Ciudad de México. Favor de presentarse de inmediato en la puerta B3." }]
    }
  },
  {
    id: "amsterdam", flight: "KL-1040", airline: "KLM",
    dest: "AMSTERDAM", gate: "C2", departMin: 17, scene: "amsterdam", booth: true,
    storyTitle: "Canals and candor",
    story: "Direct service to crooked houses, honest people, and ten thousand bicycles with the right of way. The captain notes that the city has more canals than Venice and is extremely relaxed about mentioning it. Stroopwafels available at the Amsterdam booth — gezellig guaranteed.",
    i18n: {
      boarding: [{ lang:"nl", text:"Dames en heren, KLM-vlucht 1040 naar Amsterdam is nu aan het boarden bij gate C2." }],
      final:    [{ lang:"nl", text:"Laatste oproep voor KLM-vlucht 1040 naar Amsterdam. Gaat u alstublieft direct naar gate C2." }]
    }
  },
  {
    id: "delhi", flight: "AI-440", airline: "Air India",
    dest: "DELHI", gate: "A5", departMin: 23, scene: "delhi", booth: true,
    storyTitle: "The marigold route",
    story: "Service to a thousand years of empires, the world's best street food, and traffic conducted entirely by intuition. Cabin crew recommend arriving hungry and leaving humbled. The Delhi booth in the terminal has the chai — accept the chai.",
    i18n: {
      boarding: [{ lang:"hi", text:"कृपया ध्यान दें। एयर इंडिया की उड़ान 440, दिल्ली के लिए, गेट A5 से बोर्डिंग शुरू हो गई है।" }],
      final:    [{ lang:"hi", text:"दिल्ली जाने वाली एयर इंडिया उड़ान 440 के लिए अंतिम घोषणा। कृपया तुरंत गेट A5 पर पहुँचें।" }]
    }
  },
  {
    id: "astana", flight: "KC-140", airline: "Air Astana",
    dest: "ASTANA", gate: "B6", departMin: 29, scene: "astana", booth: true,
    storyTitle: "The steppe showpiece",
    story: "Service to the gleaming capital of Kazakhstan — futuristic towers rising straight out of the steppe, winters of legend, and the golden Baiterek tower holding the egg of a mythical bird. Yes, it's called Astana again. Visit the booth; they'll explain.",
    i18n: {
      boarding: [
        { lang:"kk", text:"Назарларыңызға! Эйр Астананың 140-рейсіне, Астана бағытына, B6 қақпасынан отырғызу басталды." },
        { lang:"ru", text:"Внимание! Начинается посадка на рейс Эйр Астана 140 до Астаны. Выход B6." }
      ],
      final: [
        { lang:"kk", text:"Астанаға ұшатын 140-рейске соңғы шақыру. B6 қақпасына асығыңыз." },
        { lang:"ru", text:"Заканчивается посадка на рейс 140 до Астаны. Просьба срочно пройти к выходу B6." }
      ]
    }
  },
  {
    id: "casablanca", flight: "AT-940", airline: "Royal Air Maroc",
    dest: "CASABLANCA", gate: "C5", departMin: 35, scene: "casablanca", booth: true,
    storyTitle: "Play it again",
    story: "Atlantic sunsets, mint tea poured from a dramatic height, and a minaret that watches over the sea. Of all the gin joints in all the towns in all the world, you walked into this party — and the Casablanca booth is glad you did. Here's looking at you, kid.",
    i18n: {
      boarding: [
        { lang:"ar", text:"انتباه من فضلكم. الرحلة 940 للخطوط الملكية المغربية المتجهة إلى الدار البيضاء بدأ صعود الركاب عبر البوابة C5." },
        { lang:"fr", text:"Votre attention s'il vous plaît. Le vol Royal Air Maroc 940 à destination de Casablanca embarque maintenant porte C5." }
      ],
      final: [
        { lang:"ar", text:"النداء الأخير للرحلة 940 المتجهة إلى الدار البيضاء. الرجاء التوجه فوراً إلى البوابة C5." },
        { lang:"fr", text:"Dernier appel pour le vol 940 à destination de Casablanca. Veuillez vous présenter immédiatement à la porte C5." }
      ]
    }
  },
  {
    id: "zurich", flight: "LX-340", airline: "Swiss International",
    dest: "ZURICH", gate: "A8", departMin: 41, scene: "zurich", booth: true,
    storyTitle: "Precision and chocolate",
    story: "Service to a lake so clean you can drink it, trains so punctual you can set atomic clocks by them, and a chocolate-per-capita statistic we are legally required to describe as 'aspirational.' The Zurich booth is operating exactly on schedule. Naturally.",
    i18n: {
      boarding: [{ lang:"de", text:"Meine Damen und Herren, Swiss-Flug 340 nach Zürich ist jetzt zum Einsteigen bereit an Gate A8." }],
      final:    [{ lang:"de", text:"Letzter Aufruf für Swiss-Flug 340 nach Zürich. Bitte begeben Sie sich umgehend zu Gate A8." }]
    }
  },
  {
    id: "phoenix", flight: "AA-1986", airline: "American Airlines",
    dest: "PHOENIX", gate: "—", departMin: null, fixedStatus: "CANCELLED",
    scene: "phoenixDesert", booth: true,
    storyTitle: "Cancelled: you are already here",
    story: "Flight AA-1986 to Phoenix has been cancelled following the discovery that everyone at this party is already in Phoenix. Investigators also cite a runway surface temperature of 'no.' Passengers are invited to simply look around and enjoy the destination they are currently standing in."
  },
  {
    id: "reykjavik", flight: "FI-540", airline: "Icelandair",
    dest: "REYKJAVIK", gate: "B1", departMin: 47, scene: "aurora", booth: true,
    storyTitle: "The northern lights run",
    story: "Service to the land of fire, ice, and hot dogs that have no business being that good. The aurora has been booked for the evening and is expected to show off. Sweaters available at the Reykjavik booth; the volcano is doing its own thing.",
    i18n: {
      boarding: [{ lang:"is", text:"Vinsamlegast athugið. Flug Icelandair 540 til Reykjavíkur: nú er gengið um borð við hlið B1." }],
      final:    [{ lang:"is", text:"Lokakall fyrir flug 540 til Reykjavíkur. Vinsamlegast farið strax að hliði B1." }]
    }
  },
  {
    id: "borabora", flight: "TN-240", airline: "Air Tahiti Nui",
    dest: "BORA BORA", gate: "C8", departMin: 53, scene: "boraBora", booth: true,
    storyTitle: "The lagoon route",
    story: "Direct service to a lagoon with seventeen distinct shades of blue and an overwater bungalow with your name on it. Checked baggage: stress, not permitted on this route. The Bora Bora booth is the one radiating calm — you'll feel it before you see it.",
    i18n: {
      boarding: [{ lang:"fr", text:"Ia ora na ! Votre attention s'il vous plaît. Le vol Air Tahiti Nui 240 à destination de Bora Bora embarque maintenant porte C8." }],
      final:    [{ lang:"fr", text:"Dernier appel pour le vol 240 à destination de Bora Bora. Embarquement immédiat porte C8. Māuruuru !" }]
    }
  },

  /* ============================================================
     THE SHOWSTOPPER — departs at the top of every hour
     ============================================================ */
  {
    id: "cl0040", flight: "CL-0040", dest: "FABULOUS FORTIES", gate: "40",
    departMin: 0, scene: "golden", showstopper: true,
    storyTitle: "The flagship route",
    story: "Once an hour, on the hour, the pride of the fleet departs for the Fabulous Forties — a destination of legendary confidence, zero patience for nonsense, and golden-hour lighting at all times. Christie Lee herself holds the inaugural boarding pass. The entire airport stops to watch this one take off. As it should.",
    pa: {
      boarding: "Attention all guests: pre-boarding has begun at gate 40 for Captain Air flight C L 0040 to the Fabulous Forties. This is the big one.",
      final: "Final call. Final call for flight C L 0040 to the Fabulous Forties, departing from gate 40. All eyes on the runway, please.",
      departed: "Ladies and gentlemen, flight C L 0040 has departed for the Fabulous Forties. Cleared for takeoff: the next forty years."
    }
  },

  /* ============================================================
     NOVELTY POOL — three of these rotate onto the board each hour
     ============================================================ */
  {
    id: "margaritaville", flight: "CL-5PM", dest: "MARGARITAVILLE", gate: "B5",
    departMin: 8, scene: "beach", novelty: true,
    storyTitle: "It's 5 o'clock there",
    story: "A precision operation: this aircraft departs at exactly the moment it becomes 5 o'clock somewhere, which our route planners note is always. Cabin crew will pass through the aisle with salt for the rim. Lost shakers will be announced over the PA.",
    pa: {
      boarding: "Flight C L 5 P M to Margaritaville is now boarding at gate B 5. It is, in fact, five o'clock there.",
      final: "Final call for Margaritaville. The blender is running, and it waits for no one.",
      departed: "Flight C L 5 P M has departed for Margaritaville. Some people claim there's a woman to blame. We know it's nobody's fault."
    }
  },
  {
    id: "memorylane", flight: "CL-1996", dest: "MEMORY LANE", gate: "A1",
    departMin: 20, scene: "suburbSunset", novelty: true,
    storyTitle: "Nonstop nostalgia",
    story: "A leisurely route over landmarks of note: the old neighborhood, the first locker that never opened on the first try, and the exact spot where summer used to last forever. Window seats strongly recommended. Tissues located in the seat-back pocket in front of you.",
    pa: {
      boarding: "Now boarding at gate A 1: flight C L 1996 to Memory Lane. This is a slow, scenic service. No one is in a hurry.",
      final: "Final call for Memory Lane. The streetlights are coming on, which means it is time.",
      departed: "Flight C L 1996 has departed for Memory Lane. If you missed it, don't worry — it departs again every hour, like all good memories."
    }
  },
  {
    id: "cloudnine", flight: "CL-0009", dest: "CLOUD NINE", gate: "A9",
    departMin: 26, scene: "clouds", novelty: true,
    storyTitle: "Permanent residency available",
    story: "Christie has held elite status on this route for years. Cloud Nine offers unlimited soft landings, a strict no-bad-news policy, and the particular happiness of being surrounded by your favorite people — which, conveniently, describes tonight exactly.",
    pa: {
      boarding: "Flight C L 0009 to Cloud Nine is now boarding at gate A 9. Elite members — you know who you are — please board at your leisure.",
      final: "Final call for Cloud Nine. The cabin is fluffy, and the mood is excellent.",
      departed: "Flight C L 0009 has departed. Current altitude: nine. Holding steady."
    }
  },
  {
    id: "fountain", flight: "CL-2086", dest: "FOUNTAIN OF YOUTH", gate: "B4",
    departMin: 38, scene: "fountain", novelty: true,
    storyTitle: "Route quietly discontinued",
    story: "Our cartographers searched for decades and finally located the Fountain of Youth. It turned out to be a good group of friends, a packed calendar of plans, and laughing until your face hurts. The actual fountain was a disappointment. This route now flies directly to the party instead.",
    pa: {
      boarding: "Now boarding at gate B 4: flight C L 2086 to the Fountain of Youth. Spoiler: you're already there.",
      final: "Final call for the Fountain of Youth. Drink responsibly. It's mostly champagne.",
      departed: "Flight C L 2086 has departed. Passengers report feeling twenty-five already."
    }
  },
  {
    id: "rollerrink", flight: "CL-1994", dest: "ROLLER RINK", gate: "B2",
    departMin: 50, scene: "neonRetro", novelty: true,
    storyTitle: "Couples skate only",
    story: "Service to the Roller Rink includes complimentary slap bracelets, a strict no-walking-on-the-carpet-in-skates policy, and one (1) nervous lap during couples skate. The captain has requested that all passengers know every word of the in-flight soundtrack. Historically, this has not been a problem.",
    pa: {
      boarding: "Now boarding at gate B 2: flight C L 1994 to the Roller Rink. Please lace up before reaching the jet bridge.",
      final: "Final call for the Roller Rink. The D J has queued the last song. You know what it is.",
      departed: "Flight C L 1994 has departed the rink — gliding backwards, with surprising confidence."
    }
  },
  {
    id: "adulthood", flight: "CL-9999", dest: "ADULTHOOD", gate: "TBD",
    departMin: null, fixedStatus: "DELAYED", scene: "fog", novelty: true,
    storyTitle: "Indefinitely delayed",
    story: "Flight CL-9999 to Adulthood has been delayed every single day for forty consecutive years, an airline record. Ground crews cite 'a strong preference for fun' and 'honestly, no real desire to board.' Passengers holding tickets are invited to enjoy the lounge indefinitely. Rebooking is not anticipated."
  }
];
