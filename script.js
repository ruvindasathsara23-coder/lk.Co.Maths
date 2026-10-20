/* =========================================
   lk.Co.Maths - Complete Website Script
   Languages: Sinhala, English, Tamil
========================================= */

/* ---------- 1. LANGUAGE TRANSLATIONS ---------- */

const translations = {
  si: {
    home: "මුල් පිටුව",
    lessons: "📚 අපගේ පාඩම්",
    tutorNav: "AI ගුරුවරයා",
    heroTitle: "ගණිතය පහසුවෙන් ඉගෙන ගනිමු!",
    heroDescription: "ඔබගේ ගණිත ගමන අදම ආරම්භ කරන්න.",
    start: "පාඩම් ආරම්භ කරන්න",
    lessonDescription: "ඔබගේ ගණිත ගමන අදම ආරම්භ කරන්න.",
    pure: "ශුද්ධ ගණිතය",
    applied: "ව්‍යවහාරික ගණිතය",
    practice: "ප්‍රශ්න පුහුණුව",
    choose: "පාඩම් තෝරන්න",
    startPractice: "පුහුණුව ආරම්භ කරන්න",
    tutorTitle: "🤖 AI ගණිත ගුරුවරයා",
    tutorDescription: "ගණිත ප්‍රශ්න පියවරෙන් පියවර ඉගෙන ගනිමු!",
    tutorNotice: "සැබෑ AI ගුරුවරයා තවම සම්බන්ධ කර නැත.",
    quizTitle: "📝 ගණිත ප්‍රශ්න පුහුණුව",
    quizDescription: "ඔබේ ගණිත දැනුම පරීක්ෂා කර ලකුණු ලබාගන්න!",
    question: "ප්‍රශ්නය",
    score: "ලකුණු",
    next: "ඊළඟ ප්‍රශ්නය",
    seeResult: "ප්‍රතිඵල බලන්න",
    quizFinished: "පුහුණුව අවසන්!",
    result: "ඔබේ ප්‍රතිඵලය",
    excellent: "🏆 විශිෂ්ටයි!",
    tryAgain: "නැවත උත්සාහ කරන්න",
    correct: "✅ නිවැරදියි!",
    incorrect: "❌ නැවත ඉගෙන ගනිමු.",
    selectTopic: "පාඩම් තෝරන්න",
    openLesson: "පාඩම විවෘත කරන්න",
    back: "← පාඩම් ලැයිස්තුවට ආපසු",
    theory: "📖 පාඩමේ සිද්ධාන්ත",
    theoryText: "මෙම කොටසට පාඩමේ විස්තර සහ සූත්‍ර එකතු කරමු.",
    examples: "✍️ විසඳූ උදාහරණ",
    examplesText: "පියවරෙන් පියවර විසඳූ ගැටලු මෙතැන පෙන්වමු.",
    exercises: "📝 පුහුණු ප්‍රශ්න",
    exercisesText: "ඔබගේ දැනුම පරීක්ෂා කිරීමට ප්‍රශ්න මෙතැන එකතු කරමු.",
    welcome: "lk.Co.Maths වෙත සාදරයෙන් පිළිගනිමු!",
    footer: "© 2026 lk.Co.Maths | එකට ගණිතය ඉගෙන ගනිමු",
    quizFeedback: "ඔබ ප්‍රශ්න",
    of: "න්",
    answeredCorrectly: "කට නිවැරදි පිළිතුරු දුන්නා. ලකුණු:"
  },

  en: {
    home: "Home",
    lessons: "📚 Our Lessons",
    tutorNav: "AI Tutor",
    heroTitle: "Learn Mathematics Easily!",
    heroDescription: "Start your mathematics journey today.",
    start: "Start Learning",
    lessonDescription: "Start your mathematics journey today.",
    pure: "Pure Mathematics",
    applied: "Applied Mathematics",
    practice: "Practice Questions",
    choose: "Choose Lessons",
    startPractice: "Start Practice",
    tutorTitle: "🤖 AI Maths Tutor",
    tutorDescription: "Learn mathematics problems step by step!",
    tutorNotice: "The real AI Tutor has not been connected yet.",
    quizTitle: "📝 Maths Practice Quiz",
    quizDescription: "Test your mathematics knowledge and earn points!",
    question: "Question",
    score: "Score",
    next: "Next Question",
    seeResult: "See Results",
    quizFinished: "Quiz Finished!",
    result: "Your Results",
    excellent: "🏆 Excellent!",
    tryAgain: "Try Again",
    correct: "✅ Correct!",
    incorrect: "❌ Let's learn and try again.",
    selectTopic: "Choose a Lesson",
    openLesson: "Open Lesson",
    back: "← Back to Topics",
    theory: "📖 Lesson Theory",
    theoryText: "Lesson explanations and formulas will be added here.",
    examples: "✍️ Worked Examples",
    examplesText: "Step-by-step worked problems will appear here.",
    exercises: "📝 Practice Questions",
    exercisesText: "Questions to test your knowledge will be added here.",
    welcome: "Welcome to lk.Co.Maths!",
    footer: "© 2026 lk.Co.Maths | Learn Mathematics Together",
    quizFeedback: "You answered",
    of: "out of",
    answeredCorrectly: "questions correctly. Score:"
  },

  ta: {
    home: "முகப்பு",
    lessons: "📚 எங்கள் பாடங்கள்",
    tutorNav: "AI ஆசிரியர்",
    heroTitle: "கணிதத்தை எளிதாகக் கற்போம்!",
    heroDescription: "இன்றே உங்கள் கணிதப் பயணத்தைத் தொடங்குங்கள்.",
    start: "கற்கத் தொடங்குங்கள்",
    lessonDescription: "இன்றே உங்கள் கணிதப் பயணத்தைத் தொடங்குங்கள்.",
    pure: "தூய கணிதம்",
    applied: "பயன்பாட்டுக் கணிதம்",
    practice: "பயிற்சிக் கேள்விகள்",
    choose: "பாடங்களைத் தேர்ந்தெடுக்கவும்",
    startPractice: "பயிற்சியைத் தொடங்குங்கள்",
    tutorTitle: "🤖 AI கணித ஆசிரியர்",
    tutorDescription: "கணிதக் கேள்விகளைப் படிப்படியாகக் கற்போம்!",
    tutorNotice: "உண்மையான AI ஆசிரியர் இன்னும் இணைக்கப்படவில்லை.",
    quizTitle: "📝 கணிதப் பயிற்சி வினாடி வினா",
    quizDescription: "உங்கள் கணித அறிவைச் சோதித்துப் புள்ளிகளைப் பெறுங்கள்!",
    question: "கேள்வி",
    score: "மதிப்பெண்",
    next: "அடுத்த கேள்வி",
    seeResult: "முடிவுகளைக் காண்க",
    quizFinished: "வினாடி வினா முடிந்தது!",
    result: "உங்கள் முடிவுகள்",
    excellent: "🏆 சிறப்பு!",
    tryAgain: "மீண்டும் முயற்சிக்கவும்",
    correct: "✅ சரியான பதில்!",
    incorrect: "❌ மீண்டும் கற்றுக்கொள்வோம்.",
    selectTopic: "பாடத்தைத் தேர்ந்தெடுக்கவும்",
    openLesson: "பாடத்தைத் திறக்கவும்",
    back: "← பாடப் பட்டியலுக்குத் திரும்பு",
    theory: "📖 பாடக் கோட்பாடு",
    theoryText: "பாட விளக்கங்களும் சூத்திரங்களும் இங்கே சேர்க்கப்படும்.",
    examples: "✍️ தீர்க்கப்பட்ட எடுத்துக்காட்டுகள்",
    examplesText: "படிப்படியான தீர்வுகள் இங்கே காட்டப்படும்.",
    exercises: "📝 பயிற்சிக் கேள்விகள்",
    exercisesText: "உங்கள் அறிவைச் சோதிக்கும் கேள்விகள் இங்கே சேர்க்கப்படும்.",
    welcome: "lk.Co.Maths-க்கு வரவேற்கிறோம்!",
    footer: "© 2026 lk.Co.Maths | ஒன்றாகக் கணிதம் கற்போம்",
    quizFeedback: "நீங்கள்",
    of: "கேள்விகளில்",
    answeredCorrectly: "கேள்விகளுக்குச் சரியாகப் பதிலளித்தீர்கள். மதிப்பெண்:"
  }
};

