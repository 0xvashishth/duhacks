import team from "./Assets/team.gif";
import pass from "./Assets/sponsorsLogos/1pass.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import ll from "./Assets/sponsorsLogos/ll.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import Replit from "./Assets/sponsorsLogos/replit.png";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import lyin from "./Assets/teami/lyin.jpg";

import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import zoha from "./Assets/teami/zoha.png";







const TOP_SECTION = {
  TITLE: "DUHacks",
  Typed_effect: ["36 hours of creation", "Win awesome prizes", "Events And Sessions"],
  SHORT_DESCRIPTION:
    "Join us on 16-17th July 2022 with over 400 students for 36 hours of creation, innovation, & fun.",
  IMG_SRC: team,
  DISCORD_LINK: "https://discord.gg/NY7K3ph4",
  JUDGES_FORM_LINK:
    "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK:
    "#Hackers Registration devfolio link"
};

const SOCIALS = {
  discord: "https://discord.gg/NY7K3ph4",
  linkedin: "#instagramlink",
  twitter: "#linkedinlink",
  email: "mailto:contact@duhacks.tech",
  mail: "contact@duhacks.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is DUHacks?",
  LONG_DESCRIPTION:
    "It is an offline/hybrid hackathon in which all participants can sharpen their skills and connect with people to grow together. The Hackathon is designed to spark innovation, attract and educate new talent and create new channels for collaboration between performance and capacity professionals. We want to spread the idea that programming and is a useful skill that can be enjoyed by anyone. We are planning to host approximately 150 students offline in the college with proper arrangement and 100+ students online .",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "#Volunteer form link"
  },
  JOIN_TEAM: {
    required: true,
    src: "#Join team link"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};


/** SCHEDULE
 *  
 * INSTRUCTIONS
 * 
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 7,
  year: 2022
}


 const schedule = [
  {
      "day": "16-7-2022",
      "events": [
          {
              "title": "Opening Ceremoney",
              "timings": "8 AM - 9 AM",
               "link" : "https://google.com"
          }
      ]
  },
  {
      "day": "16-7-2022",
      "events": [
          {
              "title": "Event",
              "timings": "11 AM - 12 PM",
              "link" : "https://google.com"
          }
      ]
  },
  {
      "day": "16-7-2022",
      "events": [
          {
              "title": "Event",
              "timings": "12 AM - 1 Pm",
              "link" : "https://google.com"
          }
      ]
  },
  {
      "day": "17-7-2022",
      "events": [
          {
              "title": "Event",
              "timings": "12 AM - 1 Pm",
              "link" : "https://google.com"
          }
      ]
  },
  {
    "day": "17-7-2022",
    "events": [
        {
            "title": "Closing Ceremoney",
            "timings": "6 PM - 7 PM",
             "link" : "https://google.com"
        }
    ]
},
]



/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Women Team",
      content: "Your project will qualify for this category if your all team members are women."
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best DDU Team",
      content: "Your project will qualify for this category if your all team members are from DDU."
    },
        {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ],
  [
    //Array 3
  ]
];

const TeamInfo = [
  [
    // Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "https://github.com/vasu-1/duhacks",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Erika",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    // Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    }
  ] 
];

const JudgesInfo = [
  [
    // Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    // Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    }
  ] 
];


// /** Instructions
//  * Only put 3 logos per array inside `sponsorLogos`, you can
//  * create as many arrays you want all logos will be rendered
//  * in a group of 3.
//  */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a 36 hour event where "hackers" will collaborate on creating a functioning software and hardware by the end of the event.'      },
      {
        label: "Who can attend?",
        content: "DUHacks is open to all undergraduate, high school students and middle school students from all schools. Unfortunately only DDU students can attend this evet offline. For rest of others event would be online."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to register yourself on devfolio and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (duhacks.1@gmail.com) we would happy to help you."
      }
      ,
      {
        label: "Can I volunteer?",
        content: "Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes! Participants and winners will recieve swags, certificates, promo codes, and much more!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
