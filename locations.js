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
    "icafe",
    "i cafe",
    "grubhub",
    "grub hub",
    "mobile order",
    "mobile ordering",
    "order coffee",
    "starbucks order",
    "starbucks grubhub",
    "levi watkins starbucks",
    "library starbucks",
    "redesigned starbucks",
    "new starbucks",
    "student id",
    "physical student id"
  ],

  description:
    "Starbucks is located on the first-floor level of Levi Watkins Learning Center and uses a separate entrance on the right side of the building. The Starbucks area has recently been redesigned and redecorated, and the ordering process has changed.",

  features: [
    "We Proudly Serve Starbucks location",
    "Orders are placed through Grubhub",
    "Updated and redesigned Starbucks area",
    "Separate entrance on the right side of Levi Watkins Learning Center"
  ],

  studentTip:
    "IMPORTANT UPDATE: Starbucks orders are now placed through Grubhub. Students no longer order by presenting their physical ASU student ID at the counter. It is a good idea to download and set up Grubhub before visiting so you are ready to place your order.",

  extraTip:
    "Do not enter through the main library doors looking for Starbucks. Starbucks has its own separate entrance on the right side of Levi Watkins Learning Center and cannot be accessed directly from inside the main library. If you remember the older Starbucks setup, the area has also been redesigned and may look different now."
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
},

// =====================================================
// ASU PHYSICAL PLANT
// =====================================================

{
  id: 34,

  name: "ASU Physical Plant",
  shortName: "Physical Plant",
  category: "student-services",

  keywords: [
    "physical plant",
    "asu physical plant",
    "facilities",
    "facilities management",
    "facilities management and operations",
    "facilities operations",

    "maintenance",
    "building maintenance",
    "campus maintenance",
    "maintenance request",
    "repair",
    "repairs",
    "something broken",
    "broken",
    "fix something",

    "work order",
    "work orders",
    "asset essentials",
    "maintenance work order",
    "repair request",

    "hvac",
    "air conditioning",
    "ac",
    "heat",
    "heating",
    "plumbing",
    "water",
    "leak",
    "electrical",
    "electricity",
    "painting",
    "crafts",

    "fire safety",
    "life safety",
    "fire life safety",

    "landscaping",
    "grounds",
    "grounds maintenance",
    "grass",
    "campus grounds",

    "custodial",
    "custodial services",
    "cleaning",
    "campus cleaning",

    "transportation",
    "campus transportation",

    "logistics",
    "facilities logistics",

    "procurement",
    "procurement department",
    "purchasing",
    "purchasing department",
    "vendor",
    "vendors",
    "vendor registration",
    "contracts",
    "acquisitions",
    "bidding",

    "room 104",
    "1301 west fifth street",
    "1301 w fifth street"
  ],

  description:
    "The ASU Physical Plant is an operational facility that supports the maintenance and day-to-day functioning of Alabama State University's campus. Facilities-related services coordinated through this area include building maintenance, HVAC and plumbing, electrical and painting work, grounds, transportation, custodial services, logistics, and other campus operations. The ASU Procurement Department is also located in the Physical Plant Building.",

  address:
    "1301 West Fifth Street, Montgomery, AL 36104",

  services: [
    "Facilities Management & Operations",
    "Building maintenance",
    "HVAC and plumbing coordination",
    "Electrical and facility repairs",
    "Fire and life-safety coordination",
    "Landscaping and grounds",
    "Custodial services",
    "Transportation-related operations",
    "Logistics and facility services",
    "ASU Procurement Department",
    "Vendor and purchasing services"
  ],

  studentTip:
    "Most students will not need to physically visit the Physical Plant when something breaks. If you have a maintenance problem in a residence hall, classroom, or other campus building, start with the appropriate residence-hall staff, building staff, or site manager so the issue can be reported through ASU's maintenance work-order process.",

  sections: [

    // =================================================
    // WHAT IS THE PHYSICAL PLANT?
    // =================================================

    {
      name: "What Is the Physical Plant?",

      keywords: [
        "what is physical plant",
        "physical plant",
        "facilities",
        "facilities management",
        "campus operations",
        "maintenance"
      ],

      description:
        "The Physical Plant helps support the behind-the-scenes operation of ASU's campus. Facility services coordinated from this area help keep university buildings, grounds, utilities, and other physical campus resources functioning.",

      studentTip:
        "Think of the Physical Plant as one of the places helping keep the campus itself running. Most students benefit from its work even if they never need to go inside the building."
    },


    // =================================================
    // BUILDING MAINTENANCE
    // =================================================

    {
      name: "Building Maintenance",

      keywords: [
        "maintenance",
        "building maintenance",
        "campus maintenance",
        "repair",
        "repairs",
        "something broken",
        "broken",
        "fix",
        "maintenance technician"
      ],

      description:
        "ASU Facilities Management coordinates maintenance services for university buildings and physical campus infrastructure.",

      features: [
        "General building maintenance",
        "Painting",
        "Electrical work",
        "HVAC support",
        "Plumbing support",
        "Facility repairs",
        "Skilled crafts"
      ],

      studentTip:
        "If something is broken in a campus building, do not assume you need to walk to Physical Plant yourself. Report the problem through the person responsible for your residence hall or building so a maintenance request can be submitted."
    },


    // =================================================
    // WORK ORDERS
    // =================================================

    {
      name: "Maintenance Work Orders",

      keywords: [
        "work order",
        "work orders",
        "maintenance request",
        "repair request",
        "asset essentials",
        "something broken",
        "report maintenance",
        "submit work order"
      ],

      description:
        "ASU uses the Asset Essentials Work Order System to coordinate facility maintenance requests across campus buildings.",

      studentTip:
        "If you are a student reporting a problem, start with your residence-hall staff, building staff, or the appropriate university office. They can help route the issue through the proper work-order process."
    },


    // =================================================
    // RESIDENCE HALL MAINTENANCE
    // =================================================

    {
      name: "Something Broken in Your Residence Hall?",

      keywords: [
        "dorm maintenance",
        "residence hall maintenance",
        "room maintenance",
        "something broken in dorm",
        "broken dorm",
        "broken room",
        "maintenance in dorm",
        "housing repair"
      ],

      description:
        "Maintenance problems in residence halls may ultimately involve Facilities Management, but students should normally begin by reporting the problem through their residence-hall or housing staff.",

      studentTip:
        "If your air conditioning stops working, something starts leaking, a fixture breaks, or another maintenance problem happens in your residence hall, report it promptly to the appropriate hall staff rather than automatically going to Physical Plant."
    },


    // =================================================
    // HVAC & PLUMBING
    // =================================================

    {
      name: "HVAC & Plumbing",

      keywords: [
        "hvac",
        "air conditioning",
        "ac",
        "air conditioner",
        "heat",
        "heating",
        "plumbing",
        "water",
        "water leak",
        "leak",
        "pipe",
        "toilet",
        "sink"
      ],

      description:
        "Facilities Management includes utilities engineering support for HVAC and plumbing systems across the university.",

      studentTip:
        "For an urgent leak, loss of heating or cooling, or other facility problem, notify the staff responsible for your building as soon as possible so the issue can be routed appropriately."
    },


    // =================================================
    // ELECTRICAL, PAINTING & CRAFTS
    // =================================================

    {
      name: "Electrical, Painting & Facility Crafts",

      keywords: [
        "electrical",
        "electricity",
        "power",
        "painting",
        "paint",
        "crafts",
        "facility repair",
        "building repair"
      ],

      description:
        "ASU's facility operations include electrical work, painting, maintenance crafts, and other services needed to maintain campus buildings."
    },


    // =================================================
    // FIRE & LIFE SAFETY
    // =================================================

    {
      name: "Fire & Life Safety",

      keywords: [
        "fire safety",
        "life safety",
        "fire life safety",
        "fire",
        "safety",
        "building safety"
      ],

      description:
        "Facilities Management includes coordination for fire and life-safety needs connected with ASU's buildings and physical campus environment.",

      studentTip:
        "For an active emergency, fire, smoke, or immediate danger, follow emergency procedures and contact emergency/public-safety personnel rather than treating it as an ordinary maintenance request."
    },


    // =================================================
    // LANDSCAPING & GROUNDS
    // =================================================

    {
      name: "Landscaping & Grounds",

      keywords: [
        "landscaping",
        "grounds",
        "grounds maintenance",
        "campus grounds",
        "grass",
        "trees",
        "landscape",
        "outdoor maintenance"
      ],

      description:
        "Facilities Management supports the maintenance and appearance of ASU's outdoor campus environment through landscaping and grounds operations.",

      studentTip:
        "The landscaping, grass, outdoor spaces, and many of the campus areas students walk through every day are part of the university's larger facilities operation."
    },


    // =================================================
    // CUSTODIAL SERVICES
    // =================================================

    {
      name: "Custodial Services",

      keywords: [
        "custodial",
        "custodial services",
        "cleaning",
        "campus cleaning",
        "janitorial",
        "building cleaning"
      ],

      description:
        "Custodial services are part of ASU Facilities Management & Operations and help maintain university facilities and campus environments."
    },


    // =================================================
    // TRANSPORTATION & LOGISTICS
    // =================================================

    {
      name: "Transportation & Logistics Operations",

      keywords: [
        "transportation",
        "campus transportation",
        "logistics",
        "logistics services",
        "facility transportation",
        "operations"
      ],

      description:
        "Transportation and other logistics-related facility services are part of the operational functions coordinated through ASU Facilities Management.",

      studentTip:
        "This does not necessarily mean students should come directly to Physical Plant for every shuttle or transportation question. Use the appropriate student transportation information or university office for your specific need."
    },


    // =================================================
    // PROCUREMENT DEPARTMENT
    // =================================================

    {
      name: "ASU Procurement Department",

      keywords: [
        "procurement",
        "procurement department",
        "purchasing",
        "purchasing department",
        "contracts",
        "acquisitions",
        "vendor",
        "vendors",
        "vendor registration",
        "bidding",
        "purchase order"
      ],

      description:
        "The ASU Procurement Department is located inside the Physical Plant Building and supports the university's purchasing, acquisitions, vendor, contracting, and procurement processes.",

      location:
        "Physical Plant Building, Room 104, 1301 West Fifth Street, Montgomery, AL 36104",

      studentTip:
        "Procurement is primarily an administrative business office. Most students will not need it for ordinary student purchases or personal financial questions."
    },


    // =================================================
    // PROCUREMENT HOURS
    // =================================================

    {
      name: "Procurement Hours",

      keywords: [
        "procurement hours",
        "purchasing hours",
        "physical plant hours",
        "room 104",
        "8am",
        "5pm"
      ],

      description:
        "ASU currently lists Procurement Department operating hours as Monday through Friday from 8:00 a.m. to 5:00 p.m.",

      studentTip:
        "Hours can change around university closures, holidays, and special schedules, so verify current operations before making a special trip."
    },


    // =================================================
    // VENDORS
    // =================================================

    {
      name: "Vendor & Purchasing Services",

      keywords: [
        "vendor",
        "vendors",
        "vendor registration",
        "supplier",
        "supplier registration",
        "purchasing",
        "procurement",
        "bid",
        "bidding"
      ],

      description:
        "Businesses and university departments may interact with ASU Procurement for vendor registration, purchasing procedures, acquisitions, bids, and related university business.",

      studentTip:
        "This section will be more useful to university employees, student organizations working through official purchasing procedures, vendors, and people doing business with ASU than to the average student."
    },


    // =================================================
    // DO NOT GO HERE FOR STUDENT MAIL
    // =================================================

    {
      name: "Student Mail & Packages",

      keywords: [
        "mail",
        "student mail",
        "package",
        "packages",
        "package pickup",
        "mail center"
      ],

      description:
        "Physical Plant is not the normal student destination for picking up personal mail and packages.",

      studentTip:
        "If you are looking for student mail or package pickup, use the ASU Mail Center rather than coming to Physical Plant."
    },


    // =================================================
    // WHO ACTUALLY NEEDS THIS BUILDING?
    // =================================================

    {
      name: "Who Usually Needs the Physical Plant?",

      keywords: [
        "who uses physical plant",
        "why go to physical plant",
        "need physical plant",
        "physical plant services"
      ],

      description:
        "The Physical Plant is primarily an operational and administrative facility used by university facilities employees, maintenance personnel, Procurement staff, vendors, contractors, and other people supporting campus operations.",

      studentTip:
        "As a student, you may never need to physically visit this building—and that is normal. Hornet Navigator includes it so you know what it is, where it is, and what university operations happen there."
    }

  ],

  history: {
    description:
      "The Physical Plant has long served as a central base for Alabama State University's campus operations. Today, university documentation continues to identify the building as a coordination point for facilities services including transportation, grounds, painting, electrical work, HVAC, plumbing, crafts, and related operational functions."
  },

  funFact:
    "The Physical Plant is one of those ASU buildings students may rarely enter but depend on constantly. The people and services connected with it help maintain the classrooms, residence halls, utilities, grounds, and other campus spaces students use every day.",

  image: "",
  mapLink: ""
},

// =====================================================
// ASU DEPARTMENT OF PUBLIC SAFETY / CAMPUS POLICE
// =====================================================

{
  id: 35,

  name: "ASU Department of Public Safety",
  shortName: "ASU Campus Police",
  category: "student-services",

  keywords: [
    "asu police",
    "campus police",
    "police",
    "public safety",
    "asu public safety",
    "department of public safety",

    "emergency",
    "911",
    "campus emergency",
    "police emergency",

    "334 229 4400",
    "229 4400",

    "crime",
    "report crime",
    "crime report",
    "theft",
    "stolen",
    "stolen property",
    "missing property",
    "lost property",

    "traffic accident",
    "car accident",
    "accident",
    "traffic investigation",

    "safety",
    "campus safety",
    "residence hall safety",
    "parking lot safety",

    "parking",
    "parking services",
    "student parking",
    "parking decal",
    "parking decals",
    "parking permit",
    "parking permits",
    "parking sticker",
    "vehicle registration",

    "boot",
    "car boot",
    "car booted",
    "parking boot",
    "boot removal",
    "remove boot",
    "parking violation",
    "parking ticket",
    "parking citation",
    "traffic citation",

    "hardy student center police",
    "hardy police",
    "union police",
    "student center police",

    "sexual assault",
    "dating violence",
    "domestic violence",
    "stalking",
    "title ix",
    "violence against women",

    "officertrak",
    "event police",
    "event security",

    "1452 carter hill road",
    "wheeler watkins"
  ],

  description:
    "The Alabama State University Department of Public Safety provides campus law enforcement, emergency response, safety patrols, traffic enforcement, parking services, crime reporting, and other public-safety services for the ASU community. The main Public Safety location is on Carter Hill Road, and ASU also has a newer police presence inside the J. Garrick Hardy Student Center.",

  address:
    "1452 Carter Hill Road, Montgomery, AL",

  services: [
    "24-hour Campus Police",
    "Emergency response",
    "Crime reporting",
    "Traffic accident investigation",
    "Campus safety patrols",
    "Residence hall patrols",
    "Parking lot patrols",
    "Student parking decals",
    "Parking enforcement",
    "Parking boot and citation assistance",
    "Vehicle-related parking services",
    "Event security",
    "Hardy Student Center police access point"
  ],

  studentTip:
    "If you are in immediate danger, injured, or need urgent police or medical assistance, call 911 or ASU Campus Police at (334) 229-4400. Do not spend time walking across campus to the police building during an active emergency.",

  sections: [

    // =================================================
    // 24-HOUR CAMPUS POLICE
    // =================================================

    {
      name: "24-Hour Campus Police",

      keywords: [
        "campus police",
        "police",
        "public safety",
        "24 hour police",
        "24 hour",
        "emergency",
        "334 229 4400"
      ],

      description:
        "ASU Campus Police provides 24-hour law-enforcement and public-safety coverage for the university community.",

      features: [
        "24-hour police response",
        "Campus patrols",
        "Parking lot patrols",
        "Residence hall patrols",
        "Crime reporting",
        "Traffic investigations"
      ],

      studentTip:
        "Save ASU Campus Police in your phone: (334) 229-4400."
    },


    // =================================================
    // EMERGENCY VS NON-EMERGENCY
    // =================================================

    {
      name: "Emergency vs. Non-Emergency",

      keywords: [
        "emergency",
        "non emergency",
        "911",
        "urgent",
        "danger",
        "need police"
      ],

      description:
        "ASU students can contact Campus Police for incidents requiring law-enforcement assistance. Immediate threats, serious injuries, fires, or other urgent emergencies should be treated as emergencies.",

      studentTip:
        "For immediate danger or a life-threatening emergency, call 911. ASU Campus Police can also be reached 24 hours a day at (334) 229-4400."
    },


    // =================================================
    // MAIN PUBLIC SAFETY LOCATION
    // =================================================

    {
      name: "Main Department of Public Safety",

      keywords: [
        "main police station",
        "police department",
        "public safety building",
        "1452 carter hill road",
        "carter hill road",
        "where is campus police"
      ],

      description:
        "The main ASU Department of Public Safety is located at 1452 Carter Hill Road, across from the Wheeler-Watkins Baseball Complex.",

      location:
        "1452 Carter Hill Road, across from Wheeler-Watkins Baseball Complex.",

      studentTip:
        "If you know where the baseball complex is, you are very close to the main Public Safety building."
    },


    // =================================================
    // HARDY STUDENT CENTER POLICE LOCATION
    // =================================================

    {
      name: "Campus Police at Hardy Student Center",

      keywords: [
        "hardy police",
        "hardy student center police",
        "student center police",
        "union police",
        "police in union",
        "campus police hardy"
      ],

      description:
        "ASU also has a newer Campus Police/Public Safety presence inside the J. Garrick Hardy Student Center, giving students another convenient location to seek police or safety assistance.",

      studentTip:
        "The exact room number is not listed here. If you need the Hardy Student Center police location, check current signage or ask the Information Desk inside the Student Center."
    },


    // =================================================
    // PARKING DECALS
    // =================================================

    {
      name: "Student Parking Decals",

      keywords: [
        "parking decal",
        "parking decals",
        "parking permit",
        "parking permits",
        "parking sticker",
        "student parking",
        "vehicle registration",
        "register car"
      ],

      description:
        "ASU students are required to purchase a parking decal when registering a vehicle for campus parking.",

      features: [
        "Student parking decal services",
        "Vehicle parking registration",
        "Parking permit information",
        "Campus parking guidance"
      ],

      studentTip:
        "The Department of Public Safety handles student parking decal services. ASU currently lists the student parking decal fee as $70, but always check the current semester's fee schedule before paying."
    },


    // =================================================
    // CAR BOOT / PARKING VIOLATIONS
    // =================================================

    {
      name: "🚗 Car Booted? Parking Violation Help",

      keywords: [
        "boot",
        "car booted",
        "parking boot",
        "boot removal",
        "remove boot",
        "parking violation",
        "parking fine",
        "parking ticket",
        "parking citation",
        "traffic citation"
      ],

      description:
        "Students dealing with a parking boot, citation, or other parking-enforcement issue may need to contact or visit the Department of Public Safety for instructions on resolving the violation.",

      studentTip:
        "Do not attempt to remove an ASU parking boot yourself. Contact Public Safety for the proper steps, payment instructions, and official boot removal process."
    },


    // =================================================
    // PARKING ENFORCEMENT
    // =================================================

    {
      name: "Parking Enforcement",

      keywords: [
        "parking enforcement",
        "parking rules",
        "parking violation",
        "parking ticket",
        "parking citation",
        "where can i park",
        "student parking rules"
      ],

      description:
        "The Department of Public Safety helps enforce university parking and traffic regulations across campus.",

      studentTip:
        "Pay attention to the parking designation connected to your decal. A valid decal does not necessarily mean you can park in every campus lot."
    },


    // =================================================
    // CRIME REPORTING
    // =================================================

    {
      name: "Crime & Incident Reporting",

      keywords: [
        "report crime",
        "crime report",
        "crime",
        "theft",
        "stolen",
        "stolen property",
        "incident report",
        "police report"
      ],

      description:
        "Students, faculty, and staff may report crimes, suspicious activity, and other incidents requiring law-enforcement assistance directly to ASU Campus Police.",

      studentTip:
        "If something has been stolen or you are the victim or witness of a crime, report it as soon as possible. Waiting can make investigation and evidence collection more difficult."
    },


    // =================================================
    // TRAFFIC ACCIDENTS
    // =================================================

    {
      name: "Traffic Accidents",

      keywords: [
        "traffic accident",
        "car accident",
        "accident",
        "vehicle accident",
        "crash",
        "traffic investigation"
      ],

      description:
        "ASU Campus Police investigates traffic accidents and other vehicle-related incidents occurring within its campus jurisdiction.",

      studentTip:
        "If you are involved in a vehicle accident on campus, contact Campus Police and follow officer instructions rather than simply leaving the scene."
    },


    // =================================================
    // CAMPUS PATROLS
    // =================================================

    {
      name: "Campus, Parking Lot & Residence Hall Patrols",

      keywords: [
        "campus patrol",
        "parking lot patrol",
        "residence hall patrol",
        "dorm safety",
        "campus safety",
        "police patrol"
      ],

      description:
        "Campus Police provides 24-hour patrol coverage that includes campus parking lots and residence halls.",

      studentTip:
        "Public Safety is not limited to the police building. Officers patrol throughout campus, including residential and parking areas."
    },


    // =================================================
    // SEXUAL ASSAULT / DATING VIOLENCE / STALKING
    // =================================================

    {
      name: "Sexual Assault, Dating Violence & Stalking",

      keywords: [
        "sexual assault",
        "dating violence",
        "domestic violence",
        "stalking",
        "sexual misconduct",
        "title ix",
        "violence against women",
        "vawp"
      ],

      description:
        "Campus Police is one of ASU's reporting and emergency resources for sexual assault, dating or domestic violence, stalking, and related safety concerns.",

      studentTip:
        "If you are concerned about immediate safety or need medical attention, call Campus Police at (334) 229-4400 or 911. ASU also has Title IX, Counseling, and Violence Against Wo(men) Program resources for additional support."
    },


    // =================================================
    // EVENT SECURITY / OFFICERTRAK
    // =================================================

    {
      name: "Event Security & OfficerTRAK",

      keywords: [
        "officertrak",
        "event security",
        "event police",
        "hire police",
        "campus event security",
        "police for event"
      ],

      description:
        "ASU Public Safety provides an OfficerTRAK option for arranging licensed police officers for qualifying on-campus events.",

      studentTip:
        "Student organizations planning major events may need to coordinate security requirements through the university. Follow Student Life and Public Safety instructions before finalizing an event."
    },


    // =================================================
    // LOST OR STOLEN PROPERTY
    // =================================================

    {
      name: "Lost or Stolen Property",

      keywords: [
        "lost property",
        "stolen property",
        "lost item",
        "stolen item",
        "lost phone",
        "stolen phone",
        "lost wallet",
        "stolen wallet"
      ],

      description:
        "If an item may have been stolen or a loss involves suspicious circumstances, Campus Police can help with crime reporting and next steps.",

      studentTip:
        "For a simple lost item, also check the building or event location where you last had it. If you believe it was stolen, contact Campus Police."
    },


    // =================================================
    // TITLE IX & SAFETY CONNECTION
    // =================================================

    {
      name: "Title IX & Public Safety Connection",

      keywords: [
        "title ix",
        "title 9",
        "student safety",
        "sexual misconduct",
        "report incident",
        "report concern"
      ],

      description:
        "ASU's Title IX and student-support offices work alongside Public Safety when incidents involve potential crimes, threats to safety, or situations requiring law-enforcement assistance.",

      studentTip:
        "Campus Police and Title IX serve different roles. If you need emergency police assistance, contact Public Safety or 911. If you need to file or discuss a Title IX complaint, the Title IX office is located in the J. Garrick Hardy Student Center."
    }

  ],

  funFact:
    "ASU Campus Police officers have full law-enforcement authority and receive police-academy and specialized public-safety training while serving the university community.",

  image: "",
  mapLink: ""
},

// =====================================================
// ASU PRESIDENT'S HOME
// =====================================================