let currentLanguage = localStorage.getItem("lkCoMathsLanguage") || "si";

function changeLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
localStorage.setItem("lkCoMathsLanguage", language);

const t = translations[language];

  document.documentElement.lang = language;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  setText("#hero-title", t.heroTitle);
  setText("#lessons > h2", t.lessons);
  setText("#lessons-description", t.lessonDescription);
  setText("#tutor h2", t.tutorTitle);
  setText("#tutor > p:nth-of-type(1)", t.tutorDescription);
  setText("#tutor > p:nth-of-type(2)", t.tutorNotice);
  setText("#practice > h2", t.quizTitle);
  setText("#practice > p", t.quizDescription);
  setText("footer p", t.footer);

  const heroDescription = document.querySelector(
    ".hero > p:nth-of-type(2)"
  );
  if (heroDescription) {
    heroDescription.textContent =
      language === "si"
        ? "A/L ඒකාබද්ධ ගණිතය පියවරෙන් පියවර ඉගෙන ගනිමු."
        : language === "en"
          ? "Learn A/L Combined Mathematics step by step."
          : "A/L ஒருங்கிணைந்த கணிதத்தைப் படிப்படியாகக் கற்போம்.";
  }

  const startButton = document.querySelector(
    '.hero a.btn[href="#lessons"]'
  );
  if (startButton) startButton.textContent = t.start;

  const cards = document.querySelectorAll("#lessons .card");

  if (cards[0]) {
    cards[0].querySelector("h3").textContent = "📐 " + t.pure;
    cards[0].querySelector("p").textContent =
      language === "si" ? "ශුද්ධ ගණිතය" :
      language === "en" ? "Pure Mathematics" : "தூய கணிதம்";
    cards[0].querySelector("a").textContent = t.choose;
  }

  if (cards[1]) {
    cards[1].querySelector("h3").textContent = "🚀 " + t.applied;
    cards[1].querySelector("p").textContent =
      language === "si" ? "ව්‍යවහාරික ගණිතය" :
      language === "en" ? "Applied Mathematics" : "பயன்பாட்டுக் கணிதம்";
    cards[1].querySelector("a").textContent = t.choose;
  }

  if (cards[2]) {
    cards[2].querySelector("h3").textContent = "📝 " + t.practice;
    cards[2].querySelector("p").textContent =
      language === "si" ? "ප්‍රශ්න පුහුණුව" :
      language === "en" ? "Practice Questions" : "பயிற்சிக் கேள்விகள்";
    cards[2].querySelector("button").textContent = t.startPractice;
  }

  setText("#next-button",
    currentQuestion === quizQuestions.length - 1
      ? t.seeResult
      : t.next
  );

  showQuestion();
}

