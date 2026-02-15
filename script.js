// Helper to encode paths for URLs
const encodePath = (path) => path.split('/').map(segment => encodeURIComponent(segment)).join('/');

console.log("Thane Lakes Script Loading...");

const allLakes = [
  {
    name: "Masunda Lake",
    description: "Known as Talao Pali, this lake is the heart of Thane. It offers a majestic water view with islands, high-speed boating, and a vibrant evening atmosphere. The historic surroundings make it the city's most beloved landmark.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagesss/MASUNDA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/MASUNDA 2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MASUNDA3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MASUNDA4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MASUNDA5.JPG")
    ]
  },
  {
    name: "Upvan Lake",
    description: "Nestled at the foothills of Yeoor Hills, Upvan is famous for the Sanskruti Arts Festival. It's a peaceful sanctuary for nature lovers, offering scenic beauty and a cool breeze from the hills.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/UPVAN1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/UPVAN2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/UPVAN3 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/UPVAN3 (2).JPG")
    ]
  },
  {
    name: "Kachrali Lake",
    description: "A green oasis opposite the TMC office, Kachrali is known for its well-maintained jogging tracks, lush island, and peaceful environment. It's a favorite for daily morning walks.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KACHRALI1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KACHRALI2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KACHRALI3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KACHRALI4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KACHRALI5.JPG")
    ]
  },
  {
    name: "Ghosale Lake",
    description: "A wide expanse of water offering a feeling of openness. The lake is a hub for biodiversity and provides a serene backdrop for the surrounding residential areas.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/GHOSALE1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/GHOSALE2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/GHOSALE3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/GHOSALE4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/GHOSALE5.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/GHOSALE6.JPG")
    ]
  },
  {
    name: "Brahmala Lake",
    description: "Surrounded by tall palms and vibrant greenery, Brahmala offers a natural retreat in the city center. Its quiet ambiance is perfect for meditation and relaxation.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/BRAMHALA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/BRAMHALA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/BRAMHALA3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/BRAMHALA4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/BRAMHALA5.JPG")
    ]
  },
  {
    name: "Siddheshwar Lake",
    description: "A spiritual sanctuary near the Siddheshwar Temple. The lake's calm waters reflect the religious aura of the place, offering peace and tranquility to visitors.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/SIDDHESHWAR5.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/SIDDHESHWAR1 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SIDDHESHWAR1 (2).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SIDDHESHWAR1 (3).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SIDDHIESHWAR4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SIDHESHWAR6.JPG")
    ]
  },
  {
    name: "Jail Lake",
    description: "Located near the historic Central Jail, this lake is surprisingly quiet and peaceful. Its banks are lined with dense trees that block out the city noise.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL5.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL6.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JAIL7.JPG")
    ]
  },
  {
    name: "Makhmali Lake",
    description: "Named for its 'velvet' smooth surface, this lake is surrounded by manicured lawns and vibrant flower beds. It's a jewel of landscape architecture in Thane.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/MAKHMALI2.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/MAKHMALI1.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MAKHMALI3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MAKHMALI4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MAKHMALI5.JPG")
    ]
  },
  {
    name: "Kolshet Lake",
    description: "Close to the Kolshet creek, this lake is part of a larger ecosystem of mangroves. It offers a unique biodiversity and a raw, natural vibe.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KOLSHET1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KOLSHET2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KOLSHET3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KOLSHET4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KOLSHET5.JPG")
    ]
  },
  {
    name: "Kavesar Lake",
    description: "A wide lake that creates a stunning visual landscape with the hills of Thane in the far distance. It's perfect for photography during sunset.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KAVESAR1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAVESAR2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAVESAR3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAVESAR4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAVESAR5.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAVESAR6.JPG")
    ]
  },
  {
    name: "Rewale Lake",
    description: "A peaceful sanctuary where the calm water reflects the tall trees standing as silent guardians. It's an ideal spot for those seeking solitude.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/REWALE1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/REWALE2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/REWALE3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/REWALE4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/REWALE5.JPG")
    ]
  },
  {
    name: "Shreeram Lake",
    description: "A tranquil lake providing silence and beautiful scenery. It's perfectly suited for meditation and quiet evening strolls.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/SHREERAM1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHREERAM2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHREERAM3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHREERAM4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHREERAM5.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHREERAM6.JPG")
    ]
  },
  {
    name: "Aagasan Lake",
    description: "Located in the quiet outskirts, Aagasan is a vast water body that reflects the clear sky. Its untouched nature makes it a hidden gem for birdwatchers.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/AAGASAN1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/AAGASAN2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/AAGASAN3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/AAGASAN5.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/AAGASAN.JPG")
    ]
  },
  {
    name: "Balkum Lake",
    description: "A vital natural lung for the Balkum neighborhood. Surrounded by urban greenery, it provides a quick and refreshing nature retreat for locals.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/BALKUM1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/BALKUM2 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/BALKUM2 (2).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/BALKUM2 (3).JPG")
    ]
  },
  {
    name: "Daighar Lake",
    description: "A scenic lake that highlights the rural beauty of Thane's fringes. Its calm waters are a mirror to the surrounding lush landscape.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/DAIGHAR1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/DAIGHAR2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DAIGHAR3.JPG")
    ]
  },
  {
    name: "Datiwali Lake",
    description: "A large lake that serves as a communal hub for the local area. It's known for its expansive views and the gentle ripples that catch the golden hour light.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/DATIWALI1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/DATIWALI2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DATIWALI3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DATIWALI4.JPG")
    ]
  },
  {
    name: "Desai Lake",
    description: "Surrounded by traditional settlements, Desai Lake maintains an old-world charm. It's a place where time seems to slow down among the greenery.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/DESAI1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/DESAI2 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DESAI2 (2).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DESAI3 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DESAI3 (2).JPG")
    ]
  },
  {
    name: "Diva Lake",
    description: "Bringing life to the bustling Diva area, this lake is a focal point for the community. It offers a rare space of openness and natural beauty in the locality.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/DIVA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/DIVA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/DIVA3.JPG")
    ]
  },
  {
    name: "Hariyali Lake",
    description: "True to its name, Hariyali (Greenery) is a lush pocket of water and plants. It's a sanctuary for small birds and a quiet spot for nature lovers.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/HARIYALI1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/HARIYALI2 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/HARIYALI2 (2).JPG")
    ]
  },
  {
    name: "Jarimari Lake",
    description: "A serene lake that gets its name from the nearby tradition. It's a peaceful site that reflects the cultural and natural heritage of Thane.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/JARIMARI2.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/JARIMARI1.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JARIMARI3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JARIMARI4.JPG")
    ]
  },
  {
    name: "Jogila Lake",
    description: "Offering a picturesque view with dancing reflections of trees. Jogila is a local favorite for its calm atmosphere and scenic paths.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/JOGALA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/JOGALA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JOGALA3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/JOGALA4.JPG")
    ]
  },
  {
    name: "Kalwa Shivaji Lake",
    description: "A significant lake in the Kalwa area, providing a natural respite from the urban hustle. It's a beautiful spot for an evening walk near the creek.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KALWA SHIVAJI1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KALWA SHIVAJI2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KALWA SHIVAJI2 (2).JPG")
    ]
  },
  {
    name: "Kamal Lake",
    description: "Named after the lotuses that often bloom here. Kamal Lake is a small but stunning example of how nature can thrive in a city neighborhood.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KAMAL1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAMAL2.JPG")
    ]
  },
  {
    name: "Kausa Lake",
    description: "A vital water resource in the Kausa area, surrounded by hills. The lake's presence adds a cooling effect and scenic value to the region.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KAUSA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAUSA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KAUSA3.JPG")
    ]
  },
  {
    name: "Khardipada Lake",
    description: "A serene and quiet lake hidden away in the Khardipada area. It's an untouched beauty that provides a sense of peace to anyone who visits.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KHARDIPADA.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHARDIPADA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHARDIPADA3.JPG")
    ]
  },
  {
    name: "Kharegaon Lake",
    description: "A well-known landmark in the Kharegaon locality. This lake is integrated into the neighborhood's life, offering a spot for relaxation and community gathering.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KHAREGAON 1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHAREGAON 2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHAREGAON 3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHAREGAON 4.JPG")
    ]
  },
  {
    name: "Khidkali Lake",
    description: "Situated near the famous Khidkali Temple, this lake is a spiritual and natural destination. The backdrop of hills makes it exceptionally beautiful.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/KHIDKALI1 (1).JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHIDKALI1 (2).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHIDKALI3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHIDKALI4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/KHIDKALI5.JPG")
    ]
  },
  {
    name: "Madarde Lake",
    description: "One of the most expansive lakes in Thane's rural belt. Its massive size and the open sky above create a truly grand atmosphere.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE4 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE4 (2).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE5 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MADARDE5 (2).JPG")
    ]
  },
  {
    name: "Mafatlal Lake",
    description: "Located near the Mafatlal grounds, this lake has been a witness to the changing face of Thane. It remains a quiet corner for reflection.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/MAFATLAL1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/MAFATALAL2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MAFATALAL3.JPG")
    ]
  },
  {
    name: "Mogharpada Lake",
    description: "A beautiful water body in the Mogharpada area. Known for its clear waters and the lush green fields that stretch out from its banks.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/MOGHARPADA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/MOGHARPADA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MOGHARPADA3.JPG")
    ]
  },
  {
    name: "Mumbreshwar Lake",
    description: "A serene lake in the shadow of the Mumbreshwar hills. It provides a spiritual and calming experience to those visiting the area.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/MUMBRESHWAR1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/MUNNBRESHWAR2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/MUMBRESHWAR3.JPG")
    ]
  },
  {
    name: "Nar Lake",
    description: "A small and peaceful lake that serves as a vital ecosystem for local flora. It's a quiet part of Thane that retains its natural charm.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/NAR1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/NAR2.JPG")
    ]
  },
  {
    name: "Ovala Lake",
    description: "A vast lake in the Ovala area, surrounded by developing neighborhoods but still maintaining a raw, natural edge. It's great for birdwatching.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/OVALA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/OVALA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/OVALA3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/OVALA4.JPG")
    ]
  },
  {
    name: "Pandurang Bhoir Lake",
    description: "Integrating modern life with nature, this lake is a local hub. Its well-maintained surroundings make it a pleasant spot for evening walks.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/PANDURANGA BHOIR.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/PANDURANGABHOIR1.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/PANDURANG BHOIR2.JPG")
    ]
  },
  {
    name: "Phadkepada Lake",
    description: "A quiet and peaceful lake that offers a slice of nature to the Phadkepada residents. Its presence adds a tranquil touch to the locality.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/PHADKEPADA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/PHADKEPADA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/PHADKEPADA3.JPG")
    ]
  },
  {
    name: "Rayladevi Lake",
    description: "A large and historically significant lake in Thane. It's known for its expansive size and the religious ceremonies that take place on its banks.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/RAYLADEVI1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/RAYLADEVI2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/RAYLADEVI3.JPG")
    ]
  },
  {
    name: "Saba Lake",
    description: "A beautiful, wide-open lake that offers panoramic views of the sky. Its calm waters are perfect for observing the changes in light throughout the day.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/SABA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/SABA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SABA4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SABA3 (1).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SABA3 (2).JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SABA3 (3).JPG")
    ]
  },
  {
    name: "Shil Lake",
    description: "Located near the Shil hills, this lake is a gateway to the more rugged side of Thane's nature. It's a raw and beautiful spot.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/SHIL1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHIL2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/SHILL3.JPG")
    ]
  },
  {
    name: "Taklemamancha Lake",
    description: "A well-loved local lake that provides a cooling presence in its neighborhood. It's a quiet haven where one can sit and enjoy the water.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/TAKLEMAMANCHA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/TAKLEMAMANCHA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/TAKLEMAMANCHA3.JPG")
    ]
  },
  {
    name: "Turfapada Lake",
    description: "Surrounded by lush greenery, Turfapada Lake feels like a secret garden. It's one of the greenest spots in the city's outskirts.",
    image: encodePath("lakes/talao photos/FINAL MAIN imagess/TURFAPADA1.JPG"),
    moreimagess: [
      encodePath("lakes/talao photos/FINAL MAIN imagess/TURFAPADA2.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/TURFAPADA3.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/TURFAPADA4.JPG"),
      encodePath("lakes/talao photos/FINAL MAIN imagess/TURFAPADA5.JPG")
    ]
  }
];

