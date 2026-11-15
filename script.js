const frontPage = document.getElementById("frontPage");
const movie = document.getElementById("movie");
const beginButton = document.getElementById("beginButton");
const sceneImage = document.getElementById("sceneImage");

const chapterCard = document.getElementById("chapterCard");
const chapterEyebrow = document.getElementById("chapterEyebrow");
const chapterTitle = document.getElementById("chapterTitle");
const chapterSubtitle = document.getElementById("chapterSubtitle");

const speakerPortrait = document.getElementById("speakerPortrait");
const characterImage = document.getElementById("characterImage");

const speakerName = document.getElementById("speakerName");
const dialogueText = document.getElementById("dialogueText");

const nextButton = document.getElementById("nextButton");
const muteButton = document.getElementById("muteButton");
const progress = document.getElementById("progress");

let currentLine = 0;
let muted = false;
let finished = false;

const characterImages = {
    Emma: "emma.jpg",
    Maya: "maya.jpg",
    Ryan: "ryan.jpg",
    Teacher: "assignment.jpg"
};

// STORY

const story = [

    // PROLOGUE

    {
        type: "card",
        chapter: "PROLOGUE",
        title: "THE SILENT EXPLORERS",
        subtitle: "The machines. The discoveries. The unknown.",
        image: "Earth.png"
    },
    {
        speaker: "Narrator",
        text: "For more than half a century, humanity has sent machines beyond Earth.",
        image: "Earth.png"
    },
    {
        speaker: "Narrator",
        text: "Some landed on distant worlds. Some explored the Moon. Others travelled farther than anyone could imagine.",
        image: "star.jpg"
    },
    {
        speaker: "Narrator",
        text: "But what happens to these machines when their missions come to an end?",
        image: "star.jpg"
    },

    // CHAPTER ONE: ASSIGNMENT

    {
        type: "card",
        chapter: "CHAPTER ONE",
        title: "THE ASSIGNMENT",
        subtitle: "Every great discovery begins with a question.",
        image: "classroom.jpg"
    },
    {
        speaker: "Narrator",
        text: "At a school, a group of students received an interesting assignment.",
        image: "classroom.jpg"
    },
    {
        speaker: "Teacher",
        text: "Class, your next project will be a science exhibition about space exploration.",
        image: "assignment.jpg"
    },
    {
        speaker: "Teacher",
        text: "I want you to explore the machines humans have sent into space and discover what they have taught us.",
        image: "assignment.jpg"
    },
    {
        speaker: "Emma",
        text: "Machines left in space? What happens to them after their missions end?",
        image: "emma.jpg"
    },
    {
        speaker: "Maya",
        text: "That's actually interesting! Have some of them been there for decades?",
        image: "mayatalking.jpg"
    },
    {
        speaker: "Ryan",
        text: "And did they really discover anything important?",
        image: "ryan.jpg"
    },
    {
        speaker: "Teacher",
        text: "Those are exactly the questions I want you to investigate.",
        image: "assignment.jpg"
    },
    {
        speaker: "Narrator",
        text: "The students began planning their exhibition. But Emma wanted to understand the stories behind the machines.",
        image: "planning.jpg"
    },
    {
        speaker: "Narrator",
        text: "She called her friends and began researching the forgotten explorers of space.",
        image: "mayaryanemma.jpg"
    },
    {
        speaker: "Emma",
        text: "I wonder how many discoveries are still hidden in their stories.",
        image: "mayaryanemma.jpg"
    },

    // CHAPTER TWO: THE MOON

    {
        type: "card",
        chapter: "CHAPTER TWO",
        title: "THE MOON",
        subtitle: "The machines humanity left behind.",
        image: "moon.jpg"
    },
    {
        speaker: "Narrator",
        text: "Our journey begins on the Moon, where astronauts and robotic missions left equipment behind.",
        image: "moon.jpg"
    },

    // LUNAR ROVING VEHICLES

    {
        speaker: "Narrator",
        text: "During the Apollo missions, astronauts used special electric vehicles called Lunar Roving Vehicles.",
        image: "lunar rover.jpg"
    },
    {
        speaker: "Narrator",
        text: "These small vehicles helped astronauts travel farther across the lunar surface and collect samples.",
        image: "lunar rover.jpg"
    },
    {
        speaker: "Narrator",
        text: "The rover was built from several important systems: a lightweight aluminium frame, four wire-mesh wheels, electric drive motors, batteries, steering motors, navigation equipment and a television camera. The mesh wheels gave it grip on the Moon's loose soil while keeping the vehicle light.",
        image: "lunar rover.jpg"
    },
    {
        speaker: "Narrator",
        text: "Its motors converted electrical energy from the batteries into motion. Because the Moon has no usable atmosphere and lower gravity than Earth, engineers had to design a vehicle that could work in a vacuum, handle extreme temperatures and stay stable on uneven ground.",
        image: "lunar rover.jpg"
    },
    {
        speaker: "Emma",
        text: "Wait! They actually drove cars on the Moon?",
        image: "mayahappy.jpg"
    },
    {
        speaker: "Maya",
        text: "What happened to those vehicles after the astronauts went home?",
        image: "emmaconfused.jpg"
    },
    {
        speaker: "Narrator",
        text: "The rovers remained on the Moon. They were never brought back to Earth.",
        image: "lunar rover.jpg"
    },

    // APOLLO DESCENT STAGES

    {
        speaker: "Narrator",
        text: "The astronauts also left behind the lower parts of their Lunar Modules, called descent stages.",
        image: "apollo-descent.jpg"
    },
    {
        speaker: "Narrator",
        text: "These stages carried astronauts down to the lunar surface. They also served as the launch platforms for the astronauts' return journey.",
        image: "journey.jpg"
    },
    {
        speaker: "Narrator",
        text: "The descent stage contained a rocket engine, fuel and oxidizer tanks, landing legs, radar equipment and computers. A rocket works by throwing hot gas backwards; the reaction force pushes the spacecraft in the opposite direction. This is how it could slow down and descend where there was no air for wings or parachutes.",
        image: "equipment.jpg"
    },
    {
        speaker: "Narrator",
        text: "Radar measured the spacecraft's height and speed above the surface. Astronauts and the guidance system used that information to control the engine and make a careful landing. The ascent stage later separated and used its own rocket engine to lift the astronauts back into lunar orbit.",
        image: "apollo-descent.jpg"
    },
    {
        speaker: "Ryan",
        text: "So even the spacecraft that landed them on the Moon became part of the Moon's history?",
        image: "ryanhappy.jpg"
    },

    // ALSEP

    {
        speaker: "Narrator",
        text: "Apollo astronauts also placed scientific equipment on the Moon. Some missions carried a collection called the Apollo Lunar Surface Experiments Package, or ALSEP.",
        image: "alsep.jpg"
    },
    {
        speaker: "Narrator",
        text: "These instruments measured things such as moonquakes and the Moon's environment.",
        image: "alsep.jpg"
    },
    {
        speaker: "Narrator",
        text: "ALSEP was not just one machine. Depending on the Apollo mission, it included instruments such as a seismometer to detect moonquakes, a magnetometer to measure magnetic fields, and experiments that studied heat moving through the lunar ground and particles arriving from the Sun.",
        image: "alsep.jpg"
    },
    {
        speaker: "Narrator",
        text: "A seismometer works by detecting ground motion. When a moonquake sends vibrations through the Moon, the instrument records them. Scientists study how those waves travel and change to work out what the Moon is like beneath its surface. Other sensors used electricity, magnetic effects and temperature measurements to study the lunar environment.",
        image: "alsep.jpg"
    },
    {
        speaker: "Narrator",
        text: "The equipment sent scientific information back to Earth until the experiments were switched off in 1977.",
        image: "alsep.jpg"
    },
    {
        speaker: "Emma",
        text: "They were collecting information even when nobody was there?",
        image: "mayahappy.jpg"
    },
    {
        speaker: "Narrator",
        text: "Exactly. Their measurements helped scientists understand the Moon's interior and how it behaves.",
        image: "alsep.jpg"
    },

    // SURVEYOR

    {
        speaker: "Narrator",
        text: "Before astronauts walked on the Moon, NASA sent robotic Surveyor landers to test whether spacecraft could land there safely.",
        image: "surveyor.jpg"
    },
    {
        speaker: "Narrator",
        text: "Surveyor 1 achieved the first successful soft landing by an American spacecraft on the Moon in 1966.",
        image: "surveyor.jpg"
    },
    {
        speaker: "Narrator",
        text: "Surveyor landers carried cameras, antennas, solar panels, landing legs and instruments. During descent, radar helped measure altitude and speed. A retrorocket slowed the spacecraft, and smaller control rockets helped guide it toward the surface.",
        image: "camera.jpg"
    },
    {
        speaker: "Narrator",
        text: "This was an engineering test as much as a science mission. Engineers needed to learn whether the lunar soil could support a lander, how spacecraft behaved near the surface and whether equipment could survive the Moon's harsh conditions before sending astronauts.",
        image: "surveyor.jpg"
    },
    {
        speaker: "Narrator",
        text: "The Surveyor missions photographed the lunar surface and helped engineers prepare for the Apollo landings.",
        image: "surveyor.jpg"
    },
    {
        speaker: "Narrator",
        text: "In 1969, Apollo 12 astronauts visited Surveyor 3 and brought some of its parts back to Earth for examination.",
        image: "surveyor.jpg"
    },
    {
        speaker: "Maya",
        text: "So a robot explored the landing site before humans went there?",
        image: "mayahappy.jpg"
    },
    {
        speaker: "Narrator",
        text: "Yes. Robotic explorers helped make human exploration safer and more informed.",
        image: "surveyor.jpg"
    },

    // CHAPTER THREE: MARS

    {
        type: "card",
        chapter: "CHAPTER THREE",
        title: "MARS",
        subtitle: "Robotic explorers on another world.",
        image: "mards.jpg"
    },
    {
        speaker: "Narrator",
        text: "Next, we travel to Mars, a planet that has been explored by many robotic machines.",
        image: "mars.jpg"
    },

    // VIKING

    {
        speaker: "Narrator",
        text: "In 1976, NASA's Viking 1 and Viking 2 landers safely reached the surface of Mars.",
        image: "viking.jpg"
    },
    {
        speaker: "Narrator",
        text: "They took photographs, studied the weather, and tested Martian soil.",
        image: "viking.jpg"
    },
    {
        speaker: "Narrator",
        text: "Each Viking lander had a camera system, weather sensors, a robotic sampling arm, a biology laboratory, an antenna and solar panels. The arm scooped up Martian soil and delivered it to instruments inside the lander, where scientists could test its properties.",
        image: "soil.jpg"
    },
    {
        speaker: "Narrator",
        text: "The landers also needed a carefully designed arrival system. A heat shield protected them from frictional heating during entry, a parachute reduced their speed, and retrorockets slowed them further before touchdown. These systems used atmospheric drag and rocket thrust to control the landing.",
        image: "viking.jpg"
    },
    {
        speaker: "Narrator",
        text: "The Viking landers also carried experiments designed to search for signs of life. Their results did not provide clear evidence of living organisms.",
        image: "viking.jpg"
    },
    {
        speaker: "Emma",
        text: "They were already searching for life on Mars back in the 1970s?",
        image: "mayahappy.jpg"
    },
    {
        speaker: "Narrator",
        text: "Yes. Their experiments and photographs gave scientists a much closer look at the Red Planet.",
        image: "viking.jpg"
    },
        // SOJOURNER

    {
        speaker: "Narrator",
        text: "In 1997, NASA's Sojourner became the first successful rover to explore the Martian surface.",
        image: "martian.jpg"
    },
    {
        speaker: "Narrator",
        text: "It studied nearby rocks and helped scientists understand the planet's surface.",
        image: "sojourner.jpg"
    },
    {
        speaker: "Narrator",
        text: "Sojourner carried six wheels, electric motors, cameras, a laser-based range finder and an Alpha Proton X-ray Spectrometer, which scientists called APXS. The APXS studied the elements in rocks and soil by measuring particles and X-rays produced when the sample was exposed to radiation from the instrument.",
        image: "rock.jpg"
    },
    {
        speaker: "Narrator",
        text: "Its rocker-bogie suspension linked the wheels so they could move over rocks and dips while keeping the body relatively steady. This mechanical design helped the small rover cross rough ground without needing a human driver to steer it every second.",
        image: "sojourner.jpg"
    },
    {
        speaker: "Narrator",
        text: "Sojourner sent information to the Pathfinder lander by radio. The lander then relayed it to Earth. Radio waves travel at the speed of light, but because Mars is so far away, the signal still takes minutes to make the journey. That delay is why the rover needed onboard control and careful instructions.",
        image: "sojourner.jpg"
    },
    {
        speaker: "Emma",
        text: "It was so small! And it was exploring an entire planet?",
        image: "mayahappy.jpg"
    },

    // SPIRIT AND OPPORTUNITY

    {
        speaker: "Narrator",
        text: "Later, Spirit and Opportunity travelled across Mars and found evidence that liquid water had once existed there.",
        image: "spirit.jpg"
    },
    {
        speaker: "Narrator",
        text: "Spirit explored Mars until 2010, while Opportunity continued working until 2018. Both rovers made important discoveries about the planet's past.",
        image: "opportunity.jpg.png"
    },
    {
        speaker: "Narrator",
        text: "Spirit and Opportunity were powered mainly by solar panels. Their cameras helped them choose targets, while spectrometers studied the minerals in rocks. A robotic arm carried tools, including a rock abrasion tool that brushed or ground away the dusty outer layer so instruments could examine fresh material.",
        image: "opportunity.jpg.png"
    },
    {
        speaker: "Narrator",
        text: "To land safely, airbags inflated around each rover after its parachute and retrorockets slowed the spacecraft. The protected rover bounced across the surface, then the airbags deflated and the rover unfolded. This unusual landing system helped protect the machines from the impact.",
        image: "land.jpg"
    },
    {
        speaker: "Ryan",
        text: "Two rovers exploring the same planet and making discoveries?",
        image: "ryanhappy.jpg"
    },

    // PHOENIX

    {
        speaker: "Narrator",
        text: "In 2008, another spacecraft called Phoenix landed in the Martian Arctic.",
        image: "phoenix.jpg"
    },
    {
        speaker: "Narrator",
        text: "Its robotic arm dug into the soil and found water ice just below the surface.",
        image: "phoenix.jpg"
    },
    {
        speaker: "Narrator",
        text: "Phoenix had a long robotic arm with a scoop, cameras, a weather station and instruments that analysed soil and ice. Its Thermal and Evolved-Gas Analyzer heated samples in tiny ovens and examined the gases released. This helped scientists identify water and learn about chemicals in the soil.",
        image: "phoenix.jpg"
    },
    {
        speaker: "Narrator",
        text: "The science behind the discovery was simple but powerful: heating a sample can make frozen or trapped substances turn into gas. By measuring which gases appeared and at what temperatures, scientists could work out what the Martian soil contained.",
        image: "phoenix.jpg"
    },
    {
        speaker: "Maya",
        text: "So there is frozen water on Mars, not just on Earth?",
        image: "mayaryanemma.jpg"
    },
    {
        speaker: "Narrator",
        text: "That's right. Phoenix helped confirm that water ice exists beneath the Martian surface.",
        image: "phoenix.jpg"
    },

    // INSIGHT

    {
        speaker: "Narrator",
        text: "The InSight lander studied the inside of Mars and detected marsquakes.",
        image: "mars.jpg"
    },
    {
        speaker: "Maya",
        text: "So we can study the inside of a planet without actually digging into it?",
        image: "mayaryanemma.jpg"
    },
    {
        speaker: "Narrator",
        text: "Yes. InSight used a seismometer to detect vibrations travelling through the planet.",
        image: "seisometer.jpg"
    },
    {
        speaker: "Narrator",
        text: "InSight carried a very sensitive seismometer called SEIS, a heat-flow probe called the mole, and radio equipment used to track tiny changes in the lander's position. The seismometer detected waves from marsquakes and meteorite impacts. The heat probe was designed to measure how heat moves out from the planet's interior.",
        image: "mars.jpg"
    },
    {
        speaker: "Narrator",
        text: "The science is similar to using sound to learn about a hidden space: seismic waves travel differently through different materials. By measuring their timing and strength, scientists can estimate the layers and structure deep inside Mars. The mole struggled to dig as planned, but the seismometer still returned valuable results.",
        image: "mars.jpg"
    },

    // INGENUITY

    {
        speaker: "Narrator",
        text: "Another explorer was Ingenuity, a small helicopter designed to fly on Mars.",
        image: "Ingenuity.jpg"
    },
    {
        speaker: "Narrator",
        text: "It completed 72 flights, proving that powered flight was possible on another planet.",
        image: "Ingenuity.jpg"
    },
    {
        speaker: "Narrator",
        text: "Ingenuity had two pairs of carbon-fibre rotor blades, arranged one above the other and spinning in opposite directions. A solar panel charged its batteries, while a small computer, cameras and navigation sensors helped it control its flights without a pilot.",
        image: "Ingenuity.jpg"
    },
    {
        speaker: "Narrator",
        text: "A helicopter flies by pushing air down with its rotor blades; the air pushes the helicopter upward. Mars has a very thin atmosphere, so Ingenuity's blades had to spin much faster than helicopter blades on Earth and were specially designed to create enough lift in that thin air.",
        image: "Ingenuity.jpg"
    },
    {
        speaker: "Ryan",
        text: "A helicopter on Mars? That's incredible!",
        image: "ryanhappy.jpg"
    },

    // CHAPTER FOUR: BEYOND THE PLANETS

    {
        type: "card",
        chapter: "CHAPTER FOUR",
        title: "BEYOND THE PLANETS",
        subtitle: "Exploring the distant unknown.",
        image: "Voyagerrecord.jpg"
    },
    {
        speaker: "Narrator",
        text: "Not every spacecraft landed on a planet. Some travelled through space for years.",
        image: "Voyager3.jpg"
    },

    // PIONEER 10 AND 11

    {
        speaker: "Narrator",
        text: "Before Voyager, NASA sent two important explorers called Pioneer 10 and Pioneer 11.",
        image: "pioneer.jpg"
    },
    {
        speaker: "Narrator",
        text: "Pioneer 10 became the first spacecraft to fly past Jupiter. Pioneer 11 later explored Jupiter and became the first spacecraft to fly past Saturn.",
        image: "pioneer.jpg"
    },
    {
        speaker: "Narrator",
        text: "Pioneer spacecraft carried scientific instruments to measure magnetic fields, charged particles, cosmic rays and the conditions around the giant planets. Their radio antennas sent the measurements to Earth, while their spinning motion helped keep them stable as they travelled.",
        image: "pioneer.jpg"
    },
    {
        speaker: "Narrator",
        text: "Pioneer 10 and 11 used radioisotope thermoelectric generators for electrical power. These devices turned heat from the natural decay of plutonium into electricity. That mattered because sunlight becomes much weaker far from the Sun, making ordinary solar panels less useful.",
        image: "painful.jpg"
    },
    {
        speaker: "Narrator",
        text: "Both spacecraft continued travelling outward after their planetary encounters. Their missions eventually ended when communication with Earth was lost.",
        image: "lost.jpg"
    },
    {
        speaker: "Emma",
        text: "So they were exploring the outer Solar System before Voyager even began its journey?",
        image: "mayaryanemma.jpg"
    },

    // VOYAGER

    {
        speaker: "Narrator",
        text: "The Voyager spacecraft explored the outer planets and continued travelling far beyond them.",
        image: "Voyager3.jpg"
    },
    {
        speaker: "Narrator",
        text: "Voyager carried cameras, infrared and ultraviolet sensors, plasma instruments, magnetometers and cosmic-ray detectors. Together, these instruments studied planets, moons, magnetic fields, charged particles and the space between the planets. Its high-gain antenna focused radio signals toward Earth.",
        image: "Voyager3.jpg"
    },
    {
        speaker: "Narrator",
        text: "Voyager's path was planned around a rare arrangement of the outer planets. By flying close to a planet at the right angle, the spacecraft could use a gravity assist: the planet's gravity changed the spacecraft's direction and speed, allowing it to continue toward another world while saving fuel.",
        image: "Voyager3.jpg"
    },
    {
        speaker: "Emma",
        text: "Are they still travelling even though they were launched so long ago?",
        image: "mayaryanemma.jpg"
    },
    {
        speaker: "Narrator",
        text: "Yes. Voyager 1 and Voyager 2 have travelled into interstellar space.",
        image: "palebluedot.png"
    },

    // DAWN

    {
        speaker: "Narrator",
        text: "Other spacecraft, such as Dawn, explored worlds in the asteroid belt, including Vesta and Ceres.",
        image: "deepspace.jpg"
    },
    {
        speaker: "Narrator",
        text: "Dawn carried framing cameras to map the surfaces, a visible and infrared spectrometer to identify minerals, and a gamma-ray and neutron detector to study elements near the surface. These instruments used light and particles coming from the asteroids to reveal what they were made of.",
        image: "deepspace.jpg"
    },

    // NEAR SHOEMAKER

    {
        speaker: "Narrator",
        text: "Another explorer, NEAR Shoemaker, travelled to the asteroid Eros and became the first spacecraft to orbit an asteroid.",
        image: "near-shoemaker.jpg"
    },
    {
        speaker: "Narrator",
        text: "NEAR Shoemaker carried cameras, a laser rangefinder, magnetometer, X-ray and gamma-ray spectrometers, and a near-infrared spectrometer. The camera mapped the asteroid, while the laser measured distance and shape. The spectrometers helped identify the elements and minerals on its surface.",
        image: "near-shoemaker.jpg"
    },
    {
        speaker: "Narrator",
        text: "To reach and orbit Eros, the spacecraft used rocket thrusters for course changes and carefully adjusted its speed. Once in orbit, gravity kept it circling the asteroid. Scientists combined images, distance measurements and spectra to build a much clearer picture of this small rocky world.",
        image: "orbit.jpg"
    },
    {
        speaker: "Narrator",
        text: "In 2001, it made an unexpected achievement: it landed on the asteroid, even though it had not originally been designed to land.",
        image: "aestroid.jpg"
    },
    {
        speaker: "Narrator",
        text: "It survived the landing and continued sending valuable scientific data for about two weeks.",
        image: "near-shoemaker.jpg"
    },
    {
        speaker: "Ryan",
        text: "It landed on an asteroid? That's incredible!",
        image: "ryanhappy.jpg"
    },
        // DAWN AND KEPLER

    {
        speaker: "Narrator",
        text: "The Dawn spacecraft helped scientists study the history of our Solar System by exploring Vesta and dwarf planet Ceres.",
        image: "Voyager3.jpg"
    },
    {
        speaker: "Narrator",
        text: "Kepler helped discover thousands of planets beyond our Solar System.",
        image: "kelper.jpg"
    },
    {
        speaker: "Narrator",
        text: "Kepler's main instrument was a photometer: a very sensitive telescope and camera that measured the brightness of more than 100,000 stars. It did not need to photograph each planet directly. Instead, it watched for a tiny, repeated dip in a star's light.",
        image: "kelper.jpg"
    },
    {
        speaker: "Narrator",
        text: "This is called the transit method. When a planet passes between its star and the telescope, it blocks a small amount of starlight. The size and timing of the dip can help scientists estimate the planet's size and the length of its orbit. That is how Kepler found so many worlds too faint and distant to see directly.",
        image: "transit.jpg"
    },
    {
        speaker: "Maya",
        text: "So even machines that are far away can change what we know about the universe?",
        image: "mayahappy.jpg"
    },

    // CHAPTER FIVE: EXHIBITION

    {
        type: "card",
        chapter: "CHAPTER FIVE",
        title: "THE EXHIBITION",
        subtitle: "Every machine has a story to tell.",
        image: "exhibition.jpg"
    },
    {
        speaker: "Narrator",
        text: "After researching the machines, the students finally understood how important these explorers were.",
        image: "exhibition.jpg"
    },
    {
        speaker: "Narrator",
        text: "They brought their discoveries together and prepared their school exhibition.",
        image: "exhibition.jpg"
    },
    {
        speaker: "Emma",
        text: "I thought these were just old machines left behind. But they helped us understand entire worlds!",
        image: "exhibitionmaya.jpg"
    },
    {
        speaker: "Ryan",
        text: "And every machine has its own story.",
        image: "exhibitionryan.jpg"
    },
    {
        speaker: "Maya",
        text: "Some missions ended, but their discoveries are still important.",
        image: "exhibition.jpg"
    },

    // ENDING

    {
        type: "card",
        chapter: "FINAL CHAPTER",
        title: "WHAT REMAINS?",
        subtitle: "A question for the future.",
        image: "Earth.png"
    },
    {
        speaker: "Narrator",
        text: "From the Moon to Mars, and from distant planets to interstellar space, these machines carried humanity's curiosity into the unknown.",
        image: "Voyager3.jpg"
    },
    {
        speaker: "Narrator",
        text: "Their missions may have ended, but the knowledge they gathered continues to shape our understanding of the universe.",
        image: "Earth.png"
    },
    {
        speaker: "Emma",
        text: "Maybe these machines are more than just explorers. They're reminders of what humanity can achieve.",
        image: "palebluedot.png"
    },
    {
        speaker: "Narrator",
        text: "If humanity disappeared tomorrow, what would our machines tell the universe about us?",
        image: "deepspace.jpg"
    },
    {
        speaker: "Narrator",
        text: "Our missions may end. What we learn can travel further.",
        image: "Earth.png"
    }
];