/* ---------- 2. PURE MATHEMATICS TOPICS ---------- */

const pureTopics = [
  ["තාත්වික සංඛ්‍යා සහ ශ්‍රිත", "Real Numbers and Functions", "மெய்யெண்கள் மற்றும் சார்புகள்"],
  ["වර්ගජ ශ්‍රිත සහ වර්ගජ සමීකරණ", "Quadratic Functions and Equations", "இருபடிச் சார்புகள் மற்றும் சமன்பாடுகள்"],
  ["බහුපද ශ්‍රිත", "Polynomial Functions", "பல்லுறுப்புச் சார்புகள்"],
  ["පරිමේය ශ්‍රිත භින්න භාග වලට වෙන් කිරීම", "Partial Fractions", "பகுதி பின்னங்கள்"],
  ["දර්ශක සහ ලඝුගණක", "Indices and Logarithms", "அடுக்குகள் மற்றும் மடக்கைகள்"],
  ["අසමානතා", "Inequalities", "சமமின்மைகள்"],
  ["ත්‍රිකෝණමිතිය", "Trigonometry", "முக்கோணவியல்"],
  ["සංකරණ හා සංයෝජන", "Permutations and Combinations", "வரிசைமாற்றங்கள் மற்றும் சேர்வுகள்"],
  ["ද්විපද ප්‍රසාරණය", "Binomial Expansion", "ஈருறுப்புப் பெருக்கம்"],
  ["ගණිත අභ්‍යුහන මූලධර්මය", "Mathematical Induction", "கணிதத் தூண்டல் முறை"],
  ["ශ්‍රේණි", "Series", "தொடர்கள்"],
  ["සරල රේඛාව", "Straight Line", "நேர்கோடு"],
  ["වෘත්තය", "Circle", "வட்டம்"],
  ["සීමා සහ අවකලනය", "Limits and Differentiation", "எல்லைகள் மற்றும் வகையீடு"],
  ["අනුකලනය", "Integration", "தொகையீடு"],
  ["සංකීර්ණ සංඛ්‍යා", "Complex Numbers", "கலப்பெண்கள்"],
  ["න්‍යාස සහ නිර්ණායක", "Matrices and Determinants", "அணிகள் மற்றும் அணிக்கோவைகள்"]
];

