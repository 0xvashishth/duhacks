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
import zenisha from "./Assets/teami/Zenisha_Savaliya.jpeg";
import dhruvi from "./Assets/teami/Dhruvi_Sherathiya.jpg";

import me from "./Assets/teami/Vashishth_Patel.jpg";
import dharmesh from "./Assets/teami/Dharmesh_Poriya.jpg";
import Ryah from "./Assets/teami/Ryah.jpg";
import nirali from "./Assets/teami/Nirali.jpeg";
import smit from "./Assets/teami/smit.jpeg";
import ruchit from "./Assets/teami/Ruchit_Parekh.jpg";
import parshwa from "./Assets/teami/Parshwa_Mehta.jpg";
import ayush from "./Assets/teami/Ayush_Rudani.jpg";
import aneri from "./Assets/teami/Aneri_Sonani.jpg";








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
  instagram: "https://instagram.com/duhacks2022?igshid=YmMyMTA2M2Y=",
  discord: "https://discord.gg/NY7K3ph4",
  linkedin: "https://www.linkedin.com/in/du-hacks-878119240",
  twitter: "https://twitter.com/DuHacks?t=CPjNJmQX1JxhIHb_YI0Tuw&s=09",
  email: "mailto:contact@duhacks.tech",
  mail: "contact@duhacks.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is DUHacks?",
  LONG_DESCRIPTION:
    "It is an offline/hybrid hackathon in which all participants can sharpen their skills and connect with people to grow together. The Hackathon is designed to spark innovation, attract and educate new talent and create new channels for collaboration between performance and capacity professionals. We want to spread the idea that programming is a useful skill that can be enjoyed by anyone. We are planning to host approximately 150 students offline in the college with proper arrangement and 100+ students online.",
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
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "11 AM - 12 PM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Closing Ceremoney",
        "timings": "6 PM - 7 PM",
        "link": "https://google.com"
      }
    ]
  },
]

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Overall First",
      content:
        "The first overall prize will be given to a project that outstands all other submissions."
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "The second overall prize will be given to the second-best project in the hackathon."
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third",
      content:
        "The third overall prize will be given to the third-best project in the hackathon."
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
      Name: "Vashishth Patel",
      role: "Organizer",
      github: "https://github.com/vasu-1",
      linkedin: "https://www.linkedin.com/in/vashishth-patel-312a52204/",
      img: me
    },
    {
      Name: "Ayush Rudani",
      role: "Organizer",
      github: "https://github.com/R-Ayush777",
      linkedin: "https://www.linkedin.com/in/ayush-rudani-7a3516204/",
      img: ayush
    },
    {
      Name: "Smit Padaliya",
      role: "Organizer",
      github: "https://github.com/Smit-05",
      linkedin: "https://www.linkedin.com/in/smit-padaliya-aa03291b8/",
      img: smit
    }
  ],
  [
    // Array 2
    {
      Name: "Zenisha Savaliya",
      role: "Manager",
      github: "https://github.com/zenishasavaliya",
      linkedin: "https://www.linkedin.com/in/zenishasavaliya/",
      img: zenisha
    },
    {
      Name: "Parshwa Mehta",
      role: "Manager & Content Writer",
      github: "https://github.com/PARSHWA0510",
      linkedin: "https://www.linkedin.com/in/parshwa-mehta-949306205",
      img: parshwa
    },
    {
      Name: "Dharmesh Poriya",
      role: "Manager",
      github: "https://github.com/Dharmesh-Poriya07",
      linkedin: "https://www.linkedin.com/in/dharmesh-poriya/",
      img: dharmesh
    },
  ],
  [
    // Array 2
    {
      Name: "Aneri Sonani",
      role: "Manager & Web",
      github: "https://github.com/AneriSonani09",
      linkedin: "https://www.linkedin.com/in/aneri-sonani-061b44204/",
      img: aneri
    },
    {
      Name: "Nirali Darji",
      role: "Design Lead",
      github: "#",
      linkedin: "https://www.linkedin.com/in/nirali-darji-1b766a209",
      img: nirali
    },
    {
      Name: "Dhruvi Sherathiya",
      role: "Outreach Lead",
      github: "https://github.com/DhruviSherathiya",
      linkedin: "https://www.linkedin.com/in/dhruvisherathiya",
      img: dhruvi
    },
  ],
  [
    // Array 2
    {
      Name: "Ruchit Parekh",
      role: "Web Developer",
      github: "https://github.com/ruchit2106",
      linkedin: "https://www.linkedin.com/in/ruchit-parekh-37a6a3212/",
      img: ruchit
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
      role: "Manager",
      github: "",
      linkedin: "",
      img: Ryah
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
      img: Ryah
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ]
];

const sponsorLogos = [
  [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];


const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          'A hackathon is a 36 hour event where "hackers" will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: "Who can attend?",
        content: "DUHacks is open to all undergraduate, high school students and middle school students from all schools. Unfortunately only DDU students can attend this event offline. For rest of others event would be online."
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
        content: "Reach us directly at (contact@duhacks.tech) we would happy to help you."
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
