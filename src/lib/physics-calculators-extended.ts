import { CalculatorConfig } from "./calculator-types";

export const PHYSICS_CALCULATORS_EXTENDED: CalculatorConfig[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // STATICS — When things don't move ⚖️
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "car-center-of-mass-calculator",
    name: "Car Center of Mass Calculator",
    description: "Calculate the longitudinal center of mass of a vehicle from front and rear axle weights and wheelbase length.",
    category: "physics",
    subcategory: "statics",
    scientificFormula: "x_{cm} = \\frac{m_r \\cdot L}{m_f + m_r}",
    inputs: [
      { id: "mf", label: "Front Axle Mass (kg)", type: "number", defaultValue: 800 },
      { id: "mr", label: "Rear Axle Mass (kg)", type: "number", defaultValue: 700 },
      { id: "L", label: "Wheelbase (m)", type: "number", defaultValue: 2.7 }
    ],
    outputs: [
      { id: "xcm", label: "Center of Mass from Front Axle", formula: "(mr * L) / (mf + mr)", unit: "m" }
    ],
    theory: "The center of mass (or center of gravity) of a vehicle determines its handling characteristics, braking stability, and weight transfer during acceleration. It is computed as the mass-weighted average position along the wheelbase. A center of mass closer to the front axle improves understeer stability, while a rearward bias favors oversteer and rear-wheel traction.",
    faq: [
      { question: "Why does center of mass matter for a car?", answer: "The center of mass determines weight distribution, which directly affects handling, braking performance, and traction. Race cars carefully tune their center of mass for optimal cornering balance." },
      { question: "How is center of mass measured on a real car?", answer: "Place the car on individual wheel scales to measure front and rear axle loads. The center of mass distance from the front axle equals (rear mass × wheelbase) ÷ total mass." },
      { question: "What is an ideal weight distribution?", answer: "Most sports cars target a 50:50 front-to-rear distribution for balanced handling, while front-wheel-drive economy cars typically have 60:40 front-heavy distribution." }
    ],
    seoMeta: { title: "Car Center of Mass Calculator", description: "Calculate vehicle center of mass from axle weights and wheelbase.", keywords: "center of mass, car weight distribution, wheelbase, vehicle dynamics" }
  },
  {
    id: "pounds-per-square-inch-calculator",
    name: "Pounds per Square Inch Calculator",
    description: "Calculate pressure in pounds per square inch (PSI) from force in pounds and area in square inches.",
    category: "physics",
    subcategory: "statics",
    scientificFormula: "\\text{PSI} = \\frac{F}{A}",
    inputs: [
      { id: "F_lb", label: "Force (pounds)", type: "number", defaultValue: 100 },
      { id: "A_in2", label: "Area (in²)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "psi", label: "Pressure", formula: "F_lb / A_in2", unit: "PSI" }
    ],
    theory: "Pounds per square inch (PSI) is a unit of pressure commonly used in the United States for tire inflation, hydraulic systems, and gas pressures. It measures how much force is distributed over each square inch of surface. One PSI equals approximately 6,894.76 Pascals in SI units.",
    faq: [
      { question: "What is PSI?", answer: "PSI stands for pounds per square inch. It measures the pressure resulting from one pound-force applied to an area of one square inch. It is widely used for tire pressure, compressed gas, and hydraulic systems." },
      { question: "How do I convert PSI to Pascals?", answer: "Multiply PSI by 6,894.76 to get Pascals. For example, 14.7 PSI (standard atmosphere) equals approximately 101,325 Pa." },
      { question: "What is normal tire pressure in PSI?", answer: "Most passenger car tires are inflated to 30–35 PSI. Check your vehicle's door placard for the manufacturer's recommended pressure." }
    ],
    seoMeta: { title: "PSI Calculator — Pounds per Square Inch", description: "Calculate pressure in PSI from force and area.", keywords: "PSI, pounds per square inch, pressure calculator, tire pressure" }
  },
  {
    id: "pressure-calculator",
    name: "Pressure Calculator",
    description: "Calculate pressure from applied force and contact area using Pascal's definition P = F/A.",
    category: "physics",
    subcategory: "statics",
    scientificFormula: "P = \\frac{F}{A}",
    inputs: [
      { id: "F", label: "Force (N)", type: "number", defaultValue: 500 },
      { id: "A", label: "Area (m²)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "P", label: "Pressure", formula: "F / A", unit: "Pa" }
    ],
    theory: "Pressure is defined as force per unit area. The SI unit of pressure is the Pascal (Pa), equal to one Newton per square meter. Pressure is a scalar quantity — it acts equally in all directions at a point within a fluid. Blaise Pascal's principle states that pressure applied to a confined fluid is transmitted undiminished throughout the fluid.",
    faq: [
      { question: "What is 1 Pascal?", answer: "One Pascal (Pa) equals one Newton of force distributed over one square meter of area. Standard atmospheric pressure is approximately 101,325 Pa (101.3 kPa)." },
      { question: "Why do sharp objects cut more easily?", answer: "Sharp edges have a very small contact area. Since pressure = force ÷ area, the same force applied to a smaller area produces much greater pressure, allowing the blade to penetrate." },
      { question: "What are common units of pressure?", answer: "Common units include Pascals (Pa), atmospheres (atm), bars, PSI, and millimeters of mercury (mmHg or Torr). 1 atm = 101,325 Pa = 14.696 PSI." }
    ],
    seoMeta: { title: "Pressure Calculator", description: "Calculate pressure from force and area using P = F/A.", keywords: "pressure, force, area, Pascal, physics calculator" }
  },
  {
    id: "reduced-mass-calculator",
    name: "Reduced Mass Calculator",
    description: "Calculate the reduced mass of a two-body system for simplifying orbital and collision problems.",
    category: "physics",
    subcategory: "statics",
    scientificFormula: "\\mu = \\frac{m_1 \\cdot m_2}{m_1 + m_2}",
    inputs: [
      { id: "m1", label: "Mass 1 (kg)", type: "number", defaultValue: 5 },
      { id: "m2", label: "Mass 2 (kg)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "mu", label: "Reduced Mass", formula: "(m1 * m2) / (m1 + m2)", unit: "kg" }
    ],
    theory: "The reduced mass converts a two-body problem into an equivalent one-body problem. It appears naturally in the analysis of binary star systems, diatomic molecules, and collision physics. When one mass is much larger than the other (m₁ ≫ m₂), the reduced mass approaches the smaller mass. When both masses are equal, the reduced mass equals half of either mass.",
    faq: [
      { question: "What is reduced mass used for?", answer: "Reduced mass simplifies two-body problems into equivalent single-body problems. It is essential in orbital mechanics, molecular spectroscopy (vibrating diatomic molecules), and atomic physics (hydrogen atom electron-proton system)." },
      { question: "What happens when one mass is much larger?", answer: "When m₁ ≫ m₂, the reduced mass approaches m₂. For example, the Earth–ball system has a reduced mass essentially equal to the ball's mass since Earth is so much heavier." },
      { question: "How is reduced mass related to the harmonic oscillator?", answer: "For two masses connected by a spring, the oscillation frequency depends on the reduced mass: f = (1/2π)√(k/μ), where k is the spring constant and μ is the reduced mass." }
    ],
    seoMeta: { title: "Reduced Mass Calculator", description: "Calculate reduced mass for two-body systems.", keywords: "reduced mass, two-body problem, orbital mechanics, molecular physics" }
  },
  {
    id: "weight-on-other-planets-calculator",
    name: "Weight on Other Planets Calculator",
    description: "Calculate your weight on any planet or moon by applying that body's surface gravity to your mass.",
    category: "physics",
    subcategory: "statics",
    scientificFormula: "W = m \\cdot g_{\\text{planet}}",
    inputs: [
      { id: "mass", label: "Your Mass (kg)", type: "number", defaultValue: 70 },
      { id: "g_planet", label: "Surface Gravity (m/s²)", type: "number", defaultValue: 3.72, helpText: "Mercury: 3.7, Venus: 8.87, Earth: 9.81, Moon: 1.62, Mars: 3.72, Jupiter: 24.79, Saturn: 10.44, Uranus: 8.69, Neptune: 11.15" }
    ],
    outputs: [
      { id: "W", label: "Weight on Planet", formula: "mass * g_planet", unit: "N" },
      { id: "W_kgf", label: "Weight (kgf equivalent)", formula: "mass * g_planet / 9.80665", unit: "kgf" }
    ],
    theory: "Weight is the gravitational force acting on a mass. While your mass remains constant regardless of location, your weight changes with local gravitational acceleration. Each celestial body has a different surface gravity depending on its mass and radius (g = GM/R²). On Jupiter, you would weigh about 2.5 times your Earth weight, while on the Moon you would weigh only about 1/6th.",
    faq: [
      { question: "What is the difference between mass and weight?", answer: "Mass is the amount of matter (in kg) and remains constant everywhere. Weight is the gravitational force on that mass (in Newtons) and changes depending on local gravity. On the Moon, your mass stays the same but your weight drops to ~16.5% of Earth weight." },
      { question: "Why is gravity different on different planets?", answer: "Surface gravity depends on a planet's mass and radius: g = GM/R². Jupiter has strong gravity because of its enormous mass, while Mars has weak gravity due to its smaller mass and size." },
      { question: "What would I weigh on the Sun?", answer: "The Sun's surface gravity is about 274 m/s² — roughly 28 times Earth's gravity. A 70 kg person would weigh approximately 19,180 N (about 1,955 kgf). Of course, you could not actually stand on the Sun!" }
    ],
    seoMeta: { title: "Weight on Other Planets Calculator", description: "Find your weight on Mars, Jupiter, Moon, and other celestial bodies.", keywords: "weight on planets, surface gravity, Mars weight, Moon weight, planetary gravity" }
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ENERGY, WORK, AND POWER ⚡
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "bullet-energy-calculator",
    name: "Bullet Energy Calculator",
    description: "Calculate the kinetic energy of a bullet in foot-pounds from its weight in grains and velocity in feet per second.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "E = \\frac{w \\cdot v^2}{450{,}240}",
    inputs: [
      { id: "w_grains", label: "Bullet Weight (grains)", type: "number", defaultValue: 150 },
      { id: "vel_fps", label: "Muzzle Velocity (fps)", type: "number", defaultValue: 2800 }
    ],
    outputs: [
      { id: "energy_ftlb", label: "Kinetic Energy", formula: "(w_grains * vel_fps^2) / 450240", unit: "ft·lbs" }
    ],
    theory: "Bullet energy is the kinetic energy carried by a projectile in flight. It determines terminal performance including penetration depth and expansion. The formula converts from the ballistics units of grains and feet-per-second to foot-pounds of energy. The constant 450,240 accounts for the grain-to-pound mass conversion and the factor of ½ in the kinetic energy equation.",
    faq: [
      { question: "Why is bullet energy measured in foot-pounds?", answer: "Foot-pounds (ft·lbs) is the traditional energy unit in American ballistics. One foot-pound is the energy needed to lift one pound a height of one foot against gravity. It equals approximately 1.356 Joules." },
      { question: "What is a good muzzle energy for hunting?", answer: "For whitetail deer, most hunters recommend at least 1,000 ft·lbs of energy at impact. For larger game like elk, 1,500+ ft·lbs is preferred. Energy requirements depend on shot placement and bullet construction." },
      { question: "Does heavier or faster matter more for energy?", answer: "Velocity contributes more because energy scales with velocity squared (v²) but only linearly with mass. Doubling velocity quadruples energy, while doubling mass only doubles it." }
    ],
    seoMeta: { title: "Bullet Energy Calculator", description: "Calculate bullet kinetic energy in foot-pounds.", keywords: "bullet energy, muzzle energy, kinetic energy, ballistics calculator" }
  },
  {
    id: "eirp-calculator",
    name: "EIRP Calculator — Effective Isotropic Radiated Power",
    description: "Calculate the Effective Isotropic Radiated Power from transmitter power and antenna gain.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "\\text{EIRP} = P_t \\cdot G_t",
    inputs: [
      { id: "Pt", label: "Transmitter Power (W)", type: "number", defaultValue: 10 },
      { id: "Gt", label: "Antenna Gain (linear ratio)", type: "number", defaultValue: 15, helpText: "Linear gain, not dBi. Convert dBi to linear: G = 10^(dBi/10)" }
    ],
    outputs: [
      { id: "eirp_w", label: "EIRP", formula: "Pt * Gt", unit: "W" },
      { id: "eirp_dbw", label: "EIRP (dBW)", formula: "10 * log10(Pt * Gt)", unit: "dBW" }
    ],
    theory: "EIRP represents the total power that a theoretical isotropic antenna would need to radiate to produce the same peak signal strength as the actual directional antenna in its direction of maximum gain. It combines the transmitter output power with the antenna's ability to focus energy in a particular direction. EIRP is a key parameter in link budget analysis for wireless communications and satellite systems.",
    faq: [
      { question: "What does EIRP tell you?", answer: "EIRP indicates the maximum signal strength a transmitter-antenna system can produce in the direction of peak antenna gain. It is the product of transmitter power and antenna gain, representing an equivalent isotropic power." },
      { question: "How do I convert dBi to linear gain?", answer: "Use the formula G_linear = 10^(G_dBi / 10). For example, a 20 dBi antenna has a linear gain of 10^(20/10) = 100." },
      { question: "Why is EIRP important in regulations?", answer: "Regulatory bodies like the FCC set maximum EIRP limits for different frequency bands to prevent interference between systems. Knowing your EIRP ensures legal compliance." }
    ],
    seoMeta: { title: "EIRP Calculator — Effective Isotropic Radiated Power", description: "Calculate EIRP from transmitter power and antenna gain.", keywords: "EIRP, antenna gain, transmitter power, radiated power, link budget" }
  },
  {
    id: "elastic-potential-energy-calculator",
    name: "Elastic Potential Energy Calculator",
    description: "Calculate the potential energy stored in a compressed or stretched spring using Hooke's Law.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "U = \\frac{1}{2} k x^2",
    inputs: [
      { id: "k", label: "Spring Constant (N/m)", type: "number", defaultValue: 200 },
      { id: "x", label: "Displacement from Equilibrium (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "U", label: "Elastic Potential Energy", formula: "0.5 * k * x^2", unit: "J" }
    ],
    theory: "Elastic potential energy is the energy stored in a deformed elastic material such as a spring, rubber band, or bow. For an ideal spring obeying Hooke's Law (F = kx), the stored energy equals ½kx². This energy can be fully recovered as kinetic energy when the spring is released, making it a conservative form of energy. The quadratic dependence on displacement means doubling the stretch quadruples the stored energy.",
    faq: [
      { question: "What is the spring constant k?", answer: "The spring constant (k) measures a spring's stiffness in Newtons per meter (N/m). A higher k means a stiffer spring that requires more force to stretch. It depends on the spring material, wire diameter, and coil geometry." },
      { question: "Does compression or extension store the same energy?", answer: "Yes, for an ideal spring the energy stored is the same whether compressed or extended by the same distance x. The formula U = ½kx² depends only on the magnitude of displacement, not its direction." },
      { question: "Where is elastic PE used in real life?", answer: "Elastic potential energy is used in mechanical watches (mainspring), archery (bow), trampolines, car suspensions, and many engineering applications where energy needs to be stored and released." }
    ],
    seoMeta: { title: "Elastic Potential Energy Calculator", description: "Calculate spring energy with U = ½kx².", keywords: "elastic potential energy, spring energy, Hooke's law, spring constant" }
  },
  {
    id: "fpe-calculator",
    name: "FPE Calculator — Foot-pounds of Energy",
    description: "Calculate the kinetic energy of a projectile in foot-pounds from weight (grains) and velocity (fps).",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "\\text{FPE} = \\frac{w \\cdot v^2}{450{,}240}",
    inputs: [
      { id: "w_gr", label: "Projectile Weight (grains)", type: "number", defaultValue: 14.3 },
      { id: "v_fps", label: "Velocity (fps)", type: "number", defaultValue: 900 }
    ],
    outputs: [
      { id: "fpe", label: "Foot-pounds of Energy", formula: "(w_gr * v_fps^2) / 450240", unit: "ft·lbs" }
    ],
    theory: "Foot-pounds of energy (FPE or ft·lbs) is the standard energy unit used in ballistics, particularly for airguns and firearms. The formula derives from the kinetic energy equation KE = ½mv², with unit conversions from grains to pounds (÷ 7000) and from feet-per-second to appropriate units. The divisor 450,240 = 2 × 7000 × 32.174 combines these conversions.",
    faq: [
      { question: "What FPE is needed for pest control?", answer: "Most small pests require at least 4–6 FPE for humane dispatch. Squirrels and rabbits typically need 8–12 FPE. Always check local regulations and use appropriate caliber and shot placement." },
      { question: "How does FPE relate to Joules?", answer: "One foot-pound equals approximately 1.3558 Joules. Multiply FPE by 1.3558 to convert to Joules, or divide Joules by 1.3558 to get FPE." },
      { question: "Why does velocity matter more than weight?", answer: "Energy increases with the square of velocity but only linearly with weight. A pellet going twice as fast has four times the energy, making velocity the dominant factor in projectile energy." }
    ],
    seoMeta: { title: "FPE Calculator — Foot-pounds of Energy", description: "Calculate projectile kinetic energy in foot-pounds.", keywords: "foot-pounds energy, FPE, airgun energy, projectile energy calculator" }
  },
  {
    id: "impact-energy-calculator",
    name: "Impact Energy Calculator",
    description: "Calculate the gravitational potential energy (impact energy) of a falling object from height.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "E = m \\cdot g \\cdot h",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "h", label: "Fall Height (m)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "E", label: "Impact Energy", formula: "m * 9.80665 * h", unit: "J" }
    ],
    theory: "Impact energy is the kinetic energy an object possesses just before striking a surface after falling from a given height. By conservation of energy, this equals the gravitational potential energy at the starting height: E = mgh. This calculation assumes no air resistance and that all potential energy converts to kinetic energy. In real-world applications such as Charpy impact testing and drop testing, impact energy determines material toughness and product durability.",
    faq: [
      { question: "Does the shape of the object affect impact energy?", answer: "No, impact energy depends only on mass and height (E = mgh). However, the shape affects how the energy is distributed upon impact — a pointed object concentrates force over a small area, causing more damage." },
      { question: "What about air resistance?", answer: "Air resistance reduces the actual impact energy below mgh. For dense, compact objects falling short distances, air resistance is negligible. For light or large-surface-area objects, it can significantly reduce impact speed." },
      { question: "How is impact energy used in engineering?", answer: "Impact energy is critical in Charpy and Izod tests to measure material toughness, in drop testing consumer products, and in safety engineering for designing protective equipment." }
    ],
    seoMeta: { title: "Impact Energy Calculator", description: "Calculate the energy of a falling object at impact.", keywords: "impact energy, falling object, potential energy, drop energy, mgh" }
  },
  {
    id: "kinetic-energy-calculator",
    name: "Kinetic Energy Calculator",
    description: "Calculate the kinetic energy of a moving object from its mass and velocity.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "KE = \\frac{1}{2} m v^2",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 10 },
      { id: "vel", label: "Velocity (m/s)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "KE", label: "Kinetic Energy", formula: "0.5 * m * vel^2", unit: "J" }
    ],
    theory: "Kinetic energy is the energy an object possesses due to its motion. It is a scalar quantity that depends on both mass and the square of velocity. The work-energy theorem states that the net work done on an object equals its change in kinetic energy. This principle underlies everything from vehicle braking distances to particle physics experiments.",
    faq: [
      { question: "Why does kinetic energy depend on velocity squared?", answer: "Kinetic energy scales with v² because it represents the total work needed to accelerate an object from rest. As velocity increases, each additional unit of speed requires more work due to the increasing momentum. This is why doubling your car's speed quadruples its kinetic energy and braking distance." },
      { question: "Is kinetic energy always conserved?", answer: "Kinetic energy is conserved only in perfectly elastic collisions. In inelastic collisions, some kinetic energy converts to heat, sound, or deformation. However, total energy (kinetic + potential + thermal + etc.) is always conserved." },
      { question: "What is relativistic kinetic energy?", answer: "At speeds approaching the speed of light, the classical formula ½mv² becomes inaccurate. Relativistic kinetic energy is KE = (γ - 1)mc², where γ = 1/√(1 - v²/c²). This approaches infinity as velocity approaches c." }
    ],
    seoMeta: { title: "Kinetic Energy Calculator", description: "Calculate kinetic energy with KE = ½mv².", keywords: "kinetic energy, KE calculator, mass velocity energy, work-energy theorem" }
  },
  {
    id: "potential-energy-calculator",
    name: "Potential Energy Calculator",
    description: "Calculate gravitational potential energy of an object at a given height above a reference level.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "PE = m \\cdot g \\cdot h",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 10 },
      { id: "h", label: "Height (m)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "PE", label: "Gravitational Potential Energy", formula: "m * 9.80665 * h", unit: "J" }
    ],
    theory: "Gravitational potential energy represents the energy stored in an object due to its position in a gravitational field. It is a relative quantity — defined with respect to a chosen reference level (often the ground). As an object falls, its potential energy converts to kinetic energy. This interplay is the foundation of hydroelectric power, roller coasters, and pendulum clocks.",
    faq: [
      { question: "Is potential energy always positive?", answer: "Potential energy can be negative if the object is below your chosen reference level. The value depends on where you set the zero point. In orbital mechanics, gravitational PE is conventionally negative (zero at infinity)." },
      { question: "How is PE used in hydroelectric dams?", answer: "Water stored at height behind a dam has gravitational PE = mgh. When released, this energy converts to kinetic energy of flowing water, which spins turbines to generate electricity. Higher dams and greater water volumes yield more energy." },
      { question: "What is the relationship between PE and KE?", answer: "By conservation of energy, PE + KE = constant (in absence of friction). As an object falls, PE decreases and KE increases by the same amount. At the lowest point, all PE has converted to KE." }
    ],
    seoMeta: { title: "Potential Energy Calculator", description: "Calculate gravitational PE with PE = mgh.", keywords: "potential energy, gravitational energy, height energy, mgh calculator" }
  },
  {
    id: "power-to-weight-ratio-calculator",
    name: "Power-to-Weight Ratio Calculator",
    description: "Calculate the power-to-weight ratio, a key performance metric for vehicles and engines.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "\\text{PWR} = \\frac{P}{W}",
    inputs: [
      { id: "P_watts", label: "Power (W)", type: "number", defaultValue: 150000 },
      { id: "W_kg", label: "Weight (kg)", type: "number", defaultValue: 1500 }
    ],
    outputs: [
      { id: "pwr", label: "Power-to-Weight Ratio", formula: "P_watts / W_kg", unit: "W/kg" },
      { id: "pwr_hp", label: "HP per Ton", formula: "(P_watts / 745.7) / (W_kg / 1000)", unit: "hp/ton" }
    ],
    theory: "Power-to-weight ratio (PWR) is one of the most important performance metrics for any vehicle or engine. It directly determines acceleration capability — a higher PWR means faster acceleration. This metric allows fair comparison between vehicles of different sizes and power levels. Formula 1 cars achieve ~1000 W/kg, while typical sedans are around 50–100 W/kg.",
    faq: [
      { question: "Why is power-to-weight ratio important?", answer: "PWR determines how quickly a vehicle can accelerate. Two cars with equal power but different weights will have different acceleration — the lighter car accelerates faster. PWR is the key comparator across vehicle classes." },
      { question: "What is a good power-to-weight ratio?", answer: "For cars: economy sedans ~50–80 W/kg, sports cars ~150–250 W/kg, supercars ~400+ W/kg, Formula 1 ~1000 W/kg. For context, a human sprinter generates about 15–25 W/kg during a sprint." },
      { question: "Should I use power or torque-to-weight?", answer: "Power-to-weight determines top speed and acceleration at high speeds. Torque-to-weight is more relevant for low-speed acceleration and towing. Both matter, but PWR is the standard performance metric." }
    ],
    seoMeta: { title: "Power-to-Weight Ratio Calculator", description: "Calculate vehicle or engine power-to-weight ratio.", keywords: "power to weight ratio, PWR, vehicle performance, engine power, acceleration" }
  },
  {
    id: "recoil-energy-calculator",
    name: "Recoil Energy Calculator",
    description: "Calculate the recoil energy of a firearm from bullet mass, velocity, and gun mass using conservation of momentum.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "E_r = \\frac{(m_b \\cdot v_b)^2}{2 \\cdot m_g}",
    inputs: [
      { id: "mb", label: "Bullet Mass (kg)", type: "number", defaultValue: 0.0097, helpText: "150 grains ≈ 0.0097 kg" },
      { id: "vb", label: "Bullet Velocity (m/s)", type: "number", defaultValue: 850 },
      { id: "mg", label: "Firearm Mass (kg)", type: "number", defaultValue: 3.5 }
    ],
    outputs: [
      { id: "Er", label: "Recoil Energy", formula: "(mb * vb)^2 / (2 * mg)", unit: "J" },
      { id: "vr", label: "Recoil Velocity", formula: "(mb * vb) / mg", unit: "m/s" }
    ],
    theory: "Recoil energy is derived from Newton's third law and conservation of momentum. When a bullet is fired, the momentum of the bullet-gas system equals the recoil momentum of the firearm. The recoil energy E = p²/(2M) where p is the bullet momentum and M is the gun mass. Heavier firearms produce less felt recoil for the same ammunition.",
    faq: [
      { question: "How can I reduce recoil?", answer: "Use a heavier firearm, a muzzle brake or compensator, a recoil pad, or lower-powered ammunition. Semi-automatic actions also spread recoil over a longer time, reducing peak felt recoil." },
      { question: "What is 'felt recoil'?", answer: "Felt recoil is subjective and depends on recoil energy, recoil velocity, stock design, and shooter anatomy. Recoil energy determines total kick, while recoil velocity determines how sharp or smooth it feels." },
      { question: "Does the gun move before the bullet exits?", answer: "Yes, the gun begins moving rearward the instant the bullet starts accelerating. However, the bullet exits so quickly that the gun moves only a very small distance before the bullet leaves the muzzle." }
    ],
    seoMeta: { title: "Recoil Energy Calculator", description: "Calculate firearm recoil energy and velocity.", keywords: "recoil energy, firearm recoil, gun recoil calculator, momentum conservation" }
  },
  {
    id: "signal-to-noise-ratio-calculator",
    name: "Signal-to-Noise Ratio Calculator",
    description: "Calculate the signal-to-noise ratio (SNR) in decibels from signal and noise power levels.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "\\text{SNR}_{\\text{dB}} = 10 \\cdot \\log_{10}\\left(\\frac{P_{\\text{signal}}}{P_{\\text{noise}}}\\right)",
    inputs: [
      { id: "S", label: "Signal Power (W)", type: "number", defaultValue: 0.01 },
      { id: "N", label: "Noise Power (W)", type: "number", defaultValue: 0.0001 }
    ],
    outputs: [
      { id: "snr", label: "Signal-to-Noise Ratio", formula: "10 * log10(S / N)", unit: "dB" }
    ],
    theory: "Signal-to-noise ratio quantifies how much a signal rises above the background noise floor. A higher SNR means a cleaner, more distinguishable signal. In communications, SNR determines the maximum achievable data rate (Shannon's theorem). In audio, SNR measures recording quality. The decibel scale is logarithmic — every 10 dB increase represents a tenfold improvement in signal-to-noise power ratio.",
    faq: [
      { question: "What is a good SNR?", answer: "In wireless communications, 20+ dB is generally usable, 30+ dB is good, and 40+ dB is excellent. In audio recording, professional equipment targets 90–120 dB SNR. In photography, higher SNR means less image grain/noise." },
      { question: "How does SNR relate to data rate?", answer: "Shannon's theorem states: C = B × log₂(1 + SNR), where C is channel capacity in bits/second and B is bandwidth. Higher SNR allows faster data transmission with fewer errors." },
      { question: "Can SNR be negative?", answer: "Yes, a negative SNR (in dB) means the noise power exceeds the signal power. Some modern communication systems (like GPS and spread-spectrum) can operate with negative SNR by using advanced coding and processing techniques." }
    ],
    seoMeta: { title: "Signal-to-Noise Ratio Calculator", description: "Calculate SNR in decibels from signal and noise power.", keywords: "signal to noise ratio, SNR, decibels, noise floor, signal quality" }
  },
  {
    id: "tnt-equivalent-calculator",
    name: "TNT Equivalent Calculator",
    description: "Convert energy values to the equivalent mass of TNT explosive for comparison purposes.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "m_{\\text{TNT}} = \\frac{E}{4.184 \\times 10^9}",
    inputs: [
      { id: "E_joules", label: "Energy (Joules)", type: "number", defaultValue: 4.184e12 }
    ],
    outputs: [
      { id: "tnt_kg", label: "TNT Equivalent", formula: "E_joules / 4.184e9", unit: "kg TNT" },
      { id: "tnt_tons", label: "TNT Equivalent", formula: "E_joules / 4.184e12", unit: "tons TNT" }
    ],
    theory: "TNT equivalent is a convention for expressing large energy releases using the energy content of trinitrotoluene (TNT) as a baseline. One kilogram of TNT releases approximately 4.184 megajoules (4.184 × 10⁶ J) of energy. This scale is used for nuclear weapons (kilotons or megatons of TNT), asteroid impacts, earthquakes, and industrial explosions.",
    faq: [
      { question: "How much energy is in 1 ton of TNT?", answer: "One metric ton (1,000 kg) of TNT releases approximately 4.184 × 10⁹ Joules (4.184 GJ). This is often called a 'ton of TNT equivalent' and serves as the standard unit for large energy releases." },
      { question: "How powerful was the Hiroshima bomb?", answer: "The Little Boy atomic bomb that detonated over Hiroshima released approximately 15 kilotons of TNT equivalent, or about 6.3 × 10¹³ Joules. Modern thermonuclear weapons can exceed megatons." },
      { question: "Can everyday energy be expressed in TNT?", answer: "Yes! A gallon of gasoline contains about 0.03 kg TNT equivalent. A lightning bolt is about 0.0005 kg TNT. A 1-megaton nuclear weapon equals 1,000,000 tons of TNT." }
    ],
    seoMeta: { title: "TNT Equivalent Calculator", description: "Convert energy to equivalent kilograms of TNT.", keywords: "TNT equivalent, energy conversion, explosion energy, nuclear yield" }
  },
  {
    id: "watt-converter",
    name: "Watt Converter",
    description: "Convert power between Watts, kilowatts, horsepower, and BTU per hour.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "1\\text{ HP} = 745.7\\text{ W} = 2{,}545\\text{ BTU/hr}",
    inputs: [
      { id: "W", label: "Power (Watts)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "kw", label: "Kilowatts", formula: "W / 1000", unit: "kW" },
      { id: "hp", label: "Horsepower (mechanical)", formula: "W / 745.7", unit: "hp" },
      { id: "btu_hr", label: "BTU per Hour", formula: "W * 3.41214", unit: "BTU/hr" }
    ],
    theory: "The Watt is the SI unit of power, defined as one Joule per second. Horsepower was originally defined by James Watt to compare steam engine output to draft horses. One mechanical horsepower equals 745.7 Watts. BTU/hr is commonly used in HVAC to rate heating and cooling capacity. Power conversions are essential in engineering, automotive, and energy applications.",
    faq: [
      { question: "What is the difference between watts and horsepower?", answer: "Both measure power (energy per unit time). 1 mechanical horsepower = 745.7 watts. Horsepower is traditionally used for engines and motors, while watts are the SI standard used for electrical appliances and scientific work." },
      { question: "What is a BTU?", answer: "A British Thermal Unit (BTU) is the energy needed to raise one pound of water by one degree Fahrenheit. BTU/hr measures the rate of energy transfer and is commonly used in HVAC to rate furnaces, air conditioners, and water heaters." },
      { question: "How many watts does a typical home use?", answer: "An average US household uses about 1,200 watts continuously (about 30 kWh per day). Peak demand can reach 5,000–10,000 watts when multiple appliances run simultaneously." }
    ],
    seoMeta: { title: "Watt Converter", description: "Convert between Watts, kilowatts, horsepower, and BTU/hr.", keywords: "watt converter, watts to horsepower, power conversion, BTU, kilowatts" }
  },
  {
    id: "work-calculator",
    name: "Work Calculator",
    description: "Calculate mechanical work done by a force applied over a distance at a given angle.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "W = F \\cdot d \\cdot \\cos\\theta",
    inputs: [
      { id: "F", label: "Applied Force (N)", type: "number", defaultValue: 50 },
      { id: "d", label: "Displacement (m)", type: "number", defaultValue: 10 },
      { id: "theta", label: "Angle Between Force and Displacement (°)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "work", label: "Work Done", formula: "F * d * cos(theta * pi / 180)", unit: "J" }
    ],
    theory: "Work is defined as the product of force, displacement, and the cosine of the angle between them. Only the component of force parallel to the displacement does work. When the force is perpendicular to motion (θ = 90°), no work is done — this is why centripetal force in circular motion does zero work. Work is measured in Joules (J), where 1 J = 1 N·m.",
    faq: [
      { question: "Can work be negative?", answer: "Yes, work is negative when the force component opposes the direction of motion (angle > 90°). Friction always does negative work because it opposes motion, removing kinetic energy from the system." },
      { question: "Why does holding a heavy object not count as work?", answer: "Physically, no displacement occurs while holding an object stationary, so W = F × 0 = 0. Your muscles fatigue because they do internal biochemical work, but in physics, no mechanical work is done on the object." },
      { question: "What is the relationship between work and energy?", answer: "The work-energy theorem states that net work equals the change in kinetic energy: W_net = ΔKE. Work is the mechanism by which energy is transferred between objects or converted between forms." }
    ],
    seoMeta: { title: "Work Calculator", description: "Calculate work done by a force over a distance.", keywords: "work calculator, force displacement, mechanical work, work-energy, joules" }
  },
  {
    id: "work-and-power-calculator",
    name: "Work and Power Calculator",
    description: "Calculate both the work done and the power output for a force acting over a distance in a given time.",
    category: "physics",
    subcategory: "energy-work-power",
    scientificFormula: "W = F \\cdot d, \\quad P = \\frac{W}{t}",
    inputs: [
      { id: "F", label: "Force (N)", type: "number", defaultValue: 100 },
      { id: "d", label: "Distance (m)", type: "number", defaultValue: 20 },
      { id: "t", label: "Time (s)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "work", label: "Work Done", formula: "F * d", unit: "J" },
      { id: "power", label: "Power", formula: "(F * d) / t", unit: "W" }
    ],
    theory: "Work measures the total energy transferred by a force, while power measures the rate at which that energy is transferred. The same amount of work can be done quickly (high power) or slowly (low power). Power is especially important in engineering — an engine's power rating determines how fast it can do work, which directly relates to vehicle acceleration and top speed.",
    faq: [
      { question: "What is the difference between work and power?", answer: "Work is the total energy transferred (measured in Joules). Power is the rate of doing work (measured in Watts = Joules/second). Lifting a 100 kg weight 1 meter requires about 981 J of work regardless of time, but doing it in 1 second requires 981 W of power versus only 98.1 W if done in 10 seconds." },
      { question: "Why is power more useful than work for engines?", answer: "Power tells you how quickly an engine can deliver energy. Two engines might be capable of the same total work, but the more powerful one accomplishes it faster — crucial for applications like vehicle acceleration, pump flow rates, and manufacturing throughput." },
      { question: "What is the average power output of a human?", answer: "A healthy adult can sustain about 75 watts (0.1 HP) for extended periods. During sprinting or cycling, peak power output can briefly reach 1,000–2,000 watts for elite athletes." }
    ],
    seoMeta: { title: "Work and Power Calculator", description: "Calculate work done and power output from force, distance, and time.", keywords: "work and power, mechanical power, force distance time, watts joules" }
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ROTATIONAL AND PERIODIC MOTION 🌎
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "angular-acceleration-calculator",
    name: "Angular Acceleration Calculator",
    description: "Calculate angular acceleration from the change in angular velocity over time.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\alpha = \\frac{\\Delta\\omega}{\\Delta t}",
    inputs: [
      { id: "domega", label: "Change in Angular Velocity (rad/s)", type: "number", defaultValue: 10 },
      { id: "t", label: "Time Interval (s)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "alpha", label: "Angular Acceleration", formula: "domega / t", unit: "rad/s²" }
    ],
    theory: "Angular acceleration measures how quickly the angular velocity of a rotating object changes over time. It is the rotational analog of linear acceleration. Positive angular acceleration speeds up rotation; negative angular acceleration (angular deceleration) slows it down. It is related to torque by Newton's rotational second law: τ = Iα.",
    faq: [
      { question: "What is angular acceleration?", answer: "Angular acceleration (α) is the rate of change of angular velocity with respect to time, measured in radians per second squared (rad/s²). It describes how quickly a spinning object speeds up or slows down." },
      { question: "How does angular acceleration relate to torque?", answer: "By Newton's second law for rotation: τ = Iα, where τ is torque, I is moment of inertia, and α is angular acceleration. More torque or less inertia produces greater angular acceleration." },
      { question: "Can angular acceleration be constant?", answer: "Yes, constant angular acceleration occurs when a constant torque acts on an object with fixed moment of inertia — similar to constant linear acceleration under constant force. The rotational kinematic equations (SUVAT analogs) apply in this case." }
    ],
    seoMeta: { title: "Angular Acceleration Calculator", description: "Calculate angular acceleration from velocity change and time.", keywords: "angular acceleration, rotational acceleration, rad/s², torque" }
  },
  {
    id: "angular-displacement-calculator",
    name: "Angular Displacement Calculator",
    description: "Calculate angular displacement under constant angular acceleration.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2",
    inputs: [
      { id: "omega0", label: "Initial Angular Velocity (rad/s)", type: "number", defaultValue: 5 },
      { id: "alpha", label: "Angular Acceleration (rad/s²)", type: "number", defaultValue: 2 },
      { id: "t", label: "Time (s)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "theta", label: "Angular Displacement", formula: "omega0 * t + 0.5 * alpha * t^2", unit: "rad" },
      { id: "revolutions", label: "Revolutions", formula: "(omega0 * t + 0.5 * alpha * t^2) / (2 * pi)", unit: "rev" }
    ],
    theory: "Angular displacement is the angle through which a body rotates about a fixed axis. Under constant angular acceleration, the angular displacement follows a quadratic relationship with time — the rotational analog of s = ut + ½at². One complete revolution equals 2π radians (360°).",
    faq: [
      { question: "What is the difference between angular displacement and distance?", answer: "Angular displacement is the angle swept (in radians), while arc length (linear distance) equals radius × angular displacement (s = rθ). Angular displacement is independent of radius." },
      { question: "Is angular displacement a vector?", answer: "For finite rotations, angular displacement does not strictly behave as a vector (rotations don't commute). However, infinitesimal angular displacements are vectors directed along the rotation axis (right-hand rule)." },
      { question: "How many radians is one revolution?", answer: "One complete revolution equals 2π radians ≈ 6.2832 radians = 360 degrees." }
    ],
    seoMeta: { title: "Angular Displacement Calculator", description: "Calculate angular displacement under constant angular acceleration.", keywords: "angular displacement, rotational kinematics, radians, revolutions" }
  },
  {
    id: "angular-frequency-calculator",
    name: "Angular Frequency Calculator",
    description: "Calculate angular frequency (ω) from ordinary frequency or period.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\omega = 2\\pi f = \\frac{2\\pi}{T}",
    inputs: [
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "omega", label: "Angular Frequency", formula: "2 * pi * f", unit: "rad/s" },
      { id: "T_period", label: "Period", formula: "1 / f", unit: "s" }
    ],
    theory: "Angular frequency (ω) represents the rate of rotation in radians per second. It is 2π times the ordinary frequency because one full cycle corresponds to 2π radians. Angular frequency appears naturally in the equations of circular motion, simple harmonic motion, and AC circuits. It simplifies many formulas by eliminating the factor of 2π.",
    faq: [
      { question: "What is the difference between frequency and angular frequency?", answer: "Frequency (f) counts complete cycles per second (Hz). Angular frequency (ω) counts radians per second (rad/s). They are related by ω = 2πf. Angular frequency is preferred in physics equations because it eliminates factors of 2π." },
      { question: "Where is angular frequency used?", answer: "Angular frequency appears in SHM (x = A cos(ωt)), AC circuits (V = V₀ sin(ωt)), wave equations, quantum mechanics (E = ℏω), and anywhere periodic motion is analyzed." },
      { question: "What is the angular frequency of household AC power?", answer: "In the US (60 Hz): ω = 2π × 60 ≈ 377 rad/s. In Europe (50 Hz): ω = 2π × 50 ≈ 314 rad/s." }
    ],
    seoMeta: { title: "Angular Frequency Calculator", description: "Convert between frequency, period, and angular frequency.", keywords: "angular frequency, omega, frequency, period, radians per second" }
  },
  {
    id: "angular-momentum-calculator",
    name: "Angular Momentum Calculator",
    description: "Calculate the angular momentum of a rotating body from its moment of inertia and angular velocity.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "L = I \\cdot \\omega",
    inputs: [
      { id: "I", label: "Moment of Inertia (kg·m²)", type: "number", defaultValue: 2 },
      { id: "omega", label: "Angular Velocity (rad/s)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "L", label: "Angular Momentum", formula: "I * omega", unit: "kg·m²/s" }
    ],
    theory: "Angular momentum is the rotational analog of linear momentum. It is conserved in the absence of external torques — this principle explains why spinning ice skaters speed up when they pull in their arms, why gyroscopes resist tilting, and why planets maintain stable orbits. Angular momentum is a fundamental conservation law in physics, alongside energy and linear momentum.",
    faq: [
      { question: "Why does an ice skater spin faster with arms pulled in?", answer: "Angular momentum L = Iω is conserved. When the skater pulls arms inward, moment of inertia (I) decreases. To keep L constant, angular velocity (ω) must increase proportionally, resulting in a faster spin." },
      { question: "Is angular momentum always conserved?", answer: "Angular momentum is conserved when no external net torque acts on the system. In isolated systems (no external torques), total angular momentum remains constant. Friction and external forces can change angular momentum." },
      { question: "What is the angular momentum of the Earth?", answer: "Earth's rotational angular momentum is approximately 7.07 × 10³³ kg·m²/s. Its orbital angular momentum around the Sun is about 2.66 × 10⁴⁰ kg·m²/s — much larger than its spin angular momentum." }
    ],
    seoMeta: { title: "Angular Momentum Calculator", description: "Calculate angular momentum from moment of inertia and angular velocity.", keywords: "angular momentum, moment of inertia, conservation, rotation physics" }
  },
  {
    id: "angular-velocity-calculator",
    name: "Angular Velocity Calculator",
    description: "Calculate angular velocity from rotational frequency (revolutions per second or Hz).",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\omega = 2\\pi f",
    inputs: [
      { id: "f", label: "Rotational Frequency (Hz or rev/s)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "omega", label: "Angular Velocity", formula: "2 * pi * f", unit: "rad/s" },
      { id: "rpm", label: "RPM", formula: "f * 60", unit: "rev/min" }
    ],
    theory: "Angular velocity describes how fast an object rotates, measured in radians per second. One complete revolution covers 2π radians, so angular velocity ω = 2πf where f is the rotational frequency. Angular velocity is a vector quantity — its direction follows the right-hand rule along the axis of rotation.",
    faq: [
      { question: "How do I convert RPM to rad/s?", answer: "Multiply RPM by 2π/60 ≈ 0.10472. For example, 3000 RPM = 3000 × 2π/60 ≈ 314.16 rad/s." },
      { question: "What is the angular velocity of a clock's second hand?", answer: "A clock's second hand completes one revolution per minute: ω = 2π/60 ≈ 0.1047 rad/s, or about 6°/s." },
      { question: "Is angular velocity a vector?", answer: "Yes, angular velocity is a pseudovector directed along the axis of rotation, following the right-hand rule. When you curl your right hand fingers in the direction of rotation, your thumb points in the direction of ω." }
    ],
    seoMeta: { title: "Angular Velocity Calculator", description: "Calculate angular velocity from frequency.", keywords: "angular velocity, omega, RPM, radians per second, rotation" }
  },
  {
    id: "centrifugal-force-calculator",
    name: "Centrifugal Force Calculator",
    description: "Calculate the centrifugal force experienced in a rotating reference frame.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "F_c = m \\omega^2 r",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "omega", label: "Angular Velocity (rad/s)", type: "number", defaultValue: 10 },
      { id: "r", label: "Radius (m)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "Fc", label: "Centrifugal Force", formula: "m * omega^2 * r", unit: "N" }
    ],
    theory: "Centrifugal force is a fictitious (pseudo) force that appears in rotating reference frames, directed outward from the axis of rotation. While not a real force in an inertial frame, it is essential for analyzing motion in rotating systems like centrifuges, amusement park rides, and rotating space stations. Its magnitude equals mω²r, identical to the centripetal force but opposite in direction.",
    faq: [
      { question: "Is centrifugal force real?", answer: "Centrifugal force is a 'fictitious' or 'pseudo' force — it appears only in rotating (non-inertial) reference frames. In an inertial frame, what feels like outward centrifugal force is actually the absence of sufficient centripetal force. However, it is perfectly valid for calculations within rotating frames." },
      { question: "What is the difference between centrifugal and centripetal force?", answer: "Centripetal force is the real inward force that keeps an object moving in a circle (provided by tension, gravity, friction, etc.). Centrifugal force is the apparent outward force felt in the rotating frame. They have equal magnitude but opposite directions." },
      { question: "How does a centrifuge use centrifugal force?", answer: "A centrifuge spins samples at high speed, creating a strong centrifugal effect that separates substances by density. Denser particles move outward. Medical centrifuges can generate thousands of times Earth's gravity (thousands of g's)." }
    ],
    seoMeta: { title: "Centrifugal Force Calculator", description: "Calculate centrifugal force in a rotating frame.", keywords: "centrifugal force, rotating frame, angular velocity, fictitious force" }
  },
  {
    id: "centrifuge-calculator",
    name: "Centrifuge Calculator",
    description: "Calculate the Relative Centrifugal Force (RCF) in multiples of Earth's gravity for a centrifuge.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\text{RCF} = \\frac{\\omega^2 r}{g}",
    inputs: [
      { id: "r", label: "Rotor Radius (m)", type: "number", defaultValue: 0.1 },
      { id: "rpm_val", label: "Rotational Speed (RPM)", type: "number", defaultValue: 5000 }
    ],
    outputs: [
      { id: "rcf", label: "Relative Centrifugal Force", formula: "(2 * pi * rpm_val / 60)^2 * r / 9.80665", unit: "×g" }
    ],
    theory: "Relative Centrifugal Force (RCF) expresses centrifuge acceleration as a multiple of Earth's gravitational acceleration (g). It provides a standardized way to compare centrifuge protocols independent of rotor size. RCF = ω²r/g, where ω is angular velocity in rad/s. Converting from RPM: ω = 2π × RPM/60.",
    faq: [
      { question: "What is the difference between RPM and RCF?", answer: "RPM is rotational speed; RCF is the actual centrifugal acceleration experienced by the sample. The same RPM produces different RCF values in different-sized rotors. Always report centrifuge protocols in RCF (×g) for reproducibility." },
      { question: "What RCF is used for blood separation?", answer: "Blood cell separation typically uses 1,500–3,000 ×g for 10–15 minutes. Platelet-rich plasma requires lighter centrifugation at about 200–300 ×g." },
      { question: "How do I convert RPM to RCF?", answer: "RCF = 1.118 × 10⁻⁵ × r × RPM², where r is the rotor radius in centimeters and RPM is revolutions per minute." }
    ],
    seoMeta: { title: "Centrifuge Calculator", description: "Calculate Relative Centrifugal Force (RCF) from RPM and rotor radius.", keywords: "centrifuge calculator, RCF, RPM to g-force, relative centrifugal force" }
  },
  {
    id: "centripetal-force-calculator",
    name: "Centripetal Force Calculator",
    description: "Calculate the centripetal force required to keep an object moving in a circular path.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "F_c = \\frac{mv^2}{r}",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "vel", label: "Tangential Velocity (m/s)", type: "number", defaultValue: 10 },
      { id: "r", label: "Radius of Circular Path (m)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "Fc", label: "Centripetal Force", formula: "m * vel^2 / r", unit: "N" },
      { id: "ac", label: "Centripetal Acceleration", formula: "vel^2 / r", unit: "m/s²" }
    ],
    theory: "Centripetal force is the net inward force that maintains circular motion. It always points toward the center of the circular path and is perpendicular to the velocity. It does no work on the object — it only changes the direction of motion, not the speed. Centripetal force can be provided by gravity (orbits), tension (ball on a string), friction (car turning), or normal force (banked curve).",
    faq: [
      { question: "What provides centripetal force?", answer: "Centripetal force is not a new type of force — it is provided by existing forces directed toward the center. For orbiting satellites, it's gravity. For a car turning, it's friction. For a ball on a string, it's tension." },
      { question: "Does centripetal force do work?", answer: "No, centripetal force is always perpendicular to the velocity, so it does zero work (W = F·d·cos90° = 0). It changes the direction of motion but not the speed, so kinetic energy remains constant in uniform circular motion." },
      { question: "What happens if centripetal force is removed?", answer: "The object flies off tangentially in a straight line (Newton's first law). This is why mud flies off a spinning tire tangentially and why a ball released from circular motion travels in a straight line." }
    ],
    seoMeta: { title: "Centripetal Force Calculator", description: "Calculate centripetal force for circular motion.", keywords: "centripetal force, circular motion, centripetal acceleration, radius" }
  },
  {
    id: "circular-motion-calculator",
    name: "Circular Motion Calculator",
    description: "Calculate the tangential velocity of an object in uniform circular motion from radius and period.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "v = \\frac{2\\pi r}{T}",
    inputs: [
      { id: "r", label: "Radius (m)", type: "number", defaultValue: 5 },
      { id: "T_period", label: "Period (s)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "vel", label: "Tangential Velocity", formula: "2 * pi * r / T_period", unit: "m/s" },
      { id: "freq", label: "Frequency", formula: "1 / T_period", unit: "Hz" }
    ],
    theory: "In uniform circular motion, an object moves along a circular path at constant speed. The tangential velocity v = 2πr/T represents the linear speed, which equals the circumference divided by the period. Although the speed is constant, the velocity (a vector) constantly changes direction, requiring a centripetal acceleration directed toward the center.",
    faq: [
      { question: "Is velocity constant in uniform circular motion?", answer: "Speed (magnitude) is constant, but velocity (a vector) is not — it continuously changes direction. This changing velocity means there is acceleration (centripetal acceleration = v²/r) even though the speed stays the same." },
      { question: "What is the period of a geosynchronous satellite?", answer: "A geosynchronous satellite has a period of exactly 24 hours (86,400 seconds), matching Earth's rotation. At an altitude of about 35,786 km, its orbital velocity is approximately 3.07 km/s." },
      { question: "How does radius affect speed for the same period?", answer: "For the same period T, larger radius means greater tangential velocity (v = 2πr/T). This is why the outer edge of a spinning disk moves faster than points near the center — they cover a larger circumference in the same time." }
    ],
    seoMeta: { title: "Circular Motion Calculator", description: "Calculate tangential velocity for uniform circular motion.", keywords: "circular motion, tangential velocity, period, radius, uniform motion" }
  },
  {
    id: "coriolis-effect-calculator",
    name: "Coriolis Effect Calculator",
    description: "Calculate the magnitude of the Coriolis force on a moving object in a rotating reference frame.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "F_{\\text{Cor}} = 2m\\omega v",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1 },
      { id: "omega", label: "Angular Velocity of Frame (rad/s)", type: "number", defaultValue: 7.2921e-5, helpText: "Earth: 7.2921 × 10⁻⁵ rad/s" },
      { id: "vel", label: "Velocity of Object (m/s)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "Fcor", label: "Coriolis Force", formula: "2 * m * omega * vel", unit: "N" }
    ],
    theory: "The Coriolis effect is a fictitious force that appears in rotating reference frames, causing moving objects to deflect perpendicular to their velocity. On Earth, it deflects winds to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, driving large-scale weather patterns, ocean currents, and the rotation of cyclones. The magnitude is F = 2mωv sin(φ), where φ is the latitude.",
    faq: [
      { question: "Does the Coriolis effect determine which way toilets flush?", answer: "No, that is a myth. The Coriolis force is far too weak to affect small-scale water flows like sinks and toilets. The direction of drainage is determined by the basin shape, jet direction, and initial water motion." },
      { question: "How does the Coriolis effect influence weather?", answer: "The Coriolis force deflects air masses moving from high to low pressure, causing winds to spiral rather than flow directly. This creates clockwise rotation of high-pressure systems and counterclockwise hurricanes in the Northern Hemisphere." },
      { question: "Does the Coriolis effect affect long-range shooting?", answer: "Yes, at very long ranges (1+ km). Military snipers account for Coriolis deflection, which can shift bullet impact by several centimeters at extreme distances, depending on latitude and shooting direction." }
    ],
    seoMeta: { title: "Coriolis Effect Calculator", description: "Calculate the Coriolis force on a moving object.", keywords: "Coriolis effect, Coriolis force, rotating frame, Earth rotation, weather" }
  },
  {
    id: "damping-ratio-calculator",
    name: "Damping Ratio Calculator",
    description: "Calculate the damping ratio of a spring-mass-damper system.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\zeta = \\frac{c}{2\\sqrt{km}}",
    inputs: [
      { id: "c", label: "Damping Coefficient (N·s/m)", type: "number", defaultValue: 10 },
      { id: "k", label: "Spring Constant (N/m)", type: "number", defaultValue: 100 },
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "zeta", label: "Damping Ratio", formula: "c / (2 * sqrt(k * m))", unit: "" }
    ],
    theory: "The damping ratio (ζ) characterizes how oscillations decay in a damped system. ζ < 1 is underdamped (oscillates with decreasing amplitude), ζ = 1 is critically damped (fastest return without oscillation), and ζ > 1 is overdamped (slow return without oscillation). Critical damping is ideal for car suspensions, door closers, and instrument needles.",
    faq: [
      { question: "What do the damping ratio values mean?", answer: "ζ < 1: Underdamped — system oscillates with decaying amplitude. ζ = 1: Critically damped — returns to equilibrium fastest without oscillating. ζ > 1: Overdamped — returns slowly without oscillating. Most engineering systems target ζ ≈ 0.5–0.7." },
      { question: "What is the damping ratio of a car suspension?", answer: "Most car shock absorbers are designed for ζ ≈ 0.2–0.4 (underdamped) to allow some oscillation for comfort while quickly settling. Sports cars use higher damping ratios (ζ ≈ 0.5–0.7) for better handling." },
      { question: "What is critical damping?", answer: "Critical damping (ζ = 1) is the minimum damping that prevents oscillation. The critical damping coefficient is c_cr = 2√(km). It provides the fastest possible return to equilibrium without overshoot." }
    ],
    seoMeta: { title: "Damping Ratio Calculator", description: "Calculate the damping ratio of a spring-mass-damper system.", keywords: "damping ratio, critical damping, underdamped, overdamped, vibration" }
  },
  {
    id: "flywheel-energy-storage-calculator",
    name: "Flywheel Energy Storage Calculator",
    description: "Calculate the kinetic energy stored in a spinning flywheel.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "E = \\frac{1}{2} I \\omega^2",
    inputs: [
      { id: "I", label: "Moment of Inertia (kg·m²)", type: "number", defaultValue: 5 },
      { id: "omega", label: "Angular Velocity (rad/s)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "E", label: "Stored Energy", formula: "0.5 * I * omega^2", unit: "J" },
      { id: "E_kwh", label: "Energy (kWh)", formula: "0.5 * I * omega^2 / 3600000", unit: "kWh" }
    ],
    theory: "Flywheel energy storage uses a rotating mass to store kinetic energy. The stored energy E = ½Iω² depends on moment of inertia and the square of angular velocity. Modern flywheel batteries use carbon fiber rotors spinning at 20,000–60,000 RPM in vacuum enclosures, achieving high power density and rapid charge/discharge cycles. They are used in UPS systems, regenerative braking, and grid stabilization.",
    faq: [
      { question: "How efficient are flywheel energy storage systems?", answer: "Modern flywheel systems achieve 85–95% round-trip efficiency with very low losses from magnetic bearings and vacuum enclosures. They can charge and discharge much faster than chemical batteries." },
      { question: "Why spin faster rather than use a heavier flywheel?", answer: "Energy scales with ω² but only linearly with I. Doubling the speed quadruples the energy, while doubling the mass only doubles it. This is why high-performance flywheels prioritize high RPM with lightweight, strong materials like carbon fiber." },
      { question: "What are the advantages of flywheels over batteries?", answer: "Flywheels offer very high power density, virtually unlimited cycle life (no degradation), fast response time, and no hazardous chemicals. However, they have lower energy density than lithium batteries and require containment for safety." }
    ],
    seoMeta: { title: "Flywheel Energy Storage Calculator", description: "Calculate rotational kinetic energy stored in a flywheel.", keywords: "flywheel energy, rotational energy storage, kinetic energy, moment of inertia" }
  },
  {
    id: "frequency-calculator",
    name: "Frequency Calculator",
    description: "Calculate frequency from the period of oscillation.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "f = \\frac{1}{T}",
    inputs: [
      { id: "T_period", label: "Period (s)", type: "number", defaultValue: 0.02 }
    ],
    outputs: [
      { id: "freq", label: "Frequency", formula: "1 / T_period", unit: "Hz" },
      { id: "omega", label: "Angular Frequency", formula: "2 * pi / T_period", unit: "rad/s" }
    ],
    theory: "Frequency measures how many complete cycles of a periodic event occur per unit time. The SI unit is Hertz (Hz), equal to one cycle per second. Frequency is the reciprocal of the period: f = 1/T. It is a fundamental concept in wave mechanics, electronics, acoustics, and signal processing.",
    faq: [
      { question: "What is 1 Hertz?", answer: "One Hertz (Hz) equals one complete cycle per second. Named after Heinrich Hertz who first proved the existence of electromagnetic waves. Common prefixes: kHz (10³ Hz), MHz (10⁶ Hz), GHz (10⁹ Hz)." },
      { question: "What is the frequency range of human hearing?", answer: "Humans can typically hear frequencies from about 20 Hz to 20,000 Hz (20 kHz). Sensitivity is greatest around 2,000–5,000 Hz. Hearing range decreases with age, particularly at higher frequencies." },
      { question: "How are frequency and wavelength related?", answer: "For any wave: v = fλ, where v is wave speed, f is frequency, and λ is wavelength. Higher frequency means shorter wavelength for the same wave speed. For light in vacuum: λ = c/f." }
    ],
    seoMeta: { title: "Frequency Calculator", description: "Calculate frequency from period.", keywords: "frequency, period, Hertz, oscillation, wave frequency" }
  },
  {
    id: "harmonic-wave-equation-calculator",
    name: "Harmonic Wave Equation Calculator",
    description: "Calculate the displacement of a harmonic wave at a given position and time.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "y = A \\sin(2\\pi ft - 2\\pi x / \\lambda)",
    inputs: [
      { id: "A", label: "Amplitude (m)", type: "number", defaultValue: 0.1 },
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 5 },
      { id: "t", label: "Time (s)", type: "number", defaultValue: 0.5 },
      { id: "x", label: "Position (m)", type: "number", defaultValue: 1 },
      { id: "lambda", label: "Wavelength (m)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "y", label: "Wave Displacement", formula: "A * sin(2 * pi * f * t - 2 * pi * x / lambda)", unit: "m" }
    ],
    theory: "The harmonic wave equation describes a sinusoidal traveling wave. The displacement y at position x and time t depends on amplitude A, frequency f, and wavelength λ. The argument (2πft - 2πx/λ) is the phase of the wave. This equation models sound waves, electromagnetic waves, water waves, and vibrations in strings.",
    faq: [
      { question: "What does each part of the wave equation represent?", answer: "A is the maximum displacement (amplitude). The term 2πft represents the time oscillation. The term 2πx/λ represents the spatial oscillation. Together they describe a wave moving in the +x direction with speed v = fλ." },
      { question: "What is the difference between transverse and longitudinal waves?", answer: "In transverse waves (light, strings), displacement is perpendicular to wave propagation. In longitudinal waves (sound), displacement is parallel to propagation. Both follow the same mathematical wave equation." },
      { question: "What is wave phase?", answer: "Phase is the argument of the sine function (2πft - 2πx/λ), measured in radians. Points with the same phase are at the same stage of their oscillation cycle. A phase difference of 2π corresponds to one full cycle." }
    ],
    seoMeta: { title: "Harmonic Wave Equation Calculator", description: "Calculate displacement of a traveling harmonic wave.", keywords: "wave equation, harmonic wave, sine wave, amplitude, wavelength, frequency" }
  },
  {
    id: "kinetic-energy-of-a-pendulum-calculator",
    name: "Kinetic Energy of a Pendulum Calculator",
    description: "Calculate the maximum kinetic energy of a pendulum at its lowest point from its swing angle.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "KE_{\\max} = mgL(1 - \\cos\\theta)",
    inputs: [
      { id: "m", label: "Bob Mass (kg)", type: "number", defaultValue: 1 },
      { id: "L", label: "Pendulum Length (m)", type: "number", defaultValue: 1 },
      { id: "theta_deg", label: "Maximum Swing Angle (°)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "KE", label: "Maximum Kinetic Energy", formula: "m * 9.80665 * L * (1 - cos(theta_deg * pi / 180))", unit: "J" },
      { id: "v_max", label: "Maximum Speed", formula: "sqrt(2 * 9.80665 * L * (1 - cos(theta_deg * pi / 180)))", unit: "m/s" }
    ],
    theory: "At its highest point, a pendulum has maximum potential energy and zero kinetic energy. At the lowest point, all PE converts to KE (conservation of energy). The height gained is h = L(1 - cosθ), so KE_max = mgh = mgL(1 - cosθ). This also gives the maximum velocity at the bottom of the swing.",
    faq: [
      { question: "Why does the mass cancel for velocity?", answer: "The maximum velocity v = √(2gL(1 - cosθ)) is independent of mass because both KE (½mv²) and PE (mgh) are proportional to m. The mass cancels when equating them, just like in free fall." },
      { question: "Does a pendulum really conserve energy?", answer: "An ideal pendulum conserves mechanical energy perfectly. Real pendulums lose energy to air resistance and friction at the pivot, causing the amplitude to gradually decrease. A clock pendulum requires a small energy input (from the spring/weight mechanism) to maintain constant amplitude." },
      { question: "What is the maximum speed of a grandfather clock pendulum?", answer: "A typical grandfather clock has a 1-meter pendulum with about 3° amplitude. The maximum speed at the bottom is approximately v = √(2×9.81×1×(1-cos3°)) ≈ 0.16 m/s." }
    ],
    seoMeta: { title: "Kinetic Energy of a Pendulum Calculator", description: "Calculate pendulum kinetic energy and maximum speed.", keywords: "pendulum energy, kinetic energy, pendulum speed, conservation of energy" }
  },
  {
    id: "mass-moment-of-inertia-calculator",
    name: "Mass Moment of Inertia Calculator",
    description: "Calculate the moment of inertia for a point mass rotating about an axis at a given distance.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "I = mr^2",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "r", label: "Distance from Axis (m)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "I_val", label: "Moment of Inertia", formula: "m * r^2", unit: "kg·m²" }
    ],
    theory: "Moment of inertia (I) is the rotational analog of mass — it measures resistance to angular acceleration. For a point mass, I = mr², where r is the perpendicular distance from the rotation axis. For extended bodies, I is computed by integrating r²dm. Moment of inertia depends on both mass distribution and axis choice; it always increases when mass is farther from the axis.",
    faq: [
      { question: "Why does mass distribution matter?", answer: "A hollow cylinder has greater moment of inertia than a solid cylinder of the same mass because more mass is located far from the axis. This is why a solid ball rolls down a hill faster than a hollow one — less rotational inertia means more translational acceleration." },
      { question: "What is the parallel axis theorem?", answer: "If you know the moment of inertia about the center of mass (I_cm), you can find it about any parallel axis at distance d: I = I_cm + md². This is useful for calculating inertia about pivot points offset from the center of mass." },
      { question: "What are common moments of inertia?", answer: "Solid sphere: ⅖mr². Hollow sphere: ⅔mr². Solid cylinder (about axis): ½mr². Thin rod (about center): 1/12 mL². Thin rod (about end): ⅓mL²." }
    ],
    seoMeta: { title: "Mass Moment of Inertia Calculator", description: "Calculate moment of inertia for rotating bodies.", keywords: "moment of inertia, rotational inertia, mass distribution, angular acceleration" }
  },
  {
    id: "physical-pendulum-calculator",
    name: "Physical Pendulum Calculator",
    description: "Calculate the oscillation period of a physical (compound) pendulum.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "T = 2\\pi\\sqrt{\\frac{I}{mgd}}",
    inputs: [
      { id: "I", label: "Moment of Inertia about Pivot (kg·m²)", type: "number", defaultValue: 0.5 },
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 2 },
      { id: "d", label: "Distance: Pivot to Center of Mass (m)", type: "number", defaultValue: 0.3 }
    ],
    outputs: [
      { id: "T_val", label: "Period", formula: "2 * pi * sqrt(I / (m * 9.80665 * d))", unit: "s" }
    ],
    theory: "A physical pendulum is any rigid body oscillating about a fixed pivot point that doesn't pass through its center of mass. Unlike a simple pendulum (point mass on a string), its period depends on the moment of inertia about the pivot point and the distance from the pivot to the center of mass. For small angle oscillations, the motion is approximately simple harmonic.",
    faq: [
      { question: "How does a physical pendulum differ from a simple pendulum?", answer: "A simple pendulum assumes a point mass on a massless string. A physical pendulum accounts for the actual mass distribution of the swinging body, using moment of inertia instead of just mL. The simple pendulum is a special case where I = mL²." },
      { question: "What is the center of oscillation?", answer: "The center of oscillation is the point at which a simple pendulum would have the same period. Its distance from the pivot equals I/(md). Interestingly, if you invert the pendulum and pivot at the center of oscillation, the period stays the same." },
      { question: "When does the small-angle approximation fail?", answer: "The formula T = 2π√(I/mgd) assumes sin(θ) ≈ θ, which is accurate within 1% for angles up to about 23°. For larger amplitudes, the period increases and the motion is no longer perfectly sinusoidal." }
    ],
    seoMeta: { title: "Physical Pendulum Calculator", description: "Calculate the period of a compound pendulum.", keywords: "physical pendulum, compound pendulum, moment of inertia, oscillation period" }
  },
  {
    id: "rotational-kinetic-energy-calculator",
    name: "Rotational Kinetic Energy Calculator",
    description: "Calculate the kinetic energy of a rotating body from its moment of inertia and angular velocity.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "KE_{\\text{rot}} = \\frac{1}{2} I \\omega^2",
    inputs: [
      { id: "I", label: "Moment of Inertia (kg·m²)", type: "number", defaultValue: 2 },
      { id: "omega", label: "Angular Velocity (rad/s)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "KE_rot", label: "Rotational Kinetic Energy", formula: "0.5 * I * omega^2", unit: "J" }
    ],
    theory: "Rotational kinetic energy is the energy associated with rotational motion, analogous to translational kinetic energy (½mv²). A rolling object possesses both translational and rotational KE. The total kinetic energy of a rolling body is KE_total = ½mv² + ½Iω². For a solid sphere rolling without slipping, rotational KE is 2/7 of total KE.",
    faq: [
      { question: "Does a spinning top have kinetic energy?", answer: "Yes, a spinning top has rotational kinetic energy KE = ½Iω². A top spinning at 100 rad/s with I = 0.001 kg·m² has 5 J of rotational energy. This energy gradually dissipates through friction." },
      { question: "Why do rolling objects not all accelerate equally down a hill?", answer: "Different shapes have different I/mr² ratios. A solid sphere (I = 2/5 mr²) rolls faster than a hollow cylinder (I = mr²) because less energy goes into rotation and more into translation. Shape matters, mass doesn't!" },
      { question: "What fraction of a rolling ball's energy is rotational?", answer: "For a solid ball rolling without slipping: KE_rot/KE_total = (2/5)/(1 + 2/5) = 2/7 ≈ 28.6%. The remaining 71.4% is translational kinetic energy." }
    ],
    seoMeta: { title: "Rotational Kinetic Energy Calculator", description: "Calculate rotational KE from moment of inertia and angular velocity.", keywords: "rotational kinetic energy, angular velocity, moment of inertia, rolling" }
  },
  {
    id: "rotational-stiffness-calculator",
    name: "Rotational Stiffness Calculator",
    description: "Calculate rotational (torsional) stiffness from applied torque and resulting angular displacement.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "k_\\theta = \\frac{\\tau}{\\theta}",
    inputs: [
      { id: "tau", label: "Applied Torque (N·m)", type: "number", defaultValue: 50 },
      { id: "theta_rad", label: "Angular Displacement (rad)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "k_rot", label: "Rotational Stiffness", formula: "tau / theta_rad", unit: "N·m/rad" }
    ],
    theory: "Rotational stiffness (torsional stiffness) is the rotational analog of a spring constant. It measures the torque required per unit angular displacement. Higher rotational stiffness means the system resists twisting more strongly. It is critical in shaft design, structural connections, and suspension systems.",
    faq: [
      { question: "What is the relationship to linear spring constant?", answer: "Rotational stiffness (N·m/rad) is the torsional analog of linear spring constant (N/m). For a coil spring, k_torsional = k_linear × r², where r is the effective moment arm. Both follow Hooke's Law in their respective domains." },
      { question: "How is rotational stiffness used in engineering?", answer: "Rotational stiffness is critical for designing drive shafts, suspension anti-roll bars, building connections, and robot joints. Insufficient torsional stiffness leads to excessive twisting, vibration, and potential failure." },
      { question: "What factors affect shaft torsional stiffness?", answer: "Shaft torsional stiffness depends on material shear modulus (G), polar moment of inertia (J), and length (L): k = GJ/L. Larger diameter, shorter length, and stiffer material all increase torsional stiffness." }
    ],
    seoMeta: { title: "Rotational Stiffness Calculator", description: "Calculate torsional stiffness from torque and angular displacement.", keywords: "rotational stiffness, torsional stiffness, torque, angular displacement, shaft design" }
  },
  {
    id: "simple-harmonic-motion-calculator",
    name: "Simple Harmonic Motion Calculator",
    description: "Calculate the displacement of an object undergoing simple harmonic motion at a given time.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "x(t) = A \\cos(2\\pi f t)",
    inputs: [
      { id: "A", label: "Amplitude (m)", type: "number", defaultValue: 0.1 },
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 2 },
      { id: "t", label: "Time (s)", type: "number", defaultValue: 0.25 }
    ],
    outputs: [
      { id: "x_val", label: "Displacement", formula: "A * cos(2 * pi * f * t)", unit: "m" },
      { id: "v_val", label: "Velocity", formula: "-A * 2 * pi * f * sin(2 * pi * f * t)", unit: "m/s" }
    ],
    theory: "Simple Harmonic Motion (SHM) occurs when a restoring force is proportional to displacement from equilibrium (F = -kx). The resulting motion is sinusoidal: x(t) = A cos(ωt + φ). SHM is the foundation of oscillatory physics — it describes springs, pendulums, vibrating atoms, and AC circuits. Any small oscillation about a stable equilibrium is approximately SHM.",
    faq: [
      { question: "What makes motion 'simple harmonic'?", answer: "SHM requires two conditions: (1) a restoring force proportional to displacement (F ∝ -x), and (2) no energy dissipation. Real systems approximate SHM for small displacements from equilibrium." },
      { question: "What is the relationship between SHM and circular motion?", answer: "SHM is the projection of uniform circular motion onto a diameter. If a point moves in a circle at constant angular velocity ω, its x-coordinate undergoes SHM with x = A cos(ωt). This connection explains why sine and cosine naturally appear in SHM." },
      { question: "When does the velocity reach maximum?", answer: "Velocity is maximum (v_max = Aω = 2πfA) when the object passes through equilibrium (x = 0). At the extreme positions (x = ±A), velocity is zero momentarily as the object reverses direction." }
    ],
    seoMeta: { title: "Simple Harmonic Motion Calculator", description: "Calculate SHM displacement and velocity at any time.", keywords: "simple harmonic motion, SHM, oscillation, spring mass, amplitude frequency" }
  },
  {
    id: "simple-pendulum-calculator",
    name: "Simple Pendulum Calculator",
    description: "Calculate the period of a simple pendulum from its string length.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "T = 2\\pi\\sqrt{\\frac{L}{g}}",
    inputs: [
      { id: "L", label: "Pendulum Length (m)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "T_val", label: "Period", formula: "2 * pi * sqrt(L / 9.80665)", unit: "s" },
      { id: "f_val", label: "Frequency", formula: "1 / (2 * pi * sqrt(L / 9.80665))", unit: "Hz" }
    ],
    theory: "The simple pendulum is an idealized model: a point mass on a massless, inextensible string. For small angles (< ~15°), the period depends only on length and gravitational acceleration — not on mass or amplitude. This remarkable property made pendulums the most accurate timekeeping mechanism for nearly 300 years, from Huygens' pendulum clock (1656) to the quartz revolution.",
    faq: [
      { question: "Why doesn't mass affect the period?", answer: "A heavier bob has more gravitational force (mg sin θ) but also more inertia (m). The mass cancels in Newton's second law: ma = -mg sin θ → a = -g sin θ. The acceleration depends only on g and angle, not mass." },
      { question: "How long is a pendulum with a 1-second period?", answer: "A 'seconds pendulum' (1 second per half-swing, 2 second period) has length L = g(T/2π)² ≈ 0.994 m — very close to one meter. This is not coincidental; the meter was originally considered to be defined this way." },
      { question: "Does a pendulum swing forever?", answer: "No. Air resistance and friction at the pivot gradually remove energy. A high-quality pendulum clock pendulum loses about 0.01% of its energy per swing. The clock mechanism provides a small push each swing to compensate." }
    ],
    seoMeta: { title: "Simple Pendulum Calculator", description: "Calculate pendulum period from string length.", keywords: "simple pendulum, period, pendulum length, gravity, oscillation" }
  },
  {
    id: "torque-calculator",
    name: "Torque Calculator",
    description: "Calculate the torque produced by a force applied at a distance from the pivot point.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\tau = F \\cdot r \\cdot \\sin\\theta",
    inputs: [
      { id: "F", label: "Applied Force (N)", type: "number", defaultValue: 50 },
      { id: "r", label: "Lever Arm Length (m)", type: "number", defaultValue: 0.3 },
      { id: "theta_deg", label: "Angle Between Force and Lever (°)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "torque_val", label: "Torque", formula: "F * r * sin(theta_deg * pi / 180)", unit: "N·m" }
    ],
    theory: "Torque (moment of force) is the rotational analog of force. It measures the tendency of a force to cause rotation about an axis. Maximum torque occurs when the force is perpendicular to the lever arm (θ = 90°). Torque is the cross product τ = r × F, with magnitude τ = rF sin θ. It is measured in Newton-meters (N·m), which is dimensionally equivalent to Joules but represents a different physical quantity.",
    faq: [
      { question: "How is torque different from force?", answer: "Force causes linear acceleration; torque causes angular acceleration. Torque depends on where and at what angle the force is applied relative to the pivot. The same force produces more torque when applied farther from the pivot or more perpendicularly." },
      { question: "Why do we use longer wrenches?", answer: "Torque = Force × distance. A longer wrench (lever arm) produces more torque for the same applied force. This is why breaker bars and cheater pipes help loosen stubborn bolts — they increase the effective lever arm length." },
      { question: "Is torque the same as work/energy?", answer: "Although both have units of N·m, they are different concepts. Work is the dot product F·d (scalar), while torque is the cross product r × F (vector). Torque represents a rotational tendency, while work represents energy transfer." }
    ],
    seoMeta: { title: "Torque Calculator", description: "Calculate torque from force, lever arm, and angle.", keywords: "torque, moment of force, lever arm, rotational force, Newton-meter" }
  },
  {
    id: "wavelength-calculator",
    name: "Wavelength Calculator",
    description: "Calculate the wavelength of a wave from its speed and frequency.",
    category: "physics",
    subcategory: "rotational-periodic",
    scientificFormula: "\\lambda = \\frac{v}{f}",
    inputs: [
      { id: "v_wave", label: "Wave Speed (m/s)", type: "number", defaultValue: 343, helpText: "Sound in air: 343, Light: 3×10⁸" },
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 440 }
    ],
    outputs: [
      { id: "lambda_val", label: "Wavelength", formula: "v_wave / f", unit: "m" }
    ],
    theory: "Wavelength is the spatial period of a wave — the distance between successive crests (or any two corresponding points). It is universally related to wave speed and frequency by λ = v/f. This applies to all waves: sound, light, water, seismic, radio, etc. For light in vacuum, the speed is constant (c = 3×10⁸ m/s), so wavelength uniquely determines color.",
    faq: [
      { question: "What is the wavelength of middle A (440 Hz)?", answer: "In air at room temperature (v ≈ 343 m/s): λ = 343/440 ≈ 0.78 m (about 2.5 feet). This is why sound waves can diffract around everyday objects — their wavelengths are comparable in size." },
      { question: "What wavelengths can humans see?", answer: "Visible light spans about 380 nm (violet) to 700 nm (red). Shorter wavelengths (UV, X-rays, gamma rays) and longer wavelengths (infrared, microwave, radio) are invisible to human eyes." },
      { question: "Does wavelength change in different media?", answer: "Yes! When a wave enters a different medium, its frequency stays the same but its speed changes, which changes the wavelength. For example, light has shorter wavelength in glass than in air because it travels slower in glass." }
    ],
    seoMeta: { title: "Wavelength Calculator", description: "Calculate wavelength from wave speed and frequency.", keywords: "wavelength, frequency, wave speed, electromagnetic spectrum, sound waves" }
  },

  // ════════════════════════════════════════════════════════════════════════════
  // OPTICS AND LIGHT 🔍
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "angular-resolution-calculator",
    name: "Angular Resolution Calculator",
    description: "Calculate the angular resolution of an optical system using the Rayleigh criterion.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\theta = 1.22 \\frac{\\lambda}{D}",
    inputs: [
      { id: "lambda_m", label: "Wavelength (m)", type: "number", defaultValue: 550e-9, helpText: "Green light ≈ 550 nm = 550×10⁻⁹ m" },
      { id: "D", label: "Aperture Diameter (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "theta_rad", label: "Angular Resolution", formula: "1.22 * lambda_m / D", unit: "rad" },
      { id: "theta_arcsec", label: "Angular Resolution", formula: "1.22 * lambda_m / D * 206265", unit: "arcseconds" }
    ],
    theory: "The Rayleigh criterion defines the minimum angular separation at which two point sources can be distinguished by a circular aperture. It arises from diffraction: light passing through a finite aperture produces an Airy pattern. Two sources are 'just resolved' when the central maximum of one falls on the first minimum of the other. Larger apertures and shorter wavelengths give better (smaller) angular resolution.",
    faq: [
      { question: "Why do telescopes need large mirrors?", answer: "Angular resolution improves (decreases) with larger aperture: θ = 1.22λ/D. A 10-meter telescope resolves 10× finer detail than a 1-meter telescope at the same wavelength. This is the primary motivation for building large telescopes." },
      { question: "What limits resolution in practice?", answer: "For ground-based telescopes, atmospheric turbulence ('seeing') typically limits resolution to ~1 arcsecond regardless of aperture. Adaptive optics and space telescopes (like Hubble) overcome this limitation." },
      { question: "What is the resolution of the human eye?", answer: "The human pupil is about 2–7 mm. At 550 nm (green), the diffraction limit is about 1 arcminute for a 2mm pupil. This matches the typical spacing of retinal cone cells, suggesting the eye is near diffraction-limited." }
    ],
    seoMeta: { title: "Angular Resolution Calculator", description: "Calculate diffraction-limited angular resolution using Rayleigh criterion.", keywords: "angular resolution, Rayleigh criterion, diffraction limit, aperture, telescope" }
  },
  {
    id: "aperture-area-calculator",
    name: "Aperture Area Calculator",
    description: "Calculate the area of a circular aperture (lens or mirror) from its diameter.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "A = \\pi \\left(\\frac{D}{2}\\right)^2",
    inputs: [
      { id: "D", label: "Aperture Diameter (m)", type: "number", defaultValue: 0.2 }
    ],
    outputs: [
      { id: "area", label: "Aperture Area", formula: "pi * (D / 2)^2", unit: "m²" }
    ],
    theory: "The aperture area of an optical system determines its light-gathering capability. Larger apertures collect more photons, allowing detection of fainter objects and shorter exposure times. The area scales with the square of the diameter, so doubling the diameter quadruples the light-gathering power. In photography, the f-number (focal length / diameter) controls the effective aperture area.",
    faq: [
      { question: "Why does aperture area matter in astronomy?", answer: "A telescope's light-gathering power is proportional to its aperture area. A telescope with twice the diameter collects 4× more light, allowing it to see objects 4× fainter or take images 4× faster." },
      { question: "How does f-number relate to aperture?", answer: "The f-number = focal length / aperture diameter. A lower f-number means a larger relative aperture, admitting more light per unit area on the sensor. Going from f/4 to f/2.8 doubles the aperture area." },
      { question: "What is the aperture of the human eye?", answer: "The human pupil ranges from about 2 mm (bright light) to 7 mm (dark). The corresponding areas are about 3.1 mm² to 38.5 mm² — a 12:1 ratio that helps the eye adapt to varying light levels." }
    ],
    seoMeta: { title: "Aperture Area Calculator", description: "Calculate the area of a circular aperture.", keywords: "aperture area, circular aperture, lens diameter, light gathering, telescope" }
  },
  {
    id: "binoculars-range-calculator",
    name: "Binoculars Range Calculator",
    description: "Estimate the maximum effective observation range of binoculars based on magnification and target size.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "R = \\frac{h \\cdot M \\cdot 1000}{s}",
    inputs: [
      { id: "h", label: "Target Height (m)", type: "number", defaultValue: 1.8 },
      { id: "M_mag", label: "Magnification", type: "number", defaultValue: 10 },
      { id: "obj_size", label: "Minimum Apparent Size (mm)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "range_m", label: "Effective Range", formula: "(h * M_mag * 1000) / obj_size", unit: "m" }
    ],
    theory: "Binocular range depends on magnification power, target size, and the minimum resolvable apparent size. Magnification brings distant objects closer by a factor of M×, making a target at distance R appear as if it were at R/M. Higher magnification extends range but narrows the field of view and amplifies hand shake. Objective lens diameter affects brightness and low-light performance.",
    faq: [
      { question: "What do binocular numbers like 10×42 mean?", answer: "10×42 means 10× magnification and 42mm objective lens diameter. Magnification determines how close objects appear; objective diameter determines brightness and light-gathering (larger = brighter image, especially in low light)." },
      { question: "Why is more magnification not always better?", answer: "Higher magnification narrows field of view, amplifies hand tremor, and reduces image brightness. Above ~10× handheld, image shake becomes a problem. High-magnification binoculars (15×+) typically require a tripod." },
      { question: "What is exit pupil and why does it matter?", answer: "Exit pupil = objective diameter / magnification. 10×42 binoculars have a 4.2mm exit pupil. For bright daytime viewing, 2–3mm is fine. For low-light, astronomy, or aging eyes, 5–7mm exit pupil is preferred." }
    ],
    seoMeta: { title: "Binoculars Range Calculator", description: "Calculate effective observation range of binoculars.", keywords: "binoculars range, magnification, observation distance, telescope range" }
  },
  {
    id: "blackbody-radiation-calculator",
    name: "Blackbody Radiation Calculator",
    description: "Calculate the total radiant emittance of a blackbody at a given temperature using the Stefan-Boltzmann law.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "j = \\sigma T^4",
    inputs: [
      { id: "T_temp", label: "Temperature (K)", type: "number", defaultValue: 5778, helpText: "Sun surface: 5778 K, Room temp: 293 K" }
    ],
    outputs: [
      { id: "j_val", label: "Radiant Emittance", formula: "5.670374419e-8 * T_temp^4", unit: "W/m²" },
      { id: "peak_nm", label: "Peak Wavelength (Wien's Law)", formula: "2897800 / T_temp", unit: "nm" }
    ],
    theory: "A blackbody is an idealized object that absorbs all incident radiation and emits thermal radiation based solely on its temperature. The Stefan-Boltzmann law states that total emitted power per unit area scales as T⁴, where σ = 5.67 × 10⁻⁸ W/(m²·K⁴). Wien's displacement law gives the peak emission wavelength: λ_max = 2,897,800/T nm. Hotter objects radiate exponentially more energy and at shorter wavelengths.",
    faq: [
      { question: "What is the peak wavelength of the Sun?", answer: "The Sun's surface temperature is ~5,778 K, giving a peak wavelength of ~502 nm (blue-green). The Sun appears yellow/white because it emits a broad spectrum across all visible wavelengths." },
      { question: "Why do hot objects glow red, then white?", answer: "As temperature increases, the peak wavelength shifts from infrared to visible red (~700 nm at ~4,000 K), then to blue (~300 nm at ~10,000 K). 'White hot' objects emit across all visible wavelengths simultaneously." },
      { question: "How much radiation does the human body emit?", answer: "At body temperature (310 K), you emit about 525 W/m² with a peak wavelength of ~9.3 μm (far infrared). Total body emission is roughly 100 watts — this is how thermal imaging cameras detect people." }
    ],
    seoMeta: { title: "Blackbody Radiation Calculator", description: "Calculate blackbody radiant emittance and peak wavelength.", keywords: "blackbody radiation, Stefan-Boltzmann, Wien's law, thermal radiation, temperature" }
  },
  {
    id: "braggs-law-calculator",
    name: "Bragg's Law Calculator",
    description: "Calculate the wavelength of X-rays diffracted by a crystal lattice using Bragg's law.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "n\\lambda = 2d\\sin\\theta",
    inputs: [
      { id: "d_spacing", label: "Lattice Spacing (m)", type: "number", defaultValue: 2.5e-10 },
      { id: "theta_deg", label: "Diffraction Angle (°)", type: "number", defaultValue: 30 },
      { id: "n_order", label: "Diffraction Order (n)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "lambda_val", label: "Wavelength", formula: "2 * d_spacing * sin(theta_deg * pi / 180) / n_order", unit: "m" }
    ],
    theory: "Bragg's law describes the condition for constructive interference of waves scattered by the periodic planes of atoms in a crystal. When X-rays hit crystal planes at angle θ, the path difference between rays reflected from adjacent planes is 2d sin θ. Constructive interference occurs when this path difference equals an integer multiple of the wavelength. Bragg diffraction is the foundation of X-ray crystallography, which revealed the structures of DNA, proteins, and countless materials.",
    faq: [
      { question: "What is Bragg diffraction used for?", answer: "Bragg diffraction is the basis of X-ray crystallography — the technique that revealed the structure of DNA, thousands of protein structures, and the atomic arrangement of minerals and engineered materials. It is essential in materials science and structural biology." },
      { question: "What is lattice spacing?", answer: "Lattice spacing (d) is the distance between parallel planes of atoms in a crystal. Typical values are 1–5 Ångströms (10⁻¹⁰ m). Different crystal structures have different characteristic d-spacings." },
      { question: "Why are X-rays used instead of visible light?", answer: "X-ray wavelengths (0.01–10 nm) are comparable to atomic spacings in crystals (0.1–0.5 nm), making diffraction possible. Visible light wavelengths (400–700 nm) are thousands of times too large to resolve atomic-scale features." }
    ],
    seoMeta: { title: "Bragg's Law Calculator", description: "Calculate X-ray diffraction using Bragg's law.", keywords: "Bragg's law, X-ray diffraction, crystallography, lattice spacing, crystal structure" }
  },
  {
    id: "brewsters-angle-calculator",
    name: "Brewster's Angle Calculator",
    description: "Calculate Brewster's angle where reflected light is completely polarized.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\theta_B = \\arctan\\left(\\frac{n_2}{n_1}\\right)",
    inputs: [
      { id: "n1", label: "Refractive Index (medium 1)", type: "number", defaultValue: 1.0, helpText: "Air: 1.0, Water: 1.33" },
      { id: "n2", label: "Refractive Index (medium 2)", type: "number", defaultValue: 1.5, helpText: "Glass: 1.5, Diamond: 2.42" }
    ],
    outputs: [
      { id: "theta_B", label: "Brewster's Angle", formula: "atan(n2 / n1) * 180 / pi", unit: "°" }
    ],
    theory: "Brewster's angle is the angle of incidence at which reflected light is completely polarized (only s-polarized light reflects; p-polarized light is entirely transmitted). At this angle, the reflected and refracted rays are perpendicular. Discovered by Sir David Brewster in 1815, it is used in laser optics (Brewster windows), polarizing filters, and glare reduction.",
    faq: [
      { question: "What is Brewster's angle for glass?", answer: "For glass (n ≈ 1.5) in air (n ≈ 1.0), Brewster's angle is arctan(1.5/1.0) ≈ 56.3°. At this angle, reflected light from a glass surface is completely horizontally polarized." },
      { question: "Why do polarized sunglasses reduce glare?", answer: "Sunlight reflecting off flat surfaces (roads, water) near Brewster's angle becomes horizontally polarized. Polarized sunglasses block horizontally polarized light, dramatically reducing glare from these surfaces." },
      { question: "What is a Brewster window in lasers?", answer: "A Brewster window is tilted at Brewster's angle to eliminate reflection losses for p-polarized light. The light passes through with zero reflection loss, which is critical for efficient laser operation inside optical cavities." }
    ],
    seoMeta: { title: "Brewster's Angle Calculator", description: "Calculate the polarization angle for reflected light.", keywords: "Brewster's angle, polarization, reflection, refractive index, optics" }
  },
  {
    id: "contact-lens-vertex-calculator",
    name: "Contact Lens Vertex Calculator",
    description: "Convert spectacle lens power to effective contact lens power using vertex distance correction.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "D_{cl} = \\frac{D_s}{1 - d \\cdot D_s}",
    inputs: [
      { id: "Ds", label: "Spectacle Power (diopters)", type: "number", defaultValue: -6 },
      { id: "d_vertex", label: "Vertex Distance (m)", type: "number", defaultValue: 0.012, helpText: "Typical vertex distance: 12 mm = 0.012 m" }
    ],
    outputs: [
      { id: "Dcl", label: "Contact Lens Power", formula: "Ds / (1 - d_vertex * Ds)", unit: "diopters" }
    ],
    theory: "When a corrective lens is moved closer to the eye (from spectacle position to contact lens position), its effective power changes. For myopic (negative) prescriptions, contact lenses are weaker (less negative) than spectacles. For hyperopic (positive) prescriptions, contacts are stronger. The vertex distance correction becomes significant for powers above ±4 diopters.",
    faq: [
      { question: "When does vertex distance matter?", answer: "Vertex distance correction is clinically significant for lens powers above ±4 diopters. For lower powers, the difference is negligible. A -8.00 D spectacle prescription might become about -7.40 D in contacts." },
      { question: "What is a typical vertex distance?", answer: "The standard vertex distance (from lens to cornea) for spectacles is 12–14 mm. Contact lenses sit directly on the cornea at essentially zero vertex distance." },
      { question: "Why are contact lens and glasses prescriptions different?", answer: "Because the lens-to-eye distance changes the effective power. A lens closer to the eye (contact) has a different effective power than the same lens farther away (spectacle). The correction formula accounts for this optical difference." }
    ],
    seoMeta: { title: "Contact Lens Vertex Calculator", description: "Convert spectacle to contact lens power with vertex distance.", keywords: "vertex distance, contact lens power, spectacle conversion, diopter, optometry" }
  },
  {
    id: "diffraction-grating-calculator",
    name: "Diffraction Grating Calculator",
    description: "Calculate the diffraction angle for a specific wavelength and grating order.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\theta = \\arcsin\\left(\\frac{m\\lambda}{d}\\right)",
    inputs: [
      { id: "d_grating", label: "Grating Spacing (m)", type: "number", defaultValue: 1e-6, helpText: "Lines/mm: d = 1e-3 / (lines per mm)" },
      { id: "m_order", label: "Diffraction Order (m)", type: "number", defaultValue: 1 },
      { id: "lambda_m", label: "Wavelength (m)", type: "number", defaultValue: 550e-9 }
    ],
    outputs: [
      { id: "theta_diff", label: "Diffraction Angle", formula: "asin(m_order * lambda_m / d_grating) * 180 / pi", unit: "°" }
    ],
    theory: "A diffraction grating splits light into its component wavelengths by exploiting constructive interference from many equally spaced slits. The grating equation d sin θ = mλ relates the slit spacing d, diffraction angle θ, order m, and wavelength λ. Higher orders and finer gratings produce larger angular separation. Gratings are used in spectrometers, monochromators, and wavelength-division multiplexing.",
    faq: [
      { question: "How does a diffraction grating create a rainbow?", answer: "Different wavelengths diffract at different angles (since θ depends on λ). Red light (longer λ) diffracts at larger angles than blue light (shorter λ), spatially separating the colors into a spectrum." },
      { question: "What does 'order' mean?", answer: "Order (m) is an integer representing different sets of constructive interference maxima. m=0 is the central maximum (undiffracted). m=1 is the first-order spectrum, m=2 is second-order, etc. Higher orders have better spectral resolution but lower intensity." },
      { question: "How many lines per mm do typical gratings have?", answer: "Common gratings: 300 lines/mm (infrared), 600 lines/mm (visible), 1200–1800 lines/mm (UV). More lines per mm gives better spectral resolution but limits the range of observable wavelengths." }
    ],
    seoMeta: { title: "Diffraction Grating Calculator", description: "Calculate diffraction angles from grating spacing and wavelength.", keywords: "diffraction grating, grating equation, spectral lines, wavelength, spectrometer" }
  },
  {
    id: "diopter-calculator",
    name: "Diopter Calculator",
    description: "Calculate the optical power of a lens in diopters from its focal length.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "D = \\frac{1}{f}",
    inputs: [
      { id: "f_cm", label: "Focal Length (cm)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "D_val", label: "Optical Power", formula: "100 / f_cm", unit: "diopters (D)" }
    ],
    theory: "A diopter is the unit of optical power of a lens, defined as the reciprocal of focal length in meters: D = 1/f. Positive diopters indicate converging (convex) lenses, negative diopters indicate diverging (concave) lenses. Optometrists prescribe corrective lenses in diopters. The diopter system makes combining lens powers simple: the total power of thin lenses in contact equals the sum of their individual powers.",
    faq: [
      { question: "What do my prescription numbers mean?", answer: "Your prescription in diopters indicates the corrective power needed. Negative values (e.g., -3.00 D) correct myopia (nearsightedness) with diverging lenses. Positive values (e.g., +2.00 D) correct hyperopia (farsightedness) with converging lenses." },
      { question: "What is the power of the human eye?", answer: "The total optical power of the human eye is about +60 diopters. The cornea contributes about +43 D (two-thirds), and the crystalline lens adds about +17 D. The lens can change shape (accommodate) to adjust focus." },
      { question: "How do I convert diopters to focal length?", answer: "Focal length (in meters) = 1 / diopters. For example, a +4 D lens has a focal length of 0.25 m (25 cm). A -2 D lens has a virtual focal length of -0.5 m." }
    ],
    seoMeta: { title: "Diopter Calculator", description: "Convert between focal length and optical power in diopters.", keywords: "diopter, optical power, focal length, lens power, optometry" }
  },
  {
    id: "distance-to-horizon-calculator",
    name: "Distance to Horizon Calculator",
    description: "Calculate the distance to the visible horizon from a given observer height.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "d = \\sqrt{2Rh}",
    inputs: [
      { id: "h_obs", label: "Observer Height (m)", type: "number", defaultValue: 1.7, helpText: "Standing adult: ~1.7 m, Ship deck: ~10 m" }
    ],
    outputs: [
      { id: "d_horizon", label: "Distance to Horizon", formula: "sqrt(2 * 6371000 * h_obs)", unit: "m" },
      { id: "d_km", label: "Distance to Horizon", formula: "sqrt(2 * 6371000 * h_obs) / 1000", unit: "km" }
    ],
    theory: "The distance to the geometric horizon depends on the observer's height and Earth's curvature. Using the Pythagorean theorem with Earth's radius R = 6,371 km, the horizon distance d ≈ √(2Rh) for h ≪ R. Atmospheric refraction typically extends the visible horizon by about 8% beyond the geometric calculation. From standing height (1.7 m), the horizon is about 4.7 km away.",
    faq: [
      { question: "How far can I see at the beach?", answer: "Standing at eye level (~1.7 m), the horizon is about 4.7 km (2.9 miles) away. From a 10-meter cliff, it extends to about 11.3 km (7 miles). These are geometric distances; atmospheric refraction extends them slightly." },
      { question: "Does atmospheric refraction affect the horizon?", answer: "Yes, standard atmospheric refraction bends light downward, extending the visible horizon by about 8% beyond the geometric calculation. In rare conditions, extreme refraction can create mirages or allow seeing well beyond the normal horizon." },
      { question: "How far can you see from an airplane?", answer: "At cruising altitude (10,000 m / 33,000 ft), the horizon is approximately 357 km (222 miles) away. On a clear day, you can see mountain ranges and large geographic features at these distances." }
    ],
    seoMeta: { title: "Distance to Horizon Calculator", description: "Calculate how far you can see based on your height.", keywords: "distance to horizon, Earth curvature, line of sight, observer height, visible range" }
  },
  {
    id: "earth-curvature-calculator",
    name: "Earth Curvature Calculator",
    description: "Calculate how much the Earth's surface drops due to curvature over a given distance.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\text{drop} = \\frac{d^2}{2R}",
    inputs: [
      { id: "d_km", label: "Distance (km)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "drop_m", label: "Curvature Drop", formula: "(d_km^2) / (2 * 6371) * 1000", unit: "m" }
    ],
    theory: "Earth's curvature causes the surface to drop away from a perfectly flat tangent plane. The drop increases quadratically with distance: approximately 8 inches per mile squared, or more precisely d²/(2R) where R is Earth's radius (6,371 km). This curvature is why ships disappear hull-first over the horizon, and why long bridges and railways must account for the curvature in their engineering.",
    faq: [
      { question: "How much does the Earth curve per mile?", answer: "The curvature drop is approximately 8 inches per mile squared. At 1 mile: ~8 inches. At 2 miles: ~32 inches (2.67 feet). At 10 miles: ~66.7 feet. The drop increases quadratically with distance." },
      { question: "Can you see curvature from a plane?", answer: "Earth's curvature becomes visually discernible at altitudes above about 10 km (35,000 ft), though it is subtle. It is clearly visible from about 20+ km altitude. You need a wide field of view and a clear horizon to notice it." },
      { question: "Do engineers account for Earth's curvature?", answer: "Yes, for large structures. The Verrazano-Narrows Bridge towers are about 41 mm farther apart at the top than the base due to curvature. Long tunnels, canals, and railways also require curvature corrections." }
    ],
    seoMeta: { title: "Earth Curvature Calculator", description: "Calculate Earth's surface drop over a distance.", keywords: "Earth curvature, surface drop, flat Earth, curvature calculator, line of sight" }
  },
  {
    id: "index-of-refraction-calculator",
    name: "Index of Refraction Calculator",
    description: "Calculate the refractive index of a medium from the speed of light within it.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "n = \\frac{c}{v}",
    inputs: [
      { id: "v_medium", label: "Speed of Light in Medium (m/s)", type: "number", defaultValue: 200000000 }
    ],
    outputs: [
      { id: "n_val", label: "Refractive Index", formula: "299792458 / v_medium", unit: "" }
    ],
    theory: "The index of refraction (n) describes how much light slows down in a medium compared to vacuum. It is always ≥ 1 for normal materials (n = 1 for vacuum, ~1.0003 for air, 1.33 for water, 1.5 for glass, 2.42 for diamond). Higher refractive index means slower light speed and greater bending of light rays at interfaces. The index typically varies with wavelength (dispersion), causing prisms to split white light into colors.",
    faq: [
      { question: "What does refractive index tell us?", answer: "It tells us how much slower light travels in the medium compared to vacuum, and how much light bends when entering the medium. n = 1.5 means light travels at 2/3 the speed of vacuum light and bends significantly at the air-glass interface." },
      { question: "Why does diamond sparkle so much?", answer: "Diamond has a very high refractive index (n = 2.42), causing strong bending of light and total internal reflection at shallow angles. Combined with high dispersion (splitting colors), this creates brilliant fire and sparkle." },
      { question: "Can the refractive index be less than 1?", answer: "For X-rays in some materials and in metamaterials, the phase velocity can exceed c, giving n < 1 or even negative n. However, the group velocity (carrying information/energy) never exceeds c, consistent with relativity." }
    ],
    seoMeta: { title: "Index of Refraction Calculator", description: "Calculate refractive index from light speed in a medium.", keywords: "refractive index, index of refraction, speed of light, optical density, Snell's law" }
  },
  {
    id: "laser-beam-divergence-calculator",
    name: "Laser Beam Divergence Calculator",
    description: "Calculate the full-angle divergence of a laser beam from its spot radius and propagation distance.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\theta = 2\\arctan\\left(\\frac{w}{z}\\right)",
    inputs: [
      { id: "w_radius", label: "Beam Radius at Distance (m)", type: "number", defaultValue: 0.005 },
      { id: "z_dist", label: "Propagation Distance (m)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "div_mrad", label: "Full-Angle Divergence", formula: "2 * atan(w_radius / z_dist) * 1000", unit: "mrad" }
    ],
    theory: "Beam divergence describes how rapidly a laser beam expands as it propagates. For a Gaussian beam, the minimum divergence (diffraction-limited) is θ = λ/(πw₀), where w₀ is the beam waist radius. In practice, divergence is measured by observing the beam radius at a known far-field distance. Lower divergence is critical for long-range applications like laser communications, lidar, and directed energy.",
    faq: [
      { question: "What is typical laser divergence?", answer: "HeNe lasers: ~1 mrad. Laser pointers: 1–5 mrad. Fiber-coupled diode lasers: 50–200 mrad (without collimation). Diffraction-limited divergence depends on wavelength and beam waist size." },
      { question: "How does divergence affect range?", answer: "Lower divergence means the beam stays concentrated over longer distances. A 1 mrad beam spreads to about 1 meter diameter at 1 km range. This is critical for laser rangefinders, communications, and directed energy applications." },
      { question: "What is diffraction-limited divergence?", answer: "The theoretical minimum divergence for a Gaussian beam is θ_min = λ/(πw₀). A tighter focus (smaller w₀) paradoxically increases divergence because a smaller waist diffracts more rapidly. The minimum beam-width × divergence product is fixed by wavelength." }
    ],
    seoMeta: { title: "Laser Beam Divergence Calculator", description: "Calculate laser beam divergence angle.", keywords: "beam divergence, laser divergence, beam spread, mrad, Gaussian beam" }
  },
  {
    id: "laser-beam-expander-calculator",
    name: "Laser Beam Expander Calculator",
    description: "Calculate the output beam size of a laser beam expander from magnification and input beam width.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "w_{\\text{out}} = M \\cdot w_{\\text{in}}",
    inputs: [
      { id: "M_exp", label: "Expansion Magnification", type: "number", defaultValue: 5 },
      { id: "w_in", label: "Input Beam Diameter (mm)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "w_out", label: "Output Beam Diameter", formula: "M_exp * w_in", unit: "mm" },
      { id: "div_reduction", label: "Divergence Reduction Factor", formula: "1 / M_exp", unit: "×" }
    ],
    theory: "A beam expander increases the laser beam diameter by a magnification factor M while simultaneously reducing beam divergence by 1/M. This is because the beam-width × divergence product (beam parameter product) is conserved for ideal optical systems. Beam expanders are essential for reducing divergence in long-range applications and for increasing beam size before focusing to achieve smaller focal spots.",
    faq: [
      { question: "Why expand a laser beam?", answer: "Expansion reduces divergence by the same factor. A 5× expander reduces divergence by 5×, keeping the beam concentrated over 5× longer range. It also increases the beam size for uniform illumination or to fill a larger optic." },
      { question: "What are the types of beam expanders?", answer: "Galilean (concave + convex lens, no internal focus), Keplerian (two convex lenses, has an internal focus point). Galilean types are preferred for high-power lasers since there is no internal focus that could damage the air or optics." },
      { question: "Does expansion change the power?", answer: "No, beam expansion conserves total power (minus small losses in the optics). However, the power density (W/cm²) decreases by M² because the same power is spread over M² times the area." }
    ],
    seoMeta: { title: "Laser Beam Expander Calculator", description: "Calculate output beam size and divergence reduction.", keywords: "beam expander, laser optics, magnification, divergence reduction, Galilean" }
  },
  {
    id: "laser-brightness-calculator",
    name: "Laser Brightness Calculator",
    description: "Calculate the irradiance (brightness) of a laser beam from its power and beam radius.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "B = \\frac{P}{\\pi w^2}",
    inputs: [
      { id: "P_laser", label: "Laser Power (W)", type: "number", defaultValue: 0.005 },
      { id: "w_beam", label: "Beam Radius (m)", type: "number", defaultValue: 0.001 }
    ],
    outputs: [
      { id: "irradiance", label: "Peak Irradiance", formula: "P_laser / (pi * w_beam^2)", unit: "W/m²" }
    ],
    theory: "Laser brightness (irradiance) measures the power per unit area at the beam cross-section. For a uniform circular beam, irradiance = P/(πw²). For Gaussian beams, the peak irradiance is 2P/(πw²). Even low-power lasers can have extremely high irradiance because their beams are highly concentrated. This is why laser safety is critical — a 5 mW laser pointer has higher irradiance than the Sun on your retina.",
    faq: [
      { question: "Why are even low-power lasers dangerous?", answer: "A 5 mW laser pointer concentrated into a 1 mm beam has an irradiance of ~6,400 W/m², while sunlight is ~1,400 W/m². The eye's lens further focuses the beam onto a tiny retinal spot, potentially causing permanent damage instantly." },
      { question: "What is the difference between brightness and power?", answer: "Power (Watts) is total energy per second. Brightness (irradiance, W/m²) is power per unit area. A focused 1W laser is far brighter than a 100W light bulb because the same energy is concentrated into a tiny area." },
      { question: "How is laser brightness used in manufacturing?", answer: "Laser cutting and welding require irradiances of 10⁶–10¹⁰ W/m² to melt or vaporize material. This is achieved by focusing moderate-power lasers to very small spots using precision optics." }
    ],
    seoMeta: { title: "Laser Brightness Calculator", description: "Calculate laser beam irradiance from power and beam size.", keywords: "laser brightness, irradiance, beam power, laser safety, power density" }
  },
  {
    id: "laser-linewidth-and-bandwidth-calculator",
    name: "Laser Linewidth and Bandwidth Calculator",
    description: "Calculate the frequency bandwidth of a laser from its spectral linewidth and center wavelength.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\Delta f = \\frac{c \\cdot \\Delta\\lambda}{\\lambda^2}",
    inputs: [
      { id: "lambda_center", label: "Center Wavelength (m)", type: "number", defaultValue: 1064e-9, helpText: "Nd:YAG: 1064 nm" },
      { id: "dl", label: "Spectral Linewidth (m)", type: "number", defaultValue: 0.1e-9, helpText: "0.1 nm = 10⁻¹⁰ m" }
    ],
    outputs: [
      { id: "df", label: "Frequency Bandwidth", formula: "299792458 * dl / lambda_center^2", unit: "Hz" }
    ],
    theory: "Laser linewidth describes the spectral purity of a laser — how narrow its emission spectrum is. The relationship Δf = cΔλ/λ² connects wavelength spread to frequency spread. Narrower linewidth (higher spectral purity) enables longer coherence length, which is essential for interferometry, holography, and fiber-optic sensing. Single-frequency lasers can achieve linewidths below 1 Hz.",
    faq: [
      { question: "What determines a laser's linewidth?", answer: "Linewidth depends on the gain medium, cavity design, and feedback mechanisms. Gas lasers (HeNe) have narrow linewidths (~1 GHz). Diode lasers are broader (~1 nm). Single-frequency lasers with external cavities can achieve Hz-level linewidths." },
      { question: "What is coherence length?", answer: "Coherence length = c/Δf ≈ λ²/Δλ. It is the maximum path difference over which a laser can produce interference fringes. A laser with 1 GHz linewidth has ~30 cm coherence length; a 1 MHz linewidth gives ~300 m." },
      { question: "Why does linewidth matter?", answer: "Narrow linewidth is essential for high-resolution spectroscopy, long-range lidar, coherent communications, and interferometric sensing. Broader linewidth is acceptable for cutting, welding, and general illumination." }
    ],
    seoMeta: { title: "Laser Linewidth and Bandwidth Calculator", description: "Convert between spectral linewidth and frequency bandwidth.", keywords: "laser linewidth, bandwidth, coherence length, spectral purity, frequency" }
  },
  {
    id: "laser-beam-spot-size-calculator",
    name: "Laser Beam Spot Size Calculator",
    description: "Calculate the Gaussian beam radius at a given distance from the beam waist.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "w(z) = w_0\\sqrt{1 + \\left(\\frac{\\lambda z}{\\pi w_0^2}\\right)^2}",
    inputs: [
      { id: "w0", label: "Beam Waist Radius (m)", type: "number", defaultValue: 0.5e-3 },
      { id: "lambda_m", label: "Wavelength (m)", type: "number", defaultValue: 633e-9 },
      { id: "z_dist", label: "Distance from Waist (m)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "wz", label: "Beam Radius at Distance", formula: "w0 * sqrt(1 + (lambda_m * z_dist / (pi * w0^2))^2)", unit: "m" }
    ],
    theory: "A Gaussian beam is the fundamental mode of laser resonators. The beam radius w(z) expands hyperbolically from the minimum waist w₀. Near the waist (z ≪ z_R), the beam is nearly collimated. Far from the waist (z ≫ z_R), the beam diverges linearly. The Rayleigh range z_R = πw₀²/λ defines the boundary between near-field and far-field behavior.",
    faq: [
      { question: "What is the Rayleigh range?", answer: "The Rayleigh range z_R = πw₀²/λ is the distance from the beam waist where the beam radius has grown by a factor of √2 (area doubled). It separates the 'collimated' region near the waist from the 'diverging' far-field region." },
      { question: "How small can I focus a laser beam?", answer: "The minimum focused spot radius is approximately w₀ ≈ λf/(πw_input), where f is the lens focal length and w_input is the beam radius at the lens. Shorter wavelengths and larger input beams give smaller focused spots." },
      { question: "What is beam quality factor M²?", answer: "M² (beam quality) describes how close a real beam is to an ideal Gaussian (M²=1). Real beams have M² > 1 and diverge faster than the ideal. The spot size formula is modified: w(z) = M² × w₀√(1 + (λz/(πw₀²))²)." }
    ],
    seoMeta: { title: "Laser Beam Spot Size Calculator", description: "Calculate Gaussian beam radius at any propagation distance.", keywords: "beam spot size, Gaussian beam, beam waist, Rayleigh range, laser optics" }
  },
  {
    id: "lens-maker-equation-calculator",
    name: "Lens Maker Equation Calculator",
    description: "Calculate the optical power of a thin lens from its refractive index and radii of curvature.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
    inputs: [
      { id: "n_lens", label: "Refractive Index of Lens", type: "number", defaultValue: 1.5 },
      { id: "R1", label: "Radius of Curvature R₁ (m)", type: "number", defaultValue: 0.2, helpText: "Positive for convex first surface" },
      { id: "R2", label: "Radius of Curvature R₂ (m)", type: "number", defaultValue: -0.3, helpText: "Negative for convex second surface" }
    ],
    outputs: [
      { id: "power", label: "Optical Power (1/f)", formula: "(n_lens - 1) * (1/R1 - 1/R2)", unit: "diopters" },
      { id: "f_val", label: "Focal Length", formula: "1 / ((n_lens - 1) * (1/R1 - 1/R2))", unit: "m" }
    ],
    theory: "The Lensmaker's equation relates the focal length of a thin lens to its refractive index and surface curvatures. It enables lens designers to calculate the required surface shapes for a desired focal length. The sign convention (real-is-positive or cartesian) determines the signs of R₁ and R₂. This equation assumes a thin lens in air and does not account for aberrations.",
    faq: [
      { question: "What is the sign convention for radii?", answer: "In the standard convention: R is positive if the center of curvature is to the right of the surface, negative if to the left. For a common biconvex lens, R₁ > 0 (convex toward incoming light) and R₂ < 0 (convex toward outgoing light)." },
      { question: "What happens when one surface is flat (plano)?", answer: "A flat surface has infinite radius (R = ∞), so 1/R = 0. A plano-convex lens with one flat and one curved surface has power = (n-1)/R for the curved surface only." },
      { question: "Why does refractive index matter?", answer: "Higher refractive index means more bending per surface, allowing shorter focal lengths with less extreme curvature. This is why high-index glass is used for compact lens designs, though it may introduce more chromatic aberration." }
    ],
    seoMeta: { title: "Lens Maker Equation Calculator", description: "Calculate lens focal length from curvature radii and refractive index.", keywords: "lens maker equation, focal length, radius of curvature, refractive index, thin lens" }
  },
  {
    id: "lumen-calculator",
    name: "Lumen Calculator",
    description: "Convert luminous flux (lumens) to illuminance (lux) and luminous intensity (candela).",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "E = \\frac{\\Phi}{A}, \\quad I = \\frac{\\Phi}{4\\pi}",
    inputs: [
      { id: "lm", label: "Luminous Flux (lumens)", type: "number", defaultValue: 800 },
      { id: "A_area", label: "Illuminated Area (m²)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "lux", label: "Illuminance", formula: "lm / A_area", unit: "lux" },
      { id: "cd", label: "Luminous Intensity (isotropic)", formula: "lm / (4 * pi)", unit: "candela" }
    ],
    theory: "Lumens measure the total visible light output of a source, weighted by the human eye's sensitivity curve. Lux (lux = lumens/m²) measures illuminance — how much light falls on a surface. Candela measures luminous intensity — the light output per unit solid angle in a particular direction. A 60W incandescent bulb produces about 800 lumens; an LED bulb achieves the same output with only 8–10W.",
    faq: [
      { question: "How many lumens do I need for a room?", answer: "Living rooms: 1,500–3,000 lumens. Kitchens: 3,000–4,000 lumens. Home office: 3,000–6,000 lumens. As a guideline, aim for 20–50 lux for ambient, 300–500 lux for task lighting, and 500+ lux for detailed work." },
      { question: "What is the difference between lumens and watts?", answer: "Watts measure electrical power consumed, lumens measure visible light output. An incandescent bulb produces ~15 lumens/watt, while an LED produces 80–150+ lumens/watt. Lumens are the better measure of brightness." },
      { question: "What is a candela?", answer: "A candela (cd) measures light intensity in a specific direction, per unit solid angle (steradian). One candela is roughly the light intensity of a common candle. A 100W bulb has about 120 cd averaged over all directions." }
    ],
    seoMeta: { title: "Lumen Calculator", description: "Convert lumens to lux and candela.", keywords: "lumens, lux, candela, illuminance, luminous flux, lighting" }
  },
  {
    id: "lux-to-foot-candles-converter",
    name: "Lux to Foot Candles Converter",
    description: "Convert illuminance between lux (metric) and foot-candles (imperial).",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\text{fc} = \\frac{\\text{lux}}{10.764}",
    inputs: [
      { id: "lux_val", label: "Illuminance (lux)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "fc", label: "Foot-candles", formula: "lux_val / 10.764", unit: "fc" }
    ],
    theory: "Foot-candles and lux both measure illuminance (light falling on a surface), but use different area units. One foot-candle equals one lumen per square foot, while one lux equals one lumen per square meter. Since 1 m² = 10.764 ft², the conversion factor is 1 fc = 10.764 lux. Foot-candles remain common in North American lighting design and building codes.",
    faq: [
      { question: "What is a foot-candle?", answer: "A foot-candle is one lumen of light uniformly distributed over one square foot. It is the traditional illuminance unit in North America. Typical indoor lighting is 30–50 foot-candles; outdoor daylight is 1,000+ foot-candles." },
      { question: "What are recommended foot-candle levels?", answer: "IESNA recommendations: Corridors: 5–10 fc. Offices: 30–50 fc. Classrooms: 30–50 fc. Retail: 50–100 fc. Surgical suites: 100–200 fc. These can be converted to lux by multiplying by 10.764." },
      { question: "Why do some industries still use foot-candles?", answer: "North American building codes, OSHA workplace standards, and IESNA lighting guidelines traditionally use foot-candles. While lux is the international SI standard, foot-candles persist in US construction and facilities management." }
    ],
    seoMeta: { title: "Lux to Foot Candles Converter", description: "Convert between lux and foot-candles.", keywords: "lux, foot-candles, illuminance conversion, lighting, photometry" }
  },
  {
    id: "malus-law-calculator",
    name: "Malus Law Calculator",
    description: "Calculate the intensity of polarized light after passing through a polarizer at a given angle.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "I = I_0 \\cos^2\\theta",
    inputs: [
      { id: "I0", label: "Initial Intensity (W/m²)", type: "number", defaultValue: 100 },
      { id: "theta_deg", label: "Angle Between Polarization and Filter (°)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "I_out", label: "Transmitted Intensity", formula: "I0 * cos(theta_deg * pi / 180)^2", unit: "W/m²" },
      { id: "transmission", label: "Transmission Percentage", formula: "cos(theta_deg * pi / 180)^2 * 100", unit: "%" }
    ],
    theory: "Malus's Law describes how the intensity of plane-polarized light changes when it passes through a linear polarizer. The transmitted intensity follows a cos²θ relationship, where θ is the angle between the light's polarization direction and the polarizer's transmission axis. At θ = 0° (aligned), all light passes through. At θ = 90° (crossed), no light passes. This law is fundamental to LCD screens, photography filters, and optical communication.",
    faq: [
      { question: "What happens with crossed polarizers (90°)?", answer: "At 90°, cos²(90°) = 0, so no light passes through. This is called 'extinction.' Crossed polarizers appear completely dark. This effect is used in LCD displays — a backlight behind two crossed polarizers appears dark until liquid crystals rotate the polarization." },
      { question: "How does this apply to polarized sunglasses?", answer: "Polarized sunglasses transmit vertically polarized light and block horizontally polarized glare (from roads, water). Tilting your head changes the angle θ, altering how much glare passes through — you can test this by rotating your sunglasses." },
      { question: "What is unpolarized light?", answer: "Unpolarized light vibrates in all directions perpendicular to propagation. When passing through an ideal linear polarizer, exactly 50% of unpolarized light is transmitted, regardless of polarizer orientation. The transmitted light is then polarized." }
    ],
    seoMeta: { title: "Malus Law Calculator", description: "Calculate polarized light intensity with Malus's Law.", keywords: "Malus law, polarization, cos squared, polarizer, light intensity" }
  },
  {
    id: "mirror-equation-calculator",
    name: "Mirror Equation Calculator",
    description: "Calculate the image distance for a spherical mirror using the mirror equation.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}",
    inputs: [
      { id: "f_mirror", label: "Focal Length (cm)", type: "number", defaultValue: 20, helpText: "Positive for concave, negative for convex" },
      { id: "d_obj", label: "Object Distance (cm)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "d_img", label: "Image Distance", formula: "1 / (1/f_mirror - 1/d_obj)", unit: "cm" },
      { id: "mag", label: "Magnification", formula: "-(1 / (1/f_mirror - 1/d_obj)) / d_obj", unit: "×" }
    ],
    theory: "The mirror equation 1/f = 1/d_o + 1/d_i relates focal length, object distance, and image distance for spherical mirrors. For concave mirrors (f > 0), real images form when the object is beyond the focal point. Convex mirrors (f < 0) always produce virtual, upright, diminished images. The magnification m = -d_i/d_o indicates image size and orientation (negative = inverted).",
    faq: [
      { question: "When is the image real vs. virtual?", answer: "For concave mirrors: image is real when object is beyond focal point (d_i > 0), virtual when inside focal point (d_i < 0). For convex mirrors, the image is always virtual (d_i < 0). Real images can be projected on a screen; virtual images cannot." },
      { question: "What does negative magnification mean?", answer: "Negative magnification means the image is inverted (upside down). Positive magnification means the image is upright. |m| > 1 means enlarged, |m| < 1 means diminished, |m| = 1 means same size." },
      { question: "Where are curved mirrors used?", answer: "Concave mirrors: telescopes (primary mirrors), shaving/makeup mirrors, solar concentrators, satellite dishes. Convex mirrors: car side mirrors ('objects are closer'), security mirrors, wide-angle surveillance." }
    ],
    seoMeta: { title: "Mirror Equation Calculator", description: "Calculate image position and magnification for curved mirrors.", keywords: "mirror equation, concave mirror, convex mirror, focal length, image distance" }
  },
  {
    id: "optical-density-calculator",
    name: "Optical Density Calculator",
    description: "Calculate the optical density (OD) of a filter or material from its transmittance.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "OD = -\\log_{10}(T)",
    inputs: [
      { id: "T_pct", label: "Transmittance (%)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "OD", label: "Optical Density", formula: "-log10(T_pct / 100)", unit: "OD" }
    ],
    theory: "Optical density (OD) is the logarithmic measure of light attenuation by a filter or material. OD 1 blocks 90% of light (10% transmission), OD 2 blocks 99% (1% transmission), OD 3 blocks 99.9%. Each unit increase in OD represents a tenfold reduction in transmission. OD is additive: stacking OD 1 and OD 2 filters gives OD 3. It is used in spectroscopy (absorbance), laser safety (filter ratings), and photography (ND filters).",
    faq: [
      { question: "What does optical density mean in practice?", answer: "OD 1 = 10% transmission (blocks 90%). OD 2 = 1% transmission (blocks 99%). OD 3 = 0.1% transmission. OD 6 means only 1 in a million photons pass through — used for laser safety eyewear." },
      { question: "How is OD used in laser safety?", answer: "Laser safety goggles are rated by OD at specific wavelengths. For a 1W laser requiring safe viewing below 1 mW, you need OD 3 (attenuation factor of 1000). Higher power lasers require higher OD ratings." },
      { question: "What is the relationship between OD and absorbance?", answer: "In spectroscopy, optical density is essentially the same as absorbance (A). Beer-Lambert law: A = εlc, where ε is molar absorptivity, l is path length, and c is concentration. Higher absorbance means higher OD." }
    ],
    seoMeta: { title: "Optical Density Calculator", description: "Calculate optical density from transmittance.", keywords: "optical density, OD, transmittance, absorbance, filter, laser safety" }
  },
  {
    id: "radar-horizon-calculator",
    name: "Radar Horizon Calculator",
    description: "Calculate the maximum radar detection range limited by Earth's curvature.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "d = \\sqrt{2R_e h}",
    inputs: [
      { id: "h_km", label: "Antenna Height (km)", type: "number", defaultValue: 0.03, helpText: "30m = 0.03 km" }
    ],
    outputs: [
      { id: "d_radar", label: "Radar Horizon", formula: "sqrt(2 * 6371 * h_km * 4/3)", unit: "km" }
    ],
    theory: "The radar horizon is the maximum distance at which a radar can detect targets at or near the surface, limited by Earth's curvature. It is similar to the visual horizon but extended by the 4/3 Earth radius rule, which accounts for standard atmospheric refraction bending radio waves slightly downward. The effective radar horizon uses R_eff = 4R/3 ≈ 8,495 km instead of the geometric Earth radius.",
    faq: [
      { question: "Why is the radar horizon different from the visual horizon?", answer: "Radio waves refract in the atmosphere differently than light. Standard atmospheric conditions bend radio waves slightly toward the Earth, effectively extending the radar horizon by about 15% compared to the geometric (visual) horizon. This is modeled using the 4/3 Earth radius approximation." },
      { question: "How can radar see beyond the horizon?", answer: "Over-the-horizon (OTH) radar uses ionospheric reflection or surface wave propagation to detect targets thousands of kilometers away. These specialized systems bounce signals off the ionosphere or follow the Earth's conductive surface." },
      { question: "What is the radar horizon for a ship-based radar?", answer: "A ship radar antenna at 30m height has a radar horizon of about 25 km for surface targets. To detect higher targets (aircraft), the horizon extends further because both antenna and target height contribute." }
    ],
    seoMeta: { title: "Radar Horizon Calculator", description: "Calculate maximum radar range from antenna height.", keywords: "radar horizon, radar range, line of sight, Earth curvature, radio wave" }
  },
  {
    id: "snells-law-calculator",
    name: "Snell's Law Calculator",
    description: "Calculate the refraction angle when light passes between two media with different refractive indices.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2",
    inputs: [
      { id: "n1", label: "Refractive Index (medium 1)", type: "number", defaultValue: 1.0 },
      { id: "theta1_deg", label: "Angle of Incidence (°)", type: "number", defaultValue: 45 },
      { id: "n2", label: "Refractive Index (medium 2)", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "theta2", label: "Angle of Refraction", formula: "asin(n1 * sin(theta1_deg * pi / 180) / n2) * 180 / pi", unit: "°" }
    ],
    theory: "Snell's Law describes how light bends when crossing the boundary between two media with different refractive indices. Light bends toward the normal when entering a denser medium (higher n) and away from the normal when entering a less dense medium. When the refraction angle reaches 90°, total internal reflection occurs — this is the principle behind fiber optics and diamond brilliance.",
    faq: [
      { question: "What is total internal reflection?", answer: "When light travels from a dense medium to a less dense medium at an angle greater than the critical angle θ_c = arcsin(n₂/n₁), all light is reflected back. This is how fiber optics work — light bounces internally along the fiber with essentially no loss." },
      { question: "Why do pools look shallower than they are?", answer: "Light refracting from water (n=1.33) to air (n=1.0) bends away from the normal, making submerged objects appear closer to the surface. The apparent depth is about 75% of the actual depth." },
      { question: "What causes rainbows?", answer: "Sunlight enters a raindrop, refracts (Snell's law), reflects off the back surface, and refracts again exiting. Different wavelengths refract at slightly different angles (dispersion), separating white light into the visible spectrum." }
    ],
    seoMeta: { title: "Snell's Law Calculator", description: "Calculate the angle of refraction using Snell's Law.", keywords: "Snell's law, refraction, refractive index, total internal reflection, optics" }
  },
  {
    id: "speed-of-light-calculator",
    name: "Speed of Light Calculator",
    description: "Calculate the speed of light in a medium from its refractive index.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "v = \\frac{c}{n}",
    inputs: [
      { id: "n_medium", label: "Refractive Index of Medium", type: "number", defaultValue: 1.33, helpText: "Air: 1.0003, Water: 1.33, Glass: 1.5, Diamond: 2.42" }
    ],
    outputs: [
      { id: "v_light", label: "Speed of Light in Medium", formula: "299792458 / n_medium", unit: "m/s" }
    ],
    theory: "The speed of light in vacuum (c = 299,792,458 m/s) is a fundamental constant of nature and the universe's speed limit. In any transparent material, light travels slower by a factor equal to the refractive index: v = c/n. In water (n = 1.33), light travels at about 225,000 km/s. In diamond (n = 2.42), it slows to about 124,000 km/s. This slowing causes refraction (bending) when light crosses material boundaries.",
    faq: [
      { question: "Can anything travel faster than light?", answer: "Nothing carrying information or energy can travel faster than c in vacuum. However, particles can exceed the speed of light *in a medium* (which is c/n). This produces Cherenkov radiation — the blue glow seen in nuclear reactor pools." },
      { question: "How fast is the speed of light?", answer: "c ≈ 299,792,458 m/s ≈ 300,000 km/s ≈ 186,000 mi/s. Light travels from the Moon to Earth in 1.28 seconds, from the Sun in 8.3 minutes, and from the nearest star (Proxima Centauri) in 4.24 years." },
      { question: "Why is c exactly 299,792,458 m/s?", answer: "Since 1983, the meter has been defined as the distance light travels in 1/299,792,458 of a second. So c is exact by definition. The speed of light was measured experimentally before this definition was adopted." }
    ],
    seoMeta: { title: "Speed of Light Calculator", description: "Calculate the speed of light in any medium.", keywords: "speed of light, refractive index, light speed, c, electromagnetic waves" }
  },
  {
    id: "telescope-field-of-view-calculator",
    name: "Telescope Field of View Calculator",
    description: "Calculate the true field of view of a telescope from the apparent field of view and magnification.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\text{TFOV} = \\frac{\\text{AFOV}}{M}",
    inputs: [
      { id: "afov", label: "Apparent Field of View (°)", type: "number", defaultValue: 52 },
      { id: "fo", label: "Objective Focal Length (mm)", type: "number", defaultValue: 1000 },
      { id: "fe", label: "Eyepiece Focal Length (mm)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "mag", label: "Magnification", formula: "fo / fe", unit: "×" },
      { id: "tfov", label: "True Field of View", formula: "afov / (fo / fe)", unit: "°" }
    ],
    theory: "The true field of view (TFOV) is the actual angular extent of sky visible through a telescope. It is calculated by dividing the eyepiece's apparent field of view (AFOV) by the magnification. Higher magnification narrows the TFOV, making it harder to locate objects but showing more detail. Typical AFOV values range from 40° (standard) to 82°+ (wide-field eyepieces).",
    faq: [
      { question: "What is apparent vs. true field of view?", answer: "AFOV is the angular diameter of the visible circle as seen through the eyepiece (determined by eyepiece design, typically 40°–82°). TFOV is the actual sky coverage. TFOV = AFOV ÷ magnification." },
      { question: "How wide is the full Moon in degrees?", answer: "The full Moon subtends about 0.5° (30 arcminutes). A telescope with 1° TFOV would show two full Moons side by side. Many high-magnification setups have TFOV less than 0.5°, making the Moon fill or overfill the field." },
      { question: "What TFOV is good for deep-sky observing?", answer: "For large nebulae and star clusters, 1°–2° TFOV is ideal. Use low magnification with wide-field eyepieces (AFOV ≥ 68°). For planets, narrow TFOV at high magnification is acceptable since planets are very small." }
    ],
    seoMeta: { title: "Telescope Field of View Calculator", description: "Calculate true field of view from magnification and eyepiece.", keywords: "field of view, telescope FOV, magnification, eyepiece, apparent field" }
  },
  {
    id: "telescope-magnification-calculator",
    name: "Telescope Magnification Calculator",
    description: "Calculate the magnification power of a telescope from objective and eyepiece focal lengths.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "M = \\frac{f_o}{f_e}",
    inputs: [
      { id: "fo", label: "Objective Focal Length (mm)", type: "number", defaultValue: 1000 },
      { id: "fe", label: "Eyepiece Focal Length (mm)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "mag_val", label: "Magnification", formula: "fo / fe", unit: "×" }
    ],
    theory: "Telescope magnification equals the ratio of objective focal length to eyepiece focal length. A longer objective or shorter eyepiece gives higher magnification. However, more magnification is not always better — it reduces field of view, image brightness, and amplifies atmospheric turbulence. The maximum useful magnification is approximately 2× the aperture in mm (e.g., 200× for a 100mm telescope).",
    faq: [
      { question: "What is the maximum useful magnification?", answer: "A practical rule is 2× the aperture in millimeters: a 100mm (4-inch) telescope maxes out around 200×. Beyond this, the image becomes dim and blurry due to diffraction. Atmospheric seeing often limits useful magnification to 200–300× even for large telescopes." },
      { question: "Why do cheap telescopes advertise high magnification?", answer: "Marketing gimmick. A small telescope advertising '600×' will produce a dim, blurry, useless image. Aperture (light-gathering area) is far more important than magnification for image quality. Quality telescopes emphasize aperture size." },
      { question: "What magnification do I need for planets?", answer: "Jupiter and Saturn show good detail at 100–200×. Mars benefits from 150–300× during favorable oppositions. The Moon is stunning at any magnification, from 25× (full disk) to 250× (crater close-ups)." }
    ],
    seoMeta: { title: "Telescope Magnification Calculator", description: "Calculate telescope magnification from focal lengths.", keywords: "telescope magnification, focal length, eyepiece, objective, astronomy" }
  },
  {
    id: "thin-film-optical-coating-calculator",
    name: "Thin-Film Optical Coating Calculator",
    description: "Calculate the optimal thin-film thickness for anti-reflection or high-reflection coatings.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "t = \\frac{\\lambda}{4n}",
    inputs: [
      { id: "lambda_nm", label: "Design Wavelength (nm)", type: "number", defaultValue: 550 },
      { id: "n_film", label: "Film Refractive Index", type: "number", defaultValue: 1.38, helpText: "MgF₂: 1.38, SiO₂: 1.46, TiO₂: 2.4" }
    ],
    outputs: [
      { id: "t_nm", label: "Optimal Film Thickness", formula: "lambda_nm / (4 * n_film)", unit: "nm" }
    ],
    theory: "Quarter-wave optical coatings use thin films with thickness λ/(4n) to create destructive interference between reflections from the film's top and bottom surfaces. For anti-reflection coatings, the ideal film refractive index is √(n_substrate), causing both reflected waves to have equal amplitude but opposite phase. Multi-layer coatings can achieve broadband or highly specific spectral performance.",
    faq: [
      { question: "How do anti-reflection coatings work?", answer: "A quarter-wave film creates two reflected waves (from top and bottom surfaces) that are exactly half a wavelength out of phase. These waves destructively interfere, canceling the reflection. Single-layer coatings reduce reflection from ~4% to ~1% per surface." },
      { question: "Why do camera lenses have colored reflections?", answer: "The purple/green reflections from coated lenses are due to thin-film interference. The coating is optimized for green light (~550 nm), so green is most effectively anti-reflected. The residual reflection appears purple (red + blue) because those wavelengths are not fully canceled." },
      { question: "What materials are used for optical coatings?", answer: "Common coating materials: MgF₂ (n=1.38, anti-reflection), SiO₂ (n=1.46), TiO₂ (n=2.4, high-index), Ta₂O₅ (n=2.1). Multi-layer stacks alternate high and low index materials for advanced spectral control." }
    ],
    seoMeta: { title: "Thin-Film Optical Coating Calculator", description: "Calculate quarter-wave thin film thickness for optical coatings.", keywords: "thin film, optical coating, anti-reflection, quarter wave, interference" }
  },
  {
    id: "thin-lens-equation-calculator",
    name: "Thin Lens Equation Calculator",
    description: "Calculate the image distance and magnification for a thin lens using the lens equation.",
    category: "physics",
    subcategory: "optics-light",
    scientificFormula: "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}",
    inputs: [
      { id: "f_lens", label: "Focal Length (cm)", type: "number", defaultValue: 10, helpText: "Positive = converging, Negative = diverging" },
      { id: "d_obj", label: "Object Distance (cm)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "d_img", label: "Image Distance", formula: "1 / (1/f_lens - 1/d_obj)", unit: "cm" },
      { id: "mag_val", label: "Magnification", formula: "-(1 / (1/f_lens - 1/d_obj)) / d_obj", unit: "×" }
    ],
    theory: "The thin lens equation relates the focal length, object distance, and image distance for an ideal thin lens. It is mathematically identical to the mirror equation. Converging lenses (f > 0) can form real or virtual images depending on object position. Diverging lenses (f < 0) always form virtual, upright, diminished images. This equation is foundational for camera design, eyeglass prescriptions, projectors, and microscopes.",
    faq: [
      { question: "What is a 'thin lens'?", answer: "A thin lens is one whose thickness is negligible compared to its focal length and the object/image distances. This simplification allows treating both surfaces as acting at a single plane. Most introductory optics problems use the thin lens approximation." },
      { question: "How does a camera use the lens equation?", answer: "A camera focuses by adjusting the lens-to-sensor distance (d_i). For distant objects (d_o → ∞), d_i → f. For close-up (macro) photography, d_o approaches 2f, and d_i increases, requiring the lens to extend forward." },
      { question: "What is the difference between real and virtual images?", answer: "Real images form where light rays actually converge (d_i > 0) and can be projected on a screen. Virtual images form where rays appear to diverge from (d_i < 0) and can only be seen by looking through the lens. A magnifying glass creates a virtual image." }
    ],
    seoMeta: { title: "Thin Lens Equation Calculator", description: "Calculate image distance and magnification for a thin lens.", keywords: "thin lens equation, focal length, image distance, magnification, optics calculator" }
  }
];
