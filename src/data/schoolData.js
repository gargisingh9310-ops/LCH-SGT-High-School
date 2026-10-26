export const schoolInfo = {
  name: "LCH SGT High School",
  tagline: "40 Years of Excellence in Education",
  subTagline: "Where Learning Goes Beyond the Classroom",
  missionSlogan: "Every Child. Every Talent. Every Step Towards a Brighter Future.",
  patron: "Lions Club of Hyderabad",
  patronMotto: "Hope • Faith • Charity",
  establishedCelebration: "40 Years of Educational Impact",
  phones: [
    { display: "+91 89859 14859", raw: "+918985914859", primary: true },
    { display: "+91 89771 81875", raw: "+918977181875", primary: false }
  ],
  email: {
    address: "admissions@lchsgt.edu.in", // Configurable integration placeholder
    status: "Pending Official School Verification",
    isVerified: false
  },
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    addressLine: "Campus Address to be confirmed by school administration",
    status: "Verification Pending Official Release",
    isVerified: false,
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31604085444!2d78.26795856403612!3d17.412299801267433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  stats: [
    { value: "40+", label: "Years of Educational Excellence", verified: true },
    { value: "100%", label: "Dedication to Holistic Growth", verified: true },
    { value: "5+", label: "Core Experiential Domains", verified: true },
    { value: "1969", label: "Lions Club of Hyderabad Era", verified: true }
  ]
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Activities", path: "/activities" },
  { name: "CSR & Industry Support", path: "/csr-support" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" }
];

export const activitiesData = [
  {
    id: "mindfulness",
    title: "Mindfulness & Discipline",
    tagline: "Fostering inner calm, concentration, and emotional resilience",
    description: "Daily yoga and mindfulness exercises instill focus, self-discipline, and structured habits in children, preparing them mentally for academic and life challenges.",
    image: "/assets/photo-yoga-sukhasana-hd.jpg",
    secondaryImage: "/assets/photo-yoga-sidebends-hd.jpg",
    category: "Mind & Spirit",
    highlights: ["Pranayama & breathing techniques", "Posture & spinal alignment", "Concentration & mental clarity", "Respectful daily routines"]
  },
  {
    id: "fitness",
    title: "Physical Fitness & Sports",
    tagline: "Building strength, stamina, and an active lifestyle",
    description: "Outdoor games, volleyball, calisthenics, and drill routines encourage vigorous physical development, cardiovascular health, and a lifelong appreciation for physical wellbeing.",
    image: "/assets/photo-sports-ground-hd.jpg",
    secondaryImage: "/assets/photo-outdoor-yoga-hd.jpg",
    category: "Physical Health",
    highlights: ["Open volleyball court", "Morning drills & athletics", "Flexibility & motor skill training", "Healthy outdoor recreation"]
  },
  {
    id: "teamwork",
    title: "Teamwork & Cooperation",
    tagline: "Learning empathy, mutual respect, and collaborative effort",
    description: "Students learn to work in harmony through group assemblies, paired exercises, and shared responsibilities, building lasting camaraderie and social harmony.",
    image: "/assets/photo-students-hall-hd.jpg",
    secondaryImage: "/assets/photo-auditorium-rows-hd.jpg",
    category: "Social Harmony",
    highlights: ["Peer-to-peer assistance", "House activities & group tasks", "Discipline in communal gatherings", "Cultivating empathy & fellowship"]
  },
  {
    id: "confidence",
    title: "Confidence & Communication",
    tagline: "Empowering every student with voice, courage, and expression",
    description: "Stage presentations, assembly talks, and classroom speaking opportunities build courage, articulate communication, and poise from an early age.",
    image: "/assets/photo-stage-speech-hd.jpg",
    secondaryImage: "/assets/photo-auditorium-rows-hd.jpg",
    category: "Leadership",
    highlights: ["Stage presentations & guest lectures", "Interactive classroom Q&A", "Overcoming stage fear", "Public articulation & active listening"]
  },
  {
    id: "experiential",
    title: "Learning Through Experience",
    tagline: "Translating concepts into tangible understanding",
    description: "Education at LCH SGT High School moves beyond rote textbooks into hands-on demonstration, classroom interaction, and inquisitive discovery.",
    image: "/assets/photo-classroom-hd.jpg",
    secondaryImage: "/assets/classroom-interactive.jpg",
    category: "Academic Excellence",
    highlights: ["Science demonstration models", "Blackboard and visual charts", "Interactive problem-solving", "Curiosity-driven pedagogy"]
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Morning Sunlit Walk to Campus",
    caption: "Students entering campus with joy, ready for a day of purposeful learning",
    src: "/assets/hero-campus-panoramic.jpg",
    category: "Campus Life",
    featured: true
  },
  {
    id: 2,
    title: "Classroom Learning & Desk Rows",
    caption: "Well-ventilated classrooms with wooden benches designed for focused learning",
    src: "/assets/photo-classroom-hd.jpg",
    category: "Classrooms",
    featured: false
  },
  {
    id: 3,
    title: "Mindful Yoga & Meditation (Sukhasana)",
    caption: "Students seated in courtyard practicing breathwork and mindful composure",
    src: "/assets/photo-yoga-sukhasana-hd.jpg",
    category: "Mindfulness",
    featured: true
  },
  {
    id: 4,
    title: "Outdoor Sports & Volleyball Court",
    caption: "Natural tree-lined playground encouraging athletic participation",
    src: "/assets/photo-sports-ground-hd.jpg",
    category: "Sports",
    featured: false
  },
  {
    id: 5,
    title: "Synchronized Morning Yoga Drills",
    caption: "Side-bend stretches building flexibility, discipline, and stamina",
    src: "/assets/photo-yoga-sidebends-hd.jpg",
    category: "Mindfulness",
    featured: false
  },
  {
    id: 6,
    title: "Attentive Student Assembly Hall",
    caption: "Students listening respectfully during joint school sessions",
    src: "/assets/photo-students-hall-hd.jpg",
    category: "Campus Life",
    featured: false
  },
  {
    id: 7,
    title: "Interactive Classroom & Science Models",
    caption: "Teacher guiding students through science models and real-world concepts",
    src: "/assets/classroom-interactive.jpg",
    category: "Classrooms",
    featured: true
  },
  {
    id: 8,
    title: "Stage Presentation & Speaker Session",
    caption: "Encouraging student interaction with distinguished speakers and mentors",
    src: "/assets/photo-stage-speech-hd.jpg",
    category: "Leadership",
    featured: false
  },
  {
    id: 9,
    title: "Outdoor Movement & Calisthenics",
    caption: "Forward bends and group physical drills under open morning skies",
    src: "/assets/photo-outdoor-yoga-hd.jpg",
    category: "Sports",
    featured: false
  },
  {
    id: 10,
    title: "CSR Collaboration & Strategic Planning",
    caption: "Corporate stakeholders and institutional educators planning child welfare",
    src: "/assets/csr-boardroom.jpg",
    category: "CSR & Community",
    featured: true
  }
];

export const csrOpportunities = [
  {
    id: "resources",
    title: "Learning Resources & Materials",
    description: "Provide textbooks, notebooks, science lab apparatus, reading libraries, and digital tablets to empower eager learners from underprivileged backgrounds.",
    impactArea: "Curriculum & Academic Materials",
    icon: "BookOpen"
  },
  {
    id: "wellbeing",
    title: "Student Health & Holistic Wellbeing",
    description: "Support daily nutrition programs, yoga and sports equipment, clean water filtration systems, and regular pediatric medical checkups.",
    impactArea: "Child Nutrition & Physical Health",
    icon: "HeartHandshake"
  },
  {
    id: "infrastructure",
    title: "Campus Infrastructure & Safe Spaces",
    description: "Upgrade classroom furniture, student benches, sanitation facilities, solar panels, and compound security to ensure a safe learning haven.",
    impactArea: "School Facilities & Modernization",
    icon: "Building"
  },
  {
    id: "experiential-labs",
    title: "STEM & Experiential Learning Kits",
    description: "Sponsor hands-on scientific kits, computer literacy modules, and vocational exposure sessions to spark real-world innovation.",
    impactArea: "Technology & Skill Development",
    icon: "Cpu"
  }
];

export const csrProcessSteps = [
  {
    step: "01",
    title: "Connect With the School",
    description: "Reach out via our CSR Enquiry form or phone line. Our administration schedules an exploratory dialogue.",
    timeframe: "Days 1 – 3"
  },
  {
    step: "02",
    title: "Discuss Shared Objectives",
    description: "Align your organization's CSR mandate (e.g., Schedule VII, education, child health) with tangible school requirements.",
    timeframe: "Week 1 – 2"
  },
  {
    step: "03",
    title: "Identify Suitable Support Areas",
    description: "Review specific projects—from classroom infrastructure to student learning kits—tailored to your budget and metrics.",
    timeframe: "Week 2 – 3"
  },
  {
    step: "04",
    title: "Coordinate & Review Impact",
    description: "Implement the program with full transparency, photo verification, milestone visits, and formal documentation.",
    timeframe: "Ongoing Oversight"
  }
];

export const admissionSteps = [
  {
    step: "01",
    title: "Submit an Enquiry",
    description: "Fill out the online admission enquiry form or call our direct school phone numbers to register your interest."
  },
  {
    step: "02",
    title: "Speak With the School",
    description: "Our admission counselor will reach out to discuss your child's background, learning needs, and class availability."
  },
  {
    step: "03",
    title: "Receive Admission Guidance",
    description: "Visit the campus, meet teachers, and receive clear guidance on curriculum structure and school ethos."
  },
  {
    step: "04",
    title: "Complete Formalities",
    description: "Submit requisite verification records, birth certificate, transfer certificate, and finalize enrollment."
  }
];

export const legacyMilestones = [
  {
    era: "The Inception",
    title: "A Vision of Accessible Education",
    description: "Founded with the conviction that no child in Hyderabad should be denied quality education and character-building due to financial limitations.",
    highlight: "Charitable Educational Commitment"
  },
  {
    era: "Lions Club Alignment",
    title: "Strengthened by Lions Club of Hyderabad",
    description: "Partnered under the stewardship of Lions Club of Hyderabad (Club 69) embodying the global spirit of 'Hope, Faith, Charity' and social service.",
    highlight: "Patronage & Community Trust"
  },
  {
    era: "Holistic Expansion",
    title: "Integrating Yoga, Fitness & Character",
    description: "Pioneered daily morning yoga drills, mindfulness practices, and sports routines to shape balanced minds and resilient bodies.",
    highlight: "Mind-Body Pedagogy"
  },
  {
    era: "Celebrating 40 Years",
    title: "Four Decades of Transforming Lives",
    description: "Proudly celebrating 40 years of academic dedication, producing confident alumni who contribute positively to society and nation-building.",
    highlight: "40 Years of Excellence"
  }
];
