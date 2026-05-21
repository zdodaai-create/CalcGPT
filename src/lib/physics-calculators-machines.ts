import { CalculatorConfig } from "./calculator-types";

export const MACHINES_CALCULATORS: CalculatorConfig[] = [
  {
    id: "belt-length-calculator", name: "Belt Length Calculator",
    description: "Calculate the required belt length for a two-pulley system.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "L = 2C + \\frac{\\pi(D_1+D_2)}{2} + \\frac{(D_1-D_2)^2}{4C}",
    inputs: [
      { id: "C", label: "Center Distance (mm)", type: "number", defaultValue: 500 },
      { id: "D1", label: "Large Pulley Diameter (mm)", type: "number", defaultValue: 200 },
      { id: "D2", label: "Small Pulley Diameter (mm)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "L_belt", label: "Belt Length", formula: "2*C + pi*(D1+D2)/2 + (D1-D2)^2/(4*C)", unit: "mm" }
    ],
    theory: "Belt length for an open-belt drive includes two straight spans plus the arcs wrapped around each pulley. The formula accounts for the difference in pulley diameters, which affects the belt path geometry.",
    faq: [
      { question: "What types of belts are commonly used?", answer: "V-belts (automotive, industrial), flat belts (old machinery, conveyors), timing belts (precision, engines), and serpentine belts (modern automotive accessories)." },
      { question: "How do I choose center distance?", answer: "Rule of thumb: C should be between D_large and 3×(D_large + D_small). Too short reduces belt wrap angle; too long causes excessive belt sag and vibration." },
      { question: "What is belt slip?", answer: "Belt slip is the relative motion between belt and pulley surface. V-belts typically have 1–3% slip. Timing belts have zero slip due to positive engagement." }
    ],
    seoMeta: { title: "Belt Length Calculator", description: "Calculate belt length for pulley systems.", keywords: "belt length, pulley, drive belt, V-belt, center distance" }
  },
  {
    id: "bmep-calculator", name: "BMEP Calculator",
    description: "Calculate Brake Mean Effective Pressure from engine torque and displacement.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "BMEP = \\frac{2\\pi \\cdot n_R \\cdot T}{V_d}",
    inputs: [
      { id: "T_nm", label: "Torque (N·m)", type: "number", defaultValue: 300 },
      { id: "Vd_L", label: "Displacement (liters)", type: "number", defaultValue: 2.0 },
      { id: "nR", label: "Revolutions per Power Stroke", type: "number", defaultValue: 2, helpText: "4-stroke: 2, 2-stroke: 1" }
    ],
    outputs: [
      { id: "BMEP_Pa", label: "BMEP", formula: "2 * pi * nR * T_nm / (Vd_L / 1000)", unit: "Pa" },
      { id: "BMEP_bar", label: "BMEP", formula: "2 * pi * nR * T_nm / (Vd_L / 1000) / 1e5", unit: "bar" }
    ],
    theory: "BMEP is the average pressure that would produce the same work output if applied uniformly during the power stroke. It normalizes engine performance regardless of displacement or RPM, making it the best metric for comparing engine efficiency across different designs.",
    faq: [
      { question: "What is a good BMEP for a gasoline engine?", answer: "Naturally aspirated: 10–14 bar. Turbocharged: 15–25 bar. Racing engines: 25+ bar. Higher BMEP means more torque per liter of displacement." },
      { question: "How does BMEP relate to power?", answer: "Power = BMEP × Displacement × RPM / (nR × 60). This shows that power comes from pressure (BMEP), volume (displacement), and speed (RPM)." },
      { question: "What limits BMEP?", answer: "Knock (detonation), thermal limits, mechanical stress, and air supply. Turbocharging increases BMEP by forcing more air into cylinders." }
    ],
    seoMeta: { title: "BMEP Calculator", description: "Calculate Brake Mean Effective Pressure.", keywords: "BMEP, brake mean effective pressure, engine, torque, displacement" }
  },
  {
    id: "carburetor-cfm-calculator", name: "Carburetor CFM Calculator",
    description: "Estimate the required carburetor CFM for an engine.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "CFM = \\frac{CID \\times RPM}{3456}",
    inputs: [
      { id: "CID", label: "Engine Displacement (CID)", type: "number", defaultValue: 350 },
      { id: "RPM", label: "Max RPM", type: "number", defaultValue: 6000 },
      { id: "VE", label: "Volumetric Efficiency (%)", type: "number", defaultValue: 85 }
    ],
    outputs: [
      { id: "CFM", label: "Required CFM", formula: "CID * RPM * (VE/100) / 3456", unit: "CFM" }
    ],
    theory: "CFM (Cubic Feet per Minute) rates a carburetor's air-handling capacity. The formula divides displacement × RPM by 3,456 (the constant for a 4-stroke engine at 100% VE). Volumetric efficiency adjusts for real-world air filling.",
    faq: [
      { question: "What is volumetric efficiency?", answer: "VE is the ratio of actual air ingested to theoretical displacement volume. Street engines: 80–85%. High-performance: 90–100%. Turbo/supercharged can exceed 100%." },
      { question: "Is bigger CFM always better?", answer: "No. An oversized carburetor reduces air velocity through the venturi, causing poor fuel atomization and sluggish throttle response at low RPM. Match CFM to actual engine needs." },
      { question: "What is a CID?", answer: "Cubic Inch Displacement — total swept volume of all cylinders in cubic inches. A 350 CID = 5.7 liters. Multiply liters × 61.024 for CID." }
    ],
    seoMeta: { title: "Carburetor CFM Calculator", description: "Estimate required carburetor CFM.", keywords: "carburetor, CFM, engine airflow, displacement, volumetric efficiency" }
  },
  {
    id: "crawl-ratio-calculator", name: "Crawl Ratio Calculator",
    description: "Calculate the overall crawl ratio of a vehicle drivetrain.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "CR = G_1 \\times G_{tc} \\times G_{axle}",
    inputs: [
      { id: "G1", label: "First Gear Ratio", type: "number", defaultValue: 4.03 },
      { id: "Gtc", label: "Transfer Case Low Ratio", type: "number", defaultValue: 2.72 },
      { id: "G_axle", label: "Axle (Final Drive) Ratio", type: "number", defaultValue: 4.10 }
    ],
    outputs: [
      { id: "CR", label: "Crawl Ratio", formula: "G1 * Gtc * G_axle", unit: ":1" }
    ],
    theory: "Crawl ratio is the total gear reduction from engine to wheels in the lowest possible gear. Higher crawl ratios provide more torque multiplication for rock crawling and steep hills but limit top speed. Off-road vehicles typically aim for crawl ratios above 40:1.",
    faq: [
      { question: "What is a good crawl ratio?", answer: "Street 4x4: 20–30:1. Moderate off-road: 40–60:1. Rock crawling: 60–100+:1. Higher ratios allow slower, more controlled movement over obstacles." },
      { question: "How do I increase crawl ratio?", answer: "Install lower (numerically higher) axle gears, deeper transfer case gearing, or a lower first gear. Each multiplication compounds the effect." },
      { question: "What's the trade-off?", answer: "Higher crawl ratio = better low-speed control but lower top speed and worse highway fuel economy. Many enthusiasts change axle gears when fitting larger tires." }
    ],
    seoMeta: { title: "Crawl Ratio Calculator", description: "Calculate vehicle crawl ratio.", keywords: "crawl ratio, gear ratio, off-road, 4x4, drivetrain" }
  },
  {
    id: "engine-displacement-calculator", name: "Engine Displacement Calculator",
    description: "Calculate total engine displacement from bore, stroke, and number of cylinders.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "V_d = \\frac{\\pi}{4} \\cdot B^2 \\cdot S \\cdot N",
    inputs: [
      { id: "B_mm", label: "Bore (mm)", type: "number", defaultValue: 86 },
      { id: "S_mm", label: "Stroke (mm)", type: "number", defaultValue: 86 },
      { id: "N_cyl", label: "Number of Cylinders", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "Vd_cc", label: "Displacement", formula: "pi/4 * (B_mm/10)^2 * (S_mm/10) * N_cyl", unit: "cc" },
      { id: "Vd_L", label: "Displacement", formula: "pi/4 * (B_mm/10)^2 * (S_mm/10) * N_cyl / 1000", unit: "liters" }
    ],
    theory: "Engine displacement is the total volume swept by all pistons. It is calculated from the cylinder bore (diameter), stroke (piston travel), and number of cylinders. Displacement correlates with power output and is used for vehicle classification and taxation in many countries.",
    faq: [
      { question: "What is bore vs stroke?", answer: "Bore is the cylinder diameter. Stroke is the distance the piston travels. Oversquare (bore > stroke) favors high RPM. Undersquare (stroke > bore) favors torque." },
      { question: "Does more displacement mean more power?", answer: "Generally yes, but specific power (hp/liter) varies enormously. A turbocharged 2.0L can make more power than a naturally aspirated 4.0L." },
      { question: "What is cc?", answer: "Cubic centimeters — 1 cc = 1 mL. A 2,000 cc engine = 2.0 liters. Motorcycle engines are often specified in cc (e.g., 600cc, 1000cc)." }
    ],
    seoMeta: { title: "Engine Displacement Calculator", description: "Calculate engine displacement.", keywords: "engine displacement, bore, stroke, cylinder, cc, liters" }
  },
  {
    id: "exhaust-diameter-calculator", name: "Exhaust Diameter Calculator",
    description: "Estimate the optimal exhaust pipe diameter for an engine.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "D = 2\\sqrt{\\frac{HP \\times 2.1}{v_{\\text{max}}}}",
    inputs: [
      { id: "HP", label: "Engine Horsepower", type: "number", defaultValue: 300 },
      { id: "v_max_fps", label: "Max Exhaust Velocity (ft/s)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "D_in", label: "Exhaust Diameter", formula: "2 * sqrt(HP * 2.1 / v_max_fps)", unit: "inches" }
    ],
    theory: "Exhaust pipe diameter must balance flow capacity with gas velocity. Too small restricts exhaust flow and reduces power. Too large slows gas velocity, reducing scavenging effect and hurting low-RPM torque. The ideal size depends on horsepower and desired exhaust velocity.",
    faq: [
      { question: "What diameter is right for my car?", answer: "Under 200 hp: 2–2.25 inches. 200–350 hp: 2.5 inches. 350–500 hp: 3 inches. 500+ hp: 3.5–4 inches. Dual exhaust halves the flow per pipe." },
      { question: "Can exhaust be too big?", answer: "Yes. Oversized exhaust reduces backpressure excessively, slowing exhaust gas velocity. This hurts scavenging (pulling fresh charge in) and reduces low-end torque. Bigger is not always better." },
      { question: "What about header pipe size?", answer: "Primary header tubes should be smaller than the exhaust pipe. A general rule is primary diameter = 0.8 × single-cylinder displacement^(1/3) in inches." }
    ],
    seoMeta: { title: "Exhaust Diameter Calculator", description: "Estimate optimal exhaust pipe diameter.", keywords: "exhaust diameter, pipe size, horsepower, exhaust velocity" }
  },
  {
    id: "fulcrum-calculator", name: "Fulcrum Calculator",
    description: "Calculate the fulcrum position for balancing a lever.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "d_1 = \\frac{m_2 \\cdot L}{m_1 + m_2}",
    inputs: [
      { id: "m1", label: "Mass 1 (kg)", type: "number", defaultValue: 10 },
      { id: "m2", label: "Mass 2 (kg)", type: "number", defaultValue: 20 },
      { id: "L_total", label: "Total Lever Length (m)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "d1", label: "Distance from Mass 1 to Fulcrum", formula: "m2 * L_total / (m1 + m2)", unit: "m" },
      { id: "d2", label: "Distance from Mass 2 to Fulcrum", formula: "m1 * L_total / (m1 + m2)", unit: "m" }
    ],
    theory: "The fulcrum position that balances a lever satisfies m₁d₁ = m₂d₂ (torque equilibrium). The heavier mass must be closer to the fulcrum. This principle is the foundation of all lever-based mechanisms, from seesaws to balance scales.",
    faq: [
      { question: "What are the three classes of levers?", answer: "Class 1: fulcrum between load and effort (seesaw, scissors). Class 2: load between fulcrum and effort (wheelbarrow, nutcracker). Class 3: effort between fulcrum and load (tweezers, fishing rod)." },
      { question: "Who discovered the lever principle?", answer: "Archimedes formalized it around 250 BC, famously saying 'Give me a place to stand and I will move the Earth.' The lever is one of the six classical simple machines." },
      { question: "What is mechanical advantage of a lever?", answer: "MA = effort arm / load arm = d_effort / d_load. A lever with MA = 5 multiplies your force by 5× but requires 5× the movement distance." }
    ],
    seoMeta: { title: "Fulcrum Calculator", description: "Calculate fulcrum position for lever balance.", keywords: "fulcrum, lever, balance, torque, moment, simple machine" }
  },
  {
    id: "gear-ratio-calculator", name: "Gear Ratio Calculator",
    description: "Calculate the gear ratio between two meshing gears.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "GR = \\frac{N_{\\text{driven}}}{N_{\\text{driver}}}",
    inputs: [
      { id: "N_driven", label: "Driven Gear Teeth", type: "number", defaultValue: 60 },
      { id: "N_driver", label: "Driver Gear Teeth", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "GR", label: "Gear Ratio", formula: "N_driven / N_driver", unit: ":1" },
      { id: "speed_mult", label: "Speed Multiplier", formula: "N_driver / N_driven", unit: "" }
    ],
    theory: "Gear ratio determines the speed and torque relationship between meshing gears. A ratio greater than 1 reduces speed but multiplies torque (gear reduction). A ratio less than 1 increases speed but reduces torque (overdrive). Power is conserved (minus friction losses).",
    faq: [
      { question: "How does gear ratio affect torque?", answer: "Torque_output = Torque_input × Gear_Ratio × Efficiency. A 3:1 ratio triples the torque but cuts speed to 1/3. This is why low gears in a car provide high torque for hill climbing." },
      { question: "What is a gear train?", answer: "Multiple gear pairs in series. The overall ratio is the product of individual ratios. A 3:1 followed by 4:1 gives 12:1 total reduction. Compound gear trains can achieve very high ratios in compact space." },
      { question: "What is backlash?", answer: "Backlash is the play between meshing gear teeth. Some is necessary for lubrication and thermal expansion, but excessive backlash causes imprecise positioning. Anti-backlash gears use spring-loaded split gears to eliminate play." }
    ],
    seoMeta: { title: "Gear Ratio Calculator", description: "Calculate gear ratio between meshing gears.", keywords: "gear ratio, teeth, torque, speed, gear reduction, transmission" }
  },
  {
    id: "lever-calculator", name: "Lever Calculator",
    description: "Calculate the effort force needed to lift a load using a lever.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "F_e = \\frac{F_L \\cdot d_L}{d_e}",
    inputs: [
      { id: "FL", label: "Load Force (N)", type: "number", defaultValue: 500 },
      { id: "dL", label: "Load Arm Distance (m)", type: "number", defaultValue: 0.5 },
      { id: "de", label: "Effort Arm Distance (m)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "Fe", label: "Effort Force Required", formula: "FL * dL / de", unit: "N" },
      { id: "MA", label: "Mechanical Advantage", formula: "de / dL", unit: "" }
    ],
    theory: "A lever multiplies force by trading distance for force (or vice versa). The effort force equals the load force times the ratio of load arm to effort arm. Mechanical advantage is the ratio of the effort arm to the load arm.",
    faq: [
      { question: "What determines mechanical advantage?", answer: "MA = effort arm / load arm. A longer effort arm or shorter load arm increases MA. A 4:1 ratio means you apply 1/4 the force but move 4× the distance." },
      { question: "Do levers create energy?", answer: "No. Levers conserve energy (work in = work out, minus friction). What you gain in force, you lose in distance. The work done (F × d) is the same on both sides." },
      { question: "What are examples of levers?", answer: "Class 1: scissors, crowbar, seesaw. Class 2: wheelbarrow, bottle opener, nutcracker. Class 3: tweezers, fishing rod, human forearm." }
    ],
    seoMeta: { title: "Lever Calculator", description: "Calculate effort force and mechanical advantage.", keywords: "lever, mechanical advantage, fulcrum, effort, load, simple machine" }
  },
  {
    id: "linear-actuator-force-calculator", name: "Linear Actuator Force Calculator",
    description: "Calculate the force output of a linear actuator from pressure and piston area.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "F = P \\times A",
    inputs: [
      { id: "P", label: "Pressure (Pa)", type: "number", defaultValue: 1e6 },
      { id: "A_piston", label: "Piston Area (m²)", type: "number", defaultValue: 0.005 }
    ],
    outputs: [
      { id: "F_act", label: "Actuator Force", formula: "P * A_piston", unit: "N" }
    ],
    theory: "Linear actuators convert pressure (hydraulic or pneumatic) into linear force. Force equals pressure times piston area. Hydraulic actuators use incompressible fluid for high forces; pneumatic actuators use compressed air for lighter-duty applications.",
    faq: [
      { question: "Hydraulic vs pneumatic?", answer: "Hydraulic: very high forces (thousands of kN), precise control, higher cost. Pneumatic: lower force, faster speed, simpler, cheaper, no contamination risk from leaks." },
      { question: "How do I size an actuator?", answer: "Determine the required force, stroke length, and speed. Select pressure rating and calculate needed piston diameter. Add safety factor (1.5–2.0). Consider rod-side vs bore-side area for retraction force." },
      { question: "What about electric linear actuators?", answer: "Electric actuators use motors with lead screws or ball screws. They offer precise position control, no fluid leaks, and programmability, but typically lower force than hydraulic systems." }
    ],
    seoMeta: { title: "Linear Actuator Force Calculator", description: "Calculate actuator force from pressure and area.", keywords: "linear actuator, hydraulic, pneumatic, piston force, cylinder" }
  },
  {
    id: "mechanical-advantage-calculator", name: "Mechanical Advantage Calculator",
    description: "Calculate the mechanical advantage of a simple machine.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "MA = \\frac{F_{\\text{out}}}{F_{\\text{in}}} = \\frac{d_{\\text{in}}}{d_{\\text{out}}}",
    inputs: [
      { id: "F_out", label: "Output Force (N)", type: "number", defaultValue: 500 },
      { id: "F_in", label: "Input Force (N)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "MA", label: "Mechanical Advantage", formula: "F_out / F_in", unit: "" }
    ],
    theory: "Mechanical advantage is the force multiplication provided by a machine. An ideal MA (no friction) equals the distance ratio. The actual MA (considering friction) is always less. All simple machines trade force for distance while (ideally) conserving energy.",
    faq: [
      { question: "What are the six simple machines?", answer: "Lever, wheel and axle, pulley, inclined plane, wedge, and screw. All complex machines are combinations of these basic elements." },
      { question: "Can MA be less than 1?", answer: "Yes. When MA < 1, the machine multiplies speed/distance instead of force (like bicycle high gears or a fishing rod). You apply more force but gain more distance." },
      { question: "What is efficiency?", answer: "Efficiency = (actual MA / ideal MA) × 100%. Friction always reduces actual MA below ideal. Well-lubricated gears: 95–98%. Screws: 25–80%. Pulleys: 85–95%." }
    ],
    seoMeta: { title: "Mechanical Advantage Calculator", description: "Calculate mechanical advantage.", keywords: "mechanical advantage, simple machine, force multiplication, efficiency" }
  },
  {
    id: "npsh-calculator", name: "NPSH Calculator",
    description: "Calculate Net Positive Suction Head available for a pump.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "NPSH_a = \\frac{P_{atm} - P_v}{\\rho g} + h_s - h_f",
    inputs: [
      { id: "Patm", label: "Atmospheric Pressure (Pa)", type: "number", defaultValue: 101325 },
      { id: "Pv", label: "Vapor Pressure (Pa)", type: "number", defaultValue: 2339, helpText: "Water at 20°C: 2339 Pa" },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 998 },
      { id: "hs", label: "Static Suction Head (m)", type: "number", defaultValue: 3, helpText: "Positive if pump below liquid" },
      { id: "hf", label: "Friction Losses (m)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "NPSHa", label: "NPSH Available", formula: "(Patm - Pv) / (rho * 9.80665) + hs - hf", unit: "m" }
    ],
    theory: "NPSH_available is the total head at the pump suction minus the liquid's vapor pressure head. If NPSH_a falls below the pump's required NPSH_r, the liquid boils locally (cavitation), causing damage, noise, and performance loss. NPSH_a must always exceed NPSH_r.",
    faq: [
      { question: "What is cavitation?", answer: "Cavitation is the formation and violent collapse of vapor bubbles when local pressure drops below vapor pressure. It erodes impeller surfaces, reduces pump efficiency, and causes distinctive rattling noise." },
      { question: "How do I avoid cavitation?", answer: "Ensure NPSHa > NPSHr with safety margin (1.5–2×). Increase suction head, reduce friction losses, use larger suction pipe, reduce fluid temperature, or choose a pump with lower NPSHr." },
      { question: "What is vapor pressure?", answer: "The pressure at which a liquid starts to boil at a given temperature. Water at 20°C: 2.3 kPa. At 100°C: 101.3 kPa (atmospheric). Hot liquids have higher vapor pressure, making cavitation more likely." }
    ],
    seoMeta: { title: "NPSH Calculator", description: "Calculate Net Positive Suction Head available.", keywords: "NPSH, cavitation, pump suction, vapor pressure, head" }
  },
  {
    id: "piston-force-calculator", name: "Piston Force Calculator",
    description: "Calculate the force exerted by a piston from pressure and bore diameter.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "F = P \\times \\frac{\\pi d^2}{4}",
    inputs: [
      { id: "P", label: "Pressure (Pa)", type: "number", defaultValue: 1e6 },
      { id: "d_bore", label: "Bore Diameter (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "F_piston", label: "Piston Force", formula: "P * pi * d_bore^2 / 4", unit: "N" }
    ],
    theory: "The force on a piston equals the pressure multiplied by the piston's cross-sectional area. This is the fundamental relationship for all hydraulic cylinders, pneumatic actuators, and internal combustion engines.",
    faq: [
      { question: "How much force does a typical hydraulic cylinder produce?", answer: "A 100mm bore cylinder at 200 bar (20 MPa): F = 20×10⁶ × π(0.05)² ≈ 157 kN (35,000 lbs). This is why hydraulic systems are used for heavy machinery." },
      { question: "What about retraction force?", answer: "Retraction force is lower because the rod area reduces the effective piston area. F_retract = P × (A_piston - A_rod). For a rod diameter half the bore, retraction force is 75% of extension force." },
      { question: "How does Pascal's Law apply?", answer: "Pascal's Law states that pressure is transmitted equally in all directions. This allows a small piston with high pressure to generate large forces at a bigger piston — the basis of all hydraulic press systems." }
    ],
    seoMeta: { title: "Piston Force Calculator", description: "Calculate force from pressure and bore.", keywords: "piston force, hydraulic, bore, pressure, cylinder" }
  },
  {
    id: "piston-speed-calculator", name: "Piston Speed Calculator",
    description: "Calculate the mean piston speed of an internal combustion engine.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "\\bar{v}_p = \\frac{2 \\cdot S \\cdot N}{60}",
    inputs: [
      { id: "S_m", label: "Stroke (m)", type: "number", defaultValue: 0.086 },
      { id: "N_rpm", label: "Engine RPM", type: "number", defaultValue: 6000 }
    ],
    outputs: [
      { id: "vp", label: "Mean Piston Speed", formula: "2 * S_m * N_rpm / 60", unit: "m/s" }
    ],
    theory: "Mean piston speed is the average velocity of the piston over one revolution. It is a key limiting factor for engine RPM — at excessive piston speed, inertia forces and rod bearing loads become destructive. Most production engines are limited to 20–25 m/s mean piston speed.",
    faq: [
      { question: "What limits piston speed?", answer: "Typically 20–25 m/s for production engines. F1 engines reach ~27 m/s. Beyond this, connecting rod and bearing failures occur due to enormous inertia forces." },
      { question: "Why is mean piston speed important?", answer: "It determines maximum practical RPM for a given stroke. Short-stroke (oversquare) engines can rev higher because the piston travels less distance per revolution." },
      { question: "How do F1 engines rev so high?", answer: "Short stroke (~40mm vs ~86mm for a family car), lightweight pistons, titanium connecting rods, and pneumatic valve springs. This allows 15,000+ RPM within piston speed limits." }
    ],
    seoMeta: { title: "Piston Speed Calculator", description: "Calculate mean piston speed.", keywords: "piston speed, engine RPM, stroke, mean piston speed" }
  },
  {
    id: "prop-pitch-calculator", name: "Prop Pitch Calculator",
    description: "Calculate the theoretical distance a propeller advances per revolution.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "V_{\\text{advance}} = P \\times RPM",
    inputs: [
      { id: "P_in", label: "Propeller Pitch (inches)", type: "number", defaultValue: 21 },
      { id: "RPM", label: "RPM", type: "number", defaultValue: 3000 }
    ],
    outputs: [
      { id: "V_mph", label: "Theoretical Speed", formula: "P_in * RPM * 60 / 12 / 5280", unit: "mph" },
      { id: "V_knots", label: "Theoretical Speed", formula: "P_in * RPM * 60 / 12 / 6076.12", unit: "knots" }
    ],
    theory: "Propeller pitch is the theoretical distance a propeller advances through the medium per revolution (like a screw thread). A 21-inch pitch propeller theoretically moves forward 21 inches per revolution. Actual advance is less due to slip.",
    faq: [
      { question: "What is pitch?", answer: "Pitch is the distance a propeller would advance in one revolution if moving through a solid medium with zero slip — like a screw in wood. Higher pitch = more speed per RPM but more load on the engine." },
      { question: "How do I choose the right pitch?", answer: "Lower pitch: better acceleration, heavier loads, lower top speed. Higher pitch: higher top speed, slower acceleration. The goal is to reach max RPM at wide-open throttle." },
      { question: "What is blade pitch angle?", answer: "The angle between the blade face and the plane of rotation. It varies along the blade — steeper near the hub, flatter near the tip — to maintain relatively constant pitch distance." }
    ],
    seoMeta: { title: "Prop Pitch Calculator", description: "Calculate propeller theoretical advance.", keywords: "propeller pitch, RPM, advance, boat prop, aircraft propeller" }
  },
  {
    id: "prop-slip-calculator", name: "Prop Slip Calculator",
    description: "Calculate the propeller slip percentage.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "\\text{Slip} = \\frac{V_{\\text{theoretical}} - V_{\\text{actual}}}{V_{\\text{theoretical}}} \\times 100",
    inputs: [
      { id: "V_theoretical", label: "Theoretical Speed (mph)", type: "number", defaultValue: 50 },
      { id: "V_actual", label: "Actual Speed (mph)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "slip_pct", label: "Slip", formula: "(V_theoretical - V_actual) / V_theoretical * 100", unit: "%" }
    ],
    theory: "Propeller slip is the difference between theoretical advance (pitch × RPM) and actual forward speed. Some slip is necessary — a propeller with zero slip would produce zero thrust (like spinning a screw in air). Typical slip ranges from 10–30% depending on load and design.",
    faq: [
      { question: "What is normal propeller slip?", answer: "Boats: 10–20% at cruise, more at low speed. Aircraft: 5–15%. High slip indicates overloading, damaged prop, or incorrect pitch." },
      { question: "Can slip be zero?", answer: "No. Zero slip means zero thrust (nothing to push against). A propeller must always have some slip to generate a pressure difference between its faces, producing forward thrust." },
      { question: "How does slip relate to efficiency?", answer: "Lower slip generally means higher propulsive efficiency. But extremely low slip means the propeller is underloaded. Optimal efficiency typically occurs at 10–15% slip." }
    ],
    seoMeta: { title: "Prop Slip Calculator", description: "Calculate propeller slip percentage.", keywords: "propeller slip, efficiency, theoretical speed, actual speed" }
  },
  {
    id: "pulley-calculator", name: "Pulley Calculator",
    description: "Calculate the mechanical advantage and output speed of a pulley system.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "MA = \\frac{D_{\\text{driven}}}{D_{\\text{driver}}}",
    inputs: [
      { id: "D_driver", label: "Driver Pulley Diameter (mm)", type: "number", defaultValue: 100 },
      { id: "D_driven", label: "Driven Pulley Diameter (mm)", type: "number", defaultValue: 300 },
      { id: "RPM_in", label: "Input RPM", type: "number", defaultValue: 1800 }
    ],
    outputs: [
      { id: "RPM_out", label: "Output RPM", formula: "RPM_in * D_driver / D_driven", unit: "RPM" },
      { id: "ratio", label: "Speed Ratio", formula: "D_driven / D_driver", unit: ":1" }
    ],
    theory: "Pulley systems transmit power through belts. The speed ratio equals the diameter ratio (inversely). A larger driven pulley runs slower but with more torque. Multi-stage pulley systems multiply ratios for greater reduction.",
    faq: [
      { question: "How do block-and-tackle pulleys work?", answer: "Multiple pulley wheels share the load. 2 pulleys = 2:1 MA. 4 pulleys = 4:1 MA. You pull 4× the rope length but with 1/4 the force. Friction reduces actual MA by 5–10% per pulley." },
      { question: "What are step pulleys?", answer: "Multiple diameter steps on one shaft. Shifting the belt to different steps changes the speed ratio without changing pulleys — common on drill presses and lathes." },
      { question: "Belt vs chain vs gear drive?", answer: "Belts: quiet, slip absorbs shock, cheaper. Chains: no slip, higher loads, require lubrication. Gears: most precise, highest power, most expensive." }
    ],
    seoMeta: { title: "Pulley Calculator", description: "Calculate pulley speed ratio and output RPM.", keywords: "pulley, belt drive, speed ratio, diameter, RPM" }
  },
  {
    id: "pump-horsepower-calculator", name: "Pump Horsepower Calculator",
    description: "Calculate the hydraulic horsepower required for a pump.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "HP = \\frac{Q \\times H \\times SG}{3960 \\times \\eta}",
    inputs: [
      { id: "Q_gpm", label: "Flow Rate (GPM)", type: "number", defaultValue: 100 },
      { id: "H_ft", label: "Total Head (ft)", type: "number", defaultValue: 100 },
      { id: "SG", label: "Specific Gravity", type: "number", defaultValue: 1.0 },
      { id: "eta_pct", label: "Pump Efficiency (%)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "HP", label: "Brake Horsepower", formula: "Q_gpm * H_ft * SG / (3960 * eta_pct / 100)", unit: "hp" }
    ],
    theory: "Pump horsepower accounts for the energy needed to move fluid at a given flow rate against a given head (pressure). The constant 3,960 converts GPM×ft to horsepower. Pump efficiency (typically 60–85%) accounts for mechanical and hydraulic losses.",
    faq: [
      { question: "What is total head?", answer: "Total head = static head (elevation change) + friction head (pipe losses) + pressure head (system pressure requirement). It represents the total energy the pump must impart to the fluid." },
      { question: "What is pump efficiency?", answer: "The ratio of hydraulic power output to mechanical power input. Small pumps: 50–65%. Medium: 70–80%. Large centrifugal: 80–90%. Efficiency varies with flow rate — pumps are most efficient at their design point." },
      { question: "What is the difference between BHP and WHP?", answer: "WHP (Water HP) = Q×H/3960 is the theoretical power in the fluid. BHP (Brake HP) = WHP/efficiency is the actual shaft power required. BHP is always larger due to losses." }
    ],
    seoMeta: { title: "Pump Horsepower Calculator", description: "Calculate pump brake horsepower.", keywords: "pump horsepower, BHP, flow rate, head, pump efficiency" }
  },
  {
    id: "shaft-size-calculator", name: "Shaft Size Calculator",
    description: "Calculate the minimum shaft diameter for a given torque and allowable shear stress.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "d = \\left(\\frac{16T}{\\pi \\tau_{\\text{allow}}}\\right)^{1/3}",
    inputs: [
      { id: "T_nm", label: "Torque (N·m)", type: "number", defaultValue: 500 },
      { id: "tau_allow", label: "Allowable Shear Stress (Pa)", type: "number", defaultValue: 40e6 }
    ],
    outputs: [
      { id: "d_min", label: "Minimum Shaft Diameter", formula: "(16 * T_nm / (pi * tau_allow))^(1/3)", unit: "m" },
      { id: "d_min_mm", label: "Minimum Shaft Diameter", formula: "(16 * T_nm / (pi * tau_allow))^(1/3) * 1000", unit: "mm" }
    ],
    theory: "The minimum shaft diameter for a solid circular shaft under pure torsion comes from the torsion formula τ = Tc/J. Setting τ equal to the allowable shear stress and solving for d gives d = (16T/πτ)^(1/3). Real shafts must also account for bending loads, keyways, and fatigue.",
    faq: [
      { question: "What is a typical allowable shear stress?", answer: "Mild steel: 40 MPa. Medium carbon steel: 60 MPa. Alloy steel: 80–120 MPa. These include a safety factor of 2–3 on yield shear strength." },
      { question: "Why round up the shaft size?", answer: "Standard shaft sizes, keyway stress concentration, fatigue derating, and misalignment all require the actual shaft to be larger than the minimum calculated. Typically round up to the next standard size." },
      { question: "How do combined loads affect sizing?", answer: "Most shafts carry both bending and torsion. Use the equivalent torque: Te = √(M² + T²) for maximum shear stress theory, or √(M² + ¾T²) for Von Mises. This always gives a larger diameter than pure torsion." }
    ],
    seoMeta: { title: "Shaft Size Calculator", description: "Calculate minimum shaft diameter for torque.", keywords: "shaft diameter, torque, shear stress, shaft design, torsion" }
  },
  {
    id: "speeds-and-feeds-calculator", name: "Speeds and Feeds Calculator",
    description: "Calculate cutting speed and feed rate for machining operations.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "RPM = \\frac{SFM \\times 12}{\\pi \\times D}",
    inputs: [
      { id: "SFM", label: "Surface Speed (SFM)", type: "number", defaultValue: 300, helpText: "Aluminum: 500–1000, Steel: 60–300" },
      { id: "D_in", label: "Tool/Workpiece Diameter (inches)", type: "number", defaultValue: 1 },
      { id: "fpt", label: "Feed per Tooth (inches)", type: "number", defaultValue: 0.005 },
      { id: "Z", label: "Number of Flutes/Teeth", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "RPM", label: "Spindle Speed", formula: "SFM * 12 / (pi * D_in)", unit: "RPM" },
      { id: "feed_rate", label: "Feed Rate", formula: "fpt * Z * SFM * 12 / (pi * D_in)", unit: "in/min" }
    ],
    theory: "Cutting speed (SFM) is the surface velocity between tool and workpiece. Spindle RPM converts SFM for a given diameter. Feed rate combines RPM with chip load per tooth and number of teeth. Correct speeds and feeds optimize tool life, surface finish, and material removal rate.",
    faq: [
      { question: "What is SFM?", answer: "Surface Feet per Minute — the relative speed between cutting tool and workpiece surface. Each material/tool combination has an optimal SFM range. Too fast causes rapid tool wear; too slow causes rubbing and work hardening." },
      { question: "How does material affect SFM?", answer: "Aluminum: 500–1000 SFM. Mild steel: 80–300 SFM. Stainless steel: 40–120 SFM. Titanium: 30–60 SFM. Harder materials require lower surface speeds." },
      { question: "What is chip load?", answer: "Feed per tooth (chip load) is the thickness of material each cutting edge removes per revolution. Too thin: rubbing, work hardening. Too thick: tool breakage. Typical: 0.001–0.010 inches." }
    ],
    seoMeta: { title: "Speeds and Feeds Calculator", description: "Calculate machining speeds and feeds.", keywords: "speeds and feeds, SFM, RPM, feed rate, machining, CNC" }
  },
  {
    id: "spring-calculator", name: "Spring Calculator",
    description: "Calculate the force or deflection of a helical compression spring.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "F = k \\cdot x = \\frac{Gd^4}{8D^3 N} \\cdot x",
    inputs: [
      { id: "G", label: "Shear Modulus (Pa)", type: "number", defaultValue: 79.3e9 },
      { id: "d_wire", label: "Wire Diameter (mm)", type: "number", defaultValue: 2 },
      { id: "D_coil", label: "Mean Coil Diameter (mm)", type: "number", defaultValue: 20 },
      { id: "Na", label: "Number of Active Coils", type: "number", defaultValue: 10 },
      { id: "x_mm", label: "Deflection (mm)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "k_spring", label: "Spring Rate", formula: "G * (d_wire/1000)^4 / (8 * (D_coil/1000)^3 * Na)", unit: "N/m" },
      { id: "F_spring", label: "Spring Force", formula: "G * (d_wire/1000)^4 / (8 * (D_coil/1000)^3 * Na) * x_mm / 1000", unit: "N" }
    ],
    theory: "Helical spring behavior follows Hooke's Law: F = kx. The spring rate k depends on wire diameter (d⁴ — very sensitive!), coil diameter (D³ — inversely), number of active coils (inversely), and material shear modulus.",
    faq: [
      { question: "Why does wire diameter have such a strong effect?", answer: "Spring rate depends on d⁴. Doubling wire diameter increases spring rate by 16×. This extreme sensitivity means wire diameter must be precisely controlled in spring manufacturing." },
      { question: "What is the spring index?", answer: "C = D/d (coil diameter / wire diameter). Ideal range: 4–12. Too low (tight coils) is hard to manufacture. Too high (loose coils) may buckle under load." },
      { question: "What materials are springs made from?", answer: "Music wire (highest strength), chrome vanadium, chrome silicon, stainless steel 302/316, Inconel (high temperature), phosphor bronze (corrosion resistance)." }
    ],
    seoMeta: { title: "Spring Calculator", description: "Calculate helical spring force and rate.", keywords: "spring calculator, spring rate, Hooke's law, coil spring, deflection" }
  },
  {
    id: "spring-rate-calculator", name: "Spring Rate Calculator",
    description: "Calculate the spring rate (stiffness constant) from force and deflection.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "k = \\frac{F}{x}",
    inputs: [
      { id: "F", label: "Applied Force (N)", type: "number", defaultValue: 100 },
      { id: "x_disp", label: "Displacement (m)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "k", label: "Spring Rate", formula: "F / x_disp", unit: "N/m" }
    ],
    theory: "Spring rate (spring constant) k = F/x is the force per unit deflection. It is the slope of the force-deflection curve in the linear elastic region. Spring rate determines vibration frequency, ride quality (in vehicles), and load-bearing capacity.",
    faq: [
      { question: "What determines a good spring rate?", answer: "It depends on the application. Vehicle suspension: 10–100 N/mm. Valve springs: 50–200 N/mm. Watch springs: 0.001 N/mm. Higher rate = stiffer spring." },
      { question: "What happens with springs in series?", answer: "Springs in series: 1/k_total = 1/k₁ + 1/k₂. The combined rate is softer than either individual spring. This is the opposite of resistors in parallel." },
      { question: "What about springs in parallel?", answer: "Springs in parallel: k_total = k₁ + k₂. The combined rate equals the sum — stiffer than either individual spring. Vehicle suspension is essentially springs in parallel." }
    ],
    seoMeta: { title: "Spring Rate Calculator", description: "Calculate spring rate from force and deflection.", keywords: "spring rate, spring constant, stiffness, Hooke's law" }
  },
  {
    id: "spring-rate-converter", name: "Spring Rate Converter",
    description: "Convert spring rate between different unit systems.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "k_{\\text{N/mm}} = k_{\\text{lb/in}} \\times 0.17513",
    inputs: [
      { id: "k_lbin", label: "Spring Rate (lb/in)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "k_nmm", label: "Spring Rate (N/mm)", formula: "k_lbin * 0.17513", unit: "N/mm" },
      { id: "k_nm", label: "Spring Rate (N/m)", formula: "k_lbin * 175.13", unit: "N/m" },
      { id: "k_kgmm", label: "Spring Rate (kg/mm)", formula: "k_lbin * 0.017858", unit: "kg/mm" }
    ],
    theory: "Spring rate conversions are essential when working with specifications from different countries. 1 lb/in = 0.17513 N/mm = 175.13 N/m. Automotive springs are often specified in lb/in (US) or N/mm (metric).",
    faq: [
      { question: "What units are most common?", answer: "Automotive (US): lb/in. Automotive (metric): N/mm or kg/mm. Scientific/engineering: N/m. Industrial springs: lb/in or N/mm." },
      { question: "How do I convert N/mm to lb/in?", answer: "Multiply by 5.7101. So a 50 N/mm spring = 285 lb/in. This is a common conversion for comparing suspension components." },
      { question: "What is kg/mm?", answer: "Kilograms per millimeter — treats kilogram as a force unit (kgf). 1 kg/mm = 9.80665 N/mm. Common in Japanese automotive specifications." }
    ],
    seoMeta: { title: "Spring Rate Converter", description: "Convert spring rate between units.", keywords: "spring rate conversion, lb/in, N/mm, spring constant, units" }
  },
  {
    id: "torsion-spring-calculator", name: "Torsion Spring Calculator",
    description: "Calculate the torque produced by a torsion spring at a given angle.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "M = k_\\theta \\cdot \\theta = \\frac{Ed^4}{64DN_a} \\cdot \\theta",
    inputs: [
      { id: "E", label: "Young's Modulus (Pa)", type: "number", defaultValue: 200e9 },
      { id: "d_wire", label: "Wire Diameter (mm)", type: "number", defaultValue: 2 },
      { id: "D_coil", label: "Mean Coil Diameter (mm)", type: "number", defaultValue: 20 },
      { id: "Na", label: "Number of Active Coils", type: "number", defaultValue: 5 },
      { id: "theta_deg", label: "Deflection Angle (°)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "k_theta", label: "Torsion Spring Rate", formula: "E * (d_wire/1000)^4 / (64 * (D_coil/1000) * Na)", unit: "N·m/rad" },
      { id: "M_torque", label: "Torque", formula: "E * (d_wire/1000)^4 / (64 * (D_coil/1000) * Na) * theta_deg * pi / 180", unit: "N·m" }
    ],
    theory: "Torsion springs resist rotational deflection by producing a restoring torque proportional to the angular displacement. Unlike compression springs (which use shear modulus G), torsion springs are loaded in bending, so Young's modulus E governs the rate.",
    faq: [
      { question: "Where are torsion springs used?", answer: "Clothespins, mousetraps, garage doors, clipboard mechanisms, hinges, and retractors. Any application needing a rotational restoring force uses torsion springs." },
      { question: "Why does a torsion spring use E instead of G?", answer: "Torsion springs primarily undergo bending (each coil is like a curved beam), not shearing like compression springs. The wire material resists bending via Young's modulus." },
      { question: "How many degrees can a torsion spring travel?", answer: "Typical travel: 90–360°. Maximum depends on the number of coils — each coil contributes about 360° of wind-up capacity. Exceeding maximum deflection causes permanent set (plastic deformation)." }
    ],
    seoMeta: { title: "Torsion Spring Calculator", description: "Calculate torsion spring torque.", keywords: "torsion spring, torque, angular deflection, spring rate" }
  },
  {
    id: "transmission-calculator", name: "Transmission Calculator",
    description: "Calculate the vehicle speed from engine RPM, gear ratio, and tire size.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "v = \\frac{RPM \\times \\pi \\times D_{tire}}{GR_{total} \\times 60}",
    inputs: [
      { id: "RPM", label: "Engine RPM", type: "number", defaultValue: 3000 },
      { id: "GR_trans", label: "Transmission Gear Ratio", type: "number", defaultValue: 1.0 },
      { id: "GR_final", label: "Final Drive Ratio", type: "number", defaultValue: 3.73 },
      { id: "D_tire_in", label: "Tire Diameter (inches)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "V_mph", label: "Vehicle Speed", formula: "RPM * pi * (D_tire_in * 0.0254) / (GR_trans * GR_final * 60) * 2.23694", unit: "mph" }
    ],
    theory: "Vehicle speed is determined by engine RPM, total gear reduction (transmission × final drive), and tire diameter. Speed = wheel RPM × tire circumference. Larger tires or lower gear ratios increase speed at a given RPM but reduce available torque.",
    faq: [
      { question: "How do gear ratios affect driving?", answer: "Lower gears (higher ratio number): more torque multiplication, lower speed per RPM. Higher gears (lower ratio): less torque, more speed. Overdrive (ratio < 1) reduces RPM for highway fuel economy." },
      { question: "How does tire size affect speedometer?", answer: "Larger tires = more distance per revolution = actual speed is higher than indicated. A 10% increase in tire diameter makes the speedometer read ~10% low." },
      { question: "What is a typical final drive ratio?", answer: "Economy cars: 3.0–3.5. Sports cars: 3.5–4.1. Trucks: 3.7–4.5. Lower numbers give better highway fuel economy; higher numbers give better acceleration." }
    ],
    seoMeta: { title: "Transmission Calculator", description: "Calculate vehicle speed from gear ratios.", keywords: "transmission, gear ratio, vehicle speed, RPM, tire diameter" }
  },
  {
    id: "twist-rate-calculator", name: "Twist Rate Calculator",
    description: "Calculate the optimal rifling twist rate for bullet stabilization.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "T = \\frac{CD^2}{L} \\times \\frac{150}{\\sqrt{SG}}",
    inputs: [
      { id: "D_cal", label: "Bullet Diameter (inches)", type: "number", defaultValue: 0.308 },
      { id: "L_bullet", label: "Bullet Length (inches)", type: "number", defaultValue: 1.1 },
      { id: "SG_bullet", label: "Bullet Specific Gravity", type: "number", defaultValue: 10.9, helpText: "Lead core: 10.9" }
    ],
    outputs: [
      { id: "T_greenhill", label: "Greenhill Twist Rate (1 turn in)", formula: "150 * D_cal^2 / (L_bullet * sqrt(SG_bullet / 10.9))", unit: "inches" }
    ],
    theory: "Rifling twist rate determines the spin rate of a bullet for gyroscopic stability. The Greenhill formula, developed by Sir Alfred Greenhill in 1879, estimates the optimal twist rate based on bullet dimensions and density. Faster twist (shorter distance per turn) stabilizes longer, heavier bullets.",
    faq: [
      { question: "What does twist rate mean?", answer: "Twist rate is expressed as '1 turn in X inches' (e.g., 1:10 means one complete rotation every 10 inches). Lower X = faster twist. .223 Rem: 1:7 to 1:12. .308 Win: 1:10 to 1:12." },
      { question: "What happens with wrong twist rate?", answer: "Too slow: bullet tumbles and accuracy degrades dramatically. Too fast: can cause bullet jacket failure and slightly reduces accuracy. Too slow is far worse than too fast." },
      { question: "Why do longer bullets need faster twist?", answer: "Longer bullets have more aerodynamic overturning moment. Higher spin rate (faster twist) provides more gyroscopic stability to resist tumbling. This is why modern heavy match bullets need faster twist rates." }
    ],
    seoMeta: { title: "Twist Rate Calculator — Greenhill Formula", description: "Calculate optimal rifling twist rate.", keywords: "twist rate, rifling, Greenhill, bullet stabilization, ballistics" }
  },
  {
    id: "wing-loading-calculator", name: "Wing Loading Calculator",
    description: "Calculate the wing loading of an aircraft.",
    category: "physics", subcategory: "machines-mechanisms",
    scientificFormula: "WL = \\frac{W}{S}",
    inputs: [
      { id: "W_lbs", label: "Aircraft Weight (lbs)", type: "number", defaultValue: 3000 },
      { id: "S_sqft", label: "Wing Area (ft²)", type: "number", defaultValue: 170 }
    ],
    outputs: [
      { id: "WL", label: "Wing Loading", formula: "W_lbs / S_sqft", unit: "lb/ft²" },
      { id: "WL_metric", label: "Wing Loading (metric)", formula: "W_lbs * 0.453592 / (S_sqft * 0.092903)", unit: "kg/m²" }
    ],
    theory: "Wing loading (W/S) is the aircraft weight divided by wing area. It determines stall speed, climb rate, maneuverability, and ride quality in turbulence. Low wing loading enables slow flight and tight turns; high wing loading enables high speed and smooth rides.",
    faq: [
      { question: "What are typical wing loadings?", answer: "Paragliders: 3–5 lb/ft². Light aircraft: 10–20 lb/ft². Fighters: 60–120 lb/ft². Airliners: 100–150 lb/ft². Higher wing loading = higher stall speed and landing speed." },
      { question: "How does wing loading affect stall speed?", answer: "Stall speed ∝ √(W/S). Doubling wing loading increases stall speed by √2 ≈ 41%. This is why heavily loaded aircraft need longer runways." },
      { question: "How does wing loading affect turbulence?", answer: "Higher wing loading = smoother ride in turbulence. The aircraft has more inertia relative to aerodynamic disturbances. This is why heavy airliners ride smoother than light aircraft." }
    ],
    seoMeta: { title: "Wing Loading Calculator", description: "Calculate aircraft wing loading.", keywords: "wing loading, aircraft, weight, wing area, stall speed, aerodynamics" }
  }
];