{
  id: 36,

  name: "ASU President's Home",
  shortName: "President's Home",
  category: "landmark",

  keywords: [
    "president home",
    "president's home",
    "presidents home",
    "asu president home",
    "asu president's home",

    "president house",
    "president's house",
    "presidents house",
    "asu president house",

    "president mansion",
    "president's mansion",
    "asu president mansion",

    "president residence",
    "presidential residence",
    "official residence",
    "university residence",

    "asu president",
    "university president",

    "landmark",
    "campus landmark",

    "friendship manor",
    "old president house",
    "old president's house",
    "historic president house",

    "1135 north university drive",
    "1135 n university drive",
    "north university drive"
  ],

  description:
    "The ASU President's Home is the university residence associated with the President of Alabama State University. It is an official campus property and landmark rather than a general academic or student-services building.",

  address:
    "1135 North University Drive, Montgomery, AL 36104",

  location:
    "Located on the Alabama State University campus along North University Drive.",

  services: [
    "Official university residence",
    "Presidential and university functions when scheduled",
    "Campus landmark"
  ],

  studentTip:
    "The President's Home is not a general student-services building or a place students should enter casually. Treat the property as a private and official university residence unless you have been invited to a university function or given instructions to visit.",

  sections: [

    // =================================================
    // WHAT IS THE PRESIDENT'S HOME?
    // =================================================

    {
      name: "What Is the President's Home?",

      keywords: [
        "president home",
        "president's home",
        "president house",
        "president mansion",
        "presidential residence",
        "official residence"
      ],

      description:
        "The President's Home is an official Alabama State University property associated with the university presidency. Unlike an academic building, residence hall, or student-service office, its primary purpose is connected with the university president and official university functions.",

      studentTip:
        "You may see the President's Home identified on an ASU campus map even though you never have a class or regular student appointment there. That is completely normal."
    },


    // =================================================
    // LOCATION
    // =================================================

    {
      name: "President's Home Location",

      keywords: [
        "where is president home",
        "where is president house",
        "president home location",
        "president house location",
        "president mansion location",
        "1135 north university drive",
        "1135 n university drive"
      ],

      description:
        "The ASU President's Home is located at 1135 North University Drive, Montgomery, Alabama 36104, along North University Drive on the Alabama State University campus.",

      location:
        "1135 North University Drive, Montgomery, AL 36104",

      studentTip:
        "Use the address to identify the property, but remember that the President's Home is not an open student-services destination."
    },


    // =================================================
    // STUDENT & VISITOR ACCESS
    // =================================================

    {
      name: "Student & Visitor Access",

      keywords: [
        "can students enter",
        "can i go inside",
        "can i visit",
        "visit president home",
        "visit president house",
        "president home access",
        "president house access",
        "private",
        "restricted"
      ],

      description:
        "The President's Home should not be treated as an open student building. Access may be limited to authorized individuals, invited guests, and people attending official university functions.",

      studentTip:
        "Do not walk into the President's Home simply because it appears as a building on the campus map. If you are invited to an event there, follow the instructions provided by ASU."
    },


    // =================================================
    // OFFICIAL UNIVERSITY FUNCTIONS
    // =================================================

    {
      name: "Official University Functions",

      keywords: [
        "president event",
        "presidential event",
        "president reception",
        "university reception",
        "official event",
        "official function",
        "invited event"
      ],

      description:
        "As an official university residence, the President's Home may be associated with presidential, university, ceremonial, or invited functions when scheduled.",

      studentTip:
        "If you are invited to a university function at the President's Home, pay attention to the event instructions because access, entrances, parking, and arrival procedures may differ from a normal campus building."
    },


    // =================================================
    // PRESIDENT'S HOME VS FRIENDSHIP MANOR
    // =================================================

    {
      name: "President's Home vs. Friendship Manor",

      keywords: [
        "friendship manor",
        "president home vs friendship manor",
        "old president house",
        "old president's house",
        "historic president house",
        "which president house",
        "former president house"
      ],

      description:
        "The current President's Home should not be confused with Friendship Manor. Friendship Manor is ASU's historic former President's Residence and has its own important connection to university and Civil Rights history.",

      studentTip:
        "Easy way to remember it: PRESIDENT'S HOME = the current university residence listed on the campus map. FRIENDSHIP MANOR = the historic former President's Residence and Civil Rights landmark."
    },


    // =================================================
    // FRIENDSHIP MANOR CONNECTION
    // =================================================

    {
      name: "Historic Presidential Residence",

      keywords: [
        "historic president residence",
        "historic president house",
        "friendship manor",
        "old president house",
        "old president residence",
        "former president residence"
      ],

      description:
        "Before the current President's Home, Friendship Manor served as an ASU President's Residence. The historic property housed university presidents and later became connected with important moments in Montgomery and ASU Civil Rights history.",

      studentTip:
        "If you are interested in ASU history or Civil Rights history, Friendship Manor is the historic presidential residence to look for in Hornet Navigator."
    },


    // =================================================
    // CIVIL RIGHTS HISTORY CONNECTION
    // =================================================

    {
      name: "Friendship Manor & Civil Rights History",

      keywords: [
        "civil rights",
        "friendship manor",
        "martin luther king",
        "martin luther king jr",
        "mlk",
        "civil rights history",
        "asu civil rights"
      ],

      description:
        "Friendship Manor, ASU's historic former presidential residence, became connected with the Civil Rights Movement. Dr. Martin Luther King Jr. stayed there after his Montgomery home was bombed in 1956.",

      studentTip:
        "This history belongs to Friendship Manor rather than the current President's Home, which is why Hornet Navigator keeps the two locations distinct."
    },


    // =================================================
    // CAMPUS LANDMARK
    // =================================================

    {
      name: "Campus Landmark",

      keywords: [
        "landmark",
        "campus landmark",
        "president house landmark",
        "president home landmark",
        "campus map"
      ],

      description:
        "Even though most students will never need to enter the President's Home, identifying it in Hornet Navigator helps students understand campus geography and recognize the properties shown on ASU campus maps.",

      studentTip:
        "Hornet Navigator includes some locations because knowing what a building is and where it is located can be useful even when students do not normally need to go inside."
    }

  ],

  history: {
    year: 1970,

    description:
      "Alabama State University facilities records date the current President's Home to 1970. The current residence is separate from Friendship Manor, ASU's historic former President's Residence."
  },

  funFact:
    "ASU has both a current President's Home and a historic former presidential residence. Friendship Manor is the older property and became connected with significant Civil Rights history in Montgomery.",

  image: "",
  mapLink: ""
},

// =====================================================
// ASU INVENTORY CONTROL / RECEIVING
// =====================================================

{
  id: 37,

  name: "ASU Inventory Control & Receiving",
  shortName: "Inventory Control",
  category: "student-services",

  keywords: [
    "inventory control",
    "asu inventory control",
    "inventory",
    "inventory building",

    "receiving",
    "asu receiving",
    "receiving department",
    "university receiving",
    "receiving warehouse",

    "warehouse",
    "asu warehouse",
    "campus warehouse",

    "logistics",
    "logistics services",
    "asu logistics",

    "distribution",
    "distribution and receiving",
    "campus distribution",

    "delivery",
    "deliveries",
    "university delivery",
    "department delivery",
    "delivery inquiry",

    "334 229 4295",
    "229 4295",

    "surplus",
    "surplus equipment",
    "university surplus",
    "equipment surplus",

    "university property",
    "asu property",
    "property inventory",
    "equipment inventory",
    "campus equipment",

    "inventory assistant",
    "inventory manager",
    "receiving manager",
    "warehouse clerk",

    "package",
    "packages",
    "student package",
    "package pickup",
    "student mail",
    "mail center",

    "facilities management",
    "facilities operations"
  ],

  description:
    "ASU Inventory Control & Receiving is an operational facility that supports Alabama State University's inventory, logistics, distribution, receiving, and surplus-equipment functions. The building is primarily used by university employees and departments handling university property, equipment, deliveries, and other logistical operations.",

  services: [
    "Inventory Control",
    "University Receiving",
    "Distribution services",
    "Logistics services",
    "University property and equipment inventory",
    "Receiving and warehouse operations",
    "Surplus equipment coordination",
    "University delivery assistance"
  ],

  studentTip:
    "Most students will never need to visit Inventory Control & Receiving, and that is completely normal. This building primarily supports university departments, employees, equipment, property, and deliveries. Do not come here to pick up your regular student packages.",

  sections: [

    // =================================================
    // WHAT IS INVENTORY CONTROL?
    // =================================================

    {
      name: "What Is Inventory Control?",

      keywords: [
        "what is inventory control",
        "inventory control",
        "inventory",
        "inventory building",
        "university inventory",
        "asu property"
      ],

      description:
        "Inventory Control helps Alabama State University manage university-owned property, equipment, and other inventory-related responsibilities.",

      studentTip:
        "Think of Inventory Control as a behind-the-scenes university operations department. It helps ASU keep track of property and equipment rather than providing everyday student services."
    },


    // =================================================
    // RECEIVING
    // =================================================

    {
      name: "University Receiving",

      keywords: [
        "receiving",
        "asu receiving",
        "receiving department",
        "university receiving",
        "receiving warehouse",
        "delivery",
        "deliveries",
        "university delivery"
      ],

      description:
        "Receiving supports deliveries intended for Alabama State University and works with university departments as part of ASU's larger logistics operation.",

      studentTip:
        "Receiving is primarily for university business and departmental deliveries. It should not be confused with the student Mail Center."
    },


    // =================================================
    // RECEIVING CONTACT
    // =================================================

    {
      name: "Receiving & Delivery Questions",

      keywords: [
        "receiving phone",
        "receiving contact",
        "delivery question",
        "delivery inquiry",
        "where is my delivery",
        "334 229 4295",
        "229 4295"
      ],

      description:
        "ASU currently directs university delivery inquiries to Receiving at (334) 229-4295.",

      studentTip:
        "This number is intended for Receiving and university delivery questions. If you are a student looking for a personal package, start with the ASU Mail Center instead."
    },


    // =================================================
    // LOGISTICS SERVICES
    // =================================================

    {
      name: "Logistics Services",

      keywords: [
        "logistics",
        "logistics services",
        "asu logistics",
        "campus logistics",
        "distribution",
        "receiving",
        "inventory"
      ],

      description:
        "ASU Facilities Management & Operations identifies Inventory, Distribution & Receiving, and Surplus Equipment as parts of its Logistics Services operation.",

      features: [
        "Inventory",
        "Distribution",
        "Receiving",
        "Surplus equipment"
      ],

      studentTip:
        "Logistics Services helps move and manage university resources behind the scenes. Students benefit from these operations even if they never interact with the department directly."
    },


    // =================================================
    // INVENTORY & UNIVERSITY PROPERTY
    // =================================================

    {
      name: "University Property & Equipment",

      keywords: [
        "university property",
        "asu property",
        "equipment",
        "university equipment",
        "equipment inventory",
        "property inventory",
        "inventory equipment"
      ],

      description:
        "Inventory Control supports the management and tracking of university-owned property and equipment.",

      studentTip:
        "This is primarily an administrative responsibility for university property. Personal student belongings are not normally handled as university inventory."
    },


    // =================================================
    // SURPLUS EQUIPMENT
    // =================================================

    {
      name: "Surplus Equipment",

      keywords: [
        "surplus",
        "surplus equipment",
        "university surplus",
        "asu surplus",
        "old equipment",
        "unused equipment"
      ],

      description:
        "Surplus Equipment is part of ASU's Logistics Services operation and relates to university property or equipment that must be handled through the appropriate institutional process.",

      studentTip:
        "Surplus equipment is university property. Do not assume unused-looking furniture, electronics, or equipment around campus is free for students to take."
    },


    // =================================================
    // WAREHOUSE / RECEIVING OPERATIONS
    // =================================================

    {
      name: "Warehouse & Receiving Operations",

      keywords: [
        "warehouse",
        "asu warehouse",
        "receiving warehouse",
        "warehouse clerk",
        "receiving clerk",
        "receiving manager"
      ],

      description:
        "Inventory Control includes staff responsible for receiving and warehouse operations, supporting the movement and management of university property and deliveries.",

      studentTip:
        "Warehouse and receiving areas are working operational spaces. Students should not enter restricted work areas unless they have university business there or have been directed by staff."
    },


    // =================================================
    // NOT STUDENT PACKAGE PICKUP
    // =================================================

    {
      name: "Looking for a Student Package?",

      keywords: [
        "package",
        "packages",
        "student package",
        "package pickup",
        "pick up package",
        "where is my package",
        "mail",
        "student mail",
        "mail center"
      ],

      description:
        "Inventory Control & Receiving is not the normal pickup location for personal student mail and packages.",

      studentTip:
        "If you received a student package or mail notification, do NOT automatically come to Inventory Control. Student mail and package services are handled through ASU's Mail Center."
    },


    // =================================================
    // RECEIVING VS MAIL CENTER
    // =================================================

    {
      name: "Receiving vs. Student Mail Center",

      keywords: [
        "receiving vs mail center",
        "receiving or mail center",
        "mail center",
        "student package",
        "university delivery",
        "department delivery"
      ],

      description:
        "Receiving primarily handles university and departmental logistics, while the ASU Mail Center handles student mail and package services.",

      studentTip:
        "Easy way to remember it: UNIVERSITY/DEPARTMENT DELIVERY = Receiving. YOUR PERSONAL STUDENT MAIL OR PACKAGE = Mail Center."
    },


    // =================================================
    // PROCUREMENT VS RECEIVING
    // =================================================

    {
      name: "Procurement vs. Receiving",

      keywords: [
        "procurement",
        "receiving",
        "procurement vs receiving",
        "purchasing",
        "delivery",
        "purchase order"
      ],

      description:
        "Procurement and Receiving work with different parts of the university purchasing process. Procurement supports purchasing, vendors, bids, contracts, and acquisitions, while Receiving handles delivery-related logistics after goods arrive at the university.",

      studentTip:
        "ASU Procurement is located in the Physical Plant Building. If your question is specifically about a university delivery, ASU directs delivery inquiries to Receiving."
    },


    // =================================================
    // WHO USES THIS BUILDING?
    // =================================================

    {
      name: "Who Usually Uses This Building?",

      keywords: [
        "who uses inventory",
        "who uses receiving",
        "why go to inventory control",
        "why go to receiving",
        "inventory services"
      ],

      description:
        "Inventory Control & Receiving is primarily used by university employees, departments, logistics personnel, warehouse and receiving staff, and others handling ASU property, equipment, deliveries, and surplus items.",

      studentTip:
        "If you have never heard of this building during your time at ASU, you are not missing a major student service. Its work is mainly operational and happens behind the scenes."
    },


    // =================================================
    // INVENTORY CONTROL STAFF
    // =================================================

    {
      name: "Inventory & Receiving Staff",

      keywords: [
        "inventory staff",
        "receiving staff",
        "inventory manager",
        "receiving manager",
        "inventory assistant",
        "warehouse clerk"
      ],

      description:
        "ASU's current staff directory includes Inventory Control personnel working in inventory management, receiving, warehouse operations, surplus coordination, and inventory assistance.",

      studentTip:
        "If a university employee or department sends you to Inventory Control for a specific reason, ask for the staff member or service named in your instructions rather than wandering through warehouse or operational areas."
    }

  ],

  funFact:
    "Inventory Control is one of the ASU facilities most students may never enter, but its staff help manage the equipment, property, deliveries, distribution, and logistics needed to keep a university campus operating.",

  image: "",
  mapLink: ""
},

// =====================================================
// OLEAN BLACK UNDERWOOD TENNIS CENTER
// =====================================================

{
  id: 38,

  name: "Olean Black Underwood Tennis Center",
  shortName: "Underwood Tennis Center",
  category: "athletics",

  keywords: [
    "underwood tennis",
    "underwood tennis center",
    "olean black underwood",
    "olean black underwood tennis center",
    "asu tennis",
    "asu tennis center",

    "tennis",
    "tennis courts",
    "tennis court",
    "play tennis",
    "student tennis",
    "recreational tennis",

    "mens tennis",
    "men's tennis",
    "womens tennis",
    "women's tennis",
    "tennis team",
    "tennis teams",
    "hornets tennis",

    "tennis practice",
    "tennis match",
    "tennis matches",
    "home tennis match",
    "tennis tournament",
    "tennis tournaments",

    "12 courts",
    "lighted courts",
    "hard courts",
    "outdoor tennis",

    "locker room",
    "locker rooms",
    "dressing room",
    "dressing rooms",
    "showers",

    "tennis coaches",
    "coach office",
    "coaches office",
    "team meeting room",

    "tennis classroom",
    "tennis instruction",
    "tennis teaching",

    "1994",
    "athletics",
    "athletic facility",

    "521 hamilton street",
    "521 hamilton st",
    "hamilton street"
  ],

  description:
    "The Olean Black Underwood Tennis Center is Alabama State University's primary tennis facility and the home of ASU's championship tennis programs. The outdoor complex features 12 lighted hard courts along with facilities supporting ASU tennis practices, matches, coaching, team activities, and tournament competition.",

  address:
    "521 Hamilton Street, Montgomery, AL 36106",

  location:
    "Located on the Alabama State University campus in the university's athletics area.",

  services: [
    "12 lighted hard tennis courts",
    "ASU men's tennis",
    "ASU women's tennis",
    "Varsity tennis practices",
    "Home tennis matches",
    "Tournament competition",
    "Coaches' offices",
    "Locker and dressing areas",
    "Team meeting space",
    "Tennis instruction and training"
  ],

  studentTip:
    "Want to play tennis? Remember that Underwood is also ASU's varsity tennis facility. Team practices, matches, tournaments, and scheduled university activities may take priority. Never interrupt an ASU team practice or scheduled match, and check court availability before assuming a court is open for recreational use.",

  sections: [

    // =================================================
    // HOME OF ASU TENNIS
    // =================================================

    {
      name: "Home of ASU Tennis",

      keywords: [
        "asu tennis",
        "hornets tennis",
        "tennis team",
        "tennis teams",
        "mens tennis",
        "men's tennis",
        "womens tennis",
        "women's tennis"
      ],

      description:
        "The Olean Black Underwood Tennis Center is the home facility for Alabama State University's tennis programs. ASU student-athletes use the complex for training, practices, home competition, and other team activities.",

      studentTip:
        "If you are looking for ASU men's or women's tennis, Underwood Tennis Center is the facility you want."
    },


    // =================================================
    // 12 LIGHTED HARD COURTS
    // =================================================

    {
      name: "12 Lighted Hard Courts",

      keywords: [
        "12 courts",
        "tennis courts",
        "lighted courts",
        "hard courts",
        "outdoor courts",
        "night tennis"
      ],

      description:
        "Underwood Tennis Center features 12 lighted hard courts, giving ASU a tournament-capable tennis complex for practices, matches, and other scheduled tennis activities.",

      studentTip:
        "Because the courts are lighted, the facility can support tennis activities beyond normal daylight hours when officially scheduled."
    },


    // =================================================
    // MEN'S & WOMEN'S TENNIS
    // =================================================

    {
      name: "Men's & Women's Tennis",

      keywords: [
        "mens tennis",
        "men's tennis",
        "womens tennis",
        "women's tennis",
        "tennis athlete",
        "tennis athletes",
        "tennis player",
        "tennis players"
      ],

      description:
        "Underwood Tennis Center supports Alabama State University's men's and women's varsity tennis programs.",

      studentTip:
        "ASU tennis athletes may be practicing even when there is no official match happening. Give the teams space and follow any posted or staff instructions around court access."
    },


    // =================================================
    // STUDENT RECREATIONAL TENNIS
    // =================================================

    {
      name: "Student Recreational Tennis",

      keywords: [
        "play tennis",
        "student tennis",
        "recreational tennis",
        "recreation",
        "tennis for students",
        "can students play tennis",
        "use tennis court",
        "use tennis courts",
        "workout",
        "exercise"
      ],

      description:
        "Tennis is one of the recreational activities available to the ASU community. However, Underwood is also an active varsity athletics facility, so recreational court availability may depend on team practices, matches, tournaments, university programming, and other scheduled activities.",

      studentTip:
        "Do not assume an empty-looking court is available at every time of day. Athletics scheduling and team activities take priority, so check current access expectations when necessary."
    },


    // =================================================
    // PRACTICES
    // =================================================

    {
      name: "ASU Tennis Practices",

      keywords: [
        "tennis practice",
        "tennis practices",
        "team practice",
        "tennis training",
        "athlete practice"
      ],

      description:
        "ASU tennis student-athletes use Underwood Tennis Center for practices and training throughout their competitive seasons.",

      studentTip:
        "If an ASU team is practicing, do not enter their court or interfere with training. Use another available recreational option or return when the facility is available."
    },


    // =================================================
    // HOME MATCHES
    // =================================================

    {
      name: "ASU Tennis Matches",

      keywords: [
        "tennis match",
        "tennis matches",
        "home tennis",
        "home tennis match",
        "watch tennis",
        "tennis game",
        "tennis schedule"
      ],

      description:
        "Underwood Tennis Center serves as a home competition venue for Alabama State tennis.",

      studentTip:
        "If you want to support ASU Athletics beyond football and basketball, tennis is another Hornet sport you can follow. Check the current ASU Athletics schedule for home-match dates and any event-specific attendance information."
    },


    // =================================================
    // TOURNAMENTS
    // =================================================

    {
      name: "Tennis Tournaments",

      keywords: [
        "tennis tournament",
        "tennis tournaments",
        "college tournament",
        "community tournament",
        "tournament tennis",
        "tennis event"
      ],

      description:
        "The Underwood Tennis Center was designed with tournament capabilities and has hosted collegiate and community tennis events.",

      studentTip:
        "Court availability may be especially limited during tournaments or major tennis events."
    },


    // =================================================
    // LOCKER & DRESSING AREAS
    // =================================================

    {
      name: "Locker & Dressing Areas",

      keywords: [
        "locker room",
        "locker rooms",
        "dressing room",
        "dressing rooms",
        "showers",
        "tennis locker room"
      ],

      description:
        "ASU historical facility descriptions identify men's and women's dressing areas with lockers and showers as part of the Underwood Tennis Center clubhouse.",

      studentTip:
        "These areas are associated primarily with athletic and scheduled facility use. Do not assume team locker or dressing areas are open for general recreational access."
    },


    // =================================================
    // COACHES' OFFICES
    // =================================================

    {
      name: "Tennis Coaches' Offices",

      keywords: [
        "tennis coach",
        "tennis coaches",
        "coach office",
        "coaches office",
        "tennis office",
        "tennis staff"
      ],

      description:
        "The Underwood Tennis Center includes office space for ASU's tennis coaching operations.",

      studentTip:
        "If you are interested in ASU tennis as a student-athlete, prospective athlete, or team-related participant, follow the appropriate Athletics contact process rather than entering team areas without permission."
    },


    // =================================================
    // TEAM MEETING ROOM
    // =================================================

    {
      name: "Team Meeting Space",

      keywords: [
        "team meeting",
        "team meeting room",
        "tennis meeting",
        "tennis team room"
      ],

      description:
        "The tennis facility includes team meeting space supporting Alabama State University's tennis programs."
    },


    // =================================================
    // CLASSROOM / ON-SITE TEACHING
    // =================================================

    {
      name: "Classroom & On-Site Teaching",

      keywords: [
        "tennis classroom",
        "classroom",
        "tennis class",
        "tennis teaching",
        "on site teaching",
        "tennis instruction"
      ],

      description:
        "ASU historical facility descriptions identify a classroom within the Underwood Tennis Center clubhouse for on-site teaching.",

      studentTip:
        "The Tennis Center is more than a collection of outdoor courts. Its clubhouse was designed to support instruction and athletics operations as well."
    },


    // =================================================
    // LOCATION
    // =================================================

    {
      name: "Underwood Tennis Center Location",

      keywords: [
        "where is underwood",
        "where is tennis center",
        "underwood location",
        "tennis center location",
        "521 hamilton street",
        "521 hamilton st",
        "hamilton street"
      ],

      description:
        "The Olean Black Underwood Tennis Center is located on the Alabama State University campus. Current map listings identify the tennis courts at 521 Hamilton Street, Montgomery, Alabama 36106.",

      location:
        "521 Hamilton Street, Montgomery, AL 36106",

      studentTip:
        "Look for the large group of outdoor tennis courts in ASU's athletics area."
    },


    // =================================================
    // FACILITY ACCESS
    // =================================================

    {
      name: "Court Access & Athletics Scheduling",

      keywords: [
        "court access",
        "tennis access",
        "court availability",
        "tennis availability",
        "can i play",
        "can students use courts",
        "open tennis courts"
      ],

      description:
        "Underwood Tennis Center is an active collegiate athletics facility. Access to individual courts can depend on varsity practices, home matches, tournaments, maintenance, university events, and other scheduled activities.",

      studentTip:
        "Hornet Navigator should not be used as a guarantee that a court is open at a particular time. Follow posted rules and instructions from Athletics staff."
    },


    // =================================================
    // FACILITY HISTORY
    // =================================================

    {
      name: "Underwood Tennis Center History",

      keywords: [
        "underwood history",
        "tennis center history",
        "1994",
        "when was underwood built",
        "when was tennis center built"
      ],

      description:
        "The Olean Black Underwood Tennis Center dates to 1994. ASU archival records document a ribbon-cutting for the Underwood Tennis Center and C.J. Dunn Tower during that period.",

      studentTip:
        "Underwood and Dunn Tower are both part of the major campus development ASU completed during the 1990s."
    },


    // =================================================
    // RESPECT THE ATHLETES
    // =================================================

    {
      name: "Respect Team Practices & Matches",

      keywords: [
        "practice rules",
        "tennis rules",
        "court rules",
        "athletes practicing",
        "team practicing"
      ],

      description:
        "Because Underwood is the home of ASU varsity tennis, students using or visiting the area should respect practices, matches, coaches, athletes, officials, and scheduled events.",

      studentTip:
        "If athletes are practicing or a match is underway, do not walk onto an active court, retrieve balls from an active playing area without permission, or interrupt team activities."
    }

  ],

  history: {
    year: 1994,

    description:
      "The Olean Black Underwood Tennis Center opened during ASU's major campus expansion in the 1990s. University records describe it as a 12-court lighted complex with tournament capabilities and a clubhouse containing offices, dressing rooms, lockers, showers, and instructional space."
  },

  funFact:
    "Underwood Tennis Center is not just a set of recreational courts. It is a tournament-capable 12-court collegiate facility and the home of Alabama State University's tennis programs.",

  image: "",
  mapLink: ""
},

// =====================================================
// JO ANN ROBINSON HALL
// =====================================================

