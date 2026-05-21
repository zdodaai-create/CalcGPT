import { CalculatorConfig } from "./calculator-types";

export const ELECTROMAGNETISM_CALCULATORS: CalculatorConfig[] = [
  {
    id: "acceleration-in-electric-field-calculator", name: "Acceleration in the Electric Field Calculator",
    description: "Calculate the acceleration of a charged particle in a uniform electric field.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "a = \\frac{qE}{m}",
    inputs: [
      { id: "q", label: "Charge (C)", type: "number", defaultValue: 1.602e-19, helpText: "Electron: 1.602e-19 C" },
      { id: "E_field", label: "Electric Field (V/m)", type: "number", defaultValue: 1000 },
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 9.109e-31, helpText: "Electron: 9.109e-31 kg" }
    ],
    outputs: [{ id: "a_val", label: "Acceleration", formula: "q * E_field / m", unit: "m/s²" }],
    theory: "A charged particle in a uniform electric field experiences a constant force F = qE, producing constant acceleration a = qE/m. Electrons, being extremely light, achieve enormous accelerations — an electron in a 1000 V/m field accelerates at ~1.76 × 10¹⁴ m/s².",
    faq: [
      { question: "Why do electrons accelerate so much faster than protons?", answer: "Electrons are ~1836× lighter than protons but carry the same magnitude of charge. Since a = F/m = qE/m, the same field produces 1836× greater acceleration for electrons." },
      { question: "Where is this used?", answer: "Cathode ray tubes, electron guns in microscopes, mass spectrometers, particle accelerators, and ion thrusters for spacecraft propulsion." },
      { question: "What about relativistic speeds?", answer: "At high velocities, relativistic mass increase reduces acceleration. The formula becomes a = qE/(γ³m) for motion parallel to E, where γ is the Lorentz factor." }
    ],
    seoMeta: { title: "Electric Field Acceleration Calculator", description: "Calculate particle acceleration in an electric field.", keywords: "electric field, acceleration, charged particle, electron" }
  },
  {
    id: "ac-wattage-calculator", name: "AC Wattage Calculator",
    description: "Calculate real power in an AC circuit from voltage, current, and power factor.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "P = V_{rms} \\cdot I_{rms} \\cdot \\cos\\phi",
    inputs: [
      { id: "V_rms", label: "RMS Voltage (V)", type: "number", defaultValue: 120 },
      { id: "I_rms", label: "RMS Current (A)", type: "number", defaultValue: 10 },
      { id: "pf", label: "Power Factor (cos φ)", type: "number", defaultValue: 0.85 }
    ],
    outputs: [
      { id: "P_real", label: "Real Power", formula: "V_rms * I_rms * pf", unit: "W" },
      { id: "S_apparent", label: "Apparent Power", formula: "V_rms * I_rms", unit: "VA" },
      { id: "Q_reactive", label: "Reactive Power", formula: "V_rms * I_rms * sqrt(1 - pf^2)", unit: "VAR" }
    ],
    theory: "In AC circuits, real power (watts) is the product of voltage, current, and power factor. The power factor accounts for the phase difference between voltage and current caused by reactive loads (inductors and capacitors). Only real power does useful work; reactive power oscillates back and forth.",
    faq: [
      { question: "What is power factor?", answer: "Power factor (cos φ) is the ratio of real power to apparent power. PF = 1.0 for purely resistive loads. PF < 1 for inductive loads (motors, transformers). Low PF means the utility must supply more current for the same useful power." },
      { question: "Why do utilities penalize low power factor?", answer: "Low PF means higher current for the same real power, causing more I²R losses in transmission lines, larger cable requirements, and reduced transformer capacity. Industrial customers are often charged penalties for PF below 0.9." },
      { question: "How is power factor corrected?", answer: "By adding capacitor banks (for inductive loads) or inductors (for capacitive loads) to reduce the phase angle. Synchronous motors can also be over-excited to provide leading PF correction." }
    ],
    seoMeta: { title: "AC Wattage Calculator", description: "Calculate real, apparent, and reactive AC power.", keywords: "AC power, wattage, power factor, reactive power, apparent power" }
  },
  {
    id: "capacitance-calculator", name: "Capacitance Calculator",
    description: "Calculate the capacitance of a parallel-plate capacitor.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "C = \\frac{\\varepsilon_0 \\varepsilon_r A}{d}",
    inputs: [
      { id: "er", label: "Relative Permittivity εr", type: "number", defaultValue: 1, helpText: "Vacuum: 1, Paper: 3.7, Glass: 5–10" },
      { id: "A_m2", label: "Plate Area (m²)", type: "number", defaultValue: 0.01 },
      { id: "d_m", label: "Plate Separation (m)", type: "number", defaultValue: 0.001 }
    ],
    outputs: [
      { id: "C_val", label: "Capacitance", formula: "8.854e-12 * er * A_m2 / d_m", unit: "F" },
      { id: "C_nF", label: "Capacitance", formula: "8.854e-12 * er * A_m2 / d_m * 1e9", unit: "nF" }
    ],
    theory: "A parallel-plate capacitor stores charge on two parallel conducting plates separated by a dielectric. Capacitance increases with plate area and dielectric constant, and decreases with separation. The dielectric material increases capacitance by a factor of εr by partially canceling the electric field between the plates.",
    faq: [
      { question: "What is a dielectric?", answer: "An insulating material placed between capacitor plates. It increases capacitance by reducing the effective electric field. Common dielectrics: air (εr=1), paper (3.7), mica (5.4), ceramic (10–12000)." },
      { question: "Why can't we make infinitely large capacitors?", answer: "Practical limits: large plates are bulky, thin dielectrics break down at high voltage (dielectric breakdown), and parasitic effects limit performance. Supercapacitors use porous electrodes with enormous effective surface area." },
      { question: "What is a Farad?", answer: "1 Farad stores 1 Coulomb per Volt. It's a huge unit — most capacitors are measured in microfarads (μF), nanofarads (nF), or picofarads (pF). Supercapacitors can reach thousands of Farads." }
    ],
    seoMeta: { title: "Capacitance Calculator", description: "Calculate parallel-plate capacitor capacitance.", keywords: "capacitance, parallel plate, dielectric, permittivity" }
  },
  {
    id: "capacitive-reactance-calculator", name: "Capacitive Reactance Calculator",
    description: "Calculate the reactance of a capacitor at a given frequency.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "X_C = \\frac{1}{2\\pi f C}",
    inputs: [
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 1000 },
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 1e-6 }
    ],
    outputs: [{ id: "Xc", label: "Capacitive Reactance", formula: "1 / (2 * pi * f * C_F)", unit: "Ω" }],
    theory: "Capacitive reactance is the opposition a capacitor presents to AC current. It decreases with frequency — capacitors pass high frequencies more easily than low frequencies. At DC (f = 0), reactance is infinite (open circuit). This frequency-dependent behavior is the basis of all capacitive filters.",
    faq: [
      { question: "Why does reactance decrease with frequency?", answer: "At higher frequencies, the capacitor charges and discharges more rapidly, allowing more current to flow. The capacitor appears as a lower impedance path for higher frequency signals." },
      { question: "What's the difference between reactance and resistance?", answer: "Resistance dissipates energy as heat. Reactance stores and releases energy without dissipation. Capacitive reactance causes current to lead voltage by 90°." },
      { question: "How is this used in filters?", answer: "High-pass filters: capacitor in series blocks low frequencies (high Xc). Low-pass filters: capacitor to ground passes high frequencies (low Xc). Crossover networks in speakers use this principle." }
    ],
    seoMeta: { title: "Capacitive Reactance Calculator", description: "Calculate capacitive reactance at a given frequency.", keywords: "capacitive reactance, impedance, frequency, capacitor, AC circuit" }
  },
  {
    id: "conductivity-to-resistivity-calculator", name: "Conductivity to Resistivity Calculator",
    description: "Convert between electrical conductivity and resistivity.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\rho = \\frac{1}{\\sigma}",
    inputs: [{ id: "sigma", label: "Conductivity (S/m)", type: "number", defaultValue: 5.96e7, helpText: "Copper: 5.96e7 S/m" }],
    outputs: [
      { id: "rho_res", label: "Resistivity", formula: "1 / sigma", unit: "Ω·m" },
      { id: "rho_uohm_cm", label: "Resistivity", formula: "1 / sigma * 1e8", unit: "μΩ·cm" }
    ],
    theory: "Conductivity (σ) and resistivity (ρ) are reciprocals: ρ = 1/σ. Conductivity measures how easily current flows; resistivity measures how much a material opposes current. Metals have high conductivity; insulators have low conductivity.",
    faq: [
      { question: "What are the most conductive materials?", answer: "Silver: 6.3×10⁷ S/m. Copper: 5.96×10⁷. Gold: 4.1×10⁷. Aluminum: 3.77×10⁷. Copper is preferred for wiring due to its excellent conductivity and lower cost than silver." },
      { question: "What affects conductivity?", answer: "Temperature (increases resistivity in metals), impurities (increase resistivity), crystal structure, and in semiconductors, doping concentration." },
      { question: "What is %IACS?", answer: "Percentage of International Annealed Copper Standard. Pure copper = 100% IACS. Silver = 105% IACS. Aluminum = 61% IACS. It's a convenient way to compare conductivities." }
    ],
    seoMeta: { title: "Conductivity to Resistivity Converter", description: "Convert between conductivity and resistivity.", keywords: "conductivity, resistivity, electrical, conversion, Siemens" }
  },
  {
    id: "coulombs-law-calculator", name: "Coulomb's Law Calculator",
    description: "Calculate the electrostatic force between two point charges.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "F = k_e \\frac{|q_1 q_2|}{r^2}",
    inputs: [
      { id: "q1", label: "Charge 1 (C)", type: "number", defaultValue: 1e-6 },
      { id: "q2", label: "Charge 2 (C)", type: "number", defaultValue: 1e-6 },
      { id: "r", label: "Distance (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [{ id: "F_coulomb", label: "Electrostatic Force", formula: "8.9876e9 * abs(q1) * abs(q2) / r^2", unit: "N" }],
    theory: "Coulomb's Law describes the electrostatic force between two point charges. The force is proportional to the product of the charges and inversely proportional to the square of the distance — identical in form to Newton's gravitational law but typically much stronger.",
    faq: [
      { question: "How does electrostatic force compare to gravity?", answer: "Electrostatic force between two electrons is ~4.2 × 10⁴² times stronger than gravitational force between them. Electricity dominates at atomic scales; gravity dominates at cosmic scales because matter is mostly electrically neutral." },
      { question: "What is the Coulomb constant?", answer: "ke = 8.9876 × 10⁹ N·m²/C² = 1/(4πε₀). It determines the strength of electromagnetic interaction. It's enormous compared to G, which is why electromagnetic forces are so much stronger." },
      { question: "What about charges in a medium?", answer: "In a dielectric medium, the force is reduced by the dielectric constant: F = keq₁q₂/(εr·r²). Water (εr = 80) reduces the force 80-fold, which is why salts dissolve in water." }
    ],
    seoMeta: { title: "Coulomb's Law Calculator", description: "Calculate electrostatic force between charges.", keywords: "Coulomb's law, electrostatic force, charge, electric force" }
  },
  {
    id: "cutoff-frequency-calculator", name: "Cutoff Frequency Calculator",
    description: "Calculate the cutoff frequency of an RC filter.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "f_c = \\frac{1}{2\\pi RC}",
    inputs: [
      { id: "R", label: "Resistance (Ω)", type: "number", defaultValue: 10000 },
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 1e-8 }
    ],
    outputs: [{ id: "fc", label: "Cutoff Frequency", formula: "1 / (2 * pi * R * C_F)", unit: "Hz" }],
    theory: "The cutoff frequency (or -3dB frequency) is where the filter output power drops to half the input power. Below fc, a low-pass RC filter passes signals; above fc, it attenuates them at 20 dB/decade. For a high-pass filter, the behavior is reversed.",
    faq: [
      { question: "What is -3dB?", answer: "At the cutoff frequency, voltage is 1/√2 ≈ 0.707 of input. Power is 0.5 of input. In decibels: 10·log₁₀(0.5) ≈ -3 dB. This is the standard definition for filter bandwidth." },
      { question: "How steep is the rolloff?", answer: "A single RC filter rolls off at 20 dB/decade (6 dB/octave). Two cascaded stages: 40 dB/decade. Active filters can achieve much steeper rolloffs with Butterworth, Chebyshev, or Bessel responses." },
      { question: "What is the time constant?", answer: "τ = RC is the time constant. The cutoff frequency fc = 1/(2πτ). For a step input, the output reaches 63.2% of final value in one time constant." }
    ],
    seoMeta: { title: "Cutoff Frequency Calculator", description: "Calculate RC filter cutoff frequency.", keywords: "cutoff frequency, RC filter, low-pass, high-pass, bandwidth" }
  },
  {
    id: "cyclotron-frequency-calculator", name: "Cyclotron Frequency Calculator",
    description: "Calculate the cyclotron frequency of a charged particle in a magnetic field.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "f_c = \\frac{qB}{2\\pi m}",
    inputs: [
      { id: "q", label: "Charge (C)", type: "number", defaultValue: 1.602e-19 },
      { id: "B", label: "Magnetic Field (T)", type: "number", defaultValue: 1 },
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1.673e-27, helpText: "Proton: 1.673e-27 kg" }
    ],
    outputs: [
      { id: "fc", label: "Cyclotron Frequency", formula: "q * B / (2 * pi * m)", unit: "Hz" },
      { id: "omega_c", label: "Angular Frequency", formula: "q * B / m", unit: "rad/s" }
    ],
    theory: "A charged particle moving perpendicular to a magnetic field follows a circular path. The cyclotron frequency depends only on charge-to-mass ratio and field strength — remarkably independent of velocity. This is the operating principle of cyclotron particle accelerators.",
    faq: [
      { question: "Why is cyclotron frequency independent of velocity?", answer: "Faster particles orbit in larger circles, taking the same time per orbit. The magnetic force (qvB) increases with v, but so does the circumference. These effects exactly cancel, keeping the period constant (non-relativistically)." },
      { question: "What is a cyclotron?", answer: "A particle accelerator that spirals charged particles outward in a magnetic field. The particles are accelerated by an oscillating electric field tuned to the cyclotron frequency. Modern cyclotrons produce beams for medical isotope production and cancer therapy." },
      { question: "What about relativistic particles?", answer: "At relativistic speeds, mass increases by γ, lowering the frequency. Synchrocyclotrons adjust the frequency as particles accelerate; synchrotrons adjust the magnetic field instead." }
    ],
    seoMeta: { title: "Cyclotron Frequency Calculator", description: "Calculate cyclotron frequency in a magnetic field.", keywords: "cyclotron frequency, magnetic field, charged particle, cyclotron" }
  },
  {
    id: "dipole-moment-calculator", name: "Dipole Moment Calculator",
    description: "Calculate the electric dipole moment from charge and separation distance.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "p = q \\cdot d",
    inputs: [
      { id: "q", label: "Charge Magnitude (C)", type: "number", defaultValue: 1.602e-19 },
      { id: "d_sep", label: "Separation Distance (m)", type: "number", defaultValue: 1e-10 }
    ],
    outputs: [
      { id: "p_val", label: "Dipole Moment", formula: "q * d_sep", unit: "C·m" },
      { id: "p_debye", label: "Dipole Moment", formula: "q * d_sep / 3.336e-30", unit: "Debye" }
    ],
    theory: "An electric dipole consists of two equal and opposite charges separated by a distance d. The dipole moment p = qd points from negative to positive charge. It determines the torque on the dipole in an external field and the field produced by the dipole at large distances.",
    faq: [
      { question: "What is a Debye?", answer: "1 Debye = 3.336 × 10⁻³⁰ C·m. It's the standard unit for molecular dipole moments. Water has p ≈ 1.85 D. HCl ≈ 1.08 D. CO₂ = 0 D (symmetric)." },
      { question: "Why do molecules have dipole moments?", answer: "Unequal sharing of electrons in bonds creates partial charges. Polar molecules (water, HCl) have net dipole moments. Symmetric molecules (CO₂, CH₄) can have polar bonds but zero net dipole moment." },
      { question: "How does a dipole interact with a field?", answer: "Torque τ = p × E tends to align the dipole with the field. Energy U = -p·E is minimized when aligned. This is the basis of dielectric behavior, microwave heating, and NMR." }
    ],
    seoMeta: { title: "Dipole Moment Calculator", description: "Calculate electric dipole moment.", keywords: "dipole moment, charge separation, Debye, polar molecule" }
  },
  {
    id: "drift-velocity-calculator", name: "Drift Velocity Calculator",
    description: "Calculate the drift velocity of electrons in a conductor.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "v_d = \\frac{I}{nAe}",
    inputs: [
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 1 },
      { id: "n_density", label: "Carrier Density (m⁻³)", type: "number", defaultValue: 8.5e28, helpText: "Copper: 8.5e28 m⁻³" },
      { id: "A_m2", label: "Wire Cross-section (m²)", type: "number", defaultValue: 1e-6 },
      { id: "e_charge", label: "Carrier Charge (C)", type: "number", defaultValue: 1.602e-19 }
    ],
    outputs: [{ id: "vd", label: "Drift Velocity", formula: "I_amps / (n_density * A_m2 * e_charge)", unit: "m/s" }],
    theory: "Drift velocity is the average velocity of charge carriers moving through a conductor under an electric field. Despite the enormous number density of free electrons in metals, drift velocity is surprisingly slow — typically ~0.1 mm/s for copper carrying 1A. The electrical signal, however, propagates at near light speed.",
    faq: [
      { question: "Why is drift velocity so slow?", answer: "Electrons constantly collide with the lattice, making their net drift tiny despite high thermal velocities (~10⁶ m/s). A 1A current in 1mm² copper has vd ≈ 0.074 mm/s. It would take ~4 hours for an electron to travel 1 meter!" },
      { question: "If electrons are slow, why do lights turn on instantly?", answer: "The electric field propagates at near light speed through the wire, causing ALL free electrons to start drifting simultaneously. Think of it like a pipe full of water — push one end and water flows immediately from the other end." },
      { question: "How many free electrons are in copper?", answer: "About 8.5 × 10²⁸ per m³ — roughly one free electron per atom. In a 1mm diameter wire, there are ~6.7 × 10²² free electrons per meter of wire." }
    ],
    seoMeta: { title: "Drift Velocity Calculator", description: "Calculate electron drift velocity in conductors.", keywords: "drift velocity, electron, current, carrier density, conductor" }
  },
  {
    id: "electrical-power-calculator", name: "Electrical Power Calculator",
    description: "Calculate electrical power from voltage and current (or resistance).",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "P = VI = I^2R = \\frac{V^2}{R}",
    inputs: [
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 12 },
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "P_watts", label: "Power", formula: "V * I_amps", unit: "W" },
      { id: "R_calc", label: "Resistance", formula: "V / I_amps", unit: "Ω" }
    ],
    theory: "Electrical power is the rate of energy transfer in a circuit. P = VI is the fundamental formula; P = I²R and P = V²/R are derived using Ohm's Law. One watt = one joule per second = one volt-ampere.",
    faq: [
      { question: "What consumes the most power in a home?", answer: "Air conditioning: 3000–5000W. Electric oven: 2000–5000W. Water heater: 3000–4500W. Hair dryer: 1000–1800W. LED bulb: 8–15W. Phone charger: 5–20W." },
      { question: "What is a kilowatt-hour?", answer: "1 kWh = 1000W × 1 hour = 3.6 MJ. It's the standard billing unit for electricity. A 100W bulb running 10 hours uses 1 kWh. US average electricity cost: ~$0.15/kWh." },
      { question: "Why does P = I²R cause transmission losses?", answer: "Power lost in transmission lines = I²R. To reduce losses, increase voltage (reduces current for same power). This is why power is transmitted at 110–765 kV — high voltage, low current means low I²R losses." }
    ],
    seoMeta: { title: "Electrical Power Calculator", description: "Calculate electrical power from voltage and current.", keywords: "electrical power, watts, voltage, current, Ohm's law" }
  },
  {
    id: "electric-field-calculator", name: "Electric Field Calculator",
    description: "Calculate the electric field from a point charge at a given distance.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "E = k_e \\frac{q}{r^2}",
    inputs: [
      { id: "q", label: "Charge (C)", type: "number", defaultValue: 1e-6 },
      { id: "r", label: "Distance (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [{ id: "E_field", label: "Electric Field", formula: "8.9876e9 * abs(q) / r^2", unit: "V/m" }],
    theory: "The electric field describes the force per unit charge at any point in space. For a point charge, the field radiates outward (positive charge) or inward (negative charge) and falls off with the inverse square of distance. The field concept allows us to separate the source from the test charge.",
    faq: [
      { question: "What are typical electric field strengths?", answer: "Atmospheric fair weather: ~100 V/m. Near power lines: ~1000 V/m. Inside atoms: ~10¹¹ V/m. Dielectric breakdown of air: ~3 × 10⁶ V/m." },
      { question: "What is dielectric breakdown?", answer: "When the electric field exceeds ~3 MV/m in air, air molecules ionize and become conducting. This is what causes lightning (~1 billion V potential, ~3×10⁶ V/m field) and sparks." },
      { question: "Can electric fields do work?", answer: "Yes. The work done moving a charge q through potential difference V is W = qV. This is how capacitors store energy and how electric motors convert electrical to mechanical energy." }
    ],
    seoMeta: { title: "Electric Field Calculator", description: "Calculate electric field from a point charge.", keywords: "electric field, point charge, Coulomb, field strength" }
  },
  {
    id: "electric-motor-torque-calculator", name: "Electric Motor Torque Calculator",
    description: "Calculate motor torque from power and rotational speed.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\tau = \\frac{P}{\\omega} = \\frac{P \\cdot 60}{2\\pi N}",
    inputs: [
      { id: "P_watts", label: "Power (W)", type: "number", defaultValue: 750, helpText: "1 HP ≈ 746 W" },
      { id: "N_rpm", label: "Speed (RPM)", type: "number", defaultValue: 1750 }
    ],
    outputs: [
      { id: "tau", label: "Torque", formula: "P_watts * 60 / (2 * pi * N_rpm)", unit: "N·m" },
      { id: "tau_lbft", label: "Torque", formula: "P_watts * 60 / (2 * pi * N_rpm) * 0.7376", unit: "lb·ft" }
    ],
    theory: "Motor torque is the rotational force the shaft produces. Power = torque × angular velocity, so torque = P/ω. At constant power, torque is inversely proportional to speed — low-speed operation provides high torque (this is why gearboxes are used).",
    faq: [
      { question: "What determines motor speed?", answer: "For AC induction motors: synchronous speed = 120f/poles. A 4-pole motor on 60Hz runs near 1800 RPM. Actual speed is slightly lower due to slip (1–5%)." },
      { question: "What is motor efficiency?", answer: "The ratio of mechanical output power to electrical input power. Small motors: 60–80%. Premium large motors: 95–97%. Losses include copper (I²R), iron (hysteresis), mechanical (friction), and stray losses." },
      { question: "AC vs DC motors?", answer: "AC induction: simple, reliable, low maintenance. DC motors: precise speed control, high starting torque. Brushless DC (BLDC): combines DC precision with AC reliability — used in EVs and drones." }
    ],
    seoMeta: { title: "Electric Motor Torque Calculator", description: "Calculate motor torque from power and speed.", keywords: "motor torque, electric motor, power, RPM, mechanical" }
  },
  {
    id: "electric-potential-calculator", name: "Electric Potential Calculator",
    description: "Calculate the electric potential from a point charge.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "V = k_e \\frac{q}{r}",
    inputs: [
      { id: "q", label: "Charge (C)", type: "number", defaultValue: 1e-6 },
      { id: "r", label: "Distance (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [{ id: "V_pot", label: "Electric Potential", formula: "8.9876e9 * q / r", unit: "V" }],
    theory: "Electric potential (voltage) at a point is the work done per unit charge bringing a test charge from infinity to that point. Unlike the electric field (a vector), potential is a scalar — potentials from multiple charges simply add algebraically.",
    faq: [
      { question: "What is the difference between potential and field?", answer: "Field (E) is force per charge (vector). Potential (V) is energy per charge (scalar). E = -dV/dr — the field points from high to low potential, like a ball rolling downhill." },
      { question: "What is voltage?", answer: "Voltage is the potential difference between two points. A 9V battery maintains 9 volts between its terminals. Current flows from high to low potential through external circuits." },
      { question: "Why is potential useful?", answer: "Being a scalar, potential is much easier to calculate than the vector field for complex charge distributions. The field can then be derived from the potential: E = -∇V." }
    ],
    seoMeta: { title: "Electric Potential Calculator", description: "Calculate electric potential from point charge.", keywords: "electric potential, voltage, point charge, Coulomb" }
  },
  {
    id: "energy-density-of-fields-calculator", name: "Energy Density of Fields Calculator",
    description: "Calculate the energy density stored in electric and magnetic fields.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "u = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2",
    inputs: [
      { id: "E_field", label: "Electric Field (V/m)", type: "number", defaultValue: 1000 },
      { id: "B_field", label: "Magnetic Field (T)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "u_E", label: "Electric Energy Density", formula: "0.5 * 8.854e-12 * E_field^2", unit: "J/m³" },
      { id: "u_B", label: "Magnetic Energy Density", formula: "0.5 * B_field^2 / (4 * pi * 1e-7)", unit: "J/m³" },
      { id: "u_total", label: "Total Energy Density", formula: "0.5 * 8.854e-12 * E_field^2 + 0.5 * B_field^2 / (4 * pi * 1e-7)", unit: "J/m³" }
    ],
    theory: "Electromagnetic fields store energy. Electric energy density is ½ε₀E², magnetic energy density is B²/(2μ₀). In electromagnetic waves, both are equal and oscillate together. The total energy density drives phenomena from capacitor energy storage to radiation pressure.",
    faq: [
      { question: "Which stores more energy, E or B?", answer: "Depends on the situation. In an EM wave, they're equal. In a capacitor, electric energy dominates. In an inductor, magnetic energy dominates. In a neutron star magnetosphere, magnetic energy density can reach 10²⁵ J/m³." },
      { question: "What is the energy density of sunlight?", answer: "Solar intensity at Earth (~1361 W/m²) corresponds to ~4.5 μJ/m³. The Sun's core has energy density ~10¹³ J/m³, mostly in photon radiation." },
      { question: "How does this relate to capacitors and inductors?", answer: "Capacitor energy = ½CV² comes from integrating electric energy density. Inductor energy = ½LI² comes from integrating magnetic energy density. Both store energy in their respective fields." }
    ],
    seoMeta: { title: "Energy Density Calculator — EM Fields", description: "Calculate energy stored in electric and magnetic fields.", keywords: "energy density, electric field, magnetic field, electromagnetic" }
  },
  {
    id: "excess-electrons-calculator", name: "Excess Electrons Calculator",
    description: "Calculate the number of excess electrons from total charge.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "n = \\frac{Q}{e}",
    inputs: [{ id: "Q", label: "Total Charge (C)", type: "number", defaultValue: 1e-12 }],
    outputs: [{ id: "n_elec", label: "Number of Excess Electrons", formula: "abs(Q) / 1.602e-19", unit: "" }],
    theory: "Electric charge is quantized — it comes in integer multiples of the elementary charge e = 1.602 × 10⁻¹⁹ C. The number of excess (or deficit) electrons on an object equals the total charge divided by e. A 1 μC charge represents about 6.24 × 10¹² excess electrons.",
    faq: [
      { question: "How many electrons is 1 Coulomb?", answer: "1 C / 1.602×10⁻¹⁹ C = 6.242 × 10¹⁸ electrons. One ampere = one coulomb per second, so 6.242 quintillion electrons pass through each second." },
      { question: "Can you have a fractional electron charge?", answer: "Quarks carry ±1/3e and ±2/3e charges, but they're confined inside protons and neutrons. Free particles always carry integer multiples of e. Robert Millikan first measured e in 1909 with his oil-drop experiment." },
      { question: "How are objects charged?", answer: "By transfer of electrons: friction (rubbing), conduction (contact), and induction (nearby charge influence). Protons are fixed in nuclei and don't transfer between objects." }
    ],
    seoMeta: { title: "Excess Electrons Calculator", description: "Calculate number of excess electrons from charge.", keywords: "excess electrons, charge quantization, elementary charge, Coulomb" }
  },
  {
    id: "faradays-law-calculator", name: "Faraday's Law Calculator",
    description: "Calculate the induced EMF from changing magnetic flux.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\mathcal{E} = -N\\frac{\\Delta\\Phi}{\\Delta t}",
    inputs: [
      { id: "N_turns", label: "Number of Turns", type: "number", defaultValue: 100 },
      { id: "dPhi", label: "Change in Flux (Wb)", type: "number", defaultValue: 0.01 },
      { id: "dt_sec", label: "Time Interval (s)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [{ id: "emf", label: "Induced EMF", formula: "N_turns * abs(dPhi) / dt_sec", unit: "V" }],
    theory: "Faraday's Law: a changing magnetic flux through a coil induces an electromotive force (EMF). The EMF is proportional to the rate of flux change and the number of turns. This is the operating principle of all generators, transformers, and induction motors.",
    faq: [
      { question: "What is magnetic flux?", answer: "Φ = B·A·cos(θ) is the 'amount' of magnetic field passing through a surface. Units: Weber (Wb) = Tesla·m². Flux changes when B, A, or θ changes." },
      { question: "What is Lenz's Law?", answer: "The negative sign in Faraday's law: the induced current opposes the change that created it. This is energy conservation — the induced current creates a field opposing the changing flux, requiring work to maintain the change." },
      { question: "How do generators work?", answer: "Rotating a coil in a magnetic field changes the flux continuously, inducing AC voltage. The EMF varies sinusoidally: ε = NBAω·sin(ωt). This is how all conventional power plants generate electricity." }
    ],
    seoMeta: { title: "Faraday's Law Calculator", description: "Calculate induced EMF from changing magnetic flux.", keywords: "Faraday's law, induced EMF, magnetic flux, electromagnetic induction" }
  },
  {
    id: "free-space-path-loss-calculator", name: "Free Space Path Loss Calculator",
    description: "Calculate signal loss over distance in free space.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "FSPL = 20\\log_{10}(d) + 20\\log_{10}(f) + 32.44",
    inputs: [
      { id: "d_km", label: "Distance (km)", type: "number", defaultValue: 10 },
      { id: "f_MHz", label: "Frequency (MHz)", type: "number", defaultValue: 2400 }
    ],
    outputs: [{ id: "FSPL_dB", label: "Free Space Path Loss", formula: "20 * log10(d_km) + 20 * log10(f_MHz) + 32.44", unit: "dB" }],
    theory: "Free space path loss (FSPL) is the signal attenuation due to geometric spreading of an electromagnetic wave. It increases with distance (20log₁₀d) and frequency (20log₁₀f). This is fundamental to all wireless link budget calculations.",
    faq: [
      { question: "Why does higher frequency have more path loss?", answer: "Higher frequency waves have shorter wavelengths, so a given receiving antenna captures a smaller fraction of the expanding wavefront. The actual power spread is the same, but the effective capture area decreases with f²." },
      { question: "Is FSPL the only loss?", answer: "No. Real environments add atmospheric absorption, rain attenuation, multipath fading, shadowing (obstacles), and polarization mismatch. FSPL is the theoretical minimum loss in perfect conditions." },
      { question: "What is a link budget?", answer: "Link budget balances transmit power, antenna gains, path loss, and receiver sensitivity: P_rx = P_tx + G_tx + G_rx - FSPL - other losses. The received power must exceed the receiver sensitivity for reliable communication." }
    ],
    seoMeta: { title: "Free Space Path Loss Calculator", description: "Calculate signal loss in free space.", keywords: "FSPL, path loss, wireless, link budget, radio frequency" }
  },
  {
    id: "gausss-law-calculator", name: "Gauss's Law Calculator",
    description: "Calculate the electric flux from enclosed charge using Gauss's Law.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\Phi_E = \\frac{Q_{enc}}{\\varepsilon_0}",
    inputs: [{ id: "Q_enc", label: "Enclosed Charge (C)", type: "number", defaultValue: 1e-6 }],
    outputs: [{ id: "Phi_E", label: "Electric Flux", formula: "Q_enc / 8.854e-12", unit: "V·m" }],
    theory: "Gauss's Law states that the total electric flux through any closed surface equals the enclosed charge divided by ε₀. It is one of Maxwell's four equations and is most useful for calculating fields from symmetric charge distributions (spheres, cylinders, infinite planes).",
    faq: [
      { question: "When is Gauss's Law most useful?", answer: "When charge distributions have high symmetry (spherical, cylindrical, or planar). The Gaussian surface is chosen to exploit this symmetry, making E constant on the surface so the integral simplifies." },
      { question: "What is electric flux?", answer: "Electric flux ΦE = ∫E·dA measures the 'flow' of electric field through a surface. It represents the number of field lines passing through. Units: V·m (or N·m²/C)." },
      { question: "Does charge outside affect flux?", answer: "No. Charges outside the Gaussian surface contribute zero net flux (their field lines enter and exit the surface equally). Only enclosed charges matter for the total flux." }
    ],
    seoMeta: { title: "Gauss's Law Calculator", description: "Calculate electric flux from enclosed charge.", keywords: "Gauss's law, electric flux, enclosed charge, Maxwell's equations" }
  },
  {
    id: "lorentz-force-calculator", name: "Lorentz Force Calculator",
    description: "Calculate the magnetic force on a moving charged particle.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "F = qvB\\sin\\theta",
    inputs: [
      { id: "q", label: "Charge (C)", type: "number", defaultValue: 1.602e-19 },
      { id: "v", label: "Velocity (m/s)", type: "number", defaultValue: 1e6 },
      { id: "B", label: "Magnetic Field (T)", type: "number", defaultValue: 0.5 },
      { id: "theta_deg", label: "Angle Between v and B (°)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "F_mag", label: "Magnetic Force", formula: "abs(q) * v * B * sin(theta_deg * pi / 180)", unit: "N" },
      { id: "r_orbit", label: "Orbit Radius (if θ=90°)", formula: "m_e_placeholder = 9.109e-31, abs(q) > 0 ? v / (abs(q) * B / 9.109e-31) : 0", unit: "m" }
    ],
    theory: "The Lorentz force F = qv × B acts on a charged particle moving through a magnetic field. The force is always perpendicular to both velocity and field, so it changes direction but never speed. This causes circular or helical motion, which is the basis of mass spectrometers, cyclotrons, and plasma confinement.",
    faq: [
      { question: "Why doesn't magnetic force do work?", answer: "The force is always perpendicular to velocity, so F·v = 0. Magnetic fields can change a particle's direction but never its speed or kinetic energy. This is why magnetic mirrors can confine plasma without heating it." },
      { question: "What is the right-hand rule?", answer: "Point fingers in direction of v, curl toward B — thumb points in force direction (for positive charges). For negative charges (electrons), force is opposite. This determines whether the particle curves left or right." },
      { question: "Where is this important?", answer: "Mass spectrometry, cathode ray tubes, particle accelerators, MRI machines, Earth's magnetosphere (Van Allen belts), plasma confinement in fusion reactors (tokamaks), and Hall effect sensors." }
    ],
    seoMeta: { title: "Lorentz Force Calculator", description: "Calculate magnetic force on a moving charge.", keywords: "Lorentz force, magnetic force, charged particle, cyclotron radius" }
  },
  {
    id: "magnetic-field-of-straight-wire-calculator", name: "Magnetic Field of Straight Wire Calculator",
    description: "Calculate the magnetic field around a long straight current-carrying wire.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "B = \\frac{\\mu_0 I}{2\\pi r}",
    inputs: [
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 10 },
      { id: "r", label: "Distance from Wire (m)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [{ id: "B_val", label: "Magnetic Field", formula: "4 * pi * 1e-7 * I_amps / (2 * pi * r)", unit: "T" }],
    theory: "A long straight wire carrying current I produces a circular magnetic field that decreases as 1/r. The field lines form concentric circles around the wire. The direction follows the right-hand rule: thumb along current, fingers curl in field direction.",
    faq: [
      { question: "How strong is the field near household wiring?", answer: "A wire carrying 10A at 5cm distance: B = μ₀×10/(2π×0.05) ≈ 40 μT. For comparison, Earth's field is ~25–65 μT. Household wiring produces comparable magnetic fields." },
      { question: "What about two parallel wires?", answer: "Parallel currents in the same direction attract each other; opposite directions repel. This force was historically used to define the ampere: two wires 1m apart carrying 1A each experience 2×10⁻⁷ N/m of force." },
      { question: "What is the right-hand rule for wires?", answer: "Grip the wire with your right hand, thumb pointing in the current direction. Your fingers curl in the direction of the magnetic field. Current up → field circles counterclockwise (viewed from above)." }
    ],
    seoMeta: { title: "Magnetic Field of Straight Wire Calculator", description: "Calculate B-field around a current-carrying wire.", keywords: "magnetic field, straight wire, Ampere's law, Biot-Savart" }
  },
  {
    id: "power-dissipation-calculator", name: "Power Dissipation Calculator",
    description: "Calculate power dissipated in a resistor.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "P = I^2 R = \\frac{V^2}{R}",
    inputs: [
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 0.5 },
      { id: "R", label: "Resistance (Ω)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "P_I2R", label: "Power (I²R)", formula: "I_amps^2 * R", unit: "W" },
      { id: "V_drop", label: "Voltage Drop", formula: "I_amps * R", unit: "V" }
    ],
    theory: "Power dissipation in a resistor converts electrical energy to heat: P = I²R. This is critical for component selection — exceeding a resistor's power rating causes overheating and failure. Heat sinks and thermal management are essential in power electronics.",
    faq: [
      { question: "What happens if I exceed the power rating?", answer: "The resistor overheats, potentially changing resistance, desoldering from the board, catching fire, or exploding. Always use resistors rated at 50–100% above expected dissipation for safety margin." },
      { question: "Common resistor power ratings?", answer: "SMD 0402: 0.0625W. SMD 0805: 0.125W. Through-hole ¼W, ½W, 1W, 2W, 5W. Power resistors: 5–100W with heat sinks. Wirewound: up to 300W." },
      { question: "Why does P = I²R and P = V²/R give different emphasis?", answer: "In series circuits (constant I), higher R dissipates more power (P = I²R). In parallel circuits (constant V), lower R dissipates more power (P = V²/R). Both are correct — they just highlight different constraints." }
    ],
    seoMeta: { title: "Power Dissipation Calculator", description: "Calculate power dissipated in resistors.", keywords: "power dissipation, resistor, I²R, heat, thermal management" }
  },
  {
    id: "power-factor-calculator", name: "Power Factor Calculator",
    description: "Calculate power factor from real and apparent power.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "PF = \\cos\\phi = \\frac{P}{S}",
    inputs: [
      { id: "P_real", label: "Real Power (W)", type: "number", defaultValue: 850 },
      { id: "S_apparent", label: "Apparent Power (VA)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "PF", label: "Power Factor", formula: "P_real / S_apparent", unit: "" },
      { id: "phi_deg", label: "Phase Angle", formula: "acos(P_real / S_apparent) * 180 / pi", unit: "°" },
      { id: "Q_reactive", label: "Reactive Power", formula: "sqrt(S_apparent^2 - P_real^2)", unit: "VAR" }
    ],
    theory: "Power factor is the ratio of real (useful) power to apparent (total) power in an AC circuit. PF = 1.0 means all power does useful work (purely resistive). PF < 1 means some power oscillates between source and reactive components without doing work.",
    faq: [
      { question: "What causes poor power factor?", answer: "Inductive loads (motors, transformers, fluorescent ballasts) cause current to lag voltage. Capacitive loads cause current to lead. Both reduce power factor from the ideal 1.0." },
      { question: "Why do utilities care about power factor?", answer: "Low PF means higher current for the same real power: I = P/(V·PF). This requires larger cables, transformers, and generators. Utilities charge penalties for PF below 0.85–0.90." },
      { question: "How is power factor corrected?", answer: "Adding capacitor banks for inductive loads (most common). Power factor correction (PFC) circuits in switch-mode power supplies. Synchronous motors operated at leading PF. Target: PF > 0.95." }
    ],
    seoMeta: { title: "Power Factor Calculator", description: "Calculate power factor and reactive power.", keywords: "power factor, reactive power, apparent power, AC circuit, VAR" }
  },
  {
    id: "skin-depth-calculator", name: "Skin Depth Calculator",
    description: "Calculate the skin depth for current flow at high frequencies.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\delta = \\sqrt{\\frac{2\\rho}{\\omega\\mu}} = \\sqrt{\\frac{\\rho}{\\pi f \\mu}}",
    inputs: [
      { id: "rho_res", label: "Resistivity (Ω·m)", type: "number", defaultValue: 1.68e-8, helpText: "Copper: 1.68e-8" },
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 1e6 },
      { id: "mu_r", label: "Relative Permeability", type: "number", defaultValue: 1, helpText: "Copper: 1, Steel: ~100" }
    ],
    outputs: [{ id: "delta_m", label: "Skin Depth", formula: "sqrt(rho_res / (pi * f * mu_r * 4 * pi * 1e-7))", unit: "m" }],
    theory: "At high frequencies, AC current flows primarily near the surface of a conductor — the skin effect. Current density decreases exponentially from the surface with characteristic depth δ. At 1 MHz in copper, δ ≈ 66 μm, so the interior of the wire carries almost no current.",
    faq: [
      { question: "Why does skin effect occur?", answer: "Changing magnetic field from the AC current induces eddy currents that oppose current flow in the interior. The result is current concentration near the surface, increasing effective resistance." },
      { question: "How does this affect wire design?", answer: "At high frequencies, solid wire is wasteful — Litz wire (many thin insulated strands) reduces skin effect losses. At RF frequencies, only the surface matters, so hollow conductors or silver-plated copper are used." },
      { question: "What is skin depth for copper at different frequencies?", answer: "60 Hz: 8.5 mm. 1 kHz: 2.1 mm. 1 MHz: 66 μm. 1 GHz: 2.1 μm. At GHz frequencies, even thin plating carries all the current." }
    ],
    seoMeta: { title: "Skin Depth Calculator", description: "Calculate skin depth for AC current in conductors.", keywords: "skin depth, skin effect, AC resistance, frequency, conductor" }
  },
  {
    id: "voltage-drop-calculator", name: "Voltage Drop Calculator",
    description: "Calculate voltage drop across a wire from current, resistance, and length.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "V_{drop} = \\frac{2 \\rho L I}{A}",
    inputs: [
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 20 },
      { id: "L_m", label: "One-Way Wire Length (m)", type: "number", defaultValue: 30 },
      { id: "rho_res", label: "Resistivity (Ω·m)", type: "number", defaultValue: 1.68e-8 },
      { id: "A_m2", label: "Wire Cross-section (m²)", type: "number", defaultValue: 3.31e-6, helpText: "12 AWG ≈ 3.31e-6 m²" }
    ],
    outputs: [
      { id: "V_drop", label: "Voltage Drop (round trip)", formula: "2 * rho_res * L_m * I_amps / A_m2", unit: "V" },
      { id: "V_drop_pct", label: "Drop as % of 120V", formula: "2 * rho_res * L_m * I_amps / A_m2 / 120 * 100", unit: "%" }
    ],
    theory: "Voltage drop in wiring causes reduced voltage at the load and wasted energy as heat. The NEC recommends maximum 3% drop for branch circuits and 5% total. Longer runs, higher currents, and thinner wires all increase drop. The factor of 2 accounts for the round-trip (supply and return conductors).",
    faq: [
      { question: "What is acceptable voltage drop?", answer: "NEC recommendation: 3% for branch circuits, 2% for feeders, 5% total. On 120V, 3% = 3.6V. On 240V, 3% = 7.2V. Excessive drop causes dim lights, slow motors, and wasted energy." },
      { question: "How do I reduce voltage drop?", answer: "Use larger gauge wire (lower resistance per foot), shorter runs, higher voltage (reduces current for same power), or DC instead of AC (no reactive drop)." },
      { question: "Does voltage drop waste energy?", answer: "Yes. Power lost = V_drop × I = I²R. For 20A at 3.6V drop: 72W lost as heat in the wiring. Over a year, this is 631 kWh (~$95 at $0.15/kWh)." }
    ],
    seoMeta: { title: "Voltage Drop Calculator", description: "Calculate wire voltage drop for electrical circuits.", keywords: "voltage drop, wire gauge, NEC, electrical wiring, resistance" }
  },
  {
    id: "volt-to-electron-volt-calculator", name: "Volt to Electron Volt Calculator",
    description: "Convert energy between electron volts and joules.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "1\\text{ eV} = 1.602 \\times 10^{-19}\\text{ J}",
    inputs: [{ id: "eV_val", label: "Energy (eV)", type: "number", defaultValue: 1 }],
    outputs: [
      { id: "E_J", label: "Energy", formula: "eV_val * 1.602e-19", unit: "J" },
      { id: "E_keV", label: "Energy", formula: "eV_val / 1000", unit: "keV" }
    ],
    theory: "An electron volt (eV) is the energy gained by an electron accelerated through 1 volt of potential difference. It equals 1.602 × 10⁻¹⁹ J. The eV is the standard energy unit in atomic, nuclear, and particle physics because the joule is inconveniently large at these scales.",
    faq: [
      { question: "What energies are measured in eV?", answer: "Chemical bonds: 1–10 eV. Visible light photons: 1.8–3.1 eV. X-rays: 100 eV – 100 keV. Nuclear reactions: ~MeV. Particle colliders: GeV to TeV." },
      { question: "What is eV/c² as a mass unit?", answer: "From E = mc²: electron mass = 0.511 MeV/c². Proton mass = 938.3 MeV/c². Higgs boson: 125.1 GeV/c². Particle physicists routinely express mass in energy units." },
      { question: "Why not just use joules?", answer: "A single visible photon has ~3 × 10⁻¹⁹ J — an unwieldy number. In eV, the same photon is ~2 eV. The eV keeps numbers manageable at the atomic and subatomic scale." }
    ],
    seoMeta: { title: "Electron Volt Calculator", description: "Convert between eV and joules.", keywords: "electron volt, eV, joule, energy conversion, particle physics" }
  },
  {
    id: "vswr-calculator", name: "VSWR Calculator",
    description: "Calculate VSWR from forward and reflected power or reflection coefficient.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}",
    inputs: [
      { id: "P_fwd", label: "Forward Power (W)", type: "number", defaultValue: 100 },
      { id: "P_ref", label: "Reflected Power (W)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "gamma_mag", label: "Reflection Coefficient |Γ|", formula: "sqrt(P_ref / P_fwd)", unit: "" },
      { id: "VSWR_val", label: "VSWR", formula: "(1 + sqrt(P_ref / P_fwd)) / (1 - sqrt(P_ref / P_fwd))", unit: ":1" },
      { id: "return_loss", label: "Return Loss", formula: "-10 * log10(P_ref / P_fwd)", unit: "dB" }
    ],
    theory: "Voltage Standing Wave Ratio measures impedance mismatch in transmission lines. VSWR = 1:1 is perfect match (no reflection). VSWR = ∞:1 is total reflection (open/short circuit). Antenna systems aim for VSWR < 2:1 (< 11% reflected power).",
    faq: [
      { question: "What is a good VSWR?", answer: "Excellent: < 1.5:1 (<4% reflected). Good: < 2:1 (<11%). Acceptable: < 3:1 (<25%). Most transmitters can tolerate VSWR up to 2:1 without damage." },
      { question: "What causes high VSWR?", answer: "Impedance mismatch between transmitter, cable, and antenna. Damaged cables, corroded connectors, incorrect antenna length, or operation outside the antenna's design frequency range." },
      { question: "Can high VSWR damage a transmitter?", answer: "Yes. Reflected power returns to the transmitter, causing heating and potentially damaging the output stage. Most modern transmitters reduce power automatically when VSWR exceeds safe levels." }
    ],
    seoMeta: { title: "VSWR Calculator", description: "Calculate VSWR from power measurements.", keywords: "VSWR, standing wave ratio, reflection coefficient, antenna, impedance mismatch" }
  },
  {
    id: "watt-calculator", name: "Watt Calculator",
    description: "Calculate watts from volts and amps, or convert between power units.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "P = V \\times I",
    inputs: [
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 120 },
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "P_watts", label: "Power", formula: "V * I_amps", unit: "W" },
      { id: "P_kW", label: "Power", formula: "V * I_amps / 1000", unit: "kW" },
      { id: "P_hp", label: "Power", formula: "V * I_amps / 745.7", unit: "hp" }
    ],
    theory: "The watt is the SI unit of power: 1 W = 1 J/s = 1 V·A. For DC circuits, P = VI exactly. For AC circuits with power factor, real power = VI·cos(φ). The watt is named after James Watt, who improved the steam engine.",
    faq: [
      { question: "What is the difference between watts and volt-amps?", answer: "Watts measure real (useful) power. Volt-amps (VA) measure apparent power. They're equal for DC and purely resistive AC loads, but VA > W for inductive/capacitive loads due to power factor < 1." },
      { question: "How many watts is 1 horsepower?", answer: "1 mechanical horsepower = 745.7 watts. 1 electrical horsepower = 746 watts. 1 metric horsepower = 735.5 watts. The differences are small but occasionally matter." },
      { question: "What wattage is dangerous?", answer: "Danger depends on current through the body, not power. As little as 50mA across the heart can be lethal. At 120V, that's only 6W. Even small amounts of electrical power can be deadly." }
    ],
    seoMeta: { title: "Watt Calculator", description: "Calculate watts from voltage and current.", keywords: "watt, power, voltage, current, electrical calculation" }
  },
  {
    id: "watt-hour-calculator", name: "Watt-hour Calculator",
    description: "Calculate energy consumption in watt-hours from power and time.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "E = P \\times t",
    inputs: [
      { id: "P_watts", label: "Power (W)", type: "number", defaultValue: 100 },
      { id: "t_hours", label: "Time (hours)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "E_Wh", label: "Energy", formula: "P_watts * t_hours", unit: "Wh" },
      { id: "E_kWh", label: "Energy", formula: "P_watts * t_hours / 1000", unit: "kWh" }
    ],
    theory: "Watt-hours measure energy consumption: power × time. One kWh = 3.6 MJ is the standard billing unit for electricity worldwide. Understanding energy consumption helps optimize costs and environmental impact.",
    faq: [
      { question: "How much is 1 kWh?", answer: "1 kWh can: run a 100W bulb for 10 hours, charge a smartphone ~100 times, run an AC unit for ~20 minutes, or drive an EV about 5 km. Cost: $0.10–$0.30 depending on location." },
      { question: "How many kWh does a house use?", answer: "US average: ~30 kWh/day (~900 kWh/month). Europe: ~12 kWh/day. Varies enormously with climate, efficiency, and household size." },
      { question: "What about battery capacity?", answer: "Batteries are rated in Wh or mAh. A 100 Wh laptop battery at 20W load lasts 5 hours. A 5000 mAh phone battery at 3.7V = 18.5 Wh. Tesla Model 3: 60–82 kWh battery pack." }
    ],
    seoMeta: { title: "Watt-hour Calculator", description: "Calculate energy consumption in watt-hours.", keywords: "watt-hour, kWh, energy consumption, electricity, battery capacity" }
  },
  {
    id: "watts-to-amps-calculator", name: "Watts to Amps Calculator",
    description: "Convert watts to amps for DC and single-phase AC circuits.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "I = \\frac{P}{V \\cdot PF}",
    inputs: [
      { id: "P_watts", label: "Power (W)", type: "number", defaultValue: 1500 },
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 120 },
      { id: "PF", label: "Power Factor", type: "number", defaultValue: 1.0, helpText: "DC or resistive = 1.0, Motor = 0.8" }
    ],
    outputs: [{ id: "I_amps", label: "Current", formula: "P_watts / (V * PF)", unit: "A" }],
    theory: "Current = Power / (Voltage × Power Factor). For DC circuits, PF = 1. For AC circuits with reactive loads, PF < 1 means more current is needed for the same real power. This is essential for selecting wire gauge, breaker size, and fuse ratings.",
    faq: [
      { question: "Why do I need to know amps?", answer: "Amps determine wire gauge (too small = overheating/fire), breaker size, connector rating, and fuse selection. NEC has strict ampacity tables for safe wiring." },
      { question: "Why is AC current higher than expected?", answer: "If the load has PF < 1 (motors, transformers), actual current exceeds P/V. A 1500W motor with PF=0.8 draws 15.6A, not 12.5A. Wire and breaker must be sized for actual current." },
      { question: "What about three-phase?", answer: "For 3-phase: I = P / (√3 × V_line × PF). The √3 factor accounts for the phase relationship. 3-phase motors are more efficient and smoother than single-phase." }
    ],
    seoMeta: { title: "Watts to Amps Calculator", description: "Convert watts to amps for electrical circuits.", keywords: "watts to amps, power, current, voltage, electrical" }
  },
  {
    id: "watts-to-lux-calculator", name: "Watts to Lux Calculator",
    description: "Estimate illuminance in lux from optical power and area.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\text{lux} = \\frac{\\Phi_v}{A} = \\frac{P \\times \\eta_{lm/W}}{A}",
    inputs: [
      { id: "P_watts", label: "Optical Power (W)", type: "number", defaultValue: 10 },
      { id: "efficacy", label: "Luminous Efficacy (lm/W)", type: "number", defaultValue: 100, helpText: "LED: 80-150, Incandescent: 15" },
      { id: "A_m2", label: "Area (m²)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "lumens", label: "Luminous Flux", formula: "P_watts * efficacy", unit: "lm" },
      { id: "lux_val", label: "Illuminance", formula: "P_watts * efficacy / A_m2", unit: "lux" }
    ],
    theory: "Lux measures the luminous flux (lumens) per unit area, weighted by the human eye's sensitivity curve. It represents how bright a surface appears. Conversion from watts requires the luminous efficacy, which depends on the light source's spectral output relative to human visual sensitivity.",
    faq: [
      { question: "What are typical lux levels?", answer: "Full moon: 0.3 lux. Street lighting: 10–30 lux. Office: 300–500 lux. Overcast day: 1000 lux. Direct sunlight: 100,000 lux." },
      { question: "What is luminous efficacy?", answer: "How efficiently a source converts electrical power to visible light: Incandescent: 15 lm/W. CFL: 60 lm/W. LED: 80–150 lm/W. Theoretical max (555nm green): 683 lm/W." },
      { question: "What about UV and IR light?", answer: "Watts measure total radiant power across all wavelengths. Lux/lumens only count visible light (380–780 nm) weighted by eye sensitivity. A UV lamp may emit many watts but zero lumens (invisible to eyes)." }
    ],
    seoMeta: { title: "Watts to Lux Calculator", description: "Convert watts to lux illuminance.", keywords: "watts to lux, illuminance, lumens, luminous efficacy, lighting" }
  },
  {
    id: "debye-length-calculator", name: "Debye Length Calculator",
    description: "Calculate the Debye screening length in a plasma or electrolyte.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\lambda_D = \\sqrt{\\frac{\\varepsilon_0 k_B T}{n_e e^2}}",
    inputs: [
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 10000 },
      { id: "ne", label: "Electron Density (m⁻³)", type: "number", defaultValue: 1e18 }
    ],
    outputs: [{ id: "lambda_D", label: "Debye Length", formula: "sqrt(8.854e-12 * 1.381e-23 * T_K / (ne * (1.602e-19)^2))", unit: "m" }],
    theory: "The Debye length is the distance over which a charge's electric field is screened by surrounding charges in a plasma or electrolyte. Beyond λ_D, the potential drops exponentially. A plasma must be much larger than λ_D to exhibit collective behavior.",
    faq: [
      { question: "What is Debye screening?", answer: "Mobile charges rearrange to shield any local charge perturbation. Positive charges attract a cloud of electrons that partially cancels their field. The Debye length is the characteristic size of this shielding cloud." },
      { question: "What are typical Debye lengths?", answer: "Solar corona: ~0.1 m. Lab plasmas: ~0.01 mm. Metals (electron gas): ~0.1 nm. Blood plasma (electrolyte): ~0.7 nm. Seawater: ~0.3 nm." },
      { question: "Why is it important?", answer: "It determines the range of electrostatic interactions in plasmas, colloidal suspensions, and biological systems. DLVO theory for colloid stability uses Debye length to predict particle aggregation." }
    ],
    seoMeta: { title: "Debye Length Calculator", description: "Calculate Debye screening length in plasmas.", keywords: "Debye length, plasma screening, electrostatic shielding, plasma physics" }
  },
  {
    id: "hall-coefficient-calculator", name: "Hall Coefficient Calculator",
    description: "Calculate the Hall coefficient from carrier density and charge.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "R_H = \\frac{1}{nq}",
    inputs: [
      { id: "n_carriers", label: "Carrier Density (m⁻³)", type: "number", defaultValue: 8.5e28 },
      { id: "q_sign", label: "Carrier Charge (C)", type: "number", defaultValue: -1.602e-19, helpText: "Electrons: -1.602e-19, Holes: +1.602e-19" }
    ],
    outputs: [
      { id: "RH", label: "Hall Coefficient", formula: "1 / (n_carriers * q_sign)", unit: "m³/C" }
    ],
    theory: "The Hall coefficient R_H = 1/(nq) relates the Hall voltage to current and magnetic field in a conductor or semiconductor. Its sign reveals the charge carrier type: negative for electrons, positive for holes. Measurement of R_H determines carrier density and type — essential for semiconductor characterization.",
    faq: [
      { question: "What is the Hall effect?", answer: "When current flows through a conductor in a magnetic field, a voltage (Hall voltage) develops perpendicular to both current and field. This is caused by the Lorentz force deflecting charge carriers to one side." },
      { question: "How is the Hall effect used?", answer: "Hall sensors measure magnetic fields (used in smartphones, automotive, brushless motor commutation). Hall measurements determine carrier type and density in semiconductors. Hall thrusters use it for spacecraft propulsion." },
      { question: "Why is Hall coefficient negative for metals?", answer: "In most metals, electrons are the charge carriers (negative charge), giving R_H < 0. Some metals (Be, Zn, Cd) show positive R_H because the dominant carriers behave like positive holes in the band structure." }
    ],
    seoMeta: { title: "Hall Coefficient Calculator", description: "Calculate Hall coefficient from carrier density.", keywords: "Hall coefficient, Hall effect, carrier density, semiconductor, magnetic field" }
  },
  {
    id: "hp-to-amps-calculator", name: "HP to Amps Calculator",
    description: "Convert motor horsepower to current draw.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "I = \\frac{HP \\times 746}{V \\times \\eta \\times PF}",
    inputs: [
      { id: "HP", label: "Horsepower", type: "number", defaultValue: 5 },
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 230 },
      { id: "eta", label: "Efficiency", type: "number", defaultValue: 0.85 },
      { id: "PF", label: "Power Factor", type: "number", defaultValue: 0.85 }
    ],
    outputs: [{ id: "I_amps", label: "Current", formula: "HP * 746 / (V * eta * PF)", unit: "A" }],
    theory: "Motor nameplate horsepower is mechanical output. Electrical input = HP × 746 / efficiency. Current = electrical power / (voltage × power factor). Both efficiency and power factor affect the current draw — a 5 HP motor may draw 22A or 28A depending on these factors.",
    faq: [
      { question: "Why do motors draw more current than P/V suggests?", answer: "Motor efficiency (80–95%) means electrical input exceeds mechanical output. Power factor (0.7–0.9) means additional reactive current flows. Both increase the actual amp draw above the simple P/V calculation." },
      { question: "What about starting current?", answer: "Motors draw 5–8× full load current when starting (locked rotor current). This is why motor starters, soft starters, and VFDs exist — to limit inrush current and protect the electrical system." },
      { question: "How do I size a breaker for a motor?", answer: "NEC typically allows breakers at 250% of motor full-load amps for inverse-time breakers. A 5 HP motor at 28A FLA would get a 70A breaker. Wire size is based on 125% of FLA." }
    ],
    seoMeta: { title: "HP to Amps Calculator", description: "Convert motor HP to current draw.", keywords: "hp to amps, motor current, horsepower, electrical motor, NEC" }
  },
  {
    id: "inductive-reactance-calculator", name: "Inductive Reactance Calculator",
    description: "Calculate the reactance of an inductor at a given frequency.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "X_L = 2\\pi f L",
    inputs: [
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 1000 },
      { id: "L_H", label: "Inductance (H)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [{ id: "XL", label: "Inductive Reactance", formula: "2 * pi * f * L_H", unit: "Ω" }],
    theory: "Inductive reactance is the opposition an inductor presents to AC current. It increases linearly with frequency — inductors block high frequencies and pass low frequencies (opposite of capacitors). At DC (f=0), reactance is zero (short circuit).",
    faq: [
      { question: "Why does reactance increase with frequency?", answer: "Higher frequency means faster current changes (di/dt). Inductors resist changes in current (V = L·di/dt), so faster changes require more voltage for the same current — appearing as higher impedance." },
      { question: "Inductors vs capacitors in filters?", answer: "Inductors: high impedance at high frequency (used in low-pass filters and chokes). Capacitors: low impedance at high frequency (used in bypass/decoupling). Together in LC circuits, they create resonant filters." },
      { question: "What causes inductance?", answer: "Current flowing through a coil creates magnetic flux. Changes in current change the flux, inducing a back-EMF that opposes the change (Lenz's Law). More turns, larger area, and higher permeability core increase inductance." }
    ],
    seoMeta: { title: "Inductive Reactance Calculator", description: "Calculate inductor reactance at a given frequency.", keywords: "inductive reactance, inductor, frequency, impedance, AC circuit" }
  },
  {
    id: "internal-resistance-calculator", name: "Internal Resistance Calculator",
    description: "Calculate a battery's internal resistance from open circuit and loaded voltages.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "r = \\frac{V_{oc} - V_{load}}{I_{load}}",
    inputs: [
      { id: "V_oc", label: "Open Circuit Voltage (V)", type: "number", defaultValue: 12.6 },
      { id: "V_load", label: "Loaded Voltage (V)", type: "number", defaultValue: 11.8 },
      { id: "I_load", label: "Load Current (A)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "r_int", label: "Internal Resistance", formula: "(V_oc - V_load) / I_load", unit: "Ω" },
      { id: "P_loss", label: "Power Lost Internally", formula: "I_load^2 * (V_oc - V_load) / I_load", unit: "W" }
    ],
    theory: "Every battery has internal resistance that causes its terminal voltage to drop under load: V_terminal = V_oc - I×r. Internal resistance increases with age, discharge state, cold temperature, and damage. Low internal resistance is essential for high-current applications like starter motors.",
    faq: [
      { question: "What is a good battery internal resistance?", answer: "Car battery (12V lead-acid): 5–15 mΩ new, 20+ mΩ aged. Li-ion 18650: 20–80 mΩ. Alkaline AA: 150–300 mΩ. Lower is better for high-current applications." },
      { question: "Why does internal resistance matter?", answer: "High r causes voltage sag under load, wasted power (I²r heating), and limited maximum current. A battery with V_oc = 12.6V and r = 50mΩ can only deliver ~250A before voltage drops to zero." },
      { question: "How does temperature affect it?", answer: "Cold increases internal resistance dramatically — at -20°C, lead-acid battery r can triple. This is why cars are hard to start in winter: the battery delivers less current when you need more (engine oil is thicker)." }
    ],
    seoMeta: { title: "Internal Resistance Calculator", description: "Calculate battery internal resistance.", keywords: "internal resistance, battery, voltage drop, open circuit, loaded voltage" }
  },
  {
    id: "kva-calculator", name: "kVA Calculator",
    description: "Calculate kilovolt-amperes (apparent power) from voltage and current.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "S = \\frac{V \\times I}{1000}",
    inputs: [
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 480 },
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "S_kVA", label: "Apparent Power", formula: "V * I_amps / 1000", unit: "kVA" },
      { id: "P_kW", label: "Real Power (at PF=0.8)", formula: "V * I_amps / 1000 * 0.8", unit: "kW" }
    ],
    theory: "kVA (kilovolt-amperes) measures apparent power in AC systems — the product of voltage and current without considering phase angle. Transformers and generators are rated in kVA because they must handle the full current regardless of power factor.",
    faq: [
      { question: "Why are transformers rated in kVA, not kW?", answer: "Transformer losses depend on current (copper loss = I²R) and voltage (core loss), not on power factor. A transformer delivering 100 kVA at PF=0.5 (50 kW) has the same heating as at PF=1.0 (100 kW)." },
      { question: "How do I convert kVA to kW?", answer: "kW = kVA × power factor. At PF = 0.8: 100 kVA = 80 kW. At PF = 1.0: 100 kVA = 100 kW. The power factor is always ≤ 1." },
      { question: "What size generator do I need?", answer: "Add up all loads in kVA (not kW, since the generator must supply reactive current too). Add 20–25% margin. For motor loads, account for starting current (5–8× running current)." }
    ],
    seoMeta: { title: "kVA Calculator", description: "Calculate apparent power in kVA.", keywords: "kVA, apparent power, transformer, generator, voltage, current" }
  },
  {
    id: "magnetic-permeability-calculator", name: "Magnetic Permeability Calculator",
    description: "Calculate magnetic permeability from relative permeability.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\mu = \\mu_r \\times \\mu_0",
    inputs: [{ id: "mu_r", label: "Relative Permeability μr", type: "number", defaultValue: 1000, helpText: "Iron: ~5000, Steel: ~100, Air: 1" }],
    outputs: [
      { id: "mu_abs", label: "Absolute Permeability", formula: "mu_r * 4 * pi * 1e-7", unit: "H/m" },
      { id: "mu_0", label: "μ₀ (reference)", formula: "4 * pi * 1e-7", unit: "H/m" }
    ],
    theory: "Magnetic permeability measures how easily a material can be magnetized. μ₀ = 4π × 10⁻⁷ H/m is the permeability of free space. Ferromagnetic materials (iron, nickel, cobalt) have μr >> 1 and concentrate magnetic flux. Diamagnetic materials have μr slightly < 1.",
    faq: [
      { question: "What materials have high permeability?", answer: "Soft iron: μr ~5000. Silicon steel: ~7000. Permalloy (80% Ni): ~100,000. Mu-metal: ~100,000. Supermalloy: ~1,000,000. These are used for transformer cores, magnetic shielding, and electromagnets." },
      { question: "Why does permeability matter?", answer: "High permeability concentrates magnetic flux (better transformers, electromagnets). It also determines the inductance of coils with ferromagnetic cores: L = μN²A/l." },
      { question: "Is permeability constant?", answer: "Not for ferromagnetic materials — μ varies with B (nonlinear B-H curve). At high fields, the material saturates and μ drops toward μ₀. This saturation limits transformer and motor performance." }
    ],
    seoMeta: { title: "Magnetic Permeability Calculator", description: "Calculate magnetic permeability.", keywords: "magnetic permeability, relative permeability, mu, ferromagnetic" }
  },
  {
    id: "insertion-loss-calculator", name: "Insertion Loss Calculator",
    description: "Calculate signal loss when inserting a component into a transmission line.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "IL = 10\\log_{10}\\left(\\frac{P_{in}}{P_{out}}\\right)",
    inputs: [
      { id: "P_in", label: "Input Power (W)", type: "number", defaultValue: 1 },
      { id: "P_out", label: "Output Power (W)", type: "number", defaultValue: 0.8 }
    ],
    outputs: [{ id: "IL_dB", label: "Insertion Loss", formula: "10 * log10(P_in / P_out)", unit: "dB" }],
    theory: "Insertion loss is the reduction in signal power when a component (connector, filter, cable, splitter) is inserted into a transmission path. It is measured in dB and should be as low as possible for passive components. Total system insertion loss is the sum of all component losses.",
    faq: [
      { question: "What are typical insertion losses?", answer: "Good coax connector: 0.1–0.5 dB. Fiber optic splice: 0.1 dB. Coax cable (per 100ft): 1–10 dB (depends on frequency). 3-way splitter: ~5 dB. Band-pass filter: 1–3 dB passband." },
      { question: "How does insertion loss differ from return loss?", answer: "Insertion loss measures power not reaching the output (absorbed + reflected). Return loss measures power reflected back to the source. Both reduce the power delivered to the load." },
      { question: "What is 3 dB loss?", answer: "3 dB = 50% power loss. This is important because a 2-way splitter inherently has 3 dB theoretical loss (half the power to each port), plus any additional resistive/mismatch losses." }
    ],
    seoMeta: { title: "Insertion Loss Calculator", description: "Calculate insertion loss of RF components.", keywords: "insertion loss, signal loss, dB, connector, transmission line" }
  },
  {
    id: "fresnel-zone-calculator", name: "Fresnel Zone Calculator",
    description: "Calculate the Fresnel zone radius for wireless link planning.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "r_n = \\sqrt{\\frac{n \\lambda d_1 d_2}{d_1 + d_2}}",
    inputs: [
      { id: "f_GHz", label: "Frequency (GHz)", type: "number", defaultValue: 5.8 },
      { id: "d_km", label: "Total Distance (km)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "r1", label: "First Fresnel Zone Radius", formula: "sqrt(2.998e8 / (f_GHz * 1e9) * (d_km * 1000 / 2) * (d_km * 1000 / 2) / (d_km * 1000))", unit: "m" }
    ],
    theory: "Fresnel zones are concentric ellipsoids between transmitter and receiver. For reliable wireless links, at least 60% of the first Fresnel zone should be clear of obstructions. The zone radius is largest at the midpoint and depends on frequency and distance.",
    faq: [
      { question: "Why do Fresnel zones matter?", answer: "Obstructions within the first Fresnel zone cause signal diffraction and attenuation even if line-of-sight exists. Maintaining 60%+ clearance ensures near-free-space propagation conditions." },
      { question: "How big is a typical Fresnel zone?", answer: "At 5.8 GHz over 10 km: ~7.2 m radius at midpoint. At 900 MHz over 10 km: ~18.3 m radius. Lower frequencies need more clearance due to longer wavelengths." },
      { question: "What happens if Fresnel zone is blocked?", answer: "Partial blockage adds ~6 dB loss (60% blocked) to ~20 dB loss (fully blocked). Earth curvature can also intrude into the Fresnel zone on long links, requiring tower height calculations." }
    ],
    seoMeta: { title: "Fresnel Zone Calculator", description: "Calculate Fresnel zone radius for wireless links.", keywords: "Fresnel zone, wireless link, line of sight, clearance, RF planning" }
  },
  {
    id: "frequency-bandwidth-calculator", name: "Frequency Bandwidth Calculator",
    description: "Calculate bandwidth from center frequency and Q factor.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "BW = \\frac{f_c}{Q}",
    inputs: [
      { id: "fc", label: "Center Frequency (Hz)", type: "number", defaultValue: 1e6 },
      { id: "Q_factor", label: "Quality Factor (Q)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "BW", label: "Bandwidth (-3dB)", formula: "fc / Q_factor", unit: "Hz" },
      { id: "f_low", label: "Lower Frequency", formula: "fc - fc / (2 * Q_factor)", unit: "Hz" },
      { id: "f_high", label: "Upper Frequency", formula: "fc + fc / (2 * Q_factor)", unit: "Hz" }
    ],
    theory: "Bandwidth is the frequency range over which a circuit or system responds within 3 dB of its peak. The quality factor Q = f_c/BW determines selectivity — higher Q means narrower bandwidth and sharper frequency selection.",
    faq: [
      { question: "What is a good Q factor?", answer: "Air-core inductors: Q ~50–200. Ferrite core: Q ~20–100. Crystal oscillators: Q ~10,000–100,000. Optical cavities: Q > 10⁹. Higher Q means less energy loss per cycle." },
      { question: "What determines Q?", answer: "Q = 2π × (energy stored / energy dissipated per cycle). Losses from resistance, radiation, and dielectric absorption all reduce Q. Low-loss materials and precise construction maximize Q." },
      { question: "How does bandwidth relate to data rate?", answer: "Shannon's theorem: data rate ≤ BW × log₂(1 + SNR). Wider bandwidth allows higher data rates. This is why 5G uses wider frequency bands than 4G, and fiber optics have enormous bandwidth." }
    ],
    seoMeta: { title: "Frequency Bandwidth Calculator", description: "Calculate bandwidth from center frequency and Q.", keywords: "bandwidth, Q factor, resonance, selectivity, frequency" }
  },
  {
    id: "magnetic-dipole-moment-calculator", name: "Magnetic Dipole Moment Calculator",
    description: "Calculate the magnetic dipole moment of a current loop.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "m = NIA",
    inputs: [
      { id: "N_turns", label: "Number of Turns", type: "number", defaultValue: 100 },
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 1 },
      { id: "A_m2", label: "Loop Area (m²)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "m_dipole", label: "Magnetic Dipole Moment", formula: "N_turns * I_amps * A_m2", unit: "A·m²" }
    ],
    theory: "The magnetic dipole moment m = NIA characterizes the strength and orientation of a magnetic source (current loop, bar magnet, atom). It determines the torque (τ = m × B) and potential energy (U = -m·B) in an external magnetic field.",
    faq: [
      { question: "What creates magnetic dipole moments?", answer: "Current loops (electromagnets), electron orbital motion, electron spin (intrinsic magnetic moment), and nuclear spin. Permanent magnets have aligned atomic dipole moments." },
      { question: "What is the Bohr magneton?", answer: "The fundamental unit of magnetic moment for electrons: μ_B = 9.274 × 10⁻²⁴ J/T. An electron's spin magnetic moment is approximately 1 Bohr magneton." },
      { question: "How are magnets characterized?", answer: "By their dipole moment (total strength) and magnetization M (moment per unit volume). Remanence is the residual magnetization after removing the external field. Neodymium magnets have the highest remanence of common magnets." }
    ],
    seoMeta: { title: "Magnetic Dipole Moment Calculator", description: "Calculate magnetic moment of current loops.", keywords: "magnetic dipole moment, current loop, magnetization, Bohr magneton" }
  },
  {
    id: "magnetic-declination-calculator", name: "Magnetic Declination Calculator",
    description: "Calculate the correction angle between magnetic and true north.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "\\text{True Bearing} = \\text{Magnetic Bearing} + D",
    inputs: [
      { id: "mag_bearing", label: "Magnetic Bearing (°)", type: "number", defaultValue: 45 },
      { id: "declination", label: "Declination (°, East+/West-)", type: "number", defaultValue: -10 }
    ],
    outputs: [{ id: "true_bearing", label: "True Bearing", formula: "mag_bearing + declination", unit: "°" }],
    theory: "Magnetic declination is the angle between magnetic north (where a compass points) and true geographic north. It varies by location and changes over time. In some places, declination exceeds 20°, causing significant navigation errors if not corrected.",
    faq: [
      { question: "What causes magnetic declination?", answer: "Earth's magnetic poles don't coincide with its geographic poles. The magnetic North Pole is currently near Ellesmere Island, Canada, about 500 km from the geographic pole. It drifts ~40–50 km/year." },
      { question: "How do I find local declination?", answer: "Use NOAA's declination calculator (ngdc.noaa.gov/geomag/declination.shtml), your phone's compass app, or topographic maps that show local declination. It changes over years, so use current data." },
      { question: "Why does declination change?", answer: "Convection currents in Earth's liquid iron outer core constantly shift the magnetic field. The magnetic north pole has been accelerating its drift in recent decades, moving from Canada toward Siberia." }
    ],
    seoMeta: { title: "Magnetic Declination Calculator", description: "Correct compass readings for magnetic declination.", keywords: "magnetic declination, compass, true north, magnetic north, navigation" }
  },
  {
    id: "delta-to-wye-conversion-calculator", name: "Delta to Wye Conversion Calculator",
    description: "Convert resistor networks between delta (Δ) and wye (Y) configurations.",
    category: "physics", subcategory: "electromagnetism",
    scientificFormula: "R_1 = \\frac{R_b \\cdot R_c}{R_a + R_b + R_c}",
    inputs: [
      { id: "Ra", label: "Delta Resistor Ra (Ω)", type: "number", defaultValue: 30 },
      { id: "Rb", label: "Delta Resistor Rb (Ω)", type: "number", defaultValue: 60 },
      { id: "Rc", label: "Delta Resistor Rc (Ω)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "R1", label: "Wye R₁", formula: "Rb * Rc / (Ra + Rb + Rc)", unit: "Ω" },
      { id: "R2", label: "Wye R₂", formula: "Ra * Rc / (Ra + Rb + Rc)", unit: "Ω" },
      { id: "R3", label: "Wye R₃", formula: "Ra * Rb / (Ra + Rb + Rc)", unit: "Ω" }
    ],
    theory: "Delta-to-wye (Δ-Y) conversion transforms a three-terminal resistor network from a triangular (delta/pi) configuration to a star (wye/T) configuration while maintaining equivalent resistance. This simplifies circuit analysis when neither series nor parallel combinations can reduce the network.",
    faq: [
      { question: "When do I need this conversion?", answer: "When a circuit has a bridge configuration (like a Wheatstone bridge) that can't be simplified by series/parallel rules alone. Converting one delta to a wye often allows further simplification." },
      { question: "What is the reverse (wye to delta)?", answer: "Ra = (R1·R2 + R2·R3 + R3·R1)/R1. Each delta resistor equals the sum of all products divided by the opposite wye resistor." },
      { question: "Does this apply to impedances?", answer: "Yes, the same formulas work for complex impedances (R, L, C in AC circuits). Replace R with Z (impedance) and use complex arithmetic." }
    ],
    seoMeta: { title: "Delta to Wye Conversion Calculator", description: "Convert between delta and wye resistor networks.", keywords: "delta to wye, Y-delta, resistor network, circuit analysis" }
  }
];
