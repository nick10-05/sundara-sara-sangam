export interface WordExplanation {
  word: string;
  meaning: string;
}

export interface Sloka {
  id: number;
  slokaNumber: string;
  image?: string;
  sanskrit: string;
  transliteration: string;
  wordByWord: WordExplanation[];
  translations: {
    english: string;
    hindi: string;
    telugu: string;
    tamil: string;
    malayalam: string;
    kannada: string;
  };
  summary: {
    english: string;
    hindi: string;
    telugu: string;
    tamil: string;
    malayalam: string;
    kannada: string;
  };
  audioUrl?: string;
}

export const slokas: Sloka[] = [
  {
    id: 11,
    image: "/images/sloka-11.jpeg",
    slokaNumber: "5.11",
    sanskrit: "स निशाचरराजस्य विक्रमं प्रति संभ्रमात् |\nचिन्तयामास कार्यार्थी मनसा मारुतात्मजः ||",
    transliteration: "sa nishāchararājasya vikramaṁ prati sambhramāt | chintayāmāsa kāryārthī manasā mārutātmajaḥ ||",
    wordByWord: [
      { word: "सः (saḥ)", meaning: "he" },
      { word: "निशाचरराजस्य (nishāchararājasya)", meaning: "of the king of night-wanderers (demons)" },
      { word: "विक्रमं (vikramaṁ)", meaning: "prowess/valor" },
      { word: "प्रति (prati)", meaning: "towards/about" },
      { word: "संभ्रमात् (sambhramāt)", meaning: "with anxiety/concern" },
      { word: "चिन्तयामास (chintayāmāsa)", meaning: "pondered/thought" },
      { word: "कार्यार्थी (kāryārthī)", meaning: "one desirous of accomplishing the task" },
      { word: "मनसा (manasā)", meaning: "with mind/mentally" },
      { word: "मारुतात्मजः (mārutātmajaḥ)", meaning: "son of the wind god (Hanuman)" }
    ],
    translations: {
      english: "The son of the wind god, anxious to accomplish his mission, pondered in his mind about the prowess of the king of demons.",
      hindi: "कार्य सिद्धि के इच्छुक मारुति ने राक्षसराज की शक्ति के बारे में चिंतित होकर मन में विचार किया।",
      telugu: "కార్యార్థి అయిన మారుతాత్మజుడు రాక్షసరాజు యొక్క పరాక్రమం గురించి భయంతో మనసులో ఆలోచించాడు.",
      tamil: "காரியத்தை சாதிக்க விரும்பிய அனுமன் அரக்கர் மன்னனின் வலிமை பற்றி கவலையுடன் மனதில் சிந்தித்தான்.",
      malayalam: "കാര്യസാധ്യത്തിനായി ആഗ്രഹിച്ച ഹനുമാൻ രാക്ഷസരാജാവിന്റെ പരാക്രമത്തെക്കുറിച്ച് ഉത്കണ്ഠയോടെ മനസ്സിൽ ചിന്തിച്ചു.",
      kannada: "ಕಾರ್ಯಸಾಧನೆಗಾಗಿ ಆಸಕ್ತನಾದ ಹನುಮಂತನು ರಾಕ್ಷಸರಾಜನ ಪರಾಕ್ರಮದ ಬಗ್ಗೆ ಆತಂಕದಿಂದ ಮನಸ್ಸಿನಲ್ಲಿ ಯೋಚಿಸಿದನು."
    },
    summary: {
      english: "Hanuman contemplates the might of Ravana as he prepares to enter Lanka, showing his strategic mindset.",
      hindi: "हनुमान लंका में प्रवेश की तैयारी करते हुए रावण की शक्ति पर विचार करते हैं, जो उनकी रणनीतिक सोच दर्शाता है।",
      telugu: "హనుమంతుడు లంకలో ప్రవేశించడానికి సిద్ధమవుతూ రావణుని శక్తి గురించి ఆలోచిస్తాడు, ఇది అతని వ్యూహాత్మక ఆలోచనను చూపిస్తుంది.",
      tamil: "இலங்கைக்குள் நுழையத் தயாராகும் அனுமன், இராவணனின் வலிமையை எண்ணிப் பார்க்கிறான்.",
      malayalam: "ലങ്കയിൽ പ്രവേശിക്കാൻ തയ്യാറെടുക്കുമ്പോൾ ഹനുമാൻ രാവണന്റെ ശക്തിയെക്കുറിച്ച് ചിന്തിക്കുന്നു.",
      kannada: "ಲಂಕೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ಸಿದ್ಧಪಡಿಸುತ್ತಿರುವಾಗ ಹನುಮಂತನು ರಾವಣನ ಶಕ್ತಿಯ ಬಗ್ಗೆ ಯೋಚಿಸುತ್ತಾನೆ."
    }
  },
  {
    id: 12,
    image: "/images/sloka-12.jpeg",
    slokaNumber: "5.12",
    sanskrit: "अतुल्यबलविक्रान्तैर्राक्षसैर्बहुभिर्वृतम् |\nगुप्तां रावणबाहुभ्यां पुरीं राक्षसभीषणैः ||",
    transliteration: "atulyabalavikrāntair rākṣasair bahubhir vṛtam | guptāṁ rāvaṇabāhubhyāṁ purīṁ rākṣasabhīṣaṇaiḥ ||",
    wordByWord: [
      { word: "अतुल्यबलविक्रान्तैः (atulyabalavikrāntaiḥ)", meaning: "of unmatched strength and valor" },
      { word: "राक्षसैः (rākṣasaiḥ)", meaning: "by demons" },
      { word: "बहुभिः (bahubhiḥ)", meaning: "by many" },
      { word: "वृतम् (vṛtam)", meaning: "surrounded" },
      { word: "गुप्ताम् (guptām)", meaning: "protected" },
      { word: "रावणबाहुभ्याम् (rāvaṇabāhubhyām)", meaning: "by Ravana's arms" },
      { word: "पुरीम् (purīm)", meaning: "the city" },
      { word: "राक्षसभीषणैः (rākṣasabhīṣaṇaiḥ)", meaning: "by terrifying demons" }
    ],
    translations: {
      english: "The city was surrounded by many demons of unmatched strength and valor, protected by Ravana's arms and guarded by terrifying demons.",
      hindi: "यह नगरी अतुल्य बल और पराक्रम वाले बहुत से राक्षसों से घिरी थी, रावण की भुजाओं द्वारा रक्षित और भयानक राक्षसों द्वारा सुरक्षित थी।",
      telugu: "ఆ నగరం అసమాన బలపరాక్రమం గల అనేక రాక్షసులచే చుట్టుముట్టబడి, రావణుని భుజాలచే రక్షించబడి, భయంకర రాక్షసులచే కాపాడబడింది.",
      tamil: "ஒப்பற்ற வலிமை வீரம் கொண்ட பல அரக்கர்களால் சூழப்பட்ட அந்நகரம், இராவணனின் புஜங்களால் பாதுகாக்கப்பட்டது.",
      malayalam: "അസമാന ബലപരാക്രമമുള്ള അനേകം രാക്ഷസരാൽ ചുറ്റപ്പെട്ട ആ നഗരം രാവണന്റെ കൈകളാൽ സംരക്ഷിക്കപ്പെട്ടിരുന്നു.",
      kannada: "ಅಸಮಾನ ಬಲ ಪರಾಕ್ರಮವುಳ್ಳ ಅನೇಕ ರಾಕ್ಷಸರಿಂದ ಸುತ್ತುವರೆದ ಆ ನಗರವು ರಾವಣನ ತೋಳುಗಳಿಂದ ರಕ್ಷಿಸಲ್ಪಟ್ಟಿತ್ತು."
    },
    summary: {
      english: "Description of Lanka's formidable defenses with countless powerful demons protecting it.",
      hindi: "लंका की दुर्जेय सुरक्षा का वर्णन जहाँ अनगिनत शक्तिशाली राक्षस इसकी रक्षा करते हैं।",
      telugu: "లంక యొక్క బలమైన రక్షణ వర్ణన, అక్కడ అనేక శక్తివంతమైన రాక్షసులు దానిని రక్షిస్తున్నారు.",
      tamil: "எண்ணற்ற வலிமையான அரக்கர்கள் காவல் காக்கும் இலங்கையின் வலிமையான பாதுகாப்பு விவரணை.",
      malayalam: "എണ്ണമറ്റ ശക്തരായ രാക്ഷസർ കാവൽ നിൽക്കുന്ന ലങ്കയുടെ ദുർഭേദ്യമായ പ്രതിരോധത്തിന്റെ വിവരണം.",
      kannada: "ಅಸಂಖ್ಯಾತ ಶಕ್ತಿಶಾಲಿ ರಾಕ್ಷಸರು ಕಾವಲು ಕಾಯುವ ಲಂಕೆಯ ದುರ್ಭೇದ್ಯ ರಕ್ಷಣೆಯ ವಿವರಣೆ."
    }
  },
  {
    id: 13,
    image: "/images/sloka-13.jpeg",
    slokaNumber: "5.13",
    sanskrit: "अलं प्राकारवप्रेण सोऽचिन्तयत वीर्यवान् |\nभूयश्च चिन्तयामास वानरोऽथ महामनाः ||",
    transliteration: "alaṁ prākāravapреṇa so'chintayata vīryavān | bhūyaścha chintayāmāsa vānaro'tha mahāmanāḥ ||",
    wordByWord: [
      { word: "अलम् (alam)", meaning: "sufficient/enough" },
      { word: "प्राकारवप्रेण (prākāravapреṇa)", meaning: "with walls and moats" },
      { word: "सः (saḥ)", meaning: "he" },
      { word: "अचिन्तयत (achintayata)", meaning: "thought" },
      { word: "वीर्यवान् (vīryavān)", meaning: "the mighty one" },
      { word: "भूयः (bhūyaḥ)", meaning: "again/further" },
      { word: "च (cha)", meaning: "and" },
      { word: "चिन्तयामास (chintayāmāsa)", meaning: "pondered" },
      { word: "वानरः (vānaraḥ)", meaning: "monkey" },
      { word: "अथ (atha)", meaning: "then" },
      { word: "महामनाः (mahāmanāḥ)", meaning: "the great-minded one" }
    ],
    translations: {
      english: "The mighty monkey thought that the walls and moats were sufficient defense, and the great-minded one pondered further.",
      hindi: "शक्तिशाली वानर ने सोचा कि दीवारें और खाइयां पर्याप्त रक्षा हैं, और महामना ने आगे विचार किया।",
      telugu: "శక్తిమంతుడైన వానరుడు గోడలు మరియు కందకాలు సరిపోతాయని భావించాడు, మరియు మహామనస్కుడు మరింత ఆలోచించాడు.",
      tamil: "வலிமையான குரங்கு சுவர்களும் அகழிகளும் போதுமான பாதுகாப்பு என்று நினைத்தான், பெரிய மனமுள்ளவன் மேலும் சிந்தித்தான்.",
      malayalam: "ശക്തനായ വാനരൻ മതിലുകളും കിടങ്ങുകളും മതിയായ പ്രതിരോധമാണെന്ന് കരുതി, മഹാമനസ്കൻ കൂടുതൽ ചിന്തിച്ചു.",
      kannada: "ಶಕ್ತಿಶಾಲಿ ವಾನರನು ಗೋಡೆಗಳು ಮತ್ತು ಕಂದಕಗಳು ಸಾಕಷ್ಟು ರಕ್ಷಣೆಯೆಂದು ಯೋಚಿಸಿದನು, ಮಹಾಮನಸ್ಕನು ಮತ್ತಷ್ಟು ಯೋಚಿಸಿದನು."
    },
    summary: {
      english: "Hanuman assesses Lanka's physical fortifications and strategizes his approach.",
      hindi: "हनुमान लंका की भौतिक किलेबंदी का आकलन करते हैं और अपनी रणनीति बनाते हैं।",
      telugu: "హనుమంతుడు లంక యొక్క భౌతిక కోటను అంచనా వేసి తన విధానాన్ని రూపొందిస్తాడు.",
      tamil: "அனுமன் இலங்கையின் பாதுகாப்பு கட்டமைப்பை மதிப்பீடு செய்து தனது அணுகுமுறையை திட்டமிடுகிறான்.",
      malayalam: "ഹനുമാൻ ലങ്കയുടെ ഭൗതിക കോട്ടകളെ വിലയിരുത്തി തന്റെ സമീപനം ആസൂത്രണം ചെയ്യുന്നു.",
      kannada: "ಹನುಮಂತನು ಲಂಕೆಯ ಭೌತಿಕ ಕೋಟೆಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ ತನ್ನ ವಿಧಾನವನ್ನು ಯೋಜಿಸುತ್ತಾನೆ."
    }
  },
  {
    id: 14,
    image: "/images/sloka-14.jpeg",
    slokaNumber: "5.14",
    sanskrit: "न वानरा न गच्छेयुः पुरीमिमां परैर्वृताम् |\nगुप्तां राक्षसराजेन रावणेन दुरात्मना ||",
    transliteration: "na vānarā na gachchheyuḥ purīmimāṁ parair vṛtām | guptāṁ rākṣasarājena rāvaṇena durātmanā ||",
    wordByWord: [
      { word: "न (na)", meaning: "not" },
      { word: "वानराः (vānarāḥ)", meaning: "monkeys" },
      { word: "न गच्छेयुः (na gachchheyuḥ)", meaning: "cannot go/enter" },
      { word: "पुरीम् इमाम् (purīm imām)", meaning: "this city" },
      { word: "परैः (paraiḥ)", meaning: "by enemies" },
      { word: "वृताम् (vṛtām)", meaning: "surrounded" },
      { word: "गुप्ताम् (guptām)", meaning: "protected" },
      { word: "राक्षसराजेन (rākṣasarājena)", meaning: "by the demon king" },
      { word: "रावणेन (rāvaṇena)", meaning: "by Ravana" },
      { word: "दुरात्मना (durātmanā)", meaning: "evil-minded" }
    ],
    translations: {
      english: "Other monkeys cannot enter this city which is surrounded by enemies and protected by the evil-minded demon king Ravana.",
      hindi: "अन्य वानर इस नगरी में प्रवेश नहीं कर सकते जो शत्रुओं से घिरी है और दुरात्मा राक्षसराज रावण द्वारा सुरक्षित है।",
      telugu: "ఇతర వానరులు శత్రువులతో చుట్టుముట్టబడిన మరియు దుర్మార్గుడైన రాక్షసరాజు రావణుడు రక్షించిన ఈ నగరంలో ప్రవేశించలేరు.",
      tamil: "எதிரிகளால் சூழப்பட்ட, தீயவனான அரக்கர் மன்னன் இராவணனால் காக்கப்படும் இந்நகரில் மற்ற குரங்குகள் நுழைய இயலாது.",
      malayalam: "ശത്രുക്കളാൽ ചുറ്റപ്പെട്ട, ദുഷ്ടനായ രാക്ഷസരാജാവ് രാവണൻ സംരക്ഷിക്കുന്ന ഈ നഗരത്തിൽ മറ്റ് വാനരർക്ക് പ്രവേശിക്കാൻ കഴിയില്ല.",
      kannada: "ಶತ್ರುಗಳಿಂದ ಸುತ್ತುವರೆದ, ದುಷ್ಟ ರಾಕ್ಷಸರಾಜ ರಾವಣನು ರಕ್ಷಿಸುವ ಈ ನಗರಕ್ಕೆ ಇತರ ವಾನರರು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ."
    },
    summary: {
      english: "Hanuman realizes that only he possesses the unique ability to penetrate Lanka's defenses.",
      hindi: "हनुमान को एहसास होता है कि केवल वे ही लंका की रक्षा को भेदने की अद्वितीय क्षमता रखते हैं।",
      telugu: "లంక రక్షణను భేదించగల ప్రత్యేక సామర్థ్యం తనకు మాత్రమే ఉందని హనుమంతుడు గ్రహించాడు.",
      tamil: "இலங்கையின் பாதுகாப்பை ஊடுருவும் தனித்துவமான திறன் தனக்கு மட்டுமே உள்ளது என அனுமன் உணர்கிறான்.",
      malayalam: "ലങ്കയുടെ പ്രതിരോധത്തെ തകർക്കാനുള്ള അസാധാരണ കഴിവ് തനിക്കു മാത്രമേയുള്ളൂവെന്ന് ഹനുമാൻ തിരിച്ചറിയുന്നു.",
      kannada: "ಲಂಕೆಯ ರಕ್ಷಣೆಯನ್ನು ಭೇದಿಸುವ ಅಸಾಧಾರಣ ಸಾಮರ್ಥ್ಯ ತನಗೆ ಮಾತ್ರ ಇದೆಯೆಂದು ಹನುಮಂತನು ಅರಿತುಕೊಳ್ಳುತ್ತಾನೆ."
    }
  },
  {
    id: 15,
    image: "/images/sloka-15.jpeg",
    slokaNumber: "5.15",
    sanskrit: "चारेण च परिज्ञेयो विक्रमो राक्षसस्य च |\nकर्तव्यं च हनुमता रक्षोगणविनाशनम् ||",
    transliteration: "chāreṇa cha parijñeyo vikramo rākṣasasya cha | kartavyaṁ cha hanumatā rakṣogaṇavināśanam ||",
    wordByWord: [
      { word: "चारेण (chāreṇa)", meaning: "through espionage" },
      { word: "च (cha)", meaning: "and" },
      { word: "परिज्ञेयः (parijñeyaḥ)", meaning: "to be ascertained" },
      { word: "विक्रमः (vikramaḥ)", meaning: "strength/valor" },
      { word: "राक्षसस्य (rākṣasasya)", meaning: "of the demon" },
      { word: "कर्तव्यम् (kartavyam)", meaning: "duty/to be done" },
      { word: "हनुमता (hanumatā)", meaning: "by Hanuman" },
      { word: "रक्षोगणविनाशनम् (rakṣogaṇavināśanam)", meaning: "destruction of demon forces" }
    ],
    translations: {
      english: "Through espionage, the strength of the demons must be ascertained, and Hanuman must accomplish the destruction of the demon forces.",
      hindi: "जासूसी के माध्यम से राक्षसों की शक्ति का पता लगाना चाहिए, और हनुमान को राक्षस सेना का विनाश करना है।",
      telugu: "గూఢచర్యం ద్వారా రాక్షసుల శక్తిని తెలుసుకోవాలి, మరియు హనుమంతుడు రాక్షస సేనల నాశనాన్ని సాధించాలి.",
      tamil: "உளவு மூலம் அரக்கர்களின் வலிமையை அறிய வேண்டும், அனுமன் அரக்கர் படையை அழிக்க வேண்டும்.",
      malayalam: "ചാരപ്രവർത്തനത്തിലൂടെ രാക്ഷസരുടെ ശക്തി മനസ്സിലാക്കണം, ഹനുമാൻ രാക്ഷസ സേനയെ നശിപ്പിക്കണം.",
      kannada: "ಗೂಢಚಾರಿಕೆಯ ಮೂಲಕ ರಾಕ್ಷಸರ ಶಕ್ತಿಯನ್ನು ತಿಳಿಯಬೇಕು, ಮತ್ತು ಹನುಮಂತನು ರಾಕ್ಷಸ ಸೈನ್ಯವನ್ನು ನಾಶಮಾಡಬೇಕು."
    },
    summary: {
      english: "The dual mission is established: gather intelligence and weaken the enemy forces.",
      hindi: "दोहरा मिशन स्थापित होता है: खुफिया जानकारी इकट्ठा करना और दुश्मन की ताकत को कमजोर करना।",
      telugu: "ద్వంద్వ లక్ష్యం స్థాపించబడింది: నిఘా సేకరించడం మరియు శత్రు బలాలను బలహీనపరచడం.",
      tamil: "இரட்டை இலக்கு நிறுவப்படுகிறது: உளவு சேகரிப்பு மற்றும் எதிரி படைகளை பலவீனப்படுத்துதல்.",
      malayalam: "ഇരട്ട ദൗത്യം സ്ഥാപിക്കപ്പെടുന്നു: രഹസ്യാന്വേഷണം ശേഖരിക്കുക, ശത്രു സേനയെ ദുർബലപ്പെടുത്തുക.",
      kannada: "ಎರಡು ಗುರಿಗಳು ಸ್ಥಾಪಿಸಲ್ಪಡುತ್ತವೆ: ಗುಪ್ತಚಾರ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಶತ್ರು ಪಡೆಗಳನ್ನು ದುರ್ಬಲಗೊಳಿಸುವುದು."
    }
  },
  {
    id: 16,
    image: "/images/sloka-16.jpeg",
    slokaNumber: "5.16",
    sanskrit: "अहं त्वलप्रमाणोऽपि यदि जानामि तत्त्वतः |\nपुरीमिमां प्रविष्टो वा भविष्यामि सुखस्य वा ||",
    transliteration: "ahaṁ tvalpaрramāṇo'pi yadi jānāmi tattvataḥ | purīmimāṁ praviṣṭo vā bhaviṣyāmi sukhasya vā ||",
    wordByWord: [
      { word: "अहम् (aham)", meaning: "I" },
      { word: "तु (tu)", meaning: "but/indeed" },
      { word: "अल्पप्रमाणः (alpapramāṇaḥ)", meaning: "small in size" },
      { word: "अपि (api)", meaning: "even though" },
      { word: "यदि (yadi)", meaning: "if" },
      { word: "जानामि (jānāmi)", meaning: "I understand" },
      { word: "तत्त्वतः (tattvataḥ)", meaning: "the reality/truth" },
      { word: "पुरीम् इमाम् (purīm imām)", meaning: "this city" },
      { word: "प्रविष्टः (praviṣṭaḥ)", meaning: "having entered" },
      { word: "भविष्यामि (bhaviṣyāmi)", meaning: "I will become" },
      { word: "सुखस्य (sukhasya)", meaning: "of happiness" }
    ],
    translations: {
      english: "Even though I am small in size, if I understand the reality, I can enter this city and find happiness.",
      hindi: "भले ही मैं छोटे आकार का हूं, यदि मैं वास्तविकता को समझूं, तो मैं इस नगरी में प्रवेश कर सकता हूं और सुख पा सकता हूं।",
      telugu: "నేను చిన్న పరిమాణంలో ఉన్నప్పటికీ, వాస్తవాన్ని అర్థం చేసుకుంటే, ఈ నగరంలో ప్రవేశించి సంతోషం పొందగలను.",
      tamil: "நான் சிறிய உருவமாக இருந்தாலும், உண்மையை புரிந்துகொண்டால், இந்நகரில் நுழைந்து மகிழ்ச்சி அடையலாம்.",
      malayalam: "ഞാൻ ചെറിയ വലിപ്പമുള്ളവനാണെങ്കിലും, യാഥാർത്ഥ്യം മനസ്സിലാക്കിയാൽ, ഈ നഗരത്തിൽ പ്രവേശിച്ച് സന്തോഷം കണ്ടെത്താൻ കഴിയും.",
      kannada: "ನಾನು ಚಿಕ್ಕ ಗಾತ್ರದವನಾದರೂ, ವಾಸ್ತವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ಈ ನಗರವನ್ನು ಪ್ರವೇಶಿಸಿ ಸಂತೋಷ ಪಡೆಯಬಹುದು."
    },
    summary: {
      english: "Hanuman decides to reduce his size to enter Lanka undetected, showing wisdom over brute force.",
      hindi: "हनुमान बिना पकड़े जाने के लिए अपना आकार छोटा करने का निर्णय लेते हैं, जो बल पर बुद्धि की विजय दर्शाता है।",
      telugu: "హనుమంతుడు గుర్తించబడకుండా లంకలో ప్రవేశించడానికి తన పరిమాణాన్ని తగ్గించాలని నిర్ణయించుకుంటాడు.",
      tamil: "அனுமன் கண்டறியப்படாமல் இலங்கைக்குள் நுழைய தன் உருவத்தை சிறிதாக்க முடிவு செய்கிறான்.",
      malayalam: "ഹനുമാൻ കണ്ടെത്താതെ ലങ്കയിൽ പ്രവേശിക്കാൻ തന്റെ വലിപ്പം കുറയ്ക്കാൻ തീരുമാനിക്കുന്നു.",
      kannada: "ಹನುಮಂತನು ಪತ್ತೆಯಾಗದೆ ಲಂಕೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ತನ್ನ ಗಾತ್ರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನಿರ್ಧರಿಸುತ್ತಾನೆ."
    }
  },
  {
    id: 17,
    image: "/images/sloka-17.jpeg",
    slokaNumber: "5.17",
    sanskrit: "यथा न लक्षये कश्चिद्देवानां वा हि तद्रसौ |\nतथा सर्वं करिष्यामि सीतां पश्यामि चाहम् ||",
    transliteration: "yathā na lakṣaye kaśchiddevānāṁ vā hi tadrasau | tathā sarvaṁ kariṣyāmi sītāṁ paśyāmi chāham ||",
    wordByWord: [
      { word: "यथा (yathā)", meaning: "in such a way that" },
      { word: "न लक्षये (na lakṣaye)", meaning: "not noticed" },
      { word: "कश्चित् (kaśchit)", meaning: "anyone" },
      { word: "देवानाम् (devānām)", meaning: "of the gods" },
      { word: "वा (vā)", meaning: "or" },
      { word: "तथा (tathā)", meaning: "thus" },
      { word: "सर्वम् (sarvam)", meaning: "everything" },
      { word: "करिष्यामि (kariṣyāmi)", meaning: "I will do" },
      { word: "सीताम् (sītām)", meaning: "Sita" },
      { word: "पश्यामि (paśyāmi)", meaning: "I will see" },
      { word: "अहम् (aham)", meaning: "I" }
    ],
    translations: {
      english: "I will do everything in such a way that no one, not even the gods, will notice me, and I will find Sita.",
      hindi: "मैं सब कुछ इस प्रकार करूंगा कि कोई भी, यहाँ तक कि देवता भी मुझे न देख सकें, और मैं सीता को ढूंढ लूंगा।",
      telugu: "దేవతలు కూడా గమనించకుండా అన్నీ చేస్తాను, సీతను చూస్తాను.",
      tamil: "தேவர்கள் கூட கவனிக்காத வகையில் எல்லாவற்றையும் செய்வேன், சீதையை காண்பேன்.",
      malayalam: "ദേവന്മാർ പോലും ശ്രദ്ധിക്കാത്ത വിധം എല്ലാം ചെയ്യും, സീതയെ കാണും.",
      kannada: "ದೇವತೆಗಳು ಸಹ ಗಮನಿಸದ ರೀತಿಯಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ಮಾಡುತ್ತೇನೆ, ಸೀತೆಯನ್ನು ನೋಡುತ್ತೇನೆ."
    },
    summary: {
      english: "Hanuman commits to stealth and finding Sita without being detected by anyone.",
      hindi: "हनुमान गुप्त रूप से कार्य करने और बिना पकड़े गए सीता को खोजने का संकल्प लेते हैं।",
      telugu: "హనుమంతుడు రహస్యంగా పని చేయడానికి మరియు ఎవరికీ తెలియకుండా సీతను కనుగొనడానికి ప్రతిజ్ఞ చేస్తాడు.",
      tamil: "யாருக்கும் தெரியாமல் மறைவாக செயல்பட்டு சீதையை கண்டுபிடிக்க அனுமன் உறுதி கொள்கிறான்.",
      malayalam: "ആർക്കും അറിയാതെ രഹസ്യമായി പ്രവർത്തിച്ച് സീതയെ കണ്ടെത്താൻ ഹനുമാൻ പ്രതിജ്ഞ ചെയ്യുന്നു.",
      kannada: "ಯಾರಿಗೂ ತಿಳಿಯದಂತೆ ರಹಸ್ಯವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿ ಸೀತೆಯನ್ನು ಕಂಡುಹಿಡಿಯಲು ಹನುಮಂತನು ಪ್ರತಿಜ್ಞೆ ಮಾಡುತ್ತಾನೆ."
    }
  },
  {
    id: 18,
    image: "/images/sloka-18.jpeg",
    slokaNumber: "5.18",
    sanskrit: "रात्रिञ्चाहं प्रवेक्ष्यामि पुरीं राक्षसपालिताम् |\nविचेष्टमानः सर्वत्र हनिष्यामि च राक्षसान् ||",
    transliteration: "rātriñchāhaṁ pravekṣyāmi purīṁ rākṣasapālitām | viceṣṭamānaḥ sarvatra haniṣyāmi cha rākṣasān ||",
    wordByWord: [
      { word: "रात्रिम् (rātrim)", meaning: "at night" },
      { word: "च (cha)", meaning: "and" },
      { word: "अहम् (aham)", meaning: "I" },
      { word: "प्रवेक्ष्यामि (pravekṣyāmi)", meaning: "will enter" },
      { word: "पुरीम् (purīm)", meaning: "the city" },
      { word: "राक्षसपालिताम् (rākṣasapālitām)", meaning: "protected by demons" },
      { word: "विचेष्टमानः (viceṣṭamānaḥ)", meaning: "moving about" },
      { word: "सर्वत्र (sarvatra)", meaning: "everywhere" },
      { word: "हनिष्यामि (haniṣyāmi)", meaning: "I will destroy" },
      { word: "राक्षसान् (rākṣasān)", meaning: "the demons" }
    ],
    translations: {
      english: "I will enter this demon-guarded city at night, and moving about everywhere, I will destroy the demons.",
      hindi: "मैं रात में इस राक्षस-रक्षित नगरी में प्रवेश करूंगा, और हर जगह घूमते हुए राक्षसों का विनाश करूंगा।",
      telugu: "రాత్రి ఈ రాక్షస రక్షిత నగరంలో ప్రవేశించి, అంతటా తిరుగుతూ రాక్షసులను నాశనం చేస్తాను.",
      tamil: "இரவில் இந்த அரக்கர் காவலுள்ள நகரில் நுழைந்து, எங்கும் சென்று அரக்கர்களை அழிப்பேன்.",
      malayalam: "രാത്രിയിൽ ഈ രാക്ഷസ സംരക്ഷിത നഗരത്തിൽ പ്രവേശിച്ച്, എല്ലായിടത്തും സഞ്ചരിച്ച് രാക്ഷസരെ നശിപ്പിക്കും.",
      kannada: "ರಾತ್ರಿಯಲ್ಲಿ ಈ ರಾಕ್ಷಸ ರಕ್ಷಿತ ನಗರವನ್ನು ಪ್ರವೇಶಿಸಿ, ಎಲ್ಲೆಡೆ ಚಲಿಸಿ ರಾಕ್ಷಸರನ್ನು ನಾಶಮಾಡುತ್ತೇನೆ."
    },
    summary: {
      english: "Hanuman plans to enter Lanka under the cover of darkness and unleash destruction on the demons.",
      hindi: "हनुमान अंधेरे की आड़ में लंका में प्रवेश करने और राक्षसों पर विनाश करने की योजना बनाते हैं।",
      telugu: "హనుమంతుడు చీకటిలో లంకలో ప్రవేశించి రాక్షసులపై విధ్వంసం సృష్టించాలని ప్లాన్ చేస్తాడు.",
      tamil: "அனுமன் இருளின் மறைவில் இலங்கைக்குள் நுழைந்து அரக்கர்களை அழிக்கத் திட்டமிடுகிறான்.",
      malayalam: "ഇരുട്ടിന്റെ മറവിൽ ലങ്കയിൽ പ്രവേശിച്ച് രാക്ഷസരെ നശിപ്പിക്കാൻ ഹനുമാൻ പദ്ധതിയിടുന്നു.",
      kannada: "ಹನುಮಂತನು ಕತ್ತಲೆಯ ಮರೆಯಲ್ಲಿ ಲಂಕೆಯನ್ನು ಪ್ರವೇಶಿಸಿ ರಾಕ್ಷಸರ ಮೇಲೆ ವಿನಾಶವನ್ನು ಸೃಷ್ಟಿಸಲು ಯೋಜಿಸುತ್ತಾನೆ."
    }
  },
  {
    id: 19,
    image: "/images/sloka-19.jpeg",
    slokaNumber: "5.19",
    sanskrit: "सोऽपश्यत्तां पुरीं लङ्कां दक्षिणस्याम्भवद्धिशि |\nसंस्थितां गिरिशृङ्गस्य मध्ये वैश्रवणालयाम् ||",
    transliteration: "so'paśyattāṁ purīṁ laṅkāṁ dakṣiṇasyāmbhavaddhiśi | saṁsthitāṁ giriśṛṅgasya madhye vaiśravaṇālayām ||",
    wordByWord: [
      { word: "सः (saḥ)", meaning: "he" },
      { word: "अपश्यत् (apaśyat)", meaning: "saw" },
      { word: "ताम् (tām)", meaning: "that" },
      { word: "पुरीम् (purīm)", meaning: "city" },
      { word: "लङ्काम् (laṅkām)", meaning: "Lanka" },
      { word: "दक्षिणस्य (dakṣiṇasya)", meaning: "of the south" },
      { word: "दिशि (diśi)", meaning: "in the direction" },
      { word: "संस्थिताम् (saṁsthitām)", meaning: "situated" },
      { word: "गिरिशृङ्गस्य (giriśṛṅgasya)", meaning: "of the mountain peak" },
      { word: "मध्ये (madhye)", meaning: "in the middle" },
      { word: "वैश्रवणालयाम् (vaiśravaṇālayām)", meaning: "abode of Kubera (now Ravana's)" }
    ],
    translations: {
      english: "He saw that city of Lanka situated in the southern direction, on the mountain peak, the former abode of Kubera.",
      hindi: "उसने दक्षिण दिशा में पर्वत शिखर पर स्थित उस लंका नगरी को देखा, जो कुबेर का पूर्व निवास था।",
      telugu: "అతను దక్షిణ దిశలో పర్వత శిఖరంపై ఉన్న ఆ లంకా నగరాన్ని చూశాడు, అది కుబేరుని పూర్వ నివాసం.",
      tamil: "தெற்கு திசையில் மலை உச்சியில் அமைந்த அந்த இலங்கை நகரை அவன் கண்டான், அது குபேரனின் முன்னாள் இருப்பிடம்.",
      malayalam: "തെക്ക് ദിശയിൽ പർവത ശിഖരത്തിൽ സ്ഥിതി ചെയ്യുന്ന ആ ലങ്ക നഗരം അദ്ദേഹം കണ്ടു, അത് കുബേരന്റെ മുൻ വസതിയായിരുന്നു.",
      kannada: "ದಕ್ಷಿಣ ದಿಕ್ಕಿನಲ್ಲಿ ಪರ್ವತ ಶಿಖರದ ಮೇಲೆ ಇರುವ ಆ ಲಂಕಾ ನಗರವನ್ನು ಅವನು ನೋಡಿದನು, ಅದು ಕುಬೇರನ ಹಿಂದಿನ ನಿವಾಸವಾಗಿತ್ತು."
    },
    summary: {
      english: "Hanuman finally sees Lanka on the mountain peak, noting its grandeur as the former kingdom of Kubera.",
      hindi: "हनुमान अंततः पर्वत शिखर पर लंका को देखते हैं और कुबेर के पूर्व राज्य के रूप में इसकी भव्यता को नोट करते हैं।",
      telugu: "హనుమంతుడు చివరకు పర్వత శిఖరంపై లంకను చూస్తాడు, కుబేరుని పూర్వ రాజ్యంగా దాని వైభవాన్ని గమనిస్తాడు.",
      tamil: "அனுமன் இறுதியாக மலை உச்சியில் இலங்கையை காண்கிறான், குபேரனின் முன்னாள் ராஜ்யமாக அதன் மகத்துவத்தை குறிப்பிடுகிறான்.",
      malayalam: "ഹനുമാൻ ഒടുവിൽ പർവത ശിഖരത്തിൽ ലങ്ക കാണുന്നു, കുബേരന്റെ മുൻ രാജ്യമായി അതിന്റെ മഹത്വം ശ്രദ്ധിക്കുന്നു.",
      kannada: "ಹನುಮಂತನು ಅಂತಿಮವಾಗಿ ಪರ್ವತ ಶಿಖರದ ಮೇಲೆ ಲಂಕೆಯನ್ನು ನೋಡುತ್ತಾನೆ, ಕುಬೇರನ ಹಿಂದಿನ ರಾಜ್ಯವಾಗಿ ಅದರ ವೈಭವವನ್ನು ಗಮನಿಸುತ್ತಾನೆ."
    }
  },
  {
    id: 20,
    image: "/images/sloka-20.jpeg",
    slokaNumber: "5.20",
    sanskrit: "प्राकारेणार्कवर्णेन भास्वरेण विराजिताम् |\nहेमकाञ्चनपट्टाढ्यां दिव्यपुष्पोपशोभिताम् ||",
    transliteration: "prākāreṇārkavarṇena bhāsvareṇa virājitām | hemakāñchanapaṭṭāḍhyāṁ divyapuṣpopaśobhitām ||",
    wordByWord: [
      { word: "प्राकारेण (prākāreṇa)", meaning: "with walls" },
      { word: "अर्कवर्णेन (arkavarṇena)", meaning: "sun-colored" },
      { word: "भास्वरेण (bhāsvareṇa)", meaning: "shining/radiant" },
      { word: "विराजिताम् (virājitām)", meaning: "adorned" },
      { word: "हेमकाञ्चनपट्टाढ्याम् (hemakāñchanapaṭṭāḍhyām)", meaning: "rich with gold ornaments" },
      { word: "दिव्यपुष्पोपशोभिताम् (divyapuṣpopaśobhitām)", meaning: "decorated with divine flowers" }
    ],
    translations: {
      english: "The city was adorned with walls of sun-like radiance, rich with golden ornaments and decorated with divine flowers.",
      hindi: "वह नगरी सूर्य जैसी चमकदार दीवारों से सजी थी, सोने के आभूषणों से समृद्ध और दिव्य फूलों से सुशोभित थी।",
      telugu: "ఆ నగరం సూర్యుని వంటి ప్రకాశవంతమైన గోడలతో అలంకరించబడి, బంగారు ఆభరణాలతో సమృద్ధిగా మరియు దివ్య పుష్పాలతో అలంకరించబడింది.",
      tamil: "அந்நகரம் சூரியனைப் போன்ற ஒளிரும் சுவர்களால் அலங்கரிக்கப்பட்டு, தங்க ஆபரணங்களால் செழிப்பாகவும் தெய்வீக மலர்களால் அலங்கரிக்கப்பட்டதாகவும் இருந்தது.",
      malayalam: "ആ നഗരം സൂര്യനെപ്പോലെ പ്രകാശിക്കുന്ന മതിലുകളാൽ അലങ്കരിക്കപ്പെട്ട്, സ്വർണ്ണാഭരണങ്ങളാൽ സമ്പന്നവും ദിവ്യ പുഷ്പങ്ങളാൽ അലങ്കൃതവുമായിരുന്നു.",
      kannada: "ಆ ನಗರವು ಸೂರ್ಯನಂತೆ ಹೊಳೆಯುವ ಗೋಡೆಗಳಿಂದ ಅಲಂಕರಿಸಲ್ಪಟ್ಟು, ಚಿನ್ನದ ಆಭರಣಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿ ಮತ್ತು ದಿವ್ಯ ಹೂವುಗಳಿಂದ ಅಲಂಕೃತವಾಗಿತ್ತು."
    },
    summary: {
      english: "Description of Lanka's magnificent beauty with golden walls and celestial decorations.",
      hindi: "सोने की दीवारों और दिव्य सजावट के साथ लंका की भव्य सुंदरता का वर्णन।",
      telugu: "బంగారు గోడలు మరియు దివ్య అలంకారాలతో లంక యొక్క అద్భుత సౌందర్యం వర్ణన.",
      tamil: "தங்க சுவர்கள் மற்றும் தெய்வீக அலங்காரங்களுடன் இலங்கையின் அற்புத அழகு விவரணை.",
      malayalam: "സ്വർണ്ണ മതിലുകളും ദിവ്യ അലങ്കാരങ്ങളും ഉള്ള ലങ്കയുടെ മഹത്തായ സൗന്ദര്യത്തിന്റെ വിവരണം.",
      kannada: "ಚಿನ್ನದ ಗೋಡೆಗಳು ಮತ್ತು ದಿವ್ಯ ಅಲಂಕಾರಗಳೊಂದಿಗೆ ಲಂಕೆಯ ಅದ್ಭುತ ಸೌಂದರ್ಯದ ವಿವರಣೆ."
    }
  }
];

export const languages = [
  { code: "english", name: "English", nativeName: "English" },
  { code: "hindi", name: "Hindi", nativeName: "हिंदी" },
  { code: "telugu", name: "Telugu", nativeName: "తెలుగు" },
  { code: "tamil", name: "Tamil", nativeName: "தமிழ்" },
  { code: "malayalam", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "kannada", name: "Kannada", nativeName: "ಕನ್ನಡ" }
] as const;

export type LanguageCode = typeof languages[number]["code"];
