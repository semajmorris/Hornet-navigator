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
      "meals"
    ],

    description:
      "A primary campus dining location for Alabama State University students.",

    services: [
      "Student dining",
      "Meal service",
      "Campus food"
    ],

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
  }

];