{
  id: 39,

  name: "Jo Ann Robinson Hall",
  shortName: "Jo Ann Robinson",
  category: "housing",

  keywords: [
    "jo ann robinson",
    "jo ann robinson hall",
    "joann robinson",
    "joann robinson hall",
    "jo ann",
    "joann",

    "bibb graves",
    "bibb graves hall",
    "old bibb graves",
    "former bibb graves hall",

    "residence hall",
    "residential hall",
    "dorm",
    "dormitory",
    "housing",
    "upperclassman housing",
    "upperclass housing",
    "upperclassman dorm",

    "women residence hall",
    "women housing",
    "female residence hall",

    "suite",
    "suite style",
    "suite style housing",
    "four to a suite",
    "4 to a suite",
    "two to a room",
    "2 to a room",
    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "single room",
    "single rooms",
    "single dorm",
    "private room",

    "common area",
    "shared common area",
    "living room",
    "lounge",
    "shared living room",

    "shared bathroom",
    "suite bathroom",
    "bathroom",

    "study room",
    "study rooms",
    "study area",
    "study space",

    "computer lab",
    "computer room",

    "wifi",
    "wi-fi",
    "internet",

    "ra",
    "resident assistant",
    "resident assistants",
    "residence assistant",

    "accessible room",
    "accessible rooms",
    "disability room",
    "disability rooms",
    "ada room",
    "housing accommodation",

    "laundry",
    "laundry room",
    "wash clothes",
    "washer",
    "washers",
    "dryer",
    "dryers",

    "speed queen",
    "speed queen app",
    "laundry app",
    "laundry money",
    "laundry payment",
    "10 dollars",
    "$10",
    "coins",
    "quarters",

    "upperclass student",
    "upperclass students",

    "jo ann robinson history",
    "civil rights",
    "civil rights history",
    "montgomery bus boycott",
    "bus boycott",
    "womens political council",
    "women's political council",

    "ralph david abernathy",
    "student activism",

    "1929",
    "historic residence hall",

    "334 229 4422",
    "229 4422"
  ],

  description:
    "Jo Ann Robinson Hall is a historic Alabama State University residence hall that primarily serves upperclass students. The hall offers suite-style living, study spaces, common areas, laundry facilities, Wi-Fi, resident assistants, and other residential resources. The building is also deeply connected to ASU and Montgomery Civil Rights history.",

  phone:
    "(334) 229-4422",

  services: [
    "Upperclass residence housing",
    "Suite-style rooms",
    "Double-room accommodations",
    "Single-room options when available",
    "Accessible housing accommodations",
    "Shared suite bathrooms",
    "Shared common areas",
    "Study rooms",
    "Computer lab",
    "Laundry facilities",
    "Speed Queen laundry system",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "Jo Ann Robinson Hall uses a suite-style setup. A common arrangement is two students per bedroom and four students sharing a suite, bathroom, and common area. Because you are sharing space with several people, communicate early about cleaning, bathroom schedules, guests, noise, shared supplies, and common-area expectations.",

  sections: [

    // =================================================
    // UPPERCLASSMAN RESIDENCE HALL
    // =================================================

    {
      name: "Upperclassman Residence Hall",

      keywords: [
        "upperclassman",
        "upperclass housing",
        "upperclassman housing",
        "upperclass dorm",
        "upperclassman dorm",
        "women housing",
        "female residence hall"
      ],

      description:
        "Jo Ann Robinson Hall primarily serves upperclass students and has historically operated as a women's residence hall.",

      studentTip:
        "Housing assignments can change from year to year, so students should always check their current ASU Housing assignment rather than assuming a residence hall serves the exact same population every semester."
    },


    // =================================================
    // SUITE-STYLE ROOM SETUP
    // =================================================

    {
      name: "Suite-Style Room Setup",

      keywords: [
        "suite",
        "suite style",
        "suite style housing",
        "two to a room",
        "2 to a room",
        "four to a suite",
        "4 to a suite",
        "room setup",
        "room layout"
      ],

      description:
        "Jo Ann Robinson Hall uses suite-style housing. A common setup includes two residents sharing a bedroom and four residents sharing the larger suite.",

      features: [
        "Two residents per bedroom in many suites",
        "Four residents sharing a suite",
        "Shared bathroom",
        "Shared common area",
        "Suite-style residential layout"
      ],

      studentTip:
        "Four people sharing a suite means communication matters. Decide early how everyone will handle cleaning, bathroom time, trash, shared items, quiet hours, guests, and use of the common area."
    },


    // =================================================
    // SINGLE ROOMS
    // =================================================

    {
      name: "Single-Room Options",

      keywords: [
        "single room",
        "single rooms",
        "single dorm",
        "private room",
        "one person room"
      ],

      description:
        "Jo Ann Robinson Hall may also offer single-room accommodations depending on housing availability and current assignment policies.",

      studentTip:
        "Single rooms are limited and should never be assumed to be automatically available. Housing assignments depend on availability, eligibility, accommodations, and current Residence Life policies."
    },


    // =================================================
    // ACCESSIBLE HOUSING
    // =================================================

    {
      name: "Accessible Housing Accommodations",

      keywords: [
        "accessible room",
        "accessible rooms",
        "disability room",
        "disability rooms",
        "ada room",
        "housing accommodation",
        "disability accommodation",
        "accessible housing"
      ],

      description:
        "Jo Ann Robinson Hall includes residential spaces that may support students with approved accessibility or disability-related housing needs.",

      studentTip:
        "If you need a disability-related housing accommodation, do not wait until move-in. Work with ASU Housing & Residence Life and the Office of Disability Services so your needs can be reviewed and the appropriate housing arrangement can be made."
    },


    // =================================================
    // SHARED BATHROOM
    // =================================================

    {
      name: "Shared Suite Bathroom",

      keywords: [
        "bathroom",
        "shared bathroom",
        "suite bathroom",
        "bathroom sharing",
        "shared restroom"
      ],

      description:
        "Residents in a suite share the bathroom with their suitemates rather than using a large traditional community bathroom for the entire floor.",

      studentTip:
        "Talk with your suitemates about cleaning responsibilities before the bathroom becomes a problem. A simple rotating cleaning schedule can save everybody an argument later."
    },


    // =================================================
    // COMMON AREA / LIVING ROOM
    // =================================================

    {
      name: "Suite Common Area & Living Space",

      keywords: [
        "common area",
        "shared common area",
        "living room",
        "shared living room",
        "suite living room",
        "lounge"
      ],

      description:
        "Suite residents share a common living area that can be used for relaxing, talking with suitemates, and spending time together.",

      studentTip:
        "Remember that the common area belongs to everyone in the suite. Avoid taking it over with personal belongings, guests, or noise without talking with your suitemates first."
    },


    // =================================================
    // STUDY ROOMS
    // =================================================

    {
      name: "Study Rooms",

      keywords: [
        "study room",
        "study rooms",
        "study area",
        "study space",
        "quiet study",
        "where to study"
      ],

      description:
        "Jo Ann Robinson Hall provides study rooms on its residential floors, giving residents a place to work outside their bedrooms.",

      studentTip:
        "The study room can be especially useful when your roommate is sleeping, talking on the phone, watching television, or having visitors."
    },


    // =================================================
    // COMPUTER LAB
    // =================================================

    {
      name: "Computer Lab",

      keywords: [
        "computer lab",
        "computer room",
        "computer",
        "residence hall computer",
        "computer access"
      ],

      description:
        "Jo Ann Robinson Hall has historically included a computer lab for residents.",

      studentTip:
        "Computer availability, equipment, and access rules can change, so check the current residence-hall setup if you specifically need computer access."
    },


    // =================================================
    // WI-FI
    // =================================================

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless",
        "residence hall wifi",
        "dorm internet"
      ],

      description:
        "Wi-Fi service is available for residents as part of the residence-hall environment.",

      studentTip:
        "Internet issues can happen at the worst possible time. If you have an assignment due, avoid waiting until the last few minutes to upload it."
    },


    // =================================================
    // RESIDENT ASSISTANTS
    // =================================================

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "residence assistant",
        "floor ra",
        "hall staff"
      ],

      description:
        "Resident Assistants help support students living in ASU residence halls. RAs are assigned throughout the residential community and help with questions, community expectations, programs, roommate concerns, emergencies, and other residence-life needs.",

      studentTip:
        "Learn who your RA is early in the semester. Do not wait until you have a serious problem to figure out who your residence-hall staff are."
    },


    // =================================================
    // ROOMMATES & SUITEMATES
    // =================================================

    {
      name: "Living With Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "suite problem",
        "roommate conflict",
        "shared room"
      ],

      description:
        "Suite-style living means residents share both personal and common spaces with roommates and suitemates.",

      studentTip:
        "Talk about expectations before problems start. Discuss sleep schedules, alarms, cleanliness, guests, borrowing items, bathroom use, noise, food, shared supplies, and how everyone wants the common area used."
    },


    // =================================================
    // LAUNDRY & SPEED QUEEN
    // =================================================

    {
      name: "🧺 Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "wash clothes",
        "washing clothes",
        "washer",
        "washers",
        "dryer",
        "dryers",
        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry money",
        "add laundry money",
        "laundry payment",
        "10 dollars",
        "$10",
        "coins",
        "quarters",
        "laundry coins"
      ],

      description:
        "Jo Ann Robinson Hall has laundry facilities available on each floor. Students commonly use the Speed Queen app to pay for and manage residence-hall laundry.",

      features: [
        "Laundry facilities on each floor",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the machine"
      ],

      studentTip:
        "When adding money through the Speed Queen app, students report that the minimum amount you can load is $10. You cannot load less than $10, although you can add more. It is also smart to keep quarters available as a backup in case the internet is down or Speed Queen has a technical problem. Check the individual machine first to make sure it currently accepts coins."
    },


    // =================================================
    // LAUNDRY ETIQUETTE
    // =================================================

    {
      name: "Laundry Tips & Etiquette",

      keywords: [
        "laundry tips",
        "laundry etiquette",
        "washing clothes",
        "dryer finished",
        "washer finished",
        "laundry timer"
      ],

      description:
        "Residence-hall laundry rooms are shared spaces, so residents should be considerate of others who may be waiting for a machine.",

      studentTip:
        "Set a timer when you start your washer or dryer and return when the cycle is finished. Avoid leaving clothes sitting in a machine for a long time, and do not leave valuable personal belongings unattended in the laundry room."
    },


    // =================================================
    // LAUNDRY MACHINE PROBLEMS
    // =================================================

    {
      name: "Laundry Machine Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "laundry broken",
        "speed queen problem",
        "speed queen error",
        "laundry error",
        "laundry refund",
        "machine not working"
      ],

      description:
        "If a residence-hall washer, dryer, or laundry payment system is not working correctly, residents should report the issue through the appropriate residence-hall staff or current laundry-support process.",

      studentTip:
        "Do not keep repeatedly paying a machine that is clearly malfunctioning. Document the machine number or error when possible and report the problem."
    },


    // =================================================
    // HALL PHONE
    // =================================================

    {
      name: "Jo Ann Robinson Hall Contact",

      keywords: [
        "jo ann phone",
        "joann phone",
        "hall phone",
        "residence hall phone",
        "334 229 4422",
        "229 4422"
      ],

      description:
        "The current ASU Guide to Campus Living lists Jo Ann Robinson Hall at (334) 229-4422.",

      contact:
        "(334) 229-4422",

      studentTip:
        "For emergencies, use the appropriate emergency or Campus Police number rather than relying only on the residence-hall office phone."
    },


    // =================================================
    // HOUSING & RESIDENCE LIFE
    // =================================================

    {
      name: "Housing & Residence Life",

      keywords: [
        "housing office",
        "housing and residence life",
        "residence life",
        "housing help",
        "housing problem",
        "room assignment"
      ],

      description:
        "ASU Housing & Residence Life manages residence-hall assignments, policies, residential support, and other university housing functions.",

      studentTip:
        "If your issue cannot be resolved inside the residence hall, Housing & Residence Life is located in the J. Garrick Hardy Student Center."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Residence Hall Maintenance",

      keywords: [
        "maintenance",
        "dorm maintenance",
        "room maintenance",
        "something broken",
        "broken room",
        "air conditioning",
        "ac broken",
        "leak",
        "toilet broken",
        "sink broken"
      ],

      description:
        "Residence-hall maintenance concerns should be reported through the appropriate hall or Housing & Residence Life process so Facilities Management can address the issue.",

      studentTip:
        "If something breaks in your room or suite, report it early. Do not wait until a small leak, HVAC problem, or broken fixture becomes a much larger issue."
    },


    // =================================================
    // ROOM SAFETY
    // =================================================

    {
      name: "Room & Suite Safety",

      keywords: [
        "room safety",
        "dorm safety",
        "suite safety",
        "lock door",
        "residence hall safety",
        "secure room"
      ],

      description:
        "Residents are responsible for helping maintain a safe residential environment and following current Housing & Residence Life policies.",

      studentTip:
        "Lock your room when you leave, even if you are only going down the hall. Do not give your room access to people who are not authorized residents or guests."
    },


    // =================================================
    // WHO WAS JO ANN ROBINSON?
    // =================================================

    {
      name: "Who Was Jo Ann Robinson?",

      keywords: [
        "jo ann robinson",
        "joann robinson",
        "who was jo ann robinson",
        "civil rights",
        "civil rights leader",
        "english professor",
        "asu professor",
        "womens political council",
        "women's political council"
      ],

      description:
        "Jo Ann Robinson was an Alabama State University English professor, civil-rights activist, and leader in Montgomery's Women's Political Council. She played a major role in organizing the Montgomery Bus Boycott.",

      studentTip:
        "Jo Ann Robinson was not an Alabama governor. She was an ASU professor and Civil Rights organizer. The building's former name, Bibb Graves Hall, came from former Alabama Governor David Bibb Graves."
    },


    // =================================================
    // MONTGOMERY BUS BOYCOTT
    // =================================================

    {
      name: "Montgomery Bus Boycott History",

      keywords: [
        "montgomery bus boycott",
        "bus boycott",
        "civil rights",
        "civil rights movement",
        "jo ann robinson boycott",
        "womens political council",
        "women's political council"
      ],

      description:
        "Jo Ann Robinson and the Women's Political Council played a central role in organizing the Montgomery Bus Boycott. After Rosa Parks was arrested, Robinson helped rapidly produce and distribute thousands of notices calling for the boycott.",

      studentTip:
        "Robinson's work connects ASU directly to one of the defining campaigns of the Civil Rights Movement."
    },


    // =================================================
    // COUNCILL HALL CONNECTION
    // =================================================

    {
      name: "Councill Hall Civil Rights Connection",

      keywords: [
        "councill hall",
        "william hooper councill",
        "mimeograph",
        "boycott leaflets",
        "bus boycott leaflets",
        "civil rights flyers"
      ],

      description:
        "Jo Ann Robinson and students used a mimeograph machine in Councill Hall to produce thousands of leaflets announcing the Montgomery Bus Boycott.",

      studentTip:
        "This is why Hornet Navigator connects Jo Ann Robinson Hall with Councill Hall: the residence hall honors Robinson, while Councill Hall is directly connected to the production of the boycott leaflets."
    },


    // =================================================
    // FORMERLY BIBB GRAVES HALL
    // =================================================

    {
      name: "Formerly Bibb Graves Hall",

      keywords: [
        "bibb graves",
        "bibb graves hall",
        "old bibb graves",
        "former bibb graves hall",
        "jo ann robinson rename",
        "building renamed"
      ],

      description:
        "Jo Ann Robinson Hall was formerly known as Bibb Graves Hall. Alabama State University renamed the historic residence hall in 2022 in honor of Jo Ann Robinson and her extraordinary role in Civil Rights history.",

      studentTip:
        "If you find an older ASU map, document, alumni post, or website that says 'Bibb Graves Hall,' it may be referring to the building now known as Jo Ann Robinson Hall."
    },


    // =================================================
    // WHY THE RENAMING MATTERS
    // =================================================

    {
      name: "Why the Renaming Matters",

      keywords: [
        "why renamed",
        "bibb graves history",
        "jo ann robinson rename",
        "building rename",
        "civil rights history"
      ],

      description:
        "The building's renaming reflects a major change in whom ASU chooses to honor. The former name recognized Alabama Governor David Bibb Graves, while the current name honors Jo Ann Robinson, an ASU professor whose organizing helped launch the Montgomery Bus Boycott.",

      studentTip:
        "Living in Jo Ann Robinson Hall means living in a building whose name tells part of ASU's Civil Rights story."
    },


    // =================================================
    // BUILDING HISTORY
    // =================================================

    {
      name: "Historic Residence Hall",

      keywords: [
        "jo ann history",
        "building history",
        "residence hall history",
        "1929",
        "historic dorm",
        "historic residence hall"
      ],

      description:
        "The building now known as Jo Ann Robinson Hall dates to 1929 and has served generations of Alabama State University students. Historic descriptions identify it as a three-story residence building with bedrooms, social spaces, offices, and other residential facilities."
    },


    // =================================================
    // MLK HISTORY CLARIFICATION
    // =================================================

    {
      name: "Martin Luther King Jr. History Clarification",

      keywords: [
        "martin luther king",
        "martin luther king jr",
        "mlk",
        "king family",
        "king house bombing",
        "friendship manor",
        "civil rights history"
      ],

      description:
        "ASU's documented Civil Rights history connects Dr. Martin Luther King Jr.'s stay after the bombing of his Montgomery home with Friendship Manor, the university's historic former President's Residence.",

      studentTip:
        "Stories may circulate connecting Dr. King with different ASU buildings. Hornet Navigator uses the university's documented history and identifies Friendship Manor as the location associated with his stay after the bombing."
    }

  ],

  history: {
    year: 1929,

    description:
      "The historic residence hall now known as Jo Ann Robinson Hall dates to 1929. For many years it was known as Bibb Graves Hall before Alabama State University renamed it in 2022 to honor Jo Ann Robinson, the ASU professor and Women's Political Council leader whose organizing played a central role in the Montgomery Bus Boycott."
  },

  campusLore:
    "Students may hear stories connecting Jo Ann Robinson Hall with Dr. Martin Luther King Jr. during the Montgomery Bus Boycott era. ASU's documented history identifies Friendship Manor as the university residence where Dr. King stayed after the bombing of his home, so Hornet Navigator keeps that event connected to Friendship Manor unless additional archival documentation establishes another location.",

  funFact:
    "Jo Ann Robinson Hall combines two major parts of the ASU experience: it is an active upperclass residence hall where students live today, while its name honors an ASU professor whose organizing helped launch the Montgomery Bus Boycott.",

  image: "",
  mapLink: ""
},

// =====================================================
// WILEASE S. SIMPSON HALL
// =====================================================

{
  id: 40,

  name: "Wilease S. Simpson Hall",
  shortName: "Simpson Hall",
  category: "housing",

  keywords: [
    "wilease simpson",
    "wilease s simpson",
    "wilease s simpson hall",
    "wilease rosa simpson",
    "simpson",
    "simpson hall",

    "residence hall",
    "residential hall",
    "dorm",
    "dormitory",
    "housing",

    "mens dorm",
    "men's dorm",
    "all men",
    "all male",
    "male residence hall",
    "male housing",
    "mens residence hall",
    "men's residence hall",

    "upperclassman",
    "upperclassman housing",
    "upperclass housing",
    "returning student",
    "returning students",

    "single",
    "single room",
    "single rooms",
    "private room",
    "one person room",

    "community bathroom",
    "shared bathroom",
    "floor bathroom",
    "community restroom",
    "shared restroom",

    "community room",
    "living room",
    "lounge",
    "common area",

    "wifi",
    "wi-fi",
    "internet",

    "ra",
    "ras",
    "resident assistant",
    "resident assistants",

    "health center",
    "asu health center",
    "student health center",
    "health services",
    "student health services",
    "campus clinic",
    "clinic",
    "nurse",
    "doctor",

    "basement",
    "ground floor",
    "health center basement",
    "simpson basement",

    "sick",
    "illness",
    "injury",
    "hurt",
    "medical help",

    "covid test",
    "covid testing",
    "flu test",
    "flu testing",
    "strep test",
    "strep testing",
    "std test",
    "std testing",
    "sti test",
    "hiv test",
    "hiv testing",
    "pregnancy test",
    "pregnancy testing",

    "walk in",
    "walk-in",
    "walk in clinic",

    "student id",
    "health center id",

    "334 229 4436",
    "229 4436",

    "1966",
    "historic residence hall",
    "civil rights district",
    "national register"
  ],

  description:
    "Wilease S. Simpson Hall is an Alabama State University residence hall serving returning male students. Simpson is distinctive because residents are housed in individual rooms rather than the two-person bedroom arrangement found in some other ASU residence halls. Residents share community bathroom facilities, and the building also contains large community space and Wi-Fi. ASU Student Health Services is located at the basement/ground level of Simpson Hall with a separate entrance.",

  services: [
    "Returning male student housing",
    "Individual single rooms",
    "Community bathroom facilities",
    "Large student community room",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support",
    "ASU Student Health Services at basement/ground level"
  ],

  studentTip:
    "Simpson is an all-men residence hall for returning students and uses a different setup from Jo Ann Robinson Hall. Simpson residents have individual rooms, while bathroom facilities are shared by residents on the floor. Housing assignments and eligibility can change, so always follow your current ASU Housing assignment.",

  sections: [

    // =================================================
    // ALL-MEN / RETURNING STUDENT HOUSING
    // =================================================

    {
      name: "All-Men Returning Student Residence Hall",

      keywords: [
        "all men",
        "all male",
        "mens dorm",
        "men's dorm",
        "male residence hall",
        "returning student",
        "returning students",
        "upperclassman",
        "upperclassman housing"
      ],

      description:
        "Wilease S. Simpson Hall currently serves returning male students at Alabama State University.",

      studentTip:
        "Jo Ann Robinson Hall and Simpson Hall serve different residential populations: Jo Ann Robinson is women's housing, while Simpson serves returning male students. Always check current Housing information because assignments and building designations can change."
    },


    // =================================================
    // SINGLE ROOMS
    // =================================================

    {
      name: "Individual Single Rooms",

      keywords: [
        "single",
        "single room",
        "single rooms",
        "private room",
        "one person room",
        "own room",
        "no roommate"
      ],

      description:
        "ASU describes Simpson Hall as providing one resident per room, making the individual-bedroom arrangement one of the building's most distinctive residential features.",

      studentTip:
        "Having your own bedroom gives you more personal space, but you are still part of a residence-hall community and share other facilities with residents on your floor."
    },


    // =================================================
    // COMMUNITY BATHROOM
    // =================================================

    {
      name: "Community Bathroom",

      keywords: [
        "community bathroom",
        "shared bathroom",
        "floor bathroom",
        "community restroom",
        "shared restroom",
        "bathroom"
      ],

      description:
        "Unlike Jo Ann Robinson's suite-style bathroom arrangement, Simpson residents use community bathroom facilities shared with other residents on the floor.",

      studentTip:
        "A community bathroom is shared space. Bring the personal shower and bathroom supplies you need, keep your belongings together, and be considerate of other residents using the facilities."
    },


    // =================================================
    // COMMUNITY ROOM
    // =================================================

    {
      name: "Large Community Room",

      keywords: [
        "community room",
        "living room",
        "lounge",
        "common area",
        "hang out",
        "student lounge"
      ],

      description:
        "ASU describes Simpson Hall as having one of the largest student community rooms on campus, providing residents with shared space outside their individual bedrooms.",

      studentTip:
        "Your room may be private, but you do not have to stay isolated. The community room gives residents a place to socialize and spend time outside their bedrooms."
    },


    // =================================================
    // WI-FI
    // =================================================

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless",
        "dorm internet",
        "simpson wifi"
      ],

      description:
        "Wireless internet is available as part of Simpson Hall's residential environment.",

      studentTip:
        "Do not wait until the last minute to submit an important assignment. Residence-hall internet can experience interruptions just like any other network."
    },


    // =================================================
    // RESIDENT ASSISTANTS
    // =================================================

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "floor ra",
        "hall staff"
      ],

      description:
        "Resident Assistants help support students throughout ASU's residential communities and serve as an important first point of contact for many residence-hall questions and concerns.",

      studentTip:
        "Learn who your RA is when you move in. Your RA can help with residence-hall questions, community expectations, roommate or resident concerns, programs, and getting you connected with the right staff when something happens."
    },


    // =================================================
    // HEALTH CENTER
    // =================================================

    {
      name: "🩺 ASU Student Health Center",

      keywords: [
        "health center",
        "asu health center",
        "student health center",
        "health services",
        "student health services",
        "clinic",
        "campus clinic",
        "nurse",
        "doctor",
        "medical",
        "sick",
        "hurt"
      ],

      description:
        "ASU Student Health Services is located at the basement/ground level of Wilease S. Simpson Hall and provides health-related services for eligible Alabama State University students.",

      features: [
        "Treatment for sickness and minor injuries",
        "Diagnostic testing",
        "Health education",
        "Student health support",
        "Counseling and support connections",
        "Insurance information",
        "Limited dental services",
        "Psychiatric and emotional-care resources"
      ],

      studentTip:
        "You do not have to live in Simpson Hall to use ASU Student Health Services. The Health Center serves eligible ASU students."
    },


    // =================================================
    // FINDING THE HEALTH CENTER
    // =================================================

    {
      name: "How to Find the Health Center Entrance",

      keywords: [
        "health center entrance",
        "where is health center",
        "find health center",
        "simpson health center",
        "simpson basement",
        "basement entrance",
        "side entrance",
        "health center door"
      ],

      description:
        "The Student Health Center has a separate entrance at the basement/ground level of Simpson Hall rather than requiring students to enter through the residence-hall living area.",

      studentTip:
        "When approaching Simpson Hall, look toward the side of the main entrance on the left for the separate entrance marked for the Health Center. Watch for the HEALTH CENTER signage rather than assuming you need to enter the residence hall itself."
    },


    // =================================================
    // HEALTH CENTER PHONE
    // =================================================

    {
      name: "Health Center Contact",

      keywords: [
        "health center phone",
        "health services phone",
        "call health center",
        "334 229 4436",
        "229 4436"
      ],

      description:
        "ASU Student Health Services can be reached at (334) 229-4436.",

      contact:
        "(334) 229-4436",

      studentTip:
        "If you are unsure whether the Health Center provides a particular test or service, calling before you walk over can save you a trip."
    },


    // =================================================
    // HEALTH CENTER HOURS
    // =================================================

    {
      name: "Health Center Hours",

      keywords: [
        "health center hours",
        "clinic hours",
        "health services hours",
        "when health center open",
        "8 am",
        "4 pm"
      ],

      description:
        "ASU currently lists regular Student Health Services hours as Monday through Friday from 8:00 a.m. to 4:00 p.m.",

      studentTip:
        "Hours can change during holidays, breaks, summer sessions, emergencies, and university closures. Verify current hours if you are making a special trip."
    },


    // =================================================
    // WALK-INS
    // =================================================

    {
      name: "Walk-In Health Services",

      keywords: [
        "walk in",
        "walk-in",
        "walk in clinic",
        "appointment",
        "need appointment",
        "doctor appointment",
        "health appointment"
      ],

      description:
        "ASU Health Services currently welcomes walk-in students for available services.",

      studentTip:
        "Availability can depend on staffing and the service you need. For something specific, calling Health Services first is a good idea."
    },


    // =================================================
    // TESTING
    // =================================================

    {
      name: "Health Testing Services",

      keywords: [
        "test",
        "testing",
        "covid test",
        "covid testing",
        "flu test",
        "flu testing",
        "strep test",
        "strep testing",
        "std test",
        "std testing",
        "sti test",
        "sti testing",
        "hiv test",
        "hiv testing"
      ],

      description:
        "ASU currently lists diagnostic testing through Student Health Services for conditions including COVID-19, influenza, strep, sexually transmitted diseases, and HIV.",

      studentTip:
        "Testing availability can change based on supplies, staffing, symptoms, and current health guidance. Contact the Health Center if you need a particular test."
    },


    // =================================================
    // PREGNANCY TESTING
    // =================================================

    {
      name: "Pregnancy Testing & Pregnancy Support",

      keywords: [
        "pregnancy",
        "pregnancy test",
        "pregnancy testing",
        "pregnant",
        "pregnancy help",
        "pregnancy support"
      ],

      description:
        "Students seeking pregnancy-related health services can contact ASU Student Health Services for guidance, available testing information, support, and appropriate referrals.",

      studentTip:
        "Students report pregnancy testing as a Health Center resource, but services can change. Contact the Health Center at (334) 229-4436 to confirm current testing availability before relying on a specific service."
    },


    // =================================================
    // STUDENT ID FOR HEALTH CENTER
    // =================================================

    {
      name: "Bring Your Student ID",

      keywords: [
        "student id",
        "asu id",
        "health center id",
        "need id",
        "health services id"
      ],

      description:
        "ASU's current Health Services information instructs students to be enrolled and validated and to present their ASU student identification when receiving services.",

      studentTip:
        "Even though some other campus businesses and services are moving toward mobile ordering or digital systems, bring your ASU student ID when visiting the Health Center unless Health Services announces a different procedure."
    },


    // =================================================
    // HEALTH FEES / INSURANCE
    // =================================================

    {
      name: "Health Fees & Insurance Questions",

      keywords: [
        "health fee",
        "health insurance",
        "student insurance",
        "medical insurance",
        "private insurance",
        "50 dollars",
        "$50",
        "health center cost",
        "health center payment"
      ],

      description:
        "Student Health Services provides health resources to eligible ASU students and can provide information about health-related charges and insurance questions.",

      studentTip:
        "Students may see health-related charges associated with enrollment, but do not assume every service is automatically free or that a university fee replaces your personal health insurance. Ask Health Services directly about current fees, outside insurance, prescriptions, referrals, lab work, and services that may have additional costs."
    },


    // =================================================
    // WHEN YOU ARE SICK
    // =================================================

    {
      name: "Feeling Sick?",

      keywords: [
        "sick",
        "feeling sick",
        "not feeling good",
        "ill",
        "illness",
        "cold",
        "flu",
        "fever",
        "strep",
        "need doctor",
        "need nurse"
      ],

      description:
        "Students experiencing illness can contact or visit ASU Student Health Services for evaluation and available treatment or testing.",

      studentTip:
        "Do not wait until you are extremely sick to ask for help. If your symptoms are worsening or you are unsure what to do, contact the Health Center."
    },


    // =================================================
    // EMERGENCY VS HEALTH CENTER
    // =================================================

    {
      name: "Emergency vs. Health Center",

      keywords: [
        "emergency",
        "medical emergency",
        "911",
        "urgent medical",
        "serious injury",
        "can't breathe",
        "unconscious"
      ],

      description:
        "The Student Health Center provides campus health services, but it is not a replacement for emergency medical care.",

      studentTip:
        "For a life-threatening emergency, severe injury, trouble breathing, loss of consciousness, or another immediate medical emergency, call 911 rather than walking to the Health Center."
    },


    // =================================================
    // RESIDENCE HALL MAINTENANCE
    // =================================================

    {
      name: "Residence Hall Maintenance",

      keywords: [
        "maintenance",
        "simpson maintenance",
        "dorm maintenance",
        "room maintenance",
        "something broken",
        "ac broken",
        "air conditioning",
        "leak",
        "room problem"
      ],

      description:
        "Maintenance problems in Simpson Hall should be reported through the appropriate residence-hall staff or Housing & Residence Life process.",

      studentTip:
        "Report problems early. Something small like a leak, electrical issue, or HVAC problem can become much worse if everyone assumes somebody else reported it."
    },


    // =================================================
    // HOUSING & RESIDENCE LIFE
    // =================================================

    {
      name: "Housing & Residence Life",

      keywords: [
        "housing",
        "housing office",
        "residence life",
        "housing help",
        "room assignment",
        "housing assignment"
      ],

      description:
        "ASU Housing & Residence Life manages university housing assignments, residence-hall policies, residential support, and other housing services.",

      studentTip:
        "If your concern cannot be handled by Simpson's residence-hall staff, contact Housing & Residence Life in the J. Garrick Hardy Student Center."
    },


    // =================================================
    // WHO WAS WILEASE ROSA SIMPSON?
    // =================================================

    {
      name: "Who Was Wilease Rosa Simpson?",

      keywords: [
        "wilease rosa simpson",
        "wilease simpson",
        "who was wilease simpson",
        "simpson history",
        "secretary treasurer",
        "asu history"
      ],

      description:
        "Wilease Rosa Simpson served Alabama State University for 43 years as secretary-treasurer. Simpson Hall bears her name in recognition of her long service to the university.",

      studentTip:
        "Simpson is another ASU residence hall whose name connects today's students with people who played important roles in the university's history."
    },


    // =================================================
    // BUILDING HISTORY
    // =================================================

    {
      name: "Simpson Hall History",

      keywords: [
        "simpson history",
        "1966",
        "when was simpson built",
        "historic dorm",
        "historic residence hall",
        "national register"
      ],

      description:
        "Simpson Hall was constructed in 1966 and contains more than 100 individual bedrooms. The building has served different residential populations during its history and is recognized as a contributing resource within Alabama State University's historic campus district."
    },


    // =================================================
    // CENTRAL CAMPUS LOCATION
    // =================================================

    {
      name: "Central Campus Location",

      keywords: [
        "simpson location",
        "where is simpson",
        "near student center",
        "near library",
        "central campus"
      ],

      description:
        "Simpson Hall is centrally positioned on ASU's campus, providing residents convenient access to academic buildings, the Student Center, library resources, and other central-campus destinations.",

      studentTip:
        "One advantage of Simpson is that residents are relatively close to several places students use regularly instead of being isolated on the edge of campus."
    }

  ],

  history: {
    year: 1966,

    description:
      "Wilease S. Simpson Hall was constructed in 1966 and named for Wilease Rosa Simpson, who served Alabama State University for 43 years as secretary-treasurer. The building has housed different student populations during its history and remains an important part of ASU's residential campus."
  },

  funFact:
    "Simpson combines two very different campus functions in one location: the upper levels serve as a men's residence hall with individual student rooms, while ASU Student Health Services operates from the building's basement/ground level with its own entrance.",

  image: "",
  mapLink: ""
},

