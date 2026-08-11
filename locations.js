const campusLocations = [

  // =====================================================
  // LEVI WATKINS LEARNING CENTER
  // =====================================================

  {
    id: 1,

    name: "Levi Watkins Learning Center",
    shortName: "Library",
    category: "academic",

    keywords: [
      "library",
      "levi watkins",
      "study",
      "quiet study",
      "books",
      "research",
      "computer lab",
      "computer labs",
      "macbook",
      "macbooks",
      "dell computers",
      "chrome computers",
      "chromebook",
      "printing",
      "3d printing",
      "tutoring",
      "study room",
      "study rooms",
      "group study",
      "individual study",
      "museum",
      "art gallery",
      "civil rights",
      "archives",
      "special collections",
      "asu history",
      "presidents",
      "touchscreen",
      "starbucks",
      "coffee",
      "grubhub",
      "flex dollars",
      "first year experience",
      "fye"
    ],

    description:
      "Levi Watkins Learning Center is Alabama State University's main library and academic learning space, offering research resources, computers, study rooms, tutoring, printing, historical exhibits, and other student support services.",

    services: [
      "Book checkout",
      "Research assistance",
      "MacBook access",
      "Dell and Chrome computers",
      "Computer labs",
      "Individual study rooms",
      "Group study rooms",
      "Tutoring",
      "Printing",
      "3D printing",
      "Scanning",
      "ASU history and exhibits",
      "Starbucks access"
    ],

    studentTip:
      "Need a quieter place to study? The library generally gets quieter as you move to the higher floors. If you need markers or chalk for a board, ask the front desk.",

    printing: {
      available: true,
      free: false,
      note:
        "Regular printing is available on the first floor and requires payment. Free printing is available in residential halls and in the Reading, Writing & Math Lab in W.B. Patterson Hall."
    },

    floors: [
      {
        floor: 1,
        name: "First Floor",

        sections: [
          {
            name: "Computers & Technology",

            keywords: [
              "macbook",
              "macbooks",
              "computer",
              "computers",
              "dell",
              "chrome",
              "chromebook",
              "printing",
              "touchscreen"
            ],

            description:
              "The first floor includes student computer access and technology resources.",

            features: [
              "MacBooks are available for students who need computer access",
              "Dell computers are available",
              "Chrome computers are available",
              "Printing is located on the first floor",
              "A touchscreen display provides information, ASU history, and campus facts"
            ]
          },

          {
            name: "ASU History & Exhibits",

            keywords: [
              "museum",
              "history",
              "asu history",
              "presidents",
              "president history",
              "touchscreen",
              "art",
              "gallery"
            ],

            description:
              "The library includes historical and cultural exhibits highlighting Alabama State University and its history.",

            features: [
              "Museum and exhibit spaces",
              "History of ASU presidents displayed on the first floor",
              "Interactive touchscreen with ASU information, history, and fun facts",
              "Art and historical exhibits"
            ]
          },

          {
            name: "Front Desk & Book Services",

            keywords: [
              "front desk",
              "books",
              "check out books",
              "borrow books",
              "markers",
              "chalk",
              "board"
            ],

            description:
              "The front desk helps students with book services and basic study supplies.",

            features: [
              "Students can check books in and out",
              "Markers may be available for study boards",
              "Chalk may be available for classroom or study use"
            ],

            studentTip:
              "If you're using a board and need markers or chalk, ask the front desk."
          },

          {
            name: "Starbucks",

            keywords: [
              "starbucks",
              "coffee",
              "grubhub",
              "flex dollars",
              "student id"
            ],

            description:
              "Starbucks is located on the first-floor level of Levi Watkins Learning Center, but it uses a separate entrance on the right side of the building.",

            features: [
              "Starbucks ordering is available through Grubhub",
              "Students can also use their student ID in person"
            ],

            studentTip:
              "Do not enter through the main library doors looking for Starbucks. Starbucks has its own separate entrance on the right side of Levi Watkins Learning Center and cannot be accessed directly from inside the main library."
          }
        ]
      }
    ],

    academicSupport: [
      {
        name: "Tutoring",

        keywords: [
          "tutoring",
          "tutor",
          "course help",
          "class help"
        ],

        description:
          "Tutoring for specific courses may be offered through Levi Watkins Learning Center.",

        studentTip:
          "A few weeks after classes begin, students may receive emails about tutoring options for specific courses and where those sessions will be held."
      },

      {
        name: "Study Rooms",

        keywords: [
          "study room",
          "study rooms",
          "group study",
          "individual study",
          "quiet room"
        ],

        description:
          "Students can use individual and group study rooms for focused study sessions."
      },

      {
        name: "3D Printing",

        keywords: [
          "3d printing",
          "3d printer",
          "3d print"
        ],

        description:
          "3D printing services are available through Levi Watkins Learning Center."
      }
    ],

    specialSpaces: [
      "Museum and exhibit spaces",
      "Art Gallery",
      "Civil Rights Courtyard",
      "ASU Archives",
      "Special Collections",
      "Information Commons",
      "Faculty research spaces",
      "Seminar and research rooms"
    ],

    funFact:
      "Levi Watkins Learning Center can be especially important for first-year students because library research and academic resources can support required First Year Experience coursework.",

    address:
      "915 S. Jackson Street, Montgomery, AL 36104",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // J. GARRICK HARDY STUDENT CENTER / THE UNION
  // =====================================================

  {
    id: 2,

    name: "J. Garrick Hardy Student Center",
    shortName: "Hardy Student Center",
    category: "services",

    keywords: [
      "hardy student center",
      "j garrick hardy",
      "student center",
      "the union",
      "union",
      "housing",
      "residence life",
      "accessibility",
      "veteran affairs",
      "career services",
      "career center",
      "undecided major",
      "change major",
      "major help",
      "resume",
      "resume review",
      "internship",
      "internships",
      "job",
      "jobs",
      "graduating",
      "scholarship",
      "scholarships",
      "international student affairs",
      "international students",
      "judicial affairs",
      "mail",
      "mail locker",
      "mail lockers",
      "package",
      "packages",
      "mail room",
      "information desk",
      "chick fil a",
      "chick-fil-a",
      "subway",
      "prime grill",
      "grubhub",
      "flex",
      "flex dollars",
      "gaming room",
      "ps5",
      "xbox",
      "gaming pc",
      "pool",
      "8 ball",
      "ping pong",
      "chess",
      "spades",
      "connect 4",
      "bookstore",
      "textbooks",
      "asu gear",
      "d9 attire",
      "atm",
      "coin machine",
      "laundry coins",
      "financial aid",
      "student accounts",
      "cashier",
      "admissions",
      "student id",
      "hornets web",
      "ballroom",
      "sga",
      "start club",
      "hornet tribune",
      "yearbook"
    ],

    description:
      "The J. Garrick Hardy Student Center, commonly called The Union by students, is a major hub for student services, dining, recreation, student organizations, financial services, and campus life.",

    services: [
      "Housing & Residence Life",
      "Accessibility & Veteran Affairs",
      "Career Services",
      "Mail services",
      "Campus dining",
      "Bookstore",
      "Gaming and recreation",
      "Financial Aid",
      "Student Accounts",
      "Cashier's Desk",
      "Admissions",
      "Student ID services",
      "Student Life",
      "SGA"
    ],

    studentTip:
      "Students commonly call the Hardy Student Center 'The Union.' It is one of the most useful buildings to learn early because many student services, food options, campus activities, and financial offices are located here.",

    floors: [
      {
        floor: 1,
        name: "First Floor",

        sections: [
          {
            name: "Housing & Residence Life",

            keywords: [
              "housing",
              "residence life",
              "dorm",
              "dorms"
            ],

            description:
              "Housing & Residence Life assists students with campus housing and residential needs."
          },

          {
            name: "Accessibility & Veteran Affairs",

            keywords: [
              "accessibility",
              "veteran",
              "veterans",
              "accommodations"
            ],

            description:
              "Student services for accessibility needs and veteran-related support."
          },

          {
            name: "Career Services",

            keywords: [
              "career services",
              "career center",
              "major",
              "undecided",
              "change major",
              "resume",
              "internship",
              "job",
              "scholarship"
            ],

            description:
              "Career Services supports students with career planning, major exploration, resumes, internships, employment opportunities, and professional development.",

            features: [
              "Helps undecided students explore possible majors",
              "Can assist students considering changing their major",
              "Uses assessments to help students learn more about their interests and possible career paths",
              "Shares scholarship opportunities",
              "Helps graduating students search for jobs",
              "Provides internship guidance",
              "Reviews resumes",
              "Communicates opportunities through student email and Hornet Connect"
            ],

            studentTip:
              "If you are undecided about your major, considering changing majors, preparing for an internship, or want someone to review your resume, Career Services is a great place to start.",

            officesInside: [
              {
                name: "International Student Affairs",
                description:
                  "International Student Affairs is located within the Career Services area."
              },

              {
                name: "Violence Against Wo(Men) Program",
                description:
                  "A student support program located within the Career Services area."
              },

              {
                name: "Judicial Affairs",
                description:
                  "Students can seek assistance through Judicial Affairs for certain student conduct matters or reports."
              }
            ]
          },

          {
            name: "Mail Lockers",

            keywords: [
              "mail",
              "mail locker",
              "package",
              "qr code",
              "pin code"
            ],

            description:
              "Students can retrieve eligible packages from automated mail lockers.",

            steps: [
              "You will receive an email when your package is ready",
              "The email provides your assigned locker or box number",
              "You receive a PIN code",
              "You also receive a QR code",
              "Students should retrieve their package within 72 hours"
            ],

            studentTip:
              "The package email gives you both a PIN and QR code, so you have more than one way to access your locker."
          },

          {
            name: "Mail Room",

            keywords: [
              "mail room",
              "large package",
              "send package",
              "missing package",
              "wrong dorm"
            ],

            description:
              "The Mail Room can assist with larger packages, outgoing mail, and questions or problems involving student packages.",

            features: [
              "Pickup assistance for larger packages",
              "Help with package questions and mix-ups",
              "Help when a package is sent to the wrong residence hall",
              "Students can mail outgoing items"
            ],

            studentTip:
              "Outgoing mail requires a fee that can vary depending on the size of the item."
          },

          {
            name: "Information Desk",

            keywords: [
              "information desk",
              "help",
              "directions",
              "find location"
            ],

            description:
              "Students and visitors can ask the Information Desk for help finding campus locations or answering general questions."
          },

          {
            name: "Dining",

            keywords: [
              "food",
              "dining",
              "chick fil a",
              "chick-fil-a",
              "subway",
              "prime grill",
              "grubhub",
              "flex dollars"
            ],

            description:
              "The first floor of The Union includes Chick-fil-A, Subway, and Prime Grill.",

            locations: [
              "Chick-fil-A",
              "Subway",
              "Prime Grill"
            ],

            features: [
              "Grubhub ordering is available for Chick-fil-A",
              "Grubhub ordering is available for Prime Grill",
              "Sign in using your ASU student email",
              "Eligible Flex Dollars can be used through Grubhub",
              "Grubhub tablets are available near the eateries",
              "Subway is not part of Grubhub",
              "Students can use their student ID in person at Subway"
            ],

            studentTip:
              "Using Flex Dollars at Chick-fil-A or Prime Grill? Use Grubhub and sign in with your ASU student email. Subway is different and accepts the student ID in person."
          },

          {
            name: "Gaming & Recreation",

            keywords: [
              "gaming",
              "ps5",
              "xbox",
              "gaming pc",
              "pool",
              "8 ball",
              "chess",
              "ping pong",
              "spades",
              "connect 4"
            ],

            description:
              "The first-floor gaming and recreation areas give students spaces to relax, play games, and socialize.",

            features: [
              "PlayStation 5 consoles",
              "Xbox consoles",
              "Gaming PCs",
              "Pool / 8-ball",
              "Chess",
              "Ping-pong",
              "Spades",
              "Connect 4"
            ]
          },

          {
            name: "ASU Bookstore",

            keywords: [
              "bookstore",
              "books",
              "textbooks",
              "asu gear",
              "d9",
              "diploma frame"
            ],

            description:
              "The ASU Bookstore provides course materials and university merchandise.",

            features: [
              "Textbook pickup",
              "ASU apparel and gear",
              "D9 / Divine Nine attire",
              "Diploma holders and frames"
            ]
          },

          {
            name: "ATMs & Coin Machines",

            keywords: [
              "atm",
              "cash",
              "coins",
              "coin machine",
              "quarters",
              "laundry",
              "speed queen"
            ],

            description:
              "ATMs and machines for exchanging cash for coins are available on the first floor.",

            studentTip:
              "Keeping coins available can be useful for residence-hall laundry as a backup."
          },

          {
            name: "Restrooms",

            keywords: [
              "bathroom",
              "restroom"
            ],

            description:
              "Restrooms are available on the first floor."
          }
        ]
      },

      {
        floor: 2,
        name: "Second Floor",

        sections: [
          {
            name: "Financial Aid",

            keywords: [
              "financial aid",
              "fafsa",
              "scholarship"
            ],

            description:
              "Students can visit Financial Aid for assistance with financial aid-related questions and student funding."
          },

          {
            name: "Student Accounts",

            keywords: [
              "student accounts",
              "bill",
              "billing",
              "tuition",
              "balance",
              "payment"
            ],

            description:
              "Student Accounts assists students with billing, account balances, payments, and related financial questions."
          },

          {
            name: "Cashier's Desk",

            keywords: [
              "cashier",
              "cashiers desk",
              "payment"
            ],

            description:
              "The Cashier's Desk handles applicable student payment services."
          },

          {
            name: "Admissions",

            keywords: [
              "admissions",
              "apply",
              "application",
              "enrollment"
            ],

            description:
              "Admissions assists prospective and incoming students with the university admissions process."
          },

          {
            name: "Student ID Center",

            keywords: [
              "student id",
              "id card",
              "replacement id",
              "hornets web",
              "login help"
            ],

            description:
              "Students can receive assistance with student ID services on the second floor.",

            studentTip:
              "If you're having trouble accessing Hornets Web, the Student ID area may also be able to help."
          },

          {
            name: "Ballrooms",

            keywords: [
              "ballroom",
              "ballrooms",
              "events"
            ],

            description:
              "Three ballrooms are located on the second floor and are used for campus events and activities."
          },

          {
            name: "SGA Complex & Student Life",

            keywords: [
              "sga",
              "student government",
              "start club",
              "student organization",
              "hornet tribune",
              "yearbook"
            ],

            description:
              "The SGA Complex and Student Life area supports student government, campus organizations, student media, and student involvement.",

            features: [
              "Student Government Association leadership offices",
              "Support for student clubs and organizations",
              "Hornet Tribune",
              "Student Life Suite"
            ],

            studentTip:
              "Interested in creating a club or organization? The SGA Complex is an important place to start.",

            yearbook:
              "Student yearbook photos are taken on the second floor in the Student Life Suite."
          }
        ]
      }
    ],

    address:
      "915 S. Jackson Street, Montgomery, AL 36104",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // OFFICE OF STUDENT ACCOUNTS
  // =====================================================

  {
    id: 3,

    name: "Office of Student Accounts",
    shortName: "Student Accounts",
    category: "services",

    keywords: [
      "student accounts",
      "billing",
      "tuition",
      "payments",
      "account balance"
    ],

    description:
      "Student Accounts assists students with university billing, payments, account information, and related financial services.",

    building:
      "J. Garrick Hardy Student Center",

    room:
      "C2.43",

    services: [
      "Billing assistance",
      "Payments",
      "Account information",
      "Student balances"
    ],

    image: "",
    mapLink: ""
  },


    // =====================================================
  // FRED SHUTTLESWORTH DINING HALL / COMMONS
  // =====================================================

  {
    id: 4,

    name: "Fred Shuttlesworth Dining Hall",
    shortName: "The Cafeteria",
    category: "dining",

    keywords: [
      "fred shuttlesworth",
      "fred shuttlesworth dining hall",
      "fred shuttlesworth commons",
      "shuttlesworth",
      "cafeteria",
      "cafe",
      "dining hall",
      "commons",

      "food",
      "eat",
      "meal",
      "meals",
      "breakfast",
      "lunch",
      "dinner",
      "brunch",

      "dining hours",
      "cafe hours",
      "cafeteria hours",
      "breakfast hours",
      "lunch hours",
      "dinner hours",

      "salad bar",
      "salad",
      "ice cream",
      "ice cream machine",
      "coffee",
      "coffee machine",

      "vegetarian",
      "vegetarian food",
      "non meat",
      "non meat eater",
      "meatless",
      "dietary options",
      "food preferences",

      "to go",
      "to go plate",
      "to go tray",
      "5 dollar tray",
      "$5 tray",

      "hornet hive",
      "hornet hive market",
      "cafe store",
      "market",
      "snacks",
      "hygiene",
      "hygiene products",
      "flex",
      "flex dollars",
      "student id",

      "music",
      "events",
      "cafe event",
      "dj",

      "sweatbox",
      "the sweatbox",
      "cj dunn",
      "c j dunn",
      "cj dunn arena"
    ],

    description:
      "Fred Shuttlesworth Dining Hall, also known by students as the cafeteria or cafe, is one of Alabama State University's primary dining locations. Students come here for daily meals, special dining events, music, social activities, and access to the Hornet Hive Market.",

    services: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Weekend brunch",
      "Salad bar",
      "Vegetarian and meatless food options",
      "Coffee",
      "Ice cream",
      "$5 to-go trays",
      "Hornet Hive Market",
      "Flex Dollar purchases",
      "Dining events and music"
    ],

    studentTip:
      "The cafeteria is more than a place to eat. ASU sometimes hosts music, events, and special activities inside. If you are in a rush and do not have time to sit down for a meal, ask about the $5 to-go tray option.",

    sections: [

      // =================================================
      // DINING HOURS
      // =================================================

      {
        name: "Dining Hall Hours",

        keywords: [
          "hours",
          "dining hours",
          "cafeteria hours",
          "cafe hours",
          "breakfast hours",
          "lunch hours",
          "dinner hours",
          "brunch hours",
          "when does the cafe open",
          "when does the cafe close"
        ],

        description:
          "Current dining meal periods are organized around breakfast, lunch, dinner, and weekend brunch.",

        features: [
          "Monday-Friday Breakfast: 7:00 AM-9:00 AM",
          "Monday-Friday Lunch: 11:00 AM-1:00 PM",
          "Monday-Friday Dinner: 5:00 PM-7:00 PM",
          "Saturday-Sunday Brunch: 9:30 AM-12:30 PM",
          "Saturday-Sunday Dinner: 4:00 PM-6:00 PM"
        ],

        studentTip:
          "These are the updated dining hours shared with students. Dining schedules can change for holidays, breaks, special events, or university closures, so always watch your ASU email for temporary schedule changes."
      },


      // =================================================
      // FOOD OPTIONS
      // =================================================

      {
        name: "Food & Dietary Options",

        keywords: [
          "food",
          "meal",
          "vegetarian",
          "meatless",
          "non meat",
          "dietary options",
          "food preferences",
          "salad",
          "salad bar"
        ],

        description:
          "The dining hall serves a variety of meals and provides options for students with different food preferences, including students who do not eat meat.",

        features: [
          "Daily meal options",
          "Salad bar",
          "Vegetarian and meatless choices",
          "Different food selections depending on the meal period"
        ],

        studentTip:
          "If you have a particular dietary preference or need a meatless option, look through the available stations before choosing your meal."
      },


      // =================================================
// SALAD / COFFEE / WAFFLES / ICE CREAM
// =================================================

{
  name: "Salad Bar, Coffee, Waffles & Ice Cream",

  keywords: [
    "salad",
    "salad bar",
    "coffee",
    "coffee machine",
    "waffle",
    "waffles",
    "waffle maker",
    "ice cream",
    "ice cream machine"
  ],

  description:
    "Students can find additional self-service dining options such as a salad bar, coffee machine, waffle maker, and ice cream machine inside the cafeteria.",

  features: [
    "Salad bar",
    "Coffee machine",
    "Waffle maker",
    "Ice cream machine"
  ]
},


      // =================================================
      // $5 TO-GO TRAYS
      // =================================================

      {
        name: "$5 To-Go Trays",

        keywords: [
          "to go",
          "to go tray",
          "to go plate",
          "takeout",
          "5 dollar tray",
          "$5 tray",
          "carry out"
        ],

        description:
          "Students who do not have time to sit inside the cafeteria can purchase a $5 to-go tray and prepare a meal to take with them.",

        features: [
          "$5 to-go tray option",
          "Useful when you are rushing to class or another campus activity",
          "The tray can be kept after purchase"
        ],

        studentTip:
          "If you are short on time between classes, the to-go option can help you avoid skipping a meal."
      },


      // =================================================
      // HORNET HIVE MARKET
      // =================================================

      {
        name: "Hornet Hive Market",

        keywords: [
          "hornet hive",
          "hornet hive market",
          "cafe store",
          "store",
          "market",
          "snacks",
          "hygiene",
          "hygiene products",
          "flex",
          "flex dollars",
          "student id"
        ],

        description:
          "The Hornet Hive Market is a small campus market connected with the Shuttlesworth dining area where students can purchase snacks, convenience items, and hygiene products.",

        features: [
          "Snacks",
          "Drinks and convenience items",
          "Hygiene products",
          "Flex Dollar purchases"
        ],

        studentTip:
          "You can use eligible Flex Dollars at the market instead of spending personal money. The market normally stays open later than the main cafeteria, but the exact closing time should be checked before going."
      },


      // =================================================
      // FLEX DOLLARS
      // =================================================

      {
        name: "Flex Dollars",

        keywords: [
          "flex",
          "flex dollars",
          "student id",
          "meal money",
          "food money"
        ],

        description:
          "Students can use eligible Flex Dollars for purchases at participating campus dining locations and at the Hornet Hive Market.",

        studentTip:
          "Before using personal money for snacks or convenience items, check whether your Flex Dollars can cover the purchase."
      },


      // =================================================
      // EVENTS & MUSIC
      // =================================================

      {
        name: "Events & Music",

        keywords: [
          "event",
          "events",
          "music",
          "dj",
          "party",
          "cafe event",
          "cafeteria event"
        ],

        description:
          "The cafeteria is also used as a social space. On different occasions, ASU hosts music, special dining activities, and student events inside the facility.",

        studentTip:
          "Watch campus announcements and student-life information because the cafe experience may be different during special events or themed dining days."
      }

    ],

    campusLore:
      "Students and alumni may sometimes refer to the facility by older campus names or nicknames, including 'The Sweatbox' and references to C.J. Dunn. These names are part of campus memory and history, while Fred Shuttlesworth Dining Hall is the current dining-hall name.",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // W.B. PATTERSON HALL
  // =====================================================

  {
    id: 5,

    name: "W.B. Patterson Hall",
    fullName: "William Burns Patterson Hall",
    shortName: "W.B. Patterson Hall",
    category: "academic",

    keywords: [
      "w.b. patterson",
      "wb patterson",
      "william burns patterson",
      "shop for success",
      "classes",
      "freshman advising",
      "reading writing math lab",
      "tutoring",
      "academic support",
      "free printing",
      "what a burger",
      "free food",
      "free snacks",
      "free clothes",
      "professional clothes",
      "hygiene products"
    ],

    description:
      "W.B. Patterson Hall is an academic building in the Shop for Success area with classrooms, freshman advising, academic support resources, and the Reading, Writing & Math Lab.",

    services: [
      "Freshman advising",
      "Classes and classrooms",
      "Reading support",
      "Writing support",
      "Math support",
      "Academic assistance",
      "Free printing",
      "What A Burger student resource room"
    ],

    landmarkArea: {
      name: "Shop for Success"
    },

    studentTip:
      "This building is especially useful for freshmen. You can find freshman advising, the Reading, Writing & Math Lab, free printing, and other student resources here.",

    printing: {
      available: true,
      free: true,
      note:
        "Free printing is available in the Reading, Writing & Math Lab."
    },

    specialResources: [
      {
        name: "What A Burger",

        location:
          "First floor of W.B. Patterson Hall",

        type:
          "Student resource room",

        description:
          "What A Burger is an ASU student resource room, not the Whataburger restaurant.",

        provides: [
          "Business and professional clothing",
          "Snacks",
          "Food",
          "Hygiene products"
        ],

        access:
          "Students must sign up to gain access.",

        cost:
          "Free"
      }
    ],

    funFact:
      "W.B. Patterson Hall is named after William Burns Paterson, who served as president of Alabama State from 1878 to 1915.",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // RESIDENTIAL HALLS
  // =====================================================

  {
    id: 6,

    name: "Residential Halls",
    shortName: "Residence Halls",
    category: "housing",

    keywords: [
      "residence halls",
      "residential halls",
      "housing",
      "dorm",
      "dorms",
      "free printing"
    ],

    description:
      "Campus residence halls provide housing and residential resources for Alabama State University students.",

    services: [
      "Student housing",
      "Residential resources",
      "Free printing"
    ],

    printing: {
      available: true,
      free: true,
      note:
        "Free printing is available in residential halls."
    },

    image: "",
    mapLink: ""
  },


  // =====================================================
  // EDWARD GLENN MCGHEE HALL
  // =====================================================

  {
    id: 7,

    name: "Edward Glenn McGhee Hall",
    shortName: "McGhee Hall",
    category: "academic",

    keywords: [
      "edward glenn mcghee",
      "mcghee hall",
      "mcgehee hall",
      "shop for success",
      "classes",
      "freshman",
      "first year experience",
      "fye",
      "trio",
      "aces",
      "academic support",
      "athlete study hall",
      "testing center"
    ],

    description:
      "Edward Glenn McGhee Hall is an academic building in the Shop for Success area with classrooms and academic support resources.",

    services: [
      "Classes and classrooms",
      "First Year Experience classes",
      "A.C.E.S.",
      "TRIO Student Support Services",
      "Athlete Study Hall",
      "ASU Testing Center"
    ],

    landmarkArea: {
      name: "Shop for Success"
    },

    floors: [
      {
        floor: 1,
        name: "First Floor",

        sections: [
          {
            name: "Classrooms & First Year Experience",

            keywords: [
              "classes",
              "freshman",
              "first year experience",
              "fye"
            ],

            description:
              "Freshmen may have their required First Year Experience course in this building."
          },

          {
            name: "A.C.E.S.",

            room: "108",

            keywords: [
              "aces",
              "academic support",
              "academic coaching",
              "study skills",
              "tutoring",
              "mentoring"
            ],

            description:
              "A.C.E.S. stands for Academic Center for Educational Success and provides academic support designed to help students succeed.",

            features: [
              "Academic coaching",
              "Study and learning-skills support",
              "Academic progress support",
              "Mentoring",
              "Tutoring referrals",
              "Major and career guidance"
            ]
          },

          {
            name: "TRIO Student Support Services",

            keywords: [
              "trio",
              "first generation",
              "tutoring",
              "mentoring"
            ],

            description:
              "TRIO Student Support Services provides eligible students with additional academic and personal support."
          },

          {
            name: "Athlete Study Hall",

            keywords: [
              "athlete",
              "student athlete",
              "athlete study hall"
            ],

            description:
              "McGhee Hall includes a study hall space used by student-athletes."
          },

          {
            name: "ASU Testing Center",

            room: "105",

            keywords: [
              "testing center",
              "test",
              "exam",
              "makeup exam",
              "proctoring"
            ],

            description:
              "The ASU Testing Center provides testing and proctoring services."
          }
        ]
      }
    ],

    image: "",
    mapLink: ""
  },


  // =====================================================
  // WILLIAM HOOPER COUNCILL HALL
  // =====================================================

  {
    id: 8,

    name: "William Hooper Councill Hall",
    shortName: "Councill Hall",
    category: "academic",

    keywords: [
      "william hooper councill",
      "councill hall",
      "business building",
      "administration",
      "shop for success",
      "president",
      "quinton ross",
      "business and finance",
      "comptroller",
      "accounts payable",
      "human resources",
      "hr",
      "payroll",
      "work study",
      "budget",
      "it",
      "technology",
      "graduate school",
      "faculty offices"
    ],

    description:
      "William Hooper Councill Hall is one of Alabama State University's main administrative buildings.",

    services: [
      "Office of the President",
      "Business & Finance",
      "Comptroller's Office",
      "Accounts Payable",
      "Human Resources",
      "Payroll and work-study support",
      "Budget Office",
      "Technology support",
      "Graduate School offices",
      "Faculty and staff offices"
    ],

    landmarkArea: {
      name: "Shop for Success"
    },

    floors: [
      {
        floor: 1,
        name: "First Floor",

        sections: [
          {
            name: "Office of the President",

            keywords: [
              "president",
              "quinton ross"
            ],

            description:
              "The Office of the President is located in Councill Hall."
          },

          {
            name: "Business & Finance",

            room: "124",

            keywords: [
              "business and finance",
              "finance"
            ],

            description:
              "Business & Finance supports the university's financial and administrative operations."
          },

          {
            name: "Comptroller's Office",

            room: "128",

            keywords: [
              "comptroller",
              "accounting"
            ],

            description:
              "The Comptroller's Office supports university accounting and financial operations."
          },

          {
            name: "Payroll & Work-Study Support",

            keywords: [
              "payroll",
              "work study",
              "student worker",
              "paycheck"
            ],

            description:
              "Students working through work-study or university employment may need to visit Councill Hall for certain payroll matters."
          },

          {
            name: "Technology Services",

            keywords: [
              "it",
              "technology",
              "computer help",
              "email help",
              "login help"
            ],

            description:
              "University technology services provide support for technology and university systems."
          }
        ]
      },

      {
        floor: 2,
        name: "Second Floor",

        sections: [
          {
            name: "Human Resources",

            room: "235",

            keywords: [
              "human resources",
              "hr",
              "employment"
            ],

            description:
              "Human Resources provides employment and personnel-related services."
          },

          {
            name: "Accounts Payable",

            room: "226",

            keywords: [
              "accounts payable",
              "payment",
              "invoice"
            ],

            description:
              "Accounts Payable handles applicable university payment functions."
          },

          {
            name: "Graduate School Offices",

            keywords: [
              "graduate school",
              "graduate studies",
              "masters",
              "doctoral"
            ],

            description:
              "Graduate School offices are located on the second floor."
          }
        ]
      }
    ],

    funFact:
      "Councill Hall has played a role in Alabama State University's student activism history.",

    nearbyLandmark: {
      name: "Thelma Rice Plaza"
    },

    image: "",
    mapLink: ""
  },


  // =====================================================
  // HARPER COUNCILL TRENHOLM HALL
  // =====================================================

  {
    id: 9,

    name: "Harper Councill Trenholm Hall",
    shortName: "H.C. Trenholm Hall",
    category: "academic",

    keywords: [
      "harper councill trenholm hall",
      "h.c. trenholm hall",
      "hc trenholm hall",
      "trenholm hall",
      "shop for success",
      "biology",
      "bio 1",
      "bio 2",
      "biology lab",
      "chemistry",
      "chemistry lab",
      "physics",
      "physics 1",
      "physics 2",
      "math",
      "mathematics",
      "computer science",
      "computer science advisor",
      "coding",
      "programming",
      "professor",
      "faculty office",
      "office hours",
      "research",
      "stem"
    ],

    description:
      "Harper Councill Trenholm Hall is a STEM-focused academic building in the Shop for Success area.",

    services: [
      "Biology classes",
      "Biology laboratory coursework",
      "Chemistry classes and laboratories",
      "Physics classes and laboratory coursework",
      "Mathematics classes",
      "Computer Science classes",
      "Computer Science advising",
      "Faculty offices",
      "Professor office hours",
      "Research facilities"
    ],

    landmarkArea: {
      name: "Shop for Success"
    },

    sections: [
      {
        name: "Biology",

        keywords: [
          "biology",
          "bio 1",
          "bio 2",
          "biology lab"
        ],

        description:
          "Biology courses and laboratory coursework are held in Harper Councill Trenholm Hall."
      },

      {
        name: "Science Laboratories",

        keywords: [
          "lab",
          "laboratory",
          "127",
          "128"
        ],

        description:
          "Harper Councill Trenholm Hall contains science laboratory spaces."
      },

      {
        name: "Chemistry",

        keywords: [
          "chemistry",
          "chemistry lab"
        ],

        description:
          "Chemistry coursework and laboratory instruction are supported within the building."
      },

      {
        name: "Physics",

        keywords: [
          "physics",
          "physics 1",
          "physics 2",
          "physics lab"
        ],

        description:
          "Physics courses and related laboratory coursework are associated with H.C. Trenholm Hall."
      },

      {
        name: "Mathematics",

        keywords: [
          "math",
          "mathematics"
        ],

        description:
          "Mathematics courses and faculty resources are available within the building."
      },

      {
        name: "Computer Science",

        keywords: [
          "computer science",
          "computer science advisor",
          "coding",
          "programming"
        ],

        description:
          "Computer Science classes, advising, and faculty resources are associated with H.C. Trenholm Hall."
      },

      {
        name: "Faculty Offices & Office Hours",

        keywords: [
          "professor",
          "faculty",
          "faculty office",
          "office hours"
        ],

        description:
          "Faculty and professor offices are located throughout the building.",

        studentTip:
          "Use your professor's office hours for one-on-one help with class material, assignments, grades, or additional support."
      }
    ],

    nameWarning:
      "Harper Councill Trenholm Hall is not the same building as G.W. Trenholm Hall.",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // PERCY J. VAUGHN, JR. COLLEGE OF BUSINESS
  // ADMINISTRATION / COBA
  // =====================================================

  {
    id: 10,

    name: "Percy J. Vaughn, Jr. College of Business Administration",
    shortName: "COBA",
    category: "academic",

    keywords: [
      "coba",
      "college of business",
      "college of business administration",
      "business building",
      "business major",
      "accounting",
      "finance",
      "management",
      "marketing",
      "cis",
      "computer information systems",
      "business advisor",
      "business advising",
      "internship",
      "internships",
      "jobs",
      "companies hiring",
      "business trip",
      "professional attire",
      "business attire",
      "dress code",
      "business club",
      "naba",
      "enactus",
      "american marketing association",
      "sbdc",
      "entrepreneurship",
      "certifications",
      "office hours"
    ],

    description:
      "The Percy J. Vaughn, Jr. College of Business Administration, commonly called COBA, is Alabama State University's primary academic home for business students.",

    services: [
      "Business classes",
      "Business advising",
      "Accounting & Finance",
      "Management",
      "Marketing",
      "Computer Information Systems",
      "Internship opportunities",
      "Employer opportunities",
      "Professional development",
      "Business organizations",
      "Entrepreneurship resources",
      "Faculty offices"
    ],

    sections: [
      {
        name: "Business Advising",

        keywords: [
          "advisor",
          "business advisor",
          "business advising"
        ],

        description:
          "Business students can receive academic advising and guidance related to their degree program."
      },

      {
        name: "Accounting & Finance",

        keywords: [
          "accounting",
          "finance"
        ],

        description:
          "COBA supports students studying Accounting and Finance."
      },

      {
        name: "Management & Marketing",

        keywords: [
          "management",
          "marketing"
        ],

        description:
          "Students studying Management and Marketing participate in coursework and professional opportunities through COBA."
      },

      {
        name: "Computer Information Systems",

        keywords: [
          "cis",
          "computer information systems",
          "information systems"
        ],

        description:
          "Computer Information Systems combines business education with technology and information systems.",

        studentTip:
          "CIS and Computer Science are different. CIS is associated with COBA, while Computer Science is associated with H.C. Trenholm Hall."
      },

      {
        name: "Professional Dress Days",

        keywords: [
          "professional attire",
          "business attire",
          "dress code",
          "tuesday",
          "wednesday"
        ],

        description:
          "COBA emphasizes professional appearance and workplace preparation.",

        studentTip:
          "Business students should keep professional clothing ready for professional dress days, presentations, interviews, networking events, and employer visits."
      },

      {
        name: "Internships & Employer Opportunities",

        keywords: [
          "internship",
          "internships",
          "job",
          "companies hiring",
          "recruiting"
        ],

        description:
          "COBA connects students with internships, employers, recruiting opportunities, and professional experiences."
      },

      {
        name: "Business Organizations & Clubs",

        keywords: [
          "business club",
          "business organizations",
          "naba",
          "enactus",
          "american marketing association",
          "aitp",
          "delta mu delta"
        ],

        description:
          "COBA offers business-focused student organizations that help students develop leadership and professional networks."
      },

      {
        name: "Small Business & Entrepreneurship Resources",

        keywords: [
          "sbdc",
          "small business",
          "entrepreneurship"
        ],

        description:
          "COBA is connected with resources supporting entrepreneurship and small-business development."
      },

      {
        name: "Faculty Offices & Office Hours",

        keywords: [
          "professor",
          "faculty",
          "office hours"
        ],

        description:
          "Business faculty offices are available for students who need academic assistance, course guidance, or one-on-one conversations with professors.",

        studentTip:
          "Use your professors' office hours for questions about assignments, grades, course material, career advice, internships, and professional development."
      }
    ],

    image: "",
    mapLink: ""
  },


  // =====================================================
  // THE EQUINOX
  // =====================================================

  {
    id: 11,

    name: "The Equinox",
    shortName: "Equinox",
    category: "landmark",

    keywords: [
      "equinox",
      "the equinox",
      "statue",
      "sculpture",
      "landmark",
      "shop for success",
      "academic mall",
      "academic area",
      "civil rights",
      "black educators",
      "presidents",
      "university leadership",
      "freedom",
      "freedom fighters",
      "black history",
      "african american history"
    ],

    description:
      "The Equinox is a major campus landmark located in the center of the Shop for Success academic area. The sculpture and surrounding monuments recognize African American history, leadership, education, civil rights, and the contributions of Black Americans.",

    landmarkArea: {
      name: "Shop for Success",

      description:
        "The Equinox sits in the middle of the Shop for Success area, surrounded by W.B. Patterson Hall, Edward Glenn McGhee Hall, William Hooper Councill Hall, and Harper Councill Trenholm Hall."
    },

    nearbyBuildings: [
      "W.B. Patterson Hall",
      "Edward Glenn McGhee Hall",
      "William Hooper Councill Hall",
      "Harper Councill Trenholm Hall"
    ],

    history: {
      year: 1974,

      artist:
        "Larry Godwin",

      description:
        "The Equinox was erected during Alabama State University's centennial period and was created as a symbolic outdoor sculpture recognizing African American contributions to the university, community, and nation."
    },

    represents: [
      "African American history and contributions",
      "Civil rights leadership",
      "Black educators",
      "University leadership",
      "Past and present university presidents",
      "The labor, sacrifice, and progress of Black Americans"
    ],

    studentTip:
      "The Equinox is one of the easiest landmarks to use when finding the Shop for Success buildings. If you can find the Equinox, you are already in the middle of Patterson, McGhee, Councill, and H.C. Trenholm Halls.",

    campusLore:
      "A popular campus saying warns students not to walk underneath the Equinox. According to campus lore, doing so may bring bad luck, such as not graduating on time or not finding your true love. This is a student tradition and superstition, not an official university claim.",

    funFact:
      "The Equinox was erected in 1974 and has become one of Alabama State University's recognizable campus landmarks.",

    image: "",
    mapLink: ""
  },

  // =====================================================
  // TULLIBODY FINE ARTS CENTER
  // =====================================================

  {
    id: 12,

    name: "Tullibody Fine Arts Center",
    shortName: "Tullibody",
    category: "academic",

    keywords: [
      "tullibody",
      "tullibody fine arts",
      "fine arts",
      "fine arts center",

      "dance",
      "dance major",
      "bfa dance",
      "ballet",
      "modern dance",
      "african dance",
      "hip hop",
      "jazz",
      "tap",

      "theatre",
      "theater",
      "theatre arts",
      "acting",
      "stage",
      "performance",
      "performances",
      "box office",
      "production",
      "costume",
      "costume shop",
      "makeup",
      "cosmetic room",

      "visual arts",
      "art",
      "art room",
      "art studio",
      "painting",
      "drawing",
      "ceramics",
      "sculpture",
      "printmaking",
      "photography",
      "digital art",
      "filmmaking",
      "graphic art",
      "adobe",
      "art computer lab",

      "music",
      "performing arts",
      "college of visual and performing arts",

      "scholarship",
      "dance scholarship",

      "the wiz",
      "dreamgirls",
      "dream girls",

      "professor",
      "faculty",
      "faculty office",
      "office hours"
    ],

    description:
      "Tullibody Fine Arts Center is one of Alabama State University's major visual and performing arts buildings. Students may come here for Dance, Theatre, Visual Arts, performances, production work, art studios, and other creative coursework and activities.",

    services: [
      "Dance classes and performance training",
      "Theatre Arts",
      "Visual Arts",
      "Art studios",
      "Art computer labs",
      "Theatre production support",
      "Costume and production resources",
      "Box Office",
      "Faculty offices",
      "Performance and creative arts activities"
    ],

    studentTip:
      "If you're a Dance, Theatre, Visual Arts, or performing arts student, Tullibody is an important building to learn early. Performance schedules, rehearsals, productions, and department opportunities may also be shared through your department and student email.",

    sections: [

      // =================================================
      // DANCE
      // =================================================

      {
        name: "Dance",

        keywords: [
          "dance",
          "dance major",
          "bfa dance",
          "ballet",
          "modern dance",
          "african dance",
          "hip hop",
          "jazz",
          "tap",
          "dance scholarship"
        ],

        description:
          "Dance students train in a range of performance styles and techniques through Alabama State University's visual and performing arts programs.",

        features: [
          "Ballet",
          "Modern dance",
          "African dance",
          "Hip hop",
          "Jazz",
          "Tap",
          "Performance training",
          "Dance scholarship opportunities"
        ],

        studentTip:
          "Dance students should watch department announcements closely for auditions, rehearsals, performances, scholarship opportunities, and other program requirements."
      },


      // =================================================
      // THEATRE
      // =================================================

      {
        name: "Theatre Arts",

        keywords: [
          "theatre",
          "theater",
          "acting",
          "stage",
          "performance",
          "production",
          "box office",
          "theatre office"
        ],

        description:
          "Tullibody supports Theatre Arts through classroom instruction, performance preparation, theatre administration, and production support.",

        features: [
          "Theatre classes",
          "Acting and performance",
          "Production support",
          "Box Office services",
          "Faculty and production staff offices"
        ],

        studentTip:
          "If you're attending or participating in a production, check performance announcements for the correct entrance, ticket information, rehearsal times, and call times."
      },


      // =================================================
      // BOX OFFICE & THEATRE OFFICES
      // =================================================

      {
        name: "Theatre Offices & Box Office",

        keywords: [
          "box office",
          "theatre office",
          "theater office",
          "tickets",
          "production manager",
          "theatre chair"
        ],

        description:
          "Theatre administrative and production offices are located in Tullibody Fine Arts Center.",

        features: [
          "Theatre department offices",
          "Box Office",
          "Production staff support"
        ]
      },


      // =================================================
      // COSTUME / MAKEUP / PRODUCTION
      // =================================================

      {
        name: "Costume & Production Support",

        keywords: [
          "costume",
          "costume shop",
          "makeup",
          "cosmetic room",
          "production",
          "wardrobe",
          "theatre production"
        ],

        description:
          "Theatre productions are supported by costume and production resources within the fine arts program.",

        studentTip:
          "You mentioned a cosmetic or makeup room in this building. We can add the exact room name and location later once you confirm it."
      },


      // =================================================
      // VISUAL ARTS
      // =================================================

      {
        name: "Visual Arts",

        keywords: [
          "visual arts",
          "art",
          "art room",
          "art studio",
          "painting",
          "drawing",
          "ceramics",
          "sculpture",
          "printmaking",
          "photography",
          "digital art",
          "filmmaking",
          "figure drawing",
          "mixed media"
        ],

        description:
          "Visual Arts students use Tullibody for studio-based and digital creative coursework.",

        features: [
          "Painting",
          "Drawing",
          "Ceramics",
          "Sculpture",
          "Printmaking",
          "Digital photography",
          "Filmmaking",
          "Digital art",
          "Figure drawing",
          "Mixed-media work",
          "Arts education"
        ]
      },


      // =================================================
      // ART TECHNOLOGY
      // =================================================

      {
        name: "Art Computer Labs & Creative Technology",

        keywords: [
          "art computer lab",
          "computer lab",
          "adobe",
          "digital art",
          "web design",
          "graphic art",
          "filmmaking",
          "photography"
        ],

        description:
          "Fine arts students have access to technology used for digital art, photography, filmmaking, and other creative coursework.",

        features: [
          "Art computer labs",
          "Adobe creative software",
          "Digital photography tools",
          "Digital art resources",
          "Creative technology coursework"
        ]
      },


      // =================================================
      // PERFORMANCES
      // =================================================

      {
        name: "Major Performances",

        keywords: [
          "performance",
          "performances",
          "the wiz",
          "dreamgirls",
          "dream girls",
          "musical",
          "play",
          "show"
        ],

        description:
          "Tullibody and ASU's performing arts programs host major student productions and performances throughout the academic year.",

        features: [
          "Musical theatre productions",
          "Stage performances",
          "Dance performances",
          "Student productions"
        ],

        studentTip:
          "Past campus productions have included shows such as The Wiz and Dreamgirls. Popular performances can draw large crowds, so students should pay attention to ticket and seating announcements."
      },


      // =================================================
      // BFA DANCE DISTINCTION
      // =================================================

      {
        name: "BFA Dance Program",

        keywords: [
          "bfa",
          "bfa dance",
          "dance degree",
          "dance program"
        ],

        description:
          "Alabama State University offers a Bachelor of Fine Arts pathway in Dance and is recognized for having a distinctive dance program within Alabama and among HBCUs.",

        studentTip:
          "If you're interested in Dance as a major, ask the department about BFA requirements, auditions, scholarships, performance expectations, and degree planning."
      },

      // =================================================
// SENIOR CAPSTONE PERFORMANCES
// =================================================

{
  name: "Senior Capstone Performances",

  keywords: [
    "senior capstone",
    "capstone",
    "senior performance",
    "graduating seniors",
    "senior showcase",
    "senior show",
    "capstone performance"
  ],

  description:
    "Each semester, graduating seniors present senior capstone performances that showcase the training, skills, and creative work they have developed throughout their program.",

  studentTip:
    "Senior capstone performances are a great opportunity for younger students to support graduating seniors and see the level of work they can work toward as they progress through the program."
},


      // =================================================
      // FACULTY OFFICES
      // =================================================

      {
        name: "Faculty Offices & Office Hours",

        keywords: [
          "professor",
          "professors",
          "faculty",
          "faculty office",
          "faculty offices",
          "office hours",
          "meet professor"
        ],

        description:
          "Faculty and staff offices are located within the fine arts academic area, giving students access to instructors, advisors, and department staff.",

        studentTip:
          "Use your professors' office hours for questions about performances, projects, critiques, assignments, auditions, or academic progress."
      }

    ],

    funFact:
      "Alabama State University's Dance program is one of only a small number of programs in Alabama and among HBCUs offering a Bachelor of Fine Arts in Dance.",

    image: "",
    mapLink: ""
  },

  // =====================================================
  // JOHN WILLIAM BEVERLY HALL
  // =====================================================

  {
    id: 13,

    name: "John William Beverly Hall",
    shortName: "Beverly Hall",
    category: "academic",

    keywords: [
      "john william beverly",
      "john w beverly",
      "beverly hall",
      "beverly",

      "social work",
      "social work major",
      "social worker",
      "bsw",
      "master of social work",
      "msw",

      "sociology",
      "sociology major",
      "social sciences",

      "criminal justice",
      "criminal justice major",
      "law enforcement",
      "corrections",
      "juvenile justice",

      "classroom",
      "classrooms",
      "lecture room",
      "lecture rooms",

      "faculty",
      "faculty office",
      "faculty offices",
      "professor",
      "professors",
      "office hours",

      "construction",
      "renovation",
      "renovations",
      "under construction",

      "health center",
      "health services",
      "student health",

      "historic building",
      "history",
      "science building",
      "anthropology museum",
      "darkroom",
      "photography"
    ],

    description:
      "John William Beverly Hall is a historic Alabama State University academic building associated with Social Work and the social sciences. University catalogs have identified Beverly Hall as housing Social Work, Sociology, Criminal Justice, classrooms, lecture rooms, and faculty offices. The building has also undergone major renovation work.",

    services: [
      "Social Work",
      "Sociology",
      "Criminal Justice",
      "Social Sciences",
      "Classrooms",
      "Lecture rooms",
      "Faculty offices",
      "Professor office hours"
    ],

    studentTip:
      "Beverly Hall has been undergoing renovation, so students should check current ASU announcements or confirm with their department before trying to enter the building or attend services there.",

    sections: [

      // =================================================
      // SOCIAL WORK
      // =================================================

      {
        name: "Social Work",

        keywords: [
          "social work",
          "social work major",
          "social worker",
          "bsw",
          "bachelor of social work",
          "msw",
          "master of social work",
          "social welfare",
          "field practicum",
          "field work"
        ],

        description:
          "Beverly Hall has been associated with Alabama State University's Department of Social Work. ASU offers undergraduate and graduate education designed to prepare students for careers serving individuals, families, and communities.",

        features: [
          "Bachelor of Social Work",
          "Social welfare education",
          "Field education and practical experience",
          "Faculty support",
          "Professional preparation"
        ],

        studentTip:
          "Social Work students should pay close attention to department information about field education, advising, internships, and building locations while Beverly Hall is being renovated."
      },


      // =================================================
      // SOCIOLOGY
      // =================================================

      {
        name: "Sociology",

        keywords: [
          "sociology",
          "sociology major",
          "social sciences",
          "soc"
        ],

        description:
          "Sociology and related social-science instruction have historically been associated with Beverly Hall."
      },


      // =================================================
      // CRIMINAL JUSTICE
      // =================================================

      {
        name: "Criminal Justice",

        keywords: [
          "criminal justice",
          "criminal justice major",
          "law enforcement",
          "corrections",
          "juvenile justice",
          "cj"
        ],

        description:
          "Criminal Justice and Social Sciences have been associated with Beverly Hall. Alabama State University's Criminal Justice program prepares students for areas including law enforcement, corrections, juvenile justice, government, and related careers.",

        features: [
          "Criminal Justice coursework",
          "Law enforcement preparation",
          "Corrections",
          "Juvenile justice",
          "Social-science education"
        ]
      },


      // =================================================
      // CLASSROOMS & LECTURE ROOMS
      // =================================================

      {
        name: "Classrooms & Lecture Rooms",

        keywords: [
          "class",
          "classes",
          "classroom",
          "classrooms",
          "lecture",
          "lecture room",
          "lecture rooms"
        ],

        description:
          "Beverly Hall contains academic classroom and lecture spaces that have supported Social Work and social-science instruction."
      },


      // =================================================
      // FACULTY OFFICES
      // =================================================

      {
        name: "Faculty Offices & Office Hours",

        keywords: [
          "professor",
          "professors",
          "faculty",
          "faculty office",
          "faculty offices",
          "office hours",
          "advisor",
          "advising"
        ],

        description:
          "Faculty offices have historically been located in Beverly Hall for students seeking academic assistance, advising, or meetings with professors.",

        studentTip:
          "Because of the building's renovation status, verify your professor's current office location before going to Beverly Hall."
      },


      // =================================================
      // CONSTRUCTION / RENOVATION
      // =================================================

      {
        name: "🚧 Renovation Status",

        keywords: [
          "construction",
          "under construction",
          "renovation",
          "renovations",
          "closed",
          "open",
          "when will beverly open"
        ],

        description:
          "Beverly Hall has undergone extensive renovation work. Its accessibility and the location of departments or services may change as the renovation project progresses.",

        studentTip:
          "Do not assume your class, professor, or department is physically inside Beverly Hall just because Beverly is listed as its traditional home. Check your current class schedule, department communication, and ASU announcements first."
      },


      // =================================================
      // POSSIBLE FUTURE HEALTH SERVICES
      // =================================================

      {
        name: "Future Health Services",

        keywords: [
          "health center",
          "health services",
          "student health",
          "clinic",
          "future health center"
        ],

        description:
          "Campus information indicates that Beverly Hall may have a future connection to student health services following renovation. Hornet Navigator will update this section once the university officially confirms the building's current health-service functions.",

        studentTip:
          "Until the university confirms that Student Health Services has opened in Beverly Hall, do not use Beverly Hall as your destination for medical care."
      },


      // =================================================
      // HISTORIC SCIENCE BUILDING
      // =================================================

      {
        name: "Historic Science Building",

        keywords: [
          "science building",
          "old science building",
          "science",
          "history",
          "historic"
        ],

        description:
          "Beverly Hall originally supported science and social-science education. Historical records describe classrooms for physical and social sciences as well as large lecture rooms.",

        features: [
          "Physical science classrooms",
          "Social science classrooms",
          "Large lecture rooms",
          "Photography facilities",
          "Anthropology collection"
        ]
      },


      // =================================================
      // HISTORIC PHOTOGRAPHY DARKROOMS
      // =================================================

      {
        name: "Historic Photography Darkrooms",

        keywords: [
          "darkroom",
          "darkrooms",
          "photography",
          "photo lab",
          "history"
        ],

        description:
          "When Beverly Hall was used for science instruction, the building included two darkrooms used for developing photographs."
      },


      // =================================================
      // HISTORIC ANTHROPOLOGY MUSEUM
      // =================================================

      {
        name: "Historic Anthropology Museum",

        keywords: [
          "anthropology",
          "anthropology museum",
          "museum",
          "old museum",
          "history"
        ],

        description:
          "Historical records indicate that Beverly Hall once contained a small anthropology museum on its lower level."
      }

    ],

    history: {
      year: 1939,

      description:
        "Beverly Hall was built in 1939 in the Georgian Revival style and was named for John William Beverly, the first Black person and first Alabama State alumnus to become president of the university. The building is recognized as a contributing resource in Alabama State University's historic district."
    },

    funFact:
      "Before becoming associated with Social Work and the social sciences, Beverly Hall supported science education and even contained photography darkrooms and a small anthropology museum.",

    image: "",
    mapLink: ""
  },

 // =====================================================
// GEORGE W. TRENHOLM HALL
// =====================================================

{
  id: 14,

  name: "George W. Trenholm Hall",
  shortName: "Trenholm Hall",
  category: "academic",

  keywords: [
    "george w trenholm",
    "george washington trenholm",
    "trenholm hall",
    "trenholm",

    "history",
    "history major",
    "political science",
    "political science major",
    "government",
    "politics",

    "humanities",
    "humanities department",

    "university college",
    "dean of university college",

    "thelma glass",
    "thelma m glass",
    "thelma glass auditorium",
    "auditorium",

    "old library",
    "former library",
    "library",
    "asu library",

    "martin luther king",
    "martin luther king jr",
    "mlk",
    "dr king",
    "dissertation",
    "doctoral dissertation",

    "civil rights",
    "civil rights movement",
    "montgomery bus boycott",
    "womens political council",
    "women's political council",

    "faculty",
    "faculty offices",
    "professor",
    "professors",
    "office hours"
  ],

  description:
    "George W. Trenholm Hall is a historic Alabama State University academic building that houses programs and offices including History and Political Science, Humanities, University College, and the Thelma M. Glass Auditorium. The building also has an important connection to ASU's library and Civil Rights history.",

  services: [
    "History and Political Science",
    "Humanities",
    "University College",
    "Thelma M. Glass Auditorium",
    "Academic offices",
    "Faculty offices",
    "Professor office hours"
  ],

  studentTip:
    "Do not confuse George W. Trenholm Hall with Harper Councill Trenholm Hall. They are different campus buildings. Check the full building name on your class schedule before heading to class.",

  sections: [

    // =================================================
    // HISTORY & POLITICAL SCIENCE
    // =================================================

    {
      name: "History & Political Science",

      keywords: [
        "history",
        "history major",
        "political science",
        "political science major",
        "government",
        "politics",
        "history and political science"
      ],

      description:
        "George W. Trenholm Hall houses Alabama State University's Department of History and Political Science, making the building important for students taking courses or seeking assistance in these academic areas.",

      features: [
        "History",
        "Political Science",
        "Academic coursework",
        "Faculty support",
        "Department resources"
      ],

      studentTip:
        "If you are taking a History or Political Science course, check your schedule carefully for the building and room number because Trenholm Hall may appear in your course information."
    },


    // =================================================
    // HUMANITIES
    // =================================================

    {
      name: "Humanities",

      keywords: [
        "humanities",
        "humanities department",
        "humanities class",
        "humanities classes"
      ],

      description:
        "The Department of Humanities is also associated with George W. Trenholm Hall."
    },


    // =================================================
    // UNIVERSITY COLLEGE
    // =================================================

    {
      name: "University College",

      keywords: [
        "university college",
        "dean of university college",
        "university college dean",
        "dean"
      ],

      description:
        "George W. Trenholm Hall includes the Office of the Dean of University College.",

      studentTip:
        "If you are directed to University College or the Dean of University College, Trenholm Hall is an important building to know."
    },


    // =================================================
    // THELMA M. GLASS AUDITORIUM
    // =================================================

    {
      name: "Thelma M. Glass Auditorium",

      keywords: [
        "thelma glass",
        "thelma m glass",
        "thelma glass auditorium",
        "auditorium",
        "event",
        "events",
        "program",
        "programs",
        "presentation",
        "presentations"
      ],

      description:
        "The Thelma M. Glass Auditorium is located in George W. Trenholm Hall and serves as an auditorium space for university programs, presentations, and other campus activities.",

      studentTip:
        "If an event announcement says Thelma M. Glass Auditorium, your destination is George W. Trenholm Hall."
    },


    // =================================================
    // THELMA M. GLASS & CIVIL RIGHTS
    // =================================================

    {
      name: "Thelma M. Glass & Civil Rights History",

      keywords: [
        "thelma glass",
        "thelma m glass",
        "civil rights",
        "civil rights movement",
        "womens political council",
        "women's political council",
        "montgomery bus boycott",
        "bus boycott"
      ],

      description:
        "The auditorium honors Thelma M. Glass, an Alabama State University professor and civil rights activist who was a prominent member of the Women's Political Council. The organization played an important role in the activism that helped lead to the Montgomery Bus Boycott.",

      studentTip:
        "The name of the auditorium connects the building directly to Alabama State University's important role in Montgomery's Civil Rights history."
    },


    // =================================================
    // FORMER ASU LIBRARY
    // =================================================

    {
      name: "Historic ASU Library",

      keywords: [
        "old library",
        "former library",
        "historic library",
        "library",
        "asu library",
        "trenholm library"
      ],

      description:
        "George W. Trenholm Hall originally served as Alabama State University's main library. The building was occupied as the university library in the late 1940s and remained the main library until library operations moved to what became the Levi Watkins Learning Center in 1978.",

      studentTip:
        "If you hear older alumni or historical information referring to ASU's old library, they may be referring to George W. Trenholm Hall rather than today's Levi Watkins Learning Center."
    },


    // =================================================
    // DR. MARTIN LUTHER KING JR.
    // =================================================

    {
      name: "Dr. Martin Luther King Jr. Connection",

      keywords: [
        "martin luther king",
        "martin luther king jr",
        "mlk",
        "dr king",
        "king",
        "dissertation",
        "doctoral dissertation",
        "civil rights"
      ],

      description:
        "While living in Montgomery, Dr. Martin Luther King Jr. used Alabama State University's library in what is now George W. Trenholm Hall while completing work on his doctoral dissertation.",

      studentTip:
        "This is one of the building's most important historical connections: the space that once served as ASU's library was used by Dr. Martin Luther King Jr. during his doctoral work."
    },


    // =================================================
    // LIBRARY MOVE TO LEVI WATKINS
    // =================================================

    {
      name: "From Trenholm Library to Levi Watkins",

      keywords: [
        "levi watkins",
        "levi watkins learning center",
        "library move",
        "old library",
        "new library",
        "1978"
      ],

      description:
        "George W. Trenholm Hall served as ASU's main library until 1978, when the university's main library operations moved to the building now known as the Levi Watkins Learning Center."
    },


    // =================================================
    // FACULTY OFFICES
    // =================================================

    {
      name: "Faculty Offices & Office Hours",

      keywords: [
        "faculty",
        "faculty office",
        "faculty offices",
        "professor",
        "professors",
        "office hours",
        "academic help",
        "help with class"
      ],

      description:
        "Faculty and academic offices are located within the building, allowing students to meet with professors and university personnel.",

      studentTip:
        "Use your professors' office hours when you need help with assignments, course material, academic planning, or questions about your classes."
    }

  ],

  history: {
    description:
      "George W. Trenholm Hall was constructed in the late 1940s and became Alabama State University's main library. The building later transitioned to academic and administrative uses while retaining an important place in ASU's educational and Civil Rights history."
  },

  funFact:
    "Before Levi Watkins Learning Center became ASU's main library, students used George W. Trenholm Hall as the university library. Dr. Martin Luther King Jr. also used the library while completing work on his doctoral dissertation.",

  image: "",
  mapLink: ""
},

  // =====================================================
  // DUNN-OLIVER ACADOME
  // =====================================================

  {
    id: 15,

    name: "Dunn-Oliver Acadome",
    shortName: "Acadome",
    category: "athletics",

    keywords: [
      "dunn oliver acadome",
      "dunn-oliver acadome",
      "acadome",
      "arena",
      "basketball arena",

      "basketball",
      "mens basketball",
      "men's basketball",
      "womens basketball",
      "women's basketball",
      "hornets basketball",
      "lady hornets basketball",

      "homecoming",
      "homecoming concert",
      "homecoming concerts",
      "concert",
      "concerts",
      "event",
      "events",
      "step show",
      "step shows",
      "band contest",
      "band contests",

      "physical education",
      "pe",
      "physical education class",
      "physical education classes",
      "lab",
      "laboratory",

      "banquet",
      "banquet facility",
      "banquet facilities",

      "vote",
      "voting",
      "polling",
      "polling place",
      "election",
      "elections",
      "shuttle",
      "voting shuttle",

      "cj dunn",
      "c j dunn",
      "charles johnson dunn",
      "james v oliver",
      "james oliver",

      "locker room",
      "locker rooms",
      "basketball mural",
      "legacy mural"
    ],

    description:
      "The Dunn-Oliver Acadome is a major multipurpose facility at Alabama State University used for athletics, academic activity, concerts, Homecoming events, large campus programs, and other university functions.",

    services: [
      "Men's Basketball",
      "Women's Basketball",
      "Concerts and Homecoming events",
      "Major campus programs",
      "Step shows and band contests",
      "Physical Education classes and laboratory space",
      "Banquet and event facilities",
      "Voting and civic-engagement activities when scheduled"
    ],

    studentTip:
      "The Acadome is one of ASU's biggest event spaces. If you're attending a basketball game, concert, Homecoming event, step show, or other major program, check your student email and event announcements for ticketing, entry, and parking information.",

    sections: [

      // =================================================
      // MEN'S & WOMEN'S BASKETBALL
      // =================================================

      {
        name: "Men's & Women's Basketball",

        keywords: [
          "basketball",
          "mens basketball",
          "men's basketball",
          "womens basketball",
          "women's basketball",
          "hornets basketball",
          "lady hornets basketball",
          "basketball game",
          "basketball games"
        ],

        description:
          "The Dunn-Oliver Acadome is the home arena for Alabama State University's men's and women's basketball teams.",

        features: [
          "Men's basketball home games",
          "Women's basketball home games",
          "Team locker rooms",
          "Basketball event seating",
          "Athletics facilities"
        ],

        studentTip:
          "For home basketball games, check current athletics announcements for game times, student entry procedures, and any student-ticket requirements."
      },


      // =================================================
      // HOMECOMING & CONCERTS
      // =================================================

      {
        name: "Homecoming Concerts & Major Events",

        keywords: [
          "homecoming",
          "homecoming concert",
          "homecoming concerts",
          "concert",
          "concerts",
          "event",
          "events",
          "show",
          "shows"
        ],

        description:
          "The Acadome is one of ASU's major venues for concerts, Homecoming programming, and large campus events.",

        features: [
          "Homecoming concerts",
          "Large campus events",
          "Major performances",
          "University programs"
        ],

        studentTip:
          "Popular Homecoming concerts and major events can fill quickly. Pay attention to ticket announcements, student entry rules, and event times."
      },


      // =================================================
      // STEP SHOWS & BAND CONTESTS
      // =================================================

      {
        name: "Step Shows & Band Events",

        keywords: [
          "step show",
          "step shows",
          "band contest",
          "band contests",
          "band event",
          "band events",
          "performance"
        ],

        description:
          "The Acadome is also used for step shows, band contests, and other large student and campus performances."
      },


      // =================================================
      // PHYSICAL EDUCATION
      // =================================================

      {
        name: "Physical Education Classes & Labs",

        keywords: [
          "physical education",
          "physical education class",
          "physical education classes",
          "pe",
          "pe class",
          "lab",
          "laboratory"
        ],

        description:
          "The Dunn-Oliver Acadome includes laboratory and instructional space that may be used for Physical Education classes and related academic activity.",

        studentTip:
          "If your class schedule lists the Acadome for a Physical Education course, check the exact room or instructional area before class because the building is much larger than just the basketball arena."
      },


      // =================================================
      // BANQUET & EVENT SPACE
      // =================================================

      {
        name: "Banquet & Event Facilities",

        keywords: [
          "banquet",
          "banquet room",
          "banquet facility",
          "banquet facilities",
          "event space",
          "reception"
        ],

        description:
          "The Acadome includes banquet and event facilities used for university functions, receptions, and other scheduled activities."
      },


      // =================================================
      // VOTING & CIVIC ENGAGEMENT
      // =================================================

      {
        name: "Voting & Civic Engagement",

        keywords: [
          "vote",
          "voting",
          "polling",
          "polling place",
          "election",
          "elections",
          "shuttle",
          "voting shuttle",
          "civic engagement"
        ],

        description:
          "The Acadome has been used for voting and election-related activity during certain election periods.",

        studentTip:
          "ASU may provide transportation or voter-access support during some election periods. Always check current university election announcements for the confirmed polling location, shuttle details, voting hours, and eligibility information."
      },


      // =================================================
      // LOCKER ROOMS & ATHLETICS FACILITIES
      // =================================================

      {
        name: "Athletics Facilities",

        keywords: [
          "locker room",
          "locker rooms",
          "athletics",
          "basketball facility",
          "team facility",
          "legacy mural",
          "basketball mural"
        ],

        description:
          "The Acadome includes athletics support spaces such as team locker rooms and areas recognizing Alabama State basketball history.",

        features: [
          "Men's team locker rooms",
          "Women's team locker rooms",
          "Basketball support facilities",
          "Legacy displays honoring ASU basketball history"
        ]
      }

    ],

    history: {
      year: 1992,

      description:
        "The Dunn-Oliver Acadome is a large multipurpose campus facility named in honor of legendary Alabama State basketball coaches C.J. Dunn and James V. Oliver."
    },

    funFact:
      "The Dunn-Oliver Acadome is one of Alabama State University's largest multipurpose facilities and can host basketball, concerts, major campus events, academic activity, and other large gatherings.",

    image: "",
    mapLink: ""
  },

  // =====================================================
// ROBERT CLINTON HATCH HALL
// =====================================================

{
  id: 16,

  name: "Robert Clinton Hatch Hall",
  shortName: "Hatch Hall",
  category: "academic",

  keywords: [
    "robert clinton hatch",
    "robert c hatch",
    "hatch hall",
    "hatch",
    "forensic science building",

    "forensic science",
    "forensics",
    "forensic chemistry",
    "forensic biology",
    "crime scene",
    "crime scene investigation",
    "evidence",
    "evidence examination",

    "mock courtroom",
    "moot courtroom",
    "courtroom",
    "court",
    "mock trial",

    "forensic laboratory",
    "forensic lab",
    "forensic labs",
    "laboratory",
    "lab",
    "instrumentation lab",
    "instrumentation laboratory",
    "criminal logistics lab",
    "criminal logistics laboratory",

    "alabama department of forensic sciences",
    "department of forensic sciences",
    "adfs",

    "criminal justice",
    "criminal justice major",
    "cj",
    "law enforcement",
    "crime",

    "research",
    "forensic research",
    "internship",
    "field experience",

    "faculty",
    "faculty office",
    "faculty offices",
    "professor",
    "professors",
    "office hours"
  ],

  description:
    "Robert Clinton Hatch Hall, also known as the Robert C. Hatch Forensic Science Building, is one of Alabama State University's major forensic science facilities. The building is shared by Alabama State University and the Alabama Department of Forensic Sciences and provides students with specialized classrooms, laboratories, and forensic training spaces.",

  services: [
    "Forensic Science",
    "Forensic Biology",
    "Forensic Chemistry",
    "Forensic science laboratories",
    "Mock courtroom",
    "Instrumentation laboratory",
    "Criminal logistics laboratory",
    "Evidence examination and laboratory instruction",
    "Research opportunities",
    "Faculty and staff offices"
  ],

  studentTip:
    "Hatch Hall is especially important for Forensic Science students. If your schedule lists Hatch, check your exact room or laboratory because the building contains several specialized instructional and research spaces.",

  sections: [

    // =================================================
    // FORENSIC SCIENCE
    // =================================================

    {
      name: "Forensic Science",

      keywords: [
        "forensic science",
        "forensics",
        "forensic chemistry",
        "forensic biology",
        "forensic science major",
        "forensic evidence",
        "evidence"
      ],

      description:
        "Hatch Hall is home to specialized facilities used by Alabama State University's Forensic Science programs. Students receive classroom and laboratory experience related to forensic evidence and scientific investigation.",

      features: [
        "Forensic Science instruction",
        "Forensic Biology",
        "Forensic Chemistry",
        "Laboratory experience",
        "Evidence examination",
        "Research opportunities"
      ],

      studentTip:
        "Forensic Science students may spend significant time in Hatch Hall for classes, laboratories, research, and other program activities."
    },


    // =================================================
    // MOCK COURTROOM
    // =================================================

    {
      name: "Mock Courtroom",

      keywords: [
        "mock courtroom",
        "moot courtroom",
        "courtroom",
        "court",
        "mock trial",
        "trial",
        "legal",
        "testimony"
      ],

      description:
        "Hatch Hall contains a mock courtroom that provides an instructional environment connected to forensic science, evidence, and the legal process.",

      studentTip:
        "The courtroom is an instructional space rather than a regular operating courthouse."
    },


    // =================================================
    // FORENSIC LABORATORIES
    // =================================================

    {
      name: "Forensic Science Laboratories",

      keywords: [
        "forensic lab",
        "forensic labs",
        "forensic laboratory",
        "forensic laboratories",
        "lab",
        "laboratory",
        "evidence",
        "evidence examination"
      ],

      description:
        "Hatch Hall contains state-of-the-art forensic science laboratories designed to give students hands-on experience with scientific techniques used to examine evidence.",

      features: [
        "Forensic laboratory instruction",
        "Evidence examination",
        "Scientific analysis",
        "Hands-on forensic training"
      ]
    },


    // =================================================
    // INSTRUMENTATION LAB
    // =================================================

    {
      name: "Instrumentation Laboratory",

      keywords: [
        "instrumentation",
        "instrumentation lab",
        "instrumentation laboratory",
        "forensic equipment",
        "scientific equipment",
        "lab equipment"
      ],

      description:
        "The building includes an instrumentation laboratory where students can learn about scientific equipment and analytical techniques used in forensic science."
    },


    // =================================================
    // CRIMINAL LOGISTICS LAB
    // =================================================

    {
      name: "Criminal Logistics Laboratory",

      keywords: [
        "criminal logistics",
        "criminal logistics lab",
        "criminal logistics laboratory",
        "evidence",
        "crime",
        "crime scene",
        "evidentiary material"
      ],

      description:
        "Hatch Hall includes a criminal logistics laboratory used for instruction in techniques related to examining evidentiary material."
    },


    // =================================================
    // ALABAMA DEPARTMENT OF FORENSIC SCIENCES
    // =================================================

    {
      name: "Alabama Department of Forensic Sciences",

      keywords: [
        "alabama department of forensic sciences",
        "department of forensic sciences",
        "adfs",
        "state forensic science",
        "forensic agency"
      ],

      description:
        "A unique feature of Hatch Hall is that the facility is shared by Alabama State University and the Alabama Department of Forensic Sciences.",

      studentTip:
        "This connection gives Hatch Hall a strong real-world forensic science environment in addition to its university teaching and research functions."
    },


    // =================================================
    // CRIMINAL JUSTICE CONNECTION
    // =================================================

    {
      name: "Criminal Justice Connection",

      keywords: [
        "criminal justice",
        "criminal justice major",
        "cj",
        "crime",
        "law enforcement",
        "court",
        "evidence"
      ],

      description:
        "Hatch Hall's mock courtroom, evidence-focused laboratories, and forensic facilities make it relevant to students studying areas that overlap with Criminal Justice and the legal system.",

      studentTip:
        "If you are a Criminal Justice student, always check your current schedule for your exact building. Criminal Justice coursework and faculty may be located in more than one campus building."
    },


    // =================================================
    // RESEARCH & FIELD EXPERIENCE
    // =================================================

    {
      name: "Research & Field Experience",

      keywords: [
        "research",
        "forensic research",
        "internship",
        "internships",
        "field experience",
        "senior research",
        "research project"
      ],

      description:
        "Forensic Science students can gain hands-on experience through laboratory work and research. Senior students may also have opportunities to complete research projects or field experiences such as internships.",

      studentTip:
        "If you are a Forensic Science major, ask your program faculty early about research and internship opportunities so you know what may be available before your senior year."
    },


    // =================================================
    // FACULTY & STAFF
    // =================================================

    {
      name: "Faculty & Staff Offices",

      keywords: [
        "faculty",
        "faculty office",
        "faculty offices",
        "professor",
        "professors",
        "staff",
        "office hours",
        "forensic science faculty",
        "lab manager"
      ],

      description:
        "Forensic Science faculty and staff offices are located in Hatch Hall, along with laboratory-management and program support spaces.",

      studentTip:
        "Use faculty office hours when you need help with coursework, laboratory requirements, research opportunities, internships, or academic planning."
    }

  ],

  history: {
    year: 2007,

    description:
      "Robert Clinton Hatch Hall opened in 2007 as a specialized forensic science facility. The approximately 50,000-square-foot building is shared by Alabama State University and the Alabama Department of Forensic Sciences."
  },

  funFact:
    "Hatch Hall gives ASU students access to a specialized forensic science environment that includes professional-style laboratories and a mock courtroom while sharing the facility with the Alabama Department of Forensic Sciences.",

  image: "",
  mapLink: ""
},

// =====================================================
// JOHN L. BUSKEY HEALTH SCIENCES CENTER
// =====================================================

{
  id: 17,

  name: "John L. Buskey Health Sciences Center",
  shortName: "Buskey Health Sciences",
  category: "academic",

  keywords: [
    "john l buskey",
    "john lee buskey",
    "buskey",
    "buskey health sciences",
    "health sciences center",
    "college of health sciences",
    "health science",
    "health sciences",

    "physical therapy",
    "pt",
    "dpt",
    "doctor of physical therapy",

    "occupational therapy",
    "ot",
    "otd",

    "rehabilitation studies",
    "rehabilitation services",
    "rehabilitation counseling",
    "addiction studies",

    "health information management",
    "him",

    "prosthetics",
    "orthotics",
    "prosthetics and orthotics",

    "maternal and child health",

    "gross anatomy",
    "gross anatomy lab",
    "anatomy",
    "anatomy lab",
    "cadaver",
    "cadavers",
    "donated body",
    "donated bodies",
    "body donation",

    "clinical skills",
    "clinical skills lab",
    "clinical lab",
    "laboratory",
    "labs",

    "biomechanics",
    "human motion",
    "analysis of human motion",
    "motion lab",

    "physical dysfunction",
    "assisted daily living",
    "adl",
    "therapeutic rehabilitation",

    "cardiovascular",
    "pulmonary",
    "clinical simulation",
    "simulation",
    "therapeutic exercise",
    "cybex",

    "computer lab",
    "student resource center",
    "student resource centers",
    "study area",

    "interdisciplinary clinic",
    "clinic",

    "research lab",
    "research labs",
    "research",

    "denise chapman",
    "denise chapman auditorium",
    "auditorium",

    "faculty",
    "faculty offices",
    "professor",
    "professors",
    "office hours",
    "dean",
    "college of health sciences dean"
  ],

  description:
    "John L. Buskey Health Sciences Center is the primary academic facility for Alabama State University's College of Health Sciences. The three-story, approximately 80,000-square-foot building contains classrooms, specialized clinical and research laboratories, student resource areas, an interdisciplinary clinic, faculty offices, and spaces designed for hands-on health sciences education.",

  services: [
    "College of Health Sciences",
    "Physical Therapy",
    "Occupational Therapy",
    "Rehabilitation Studies",
    "Health Information Management",
    "Prosthetics & Orthotics",
    "Maternal and Child Health",
    "Gross Anatomy Lab",
    "Clinical skills laboratories",
    "Research laboratories",
    "Human motion and biomechanics facilities",
    "Computer lab",
    "Student resource centers",
    "Interdisciplinary clinic",
    "Denise Chapman Auditorium",
    "Faculty and staff offices"
  ],

  studentTip:
    "Buskey is a large health sciences building with classrooms, offices, clinics, and specialized laboratories. Always check the exact room, suite, or laboratory listed on your schedule before class.",

  sections: [

    // =================================================
    // COLLEGE OF HEALTH SCIENCES
    // =================================================

    {
      name: "College of Health Sciences",

      keywords: [
        "college of health sciences",
        "health sciences",
        "health science",
        "dean",
        "college of health sciences dean"
      ],

      description:
        "John L. Buskey Health Sciences Center houses Alabama State University's College of Health Sciences and supports undergraduate, graduate, and doctoral health-related education.",

      studentTip:
        "If you are a Health Sciences student, Buskey may become one of your most important academic buildings for classes, laboratories, faculty meetings, and program activities."
    },


    // =================================================
    // PHYSICAL THERAPY
    // =================================================

    {
      name: "Physical Therapy",

      keywords: [
        "physical therapy",
        "pt",
        "dpt",
        "doctor of physical therapy",
        "physical therapist",
        "therapy"
      ],

      description:
        "Alabama State University's Doctor of Physical Therapy program uses Buskey Health Sciences Center for coursework, laboratory instruction, clinical preparation, and hands-on learning.",

      features: [
        "Doctor of Physical Therapy coursework",
        "Clinical skills training",
        "Biomechanics and motion laboratories",
        "Cardiovascular and pulmonary laboratories",
        "Clinical practice and simulation",
        "Therapeutic exercise facilities"
      ],

      studentTip:
        "Physical Therapy students should become familiar with Buskey's different laboratory spaces because coursework may move between classrooms, clinical labs, and specialized training areas."
    },


    // =================================================
    // OCCUPATIONAL THERAPY
    // =================================================

    {
      name: "Occupational Therapy",

      keywords: [
        "occupational therapy",
        "ot",
        "otd",
        "occupational therapist",
        "occupational therapy program"
      ],

      description:
        "Alabama State University's Occupational Therapy program is located in Buskey Health Sciences Center and provides classroom, laboratory, and clinical preparation for students pursuing occupational therapy.",

      features: [
        "Occupational Therapy education",
        "Clinical skills training",
        "Assisted daily living instruction",
        "Physical dysfunction laboratory experiences",
        "Faculty and program offices"
      ],

      studentTip:
        "Occupational Therapy faculty and staff are currently associated with Suite 211, but always verify the current room or office before visiting."
    },


    // =================================================
    // REHABILITATION STUDIES
    // =================================================

    {
      name: "Rehabilitation Studies",

      keywords: [
        "rehabilitation studies",
        "rehab studies",
        "rehabilitation services",
        "rehab services",
        "rehabilitation counseling",
        "rehab counseling",
        "addiction studies"
      ],

      description:
        "Buskey houses Alabama State University's Department of Rehabilitation Studies, including programs related to Rehabilitation Services and Rehabilitation Counseling.",

      features: [
        "Rehabilitation Services",
        "Rehabilitation Counseling",
        "Addiction Studies",
        "Clinical and academic preparation",
        "Faculty offices"
      ],

      studentTip:
        "Rehabilitation Studies faculty and staff are currently associated with Suite 313. Check current department information before visiting a specific professor."
    },


    // =================================================
    // PROSTHETICS & ORTHOTICS
    // =================================================

    {
      name: "Prosthetics & Orthotics",

      keywords: [
        "prosthetics",
        "prosthetic",
        "orthotics",
        "orthotic",
        "prosthetics and orthotics",
        "p&o"
      ],

      description:
        "Prosthetics and Orthotics is one of the specialized health sciences areas associated with Alabama State University's College of Health Sciences.",

      studentTip:
        "Students interested in careers involving prosthetic and orthotic patient care should know Buskey as an important College of Health Sciences facility."
    },


    // =================================================
    // HEALTH INFORMATION MANAGEMENT
    // =================================================

    {
      name: "Health Information Management",

      keywords: [
        "health information management",
        "him",
        "health information",
        "medical records",
        "simulated medical records"
      ],

      description:
        "Health Information Management is associated with the College of Health Sciences, and Buskey includes specialized resources such as a simulated medical records laboratory."
    },


    // =================================================
    // MATERNAL & CHILD HEALTH
    // =================================================

    {
      name: "Maternal & Child Health",

      keywords: [
        "maternal and child health",
        "maternal health",
        "child health",
        "mch"
      ],

      description:
        "Maternal and Child Health is among the health-related areas supported through Alabama State University's College of Health Sciences."
    },


    // =================================================
    // GROSS ANATOMY LAB
    // =================================================

    {
      name: "Gross Anatomy Lab",

      keywords: [
        "gross anatomy",
        "gross anatomy lab",
        "anatomy",
        "anatomy lab",
        "cadaver",
        "cadavers",
        "donated body",
        "donated bodies",
        "body donation",
        "human anatomy"
      ],

      description:
        "Buskey Health Sciences Center contains a Gross Anatomy Lab used to support advanced study of human anatomy as part of health sciences education.",

      studentTip:
        "The Gross Anatomy Lab is a specialized instructional environment. Students should follow all faculty instructions, laboratory rules, safety requirements, and standards of respect associated with anatomical study."
    },


    // =================================================
    // CLINICAL SKILLS LABS
    // =================================================

    {
      name: "Clinical Skills Laboratories",

      keywords: [
        "clinical skills",
        "clinical skills lab",
        "clinical lab",
        "clinical labs",
        "simulation",
        "clinical simulation"
      ],

      description:
        "Buskey contains six clinical skills laboratories that allow Health Sciences students to develop practical skills in controlled instructional environments.",

      features: [
        "Six clinical skills laboratories",
        "Hands-on instruction",
        "Clinical preparation",
        "Simulation and practical learning"
      ]
    },


    // =================================================
    // HUMAN MOTION & BIOMECHANICS
    // =================================================

    {
      name: "Human Motion & Biomechanics",

      keywords: [
        "human motion",
        "analysis of human motion",
        "motion lab",
        "biomechanics",
        "biomechanics lab",
        "movement analysis"
      ],

      description:
        "Buskey includes specialized facilities for studying biomechanics and human movement, supporting Physical Therapy and related health sciences education.",

      features: [
        "Analysis of Human Motion",
        "Biomechanics",
        "Movement assessment",
        "Health sciences research"
      ]
    },


    // =================================================
    // REHABILITATION LABS
    // =================================================

    {
      name: "Therapeutic Rehabilitation Labs",

      keywords: [
        "rehabilitation lab",
        "rehab lab",
        "therapeutic rehabilitation",
        "physical dysfunction",
        "assisted daily living",
        "adl"
      ],

      description:
        "The Health Sciences Center includes specialized rehabilitation facilities such as therapeutic rehabilitation labs and instructional spaces related to assisted daily living and physical dysfunction."
    },


    // =================================================
    // THERAPEUTIC EXERCISE
    // =================================================

    {
      name: "Therapeutic Exercise Facilities",

      keywords: [
        "therapeutic exercise",
        "exercise gym",
        "cybex",
        "cybex gym",
        "physical therapy gym",
        "rehab gym"
      ],

      description:
        "Physical Therapy students have access to therapeutic exercise facilities, including specialized equipment used for rehabilitation and clinical education."
    },


    // =================================================
    // INTERDISCIPLINARY CLINIC
    // =================================================

    {
      name: "Interdisciplinary Clinic",

      keywords: [
        "interdisciplinary clinic",
        "clinic",
        "health clinic",
        "clinical"
      ],

      description:
        "Buskey includes an interdisciplinary clinic designed to support health sciences education and collaboration across professional disciplines."
    },


    // =================================================
    // COMPUTER LAB & STUDENT RESOURCES
    // =================================================

    {
      name: "Computer Lab & Student Resource Centers",

      keywords: [
        "computer lab",
        "computers",
        "student resource center",
        "student resource centers",
        "study",
        "study area",
        "student resources"
      ],

      description:
        "The building includes a large general computer lab and three student resource centers that support Health Sciences students with academic work and study.",

      features: [
        "Large general computer lab",
        "Three student resource centers",
        "Academic support space",
        "Student study resources"
      ],

      studentTip:
        "These spaces can be useful when you have time between Health Sciences classes and need somewhere to work or study."
    },


    // =================================================
    // RESEARCH LABS
    // =================================================

    {
      name: "Research Laboratories",

      keywords: [
        "research",
        "research lab",
        "research labs",
        "research laboratory",
        "research laboratories"
      ],

      description:
        "Buskey contains four research laboratories supporting faculty and student research in health sciences.",

      features: [
        "Four research laboratories",
        "Faculty research",
        "Student research opportunities",
        "Health sciences research"
      ]
    },


    // =================================================
    // DENISE CHAPMAN AUDITORIUM
    // =================================================

    {
      name: "Denise Chapman Auditorium",

      keywords: [
        "denise chapman",
        "denise chapman auditorium",
        "chapman auditorium",
        "auditorium",
        "health sciences event",
        "open house"
      ],

      description:
        "Denise Chapman Auditorium is located in the Buskey Health Sciences Center and is used for College of Health Sciences programs, presentations, open houses, and other events.",

      studentTip:
        "If an event announcement lists Denise Chapman Auditorium, your destination is the John L. Buskey Health Sciences Center."
    },


    // =================================================
    // FACULTY & COLLEGE OFFICES
    // =================================================

    {
      name: "Faculty & College Offices",

      keywords: [
        "faculty",
        "faculty office",
        "faculty offices",
        "professor",
        "professors",
        "office hours",
        "dean",
        "college of health sciences dean",
        "advisor",
        "advising"
      ],

      description:
        "College of Health Sciences faculty, staff, program offices, and administrative offices are located throughout Buskey Health Sciences Center.",

      studentTip:
        "Use faculty office hours and program offices for help with coursework, clinical requirements, advising, fieldwork, research, and professional preparation."
    }

  ],

  funFact:
    "Buskey Health Sciences Center is an approximately 80,000-square-foot facility with 10 smart classrooms, six clinical skills laboratories, a Gross Anatomy Lab, research laboratories, student resource centers, and specialized rehabilitation and human-motion facilities.",

  image: "",
  mapLink: ""
},

// =====================================================
// MONTGOMERY INTERPRETIVE CENTER
// =====================================================

{
  id: 18,

  name: "Montgomery Interpretive Center",
  shortName: "Interpretive Center",
  category: "landmark",

  keywords: [
    "montgomery interpretive center",
    "interpretive center",
    "museum",
    "museum on campus",
    "free museum",
    "civil rights museum",

    "national park service",
    "nps",
    "national historic trail",

    "selma",
    "selma to montgomery",
    "selma to montgomery march",
    "selma to montgomery voting rights march",
    "voting rights march",
    "voting rights",
    "voting rights movement",
    "1965",

    "civil rights",
    "civil rights movement",
    "black history",
    "african american history",

    "student activism",
    "student activists",
    "student protests",
    "college students",
    "asu students",

    "martin luther king",
    "martin luther king jr",
    "mlk",
    "dr king",

    "city of st jude",
    "st jude",
    "march rally",

    "exhibits",
    "historical exhibits",
    "interactive exhibits",
    "life size exhibits",
    "museum figures",

    "film",
    "movie",
    "civil rights film",
    "20 minute film",
    "student protest film",

    "ranger",
    "park ranger",
    "ranger talk",

    "gift shop",
    "bookstore",
    "souvenirs",
    "books",

    "free admission",
    "free",
    "hours",
    "museum hours",
    "1521 harris way"
  ],

  description:
    "The Montgomery Interpretive Center is a National Park Service museum and visitor center located directly on Alabama State University's campus. The center tells the story of the final leg of the 1965 Selma to Montgomery Voting Rights March, student involvement in the Voting Rights Movement, and Montgomery's important role in Civil Rights history.",

  address:
    "1521 Harris Way, Montgomery, AL 36106",

  services: [
    "Free admission",
    "Civil Rights exhibits",
    "Selma to Montgomery Voting Rights March history",
    "Student activism exhibits",
    "Historical and interpretive displays",
    "Educational film",
    "Theater and auditorium",
    "National Park Service staff and ranger information",
    "Maps and visitor information",
    "Books, gifts, and souvenirs",
    "Accessible restrooms",
    "Wheelchair-accessible facilities",
    "Water bottle filling station"
  ],

  studentTip:
    "You do not have to wait for a class assignment to visit. Admission is free, and because the Montgomery Interpretive Center is located directly on ASU's campus, students can visit to learn more about ASU, Montgomery, and the Civil Rights Movement.",

  sections: [

    // =================================================
    // HOURS & FREE ADMISSION
    // =================================================

    {
      name: "Hours & Free Admission",

      keywords: [
        "hours",
        "museum hours",
        "interpretive center hours",
        "open",
        "closed",
        "free",
        "free admission",
        "admission",
        "price",
        "cost"
      ],

      description:
        "The Montgomery Interpretive Center is free to visit. No entrance fee or National Park pass is required.",

      features: [
        "Monday-Saturday: 9:00 AM-4:30 PM",
        "Sunday: Closed",
        "Free admission",
        "No entrance pass required"
      ],

      studentTip:
        "Hours can change for federal holidays, weather, or special circumstances, so check current National Park Service information before planning a visit during a holiday or university break."
    },


    // =================================================
    // SELMA TO MONTGOMERY MARCH
    // =================================================

    {
      name: "1965 Selma to Montgomery Voting Rights March",

      keywords: [
        "selma",
        "montgomery",
        "selma to montgomery",
        "selma to montgomery march",
        "voting rights march",
        "1965 march",
        "civil rights march",
        "voting rights"
      ],

      description:
        "The center interprets the final leg of the historic 1965 Selma to Montgomery Voting Rights March and helps visitors understand the people, events, and activism connected to the struggle for voting rights.",

      studentTip:
        "The Montgomery Interpretive Center is one of three National Park Service visitor centers connected to the Selma to Montgomery National Historic Trail."
    },


    // =================================================
    // STUDENT ACTIVISM
    // =================================================

    {
      name: "Student Activism & the Voting Rights Movement",

      keywords: [
        "student activism",
        "student activists",
        "student protest",
        "student protests",
        "college students",
        "asu students",
        "voting rights",
        "civil rights"
      ],

      description:
        "A major focus of the Montgomery Interpretive Center is the involvement of students in the Voting Rights Movement and the student protests that occurred in Montgomery during 1965.",

      studentTip:
        "This section is especially meaningful for ASU students because it connects college students and Montgomery directly to the history of the Voting Rights Movement."
    },


    // =================================================
    // CITY OF ST. JUDE
    // =================================================

    {
      name: "City of St. Jude Rally",

      keywords: [
        "city of st jude",
        "st jude",
        "rally",
        "march rally",
        "selma march",
        "fourth night"
      ],

      description:
        "The exhibits also interpret the rally held at the City of St. Jude during the fourth night of the Selma to Montgomery Voting Rights March."
    },


    // =================================================
    // CIVIL RIGHTS EXHIBITS
    // =================================================

    {
      name: "Civil Rights Exhibits",

      keywords: [
        "exhibit",
        "exhibits",
        "museum exhibits",
        "civil rights exhibits",
        "historical exhibits",
        "interactive exhibits",
        "displays",
        "life size exhibits",
        "museum figures"
      ],

      description:
        "The museum uses historical and interpretive exhibits to help visitors understand the people, events, and experiences surrounding the Voting Rights Movement and the Selma to Montgomery March.",

      studentTip:
        "Give yourself time to actually walk through and read the exhibits. The center is designed as an educational experience rather than simply a building to walk through quickly."
    },


    // =================================================
    // EDUCATIONAL FILM
    // =================================================

    {
      name: "Student Protest Film",

      keywords: [
        "film",
        "movie",
        "video",
        "20 minute film",
        "student protest film",
        "student protests",
        "theater",
        "auditorium"
      ],

      description:
        "Visitors can view a film of approximately 20 minutes focusing on student protests in Montgomery during March 1965.",

      studentTip:
        "If you have enough time during your visit, include the film instead of only walking through the exhibits."
    },


    // =================================================
    // NATIONAL PARK SERVICE
    // =================================================

    {
      name: "National Park Service",

      keywords: [
        "national park service",
        "nps",
        "park ranger",
        "ranger",
        "ranger talk",
        "national historic trail"
      ],

      description:
        "The Montgomery Interpretive Center is operated as part of the National Park Service's Selma to Montgomery National Historic Trail.",

      features: [
        "National Park Service staff",
        "Visitor information",
        "Maps",
        "Interpretive exhibits",
        "Educational programming",
        "Ranger orientation talks for groups"
      ],

      studentTip:
        "National Park Service staff can provide additional historical context and visitor information. Groups may also be able to arrange short ranger orientation talks."
    },


    // =================================================
    // VISITOR AMENITIES
    // =================================================

    {
      name: "Visitor Amenities",

      keywords: [
        "restroom",
        "restrooms",
        "water",
        "water bottle",
        "water bottle filling station",
        "wheelchair",
        "accessible",
        "accessibility",
        "parking",
        "gift shop",
        "bookstore",
        "souvenirs",
        "books"
      ],

      description:
        "The center provides several visitor amenities in addition to its museum exhibits and educational spaces.",

      features: [
        "Accessible restrooms",
        "Wheelchair accessibility",
        "Parking",
        "Water bottle filling station",
        "Maps and visitor information",
        "Books, gifts, and souvenirs",
        "Theater and auditorium"
      ]
    }

  ],

  history: {
    year: 1965,

    description:
      "The Montgomery Interpretive Center preserves and interprets the history surrounding the final stage of the 1965 Selma to Montgomery Voting Rights March, including student activism in Montgomery and the marchers' journey toward the Alabama State Capitol."
  },

  funFact:
    "ASU students have a National Park Service Civil Rights museum located directly on their own campus, and admission to the Montgomery Interpretive Center is free to everyone.",

  image: "",
  mapLink: ""
},

// =====================================================
// LIFE SCIENCE BUILDING
// =====================================================

{
  id: 19,

  name: "Life Science Building",
  shortName: "Life Science",
  category: "academic",

  keywords: [
    "life science",
    "life sciences",
    "life science building",
    "biology building",
    "science building",

    "biology",
    "biological sciences",
    "biology major",
    "pre health biology",
    "pre-health biology",
    "marine biology",

    "microbiology",
    "microbiology phd",
    "phd microbiology",
    "doctoral microbiology",

    "biomedical",
    "biomed",
    "biomedical research",
    "biomedical research and training",

    "molecular biology",
    "molecular biology lab",
    "molecular biology laboratory",

    "research",
    "research lab",
    "research labs",
    "research laboratory",
    "research opportunities",

    "mseip",
    "minority science engineering improvement program",
    "stem scholarship",
    "stem research",

    "seminar room",
    "classroom",
    "classrooms",
    "multimedia classroom",
    "lecture",

    "cold room",
    "cold rooms",
    "dark room",
    "dark rooms",

    "honor roll",
    "honors",
    "honors convocation",
    "honor roll pickup",
    "honors pickup",
    "honor roll certificate",
    "honors paper",
    "honors lanyard",
    "asu lanyard",

    "faculty",
    "faculty office",
    "faculty offices",
    "professor",
    "professors",
    "office hours",

    "college of stem",
    "stem",
    "stem office"
  ],

  description:
    "The Life Science Building is a major Alabama State University STEM facility focused on Biological Sciences, Microbiology, biomedical research, and scientific training. The five-floor building contains classrooms, molecular biology teaching laboratories, research laboratories, faculty offices, and specialized scientific facilities.",

  services: [
    "Biological Sciences",
    "Biology",
    "Pre-Health Biology",
    "Marine Biology",
    "Microbiology",
    "Microbiology Ph.D. Program",
    "Biomedical Research & Training",
    "Molecular Biology laboratories",
    "Scientific research laboratories",
    "MSEIP",
    "STEM research opportunities",
    "Multimedia classrooms",
    "Teaching and seminar spaces",
    "Faculty offices",
    "Honors recognition pickup when announced"
  ],

  studentTip:
    "Life Science is much larger than a regular classroom building. Always check your exact room number because classes, laboratories, research programs, faculty offices, and STEM resources are located throughout the building.",

  sections: [

    // =================================================
    // BIOLOGICAL SCIENCES
    // =================================================

    {
      name: "Biological Sciences",

      keywords: [
        "biology",
        "biological sciences",
        "biology major",
        "pre health biology",
        "pre-health biology",
        "marine biology",
        "biology class",
        "biology classes"
      ],

      description:
        "The Life Science Building houses Alabama State University's Biological Sciences programs and provides classroom, laboratory, research, and faculty spaces for students studying the biological sciences.",

      features: [
        "Biology",
        "Pre-Health Biology",
        "Marine Biology",
        "Microbiology",
        "Laboratory instruction",
        "Scientific research"
      ],

      studentTip:
        "Biology students should become familiar with Life Science early because classes, laboratories, professors, and research opportunities may all bring you back to this building."
    },


    // =================================================
    // MICROBIOLOGY
    // =================================================

    {
      name: "Microbiology & Ph.D. Research",

      keywords: [
        "microbiology",
        "microbiology phd",
        "phd microbiology",
        "doctoral microbiology",
        "microbiology research",
        "microbiology program"
      ],

      description:
        "Life Science houses Alabama State University's advanced Microbiology education and research, including the university's Ph.D. program in Microbiology.",

      features: [
        "Microbiology coursework",
        "Doctoral research",
        "Advanced scientific training",
        "Faculty mentorship",
        "Laboratory research"
      ],

      studentTip:
        "The Microbiology Ph.D. program currently lists program contacts in the Life Science Building. Always verify the current room before visiting a specific faculty or staff member."
    },


    // =================================================
    // BIOMEDICAL RESEARCH & TRAINING
    // =================================================

    {
      name: "Biomedical Research & Training",

      keywords: [
        "biomedical",
        "biomed",
        "biomedical research",
        "biomedical research and training",
        "medical research",
        "pre med research",
        "pre-med research",
        "research opportunity"
      ],

      description:
        "Biomedical Research and Training programs connect ASU students with scientific research, professional development, and opportunities related to medical, dental, pharmacy, graduate, and research careers.",

      features: [
        "Biomedical research opportunities",
        "Undergraduate research",
        "Summer research opportunities",
        "Professional preparation",
        "Medical and health-related research pathways"
      ],

      studentTip:
        "If you are interested in medical school, dental school, pharmacy, graduate school, or scientific research, ask about biomedical research opportunities early instead of waiting until your senior year."
    },


    // =================================================
    // MOLECULAR BIOLOGY LABS
    // =================================================

    {
      name: "Molecular Biology Teaching Laboratories",

      keywords: [
        "molecular biology",
        "molecular biology lab",
        "molecular biology labs",
        "molecular biology laboratory",
        "biology lab",
        "biology laboratory"
      ],

      description:
        "The Life Science Building contains specialized molecular biology teaching laboratories designed for hands-on scientific education and laboratory training."
    },


    // =================================================
    // RESEARCH LABORATORIES
    // =================================================

    {
      name: "Research Laboratories",

      keywords: [
        "research",
        "research lab",
        "research labs",
        "research laboratory",
        "biology research",
        "scientific research"
      ],

      description:
        "The building contains well-equipped research laboratories supporting faculty and student research in Biological Sciences, Microbiology, and related scientific fields.",

      studentTip:
        "Students interested in research should talk with professors and program coordinators about laboratory opportunities, research programs, and summer experiences."
    },


    // =================================================
    // MSEIP
    // =================================================

    {
      name: "Minority Science & Engineering Improvement Program (MSEIP)",

      keywords: [
        "mseip",
        "minority science engineering improvement program",
        "minority science",
        "stem scholarship",
        "stem research",
        "research scholarship",
        "scholarship"
      ],

      description:
        "The Minority Science and Engineering Improvement Program provides research training and STEM opportunities for eligible students. ASU currently lists MSEIP offices in the Life Science Building.",

      features: [
        "STEM research training",
        "Research opportunities",
        "Scholarship-related opportunities",
        "Faculty mentorship",
        "Professional development"
      ],

      studentTip:
        "ASU currently lists MSEIP in the Room 304-306 area. Verify the specific office listed in the current program announcement before submitting materials."
    },


    // =================================================
    // CLASSROOMS & SEMINAR SPACE
    // =================================================

    {
      name: "Classrooms & Seminar Space",

      keywords: [
        "classroom",
        "classrooms",
        "class",
        "classes",
        "seminar",
        "seminar room",
        "lecture",
        "multimedia classroom"
      ],

      description:
        "Life Science contains multimedia classrooms as well as a large teaching seminar space used for academic instruction and scientific education.",

      features: [
        "Multimedia classrooms",
        "Teaching seminar space",
        "Science instruction",
        "Academic presentations"
      ]
    },


    // =================================================
    // SPECIALIZED SCIENCE FACILITIES
    // =================================================

    {
      name: "Specialized Science Facilities",

      keywords: [
        "cold room",
        "cold rooms",
        "walk in cold room",
        "dark room",
        "dark rooms",
        "science facility",
        "research facility"
      ],

      description:
        "The Life Science Building includes specialized scientific facilities such as walk-in cold rooms and dark rooms that support laboratory and research activities."
    },


    // =================================================
    // HONORS CONVOCATION RECOGNITION PICKUP
    // =================================================

    {
      name: "🏆 Honors Convocation Recognition Pickup",

      keywords: [
        "honors",
        "honor roll",
        "honors convocation",
        "honor roll pickup",
        "honors pickup",
        "honor roll certificate",
        "honors paper",
        "congratulations paper",
        "honors recognition",
        "honors lanyard",
        "asu lanyard",
        "lanyard"
      ],

      description:
        "Students who qualify for Honor Roll recognition but do not attend Honors Convocation may be directed to the Life Science Building to pick up their academic recognition materials, including their recognition document and ASU honors lanyard.",

      studentTip:
        "The pickup location has been on the first floor toward the left after entering the building. The exact room number is not currently listed here, so check the Honors Convocation email or current university instructions before going."
    },


    // =================================================
    // COLLEGE OF STEM
    // =================================================

    {
      name: "College of STEM",

      keywords: [
        "college of stem",
        "stem",
        "science technology engineering mathematics",
        "stem office",
        "stem dean"
      ],

      description:
        "Alabama State University's College of Science, Technology, Engineering and Mathematics has offices associated with the Life Science Building.",

      studentTip:
        "ASU currently lists the College of STEM at Life Science Building Room 110. Verify current office information before visiting."
    },


    // =================================================
    // FACULTY OFFICES
    // =================================================

    {
      name: "Faculty Offices & Office Hours",

      keywords: [
        "faculty",
        "faculty office",
        "faculty offices",
        "professor",
        "professors",
        "office hours",
        "biology professor",
        "microbiology professor",
        "advisor",
        "advising"
      ],

      description:
        "Biological Sciences faculty, researchers, program staff, and other university personnel have offices throughout the Life Science Building.",

      studentTip:
        "Use your professors' office hours for help with science coursework, laboratory questions, research opportunities, graduate-school preparation, and academic planning."
    }

  ],

  history: {
    year: 2009,

    description:
      "The Life Science Building opened around 2009 as a major facility supporting Alabama State University's Biological Sciences programs, advanced research, and doctoral education in Microbiology."
  },

  funFact:
    "The Life Science Building is an approximately 85,000-square-foot, five-floor scientific facility with molecular biology teaching laboratories, research laboratories, multimedia classrooms, and specialized research spaces.",

  image: "",
  mapLink: ""
},

// =====================================================
// RALPH DAVID ABERNATHY HALL
// =====================================================

{
  id: 20,

  name: "Ralph David Abernathy Hall",
  shortName: "Abernathy Hall",
  category: "academic",

  keywords: [
    "ralph david abernathy",
    "ralph david abernathy hall",
    "ralph abernathy",
    "abernathy",
    "abernathy hall",
    "rda",
    "education building",

    "college of education",
    "education",
    "education major",
    "teacher",
    "teachers",
    "teacher education",
    "teacher preparation",
    "teaching",
    "future teacher",

    "early childhood education",
    "elementary education",
    "secondary education",
    "collaborative education",

    "curriculum and instruction",
    "counselor education",
    "counseling",
    "instructional support",
    "educational leadership",

    "teacher education center",
    "tec",
    "edtpa",
    "teacher certification",
    "educator certification",
    "certification",
    "praxis",

    "auditorium",
    "deshields auditorium",
    "vivian deshields",
    "vivian deshields auditorium",

    "great teachers memorial hall",
    "great teachers",
    "rotunda",

    "simulated classroom",
    "simulated classrooms",
    "research lab",
    "research labs",

    "computer lab",
    "faculty",
    "faculty offices",
    "professor",
    "office hours",

    "entrance",
    "front entrance",
    "back entrance",
    "event entrance",
    "stairs",
    "directions",

    "abernathy annex",
    "annex"
  ],

  description:
    "Ralph David Abernathy Hall is the large primary home of Alabama State University's College of Education. The building supports teacher preparation, Curriculum and Instruction, Counselor Education, certification services, faculty offices, simulated classrooms, research spaces, and major education-related programs.",

  services: [
    "College of Education",
    "Teacher preparation",
    "Curriculum & Instruction",
    "Counselor Education",
    "Teacher Education Center",
    "Educator Certification",
    "Simulated classrooms",
    "Research and development laboratories",
    "Computer lab",
    "Vivian DeShields Auditorium",
    "Great Teachers Memorial Hall",
    "Faculty and staff offices"
  ],

  studentTip:
    "⚠️ DO NOT CONFUSE ABERNATHY HALL WITH ABERNATHY ANNEX. The main Abernathy Hall is the larger building and is strongly associated with the College of Education and Vivian DeShields Auditorium. If your schedule specifically says 'Annex,' do not automatically come here.",

  sections: [

    // =================================================
    // ABERNATHY HALL VS ANNEX
    // =================================================

    {
      name: "⚠️ Abernathy Hall vs. Abernathy Annex",

      keywords: [
        "abernathy",
        "abernathy hall",
        "abernathy annex",
        "annex",
        "which abernathy",
        "wrong building",
        "confused"
      ],

      description:
        "Ralph David Abernathy Hall and Ralph David Abernathy Annex are two separate campus buildings.",

      studentTip:
        "Easy way to remember it: MAIN ABERNATHY = the big College of Education building + auditorium + stairs. ANNEX = a separate classroom building with its own entrance."
    },


    // =================================================
    // ENTRANCES & DIRECTIONS
    // =================================================

    {
      name: "Entrances & How to Find Main Abernathy",

      keywords: [
        "entrance",
        "front entrance",
        "back entrance",
        "event entrance",
        "stairs",
        "directions",
        "how to find abernathy",
        "main abernathy"
      ],

      description:
        "The main Abernathy Hall is the larger building in the Abernathy area. Students may use the front entrance for regular classes, while some events may direct students and guests to an entrance toward the back.",

      studentTip:
        "When approaching the Abernathy area, keep straight toward the larger building. Near the split, the direction toward the stairs and to the left leads toward the main Abernathy Hall. For some events, you may be directed around to a back entrance."
    },


    // =================================================
    // COLLEGE OF EDUCATION
    // =================================================

    {
      name: "College of Education",

      keywords: [
        "college of education",
        "education",
        "education major",
        "teacher",
        "teaching",
        "teacher preparation",
        "future teacher"
      ],

      description:
        "Ralph David Abernathy Hall is home to Alabama State University's College of Education and serves students preparing for careers in teaching, counseling, educational leadership, and other education-related professions.",

      features: [
        "Teacher preparation",
        "Education coursework",
        "Faculty offices",
        "Academic support",
        "Professional preparation"
      ],

      studentTip:
        "If your major involves becoming a teacher or working in education, Abernathy Hall may become one of your most important academic buildings."
    },


    // =================================================
    // CURRICULUM & INSTRUCTION
    // =================================================

    {
      name: "Curriculum & Instruction",

      keywords: [
        "curriculum and instruction",
        "curriculum",
        "instruction",
        "early childhood education",
        "elementary education",
        "secondary education",
        "collaborative education"
      ],

      description:
        "The Department of Curriculum and Instruction has faculty and academic programs located in Ralph David Abernathy Hall.",

      studentTip:
        "Curriculum and Instruction faculty offices are located throughout Abernathy Hall, so check the specific room number before visiting your professor."
    },


    // =================================================
    // TEACHER EDUCATION CENTER
    // =================================================

    {
      name: "Teacher Education Center",

      keywords: [
        "teacher education center",
        "tec",
        "teacher education",
        "edtpa",
        "computer lab",
        "teacher preparation"
      ],

      description:
        "The Teacher Education Center supports students completing requirements connected to teacher preparation and professional education.",

      features: [
        "Teacher Education support",
        "edTPA support",
        "Computer lab",
        "Teacher preparation resources"
      ],

      studentTip:
        "The Teacher Education Center is currently listed in Ralph Abernathy Hall Room 218. Always verify current office information before visiting."
    },


    // =================================================
    // EDUCATOR CERTIFICATION
    // =================================================

    {
      name: "Educator Certification",

      keywords: [
        "educator certification",
        "teacher certification",
        "certification",
        "professional certificate",
        "praxis",
        "edtpa"
      ],

      description:
        "Educator Certification services help College of Education students complete requirements related to professional educator certification.",

      studentTip:
        "ASU currently lists the Educator Certification Office in Ralph Abernathy Hall Room 211. Education majors approaching graduation should pay close attention to certification instructions and deadlines."
    },


    // =================================================
    // COUNSELOR EDUCATION
    // =================================================

    {
      name: "Counselor Education",

      keywords: [
        "counselor education",
        "counseling",
        "school counseling",
        "counselor",
        "counseling program"
      ],

      description:
        "Counselor Education faculty and instructional-support programs are also located in Ralph David Abernathy Hall.",

      studentTip:
        "Counselor Education faculty offices are located in the building. Check the current faculty directory for your professor's exact room."
    },


    // =================================================
    // VIVIAN DESHIELDS AUDITORIUM
    // =================================================

    {
      name: "Vivian DeShields Auditorium",

      keywords: [
        "auditorium",
        "deshields",
        "deshields auditorium",
        "vivian deshields",
        "vivian deshields auditorium",
        "event",
        "events",
        "program",
        "presentation"
      ],

      description:
        "Vivian DeShields Auditorium is the large auditorium located inside the main Ralph David Abernathy Hall and is used for university programs, presentations, discussions, and other events.",

      studentTip:
        "If an event announcement says Vivian DeShields Auditorium, go to the MAIN Ralph David Abernathy Hall — not Abernathy Annex."
    },


    // =================================================
    // SIMULATED CLASSROOMS
    // =================================================

    {
      name: "Simulated Classrooms & Education Labs",

      keywords: [
        "simulated classroom",
        "simulated classrooms",
        "education lab",
        "education labs",
        "research lab",
        "research labs",
        "teaching practice"
      ],

      description:
        "Abernathy Hall contains simulated classrooms and research and development laboratories that support hands-on teacher preparation and education research."
    },


    // =================================================
    // GREAT TEACHERS MEMORIAL HALL
    // =================================================

    {
      name: "Great Teachers Memorial Hall",

      keywords: [
        "great teachers",
        "great teachers memorial hall",
        "memorial hall",
        "rotunda",
        "teachers memorial"
      ],

      description:
        "The building includes a rotunda designated as the Great Teachers Memorial Hall, reflecting the building's focus on education and the teaching profession."
    },


    // =================================================
    // FACULTY OFFICES
    // =================================================

    {
      name: "Faculty Offices & Office Hours",

      keywords: [
        "faculty",
        "faculty offices",
        "professor",
        "professors",
        "office hours",
        "education professor",
        "advisor",
        "advising"
      ],

      description:
        "College of Education faculty and staff offices are located throughout Ralph David Abernathy Hall.",

      studentTip:
        "Use your professors' office hours for help with coursework, field experiences, internships, certification requirements, advising, and preparation for a career in education."
    }

  ],

  history: {
    year: 2009,

    description:
      "Ralph David Abernathy Hall opened in 2009 and was named for Alabama State University alumnus and Civil Rights leader Rev. Ralph David Abernathy. The large facility became the primary home of ASU's College of Education."
  },

  funFact:
    "Ralph David Abernathy Hall is one of Alabama State University's largest academic facilities and includes a major auditorium, simulated classrooms, research laboratories, and the Great Teachers Memorial Hall.",

  image: "",
  mapLink: ""
},


// =====================================================
// RALPH DAVID ABERNATHY ANNEX
// =====================================================

{
  id: 21,

  name: "Ralph David Abernathy Annex",
  shortName: "Abernathy Annex",
  category: "academic",

  keywords: [
    "ralph david abernathy annex",
    "ralph abernathy annex",
    "abernathy annex",
    "annex",
    "rda annex",

    "class",
    "classes",
    "classroom",
    "classrooms",

    "history",
    "history class",
    "history classes",

    "zelia stephens",
    "zelia stephens center",
    "zelia stephens early childhood center",
    "early childhood",
    "early childhood education",
    "preschool",
    "preschool class",
    "preschool classes",
    "children",
    "child development",

    "entrance",
    "side entrance",
    "side door",
    "right turn",
    "directions",
    "stairs",

    "abernathy",
    "abernathy hall",
    "college of education"
  ],

  description:
    "Ralph David Abernathy Annex is a separate academic building from the main Ralph David Abernathy Hall. The Annex is used for additional classroom and academic activities, and students may have courses assigned there even when the academic department itself is based in another campus building.",

  services: [
    "Academic classrooms",
    "History classes when scheduled",
    "Early Childhood Education activities",
    "Preschool and child-development learning activities",
    "Zelia Stephens-related university activities"
  ],

  studentTip:
    "⚠️ If your schedule says ABERNATHY ANNEX, make sure you go to the Annex — not the main Ralph David Abernathy Hall. A lot of students confuse the two, so read the full building name before heading to class.",

  sections: [

    // =================================================
    // ABERNATHY ANNEX VS MAIN HALL
    // =================================================

    {
      name: "⚠️ Abernathy Annex vs. Abernathy Hall",

      keywords: [
        "abernathy",
        "abernathy annex",
        "abernathy hall",
        "annex",
        "which abernathy",
        "wrong building",
        "confused"
      ],

      description:
        "Abernathy Annex is NOT the same building as the main Ralph David Abernathy Hall. The main building is strongly associated with the College of Education and Vivian DeShields Auditorium, while the Annex serves as a separate classroom and academic location.",

      studentTip:
        "Easy way to remember it: MAIN ABERNATHY = big building + auditorium + stairs. ANNEX = separate entrance to the right and another entrance along the side."
    },


    // =================================================
    // HOW TO FIND THE ANNEX
    // =================================================

    {
      name: "How to Find Abernathy Annex",

      keywords: [
        "annex entrance",
        "side entrance",
        "side door",
        "where is annex",
        "find annex",
        "directions",
        "stairs",
        "right turn"
      ],

      description:
        "Abernathy Annex has its own entrances and sits separately from the larger main Abernathy Hall.",

      studentTip:
        "When approaching the Abernathy area, look for the split near the stairs. Going left toward the stairs leads toward the main Abernathy Hall. Going right toward the area without the stairs leads toward an Annex entrance. The Annex also has a side door that students can see while walking up."
    },


    // =================================================
    // ACADEMIC CLASSROOMS
    // =================================================

    {
      name: "Academic Classrooms",

      keywords: [
        "class",
        "classes",
        "classroom",
        "classrooms",
        "course",
        "courses"
      ],

      description:
        "Abernathy Annex contains academic classroom space used for university courses.",

      studentTip:
        "Your department's main office does not necessarily tell you where every class will meet. Always follow the building and room listed on your actual course schedule."
    },


    // =================================================
    // HISTORY CLASSES
    // =================================================

    {
      name: "History Classes",

      keywords: [
        "history",
        "history class",
        "history classes",
        "history course",
        "history courses"
      ],

      description:
        "Some History courses may be scheduled in Abernathy Annex even though the Department of History and Political Science is associated with George W. Trenholm Hall.",

      studentTip:
        "If your History schedule says Abernathy Annex, go to the Annex. Do not automatically go to George W. Trenholm Hall just because you are taking a History class."
    },


    // =================================================
    // ZELIA STEPHENS / EARLY CHILDHOOD
    // =================================================

    {
      name: "Zelia Stephens & Early Childhood Education",

      keywords: [
        "zelia stephens",
        "zelia stephens center",
        "zelia stephens early childhood center",
        "early childhood",
        "early childhood education",
        "preschool",
        "preschool class",
        "preschool classes",
        "child development",
        "children"
      ],

      description:
        "Current campus use includes Zelia Stephens and Early Childhood Education-related activities in the Abernathy Annex, including learning experiences connected with preschool and early-childhood education.",

      studentTip:
        "Zelia Stephens-related locations and Early Childhood activities have changed over time. Follow your current professor, College of Education instructions, or class schedule for the exact room inside the Annex."
    }

  ],

  campusLore:
    "Students commonly confuse Abernathy Hall and Abernathy Annex because both names contain 'Abernathy.' The most important word to notice on your schedule is 'Annex.'",

  funFact:
    "A History class can be scheduled in Abernathy Annex even though ASU's History and Political Science department is associated with George W. Trenholm Hall — another reason to always check the exact building on your schedule.",

  image: "",
  mapLink: ""
},

// =====================================================
// AIR FORCE ROTC DETACHMENT 019
// =====================================================

{
  id: 22,

  name: "Air Force ROTC Detachment 019",
  shortName: "AFROTC Detachment 019",
  category: "services",

  keywords: [
    "air force rotc",
    "afrotc",
    "rotc",
    "detachment 019",
    "det 019",
    "air force rotc detachment 019",
    "department of aerospace studies",

    "air force",
    "space force",
    "officer",
    "commission",
    "commissioning",
    "military",

    "aerospace studies",
    "leadership laboratory",
    "leadership lab",
    "military leadership",
    "drill",
    "ceremonies",
    "customs and courtesies",

    "rotc scholarship",
    "air force scholarship",
    "scholarship",

    "new cadet",
    "cadet",
    "cadets",
    "in processing",
    "in-processing",
    "new cadet orientation",

    "physical fitness",
    "pt",
    "fitness training",
    "workout",

    "gym",
    "free gym",
    "student gym",
    "fitness center",
    "exercise",
    "weights",
    "weight room",
    "treadmill",
    "treadmills",
    "exercise bike",
    "exercise bikes",
    "stationary bike",
    "stationary bikes",

    "sign in",
    "student sign in",
    "asu student gym",

    "1300 carter hill road"
  ],

  description:
    "Air Force ROTC Detachment 019 is Alabama State University's Air Force ROTC unit and Department of Aerospace Studies. Students in the program complete military leadership and Aerospace Studies training while working toward a college degree and preparing for possible commissioning as officers in the U.S. Air Force or U.S. Space Force.",

  address:
    "1300 Carter Hill Road, Montgomery, AL",

  services: [
    "Air Force ROTC",
    "Aerospace Studies",
    "Leadership Laboratory",
    "Officer preparation",
    "Air Force and Space Force commissioning preparation",
    "ROTC scholarship information",
    "New cadet in-processing",
    "Physical fitness training",
    "Neighboring student fitness area"
  ],

  studentTip:
    "You do not have to assume the neighboring gym is only for ROTC students. ASU students may use the student fitness area next to the ROTC space by following the facility's sign-in and access rules.",

  sections: [

    // =================================================
    // AIR FORCE ROTC
    // =================================================

    {
      name: "Air Force ROTC Detachment 019",

      keywords: [
        "air force rotc",
        "afrotc",
        "rotc",
        "detachment 019",
        "det 019",
        "cadet",
        "cadets"
      ],

      description:
        "Detachment 019 provides Air Force ROTC training at Alabama State University and supports students interested in becoming officers in the U.S. Air Force or U.S. Space Force.",

      studentTip:
        "If you are interested in joining ROTC, visit or contact Detachment 019 early so you can understand enrollment, fitness, academic, and training requirements."
    },


    // =================================================
    // AEROSPACE STUDIES
    // =================================================

    {
      name: "Aerospace Studies",

      keywords: [
        "aerospace studies",
        "air force class",
        "rotc class",
        "military class",
        "aerospace"
      ],

      description:
        "Students in Air Force ROTC complete Aerospace Studies coursework while enrolled at the university.",

      features: [
        "Military leadership education",
        "Air Force and Space Force knowledge",
        "Officer development",
        "Professional preparation"
      ]
    },


    // =================================================
    // LEADERSHIP LABORATORY
    // =================================================

    {
      name: "Leadership Laboratory",

      keywords: [
        "leadership laboratory",
        "leadership lab",
        "lead lab",
        "military leadership",
        "drill",
        "ceremonies",
        "customs and courtesies"
      ],

      description:
        "Leadership Laboratory gives cadets practical experience in leadership, military customs and courtesies, drill, ceremonies, management, and professional development."
    },


    // =================================================
    // COMMISSIONING
    // =================================================

    {
      name: "Air Force & Space Force Officer Preparation",

      keywords: [
        "air force officer",
        "space force officer",
        "commission",
        "commissioning",
        "become officer",
        "military officer"
      ],

      description:
        "Students who successfully complete Air Force ROTC requirements may pursue commissioning as officers in the U.S. Air Force or U.S. Space Force.",

      studentTip:
        "ROTC participation involves academic, fitness, leadership, and military-training requirements, so interested students should speak directly with Detachment 019 about the current pathway."
    },


    // =================================================
    // SCHOLARSHIPS
    // =================================================

    {
      name: "ROTC Scholarships",

      keywords: [
        "rotc scholarship",
        "air force scholarship",
        "scholarship",
        "military scholarship",
        "tuition help"
      ],

      description:
        "Air Force ROTC students may have access to scholarship opportunities depending on eligibility, program requirements, and current scholarship availability.",

      studentTip:
        "Ask Detachment 019 directly about current scholarship options because eligibility and award availability can change."
    },


    // =================================================
    // NEW CADET IN-PROCESSING
    // =================================================

    {
      name: "New Cadet In-Processing",

      keywords: [
        "new cadet",
        "in processing",
        "in-processing",
        "new cadet orientation",
        "first week",
        "join rotc"
      ],

      description:
        "New cadets complete required in-processing and orientation activities with Detachment 019 when beginning the program.",

      studentTip:
        "New cadets should watch Air Force ROTC instructions carefully for reporting times, required documents, dress expectations, and first-week activities."
    },


    // =================================================
    // PHYSICAL FITNESS TRAINING
    // =================================================

    {
      name: "Physical Fitness Training",

      keywords: [
        "physical fitness",
        "pt",
        "fitness training",
        "rotc workout",
        "exercise",
        "fitness"
      ],

      description:
        "Physical fitness is an important part of Air Force ROTC training. ROTC fitness activities may take place at different ASU athletic or fitness areas depending on the current training schedule.",

      studentTip:
        "Do not assume every ROTC physical training session happens inside or beside Detachment 019. Follow the current cadet schedule for the correct fitness location."
    },


    // =================================================
    // STUDENT FITNESS AREA / GYM
    // =================================================

    {
      name: "Student Fitness Area / Gym",

      keywords: [
        "gym",
        "free gym",
        "student gym",
        "fitness center",
        "workout",
        "exercise",
        "weights",
        "weight room",
        "treadmill",
        "treadmills",
        "exercise bike",
        "exercise bikes",
        "stationary bike",
        "stationary bikes",
        "sign in",
        "free workout"
      ],

      description:
        "A student fitness area is located next to the ROTC space and provides exercise equipment for ASU students.",

      features: [
        "Free access for ASU students",
        "Student sign-in",
        "Treadmills",
        "Stationary and exercise bikes",
        "Weights and strength-training equipment",
        "General workout space"
      ],

      studentTip:
        "The gym is beside the ROTC area, but you do not have to be an ROTC cadet to use it. ASU students can use the facility by signing in and following the posted rules."
    },


    // =================================================
    // GYM ACCESS
    // =================================================

    {
      name: "Gym Access",

      keywords: [
        "gym access",
        "how to use gym",
        "sign in",
        "student id",
        "free gym",
        "gym hours"
      ],

      description:
        "ASU students can use the neighboring student fitness area without a separate gym membership.",

      studentTip:
        "Sign in when you arrive. Hours and access procedures may change, so check posted information at the fitness area before planning a workout."
    }

  ],

  history: {
    year: 1971,

    description:
      "Air Force ROTC Detachment 019 has served Alabama State University since 1971 and provides officer-development and Aerospace Studies training for students interested in the U.S. Air Force and U.S. Space Force."
  },

  funFact:
    "Detachment 019 combines university academics with military leadership development, while a student fitness area located beside the ROTC space gives ASU students access to workout equipment without requiring a separate gym membership.",

  image: "",
  mapLink: ""
},

// =====================================================
// THE ASU STADIUM
// =====================================================

{
  id: 23,

  name: "The ASU Stadium",
  shortName: "ASU Stadium",
  category: "athletics",

  keywords: [
    "asu stadium",
    "the asu stadium",
    "stadium",
    "football stadium",
    "hornet stadium",

    "football",
    "hornet football",
    "asu football",
    "football game",
    "football games",
    "home game",
    "home games",

    "student gate",
    "student entrance",
    "student entry",
    "student admission",
    "free football game",
    "free game",
    "student id",

    "visitor gate",
    "general admission",
    "visitor admission",
    "tickets",
    "ticket office",
    "football tickets",

    "homecoming",
    "homecoming game",
    "homecoming football",
    "homecoming ticket",

    "turkey day classic",
    "tdc",
    "football classic",

    "tailgate",
    "tailgating",
    "student tailgate",
    "visitor tailgate",
    "tailgate pass",

    "clear bag",
    "clear bag policy",
    "stadium bag",
    "bag policy",

    "parking",
    "game day parking",
    "parking pass",

    "concessions",
    "food",
    "game day",

    "black and gold",
    "black and gold game",
    "spring football game",

    "connection day",

    "band",
    "marching band",
    "mighty marching hornets",
    "halftime",

    "harris way",
    "gate"
  ],

  description:
    "The ASU Stadium is Alabama State University's on-campus football stadium and one of the university's largest gathering spaces. It is home to Hornet Football and hosts major athletic, student, Homecoming, and university events throughout the year.",

  services: [
    "Hornet Football",
    "Student game-day entry",
    "Ticket Office",
    "Homecoming football events",
    "Turkey Day Classic",
    "Tailgating when scheduled",
    "Black & Gold Spring Game",
    "Major university events",
    "Game-day parking",
    "Concessions and event services"
  ],

  studentTip:
    "For regular home football games, ASU students can enter with a valid student ID through the designated Student Gate. The student entrance is separate from general visitor entry, and the exact gate may vary by event, so follow current signs, university announcements, and event staff directions.",

  sections: [

    // =================================================
    // STUDENT GAME ENTRY
    // =================================================

    {
      name: "Student Game Entry",

      keywords: [
        "student gate",
        "student entrance",
        "student entry",
        "student admission",
        "student id",
        "free football",
        "free game",
        "football student ticket"
      ],

      description:
        "ASU students can attend regular home football games by presenting a valid Alabama State University student ID at the designated Student Gate.",

      features: [
        "Valid ASU student ID required",
        "Designated Student Gate",
        "Student entrance is separate from general visitor entry"
      ],

      studentTip:
        "Do not automatically follow the visitor line. Students normally have a separate designated entrance. The exact Student Gate can vary depending on the game, so follow game-day signs and staff instructions."
    },


    // =================================================
    // HOME GAME ADMISSION
    // =================================================

    {
      name: "Regular Home Games",

      keywords: [
        "home game",
        "home games",
        "regular home game",
        "free game",
        "student admission",
        "student id"
      ],

      description:
        "Regular home-game admission is available to currently enrolled ASU students with a valid student ID through the Student Gate.",

      studentTip:
        "Keep your student ID with you on game day. A screenshot, memory of your student number, or simply telling staff you are a student should not be treated as a replacement for the required valid ID."
    },


    // =================================================
    // SPECIAL EVENTS & HOMECOMING
    // =================================================

    {
      name: "Homecoming & Special Event Tickets",

      keywords: [
        "homecoming",
        "homecoming game",
        "homecoming football",
        "homecoming ticket",
        "special event",
        "ticketed event"
      ],

      description:
        "Homecoming and other special stadium events may use different admission and ticketing rules from regular home football games.",

      studentTip:
        "Do not assume your normal free student game admission applies to Homecoming or another special ticketed event. Check that year's Homecoming or event announcement for current student pricing and ticket requirements."
    },


    // =================================================
    // TICKET OFFICE
    // =================================================

    {
      name: "ASU Ticket Office",

      keywords: [
        "ticket office",
        "tickets",
        "football tickets",
        "stadium tickets",
        "visitor ticket",
        "game day ticket",
        "parking pass"
      ],

      description:
        "The ASU Ticket Office is located at the stadium's main entrance on Harris Way and handles ticketing for football and other university events.",

      features: [
        "Football tickets",
        "Season tickets",
        "Single-game tickets",
        "Game-day passes",
        "Parking passes"
      ],

      studentTip:
        "If you are purchasing tickets for a visitor or need help with ticketing, the Stadium Ticket Office is located at the main entrance on Harris Way."
    },


    // =================================================
    // STUDENT GATE VS VISITOR GATE
    // =================================================

    {
      name: "Student Gate vs. Visitor Entry",

      keywords: [
        "student gate",
        "visitor gate",
        "visitor entrance",
        "student entrance",
        "which gate",
        "what gate",
        "gate",
        "stadium entrance"
      ],

      description:
        "Students and general visitors may use different stadium entrances during football games and major events.",

      studentTip:
        "If you are an ASU student, look for the designated Student Gate instead of automatically entering with visitors. Staff and signage will direct you to the correct entrance for that particular game."
    },


    // =================================================
    // CLEAR BAG POLICY
    // =================================================

    {
      name: "⚠️ Clear Bag Policy",

      keywords: [
        "clear bag",
        "clear bag policy",
        "bag policy",
        "stadium bag",
        "purse",
        "backpack",
        "bags",
        "what can i bring"
      ],

      description:
        "ASU Stadium events may enforce the university's clear-bag and stadium security policies.",

      studentTip:
        "Bring an approved clear bag whenever possible. A bag that does not meet the current stadium or event policy may cause you to be delayed or denied entry. Check the current 'Know Before You Go' information before major games, Homecoming, and other stadium events."
    },


    // =================================================
    // TAILGATING
    // =================================================

    {
      name: "Tailgating",

      keywords: [
        "tailgate",
        "tailgating",
        "student tailgate",
        "visitor tailgate",
        "tailgate ticket",
        "tailgate pass",
        "tailgate rules"
      ],

      description:
        "Tailgating is part of the ASU game-day experience, but access, pricing, security, and entry requirements may vary by game or major event.",

      studentTip:
        "Student tailgate access may be available with a valid ASU ID depending on the event, while visitors may be required to purchase access. Tailgating rules are enforced, so check the current ASU tailgate guide before attending."
    },


    // =================================================
    // TAILGATE BAG RULES
    // =================================================

    {
      name: "Tailgate Security & Bags",

      keywords: [
        "tailgate bag",
        "tailgate clear bag",
        "tailgate security",
        "clear bag tailgate",
        "tailgate rules"
      ],

      description:
        "Tailgate areas may have security and bag restrictions similar to stadium entry requirements.",

      studentTip:
        "A clear bag is the safest choice for both the tailgate and stadium. Do not assume a bag allowed somewhere else on campus will automatically be allowed into a game-day tailgate or stadium area."
    },


    // =================================================
    // VISITORS
    // =================================================

    {
      name: "Visitor Admission",

      keywords: [
        "visitor",
        "visitors",
        "visitor ticket",
        "visitor admission",
        "guest",
        "guest ticket",
        "family",
        "friend"
      ],

      description:
        "Visitors and guests generally need the appropriate event ticket or pass rather than using student admission.",

      studentTip:
        "If family or friends are coming with you, check visitor ticket and tailgate requirements before game day. Your ASU student ID does not automatically provide free admission for your guests."
    },


    // =================================================
    // TURKEY DAY CLASSIC
    // =================================================

    {
      name: "Turkey Day Classic",

      keywords: [
        "turkey day classic",
        "tdc",
        "thanksgiving game",
        "football classic",
        "classic"
      ],

      description:
        "The Turkey Day Classic is one of Alabama State University's signature football traditions and has been part of ASU history since 1924.",

      studentTip:
        "Turkey Day Classic is a major event with larger crowds and event-specific rules. Check current tickets, parking, tailgating, and entry information before arriving."
    },


    // =================================================
    // BLACK & GOLD GAME
    // =================================================

    {
      name: "Black & Gold Spring Football Game",

      keywords: [
        "black and gold",
        "black & gold",
        "black and gold game",
        "spring game",
        "spring football",
        "football spring game"
      ],

      description:
        "The stadium hosts Alabama State University's traditional Black & Gold spring football game, giving fans a chance to see the Hornets before the fall season."
    },


    // =================================================
    // BAND & GAME DAY ATMOSPHERE
    // =================================================

    {
      name: "Band & Game-Day Experience",

      keywords: [
        "band",
        "marching band",
        "mighty marching hornets",
        "halftime",
        "game day",
        "football atmosphere"
      ],

      description:
        "Football games at ASU Stadium are also major campus traditions featuring student spirit, marching-band performances, halftime entertainment, and the Hornet game-day atmosphere."
    },


    // =================================================
    // PARKING
    // =================================================

    {
      name: "Game-Day Parking",

      keywords: [
        "parking",
        "game day parking",
        "football parking",
        "parking pass",
        "stadium parking"
      ],

      description:
        "Football games and major stadium events may use special parking arrangements and parking passes.",

      studentTip:
        "Game-day traffic and parking can be very different from a normal class day. Check current parking instructions before driving toward the stadium, especially during Homecoming and the Turkey Day Classic."
    },


    // =================================================
    // MAJOR CAMPUS EVENTS
    // =================================================

    {
      name: "Major University Events",

      keywords: [
        "event",
        "events",
        "connection day",
        "major event",
        "campus event",
        "stadium event"
      ],

      description:
        "The ASU Stadium is used for more than football and may host major university programs, student activities, recruitment events, and other large gatherings.",

      studentTip:
        "Gate assignments can change depending on the event. Always follow the entrance listed in the specific event announcement."
    }

  ],

  history: {
    year: 2012,

    description:
      "The ASU Stadium opened on Alabama State University's campus in 2012 and became the home of Hornet Football and many of the university's largest athletic and community events."
  },

  funFact:
    "The ASU Stadium is not just a football venue. It is also a major gathering place for Homecoming traditions, university events, spring football, and other large campus experiences.",

  image: "",
  mapLink: ""
},

// =====================================================
// STING SHOP & ASU STADIUM TICKET OFFICE
// =====================================================

{
  id: 24,

  name: "Sting Shop & ASU Stadium Ticket Office",
  shortName: "Sting Shop",
  category: "services",

  keywords: [
    "sting shop",
    "the sting shop",
    "asu sting shop",

    "ticket office",
    "asu ticket office",
    "stadium ticket office",
    "box office",

    "tickets",
    "ticket",
    "buy tickets",
    "purchase tickets",
    "event tickets",

    "football tickets",
    "game tickets",
    "football game tickets",
    "visitor tickets",
    "guest tickets",
    "visitor game ticket",
    "home game tickets",

    "homecoming",
    "homecoming tickets",
    "homecoming concert",
    "homecoming concert tickets",
    "concert tickets",

    "probate",
    "probate ticket",
    "probate tickets",
    "greek probate",
    "greek show",
    "greek event",
    "nphc",

    "parking pass",
    "parking passes",
    "game day parking",

    "clear bag",
    "clear bags",
    "approved clear bag",
    "stadium clear bag",
    "bag policy",

    "stadium chair",
    "stadium chairs",

    "asu stadium",
    "stadium",
    "harris way"
  ],

  description:
    "The Sting Shop and ASU Stadium Ticket Office serve as an important ticketing location near ASU Stadium. Students and visitors may come here for football and event ticketing, parking passes, and other game-day needs. The location may also be used for ticket sales or distribution for major student events when announced by the university.",

  services: [
    "ASU Stadium Ticket Office",
    "Football tickets",
    "Visitor and guest tickets",
    "Event ticketing",
    "Parking passes",
    "Homecoming ticketing when announced",
    "Homecoming concert ticketing when announced",
    "Probate ticketing when announced",
    "Game-day assistance",
    "ASU-approved clear bags when available",
    "Stadium accessories when available"
  ],

  studentTip:
    "If you hear that tickets are being sold or distributed at the Sting Shop, remember that it is connected with the ASU Stadium Ticket Office area. For Homecoming concerts, probates, and other special student events, always check the current announcement because the ticket location can change from one event to another.",

  sections: [

    // =================================================
    // STING SHOP
    // =================================================

    {
      name: "The Sting Shop",

      keywords: [
        "sting shop",
        "the sting shop",
        "asu sting shop",
        "stadium shop"
      ],

      description:
        "The Sting Shop operates in connection with the ASU Stadium Ticket Office and provides students, visitors, and game-day guests with access to selected stadium and event-related services.",

      studentTip:
        "The Sting Shop is closely connected with stadium ticketing, so it is a useful place to know before football season, Homecoming, and other major ASU events."
    },


    // =================================================
    // ASU STADIUM TICKET OFFICE
    // =================================================

    {
      name: "ASU Stadium Ticket Office",

      keywords: [
        "ticket office",
        "stadium ticket office",
        "asu ticket office",
        "box office",
        "tickets",
        "buy ticket",
        "buy tickets"
      ],

      description:
        "The ASU Stadium Ticket Office handles ticketing for Alabama State University football games and other ticketed university events.",

      features: [
        "Football ticket sales",
        "Event ticketing",
        "Visitor ticket assistance",
        "Parking passes",
        "Game-day ticketing assistance"
      ],

      studentTip:
        "If you are trying to purchase a ticket for someone who is not an ASU student, the Stadium Ticket Office is an important place to check."
    },


    // =================================================
    // VISITOR & GUEST FOOTBALL TICKETS
    // =================================================

    {
      name: "Visitor & Guest Football Tickets",

      keywords: [
        "visitor ticket",
        "visitor tickets",
        "guest ticket",
        "guest tickets",
        "football ticket",
        "football tickets",
        "game ticket",
        "game tickets",
        "family ticket",
        "friend ticket"
      ],

      description:
        "Visitors, family members, friends, and other guests who do not qualify for ASU student admission generally need the appropriate ticket for football games and other ticketed stadium events.",

      studentTip:
        "Your ASU student ID does not automatically give free admission to your guests. If someone is visiting you for a football game, check current visitor ticket prices and purchasing instructions before game day."
    },


    // =================================================
    // STUDENT FOOTBALL ADMISSION
    // =================================================

    {
      name: "ASU Student Football Admission",

      keywords: [
        "student football ticket",
        "student game ticket",
        "student admission",
        "student id",
        "free football game",
        "student gate"
      ],

      description:
        "ASU students generally use their valid student ID for admission to regular home football games rather than purchasing a standard visitor ticket.",

      studentTip:
        "For regular home games, take your valid ASU student ID to the designated Student Gate. Special events such as Homecoming may have different ticketing requirements."
    },


    // =================================================
    // HOMECOMING CONCERT TICKETS
    // =================================================

    {
      name: "Homecoming Concert Tickets",

      keywords: [
        "homecoming",
        "homecoming concert",
        "homecoming concert ticket",
        "homecoming concert tickets",
        "concert",
        "concert ticket",
        "concert tickets"
      ],

      description:
        "The Sting Shop or Stadium Ticket Office may be used for Homecoming concert ticket sales or distribution when designated in the university's current Homecoming instructions.",

      studentTip:
        "Do not wait until the concert to figure out your ticket. Homecoming ticket locations, prices, pickup procedures, and student requirements can change each year, so check the current Homecoming announcement."
    },


    // =================================================
    // PROBATE TICKETS
    // =================================================

    {
      name: "Probate & Greek Event Tickets",

      keywords: [
        "probate",
        "probate ticket",
        "probate tickets",
        "greek probate",
        "greek show",
        "greek event",
        "nphc",
        "fraternity probate",
        "sorority probate"
      ],

      description:
        "The Sting Shop or Stadium Ticket Office may serve as a ticket sales or pickup location for probate and other major Greek-letter organization events when announced.",

      studentTip:
        "Probates can draw large crowds. Check the official event announcement for the current ticket location, price, sale time, and entry requirements instead of assuming tickets will always be distributed from the same place."
    },


    // =================================================
    // CLEAR BAGS
    // =================================================

    {
      name: "Clear Bags & Stadium Entry Items",

      keywords: [
        "clear bag",
        "clear bags",
        "approved clear bag",
        "stadium clear bag",
        "bag policy",
        "where to buy clear bag",
        "buy clear bag"
      ],

      description:
        "The Sting Shop has offered stadium-approved clear bags during game-day operations, giving students and visitors a place to check for an appropriate bag before entering ASU Stadium.",

      studentTip:
        "If you realize you need a clear bag before a stadium event, check the Sting Shop. Availability is not guaranteed, so bringing an approved clear bag with you ahead of time is still the safer option."
    },


    // =================================================
    // STADIUM CHAIRS & ACCESSORIES
    // =================================================

    {
      name: "Stadium Chairs & Game-Day Accessories",

      keywords: [
        "stadium chair",
        "stadium chairs",
        "seat",
        "stadium seat",
        "game day accessories"
      ],

      description:
        "The Sting Shop has offered stadium-appropriate items such as approved stadium chairs during game-day operations.",

      studentTip:
        "Stadium rules can restrict what types of seats, bags, and other items are allowed inside. Check the current stadium policy before purchasing or bringing an accessory."
    },


    // =================================================
    // PARKING PASSES
    // =================================================

    {
      name: "Game-Day Parking Passes",

      keywords: [
        "parking pass",
        "parking passes",
        "football parking",
        "game day parking",
        "stadium parking"
      ],

      description:
        "The Stadium Ticket Office may handle parking passes associated with football games and other major stadium events.",

      studentTip:
        "Game-day parking can operate differently from normal campus parking. Check whether your event requires a separate parking pass before driving to the stadium."
    },


    // =================================================
    // SPECIAL EVENT TICKETING
    // =================================================

    {
      name: "Special Event Ticketing",

      keywords: [
        "event ticket",
        "event tickets",
        "special event",
        "student event",
        "campus event",
        "ticket pickup",
        "ticket distribution"
      ],

      description:
        "Major ASU events may use the Sting Shop or Stadium Ticket Office for ticket sales, pickup, or distribution depending on the event.",

      studentTip:
        "Always read the current event flyer, email, or university announcement. Just because one event used the Sting Shop for tickets does not mean every event will."
    },


    // =================================================
    // HOURS
    // =================================================

    {
      name: "Ticket Office & Sting Shop Hours",

      keywords: [
        "hours",
        "sting shop hours",
        "ticket office hours",
        "when open",
        "open",
        "closed"
      ],

      description:
        "Ticket Office and Sting Shop availability may depend on regular business hours, football schedules, and special university events.",

      studentTip:
        "Hours can change for game days, Homecoming, holidays, and special events. Check current ASU ticketing information before making a special trip."
    }

  ],

  campusLore:
    "Students often associate the Sting Shop with major-event ticket runs, especially around football season, Homecoming, and popular student events. The exact ticket location can change, so the current event announcement should always come first.",

  funFact:
    "The Sting Shop is more than a ticketing stop. It has also offered stadium-approved items such as clear bags and stadium chairs, making it useful when preparing for game day.",

  image: "",
  mapLink: ""
},

// =====================================================
// BARBARA WILLIAMS SOFTBALL COMPLEX
// =====================================================

{
  id: 25,

  name: "Barbara Williams Softball Complex",
  shortName: "Softball Complex",
  category: "athletics",

  keywords: [
    "barbara williams",
    "barbara williams softball complex",
    "softball complex",
    "softball field",
    "softball",
    "asu softball",
    "lady hornets softball",
    "softball game",
    "softball games",
    "home softball game",
    "stinger classic",
    "student admission",
    "student id",
    "free game",
    "free softball game"
  ],

  description:
    "Barbara Williams Softball Complex is the on-campus home of Alabama State University Softball. The facility hosts Lady Hornets home games, tournaments, and other softball events throughout the season.",

  services: [
    "ASU Softball home games",
    "Lady Hornets Softball",
    "Softball tournaments",
    "Stinger Classic",
    "Student attendance",
    "Special softball events"
  ],

  studentTip:
    "Current ASU students may receive free admission to regular home athletic events with a valid ASU student ID. Bring your current student ID and check the specific game or tournament information in case special admission rules apply.",

  sections: [

    // =================================================
    // SOFTBALL HOME FIELD
    // =================================================

    {
      name: "Home of ASU Softball",

      keywords: [
        "softball",
        "asu softball",
        "lady hornets",
        "lady hornets softball",
        "softball game",
        "softball games"
      ],

      description:
        "Barbara Williams Softball Complex is the home field for Alabama State University's softball program.",

      studentTip:
        "If you are going to an ASU softball game, this is the complex you want — not Wheeler-Watkins Baseball Complex."
    },


    // =================================================
    // STUDENT ADMISSION
    // =================================================

    {
      name: "Student Admission",

      keywords: [
        "student admission",
        "student id",
        "free admission",
        "free game",
        "free softball",
        "softball ticket"
      ],

      description:
        "ASU students may receive complimentary admission to regular home athletic events by presenting a valid student ID.",

      studentTip:
        "Bring your valid ASU student ID with you. Special tournaments, championships, or other ticketed events may use different admission rules."
    },


    // =================================================
    // STINGER CLASSIC
    // =================================================

    {
      name: "Stinger Classic & Tournaments",

      keywords: [
        "stinger classic",
        "softball tournament",
        "softball tournaments",
        "tournament"
      ],

      description:
        "Barbara Williams Softball Complex hosts ASU softball tournaments and special events in addition to regular-season home games.",

      studentTip:
        "Tournament schedules can include several games in one day, so check the current softball schedule before heading to the complex."
    },


    // =================================================
    // BARBARA WILLIAMS
    // =================================================

    {
      name: "Who Was Barbara Williams?",

      keywords: [
        "barbara williams",
        "who is barbara williams",
        "women athletics",
        "women's athletics",
        "asu athletics history"
      ],

      description:
        "Barbara Williams was a pioneering figure in Alabama State University athletics. After attending ASU from 1968 to 1972 during a period when the university did not offer women's sports programs, she later returned and became ASU's first coordinator of women's athletics.",

      features: [
        "First coordinator of women's athletics at ASU",
        "Former women's basketball head coach",
        "Former track coach",
        "Advocate for women's athletic opportunities"
      ]
    }

  ],

  history: {
    year: 2012,

    description:
      "Barbara Williams Softball Complex opened in February 2012, bringing Alabama State University's softball program onto campus for home competition. The approximately $1.6 million facility was named in honor of ASU women's athletics pioneer Barbara Williams."
  },

  funFact:
    "Barbara Williams helped create athletic opportunities for women at ASU and coached both basketball and track. Her women's basketball teams compiled a 95-23 record during her five seasons as head coach.",

  image: "",
  mapLink: ""
},


// =====================================================
// WHEELER-WATKINS BASEBALL COMPLEX
// =====================================================

{
  id: 26,

  name: "Wheeler-Watkins Baseball Complex",
  shortName: "Baseball Complex",
  category: "athletics",

  keywords: [
    "wheeler watkins",
    "wheeler-watkins",
    "wheeler watkins baseball complex",
    "baseball complex",
    "baseball field",
    "baseball",
    "asu baseball",
    "hornets baseball",
    "baseball game",
    "baseball games",
    "home baseball game",
    "herbert wheeler",
    "larry watkins",
    "student admission",
    "student id",
    "free baseball game",
    "video board"
  ],

  description:
    "Wheeler-Watkins Baseball Complex is the on-campus home of Alabama State University Baseball. The facility hosts Hornets home baseball games and is located directly across the street from Barbara Williams Softball Complex.",

  services: [
    "ASU Baseball home games",
    "Hornets Baseball",
    "Student attendance",
    "Baseball events",
    "Video board"
  ],

  studentTip:
    "Baseball and softball are played at separate complexes. Wheeler-Watkins is BASEBALL. Barbara Williams is SOFTBALL. The two facilities are located across the street from one another.",

  sections: [

    // =================================================
    // BASEBALL HOME FIELD
    // =================================================

    {
      name: "Home of ASU Baseball",

      keywords: [
        "baseball",
        "asu baseball",
        "hornets baseball",
        "baseball game",
        "baseball games",
        "home baseball"
      ],

      description:
        "Wheeler-Watkins Baseball Complex is the home field for Alabama State University's baseball program."
    },


    // =================================================
    // STUDENT ADMISSION
    // =================================================

    {
      name: "Student Admission",

      keywords: [
        "student admission",
        "student id",
        "free admission",
        "free baseball",
        "free baseball game",
        "baseball ticket"
      ],

      description:
        "ASU students may receive complimentary admission to regular home athletic events with a valid student ID.",

      studentTip:
        "Bring your valid ASU student ID. Special tournaments, championships, or ticketed events may have separate admission requirements."
    },


    // =================================================
    // FINDING THE RIGHT COMPLEX
    // =================================================

    {
      name: "Baseball vs. Softball Complex",

      keywords: [
        "baseball vs softball",
        "wrong field",
        "which complex",
        "softball complex",
        "barbara williams"
      ],

      description:
        "Wheeler-Watkins Baseball Complex and Barbara Williams Softball Complex are separate athletic facilities located across the street from each other.",

      studentTip:
        "Easy way to remember it: Wheeler-Watkins = BASEBALL. Barbara Williams = SOFTBALL."
    },


    // =================================================
    // VIDEO BOARD
    // =================================================

    {
      name: "Baseball Video Board",

      keywords: [
        "video board",
        "videoboard",
        "scoreboard",
        "baseball scoreboard"
      ],

      description:
        "Wheeler-Watkins Baseball Complex received an upgraded LED video board featuring video, graphics, and an inning-by-inning scoreboard."
    },


    // =================================================
    // WHEELER & WATKINS
    // =================================================

    {
      name: "Herbert Wheeler & Larry Watkins",

      keywords: [
        "herbert wheeler",
        "larry watkins",
        "wheeler",
        "watkins",
        "baseball history"
      ],

      description:
        "The complex is named in honor of former ASU baseball coaches Herbert Wheeler and Larry Watkins, two major figures in the history of Hornets Baseball.",

      studentTip:
        "Larry Watkins spent decades with ASU as a player and coach and became the university's all-time baseball coaching wins leader."
    }

  ],

  history: {
    year: 2011,

    description:
      "The approximately $3.9 million Wheeler-Watkins Baseball Complex was completed in 2011 and dedicated in 2012. Its opening brought Alabama State baseball back to the university's campus for the first time since 1996."
  },

  funFact:
    "Wheeler-Watkins is named after two generations of ASU baseball leadership: Herbert Wheeler coached the Hornets until 1981, and his former player and assistant Larry Watkins succeeded him as head coach in 1982.",

  image: "",
  mapLink: ""
},


// =====================================================
// ASU SOCCER COMPLEX
// =====================================================

{
  id: 27,

  name: "ASU Soccer Complex",
  shortName: "Soccer Complex",
  category: "athletics",

  keywords: [
    "asu soccer complex",
    "soccer complex",
    "soccer field",
    "soccer",
    "asu soccer",
    "lady hornets soccer",
    "soccer game",
    "soccer games",
    "home soccer game",
    "women's soccer",
    "womens soccer",
    "swac soccer",
    "student admission",
    "student id",
    "free soccer game",
    "asu stadium"
  ],

  description:
    "ASU Soccer Complex is the on-campus home of Alabama State University Soccer. The natural-grass facility is located on the east side of campus near The ASU Stadium and hosts Lady Hornets home soccer matches.",

  services: [
    "ASU Soccer home matches",
    "Lady Hornets Soccer",
    "Student attendance",
    "Soccer events",
    "SWAC competition"
  ],

  studentTip:
    "Do not go to Barbara Williams Softball Complex looking for soccer. ASU Soccer has its own separate complex near The ASU Stadium.",

  sections: [

    // =================================================
    // SOCCER HOME FIELD
    // =================================================

    {
      name: "Home of ASU Soccer",

      keywords: [
        "soccer",
        "asu soccer",
        "lady hornets soccer",
        "women's soccer",
        "womens soccer",
        "soccer game",
        "soccer games"
      ],

      description:
        "ASU Soccer Complex serves as the home field for Alabama State University's women's soccer program."
    },


    // =================================================
    // STUDENT ADMISSION
    // =================================================

    {
      name: "Student Admission",

      keywords: [
        "student admission",
        "student id",
        "free admission",
        "free soccer",
        "free soccer game",
        "soccer ticket"
      ],

      description:
        "ASU students may receive complimentary admission to regular home athletic events with a valid student ID.",

      studentTip:
        "Bring your valid ASU student ID when attending. Championships, tournaments, or other special events may have different admission rules."
    },


    // =================================================
    // LOCATION
    // =================================================

    {
      name: "Finding the Soccer Complex",

      keywords: [
        "where is soccer",
        "soccer location",
        "soccer field location",
        "asu stadium",
        "east campus"
      ],

      description:
        "The ASU Soccer Complex is located on the east side of Alabama State University's campus near The ASU Stadium.",

      studentTip:
        "If you're already familiar with The ASU Stadium area, you're in the right part of campus. Look specifically for the Soccer Complex rather than entering the football stadium."
    },


    // =================================================
    // SWAC HISTORY
    // =================================================

    {
      name: "SWAC Soccer History",

      keywords: [
        "swac",
        "swac soccer",
        "soccer championship",
        "eastern division",
        "soccer history"
      ],

      description:
        "The ASU Soccer Complex opened in 2012, and in 2013 it hosted the first SWAC Eastern Division Championship in the history of the ASU soccer program."
    }

  ],

  history: {
    year: 2012,

    description:
      "ASU Soccer Complex opened in 2012 as an on-campus natural-grass home for Alabama State University Soccer."
  },

  funFact:
    "Just one year after the Soccer Complex opened, ASU hosted the program's first SWAC Eastern Division Championship there in 2013.",

  image: "",
  mapLink: ""
},

// =====================================================
// GEORGE HUBERT LOCKHART GYMNASIUM
// =====================================================

{
  id: 28,

  name: "George Hubert Lockhart Gymnasium",
  shortName: "Lockhart Gym",
  category: "athletics",

  keywords: [
    "george hubert lockhart",
    "george hubert lockhart gymnasium",
    "george lockhart",
    "lockhart",
    "lockhart gym",
    "lockhart gymnasium",

    "gym",
    "student gym",
    "athlete gym",
    "workout",
    "fitness",
    "student workout",
    "weights",
    "weight room",
    "exercise",

    "asu shirt",
    "asu attire",
    "workout attire",
    "gym clothes",

    "student gym hours",
    "gym hours",
    "recreation hours",
    "student recreation",

    "volleyball",
    "asu volleyball",
    "volleyball game",
    "volleyball games",
    "home volleyball game",
    "lady hornets volleyball",

    "basketball",
    "intramural basketball",
    "intermediate basketball",
    "student basketball",
    "student basketball games",
    "basketball coach",
    "student coach",

    "dance",
    "dance event",
    "dance events",
    "dance organization",
    "dance organizations",
    "student dance",

    "norman walton",
    "norman walton aquatic center",
    "norman aquatic center",
    "aquatic center",
    "pool",
    "swimming pool",
    "swim",
    "swimming",
    "pool party",
    "pool parties",

    "athletics office",
    "athletics offices",
    "volleyball office",
    "soccer office",
    "track office",
    "track and field office",

    "study lab",
    "study labs",
    "academic study lab",
    "student athlete study",

    "basketball practice",
    "practice gym",
    "team practice",

    "860 university drive north"
  ],

  description:
    "George Hubert Lockhart Gymnasium is an Alabama State University athletics and recreation facility used for varsity sports, student recreation, intramural activities, athletic offices, academic support, and campus events. The building is also home to the Norman Walton Aquatic Center.",

  address:
    "860 University Drive North, Montgomery, AL 36106",

  services: [
    "Student recreation and workout access",
    "Varsity athletics training",
    "ASU Volleyball home matches",
    "Basketball practice space",
    "Intramural student basketball",
    "Dance organization events",
    "Norman Walton Aquatic Center",
    "Student pool events when scheduled",
    "Athletics offices",
    "Academic study labs"
  ],

  studentTip:
    "Lockhart is shared by ASU students and varsity athletic teams, so general student workout access may be limited to designated recreation hours. Students should check current hours and facility rules before going to work out.",

  sections: [

    // =================================================
    // STUDENT WORKOUT ACCESS
    // =================================================

    {
      name: "Student Workout Access",

      keywords: [
        "student gym",
        "student workout",
        "workout",
        "gym",
        "fitness",
        "weights",
        "exercise",
        "student recreation",
        "gym access"
      ],

      description:
        "ASU students may use Lockhart Gym for recreational workouts during designated student-access periods when the facility is not reserved for athletic-team activity.",

      studentTip:
        "Because varsity teams also use Lockhart, student workout hours may be limited or change around team practices, games, and special events. Check the current recreation schedule before going."
    },


    // =================================================
    // WORKOUT ATTIRE
    // =================================================

    {
      name: "Workout Attire",

      keywords: [
        "asu shirt",
        "asu attire",
        "gym clothes",
        "workout clothes",
        "workout attire",
        "dress code"
      ],

      description:
        "Students using Lockhart for recreation may be required to follow facility-specific workout attire rules.",

      studentTip:
        "Students have been required to wear ASU-branded attire, such as an ASU shirt, for recreational gym access. Because facility rules may change, check posted requirements before entering."
    },


    // =================================================
    // VARSITY ATHLETICS USE
    // =================================================

    {
      name: "Varsity Athletics Use",

      keywords: [
        "athletes",
        "student athletes",
        "athlete gym",
        "team practice",
        "basketball practice",
        "practice gym",
        "varsity athletics"
      ],

      description:
        "Lockhart Gym is heavily used by Alabama State University athletic programs for practices, training, competition, and team activities.",

      features: [
        "Volleyball competition",
        "Basketball practice",
        "Athletic training use",
        "Team activities"
      ],

      studentTip:
        "If a varsity team is using the gym, recreational student access may be restricted until the scheduled team activity ends."
    },


    // =================================================
    // ASU VOLLEYBALL
    // =================================================

    {
      name: "ASU Volleyball",

      keywords: [
        "volleyball",
        "asu volleyball",
        "lady hornets volleyball",
        "volleyball game",
        "volleyball games",
        "home volleyball"
      ],

      description:
        "Lockhart Gymnasium is one of the primary competition venues for Alabama State University's volleyball program and hosts Lady Hornets home matches.",

      studentTip:
        "If your event information lists Lockhart Gymnasium for volleyball, this is the correct athletics facility. Some ASU volleyball matches may also be scheduled at the Dunn-Oliver Acadome, so check the current schedule."
    },


    // =================================================
    // INTRAMURAL / STUDENT BASKETBALL
    // =================================================

    {
      name: "Intramural Student Basketball",

      keywords: [
        "intramural basketball",
        "intermediate basketball",
        "student basketball",
        "student basketball game",
        "student basketball games",
        "basketball league",
        "basketball coach",
        "student coach"
      ],

      description:
        "Lockhart is also used for student basketball activities and intramural-style games where ASU students can participate in organized competition.",

      features: [
        "Student basketball games",
        "Intramural competition",
        "Student participation",
        "Student coaching and team leadership opportunities"
      ],

      studentTip:
        "Students interested in playing, coaching, or helping organize teams should watch Student Life and recreation announcements for registration, schedules, and participation requirements."
    },


    // =================================================
    // DANCE ORGANIZATION EVENTS
    // =================================================

    {
      name: "Dance Organization Events",

      keywords: [
        "dance",
        "dance event",
        "dance events",
        "dance organization",
        "dance organizations",
        "student dance",
        "dance performance"
      ],

      description:
        "Student dance organizations and other campus groups may use Lockhart Gym for dance events, performances, practices, and student activities when scheduled.",

      studentTip:
        "Event use can change the normal gym schedule, so check campus announcements before going to Lockhart for a regular workout."
    },


    // =================================================
    // NORMAN WALTON AQUATIC CENTER
    // =================================================

    {
      name: "Norman Walton Aquatic Center",

      keywords: [
        "norman walton",
        "norman walton aquatic center",
        "norman aquatic center",
        "aquatic center",
        "pool",
        "swimming pool",
        "swim",
        "swimming",
        "indoor pool"
      ],

      description:
        "The Norman Walton Aquatic Center is the swimming facility located inside George Hubert Lockhart Gymnasium and is used for aquatic recreation, university activities, and other scheduled events.",

      location:
        "Inside George Hubert Lockhart Gymnasium, 860 University Drive North, Montgomery, AL 36106",

      studentTip:
        "If you are looking for the Norman Walton Aquatic Center, go to Lockhart Gymnasium. The aquatic center is located inside the building."
    },


    // =================================================
    // POOL PARTIES & STUDENT EVENTS
    // =================================================

    {
      name: "Pool Parties & Aquatic Events",

      keywords: [
        "pool party",
        "pool parties",
        "student pool party",
        "aquatic event",
        "pool event",
        "swimming event"
      ],

      description:
        "The Norman Walton Aquatic Center may host ASU student pool parties and other aquatic activities when scheduled by the university or student organizations.",

      studentTip:
        "Pool parties are special events, not regular open-swim hours. Check the event announcement for the date, time, admission requirements, attire, and any rules about what you may bring."
    },


    // =================================================
    // NORMAN WALTON HISTORY
    // =================================================

    {
      name: "Who Was Dr. Norman Walton?",

      keywords: [
        "norman walton",
        "dr norman walton",
        "aquatic center history",
        "swimming history",
        "swac swimming"
      ],

      description:
        "The aquatic center is named for Dr. Norman Walton, an Alabama State University history professor and department chair who also coached swimming and led ASU teams to multiple SWAC swimming championships."
    },


    // =================================================
    // ATHLETICS OFFICES
    // =================================================

    {
      name: "Athletics Offices",

      keywords: [
        "athletics office",
        "athletics offices",
        "volleyball office",
        "soccer office",
        "track office",
        "track and field office"
      ],

      description:
        "Lockhart Gymnasium contains offices connected with several Alabama State University athletic programs, including volleyball, soccer, and track and field.",

      studentTip:
        "If you are trying to meet with a coach or athletics staff member, verify the current office location before visiting because staff assignments can change."
    },


    // =================================================
    // STUDENT-ATHLETE STUDY AREAS
    // =================================================

    {
      name: "Academic Study Labs",

      keywords: [
        "study lab",
        "study labs",
        "academic study lab",
        "student athlete study",
        "athlete study",
        "academic support"
      ],

      description:
        "Lockhart includes academic study spaces used to support student-athletes and their academic responsibilities."
    }

  ],

  history: {
    description:
      "Lockhart Gymnasium is named in honor of George Hubert Lockhart, a longtime Alabama State University coach and administrator who played an important role in the development of ASU athletics and helped establish the university's baseball program."
  },

  funFact:
    "Lockhart Gym is more than a workout facility. It serves as a volleyball venue, basketball practice space, student recreation center, event space, athletics office location, academic support facility, and home of the Norman Walton Aquatic Center.",

  image: "",
  mapLink: ""
},

// =====================================================
// TULLIBODY MUSIC HALL
// =====================================================

{
  id: 29,

  name: "Tullibody Music Hall",
  shortName: "Tullibody Music",
  category: "academic",

  keywords: [
    "tullibody music",
    "tullibody music hall",
    "tullibody music building",
    "tullibody music arts building",
    "music building",

    "music",
    "music major",
    "music majors",
    "music education",
    "music class",
    "music classes",
    "band class",
    "band classes",

    "mighty marching hornets",
    "marching hornets",
    "asu marching band",
    "marching band",
    "band",
    "asu band",
    "hornet band",

    "stingettes",
    "asu stingettes",
    "stingette",
    "dance line",

    "old glory",
    "old glory field",
    "band field",
    "practice field",
    "band practice",
    "marching band practice",
    "marching hornets practice",
    "stingettes practice",

    "band rehearsal",
    "band rehearsal room",
    "rehearsal room",
    "instrument storage",
    "uniform storage",

    "choir",
    "choir room",
    "choir rehearsal",
    "choir rehearsal room",
    "gospel choir",

    "recital",
    "recital hall",
    "music recital",
    "concert",
    "music performance",

    "practice room",
    "practice rooms",
    "music practice",
    "instrument practice",

    "piano",
    "organ",
    "pipe organ",
    "439 pipe organ",

    "recording",
    "recording studio",
    "music studio",
    "studio",
    "audio",
    "media",

    "student lounge",
    "music lounge",

    "music faculty",
    "music professor",
    "faculty office",
    "music office",
    "department of music",

    "theatre faculty",
    "dance faculty",

    "lil yachty",
    "lil yacht",
    "lil boat",

    "1101 north university drive",
    "1101 n university drive"
  ],

  description:
    "Tullibody Music Hall is home to Alabama State University's Department of Music and serves as one of the university's major centers for music education, rehearsal, performance, and marching-band activity. The building includes classrooms, faculty offices, rehearsal spaces, practice rooms, performance facilities, and other spaces supporting ASU's musical traditions.",

  address:
    "1101 N. University Drive, Montgomery, AL 36104",

  services: [
    "Department of Music",
    "Music and Music Education classes",
    "Mighty Marching Hornets",
    "Stingettes",
    "Band rehearsals",
    "Choir rehearsals",
    "Recital Hall",
    "Music practice rooms",
    "Instrument and uniform storage",
    "Music faculty offices",
    "Student music performances",
    "Old Glory practice area nearby"
  ],

  studentTip:
    "Do not confuse Tullibody Music Hall with Tullibody Fine Arts. Tullibody Music is especially important for music majors, band members, the Mighty Marching Hornets, rehearsals, music classes, and performances.",

  sections: [

    // =================================================
    // DEPARTMENT OF MUSIC
    // =================================================

    {
      name: "Department of Music",

      keywords: [
        "department of music",
        "music department",
        "music major",
        "music majors",
        "music education",
        "music class",
        "music classes",
        "music professor",
        "music faculty"
      ],

      description:
        "Tullibody Music Hall is home to Alabama State University's Department of Music and supports undergraduate and graduate study in music and music education.",

      features: [
        "Bachelor of Arts in Music",
        "Bachelor of Music Education",
        "Graduate music education",
        "Music classrooms",
        "Faculty offices",
        "Applied music instruction",
        "Performance opportunities"
      ],

      studentTip:
        "If your schedule says Tullibody Music Building, make sure you do not accidentally enter Tullibody Fine Arts. They are connected to the same broader arts area but serve different academic and performance functions."
    },


    // =================================================
    // MIGHTY MARCHING HORNETS
    // =================================================

    {
      name: "Mighty Marching Hornets",

      keywords: [
        "mighty marching hornets",
        "marching hornets",
        "asu marching band",
        "marching band",
        "band",
        "hornet band",
        "band practice",
        "band rehearsal"
      ],

      description:
        "Tullibody Music Hall is closely associated with Alabama State University's Mighty Marching Hornets and provides rehearsal, instructional, storage, and support spaces connected with the university's band program.",

      studentTip:
        "If you are looking for the band program, a band class, rehearsal information, or the Mighty Marching Hornets, Tullibody Music Hall is an important place to know."
    },


    // =================================================
    // STINGETTES
    // =================================================

    {
      name: "ASU Stingettes",

      keywords: [
        "stingettes",
        "asu stingettes",
        "stingette",
        "dance line",
        "stingettes practice",
        "marching band dancers"
      ],

      description:
        "The ASU Stingettes are an important part of the Mighty Marching Hornets tradition and are closely associated with marching-band rehearsals, performances, and activities centered around the Tullibody Music area.",

      studentTip:
        "During marching season, you may see band and Stingette activity around Tullibody Music Hall and the nearby outdoor practice area."
    },


    // =================================================
    // OLD GLORY
    // =================================================

    {
      name: "Old Glory Practice Field",

      keywords: [
        "old glory",
        "old glory field",
        "band field",
        "practice field",
        "band practice field",
        "marching hornets practice",
        "marching band practice",
        "stingettes practice"
      ],

      description:
        "The outdoor practice area behind the Tullibody Music area is commonly known by students as Old Glory and is associated with rehearsals for the Mighty Marching Hornets, Stingettes, and related marching-band activities.",

      location:
        "Behind the Tullibody Music Hall area.",

      studentTip:
        "If someone tells you band practice is at Old Glory, they are referring to the outdoor practice area behind the Tullibody Music area."
    },


    // =================================================
    // BAND REHEARSAL ROOM
    // =================================================

    {
      name: "Band Rehearsal Room",

      keywords: [
        "band rehearsal room",
        "band room",
        "band rehearsal",
        "rehearsal room",
        "band practice",
        "instrument rehearsal"
      ],

      description:
        "Tullibody Music Hall contains a large band rehearsal room designed specifically for musical acoustics. The approximately 2,000-square-foot rehearsal space was designed to accommodate a band of more than 150 musicians.",

      features: [
        "Large rehearsal floor",
        "Two-story-high ceiling",
        "Acoustical wall treatment",
        "Space for large ensembles",
        "Nearby instrument storage",
        "Nearby uniform storage"
      ]
    },


    // =================================================
    // INSTRUMENT & UNIFORM STORAGE
    // =================================================

    {
      name: "Instrument & Uniform Storage",

      keywords: [
        "instrument storage",
        "instrument room",
        "band instrument",
        "uniform storage",
        "band uniform",
        "marching band uniform"
      ],

      description:
        "Storage facilities associated with the band rehearsal area support instruments, uniforms, and other equipment used by ASU music and band programs.",

      studentTip:
        "Band members should follow current staff instructions for instrument checkout, uniforms, storage access, and equipment procedures."
    },


    // =================================================
    // RECITAL HALL
    // =================================================

    {
      name: "Tullibody Music Recital Hall",

      keywords: [
        "recital hall",
        "recital",
        "music recital",
        "concert",
        "music concert",
        "performance",
        "student recital"
      ],

      description:
        "The first-floor Recital Hall is one of Tullibody Music Hall's primary performance spaces. It was specifically designed with acoustical features for music performances and provides tiered seating overlooking the performance area.",

      features: [
        "Approximately 200 seats",
        "Tiered seating",
        "Acoustically designed walls",
        "Curved ceiling",
        "Student and community performances"
      ],

      studentTip:
        "If an event flyer says 'Tullibody Music Recital Hall,' go to the Music building rather than the theatre spaces in Tullibody Fine Arts."
    },


    // =================================================
    // CHOIR REHEARSAL ROOM
    // =================================================

    {
      name: "Choir Rehearsal Room",

      keywords: [
        "choir",
        "choir room",
        "choir rehearsal",
        "choir rehearsal room",
        "choral",
        "gospel choir"
      ],

      description:
        "The second floor contains a large choir rehearsal room designed for choral instruction, rehearsals, and other music activities.",

      features: [
        "Approximately 2,000 square feet",
        "Choir rehearsal space",
        "Music storage",
        "Robe storage",
        "Pipe organ"
      ]
    },


    // =================================================
    // 439-PIPE ORGAN
    // =================================================

    {
      name: "439-Pipe Organ",

      keywords: [
        "organ",
        "pipe organ",
        "439 pipe organ",
        "organ recital",
        "organ music"
      ],

      description:
        "The choir rehearsal room contains a pipe organ with 439 pipes. The space has historically been used for organ recitals and opera workshop instruction.",

      studentTip:
        "Yes — there is actually a 439-pipe organ inside Tullibody Music Hall. It is one of those features many students outside the music program may never realize is on campus."
    },


    // =================================================
    // MUSIC PRACTICE ROOMS
    // =================================================

    {
      name: "Music Practice Rooms",

      keywords: [
        "practice room",
        "practice rooms",
        "music practice",
        "instrument practice",
        "practice piano",
        "rehearsal space"
      ],

      description:
        "Tullibody Music Hall includes individual and small-group practice rooms of different sizes for students developing their instrumental and vocal skills.",

      studentTip:
        "Music practice-room access may depend on current Department of Music rules, classes, rehearsals, and room availability."
    },


    // =================================================
    // MUSIC CLASSES
    // =================================================

    {
      name: "Music & Band Classes",

      keywords: [
        "music class",
        "music classes",
        "band class",
        "band classes",
        "music appreciation",
        "music education",
        "instrument class",
        "voice class",
        "percussion",
        "piano"
      ],

      description:
        "Students may have music courses, applied lessons, ensemble instruction, and other Department of Music classes inside Tullibody Music Hall.",

      studentTip:
        "You do not necessarily have to be in the marching band to have a class here. Music majors, Music Education majors, and students enrolled in certain music courses may all have classes in Tullibody Music."
    },


    // =================================================
    // MUSIC / MEDIA STUDIO
    // =================================================

    {
      name: "Music & Media Spaces",

      keywords: [
        "studio",
        "music studio",
        "recording studio",
        "recording",
        "audio",
        "media",
        "music media",
        "media technician"
      ],

      description:
        "Tullibody Music Hall supports music technology and media-related work as part of the Department of Music's instructional and performance operations.",

      studentTip:
        "Access to specialized music, recording, or media spaces may be limited to authorized students, classes, faculty, or scheduled projects."
    },


    // =================================================
    // STUDENT LOUNGE
    // =================================================

    {
      name: "Music Student Lounge",

      keywords: [
        "student lounge",
        "music lounge",
        "lounge",
        "music student area"
      ],

      description:
        "Tullibody Music Hall includes a student lounge associated with the music facilities, giving music students another space within the building between classes and rehearsals."
    },


    // =================================================
    // FACULTY & STAFF OFFICES
    // =================================================

    {
      name: "Music Faculty & Staff Offices",

      keywords: [
        "music faculty",
        "music professor",
        "music professors",
        "faculty office",
        "faculty offices",
        "music office",
        "department office",
        "music department office"
      ],

      description:
        "Department of Music faculty, instructors, administrative staff, technicians, and other music personnel have offices and workspaces throughout Tullibody Music Hall.",

      studentTip:
        "If you are trying to meet a music professor, check the current ASU faculty directory for their room number before going."
    },


    // =================================================
    // VISUAL & PERFORMING ARTS CROSSOVER
    // =================================================

    {
      name: "Visual & Performing Arts Offices",

      keywords: [
        "visual performing arts",
        "covpa",
        "college of visual and performing arts",
        "theatre faculty",
        "dance faculty",
        "dean office"
      ],

      description:
        "Although music is the building's primary academic focus, some College of Visual and Performing Arts, Theatre, and Dance faculty offices are also located in the Tullibody Music Building.",

      studentTip:
        "Do not assume every Dance or Theatre professor is located in Tullibody Fine Arts. Some current faculty offices are listed in the Music Building."
    },


    // =================================================
    // LIL YACHTY / CAMPUS LORE
    // =================================================

    {
      name: "Lil Yachty & ASU Campus Lore",

      keywords: [
        "lil yachty",
        "lil yacht",
        "lil boat",
        "rapper",
        "recorded song",
        "recording studio",
        "famous student"
      ],

      description:
        "Rapper Lil Yachty attended Alabama State University for a period before leaving college to pursue his professional music career.",

      studentTip:
        "Students have also connected Lil Yachty's time at ASU with recording music in the Tullibody Music area. Hornet Navigator treats the specific Tullibody recording story as campus lore unless additional university documentation identifies the recording or session."
    }

  ],

  history: {
    year: 1974,

    description:
      "Tullibody Music Hall dates to 1974 and was developed as a major part of Alabama State University's Fine Arts facilities. The approximately 41,000-square-foot building was designed to house music instruction, rehearsals, performances, faculty offices, practice rooms, and other Department of Music activities."
  },

  campusLore:
    "Students commonly identify the outdoor band practice area behind Tullibody Music as Old Glory. The building and surrounding area are strongly associated with the Mighty Marching Hornets and Stingettes.",

  funFact:
    "Tullibody Music Hall contains a 439-pipe organ, a large band rehearsal room built for more than 150 musicians, and a recital hall designed specifically for musical acoustics.",

  image: "",
  mapLink: ""
},

// =====================================================
// OLD HORNET STADIUM
// =====================================================

{
  id: 30,

  name: "Old Hornet Stadium",
  shortName: "Hornet Stadium",
  category: "athletics",

  keywords: [
    "old hornet stadium",
    "hornet stadium",
    "old stadium",
    "old football stadium",
    "historic stadium",

    "football",
    "football practice",
    "asu football practice",
    "hornet football practice",
    "football practice field",
    "practice field",

    "track",
    "track and field",
    "asu track",
    "track practice",
    "track and field practice",
    "running track",
    "eight lane track",

    "run",
    "running",
    "jog",
    "jogging",
    "walk",
    "walking",
    "exercise",
    "workout",
    "work out",
    "student workout",
    "outdoor workout",
    "free workout",
    "student track",
    "run on track",
    "run track",
    "outdoor exercise",

    "long jump",
    "long jump pit",
    "high jump",
    "high jump pit",
    "steeplechase",

    "track meet",
    "track meets",
    "local track meet",

    "air force rotc",
    "afrotc",
    "rotc",
    "physical training",
    "pt",
    "rotc pt",

    "houston markham",
    "houston markham football complex",
    "football complex",

    "old asu stadium",
    "new asu stadium",
    "asu stadium",
    "which stadium",
    "football game",

    "event",
    "events",
    "stadium event",

    "press box",
    "historic press box"
  ],

  description:
    "Old Hornet Stadium is Alabama State University's historic former home football stadium and remains an active athletics, recreation, and practice facility. Today, the stadium is used heavily by ASU Football and Track & Field for practices while also providing an outdoor space where students can run, walk, jog, and work out when the facility is available.",

  services: [
    "ASU Football practice",
    "ASU Track & Field practice",
    "Open student running and workouts when available",
    "Eight-lane running track",
    "120-yard football practice field",
    "Long jump facilities",
    "High jump facilities",
    "Steeplechase training",
    "Track meets when scheduled",
    "AFROTC physical training",
    "University events when scheduled"
  ],

  studentTip:
    "Old Hornet Stadium is not the same as the newer ASU Stadium. The old stadium is now heavily used for football and track & field practices, but regular ASU students can also go there to run, walk, jog, or work out when the space is available. Athletic practices and scheduled events have priority, so give teams plenty of room and do not interrupt athletes or coaches.",

  sections: [

    // =================================================
    // OPEN STUDENT WORKOUT ACCESS
    // =================================================

    {
      name: "Open Student Workout Access",

      keywords: [
        "student workout",
        "workout",
        "work out",
        "exercise",
        "run",
        "running",
        "jog",
        "jogging",
        "walk",
        "walking",
        "track workout",
        "outdoor workout",
        "free workout",
        "student track",
        "run on track",
        "run track",
        "outdoor exercise"
      ],

      description:
        "Old Hornet Stadium is also used by ASU students for personal outdoor exercise. Students can use the stadium area for activities such as running, walking, jogging, and individual workouts when the facility is available.",

      features: [
        "Outdoor running",
        "Walking",
        "Jogging",
        "Individual workouts",
        "Running-track access when available",
        "No gym membership needed"
      ],

      studentTip:
        "You do not normally need to show a student ID just to go over to Old Hornet Stadium for an individual workout. Students are welcome to use the space when available, but varsity athletes and scheduled practices have priority. If football or track & field is practicing, give the athletes and coaches plenty of space and do not interfere with their workout."
    },


    // =================================================
    // RUNNING & WALKING
    // =================================================

    {
      name: "Running, Jogging & Walking",

      keywords: [
        "running",
        "run",
        "jogging",
        "jog",
        "walking",
        "walk",
        "running track",
        "student running",
        "where can i run",
        "where can i walk",
        "outdoor exercise"
      ],

      description:
        "The track at Old Hornet Stadium gives students an outdoor location for running, jogging, walking, and conditioning when the stadium is available for general student use.",

      studentTip:
        "If you are looking for somewhere outdoors on campus to get your steps in or run laps, Old Hornet Stadium is one of the locations to know."
    },


    // =================================================
    // FOOTBALL PRACTICE
    // =================================================

    {
      name: "ASU Football Practice",

      keywords: [
        "football",
        "football practice",
        "asu football",
        "asu football practice",
        "hornet football",
        "hornet football practice",
        "football practice field",
        "practice field"
      ],

      description:
        "Old Hornet Stadium remains an important practice facility for Alabama State University's football program. The stadium includes a 120-yard field-turf practice field used for team preparation and training.",

      studentTip:
        "If the football team is practicing, remember that team activities take priority over general student recreation. Stay clear of active drills, equipment, coaches, and players."
    },


    // =================================================
    // TRACK & FIELD
    // =================================================

    {
      name: "ASU Track & Field",

      keywords: [
        "track",
        "track and field",
        "asu track",
        "asu track and field",
        "track practice",
        "track and field practice",
        "running track",
        "eight lane track",
        "track athlete"
      ],

      description:
        "Old Hornet Stadium is an important training facility for Alabama State University's Track & Field program. The facility includes an eight-lane all-weather track surrounding the practice field.",

      features: [
        "Eight-lane running track",
        "Track & Field practices",
        "Running and conditioning",
        "Jumping-event facilities",
        "Steeplechase capability"
      ],

      studentTip:
        "Track athletes may be practicing even when the football field itself looks open. Pay attention to runners and field-event activity before entering or crossing the track."
    },


    // =================================================
    // FIELD EVENTS
    // =================================================

    {
      name: "Track & Field Event Areas",

      keywords: [
        "long jump",
        "long jump pit",
        "high jump",
        "high jump pit",
        "steeplechase",
        "field events",
        "track events"
      ],

      description:
        "Old Hornet Stadium supports multiple track & field activities in addition to running events, including long jump, high jump, and steeplechase training."
    },


    // =================================================
    // TRACK MEETS
    // =================================================

    {
      name: "Track Meets",

      keywords: [
        "track meet",
        "track meets",
        "local track meet",
        "track event",
        "track competition"
      ],

      description:
        "Old Hornet Stadium may also host track meets and other scheduled track & field activities in addition to regular team practices.",

      studentTip:
        "General workout access may be restricted when a track meet, athletic practice, or other scheduled event is taking place."
    },


    // =================================================
    // OLD STADIUM VS NEW ASU STADIUM
    // =================================================

    {
      name: "Old Hornet Stadium vs. New ASU Stadium",

      keywords: [
        "old stadium",
        "new stadium",
        "old hornet stadium",
        "asu stadium",
        "new asu stadium",
        "which stadium",
        "football game",
        "football practice",
        "wrong stadium"
      ],

      description:
        "Old Hornet Stadium is ASU's historic former football-game stadium and is now primarily associated with practices, track & field, recreation, and other scheduled activities. The newer ASU Stadium is the university's major football game-day venue.",

      studentTip:
        "Easy way to remember it: OLD HORNET STADIUM = practices, track, running, and workouts. THE ASU STADIUM = major Hornet football games and large stadium events."
    },


    // =================================================
    // HISTORIC FOOTBALL STADIUM
    // =================================================

    {
      name: "Historic Home of Hornet Football",

      keywords: [
        "historic football",
        "old football stadium",
        "old hornet football",
        "football history",
        "asu football history",
        "historic stadium"
      ],

      description:
        "Before the newer ASU Stadium opened in 2012, Hornet Stadium served as Alabama State University's primary on-campus home football venue for generations of Hornet Football.",

      studentTip:
        "When older alumni talk about going to Hornet Stadium for ASU football games, they may be talking about this stadium rather than the newer ASU Stadium."
    },


    // =================================================
    // HISTORIC PRESS BOX
    // =================================================

    {
      name: "Historic Press Box",

      keywords: [
        "press box",
        "historic press box",
        "stadium press box",
        "football press box"
      ],

      description:
        "A three-story press box was constructed at historic Hornet Stadium in the 1950s. The facility historically included concessions, space for university leadership and guests, and an upper area for sportswriters covering ASU football."
    },


    // =================================================
    // HOUSTON MARKHAM FOOTBALL COMPLEX
    // =================================================

    {
      name: "Houston Markham Football Complex",

      keywords: [
        "houston markham",
        "houston markham complex",
        "houston markham football complex",
        "football complex",
        "football offices",
        "football facility"
      ],

      description:
        "The Houston Markham Football Complex is located near Old Hornet Stadium and overlooks the football practice area. It serves important football training, academic, meeting, and administrative functions.",

      features: [
        "Football locker room",
        "Weight room",
        "Training room",
        "Players' lounge",
        "Academic study lab",
        "Meeting rooms",
        "Football coaches' offices"
      ],

      studentTip:
        "The Houston Markham Football Complex is its own ASU facility and will have a separate Hornet Navigator entry. Do not confuse the football complex with Old Hornet Stadium itself."
    },


    // =================================================
    // AFROTC PHYSICAL TRAINING
    // =================================================

    {
      name: "AFROTC Physical Training",

      keywords: [
        "air force rotc",
        "afrotc",
        "rotc",
        "rotc pt",
        "physical training",
        "pt",
        "air force physical training"
      ],

      description:
        "Old Hornet Stadium may also be used by Alabama State University's Air Force ROTC program for physical training and fitness activities.",

      studentTip:
        "If AFROTC has scheduled physical training at the stadium, give the group space to complete its activities."
    },


    // =================================================
    // CAMPUS EVENTS
    // =================================================

    {
      name: "Campus & Athletic Events",

      keywords: [
        "event",
        "events",
        "stadium event",
        "campus event",
        "athletic event"
      ],

      description:
        "In addition to athletics and student recreation, Old Hornet Stadium's field and track may be used for scheduled university and community activities.",

      studentTip:
        "A scheduled event can temporarily change normal student access to the track or field, so follow posted signs and university instructions."
    },


    // =================================================
    // TRACK RENOVATION
    // =================================================

    {
      name: "Track Improvements",

      keywords: [
        "track renovation",
        "track improvements",
        "new track",
        "running surface"
      ],

      description:
        "ASU Athletics completed improvements to the Old Hornet Stadium track in 2023, updating the running surface used by the Track & Field program."
    },


    // =================================================
    // CAMPUS LORE
    // =================================================

    {
      name: "Stadium Orientation Campus Lore",

      keywords: [
        "sun",
        "facing the sun",
        "stadium sun",
        "old stadium sun",
        "why new stadium",
        "campus lore"
      ],

      description:
        "Students and members of the ASU community have shared stories about the orientation of Old Hornet Stadium and the effect of the sun during games. Hornet Navigator treats this as campus lore rather than the documented reason ASU constructed the newer stadium.",

      studentTip:
        "The newer ASU Stadium opened in 2012, but university sources do not identify the old stadium facing the sun as the official reason the new stadium was built."
    }

  ],

  history: {
    year: 1942,

    description:
      "Historic Hornet Stadium dates to the early 1940s and served as Alabama State University's primary football venue for generations. The stadium included a football field, running track, and other athletic facilities. After the newer ASU Stadium opened in 2012, Old Hornet Stadium continued serving ASU as an important football practice, Track & Field, recreation, and event facility."
  },

  campusLore:
    "A story shared within the ASU community connects the orientation of Old Hornet Stadium with players and spectators having to deal with the sun. Although the story is part of campus conversation, Hornet Navigator does not present it as the officially documented reason the newer ASU Stadium was constructed.",

  funFact:
    "Old Hornet Stadium has gone from being the home of ASU football games to serving multiple generations of students in a different way — today football and track athletes practice there while regular ASU students can also use the space for outdoor running and workouts when available.",

  image: "",
  mapLink: ""
},

// =====================================================
// THOMAS ERBY KILBY HALL
// =====================================================

{
  id: 32,

  name: "Thomas Erby Kilby Hall",
  shortName: "Kilby Hall",
  category: "academic",

  keywords: [
    "thomas erby kilby",
    "thomas erby kilby hall",
    "kilby",
    "kilby hall",

    "wvas",
    "wvas fm",
    "wvas 90.7",
    "90.7",
    "radio station",
    "asu radio",
    "asu radio station",
    "campus radio",
    "college radio",
    "broadcasting",
    "broadcast",

    "communications",
    "communications major",
    "communication major",
    "radio and television",
    "radio television",
    "radio internship",
    "communications internship",
    "communications practicum",
    "practicum",
    "internship",
    "broadcast internship",

    "work study",
    "work-study",
    "student job",
    "student employment",
    "radio job",

    "volunteer",
    "volunteer opportunity",
    "volunteer opportunities",
    "radio volunteer",

    "scholarship",
    "scholarships",
    "broadcast scholarship",
    "broadcasting scholarship",

    "title iii",
    "title 3",
    "title three",
    "title iii office",

    "research",
    "research department",
    "grants",
    "grant department",
    "research and grants",

    "cooperative education",
    "co-op",
    "career experience",

    "old cafeteria",
    "former cafeteria",
    "dining hall",
    "old dining hall",

    "ralph david abernathy",
    "ralph abernathy",
    "abernathy",
    "hunger strike",
    "student protest",
    "student activism",
    "civil rights",

    "student government memorial",
    "1963 memorial",
    "sundial",
    "kilby sundial",

    "historic building",
    "historic kilby"
  ],

  description:
    "Thomas Erby Kilby Hall is one of Alabama State University's historic campus buildings and is strongly associated with WVAS-FM, student media, communications experience, university programs, and ASU's history of student activism. The building has served several purposes throughout its history, including university dining and cooperative education functions.",

  services: [
    "WVAS-FM 90.7",
    "Student broadcasting experience",
    "Communications internships and practicums",
    "Student work-study opportunities when available",
    "Volunteer opportunities when available",
    "Title III-related offices and services",
    "Research and grants-related offices",
    "Historic campus resources"
  ],

  studentTip:
    "Kilby Hall is especially useful for students interested in radio, broadcasting, communications, internships, work-study, and professional media experience. Opportunities can change by semester, so ask about current internships, practicum placements, volunteer opportunities, and student employment.",

  sections: [

    // =================================================
    // WVAS-FM 90.7
    // =================================================

    {
      name: "WVAS-FM 90.7",

      keywords: [
        "wvas",
        "wvas fm",
        "wvas 90.7",
        "90.7",
        "radio",
        "radio station",
        "asu radio",
        "asu radio station",
        "campus radio",
        "college radio"
      ],

      description:
        "Kilby Hall has historically served as headquarters for WVAS-FM, Alabama State University's radio station. WVAS provides professional broadcasting while also supporting the university's educational mission and student media experience.",

      studentTip:
        "If you are interested in radio or broadcasting, WVAS is one of the ASU resources worth learning about even if you are not already working at the station."
    },


    // =================================================
    // COMMUNICATIONS STUDENTS
    // =================================================

    {
      name: "Communications Student Experience",

      keywords: [
        "communications",
        "communications major",
        "communication major",
        "radio television",
        "radio and television",
        "journalism",
        "broadcasting",
        "broadcast",
        "media student"
      ],

      description:
        "ASU Communications students can gain real-world experience through university media resources such as WVAS. The Communications program prepares students for careers in areas including radio, television, journalism, public relations, recording, and other media industries.",

      studentTip:
        "Communications majors should not think of WVAS as only a radio station. It can also represent an opportunity to build professional experience while you are still in college."
    },


    // =================================================
    // INTERNSHIPS & PRACTICUM
    // =================================================

    {
      name: "Internships & Practicum Experience",

      keywords: [
        "internship",
        "internships",
        "communications internship",
        "radio internship",
        "broadcast internship",
        "practicum",
        "communications practicum",
        "radio practicum",
        "work experience"
      ],

      description:
        "ASU Communications students are required to complete practical professional experiences as part of their degree, including practicum and internship work. The university radio station is one of the resources that can help students develop hands-on media skills.",

      studentTip:
        "Do not wait until your final semester to start asking about internship and practicum opportunities. Building experience early can help you develop a stronger résumé, portfolio, demo reel, or professional network."
    },


    // =================================================
    // WORK-STUDY & STUDENT EMPLOYMENT
    // =================================================

    {
      name: "Work-Study & Student Opportunities",

      keywords: [
        "work study",
        "work-study",
        "student job",
        "student employment",
        "campus job",
        "radio job",
        "wvas job",
        "communications job"
      ],

      description:
        "Students may find work-study, student employment, training, or other hands-on opportunities connected with offices and media operations associated with Kilby Hall when positions are available.",

      studentTip:
        "Student jobs and work-study positions are not guaranteed every semester. Ask about current openings and make sure you meet Financial Aid or departmental work-study requirements when applicable."
    },


    // =================================================
    // VOLUNTEER OPPORTUNITIES
    // =================================================

    {
      name: "Volunteer Opportunities",

      keywords: [
        "volunteer",
        "volunteering",
        "volunteer opportunity",
        "volunteer opportunities",
        "radio volunteer",
        "communications volunteer",
        "media volunteer"
      ],

      description:
        "Students interested in communications, broadcasting, media, or university service may find volunteer and experiential-learning opportunities connected with WVAS or other programs associated with Kilby Hall.",

      studentTip:
        "Even if a paid position is not available, ask whether there are current volunteer, shadowing, practicum, or training opportunities that can help you gain experience."
    },


    // =================================================
    // BROADCASTING SCHOLARSHIPS
    // =================================================

    {
      name: "Broadcasting Scholarship Opportunities",

      keywords: [
        "scholarship",
        "scholarships",
        "broadcast scholarship",
        "broadcasting scholarship",
        "radio scholarship",
        "communications scholarship",
        "media scholarship"
      ],

      description:
        "ASU Communications students may have access to scholarship opportunities connected with broadcasting, radio, television, communications, and professional media organizations.",

      studentTip:
        "Communications students should watch department announcements and ask faculty about current broadcasting scholarships. These opportunities can change from year to year."
    },


    // =================================================
    // TITLE III
    // =================================================

    {
      name: "Title III",

      keywords: [
        "title iii",
        "title 3",
        "title three",
        "title iii office",
        "title iii program",
        "title iii staff"
      ],

      description:
        "ASU's Title III Program supports institutional development through areas such as academic resources, student services, facilities, equipment, faculty and staff development, and other university improvement initiatives.",

      studentTip:
        "Students may hear 'Title III' connected with programs, equipment, university projects, or student-support initiatives. If you need a specific Title III staff member or office, verify the current room location before visiting."
    },


    // =================================================
    // RESEARCH & GRANTS
    // =================================================

    {
      name: "Research & Grants",

      keywords: [
        "research",
        "research department",
        "research office",
        "grants",
        "grant",
        "grant department",
        "grant office",
        "research and grants",
        "research funding"
      ],

      description:
        "University research and grant-related administrative activity supports faculty, staff, students, academic programs, and externally funded projects across Alabama State University.",

      studentTip:
        "Research and grant offices can change organizationally or relocate. If you are coming to Kilby for a specific research or grant staff member, verify their current office before visiting."
    },


    // =================================================
    // COOPERATIVE EDUCATION
    // =================================================

    {
      name: "Cooperative Education History",

      keywords: [
        "cooperative education",
        "co-op",
        "cooperative education office",
        "career experience",
        "work experience"
      ],

      description:
        "Kilby Hall historically served as headquarters for Alabama State University's Cooperative Education program in addition to WVAS.",

      studentTip:
        "Cooperative education connects classroom learning with professional work experience, which fits Kilby's long connection to career preparation and hands-on learning."
    },


    // =================================================
    // FORMER UNIVERSITY CAFETERIA
    // =================================================

    {
      name: "Former University Dining Hall",

      keywords: [
        "old cafeteria",
        "former cafeteria",
        "old dining hall",
        "former dining hall",
        "cafeteria",
        "dining hall",
        "kilby cafeteria"
      ],

      description:
        "Kilby Hall is part of ASU's historic student-life story and is associated with the university's former campus dining operations before newer dining facilities served the university.",

      studentTip:
        "Kilby serves a very different purpose today, so students walking past it may never realize the building is connected with an earlier era of ASU dining and student life."
    },


    // =================================================
    // RALPH DAVID ABERNATHY & STUDENT ACTIVISM
    // =================================================

    {
      name: "Ralph David Abernathy & Student Activism",

      keywords: [
        "ralph david abernathy",
        "ralph abernathy",
        "abernathy",
        "hunger strike",
        "student protest",
        "student activism",
        "civil rights",
        "dining protest",
        "student leadership"
      ],

      description:
        "As an Alabama State University student, Ralph David Abernathy led a campus-wide hunger strike protesting inequities in student dining. His leadership resulted in immediate improvements and became an early example of organized student activism at ASU.",

      studentTip:
        "Kilby is not just an administrative or radio building. It is also connected with the history of ASU students using organized action to improve conditions on their own campus."
    },


    // =================================================
    // STUDENT GOVERNMENT MEMORIAL
    // =================================================

    {
      name: "Student Government Memorial",

      keywords: [
        "student government memorial",
        "1963 memorial",
        "student memorial",
        "sundial",
        "kilby sundial",
        "memorial outside kilby"
      ],

      description:
        "A historic Student Government memorial and sundial is located in the Kilby Hall area, adding another visible connection between the building and Alabama State University's student history.",

      studentTip:
        "When you are near Kilby Hall, take a moment to look for the memorial rather than only going inside the building. Hornet Navigator is meant to help students notice pieces of ASU history they might otherwise walk past."
    },


    // =================================================
    // WVAS & PROFESSIONAL EXPERIENCE
    // =================================================

    {
      name: "Building Your Media Résumé",

      keywords: [
        "resume",
        "résumé",
        "portfolio",
        "demo reel",
        "media experience",
        "professional experience",
        "broadcast experience",
        "radio experience"
      ],

      description:
        "Hands-on radio and communications experience can help students develop professional skills and work samples before graduation.",

      studentTip:
        "If your career goal involves broadcasting, journalism, public relations, production, recording, or media, look for ways to leave ASU with more than a degree. Experience through radio, internships, practicums, volunteering, and student employment can become part of your professional portfolio."
    }

  ],

  history: {
    year: 1920,

    description:
      "ASU historical catalogs date Kilby Hall to 1920. The one-story brick building contains more than 8,000 square feet and was remodeled in 1985. Over its history, Kilby has been associated with student dining, Cooperative Education, university administration, WVAS-FM, and other university programs."
  },

  funFact:
    "Kilby Hall connects several different eras of ASU history — from student dining and early student activism to cooperative education, university programs, and professional radio broadcasting.",

  image: "",
  mapLink: ""
},

// =====================================================
// ASU ALUMNI HOUSE / OFFICE OF ALUMNI RELATIONS
// =====================================================

{
  id: 33,

  name: "ASU Alumni House",
  shortName: "Alumni House",
  category: "student-services",

  keywords: [
    "alumni house",
    "asu alumni house",
    "alumni",
    "asu alumni",
    "office of alumni relations",
    "alumni relations",
    "alumni office",

    "national alumni association",
    "naa",
    "alumni association",
    "alumni chapter",
    "alumni chapters",

    "networking",
    "network",
    "professional networking",
    "career networking",
    "alumni networking",
    "networking opportunity",
    "networking opportunities",
    "professional connections",

    "mentor",
    "mentoring",
    "mentorship",
    "alumni mentor",
    "alumni mentorship",

    "scholarship",
    "scholarships",
    "alumni scholarship",
    "alumni scholarships",
    "donor scholarship",
    "donor scholarships",
    "financial support",
    "student support",

    "events",
    "alumni events",
    "networking events",
    "student events",
    "homecoming alumni",
    "alumni homecoming",

    "donation",
    "donations",
    "donor",
    "donors",
    "giving",
    "give to asu",
    "fundraising",
    "fundraiser",

    "office of development",
    "development",
    "asu foundation",
    "foundation",

    "distinguished alumni",
    "distinguished alumni award",
    "50 under 50",
    "alumni awards",

    "graduate",
    "graduates",
    "former students",
    "asu graduate",

    "career",
    "career opportunities",
    "professional development",

    "volunteer",
    "volunteering",
    "alumni volunteer",
    "give back",
    "giving back"
  ],

  description:
    "The ASU Alumni House is associated with Alabama State University's Office of Alumni Relations and serves as an important connection point between the university, its graduates, former students, supporters, friends, and the broader Hornet family. Alumni Relations promotes engagement, university events, networking, giving, alumni programs, and opportunities that strengthen connections between generations of ASU Hornets.",

  services: [
    "Office of Alumni Relations",
    "Alumni engagement",
    "Alumni networking",
    "Alumni events and programs",
    "National Alumni Association connections",
    "Alumni chapter information",
    "Professional connections",
    "Alumni-supported student opportunities",
    "Scholarship information and referrals when available",
    "University giving and engagement information",
    "Alumni recognition programs"
  ],

  studentTip:
    "You do not have to wait until graduation to learn about ASU's alumni network. Current students can benefit from alumni-supported events, scholarships, networking, mentoring, professional connections, and other opportunities when they are announced.",

  sections: [

    // =================================================
    // OFFICE OF ALUMNI RELATIONS
    // =================================================

    {
      name: "Office of Alumni Relations",

      keywords: [
        "office of alumni relations",
        "alumni relations",
        "alumni office",
        "asu alumni",
        "alumni house",
        "former students"
      ],

      description:
        "ASU's Office of Alumni Relations serves as a liaison between Alabama State University and its graduates and former students. The office works to keep alumni connected with university news, events, programs, traditions, and opportunities to remain involved with ASU.",

      studentTip:
        "The Alumni House is not only useful after you graduate. Learning how Alumni Relations works while you are still a student can help you begin building connections before graduation."
    },


    // =================================================
    // ASU ALUMNI NETWORK
    // =================================================

    {
      name: "ASU Alumni Network",

      keywords: [
        "alumni network",
        "asu alumni network",
        "networking",
        "network",
        "professional network",
        "professional connections",
        "asu connections"
      ],

      description:
        "Alabama State University's alumni network includes tens of thousands of graduates and former students connected with the university and alumni organizations across the country.",

      studentTip:
        "Your ASU network can become a professional resource. Alumni may work in industries, companies, schools, government agencies, nonprofits, entertainment, healthcare, business, technology, law, and many other fields."
    },


    // =================================================
    // NETWORKING OPPORTUNITIES
    // =================================================

    {
      name: "Networking Opportunities",

      keywords: [
        "networking",
        "networking opportunity",
        "networking opportunities",
        "networking event",
        "professional networking",
        "career networking",
        "alumni networking",
        "meet alumni"
      ],

      description:
        "Alumni programs and university events can create opportunities for students and graduates to connect with members of the Hornet family and develop professional relationships.",

      studentTip:
        "If you attend an alumni networking event, introduce yourself. Tell alumni your major, career interests, and what you are working toward. A simple conversation can sometimes lead to advice, mentorship, internships, referrals, or future professional connections."
    },


    // =================================================
    // MENTORSHIP
    // =================================================

    {
      name: "Alumni Mentorship & Guidance",

      keywords: [
        "mentor",
        "mentoring",
        "mentorship",
        "alumni mentor",
        "alumni mentorship",
        "career mentor",
        "professional mentor",
        "career advice"
      ],

      description:
        "Connections with ASU alumni can give students access to professional guidance, career perspectives, and relationships with graduates who understand the ASU experience.",

      studentTip:
        "Formal mentorship programs and individual opportunities can vary. When alumni events or professional panels are announced, use them as opportunities to meet people working in careers that interest you."
    },


    // =================================================
    // SCHOLARSHIPS
    // =================================================

    {
      name: "Alumni-Supported Scholarships",

      keywords: [
        "scholarship",
        "scholarships",
        "alumni scholarship",
        "alumni scholarships",
        "chapter scholarship",
        "alumni chapter scholarship",
        "donor scholarship",
        "donor scholarships",
        "financial assistance",
        "financial support"
      ],

      description:
        "ASU alumni, alumni chapters, donors, and university fundraising programs help support scholarship opportunities for eligible students. Scholarship requirements and availability vary depending on the individual award or sponsoring organization.",

      studentTip:
        "Do not assume one scholarship application covers every alumni-supported award. Watch your ASU email and university announcements and ask about current alumni, chapter, donor, and Foundation-supported scholarship opportunities."
    },


    // =================================================
    // STUDENT FINANCIAL SUPPORT
    // =================================================

    {
      name: "Student Support Through Alumni Giving",

      keywords: [
        "student support",
        "financial support",
        "financial help",
        "student assistance",
        "alumni support",
        "donor support",
        "help students"
      ],

      description:
        "ASU alumni and donors support students and university programs through scholarships, fundraising, philanthropy, and other forms of giving.",

      studentTip:
        "If you are experiencing a financial difficulty, you can ask whether any current alumni-supported scholarship or assistance opportunities are available. However, the Alumni House should not be treated as a guaranteed emergency financial-aid office. Financial Aid and other student-support offices may need to assist depending on your situation."
    },


    // =================================================
    // ALUMNI EVENTS
    // =================================================

    {
      name: "Alumni Events & Programs",

      keywords: [
        "alumni event",
        "alumni events",
        "alumni program",
        "alumni programs",
        "networking event",
        "homecoming alumni",
        "alumni homecoming",
        "alumni gathering"
      ],

      description:
        "The Office of Alumni Relations helps keep alumni informed about ASU events and programs and encourages graduates and supporters to remain actively involved with the university.",

      studentTip:
        "Pay attention during Homecoming and other major university celebrations. Those are often some of the best times to see large numbers of ASU alumni return to campus."
    },


    // =================================================
    // NATIONAL ALUMNI ASSOCIATION
    // =================================================

    {
      name: "National Alumni Association",

      keywords: [
        "national alumni association",
        "naa",
        "alumni association",
        "asu alumni association",
        "alumni organization"
      ],

      description:
        "The National Alumni Association helps connect ASU alumni through organized chapters, regional representatives, university engagement, and activities that support Alabama State University.",

      studentTip:
        "After graduation, the National Alumni Association can help you remain connected to ASU even if you move away from Montgomery."
    },


    // =================================================
    // ALUMNI CHAPTERS
    // =================================================

    {
      name: "Alumni Chapters",

      keywords: [
        "alumni chapter",
        "alumni chapters",
        "local alumni chapter",
        "regional alumni",
        "alumni near me",
        "national alumni association"
      ],

      description:
        "ASU alumni chapters operate in different communities and regions, giving graduates ways to stay connected with one another and support the university.",

      studentTip:
        "Your relationship with ASU does not have to end when you leave Montgomery. Alumni chapters can provide another Hornet community wherever your career takes you."
    },


    // =================================================
    // ALUMNI & CAREER CONNECTIONS
    // =================================================

    {
      name: "Career & Professional Connections",

      keywords: [
        "career",
        "career opportunity",
        "career opportunities",
        "professional development",
        "professional connections",
        "job networking",
        "career networking",
        "employment connections"
      ],

      description:
        "ASU's alumni community can complement the career resources students receive from the university by connecting Hornets across professions, industries, and communities.",

      studentTip:
        "For formal job searching, résumé assistance, career fairs, Handshake, and employer recruiting, ASU Career Services is the primary student career office. Use the alumni network as an additional relationship-building resource."
    },


    // =================================================
    // DISTINGUISHED ALUMNI
    // =================================================

    {
      name: "Distinguished Alumni Awards",

      keywords: [
        "distinguished alumni",
        "distinguished alumni award",
        "alumni award",
        "alumni awards",
        "successful alumni",
        "notable alumni"
      ],

      description:
        "ASU recognizes alumni whose professional accomplishments, community contributions, university support, and leadership represent the university's legacy through programs such as the Distinguished Alumni Awards.",

      studentTip:
        "Alumni recognition programs are also useful for current students because they can introduce you to accomplished Hornets working in fields you may want to enter."
    },


    // =================================================
    // 50 UNDER 50
    // =================================================

    {
      name: "ASU 50 Under 50",

      keywords: [
        "50 under 50",
        "asu 50 under 50",
        "alumni recognition",
        "young alumni",
        "alumni leaders",
        "alumni ambassadors"
      ],

      description:
        "ASU's 50 Under 50 program recognizes and develops alumni who can serve the university as advocates, ambassadors, speakers, panelists, advisers, donors, and participants in university programs.",

      studentTip:
        "When ASU alumni return as speakers or panelists, those events can be valuable networking opportunities. Bring questions and introduce yourself afterward when appropriate."
    },


    // =================================================
    // GIVING BACK
    // =================================================

    {
      name: "Giving Back to ASU",

      keywords: [
        "give back",
        "giving back",
        "donation",
        "donations",
        "giving",
        "donor",
        "donors",
        "fundraising",
        "fundraiser",
        "support asu"
      ],

      description:
        "Alumni Relations and Institutional Advancement encourage graduates and supporters to remain engaged with Alabama State University through participation, advocacy, service, philanthropy, and giving.",

      studentTip:
        "Giving back does not always mean making a large financial donation. Alumni can support ASU through mentoring, networking, recruiting students, speaking to classes, volunteering, sharing professional opportunities, and supporting university programs."
    },


    // =================================================
    // OFFICE OF DEVELOPMENT / FOUNDATION
    // =================================================

    {
      name: "Development & ASU Foundation Connection",

      keywords: [
        "office of development",
        "development",
        "asu foundation",
        "foundation",
        "scholarship account",
        "donor",
        "giving",
        "fundraising"
      ],

      description:
        "Alumni Relations operates within ASU's Institutional Advancement division alongside the Office of Development and ASU Foundation. Together, these areas help strengthen alumni relationships, philanthropy, fundraising, scholarships, and long-term support for the university.",

      studentTip:
        "If your question involves a particular scholarship fund, donation, or Foundation account, Alumni Relations may need to direct you to Development or the ASU Foundation."
    },


    // =================================================
    // BEFORE YOU GRADUATE
    // =================================================

    {
      name: "Before You Graduate",

      keywords: [
        "graduation",
        "graduate",
        "graduating senior",
        "senior",
        "become alumni",
        "after graduation",
        "stay connected"
      ],

      description:
        "The transition from ASU student to ASU alumnus does not have to mean losing your university connections. Alumni Relations helps graduates remain connected with the Hornet community after leaving campus.",

      studentTip:
        "Before graduation, make sure ASU has updated contact information for you and learn how to stay connected with Alumni Relations and alumni organizations after your student email and campus routine change."
    }

  ],

  funFact:
    "ASU Alumni Relations maintains connections with more than 28,000 alumni, giving current students access to a Hornet network that extends far beyond the Montgomery campus.",

  image: "",
  mapLink: ""
}

];