// SPEECH

let availableVoices = [];
let selectedVoices = {};

const speechSupported =
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;

function loadVoices() {
    if (!speechSupported) return;

    availableVoices = window.speechSynthesis.getVoices()
        .filter(voice => voice.lang.toLowerCase().startsWith("en"));
}

const voicePreferences = {
    Narrator: ["Daniel", "Alex", "Google UK English Male"],
    Emma: ["Samantha", "Ava", "Google US English Female"],
    Maya: ["Victoria", "Karen", "Moira", "Google UK English Female"],
    Ryan: ["Oliver", "Arthur", "Fred", "Google US English Male"],
    Teacher: ["Fiona", "Tessa", "Kate", "Google UK English Female"]
};

const voiceSettings = {
    Narrator: { rate: 0.86, pitch: 0.82, volume: 1 },
    Emma:     { rate: 0.96, pitch: 1.12, volume: 1 },
    Maya:     { rate: 1.00, pitch: 1.20, volume: 1 },
    Ryan:     { rate: 0.97, pitch: 0.95, volume: 1 },
    Teacher:  { rate: 0.91, pitch: 0.93, volume: 1 }
};

function assignVoices() {
    if (!speechSupported) return;

    loadVoices();

    const used = new Set();

    for (const character of Object.keys(voicePreferences)) {
        const preferences = voicePreferences[character];

        let chosen = availableVoices.find(voice =>
            preferences.some(name =>
                voice.name.toLowerCase().includes(name.toLowerCase())
            ) && !used.has(voice.name)
        );

        if (!chosen) {
            chosen = availableVoices.find(voice =>
                !used.has(voice.name)
            );
        }

        if (chosen) {
            selectedVoices[character] = chosen;
            used.add(chosen.name);
        }
    }
}

