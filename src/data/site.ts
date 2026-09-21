export const site = {
  name: "Lezco Plumbing",
  url: "https://lezcoplumbing.com",
  phoneDisplay: "(949) 994-9828",
  phoneTel: "+19499949828",
  email: "info@lezcoplumbing.com",
  foundingDate: "2024-02-04",
  priceRange: "$$",
  hours: "7:30 AM – 8:30 PM, every day",
  hoursSpec: { opens: "07:30", closes: "20:30" },
  address: {
    street: "25361 Commercentre Dr",
    city: "Lake Forest",
    region: "CA",
    postal: "92630",
    country: "US",
    lat: 33.666647,
    lng: -117.687664,
  },
  licenseNumber: "1120970",
  licenseUrl: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  logo: "/images/OCEANVIEW_PLUMBING_LOGO_WHITEBEHIND_PNG.png",
  photos: {
    hero: "/images/plumbing-services-from-lezco-plumbing.jpg",
    drain: "/images/drain-cleaning.jpg",
    leak: "/images/leak-detection.jpg",
    waterHeater: "/images/water-heater.jpg",
    sewer: "/images/sewer-line.jpg",
    emergency: "/images/emergency-call.jpg",
    plumber: "/images/plumber-at-work.jpg",
    van: "/images/OCEANVIEW_VAN_PNG.png",
  },
  sameAs: [
    "https://www.instagram.com/lezcoplumbing/",
    "https://www.buildzoom.com/contractor/lezco-plumbing",
  ],
};

export const navServices = [
  { href: "/plumbing-services/drain-cleaning/", label: "Drain cleaning" },
  { href: "/plumbing-services/leak-detection/", label: "Leak detection" },
  { href: "/plumbing-services/water-heater/", label: "Water heaters" },
  { href: "/plumbing-services/sewer-and-main-line/", label: "Sewer & main line" },
  { href: "/plumbing-services/emergency/", label: "Emergency plumbing" },
];

export const navCities = [
  { href: "/service-area/mission-viejo/", label: "Mission Viejo" },
  { href: "/service-area/irvine/", label: "Irvine" },
  { href: "/service-area/aliso-viejo/", label: "Aliso Viejo" },
  { href: "/service-area/laguna-hills/", label: "Laguna Hills" },
  { href: "/service-area/laguna-niguel/", label: "Laguna Niguel" },
  { href: "/service-area/rancho-santa-margarita/", label: "Rancho Santa Margarita" },
];

export const trustPoints = [
  {
    label: "Licensed C-36",
    detail: `CSLB #${site.licenseNumber}. Verify it on the state board before you hire anyone.`,
  },
  {
    label: "Locally owned",
    detail: "One Lake Forest shop, one crew. You are not calling a dispatch center.",
  },
  {
    label: "Price before work",
    detail: "We diagnose, then quote. Nothing starts until you approve the number.",
  },
  {
    label: "After-hours calls",
    detail: "Burst pipes, sewer backups, major leaks, and no hot water do not wait.",
  },
];

export const symptoms = [
  {
    problem: "Water on the floor and I can't stop it",
    action: "Shut off the main if you can reach it, then call",
    href: "/plumbing-services/emergency/",
    urgent: true,
  },
  {
    problem: "No hot water this morning",
    action: "Tank or tankless, repair or replace",
    href: "/plumbing-services/water-heater/",
    urgent: false,
  },
  {
    problem: "One sink or tub is draining slow",
    action: "Snake or hydro jet, depending on what caused it",
    href: "/plumbing-services/drain-cleaning/",
    urgent: false,
  },
  {
    problem: "More than one drain is backing up",
    action: "That pattern points at the main line, not a clog",
    href: "/plumbing-services/sewer-and-main-line/",
    urgent: true,
  },
  {
    problem: "Water bill jumped, or a warm spot on the floor",
    action: "Classic slab leak signs. We locate before we open anything",
    href: "/plumbing-services/leak-detection/",
    urgent: false,
  },
  {
    problem: "Running toilet, dripping faucet, bad disposal",
    action: "Fixture repair and replacement",
    href: "/plumbing-services/",
    urgent: false,
  },
];

