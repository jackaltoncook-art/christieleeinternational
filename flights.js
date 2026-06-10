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

/* ------------------------------------------------------------
   AMBIENT ROTATION — plays automatically every 3 minutes, in
   order, cycling forever. Realistic terminal announcements only:
   the Welcome message, the original Captain Air promo, the
   birthday message, TSA notices, and Captain Air service items.
   An entry with `time:true` announces the current local time.
   ------------------------------------------------------------ */
window.AMBIENT = [
  {
    announcer: 0,
    text: "Welcome to Christie Lee International Airport. We are delighted to have you with us today. For the safety and security of all passengers, please keep your belongings with you at all times and report any unattended luggage to the nearest security officer. On behalf of all our staff, we wish you a safe and wonderful journey."
  },
  {
    announcer: 1,
    text: "This is a security announcement. Please do not leave baggage or personal items unattended at any time. Unattended items may be removed and destroyed by airport security. Thank you for your cooperation."
  },
  {
    announcer: 0,
    text: "Christie Lee International Airport is thrilled to welcome Captain Air to our terminal. Captain Air is now offering daily service to over forty destinations worldwide, with routes designed for the modern traveller. Whether you're jetting off for business or chasing a sunset somewhere spectacular, Captain Air promises first-class comfort at every altitude. Visit the Captain Air desk in Terminal B to learn more. Captain Air — the sky is just the beginning."
  },
  {
    announcer: 1,
    text: "Attention travelers: a wallet has been found at the T S A security checkpoint. The owner may claim it at the airport information desk in the main terminal."
  },
  {
    announcer: 0,
    text: "Christie Lee International Airport has a very special announcement. Today marks a milestone birthday for the remarkable woman this airport is named after. On behalf of every gate agent, every pilot, every baggage handler, and every single split-flap letter on our departure boards — happy 40th birthday, Christie. Forty has never looked so first class. And trust us, we display a lot of numbers."
  },
  {
    announcer: 1,
    text: "Captain Air passengers may check in at any Captain Air kiosk in the main terminal. The check-in desk for this evening's departures is now open."
  },
  { announcer: 0, time: true },
  {
    announcer: 1,
    text: "Christie Lee International is pleased to offer complimentary refreshments throughout the terminal this evening, courtesy of Captain Air."
  },
  {
    announcer: 0,
    text: "Passengers holding reservations on flight A A 19 86 to Phoenix: that flight has been cancelled. Please see a Captain Air representative in the main terminal for assistance."
  },
  {
    announcer: 1,
    text: "Passengers are reminded to keep boarding passes and identification available at all times while in the terminal. Thank you."
  }
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
      boarding: "Ladies and gentlemen, Captain Air flight C L 0040, service to the Fabulous Forties, is now boarding at gate 40. We invite all guests to direct their attention to the departure board for this evening's featured departure.",
      final: "Last call. Last call for Captain Air flight C L 0040 to the Fabulous Forties. This is the final boarding call. The gate is now closing.",
      departed: "Captain Air flight C L 0040 to the Fabulous Forties has now departed. On behalf of Christie Lee International, we wish the next forty years a very pleasant journey."
    }
  },

  /* ============================================================
     NOVELTY POOL — three of these rotate onto the board each hour
     ============================================================ */
  {
    id: "margaritaville", flight: "CL-5PM", dest: "MARGARITAVILLE", gate: "B5",
    departMin: 8, scene: "beach", novelty: true,
    storyTitle: "It's 5 o'clock there",
    story: "A precision operation: this aircraft departs at exactly the moment it becomes 5 o'clock somewhere, which our route planners note is always. Cabin crew will pass through the aisle with salt for the rim. Lost shakers will be announced over the PA."
  },
  {
    id: "memorylane", flight: "CL-1996", dest: "MEMORY LANE", gate: "A1",
    departMin: 20, scene: "suburbSunset", novelty: true,
    storyTitle: "Nonstop nostalgia",
    story: "A leisurely route over landmarks of note: the old neighborhood, the first locker that never opened on the first try, and the exact spot where summer used to last forever. Window seats strongly recommended. Tissues located in the seat-back pocket in front of you."
  },
  {
    id: "cloudnine", flight: "CL-0009", dest: "CLOUD NINE", gate: "A9",
    departMin: 26, scene: "clouds", novelty: true,
    storyTitle: "Permanent residency available",
    story: "Christie has held elite status on this route for years. Cloud Nine offers unlimited soft landings, a strict no-bad-news policy, and the particular happiness of being surrounded by your favorite people — which, conveniently, describes tonight exactly."
  },
  {
    id: "fountain", flight: "CL-2086", dest: "FOUNTAIN OF YOUTH", gate: "B4",
    departMin: 38, scene: "fountain", novelty: true,
    storyTitle: "Route quietly discontinued",
    story: "Our cartographers searched for decades and finally located the Fountain of Youth. It turned out to be a good group of friends, a packed calendar of plans, and laughing until your face hurts. The actual fountain was a disappointment. This route now flies directly to the party instead."
  },
  {
    id: "rollerrink", flight: "CL-1994", dest: "ROLLER RINK", gate: "B2",
    departMin: 50, scene: "neonRetro", novelty: true,
    storyTitle: "Couples skate only",
    story: "Service to the Roller Rink includes complimentary slap bracelets, a strict no-walking-on-the-carpet-in-skates policy, and one (1) nervous lap during couples skate. The captain has requested that all passengers know every word of the in-flight soundtrack. Historically, this has not been a problem."
  },
  {
    id: "adulthood", flight: "CL-9999", dest: "ADULTHOOD", gate: "TBD",
    departMin: null, fixedStatus: "DELAYED", scene: "fog", novelty: true,
    storyTitle: "Indefinitely delayed",
    story: "Flight CL-9999 to Adulthood has been delayed every single day for forty consecutive years, an airline record. Ground crews cite 'a strong preference for fun' and 'honestly, no real desire to board.' Passengers holding tickets are invited to enjoy the lounge indefinitely. Rebooking is not anticipated."
  }
];
