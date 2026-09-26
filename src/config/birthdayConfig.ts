export const birthdayConfig = {
  herName: "Jess",
  myName: "Manikandan",
  birthday: "September 26",

  intro: {
    title: "A special letter has arrived...",
    subtitle: "A magical invitation awaits you.",
  },

  letter: {
    greeting: "Dear Jess,",
    message: "You are hereby invited to a very special celebration... A celebration created especially for you. Your birthday. The magic begins now.",
    closing: "With all my love, Manikandan",
  },

  memories: [
    {
      id: 1,
      title: "The Beginning",
      date: "2023-01-01",
      image: "/assets/images/memory-01.webp",
      description: "The day everything began. Some moments look ordinary when they happen... until you realize later how important they were.",
      quote: "You are the magic in my life.",
      location: "library"
    },
    {
      id: 2,
      title: "A Special Walk",
      date: "2023-06-15",
      image: "/assets/images/memory-02.webp",
      description: "That quiet evening where we talked for hours.",
      quote: "Every second with you is a treasure.",
      location: "astronomyTower"
    }
  ],

  locations: {
    courtyard: { enabled: true },
    greatHall: { enabled: true },
    library: { enabled: true },
    astronomyTower: { enabled: true },
    owlery: { enabled: true },
    potionsRoom: { enabled: true },
    secretChamber: { enabled: true },
  },

  secrets: {
    requiredMemories: 2,
  },

  finalMessage: "If I could give you one magical gift, I would give you the ability to see yourself through my eyes. Then you would know how incredibly special you are to me. Happy Birthday, Jess! ❤️",

  music: {
    enabled: true,
    source: "/assets/music/ambient.mp3"
  }
};