export const processSteps = [
  {
    step: "Call and describe it",
    detail:
      "Tell us what you see and how long it has been going on. We say on the phone whether this is an emergency or something that can wait for a scheduled window.",
  },
  {
    step: "We diagnose on site",
    detail:
      "We find the cause, not just the symptom. If a camera or pressure test will change the repair, we say so before running it.",
  },
  {
    step: "You approve the price",
    detail:
      "You get the number for the work described before anything starts. If we hit something unexpected, we stop and talk to you rather than adding scope.",
  },
];

export const emergencyTips = [
  "Find the house shutoff before you need it — usually at the street side of the house, near the hose bib or in a box by the curb.",
  "Turn off the water heater if the tank is leaking. Gas to pilot, or the breaker for electric.",
  "Skip the drain chemicals. They rarely clear a real blockage and they make the repair more dangerous for whoever opens the line.",
  "Photograph the damage before cleanup if you plan to file an insurance claim.",
];

export type Faq = { q: string; a: string };

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** Lowercase noun phrase used mid-sentence, e.g. "Schedule drain cleaning in Lake Forest". */
  short: string;
  lede: string;
  photo: string;
  photoAlt: string;
  body: { heading: string; paragraphs: string[] }[];
  faqs: Faq[];
};

export const services: ServicePage[] = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning in Lake Forest, CA | Lezco Plumbing",
    description:
      "Drain cleaning and clog removal in Lake Forest and south Orange County. Kitchen, bathroom, and main line clogs, plus hydro jetting when a snake is not enough.",
    h1: "Drain cleaning in Lake Forest",
    short: "drain cleaning",
    photo: "/images/drain-cleaning.jpg",
    photoAlt: "Plumber reaching into a kitchen cabinet to work on white PVC drain pipes",
    lede: "A slow drain rarely fixes itself. We clear kitchen, bathroom, floor, and main lines for Lake Forest homes and businesses, and we diagnose the cause so the clog does not come back next week.",
    body: [
      {
        heading: "What we clear",
        paragraphs: [
          "Most Lake Forest calls start with one fixture: a kitchen sink that backs up after dinner, a shower that pools around your ankles, or a floor drain that gurgles. We snake those lines first. If several fixtures are slow at once, the blockage is usually farther down the main, and we treat it as a main-line job rather than guessing fixture by fixture.",
          "Grease is the usual kitchen culprit in this area. Hair and soap film clog bathrooms. Hard water leaves scale on the pipe wall, so a clog that “comes back” after a cheap snake is often leftover buildup, not a new problem.",
        ],
      },
      {
        heading: "When we use hydro jetting",
        paragraphs: [
          "A cable opens a hole through a clog. Hydro jetting scours the pipe wall with high-pressure water and is the better call for grease, scale, and recurring backups. We use it on stubborn residential lines and on commercial kitchen drains where grease is constant.",
          "We tell you which method we recommend after we see the line, not before we arrive. You get a price before work starts.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I wait it out if the drain is only slow?",
        a: "A slow drain is already restricted. Waiting usually means a full backup at a worse time. If one fixture is slow, we can often clear it the same day. If several fixtures are slow, call sooner — that pattern often points to the main line.",
      },
      {
        q: "Do you camera the line after cleaning?",
        a: "When backups keep returning or we suspect roots, offset joints, or a collapsed section, a camera inspection is the honest next step. We recommend it when it will change the repair, not as an add-on on every simple clog.",
      },
    ],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection and Pipe Repair in Lake Forest, CA | Lezco Plumbing",
    description:
      "Hidden leak detection and pipe repair in Lake Forest, including slab leaks. We locate the leak before opening walls or floors, then repair it with an upfront quote.",
    h1: "Leak detection and pipe repair",
    short: "leak detection",
    photo: "/images/leak-detection.jpg",
    photoAlt: "Water discharging from a hose onto pavement at an outdoor plumbing job",
    lede: "Hidden leaks get expensive fast. We locate leaks behind walls, under slabs, and above ceilings in Lake Forest homes before we open more of the house than we have to.",
    body: [
      {
        heading: "Slab leaks in Orange County homes",
        paragraphs: [
          "A large share of Lake Forest and south county houses sit on concrete slabs. Supply lines under that slab can leak for weeks before you see a warm spot on the floor, hear water with everything off, or notice the bill jump. We use pressure testing and acoustic listening to narrow the location, then repair or reroute the line.",
          "Catching a slab leak early protects the slab and keeps the repair smaller. If you are seeing unexplained damp spots or a meter that spins with all fixtures off, that is enough reason to call.",
        ],
      },
      {
        heading: "Repairs after we find it",
        paragraphs: [
          "Once the leak is located, we repair the affected pipe. For homes with repeated pinhole leaks, corroded galvanized, or rust-tinged water, we will say plainly whether a spot repair still makes sense or whether a partial or whole-home repipe is the cleaner long-term job. Copper and PEX are the materials we use for repipes.",
          "You approve the price before we start. If we find something else once the wall or slab is open, we stop and talk to you before adding scope.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you find a leak without tearing up the house?",
        a: "We isolate sections with pressure tests and use moisture readings and acoustic equipment to narrow the area. The goal is to open only what we need for the repair. Slab leaks take more care because the pipe is under concrete.",
      },
      {
        q: "Is a slab leak always a full repipe?",
        a: "No. A single isolated leak can often be repaired or rerouted. Repeated leaks, discolored water, or falling pressure across the house are the signs that the rest of the system may be at the end of its life. We inspect and give you both options.",
      },
    ],
  },
  {
    slug: "water-heater",
    title: "Water Heater Repair and Replacement in Lake Forest, CA | Lezco Plumbing",
    description:
      "Tank and tankless water heater repair and replacement in Lake Forest. Same-day no-hot-water calls when availability allows, with an upfront quote before we start.",
    h1: "Water heater repair and replacement",
    short: "water heater work",
    photo: "/images/water-heater.jpg",
    photoAlt: "Small electric water heater mounted on a workshop wall above a utility sink",
    lede: "No hot water is an urgent household problem. We repair and replace tank and tankless units — gas and electric — for Lake Forest homes, and we can often get there the same day.",
    body: [
      {
        heading: "Repair or replace",
        paragraphs: [
          "Most tank water heaters last 8 to 12 years here. If the tank is sound and the failure is an element, thermostat, or valve, repair is usually the right call. If the tank is leaking from the base, the unit is past its expected life, or you are already on a second repair, replacement is cleaner.",
          "We assess the unit on site and walk you through both options with pricing before any work begins. Most replacements finish in a single visit, including haul-away of the old unit.",
        ],
      },
      {
        heading: "Tankless in Southern California",
        paragraphs: [
          "South Orange County’s mild climate is a good fit for tankless. You are not fighting hard freezes, incoming water is relatively warm, and on-demand heat pairs well with California conservation rules. We handle the full install, including gas-line work when the new unit needs it, and we can add a recirculation pump if you want hot water at the tap faster.",
          "A tankless upgrade costs more up front. We will say so, and we will not push it if a standard tank is the better match for your household and budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you get to a no-hot-water call today?",
        a: "Same-day water heater calls are a regular part of our schedule when we have an opening. Call (949) 994-9828 as early as you can. After-hours emergencies are taken when a household has no hot water and cannot wait.",
      },
      {
        q: "Do you install both gas and electric?",
        a: "Yes. Tank and tankless, gas and electric. If a fuel switch or a larger gas line is required, we include that in the quote before we start so the price you approve is the price for the whole job.",
      },
    ],
  },
  {
    slug: "sewer-and-main-line",
    title: "Sewer and Main Line Service in Lake Forest, CA | Lezco Plumbing",
    description:
      "Sewer line cleaning, camera inspection, repair, and replacement in Lake Forest. Trenchless options where the line allows, plus main water line repair.",
    h1: "Sewer and main line service",
    short: "sewer and main line service",
    photo: "/images/sewer-line.jpg",
    photoAlt: "Large industrial pipes and fittings in a mechanical room",
    lede: "A sewer backup is not something to put off. We clean, inspect, repair, and replace main sewer lines for Lake Forest properties, and we repair the main water line running into the house.",
    body: [
      {
        heading: "Camera inspection before we dig",
        paragraphs: [
          "Multiple drains backing up at once, gurgling when water runs elsewhere, sewage odor, or wet patches in the yard along the line path are the usual signs. A camera inspection shows whether you have a blockage, roots, a crack, or a shifted or collapsed section. That is how we avoid repairing the wrong stretch of pipe.",
          "We work the line from the house out toward the city connection. Clearing, repair, and replacement are all in scope once we know what the camera shows.",
        ],
      },
      {
        heading: "Trenchless when the job allows",
        paragraphs: [
          "Where the pipe condition and layout allow it, trenchless repair means less disruption to landscaping and hardscape. Not every collapsed or offset line is a trenchless candidate. We will tell you which method fits after the inspection, with a price for that method only.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a backup always a full sewer replacement?",
        a: "Usually not. Many backups are a blockage we can clear. Replacement is for damaged, collapsed, or repeatedly failing pipe. The camera is what separates those two jobs.",
      },
      {
        q: "Do you also repair the water service line?",
        a: "Yes. The main water line into the home is a separate system from the sewer, but we repair and replace that line as well when it is leaking or restricted.",
      },
    ],
  },
  {
    slug: "emergency",
    title: "Emergency Plumber in Lake Forest, CA | Lezco Plumbing",
    description:
      "Emergency plumber in Lake Forest for burst pipes, major leaks, sewer backups, and no hot water. Same-day and after-hours response with licensed plumbers.",
    h1: "Emergency plumber in Lake Forest",
    short: "emergency plumbing",
    photo: "/images/emergency-call.jpg",
    photoAlt: "White cargo van with a ladder rack parked at a house under construction",
    lede: "Burst pipes, major leaks, sewer backups, and no hot water do not wait for Monday. Call (949) 994-9828. We offer same-day plumbing in Lake Forest and respond to after-hours emergencies.",
    body: [
      {
        heading: "What counts as an emergency",
        paragraphs: [
          "Water that you cannot shut off, sewage in the home, a pipe that has burst, or a household with no hot water overnight — those are the calls we treat as emergencies. A dripping faucet or a slow drain can usually wait for a scheduled visit the same or next day.",
          "If you can, shut off the fixture or the house main and call us. We will tell you over the phone whether to leave the water off and how soon we can be there.",
        ],
      },
      {
        heading: "After hours and weekends",
        paragraphs: [
          "Posted hours are 7:30 AM to 8:30 PM, every day. Emergency calls outside that window are still answered when the problem cannot wait. You get a licensed plumber, an on-site assessment, and a price before work starts — including after hours. No surprise fees added at the end.",
        ],
      },
    ],
    faqs: [
      {
        q: "What should I do before you arrive?",
        a: "If you know where the shutoff is, turn it off. Move belongings away from standing water if it is safe to do so. Do not use drain chemicals. Call us with the address and a short description of what you see.",
      },
      {
        q: "Do you charge extra for nights and weekends?",
        a: "After-hours work is priced as emergency service, and we tell you that price before we start. We do not add hidden trip fees after the job. The quote you approve is the number on the invoice for the work described.",
      },
    ],
  },
];

export type CityPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  local: string[];
  faqs: Faq[];
};

export const cities: CityPage[] = [
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    title: "Plumber in Mission Viejo, CA | Lezco Plumbing",
    description:
      "Licensed plumber serving Mission Viejo, CA from Lake Forest. Drain cleaning, water heaters, leak detection, and emergency plumbing with upfront pricing.",
    h1: "Plumber in Mission Viejo, CA",
    lede: "Mission Viejo is next door to our Lake Forest shop. We run drain, water heater, leak, sewer, and emergency calls here on a regular schedule, with the same licensed plumbers and the same upfront quote.",
    local: [
      "A lot of Mission Viejo housing dates to the 1970s through the 1990s. That stock is old enough for galvanized or early copper to show restricted flow, discoloration, or pinhole leaks. If pressure has been dropping for years, we would rather inspect the system than keep patching the same line.",
      "Planned-community layouts and HOA rules sometimes affect where we can trench or place a water heater. Tell us when you call if you need us to work around an HOA window or a tenant schedule.",
    ],
    faqs: [
      {
        q: "How fast can you get to Mission Viejo?",
        a: "Most days we are already in south Orange County. Same-day service is available when the schedule has an opening. Call (949) 994-9828 and we will give you a real arrival window.",
      },
      {
        q: "Do you need me home?",
        a: "For most jobs, yes — we need access and your approval on the quote. If a tenant will be there instead, tell us when you book.",
      },
    ],
  },
  {
    slug: "irvine",
    name: "Irvine",
    title: "Plumber in Irvine, CA | Lezco Plumbing",
    description:
      "Plumber serving Irvine, CA. Water heater, drain cleaning, leak detection, and commercial plumbing for homes, rentals, and businesses. Call (949) 994-9828.",
    h1: "Plumber in Irvine, CA",
    lede: "We take plumbing calls throughout Irvine from our Lake Forest base — homes, rentals, and small commercial spaces — with same-day openings when the board allows.",
    local: [
      "Irvine has more newer construction than Lake Forest, which means more PEX and more tankless water heaters, but also HOA and builder-warranty wrinkles. We still see slab leaks and water-heater failures on older Irvine tracts.",
      "Commercial and multi-unit work is common here: restaurants, offices, and property managers who need a plumber who can show up, quote, and leave the space usable. We schedule around your hours when we can.",
    ],
    faqs: [
      {
        q: "Do you handle HOA or rental properties in Irvine?",
        a: "Yes. Landlords and property managers use us for tenant plumbing, water heaters, and drain backups. Tell us who will be on site and we will document the work for your records.",
      },
      {
        q: "Can you install a tankless unit in Irvine?",
        a: "Yes. We install tank and tankless, including gas-line updates when the new unit requires them. The quote covers the whole job before we start.",
      },
    ],
  },
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    title: "Plumber in Aliso Viejo, CA | Lezco Plumbing",
    description:
      "Aliso Viejo plumber for drain cleaning, water heaters, leaks, and emergencies. Licensed plumbers from Lake Forest. Upfront pricing, same-day when available.",
    h1: "Plumber in Aliso Viejo, CA",
    lede: "Aliso Viejo is in our regular south-county loop. If you have a clog, a leak, a water heater that quit, or a sewer backup, call (949) 994-9828.",
    local: [
      "Hillside lots and planned neighborhoods here mean access can be tight and some sewer runs are longer than a typical tract home. We account for that in the quote after we see the job, not with a surprise on the invoice.",
      "Water-saving fixture upgrades and tankless installs come up often with Aliso Viejo homeowners who are renovating or trying to cut the water bill under California rules. Those are straightforward installs when the existing rough-in cooperates.",
    ],
    faqs: [
      {
        q: "Are you actually nearby, or dispatching from farther north?",
        a: "We are based in Lake Forest, a short drive from Aliso Viejo. You are calling a local shop, not a regional call center.",
      },
      {
        q: "Do you work on condos?",
        a: "Yes, with access arranged through you or the property manager. Shutoff locations in condos are not always obvious — we will find them before we open a line.",
      },
    ],
  },
  {
    slug: "laguna-hills",
    name: "Laguna Hills",
    title: "Plumber in Laguna Hills, CA | Lezco Plumbing",
    description:
      "Laguna Hills plumber for aging pipe, water heaters, drains, and sewer work. Licensed Lake Forest plumbers, same-day service when available.",
    h1: "Plumber in Laguna Hills, CA",
    lede: "Laguna Hills has a mix of older hillside homes and established tracts. We handle the plumbing that comes with that stock: restricted galvanized, water heaters at the end of their life, and main-line backups.",
    local: [
      "Older Laguna Hills plumbing is where we see galvanized steel that has corroded from the inside, low pressure at the far bathrooms, and rust-tinged water. Spot repairs still have a place. Repeated failures are when we talk through a repipe.",
      "If you are in a community with older residents or a property that has had the same water heater for a decade-plus, a same-day replacement is often the cleaner emergency fix than another patch.",
    ],
    faqs: [
      {
        q: "Do you repipe older Laguna Hills homes?",
        a: "Yes. Partial and whole-home repipes in copper or PEX. We inspect first and tell you whether a targeted repair still makes sense.",
      },
      {
        q: "Can you replace a water heater on a hillside lot?",
        a: "Yes. Access and strapping to current seismic rules are part of the job in this part of the county. We include that in the quote.",
      },
    ],
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    title: "Plumber in Laguna Niguel, CA | Lezco Plumbing",
    description:
      "Plumber in Laguna Niguel, CA for leaks, drains, water heaters, and sewer service. Lake Forest based, licensed, upfront quotes. Call (949) 994-9828.",
    h1: "Plumber in Laguna Niguel, CA",
    lede: "We serve Laguna Niguel from Lake Forest with the same drain, leak, water heater, sewer, and emergency work we do throughout south Orange County.",
    local: [
      "Laguna Niguel’s mix of 1970s–1990s housing and coastal-adjacent air means copper and older valves show up a lot. Outdoor hose bibs, irrigation tie-ins, and main shutoffs that no longer hold are common calls.",
      "Sewer and drain issues on sloped lots sometimes involve longer runs and root intrusion. We camera the line when the pattern of backups says the problem is not just a kitchen clog.",
    ],
    faqs: [
      {
        q: "Do you take emergency calls in Laguna Niguel after 8:30 PM?",
        a: "Yes, for burst pipes, major leaks, sewer backups, and no hot water. Call the same number: (949) 994-9828.",
      },
      {
        q: "Can you install an earthquake gas shutoff valve?",
        a: "Yes. We install seismic shutoff valves on the gas line at the meter. It is a short job with a real safety payoff in this region.",
      },
    ],
  },
  {
    slug: "rancho-santa-margarita",
    name: "Rancho Santa Margarita",
    title: "Plumber in Rancho Santa Margarita, CA | Lezco Plumbing",
    description:
      "Rancho Santa Margarita plumber for slab leaks, water heaters, drain cleaning, and emergencies. Licensed plumbers based in Lake Forest.",
    h1: "Plumber in Rancho Santa Margarita, CA",
    lede: "Rancho Santa Margarita is on our regular route from Lake Forest. Slab-foundation homes, water heaters, and drain backups are the calls we see most.",
    local: [
      "Master-planned RSM housing from the late 1980s and 1990s sits largely on slabs. Warm floors, unexplained high water bills, and the sound of running water with fixtures off are the slab-leak pattern we take seriously.",
      "Foothill Ranch is adjacent and in the same coverage area. If you are on the RSM / Foothill Ranch line, call anyway — we will confirm we can take the job before you wait around.",
    ],
    faqs: [
      {
        q: "Do you serve Foothill Ranch too?",
        a: "Yes. Foothill Ranch is part of our regular Lake Forest coverage. Same number, same crew.",
      },
      {
        q: "How do you price a slab leak in RSM?",
        a: "Detection is quoted first. Repair or reroute is quoted once we know where the leak is. We do not start the repair until you approve that second number.",
      },
    ],
  },
];

