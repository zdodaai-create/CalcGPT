import { CalculatorConfig } from "./calculator-types";

export const RELATIVITY_CALCULATORS: CalculatorConfig[] = [
  {
    id: "barn-pole-paradox-calculator", name: "Barn-Pole Paradox Calculator",
    description: "Explore the relativistic barn-pole paradox with length contraction.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "L' = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}",
    inputs: [
      { id: "L0_pole", label: "Pole Rest Length (m)", type: "number", defaultValue: 20 },
      { id: "L0_barn", label: "Barn Rest Length (m)", type: "number", defaultValue: 10 },
      { id: "v_c", label: "Speed (fraction of c)", type: "number", defaultValue: 0.9 }
    ],
    outputs: [
      { id: "L_pole_barn", label: "Pole length seen by barn", formula: "L0_pole * sqrt(1 - v_c^2)", unit: "m" },
      { id: "L_barn_pole", label: "Barn length seen by runner", formula: "L0_barn * sqrt(1 - v_c^2)", unit: "m" },
      { id: "gamma", label: "Lorentz Factor γ", formula: "1 / sqrt(1 - v_c^2)", unit: "" }
    ],
    theory: "The barn-pole paradox: a pole longer than a barn is carried at relativistic speed. In the barn's frame, the pole is length-contracted and fits inside. In the runner's frame, the barn is contracted and the pole doesn't fit. Both are correct — the resolution is that simultaneity is relative. The doors don't close 'at the same time' in both frames.",
    faq: [
      { question: "How is the paradox resolved?", answer: "Simultaneity is relative. In the barn frame, both doors close simultaneously while the contracted pole is inside. In the runner's frame, the front door opens before the back door closes, so the pole is never fully enclosed. Both descriptions are physically consistent." },
      { question: "Is length contraction real?", answer: "Yes, it is a real physical effect, not an optical illusion. However, it only affects the dimension along the direction of motion. A sphere moving at relativistic speed appears contracted into an ellipsoid." },
      { question: "Can we observe length contraction?", answer: "We observe its effects in particle physics — relativistic muons created in the upper atmosphere reach the ground because, in their frame, the atmosphere is contracted. Direct visual observation is complicated by light travel time effects." }
    ],
    seoMeta: { title: "Barn-Pole Paradox Calculator", description: "Explore relativistic length contraction paradox.", keywords: "barn-pole paradox, length contraction, relativity, simultaneity" }
  },
  {
    id: "bug-rivet-paradox-calculator", name: "Bug-Rivet Paradox Calculator",
    description: "Explore the bug-rivet paradox involving relativistic length contraction and rigidity.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "L'_{rivet} = L_0 \\sqrt{1 - v^2/c^2}",
    inputs: [
      { id: "L0_rivet", label: "Rivet Shank Length (cm)", type: "number", defaultValue: 5 },
      { id: "depth_hole", label: "Hole Depth (cm)", type: "number", defaultValue: 3 },
      { id: "v_c", label: "Speed (fraction of c)", type: "number", defaultValue: 0.9 }
    ],
    outputs: [
      { id: "L_rivet_contracted", label: "Contracted Rivet Shank", formula: "L0_rivet * sqrt(1 - v_c^2)", unit: "cm" },
      { id: "fits", label: "Rivet fits in hole?", formula: "L0_rivet * sqrt(1 - v_c^2)", unit: "cm" }
    ],
    theory: "The bug-rivet paradox: a rivet with a shank longer than a hole is driven in at relativistic speed. In the hole's frame, the shank is contracted and fits without crushing the bug at the bottom. In the rivet's frame, the hole is contracted, making the situation worse. The resolution involves the finite speed of force propagation — no rigid body exists in relativity.",
    faq: [
      { question: "Does the bug get squished?", answer: "Yes. The resolution is that information about the rivet head stopping cannot travel faster than light through the rivet material. The tip continues moving at nearly c until the compression wave reaches it — by then, the bug is crushed." },
      { question: "Why can't rigid bodies exist in relativity?", answer: "A perfectly rigid body would transmit force instantaneously (infinite speed of sound), violating the speed of light limit. Real materials have finite sound speeds, so deformation propagates as waves." },
      { question: "Is this paradox related to the barn-pole?", answer: "Yes, both involve length contraction and simultaneity. The bug-rivet adds the complication of material rigidity, making the resolution more subtle and physical." }
    ],
    seoMeta: { title: "Bug-Rivet Paradox Calculator", description: "Explore the relativistic bug-rivet thought experiment.", keywords: "bug-rivet paradox, length contraction, relativistic rigidity" }
  },
  {
    id: "electron-speed-calculator", name: "Electron Speed Calculator",
    description: "Calculate the speed of an electron accelerated through a potential difference.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "v = c\\sqrt{1 - \\left(\\frac{m_e c^2}{m_e c^2 + eV}\\right)^2}",
    inputs: [
      { id: "V_volts", label: "Accelerating Voltage (V)", type: "number", defaultValue: 100000 }
    ],
    outputs: [
      { id: "v_classical", label: "Classical Speed", formula: "sqrt(2 * 1.602e-19 * V_volts / 9.109e-31)", unit: "m/s" },
      { id: "v_relativistic", label: "Relativistic Speed", formula: "2.998e8 * sqrt(1 - (9.109e-31 * (2.998e8)^2 / (9.109e-31 * (2.998e8)^2 + 1.602e-19 * V_volts))^2)", unit: "m/s" },
      { id: "v_frac_c", label: "Speed (fraction of c)", formula: "sqrt(1 - (9.109e-31 * (2.998e8)^2 / (9.109e-31 * (2.998e8)^2 + 1.602e-19 * V_volts))^2)", unit: "c" }
    ],
    theory: "When an electron is accelerated through a voltage V, it gains kinetic energy eV. At low voltages, classical KE = ½mv² is adequate. Above ~10 kV, relativistic effects become significant because the electron's rest energy (511 keV) is comparable to the kinetic energy gained. The relativistic formula ensures v < c always.",
    faq: [
      { question: "At what voltage does relativity matter?", answer: "Above ~10 kV (2% of rest energy), the classical formula overestimates speed by >1%. At 100 kV, classical gives 0.625c while relativistic gives 0.548c. At 1 MV, classical gives 1.98c (impossible!) while relativistic gives 0.941c." },
      { question: "What is the electron rest energy?", answer: "m_e × c² = 8.187 × 10⁻¹⁴ J = 511 keV = 0.511 MeV. When kinetic energy approaches this value, relativistic effects are essential." },
      { question: "Where is this important?", answer: "Electron microscopes (100–300 kV), particle accelerators, CRT displays (historical), X-ray tubes, and radiation therapy. All require relativistic calculations." }
    ],
    seoMeta: { title: "Electron Speed Calculator", description: "Calculate electron speed from accelerating voltage.", keywords: "electron speed, relativistic, accelerating voltage, kinetic energy" }
  },
  {
    id: "e-mc2-calculator", name: "E = mc² Calculator",
    description: "Calculate the energy equivalent of mass using Einstein's famous equation.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "E = mc^2",
    inputs: [
      { id: "m_kg", label: "Mass (kg)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "E_J", label: "Energy", formula: "m_kg * (2.998e8)^2", unit: "J" },
      { id: "E_MeV", label: "Energy", formula: "m_kg * (2.998e8)^2 / 1.602e-13", unit: "MeV" },
      { id: "E_kWh", label: "Energy", formula: "m_kg * (2.998e8)^2 / 3.6e6", unit: "kWh" }
    ],
    theory: "Einstein's mass-energy equivalence states that mass and energy are interchangeable. A small amount of mass contains an enormous amount of energy because c² ≈ 9 × 10¹⁶ m²/s² is a huge number. One kilogram of mass is equivalent to ~25 billion kWh — enough to power the entire US for about 2.5 hours.",
    faq: [
      { question: "How much energy is in 1 kg?", answer: "E = 1 × (3×10⁸)² = 9 × 10¹⁶ J = 25 billion kWh ≈ 21.5 megatons of TNT. This is more than the largest nuclear weapon ever detonated (Tsar Bomba at 50 MT used only about 2.3 kg of mass conversion)." },
      { question: "Does nuclear fission convert all mass to energy?", answer: "No. Fission converts only about 0.1% of mass to energy. Fusion converts about 0.7%. Even these tiny fractions release enormous energy compared to chemical reactions, which convert about 10⁻⁸% of mass." },
      { question: "Does a hot object weigh more?", answer: "Yes! Thermal energy contributes to mass via E = mc². A 1-liter kettle of water heated by 100°C gains about 4.7 × 10⁻¹² kg. This is unmeasurably small but real." }
    ],
    seoMeta: { title: "E = mc² Calculator", description: "Calculate energy from mass using Einstein's equation.", keywords: "E=mc2, mass-energy equivalence, Einstein, nuclear energy" }
  },
  {
    id: "gravitational-time-dilation-calculator", name: "Gravitational Time Dilation Calculator",
    description: "Calculate time dilation due to gravity using general relativity.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "\\Delta t' = \\Delta t \\sqrt{1 - \\frac{2GM}{rc^2}}",
    inputs: [
      { id: "dt", label: "Time Interval (far away) (s)", type: "number", defaultValue: 1 },
      { id: "M_body", label: "Body Mass (kg)", type: "number", defaultValue: 5.972e24 },
      { id: "r_m", label: "Distance from Center (m)", type: "number", defaultValue: 6.371e6 }
    ],
    outputs: [
      { id: "dt_grav", label: "Time Near Mass", formula: "dt * sqrt(1 - 2 * 6.674e-11 * M_body / (r_m * (2.998e8)^2))", unit: "s" },
      { id: "diff_ns", label: "Difference per Second", formula: "(1 - sqrt(1 - 2 * 6.674e-11 * M_body / (r_m * (2.998e8)^2))) * 1e9", unit: "ns" }
    ],
    theory: "General relativity predicts that clocks run slower in stronger gravitational fields. Near a massive object, time passes more slowly compared to a clock far from any mass. This effect is crucial for GPS satellites — without gravitational time dilation corrections, GPS would drift by ~10 km/day.",
    faq: [
      { question: "How much slower do clocks run on Earth?", answer: "Compared to a clock at infinity, Earth's surface clocks lose about 0.0219 ns per second (about 0.7 seconds per year). This is tiny but measurable with atomic clocks." },
      { question: "How does this affect GPS?", answer: "GPS satellite clocks (at 20,200 km altitude) run ~45.8 μs/day faster due to weaker gravity, but 7.2 μs/day slower due to velocity time dilation. Net: +38.6 μs/day. Without correction, GPS accuracy would degrade by ~10 km daily." },
      { question: "Is this really proven?", answer: "Yes, extensively. Pound-Rebka experiment (1959) measured gravitational redshift in a 22.5m tower. Modern atomic clocks detect time dilation from just 33 cm height difference (2010, NIST)." }
    ],
    seoMeta: { title: "Gravitational Time Dilation Calculator", description: "Calculate time dilation from gravity.", keywords: "gravitational time dilation, general relativity, GPS, clock, gravity" }
  },
  {
    id: "length-contraction-calculator", name: "Length Contraction Calculator",
    description: "Calculate the contracted length of an object moving at relativistic speed.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "L = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}",
    inputs: [
      { id: "L0", label: "Rest Length (m)", type: "number", defaultValue: 100 },
      { id: "v_c", label: "Speed (fraction of c)", type: "number", defaultValue: 0.8 }
    ],
    outputs: [
      { id: "L_contracted", label: "Contracted Length", formula: "L0 * sqrt(1 - v_c^2)", unit: "m" },
      { id: "contraction_pct", label: "Contraction", formula: "(1 - sqrt(1 - v_c^2)) * 100", unit: "%" }
    ],
    theory: "Length contraction is the phenomenon where an object's length along the direction of motion appears shorter to a stationary observer. At 0.8c, a 100m spacecraft would measure only 60m. At 0.99c, it contracts to 14.1m. Length contraction is reciprocal — each observer sees the other's objects as contracted.",
    faq: [
      { question: "Is length contraction real or apparent?", answer: "It is a real physical effect in the sense that measurements consistently give contracted lengths. However, it is frame-dependent — each observer measures different lengths. It is not an optical illusion; it reflects the nature of spacetime." },
      { question: "Does only the length along motion contract?", answer: "Yes. Dimensions perpendicular to the velocity are unaffected. A sphere moving relativistically appears as an oblate ellipsoid (contracted along the direction of motion but unchanged perpendicular to it)." },
      { question: "At what speed is contraction noticeable?", answer: "At 0.1c: 0.5% contraction (barely noticeable). At 0.5c: 13.4%. At 0.9c: 56.4%. At 0.99c: 85.9%. At 0.999c: 95.5%. The effect is negligible at everyday speeds." }
    ],
    seoMeta: { title: "Length Contraction Calculator", description: "Calculate relativistic length contraction.", keywords: "length contraction, Lorentz contraction, special relativity, relativistic" }
  },
  {
    id: "relativistic-kinetic-energy-calculator", name: "Relativistic Kinetic Energy Calculator",
    description: "Calculate kinetic energy using the relativistic formula.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "KE = (\\gamma - 1) m c^2",
    inputs: [
      { id: "m_kg", label: "Rest Mass (kg)", type: "number", defaultValue: 1 },
      { id: "v_c", label: "Speed (fraction of c)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "gamma", label: "Lorentz Factor γ", formula: "1 / sqrt(1 - v_c^2)", unit: "" },
      { id: "KE_rel", label: "Relativistic KE", formula: "(1 / sqrt(1 - v_c^2) - 1) * m_kg * (2.998e8)^2", unit: "J" },
      { id: "KE_classical", label: "Classical KE (comparison)", formula: "0.5 * m_kg * (v_c * 2.998e8)^2", unit: "J" }
    ],
    theory: "At relativistic speeds, the classical ½mv² underestimates kinetic energy. The correct formula is KE = (γ-1)mc², where γ = 1/√(1-v²/c²). As v → c, γ → ∞ and KE → ∞, which is why no massive object can reach light speed — it would require infinite energy.",
    faq: [
      { question: "When does the classical formula break down?", answer: "Above ~10% of c, the classical formula underestimates by more than 0.75%. At 0.5c, classical gives 11.2% of mc² while relativistic gives 15.5% — a 38% error. At 0.9c, the error is 3.4×." },
      { question: "Why can't anything reach light speed?", answer: "As v → c, γ → ∞, so KE → ∞. Accelerating requires ever-increasing energy. Particle accelerators like the LHC push protons to 0.999999991c, requiring 6.5 TeV of energy — 7,000× the proton's rest energy." },
      { question: "How does this apply to particle physics?", answer: "At the LHC, proton kinetic energy is ~7,000× rest mass energy. A 7 TeV proton has γ ≈ 7,461. The proton 'weighs' as much as a rhenium atom due to its enormous kinetic energy." }
    ],
    seoMeta: { title: "Relativistic Kinetic Energy Calculator", description: "Calculate kinetic energy at relativistic speeds.", keywords: "relativistic kinetic energy, Lorentz factor, gamma, speed of light" }
  },
  {
    id: "space-travel-calculator", name: "Space Travel Calculator",
    description: "Calculate travel time and time dilation for relativistic space travel.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "t_{\\text{traveler}} = \\frac{t_{\\text{Earth}}}{\\gamma}",
    inputs: [
      { id: "d_ly", label: "Distance (light-years)", type: "number", defaultValue: 10 },
      { id: "v_c", label: "Cruise Speed (fraction of c)", type: "number", defaultValue: 0.9 }
    ],
    outputs: [
      { id: "t_earth", label: "Earth Time", formula: "d_ly / v_c", unit: "years" },
      { id: "t_ship", label: "Ship Time (traveler ages)", formula: "d_ly / v_c * sqrt(1 - v_c^2)", unit: "years" },
      { id: "time_saved", label: "Time Saved by Dilation", formula: "d_ly / v_c - d_ly / v_c * sqrt(1 - v_c^2)", unit: "years" }
    ],
    theory: "At relativistic speeds, time dilation means the traveler ages less than people on Earth. At 0.9c, a 10 light-year trip takes 11.1 years Earth time but only 4.8 years ship time. At 0.99c: 10.1 Earth years but only 1.4 ship years. This is the basis of the twin paradox.",
    faq: [
      { question: "What is the twin paradox?", answer: "A twin traveling at relativistic speed ages less than the stay-at-home twin. This is not a paradox — the traveling twin accelerates and decelerates, breaking the symmetry. The effect is real and confirmed by experiments with atomic clocks on aircraft." },
      { question: "Could we travel to other stars?", answer: "At 0.99c, a trip to Proxima Centauri (4.24 ly) takes 4.28 years Earth time and only 0.60 years ship time. The problem is the enormous energy required for acceleration and the dangers of interstellar dust at such speeds." },
      { question: "What about acceleration?", answer: "Constant 1g acceleration provides comfortable artificial gravity. Accelerating at 1g for half the trip and decelerating for the other half: Earth time ≈ (d/c)×√(1+(d/2c)²), always longer than d/c but with the traveler aging much less." }
    ],
    seoMeta: { title: "Space Travel Calculator — Relativistic", description: "Calculate relativistic travel time with time dilation.", keywords: "space travel, time dilation, twin paradox, relativistic travel" }
  },
  {
    id: "time-dilation-calculator", name: "Time Dilation Calculator",
    description: "Calculate time dilation from special relativity.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "\\Delta t' = \\frac{\\Delta t}{\\sqrt{1 - v^2/c^2}} = \\gamma \\Delta t",
    inputs: [
      { id: "dt", label: "Proper Time (s)", type: "number", defaultValue: 1 },
      { id: "v_c", label: "Speed (fraction of c)", type: "number", defaultValue: 0.8 }
    ],
    outputs: [
      { id: "dt_dilated", label: "Dilated Time (observer)", formula: "dt / sqrt(1 - v_c^2)", unit: "s" },
      { id: "gamma", label: "Lorentz Factor γ", formula: "1 / sqrt(1 - v_c^2)", unit: "" }
    ],
    theory: "Special relativistic time dilation: a moving clock runs slower relative to a stationary observer. If 1 second passes on the moving clock (proper time), γ seconds pass for the observer. At 0.8c, γ = 5/3, so 1 second of proper time corresponds to 1.67 seconds for the observer. This effect is confirmed by muon decay observations and GPS corrections.",
    faq: [
      { question: "Is time dilation symmetrical?", answer: "Yes, in special relativity. Each observer sees the other's clock running slow. This apparent paradox is resolved by noting that comparing clocks requires bringing them together, which involves acceleration and breaks the symmetry." },
      { question: "Has time dilation been proven?", answer: "Many times. Hafele-Keating (1971): atomic clocks flown on jets showed predicted time differences. Muon experiments: relativistic muons live ~10× longer than at rest. GPS satellites: clocks adjusted daily for SR time dilation." },
      { question: "How fast must you go for 1% dilation?", answer: "γ = 1.01 requires v ≈ 0.14c ≈ 42,000 km/s. An airplane at 900 km/h has γ ≈ 1 + 3.7×10⁻¹³ — time dilation of about 12 μs per year." }
    ],
    seoMeta: { title: "Time Dilation Calculator", description: "Calculate relativistic time dilation.", keywords: "time dilation, special relativity, Lorentz factor, gamma, twin paradox" }
  },
  {
    id: "velocity-addition-calculator", name: "Velocity Addition Calculator",
    description: "Calculate the relativistic sum of two velocities.",
    category: "physics", subcategory: "relativity",
    scientificFormula: "u = \\frac{v + w}{1 + \\frac{vw}{c^2}}",
    inputs: [
      { id: "v_c", label: "Velocity 1 (fraction of c)", type: "number", defaultValue: 0.6 },
      { id: "w_c", label: "Velocity 2 (fraction of c)", type: "number", defaultValue: 0.7 }
    ],
    outputs: [
      { id: "u_rel", label: "Relativistic Sum", formula: "(v_c + w_c) / (1 + v_c * w_c)", unit: "c" },
      { id: "u_classical", label: "Classical Sum (comparison)", formula: "v_c + w_c", unit: "c" }
    ],
    theory: "In special relativity, velocities don't add linearly. The relativistic velocity addition formula ensures that no combination of sub-light velocities can exceed c. If v = 0.6c and w = 0.7c, the classical sum is 1.3c (impossible!), but the relativistic sum is 0.915c — always less than c.",
    faq: [
      { question: "What if both velocities are c?", answer: "u = (c + c)/(1 + c²/c²) = 2c/2 = c. Light speed plus light speed still equals light speed. This is consistent with the second postulate of special relativity: the speed of light is the same in all frames." },
      { question: "When does classical addition work?", answer: "When both velocities are much less than c (v, w << c), the denominator ≈ 1 and u ≈ v + w. At everyday speeds, the relativistic correction is immeasurably small." },
      { question: "Does this apply to all velocities?", answer: "This formula applies to collinear (same-direction) velocities. For non-collinear velocities, the full Lorentz transformation must be used, which also introduces relativistic aberration and Thomas precession." }
    ],
    seoMeta: { title: "Velocity Addition Calculator — Relativistic", description: "Calculate relativistic velocity addition.", keywords: "velocity addition, relativistic, special relativity, speed of light" }
  }
];