/* ---------- 3. APPLIED MATHEMATICS TOPICS ---------- */

const appliedTopics = [
  ["දෛශික", "Vectors", "வெக்டர்கள்"],
  ["ලක්ෂයකදී ක්‍රියාකරන ඒකතල බල පද්ධති", "Coplanar Forces at a Point", "ஒரு புள்ளியில் செயல்படும் ஒருதள விசைகள்"],
  ["බල තුනක සමතුලිතතාව", "Equilibrium of Three Forces", "மூன்று விசைகளின் சமநிலை"],
  ["ඝර්ෂණය", "Friction", "உராய்வு"],
  ["දෘඩ වස්තුවක් මත බල", "Forces on a Rigid Body", "திண்மப் பொருளின் மீதான விசைகள்"],
  ["ස්කන්ධ කේන්ද්‍රය", "Centre of Mass", "திணிவின் மையம்"],
  ["රාමු සැකිළි", "Frameworks", "கட்டமைப்புகள்"],
  ["සරල රේඛාවක් ඔස්සේ චලිතය", "Motion in a Straight Line", "நேர்கோட்டில் இயக்கம்"],
  ["ප්‍රක්ෂිප්ත", "Projectiles", "எறிபொருட்கள்"],
  ["සාපේක්ෂ චලිතය", "Relative Motion", "சார்பு இயக்கம்"],
  ["නිව්ටන්ගේ චලිත නියම", "Newton's Laws of Motion", "நியூட்டனின் இயக்க விதிகள்"],
  ["වෘත්ත චලිතය", "Circular Motion", "வட்ட இயக்கம்"],
  ["ආවේගය සහ ගැටුම්", "Impulse and Collisions", "உந்துவிசை மற்றும் மோதல்கள்"],
  ["වැඩ, ශක්තිය සහ බලය", "Work, Energy and Power", "வேலை, ஆற்றல் மற்றும் திறன்"],
  ["සරල අනුවර්තී චලිතය", "Simple Harmonic Motion (SHM)", "தனிச் சீரிசை இயக்கம்"],
  ["දත්ත නිරූපණය සහ විසරණ මිනුම්", "Statistics and Measures of Dispersion", "புள்ளியியல் மற்றும் பரவல் அளவைகள்"],
  ["සම්භාවිතාව", "Probability", "நிகழ்தகவு"],
  ["ද්විපද සහ පොයිසන් ව්‍යාප්ති", "Binomial and Poisson Distributions", "ஈருறுப்பு மற்றும் பாய்சன் பரம்பல்கள்"]
];

function getTopicName(topic) {
  return topic[["si", "en", "ta"].indexOf(currentLanguage)] || topic[0];
}

/* ---------- 4. TOPIC LIST ---------- */

let currentTopicType = "pure";
let currentTopicArray = pureTopics;

function showTopics(type) {
  currentTopicType = type;

  if (type === "pure") {
    currentTopicArray = pureTopics;
  } else if (type === "applied") {
    currentTopicArray = appliedTopics;
  } else {
    currentTopicArray = [...pureTopics, ...appliedTopics];
  }

  renderTopicList();

  const topicList = document.getElementById("topic-list");
  if (topicList) {
    topicList.hidden = false;
    topicList.scrollIntoView({ behavior: "smooth" });
  }
}