export function businessId() {
  return `${site.url}/#business`;
}

export function licenseLine() {
  return site.licenseNumber
    ? `CSLB #${site.licenseNumber}`
    : "Licensed California plumbers";
}

export const quoteServices = [
  "Drain cleaning / clog",
  "Leak detection",
  "Water heater",
  "Sewer or main line",
  "Emergency / burst pipe",
  "Repiping",
  "Fixture or toilet",
  "Other / not sure",
];

export const quoteCities = [
  "Lake Forest",
  "Mission Viejo",
  "Irvine",
  "Aliso Viejo",
  "Laguna Hills",
  "Laguna Niguel",
  "Rancho Santa Margarita",
  "Foothill Ranch",
  "Other",
];

const unsplashUtm = "utm_source=lezcoplumbing&utm_medium=referral";

export type PhotoCredit = {
  src: string;
  photographer: string;
  username: string;
  photoId: string;
};

export const photoCredits: PhotoCredit[] = [
  {
    src: "/images/drain-cleaning.jpg",
    photographer: "Timur Shakerzianov",
    username: "shaker_jpg",
    photoId: "c314Gh8dXAo",
  },
  {
    src: "/images/plumber-at-work.jpg",
    photographer: "Timur Shakerzianov",
    username: "shaker_jpg",
    photoId: "c314Gh8dXAo",
  },
  {
    src: "/images/leak-detection.jpg",
    photographer: "Daan Mooij",
    username: "daanmooij",
    photoId: "91LGCVN5SAI",
  },
  {
    src: "/images/sewer-line.jpg",
    photographer: "Mykyta Martynenko",
    username: "prostotakphoto",
    photoId: "6TIMIpsYOws",
  },
  {
    src: "/images/water-heater.jpg",
    photographer: "mikbutcher",
    username: "mikbutcher",
    photoId: "ii5IRyypPhs",
  },
  {
    src: "/images/emergency-call.jpg",
    photographer: "Chelaxy Designs",
    username: "chelaxydp",
    photoId: "_Sx640nrVUE",
  },
];

export function creditForPhoto(src: string) {
  return photoCredits.find((credit) => credit.src === src);
}

export function unsplashLinks(credit: PhotoCredit) {
  return {
    photographerUrl: `https://unsplash.com/@${credit.username}?${unsplashUtm}`,
    photoUrl: `https://unsplash.com/photos/${credit.photoId}?${unsplashUtm}`,
    unsplashUrl: `https://unsplash.com/?${unsplashUtm}`,
  };
}

export const uniquePhotoCredits = photoCredits.filter(
  (credit, index, list) => list.findIndex((item) => item.photoId === credit.photoId) === index,
);
