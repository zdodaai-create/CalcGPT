import { CalculatorConfig } from "./calculator-types";

export const ASTRONOMY_CALCULATORS: CalculatorConfig[] = [
  // ═══════════════════════════════════════════════════════════
  // ASTRONOMY 🪐
  // ═══════════════════════════════════════════════════════════
  {
    id: "alien-civilization-calculator", name: "Alien Civilization Calculator",
    description: "Estimate the number of detectable civilizations in the Milky Way using the Drake Equation.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "N = R_* \\cdot f_p \\cdot n_e \\cdot f_l \\cdot f_i \\cdot f_c \\cdot L",
    inputs: [
      { id: "Rstar", label: "Star Formation Rate (stars/yr)", type: "number", defaultValue: 1.5 },
      { id: "fp", label: "Fraction with Planets", type: "number", defaultValue: 1.0 },
      { id: "ne", label: "Habitable Planets per Star", type: "number", defaultValue: 0.2 },
      { id: "fl", label: "Fraction Developing Life", type: "number", defaultValue: 0.5 },
      { id: "fi", label: "Fraction Developing Intelligence", type: "number", defaultValue: 0.5 },
      { id: "fc", label: "Fraction Communicating", type: "number", defaultValue: 0.2 },
      { id: "Lyears", label: "Communication Lifetime (years)", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "N_civ", label: "Detectable Civilizations", formula: "Rstar * fp * ne * fl * fi * fc * Lyears", unit: "" }
    ],
    theory: "The Drake Equation estimates the number of active, communicative extraterrestrial civilizations in the Milky Way. While many of the parameters are highly uncertain, the equation provides a framework for thinking about the probability of finding intelligent life. Current estimates range from 1 (just us) to thousands.",
    faq: [
      { question: "Is the Drake Equation scientific?", answer: "It is a probabilistic argument, not a predictive formula. Its value lies in organizing our ignorance — identifying which factors matter most and what observations would constrain them." },
      { question: "What is the Fermi Paradox?", answer: "If the Drake Equation suggests many civilizations should exist, why haven't we detected any? This is the Fermi Paradox. Proposed solutions include the Great Filter hypothesis, the Zoo hypothesis, and the vast distances involved." },
      { question: "What values did Drake originally use?", answer: "Drake's 1961 estimates yielded N ≈ 10. Modern astronomers with Kepler data now know fp ≈ 1 and ne ≈ 0.1–0.4, but the biological/sociological factors remain highly uncertain." }
    ],
    seoMeta: { title: "Alien Civilization Calculator — Drake Equation", description: "Estimate alien civilizations using the Drake Equation.", keywords: "Drake equation, alien civilizations, SETI, extraterrestrial, Fermi paradox" }
  },
  {
    id: "delta-v-calculator", name: "Delta V Calculator",
    description: "Calculate the delta-v (change in velocity) available from a rocket using the Tsiolkovsky equation.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "\\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right)",
    inputs: [
      { id: "ve", label: "Exhaust Velocity (m/s)", type: "number", defaultValue: 4400, helpText: "Or Isp × 9.80665" },
      { id: "m0", label: "Initial Mass (wet) (kg)", type: "number", defaultValue: 100000 },
      { id: "mf", label: "Final Mass (dry) (kg)", type: "number", defaultValue: 30000 }
    ],
    outputs: [
      { id: "dv", label: "Delta-v", formula: "ve * log(m0 / mf)", unit: "m/s" },
      { id: "dv_km", label: "Delta-v", formula: "ve * log(m0 / mf) / 1000", unit: "km/s" }
    ],
    theory: "The Tsiolkovsky rocket equation relates a rocket's delta-v to its exhaust velocity and mass ratio. Delta-v is the currency of spaceflight — every maneuver (orbit raising, plane changes, landing) costs a specific delta-v. The logarithmic relationship means diminishing returns: to double delta-v, you must exponentially increase propellant.",
    faq: [
      { question: "What delta-v is needed for orbit?", answer: "Low Earth orbit: ~9.4 km/s (including drag/gravity losses). Moon transfer: ~3.2 km/s from LEO. Mars transfer: ~4.3 km/s from LEO. Escaping the solar system: ~16.6 km/s from LEO." },
      { question: "Why is the mass ratio so important?", answer: "The logarithmic dependence means most of a rocket's mass must be propellant. A typical rocket is 85-95% propellant by mass. This is why staging is used — discarding empty tanks dramatically improves the effective mass ratio." },
      { question: "What is specific impulse?", answer: "Specific impulse (Isp) measures engine efficiency in seconds. Exhaust velocity = Isp × g₀. Chemical rockets: 250–450s. Ion engines: 1500–5000s. Higher Isp means more delta-v per kg of propellant." }
    ],
    seoMeta: { title: "Delta-V Calculator — Tsiolkovsky Equation", description: "Calculate rocket delta-v from the rocket equation.", keywords: "delta-v, rocket equation, Tsiolkovsky, mass ratio, specific impulse" }
  },
  {
    id: "earth-orbit-calculator", name: "Earth Orbit Calculator",
    description: "Calculate orbital parameters for a circular orbit around Earth at a given altitude.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "v = \\sqrt{\\frac{GM}{R+h}}, \\quad T = \\frac{2\\pi(R+h)}{v}",
    inputs: [
      { id: "h_km", label: "Altitude Above Surface (km)", type: "number", defaultValue: 400, helpText: "ISS: ~400 km, GPS: ~20,200 km, GEO: ~35,786 km" }
    ],
    outputs: [
      { id: "v_orbit", label: "Orbital Velocity", formula: "sqrt(3.986004418e14 / ((6371 + h_km) * 1000))", unit: "m/s" },
      { id: "T_sec", label: "Orbital Period", formula: "2 * pi * (6371 + h_km) * 1000 / sqrt(3.986004418e14 / ((6371 + h_km) * 1000))", unit: "s" },
      { id: "T_min", label: "Orbital Period", formula: "2 * pi * (6371 + h_km) * 1000 / sqrt(3.986004418e14 / ((6371 + h_km) * 1000)) / 60", unit: "min" }
    ],
    theory: "For a circular orbit, the gravitational force provides the centripetal acceleration: GMm/r² = mv²/r. This gives v = √(GM/r). The orbital period follows from T = 2πr/v. Higher orbits are slower and have longer periods. The ISS at 400 km orbits in ~92 minutes at 7.67 km/s.",
    faq: [
      { question: "What is geostationary orbit?", answer: "At 35,786 km altitude, the orbital period equals exactly 24 hours, so the satellite appears stationary over the equator. This orbit is used for TV satellites, weather satellites, and communication relays." },
      { question: "Why do higher orbits have lower velocity?", answer: "Gravity weakens with distance (1/r²). At higher altitudes, less centripetal force is available, so the satellite must move slower to maintain a circular orbit. Counterintuitively, you must speed up to move to a higher orbit (via a Hohmann transfer)." },
      { question: "What is LEO vs MEO vs GEO?", answer: "LEO: 200–2,000 km (ISS, Starlink). MEO: 2,000–35,786 km (GPS, navigation). GEO: 35,786 km (TV, weather). Beyond GEO is high Earth orbit and cislunar space." }
    ],
    seoMeta: { title: "Earth Orbit Calculator", description: "Calculate orbital velocity and period at any altitude.", keywords: "Earth orbit, orbital velocity, orbital period, LEO, geostationary" }
  },
  {
    id: "escape-velocity-calculator", name: "Escape Velocity Calculator",
    description: "Calculate the escape velocity from a celestial body.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "v_e = \\sqrt{\\frac{2GM}{R}}",
    inputs: [
      { id: "M_body", label: "Body Mass (kg)", type: "number", defaultValue: 5.972e24, helpText: "Earth: 5.972e24 kg" },
      { id: "R_body", label: "Body Radius (m)", type: "number", defaultValue: 6.371e6, helpText: "Earth: 6.371e6 m" }
    ],
    outputs: [
      { id: "v_esc", label: "Escape Velocity", formula: "sqrt(2 * 6.674e-11 * M_body / R_body)", unit: "m/s" },
      { id: "v_esc_km", label: "Escape Velocity", formula: "sqrt(2 * 6.674e-11 * M_body / R_body) / 1000", unit: "km/s" }
    ],
    theory: "Escape velocity is the minimum speed needed for an object to escape a body's gravitational influence without further propulsion. It is derived by setting kinetic energy equal to gravitational potential energy: ½mv² = GMm/R. Note that escape velocity is independent of the escaping object's mass.",
    faq: [
      { question: "What is Earth's escape velocity?", answer: "About 11.2 km/s (40,270 km/h) from the surface. From the Moon it's only 2.4 km/s, which is why lunar launches are much easier than Earth launches." },
      { question: "Do rockets need to reach escape velocity?", answer: "Only for missions leaving Earth entirely (interplanetary). Orbital missions need orbital velocity (~7.8 km/s for LEO), which is less than escape velocity. Continuous thrust can also gradually escape without ever reaching v_escape instantaneously." },
      { question: "Why can't anything escape a black hole?", answer: "At the event horizon of a black hole, the escape velocity equals the speed of light (c). Since nothing can exceed c, nothing — not even light — can escape from within the event horizon." }
    ],
    seoMeta: { title: "Escape Velocity Calculator", description: "Calculate escape velocity from any celestial body.", keywords: "escape velocity, gravity, orbital mechanics, space travel" }
  },
  {
    id: "exoplanet-discovery-calculator", name: "Exoplanet Discovery Calculator",
    description: "Estimate the radial velocity wobble and transit depth caused by an exoplanet.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "\\Delta F = \\left(\\frac{R_p}{R_*}\\right)^2",
    inputs: [
      { id: "Rp_Re", label: "Planet Radius (Earth radii)", type: "number", defaultValue: 1 },
      { id: "Rs_Rsun", label: "Star Radius (Solar radii)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "transit_depth", label: "Transit Depth", formula: "(Rp_Re * 6.371e6)^2 / (Rs_Rsun * 6.957e8)^2", unit: "" },
      { id: "transit_ppm", label: "Transit Depth", formula: "(Rp_Re * 6.371e6)^2 / (Rs_Rsun * 6.957e8)^2 * 1e6", unit: "ppm" }
    ],
    theory: "When an exoplanet passes in front of its host star (transits), it blocks a fraction of the starlight proportional to (Rp/R*)². Earth-sized planets around Sun-like stars produce ~84 ppm dips. Jupiter-sized planets produce ~1% dips, easily detectable by space telescopes like Kepler and TESS.",
    faq: [
      { question: "How small a planet can we detect?", answer: "Kepler detected planets as small as Mars (~0.5 Earth radii) around small stars. For Sun-like stars, the practical limit is about Earth-size. JWST can characterize atmospheres of planets as small as super-Earths." },
      { question: "What is the radial velocity method?", answer: "The planet's gravity causes the star to wobble. This wobble shifts the star's spectral lines via the Doppler effect. Jupiter causes the Sun to wobble at ~12.5 m/s; Earth causes only ~0.09 m/s." },
      { question: "How many exoplanets are known?", answer: "As of 2024, over 5,500 exoplanets have been confirmed, with thousands more candidates. Most were found by the Kepler space telescope using the transit method." }
    ],
    seoMeta: { title: "Exoplanet Discovery Calculator", description: "Calculate transit depth for exoplanet detection.", keywords: "exoplanet, transit method, transit depth, radial velocity, planet detection" }
  },
  {
    id: "hohmann-transfer-calculator", name: "Hohmann Transfer Calculator",
    description: "Calculate the delta-v for a Hohmann transfer orbit between two circular orbits.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "\\Delta v_1 = \\sqrt{\\frac{\\mu}{r_1}}\\left(\\sqrt{\\frac{2r_2}{r_1+r_2}} - 1\\right)",
    inputs: [
      { id: "r1_km", label: "Initial Orbit Radius (km)", type: "number", defaultValue: 6771, helpText: "LEO ≈ 6771 km from center" },
      { id: "r2_km", label: "Final Orbit Radius (km)", type: "number", defaultValue: 42164, helpText: "GEO ≈ 42164 km from center" }
    ],
    outputs: [
      { id: "dv1", label: "First Burn Δv", formula: "sqrt(3.986e5 / r1_km) * (sqrt(2 * r2_km / (r1_km + r2_km)) - 1)", unit: "km/s" },
      { id: "dv2", label: "Second Burn Δv", formula: "sqrt(3.986e5 / r2_km) * (1 - sqrt(2 * r1_km / (r1_km + r2_km)))", unit: "km/s" },
      { id: "dv_total", label: "Total Δv", formula: "sqrt(3.986e5 / r1_km) * (sqrt(2 * r2_km / (r1_km + r2_km)) - 1) + sqrt(3.986e5 / r2_km) * (1 - sqrt(2 * r1_km / (r1_km + r2_km)))", unit: "km/s" }
    ],
    theory: "A Hohmann transfer is the most fuel-efficient two-impulse maneuver for transferring between coplanar circular orbits. It uses an elliptical transfer orbit tangent to both the initial and final orbits. The first burn raises the apoapsis; the second circularizes at the target orbit.",
    faq: [
      { question: "Why is Hohmann transfer the most efficient?", answer: "For coplanar circular orbits with a radius ratio less than ~11.94, the Hohmann transfer minimizes total delta-v. For larger ratios, bi-elliptic transfers become more efficient." },
      { question: "How long does a Hohmann transfer take?", answer: "Transfer time = half the period of the transfer ellipse. LEO to GEO takes about 5.25 hours. Earth to Mars takes about 8.5 months." },
      { question: "What is a bi-elliptic transfer?", answer: "Uses three burns via a higher intermediate orbit. More fuel-efficient than Hohmann when the final/initial orbit ratio exceeds ~11.94, but takes much longer." }
    ],
    seoMeta: { title: "Hohmann Transfer Calculator", description: "Calculate delta-v for orbital transfers.", keywords: "Hohmann transfer, delta-v, orbital maneuver, orbit raising" }
  },
  {
    id: "rocket-equation-calculator", name: "Rocket Equation Calculator",
    description: "Calculate delta-v using the Tsiolkovsky rocket equation.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "\\Delta v = I_{sp} \\cdot g_0 \\cdot \\ln\\left(\\frac{m_0}{m_f}\\right)",
    inputs: [
      { id: "Isp", label: "Specific Impulse (s)", type: "number", defaultValue: 450, helpText: "Chemical: 250–450s, Ion: 1500–5000s" },
      { id: "m0", label: "Wet Mass (kg)", type: "number", defaultValue: 50000 },
      { id: "mf", label: "Dry Mass (kg)", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "dv", label: "Delta-v", formula: "Isp * 9.80665 * log(m0 / mf)", unit: "m/s" },
      { id: "mass_ratio", label: "Mass Ratio", formula: "m0 / mf", unit: "" }
    ],
    theory: "The Tsiolkovsky rocket equation is the fundamental equation of astronautics. It states that delta-v depends logarithmically on the mass ratio and linearly on exhaust velocity (Isp × g₀). This logarithmic dependence explains why rockets must be mostly propellant and why staging is essential for high delta-v missions.",
    faq: [
      { question: "Who was Tsiolkovsky?", answer: "Konstantin Tsiolkovsky (1857–1935) was a Russian scientist who derived the rocket equation in 1903, before any practical rockets existed. He is considered one of the founding fathers of astronautics." },
      { question: "Why is staging important?", answer: "Staging discards empty propellant tanks, dramatically improving the mass ratio of remaining stages. Without staging, reaching orbit would require impossibly large mass ratios." },
      { question: "What limits rocket performance?", answer: "The tyranny of the rocket equation: exponential propellant requirements for linear delta-v gains. Chemical propulsion is limited to Isp ~450s. Nuclear thermal: ~900s. Ion propulsion: ~3000s but very low thrust." }
    ],
    seoMeta: { title: "Rocket Equation Calculator", description: "Calculate delta-v with the Tsiolkovsky rocket equation.", keywords: "rocket equation, Tsiolkovsky, delta-v, specific impulse, mass ratio" }
  },
  {
    id: "keplers-third-law-calculator", name: "Kepler's Third Law Calculator",
    description: "Calculate orbital period from semi-major axis using Kepler's third law.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "T = 2\\pi\\sqrt{\\frac{a^3}{GM}}",
    inputs: [
      { id: "a_AU", label: "Semi-major Axis (AU)", type: "number", defaultValue: 1, helpText: "1 AU = Earth-Sun distance" },
      { id: "M_Msun", label: "Central Body Mass (Solar masses)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "T_years", label: "Orbital Period", formula: "sqrt(a_AU^3 / M_Msun)", unit: "years" },
      { id: "T_days", label: "Orbital Period", formula: "sqrt(a_AU^3 / M_Msun) * 365.25", unit: "days" }
    ],
    theory: "Kepler's Third Law states that the square of the orbital period is proportional to the cube of the semi-major axis: T² ∝ a³. When using AU and years around the Sun, T² = a³ exactly. This law applies to all orbiting bodies and, combined with Newton's gravitation, allows determination of central body mass.",
    faq: [
      { question: "What are the orbital periods of planets?", answer: "Mercury: 0.24 yr. Venus: 0.62 yr. Earth: 1.00 yr. Mars: 1.88 yr. Jupiter: 11.86 yr. Saturn: 29.46 yr. Uranus: 84.01 yr. Neptune: 164.8 yr." },
      { question: "Does this work for binary stars?", answer: "Yes. For two bodies of comparable mass, the total mass M₁ + M₂ replaces M in the formula. This is how astronomers determine stellar masses in binary systems." },
      { question: "Who was Kepler?", answer: "Johannes Kepler (1571–1630) discovered his three laws of planetary motion by analyzing Tycho Brahe's precise observations of Mars. Kepler's laws were later explained by Newton's law of gravity." }
    ],
    seoMeta: { title: "Kepler's Third Law Calculator", description: "Calculate orbital period from semi-major axis.", keywords: "Kepler's third law, orbital period, semi-major axis, planetary motion" }
  },
  {
    id: "orbital-period-calculator", name: "Orbital Period Calculator",
    description: "Calculate the orbital period for a body orbiting a central mass.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "T = 2\\pi\\sqrt{\\frac{r^3}{GM}}",
    inputs: [
      { id: "r_m", label: "Orbital Radius (m)", type: "number", defaultValue: 6.771e6, helpText: "LEO ≈ 6,771 km = 6.771e6 m" },
      { id: "M_central", label: "Central Body Mass (kg)", type: "number", defaultValue: 5.972e24 }
    ],
    outputs: [
      { id: "T_sec", label: "Period", formula: "2 * pi * sqrt(r_m^3 / (6.674e-11 * M_central))", unit: "s" },
      { id: "T_hr", label: "Period", formula: "2 * pi * sqrt(r_m^3 / (6.674e-11 * M_central)) / 3600", unit: "hours" }
    ],
    theory: "Orbital period is the time for one complete orbit. It increases with orbital radius and decreases with central body mass. For circular orbits, it follows directly from equating gravitational and centripetal forces. This is equivalent to Kepler's Third Law in its Newtonian form.",
    faq: [
      { question: "What is the ISS orbital period?", answer: "About 92 minutes (5,520 seconds) at ~400 km altitude. ISS astronauts see 16 sunrises and sunsets per day!" },
      { question: "What determines geostationary altitude?", answer: "Setting T = 24 hours and solving for r gives ~42,164 km from Earth's center (35,786 km altitude). At this distance, the orbital period matches Earth's rotation." },
      { question: "Does orbital period depend on satellite mass?", answer: "No! Orbital period depends only on the central body mass and the orbital radius. A feather and a space station at the same altitude have identical orbital periods." }
    ],
    seoMeta: { title: "Orbital Period Calculator", description: "Calculate orbital period from radius and central mass.", keywords: "orbital period, circular orbit, gravitational, Kepler" }
  },
  {
    id: "orbital-velocity-calculator", name: "Orbital Velocity Calculator",
    description: "Calculate the orbital velocity for a circular orbit.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "v = \\sqrt{\\frac{GM}{r}}",
    inputs: [
      { id: "M_central", label: "Central Body Mass (kg)", type: "number", defaultValue: 5.972e24 },
      { id: "r_m", label: "Orbital Radius (m)", type: "number", defaultValue: 6.771e6 }
    ],
    outputs: [
      { id: "v_orb", label: "Orbital Velocity", formula: "sqrt(6.674e-11 * M_central / r_m)", unit: "m/s" },
      { id: "v_orb_km", label: "Orbital Velocity", formula: "sqrt(6.674e-11 * M_central / r_m) / 1000", unit: "km/s" }
    ],
    theory: "Circular orbital velocity is derived from equating gravitational force to centripetal force. It decreases with altitude — higher orbits are slower. This counter-intuitive result means that to catch up with a satellite ahead, you must first slow down (drop to a lower, faster orbit).",
    faq: [
      { question: "What is LEO velocity?", answer: "At 400 km altitude: ~7.67 km/s (27,600 km/h). This is about 22× the speed of sound. At this speed, you travel from New York to London in about 23 minutes." },
      { question: "Why do you slow down to speed up in orbit?", answer: "Firing retrograde drops you to a lower orbit where you move faster. This is how spacecraft perform rendezvous maneuvers — paradoxically, you must decelerate to catch up with a target ahead." },
      { question: "Is orbital velocity related to escape velocity?", answer: "Yes! Escape velocity = √2 × orbital velocity at the same radius. To escape, you need to go about 41% faster than orbital speed." }
    ],
    seoMeta: { title: "Orbital Velocity Calculator", description: "Calculate circular orbital velocity.", keywords: "orbital velocity, circular orbit, gravitational, LEO" }
  },
  {
    id: "rocket-thrust-calculator", name: "Rocket Thrust Calculator",
    description: "Calculate rocket thrust from mass flow rate and exhaust velocity.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "F = \\dot{m} \\cdot v_e",
    inputs: [
      { id: "mdot", label: "Mass Flow Rate (kg/s)", type: "number", defaultValue: 270 },
      { id: "ve", label: "Exhaust Velocity (m/s)", type: "number", defaultValue: 4400 }
    ],
    outputs: [
      { id: "F_thrust", label: "Thrust", formula: "mdot * ve", unit: "N" },
      { id: "F_kN", label: "Thrust", formula: "mdot * ve / 1000", unit: "kN" }
    ],
    theory: "Rocket thrust equals the rate of momentum ejected: F = ṁ × ve. Unlike jet engines, rockets carry both fuel and oxidizer, allowing them to work in vacuum. Higher exhaust velocity (specific impulse) means more thrust per unit propellant consumed.",
    faq: [
      { question: "How much thrust do major rockets produce?", answer: "Saturn V: 34,020 kN. Space Shuttle: 30,160 kN (combined). SpaceX Falcon 9: 7,607 kN. SpaceX Starship/Super Heavy: ~74,000 kN. These enormous forces are needed to overcome gravity and accelerate massive vehicles." },
      { question: "What is thrust-to-weight ratio?", answer: "A rocket must have TWR > 1 to lift off (thrust must exceed weight). Typical launch TWR is 1.2–1.8. Too high wastes propellant fighting atmospheric drag; too low risks insufficient acceleration." },
      { question: "Can rockets work in space?", answer: "Yes! Rockets work by ejecting mass (Newton's Third Law), not by pushing against air. In fact, rockets are more efficient in vacuum because there's no atmospheric pressure opposing the exhaust." }
    ],
    seoMeta: { title: "Rocket Thrust Calculator", description: "Calculate rocket thrust from mass flow and exhaust velocity.", keywords: "rocket thrust, mass flow rate, exhaust velocity, propulsion" }
  },
  {
    id: "specific-impulse-calculator", name: "Specific Impulse Calculator",
    description: "Calculate specific impulse from thrust and mass flow rate.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "I_{sp} = \\frac{F}{\\dot{m} \\cdot g_0}",
    inputs: [
      { id: "F_thrust", label: "Thrust (N)", type: "number", defaultValue: 2000000 },
      { id: "mdot", label: "Mass Flow Rate (kg/s)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "Isp", label: "Specific Impulse", formula: "F_thrust / (mdot * 9.80665)", unit: "s" },
      { id: "ve", label: "Effective Exhaust Velocity", formula: "F_thrust / mdot", unit: "m/s" }
    ],
    theory: "Specific impulse (Isp) measures rocket engine efficiency — the thrust produced per unit weight of propellant consumed per second. Higher Isp means more delta-v per kilogram of propellant. It is equivalent to exhaust velocity divided by g₀.",
    faq: [
      { question: "What are typical Isp values?", answer: "Solid rockets: 250–280s. Kerosene/LOX: 300–350s. Hydrolox: 420–460s. Ion engines: 1500–5000s. Nuclear thermal: 800–900s. VASIMR (theoretical): 3000–30000s." },
      { question: "Why is Isp measured in seconds?", answer: "Isp in seconds represents how many seconds one kilogram of propellant can produce one kilogram-force of thrust. This convention makes it independent of the gravitational unit system used." },
      { question: "Why not always use the highest Isp?", answer: "High-Isp engines (ion, Hall effect) have very low thrust — they can't launch from planets. Chemical rockets have lower Isp but much higher thrust. The best engine depends on the mission profile." }
    ],
    seoMeta: { title: "Specific Impulse Calculator", description: "Calculate rocket engine specific impulse.", keywords: "specific impulse, Isp, rocket engine, efficiency, exhaust velocity" }
  },
  {
    id: "synodic-period-calculator", name: "Synodic Period Calculator",
    description: "Calculate the synodic period between two orbiting bodies.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "\\frac{1}{T_{syn}} = \\left|\\frac{1}{T_1} - \\frac{1}{T_2}\\right|",
    inputs: [
      { id: "T1", label: "Inner Body Period (days)", type: "number", defaultValue: 365.25, helpText: "Earth" },
      { id: "T2", label: "Outer Body Period (days)", type: "number", defaultValue: 687, helpText: "Mars" }
    ],
    outputs: [
      { id: "Tsyn", label: "Synodic Period", formula: "1 / abs(1/T1 - 1/T2)", unit: "days" },
      { id: "Tsyn_yr", label: "Synodic Period", formula: "1 / abs(1/T1 - 1/T2) / 365.25", unit: "years" }
    ],
    theory: "The synodic period is the time between successive alignments (conjunctions or oppositions) of two bodies as seen from one of them. It depends on the difference in their angular velocities. Earth-Mars synodic period is ~780 days, which is why Mars launch windows occur approximately every 26 months.",
    faq: [
      { question: "Why do launch windows repeat?", answer: "Launch windows to other planets depend on relative orbital positions. The synodic period determines how often favorable alignments recur. Mars windows: ~26 months. Jupiter: ~13 months. Venus: ~19 months." },
      { question: "What is opposition?", answer: "When an outer planet is directly opposite the Sun from Earth. At opposition, the planet is closest, brightest, and visible all night. Mars oppositions occur every ~780 days." },
      { question: "Does this apply to moons?", answer: "Yes. The Moon's synodic period (new moon to new moon) is ~29.53 days, longer than its sidereal period (~27.32 days) because Earth has moved in its orbit." }
    ],
    seoMeta: { title: "Synodic Period Calculator", description: "Calculate synodic period between orbiting bodies.", keywords: "synodic period, orbital alignment, opposition, launch window" }
  },
  {
    id: "thrust-to-weight-ratio-calculator", name: "Thrust to Weight Ratio Calculator",
    description: "Calculate the thrust-to-weight ratio for a rocket or aircraft.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "TWR = \\frac{F}{m \\cdot g}",
    inputs: [
      { id: "F_thrust", label: "Thrust (N)", type: "number", defaultValue: 7607000, helpText: "Falcon 9: ~7,607 kN" },
      { id: "m_vehicle", label: "Vehicle Mass (kg)", type: "number", defaultValue: 549054 }
    ],
    outputs: [
      { id: "TWR", label: "Thrust-to-Weight Ratio", formula: "F_thrust / (m_vehicle * 9.80665)", unit: "" }
    ],
    theory: "Thrust-to-weight ratio determines whether a vehicle can take off vertically. TWR > 1 is required for launch. As propellant is consumed, TWR increases (mass decreases while thrust stays roughly constant). Fighter jets have TWR > 1 allowing vertical climb; airliners have TWR ~ 0.3.",
    faq: [
      { question: "What TWR is needed for launch?", answer: "Minimum TWR > 1 at liftoff. Typical launch TWR: 1.2–1.8. Too low: vehicle barely lifts off and wastes propellant fighting gravity. Too high: excessive g-forces and aerodynamic loads." },
      { question: "How does TWR change during flight?", answer: "TWR increases as propellant is burned (mass decreases). Saturn V went from 1.2 at liftoff to over 4.0 at first stage burnout. Many rockets throttle down to limit g-forces on crew and payload." },
      { question: "What about aircraft TWR?", answer: "Fighter jets: 0.8–1.3 (some >1 for vertical climb). Airliners: 0.25–0.35. General aviation: 0.05–0.15. Higher TWR means better climb performance and maneuverability." }
    ],
    seoMeta: { title: "Thrust-to-Weight Ratio Calculator", description: "Calculate TWR for rockets and aircraft.", keywords: "thrust to weight ratio, TWR, rocket, launch, fighter jet" }
  },
  {
    id: "ufo-travel-calculator", name: "UFO Travel Calculator",
    description: "Calculate travel time to a distant star at a given velocity.",
    category: "physics", subcategory: "astronomy",
    scientificFormula: "t = \\frac{d}{v}",
    inputs: [
      { id: "d_ly", label: "Distance (light-years)", type: "number", defaultValue: 4.24, helpText: "Proxima Centauri: 4.24 ly" },
      { id: "v_c", label: "Travel Speed (fraction of c)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "t_years", label: "Travel Time", formula: "d_ly / v_c", unit: "years" },
      { id: "t_gen", label: "Generations (~25 yr each)", formula: "d_ly / v_c / 25", unit: "generations" }
    ],
    theory: "Interstellar travel times are determined by the vast distances between stars. Even the nearest star (Proxima Centauri at 4.24 light-years) would take 42 years at 10% light speed. At current spacecraft speeds (~0.005% c), it would take over 75,000 years.",
    faq: [
      { question: "How fast is the fastest spacecraft?", answer: "Parker Solar Probe reached ~0.064% c (~192 km/s). Voyager 1 travels at ~0.006% c (~17 km/s). At Voyager's speed, reaching Proxima Centauri would take ~73,000 years." },
      { question: "Is faster-than-light travel possible?", answer: "According to Einstein's relativity, no material object can reach or exceed light speed. However, theoretical concepts like the Alcubierre warp drive manipulate spacetime geometry rather than accelerating through space." },
      { question: "What about time dilation?", answer: "At relativistic speeds, time passes slower for the traveler. At 90% c, the trip to Proxima Centauri takes 4.7 years Earth time but only 2.1 years for the traveler. At 99.9% c, the traveler would age only ~2 months." }
    ],
    seoMeta: { title: "UFO Travel Calculator — Interstellar Travel Time", description: "Calculate travel time to distant stars.", keywords: "interstellar travel, light year, Proxima Centauri, space travel time" }
  },

  // ═══════════════════════════════════════════════════════════
  // ASTROPHYSICS 🌌
  // ═══════════════════════════════════════════════════════════
  {
    id: "black-hole-collision-calculator", name: "Black Hole Collision Calculator",
    description: "Estimate the gravitational wave energy released in a black hole merger.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "E_{GW} \\approx \\eta \\cdot M_{total} \\cdot c^2",
    inputs: [
      { id: "m1_Msun", label: "Black Hole 1 Mass (Solar masses)", type: "number", defaultValue: 30 },
      { id: "m2_Msun", label: "Black Hole 2 Mass (Solar masses)", type: "number", defaultValue: 35 },
      { id: "eta_frac", label: "Radiated Fraction", type: "number", defaultValue: 0.05, helpText: "Typically 3–10% of total mass" }
    ],
    outputs: [
      { id: "E_gw", label: "GW Energy Released", formula: "eta_frac * (m1_Msun + m2_Msun) * 1.989e30 * (2.998e8)^2", unit: "J" },
      { id: "M_radiated", label: "Mass Radiated", formula: "eta_frac * (m1_Msun + m2_Msun)", unit: "Solar masses" }
    ],
    theory: "When two black holes merge, a fraction (typically 3–10%) of the total mass-energy is radiated as gravitational waves. The first detection by LIGO in 2015 (GW150914) observed two ~30 M☉ black holes merging, radiating ~3 M☉ of energy — briefly outshining the entire observable universe in gravitational wave power.",
    faq: [
      { question: "What was the first gravitational wave detection?", answer: "GW150914, detected on September 14, 2015, by LIGO. Two black holes of ~36 and ~29 solar masses merged 1.3 billion light-years away, radiating ~3 solar masses of energy as gravitational waves." },
      { question: "How much energy is 3 solar masses?", answer: "E = 3 × 1.989×10³⁰ × (3×10⁸)² ≈ 5.4 × 10⁴⁷ J. This is more energy than all the stars in the observable universe emit in about 0.1 seconds." },
      { question: "Can we feel gravitational waves?", answer: "No. By the time they reach Earth, gravitational waves stretch and compress space by less than 10⁻²¹ meters — a thousand times smaller than a proton. LIGO uses 4-km laser interferometers to detect these incredibly tiny distortions." }
    ],
    seoMeta: { title: "Black Hole Collision Calculator", description: "Calculate gravitational wave energy from black hole mergers.", keywords: "black hole merger, gravitational waves, LIGO, GW energy" }
  },
  {
    id: "black-hole-temperature-calculator", name: "Black Hole Temperature Calculator",
    description: "Calculate the Hawking temperature of a black hole.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "T = \\frac{\\hbar c^3}{8\\pi G M k_B}",
    inputs: [
      { id: "M_Msun", label: "Black Hole Mass (Solar masses)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "T_hawking", label: "Hawking Temperature", formula: "1.0546e-34 * (2.998e8)^3 / (8 * pi * 6.674e-11 * (M_Msun * 1.989e30) * 1.381e-23)", unit: "K" }
    ],
    theory: "Stephen Hawking showed in 1974 that black holes emit thermal radiation due to quantum effects near the event horizon. The temperature is inversely proportional to mass — smaller black holes are hotter. A solar-mass black hole has T ≈ 60 nanokelvin, far colder than the cosmic microwave background, so it absorbs more than it emits.",
    faq: [
      { question: "Do black holes really emit radiation?", answer: "Hawking radiation has not been directly observed — for stellar black holes, the temperature is billionths of a kelvin, far below the 2.7K cosmic background. Only very small (primordial) black holes would emit detectable radiation." },
      { question: "Will black holes eventually evaporate?", answer: "Yes, if they stop absorbing matter. A solar-mass black hole would take ~10⁶⁷ years to evaporate — far longer than the current age of the universe (1.38×10¹⁰ years)." },
      { question: "What happens when a black hole gets very small?", answer: "As it shrinks, its temperature rises (T ∝ 1/M), causing it to radiate faster. The final moments are explosive — a black hole the mass of Mt. Everest (~10¹² kg) would emit ~3.5×10⁹ W, glowing brighter than the Sun." }
    ],
    seoMeta: { title: "Black Hole Temperature Calculator — Hawking Radiation", description: "Calculate Hawking temperature of a black hole.", keywords: "Hawking temperature, black hole, Hawking radiation, quantum gravity" }
  },
  {
    id: "drake-equation-calculator", name: "Drake Equation Calculator",
    description: "Estimate the number of communicating civilizations using the Drake Equation.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "N = R_* \\cdot f_p \\cdot n_e \\cdot f_l \\cdot f_i \\cdot f_c \\cdot L",
    inputs: [
      { id: "Rstar", label: "Star Formation Rate (/yr)", type: "number", defaultValue: 1.5 },
      { id: "fp", label: "Fraction with Planets", type: "number", defaultValue: 1.0 },
      { id: "ne", label: "Habitable Planets per Star", type: "number", defaultValue: 0.2 },
      { id: "fl", label: "Fraction with Life", type: "number", defaultValue: 0.5 },
      { id: "fi", label: "Fraction with Intelligence", type: "number", defaultValue: 0.5 },
      { id: "fc", label: "Fraction that Communicate", type: "number", defaultValue: 0.2 },
      { id: "Lyears", label: "Communication Lifetime (yr)", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "N_civ", label: "Communicating Civilizations", formula: "Rstar * fp * ne * fl * fi * fc * Lyears", unit: "" }
    ],
    theory: "Frank Drake formulated this equation in 1961 to stimulate scientific dialogue about the search for extraterrestrial intelligence. Each parameter represents a filter that reduces the number of detectable civilizations. Modern exoplanet surveys have constrained fp and ne, but biological and sociological parameters remain highly uncertain.",
    faq: [
      { question: "What are the most uncertain parameters?", answer: "fl (fraction developing life), fi (intelligence), and L (civilization lifetime) are the most uncertain, spanning orders of magnitude. Some estimates for N range from <1 to millions." },
      { question: "How has our knowledge improved?", answer: "The Kepler mission showed nearly every star has planets (fp ≈ 1) and many are in habitable zones (ne ≈ 0.1–0.5). These were the most uncertain when Drake first proposed the equation." },
      { question: "What is the Great Filter?", answer: "The idea that one or more of the Drake factors must be extremely small, explaining why we haven't detected aliens. The question is whether the filter is behind us (life is rare) or ahead (civilizations self-destruct)." }
    ],
    seoMeta: { title: "Drake Equation Calculator", description: "Estimate extraterrestrial civilizations using the Drake Equation.", keywords: "Drake equation, SETI, extraterrestrial intelligence, Fermi paradox" }
  },
  {
    id: "hubble-law-distance-calculator", name: "Hubble Law Distance Calculator",
    description: "Calculate the distance to a galaxy from its recessional velocity using Hubble's Law.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "d = \\frac{v}{H_0}",
    inputs: [
      { id: "v_kms", label: "Recessional Velocity (km/s)", type: "number", defaultValue: 7000 },
      { id: "H0", label: "Hubble Constant (km/s/Mpc)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "d_Mpc", label: "Distance", formula: "v_kms / H0", unit: "Mpc" },
      { id: "d_Mly", label: "Distance", formula: "v_kms / H0 * 3.2616", unit: "Mly" }
    ],
    theory: "Hubble's Law states that galaxies recede from us at velocities proportional to their distance: v = H₀d. This is the observational basis for the expanding universe. The Hubble constant H₀ ≈ 70 km/s/Mpc means a galaxy 1 Mpc away recedes at 70 km/s.",
    faq: [
      { question: "What is the Hubble constant?", answer: "H₀ ≈ 67–73 km/s/Mpc (there is a 'Hubble tension' between different measurement methods). It determines the expansion rate and age of the universe. 1/H₀ ≈ 14 billion years." },
      { question: "Are galaxies actually moving?", answer: "Not exactly. It's space itself that is expanding, carrying galaxies with it. Galaxies aren't moving 'through' space; the distance between them increases as space stretches." },
      { question: "Does Hubble's Law work at all distances?", answer: "It's valid for nearby galaxies (up to a few hundred Mpc). At cosmological distances, general relativistic effects require more complex models and the relationship becomes non-linear." }
    ],
    seoMeta: { title: "Hubble's Law Calculator", description: "Calculate galaxy distance from recessional velocity.", keywords: "Hubble's law, Hubble constant, recessional velocity, cosmological distance" }
  },
  {
    id: "light-year-calculator", name: "Light Year Calculator",
    description: "Convert between light-years, parsecs, and kilometers.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "1\\text{ ly} = 9.461 \\times 10^{12}\\text{ km}",
    inputs: [
      { id: "d_ly", label: "Distance (light-years)", type: "number", defaultValue: 4.24 }
    ],
    outputs: [
      { id: "d_km", label: "Distance", formula: "d_ly * 9.461e12", unit: "km" },
      { id: "d_AU", label: "Distance", formula: "d_ly * 63241", unit: "AU" },
      { id: "d_pc", label: "Distance", formula: "d_ly / 3.2616", unit: "parsecs" }
    ],
    theory: "A light-year is the distance light travels in one year: 9.461 × 10¹² km. Despite its name, it is a unit of distance, not time. Astronomers often prefer parsecs (1 pc = 3.2616 ly), which relate directly to stellar parallax measurements.",
    faq: [
      { question: "How far is the nearest star?", answer: "Proxima Centauri: 4.24 light-years = 40.14 trillion km. At light speed, you'd arrive in 4.24 years. At Voyager 1's speed (~17 km/s), it would take ~73,000 years." },
      { question: "What is a parsec?", answer: "A parsec is the distance at which 1 AU subtends 1 arcsecond of parallax angle. 1 pc = 3.2616 ly = 3.086 × 10¹³ km. The Milky Way is about 30,000 parsecs (100,000 ly) across." },
      { question: "What is the farthest we can see?", answer: "The observable universe has a radius of ~46.5 billion light-years (due to cosmic expansion). The cosmic microwave background at ~13.8 billion light-years lookback time is the farthest observable signal." }
    ],
    seoMeta: { title: "Light Year Calculator", description: "Convert between light-years, parsecs, and km.", keywords: "light year, parsec, astronomical distance, space distance" }
  },
  {
    id: "luminosity-calculator", name: "Luminosity Calculator",
    description: "Calculate stellar luminosity from radius and temperature using the Stefan-Boltzmann law.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "L = 4\\pi R^2 \\sigma T^4",
    inputs: [
      { id: "R_Rsun", label: "Stellar Radius (Solar radii)", type: "number", defaultValue: 1 },
      { id: "T_K", label: "Surface Temperature (K)", type: "number", defaultValue: 5778, helpText: "Sun: 5778 K" }
    ],
    outputs: [
      { id: "L_W", label: "Luminosity", formula: "4 * pi * (R_Rsun * 6.957e8)^2 * 5.670374419e-8 * T_K^4", unit: "W" },
      { id: "L_Lsun", label: "Luminosity", formula: "4 * pi * (R_Rsun * 6.957e8)^2 * 5.670374419e-8 * T_K^4 / 3.828e26", unit: "L☉" }
    ],
    theory: "Stellar luminosity is the total power output of a star. It depends on surface area (4πR²) and the fourth power of temperature (T⁴) via the Stefan-Boltzmann law. A star twice the Sun's temperature but same size would be 16× more luminous. The Sun's luminosity is 3.828 × 10²⁶ W.",
    faq: [
      { question: "What determines a star's luminosity?", answer: "Size and temperature. Blue giants are luminous because they're both large and hot. Red dwarfs are dim because they're small and cool. The T⁴ dependence makes temperature dominant." },
      { question: "What is the Hertzsprung-Russell diagram?", answer: "A plot of stellar luminosity vs temperature. Main sequence stars form a diagonal band. Giants/supergiants are in the upper right (cool but large). White dwarfs are in the lower left (hot but small)." },
      { question: "How luminous is the Sun?", answer: "The Sun's luminosity is 3.828 × 10²⁶ W = 1 L☉. It converts ~4.3 million tons of matter to energy per second via nuclear fusion. Betelgeuse is ~100,000 L☉. Proxima Centauri is ~0.0017 L☉." }
    ],
    seoMeta: { title: "Luminosity Calculator — Stefan-Boltzmann", description: "Calculate stellar luminosity from radius and temperature.", keywords: "luminosity, Stefan-Boltzmann, stellar physics, star brightness" }
  },
  {
    id: "olbers-paradox-calculator", name: "Olber's Paradox Calculator",
    description: "Calculate the expected sky brightness in an infinite static universe (Olbers' Paradox).",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "B \\propto n \\cdot L \\cdot R_{max}",
    inputs: [
      { id: "n_density", label: "Star Number Density (per Mpc³)", type: "number", defaultValue: 1e10 },
      { id: "L_avg_Lsun", label: "Average Luminosity (L☉)", type: "number", defaultValue: 1 },
      { id: "R_Mpc", label: "Universe Radius (Mpc)", type: "number", defaultValue: 4000 }
    ],
    outputs: [
      { id: "B_total", label: "Brightness Integral", formula: "n_density * L_avg_Lsun * 3.828e26 * R_Mpc", unit: "W/Mpc²" }
    ],
    theory: "Olbers' Paradox asks: why is the night sky dark if the universe is infinite and full of stars? In an infinite, static, eternal universe, every line of sight would eventually hit a star, making the sky as bright as a stellar surface. The resolution is that the universe has a finite age, is expanding (redshift), and has finite star lifetimes.",
    faq: [
      { question: "What is the resolution to Olbers' Paradox?", answer: "The universe has a finite age (~13.8 billion years), so light from distant stars hasn't reached us. Also, cosmic expansion redshifts distant light to invisibility, and stars have finite lifetimes." },
      { question: "Is the paradox real?", answer: "It was a genuine puzzle for centuries. Edgar Allan Poe suggested the finite-age solution in 1848. The Big Bang theory provided the complete resolution: a finite-age, expanding universe naturally has a dark night sky." },
      { question: "What fills the darkness?", answer: "The cosmic microwave background (CMB) at 2.725 K fills all of space uniformly. It is the cooled remnant of the hot early universe, redshifted from ~3000K to microwave frequencies by cosmic expansion." }
    ],
    seoMeta: { title: "Olbers' Paradox Calculator", description: "Explore why the night sky is dark.", keywords: "Olbers paradox, dark sky, cosmology, finite universe" }
  },
  {
    id: "parallax-calculator", name: "Parallax Calculator",
    description: "Calculate stellar distance from parallax angle.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "d = \\frac{1}{p}",
    inputs: [
      { id: "p_arcsec", label: "Parallax Angle (arcseconds)", type: "number", defaultValue: 0.7687, helpText: "Proxima Centauri: 0.7687\"" }
    ],
    outputs: [
      { id: "d_pc", label: "Distance", formula: "1 / p_arcsec", unit: "parsecs" },
      { id: "d_ly", label: "Distance", formula: "3.2616 / p_arcsec", unit: "light-years" }
    ],
    theory: "Stellar parallax is the apparent shift of a nearby star against the background of distant stars as Earth orbits the Sun. The parallax angle (in arcseconds) is inversely proportional to distance (in parsecs): d = 1/p. This is the definition of the parsec and provides the most direct distance measurement in astronomy.",
    faq: [
      { question: "How accurate is parallax measurement?", answer: "Ground-based: useful to ~100 pc. Hipparcos satellite: ~1000 pc. Gaia satellite: precise to ~10,000 pc for bright stars, measuring over 1 billion stars with unprecedented accuracy." },
      { question: "What is the nearest star by parallax?", answer: "Proxima Centauri has the largest parallax: 0.7687 arcseconds, giving d = 1.30 pc = 4.24 light-years. It was discovered in 1915 by Robert Innes." },
      { question: "Why is parallax the gold standard?", answer: "Parallax is geometric — it doesn't depend on assumptions about star properties. All other distance methods (standard candles, redshift) are ultimately calibrated against parallax measurements." }
    ],
    seoMeta: { title: "Parallax Calculator", description: "Calculate stellar distance from parallax angle.", keywords: "stellar parallax, parsec, distance measurement, Gaia" }
  },
  {
    id: "radiation-pressure-calculator", name: "Radiation Pressure Calculator",
    description: "Calculate the radiation pressure from light intensity.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "P = \\frac{I}{c} \\quad \\text{(absorption)}, \\quad P = \\frac{2I}{c} \\quad \\text{(reflection)}",
    inputs: [
      { id: "I_wm2", label: "Intensity (W/m²)", type: "number", defaultValue: 1361, helpText: "Solar constant: 1361 W/m²" },
      { id: "reflective", label: "Reflection Factor (1=absorb, 2=reflect)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "P_rad", label: "Radiation Pressure", formula: "reflective * I_wm2 / 2.998e8", unit: "Pa" }
    ],
    theory: "Light carries momentum and exerts pressure on surfaces it strikes. For total absorption, P = I/c. For total reflection, P = 2I/c (momentum reversal doubles the force). Solar radiation pressure at Earth is ~4.56 μPa — tiny but significant for spacecraft over long periods (solar sails).",
    faq: [
      { question: "Is radiation pressure useful?", answer: "Yes! Solar sails use radiation pressure for propulsion without fuel. The Japanese IKAROS mission (2010) demonstrated solar sail propulsion. Radiation pressure also shapes comet tails and influences dust in protoplanetary disks." },
      { question: "How strong is solar radiation pressure?", answer: "At Earth (~1361 W/m²): about 4.56 μPa for absorption, 9.12 μPa for reflection. On a 100m² solar sail, this produces ~0.9 mN of force — tiny but constant and free." },
      { question: "Does radiation pressure affect stars?", answer: "Yes, significantly. In massive stars, radiation pressure from the luminous core counterbalances gravity. Above ~150 solar masses, radiation pressure prevents further mass accumulation (Eddington limit)." }
    ],
    seoMeta: { title: "Radiation Pressure Calculator", description: "Calculate radiation pressure from light intensity.", keywords: "radiation pressure, solar sail, light pressure, photon momentum" }
  },
  {
    id: "redshift-calculator", name: "Redshift Calculator",
    description: "Calculate cosmological redshift from observed and emitted wavelengths.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "z = \\frac{\\lambda_{obs} - \\lambda_{emit}}{\\lambda_{emit}}",
    inputs: [
      { id: "lambda_obs", label: "Observed Wavelength (nm)", type: "number", defaultValue: 700 },
      { id: "lambda_emit", label: "Emitted Wavelength (nm)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "z_val", label: "Redshift z", formula: "(lambda_obs - lambda_emit) / lambda_emit", unit: "" },
      { id: "v_recession", label: "Recession Velocity (approx)", formula: "(lambda_obs - lambda_emit) / lambda_emit * 2.998e5", unit: "km/s" }
    ],
    theory: "Cosmological redshift occurs because the expansion of space stretches photon wavelengths as they travel. Higher redshift means greater distance and earlier cosmic epoch. z = 0 is here and now; z = 1100 is the surface of last scattering (CMB). The most distant galaxies observed have z > 13.",
    faq: [
      { question: "What does a redshift of z = 1 mean?", answer: "The wavelength has doubled. The universe was half its current size when the light was emitted. The lookback time is about 7.7 billion years — more than half the age of the universe." },
      { question: "Is redshift only from expansion?", answer: "No. Doppler redshift occurs from relative motion, gravitational redshift from climbing out of a gravity well, and cosmological redshift from space expansion. In cosmology, the expansion dominates for distant objects." },
      { question: "What is the highest redshift observed?", answer: "JWST has observed galaxies at z > 13, seen as they were less than 400 million years after the Big Bang. The CMB has z ≈ 1100, from 380,000 years after the Big Bang." }
    ],
    seoMeta: { title: "Redshift Calculator", description: "Calculate cosmological redshift.", keywords: "redshift, cosmological redshift, wavelength, expansion, Doppler" }
  },
  {
    id: "schwarzschild-radius-calculator", name: "Schwarzschild Radius Calculator",
    description: "Calculate the Schwarzschild radius (event horizon) of a black hole.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "r_s = \\frac{2GM}{c^2}",
    inputs: [
      { id: "M_Msun", label: "Mass (Solar masses)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "rs_m", label: "Schwarzschild Radius", formula: "2 * 6.674e-11 * (M_Msun * 1.989e30) / (2.998e8)^2", unit: "m" },
      { id: "rs_km", label: "Schwarzschild Radius", formula: "2 * 6.674e-11 * (M_Msun * 1.989e30) / (2.998e8)^2 / 1000", unit: "km" }
    ],
    theory: "The Schwarzschild radius defines the event horizon of a non-rotating black hole — the boundary beyond which nothing can escape. For the Sun's mass, rs ≈ 3 km. The radius scales linearly with mass, so a 10 solar mass black hole has rs ≈ 30 km.",
    faq: [
      { question: "What is the event horizon?", answer: "The event horizon is the surface where escape velocity equals the speed of light. Nothing — not even light — can escape from inside. An observer falling in would not notice anything special at the horizon, but could never return." },
      { question: "How big is Earth's Schwarzschild radius?", answer: "About 8.87 mm — the size of a marble. To make a black hole from Earth, you'd need to compress all its mass into a sphere smaller than a peanut." },
      { question: "What about supermassive black holes?", answer: "Sagittarius A* (4.3 million M☉) has rs ≈ 12.7 million km (0.085 AU). M87* (6.5 billion M☉) has rs ≈ 19.2 billion km (128 AU). Despite being 'super massive,' their average density can be less than water!" }
    ],
    seoMeta: { title: "Schwarzschild Radius Calculator", description: "Calculate black hole event horizon radius.", keywords: "Schwarzschild radius, event horizon, black hole, general relativity" }
  },
  {
    id: "universe-expansion-calculator", name: "Universe Expansion Calculator",
    description: "Calculate the recessional velocity of a galaxy at a given distance due to cosmic expansion.",
    category: "physics", subcategory: "astrophysics",
    scientificFormula: "v = H_0 \\cdot d",
    inputs: [
      { id: "d_Mpc", label: "Distance (Mpc)", type: "number", defaultValue: 100 },
      { id: "H0", label: "Hubble Constant (km/s/Mpc)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "v_rec", label: "Recessional Velocity", formula: "H0 * d_Mpc", unit: "km/s" },
      { id: "v_frac_c", label: "Fraction of Speed of Light", formula: "H0 * d_Mpc / 2.998e5", unit: "" }
    ],
    theory: "The universe is expanding uniformly — every point moves away from every other point. The recessional velocity is proportional to distance (Hubble's Law: v = H₀d). At the Hubble distance (c/H₀ ≈ 4,300 Mpc), galaxies recede at the speed of light. Beyond this, space expands faster than light (which is allowed in general relativity).",
    faq: [
      { question: "Can galaxies recede faster than light?", answer: "Yes! At distances beyond c/H₀ ≈ 14 billion light-years, galaxies recede faster than light. This doesn't violate relativity because it's space itself expanding, not objects moving through space." },
      { question: "What is the Hubble tension?", answer: "Different measurement methods give different values of H₀: ~67 km/s/Mpc (CMB measurements by Planck) vs ~73 km/s/Mpc (local distance ladder). This 9% discrepancy may indicate new physics." },
      { question: "Will expansion continue forever?", answer: "Current evidence suggests the expansion is accelerating due to dark energy. If this continues, distant galaxies will eventually become unobservable as they recede beyond the cosmic horizon." }
    ],
    seoMeta: { title: "Universe Expansion Calculator", description: "Calculate galaxy recession velocity from Hubble's Law.", keywords: "universe expansion, Hubble's law, recessional velocity, cosmology" }
  }
];