let currentIndex = 0;

// Safety check for GSAP
const hasGSAP = typeof gsap !== 'undefined';

// DOM Elements
const lakeNameEl = document.getElementById("lakeName");
const lakeListEl = document.getElementById("lakeList");
const bgImage1 = document.getElementById("bgImage1");
const bgImage2 = document.getElementById("bgImage2");
const infoCard = document.querySelector(".info-card");
const exploreBtn = document.querySelector(".explore-btn");
const modal = document.getElementById("detailsModal");
const closeModalBtn = document.querySelector(".close-modal");
const collageGrid = document.getElementById("collageGrid");
const modalLakeName = document.getElementById("modalLakeName");
const modalLakeDescription = document.getElementById("modalLakeDescription");

let activeBg = 1;

function displayLake(index) {
  try {
    const lake = allLakes[index];
    if (!lake) return;
    currentIndex = index;

    console.log(`Displaying lake: ${lake.name}`);

    if (hasGSAP && lakeNameEl) {
      gsap.to(lakeNameEl, {
        y: -10,
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          lakeNameEl.innerText = lake.name;
          gsap.to(lakeNameEl, { y: 0, opacity: 1, duration: 0.4 });
        }
      });
    } else {
      if (lakeNameEl) lakeNameEl.innerText = lake.name;
    }

    // Dual Layer Cross-Fade
    const nextBg = activeBg === 1 ? bgImage2 : bgImage1;
    const currentBg = activeBg === 1 ? bgImage1 : bgImage2;

    if (nextBg && currentBg) {
      nextBg.style.backgroundImage = `url("${lake.image}")`;
      nextBg.classList.add("active");
      currentBg.classList.remove("active");
      activeBg = activeBg === 1 ? 2 : 1;
    }

    // Highlight active list item
    updateSidebarActiveState(index);
  } catch (err) {
    console.error("Error in displayLake:", err);
  }
}