function renderTopicList() {
  const topicList = document.getElementById("topic-list");
  const topicCards = document.getElementById("topic-cards");
  const heading = document.getElementById("topic-heading");

  if (!topicList || !topicCards || !heading) return;

  const t = translations[currentLanguage];

  heading.textContent =
    currentTopicType === "pure"
      ? "📐 " + t.pure
      : currentTopicType === "applied"
        ? "🚀 " + t.applied
        : "📝 " + t.practice;

  topicCards.replaceChildren();

  currentTopicArray.forEach((topic, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${getTopicName(topic)}`;

    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = t.openLesson;
    button.addEventListener("click", () => openTopic(topic));

    card.append(title, button);
    topicCards.appendChild(card);
  });
}

function hideTopics() {
  const topicList = document.getElementById("topic-list");
  if (topicList) topicList.hidden = true;

  const lessons = document.getElementById("lessons");
  if (lessons) {
    lessons.scrollIntoView({ behavior: "smooth" });
  }
}

/* ---------- 5. OPEN A LESSON ---------- */

function openTopic(topic) {
  const topicList = document.getElementById("topic-list");
  if (!topicList) return;

  const t = translations[currentLanguage];

  topicList.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = "📘 " + getTopicName(topic);

  const welcome = document.createElement("p");
  welcome.textContent = t.welcome;

  const sections = [
    [t.theory, t.theoryText],
    [t.examples, t.examplesText],
    [t.exercises, t.exercisesText]
  ];

  topicList.append(heading, welcome);

  sections.forEach(([titleText, descriptionText]) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = titleText;

    const description = document.createElement("p");
    description.textContent = descriptionText;

    card.append(title, description);
    topicList.appendChild(card);
  });

  const backButton = document.createElement("button");
  backButton.className = "btn";
  backButton.textContent = t.back;
  backButton.addEventListener("click", renderTopicList);

  topicList.appendChild(backButton);
  topicList.hidden = false;
  topicList.scrollIntoView({ behavior: "smooth" });
}

/* ---------- 6. QUIZ QUESTIONS ---------- */

const quizQuestions = [
  {
    question: [
      "1. 2x + 3 = 11 නම්, x හි අගය කුමක්ද?",
      "1. If 2x + 3 = 11, what is x?",
      "1. 2x + 3 = 11 எனில், x இன் மதிப்பு என்ன?"
    ],
    options: [
      ["2", "3", "4", "5"],
      ["2", "3", "4", "5"],
      ["2", "3", "4", "5"]
    ],
    answer: 2,
    explanation: [
      "2x = 11 - 3 = 8. එබැවින් x = 4.",
      "2x = 11 - 3 = 8. Therefore, x = 4.",
      "2x = 11 - 3 = 8. எனவே x = 4."
    ]
  },
  {
    question: [
      "2. (a + b)² හි නිවැරදි විස්තාරණය කුමක්ද?",
      "2. What is the correct expansion of (a + b)²?",
      "2. (a + b)² இன் சரியான விரிவாக்கம் எது?"
    ],
    options: [
      ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a + 2b"],
      ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a + 2b"],
      ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a + 2b"]
    ],
    answer: 1,
    explanation: [
      "(a + b)(a + b) = a² + 2ab + b².",
      "(a + b)(a + b) = a² + 2ab + b².",
      "(a + b)(a + b) = a² + 2ab + b²."
    ]
  },
  {
    question: [
      "3. sin 30° හි අගය කුමක්ද?",
      "3. What is the value of sin 30°?",
      "3. sin 30° இன் மதிப்பு என்ன?"
    ],
    options: [
      ["1", "√3/2", "1/2", "0"],
      ["1", "√3/2", "1/2", "0"],
      ["1", "√3/2", "1/2", "0"]
    ],
    answer: 2,
    explanation: [
      "sin 30° = 1/2.",
      "sin 30° = 1/2.",
      "sin 30° = 1/2."
    ]
  },
  {
    question: [
      "4. x² = 25 නම්, x හි සියලුම සැබෑ අගයන් මොනවාද?",
      "4. If x² = 25, what are all real values of x?",
      "4. x² = 25 எனில், x இன் அனைத்து மெய் மதிப்புகள் யாவை?"
    ],
    options: [
      ["5 පමණි", "-5 පමණි", "0 සහ 5", "5 සහ -5"],
      ["5 only", "-5 only", "0 and 5", "5 and -5"],
      ["5 மட்டும்", "-5 மட்டும்", "0 மற்றும் 5", "5 மற்றும் -5"]
    ],
    answer: 3,
    explanation: [
      "x² = 25 නිසා x = 5 හෝ x = -5.",
      "Since x² = 25, x = 5 or x = -5.",
      "x² = 25 என்பதால் x = 5 அல்லது x = -5."
    ]
  },
  {
    question: [
      "5. 3, 7, 11, 15, ... අනුක්‍රමයේ පොදු වෙනස කීයද?",
      "5. What is the common difference of 3, 7, 11, 15, ...?",
      "5. 3, 7, 11, 15, ... தொடரின் பொது வித்தியாசம் என்ன?"
    ],
    options: [
      ["2", "3", "4", "5"],
      ["2", "3", "4", "5"],
      ["2", "3", "4", "5"]
    ],
    answer: 2,
    explanation: [
      "අනුයාත පද දෙකක වෙනස 7 - 3 = 4.",
      "The difference between consecutive terms is 7 - 3 = 4.",
      "அடுத்தடுத்த உறுப்புகளின் வித்தியாசம் 7 - 3 = 4."
    ]
  }
];

let currentQuestion = 0;
let quizScore = 0;
let answered = false;

function getLanguageIndex() {
  return ["si", "en", "ta"].indexOf(currentLanguage);
}

/* ---------- 7. DISPLAY QUIZ ---------- */

function showQuestion() {
  const question = quizQuestions[currentQuestion];
  if (!question) return;

  const t = translations[currentLanguage];
  const langIndex = getLanguageIndex();

  const questionNumber = document.getElementById("question-number");
  const score = document.getElementById("score");
  const questionText = document.getElementById("question-text");
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");
  const optionsContainer = document.getElementById("answer-options");
  const result = document.getElementById("quiz-result");

  if (!questionNumber || !score || !questionText ||
      !feedback || !nextButton || !optionsContainer || !result) {
    return;
  }

  questionNumber.textContent =
    `${t.question} ${currentQuestion + 1} / ${quizQuestions.length}`;

  score.textContent = `${t.score}: ${quizScore}`;
  questionText.textContent = question.question[langIndex];
  feedback.textContent = "";
  feedback.style.color = "";
  nextButton.disabled = true;
  nextButton.hidden = false;
  nextButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? t.seeResult
      : t.next;

  const progress = document.getElementById("progress-bar");
  if (progress) {
    progress.style.width =
      `${(currentQuestion / quizQuestions.length) * 100}%`;
  }

  result.hidden = true;
  questionText.hidden = false;
  optionsContainer.hidden = false;
  optionsContainer.replaceChildren();

  question.options[langIndex].forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });

  answered = false;
}

function checkAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const question = quizQuestions[currentQuestion];
  const langIndex = getLanguageIndex();
  const t = translations[currentLanguage];

  const buttons = document.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("feedback");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && index !== question.answer) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === question.answer) {
    quizScore++;
    feedback.textContent =
      `${t.correct} ${question.explanation[langIndex]}`;
    feedback.style.color = "#15803d";
  } else {
    feedback.textContent =
      `${t.incorrect} ${question.explanation[langIndex]}`;
    feedback.style.color = "#b91c1c";
  }

  document.getElementById("score").textContent =
    `${t.score}: ${quizScore}`;

  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const t = translations[currentLanguage];
  const langIndex = getLanguageIndex();

  const questionNumber = document.getElementById("question-number");
  const progress = document.getElementById("progress-bar");
  const questionText = document.getElementById("question-text");
  const options = document.getElementById("answer-options");
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");
  const result = document.getElementById("quiz-result");
  const resultTitle = document.getElementById("result-title");
  const resultText = document.getElementById("result-text");

  questionNumber.textContent = t.quizFinished;
  progress.style.width = "100%";
  questionText.hidden = true;
  options.hidden = true;
  feedback.textContent = "";
  nextButton.hidden = true;
  result.hidden = false;

  resultTitle.textContent =
    quizScore === quizQuestions.length ? t.excellent : t.result;

  resultText.textContent =
    `${t.quizFeedback} ${quizQuestions.length} ${t.of} ${quizScore} ` +
    `${t.answeredCorrectly} ${quizScore}/${quizQuestions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  quizScore = 0;
  answered = false;
  showQuestion();
}

/* ---------- 8. START THE WEBSITE ---------- */

const nextButton = document.getElementById("next-button");
if (nextButton) {
  nextButton.addEventListener("click", nextQuestion);
}

const restartButton = document.getElementById("restart-button");
if (restartButton) {
  restartButton.addEventListener("click", restartQuiz);
}

showQuestion();