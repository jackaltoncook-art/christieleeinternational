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
     THE SHOWSTOPPER — Captain Air's featured departure, on the hour
     ============================================================ */
  {
    id: "ca040", flight: "CA-040", airline: "Captain Air",
    dest: "PARIS", gate: "40", departMin: 0, scene: "paris", showstopper: true,
    storyTitle: "The featured departure",
    story: "Once an hour, on the hour, Captain Air's flagship service departs gate 40 for Paris. Champagne in every cabin, an unreasonable quantity of pastry, and the Eiffel Tower lights timed to sparkle on arrival. The entire airport stops to watch this one take off. As it should.",
    pa: {
      boarding: "Ladies and gentlemen, Captain Air flight C A 040, service to Paris, is now boarding at gate 40. We invite all guests to direct their attention to the departure board for this evening's featured departure.",
      final: "Last call. Last call for Captain Air flight C A 040 to Paris. This is the final boarding call. The gate is now closing.",
      departed: "Captain Air flight C A 040 to Paris has now departed. On behalf of Christie Lee International, we wish all passengers, and the next forty years, a very pleasant journey."
    },
    i18n: {
      boarding: [{ lang:"fr", text:"Votre attention s'il vous pla\u00eet. Le vol Captain Air C A 040 \u00e0 destination de Paris embarque maintenant porte 40." }],
      final:    [{ lang:"fr", text:"Dernier appel pour le vol Captain Air C A 040 \u00e0 destination de Paris. Embarquement imm\u00e9diat porte 40." }]
    }
  },

  /* ============================================================
     ROTATING POOL — three of these join the board each hour
     ============================================================ */
  {
    id: "cancun", flight: "DL-2040", airline: "Delta Air Lines",
    dest: "CANCUN", gate: "B5", departMin: 8, scene: "beach", novelty: true,
    storyTitle: "The turquoise route",
    story: "Nonstop service to white sand, water in a shade of blue that looks color-corrected, and a swim-up everything. Cabin crew recommend the window seat for the final approach over the Caribbean \u2014 it never gets old.",
    i18n: {
      boarding: [{ lang:"es", text:"Atenci\u00f3n, por favor. El vuelo 2040 de Delta con destino a Canc\u00fan est\u00e1 abordando por la puerta B5." }],
      final:    [{ lang:"es", text:"\u00daltima llamada para el vuelo 2040 con destino a Canc\u00fan. Favor de presentarse de inmediato en la puerta B5." }]
    }
  },
  {
    id: "rome", flight: "AZ-640", airline: "ITA Airways",
    dest: "ROME", gate: "A1", departMin: 20, scene: "rome", novelty: true,
    storyTitle: "The eternal city",
    story: "Service to two thousand years of history and the best plate of pasta of your life, probably down an alley with four tables. The Colosseum has seen everything and remains unimpressed; the espresso is one euro standing up, as it should be.",
    i18n: {
      boarding: [{ lang:"it", text:"Attenzione, prego. Il volo ITA Airways 640 per Roma \u00e8 in imbarco al gate A1." }],
      final:    [{ lang:"it", text:"Ultima chiamata per il volo 640 per Roma. I passeggeri sono pregati di recarsi immediatamente al gate A1." }]
    }
  },
  {
    id: "sydney", flight: "QF-40", airline: "Qantas",
    dest: "SYDNEY", gate: "A9", departMin: 26, scene: "sydney", novelty: true,
    storyTitle: "The harbour run",
    story: "Long-haul service to a harbour that shows off at every hour of the day. The Opera House sails catch the sunset, the ferries run like clockwork, and the coffee scene will quietly ruin all other coffee for you. Worth every time zone."
  },
  {
    id: "cairo", flight: "MS-840", airline: "EgyptAir",
    dest: "CAIRO", gate: "B4", departMin: 38, scene: "cairo", novelty: true,
    storyTitle: "The pyramid route",
    story: "Service to the only surviving wonder of the ancient world, visible from the aircraft on approach if you're on the right side. Four and a half thousand years old and still the best skyline closer in the business.",
    i18n: {
      boarding: [{ lang:"ar", text:"\u0627\u0646\u062a\u0628\u0627\u0647 \u0645\u0646 \u0641\u0636\u0644\u0643\u0645. \u0627\u0644\u0631\u062d\u0644\u0629 840 \u0644\u0645\u0635\u0631 \u0644\u0644\u0637\u064a\u0631\u0627\u0646 \u0627\u0644\u0645\u062a\u062c\u0647\u0629 \u0625\u0644\u0649 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0628\u062f\u0623 \u0635\u0639\u0648\u062f \u0627\u0644\u0631\u0643\u0627\u0628 \u0639\u0628\u0631 \u0627\u0644\u0628\u0648\u0627\u0628\u0629 B4." }],
      final:    [{ lang:"ar", text:"\u0627\u0644\u0646\u062f\u0627\u0621 \u0627\u0644\u0623\u062e\u064a\u0631 \u0644\u0644\u0631\u062d\u0644\u0629 840 \u0627\u0644\u0645\u062a\u062c\u0647\u0629 \u0625\u0644\u0649 \u0627\u0644\u0642\u0627\u0647\u0631\u0629. \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0648\u062c\u0647 \u0641\u0648\u0631\u0627\u064b \u0625\u0644\u0649 \u0627\u0644\u0628\u0648\u0627\u0628\u0629 B4." }]
    }
  },
  {
    id: "london", flight: "BA-1940", airline: "British Airways",
    dest: "LONDON", gate: "B2", departMin: 50, scene: "london", novelty: true,
    storyTitle: "The transatlantic classic",
    story: "Evening service to red buses, black cabs, and a clock tower that has kept perfect time through absolutely everything. Theatre in the West End, a proper Sunday roast, and the gentle thrill of standing on the right side of the escalator."
  },
  {
    id: "lasvegas", flight: "WN-3040", airline: "Southwest Airlines",
    dest: "LAS VEGAS", gate: "TBD", departMin: null, fixedStatus: "DELAYED",
    scene: "vegas", novelty: true,
    storyTitle: "Currently delayed",
    story: "Southwest flight 3040 to Las Vegas is experiencing an extended delay. Ground crews report the aircraft is ready; several passengers, however, have not yet been located. Travelers holding tickets are invited to monitor the board for updates."
  }
];