if (speechSupported) {
    loadVoices();
    assignVoices();

    window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
        assignVoices();
    };
}

function speak(text, speaker) {
    if (!speechSupported || muted) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const settings = voiceSettings[speaker] || voiceSettings.Narrator;

    utterance.lang = "en-US";
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    utterance.volume = settings.volume;

    if (selectedVoices[speaker]) {
        utterance.voice = selectedVoices[speaker];
    }

    window.speechSynthesis.speak(utterance);
}

// IMAGE AND DIALOGUE DISPLAY

function showLine() {
    if (currentLine >= story.length) {
        finishMovie();
        return;
    }

    const line = story[currentLine];

    if (speechSupported) {
        window.speechSynthesis.cancel();
    }

    chapterCard.classList.add("hidden");
    speakerPortrait.classList.add("hidden");

    sceneImage.style.opacity = "0";

    setTimeout(() => {
        sceneImage.src = line.image || "Earth.png";
        sceneImage.style.opacity = "1";
    }, 180);

    if (line.type === "card") {
        speakerName.textContent = line.chapter;
        dialogueText.textContent = "";

        chapterEyebrow.textContent = line.chapter;
        chapterTitle.textContent = line.title;
        chapterSubtitle.textContent = line.subtitle;

        chapterCard.classList.remove("hidden");

        document.getElementById("chapterNumber").textContent = line.chapter;

    } else {
        chapterCard.classList.add("hidden");

        speakerName.textContent = line.speaker.toUpperCase();
        dialogueText.textContent = line.text;

        document.getElementById("chapterNumber").textContent =
            "THE STORY UNFOLDS";

        if (line.speaker !== "Narrator") {
            characterImage.src = characterImages[line.speaker];
            characterImage.alt = line.speaker;
            speakerPortrait.classList.remove("hidden");
        } else {
            speakerPortrait.classList.add("hidden");
        }

        speak(line.text, line.speaker);
    }

    progress.style.width =
        ((currentLine + 1) / story.length) * 100 + "%";

    nextButton.textContent =
        currentLine === story.length - 1 ? "FINISH →" : "CONTINUE →";
}