// =====================================================
// JOHN W. ABERCROMBIE HALL
// =====================================================

{
  id: 41,

  name: "John W. Abercrombie Hall",
  shortName: "Abercrombie Hall",
  category: "housing",

  keywords: [
    "abercrombie",
    "abercrombie hall",
    "john w abercrombie",
    "john w abercrombie hall",

    "residence hall",
    "residential hall",
    "dorm",
    "dormitory",
    "housing",

    "upperclassman",
    "upperclassmen",
    "upperclassman housing",
    "upperclass housing",
    "returning student",
    "returning students",

    "men",
    "mens dorm",
    "men's dorm",
    "all men",
    "all male",
    "male residence hall",
    "male housing",

    "suite",
    "suite style",
    "suite-style",
    "all suite",
    "two bedrooms",
    "two bedroom suite",

    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "bed",
    "beds",
    "study desk",
    "study desks",
    "desk",
    "rocking chair",
    "rocking chairs",
    "wardrobe",
    "wardrobes",
    "couch",
    "tv stand",
    "television stand",
    "furniture",
    "what comes in my room",

    "study room",
    "study rooms",
    "study area",
    "study space",

    "laundry",
    "laundry room",
    "washer",
    "washers",
    "dryer",
    "dryers",
    "wash clothes",

    "speed queen",
    "speed queen app",
    "laundry app",
    "laundry payment",
    "laundry money",
    "10 dollars",
    "$10",
    "coins",
    "quarters",

    "computer lab",
    "computer room",

    "visitor lounge",
    "visitors lounge",
    "lounge",
    "common area",

    "elevator",
    "elevators",
    "accessible",

    "wifi",
    "wi-fi",
    "internet",

    "air conditioning",
    "climate control",

    "ra",
    "ras",
    "resident assistant",
    "resident assistants",

    "maintenance",
    "housing help",

    "1946",
    "1947",
    "2008",
    "historic dorm",
    "historic residence hall",
    "historic district",
    "national register"
  ],

  description:
    "John W. Abercrombie Hall is an Alabama State University residence hall serving upperclassmen male students. The historic residence hall uses an all-suite layout and houses approximately 129 residents. Abercrombie combines suite-style living with study rooms, laundry facilities on each floor, Wi-Fi, elevators, community spaces, and other residential resources.",

  services: [
    "Upperclassmen male housing",
    "All-suite residence hall",
    "Two-bedroom suites",
    "Study rooms on each floor",
    "Laundry facilities on each floor",
    "Speed Queen laundry system",
    "Wi-Fi",
    "Elevators",
    "Year-round climate control",
    "Computer lab",
    "Visitors lounge",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "Abercrombie is suite-style housing, so your experience involves more than just your bedroom. Get to know your roommates and suitemates early and talk about cleaning, noise, guests, study schedules, shared belongings, bathroom expectations, and common-space rules before small issues turn into bigger problems.",

  sections: [

    // =================================================
    // UPPERCLASSMEN MEN'S HOUSING
    // =================================================

    {
      name: "Upperclassmen Men's Residence Hall",

      keywords: [
        "upperclassman",
        "upperclassmen",
        "upperclass housing",
        "upperclassman housing",
        "mens dorm",
        "men's dorm",
        "all men",
        "all male",
        "male residence hall",
        "returning students"
      ],

      description:
        "ASU identifies John W. Abercrombie Hall as a traditional upperclassmen residential community for male students. The building houses approximately 129 residents.",

      studentTip:
        "Housing assignments and residence-hall designations can change. Always rely on your current ASU Housing assignment when determining where you will live."
    },


    // =================================================
    // SUITE-STYLE LIVING
    // =================================================

    {
      name: "Suite-Style Living",

      keywords: [
        "suite",
        "suite style",
        "suite-style",
        "all suite",
        "two bedroom",
        "two bedrooms",
        "suite layout",
        "room layout"
      ],

      description:
        "Abercrombie is an all-suite residence hall. ASU describes each suite as containing two bedrooms along with furnishings and shared residential space.",

      studentTip:
        "Suite-style housing gives you a smaller residential group than a traditional community-floor arrangement, but it also means everyone needs to communicate about the spaces they share."
    },


    // =================================================
    // ROOMMATES & SUITEMATES
    // =================================================

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "roommate conflict",
        "suite conflict",
        "living together"
      ],

      description:
        "Abercrombie residents live in a suite environment with other students, making communication and respect important parts of everyday residence-hall life.",

      studentTip:
        "Talk about expectations early. Discuss sleep schedules, alarms, studying, music, gaming, guests, cleanliness, food, borrowing belongings, shared supplies, bathroom use, and how everyone wants common spaces handled."
    },


    // =================================================
    // ROOM FURNITURE
    // =================================================

    {
      name: "What's Already in the Suite?",

      keywords: [
        "furniture",
        "what comes in room",
        "what comes in my room",
        "what is in room",
        "bed",
        "beds",
        "desk",
        "study desk",
        "rocking chair",
        "wardrobe",
        "couch",
        "tv stand",
        "television stand"
      ],

      description:
        "ASU's residence-hall information identifies beds, study desks, rocking chairs, wardrobes, a couch, and a television stand among the furnishings provided in Abercrombie suites.",

      features: [
        "Beds",
        "Study desks",
        "Rocking chairs",
        "Wardrobes",
        "Couch",
        "Television stand"
      ],

      studentTip:
        "Check ASU's current move-in and packing information before buying large furniture. Your suite already contains university furniture, and Housing rules may limit what additional furniture or appliances you can bring."
    },


    // =================================================
    // STUDY ROOMS
    // =================================================

    {
      name: "Study Rooms",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "study area",
        "study space",
        "quiet study",
        "where to study"
      ],

      description:
        "Abercrombie provides study rooms on each floor so residents have places to work outside their bedrooms.",

      studentTip:
        "Use the study rooms when your suite is noisy or when you need to separate schoolwork from your bedroom. Having a study space on your own floor can save you a walk across campus."
    },


    // =================================================
    // COMPUTER LAB
    // =================================================

    {
      name: "Computer Lab",

      keywords: [
        "computer",
        "computer lab",
        "computer room",
        "computer access",
        "resident computer"
      ],

      description:
        "ASU's historical facility information identifies a computer lab as one of Abercrombie Hall's residential amenities.",

      studentTip:
        "Computer equipment and access can change over time, so check the current hall setup before depending on the computer lab for an important assignment."
    },


    // =================================================
    // VISITORS LOUNGE
    // =================================================

    {
      name: "Visitors Lounge",

      keywords: [
        "visitor",
        "visitors",
        "visitor lounge",
        "visitors lounge",
        "lounge",
        "common area",
        "guest area"
      ],

      description:
        "ASU facility information identifies a visitors lounge among Abercrombie Hall's community spaces.",

      studentTip:
        "A visitors lounge does not mean guests have unrestricted access to residential areas. Residents and guests must still follow current Housing & Residence Life visitation policies."
    },


    // =================================================
    // LAUNDRY & SPEED QUEEN
    // =================================================

    {
      name: "🧺 Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "wash clothes",
        "washing clothes",
        "washer",
        "washers",
        "dryer",
        "dryers",

        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",
        "laundry money",
        "add laundry money",

        "10 dollars",
        "$10",
        "minimum 10 dollars",

        "coins",
        "quarters",
        "laundry coins",
        "coin laundry"
      ],

      description:
        "Abercrombie Hall has laundry facilities available on each floor. ASU residence halls use the Speed Queen laundry system, allowing residents to use the Speed Queen app to manage and pay for laundry.",

      features: [
        "Laundry facilities on each floor",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "IMPORTANT: When adding money through the Speed Queen app, students report that the minimum amount you can load is $10. You cannot add less than $10, although you can add more. It is also smart to keep quarters available as a backup in case the internet is down or Speed Queen has a technical problem. Always check the individual machine first to make sure it currently accepts coins.",

      extraTip:
        "Set a timer when you start your laundry and return when the cycle finishes. Laundry rooms are shared by everyone on the floor, so avoid leaving finished clothes sitting in a washer or dryer when other residents may be waiting."
    },


    // =================================================
    // LAUNDRY PROBLEMS
    // =================================================

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "laundry broken",
        "laundry refund",
        "speed queen problem",
        "speed queen error",
        "machine broken",
        "laundry problem"
      ],

      description:
        "Laundry-equipment problems, payment issues, or refund concerns should be reported through the appropriate residence-hall staff or current laundry-support process.",

      studentTip:
        "If a machine is malfunctioning, note the machine number or error message if possible. Do not repeatedly pay a machine that is clearly not working."
    },


    // =================================================
    // WI-FI
    // =================================================

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless",
        "dorm internet",
        "abercrombie wifi"
      ],

      description:
        "Wireless internet is available for Abercrombie residents.",

      studentTip:
        "For important assignments or exams, give yourself extra time in case you encounter a temporary network problem."
    },


    // =================================================
    // ELEVATORS
    // =================================================

    {
      name: "Elevators",

      keywords: [
        "elevator",
        "elevators",
        "lift",
        "stairs",
        "accessible"
      ],

      description:
        "Abercrombie Hall includes elevators as part of the building's residential amenities.",

      studentTip:
        "During move-in and move-out, elevators can become busy. Give yourself extra time and follow Housing instructions for moving large items."
    },


    // =================================================
    // CLIMATE CONTROL
    // =================================================

    {
      name: "Year-Round Climate Control",

      keywords: [
        "air conditioning",
        "ac",
        "heat",
        "heating",
        "climate control",
        "room temperature"
      ],

      description:
        "ASU describes Abercrombie Hall as having year-round climate control.",

      studentTip:
        "If your room has a heating, cooling, or temperature problem that does not resolve normally, report it rather than attempting to repair university equipment yourself."
    },


    // =================================================
    // RESIDENT ASSISTANTS
    // =================================================

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "floor ra",
        "hall staff",
        "ra on call"
      ],

      description:
        "Resident Assistants and residence-hall staff support students living throughout ASU's residential communities.",

      studentTip:
        "Learn your RA's name and how to contact the RA on call. They can help with residential questions, policies, conflicts, community concerns, and connecting you with additional Housing resources."
    },


    // =================================================
    // CLEANING
    // =================================================

    {
      name: "Cleaning Your Room & Suite",

      keywords: [
        "clean",
        "cleaning",
        "clean room",
        "clean suite",
        "trash",
        "housekeeping",
        "custodian"
      ],

      description:
        "Residents are responsible for helping keep their personal rooms and suite living spaces clean and for properly disposing of their trash.",

      studentTip:
        "Do not assume housekeeping will clean your bedroom or personal suite spaces for you. Make a cleaning plan with your roommates and suitemates so one person does not end up doing everything."
    },


    // =================================================
    // ROOM & SUITE SAFETY
    // =================================================

    {
      name: "Room & Suite Safety",

      keywords: [
        "room safety",
        "suite safety",
        "dorm safety",
        "lock door",
        "secure room",
        "residence hall safety"
      ],

      description:
        "Residents share responsibility for maintaining a safe residential environment and following current Housing & Residence Life policies.",

      studentTip:
        "Lock your bedroom and suite when appropriate and protect your personal belongings. Do not give residence-hall access to people who are not authorized residents or approved guests."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Residence Hall Maintenance",

      keywords: [
        "maintenance",
        "room maintenance",
        "dorm maintenance",
        "something broken",
        "ac broken",
        "air conditioning broken",
        "leak",
        "sink broken",
        "toilet broken",
        "room repair"
      ],

      description:
        "Maintenance problems should be reported through Abercrombie residence-hall staff or the appropriate Housing & Residence Life process so the issue can be addressed.",

      studentTip:
        "Report problems early. If something is leaking, broken, overheating, or not functioning correctly, do not assume somebody else has already reported it."
    },


    // =================================================
    // HOUSING HELP
    // =================================================

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "residence life",
        "room assignment",
        "housing assignment",
        "housing problem"
      ],

      description:
        "ASU Housing & Residence Life manages university housing assignments, residential policies, and student housing support.",

      studentTip:
        "Start with your RA or residence-hall staff for building-level concerns. For larger housing or assignment issues, contact Housing & Residence Life in the J. Garrick Hardy Student Center."
    },


    // =================================================
    // MAIL & PACKAGES
    // =================================================

    {
      name: "Mail & Packages",

      keywords: [
        "mail",
        "package",
        "packages",
        "package pickup",
        "student mail",
        "mail center"
      ],

      description:
        "Student mail and packages follow ASU's residence-hall and Mail Center process rather than being delivered directly to a student's bedroom.",

      studentTip:
        "Pay attention to official package notifications and follow the pickup instructions you receive. Do not go to Inventory Control/Receiving for a normal personal student package."
    },


    // =================================================
    // WHO WAS JOHN W. ABERCROMBIE?
    // =================================================

    {
      name: "Who Was John W. Abercrombie?",

      keywords: [
        "john w abercrombie",
        "who was abercrombie",
        "abercrombie history",
        "state superintendent",
        "education history"
      ],

      description:
        "Abercrombie Hall is named for John W. Abercrombie, who served multiple terms as Alabama's State Superintendent of Education during his public-service career."
    },


    // =================================================
    // BUILDING HISTORY
    // =================================================

    {
      name: "Abercrombie Hall History",

      keywords: [
        "abercrombie history",
        "1946",
        "1947",
        "2008",
        "historic dorm",
        "historic residence hall",
        "renovated",
        "national register"
      ],

      description:
        "ASU historical records date Abercrombie Hall to 1946, while Housing information describes the building as originally opening in 1947. The historic residence hall underwent an extensive renovation in 2008 and was converted to suite-style accommodations.",

      studentTip:
        "If you see both 1946 and 1947 associated with Abercrombie, ASU sources use the dates differently: historical records identify 1946, while Housing information describes the hall as opening in 1947."
    },


    // =================================================
    // HISTORIC CAMPUS CONNECTION
    // =================================================

    {
      name: "Historic Campus Connection",

      keywords: [
        "historic campus",
        "historic district",
        "national register",
        "national historic register",
        "asu history"
      ],

      description:
        "Abercrombie Hall is identified as a contributing resource within Alabama State University's historic campus district.",

      studentTip:
        "Abercrombie functions as an active residence hall today, but the building is also part of ASU's historic architectural campus."
    }

  ],

  history: {
    year: 1946,

    description:
      "ASU historical records date Abercrombie Hall to 1946, while Housing information describes its opening in 1947. The building later became men's housing and underwent a major renovation in 2008 that established its modern suite-style residential layout."
  },

  funFact:
    "Abercrombie combines historic ASU architecture with modern suite-style living. Its major 2008 renovation transformed the residence hall into an all-suite facility while preserving its place within ASU's historic campus.",

  image: "",
  mapLink: ""
},

// =====================================================
// DR. MARTIN LUTHER KING JR. HALL
// =====================================================

{
  id: 42,

  name: "Dr. Martin Luther King Jr. Hall",
  shortName: "MLK Hall",
  category: "housing",

  keywords: [
    "mlk",
    "mlk hall",
    "martin luther king",
    "martin luther king jr",
    "martin luther king jr hall",
    "dr martin luther king jr hall",

    "freshman dorm",
    "freshman housing",
    "freshman residence hall",
    "first year",
    "first year housing",

    "men",
    "mens dorm",
    "men's dorm",
    "male residence hall",
    "freshman men",
    "freshman males",

    "suite",
    "suite style",
    "suite-style",
    "two to a room",
    "2 to a room",
    "four to a suite",
    "4 to a suite",

    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "sink",
    "sink in room",
    "room sink",

    "bathroom",
    "shared bathroom",
    "suite bathroom",

    "study room",
    "study rooms",
    "study area",

    "common area",
    "recreation area",
    "social area",
    "basement",

    "laundry",
    "washer",
    "dryer",
    "speed queen",
    "speed queen app",
    "laundry app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "wifi",
    "wi-fi",
    "internet",

    "ra",
    "resident assistant",

    "housing help",
    "maintenance",

    "stadium",
    "acadome",
    "dining",

    "1990",
    "civil rights",
    "dr king"
  ],

  description:
    "Dr. Martin Luther King Jr. Hall is a traditional freshman residence hall for male students at Alabama State University. The five-story residence hall was built in 1990 and features suite-style living, study rooms, a large recreation and social area, digital laundry facilities, Wi-Fi, and convenient access to central-campus destinations.",

  services: [
    "First-year male housing",
    "Suite-style accommodations",
    "Shared suite bathrooms",
    "In-room sinks",
    "Study rooms",
    "Large recreation and social area",
    "Speed Queen laundry",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "MLK is one of ASU's freshman residence halls for men. Students report a common setup of two residents sharing a bedroom and four residents sharing a suite. Because you will be living closely with roommates and suitemates, talk about cleaning, bathroom use, guests, noise, studying, food, and personal space early.",

  sections: [

    {
      name: "Freshman Men's Residence Hall",

      keywords: [
        "freshman",
        "freshman men",
        "freshman males",
        "first year",
        "first year men",
        "mens dorm",
        "men's dorm"
      ],

      description:
        "ASU currently identifies Dr. Martin Luther King Jr. Hall as a traditional residence hall for first-year male students.",

      studentTip:
        "For many residents, MLK is their first experience living away from home. Learn your building, your RA, your roommate expectations, and important Housing procedures early instead of waiting until you have a problem."
    },

    {
      name: "Room & Suite Setup",

      keywords: [
        "room setup",
        "suite setup",
        "two to a room",
        "2 to a room",
        "four to a suite",
        "4 to a suite",
        "roommate",
        "suitemate"
      ],

      description:
        "MLK uses suite-style accommodations. Students report a common arrangement of two residents sharing a bedroom and four residents sharing the overall suite.",

      studentTip:
        "Your exact housing assignment is determined by Housing & Residence Life, so always follow the room and occupancy information shown in your current assignment."
    },

    {
      name: "Sink Inside the Room",

      keywords: [
        "sink",
        "sink in room",
        "room sink",
        "does mlk have sink",
        "bedroom sink"
      ],

      description:
        "Students report that MLK bedrooms include a sink inside the room, providing residents convenient access without having to enter the shared bathroom.",

      studentTip:
        "Keep the sink area clean because both roommates use the room. Do not allow dishes, toiletries, hair products, or other belongings to completely take over the shared sink area."
    },

    {
      name: "Shared Suite Bathroom",

      keywords: [
        "bathroom",
        "shared bathroom",
        "suite bathroom",
        "restroom",
        "shared restroom"
      ],

      description:
        "MLK's suite-style design includes bathroom facilities shared among residents of the suite.",

      studentTip:
        "Make a bathroom-cleaning plan with your suitemates. Shared bathrooms become a problem quickly when everybody assumes somebody else will clean them."
    },

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "roommate conflict"
      ],

      description:
        "Living in MLK means sharing residential space with roommates and suitemates.",

      studentTip:
        "Discuss sleep schedules, alarms, guests, music, gaming, phone calls, studying, cleaning, food, borrowing belongings, bathroom use, and shared supplies before disagreements start."
    },

    {
      name: "Study Rooms",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "study area",
        "quiet study"
      ],

      description:
        "MLK Hall provides study-room space for residents who need somewhere to work outside their bedrooms.",

      studentTip:
        "If your roommate is sleeping, gaming, talking, or having visitors, use the study spaces instead of letting a noisy room ruin your study session."
    },

    {
      name: "Basement Recreation & Social Area",

      keywords: [
        "basement",
        "recreation",
        "recreation area",
        "social area",
        "common area",
        "hang out",
        "lounge"
      ],

      description:
        "MLK features a large recreation and social area in the basement where residents can spend time outside their rooms.",

      studentTip:
        "Use common areas to meet other freshmen. Your residence hall can be one of the easiest places to start building friendships during your first semester."
    },

    {
      name: "🧺 Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "washer",
        "washers",
        "dryer",
        "dryers",
        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",
        "$10",
        "10 dollars",
        "quarters",
        "coins"
      ],

      description:
        "MLK Hall has a renovated digital laundry facility. ASU residence halls use the Speed Queen laundry system, and students use the Speed Queen app for residence-hall laundry.",

      features: [
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the machine"
      ],

      studentTip:
        "Students report that the minimum amount you can add through Speed Queen is $10. You can add more, but you cannot load less than $10. Keep quarters available as a backup in case the internet or Speed Queen has a technical problem, but check the individual machine first to make sure it accepts coins.",

      extraTip:
        "Set a timer when you start your laundry. Return when the cycle ends so other residents are not waiting for clothes that have been sitting in a machine."
    },

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen error",
        "laundry problem",
        "laundry refund"
      ],

      description:
        "Problems with washers, dryers, payments, or the laundry system should be reported through residence-hall staff or the current laundry-support process.",

      studentTip:
        "Write down or photograph the machine number and error if possible. Do not repeatedly pay a machine that is clearly malfunctioning."
    },

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless"
      ],

      description:
        "Wireless internet connections are available to MLK residents.",

      studentTip:
        "Give yourself extra time when submitting important assignments in case you encounter a temporary residence-hall network problem."
    },

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call"
      ],

      description:
        "Resident Assistants help support students throughout ASU's residential communities.",

      studentTip:
        "Learn who your RA is during your first week. Your RA can help with residence-hall questions, policies, conflicts, emergencies, and getting connected with the correct Housing staff."
    },

    {
      name: "First-Time Dorm Living",

      keywords: [
        "first dorm",
        "first time living on campus",
        "freshman tips",
        "dorm tips",
        "living away from home"
      ],

      description:
        "MLK is home to first-year students, many of whom are experiencing residence-hall living for the first time.",

      studentTip:
        "Do not be embarrassed to ask questions. Learn where you wash clothes, take trash, find your RA, report maintenance, study, receive packages, and get help before you actually need those services."
    },

    {
      name: "Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "ac broken",
        "leak",
        "toilet broken",
        "sink broken",
        "room repair"
      ],

      description:
        "Residence-hall maintenance concerns should be reported through the appropriate hall staff or Housing & Residence Life process.",

      studentTip:
        "Report leaks, electrical problems, HVAC issues, broken fixtures, and other maintenance concerns early rather than attempting to repair university property yourself."
    },

    {
      name: "Housing & Residence Life",

      keywords: [
        "housing",
        "housing office",
        "housing problem",
        "housing assignment",
        "residence life"
      ],

      description:
        "Housing & Residence Life manages residence-hall assignments, policies, and residential support.",

      studentTip:
        "Campus housing is limited and ASU does not guarantee a particular room or residence hall. Always rely on your current Housing assignment."
    },

    {
      name: "Central Campus Location",

      keywords: [
        "near stadium",
        "near acadome",
        "near dining",
        "central campus",
        "mlk location"
      ],

      description:
        "MLK is located in the central portion of campus with convenient access to classes, dining, ASU Stadium, and the Dunn-Oliver Acadome.",

      studentTip:
        "The central location is especially helpful for freshmen who are still learning how to get around campus."
    },

    {
      name: "Named for Dr. Martin Luther King Jr.",

      keywords: [
        "martin luther king",
        "mlk history",
        "dr king",
        "civil rights",
        "civil rights history"
      ],

      description:
        "The residence hall bears the name of Dr. Martin Luther King Jr., the Civil Rights leader whose life and work have deep connections to Montgomery and Alabama State University.",

      studentTip:
        "MLK's connection to ASU goes far beyond the residence hall's name. Other places on campus—including Friendship Manor, Trenholm Hall, Paterson Hall, and the former Dunn Sports Arena—also connect directly to Dr. King's time in Montgomery."
    }

  ],

  history: {
    year: 1990,

    description:
      "Dr. Martin Luther King Jr. Hall was built in 1990 as a five-story residence facility and today serves as one of Alabama State University's traditional freshman men's residence halls."
  },

  funFact:
    "MLK Hall places first-year students near several major parts of campus, including academic buildings, dining, ASU Stadium, and the Dunn-Oliver Acadome.",

  image: "",
  mapLink: ""
},


// =====================================================
// BESSIE E. ESTELL HALL
// =====================================================

