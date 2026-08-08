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
      "books",
      "research",
      "computer lab",
      "printing"
    ],

    description:
      "Alabama State University's main library and learning center, offering study spaces, research resources, computer access, and academic support.",

    services: [
      "Study spaces",
      "Research assistance",
      "Computer access",
      "Scanning",
      "Printing"
    ],

    studentTip:
      "Need to print? Free printing is available in residential halls and in the Reading, Writing & Math Lab located in W.B. Patterson Hall.",

    printing: {
      available: true,
      free: false,
      note:
        "Printing at the library requires payment."
    },

    address:
      "915 S. Jackson Street, Montgomery, AL 36104",

    image: "",
    mapLink: ""
  },


  // =====================================================
  // J. GARRICK HARDY STUDENT CENTER
  // =====================================================

  {
    id: 2,

    name: "J. Garrick Hardy Student Center",
    shortName: "Hardy Student Center",
    category: "services",

    keywords: [
      "hardy student center",
      "student center",
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
      "The J. Garrick Hardy Student Center is a major hub for student services, dining, recreation, student organizations, financial services, and campus life.",

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
      "Hardy Student Center is one of the most useful buildings to learn early. Many student services, food options, campus activities, and financial offices are located here.",

    floors: [

      // =================================================
      // FIRST FLOOR
      // =================================================

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
              "order food",
              "order chick fil a",
              "order chick-fil-a",
              "order prime grill"
            ],

            description:
              "The first floor of the Hardy Student Center includes Chick-fil-A, Subway, and Prime Grill.",

            locations: [
              "Chick-fil-A",
              "Subway",
              "Prime Grill"
            ],

            features: [
              "Grubhub ordering is available for Chick-fil-A",
              "Grubhub ordering is available for Prime Grill",
              "Sign in to Grubhub using your ASU student email",
              "Eligible Flex Dollars from your student account can be used through Grubhub",
              "Grubhub tablets are available near the three first-floor eateries",
              "Subway is not part of Grubhub",
              "Students can use their student ID in person at Subway"
            ],

            studentTip:
              "Using Flex Dollars at Chick-fil-A or Prime Grill? Download the Grubhub app and sign in with your ASU student email. This allows you to use eligible Flex Dollars from your student account when ordering. Grubhub tablets are also available on the first floor near the three eateries, but using your phone is usually more convenient. Subway is not part of Grubhub, so students can use their student ID in person at Subway."
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


      // =================================================
      // SECOND FLOOR
      // =================================================

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
      "W.B. Patterson Hall is an academic building with classrooms, freshman advising, academic support resources, and the Reading, Writing & Math Lab.",

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
  }

];