// NEXT LINE

function nextLine() {
    if (finished) {
        restartMovie();
        return;
    }

    currentLine++;
    showLine();
}

// FINISH

function finishMovie() {
    finished = true;

    if (speechSupported) {
        window.speechSynthesis.cancel();
    }

    const oldFinishScreen = document.getElementById("finishScreen");
    if (oldFinishScreen) oldFinishScreen.remove();

    const finishScreen = document.createElement("section");
    finishScreen.id = "finishScreen";

    finishScreen.innerHTML = `
        <h1>THE SILENT EXPLORERS</h1>
        <p>
            The machines. The discoveries. The unknown.<br><br>
            Our missions may end. What we learn can travel further.
        </p>
        <button id="replayButton">WATCH AGAIN</button>
    `;

    document.body.appendChild(finishScreen);

    document.getElementById("replayButton").addEventListener(
        "click",
        restartMovie
    );
}

function restartMovie() {
    document.getElementById("finishScreen")?.remove();

    currentLine = 0;
    finished = false;

    showLine();
}

// BUTTONS

if (beginButton && movie && frontPage) {
    beginButton.addEventListener("click", () => {
        frontPage.classList.add("hidden");
        movie.classList.remove("hidden");

        currentLine = 0;
        finished = false;

        showLine();
    });
} else {
    console.error(
        "Begin button, front page, or movie element was not found. Check index.html IDs."
    );
}

if (nextButton) {
    nextButton.addEventListener("click", nextLine);
}

if (muteButton) {
    muteButton.addEventListener("click", () => {
        muted = !muted;

        muteButton.textContent = muted ? "UNMUTE" : "MUTE";

        if (muted) {
            if (speechSupported) {
                window.speechSynthesis.cancel();
            }
        } else {
            const line = story[currentLine];

            if (line && !line.type && line.speaker) {
                speak(line.text, line.speaker);
            }
        }
    });
}