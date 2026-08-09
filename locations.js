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
      "violence against women",
      "violence against women program",
      "judicial affairs",
      "report problem",
      "mail",
      "mail locker",
      "mail lockers",
      "package",
      "packages",
      "mail room",
      "ship package",
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
      "gaming pcs",
      "pool",
      "8 ball",
      "ping pong",
      "chess",
      "spades",
      "connect 4",
      "bathroom",
      "bathrooms",
      "bookstore",
      "books",
      "textbooks",
      "asu gear",
      "d9",
      "d9 attire",
      "diploma frame",
      "diploma holder",
      "atm",
      "atms",
      "coin machine",
      "coins",
      "laundry coins",
      "speed queen",
      "financial aid",
      "student accounts",
      "cashier",
      "cashiers desk",
      "admissions",
      "student id",
      "id center",
      "hornets web",
      "hornetsweb",
      "login help",
      "ballroom",
      "ballrooms",
      "sga",
      "sga complex",
      "student government",
      "start club",
      "start organization",
      "organization",
      "club",
      "hornet tribune",
      "yearbook",
      "yearbook photos",
      "student life suite"
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
              "dorms",
              "residential halls"
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
              "undecided major",
              "change major",
              "resume",
              "resume review",
              "internship",
              "internships",
              "job",
              "jobs",
              "graduating",
              "scholarship",
              "scholarships"
            ],

            description:
              "Career Services supports students with career planning, major exploration, resumes, internships, employment opportunities, and professional development.",

            features: [
              "Helps undecided students explore possible majors",
              "Can assist students considering changing their major",
              "Uses assessments to help students learn more about their interests and possible career paths",
              "Shares scholarship opportunities",
              "Helps graduating students search for jobs",
              "Provides internship guidance and internship opportunities",
              "Reviews resumes and recommends improvements",
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
                  "Students can seek assistance through Judicial Affairs when they need help with certain student conduct matters or need to make a report."
              }
            ]
          },

          {
            name: "Mail Lockers",

            keywords: [
              "mail",
              "mail locker",
              "mail lockers",
              "package",
              "packages",
              "qr code",
              "pin code"
            ],

            description:
              "Students can retrieve eligible packages from automated mail lockers.",

            steps: [
              "You will receive an email when your package is ready",
              "The email provides your assigned locker or box number",
              "You receive a PIN code",
              "You also receive a QR code that can be scanned to open the locker",
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
              "mail package",
              "send package",
              "ship package",
              "missing package",
              "wrong dorm",
              "package problem"
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
              "Outgoing mail requires a fee, and the price can vary depending on the size of the item. Mail Room operating hours can vary, so check current hours before going."
          },

          {
            name: "Information Desk",

            keywords: [
              "information desk",
              "help",
              "directions",
              "where is",
              "find building",
              "find location"
            ],

            description:
              "Students and visitors can ask the Information Desk for help finding campus locations or answering general questions."
          },

          {
            name: "Dining",

            keywords: [
              "food",
              "eat",
              "dining",
              "chick fil a",
              "chick-fil-a",
              "subway",
              "prime grill",
              "grubhub",
              "flex",
              "flex dollars",
              "student id food",
              "student id",
              "order food"
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
              "Sign in to Grubhub using your ASU student email",
              "Eligible Flex Dollars can be used through Grubhub",
              "Grubhub tablets are available near the first-floor eateries",
              "Subway is not part of Grubhub",
              "Students can use their student ID in person at Subway"
            ],

            studentTip:
              "Using Flex Dollars at Chick-fil-A or Prime Grill? Download the Grubhub app and sign in with your ASU student email. Tablets with Grubhub are also available near the eateries, but using your phone is usually more convenient. Subway is not part of Grubhub, so students can use their student ID in person there."
          },

          {
            name: "Gaming & Recreation",

            keywords: [
              "gaming",
              "gaming room",
              "ps5",
              "playstation",
              "xbox",
              "pc",
              "gaming pc",
              "gaming pcs",
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
            ],

            studentTip:
              "The gaming PC section is separated from the main recreation area and is accessed through another door."
          },

          {
            name: "ASU Bookstore",

            keywords: [
              "bookstore",
              "books",
              "textbooks",
              "pick up books",
              "asu gear",
              "asu clothing",
              "d9",
              "d9 attire",
              "divine nine",
              "diploma",
              "diploma frame",
              "diploma holder"
            ],

            description:
              "The ASU Bookstore is located on the first floor and provides course materials and university merchandise.",

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
              "atms",
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
              "Keeping coins available can be useful for residence-hall laundry as a backup if the Speed Queen system or internet connection is unavailable."
          },

          {
            name: "Restrooms",

            keywords: [
              "bathroom",
              "bathrooms",
              "restroom",
              "restrooms"
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
              "scholarship",
              "financial help",
              "student funding"
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
              "payment",
              "pay bill"
            ],

            description:
              "Student Accounts assists students with billing, account balances, payments, and related financial questions."
          },

          {
            name: "Cashier's Desk",

            keywords: [
              "cashier",
              "cashiers desk",
              "cashier's desk",
              "payment",
              "pay",
              "money"
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
              "enrollment",
              "prospective student"
            ],

            description:
              "Admissions assists prospective and incoming students with the university admissions process."
          },

          {
            name: "Student ID Center",

            keywords: [
              "student id",
              "id",
              "id card",
              "replacement id",
              "hornets web",
              "hornetsweb",
              "login",
              "login help",
              "can't login"
            ],

            description:
              "Students can receive assistance with student ID services on the second floor.",

            studentTip:
              "If you're having trouble accessing Hornets Web, the Student ID area may also be able to help you resolve your access issue."
          },

          {
            name: "Ballrooms",

            keywords: [
              "ballroom",
              "ballrooms",
              "event",
              "events"
            ],

            description:
              "Three ballrooms are located on the second floor and are used for campus events and activities."
          },

          {
            name: "SGA Complex & Student Life",

            keywords: [
              "sga",
              "sga complex",
              "student government",
              "sga president",
              "sga secretary",
              "sga treasurer",
              "start club",
              "start a club",
              "create club",
              "organization",
              "start organization",
              "student organization",
              "student life",
              "hornet tribune",
              "yearbook",
              "yearbook picture",
              "yearbook photo"
            ],

            description:
              "The SGA Complex and Student Life area supports student government, campus organizations, student media, and student involvement.",

            features: [
              "Student Government Association leadership offices",
              "SGA President's office",
              "SGA Secretary's office",
              "SGA Treasurer's office",
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
      "account balance",
      "bursar"
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

    studentTip:
      "If you have questions about your bill or account balance, Student Accounts is located inside the Hardy Student Center.",

    address:
      "915 S. Jackson Street, Montgomery, AL 36104",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // FRED SHUTTLESWORTH DINING HALL
  // =====================================================

  {
    id: 4,

    name: "Fred Shuttlesworth Dining Hall",
    shortName: "Dining Hall",
    category: "dining",

    keywords: [
      "food",
      "dining",
      "cafeteria",
      "eat",
      "meals",
      "fred shuttlesworth"
    ],

    description:
      "A primary campus dining location for Alabama State University students.",

    services: [
      "Student dining",
      "Meal service",
      "Campus food"
    ],

    studentTip:
      "A good location to know for everyday meals and campus dining.",

    address:
      "Alabama State University Campus, Montgomery, AL",

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
      "classrooms",
      "freshman",
      "freshman advisor",
      "freshman advisors",
      "freshman advising",
      "advisor",
      "advising",
      "reading writing math lab",
      "reading lab",
      "writing lab",
      "math lab",
      "tutoring",
      "academic support",
      "free printing",
      "printing",
      "what a burger",
      "free food",
      "free snacks",
      "free clothes",
      "business clothes",
      "professional clothes",
      "professional clothing",
      "hygiene products",
      "student resources"
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
      name: "Shop for Success",

      description:
        "W.B. Patterson Hall is part of the Shop for Success academic area."
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
          "What A Burger is an ASU student resource room, not the Whataburger restaurant. It provides free resources to college students.",

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
      "free printing",
      "printing"
    ],

    description:
      "Campus residence halls provide housing and residential resources for Alabama State University students.",

    services: [
      "Student housing",
      "Residential resources",
      "Free printing"
    ],

    studentTip:
      "Students can access free printing in residential halls.",

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
      "classrooms",
      "freshman",
      "freshmen",
      "first year experience",
      "first year experience class",
      "fye",
      "trio",
      "trio sss",
      "trio student support services",
      "student support services",
      "aces",
      "a.c.e.s.",
      "academic center for educational success",
      "academic support",
      "academic coaching",
      "tutoring",
      "mentoring",
      "study skills",
      "athlete study hall",
      "student athlete",
      "student athletes",
      "testing center",
      "test",
      "testing",
      "exam",
      "exams",
      "makeup exam",
      "make up exam",
      "proctoring",
      "pearson vue"
    ],

    description:
      "Edward Glenn McGhee Hall is an academic building in the Shop for Success area. The building includes classrooms and several academic support resources that are especially useful for freshmen and students seeking additional academic assistance.",

    services: [
      "Classes and classrooms",
      "First Year Experience classes",
      "A.C.E.S.",
      "TRIO Student Support Services",
      "Athlete Study Hall",
      "ASU Testing Center",
      "Academic support"
    ],

    landmarkArea: {
      name: "Shop for Success",

      description:
        "McGhee Hall is located in the campus area commonly referred to as Shop for Success, near W.B. Patterson Hall, William Hooper Councill Hall, and Harper Councill Trenholm Hall."
    },

    studentTip:
      "Freshmen should learn where McGhee Hall is early. First Year Experience classes may be held here, and the building also has several resources for students who want additional academic support.",

    floors: [
      {
        floor: 1,
        name: "First Floor",

        sections: [
          {
            name: "Classrooms & First Year Experience",

            keywords: [
              "class",
              "classes",
              "classroom",
              "classrooms",
              "freshman",
              "freshmen",
              "first year experience",
              "first year experience class",
              "fye"
            ],

            description:
              "McGhee Hall contains classrooms, and freshmen may have their required First Year Experience course in this building.",

            studentTip:
              "If you're a freshman, check your class schedule carefully because your First Year Experience class may bring you to McGhee Hall."
          },

          {
            name: "A.C.E.S.",

            room: "108",

            keywords: [
              "aces",
              "a.c.e.s.",
              "academic center for educational success",
              "academic help",
              "academic support",
              "academic coaching",
              "study skills",
              "tutoring",
              "mentoring",
              "major help",
              "career guidance"
            ],

            description:
              "A.C.E.S. stands for Academic Center for Educational Success and provides academic support designed to help students succeed and remain on track toward graduation.",

            features: [
              "Academic coaching and advising",
              "Study and learning-skills support",
              "Academic progress support",
              "Mentoring and support",
              "Tutoring referrals",
              "Personal development support",
              "Major and career guidance"
            ],

            studentTip:
              "You do not have to wait until you're failing a class to ask for help. A.C.E.S. can be useful if you want stronger study habits, academic guidance, mentoring, or help getting back on track."
          },

          {
            name: "TRIO Student Support Services",

            keywords: [
              "trio",
              "trio sss",
              "student support services",
              "first generation",
              "first generation student",
              "academic need",
              "tutoring",
              "mentoring",
              "graduate school",
              "career exploration"
            ],

            description:
              "TRIO Student Support Services is a federally funded program that provides eligible students with additional academic and personal support designed to help them remain in college and graduate.",

            features: [
              "Tutoring",
              "Mentoring",
              "Academic and personal support",
              "Workshops",
              "Career exploration",
              "Leadership development",
              "Student advocacy",
              "Graduate-school preparation and exposure"
            ],

            studentTip:
              "TRIO has eligibility requirements, so students interested in the program should ask TRIO staff about applying and whether they qualify."
          },

          {
            name: "Athlete Study Hall",

            keywords: [
              "athlete",
              "athletes",
              "student athlete",
              "student athletes",
              "athlete study hall",
              "study hall"
            ],

            description:
              "McGhee Hall includes a study hall space used by student-athletes for academic work and support."
          },

          {
            name: "ASU Testing Center",

            room: "105",

            keywords: [
              "testing center",
              "test",
              "testing",
              "exam",
              "exams",
              "makeup exam",
              "make up exam",
              "proctoring",
              "pearson vue"
            ],

            description:
              "The ASU Testing Center is located in McGhee Hall and provides testing and proctoring services for students and other eligible test takers.",

            studentTip:
              "If an instructor or university office tells you to report to the Testing Center, look for Room 105 in McGhee Hall."
          }
        ]
      }
    ],

    funFact:
      "McGhee Hall is part of the campus area students may hear referred to as Shop for Success.",

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
      "william hooper council",
      "councill hall",
      "council hall",
      "business building",
      "administration",
      "administrative building",
      "main administration",
      "shop for success",
      "president",
      "presidents office",
      "president office",
      "dr quinton ross",
      "quinton ross",
      "dr quinton t ross jr",
      "business and finance",
      "finance",
      "comptroller",
      "accounts payable",
      "human resources",
      "hr",
      "payroll",
      "work study",
      "work-study",
      "student worker",
      "student employment",
      "budget office",
      "budget",
      "it",
      "technology",
      "technology services",
      "computer help",
      "email help",
      "account help",
      "graduate school",
      "graduate studies",
      "faculty offices",
      "staff offices"
    ],

    description:
      "William Hooper Councill Hall is one of Alabama State University's main administrative buildings. Students commonly recognize it as a business and operations building because it houses important university leadership, financial, employment, technology, and administrative offices.",

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
      name: "Shop for Success",

      description:
        "Councill Hall is part of the Shop for Success academic and administrative area near W.B. Patterson Hall, McGhee Hall, and Harper Councill Trenholm Hall."
    },

    studentTip:
      "Students may hear Councill Hall referred to as the business or administrative building. If you have a university employment, payroll, administrative, technology, or graduate-school question, this is an important building to know.",

    floors: [
      {
        floor: 1,
        name: "First Floor",

        sections: [
          {
            name: "Office of the President",

            keywords: [
              "president",
              "presidents office",
              "president office",
              "quinton ross",
              "dr quinton ross",
              "dr quinton t ross jr",
              "university president"
            ],

            description:
              "The Office of the President is located in Councill Hall. Dr. Quinton T. Ross, Jr. serves as president of Alabama State University."
          },

          {
            name: "Business & Finance",

            room: "124",

            keywords: [
              "business and finance",
              "business",
              "finance",
              "financial administration",
              "administration"
            ],

            description:
              "Business & Finance supports the university's financial and administrative operations."
          },

          {
            name: "Comptroller's Office",

            room: "128",

            keywords: [
              "comptroller",
              "comptrollers office",
              "accounting",
              "finance",
              "financial operations"
            ],

            description:
              "The Comptroller's Office supports university accounting and financial operations."
          },

          {
            name: "Payroll & Work-Study Support",

            keywords: [
              "payroll",
              "work study",
              "work-study",
              "student worker",
              "student employment",
              "paycheck",
              "getting paid",
              "work study pay"
            ],

            description:
              "Students working through work-study or university employment may need to visit Councill Hall for certain payroll or employment-related matters.",

            studentTip:
              "If you're a student worker and have a question about your work-study pay or payroll paperwork, Councill Hall is an important place to check. Ask for the appropriate payroll or employment office if you are unsure where to go."
          },

          {
            name: "Technology Services",

            keywords: [
              "it",
              "technology",
              "technology services",
              "computer help",
              "technical support",
              "email help",
              "account setup",
              "login help"
            ],

            description:
              "University technology services provide support for technology, accounts, email, and other university systems.",

            studentTip:
              "If you're having a university technology or account issue, ask for Technology Services. The exact service you need may depend on the type of account or device problem."
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
              "employment",
              "employee",
              "jobs",
              "student employment",
              "work study"
            ],

            description:
              "Human Resources provides employment and personnel-related services for university employees."
          },

          {
            name: "Accounts Payable",

            room: "226",

            keywords: [
              "accounts payable",
              "payment",
              "invoice",
              "finance",
              "business office"
            ],

            description:
              "Accounts Payable handles applicable university payment and financial processing functions."
          },

          {
            name: "Graduate School Offices",

            keywords: [
              "graduate school",
              "graduate studies",
              "graduate student",
              "masters",
              "master's",
              "doctoral",
              "graduate admissions"
            ],

            description:
              "Graduate School offices are located on the second floor of Councill Hall.",

            features: [
              "Graduate School offices can be found in Rooms 201, 203, 205, and 207"
            ],

            studentTip:
              "Graduate students should learn Councill Hall early because several Graduate School offices are located on the second floor."
          }
        ]
      },

      {
        floor: 3,
        name: "Third Floor",

        sections: [
          {
            name: "Budget Office",

            keywords: [
              "budget",
              "budget office",
              "finance",
              "financial planning"
            ],

            description:
              "University Budget Office staff and administrative functions are located within Councill Hall."
          },

          {
            name: "Faculty & Staff Offices",

            keywords: [
              "faculty",
              "faculty office",
              "staff",
              "staff office",
              "professor",
              "administration"
            ],

            description:
              "Councill Hall also contains offices used by university faculty, staff, and administrators."
          }
        ]
      }
    ],

    funFact:
      "Councill Hall has played a role in Alabama State University's student activism history. ASU students occupied the president's office in the building following the Selma-to-Montgomery March in 1965, and students later held an overnight sit-in in Councill Hall in 1992.",

    nearbyLandmark: {
      name: "Thelma Rice Plaza",

      description:
        "Thelma Rice Plaza is located between Councill Hall and W.B. Patterson Hall and honors longtime ASU mathematics instructor and alumna Thelma Austin Rice, remembered by generations of students as 'Mama Rice.'"
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
      "harper council trenholm hall",
      "h.c. trenholm hall",
      "hc trenholm hall",
      "trenholm hall",
      "shop for success",
      "biology",
      "bio",
      "biology 1",
      "biology 2",
      "bio 1",
      "bio 2",
      "biology lab",
      "science lab",
      "lab class",
      "127",
      "128",
      "chemistry",
      "chemistry class",
      "chemistry lab",
      "chem lab",
      "physics",
      "physics 1",
      "physics 2",
      "physics class",
      "physics lab",
      "math",
      "mathematics",
      "math class",
      "math classes",
      "computer science",
      "computer science class",
      "computer science classes",
      "computer science advisor",
      "cs advisor",
      "cs",
      "coding",
      "programming",
      "professor",
      "professors",
      "faculty",
      "faculty office",
      "faculty offices",
      "office hours",
      "meet professor",
      "help from professor",
      "research",
      "research lab",
      "research facilities",
      "science research",
      "stem"
    ],

    description:
      "Harper Councill Trenholm Hall is a STEM-focused academic building in the Shop for Success area. Students may have biology, chemistry, physics, mathematics, computer science, laboratory, and other science-related coursework in this building.",

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
      "Research and laboratory facilities"
    ],

    landmarkArea: {
      name: "Shop for Success",

      description:
        "Harper Councill Trenholm Hall is part of the Shop for Success academic area near W.B. Patterson Hall, Edward Glenn McGhee Hall, and William Hooper Councill Hall."
    },

    studentTip:
      "This is an important building for students taking STEM courses. If your schedule lists biology, chemistry, physics, mathematics, computer science, or a science lab, check whether your class is located in H.C. Trenholm Hall.",

    sections: [
      {
        name: "Biology",

        keywords: [
          "biology",
          "bio",
          "biology 1",
          "biology 2",
          "bio 1",
          "bio 2",
          "biology lab",
          "lab"
        ],

        description:
          "Biology courses and laboratory coursework are held in Harper Councill Trenholm Hall.",

        studentTip:
          "Students taking Biology I or Biology II may have lecture or laboratory coursework associated with this building. Always check your course schedule for the exact room."
      },

      {
        name: "Science Laboratories",

        keywords: [
          "lab",
          "labs",
          "laboratory",
          "laboratories",
          "science lab",
          "science labs",
          "lab class",
          "127",
          "128"
        ],

        description:
          "Harper Councill Trenholm Hall contains science laboratory spaces used for academic coursework and research.",

        studentTip:
          "Lab coursework associated with 127 and 128 has been identified for this building. Exact room and course details will be added once they are confirmed."
      },

      {
        name: "Chemistry",

        keywords: [
          "chemistry",
          "chem",
          "chemistry class",
          "chemistry classes",
          "chemistry lab",
          "chem lab"
        ],

        description:
          "Chemistry coursework and laboratory instruction are supported within Harper Councill Trenholm Hall."
      },

      {
        name: "Physics",

        keywords: [
          "physics",
          "physics 1",
          "physics 2",
          "physics class",
          "physics classes",
          "physics lab"
        ],

        description:
          "Physics courses and related laboratory coursework are associated with Harper Councill Trenholm Hall.",

        studentTip:
          "Students taking Physics I or Physics II should check their course schedule for the exact classroom or laboratory location."
      },

      {
        name: "Mathematics",

        keywords: [
          "math",
          "mathematics",
          "math class",
          "math classes",
          "math professor"
        ],

        description:
          "Mathematics courses and faculty resources are available within Harper Councill Trenholm Hall."
      },

      {
        name: "Computer Science",

        keywords: [
          "computer science",
          "computer science class",
          "computer science classes",
          "computer science advisor",
          "cs advisor",
          "cs",
          "coding",
          "programming",
          "computer science professor"
        ],

        description:
          "Computer Science classes, advising, and faculty resources are associated with Harper Councill Trenholm Hall.",

        studentTip:
          "If you are a Computer Science student and need advising, department guidance, or help locating a professor, H.C. Trenholm Hall is an important building to know."
      },

      {
        name: "Faculty Offices & Office Hours",

        keywords: [
          "professor",
          "professors",
          "faculty",
          "faculty office",
          "faculty offices",
          "professor office",
          "professor offices",
          "office hours",
          "meet professor",
          "help from professor",
          "one on one",
          "one-on-one"
        ],

        description:
          "Faculty and professor offices are located throughout the building, giving students opportunities to meet with instructors during scheduled office hours.",

        studentTip:
          "Don't be afraid to use your professor's office hours. Office hours give you a chance to meet one-on-one with your professor about class material, assignments, grades, or additional help. Check your syllabus or ask your professor for their office location and scheduled hours."
      },

      {
        name: "Research & STEM Facilities",

        keywords: [
          "research",
          "research lab",
          "research labs",
          "research facilities",
          "stem",
          "science research",
          "science facilities"
        ],

        description:
          "The building includes academic laboratories, research facilities, classrooms, and faculty spaces supporting STEM education."
      }
    ],

    nameWarning:
      "Harper Councill Trenholm Hall is not the same building as G.W. Trenholm Hall. Students should check their class schedule carefully to make sure they are going to the correct Trenholm building.",

    funFact:
      "H.C. Trenholm Hall is part of the Shop for Success area, where several of Alabama State University's academic buildings are located close together.",

    image: "",
    mapLink: ""
  }

];