{
  id: 43,

  name: "Bessie E. Estell Hall",
  shortName: "Bessie Estell",
  category: "housing",

  keywords: [
    "bessie",
    "bessie estell",
    "bessie e estell",
    "bessie e estell hall",
    "bessie sears estell",
    "estell",
    "estell hall",

    "freshman dorm",
    "freshman housing",
    "freshman residence hall",
    "first year",

    "women",
    "womens dorm",
    "women's dorm",
    "female residence hall",
    "freshman women",
    "freshman females",

    "suite",
    "suite style",
    "suite-style",

    "three to a room",
    "3 to a room",
    "four to a room",
    "4 to a room",
    "housing shortage",
    "housing demand",
    "room occupancy",

    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "bathroom",
    "shared bathroom",
    "suite bathroom",

    "study room",
    "study rooms",

    "common area",
    "recreation area",
    "social area",
    "basement",

    "laundry",
    "washer",
    "dryer",
    "speed queen",
    "speed queen app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "wifi",
    "internet",

    "ra",
    "resident assistant",

    "maintenance",
    "housing help",

    "stadium",
    "acadome",
    "dining",

    "1990"
  ],

  description:
    "Bessie E. Estell Hall is a traditional freshman residence hall for female students at Alabama State University. Built in 1990, the five-story residence hall offers suite-style accommodations, study rooms, recreation and social space, digital laundry facilities, Wi-Fi, and convenient access to central campus.",

  services: [
    "First-year female housing",
    "Suite-style accommodations",
    "Shared bathrooms",
    "Study rooms on each floor",
    "Large recreation and social area",
    "Speed Queen laundry",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "Bessie Estell is a freshman women's residence hall. Current room occupancy can vary depending on Housing assignments and campus housing demand, so do not assume every room will have the same number of residents.",

  sections: [

    {
      name: "Freshman Women's Residence Hall",

      keywords: [
        "freshman",
        "freshman women",
        "freshman females",
        "women's dorm",
        "womens dorm",
        "female residence hall"
      ],

      description:
        "ASU currently identifies Bessie E. Estell Hall as a traditional residence hall for first-year female students.",

      studentTip:
        "For many residents, this is their first time living away from home. Learn your RA, residence-hall procedures, roommate expectations, laundry system, and important campus resources early."
    },

    {
      name: "Current Room Occupancy",

      keywords: [
        "three to a room",
        "3 to a room",
        "four to a room",
        "4 to a room",
        "how many roommates",
        "room occupancy",
        "housing shortage",
        "housing demand"
      ],

      description:
        "Bessie Estell uses suite-style residential accommodations. Students report that current assignments can include three residents in a room, with some rooms accommodating four students during periods of high campus housing demand.",

      studentTip:
        "The number of students assigned to a room can change. A three- or four-person assignment should not be treated as a permanent guarantee for every Bessie Estell room. Your actual assignment comes from Housing & Residence Life."
    },

    {
      name: "Living With Multiple Roommates",

      keywords: [
        "roommate",
        "roommates",
        "three roommates",
        "four roommates",
        "roommate conflict",
        "crowded room",
        "personal space"
      ],

      description:
        "Living with multiple roommates requires communication about shared space, schedules, belongings, and expectations.",

      studentTip:
        "With three or four people sharing a room, talk early about sleep schedules, alarms, studying, phone calls, guests, cleaning, food, clothing and storage, borrowing items, and personal space. Waiting until everyone is frustrated makes those conversations much harder."
    },

    {
      name: "Shared Bathroom",

      keywords: [
        "bathroom",
        "shared bathroom",
        "suite bathroom",
        "restroom",
        "shared restroom"
      ],

      description:
        "Bessie Estell's suite-style accommodations include bathroom facilities shared among residents.",

      studentTip:
        "Agree on a bathroom-cleaning routine and how toiletries and personal items will be stored. Shared bathrooms work much better when everybody knows what they are responsible for."
    },

    {
      name: "Study Rooms on Each Floor",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "study area",
        "quiet study"
      ],

      description:
        "ASU provides study rooms on each floor of Bessie Estell Hall.",

      studentTip:
        "The study rooms are especially valuable when several people share your bedroom. You do not have to try to study in the middle of everybody else's conversations, calls, music, or schedules."
    },

    {
      name: "Basement Recreation & Social Area",

      keywords: [
        "basement",
        "recreation",
        "social area",
        "common area",
        "lounge",
        "hang out"
      ],

      description:
        "A large recreation and social area is located in the basement of Bessie Estell Hall.",

      studentTip:
        "Use the common areas to get out of your bedroom and meet other residents. This can be especially helpful when you're new to ASU and still building your campus community."
    },

    {
      name: "🧺 Laundry & Speed Queen",

      keywords: [
        "laundry",
        "washer",
        "washers",
        "dryer",
        "dryers",
        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",
        "$10",
        "10 dollars",
        "quarters",
        "coins"
      ],

      description:
        "Bessie Estell has a renovated digital laundry facility adjacent to the basement recreation and social area. ASU residence halls use the Speed Queen laundry system.",

      features: [
        "Digital laundry facility",
        "Washers and dryers",
        "Speed Queen app",
        "Laundry located near basement recreation area",
        "Coin backup when supported by the machine"
      ],

      studentTip:
        "Students report that Speed Queen requires a minimum $10 load when adding money through the app. You can add more, but not less than $10. Keep quarters available as a backup in case the internet or Speed Queen experiences a technical problem, but check the machine first to make sure coins are currently accepted.",

      extraTip:
        "Set a timer and return when your cycle ends. Do not leave clothes sitting in a washer or dryer when other residents may be waiting."
    },

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen problem",
        "speed queen error",
        "laundry refund"
      ],

      description:
        "Laundry equipment or payment problems should be reported through residence-hall staff or the current laundry-support process.",

      studentTip:
        "Note the machine number and error if possible. Avoid repeatedly paying a machine that is clearly malfunctioning."
    },

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless"
      ],

      description:
        "Wireless internet connections are available for Bessie Estell residents.",

      studentTip:
        "If you have an important assignment due, leave yourself time for unexpected internet problems rather than uploading it at the last possible minute."
    },

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call"
      ],

      description:
        "Resident Assistants help support students throughout Bessie Estell and ASU's residential community.",

      studentTip:
        "Know your RA and how to reach residence-hall staff. Your RA can help with questions, policies, residential conflicts, community concerns, and connecting you with Housing resources."
    },

    {
      name: "Making a Smaller Room Work",

      keywords: [
        "storage",
        "room storage",
        "small room",
        "crowded room",
        "organize dorm",
        "dorm organization"
      ],

      description:
        "When several residents share a bedroom, keeping personal belongings organized becomes especially important.",

      studentTip:
        "Before buying large dorm items, find out what furniture is already provided and what your actual assignment looks like. With multiple roommates, unnecessary furniture can take away valuable living and storage space."
    },

    {
      name: "First-Time Dorm Living",

      keywords: [
        "freshman tips",
        "first dorm",
        "first time living on campus",
        "dorm tips"
      ],

      description:
        "Bessie Estell houses first-year students, many of whom are adjusting to residence-hall living for the first time.",

      studentTip:
        "Ask questions. Learn where to do laundry, where trash goes, how packages work, who your RA is, how maintenance is reported, where you can study, and who to contact when you need help."
    },

    {
      name: "Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "ac broken",
        "leak",
        "toilet broken",
        "room repair"
      ],

      description:
        "Maintenance concerns should be reported through residence-hall staff or the appropriate Housing & Residence Life process.",

      studentTip:
        "Report problems early. Do not assume another roommate has already reported a leak, HVAC issue, electrical problem, or broken fixture."
    },

    {
      name: "Housing Demand & Assignments",

      keywords: [
        "housing shortage",
        "housing demand",
        "housing full",
        "room assignment",
        "housing assignment",
        "relocated",
        "reassigned"
      ],

      description:
        "ASU states that on-campus housing is limited and is not guaranteed. Housing assignments can be changed or residents relocated when circumstances require it.",

      studentTip:
        "This is particularly important when interpreting room occupancy in Bessie Estell. Current three- and four-person arrangements may reflect housing demand and should not be assumed to be the permanent configuration of every room."
    },

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "residence life",
        "housing problem"
      ],

      description:
        "Housing & Residence Life manages residence-hall assignments, residential policies, and student housing support.",

      studentTip:
        "Start with your RA or hall staff for everyday building concerns. Contact Housing & Residence Life for larger assignment or housing issues."
    },

    {
      name: "Central Campus Location",

      keywords: [
        "bessie location",
        "near stadium",
        "near acadome",
        "near dining",
        "central campus"
      ],

      description:
        "Bessie Estell is centrally located with convenient access to classes, dining, ASU Stadium, and the Dunn-Oliver Acadome.",

      studentTip:
        "Take time during your first few days to walk from Bessie to your classrooms. Knowing your route before the first full week of classes makes mornings much easier."
    },

    {
      name: "Bessie Estell & MLK",

      keywords: [
        "twin buildings",
        "mlk and bessie",
        "bessie and mlk",
        "similar dorms",
        "companion residence halls"
      ],

      description:
        "Bessie Estell and Dr. Martin Luther King Jr. Hall are similarly designed five-story freshman residence halls built in 1990. MLK currently serves first-year male students, while Bessie Estell serves first-year female students.",

      studentTip:
        "Students may refer to Bessie and MLK as twin buildings because of their similar designs and freshman-housing roles, although room assignments and occupancy can differ."
    }

  ],

  history: {
    year: 1990,

    description:
      "Bessie E. Estell Hall was built in 1990 as a five-story residence facility and today serves as one of Alabama State University's traditional freshman women's residence halls."
  },

  funFact:
    "Bessie Estell and MLK were both built in 1990 and have very similar published designs and amenities, which helps explain why students may refer to them as twin or companion residence halls.",

  image: "",
  mapLink: ""
},

// =====================================================
// BESSIE WILSON BENSON HALL
// =====================================================

{
  id: 44,

  name: "Bessie Wilson Benson Hall",
  shortName: "Benson Hall",
  category: "housing",

  keywords: [
    "bessie benson",
    "bessie wilson benson",
    "bessie wilson benson hall",
    "benson",
    "benson hall",

    "upperclassman",
    "upperclassmen",
    "upperclass housing",
    "upperclassman housing",
    "returning students",

    "women",
    "womens dorm",
    "women's dorm",
    "female residence hall",
    "women housing",

    "suite",
    "suite style",
    "suite-style",
    "two to a room",
    "2 to a room",
    "four to a suite",
    "4 to a suite",

    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "study room",
    "study rooms",
    "study area",

    "laundry",
    "washing",
    "drying",
    "washer",
    "dryer",
    "laundry every floor",
    "speed queen",
    "speed queen app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "wifi",
    "wi-fi",
    "internet",
    "climate control",

    "ra",
    "resident assistant",
    "maintenance",
    "housing help",

    "shecare",
    "she care",
    "shecare wellness pods",
    "she care wellness pods",
    "wellness pod",
    "wellness pods",

    "taraji",
    "taraji p henson",
    "taraji p. henson",
    "boris lawrence henson foundation",
    "blhf",
    "kate spade",
    "kate spade new york",

    "mental health",
    "mental wellness",
    "therapy",
    "counseling",
    "counselling",
    "wellness",
    "self care",
    "self-care",
    "stress",
    "stressed",
    "anxiety",
    "depression",
    "someone to talk to",

    "yoga",
    "meditation",
    "mindfulness",
    "relax",
    "quiet space",
    "wellness activities",

    "purse",
    "purses",
    "giveaway",
    "giveaways",

    "1972",
    "2009",
    "renovated",
    "restored"
  ],

  description:
    "Bessie Wilson Benson Hall is an upperclass women's residence hall at Alabama State University. Benson provides suite-style living, study spaces, laundry access, Wi-Fi, climate control, Resident Assistants, and other residential resources. Directly behind the Benson area, students can also access ASU's SheCare Wellness Pods, an important mental-health and wellness resource.",

  services: [
    "Upperclass women's housing",
    "Two students per bedroom",
    "Four students per suite",
    "Study rooms",
    "Laundry access on each floor",
    "Speed Queen laundry system",
    "Wi-Fi",
    "Year-round climate control",
    "Resident Assistants",
    "Residence-life support",
    "Nearby SheCare Wellness Pods"
  ],

  studentTip:
    "Benson is an upperclass women's residence hall with suite-style living. Students report a common arrangement of two residents sharing a bedroom and four residents sharing the overall suite. Get to know your roommate and suitemates early and talk about cleaning, bathroom use, guests, noise, studying, food, and shared belongings.",

  sections: [

    // =================================================
    // UPPERCLASS WOMEN'S HOUSING
    // =================================================

    {
      name: "Upperclass Women's Residence Hall",

      keywords: [
        "upperclassman",
        "upperclassmen",
        "upperclass women",
        "returning students",
        "womens dorm",
        "women's dorm",
        "female housing"
      ],

      description:
        "Bessie Wilson Benson Hall serves upperclass women within Alabama State University's residential community.",

      studentTip:
        "Housing assignments and residence-hall designations can change. Always follow the assignment provided by ASU Housing & Residence Life."
    },


    // =================================================
    // ROOM & SUITE SETUP
    // =================================================

    {
      name: "Room & Suite Setup",

      keywords: [
        "room setup",
        "suite setup",
        "two to a room",
        "2 to a room",
        "four to a suite",
        "4 to a suite",
        "how many roommates",
        "how many suitemates"
      ],

      description:
        "Students report a common Benson arrangement of two residents sharing each bedroom and four residents sharing the overall suite.",

      studentTip:
        "Your exact assignment comes from Housing & Residence Life. Check your current housing information before assuming every Benson room or suite has the same occupancy."
    },


    // =================================================
    // ROOMMATES & SUITEMATES
    // =================================================

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "roommate conflict",
        "suite conflict"
      ],

      description:
        "Benson's residential setup means students share living space with roommates and suitemates.",

      studentTip:
        "Discuss expectations early: sleep schedules, alarms, studying, music, guests, cleaning, food, borrowing belongings, bathroom use, shared supplies, and personal space. Your RA can help if roommate communication becomes difficult."
    },


    // =================================================
    // STUDY ROOMS
    // =================================================

    {
      name: "Study Rooms",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "study area",
        "quiet study",
        "where to study"
      ],

      description:
        "Benson provides study space for residents who need somewhere to work outside their bedrooms.",

      studentTip:
        "Use the study areas when your roommate or suitemates are talking, sleeping, watching television, or doing something that makes concentrating difficult."
    },


    // =================================================
    // LAUNDRY
    // =================================================

    {
      name: "🧺 Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "washing",
        "drying",
        "wash clothes",
        "washer",
        "washers",
        "dryer",
        "dryers",

        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",

        "$10",
        "10 dollars",
        "minimum 10 dollars",

        "coins",
        "quarters",
        "laundry coins"
      ],

      description:
        "Benson residents have access to washing and drying facilities on each floor. ASU residence halls use the Speed Queen laundry system.",

      features: [
        "Laundry access on each floor",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that the minimum amount you can add through the Speed Queen app is $10. You can add more than $10, but you cannot add less. It is also smart to keep quarters available in case the internet or Speed Queen has a technical problem. Check the individual machine first to make sure it accepts coins.",

      extraTip:
        "Set a timer when you start your laundry and return when the cycle finishes. Other residents may be waiting for the washer or dryer."
    },


    // =================================================
    // LAUNDRY PROBLEMS
    // =================================================

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "laundry broken",
        "speed queen error",
        "speed queen problem",
        "laundry refund"
      ],

      description:
        "Problems involving washers, dryers, payments, or Speed Queen should be reported through residence-hall staff or the current laundry-support process.",

      studentTip:
        "Note the machine number and error message if possible. Do not keep paying a machine that is clearly malfunctioning."
    },


    // =================================================
    // WI-FI
    // =================================================

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless",
        "benson wifi"
      ],

      description:
        "Wireless internet is available as part of the Benson residential environment.",

      studentTip:
        "Give yourself extra time when submitting an important assignment in case you experience a temporary network issue."
    },


    // =================================================
    // CLIMATE CONTROL
    // =================================================

    {
      name: "Year-Round Climate Control",

      keywords: [
        "air conditioning",
        "ac",
        "heat",
        "heating",
        "climate control",
        "room temperature"
      ],

      description:
        "Benson provides year-round climate control for its residential spaces.",

      studentTip:
        "Report heating or cooling problems through residence-hall staff rather than attempting to repair university equipment yourself."
    },


    // =================================================
    // RESIDENT ASSISTANTS
    // =================================================

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call"
      ],

      description:
        "Resident Assistants help support students living in Benson and throughout ASU's residential communities.",

      studentTip:
        "Know your RA and how to reach residence-hall staff. They can help with policies, roommate concerns, building questions, emergencies, and connecting you with Housing resources."
    },


    // =================================================
    // SHECARE WELLNESS PODS
    // =================================================

    {
      name: "💚 SheCare Wellness Pods",

      keywords: [
        "shecare",
        "she care",
        "shecare pod",
        "shecare pods",
        "she care pod",
        "wellness pod",
        "wellness pods",
        "self care",
        "self-care",

        "mental health",
        "mental wellness",
        "therapy",
        "counseling",
        "someone to talk to",
        "stress",
        "stressed",
        "anxiety",
        "depression",

        "taraji",
        "taraji p henson",
        "boris lawrence henson foundation",
        "blhf",
        "kate spade"
      ],

      description:
        "The SheCare Wellness Pods are a student mental-health and wellness resource located in the Benson area. The initiative was conceptualized by actress Taraji P. Henson and The Boris Lawrence Henson Foundation and launched in partnership with kate spade new york to expand access to culturally competent mental-health resources on HBCU campuses.",

      studentTip:
        "The SheCare Pods are not only for Benson residents. If you are an ASU student looking for wellness or mental-health support, this is an important campus resource to know about."
    },


    // =================================================
    // ASU WAS FIRST
    // =================================================

    {
      name: "ASU & the First SheCare Wellness Pod",

      keywords: [
        "first shecare pod",
        "first wellness pod",
        "asu first shecare",
        "hbcus",
        "hbcus mental health",
        "taraji henson"
      ],

      description:
        "Alabama State University was selected as the recipient of the first-ever Boris Lawrence Henson Foundation SheCare Wellness Pod. ASU was selected in recognition of its commitment to student and community wellness.",

      studentTip:
        "This makes the SheCare resource more than a convenient wellness space—it is also part of ASU's continuing history as an HBCU creating new resources for its students."
    },


    // =================================================
    // FINDING SHECARE
    // =================================================

    {
      name: "Finding the SheCare Wellness Pods",

      keywords: [
        "where is shecare",
        "find shecare",
        "shecare location",
        "wellness pod location",
        "behind benson",
        "behind benson hall"
      ],

      description:
        "The SheCare Wellness Pods are located in the area directly behind Bessie Wilson Benson Hall.",

      studentTip:
        "If somebody tells you to go to the SheCare Pods and you have never been there before, use Benson Hall as your landmark and look behind the residence hall area."
    },


    // =================================================
    // YOGA, MEDITATION & WELLNESS
    // =================================================

    {
      name: "Yoga, Meditation & Wellness",

      keywords: [
        "yoga",
        "meditation",
        "mindfulness",
        "wellness",
        "relax",
        "relaxation",
        "self care",
        "self-care",
        "stress relief",
        "wellness activity",
        "wellness activities"
      ],

      description:
        "SheCare is designed around mental wellness, peace, serenity, therapy, and integrative wellness services. Students may encounter wellness programming such as yoga, meditation, mindfulness, and other self-care activities.",

      studentTip:
        "You do not have to wait until you are in crisis to use wellness resources. Activities such as meditation, yoga, mindfulness, or simply taking intentional time to decompress can be useful during a stressful semester."
    },


    // =================================================
    // THERAPY & MENTAL HEALTH
    // =================================================

    {
      name: "Therapy & Mental Wellness",

      keywords: [
        "therapy",
        "therapist",
        "counseling",
        "counselor",
        "mental health",
        "mental wellness",
        "depression",
        "anxiety",
        "stress",
        "stressed",
        "overwhelmed",
        "someone to talk to",
        "need help"
      ],

      description:
        "ASU describes SheCare as providing access to individual therapy and integrative wellness services designed to support student mental health and well-being.",

      studentTip:
        "College stress does not have to reach an emergency before you seek support. SheCare is one of the campus resources students can explore when they need help managing stress or protecting their mental well-being."
    },


    // =================================================
    // KATE SPADE PARTNERSHIP
    // =================================================

    {
      name: "kate spade new york Partnership",

      keywords: [
        "kate spade",
        "kate spade new york",
        "purse",
        "purses",
        "handbag",
        "handbags",
        "giveaway",
        "giveaways"
      ],

      description:
        "The Boris Lawrence Henson Foundation launched the SheCare Wellness Pods in partnership with kate spade new york as part of an effort to expand culturally competent mental-health resources on HBCU campuses.",

      studentTip:
        "Students may encounter special events, programming, or giveaways connected with ASU's SheCare partnerships. Students report that some programming has included kate spade items such as purses, but giveaways vary and should not be treated as guaranteed."
    },


    // =================================================
    // SHECARE CONTACT
    // =================================================

    {
      name: "SheCare & Health Services Contact",

      keywords: [
        "shecare contact",
        "shecare phone",
        "wellness pod contact",
        "health services",
        "334 229 4436"
      ],

      description:
        "ASU Health Services currently lists a dedicated SheCare Wellness Pods Manager as part of its professional health-services team.",

      contact:
        "(334) 229-4436",

      studentTip:
        "If you are unsure about current SheCare programming, availability, or how to access a service, contact ASU Health Services for current information."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Residence Hall Maintenance",

      keywords: [
        "maintenance",
        "room maintenance",
        "something broken",
        "ac broken",
        "leak",
        "toilet broken",
        "room repair"
      ],

      description:
        "Residence-hall maintenance concerns should be reported through Benson hall staff or the appropriate Housing & Residence Life process.",

      studentTip:
        "Report maintenance problems early. Do not assume your roommate or suitemates have already reported the issue."
    },


    // =================================================
    // HOUSING HELP
    // =================================================

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "housing problem",
        "room assignment",
        "residence life"
      ],

      description:
        "Housing & Residence Life manages residence-hall assignments, residential policies, and student housing support.",

      studentTip:
        "Start with your RA or Benson hall staff for everyday building concerns. For larger assignment or housing issues, contact Housing & Residence Life."
    },


    // =================================================
    // BUILDING HISTORY
    // =================================================

    {
      name: "Benson Hall History",

      keywords: [
        "benson history",
        "1972",
        "2009",
        "renovated",
        "restored",
        "historic benson"
      ],

      description:
        "ASU's residence-hall information identifies Bessie Wilson Benson Hall as an established campus residence hall that opened in the early 1970s and later underwent a major restoration in 2009.",

      studentTip:
        "Benson combines an older ASU residence-hall history with more modern residential amenities and one of the university's most distinctive nearby wellness resources."
    }

  ],

  history: {
    year: 1972,

    description:
      "Bessie Wilson Benson Hall opened in the early 1970s and later underwent an extensive restoration in 2009. Today it serves upperclass women and sits beside one of ASU's notable student-wellness resources, the SheCare Wellness Pods."
  },

  funFact:
    "Benson residents live beside a nationally significant student-wellness initiative: Alabama State University was selected to receive the first SheCare Wellness Pod created through The Boris Lawrence Henson Foundation's HBCU mental-health initiative with kate spade new york.",

  image: "",
  mapLink: ""
},

// =====================================================
// NEW FACILITY I
// =====================================================

