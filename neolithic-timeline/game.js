(function () {
  "use strict";

  /**
   * Neolithic through early Bronze events (worldwide).
   * Dates are years BCE as negative numbers (e.g. -10000 = 10,000 BCE).
   * Earlier events are more negative; timeline runs left (earliest) to right (latest).
   */
  const cards = [
  {
    title: "Jōmon Pottery Appears",
    date: -14500,
    region: "Japan",
    description:
      "Among the earliest pottery traditions, made by hunter-gatherers before farming spread to the islands.",
  },
  {
    title: "Dog Domestication",
    date: -13000,
    region: "Eurasia",
    description:
      "Wolves were domesticated into dogs, long before most herd animals and staple crops.",
  },
  {
    title: "Natufian Permanent Villages",
    date: -12500,
    region: "Levant",
    description:
      "Hunter-gatherers in the eastern Mediterranean built year-round settlements before full farming.",
  },
  {
    title: "Bering Land Bridge Recedes",
    date: -11000,
    region: "Beringia",
    description:
      "Rising seas submerged the land bridge to the Americas; migration patterns shifted permanently.",
  },
  {
    title: "Agricultural Revolution",
    date: -10000,
    region: "Fertile Crescent",
    description:
      "First widespread evidence of agriculture and early temple building; societies began storing surplus food.",
  },
  {
    title: "Goat Domestication",
    date: -9900,
    region: "Zagros Mountains",
    description:
      "Goats became one of the first livestock animals, supporting pastoral life across the Near East.",
  },
  {
    title: "Göbekli Tepe",
    date: -9600,
    region: "Anatolia",
    description:
      "Monumental stone pillars arranged in ritual enclosures — built before large-scale farming nearby.",
  },
  {
    title: "Farming in the Fertile Crescent",
    date: -9500,
    region: "Near East",
    description:
      "Early domestication of wheat, barley, sheep, and goats transformed diets and settlement patterns.",
  },
  {
    title: "Pig Domestication",
    date: -9000,
    region: "Near East",
    description:
      "Pigs were raised in village economies, adding protein and flexibility to early farm life.",
  },
  {
    title: "Maize Domestication",
    date: -9000,
    region: "Mesoamerica",
    description:
      "Farmers in Mexico transformed teosinte into maize, later a staple crop for much of the Americas.",
  },
  {
    title: "Cattle Domestication",
    date: -8500,
    region: "Anatolia",
    description:
      "Aurochs were bred into domestic cattle, reshaping labor, diet, and wealth in farming societies.",
  },
  {
    title: "Walls of Jericho",
    date: -8500,
    region: "Levant",
    description:
      "A large walled settlement showed how early towns organized labor, defense, and trade.",
  },
  {
    title: "Farming Reaches Egypt",
    date: -8000,
    region: "Egypt",
    description:
      "Emmer wheat, barley, and livestock spread along the Nile, laying groundwork for dynastic civilization.",
  },
  {
    title: "Potato Domestication",
    date: -8000,
    region: "Andes",
    description:
      "Andean farmers cultivated potatoes, supporting high-altitude communities in South America.",
  },
  {
    title: "Millet Cultivation in China",
    date: -7500,
    region: "Yellow River region",
    description:
      "Millet farming spread across northern China, complementing rice agriculture in the south.",
  },
  {
    title: "Çatalhöyük",
    date: -7100,
    region: "Anatolia",
    description:
      "A dense Neolithic town of mudbrick houses, murals, and shared ritual spaces without streets.",
  },
  {
    title: "Rice Cultivation",
    date: -7000,
    region: "Yangtze River, China",
    description:
      "Wet-rice farming supported growing populations and complex villages in East Asia.",
  },
  {
    title: "Mehrgarh Farming",
    date: -7000,
    region: "Indus region",
    description:
      "One of South Asia's earliest farming communities grew wheat, barley, and herded animals.",
  },
  {
    title: "Linear Pottery Culture",
    date: -6500,
    region: "Central Europe",
    description:
      "Farmers with distinctive pottery spread across Europe, linking Danubian villages in a broad network.",
  },
  {
    title: "Banpo Village",
    date: -6000,
    region: "China",
    description:
      "A Yangshao culture village with painted pottery, moats, and organized housing layouts.",
  },
  {
    title: "Saharan Pastoral Rock Art",
    date: -6000,
    region: "Sahara",
    description:
      "A wetter Sahara supported herders and artists who left vivid cattle and hunting scenes on stone.",
  },
  {
    title: "Copper Working Begins",
    date: -5500,
    region: "Near East and Balkans",
    description:
      "People hammered native copper into tools, opening the Chalcolithic (Copper) Age before true bronze.",
  },
  {
    title: "Temples of Malta",
    date: -5200,
    region: "Mediterranean",
    description:
      "Massive stone temples on Malta and Gozo reveal complex ritual life in island farming societies.",
  },
  {
    title: "Proto-writing with Clay Tokens",
    date: -5000,
    region: "Mesopotamia",
    description:
      "Accountants used shaped clay tokens to track goods — an early step toward written records.",
  },
  {
    title: "Copper Tools Become Common",
    date: -5000,
    region: "Middle East",
    description:
      "Copper axes, pins, and ornaments spread as villages grew denser and trade networks expanded.",
  },
  {
    title: "Mesopotamian Proto-cities Emerge",
    date: -5000,
    region: "Mesopotamia",
    description:
      "Large settlements such as Uruk's predecessors combined farming, craft specialists, and temple authority.",
  },
  {
    title: "Horse Domestication",
    date: -4800,
    region: "Eurasian steppe",
    description:
      "Horses were tamed on the steppe, later transforming transport, warfare, and trade across continents.",
  },
  {
    title: "Megalithic Tombs in Brittany",
    date: -4500,
    region: "Atlantic Europe",
    description:
      "Communities raised great stone chambers and mounds along the Atlantic coast of France.",
  },
  {
    title: "Llama Domestication",
    date: -4000,
    region: "Andes",
    description:
      "Llamas and alpacas became pack animals and sources of fiber for Andean highland societies.",
  },
  {
    title: "The Wheel Invented",
    date: -4000,
    region: "Mesopotamia",
    description:
      "Potters' wheels and wheeled vehicles spread, speeding craft production and overland movement.",
  },
  {
    title: "Long Barrows in Britain",
    date: -4000,
    region: "Britain",
    description:
      "Farming communities built elongated earthen tombs for collective burial and ancestor rituals.",
  },
  {
    title: "Trypillia Mega-sites",
    date: -3600,
    region: "Eastern Europe",
    description:
      "Huge Ukrainian settlements housed thousands in planned neighborhoods of clay houses.",
  },
  {
    title: "Indus Valley Towns Grow",
    date: -3500,
    region: "South Asia",
    description:
      "Planned brick towns with drainage systems appeared before the mature Indus civilization.",
  },
  {
    title: "Bronze Metallurgy in Mesopotamia",
    date: -3300,
    region: "Mesopotamia",
    description:
      "Alloy of copper and tin created harder bronze tools and weapons, marking the Early Bronze Age.",
  },
  {
    title: "Indus Valley Civilization",
    date: -3300,
    region: "Indus River Valley",
    description:
      "Cities like Harappa and Mohenjo-daro traded standardized weights, seals, and urban planning.",
  },
  {
    title: "Early Bronze Age Egypt",
    date: -3100,
    region: "Egypt",
    description:
      "Upper and Lower Egypt united; bronze, writing, and monumental tombs defined the dynastic state.",
  },
  {
    title: "Stonehenge Phase 1",
    date: -3100,
    region: "Britain",
    description:
      "A circular earthwork and ditch were raised; bluestones and sarsens came in later centuries.",
  },
  {
    title: "Skara Brae",
    date: -3100,
    region: "Orkney, Scotland",
    description:
      "A stone-built Neolithic village survived under sand, showing furnished rooms and linked passageways.",
  },
  {
    title: "Norte Chico / Caral",
    date: -3000,
    region: "Peru",
    lat: -10.89,
    lon: -77.52,
    description:
      "One of the Americas' earliest urban centers rose on the Pacific coast with pyramids and plazas.",
  },
  {
    title: "Bronze in the Yellow River",
    date: -3000,
    region: "China",
    description:
      "Early bronze casting appeared in Chinese societies, later associated with Erlitou and Shang cultures.",
  },
  {
    title: "Cucuteni Painted Pottery",
    date: -3400,
    region: "Romania / Ukraine",
    description:
      "Villages produced swirling red-on-black pottery across a wide culture in southeastern Europe.",
  },
  {
    title: "Newgrange Passage Tomb",
    date: -3200,
    region: "Ireland",
    description:
      "A great mound aligned to the winter solstice, built by farming communities in the Boyne Valley.",
  },
  {
    title: "Minoan Crete Rises",
    date: -2900,
    region: "Crete",
    description:
      "Palace-centered society on Crete linked Aegean trade, olive and wine production, and fine pottery.",
  },
  {
    title: "Sumerian Early Dynastic Period",
    date: -2900,
    region: "Mesopotamia",
    description:
      "City-states such as Ur and Lagash competed through trade, temple building, and warfare.",
  },
  {
    title: "Austronesian Expansion Begins",
    date: -3000,
    region: "Southeast Asia / Pacific",
    description:
      "Seafaring farmers spread languages and crops toward island Southeast Asia and Oceania.",
  },
  {
    title: "Papuan Horticulture Intensifies",
    date: -4000,
    region: "New Guinea highlands",
    description:
      "Drainage ditches and mound fields supported taro and banana cultivation in highland valleys.",
  },
  {
    title: "Bantu Farming Spread",
    date: -3000,
    region: "West-Central Africa",
    description:
      "Farming and herding communities gradually expanded across sub-Saharan Africa over millennia.",
  },
  {
    title: "Olmec Precursors in Mesoamerica",
    date: -2800,
    region: "Gulf Coast Mexico",
    description:
      "Early formative villages laid foundations for later Olmec civilization with maize and ritual centers.",
  },
  {
    title: "Early Bronze in the Aegean",
    date: -2700,
    region: "Aegean",
    description:
      "Mainland Greece and islands joined Mediterranean networks of bronze, silver, and olive trade.",
  },
  {
    title: "Mohenjo-daro Flourishes",
    date: -2600,
    region: "Indus Valley",
    description:
      "A major Indus city featured grid streets, great baths, and standardized brick sizes.",
  },
  {
    title: "Great Pyramid of Djoser's Era",
    date: -2700,
    region: "Egypt",
    description:
      "Step pyramids and large stone tombs showed Old Kingdom Egypt's power and engineering skill.",
  },
  {
    title: "Shang Dynasty Bronze Casting",
    date: -2100,
    region: "China",
    description:
      "Elaborate ritual bronzes were cast in molds, marking a mature Bronze Age court culture in China.",
  },
  /* —— Middle East (expand to 20) —— */
  {
    title: "Uruk Becomes a Great City",
    date: -3200,
    region: "Mesopotamia",
    geo: "middle-east",
    description:
      "Temple districts and dense neighborhoods made Uruk one of the world's first true urban centers.",
  },
  {
    title: "Cuneiform Writing Developed",
    date: -3200,
    region: "Mesopotamia",
    geo: "middle-east",
    description:
      "Wedge-shaped signs pressed into clay tablets recorded taxes, contracts, and myths in Sumer.",
  },
  {
    title: "Tell Brak Grows into a Center",
    date: -4000,
    region: "Syria",
    geo: "middle-east",
    description:
      "A major northern Mesopotamian settlement traded grain, metals, and craft goods across the region.",
  },
  {
    title: "Wine Cultivation in the Caucasus",
    date: -6000,
    region: "Caucasus",
    geo: "middle-east",
    description:
      "Vineyards and wine storage jars spread from upland valleys into Near Eastern feasts and trade.",
  },
  /* —— Asia (expand to 20) —— */
  {
    title: "Hongshan Jade Culture",
    date: -4500,
    region: "China",
    geo: "asia",
    description:
      "Ritual jade dragons and temple platforms marked a sophisticated Neolithic culture in the northeast.",
  },
  {
    title: "Liangzhu City and Jade Tombs",
    date: -3300,
    region: "China",
    geo: "asia",
    description:
      "Flood works and elite burials with jade showed organized authority in the lower Yangtze world.",
  },
  {
    title: "Longshan Black Pottery",
    date: -2500,
    region: "China",
    geo: "asia",
    description:
      "Thin-walled pottery and walled towns spread as societies grew more stratified in northern China.",
  },
  {
    title: "Hemudu Wet-Rice Village",
    date: -5000,
    region: "China",
    geo: "asia",
    description:
      "Stilt houses and rice remains show early intensive farming in the humid Yangtze lowlands.",
  },
  {
    title: "Silk Production Begins",
    date: -3000,
    region: "China",
    geo: "asia",
    description:
      "Silkworm raising and weaving became a prized craft linked to trade and elite display in East Asia.",
  },
  {
    title: "Farming in the Ganges Valley",
    date: -6000,
    region: "South Asia",
    geo: "asia",
    description:
      "Rice and barley cultivation spread along the Ganges, linking the Indus world to eastern India.",
  },
  {
    title: "Kot Diji Phase of the Indus",
    date: -3300,
    region: "Indus region",
    geo: "asia",
    description:
      "Early Harappan towns standardized pottery and layouts before the mature Indus cities peaked.",
  },
  {
    title: "Dholavira Planned City",
    date: -2500,
    region: "Indus Valley",
    geo: "asia",
    description:
      "Reservoirs and stone architecture supported a major Indus city in arid western India.",
  },
  {
    title: "Lothal Trade Port",
    date: -2400,
    region: "Indus Valley",
    geo: "asia",
    description:
      "Dockyards and bead workshops connected Indus merchants to the Persian Gulf and beyond.",
  },
  {
    title: "Erlitou Bronze State",
    date: -1900,
    region: "China",
    geo: "asia",
    description:
      "Palatial compounds and early bronze vessels marked a formative state in the Central Plains.",
  },
  /* —— Eurasia (expand to 20) —— */
  {
    title: "Yamnaya Herders on the Steppe",
    date: -3300,
    region: "Eurasian steppe",
    geo: "eurasia",
    description:
      "Wheeled carts and kurgan burials spread across grasslands from the Danube to the Urals.",
  },
  {
    title: "Botai Horse Settlement",
    date: -3500,
    region: "Kazakhstan",
    geo: "eurasia",
    description:
      "Villages in northern Kazakhstan provide early evidence of broad horse use on the steppe.",
  },
  {
    title: "Sintashta Bronze Chiefdoms",
    date: -2000,
    region: "Eurasian steppe",
    geo: "eurasia",
    description:
      "Fortified settlements and chariot gear marked a militarized Bronze Age culture in the Urals.",
  },
  {
    title: "Afanasevo Copper Culture",
    date: -3300,
    region: "Altai",
    geo: "eurasia",
    description:
      "Herders in the Altai foothills worked copper and maintained contacts across Inner Asia.",
  },
  {
    title: "Kurgan Burial Mounds Spread",
    date: -4000,
    region: "Eurasian steppe",
    geo: "eurasia",
    description:
      "Raised earthen tombs for elites became a signature ritual across Pontic-Caspian grasslands.",
  },
  {
    title: "Siberian Pottery Traditions",
    date: -13000,
    region: "Siberia",
    geo: "eurasia",
    description:
      "Hunter-fishers along Siberian rivers made distinctive ceramics long before farming reached the north.",
  },
  {
    title: "Lake Baikal Fishing Camps",
    date: -12000,
    region: "Siberia",
    geo: "eurasia",
    description:
      "Seasonal camps at Baikal exploited fish and seals, preserving some of the oldest Siberian burials.",
  },
  {
    title: "Okunev Culture Monuments",
    date: -2800,
    region: "Altai",
    geo: "eurasia",
    description:
      "Stone stelae with carved faces marked ritual landscapes among Bronze Age herders in southern Siberia.",
  },
  {
    title: "Chariots on the Steppe",
    date: -2000,
    region: "Eurasian steppe",
    geo: "eurasia",
    description:
      "Light war chariots spread through steppe networks, transforming raiding and elite display.",
  },
  {
    title: "Millet Farming Reaches Mongolia",
    date: -5500,
    region: "Mongolia",
    geo: "eurasia",
    description:
      "Millet and pastoral lifeways mixed as farmers and herders shared the eastern steppe fringe.",
  },
  {
    title: "Wool Sheep Herding Expands",
    date: -6000,
    region: "Kazakhstan",
    geo: "eurasia",
    description:
      "Sheep and goat pastoralism supported mobile communities across Central Asian grasslands.",
  },
  {
    title: "Deer Stone Monuments Erected",
    date: -1300,
    region: "Mongolia",
    geo: "eurasia",
    description:
      "Tall carved stones lined ritual avenues for Bronze Age herders on the Mongolian steppe.",
  },
  {
    title: "Arctic Hunter Toolkits",
    date: -4000,
    region: "Siberia",
    geo: "eurasia",
    description:
      "Microblades and bone harpoons equipped foragers adapting to northern forests and coasts.",
  },
  {
    title: "Trans-Ural Copper Working",
    date: -2800,
    region: "Siberia",
    geo: "eurasia",
    description:
      "Copper ornaments and tools circulated among forest-steppe communities east of the Urals.",
  },
  {
    title: "Steppe Obsidian Exchange",
    date: -5000,
    region: "Kazakhstan",
    geo: "eurasia",
    description:
      "Volcanic glass blades moved hundreds of kilometers, linking camps across Central Asia.",
  },
  {
    title: "Petrovka Bronze Culture",
    date: -2200,
    region: "Kazakhstan",
    geo: "eurasia",
    description:
      "Bronze weapons and cheek-piece horse gear spread among fortified steppe settlements.",
  },
  {
    title: "Andronovo Culture Herders",
    date: -2000,
    region: "Eurasian steppe",
    geo: "eurasia",
    description:
      "Bronze Age pastoralists occupied settlements from the Urals into western Central Asia.",
  },
  {
    title: "Reindeer Herding in the Arctic",
    date: -2000,
    region: "Siberia",
    geo: "eurasia",
    description:
      "Pastoral adaptations spread in the far north as communities relied on reindeer and seasonal moves.",
  },
  /* —— Beringia (expand to 20) —— */
  {
    title: "First Americans Cross Beringia",
    date: -15000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Hunter bands followed game across the land bridge into a hemisphere without prior human settlement.",
  },
  {
    title: "Ancient Beringian Camps",
    date: -10000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Distinct tool traditions on both sides of the strait show long occupation before the bridge flooded.",
  },
  {
    title: "Ice-Free Corridor Opens",
    date: -13000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Melting ice may have allowed southward movement between retreating glaciers in interior North America.",
  },
  {
    title: "Beringian Standstill Period",
    date: -18000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Genetic evidence suggests populations lived in refugia on the land bridge for thousands of years.",
  },
  {
    title: "Bering Sea Coast Villages",
    date: -8000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Maritime foragers settled coasts as rising seas submerged the last lowlands of the land bridge.",
  },
  {
    title: "Arctic Small Tool Tradition",
    date: -4500,
    region: "Beringia",
    geo: "beringia",
    description:
      "Microlithic hunting kits spread along Arctic shores from Alaska to Greenland.",
  },
  {
    title: "Denali Complex Toolkits",
    date: -3200,
    region: "Beringia",
    geo: "beringia",
    description:
      "Distinctive stone points linked Alaskan foragers to broader Beringian cultural networks.",
  },
  {
    title: "Eskimo-Aleut Peoples Diverge",
    date: -4000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Maritime Arctic cultures differentiated as languages and technologies split across the far north.",
  },
  {
    title: "Diomede Islands Crossings",
    date: -2000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Boats linked Siberian and Alaskan shores where the continents stand only kilometers apart.",
  },
  {
    title: "St. Lawrence Island Settlement",
    date: -2000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Island hunters bridged Bering Strait trade and walrus ivory networks in the North Pacific.",
  },
  {
    title: "Wrangel Island Mammoth Hunters",
    date: -4000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Arctic foragers pursued the last mammoths on an island north of the Siberian coast.",
  },
  {
    title: "Siberian–Yupik Exchange",
    date: -1500,
    region: "Beringia",
    geo: "beringia",
    description:
      "Ivory, furs, and iron moved across the strait between Asian and Alaskan coastal communities.",
  },
  {
    title: "Birch Bark Canoe Travel",
    date: -3000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Light boats linked river and coastal routes across the subarctic rim of the Pacific.",
  },
  {
    title: "Arctic Coastal Foragers",
    date: -6000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Sea mammal hunting supported permanent settlements along the retreating Beringian shoreline.",
  },
  {
    title: "Chukchi Peninsula Camps",
    date: -5000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Eastern Siberian foragers and early herders occupied the gateway to the Americas.",
  },
  {
    title: "Seward Peninsula Settlement",
    date: -4000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Alaska's northwest coast became a hub for hunters moving between continent and Arctic Ocean.",
  },
  {
    title: "Paleo-Siberian Genetic Legacy",
    date: -9000,
    region: "Beringia",
    geo: "beringia",
    description:
      "Ancient DNA links early Siberian populations to the first peoples of the Americas.",
  },
  {
    title: "Maritime Bering Coast Adaptation",
    date: -2500,
    region: "Beringia",
    geo: "beringia",
    description:
      "Specialized harpoons and floats supported year-round use of rich coastal resources.",
  },
  {
    title: "Final Flooding of Bering Shelf",
    date: -7500,
    region: "Beringia",
    geo: "beringia",
    description:
      "The last dry passages vanished, fixing separate histories on the Asian and American sides.",
  },
  /* —— Europe (expand to 20) —— */
  {
    title: "Varna Gold Cemetery",
    date: -4500,
    region: "Bulgaria",
    geo: "europe",
    description:
      "Elaborate gold ornaments in graves marked some of Europe's earliest extreme social inequality.",
  },
  {
    title: "Carnac Stone Alignments",
    date: -4000,
    region: "France",
    geo: "europe",
    description:
      "Thousands of standing stones in rows transformed coastal Brittany into a ritual landscape.",
  },
  {
    title: "Avebury Stone Circle",
    date: -2600,
    region: "Britain",
    geo: "europe",
    description:
      "A vast henge and stone avenues served gatherings near contemporaries of Stonehenge.",
  },
  {
    title: "Ertebølle Shell Middens",
    date: -5000,
    region: "Denmark",
    geo: "europe",
    description:
      "Coastal hunter-gatherers left huge kitchen mounds of oysters before farming fully took hold.",
  },
  {
    title: "Los Millares Fortified Town",
    date: -3200,
    region: "Iberia",
    geo: "europe",
    description:
      "Walls, copper metallurgy, and tombs marked a powerful Chalcolithic culture in southeast Spain.",
  },
  {
    title: "Vinča Culture Towns",
    date: -5500,
    region: "Serbia",
    geo: "europe",
    description:
      "Large Danube villages used copper tools and figurines generations before Aegean palaces.",
  },
  {
    title: "Alpine Lake Dwellings",
    date: -4000,
    region: "Alps",
    geo: "europe",
    description:
      "Pile villages on lakeshores preserved wood, textiles, and farming tools in Swiss wetlands.",
  },
  {
    title: "Ötzi Crosses the Alps",
    date: -3300,
    region: "Alps",
    geo: "europe",
    description:
      "A frozen traveler carried copper tools, medicine, and gear from Copper Age Tyrol.",
  },
  {
    title: "Portuguese Passage Graves",
    date: -4000,
    region: "Portugal",
    geo: "europe",
    description:
      "Megalithic tombs with painted chambers lined the Atlantic coast of Iberia.",
  },
  /* —— Africa (expand to 20) —— */
  {
    title: "Nabta Playa Stone Circle",
    date: -7500,
    region: "Egypt",
    geo: "africa",
    description:
      "A ceremonial alignment of stones in the Sahara may be among Africa's oldest planned structures.",
  },
  {
    title: "Nubian A-Group Chiefdoms",
    date: -3800,
    region: "Nubia",
    geo: "africa",
    description:
      "Rich graves on the Nile in Sudan traded ivory and gold with early Egypt to the north.",
  },
  {
    title: "Kerma Kingdom Rises",
    date: -2500,
    region: "Nubia",
    geo: "africa",
    description:
      "A powerful Nubian state built deffufas and rivaled Egyptian influence in the Middle Nile.",
  },
  {
    title: "Saharan Climate Drying",
    date: -4000,
    region: "Sahara",
    geo: "africa",
    description:
      "Pastoralists and farmers shifted south as grasslands shrank into today's desert belts.",
  },
  {
    title: "Tichitt-Walata Stone Villages",
    date: -2000,
    region: "Mauritania",
    geo: "africa",
    description:
      "Stone-built towns and cattle herding supported early complex societies in the western Sahara fringe.",
  },
  {
    title: "Lake Chad Fisher-Farmers",
    date: -6000,
    region: "West Africa",
    geo: "africa",
    description:
      "Lake shores supported mixed fishing and millet farming in the Sahel before desertification advanced.",
  },
  {
    title: "Djenne-Djeno Settlement",
    date: -250,
    region: "Mali",
    geo: "africa",
    description:
      "An island town in the Niger floodplain became a hub of trade and craft in West Africa.",
  },
  {
    title: "Ethiopian Highland Farming",
    date: -1500,
    region: "Ethiopia",
    geo: "africa",
    description:
      "Teff, enset, and barley cultivation supported rising communities in the Horn of Africa.",
  },
  {
    title: "Pastoralists in Kenya",
    date: -3000,
    region: "Kenya",
    geo: "africa",
    description:
      "Herding and stone cairns spread through Rift Valley landscapes as populations grew more mobile.",
  },
  {
    title: "Libyan Cattle Period Art",
    date: -7000,
    region: "Sahara",
    geo: "africa",
    description:
      "Rock art celebrated cattle, hunters, and green Sahara life before the deserts advanced.",
  },
  {
    title: "Memphis Founded as Capital",
    date: -2600,
    region: "Egypt",
    geo: "africa",
    description:
      "Old Kingdom pharaohs centered power at Memphis near the Nile delta trade routes.",
  },
  {
    title: "Great Pyramid Age",
    date: -2500,
    region: "Egypt",
    geo: "africa",
    description:
      "Monumental pyramids at Giza displayed the labor organization of Old Kingdom Egypt.",
  },
  {
    title: "Kushite Trade with Egypt",
    date: -2400,
    region: "Nubia",
    geo: "africa",
    description:
      "Gold, ebony, and ivory from the south fed Egyptian workshops and royal display.",
  },
  {
    title: "Congo Basin Foragers-Farmers",
    date: -3000,
    region: "Congo",
    geo: "africa",
    description:
      "Forest-edge communities combined hunting, fishing, and early plant cultivation in Central Africa.",
  },
  {
    title: "Maghreb Cave Paintings",
    date: -6000,
    region: "Maghreb",
    geo: "africa",
    description:
      "Hunters painted elephants and antelope in mountain shelters across North Africa.",
  },
  /* —— Americas (expand to 20) —— */
  {
    title: "Squash Domestication",
    date: -8000,
    region: "Mesoamerica",
    geo: "americas",
    description:
      "Squash was among the first crops bred in Mexico, preceding maize-dominated agriculture.",
  },
  {
    title: "Bean Cultivation in Mexico",
    date: -6000,
    region: "Mesoamerica",
    geo: "americas",
    description:
      "Beans complemented maize and squash in the classic Mesoamerican food trio.",
  },
  {
    title: "Avocado Farming",
    date: -7000,
    region: "Mexico",
    geo: "americas",
    description:
      "Persea trees were domesticated in central Mexico, adding rich fats to early diets.",
  },
  {
    title: "Quinoa Domestication",
    date: -3000,
    region: "Andes",
    geo: "americas",
    description:
      "High-altitude farmers bred quinoa as a staple alongside potatoes and llamas.",
  },
  {
    title: "Cassava in the Amazon",
    date: -8000,
    region: "Amazon",
    geo: "americas",
    description:
      "Root crops supported growing populations in tropical lowlands of South America.",
  },
  {
    title: "Chinchorro Mummification",
    date: -5000,
    region: "Peru",
    geo: "americas",
    description:
      "Coastal fisherfolk developed elaborate mummification centuries before Egyptian royal tombs.",
  },
  {
    title: "Valdivia Culture",
    date: -4000,
    region: "Ecuador",
    geo: "americas",
    description:
      "Ceramic villages on the Pacific coast traded shells and obsidian along the Andean fringe.",
  },
  {
    title: "Chavín Religious Center",
    date: -3000,
    region: "Peru",
    lat: -9.59,
    lon: -77.18,
    geo: "americas",
    description:
      "Temple complexes in the Andes spread art styles and ritual influence across much of Peru.",
  },
  {
    title: "Tehuacán Valley Farming",
    date: -5000,
    region: "Mexico",
    geo: "americas",
    description:
      "Cave records trace the slow transition from gathering to farming in central Mexico.",
  },
  {
    title: "Caral Priesthood Peak",
    date: -2800,
    region: "Peru",
    geo: "americas",
    description:
      "Norte Chico elites organized labor for pyramids and plazas without pottery or war weapons.",
  },
  {
    title: "Poverty Point Earthworks",
    date: -1200,
    region: "Louisiana",
    geo: "americas",
    description:
      "Concentric ridges and imported stone marked a major ceremonial center in North America.",
  },
  {
    title: "San José Mogote Leadership",
    date: -1500,
    region: "Mexico",
    geo: "americas",
    description:
      "An early Zapotec center in Oaxaca showed public buildings before Monte Albán rose.",
  },
  {
    title: "Amazonian Terra Preta",
    date: -500,
    region: "Brazil",
    geo: "americas",
    description:
      "Fertile dark soils from burning and composting supported dense villages in the rainforest.",
  },
  {
    title: "Eastern Woodlands Mounds",
    date: -3000,
    region: "North America",
    geo: "americas",
    description:
      "Hunter-farmers built earthworks and traded copper across the Mississippi watershed.",
  },
  {
    title: "Clovis Hunters Spread",
    date: -11500,
    region: "North America",
    geo: "americas",
    description:
      "Distinctive fluted spear points marked rapid expansion of big-game hunters across the continent.",
  },
  /* —— Oceania (expand to 20) —— */
  {
    title: "First Settlement of Australia",
    date: -50000,
    region: "Australia",
    geo: "oceania",
    description:
      "Maritime explorers reached Sahul, establishing the oldest continuous cultures outside Africa.",
  },
  {
    title: "Mungo Lady Burial",
    date: -40000,
    region: "Australia",
    geo: "oceania",
    description:
      "Ritual cremation at Lake Mungo is among the world's earliest known ceremonial burials.",
  },
  {
    title: "Lapita Pottery Expansion",
    date: -3400,
    region: "Pacific",
    geo: "oceania",
    description:
      "Decorated pottery and outrigger canoes spread Austronesian voyagers across Melanesia.",
  },
  {
    title: "Settlement of Vanuatu",
    date: -3000,
    region: "Vanuatu",
    geo: "oceania",
    description:
      "Lapita descendants colonized volcanic islands east of the Solomon chain.",
  },
  {
    title: "Tonga First Settled",
    date: -2800,
    region: "Tonga",
    geo: "oceania",
    description:
      "Polynesian voyagers reached Tonga, stepping toward settlement of remote Pacific islands.",
  },
  {
    title: "Fiji Lapita Sites",
    date: -3000,
    region: "Fiji",
    geo: "oceania",
    description:
      "Island chains hosted pottery-bearing farmers linking Melanesia to western Polynesia.",
  },
  {
    title: "Solomon Islands Colonized",
    date: -3000,
    region: "Solomon Islands",
    geo: "oceania",
    description:
      "Lapita and post-Lapita communities settled archipelagos on the edge of the Pacific.",
  },
  {
    title: "Marianas Islands Settlement",
    date: -1500,
    region: "Marianas",
    geo: "oceania",
    description:
      "Chamorro ancestors built latte stones and sailed the western fringe of Micronesia.",
  },
  {
    title: "Micronesian Navigation",
    date: -2000,
    region: "Micronesia",
    geo: "oceania",
    description:
      "Star compasses and stick charts guided voyages between low coral atolls.",
  },
  {
    title: "Polynesian Taro Farming",
    date: -2500,
    region: "Polynesia",
    geo: "oceania",
    description:
      "Root crops and tree foods spread as horticulture intensified on Pacific islands.",
  },
  {
    title: "Kuk Swamp Drainage",
    date: -7000,
    region: "New Guinea highlands",
    geo: "oceania",
    description:
      "Early farmers dug channels to manage wetlands for taro in Highland New Guinea.",
  },
  {
    title: "Torres Strait Exchange",
    date: -2500,
    region: "Melanesia",
    geo: "oceania",
    description:
      "Islanders traded between New Guinea and Australia across the shallow strait.",
  },
  {
    title: "Sahul Coast Trade Networks",
    date: -8000,
    region: "Australia",
    geo: "oceania",
    description:
      "Stone axes and shells moved hundreds of kilometers along northern Australian routes.",
  },
  {
    title: "Burrup Peninsula Rock Art",
    date: -10000,
    region: "Australia",
    geo: "oceania",
    description:
      "Engravings on northwestern rocks preserve images of extinct animals and early ceremonies.",
  },
  {
    title: "Willandra Lakes Fisheries",
    date: -20000,
    region: "Australia",
    geo: "oceania",
    description:
      "Fish traps and camps at ancient lakes supported stable communities in inland Australia.",
  },
  {
    title: "Samoa Settlement",
    date: -1000,
    region: "Samoa",
    geo: "oceania",
    description:
      "Polynesian chiefdoms organized taro plots and voyaging canoes in western Polynesia.",
  },
  {
    title: "Hawaiian Precursor Voyages",
    date: -800,
    region: "Polynesia",
    geo: "oceania",
    description:
      "Long open-ocean crossings foreshadowed permanent settlement of the Hawaiian archipelago.",
  },
  {
    title: "Banana Cultivation in New Guinea",
    date: -5000,
    region: "New Guinea highlands",
    geo: "oceania",
    description:
      "Bananas and taro supported growing populations in one of the world's independent cradles of farming.",
  },
  ];

  const EVENTS = cards;

  /** Large geographic areas for map icons on cards */
  const GEO_META = {
    asia: {
      label: "Asia",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M4 8c2-3 6-5 10-4 3 1 6 4 7 8 1 4-1 8-4 10H8c-3-2-5-6-4-10 1-2 2-3 0-4z"/></svg>',
    },
    europe: {
      label: "Europe",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M5 6c2-2 5-2 7 0 2 2 3 5 2 8l-2 6H6l-2-6c-1-3 0-6 1-8z"/></svg>',
    },
    africa: {
      label: "Africa",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M11 3c3 0 5 3 5 7 0 2-1 4-2 6l-1 5H9l-1-5c-1-2-2-4-2-6 0-4 2-7 5-7z"/></svg>',
    },
    americas: {
      label: "Americas",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M7 3c2 0 3 2 3 5v3c0 3-1 6-2 8 1-1 2-2 3-2 1 0 2 1 2 3v2c0 2-1 4-3 4s-3-2-3-4v-1c-2 0-3-2-3-4 0-5 2-10 3-14z"/></svg>',
    },
    oceania: {
      label: "Oceania",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><circle cx="8" cy="16" r="3"/><circle cx="16" cy="14" r="2.5"/><circle cx="13" cy="19" r="2"/></svg>',
    },
    "middle-east": {
      label: "Middle East",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M6 10c2-4 6-6 10-4 2 1 3 3 3 6 0 3-2 5-5 6l-4 2c-2-1-3-3-3-6 0-2 0-3-1-4z"/></svg>',
    },
    eurasia: {
      label: "Eurasia",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M3 11c3-4 8-6 13-5 4 1 7 4 7 8s-3 7-7 8H8c-4-1-7-4-7-7 0-2 1-3 2-4z"/></svg>',
    },
    beringia: {
      label: "Beringia (Asia–Americas)",
      svg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M3 12c0-2 2-4 4-4h2v8H7c-2 0-4-2-4-4zm14 0c0-2-2-4-4-4h-2v8h2c2 0 4-2 4-4z"/><path d="M10 10h4v4h-4z" opacity=".35"/></svg>',
    },
  };

  /** Display order for the welcome-screen geographic key */
  const GEO_LEGEND_ORDER = [
    "middle-east",
    "asia",
    "eurasia",
    "beringia",
    "europe",
    "africa",
    "americas",
    "oceania",
  ];

  function countEventsByGeo() {
    const counts = {};
    GEO_LEGEND_ORDER.forEach(function (geo) {
      counts[geo] = 0;
    });
    EVENTS.forEach(function (event) {
      const geo = resolveGeo(event);
      if (counts[geo] !== undefined) {
        counts[geo]++;
      }
    });
    return counts;
  }

  function getSelectedGeos() {
    const selected = [];
    GEO_LEGEND_ORDER.forEach(function (geo) {
      const input = document.querySelector(
        '.geo-picker-item input[data-geo="' + geo + '"]'
      );
      if (input && input.checked) {
        selected.push(geo);
      }
    });
    return selected;
  }

  function getFilteredEvents(selectedGeos) {
    return EVENTS.filter(function (event) {
      return selectedGeos.indexOf(resolveGeo(event)) !== -1;
    });
  }

  function getRoundsForPool(poolSize) {
    return Math.min(MYSTERY_ROUNDS_PER_GAME, Math.max(0, poolSize - 1));
  }

  function updateRegionPickerStatus() {
    if (!el.geoPickerStatus) return;

    const selected = getSelectedGeos();
    const pool = getFilteredEvents(selected);
    const rounds = getRoundsForPool(pool.length);

    el.btnStart.disabled = pool.length < 2;

    if (selected.length === 0) {
      el.geoPickerStatus.textContent =
        "Select at least one region to play.";
      el.geoPickerStatus.classList.add("geo-picker-status--warn");
      return;
    }

    el.geoPickerStatus.classList.remove("geo-picker-status--warn");

    if (pool.length < 2) {
      el.geoPickerStatus.textContent =
        "Only " +
        pool.length +
        " event in this selection — pick more regions.";
      el.geoPickerStatus.classList.add("geo-picker-status--warn");
      return;
    }

    el.geoPickerStatus.textContent =
      pool.length +
      " events available · " +
      rounds +
      " round" +
      (rounds === 1 ? "" : "s") +
      " per game";
  }

  function setAllRegionCheckboxes(checked) {
    document.querySelectorAll(".geo-picker-item input[data-geo]").forEach(function (input) {
      input.checked = checked;
    });
    updateRegionPickerStatus();
  }

  function renderGeoRegionPicker() {
    const container = document.getElementById("geo-picker");
    if (!container) return;

    const counts = countEventsByGeo();

    const title = document.createElement("h3");
    title.className = "geo-picker-title";
    title.textContent = "Regions to include";

    const actions = document.createElement("div");
    actions.className = "geo-picker-actions";

    const btnAll = document.createElement("button");
    btnAll.type = "button";
    btnAll.className = "geo-picker-action";
    btnAll.textContent = "Select all";
    btnAll.addEventListener("click", function () {
      setAllRegionCheckboxes(true);
    });

    const btnNone = document.createElement("button");
    btnNone.type = "button";
    btnNone.className = "geo-picker-action";
    btnNone.textContent = "Clear all";
    btnNone.addEventListener("click", function () {
      setAllRegionCheckboxes(false);
    });

    actions.appendChild(btnAll);
    actions.appendChild(btnNone);

    const list = document.createElement("ul");
    list.className = "geo-picker-list";

    GEO_LEGEND_ORDER.forEach(function (geo) {
      const meta = GEO_META[geo];
      if (!meta) return;

      const row = document.createElement("label");
      row.className = "geo-picker-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;
      checkbox.dataset.geo = geo;
      checkbox.addEventListener("change", updateRegionPickerStatus);

      const icon = document.createElement("span");
      icon.className = "card-geo card-geo--" + geo;
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = meta.svg;

      const text = document.createElement("span");
      text.className = "geo-picker-label";
      text.appendChild(document.createTextNode(meta.label + " "));
      const countSpan = document.createElement("span");
      countSpan.className = "geo-picker-count";
      countSpan.textContent = "(" + counts[geo] + ")";
      text.appendChild(countSpan);

      row.appendChild(checkbox);
      row.appendChild(icon);
      row.appendChild(text);

      const item = document.createElement("li");
      item.appendChild(row);
      list.appendChild(item);
    });

    container.replaceChildren(title, actions, list);
    updateRegionPickerStatus();
  }

  /** Infer geographic area from region label */
  function inferGeo(region) {
    const r = region.toLowerCase();

    if (r.includes("bering")) return "beringia";
    if (
      r.includes("japan") ||
      r.includes("china") ||
      r.includes("yangtze") ||
      r.includes("korea") ||
      r.includes("vietnam") ||
      r.includes("thailand") ||
      r.includes("india") ||
      r.includes("pakistan") ||
      r.includes("afghanistan")
    ) {
      return "asia";
    }
    if (r.includes("yellow river") || r.includes("indus")) return "asia";
    if (r.includes("south asia")) return "asia";
    if (
      r.includes("mesoamerica") ||
      r.includes("andes") ||
      r.includes("peru") ||
      r.includes("mexico") ||
      r.includes("amazon") ||
      r.includes("brazil") ||
      r.includes("ecuador") ||
      r.includes("caribbean") ||
      r.includes("guatemala") ||
      r.includes("bolivia") ||
      r.includes("chile") ||
      r.includes("colombia") ||
      r.includes("louisiana") ||
      r.includes("north america")
    ) {
      return "americas";
    }
    if (
      r.includes("egypt") ||
      r.includes("sahara") ||
      r.includes("africa") ||
      r.includes("nubia") ||
      r.includes("sudan") ||
      r.includes("ethiopia") ||
      r.includes("kenya") ||
      r.includes("mali") ||
      r.includes("nigeria") ||
      r.includes("congo") ||
      r.includes("maghreb") ||
      r.includes("horn of africa")
    ) {
      return "africa";
    }
    if (
      r.includes("britain") ||
      r.includes("ireland") ||
      r.includes("orkney") ||
      r.includes("crete") ||
      r.includes("aegean") ||
      r.includes("mediterranean") ||
      r.includes("romania") ||
      r.includes("ukraine") ||
      r.includes("central europe") ||
      r.includes("eastern europe") ||
      r.includes("atlantic europe") ||
      r.includes("iberia") ||
      r.includes("scandinavia") ||
      r.includes("alps") ||
      r.includes("denmark") ||
      r.includes("france") ||
      r.includes("germany") ||
      r.includes("italy") ||
      r.includes("spain") ||
      r.includes("portugal") ||
      r.includes("bulgaria") ||
      r.includes("serbia")
    ) {
      return "europe";
    }
    if (
      r.includes("pacific") ||
      r.includes("new guinea") ||
      r.includes("southeast asia") ||
      r.includes("australia") ||
      r.includes("melanesia") ||
      r.includes("polynesia") ||
      r.includes("micronesia") ||
      r.includes("fiji") ||
      r.includes("tonga") ||
      r.includes("samoa") ||
      r.includes("vanuatu") ||
      r.includes("solomon") ||
      r.includes("marianas")
    ) {
      return "oceania";
    }
    if (
      r.includes("eurasia") ||
      r.includes("steppe") ||
      r.includes("siberia") ||
      r.includes("altai") ||
      r.includes("kazakhstan") ||
      r.includes("mongolia") ||
      r.includes("siberian")
    ) {
      return "eurasia";
    }
    if (
      r.includes("mesopotamia") ||
      r.includes("levant") ||
      r.includes("fertile") ||
      r.includes("near east") ||
      r.includes("middle east") ||
      r.includes("anatolia") ||
      r.includes("zagros") ||
      r.includes("syria") ||
      r.includes("iran") ||
      r.includes("persia") ||
      r.includes("caucasus") ||
      r.includes("arabia") ||
      r.includes("yemen") ||
      r.includes("balkans")
    ) {
      return "middle-east";
    }

    return "middle-east";
  }

  function resolveGeo(event) {
    return event.geo || inferGeo(event.region);
  }

  function applyGeoToDeck() {
    EVENTS.forEach(function (event) {
      if (!event.geo) {
        event.geo = inferGeo(event.region);
      }
    });
  }

  applyGeoToDeck();

  function buildCardHeaderHtml(event) {
    const geo = resolveGeo(event);
    const meta = GEO_META[geo] || GEO_META.eurasia;
    return (
      '<div class="card-header">' +
      '<span class="card-geo card-geo--' +
      geo +
      '" role="img" aria-label="' +
      escapeHtml(meta.label) +
      '">' +
      meta.svg +
      "</span>" +
      '<p class="card-region">' +
      escapeHtml(event.region) +
      "</p>" +
      "</div>"
    );
  }

  function setCardGeoIcon(container, event) {
    const geo = resolveGeo(event);
    const meta = GEO_META[geo] || GEO_META.eurasia;
    container.className = "card-geo card-geo--" + geo;
    container.innerHTML = meta.svg;
    container.setAttribute("aria-label", meta.label);
    container.removeAttribute("aria-hidden");
  }

  /** Mystery cards per session (full deck is shuffled; only this many rounds per game) */
  const MYSTERY_ROUNDS_PER_GAME = 15;
  const TIMELINE_SLIDE_MS = 480;
  const CORRECT_CELEBRATE_MS = 720;
  const CORRECT_SPARK_COUNT = 14;

  /** Game phases */
  const MOBILE_MQ = window.matchMedia("(max-width: 47.9375rem)");

  const PHASE = {
    START: "start",
    PLACING: "placing",
    REVEAL: "reveal",
    END: "end",
  };

  /** @type {typeof EVENTS} */
  let timeline = [];
  /** @type {typeof EVENTS} */
  let deck = [];
  /** All events in play this session (selected regions) — sets range bar bounds */
  /** @type {typeof EVENTS} */
  let gameEventPool = [];
  /** Geographic areas chosen when the current game started (map zoom) */
  let gameSelectedGeos = [];
  /** @type {typeof EVENTS[0] | null} */
  let mysteryCard = null;
  let score = 0;
  let roundsPlayed = 0;
  let totalRoundsThisGame = MYSTERY_ROUNDS_PER_GAME;
  let phase = PHASE.START;
  /** Index in timeline where the last card was inserted */
  let lastInsertIndex = -1;
  /** Whether the last placement was correct */
  let lastPlacementCorrect = false;
  /** Follows cursor while dragging (native ghost hidden via drag-image stub) */
  let mysteryDragFollower = null;
  let mysteryDragImageStub = null;
  let mysteryDragOffsetX = 0;
  let mysteryDragOffsetY = 0;
  let timelineFlipFinishTimer = null;
  let revealFeedbackTimer = null;
  let correctCelebrateTimer = null;
  let correctSparkBurstEl = null;
  /** Timeline index of the reference event for the current round */
  let roundAnchorIndex = 0;
  /** True if the mystery card belongs before roundAnchorIndex */
  let roundCorrectIsBefore = true;
  /** Insert index when the player answers correctly */
  let roundCorrectInsertIndex = 0;
  /** Timeline indices to highlight and scroll into view (anchor + optional neighbor) */
  let roundHighlightIndices = [];
  let roundAnchorTitle = "";

  const el = {
    score: document.getElementById("score"),
    scoreTotal: document.getElementById("score-total"),
    roundLabel: document.getElementById("round-label"),
    mysteryCard: document.getElementById("mystery-card"),
    mysteryGeo: document.getElementById("mystery-geo"),
    mysteryRegion: document.getElementById("mystery-region"),
    mysteryTitle: document.getElementById("mystery-title"),
    mysteryDescription: document.getElementById("mystery-description"),
    mysteryDate: document.getElementById("mystery-date"),
    mysteryDateText: document.getElementById("mystery-date-text"),
    mysteryPlaceholder: document.getElementById("mystery-placeholder"),
    dragHint: document.getElementById("drag-hint"),
    placementPanel: document.getElementById("placement-panel"),
    placementPrompt: document.getElementById("placement-prompt"),
    placementChoices: document.getElementById("placement-choices"),
    btnPlaceBefore: document.getElementById("btn-place-before"),
    btnPlaceAfter: document.getElementById("btn-place-after"),
    feedback: document.getElementById("feedback"),
    gameStage: document.querySelector(".game-stage"),
    mysteryDock: document.getElementById("mystery-dock"),
    gameTop: document.querySelector(".game-top"),
    timeline: document.getElementById("timeline"),
    timelineSection: document.getElementById("timeline-section"),
    timelineScroll: document.getElementById("timeline-scroll"),
    timelineTrack: document.getElementById("timeline-track"),
    timelineWelcomeMap: document.getElementById("timeline-welcome-map"),
    btnTheme: document.getElementById("btn-theme"),
    btnHeaderMenu: document.getElementById("btn-header-menu"),
    headerMenuDropdown: document.getElementById("header-menu-dropdown"),
    timelineRange: document.getElementById("timeline-range"),
    timelineRangeStart: document.getElementById("timeline-range-start"),
    timelineRangeEnd: document.getElementById("timeline-range-end"),
    timelineRangeMarkers: document.getElementById("timeline-range-markers"),
    timelineWorldMap: document.getElementById("timeline-world-map"),
    timelineWorldMapSvg: document.getElementById("timeline-world-map-svg"),
    timelineWorldMapLayer: document.getElementById("timeline-world-map-layer"),
    timelineWorldMapDots: document.getElementById("timeline-world-map-dots"),
    cardTooltip: document.getElementById("card-tooltip"),
    mapTooltip: document.getElementById("map-tooltip"),
    startScreen: document.getElementById("start-screen"),
    endScreen: document.getElementById("end-screen"),
    endMessage: document.getElementById("end-message"),
    endScore: document.getElementById("end-score"),
    btnStart: document.getElementById("btn-start"),
    btnRestart: document.getElementById("btn-restart"),
    btnHeaderRestart: document.getElementById("btn-header-restart"),
    btnNext: document.getElementById("btn-next"),
    roundActions: document.getElementById("round-actions"),
    geoPickerStatus: document.getElementById("geo-picker-status"),
  };

  /** Fisher–Yates shuffle */
  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /** Format year for display (negative = BCE) */
  function formatDate(year) {
    if (year < 0) {
      return Math.abs(year).toLocaleString() + " BCE";
    }
    if (year > 0) {
      return year.toLocaleString() + " CE";
    }
    return "1 CE";
  }

  function eventYear(date) {
    return Number(date);
  }

  /** Left to right: non-decreasing years (equal years may be in any order) */
  function isChronological(events) {
    for (let i = 1; i < events.length; i++) {
      if (eventYear(events[i].date) < eventYear(events[i - 1].date)) {
        return false;
      }
    }
    return true;
  }

  /** True if inserting `event` at `index` keeps timeline in order */
  function isValidInsertIndex(event, list, index) {
    if (Number.isNaN(eventYear(event.date))) return false;
    const trial = list.slice();
    trial.splice(index, 0, event);
    return isChronological(trial);
  }

  function isCorrectPlacement(event, index) {
    return isValidInsertIndex(event, timeline, index);
  }

  function placementIsBeforeAnchor(insertIndex) {
    return insertIndex <= roundAnchorIndex;
  }

  function mysterySameYearAsAnchor() {
    const anchor = timeline[roundAnchorIndex];
    if (!mysteryCard || !anchor) return false;
    return eventYear(mysteryCard.date) === eventYear(anchor.date);
  }

  /** All indices where `event` may be inserted (same-year neighbors allow either side) */
  function findValidInsertIndices(event, list) {
    const indices = [];
    for (let i = 0; i <= list.length; i++) {
      if (isValidInsertIndex(event, list, i)) {
        indices.push(i);
      }
    }
    return indices;
  }

  /** Snap to nearest valid index; prefers the player's slot when same-year */
  /** Pick anchor event + before/after answer for the current mystery card */
  function setupRoundPlacement() {
    const valid = findValidInsertIndices(mysteryCard, timeline);
    const questionOptions = [];

    valid.forEach(function (insertIdx) {
      if (insertIdx === 0) {
        questionOptions.push({ anchor: 0, before: true, insert: 0 });
      }
      if (insertIdx === timeline.length) {
        questionOptions.push({
          anchor: timeline.length - 1,
          before: false,
          insert: timeline.length,
        });
      }
      if (insertIdx > 0 && insertIdx < timeline.length) {
        questionOptions.push({ anchor: insertIdx, before: true, insert: insertIdx });
        questionOptions.push({
          anchor: insertIdx - 1,
          before: false,
          insert: insertIdx,
        });
      }
    });

    if (!questionOptions.length) {
      roundAnchorIndex = 0;
      roundCorrectIsBefore = true;
      roundCorrectInsertIndex = 0;
    } else {
      const pick = questionOptions[Math.floor(Math.random() * questionOptions.length)];
      roundAnchorIndex = pick.anchor;
      roundCorrectIsBefore = pick.before;
      roundCorrectInsertIndex = pick.insert;
    }

    roundAnchorTitle = timeline[roundAnchorIndex]
      ? timeline[roundAnchorIndex].title
      : "";

    roundHighlightIndices = [roundAnchorIndex];
    if (timeline.length > 1) {
      if (roundCorrectIsBefore && roundAnchorIndex > 0) {
        roundHighlightIndices.push(roundAnchorIndex - 1);
      } else if (!roundCorrectIsBefore && roundAnchorIndex < timeline.length - 1) {
        roundHighlightIndices.push(roundAnchorIndex + 1);
      } else if (roundAnchorIndex > 0) {
        roundHighlightIndices.push(roundAnchorIndex - 1);
      } else if (roundAnchorIndex < timeline.length - 1) {
        roundHighlightIndices.push(roundAnchorIndex + 1);
      }
    }
    roundHighlightIndices = roundHighlightIndices.filter(function (value, index, list) {
      return list.indexOf(value) === index;
    });
  }

  function getRoundFocusElements() {
    const nodes = [];
    if (!el.timeline) return nodes;

    const anchorSlot = el.timeline.querySelector(
      '[data-timeline-index="' + roundAnchorIndex + '"]'
    );
    if (!anchorSlot) return nodes;

    let sibling = anchorSlot.previousElementSibling;
    while (sibling) {
      if (sibling.classList.contains("drop-zone--anchor-before")) {
        nodes.push(sibling);
        break;
      }
      if (sibling.classList.contains("timeline-slot")) {
        break;
      }
      sibling = sibling.previousElementSibling;
    }

    nodes.push(anchorSlot);

    sibling = anchorSlot.nextElementSibling;
    while (sibling) {
      if (sibling.classList.contains("drop-zone--anchor-after")) {
        nodes.push(sibling);
        break;
      }
      if (sibling.classList.contains("timeline-slot")) {
        break;
      }
      sibling = sibling.nextElementSibling;
    }

    roundHighlightIndices.forEach(function (index) {
      if (index === roundAnchorIndex) return;
      const slot = el.timeline.querySelector(
        '[data-timeline-index="' + index + '"]'
      );
      if (slot && nodes.indexOf(slot) < 0) {
        nodes.push(slot);
      }
    });

    return nodes;
  }

  function getTimelineSlotsForIndices(indices) {
    if (!el.timeline) return [];
    return indices
      .map(function (index) {
        return el.timeline.querySelector(
          '[data-timeline-index="' + index + '"]'
        );
      })
      .filter(Boolean);
  }

  function getMapCenterX() {
    if (el.timelineWorldMap && !el.timelineWorldMap.hidden) {
      const mapRect = el.timelineWorldMap.getBoundingClientRect();
      return mapRect.left + mapRect.width / 2;
    }
    if (el.timelineSection) {
      const sectionRect = el.timelineSection.getBoundingClientRect();
      return sectionRect.left + sectionRect.width / 2;
    }
    return window.innerWidth / 2;
  }

  function getAnchorSlotElement() {
    if (!el.timeline) return null;
    return el.timeline.querySelector(
      '[data-timeline-index="' + roundAnchorIndex + '"]'
    );
  }

  function getOffsetLeftWithin(node, ancestor) {
    let left = 0;
    let current = node;
    while (current && current !== ancestor) {
      left += current.offsetLeft;
      current = current.offsetParent;
      if (!current || !ancestor.contains(current)) {
        break;
      }
    }
    return left;
  }

  function getAnchorCenterInTrack() {
    const anchorSlot = getAnchorSlotElement();
    if (!anchorSlot || !el.timelineTrack) return 0;
    return (
      getOffsetLeftWithin(anchorSlot, el.timelineTrack) + anchorSlot.offsetWidth / 2
    );
  }

  function applyTimelineScrollPadding() {
    if (!el.timelineScroll || !el.timelineTrack || !el.timeline) return false;

    el.timelineTrack.style.paddingLeft = "0";
    el.timelineTrack.style.paddingRight = "0";
    el.timelineTrack.classList.remove("timeline-track--fits");
    void el.timeline.offsetWidth;

    const scrollEl = el.timelineScroll;
    const contentWidth = el.timeline.scrollWidth;
    const clientWidth = scrollEl.clientWidth;

    if (clientWidth < 1) return false;

    if (contentWidth <= clientWidth + 1) {
      el.timelineTrack.classList.add("timeline-track--fits");
      scrollEl.scrollLeft = 0;
      return true;
    }

    const pad = Math.ceil(clientWidth / 2);
    el.timelineTrack.style.paddingLeft = pad + "px";
    el.timelineTrack.style.paddingRight = pad + "px";
    return false;
  }

  function scrollTimelineToMapCenter(contentCenterX, smooth) {
    const scrollEl = el.timelineScroll;
    if (!scrollEl || typeof contentCenterX !== "number") return;

    const mapCenter = getMapCenterX();
    const scrollRect = scrollEl.getBoundingClientRect();
    const mapCenterInScroll = mapCenter - scrollRect.left;
    let targetScroll = contentCenterX - mapCenterInScroll;
    const maxScroll = Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
    targetScroll = Math.min(maxScroll, Math.max(0, targetScroll));

    scrollEl.scrollTo({
      left: targetScroll,
      behavior: smooth ? "smooth" : "auto",
    });
  }

  function getNodeCenterInTrack(node) {
    if (!node || !el.timelineTrack) return 0;
    return getOffsetLeftWithin(node, el.timelineTrack) + node.offsetWidth / 2;
  }

  function centerNodesUnderMap(nodes, smooth) {
    if (!nodes.length) return;

    let minCenter = Infinity;
    let maxCenter = -Infinity;

    nodes.forEach(function (node) {
      const center = getNodeCenterInTrack(node);
      minCenter = Math.min(minCenter, center);
      maxCenter = Math.max(maxCenter, center);
    });

    scrollTimelineToMapCenter((minCenter + maxCenter) / 2, smooth);
  }

  function centerAnchorUnderMap(smooth) {
    applyTimelineScrollPadding();
    scrollTimelineToMapCenter(getAnchorCenterInTrack(), smooth);
  }

  function syncTimelineScrollLayout() {
    applyTimelineScrollPadding();
    if (el.timelineScroll) {
      void el.timelineScroll.offsetHeight;
    }
  }

  function runAfterTimelineLayout(callback) {
    requestAnimationFrame(function () {
      applyTimelineScrollPadding();
      requestAnimationFrame(function () {
        if (el.timelineScroll) {
          void el.timelineScroll.offsetWidth;
        }
        callback();
        window.setTimeout(callback, 80);
      });
    });
  }

  function getFocusIndicesForInsert(insertIndex) {
    const anchorAfter =
      insertIndex <= roundAnchorIndex ? roundAnchorIndex + 1 : roundAnchorIndex;
    const indices = [insertIndex, anchorAfter];
    return indices.filter(function (value, index, list) {
      return list.indexOf(value) === index;
    });
  }

  function getPostPlacementFocusIndices() {
    return getFocusIndicesForInsert(lastInsertIndex);
  }

  function centerRoundFocusInTimeline(smooth) {
    centerAnchorUnderMap(smooth);
  }

  function centerRevealInTimeline(smooth) {
    centerNodesUnderMap(
      getTimelineSlotsForIndices(getPostPlacementFocusIndices()),
      smooth
    );
  }

  function scheduleCenterRevealInTimeline(smooth) {
    runAfterTimelineLayout(function () {
      centerRevealInTimeline(smooth);
    });
  }

  function scrollTimelineToRoundContext() {
    if (!el.timelineScroll || !el.timeline) return;

    el.timelineScroll.scrollLeft = 0;
    runAfterTimelineLayout(function () {
      centerAnchorUnderMap(false);
    });
  }

  function isMobileViewport() {
    return MOBILE_MQ.matches;
  }

  function syncPlacementPanelForViewport() {
    if (!el.placementPanel) return;
    if (phase !== PHASE.PLACING) {
      return;
    }
    el.placementPanel.hidden = !isMobileViewport();
    updateDragHint();
  }

  function updateDragHint() {
    if (!el.dragHint || el.dragHint.hidden) return;
    if (isMobileViewport()) {
      el.dragHint.textContent =
        "Drag onto Before or After beside the highlighted event, or tap the buttons below.";
    } else {
      el.dragHint.textContent =
        "Drag the mystery card onto Before or After beside the highlighted event on the timeline.";
    }
    updateMysteryDockLayout();
  }

  function updatePlacementUI() {
    if (!el.placementPanel || !timeline.length) return;

    const anchor = timeline[roundAnchorIndex];
    if (!anchor) return;

    el.placementPanel.hidden = !isMobileViewport();

    if (el.placementPrompt) {
      el.placementPrompt.textContent =
        "Did the mystery card happen before or after “" + anchor.title + "”?";
    }
    if (el.btnPlaceBefore) {
      el.btnPlaceBefore.textContent = "Before — " + anchor.title;
      el.btnPlaceBefore.setAttribute(
        "aria-label",
        "Place before " + anchor.title
      );
      el.btnPlaceBefore.disabled = false;
    }
    if (el.btnPlaceAfter) {
      el.btnPlaceAfter.textContent = "After — " + anchor.title;
      el.btnPlaceAfter.setAttribute("aria-label", "Place after " + anchor.title);
      el.btnPlaceAfter.disabled = false;
    }
    if (el.placementChoices) {
      el.placementChoices.hidden = false;
    }
    updateDragHint();
  }

  function disablePlacementChoices() {
    if (el.btnPlaceBefore) el.btnPlaceBefore.disabled = true;
    if (el.btnPlaceAfter) el.btnPlaceAfter.disabled = true;
  }

  function submitPlacementChoice(isBefore) {
    if (!mysteryCard || phase !== PHASE.PLACING) return;
    const insertIndex = isBefore ? roundAnchorIndex : roundAnchorIndex + 1;
    placeCard(insertIndex);
  }

  function findChronologicalInsertIndex(event, list, preferredIndex) {
    const valid = findValidInsertIndices(event, list);
    if (!valid.length) {
      return 0;
    }
    if (typeof preferredIndex !== "number") {
      return valid[0];
    }
    let best = valid[0];
    let bestDist = Math.abs(preferredIndex - best);
    valid.forEach(function (i) {
      const dist = Math.abs(preferredIndex - i);
      if (dist < bestDist) {
        best = i;
        bestDist = dist;
      }
    });
    return best;
  }

  function updateScoreboard() {
    el.score.textContent = String(score);
    el.scoreTotal.textContent = String(totalRoundsThisGame);
    el.roundLabel.textContent =
      roundsPlayed < totalRoundsThisGame
        ? "Round " + (roundsPlayed + 1) + " of " + totalRoundsThisGame
        : "Complete";
  }

  function getDropZoneLabel(index) {
    if (timeline.length === 0) {
      return "Place on timeline";
    }
    if (index === 0) {
      return "Drop before " + timeline[0].title + " (earliest)";
    }
    if (index >= timeline.length) {
      return "Drop after " + timeline[timeline.length - 1].title + " (latest)";
    }
    return (
      "Drop between " +
      timeline[index - 1].title +
      " and " +
      timeline[index].title
    );
  }

  function getDropZoneShortLabel(index) {
    if (index === 0) return "Earlier";
    if (index >= timeline.length) return "Later";
    return "Drop here";
  }

  function buildTimelineCardHeaderHtml(event) {
    const geo = resolveGeo(event);
    const meta = GEO_META[geo] || GEO_META.eurasia;
    return (
      '<div class="card-header card-header--compact">' +
      '<span class="card-geo card-geo--' +
      geo +
      '" role="img" aria-label="' +
      escapeHtml(meta.label) +
      '">' +
      meta.svg +
      "</span>" +
      '<p class="card-region card-region--compact">' +
      escapeHtml(event.region) +
      "</p>" +
      "</div>"
    );
  }

  function buildTimelineCardHtml(event) {
    return (
      buildTimelineCardHeaderHtml(event) +
      '<h3 class="card-title card-title--compact">' +
      escapeHtml(event.title) +
      "</h3>" +
      '<p class="card-date-compact">' +
      escapeHtml(formatDate(event.date)) +
      "</p>"
    );
  }

  function buildTooltipHtml(event) {
    const geo = resolveGeo(event);
    const meta = GEO_META[geo] || GEO_META.eurasia;
    return (
      '<div class="card-tooltip-header">' +
      '<span class="card-geo card-geo--' +
      geo +
      '" aria-hidden="true">' +
      meta.svg +
      "</span>" +
      '<span class="card-tooltip-region">' +
      escapeHtml(event.region) +
      "</span>" +
      "</div>" +
      '<p class="card-tooltip-title">' +
      escapeHtml(event.title) +
      "</p>" +
      '<p class="card-tooltip-date">' +
      escapeHtml(formatDate(event.date)) +
      "</p>" +
      '<p class="card-tooltip-description">' +
      escapeHtml(event.description) +
      "</p>"
    );
  }

  let tooltipAnchor = null;
  let tooltipHideTimer = null;
  let mapTooltipAnchor = null;
  let mapTooltipHideTimer = null;
  const TOOLTIP_FADE_MS = 220;

  function positionCardTooltip(anchor) {
    const tip = el.cardTooltip;
    const rect = anchor.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const gap = 8;
    let top = rect.bottom + gap;
    let left = rect.left + rect.width / 2 - tipRect.width / 2;

    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    if (top + tipRect.height > window.innerHeight - 8) {
      top = rect.top - tipRect.height - gap;
    }
    top = Math.max(8, Math.min(top, window.innerHeight - tipRect.height - 8));

    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }

  function buildMapTooltipHtml(event) {
    return (
      '<p class="map-tooltip-title">' +
      escapeHtml(event.title) +
      "</p>" +
      '<p class="map-tooltip-meta">' +
      escapeHtml(event.region) +
      " · " +
      escapeHtml(formatDate(event.date)) +
      "</p>"
    );
  }

  function positionMapTooltip(anchor) {
    if (!el.mapTooltip) return;
    const tip = el.mapTooltip;
    const rect = anchor.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const gap = 8;
    let top = rect.bottom + gap;
    let left = rect.left + rect.width / 2 - tipRect.width / 2;

    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    if (top + tipRect.height > window.innerHeight - 8) {
      top = rect.top - tipRect.height - gap;
    }
    top = Math.max(8, Math.min(top, window.innerHeight - tipRect.height - 8));

    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }

  function hideMapTooltip() {
    if (!el.mapTooltip) return;
    el.mapTooltip.classList.remove("card-tooltip--visible");
    if (mapTooltipAnchor) {
      mapTooltipAnchor.removeAttribute("aria-describedby");
      mapTooltipAnchor = null;
    }
    if (mapTooltipHideTimer) {
      clearTimeout(mapTooltipHideTimer);
    }
    mapTooltipHideTimer = setTimeout(function () {
      el.mapTooltip.hidden = true;
      mapTooltipHideTimer = null;
    }, TOOLTIP_FADE_MS);
  }

  function showMapTooltip(event, anchor) {
    if (!el.mapTooltip) return;
    hideCardTooltip();
    if (mapTooltipHideTimer) {
      clearTimeout(mapTooltipHideTimer);
      mapTooltipHideTimer = null;
    }

    mapTooltipAnchor = anchor;
    el.mapTooltip.innerHTML = buildMapTooltipHtml(event);
    el.mapTooltip.hidden = false;
    anchor.setAttribute("aria-describedby", "map-tooltip");
    positionMapTooltip(anchor);

    requestAnimationFrame(function () {
      el.mapTooltip.classList.add("card-tooltip--visible");
    });
  }

  function attachMapMarkerTooltip(marker, event) {
    marker.addEventListener("mouseenter", function () {
      showMapTooltip(event, marker);
    });
    marker.addEventListener("mouseleave", hideMapTooltip);
    marker.addEventListener("focus", function () {
      showMapTooltip(event, marker);
    });
    marker.addEventListener("blur", hideMapTooltip);
  }

  function showCardTooltip(event, anchor) {
    hideMapTooltip();
    if (tooltipHideTimer) {
      clearTimeout(tooltipHideTimer);
      tooltipHideTimer = null;
    }

    tooltipAnchor = anchor;
    el.cardTooltip.innerHTML = buildTooltipHtml(event);
    el.cardTooltip.hidden = false;
    anchor.setAttribute("aria-describedby", "card-tooltip");
    positionCardTooltip(anchor);

    requestAnimationFrame(function () {
      el.cardTooltip.classList.add("card-tooltip--visible");
    });
  }

  function hideCardTooltip() {
    el.cardTooltip.classList.remove("card-tooltip--visible");
    if (tooltipAnchor) {
      tooltipAnchor.removeAttribute("aria-describedby");
      tooltipAnchor = null;
    }

    if (tooltipHideTimer) {
      clearTimeout(tooltipHideTimer);
    }
    tooltipHideTimer = setTimeout(function () {
      el.cardTooltip.hidden = true;
      tooltipHideTimer = null;
    }, TOOLTIP_FADE_MS);
  }

  function attachTimelineTooltip(card, event) {
    card.tabIndex = 0;
    card.classList.add("card--has-tooltip");

    card.addEventListener("mouseenter", function () {
      showCardTooltip(event, card);
    });
    card.addEventListener("mouseleave", hideCardTooltip);
    card.addEventListener("focus", function () {
      showCardTooltip(event, card);
    });
    card.addEventListener("blur", hideCardTooltip);
  }

  function getEventFlipId(event) {
    return event.title.replace(/:/g, "::") + "::" + String(event.date);
  }

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  const REVEAL_FEEDBACK_DELAY_MS = 600;
  const DOCK_REVEAL_FADE_CLASS = "dock-reveal-fade";

  function clearRevealFeedbackTimers() {
    if (revealFeedbackTimer !== null) {
      window.clearTimeout(revealFeedbackTimer);
      revealFeedbackTimer = null;
    }
  }

  function bindDockRevealFadeEnd(element) {
    if (!element) return;
    element.addEventListener(
      "animationend",
      function (event) {
        if (event.target !== element) return;
        element.classList.remove(DOCK_REVEAL_FADE_CLASS);
      },
      { once: true }
    );
  }

  function revealDockElement(element, animate) {
    if (!element) return;
    const useFade = animate && !prefersReducedMotion();
    if (useFade) {
      element.classList.add(DOCK_REVEAL_FADE_CLASS);
    } else {
      element.classList.remove(DOCK_REVEAL_FADE_CLASS);
    }
    element.hidden = false;
    if (useFade) {
      bindDockRevealFadeEnd(element);
    }
  }

  function scheduleRevealFeedback() {
    clearRevealFeedbackTimers();
    const delay = prefersReducedMotion() ? 0 : REVEAL_FEEDBACK_DELAY_MS;

    revealFeedbackTimer = window.setTimeout(function () {
      revealFeedbackTimer = null;
      populateFeedbackContent();
      revealDockElement(el.feedback, true);
      populateRoundActionsContent();
      revealDockElement(el.roundActions, true);
      updateMysteryDockLayout();
    }, delay);
  }

  function captureTimelineFlipRects() {
    const rects = new Map();
    if (!el.timeline) return rects;
    Array.prototype.forEach.call(el.timeline.children, function (child) {
      const id = child.dataset.flipId;
      if (id) rects.set(id, child.getBoundingClientRect());
    });
    return rects;
  }

  function findTimelineSlotForEvent(event) {
    if (!el.timeline) return null;
    return el.timeline.querySelector(
      '[data-flip-id="' + CSS.escape(getEventFlipId(event)) + '"]'
    );
  }

  function clearCorrectPlacementCelebration() {
    if (correctCelebrateTimer !== null) {
      window.clearTimeout(correctCelebrateTimer);
      correctCelebrateTimer = null;
    }
    if (correctSparkBurstEl && correctSparkBurstEl.parentNode) {
      correctSparkBurstEl.parentNode.removeChild(correctSparkBurstEl);
    }
    correctSparkBurstEl = null;
    if (!el.timeline) return;
    el.timeline.querySelectorAll(".card--celebrate-correct").forEach(function (card) {
      card.classList.remove("card--celebrate-correct");
    });
    el.timeline.querySelectorAll(".timeline-slot--celebrate").forEach(function (slot) {
      slot.classList.remove("timeline-slot--celebrate");
    });
  }

  function playCorrectPlacementCelebration() {
    if (prefersReducedMotion() || !el.timeline) return;

    clearCorrectPlacementCelebration();

    const card = el.timeline.querySelector(".card--revealed-correct");
    if (!card) return;

    const slot = card.closest(".timeline-slot");
    card.classList.add("card--celebrate-correct");
    if (slot) {
      slot.classList.add("timeline-slot--celebrate");
    }

    const rect = card.getBoundingClientRect();
    const burst = document.createElement("div");
    burst.className = "correct-spark-burst correct-spark-burst--fixed";
    burst.setAttribute("aria-hidden", "true");
    burst.style.left = rect.left + rect.width / 2 + "px";
    burst.style.top = rect.top + rect.height / 2 + "px";

    for (let i = 0; i < CORRECT_SPARK_COUNT; i++) {
      const spark = document.createElement("span");
      spark.className = "correct-spark";
      if (i % 2 === 1) {
        spark.classList.add("correct-spark--light");
      }
      const angle = (360 / CORRECT_SPARK_COUNT) * i + (i % 2 === 0 ? 8 : -8);
      spark.style.setProperty("--spark-angle", angle + "deg");
      spark.style.setProperty("--spark-delay", i * 0.02 + "s");
      burst.appendChild(spark);
    }

    document.body.appendChild(burst);
    correctSparkBurstEl = burst;
    void card.offsetWidth;

    correctCelebrateTimer = window.setTimeout(function () {
      correctCelebrateTimer = null;
      card.classList.remove("card--celebrate-correct");
      if (slot) {
        slot.classList.remove("timeline-slot--celebrate");
      }
      if (correctSparkBurstEl && correctSparkBurstEl.parentNode) {
        correctSparkBurstEl.parentNode.removeChild(correctSparkBurstEl);
      }
      correctSparkBurstEl = null;
    }, CORRECT_CELEBRATE_MS);
  }

  function cancelTimelineFlipAnimation() {
    if (timelineFlipFinishTimer !== null) {
      window.clearTimeout(timelineFlipFinishTimer);
      timelineFlipFinishTimer = null;
    }
    if (!el.timeline) return;
    el.timeline.classList.remove("timeline--animating");
    Array.prototype.forEach.call(el.timeline.children, function (child) {
      child.style.transition = "";
      child.style.transform = "";
    });
  }

  function playTimelineFlipAnimation(beforeRects, onDone) {
    cancelTimelineFlipAnimation();

    if (!el.timeline || !beforeRects || beforeRects.size === 0) {
      if (onDone) onDone();
      return;
    }

    if (prefersReducedMotion()) {
      if (onDone) onDone();
      return;
    }

    const moved = [];
    Array.prototype.forEach.call(el.timeline.children, function (child) {
      const id = child.dataset.flipId;
      if (!id || !beforeRects.has(id)) return;
      const before = beforeRects.get(id);
      const after = child.getBoundingClientRect();
      const dx = before.left - after.left;
      const dy = before.top - after.top;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
      child.style.transition = "none";
      child.style.transform = "translate(" + dx + "px, " + dy + "px)";
      moved.push(child);
    });

    if (!moved.length) {
      if (onDone) onDone();
      return;
    }

    el.timeline.classList.add("timeline--animating");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        moved.forEach(function (child) {
          child.style.transition = "transform " + TIMELINE_SLIDE_MS + "ms ease";
          child.style.transform = "";
        });

        timelineFlipFinishTimer = window.setTimeout(function () {
          timelineFlipFinishTimer = null;
          moved.forEach(function (child) {
            child.style.transition = "";
            child.style.transform = "";
          });
          el.timeline.classList.remove("timeline--animating");
          if (onDone) onDone();
        }, TIMELINE_SLIDE_MS + 40);
      });
    });
  }

  function createTimelineCardElement(
    event,
    index,
    highlightIndex,
    revealClass,
    slotOptions
  ) {
    slotOptions = slotOptions || {};
    const slot = document.createElement("div");
    slot.className = "timeline-slot";
    slot.setAttribute("role", "listitem");
    slot.dataset.flipId = getEventFlipId(event);
    slot.dataset.timelineIndex = String(index);
    if (slotOptions.isAnchor) {
      slot.classList.add("timeline-slot--anchor");
    }
    if (slotOptions.isContext) {
      slot.classList.add("timeline-slot--context");
    }

    const card = document.createElement("article");
    card.className = "card card--timeline card--compact";
    card.setAttribute(
      "aria-label",
      event.region + ": " + event.title + ", " + formatDate(event.date)
    );
    if (index === highlightIndex && revealClass) {
      card.classList.add(revealClass);
    }

    card.innerHTML = buildTimelineCardHtml(event);
    attachTimelineTooltip(card, event);

    slot.appendChild(card);
    return slot;
  }

  function createAnchorDropZone(isBefore) {
    const anchor = timeline[roundAnchorIndex];
    const anchorTitle = anchor ? anchor.title : "event";
    const zone = document.createElement("div");
    zone.className =
      "drop-zone drop-zone--anchor-side " +
      (isBefore ? "drop-zone--anchor-before" : "drop-zone--anchor-after");
    zone.dataset.placementBefore = isBefore ? "1" : "0";
    zone.setAttribute("role", "button");
    zone.setAttribute("tabindex", "0");
    zone.setAttribute(
      "aria-label",
      (isBefore ? "Place before " : "Place after ") + anchorTitle
    );

    const label = document.createElement("span");
    label.className = "drop-zone-label";
    label.textContent = isBefore ? "Before" : "After";
    zone.appendChild(label);

    zone.addEventListener("dragover", onDragOver);
    zone.addEventListener("dragleave", onDragLeave);
    zone.addEventListener("drop", onDrop);
    zone.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        submitPlacementChoice(isBefore);
      }
    });
    zone.addEventListener("click", function () {
      if (phase === PHASE.PLACING) {
        submitPlacementChoice(isBefore);
      }
    });

    return zone;
  }

  function onDragOver(event) {
    event.preventDefault();
    if (phase !== PHASE.PLACING) return;
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
    }
    const zone = event.currentTarget;
    if (zone && zone.classList.contains("drop-zone")) {
      zone.classList.add("drop-zone--active");
    }
  }

  function onDragLeave(event) {
    const zone = event.currentTarget;
    if (zone && zone.classList.contains("drop-zone")) {
      zone.classList.remove("drop-zone--active");
    }
  }

  function onDrop(event) {
    event.preventDefault();
    const zone = event.currentTarget;
    if (!zone || phase !== PHASE.PLACING) return;
    zone.classList.remove("drop-zone--active");
    if (zone.dataset.placementBefore !== undefined) {
      submitPlacementChoice(zone.dataset.placementBefore === "1");
      return;
    }
    const index = parseInt(zone.dataset.insertIndex, 10);
    if (!Number.isNaN(index)) {
      placeCard(index);
    }
  }

  function cleanupMysteryDragVisuals() {
    document.removeEventListener("dragover", onDocumentDragOver);
    el.mysteryCard.removeEventListener("drag", onMysteryDrag);

    if (mysteryDragFollower && mysteryDragFollower.parentNode) {
      mysteryDragFollower.parentNode.removeChild(mysteryDragFollower);
    }
    mysteryDragFollower = null;

    if (mysteryDragImageStub && mysteryDragImageStub.parentNode) {
      mysteryDragImageStub.parentNode.removeChild(mysteryDragImageStub);
    }
    mysteryDragImageStub = null;

    document.body.classList.remove("is-dragging-mystery");
    el.mysteryCard.classList.remove("card--drag-source-hidden");
  }

  function updateMysteryDragFollowerPosition(clientX, clientY) {
    if (!mysteryDragFollower) return;
    if (clientX === 0 && clientY === 0) return;
    mysteryDragFollower.style.left = clientX - mysteryDragOffsetX + "px";
    mysteryDragFollower.style.top = clientY - mysteryDragOffsetY + "px";
  }

  function onDocumentDragOver(event) {
    updateMysteryDragFollowerPosition(event.clientX, event.clientY);
  }

  function onMysteryDrag(event) {
    updateMysteryDragFollowerPosition(event.clientX, event.clientY);
  }

  function startMysteryDragFollower(event) {
    const rect = el.mysteryCard.getBoundingClientRect();
    mysteryDragOffsetX = event.clientX - rect.left;
    mysteryDragOffsetY = event.clientY - rect.top;

    mysteryDragFollower = el.mysteryCard.cloneNode(true);
    mysteryDragFollower.classList.add("mystery-drag-follower");
    mysteryDragFollower.classList.remove("card--dragging", "card--drag-source-hidden");
    mysteryDragFollower.removeAttribute("id");
    mysteryDragFollower.removeAttribute("draggable");
    mysteryDragFollower.setAttribute("aria-hidden", "true");
    mysteryDragFollower.style.width = rect.width + "px";
    mysteryDragFollower.style.height = rect.height + "px";
    document.body.appendChild(mysteryDragFollower);
    updateMysteryDragFollowerPosition(event.clientX, event.clientY);

    mysteryDragImageStub = document.createElement("div");
    mysteryDragImageStub.className = "mystery-drag-image-stub";
    mysteryDragImageStub.setAttribute("aria-hidden", "true");
    mysteryDragImageStub.textContent = "\u00a0";
    document.body.appendChild(mysteryDragImageStub);
    if (event.dataTransfer) {
      event.dataTransfer.setDragImage(mysteryDragImageStub, 0, 0);
    }

    el.mysteryCard.classList.add("card--drag-source-hidden");
    document.addEventListener("dragover", onDocumentDragOver);
    el.mysteryCard.addEventListener("drag", onMysteryDrag);
  }

  function onMysteryDragStart(event) {
    if (phase !== PHASE.PLACING) {
      event.preventDefault();
      return;
    }
    el.mysteryCard.classList.add("card--dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", "mystery-card");
    }
    el.timeline.classList.add("timeline--dragging");
    document.body.classList.add("is-dragging-mystery");

    if (!prefersReducedMotion()) {
      startMysteryDragFollower(event);
    }
  }

  function onMysteryDragEnd() {
    cleanupMysteryDragVisuals();
    el.mysteryCard.classList.remove("card--dragging");
    el.timeline.classList.remove("timeline--dragging");
    clearDropZoneHighlights();
  }

  function clearDropZoneHighlights() {
    el.timeline.querySelectorAll(".drop-zone--active").forEach(function (zone) {
      zone.classList.remove("drop-zone--active");
    });
  }

  function getDateBounds(events) {
    if (events.length === 0) return null;
    let min = events[0].date;
    let max = events[0].date;
    events.forEach(function (event) {
      if (event.date < min) min = event.date;
      if (event.date > max) max = event.date;
    });
    return { min: min, max: max };
  }

  function updateTimelineRange() {
    if (!el.timelineRange) return;

    const bounds = getDateBounds(gameEventPool);
    if (!bounds) {
      el.timelineRange.hidden = true;
      return;
    }

    const earliest = bounds.min;
    const latest = bounds.max;
    const span = latest - earliest;

    el.timelineRange.hidden = false;
    el.timelineRangeStart.textContent = formatDate(earliest);
    el.timelineRangeEnd.textContent = formatDate(latest);
    el.timelineRange.setAttribute(
      "aria-label",
      "Game spans " +
        formatDate(earliest) +
        " to " +
        formatDate(latest) +
        ". " +
        timeline.length +
        " of " +
        gameEventPool.length +
        " events on your timeline."
    );

    el.timelineRangeMarkers.innerHTML = "";
    timeline.forEach(function (event) {
      const marker = document.createElement("span");
      marker.className = "timeline-range-marker";
      const position = span === 0 ? 50 : ((event.date - earliest) / span) * 100;
      marker.style.left = position + "%";
      marker.title = event.title + " — " + formatDate(event.date);
      el.timelineRangeMarkers.appendChild(marker);
    });

    updateWorldMap();
  }

  function updateMysteryDockLayout() {
    if (!el.mysteryDock) return;
    const reserveAsideColumn =
      mysteryCard != null &&
      (phase === PHASE.PLACING || phase === PHASE.REVEAL);
    el.mysteryDock.classList.toggle("mystery-dock--split", reserveAsideColumn);
  }

  function updateGameStageLayout() {
    if (!el.gameStage) return;
    el.gameStage.classList.toggle("game-stage--in-play", phase !== PHASE.START);
    updateMysteryDockLayout();
  }

  function updateWelcomeMap() {
    if (!el.timelineWelcomeMap) return;
    const show = phase === PHASE.START && timeline.length === 0;
    el.timelineWelcomeMap.hidden = !show;
    if (el.timelineTrack) {
      el.timelineTrack.classList.toggle("timeline-track--welcome", show);
    }
  }

  function updateWorldMap() {
    if (!el.timelineWorldMap || !el.timelineWorldMapDots || !window.NeolithiaGeo) {
      return;
    }

    hideMapTooltip();

    if (gameEventPool.length === 0) {
      el.timelineWorldMap.hidden = true;
      return;
    }

    el.timelineWorldMap.hidden = false;
    el.timelineWorldMapDots.innerHTML = "";

    const placed = timeline.length;

    if (el.timelineWorldMapSvg) {
      el.timelineWorldMapSvg.setAttribute(
        "viewBox",
        window.NeolithiaGeo.formatViewBox(window.NeolithiaGeo.MAP_FULL_VIEW)
      );
    }

    if (el.timelineWorldMapLayer) {
      el.timelineWorldMapLayer.removeAttribute("transform");
    }

    el.timelineWorldMap.setAttribute(
      "aria-label",
      placed === 0
        ? "World map — no events placed yet"
        : "World map showing " +
          placed +
          " placed event" +
          (placed === 1 ? "" : "s")
    );

    const svgNs = "http://www.w3.org/2000/svg";

    const mapMarkers = timeline.map(function (event) {
      const coords = window.NeolithiaGeo.getCoordinates(event, resolveGeo);
      const point = window.NeolithiaGeo.projectLatLon(coords.lat, coords.lon);
      return {
        event: event,
        geo: resolveGeo(event),
        x: point.x,
        y: point.y,
      };
    });

    if (window.NeolithiaGeo.spreadProjectedMarkers) {
      window.NeolithiaGeo.spreadProjectedMarkers(mapMarkers);
    } else {
      mapMarkers.forEach(function (pin) {
        pin.displayX = pin.x;
        pin.displayY = pin.y;
        pin.clusterSize = 1;
      });
    }

    mapMarkers.forEach(function (pin) {
      const cx = pin.displayX != null ? pin.displayX : pin.x;
      const cy = pin.displayY != null ? pin.displayY : pin.y;
      const event = pin.event;
      const geo = pin.geo;

      if (pin.clusterSize > 1) {
        const hub = document.createElementNS(svgNs, "circle");
        hub.setAttribute("class", "timeline-world-map-cluster");
        hub.setAttribute("cx", String(pin.clusterCenterX));
        hub.setAttribute("cy", String(pin.clusterCenterY));
        hub.setAttribute("r", String(Math.min(9, 2.4 + (pin.clusterSize - 1) * 1.15) + 1.2));
        hub.setAttribute("aria-hidden", "true");
        el.timelineWorldMapDots.appendChild(hub);
      }

      const marker = document.createElementNS(svgNs, "g");
      marker.setAttribute("class", "timeline-world-map-marker");
      marker.setAttribute("role", "button");
      marker.setAttribute("tabindex", "0");
      marker.setAttribute(
        "aria-label",
        event.title + ", " + event.region + ", " + formatDate(event.date)
      );

      const hit = document.createElementNS(svgNs, "circle");
      hit.setAttribute("class", "timeline-world-map-dot-hit");
      hit.setAttribute("cx", String(cx));
      hit.setAttribute("cy", String(cy));
      hit.setAttribute("r", pin.clusterSize > 1 ? "5.5" : "7");

      const dot = document.createElementNS(svgNs, "circle");
      dot.setAttribute("class", "timeline-world-map-dot timeline-world-map-dot--" + geo);
      dot.setAttribute("cx", String(cx));
      dot.setAttribute("cy", String(cy));
      dot.setAttribute("r", "2.6");
      dot.setAttribute("aria-hidden", "true");

      marker.appendChild(hit);
      marker.appendChild(dot);
      attachMapMarkerTooltip(marker, event);
      el.timelineWorldMapDots.appendChild(marker);
    });
  }

  function renderTimeline(highlightIndex, revealClass, renderOptions) {
    renderOptions = renderOptions || {};
    const placing = !!renderOptions.placing;
    const highlightSet = renderOptions.highlightIndices || [];

    hideCardTooltip();
    hideMapTooltip();
    el.timeline.innerHTML = "";
    updateWelcomeMap();
    const centerRow = placing || phase === PHASE.REVEAL;
    el.timeline.classList.toggle("timeline--placing", placing);
    el.timeline.classList.toggle("timeline--center-row", centerRow);
    if (el.timelineSection) {
      el.timelineSection.classList.toggle("timeline-section--placing", placing);
      el.timelineSection.classList.toggle("timeline-section--center-row", centerRow);
    }

    timeline.forEach(function (event, index) {
      if (placing && index === roundAnchorIndex) {
        el.timeline.appendChild(createAnchorDropZone(true));
      }
      if (index > 0) {
        const arrow = document.createElement("span");
        arrow.className = "timeline-arrow";
        arrow.dataset.flipId = "arrow-" + index;
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";
        el.timeline.appendChild(arrow);
      }
      el.timeline.appendChild(
        createTimelineCardElement(event, index, highlightIndex, revealClass, {
          isAnchor: placing && index === roundAnchorIndex,
          isContext:
            placing && highlightSet.indexOf(index) >= 0 && index !== roundAnchorIndex,
        })
      );
      if (placing && index === roundAnchorIndex) {
        el.timeline.appendChild(createAnchorDropZone(false));
      }
    });
    updateTimelineRange();
    syncTimelineScrollLayout();
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function showMysteryCard(event) {
    el.mysteryPlaceholder.hidden = true;
    el.mysteryCard.hidden = false;
    setCardGeoIcon(el.mysteryGeo, event);
    el.mysteryRegion.textContent = event.region;
    el.mysteryTitle.textContent = event.title;
    el.mysteryDescription.textContent = event.description;
    el.mysteryDateText.textContent = formatDate(event.date);
    el.mysteryDate.classList.remove("card-date--visible");
    el.mysteryDate.classList.add("card-date--hidden");
    el.mysteryDate.setAttribute("aria-hidden", "true");
  }

  function revealMysteryDate() {
    el.mysteryDate.classList.remove("card-date--hidden");
    el.mysteryDate.classList.add("card-date--visible");
    el.mysteryDate.setAttribute("aria-hidden", "false");
  }

  function enableMysteryDrag() {
    el.mysteryCard.draggable = true;
    el.mysteryCard.classList.add("card--draggable");
    el.mysteryCard.addEventListener("dragstart", onMysteryDragStart);
    el.mysteryCard.addEventListener("dragend", onMysteryDragEnd);
    if (el.dragHint) {
      el.dragHint.hidden = false;
      updateDragHint();
    }
    updateMysteryDockLayout();
  }

  function disableMysteryDrag() {
    cleanupMysteryDragVisuals();
    el.mysteryCard.draggable = false;
    el.mysteryCard.classList.remove("card--draggable", "card--dragging");
    el.mysteryCard.removeEventListener("dragstart", onMysteryDragStart);
    el.mysteryCard.removeEventListener("dragend", onMysteryDragEnd);
    if (el.dragHint) {
      el.dragHint.hidden = true;
    }
    updateMysteryDockLayout();
    el.timeline.classList.remove("timeline--dragging");
    clearDropZoneHighlights();
  }

  function placeCard(index) {
    if (!mysteryCard || phase !== PHASE.PLACING) return;

    cancelTimelineFlipAnimation();
    clearCorrectPlacementCelebration();

    const attemptedIndex = index;
    const cardToPlace = mysteryCard;
    lastPlacementCorrect = isValidInsertIndex(cardToPlace, timeline, attemptedIndex);
    const targetIndex = lastPlacementCorrect
      ? attemptedIndex
      : roundCorrectInsertIndex;

    roundsPlayed++;
    phase = PHASE.REVEAL;

    el.placementPanel.hidden = true;
    disablePlacementChoices();
    disableMysteryDrag();

    revealMysteryDate();

    const revealClass = lastPlacementCorrect
      ? "card--revealed-correct"
      : "card--revealed-wrong";

    function finishPlacement() {
      if (lastPlacementCorrect) {
        score++;
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            playCorrectPlacementCelebration();
          });
        });
      }
      updateScoreboard();
      scheduleRevealFeedback();
    }

    const shouldAnimateWrongSlide =
      !lastPlacementCorrect &&
      targetIndex !== attemptedIndex &&
      !prefersReducedMotion();

    if (shouldAnimateWrongSlide) {
      timeline.splice(attemptedIndex, 0, cardToPlace);
      renderTimeline(attemptedIndex, revealClass, false);
      requestAnimationFrame(function () {
        syncTimelineScrollLayout();
        centerNodesUnderMap(
          getTimelineSlotsForIndices(getFocusIndicesForInsert(attemptedIndex)),
          false
        );
        const beforeRects = captureTimelineFlipRects();

        timeline.splice(attemptedIndex, 1);
        timeline.splice(targetIndex, 0, cardToPlace);
        lastInsertIndex = targetIndex;

        renderTimeline(lastInsertIndex, revealClass, false);
        playTimelineFlipAnimation(beforeRects, function () {
          scheduleCenterRevealInTimeline(true);
          finishPlacement();
        });
      });
    } else {
      lastInsertIndex = targetIndex;
      timeline.splice(lastInsertIndex, 0, cardToPlace);
      renderTimeline(lastInsertIndex, revealClass, false);
      scheduleCenterRevealInTimeline(false);
      finishPlacement();
    }
  }

  function populateRoundActionsContent() {
    if (!el.btnNext) return;
    el.btnNext.textContent = deck.length > 0 ? "Next card" : "See results";
  }

  function showRoundActions(visible) {
    if (!el.roundActions) return;
    el.roundActions.hidden = !visible;
    if (!visible) {
      el.roundActions.classList.remove(DOCK_REVEAL_FADE_CLASS);
    }
    if (visible) {
      populateRoundActionsContent();
    }
    updateMysteryDockLayout();
  }

  function populateFeedbackContent() {
    el.feedback.classList.remove(
      "feedback--correct",
      "feedback--wrong",
      DOCK_REVEAL_FADE_CLASS
    );
    if (!el.feedback.classList.contains("feedback")) {
      el.feedback.classList.add("feedback");
    }

    if (lastPlacementCorrect) {
      const placedBefore = placementIsBeforeAnchor(lastInsertIndex);
      el.feedback.classList.add("feedback--correct");
      if (mysterySameYearAsAnchor()) {
        el.feedback.textContent =
          "Correct! " +
          mysteryCard.title +
          " (" +
          formatDate(mysteryCard.date) +
          ") is the same era as " +
          roundAnchorTitle +
          " — either side is fine.";
      } else {
        el.feedback.textContent =
          "Correct! " +
          mysteryCard.title +
          " (" +
          formatDate(mysteryCard.date) +
          ") is " +
          (placedBefore ? "before" : "after") +
          " " +
          roundAnchorTitle +
          ".";
      }
    } else {
      el.feedback.classList.add("feedback--wrong");
      el.feedback.textContent =
        "Not quite — " +
        mysteryCard.title +
        " (" +
        formatDate(mysteryCard.date) +
        ") belongs " +
        (roundCorrectIsBefore ? "before" : "after") +
        " " +
        roundAnchorTitle +
        ". It has been moved to the correct place on the timeline.";
    }
  }

  function showFeedback() {
    populateFeedbackContent();
    revealDockElement(el.feedback, false);
    updateMysteryDockLayout();
  }

  function nextRound() {
    cancelTimelineFlipAnimation();
    clearRevealFeedbackTimers();
    el.feedback.hidden = true;
    el.feedback.classList.remove(DOCK_REVEAL_FADE_CLASS);
    showRoundActions(false);

    mysteryCard = null;
    renderTimeline(-1, null, false);

    if (deck.length === 0) {
      endGame();
      return;
    }

    startPlacingRound();
  }

  function startPlacingRound() {
    phase = PHASE.PLACING;
    updateHeaderRestartButton();
    mysteryCard = deck.shift();
    showMysteryCard(mysteryCard);
    setupRoundPlacement();
    renderTimeline(-1, null, {
      placing: true,
      highlightIndices: roundHighlightIndices,
    });
    updatePlacementUI();
    enableMysteryDrag();
    updateScoreboard();
    scrollTimelineToRoundContext();
  }

  function startGame() {
    const selectedGeos = getSelectedGeos();
    const pool = getFilteredEvents(selectedGeos);

    if (pool.length < 2) {
      updateRegionPickerStatus();
      return;
    }

    gameEventPool = pool.slice();
    gameSelectedGeos = selectedGeos.slice();

    const shuffled = shuffle(pool);
    const roundCount = getRoundsForPool(shuffled.length);
    timeline = [shuffled[0]];
    deck = shuffled.slice(1, 1 + roundCount);
    totalRoundsThisGame = deck.length;
    score = 0;
    roundsPlayed = 0;
    mysteryCard = null;

    el.startScreen.hidden = true;
    el.endScreen.hidden = true;
    el.feedback.hidden = true;
    showRoundActions(false);
    updateGameStageLayout();

    renderTimeline(-1, null, false);
    updateScoreboard();
    startPlacingRound();
  }

  function endGame() {
    phase = PHASE.END;
    showRoundActions(false);
    el.placementPanel.hidden = true;
    disableMysteryDrag();
    el.mysteryCard.hidden = true;
    el.mysteryPlaceholder.hidden = false;
    el.mysteryPlaceholder.textContent = "No more cards.";

    const total = totalRoundsThisGame;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;

    el.endMessage.textContent =
      "You placed " +
      total +
      " mystery cards. " +
      (pct >= 80
        ? "Excellent work — you know your timeline!"
        : pct >= 50
          ? "Good effort! Review the dates and try again."
          : "Keep practicing — chronological order gets easier with each round.");

    el.endScore.textContent = score + " / " + total;
    el.endScreen.hidden = false;
    updateGameStageLayout();
    updateHeaderRestartButton();
  }

  function updateHeaderRestartButton() {
    if (!el.btnHeaderRestart) return;
    el.btnHeaderRestart.hidden = phase === PHASE.START;
  }

  function showStartScreen() {
    phase = PHASE.START;
    gameEventPool = [];
    gameSelectedGeos = [];
    timeline = [];
    deck = [];
    mysteryCard = null;
    score = 0;
    roundsPlayed = 0;
    lastInsertIndex = -1;
    lastPlacementCorrect = false;

    disableMysteryDrag();
    hideCardTooltip();
    hideMapTooltip();
    clearRevealFeedbackTimers();
    el.startScreen.hidden = false;
    el.endScreen.hidden = true;
    el.feedback.hidden = true;
    el.feedback.classList.remove(DOCK_REVEAL_FADE_CLASS);
    el.placementPanel.hidden = true;
    showRoundActions(false);
    updateGameStageLayout();
    el.mysteryCard.hidden = true;
    el.mysteryPlaceholder.hidden = false;
    el.mysteryPlaceholder.textContent = "Start a game to draw a mystery card.";
    if (el.dragHint) {
      el.dragHint.hidden = true;
    }

    renderTimeline(-1, null, false);
    updateWelcomeMap();
    updateScoreboard();
    updateTimelineRange();
    updateRegionPickerStatus();
    updateHeaderRestartButton();
  }

  function setHeaderMenuOpen(open) {
    if (!el.btnHeaderMenu || !el.headerMenuDropdown) return;
    el.btnHeaderMenu.setAttribute("aria-expanded", open ? "true" : "false");
    el.headerMenuDropdown.hidden = !open;
  }

  el.btnStart.addEventListener("click", startGame);
  el.btnRestart.addEventListener("click", showStartScreen);
  if (el.btnHeaderRestart) {
    el.btnHeaderRestart.addEventListener("click", function () {
      setHeaderMenuOpen(false);
      showStartScreen();
    });
  }
  el.btnNext.addEventListener("click", nextRound);

  if (el.btnPlaceBefore) {
    el.btnPlaceBefore.addEventListener("click", function () {
      submitPlacementChoice(true);
    });
  }
  if (el.btnPlaceAfter) {
    el.btnPlaceAfter.addEventListener("click", function () {
      submitPlacementChoice(false);
    });
  }

  if (el.timelineScroll) {
    el.timelineScroll.addEventListener("scroll", hideCardTooltip, { passive: true });
    el.timelineScroll.addEventListener("scroll", hideMapTooltip, { passive: true });
  }
    window.addEventListener(
    "resize",
    function () {
      syncTimelineScrollLayout();
      syncPlacementPanelForViewport();
      if (phase === PHASE.PLACING) {
        centerRoundFocusInTimeline(false);
      }
    },
    { passive: true }
  );
  window.addEventListener(
    "scroll",
    function () {
      if (!el.cardTooltip.hidden) {
        hideCardTooltip();
      }
      if (el.mapTooltip && !el.mapTooltip.hidden) {
        hideMapTooltip();
      }
    },
    { passive: true }
  );

  if (el.btnHeaderMenu && el.headerMenuDropdown) {
    el.btnHeaderMenu.addEventListener("click", function (event) {
      event.stopPropagation();
      setHeaderMenuOpen(el.headerMenuDropdown.hidden);
    });
    el.headerMenuDropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    document.addEventListener("click", function () {
      setHeaderMenuOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setHeaderMenuOpen(false);
      }
    });
  }

  const THEME_STORAGE_KEY = "neolithia-invert";

  function applyColorInvert(inverted) {
    document.documentElement.classList.toggle("theme-inverted", inverted);
    if (!el.btnTheme) return;
    el.btnTheme.setAttribute("aria-pressed", inverted ? "true" : "false");
    el.btnTheme.textContent = inverted ? "Light mode" : "Dark mode";
  }

  if (el.btnTheme) {
    applyColorInvert(document.documentElement.classList.contains("theme-inverted"));
    el.btnTheme.addEventListener("click", function () {
      const inverted = !document.documentElement.classList.contains("theme-inverted");
      applyColorInvert(inverted);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, inverted ? "1" : "0");
      } catch (e) {}
      setHeaderMenuOpen(false);
    });
  }

  if (typeof MOBILE_MQ.addEventListener === "function") {
    MOBILE_MQ.addEventListener("change", syncPlacementPanelForViewport);
  } else if (typeof MOBILE_MQ.addListener === "function") {
    MOBILE_MQ.addListener(syncPlacementPanelForViewport);
  }

  updateScoreboard();
  el.scoreTotal.textContent = String(MYSTERY_ROUNDS_PER_GAME);
  renderGeoRegionPicker();
  updateGameStageLayout();
  updateWelcomeMap();
})();