function updateSidebarActiveState(index) {
  const listItems = document.querySelectorAll(".lake-list li");
  listItems.forEach(li => li.classList.remove("active"));

  if (listItems[index]) {
    listItems[index].classList.add("active");
    // Only scroll if possible
    try {
      listItems[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (e) {
      console.warn("Could not scroll element into view:", e);
    }
  }
}

// Render Sidebar List
function renderList() {
  try {
    if (!lakeListEl) {
      console.error("lakeListEl not found!");
      return;
    }
    lakeListEl.innerHTML = ""; // Clear existing
    allLakes.forEach((lake, i) => {
      const li = document.createElement("li");
      li.innerText = lake.name;
      li.onclick = () => displayLake(i);
      lakeListEl.appendChild(li);
    });
    console.log(`Rendered ${allLakes.length} lakes in sidebar.`);
  } catch (err) {
    console.error("Error in renderList:", err);
  }
}

// Navigation Functions
function nextLake() {
  let newIndex = (currentIndex + 1) % allLakes.length;
  displayLake(newIndex);
}

function prevLake() {
  let newIndex = (currentIndex - 1 + allLakes.length) % allLakes.length;
  displayLake(newIndex);
}

// Filter Function
function filterLakes() {
  const input = document.getElementById("searchLake");
  if (!input) return;
  const filter = input.value.toUpperCase();
  const li = lakeListEl.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    const txtValue = li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Modal Logic
function openModal() {
  try {
    const lake = allLakes[currentIndex];
    if (!lake) return;
    if (modalLakeName) modalLakeName.innerText = lake.name;
    if (modalLakeDescription) modalLakeDescription.innerText = lake.description;

    // Clear and fill collage
    if (collageGrid) {
      collageGrid.innerHTML = "";

      let imagessToLoad = [lake.image, ...(lake.moreimagess || [])];

      // "NO REPETATION" - Strictly use available imagess.

      const count = imagessToLoad.length;

      // Reset classes
      collageGrid.className = "collage-grid";

      // Apply Sketch Layouts
      if (count === 2) {
        collageGrid.classList.add("layout-2");
      } else if (count === 3) {
        collageGrid.classList.add("layout-3");
      } else if (count === 4) {
        collageGrid.classList.add("layout-4");
      } else if (count === 5) {
        collageGrid.classList.add("layout-5");
      } else if (count >= 6) {
        // Flatten to first 6 if > 6 to keep layout strict, or just use first 6
        // But user said "No repitation", implies just showing what we have. 
        // If we have > 6, the CSS for layout-6 handles the first 6 specificly.
        // Remaining items will just flow naturally (dense).
        collageGrid.classList.add("layout-6");
      } else {
        // Fallback for < 3 items (should fit in standard grid)
        collageGrid.classList.add("layout-fallback");
      }

      imagessToLoad.forEach((src, idx) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("collage-item-wrapper");

        // NO JS SPANS - All handled by CSS nth-child rules based on parent class

        const img = document.createElement("img");
        img.src = src;
        img.alt = lake.name;
        img.classList.add("collage-item");

        wrapper.appendChild(img);
        collageGrid.appendChild(wrapper);
      });
    }

    if (modal) modal.classList.add("open");

    // GSAP Animation for Modal - optimized for 50/50 split
    if (hasGSAP) {
      const tl = gsap.timeline();

      // Reset modal and content states
      gsap.set(modal, { opacity: 0 });
      gsap.set(".modal-content", { opacity: 1, scale: 1, y: 0 });

      tl.to(modal, { opacity: 1, duration: 0.3 });

      tl.from(".modal-info", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2");
    }
  } catch (err) {
    console.error("Error in openModal:", err);
  }
}

function closeModal() {
  if (hasGSAP) {
    gsap.to(".modal-content", {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        if (modal) modal.classList.remove("open");
        // Clear GSAP properties so CSS can take over or it doesn't block
        gsap.set(modal, { clearProps: "all" });
        gsap.set(".modal-content", { clearProps: "all" });
      }
    });
  } else {
    if (modal) modal.classList.remove("open");
  }
}

// Initialize
function init() {
  console.log("Initializing Thane Lakes app...");
  renderList();
  displayLake(0);

  // Event Listeners
  if (exploreBtn) {
    exploreBtn.onclick = openModal;
    console.log("Explore Details button found and event listener attached.");

    // Diagnostic log after short delay
    setTimeout(() => {
      const rect = exploreBtn.getBoundingClientRect();
      const style = window.getComputedStyle(exploreBtn);
      console.log("Button Status:", {
        visible: rect.width > 0 && rect.height > 0,
        opacity: style.opacity,
        zIndex: style.zIndex,
        display: style.display,
        position: style.position,
        rect: rect
      });
    }, 2000);
  } else {
    console.warn("CRITICAL: Explore Details button NOT found in DOM!");
  }

  if (closeModalBtn) closeModalBtn.onclick = closeModal;

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }

  // Fade in elements
  if (hasGSAP) {
    // Ensure button is visible initially before animation
    gsap.set([".top-header", ".explore-btn"], { opacity: 1 });

    gsap.from(".top-header", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      clearProps: "all" // Ensure it finishes in the CSS-defined state
    });

    gsap.from(".explore-btn", {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.8,
      clearProps: "all" // Ensure it finishes in the CSS-defined state
    });
  }
}

// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