{
  id: 45,

  name: "New Facility I",
  shortName: "Facility I",
  category: "housing",

  keywords: [
    "facility 1",
    "facility i",
    "new facility 1",
    "new facility i",

    "upperclassman",
    "upperclassmen",
    "upperclass housing",
    "returning students",

    "coed",
    "co-ed",
    "men and women",
    "male and female",
    "men",
    "women",

    "single room",
    "single bedroom",
    "double room",
    "double bedroom",
    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "suite",
    "suite style",
    "suite-style",
    "suite bathroom",
    "shared bathroom",

    "study room",
    "study rooms",
    "conference room",
    "conference rooms",

    "food preparation",
    "food preparation area",
    "prepare food",
    "kitchen",
    "cooking",

    "laundry",
    "laundry room",
    "first floor laundry",
    "washer",
    "dryer",
    "speed queen",
    "speed queen app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "wifi",
    "wi-fi",
    "internet",

    "ra",
    "resident assistant",
    "maintenance",
    "housing help",

    "east campus",
    "east side",
    "2011"
  ],

  description:
    "New Facility I is an upperclass residence hall located on the east side of Alabama State University's campus. The four-story building was constructed in 2011 and provides housing for male and female students. Facility I offers single and double bedroom layouts, suite-style accommodations, study spaces, food-preparation areas, Wi-Fi, conference rooms, and a large first-floor laundry facility.",

  services: [
    "Upperclass housing",
    "Housing for male and female students",
    "Single bedroom options",
    "Double bedroom options",
    "Suite-style accommodations",
    "Suite bathrooms",
    "Study rooms",
    "Technology-equipped conference rooms",
    "Food-preparation areas",
    "First-floor laundry facility",
    "Speed Queen laundry",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "Facility I currently serves both male and female upperclass students. Room type and placement depend on your actual Housing assignment, so do not assume that being assigned to Facility I automatically guarantees a single room.",

  sections: [

    {
      name: "Upperclass Housing for Men & Women",

      keywords: [
        "coed",
        "co-ed",
        "men and women",
        "male and female",
        "upperclassman",
        "upperclassmen"
      ],

      description:
        "ASU's current Guide to Campus Living lists Facility I as a co-ed residential community serving male and female students.",

      studentTip:
        "Housing placement can change from year to year. Always use your current Housing & Residence Life assignment as the final authority for your room and building."
    },

    {
      name: "Single & Double Bedrooms",

      keywords: [
        "single",
        "single room",
        "single bedroom",
        "own room",
        "private bedroom",
        "double",
        "double room",
        "double bedroom",
        "roommate"
      ],

      description:
        "Facility I was designed with both single and double bedroom layouts for upperclass residents.",

      studentTip:
        "A single bedroom is not automatically guaranteed because you live in Facility I. Your specific room type depends on the assignment you receive from Housing."
    },

    {
      name: "Suite-Style Living",

      keywords: [
        "suite",
        "suite style",
        "suite-style",
        "suite bathroom",
        "shared bathroom",
        "bathroom"
      ],

      description:
        "Facility I uses suite-style residential accommodations with bathroom facilities.",

      studentTip:
        "Talk with your roommates or suitemates about bathroom cleaning, shared supplies, guests, noise, food, and common-space expectations early."
    },

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate conflict",
        "roommate problem"
      ],

      description:
        "Students living in Facility I may share bedrooms or suite spaces with other residents.",

      studentTip:
        "ASU recommends discussing study habits, cleaning, visitation, noise, personal property, food, storage, and work or study schedules with roommates early. Your RA can also help with a Roommate Agreement."
    },

    {
      name: "Study Rooms",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "study area",
        "quiet study"
      ],

      description:
        "Facility I provides study-room space for residents.",

      studentTip:
        "Use the study areas when you need somewhere quieter than your bedroom or suite."
    },

    {
      name: "Technology-Equipped Conference Rooms",

      keywords: [
        "conference room",
        "conference rooms",
        "technology room",
        "meeting room",
        "group study",
        "presentation"
      ],

      description:
        "Facility I includes technically equipped conference and study rooms that can support studying, meetings, and collaborative work.",

      studentTip:
        "These spaces can be useful for group projects when your bedroom or suite does not give your group enough room."
    },

    {
      name: "Food-Preparation Areas",

      keywords: [
        "food",
        "food prep",
        "food preparation",
        "food preparation area",
        "prepare food",
        "kitchen",
        "cook",
        "cooking"
      ],

      description:
        "Facility I includes designated food-preparation areas for residents.",

      studentTip:
        "Use only appliances permitted by current Housing rules. A food-preparation area does not mean every cooking appliance is allowed inside your bedroom."
    },

    {
      name: "🧺 First-Floor Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "first floor laundry",
        "washer",
        "washers",
        "dryer",
        "dryers",
        "speed queen",
        "speed queen app",
        "laundry app",
        "$10",
        "10 dollars",
        "quarters",
        "coins"
      ],

      description:
        "Facility I has a large laundry facility located on the first floor. ASU residence halls use the Speed Queen laundry system.",

      features: [
        "Large first-floor laundry facility",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that Speed Queen requires a minimum $10 load through the app. You can add more than $10, but not less. Keep quarters available as a backup in case the internet or Speed Queen has a technical problem, but check the individual machine first to make sure coins are accepted.",

      extraTip:
        "Set a timer and return when your cycle ends. Facility I residents share the first-floor laundry space, so leaving finished clothes in a machine can hold up other students."
    },

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen error",
        "laundry problem",
        "laundry refund"
      ],

      description:
        "Laundry-equipment or payment problems should be reported through residence-hall staff or the current laundry-support process.",

      studentTip:
        "Note the machine number and error message if possible. Do not repeatedly pay a machine that is clearly malfunctioning."
    },

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless"
      ],

      description:
        "Wireless internet is available for Facility I residents.",

      studentTip:
        "Give yourself extra time when submitting important assignments in case you encounter a temporary network issue."
    },

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call"
      ],

      description:
        "Resident Assistants and residence-hall staff support students living in Facility I.",

      studentTip:
        "Know your RA and how to contact hall staff. They can help with residence-hall questions, roommate concerns, policies, emergencies, and connecting you with Housing."
    },

    {
      name: "Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "ac broken",
        "leak",
        "toilet broken",
        "room repair"
      ],

      description:
        "Maintenance concerns should be reported through Facility I residence-hall staff or the appropriate Housing process.",

      studentTip:
        "Report maintenance issues early rather than assuming another resident has already reported them."
    },

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "housing assignment",
        "room assignment"
      ],

      description:
        "ASU Housing & Residence Life manages room assignments, residence-hall policies, and residential support.",

      studentTip:
        "For larger housing or assignment issues, Housing & Residence Life is located in the J. Garrick Hardy Student Center."
    },

    {
      name: "East Campus Location",

      keywords: [
        "east campus",
        "east side",
        "facility 1 location",
        "where is facility 1"
      ],

      description:
        "Facility I was constructed on the east side of ASU's campus.",

      studentTip:
        "Before classes begin, walk from Facility I to your classrooms and other frequently used campus locations so you know your routes."
    },

    {
      name: "Facility I History",

      keywords: [
        "facility 1 history",
        "2011",
        "when was facility 1 built"
      ],

      description:
        "Facility I was built in 2011 as a four-story contemporary residence hall designed to provide modern upperclass housing at Alabama State University."
    }

  ],

  history: {
    year: 2011,

    description:
      "New Facility I was constructed in 2011 on the east side of Alabama State University's campus as a modern four-story upperclass residence hall."
  },

  funFact:
    "Unlike many of ASU's older residence halls, Facility I was built in the 21st century and was designed from the beginning with single and double bedrooms, suite-style accommodations, food-preparation areas, technology-equipped study spaces, and a large laundry facility.",

  image: "",
  mapLink: ""
},


// =====================================================
// NEW FACILITY II
// =====================================================

{
  id: 46,

  name: "New Facility II",
  shortName: "Facility II",
  category: "housing",

  keywords: [
    "facility 2",
    "facility ii",
    "new facility 2",
    "new facility ii",

    "upperclassman",
    "upperclassmen",
    "upperclass housing",
    "returning students",

    "women",
    "womens dorm",
    "women's dorm",
    "female residence hall",
    "female housing",
    "all women",
    "all female",

    "single room",
    "single bedroom",
    "double room",
    "double bedroom",

    "suite",
    "suite style",
    "suite-style",
    "suite bathroom",
    "shared bathroom",

    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "study room",
    "study rooms",
    "conference room",
    "conference rooms",

    "food preparation",
    "food preparation area",
    "kitchen",
    "cooking",

    "laundry",
    "first floor laundry",
    "washer",
    "dryer",
    "speed queen",
    "speed queen app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "wifi",
    "wi-fi",
    "internet",

    "ra",
    "resident assistant",
    "maintenance",
    "housing help",

    "east campus",
    "east side",
    "2011"
  ],

  description:
    "New Facility II is an upperclass residence hall located on the east side of Alabama State University's campus. The four-story building was constructed in 2011 and currently serves women students. Facility II includes single and double bedroom layouts, suite-style accommodations, study spaces, food-preparation areas, Wi-Fi, technology-equipped conference rooms, and a large first-floor laundry facility.",

  services: [
    "Upperclass women's housing",
    "Single bedroom options",
    "Double bedroom options",
    "Suite-style accommodations",
    "Suite bathrooms",
    "Study rooms",
    "Technology-equipped conference rooms",
    "Food-preparation areas",
    "First-floor laundry facility",
    "Speed Queen laundry",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "CURRENT HOUSING NOTE: Facility II currently serves women students. Some ASU webpages and institutional documents may still contain older or conflicting descriptions of Facility II, so always follow your current Housing & Residence Life assignment.",

  sections: [

    {
      name: "Upperclass Women's Residence Hall",

      keywords: [
        "women",
        "women's dorm",
        "womens dorm",
        "all women",
        "all female",
        "female housing",
        "upperclass women"
      ],

      description:
        "ASU's 2025 Guide to Campus Living lists Facility II within the university's female residential communities.",

      studentTip:
        "If you find older ASU information describing Facility II differently, follow your current Housing assignment. Residence-hall designations can change over time."
    },

    {
      name: "Single & Double Bedrooms",

      keywords: [
        "single",
        "single room",
        "single bedroom",
        "private room",
        "double",
        "double room",
        "double bedroom",
        "roommate"
      ],

      description:
        "Facility II was designed with both single and double bedroom layouts.",

      studentTip:
        "Being assigned to Facility II does not automatically mean you will receive a single. Your actual bedroom type is determined by Housing."
    },

    {
      name: "Suite-Style Living",

      keywords: [
        "suite",
        "suite style",
        "suite-style",
        "bathroom",
        "suite bathroom",
        "shared bathroom"
      ],

      description:
        "Facility II features suite-style residential accommodations with bathrooms.",

      studentTip:
        "Agree with roommates and suitemates about cleaning, bathroom use, shared supplies, guests, noise, and personal belongings early."
    },

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate conflict",
        "roommate problem"
      ],

      description:
        "Depending on room assignment, Facility II residents may share bedrooms and suite spaces with other students.",

      studentTip:
        "Discuss study schedules, cleaning, visitation, noise, food, personal property, storage, and schedules early. Your RA can help facilitate a roommate conversation if needed."
    },

    {
      name: "Study Rooms",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "quiet study",
        "study area"
      ],

      description:
        "Facility II provides study-room space for residents.",

      studentTip:
        "Use the study areas when your bedroom or suite is too busy for focused work."
    },

    {
      name: "Technology-Equipped Conference Rooms",

      keywords: [
        "conference room",
        "conference rooms",
        "technology room",
        "meeting room",
        "group project",
        "group study"
      ],

      description:
        "Facility II includes technically equipped conference and study rooms for residents.",

      studentTip:
        "These rooms can be especially useful for collaborative assignments, meetings, presentations, or group study."
    },

    {
      name: "Food-Preparation Areas",

      keywords: [
        "food",
        "food prep",
        "food preparation",
        "prepare food",
        "kitchen",
        "cook",
        "cooking"
      ],

      description:
        "Facility II includes designated food-preparation areas for residents.",

      studentTip:
        "Check current Housing rules before bringing cooking appliances. Having access to a food-preparation area does not mean every appliance is permitted in your bedroom."
    },

    {
      name: "🧺 First-Floor Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "first floor laundry",
        "washer",
        "washers",
        "dryer",
        "dryers",
        "speed queen",
        "speed queen app",
        "laundry app",
        "$10",
        "10 dollars",
        "quarters",
        "coins"
      ],

      description:
        "Facility II has a large laundry facility located on the first floor. ASU residence halls use the Speed Queen laundry system.",

      features: [
        "Large first-floor laundry facility",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that the minimum amount you can load through the Speed Queen app is $10. You can add more, but you cannot add less than $10. Keep quarters available as a backup in case Speed Queen or the internet has a technical problem, but verify that the individual machine accepts coins.",

      extraTip:
        "Set a timer and return when your laundry finishes. Everyone shares the laundry facility, so don't leave finished clothes sitting in a machine."
    },

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen error",
        "laundry problem",
        "laundry refund"
      ],

      description:
        "Laundry-equipment and payment problems should be reported through residence-hall staff or the current laundry-support process.",

      studentTip:
        "Note the machine number and error message if possible. Avoid repeatedly paying a machine that is clearly malfunctioning."
    },

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless"
      ],

      description:
        "Wireless internet is available to Facility II residents.",

      studentTip:
        "Give yourself extra time with important online assignments in case you encounter a temporary network issue."
    },

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call"
      ],

      description:
        "Resident Assistants and residence-hall staff support students living in Facility II.",

      studentTip:
        "Learn who your RA is and how to contact the RA on call. They can help with policies, residential questions, roommate concerns, and connecting you with Housing staff."
    },

    {
      name: "Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "ac broken",
        "leak",
        "toilet broken",
        "room repair"
      ],

      description:
        "Maintenance concerns should be reported through Facility II residence-hall staff or the appropriate Housing process.",

      studentTip:
        "Report problems early instead of assuming your roommate or another resident already reported them."
    },

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "housing assignment",
        "room assignment"
      ],

      description:
        "Housing & Residence Life manages room assignments, residential policies, and housing support.",

      studentTip:
        "For larger assignment or housing issues, Housing & Residence Life is located in the J. Garrick Hardy Student Center."
    },

    {
      name: "East Campus Location",

      keywords: [
        "east campus",
        "east side",
        "facility 2 location",
        "where is facility 2"
      ],

      description:
        "Facility II was constructed on the east side of Alabama State University's campus.",

      studentTip:
        "Walk your class schedule before the semester gets busy so you know the quickest routes from Facility II to your academic buildings."
    },

    {
      name: "Facility II Housing Information Update",

      keywords: [
        "is facility 2 coed",
        "is facility ii coed",
        "facility 2 female",
        "facility 2 women",
        "facility ii women",
        "housing update"
      ],

      description:
        "ASU sources currently conflict about Facility II's residential designation. The 2025 Guide to Campus Living lists Facility II as female housing, while ASU's general residence-hall webpage and Fall 2025 institutional report still describe it as housing both female and male students.",

      studentTip:
        "Current campus information identifies Facility II as women's housing. Because ASU's published pages have not all been updated consistently, your Housing & Residence Life assignment should be treated as the final source for your placement."
    },

    {
      name: "Facility II History",

      keywords: [
        "facility 2 history",
        "facility ii history",
        "2011",
        "when was facility 2 built"
      ],

      description:
        "Facility II was built in 2011 as a four-story contemporary residence hall on the east side of ASU's campus."
    }

  ],

  history: {
    year: 2011,

    description:
      "New Facility II was constructed in 2011 on the east side of Alabama State University's campus as part of the university's modern residential expansion."
  },

  funFact:
    "Facility I and Facility II were both built in 2011 and share many of the same design features, including single and double bedrooms, suite-style accommodations, food-preparation areas, study spaces, conference rooms, Wi-Fi, and large first-floor laundry facilities.",

  image: "",
  mapLink: ""
},

// =====================================================
// WILLETTA MCGINTY APARTMENTS
// =====================================================

{
  id: 47,

  name: "Willetta McGinty Apartments",
  shortName: "McGinty Apartments",
  category: "housing",

  keywords: [
    "mcginty",
    "mcginty apartments",
    "willetta mcginty",
    "willetta mcginty apartments",

    "apartments",
    "apartment",
    "campus apartments",
    "student apartments",
    "on campus apartments",
    "apartment style",
    "apartment-style",

    "coed",
    "co-ed",
    "men",
    "women",
    "male",
    "female",
    "men and women",

    "upperclassman",
    "upperclassmen",
    "returning students",

    "roommate",
    "roommates",
    "apartment mate",
    "apartment mates",

    "bathroom",
    "bathroom in apartment",
    "apartment bathroom",
    "private bathroom",
    "restroom",

    "laundry",
    "washing",
    "drying",
    "washer",
    "dryer",
    "speed queen",
    "speed queen app",
    "laundry app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "ra",
    "resident assistant",
    "residential staff",

    "hall council",
    "mcginty hall council",
    "residence hall council",
    "student leadership",

    "maintenance",
    "housing help",

    "breezeway",
    "breezeways",

    "1983",
    "mcginty history"
  ],

  description:
    "Willetta McGinty Apartments is an apartment-style residential community at Alabama State University. Unlike a traditional residence hall with communal floor living, McGinty provides students with an apartment-style campus housing experience. The residential community dates to 1983 and consists of multiple apartment buildings connected by breezeways and sheltered walkways.",

  services: [
    "Apartment-style campus housing",
    "Housing for male and female students",
    "Bathroom facilities inside the apartment",
    "Speed Queen laundry system",
    "Residential staff support",
    "McGinty Apartments Hall Council",
    "Housing & Residence Life support",
    "Maintenance support"
  ],

  studentTip:
    "McGinty is apartment-style university housing, so the experience is different from living in a traditional residence hall such as MLK, Bessie Estell, or Simpson. Your exact apartment and roommate assignment comes from Housing & Residence Life.",

  sections: [

    // =================================================
    // APARTMENT-STYLE LIVING
    // =================================================

    {
      name: "Apartment-Style Living",

      keywords: [
        "apartment",
        "apartments",
        "apartment style",
        "apartment-style",
        "campus apartment",
        "student apartment",
        "on campus apartment"
      ],

      description:
        "Willetta McGinty provides apartment-style residential accommodations on ASU's campus rather than a traditional communal-floor residence-hall arrangement.",

      studentTip:
        "Apartment-style living usually requires residents to take more responsibility for their shared residential space. Communicate early with the other students assigned to your apartment."
    },


    // =================================================
    // CO-ED RESIDENTIAL COMMUNITY
    // =================================================

    {
      name: "Housing for Men & Women",

      keywords: [
        "coed",
        "co-ed",
        "men",
        "women",
        "male",
        "female",
        "men and women",
        "coed apartment"
      ],

      description:
        "McGinty is part of ASU's residential housing community and has been identified within campus housing as a residential option serving students in an apartment-style setting.",

      studentTip:
        "Residential designations and assignments can change. Always rely on your current Housing & Residence Life assignment for your specific placement."
    },


    // =================================================
    // BATHROOM
    // =================================================

    {
      name: "Bathroom Inside the Apartment",

      keywords: [
        "bathroom",
        "bathrooms",
        "apartment bathroom",
        "bathroom in apartment",
        "does mcginty have bathroom",
        "restroom",
        "shared bathroom"
      ],

      description:
        "McGinty apartments include bathroom facilities inside the residential unit, so residents do not use the type of communal floor bathroom found in some traditional residence halls.",

      studentTip:
        "Talk with your apartment mates about bathroom cleaning, toiletries, shared supplies, schedules, and storage. A bathroom inside the apartment still becomes everyone's responsibility when multiple students share the unit."
    },


    // =================================================
    // ROOMMATES / APARTMENT MATES
    // =================================================

    {
      name: "Roommates & Apartment Mates",

      keywords: [
        "roommate",
        "roommates",
        "apartment mate",
        "apartment mates",
        "roommate problem",
        "roommate conflict",
        "living together"
      ],

      description:
        "McGinty residents share an apartment-style residential environment with other assigned students.",

      studentTip:
        "Discuss cleaning, sleep schedules, studying, guests, noise, food, shared supplies, bathroom responsibilities, personal belongings, and boundaries early. Your residential staff can help if a conflict cannot be resolved between roommates."
    },


    // =================================================
    // LAUNDRY & SPEED QUEEN
    // =================================================

    {
      name: "🧺 Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "washing",
        "drying",
        "wash clothes",
        "washer",
        "washers",
        "dryer",
        "dryers",

        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",
        "laundry money",

        "$10",
        "10 dollars",
        "minimum 10 dollars",

        "quarters",
        "coins",
        "laundry coins"
      ],

      description:
        "McGinty residents use ASU's residence-hall laundry system, including Speed Queen for washing and drying.",

      features: [
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that the minimum amount you can add through the Speed Queen app is $10. You can add more than $10, but you cannot add less. Keep quarters available as a backup in case Speed Queen or the internet has a technical problem, but always check the individual machine to make sure it accepts coins.",

      extraTip:
        "Set a timer when you start your laundry and return when the cycle finishes. Shared laundry works much better when everyone removes their clothes promptly."
    },


    // =================================================
    // LAUNDRY PROBLEMS
    // =================================================

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen error",
        "speed queen problem",
        "laundry problem",
        "laundry refund"
      ],

      description:
        "Problems involving washers, dryers, Speed Queen, or laundry payments should be reported through the appropriate residential staff or current laundry-support process.",

      studentTip:
        "If a machine is not working, note the machine number and error message if possible. Do not continue paying a machine that is clearly malfunctioning."
    },


    // =================================================
    // MCGINTY HALL COUNCIL
    // =================================================

    {
      name: "McGinty Apartments Hall Council",

      keywords: [
        "hall council",
        "mcginty hall council",
        "mcginty apartments hall council",
        "residence hall council",
        "student leadership",
        "get involved",
        "housing organization"
      ],

      description:
        "ASU's current Student Handbook lists the Willetta McGinty Apartments Hall Council among the university's residence-hall organizations.",

      studentTip:
        "If you live in McGinty and want to become more involved, ask residential staff about Hall Council. Residence-hall leadership can be a good way to meet other residents, participate in programming, and build campus leadership experience."
    },


    // =================================================
    // RESIDENTIAL STAFF
    // =================================================

    {
      name: "Residential Staff",

      keywords: [
        "ra",
        "resident assistant",
        "residential staff",
        "hall staff",
        "mcginty staff",
        "residence coordinator",
        "need help"
      ],

      description:
        "McGinty is an actively staffed ASU residential community with personnel assigned to support residents.",

      studentTip:
        "Learn how to contact the residential staff assigned to McGinty. They can help with housing questions, policies, roommate concerns, building issues, and directing you to additional Housing resources."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Apartment Maintenance",

      keywords: [
        "maintenance",
        "apartment maintenance",
        "something broken",
        "toilet broken",
        "bathroom broken",
        "sink broken",
        "leak",
        "ac broken",
        "air conditioning",
        "repair"
      ],

      description:
        "Maintenance concerns in McGinty should be reported through the appropriate residential or Housing & Residence Life process.",

      studentTip:
        "Report problems as soon as you notice them. Leaks, plumbing problems, electrical issues, HVAC problems, or damaged university property can become more serious if nobody reports them."
    },


    // =================================================
    // HOUSING HELP
    // =================================================

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "residence life",
        "housing problem",
        "room assignment",
        "apartment assignment",
        "housing assignment"
      ],

      description:
        "ASU Housing & Residence Life manages university residential assignments, housing policies, and student housing support.",

      studentTip:
        "Start with McGinty's residential staff for everyday apartment concerns. For larger assignment or housing issues, contact Housing & Residence Life."
    },


    // =================================================
    // APARTMENT RESPONSIBILITY
    // =================================================

    {
      name: "Taking Care of Your Apartment",

      keywords: [
        "clean apartment",
        "cleaning",
        "trash",
        "apartment cleaning",
        "housekeeping",
        "chores"
      ],

      description:
        "Apartment-style housing requires residents to work together to maintain their shared residential environment.",

      studentTip:
        "Create a simple cleaning schedule with your apartment mates. Decide who handles trash, bathroom cleaning, shared surfaces, and other responsibilities instead of waiting until the apartment becomes messy."
    },


    // =================================================
    // BREEZEWAYS & BUILDING LAYOUT
    // =================================================

    {
      name: "McGinty Building Layout",

      keywords: [
        "breezeway",
        "breezeways",
        "walkway",
        "walkways",
        "mcginty buildings",
        "apartment buildings",
        "mcginty layout"
      ],

      description:
        "Historical ASU records describe the Willetta McGinty Apartments as four free-standing residential buildings connected by breezeways and sheltered walks.",

      studentTip:
        "Because McGinty is an apartment complex rather than one large residence-hall building, learn which building and apartment you are assigned to before move-in."
    },


    // =================================================
    // HISTORY
    // =================================================

    {
      name: "McGinty Apartments History",

      keywords: [
        "mcginty history",
        "willetta mcginty history",
        "1983",
        "honor students",
        "historic apartments"
      ],

      description:
        "Willetta McGinty Apartments date to 1983. Historical ASU documentation describes four free-standing apartment buildings connected by breezeways and sheltered walks. The apartments were originally designed to help prepare honor students for independent life beyond the university.",

      studentTip:
        "McGinty's apartment-style design has been part of ASU's campus for decades and gives the residential community a different setup from the university's traditional residence halls."
    }

  ],

  history: {
    year: 1983,

    description:
      "Willetta McGinty Apartments were constructed in 1983 as apartment-style campus residences. Historical ASU records describe four free-standing buildings connected by breezeways and sheltered walks and note that the residences were originally designed to help prepare honor students for life beyond campus."
  },

  funFact:
    "McGinty has a different residential history from ASU's traditional dormitories: the apartments were intentionally designed to give students a more independent style of campus living.",

  image: "",
  mapLink: ""
},

// =====================================================
// PEYTON FINLEY APARTMENTS
// =====================================================

{
  id: 48,

  name: "Peyton Finley Apartments",
  shortName: "Peyton Finley",
  category: "housing",

  keywords: [
    "peyton finley",
    "peyton finley hall",
    "peyton finley apartments",
    "finley",
    "finley apartments",

    "apartment",
    "apartments",
    "apartment style",
    "apartment-style",
    "campus apartment",
    "student apartment",
    "on campus apartment",

    "coed",
    "co-ed",
    "men and women",
    "male and female",
    "men",
    "women",

    "two to a room",
    "2 to a room",
    "four to a suite",
    "4 to a suite",
    "suite",
    "suite style",
    "suite-style",

    "roommate",
    "roommates",
    "suitemate",
    "suitemates",

    "bathroom",
    "bathroom in suite",
    "suite bathroom",
    "shower",
    "tub",
    "bathtub",
    "shower with tub",

    "common area",
    "sitting area",
    "first floor sitting area",
    "lounge",
    "couch",
    "couches",
    "tv stand",
    "tv stands",
    "television",

    "laundry",
    "first floor laundry",
    "washing",
    "drying",
    "washer",
    "washers",
    "dryer",
    "dryers",

    "speed queen",
    "speed queen app",
    "laundry app",
    "laundry payment",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "ra",
    "resident assistant",
    "residential staff",
    "night coordinator",

    "maintenance",
    "housing help",
    "hvac",
    "hvac replacement",

    "1983",
    "64 students",
    "peyton finley history"
  ],

  description:
    "Peyton Finley Apartments is a smaller co-ed residential community at Alabama State University serving both female and male students. The apartment-style community dates to 1983 and consists of four two-story brick buildings. Students report a current residential setup of two students to a bedroom and four students to a suite, with bathroom facilities inside the suite, first-floor laundry, and shared sitting areas.",

  services: [
    "Housing for female and male students",
    "Apartment-style campus housing",
    "Two students per bedroom",
    "Four students per suite",
    "Bathroom inside the suite",
    "Bathtub and shower",
    "First-floor sitting area",
    "Couches",
    "TV stands",
    "First-floor laundry",
    "Speed Queen laundry system",
    "Residential staff support",
    "Housing & Residence Life support",
    "Maintenance support"
  ],

  studentTip:
    "Peyton Finley is a smaller residential community than many of ASU's larger residence halls. Students report two residents sharing a bedroom and four residents sharing a suite. Talk with your roommate and suitemates early about cleaning, bathroom schedules, guests, noise, studying, shared supplies, and personal space.",

  sections: [

    // =================================================
    // CO-ED HOUSING
    // =================================================

    {
      name: "Housing for Men & Women",

      keywords: [
        "coed",
        "co-ed",
        "men and women",
        "male and female",
        "men",
        "women",
        "coed housing"
      ],

      description:
        "Peyton Finley currently serves both female and male students within ASU's residential community.",

      studentTip:
        "Your individual apartment, suite, and roommate placement is determined by Housing & Residence Life. Always rely on your current Housing assignment."
    },


    // =================================================
    // ROOM & SUITE SETUP
    // =================================================

    {
      name: "2 to a Room • 4 to a Suite",

      keywords: [
        "two to a room",
        "2 to a room",
        "four to a suite",
        "4 to a suite",
        "room setup",
        "suite setup",
        "how many roommates",
        "how many people",
        "room occupancy"
      ],

      description:
        "Students report that Peyton Finley commonly has two residents sharing each bedroom and four residents sharing the overall suite.",

      studentTip:
        "Your official Housing assignment is always the final authority because room configurations and occupancy can change according to university housing needs."
    },


    // =================================================
    // BATHROOM
    // =================================================

    {
      name: "Bathroom, Shower & Bathtub",

      keywords: [
        "bathroom",
        "bathrooms",
        "suite bathroom",
        "bathroom in suite",
        "shower",
        "tub",
        "bathtub",
        "shower with tub",
        "does peyton finley have tub"
      ],

      description:
        "Students report that Peyton Finley suites include bathroom facilities inside the suite with a shower and bathtub.",

      studentTip:
        "Since the bathroom is shared within the suite, talk about cleaning responsibilities, toiletries, bathroom schedules, towels, and shared supplies before they become a problem."
    },


    // =================================================
    // ROOMMATES & SUITEMATES
    // =================================================

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "roommate conflict",
        "suite conflict"
      ],

      description:
        "Peyton Finley's residential layout means students share bedroom and suite spaces with other residents.",

      studentTip:
        "Discuss sleep schedules, alarms, studying, guests, music, television, cleaning, bathroom use, food, borrowing belongings, and personal boundaries early. Residential staff can help when roommates cannot resolve an issue themselves."
    },


    // =================================================
    // FIRST-FLOOR SITTING AREA
    // =================================================

    {
      name: "First-Floor Sitting & Common Area",

      keywords: [
        "common area",
        "sitting area",
        "first floor",
        "first floor sitting area",
        "lounge",
        "hang out",
        "social area",
        "couches",
        "couch"
      ],

      description:
        "Students report that Peyton Finley has shared sitting space on the first floor with couches and areas where residents can spend time outside their bedrooms.",

      studentTip:
        "The first-floor sitting area can be useful when you want to socialize, meet other residents, or simply get out of your room without leaving your residential community."
    },


    // =================================================
    // COUCHES & TV AREA
    // =================================================

    {
      name: "Couches & TV Area",

      keywords: [
        "couch",
        "couches",
        "tv",
        "television",
        "tv stand",
        "tv stands",
        "watch tv",
        "lounge"
      ],

      description:
        "The first-floor common area includes couches and TV stands as part of the shared residential sitting space.",

      studentTip:
        "Remember that common areas belong to everyone. Keep the space clean and be respectful of other residents using it to relax or socialize."
    },


    // =================================================
    // LAUNDRY & SPEED QUEEN
    // =================================================

    {
      name: "🧺 First-Floor Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "first floor laundry",
        "washing",
        "drying",
        "wash clothes",
        "washer",
        "washers",
        "dryer",
        "dryers",

        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",
        "laundry money",

        "$10",
        "10 dollars",
        "minimum 10 dollars",

        "quarters",
        "coins",
        "laundry coins"
      ],

      description:
        "Students report that Peyton Finley's washers and dryers are located on the first floor. ASU residence halls use the Speed Queen laundry system.",

      features: [
        "First-floor laundry",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that the minimum amount you can add through the Speed Queen app is $10. You can add more than $10, but you cannot add less. Keep quarters available as a backup in case Speed Queen or the internet experiences a technical problem, but check the individual machine first to make sure it accepts coins.",

      extraTip:
        "Set a timer when you start your laundry. Return when the cycle finishes so another resident is not waiting for clothes that have been sitting in a machine."
    },


    // =================================================
    // LAUNDRY PROBLEMS
    // =================================================

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "laundry broken",
        "speed queen error",
        "speed queen problem",
        "laundry refund"
      ],

      description:
        "Laundry-equipment or payment problems should be reported through residential staff or the current laundry-support process.",

      studentTip:
        "Write down or photograph the machine number and error message if possible. Do not repeatedly pay a machine that is clearly malfunctioning."
    },


    // =================================================
    // SMALLER RESIDENTIAL COMMUNITY
    // =================================================

    {
      name: "Smaller Residential Community",

      keywords: [
        "small dorm",
        "small residence hall",
        "64 students",
        "capacity",
        "how many students",
        "small community"
      ],

      description:
        "ASU's Fall 2025 institutional information lists Peyton Finley with 64 residential spaces, making it significantly smaller than many of the university's larger residence halls.",

      studentTip:
        "A smaller residential community can make it easier to become familiar with your neighbors and residential staff."
    },


    // =================================================
    // RESIDENTIAL STAFF
    // =================================================

    {
      name: "Residential Staff",

      keywords: [
        "ra",
        "resident assistant",
        "residential staff",
        "night coordinator",
        "residence night coordinator",
        "hall staff",
        "need help"
      ],

      description:
        "Peyton Finley has residential personnel assigned to support students living in the community.",

      studentTip:
        "Learn how to reach your residential staff early. They can help with residential questions, policies, roommate concerns, building problems, and connecting you with Housing & Residence Life."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Apartment & Suite Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "toilet broken",
        "tub broken",
        "shower broken",
        "leak",
        "ac broken",
        "air conditioning",
        "hvac",
        "room repair"
      ],

      description:
        "Maintenance concerns should be reported through the appropriate residential or Facilities/Housing process.",

      studentTip:
        "Report leaks, plumbing problems, HVAC issues, electrical problems, or damaged university property early. Do not assume somebody else has already reported the issue."
    },


    // =================================================
    // HVAC IMPROVEMENTS
    // =================================================

    {
      name: "Current HVAC Improvements",

      keywords: [
        "hvac",
        "hvac replacement",
        "air conditioning",
        "ac",
        "heating",
        "cooling",
        "renovation",
        "improvements",
        "peyton finley upgrades"
      ],

      description:
        "ASU currently lists a Peyton Finley Apartments HVAC replacement among the university's Facilities Management projects in progress.",

      studentTip:
        "Because facility projects can affect residential areas temporarily, follow Housing or Facilities notices if work is occurring near your assigned apartment."
    },


    // =================================================
    // HOUSING HELP
    // =================================================

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "residence life",
        "housing problem",
        "room assignment",
        "suite assignment"
      ],

      description:
        "Housing & Residence Life manages residential assignments, housing policies, and student housing support.",

      studentTip:
        "Start with Peyton Finley's residential staff for everyday concerns. For larger housing or assignment issues, contact Housing & Residence Life."
    },


    // =================================================
    // TAKING CARE OF THE SUITE
    // =================================================

    {
      name: "Taking Care of Your Suite",

      keywords: [
        "clean",
        "cleaning",
        "clean suite",
        "trash",
        "chores",
        "housekeeping"
      ],

      description:
        "Residents share responsibility for keeping their bedrooms, bathroom, and other suite spaces reasonably clean.",

      studentTip:
        "Create a cleaning schedule with your roommates and suitemates. Decide who handles the bathroom, trash, shared surfaces, and other responsibilities instead of waiting for the suite to become messy."
    },


    // =================================================
    // BUILDING LAYOUT
    // =================================================

    {
      name: "Peyton Finley Building Layout",

      keywords: [
        "building layout",
        "apartment buildings",
        "four buildings",
        "two story",
        "two-story",
        "brick buildings"
      ],

      description:
        "Historical ASU records describe Peyton Finley Apartments as a cluster of four two-story brick residential buildings.",

      studentTip:
        "Because Peyton Finley consists of multiple buildings rather than one large residence-hall tower, make sure you know your specific building and room assignment before move-in."
    },


    // =================================================
    // HISTORY
    // =================================================

    {
      name: "Peyton Finley Apartments History",

      keywords: [
        "peyton finley history",
        "finley history",
        "1983",
        "when was peyton finley built",
        "historic apartments"
      ],

      description:
        "Peyton Finley Apartments date to 1983. ASU historical records describe the residential complex as four two-story brick buildings designed to house 64 students.",

      studentTip:
        "Peyton Finley has been part of ASU's residential campus for more than four decades while continuing to receive facility improvements."
    }

  ],

  history: {
    year: 1983,

    description:
      "Peyton Finley Apartments were constructed in 1983 as a cluster of four two-story brick residential buildings. Historical ASU records identify capacity for 64 students, and ASU's Fall 2025 institutional report continues to list 64 residential spaces."
  },

  funFact:
    "Peyton Finley's historical 64-student capacity matches ASU's Fall 2025 capacity exactly, making it one of the university's smaller residential communities.",

  image: "",
  mapLink: ""
},

// =====================================================
// GEORGE N. CARD HALL
// =====================================================

{
  id: 49,

  name: "George N. Card Hall",
  shortName: "Card Hall",
  category: "housing",

  keywords: [
    "card",
    "card hall",
    "george card",
    "george n card",
    "george n card hall",

    "freshman",
    "freshmen",
    "freshman housing",
    "first year",
    "first-year",
    "first year housing",

    "men",
    "male",
    "mens dorm",
    "men's dorm",
    "freshman men",
    "first year men",
    "male residence hall",

    "suite",
    "suite style",
    "suite-style",
    "all suite",
    "all-suite",

    "honors",
    "honors housing",
    "honors wing",
    "presidential scholarship",
    "presidential scholar",
    "presidential scholarship recipients",

    "study",
    "study room",
    "study rooms",
    "study rooms every floor",

    "laundry",
    "laundry every floor",
    "washer",
    "washers",
    "dryer",
    "dryers",

    "speed queen",
    "speed queen app",
    "laundry app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "elevator",
    "elevators",

    "wifi",
    "wi-fi",
    "internet",

    "air conditioning",
    "climate control",
    "heat",

    "ra",
    "resident assistant",
    "residential staff",

    "maintenance",
    "housing help",

    "1962",
    "2009",
    "george n card",
    "asu president",
    "card hall history"
  ],

  description:
    "George N. Card Hall is a traditional first-year men's residence hall at Alabama State University. Built in 1962 and extensively restored in 2009, the four-story historic residence hall is an all-suite facility housing approximately 118 first-year male students. Card also includes a designated Honors wing for Presidential Scholarship recipients, along with study rooms and laundry facilities on each floor, elevators, Wi-Fi, and year-round climate control.",

  services: [
    "First-year men's housing",
    "All-suite residence hall",
    "Honors wing",
    "Presidential Scholarship recipient housing",
    "Study rooms on each floor",
    "Laundry on each floor",
    "Speed Queen laundry system",
    "Elevators",
    "Wi-Fi",
    "Year-round climate control",
    "Resident Assistants",
    "Residence-life support"
  ],

  studentTip:
    "Card Hall is a freshman men's residence hall, so many residents are adjusting to campus living for the first time. Learn who your RA is, where your study and laundry spaces are, how to report maintenance problems, and what Housing expects from residents early in the semester.",

  sections: [

    // =================================================
    // FRESHMAN MEN'S HOUSING
    // =================================================

    {
      name: "Freshman Men's Residence Hall",

      keywords: [
        "freshman",
        "freshman men",
        "freshman males",
        "first year",
        "first year men",
        "mens dorm",
        "men's dorm"
      ],

      description:
        "ASU identifies George N. Card Hall as a traditional residence hall for first-year male students.",

      studentTip:
        "If this is your first time living away from home, do not be afraid to ask questions. Your RA and residence-hall staff are there to help you learn how campus housing works."
    },


    // =================================================
    // ALL-SUITE LIVING
    // =================================================

    {
      name: "All-Suite Residence Hall",

      keywords: [
        "suite",
        "suite style",
        "suite-style",
        "all suite",
        "all-suite",
        "suite living",
        "suite setup"
      ],

      description:
        "ASU describes Card Hall as an all-suite residential facility.",

      studentTip:
        "Your exact bedroom, suite occupancy, and bathroom arrangement depend on your Housing assignment. Check your current assignment rather than assuming every suite has the same configuration."
    },


    // =================================================
    // HONORS WING
    // =================================================

    {
      name: "🎓 Honors & Presidential Scholars Wing",

      keywords: [
        "honors",
        "honors wing",
        "honors dorm",
        "honors housing",
        "presidential scholarship",
        "presidential scholar",
        "presidential scholars",
        "presidential scholarship recipient",
        "scholarship housing"
      ],

      description:
        "Card Hall includes a designated Honors wing for Presidential Scholarship recipients.",

      studentTip:
        "If you are a Presidential Scholarship recipient and have questions about Honors housing or your placement, rely on your current Housing assignment and scholarship information for your specific room."
    },


    // =================================================
    // ROOMMATES & SUITEMATES
    // =================================================

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "roommate conflict",
        "suite conflict"
      ],

      description:
        "Card's all-suite design means residents may share residential spaces with roommates and suitemates.",

      studentTip:
        "Discuss sleep schedules, alarms, studying, guests, music, gaming, cleaning, food, borrowing belongings, shared supplies, and personal space early. Your RA can help if you and your roommates are having difficulty resolving an issue."
    },


    // =================================================
    // STUDY ROOMS
    // =================================================

    {
      name: "📚 Study Rooms on Every Floor",

      keywords: [
        "study",
        "study room",
        "study rooms",
        "study every floor",
        "study room every floor",
        "quiet study",
        "where to study"
      ],

      description:
        "Card Hall features study rooms on each floor, giving residents convenient places to work outside their bedrooms and suites.",

      studentTip:
        "Take advantage of the study room on your floor when your room is noisy or when you need to separate studying from relaxing."
    },


    // =================================================
    // LAUNDRY
    // =================================================

    {
      name: "🧺 Laundry on Every Floor & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "laundry every floor",
        "wash clothes",
        "washing",
        "washer",
        "washers",
        "drying",
        "dryer",
        "dryers",

        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",

        "$10",
        "10 dollars",
        "minimum 10 dollars",

        "quarters",
        "coins"
      ],

      description:
        "ASU confirms that Card Hall has laundry facilities on each floor. ASU residence halls use the Speed Queen laundry system.",

      features: [
        "Laundry facilities on each floor",
        "Washers and dryers",
        "Speed Queen app",
        "Digital laundry payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that the minimum amount you can add through the Speed Queen app is $10. You can add more than $10, but not less. Keep quarters available as a backup in case Speed Queen or the internet has a technical problem, but check the individual machine first to make sure it accepts coins.",

      extraTip:
        "Set a timer when you start your laundry and return when the cycle finishes. Do not leave finished clothes sitting in a machine when other residents may be waiting."
    },


    // =================================================
    // LAUNDRY PROBLEMS
    // =================================================

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen error",
        "speed queen problem",
        "laundry problem",
        "laundry refund"
      ],

      description:
        "Laundry-equipment or payment problems should be reported through Card Hall staff or the current laundry-support process.",

      studentTip:
        "Note the machine number and error message if possible. Do not repeatedly pay a machine that is clearly malfunctioning."
    },


    // =================================================
    // ELEVATORS
    // =================================================

    {
      name: "Elevators",

      keywords: [
        "elevator",
        "elevators",
        "lift",
        "stairs",
        "accessible"
      ],

      description:
        "Card Hall includes elevators for residents traveling between its four floors.",

      studentTip:
        "Elevators may be especially busy during move-in and move-out, so give yourself extra time when moving large items."
    },


    // =================================================
    // WIFI
    // =================================================

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless",
        "card hall wifi"
      ],

      description:
        "Wireless internet connections are available throughout Card Hall for residents.",

      studentTip:
        "Do not wait until the last minute to submit an important assignment. Give yourself extra time in case you encounter a temporary network issue."
    },


    // =================================================
    // CLIMATE CONTROL
    // =================================================

    {
      name: "Year-Round Climate Control",

      keywords: [
        "air conditioning",
        "ac",
        "heat",
        "heating",
        "climate control",
        "room temperature"
      ],

      description:
        "Card Hall features year-round climate control as part of its residential amenities.",

      studentTip:
        "If your room has a heating or cooling problem, report it through residence-hall staff rather than attempting to repair university equipment yourself."
    },


    // =================================================
    // RESIDENT ASSISTANTS
    // =================================================

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call",
        "hall staff"
      ],

      description:
        "Resident Assistants and residence-hall staff help support students living in Card Hall.",

      studentTip:
        "Learn your RA's name and how to reach the RA on call. They can help with residence-hall policies, roommate concerns, building questions, and connecting you with additional campus resources."
    },


    // =================================================
    // FIRST-YEAR LIVING
    // =================================================

    {
      name: "First-Year Residence Hall Tips",

      keywords: [
        "freshman tips",
        "first year tips",
        "first dorm",
        "first time living on campus",
        "dorm tips",
        "living away from home"
      ],

      description:
        "Because Card serves first-year students, many residents are experiencing college residential life for the first time.",

      studentTip:
        "During your first week, learn where to do laundry, where to study, how to reach your RA, how to report maintenance, where your mail and packages go, and who to contact if you have a Housing problem."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Residence Hall Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "room repair",
        "ac broken",
        "air conditioning broken",
        "leak",
        "toilet broken",
        "maintenance problem"
      ],

      description:
        "Maintenance concerns in Card Hall should be reported through residence-hall staff or the appropriate Housing and Facilities process.",

      studentTip:
        "Report maintenance issues early. Do not assume your roommate, suitemate, or another resident has already reported the problem."
    },


    // =================================================
    // HOUSING HELP
    // =================================================

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "residence life",
        "housing problem",
        "room assignment",
        "housing assignment"
      ],

      description:
        "Housing & Residence Life manages university residence-hall assignments, policies, and student housing support.",

      studentTip:
        "Start with your RA or Card Hall staff for everyday residence-hall concerns. Contact Housing & Residence Life for larger assignment or housing issues."
    },


    // =================================================
    // WHO WAS GEORGE N. CARD?
    // =================================================

    {
      name: "Who Was George N. Card?",

      keywords: [
        "george card",
        "george n card",
        "who was george card",
        "card history",
        "asu president",
        "1873",
        "1878"
      ],

      description:
        "George N. Card Hall is named for George N. Card, who served as president of Alabama State University from 1873 to 1878.",

      studentTip:
        "Learning the names behind ASU's buildings is another way to understand the university's history. Card Hall carries the name of one of ASU's earliest institutional leaders."
    },


    // =================================================
    // BUILDING HISTORY
    // =================================================

    {
      name: "Card Hall History",

      keywords: [
        "card history",
        "card hall history",
        "1962",
        "2009",
        "restored",
        "renovated",
        "historic dorm"
      ],

      description:
        "George N. Card Hall was built in 1962 and underwent an extensive restoration in 2009. The historic four-story residence hall continues to serve first-year male students.",

      studentTip:
        "Card combines an older ASU residence-hall history with modern residential amenities added through its major restoration."
    },


    // =================================================
    // 2009 RESTORATION
    // =================================================

    {
      name: "2009 Restoration",

      keywords: [
        "2009",
        "restoration",
        "restored",
        "renovation",
        "renovated",
        "card renovation"
      ],

      description:
        "ASU extensively restored Card Hall in 2009, updating the historic residence hall while maintaining its role within the university's residential campus."
    }

  ],

  history: {
    year: 1962,

    description:
      "George N. Card Hall was built in 1962 and extensively restored in 2009. The four-story all-suite residence hall is named for George N. Card, who served as president of Alabama State University from 1873 to 1878."
  },

  funFact:
    "Card Hall is more than a freshman men's residence hall—it also contains a designated Honors wing for Presidential Scholarship recipients, giving the building a special role in ASU's residential Honors community.",

  image: "",
  mapLink: ""
},

// =====================================================
// C.J. DUNN TOWER
// =====================================================

{
  id: 50,

  name: "C.J. Dunn Tower",
  shortName: "CJ Dunn",
  category: "housing",

  keywords: [
    "cj dunn",
    "c.j. dunn",
    "cj dunn tower",
    "c.j. dunn tower",
    "dunn",
    "dunn tower",
    "dunn towers",

    "freshman",
    "freshmen",
    "freshman housing",
    "first year",
    "first-year",
    "first year housing",

    "women",
    "female",
    "women's dorm",
    "womens dorm",
    "freshman women",
    "first year women",
    "female residence hall",

    "11 floors",
    "11 stories",
    "11 story",
    "eleven stories",
    "tower",

    "two to a room",
    "2 to a room",
    "three rooms to a suite",
    "3 rooms to a suite",
    "six to a suite",
    "6 to a suite",

    "suite",
    "suite style",
    "suite-style",
    "suitemates",

    "bathroom",
    "big bathroom",
    "suite bathroom",
    "two sinks",
    "2 sinks",
    "walk in shower",
    "walk-in shower",
    "toilet",
    "private toilet",
    "toilet door",

    "closet",
    "closets",
    "big closet",
    "big closets",

    "laundry",
    "basement laundry",
    "digital laundry",
    "washer",
    "washers",
    "dryer",
    "dryers",
    "speed queen",
    "speed queen app",
    "$10",
    "10 dollars",
    "quarters",
    "coins",

    "wifi",
    "wi-fi",
    "internet",

    "shuttlesworth",
    "fred shuttlesworth",
    "fred shuttlesworth dining hall",
    "dining hall",
    "cafeteria",
    "food near dunn",

    "university center",
    "east campus",
    "east campus dorms",

    "ra",
    "resident assistant",
    "residential staff",
    "maintenance",
    "housing help",

    "1994",
    "480 students",
    "dunn history"
  ],

  description:
    "C.J. Dunn Tower is an 11-story freshman women's residence hall at Alabama State University. Built in 1994, the tower provides suite-style housing for approximately 480 first-year women. Students report a current setup of two residents per bedroom, three bedrooms per suite, and six residents sharing the overall suite. Dunn also features large closets, suite bathrooms, Wi-Fi, and a renovated digital laundry facility in the basement.",

  services: [
    "First-year women's housing",
    "11-story residence hall",
    "Two students per bedroom",
    "Three bedrooms per suite",
    "Six students per suite",
    "Large bedroom closets",
    "Large suite bathroom",
    "Two bathroom sinks",
    "Enclosed toilet area",
    "Walk-in shower",
    "Basement laundry facility",
    "Speed Queen laundry system",
    "Wi-Fi",
    "Resident Assistants",
    "Residence-life support",
    "Convenient access to Shuttlesworth Dining Hall"
  ],

  studentTip:
    "Dunn is a large freshman women's community, so learn your floor, suite, RA, laundry location, and nearby campus landmarks early. With six students sharing a suite, communication about cleaning, bathroom schedules, guests, noise, and shared supplies can make living together much easier.",

  sections: [

    // =================================================
    // FRESHMAN WOMEN'S HOUSING
    // =================================================

    {
      name: "Freshman Women's Residence Hall",

      keywords: [
        "freshman women",
        "freshman girls",
        "first year women",
        "female freshman",
        "women's dorm",
        "womens dorm",
        "female housing"
      ],

      description:
        "ASU identifies C.J. Dunn Tower as a traditional residence hall serving first-year female students.",

      studentTip:
        "Many Dunn residents are experiencing college residential life for the first time. Learn how your residence hall works during your first few days instead of waiting until you need help."
    },


    // =================================================
    // 11-STORY TOWER
    // =================================================

    {
      name: "11-Story Residence Hall",

      keywords: [
        "11 stories",
        "11 story",
        "11 floors",
        "eleven stories",
        "tower",
        "high rise",
        "high-rise"
      ],

      description:
        "C.J. Dunn Tower is an 11-story residential building and one of ASU's largest traditional freshman residence halls.",

      studentTip:
        "Know your floor number and the safest routes through the building. During busy periods such as move-in, class changes, or major campus events, give yourself additional time to get downstairs and leave the residence hall."
    },


    // =================================================
    // ROOM & SUITE SETUP
    // =================================================

    {
      name: "2 to a Room • 6 to a Suite",

      keywords: [
        "two to a room",
        "2 to a room",
        "three rooms",
        "3 rooms",
        "three rooms to a suite",
        "3 rooms to a suite",
        "six to a suite",
        "6 to a suite",
        "how many roommates",
        "how many suitemates",
        "room setup",
        "suite setup"
      ],

      description:
        "Students report that Dunn commonly has two residents sharing each bedroom, with three bedrooms making up a suite. This creates a typical total of six residents sharing the overall suite.",

      studentTip:
        "Your official Housing assignment is always the final authority because room occupancy can change based on university housing needs."
    },


    // =================================================
    // LARGE CLOSETS
    // =================================================

    {
      name: "Large Bedroom Closets",

      keywords: [
        "closet",
        "closets",
        "big closet",
        "big closets",
        "large closet",
        "large closets",
        "storage",
        "clothes storage"
      ],

      description:
        "Students report that Dunn bedrooms include large closet spaces for residents.",

      studentTip:
        "Even with larger closets, avoid bringing your entire closet from home on move-in day. Start with what you know you'll use and bring additional items later if you still have space."
    },


    // =================================================
    // BATHROOM
    // =================================================

    {
      name: "Large Suite Bathroom",

      keywords: [
        "bathroom",
        "big bathroom",
        "large bathroom",
        "suite bathroom",
        "shared bathroom",
        "bathroom in suite"
      ],

      description:
        "Each suite has bathroom facilities inside the suite shared among its residents.",

      studentTip:
        "With as many as six students sharing the bathroom, agree early on cleaning responsibilities, shower schedules, toiletries, towels, trash, and shared bathroom supplies."
    },


    // =================================================
    // TWO SINKS
    // =================================================

    {
      name: "Two Bathroom Sinks",

      keywords: [
        "sink",
        "sinks",
        "two sinks",
        "2 sinks",
        "bathroom sinks",
        "brush teeth"
      ],

      description:
        "Students report that the Dunn suite bathroom includes two sinks, which helps multiple suitemates get ready at the same time.",

      studentTip:
        "Keep your personal items organized rather than covering both sinks with toiletries. Six people can create bathroom clutter very quickly."
    },


    // =================================================
    // WALK-IN SHOWER
    // =================================================

    {
      name: "Walk-In Shower",

      keywords: [
        "shower",
        "walk in shower",
        "walk-in shower",
        "does dunn have shower",
        "bathroom shower"
      ],

      description:
        "Students report that Dunn suite bathrooms include a walk-in shower.",

      studentTip:
        "With six people potentially sharing the suite, communicate about shower times—especially before early-morning classes."
    },


    // =================================================
    // ENCLOSED TOILET
    // =================================================

    {
      name: "Enclosed Toilet Area",

      keywords: [
        "toilet",
        "toilet door",
        "private toilet",
        "enclosed toilet",
        "bathroom privacy",
        "restroom"
      ],

      description:
        "Students report that the toilet is located in its own enclosed portion of the suite bathroom with a door, providing additional privacy when multiple suitemates are getting ready.",

      studentTip:
        "The separate toilet area can make a six-person bathroom easier to share because another resident may still be able to use the sink area while the toilet area is occupied."
    },


    // =================================================
    // ROOMMATES & SUITEMATES
    // =================================================

    {
      name: "Roommates & Suitemates",

      keywords: [
        "roommate",
        "roommates",
        "suitemate",
        "suitemates",
        "roommate problem",
        "suitemate problem",
        "suite conflict"
      ],

      description:
        "Dunn's suite arrangement creates a community of roommates and suitemates who share residential and bathroom spaces.",

      studentTip:
        "Six personalities in one suite can mean six different schedules. Discuss sleep, alarms, studying, guests, music, cleaning, showers, bathroom use, shared supplies, food, and personal boundaries early. Your RA can help if a conflict becomes difficult to resolve."
    },


    // =================================================
    // BATHROOM CLEANING
    // =================================================

    {
      name: "Suite Bathroom Cleaning",

      keywords: [
        "clean bathroom",
        "bathroom cleaning",
        "clean shower",
        "clean sink",
        "chores",
        "cleaning schedule"
      ],

      description:
        "Residents sharing the suite should work together to keep the bathroom and shared areas clean.",

      studentTip:
        "A simple rotating cleaning schedule can prevent arguments. Divide responsibilities such as sinks, shower, toilet area, mirrors, trash, and floors instead of expecting one person to do everything."
    },


    // =================================================
    // BASEMENT LAUNDRY
    // =================================================

    {
      name: "🧺 Basement Laundry & Speed Queen",

      keywords: [
        "laundry",
        "laundry room",
        "basement laundry",
        "laundry basement",
        "digital laundry",
        "washer",
        "washers",
        "dryer",
        "dryers",

        "speed queen",
        "speed queen app",
        "laundry app",
        "laundry payment",

        "$10",
        "10 dollars",
        "minimum 10 dollars",

        "quarters",
        "coins"
      ],

      description:
        "ASU identifies Dunn's renovated digital laundry facility as being located in the basement. ASU residential laundry uses the Speed Queen system.",

      features: [
        "Laundry facility in the basement",
        "Digital laundry system",
        "Washers and dryers",
        "Speed Queen app",
        "Digital payment",
        "Coin backup when supported by the individual machine"
      ],

      studentTip:
        "Students report that the minimum amount you can add through the Speed Queen app is $10. You can add more than $10, but not less. Keep quarters available as a backup in case the internet or Speed Queen experiences a technical problem, but check the individual machine to confirm that it accepts coins.",

      extraTip:
        "Dunn houses hundreds of students, so laundry can get busy. Set a timer, return when your cycle finishes, and avoid leaving clothes in a machine after the cycle ends."
    },


    // =================================================
    // LAUNDRY PROBLEMS
    // =================================================

    {
      name: "Laundry Problems",

      keywords: [
        "washer broken",
        "dryer broken",
        "speed queen error",
        "speed queen problem",
        "laundry broken",
        "laundry refund"
      ],

      description:
        "Laundry-equipment or payment problems should be reported through Dunn residence-hall staff or the current laundry-support process.",

      studentTip:
        "Note the machine number and error message if possible. Do not repeatedly pay a machine that is clearly malfunctioning."
    },


    // =================================================
    // SHUTTLESWORTH DINING HALL
    // =================================================

    {
      name: "🍽️ Next to Fred Shuttlesworth Dining Hall",

      keywords: [
        "shuttlesworth",
        "fred shuttlesworth",
        "fred shuttlesworth dining hall",
        "dining hall",
        "cafeteria",
        "food",
        "food near dunn",
        "dining near dunn",
        "where to eat",
        "caf"
      ],

      description:
        "C.J. Dunn Tower is located directly next to Fred Shuttlesworth Dining Hall, giving residents convenient access to one of ASU's primary dining facilities.",

      studentTip:
        "One of Dunn's biggest location advantages is having the dining hall right beside the residence hall. You do not have to cross campus just to get to the main dining facility."
    },


    // =================================================
    // UNIVERSITY CENTER
    // =================================================

    {
      name: "Across from the University Center",

      keywords: [
        "university center",
        "across from university center",
        "dunn location",
        "where is dunn",
        "find dunn"
      ],

      description:
        "ASU describes Dunn Tower as sitting directly across from the University Center in the east-campus residential area.",

      studentTip:
        "Use Fred Shuttlesworth Dining Hall and the University Center as landmarks when learning how to find Dunn Tower."
    },


    // =================================================
    // WIFI
    // =================================================

    {
      name: "Wi-Fi & Internet",

      keywords: [
        "wifi",
        "wi-fi",
        "internet",
        "wireless",
        "dunn wifi"
      ],

      description:
        "Wireless internet connections are available for Dunn Tower residents.",

      studentTip:
        "Give yourself extra time when submitting important online assignments in case you encounter a temporary network issue."
    },


    // =================================================
    // LIVING IN A LARGE RESIDENCE HALL
    // =================================================

    {
      name: "Living in a Large Residence Hall",

      keywords: [
        "large dorm",
        "big dorm",
        "480 students",
        "crowded",
        "tower living",
        "dorm tips"
      ],

      description:
        "With housing for approximately 480 first-year women, Dunn is one of ASU's larger freshman residential communities.",

      studentTip:
        "Learn your floor, RA, suite number, exits, laundry location, and nearby landmarks during your first week. In a building this large, knowing exactly where you are going saves time."
    },


    // =================================================
    // RESIDENT ASSISTANTS
    // =================================================

    {
      name: "Resident Assistants (RAs)",

      keywords: [
        "ra",
        "ras",
        "resident assistant",
        "resident assistants",
        "ra on call",
        "hall staff"
      ],

      description:
        "Resident Assistants and residence-hall staff support students living throughout Dunn Tower.",

      studentTip:
        "Know who your RA is and how to reach the RA on call. RAs can help with roommate and suitemate concerns, residence-hall policies, building questions, emergencies, and connecting you with additional campus resources."
    },


    // =================================================
    // FIRST-YEAR TIPS
    // =================================================

    {
      name: "First-Year Living Tips",

      keywords: [
        "freshman tips",
        "first year tips",
        "dorm tips",
        "first dorm",
        "first time living on campus",
        "freshman help"
      ],

      description:
        "Dunn serves first-year women, meaning many residents are learning how college residential life works for the first time.",

      studentTip:
        "During your first week, learn where to do laundry, where to eat, who your RA is, how to report maintenance, where your mail and packages go, and who to contact when you have a Housing problem."
    },


    // =================================================
    // MAINTENANCE
    // =================================================

    {
      name: "Residence Hall Maintenance",

      keywords: [
        "maintenance",
        "something broken",
        "room repair",
        "bathroom repair",
        "sink broken",
        "shower broken",
        "toilet broken",
        "leak",
        "maintenance problem"
      ],

      description:
        "Maintenance concerns in Dunn Tower should be reported through residence-hall staff or the appropriate Housing and Facilities process.",

      studentTip:
        "With sinks, a shower, toilet, and other shared fixtures inside your suite, report leaks or broken equipment quickly rather than waiting for the problem to become worse."
    },


    // =================================================
    // HOUSING HELP
    // =================================================

    {
      name: "Housing & Residence Life Help",

      keywords: [
        "housing",
        "housing office",
        "housing help",
        "residence life",
        "housing problem",
        "room assignment",
        "suite assignment"
      ],

      description:
        "ASU Housing & Residence Life manages residential assignments, residence-hall policies, and student housing support.",

      studentTip:
        "Start with your RA or Dunn residence-hall staff for everyday concerns. For larger assignment or housing issues, contact Housing & Residence Life."
    },


    // =================================================
    // BUILDING HISTORY
    // =================================================

    {
      name: "C.J. Dunn Tower History",

      keywords: [
        "dunn history",
        "dunn tower history",
        "1994",
        "when was dunn built",
        "114419",
        "114,419"
      ],

      description:
        "C.J. Dunn Tower was built in 1994. ASU describes the 114,419-square-foot structure as an 11-story brick and stucco residence hall designed to house approximately 480 first-year female students.",

      studentTip:
        "Dunn's height and size make it one of the more recognizable residential buildings on ASU's east-campus side."
    }

  ],

  history: {
    year: 1994,

    description:
      "C.J. Dunn Tower was constructed in 1994 as an 11-story brick and stucco residence hall. The 114,419-square-foot building provides suite-style accommodations for approximately 480 first-year female students."
  },

  funFact:
    "At 11 stories and approximately 114,419 square feet, C.J. Dunn Tower is one of the largest traditional freshman residence halls we've added to Hornet Navigator—and residents have Fred Shuttlesworth Dining Hall right next door.",

  image: "",
  mapLink: ""
},

// =====================================================
// ASU STUDENT PARKING GUIDE
// =====================================================

{
  id: 51,

  name: "ASU Student Parking Guide",
  shortName: "Campus Parking",
  category: "parking",

  keywords: [
    "parking",
    "asu parking",
    "campus parking",
    "student parking",
    "parking lot",
    "parking lots",
    "where can i park",
    "where do students park",

    "parking decal",
    "parking permit",
    "student decal",
    "student permit",
    "vehicle registration",

    "reserved parking",
    "faculty parking",
    "faculty staff parking",
    "staff parking",
    "reserved space",
    "reserved spot",

    "parking signs",
    "read the signs",
    "parking restriction",
    "parking restrictions",

    "boot",
    "booted",
    "car boot",
    "car booted",
    "parking boot",
    "boot removal",
    "parking ticket",
    "parking citation",
    "parking fine",
    "tow",
    "towed",

    "peyton finley parking",
    "jo ann robinson parking",
    "jo ann parking",
    "joann parking",
    "bessie estell parking",
    "mlk parking",
    "acadome parking",
    "facility 1 parking",
    "facility i parking",
    "benson parking",
    "abercrombie parking",
    "facility 2 parking",
    "facility ii parking",
    "card hall parking",
    "stadium parking",
    "football stadium parking",

    "game day parking",
    "football parking",
    "homecoming parking",
    "move car",
    "move vehicle",
    "move my car",
    "parking announcement",

    "fire hydrant",
    "fire lane",
    "no parking",
    "restricted parking",

    "event parking",
    "temporary parking",
    "temporary parking map",
    "closed parking lot",
    "closed parking lots",

    "lot a1",
    "lot b",
    "lot d1",
    "lot e1",
    "lot l",

    "asu stadium parking lot",
    "shuttle parking"
  ],

  description:
    "The ASU Student Parking Guide helps students understand commonly used parking areas around Alabama State University, including residence-hall parking, the Acadome, ASU Stadium, parking permits, reserved spaces, game-day changes, boots, citations, and temporary parking restrictions.",

  services: [
    "Student parking guidance",
    "Residence-hall parking information",
    "Acadome parking guidance",
    "ASU Stadium parking guidance",
    "Parking permit information",
    "Reserved-space warnings",
    "Faculty/staff parking warnings",
    "Game-day parking information",
    "Boot and citation guidance",
    "Temporary parking-change information"
  ],

  studentTip:
    "⚠️ READ THE SIGN BEFORE YOU LEAVE YOUR CAR. A parking lot being available to students does NOT mean every individual space in that lot is student parking. Faculty/staff spaces, reserved spaces, fire lanes, hydrants, accessibility spaces, loading areas, and temporary restrictions may still be enforced. Posted ASU signs and current university announcements always take priority over Hornet Navigator.",

  sections: [

    // =================================================
    // STUDENT PARKING PERMIT
    // =================================================

    {
      name: "🚗 Student Parking Permit",

      keywords: [
        "parking permit",
        "parking decal",
        "student permit",
        "student decal",
        "register car",
        "vehicle registration",
        "parking registration",
        "freshman parking",
        "freshman car"
      ],

      description:
        "Students bringing vehicles to campus must follow ASU's current vehicle-registration and parking-permit requirements.",

      studentTip:
        "Make sure your vehicle is properly registered and your parking decal or permit is current before regularly parking on campus. Parking rules and permit procedures can change, so follow the current instructions from ASU Parking/Public Safety."
    },


    // =================================================
    // READ THE SIGNS
    // =================================================

    {
      name: "⚠️ READ THE PARKING SIGNS",

      keywords: [
        "read signs",
        "read the signs",
        "parking sign",
        "parking signs",
        "reserved",
        "reserved parking",
        "faculty parking",
        "staff parking",
        "faculty staff",
        "can i park here"
      ],

      description:
        "Individual parking spaces may have different restrictions even when they are located inside the same parking lot.",

      studentTip:
        "NEVER decide that a space is legal just because another student parked beside you. Read the sign connected to your space. Faculty/staff, reserved, accessibility, loading, and other restricted spaces may be enforced."
    },


    // =================================================
    // PEYTON FINLEY PARKING
    // =================================================

    {
      name: "Peyton Finley Parking",

      keywords: [
        "peyton finley parking",
        "peyton parking",
        "finley parking",
        "parking by peyton finley",
        "peyton finley lot"
      ],

      description:
        "Student parking is available in the Peyton Finley residential area.",

      studentTip:
        "Even when parking near your residence hall, check the signs before leaving your vehicle. Residential parking does not automatically make every individual space student parking."
    },


    // =================================================
    // JO ANN ROBINSON PARKING
    // =================================================

    {
      name: "Jo Ann Robinson Hall Parking",

      keywords: [
        "jo ann parking",
        "joann parking",
        "jo ann robinson parking",
        "parking behind jo ann",
        "parking behind joann",
        "bibb graves parking"
      ],

      description:
        "Students commonly use parking behind Jo Ann Robinson Hall and designated parking areas around the sides of the building.",

      studentTip:
        "BE EXTRA CAREFUL HERE. Some spaces may be reserved for faculty/staff during the morning and afternoon. The signs will tell you when the restriction applies, so read them before leaving your vehicle.",

      extraTip:
        "Do not park directly in front of the building or in a space that is not clearly available to students. Parking in the wrong area may result in a boot or citation."
    },


    // =================================================
    // BESSIE ESTELL PARKING
    // =================================================

    {
      name: "Bessie Estell Parking Lot",

      keywords: [
        "bessie parking",
        "bessie estell parking",
        "estell parking",
        "bessie estell parking lot",
        "parking by bessie estell"
      ],

      description:
        "A student parking area is available near Bessie E. Estell Hall.",

      studentTip:
        "Check individual signs before choosing a space. Reserved or restricted spaces can exist inside a larger parking lot that students normally use."
    },


    // =================================================
    // MLK PARKING
    // =================================================

    {
      name: "MLK Hall Parking",

      keywords: [
        "mlk parking",
        "mlk hall parking",
        "martin luther king parking",
        "parking near mlk",
        "parking by mlk"
      ],

      description:
        "Student parking is available in the residential area near Dr. Martin Luther King Jr. Hall.",

      studentTip:
        "MLK is close to the Acadome parking area, but nearby faculty/staff or reserved spaces are still restricted. Read the signs rather than assuming the closest available space belongs to students."
    },


    // =================================================
    // ACADOME FRONT PARKING
    // =================================================

    {
      name: "Dunn-Oliver Acadome Front Parking",

      keywords: [
        "acadome parking",
        "acadome parking lot",
        "front acadome parking",
        "dunn oliver parking",
        "large parking lot",
        "visitor parking",
        "parking near mlk",
        "parking near student center"
      ],

      description:
        "The large parking area in front of the Dunn-Oliver Acadome provides substantial parking space near the center of campus.",

      studentTip:
        "There is a lot of parking in the front Acadome area, but some spaces near the front may be reserved for faculty/staff during certain hours. READ THE SIGNS before parking.",

      extraTip:
        "Some spaces may become available to everyone later in the day. If the space becomes restricted again the following morning, move your vehicle before the restricted period begins."
    },


    // =================================================
    // BEHIND THE ACADOME
    // =================================================

    {
      name: "🚫 Do Not Use the Area Behind the Acadome as General Student Parking",

      keywords: [
        "behind acadome",
        "back acadome",
        "back of acadome",
        "acadome back parking",
        "asu bus",
        "bus parking",
        "official parking",
        "faculty parking acadome"
      ],

      description:
        "The area behind the Dunn-Oliver Acadome is used for university operations and should not be treated as ordinary student parking.",

      studentTip:
        "DO NOT park behind the Acadome just because you see an open space. ASU buses, university officials, faculty/staff, service vehicles, and other university traffic use this area. Keep the roadway and operational spaces open."
    },


    // =================================================
    // FACILITY I PARKING
    // =================================================

    {
      name: "Facility I Parking Area",

      keywords: [
        "facility 1 parking",
        "facility i parking",
        "new facility 1 parking",
        "large parking lot facility 1",
        "parking near benson"
      ],

      description:
        "A large parking area serves Facility I and nearby residential buildings.",

      studentTip:
        "Students use this area, including students from nearby residence halls, but read the signs because individual spaces may still be restricted."
    },


    // =================================================
    // BESSIE BENSON PARKING
    // =================================================

    {
      name: "Bessie Benson Hall Parking",

      keywords: [
        "benson parking",
        "bessie benson parking",
        "parking in front of benson",
        "parking near benson",
        "fire hydrant"
      ],

      description:
        "Students commonly use designated parking in front of and near Bessie Benson Hall.",

      studentTip:
        "🚒 DO NOT PARK IN FRONT OF THE FIRE HYDRANT. Even if the area looks open or convenient, blocking a hydrant or emergency-access area can result in parking enforcement, including a boot."
    },


    // =================================================
    // ABERCROMBIE PARKING
    // =================================================

    {
      name: "Abercrombie Hall Parking",

      keywords: [
        "abercrombie parking",
        "abercrombie hall parking",
        "parking by abercrombie",
        "right side abercrombie",
        "left side abercrombie"
      ],

      description:
        "Students commonly park along the right-side area near Abercrombie Hall.",

      studentTip:
        "The right-side parking area fills up quickly. DO NOT park on the left/main-entrance side as overflow parking because that side needs to remain open for vehicles entering and moving through campus.",

      extraTip:
        "If the right side is full, find another legal parking area. Do not create your own parking space."
    },


    // =================================================
    // FACILITY II PARKING
    // =================================================

    {
      name: "Facility II Parking Lot",

      keywords: [
        "facility 2 parking",
        "facility ii parking",
        "new facility 2 parking",
        "parking near facility 2"
      ],

      description:
        "A student parking area is available near Facility II.",

      studentTip:
        "Follow posted signs and keep reserved spaces, accessibility spaces, fire lanes, and other restricted areas clear."
    },


    // =================================================
    // CARD HALL PARKING
    // =================================================

    {
      name: "Card Hall Parking",

      keywords: [
        "card parking",
        "card hall parking",
        "george card parking",
        "parking near card",
        "parking by card hall"
      ],

      description:
        "Student parking is available in the Card Hall residential area.",

      studentTip:
        "Card houses many first-year students, so learn where you are actually allowed to park instead of assuming the closest open space is student parking."
    },


    // =================================================
    // ASU STADIUM PARKING
    // =================================================

    {
      name: "ASU Stadium / Facility II Area Parking",

      keywords: [
        "stadium parking",
        "asu stadium parking",
        "football stadium parking",
        "parking by stadium",
        "parking near stadium",
        "facility 2 stadium parking",
        "stadium lot",
        "asu stadium parking lot"
      ],

      description:
        "A large parking area is located near ASU Stadium and the Facility II side of campus.",

      studentTip:
        "This parking area can change during football games, Homecoming, major events, move-in, and other university operations. Pay attention to university announcements before leaving your vehicle there for an extended period."
    },


    // =================================================
    // GAME DAY PARKING
    // =================================================

    {
      name: "🏈 Game-Day Parking & Vehicle Relocation",

      keywords: [
        "game day parking",
        "football parking",
        "football game parking",
        "homecoming parking",
        "move car",
        "move my car",
        "move vehicle",
        "relocate car",
        "parking announcement",
        "stadium event"
      ],

      description:
        "ASU may change parking availability around the stadium and nearby residence halls for football games and other major university events.",

      studentTip:
        "CHECK YOUR ASU ANNOUNCEMENTS. If the university tells students to move their cars before a game or event, follow the instructions and move your vehicle to the designated parking area before the stated deadline.",

      extraTip:
        "Your normal weekday parking space may not remain available during football weekends, Homecoming, or special events."
    },


    // =================================================
    // TEMPORARY EVENT PARKING MAP
    // =================================================

    {
      name: "🗺️ Temporary Parking & Event Map",

      keywords: [
        "parking map",
        "event parking map",
        "temporary parking map",
        "temporary parking",
        "closed parking",
        "closed parking lots",
        "lot a1",
        "lot b",
        "lot d1",
        "lot e1",
        "lot l",
        "august 14 2026",
        "shuttle parking"
      ],

      description:
        "ASU may release temporary parking maps when campus entrances, parking lots, or shuttle locations change for a specific event or date.",

      features: [
        "Temporary lot closures may occur",
        "Campus entry routes may change",
        "Shuttle parking may be assigned",
        "Always check the date on the map",
        "Temporary maps do not replace normal parking rules"
      ],

      studentTip:
        "IMPORTANT: The parking map shown here is specifically for August 14, 2026. It is an example of how parking can temporarily change. Do NOT assume the lots marked closed on this image are permanently closed.",

      image:
        "images/asu-parking-event-map-2026-08-14.jpeg"
    },


    // =================================================
    // RESERVED PARKING
    // =================================================

    {
      name: "Reserved & Faculty/Staff Spaces",

      keywords: [
        "reserved",
        "reserved parking",
        "reserved space",
        "faculty parking",
        "staff parking",
        "faculty staff",
        "faculty staff only"
      ],

      description:
        "Some spaces are specifically reserved for faculty, staff, university officials, accessibility needs, or other authorized users.",

      studentTip:
        "An empty reserved space is still reserved. Do not park there unless the sign says your permit or the current time allows you to use that space."
    },


    // =================================================
    // FIRE HYDRANTS & FIRE LANES
    // =================================================

    {
      name: "🚒 Fire Hydrants & Fire Lanes",

      keywords: [
        "fire hydrant",
        "hydrant",
        "fire lane",
        "emergency lane",
        "no parking",
        "emergency access"
      ],

      description:
        "Fire hydrants, fire lanes, emergency-access areas, and other safety zones must remain clear.",

      studentTip:
        "Never block a fire hydrant or fire lane—even if you only plan to leave your vehicle there for a few minutes."
    },


    // =================================================
    // BOOTED CAR
    // =================================================

    {
      name: "🚨 My Car Got Booted",

      keywords: [
        "boot",
        "booted",
        "car booted",
        "my car got booted",
        "parking boot",
        "remove boot",
        "boot removal",
        "parking fine",
        "parking ticket",
        "parking citation"
      ],

      description:
        "Parking violations may result in citations, boots, towing, or other university parking enforcement.",

      studentTip:
        "DO NOT attempt to remove a university parking boot yourself. Contact ASU Public Safety/Parking for instructions on resolving the violation and having the boot officially removed.",

      contact:
        "Campus Police: (334) 229-4400"
    },


    // =================================================
    // PARKING QUESTIONS
    // =================================================

    {
      name: "Parking Questions & Assistance",

      keywords: [
        "parking help",
        "parking office",
        "parking question",
        "public safety parking",
        "parking department",
        "parking rules"
      ],

      description:
        "Students who are unsure about vehicle registration, permits, citations, parking restrictions, or a specific parking space should contact ASU Public Safety/Parking.",

      studentTip:
        "If you are standing beside your car wondering whether a space is legal, ask before leaving the vehicle. That is much easier than dealing with a boot or citation later."
    },


    // =================================================
    // FINAL PARKING RULE
    // =================================================

    {
      name: "Hornet Navigator Parking Rule",

      keywords: [
        "parking rule",
        "parking warning",
        "parking disclaimer",
        "parking changes"
      ],

      description:
        "Hornet Navigator provides student-friendly parking guidance, but university parking conditions can change quickly.",

      studentTip:
        "POSTED ASU SIGNS AND CURRENT UNIVERSITY ANNOUNCEMENTS ALWAYS WIN. If Hornet Navigator says students normally use a parking area but ASU posts a temporary closure, reserved sign, event restriction, or relocation notice, follow ASU's current instruction."
    }

  ],

  funFact:
    "A parking lot can contain student spaces, faculty/staff spaces, reserved spaces, and temporarily restricted spaces all at the same time. Reading the sign before leaving your car is one of the easiest ways to avoid getting booted.",

  image:
    "images/asu-parking-event-map-2026-08-14.jpeg",

  imageCaption:
    "ASU Campus Entry & Parking map for August 14, 2026. This image demonstrates temporary parking changes and should not be treated as the permanent everyday parking map.",

  mapLink: ""
}

];

// =====================================================
// HORNET NAVIGATOR CAMPUS MAP POSITIONS
// =====================================================
//
// IMPORTANT:
//
// These x/y values are schematic Hornet Navigator
// map positions expressed as percentages.
//
// They are meant to organize the visual campus map.
// They are NOT GPS coordinates or surveyed positions.
//
// Google Maps and Apple Maps remain the source for
// actual turn-by-turn navigation.
//
// =====================================================

const campusMapPositions = {

  // ===================================================
  // CENTRAL / STUDENT SERVICES
  // ===================================================

  1: {
    x: 47,
    y: 31
  }, // Levi Watkins Learning Center

  2: {
    x: 59,
    y: 46
  }, // J. Garrick Hardy Student Center

  4: {
    x: 64,
    y: 38
  }, // Fred Shuttlesworth Dining Hall


  // ===================================================
  // SHOP FOR SUCCESS / CENTRAL ACADEMICS
  // ===================================================

  5: {
    x: 31,
    y: 24
  }, // W.B. Patterson Hall

  7: {
    x: 40,
    y: 22
  }, // Edward Glenn McGhee Hall

  8: {
    x: 30,
    y: 35
  }, // William Hooper Councill Hall

  9: {
    x: 41,
    y: 35
  }, // H.C. Trenholm Hall

  11: {
    x: 36,
    y: 29
  }, // The Equinox


  // ===================================================
  // BUSINESS / FINE ARTS / ACADEMIC WEST
  // ===================================================

  10: {
    x: 23,
    y: 45
  }, // COBA

  12: {
    x: 18,
    y: 31
  }, // Tullibody Fine Arts Center

  13: {
    x: 20,
    y: 55
  }, // John William Beverly Hall

  14: {
    x: 28,
    y: 53
  }, // George W. Trenholm Hall

  29: {
    x: 14,
    y: 42
  }, // Tullibody Music Hall

  32: {
    x: 33,
    y: 47
  }, // Thomas Erby Kilby Hall


  // ===================================================
  // SCIENCE / HEALTH
  // ===================================================

  16: {
    x: 48,
    y: 19
  }, // Robert Clinton Hatch Hall

  17: {
    x: 54,
    y: 18
  }, // John L. Buskey Health Sciences

  19: {
    x: 57,
    y: 27
  }, // Life Science Building

  20: {
    x: 46,
    y: 43
  }, // Ralph David Abernathy Hall

  21: {
    x: 50,
    y: 47
  }, // Abernathy Annex


  // ===================================================
  // LANDMARKS / ADMINISTRATION
  // ===================================================

  18: {
    x: 12,
    y: 68
  }, // Montgomery Interpretive Center

  33: {
    x: 25,
    y: 65
  }, // ASU Alumni House

  36: {
    x: 19,
    y: 72
  }, // President's Home


  // ===================================================
  // CAMPUS SERVICES
  // ===================================================

  22: {
    x: 34,
    y: 62
  }, // Air Force ROTC

  34: {
    x: 38,
    y: 74
  }, // Physical Plant

  35: {
    x: 48,
    y: 73
  }, // Public Safety

  37: {
    x: 43,
    y: 80
  }, // Inventory Control & Receiving


  // ===================================================
  // ACADOME / ATHLETICS
  // ===================================================

  15: {
    x: 69,
    y: 28
  }, // Dunn-Oliver Acadome

  23: {
    x: 87,
    y: 43
  }, // ASU Stadium

  24: {
    x: 86,
    y: 51
  }, // Sting Shop / Stadium Ticket Office

  25: {
    x: 88,
    y: 74
  }, // Softball Complex

  26: {
    x: 78,
    y: 76
  }, // Baseball Complex

  27: {
    x: 84,
    y: 63
  }, // Soccer Complex

  28: {
    x: 15,
    y: 58
  }, // Lockhart Gymnasium

  30: {
    x: 9,
    y: 52
  }, // Old Hornet Stadium

  38: {
    x: 76,
    y: 59
  }, // Underwood Tennis Center


  // ===================================================
  // RESIDENCE HALLS
  // ===================================================

  39: {
    x: 54,
    y: 56
  }, // Jo Ann Robinson Hall

  40: {
    x: 50,
    y: 60
  }, // Wilease S. Simpson Hall

  41: {
    x: 22,
    y: 20
  }, // John W. Abercrombie Hall

  42: {
    x: 67,
    y: 18
  }, // Dr. Martin Luther King Jr. Hall

  43: {
    x: 75,
    y: 18
  }, // Bessie E. Estell Hall

  44: {
    x: 62,
    y: 57
  }, // Bessie Wilson Benson Hall

  45: {
    x: 72,
    y: 64
  }, // New Facility I

  46: {
    x: 78,
    y: 65
  }, // New Facility II

  47: {
    x: 57,
    y: 68
  }, // Willetta McGinty Apartments

  48: {
    x: 65,
    y: 70
  }, // Peyton Finley Apartments

  49: {
    x: 69,
    y: 52
  }, // George N. Card Hall

  50: {
    x: 73,
    y: 39
  }, // C.J. Dunn Tower


  // ===================================================
  // PARKING
  // ===================================================

  51: {
    x: 80,
    y: 32
  } // ASU Student Parking Guide

};