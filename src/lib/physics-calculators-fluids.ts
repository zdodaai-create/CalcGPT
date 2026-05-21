import { CalculatorConfig } from "./calculator-types";

export const FLUID_MECHANICS_CALCULATORS: CalculatorConfig[] = [
  {
    id: "bernoullis-equation-calculator", name: "Bernoulli's Equation Calculator",
    description: "Calculate pressure, velocity, or height using Bernoulli's principle.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2",
    inputs: [
      { id: "P1", label: "Pressure at Point 1 (Pa)", type: "number", defaultValue: 101325 },
      { id: "v1", label: "Velocity at Point 1 (m/s)", type: "number", defaultValue: 2 },
      { id: "h1", label: "Height at Point 1 (m)", type: "number", defaultValue: 0 },
      { id: "v2", label: "Velocity at Point 2 (m/s)", type: "number", defaultValue: 5 },
      { id: "h2", label: "Height at Point 2 (m)", type: "number", defaultValue: 0 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "P2", label: "Pressure at Point 2", formula: "P1 + 0.5 * rho * v1^2 + rho * 9.80665 * h1 - 0.5 * rho * v2^2 - rho * 9.80665 * h2", unit: "Pa" }
    ],
    theory: "Bernoulli's equation is conservation of energy for ideal (inviscid, incompressible) fluid flow along a streamline. It states that the sum of pressure energy, kinetic energy, and potential energy per unit volume is constant. Higher velocity means lower pressure — this creates lift on wings and draws fluid through Venturi tubes.",
    faq: [
      { question: "What is the Bernoulli effect?", answer: "Where fluid velocity increases, pressure decreases (and vice versa). This explains airplane lift, chimney draft, curve balls in sports, and the functioning of carburetors and atomizers." },
      { question: "When does Bernoulli's equation not apply?", answer: "It fails for viscous flows (significant friction), compressible flows (Mach > 0.3), unsteady flows, and turbulent flows across streamlines. For these cases, use the Navier-Stokes equations." },
      { question: "How does this create lift on a wing?", answer: "The airfoil shape causes air to move faster over the top surface (longer path, curved flow), creating lower pressure above than below. The pressure difference × wing area = lift force." }
    ],
    seoMeta: { title: "Bernoulli's Equation Calculator", description: "Calculate pressure using Bernoulli's principle.", keywords: "Bernoulli equation, fluid pressure, velocity, streamline, lift" }
  },
  {
    id: "reynolds-number-calculator", name: "Reynolds Number Calculator",
    description: "Calculate the Reynolds number to determine flow regime.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "Re = \\frac{\\rho v D}{\\mu}",
    inputs: [
      { id: "rho", label: "Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "v", label: "Flow Velocity (m/s)", type: "number", defaultValue: 1 },
      { id: "D", label: "Characteristic Length (m)", type: "number", defaultValue: 0.05 },
      { id: "mu", label: "Dynamic Viscosity (Pa·s)", type: "number", defaultValue: 0.001 }
    ],
    outputs: [{ id: "Re", label: "Reynolds Number", formula: "rho * v * D / mu", unit: "" }],
    theory: "The Reynolds number is the ratio of inertial forces to viscous forces in a fluid. Re < 2300: laminar (smooth, predictable). 2300 < Re < 4000: transitional. Re > 4000: turbulent (chaotic mixing). It is the most important dimensionless number in fluid mechanics.",
    faq: [
      { question: "What does Reynolds number tell us?", answer: "Low Re (laminar): viscous forces dominate, flow is smooth and predictable. High Re (turbulent): inertial forces dominate, flow is chaotic with eddies and mixing. The transition point depends on geometry." },
      { question: "What are critical Reynolds numbers?", answer: "Pipe flow: Re_crit ≈ 2300. Flat plate: Re_crit ≈ 5×10⁵. Sphere drag: Re_crit ≈ 2×10⁵. Below critical: laminar. Above: turbulent." },
      { question: "Why does turbulence matter?", answer: "Turbulent flow has much higher friction (more pump power needed), but much better heat and mass transfer (better mixing). Aircraft designers want laminar flow for low drag; heat exchanger designers want turbulent flow for high heat transfer." }
    ],
    seoMeta: { title: "Reynolds Number Calculator", description: "Calculate Reynolds number for flow analysis.", keywords: "Reynolds number, laminar, turbulent, flow regime, viscosity" }
  },
  {
    id: "pipe-flow-calculator", name: "Pipe Flow Calculator",
    description: "Calculate flow rate from pipe diameter and velocity.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "Q = A \\cdot v = \\frac{\\pi D^2}{4} \\cdot v",
    inputs: [
      { id: "D_m", label: "Pipe Diameter (m)", type: "number", defaultValue: 0.1 },
      { id: "v", label: "Flow Velocity (m/s)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "Q_m3s", label: "Flow Rate", formula: "pi * D_m^2 / 4 * v", unit: "m³/s" },
      { id: "Q_lpm", label: "Flow Rate", formula: "pi * D_m^2 / 4 * v * 60000", unit: "L/min" }
    ],
    theory: "Volumetric flow rate equals the cross-sectional area times the mean flow velocity. For a circular pipe, A = πD²/4. This is the continuity equation for incompressible flow — what goes in must come out, so Q₁ = Q₂ at any two cross-sections.",
    faq: [
      { question: "What is the continuity equation?", answer: "A₁v₁ = A₂v₂ for incompressible flow. If a pipe narrows, velocity increases proportionally. This is why water sprays faster from a nozzle and why rivers speed up through gorges." },
      { question: "What are typical pipe velocities?", answer: "Water supply: 0.6–3 m/s. Cooling water: 1–3 m/s. Steam: 20–60 m/s. Air ducts: 5–15 m/s. Oil: 0.5–2 m/s. Too fast causes erosion; too slow causes sedimentation." },
      { question: "How does pipe size affect flow?", answer: "Flow rate scales with D² (area), but pressure drop scales with 1/D⁵ (Darcy-Weisbach). Doubling diameter increases flow 4× at the same velocity but reduces pressure drop 32× at the same flow rate." }
    ],
    seoMeta: { title: "Pipe Flow Calculator", description: "Calculate flow rate from pipe dimensions.", keywords: "pipe flow, flow rate, velocity, diameter, continuity" }
  },
  {
    id: "hydraulic-press-calculator", name: "Hydraulic Press Calculator",
    description: "Calculate the force multiplication of a hydraulic press using Pascal's law.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "F_2 = F_1 \\cdot \\frac{A_2}{A_1}",
    inputs: [
      { id: "F1", label: "Input Force (N)", type: "number", defaultValue: 100 },
      { id: "A1", label: "Small Piston Area (m²)", type: "number", defaultValue: 0.001 },
      { id: "A2", label: "Large Piston Area (m²)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "F2", label: "Output Force", formula: "F1 * A2 / A1", unit: "N" },
      { id: "MA", label: "Mechanical Advantage", formula: "A2 / A1", unit: "" },
      { id: "P_fluid", label: "Fluid Pressure", formula: "F1 / A1", unit: "Pa" }
    ],
    theory: "Pascal's Law states that pressure applied to a confined fluid is transmitted equally in all directions. A hydraulic press multiplies force by the ratio of piston areas: F₂/F₁ = A₂/A₁. The trade-off is distance — the large piston moves A₁/A₂ times less distance than the small piston.",
    faq: [
      { question: "How much force can a hydraulic press produce?", answer: "With a 10:1 area ratio, 100N input produces 1000N output. Industrial hydraulic presses reach 10,000+ tons of force. The force is limited only by the pressure rating of the system and piston size." },
      { question: "Does a hydraulic press create energy?", answer: "No. Work input = work output (ideal). Force is multiplied but distance is divided by the same ratio. The small piston must travel 10× farther for a 10:1 force advantage." },
      { question: "What fluids are used?", answer: "Hydraulic oil (mineral-based or synthetic) for most industrial systems. Brake fluid (glycol-based) for automotive brakes. Water-glycol for fire-resistant applications. All are nearly incompressible." }
    ],
    seoMeta: { title: "Hydraulic Press Calculator", description: "Calculate force multiplication using Pascal's Law.", keywords: "hydraulic press, Pascal's law, force multiplication, piston, pressure" }
  },
  {
    id: "buoyancy-calculator", name: "Buoyancy Calculator",
    description: "Calculate the buoyant force on a submerged or floating object.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "F_b = \\rho_{fluid} \\cdot V_{displaced} \\cdot g",
    inputs: [
      { id: "rho_fluid", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1025, helpText: "Freshwater: 1000, Seawater: 1025" },
      { id: "V_disp", label: "Displaced Volume (m³)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "Fb", label: "Buoyant Force", formula: "rho_fluid * V_disp * 9.80665", unit: "N" },
      { id: "m_supported", label: "Mass Supported", formula: "rho_fluid * V_disp", unit: "kg" }
    ],
    theory: "Archimedes' principle: the buoyant force equals the weight of the displaced fluid. An object floats if its average density is less than the fluid's density. The fraction submerged equals the ratio of object density to fluid density.",
    faq: [
      { question: "When does an object float?", answer: "When its average density < fluid density. Steel ships float because their total volume (including air spaces) gives an average density much less than water. A solid steel block sinks because steel density (7800 kg/m³) > water (1000 kg/m³)." },
      { question: "How much of an iceberg is underwater?", answer: "Ice density ≈ 917 kg/m³, seawater ≈ 1025 kg/m³. Fraction submerged = 917/1025 ≈ 89.5%. About 90% of an iceberg is below the surface — this is why they're so dangerous to ships." },
      { question: "What is the Archimedes story?", answer: "Archimedes supposedly discovered buoyancy while bathing, when he noticed the water level rise. He realized he could determine if the king's crown was pure gold by measuring its volume via displacement — shouting 'Eureka!' (I found it!)." }
    ],
    seoMeta: { title: "Buoyancy Calculator", description: "Calculate buoyant force using Archimedes' principle.", keywords: "buoyancy, Archimedes, displaced volume, floating, fluid" }
  },
  {
    id: "drag-force-calculator", name: "Drag Force Calculator",
    description: "Calculate the aerodynamic or hydrodynamic drag force.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "F_D = \\frac{1}{2} C_D \\rho A v^2",
    inputs: [
      { id: "Cd", label: "Drag Coefficient", type: "number", defaultValue: 0.3, helpText: "Sphere: 0.47, Car: 0.25–0.35, Flat plate: 1.17" },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1.225 },
      { id: "A", label: "Frontal Area (m²)", type: "number", defaultValue: 2.2 },
      { id: "v", label: "Velocity (m/s)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "Fd", label: "Drag Force", formula: "0.5 * Cd * rho * A * v^2", unit: "N" },
      { id: "P_drag", label: "Power to Overcome Drag", formula: "0.5 * Cd * rho * A * v^3", unit: "W" }
    ],
    theory: "Drag force is the resistance a fluid exerts on a moving body. It increases with the square of velocity (doubling speed quadruples drag). The power required to overcome drag scales with v³ — this is why fuel consumption increases dramatically at highway speeds.",
    faq: [
      { question: "Why does drag scale with v²?", answer: "Drag involves both the momentum of intercepted air (∝ v) and the volume of air encountered per second (∝ v). These multiply to give F ∝ v². Since power = F×v, power to overcome drag scales with v³." },
      { question: "What are typical drag coefficients?", answer: "Tesla Model S: 0.208. Toyota Prius: 0.25. Average sedan: 0.30. SUV: 0.35–0.45. Cyclist: 0.88. Flat plate: 1.17. Sphere: 0.47. Streamlined body: 0.04." },
      { question: "How do I reduce drag?", answer: "Streamline the shape (teardrop is ideal), smooth the surface, reduce frontal area, add fairings/underbody panels, and manage airflow separation. F1 cars add drag intentionally for downforce." }
    ],
    seoMeta: { title: "Drag Force Calculator", description: "Calculate aerodynamic drag force.", keywords: "drag force, drag coefficient, aerodynamic, air resistance" }
  },
  {
    id: "darcy-weisbach-calculator", name: "Darcy-Weisbach Calculator",
    description: "Calculate the pressure drop in a pipe due to friction.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "\\Delta P = f \\frac{L}{D} \\frac{\\rho v^2}{2}",
    inputs: [
      { id: "f_darcy", label: "Darcy Friction Factor", type: "number", defaultValue: 0.02 },
      { id: "L_pipe", label: "Pipe Length (m)", type: "number", defaultValue: 100 },
      { id: "D_pipe", label: "Pipe Diameter (m)", type: "number", defaultValue: 0.05 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "v", label: "Flow Velocity (m/s)", type: "number", defaultValue: 2 }
    ],
    outputs: [{ id: "dP", label: "Pressure Drop", formula: "f_darcy * L_pipe / D_pipe * rho * v^2 / 2", unit: "Pa" }],
    theory: "The Darcy-Weisbach equation calculates frictional pressure loss in pipe flow. The friction factor depends on Reynolds number and pipe roughness (Moody chart). Pressure drop is proportional to length, velocity², and inversely proportional to pipe diameter.",
    faq: [
      { question: "How do I find the friction factor?", answer: "Laminar flow (Re < 2300): f = 64/Re. Turbulent: use the Moody chart or Colebrook equation. For smooth pipes: f ≈ 0.316/Re^0.25 (Blasius). Typical values: 0.01–0.05." },
      { question: "What causes pipe roughness?", answer: "Manufacturing (casting, welding), corrosion, deposits (scale, biofilm), and material inherent roughness. New steel pipe: ε ≈ 0.045 mm. PVC: ε ≈ 0.0015 mm. Concrete: ε ≈ 0.3 mm." },
      { question: "How does pipe size affect pressure drop?", answer: "ΔP ∝ 1/D⁵ (for constant flow rate). Doubling diameter reduces pressure drop by 97%. This is why choosing the right pipe size is critical for pump sizing and energy costs." }
    ],
    seoMeta: { title: "Darcy-Weisbach Calculator", description: "Calculate pipe friction pressure drop.", keywords: "Darcy-Weisbach, friction, pressure drop, pipe flow, Moody" }
  },
  {
    id: "venturi-meter-calculator", name: "Venturi Meter Calculator",
    description: "Calculate the flow rate through a Venturi meter from pressure differential.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "Q = C_d A_2 \\sqrt{\\frac{2(P_1-P_2)}{\\rho(1-(A_2/A_1)^2)}}",
    inputs: [
      { id: "A1", label: "Inlet Area (m²)", type: "number", defaultValue: 0.01 },
      { id: "A2", label: "Throat Area (m²)", type: "number", defaultValue: 0.005 },
      { id: "dP", label: "Pressure Differential (Pa)", type: "number", defaultValue: 5000 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "Cd", label: "Discharge Coefficient", type: "number", defaultValue: 0.98 }
    ],
    outputs: [
      { id: "Q_flow", label: "Flow Rate", formula: "Cd * A2 * sqrt(2 * dP / (rho * (1 - (A2/A1)^2)))", unit: "m³/s" }
    ],
    theory: "A Venturi meter measures flow rate by measuring the pressure drop at a constriction. By Bernoulli's principle, the fluid accelerates at the narrow throat, reducing pressure. The pressure difference is proportional to flow rate squared.",
    faq: [
      { question: "Why use a Venturi meter?", answer: "Low permanent pressure loss (~10% of differential), no moving parts, long service life, and handles dirty/slurry fluids. Used in water treatment, chemical plants, and natural gas pipelines." },
      { question: "What is the discharge coefficient?", answer: "Cd accounts for real-world losses (friction, non-uniform velocity profile). For a well-designed Venturi: Cd = 0.98–0.99. For orifice plates: Cd ≈ 0.61. Higher Cd means more efficient meter." },
      { question: "Venturi vs orifice plate?", answer: "Venturi: higher cost, lower permanent pressure loss, higher accuracy. Orifice: cheap, easy to install, but higher permanent loss (40–90% of differential) and lower accuracy." }
    ],
    seoMeta: { title: "Venturi Meter Calculator", description: "Calculate flow rate through a Venturi meter.", keywords: "Venturi meter, flow measurement, pressure differential, Bernoulli" }
  },
  {
    id: "viscosity-calculator", name: "Viscosity Calculator",
    description: "Convert between dynamic and kinematic viscosity.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "\\nu = \\frac{\\mu}{\\rho}",
    inputs: [
      { id: "mu", label: "Dynamic Viscosity (Pa·s)", type: "number", defaultValue: 0.001, helpText: "Water at 20°C: 0.001 Pa·s" },
      { id: "rho", label: "Density (kg/m³)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "nu", label: "Kinematic Viscosity", formula: "mu / rho", unit: "m²/s" },
      { id: "nu_cSt", label: "Kinematic Viscosity", formula: "mu / rho * 1e6", unit: "cSt" }
    ],
    theory: "Dynamic viscosity (μ) measures a fluid's resistance to shearing flow — force per area per velocity gradient. Kinematic viscosity (ν = μ/ρ) normalizes by density, representing the diffusion rate of momentum. Kinematic viscosity is what determines the Reynolds number.",
    faq: [
      { question: "What are typical viscosity values?", answer: "Water at 20°C: μ = 1.0 mPa·s. Honey: ~2000–10000 mPa·s. Engine oil (SAE 30): ~100 mPa·s at 40°C. Air: ~0.018 mPa·s. Blood: ~3–4 mPa·s." },
      { question: "How does temperature affect viscosity?", answer: "For liquids: viscosity decreases with temperature (molecules move faster, less cohesion). For gases: viscosity increases with temperature (more molecular collisions). This is opposite behavior!" },
      { question: "What is a centistoke?", answer: "1 cSt = 10⁻⁶ m²/s = 1 mm²/s. Water is ~1 cSt at 20°C. Motor oils are graded by viscosity in cSt at 40°C and 100°C." }
    ],
    seoMeta: { title: "Viscosity Calculator", description: "Convert between dynamic and kinematic viscosity.", keywords: "viscosity, dynamic, kinematic, centistoke, fluid properties" }
  },
  {
    id: "orifice-flow-calculator", name: "Orifice Flow Calculator",
    description: "Calculate the flow rate through an orifice from pressure drop.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "Q = C_d A \\sqrt{\\frac{2\\Delta P}{\\rho}}",
    inputs: [
      { id: "Cd", label: "Discharge Coefficient", type: "number", defaultValue: 0.61 },
      { id: "A_orifice", label: "Orifice Area (m²)", type: "number", defaultValue: 0.001 },
      { id: "dP", label: "Pressure Drop (Pa)", type: "number", defaultValue: 10000 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 }
    ],
    outputs: [{ id: "Q_flow", label: "Flow Rate", formula: "Cd * A_orifice * sqrt(2 * dP / rho)", unit: "m³/s" }],
    theory: "Flow through an orifice is driven by pressure differential. The discharge coefficient Cd accounts for the vena contracta (flow contraction downstream of the orifice) and friction losses. For a sharp-edged orifice, Cd ≈ 0.61; for rounded entrances, Cd ≈ 0.95.",
    faq: [
      { question: "What is the vena contracta?", answer: "After passing through an orifice, the flow continues to narrow, reaching minimum area (vena contracta) about half a diameter downstream. The area here is ~61% of the orifice area, which is why Cd ≈ 0.61." },
      { question: "Where are orifices used?", answer: "Flow metering, pressure regulation, flow restriction (energy dissipation), fuel injection, spray nozzles, and hydraulic control circuits." },
      { question: "How does Cd vary?", answer: "Sharp-edged: 0.61. Borda (re-entrant): 0.51. Well-rounded: 0.95–0.99. Short tube (L/D ≈ 2): 0.82. The geometry of the orifice edge dramatically affects Cd." }
    ],
    seoMeta: { title: "Orifice Flow Calculator", description: "Calculate flow through an orifice.", keywords: "orifice flow, discharge coefficient, pressure drop, vena contracta" }
  },
  {
    id: "hydrostatic-pressure-calculator", name: "Hydrostatic Pressure Calculator",
    description: "Calculate the pressure at a depth in a fluid.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "P = P_0 + \\rho g h",
    inputs: [
      { id: "P0", label: "Surface Pressure (Pa)", type: "number", defaultValue: 101325 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1025 },
      { id: "h", label: "Depth (m)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "P_total", label: "Total Pressure", formula: "P0 + rho * 9.80665 * h", unit: "Pa" },
      { id: "P_gauge", label: "Gauge Pressure", formula: "rho * 9.80665 * h", unit: "Pa" },
      { id: "P_atm", label: "Pressure", formula: "(P0 + rho * 9.80665 * h) / 101325", unit: "atm" }
    ],
    theory: "Hydrostatic pressure increases linearly with depth: P = P₀ + ρgh. At any given depth, pressure acts equally in all directions. In seawater, pressure increases by ~1 atm per 10 meters of depth. This is why submarines must withstand enormous pressures.",
    faq: [
      { question: "How deep can humans dive?", answer: "Recreational SCUBA: 40m (5 atm). Technical divers: 100m+ (11 atm). Ahmed Gabr's record: 332.35m (34 atm). Challenger Deep (Mariana Trench): 10,994m (~1100 atm)." },
      { question: "Why does pressure increase with depth?", answer: "Each layer of fluid must support the weight of all the fluid above it. Deeper fluid bears more weight, creating more pressure. This is why dam walls are thicker at the bottom." },
      { question: "Does container shape affect pressure?", answer: "No! Hydrostatic pressure depends only on depth, not on container shape or volume. This is the 'hydrostatic paradox' — a narrow tube and a wide lake have the same pressure at the same depth." }
    ],
    seoMeta: { title: "Hydrostatic Pressure Calculator", description: "Calculate pressure at depth in a fluid.", keywords: "hydrostatic pressure, depth, fluid pressure, diving, Pascal" }
  },
  {
    id: "flow-rate-calculator", name: "Flow Rate Calculator",
    description: "Calculate volumetric and mass flow rates.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "\\dot{m} = \\rho \\cdot Q = \\rho \\cdot A \\cdot v",
    inputs: [
      { id: "rho", label: "Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "A", label: "Cross-sectional Area (m²)", type: "number", defaultValue: 0.005 },
      { id: "v", label: "Velocity (m/s)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "Q_vol", label: "Volumetric Flow Rate", formula: "A * v", unit: "m³/s" },
      { id: "m_dot", label: "Mass Flow Rate", formula: "rho * A * v", unit: "kg/s" },
      { id: "Q_gpm", label: "Flow Rate", formula: "A * v * 15850.3", unit: "GPM" }
    ],
    theory: "Flow rate measures how much fluid passes a point per unit time. Volumetric flow rate Q = Av (m³/s) is useful for incompressible fluids. Mass flow rate ṁ = ρAv (kg/s) is conserved even for compressible fluids and is preferred for thermodynamic calculations.",
    faq: [
      { question: "When to use mass vs volumetric flow?", answer: "Volumetric: incompressible fluids (water, oil), pump sizing. Mass: compressible fluids (gases, steam), chemical reactions, energy balance calculations. Mass flow is always conserved; volumetric isn't for compressible flows." },
      { question: "What are common flow rate units?", answer: "GPM (gallons/minute) — US plumbing/HVAC. L/min — metric general use. m³/hr — industrial process. CFM (ft³/min) — air and HVAC. kg/s — engineering and scientific." },
      { question: "How is flow rate measured?", answer: "Differential pressure (orifice, Venturi). Turbine/paddle wheel (volumetric). Electromagnetic (conductive liquids). Ultrasonic (non-invasive). Coriolis (mass flow, highest accuracy)." }
    ],
    seoMeta: { title: "Flow Rate Calculator", description: "Calculate volumetric and mass flow rates.", keywords: "flow rate, volumetric, mass flow, velocity, area" }
  },
  {
    id: "stokes-law-calculator", name: "Stokes' Law Calculator",
    description: "Calculate the terminal velocity of a sphere falling through a viscous fluid.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "v_t = \\frac{2(\\rho_s - \\rho_f)gR^2}{9\\mu}",
    inputs: [
      { id: "rho_s", label: "Sphere Density (kg/m³)", type: "number", defaultValue: 7800, helpText: "Steel: 7800, Glass: 2500" },
      { id: "rho_f", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "R_sphere", label: "Sphere Radius (m)", type: "number", defaultValue: 0.001 },
      { id: "mu", label: "Fluid Viscosity (Pa·s)", type: "number", defaultValue: 0.001 }
    ],
    outputs: [
      { id: "vt", label: "Terminal Velocity", formula: "2 * (rho_s - rho_f) * 9.80665 * R_sphere^2 / (9 * mu)", unit: "m/s" }
    ],
    theory: "Stokes' Law gives the drag force on a small sphere in a viscous fluid at low Reynolds numbers (Re < 1): F_d = 6πμRv. At terminal velocity, drag equals net gravitational force. This is valid for small particles (fog droplets, blood cells, sediment) where viscous forces dominate inertia.",
    faq: [
      { question: "When is Stokes' Law valid?", answer: "For Re = ρvD/μ < 1 (creeping flow). This applies to small particles, highly viscous fluids, or slow motion. For larger Re, Stokes' Law underestimates drag and more complex correlations are needed." },
      { question: "What uses Stokes' Law?", answer: "Sedimentation analysis, centrifugal separation, aerosol science, paint settling, blood cell analysis, and Millikan's oil-drop experiment (measuring electron charge)." },
      { question: "Why does v scale with R²?", answer: "The gravitational force scales with R³ (volume) while drag scales with R (Stokes drag). The ratio R³/R = R² determines terminal velocity. Smaller particles settle much more slowly than larger ones." }
    ],
    seoMeta: { title: "Stokes' Law Calculator", description: "Calculate terminal velocity using Stokes' Law.", keywords: "Stokes law, terminal velocity, settling, viscous drag, sedimentation" }
  },
  {
    id: "mach-number-calculator", name: "Mach Number Calculator",
    description: "Calculate the Mach number from flow velocity and speed of sound.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "M = \\frac{v}{a} = \\frac{v}{\\sqrt{\\gamma R T}}",
    inputs: [
      { id: "v", label: "Flow Velocity (m/s)", type: "number", defaultValue: 340 },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 293, helpText: "20°C = 293 K" },
      { id: "gamma_gas", label: "γ (ratio of specific heats)", type: "number", defaultValue: 1.4, helpText: "Air: 1.4" }
    ],
    outputs: [
      { id: "a_sound", label: "Speed of Sound", formula: "sqrt(gamma_gas * 287 * T_K)", unit: "m/s" },
      { id: "Mach", label: "Mach Number", formula: "v / sqrt(gamma_gas * 287 * T_K)", unit: "" }
    ],
    theory: "The Mach number is the ratio of flow velocity to the local speed of sound. M < 1: subsonic. M ≈ 1: transonic (0.8–1.2). M > 1: supersonic. M > 5: hypersonic. The speed of sound in air depends on temperature: a ≈ 20.05√T(K) m/s.",
    faq: [
      { question: "What happens at Mach 1?", answer: "The sound barrier: shock waves form, drag increases dramatically (wave drag). The aircraft experiences transonic effects — buffeting, control difficulties, and the characteristic sonic boom heard on the ground." },
      { question: "What are typical Mach numbers?", answer: "Commercial jets: M 0.78–0.85. Concorde: M 2.04. SR-71 Blackbird: M 3.2. Space Shuttle re-entry: M 25. Bullet: M 2–3. Sound in water: M numbers are much lower (sound is faster)." },
      { question: "Why does speed of sound depend on temperature?", answer: "Sound propagates via molecular collisions. Higher temperature means faster molecular motion, so pressure disturbances propagate faster. At -40°C: 306 m/s. At 0°C: 331 m/s. At 20°C: 343 m/s." }
    ],
    seoMeta: { title: "Mach Number Calculator", description: "Calculate Mach number from velocity and temperature.", keywords: "Mach number, speed of sound, supersonic, compressible flow" }
  },
  {
    id: "pitot-tube-calculator", name: "Pitot Tube Calculator",
    description: "Calculate flow velocity from Pitot tube pressure measurements.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "v = \\sqrt{\\frac{2(P_t - P_s)}{\\rho}}",
    inputs: [
      { id: "Pt", label: "Total (Stagnation) Pressure (Pa)", type: "number", defaultValue: 102000 },
      { id: "Ps", label: "Static Pressure (Pa)", type: "number", defaultValue: 101325 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1.225 }
    ],
    outputs: [
      { id: "v_flow", label: "Flow Velocity", formula: "sqrt(2 * (Pt - Ps) / rho)", unit: "m/s" }
    ],
    theory: "A Pitot tube measures velocity by converting kinetic energy to pressure. The stagnation point on the tube brings fluid to rest, increasing pressure. The difference between total and static pressure (dynamic pressure q = ½ρv²) is measured and used to calculate velocity.",
    faq: [
      { question: "Where are Pitot tubes used?", answer: "All aircraft use Pitot tubes for airspeed indication. Also used in wind tunnels, HVAC ductwork, and industrial process flow measurement. The Pitot-static tube combines both pressure measurements." },
      { question: "What causes Pitot tube errors?", answer: "Misalignment with flow (yaw error), ice blockage (critical in aviation — Pitot tube heaters are mandatory), compressibility effects at high Mach, and turbulent flow variations." },
      { question: "What is dynamic pressure?", answer: "q = ½ρv² is the kinetic energy per unit volume. For aircraft: q determines aerodynamic forces (Lift = CL × q × S). At sea level going 100 m/s: q ≈ 6125 Pa ≈ 0.06 atm." }
    ],
    seoMeta: { title: "Pitot Tube Calculator", description: "Calculate flow velocity from Pitot tube measurements.", keywords: "Pitot tube, airspeed, dynamic pressure, stagnation, velocity" }
  },
  {
    id: "weir-flow-calculator", name: "Weir Flow Calculator",
    description: "Calculate the flow rate over a rectangular weir.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "Q = C_d \\frac{2}{3} b \\sqrt{2g} \\cdot H^{3/2}",
    inputs: [
      { id: "Cd", label: "Discharge Coefficient", type: "number", defaultValue: 0.62 },
      { id: "b", label: "Weir Width (m)", type: "number", defaultValue: 2 },
      { id: "H_head", label: "Head over Weir (m)", type: "number", defaultValue: 0.3 }
    ],
    outputs: [
      { id: "Q_flow", label: "Flow Rate", formula: "Cd * (2/3) * b * sqrt(2 * 9.80665) * H_head^(3/2)", unit: "m³/s" }
    ],
    theory: "Weirs are open-channel flow measurement structures. Water flows over a notch, and the flow rate is determined by the head (water level above the weir crest). Rectangular weirs have Q ∝ H^(3/2); V-notch (triangular) weirs have Q ∝ H^(5/2) for better accuracy at low flows.",
    faq: [
      { question: "What types of weirs exist?", answer: "Rectangular: general purpose. V-notch (triangular): best for low flows. Cipolletti (trapezoidal): compensates for end contractions. Broad-crested: used in rivers and channels." },
      { question: "Where are weirs used?", answer: "Open channel flow measurement in irrigation, wastewater treatment, rivers, and environmental monitoring. They're simple, reliable, and require no power or electronics." },
      { question: "What affects weir accuracy?", answer: "Head measurement accuracy (±1mm ideal), approach velocity (should be slow), clean sharp crest, adequate ventilation under the nappe, and correct installation (level, perpendicular to flow)." }
    ],
    seoMeta: { title: "Weir Flow Calculator", description: "Calculate flow rate over a rectangular weir.", keywords: "weir, open channel flow, flow measurement, head, discharge" }
  },
  {
    id: "pump-efficiency-calculator", name: "Pump Efficiency Calculator",
    description: "Calculate the efficiency of a hydraulic pump.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "\\eta = \\frac{\\rho g Q H}{P_{shaft}}",
    inputs: [
      { id: "Q_m3s", label: "Flow Rate (m³/s)", type: "number", defaultValue: 0.01 },
      { id: "H_head", label: "Total Head (m)", type: "number", defaultValue: 30 },
      { id: "P_shaft", label: "Shaft Power Input (W)", type: "number", defaultValue: 5000 },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "P_hydraulic", label: "Hydraulic Power", formula: "rho * 9.80665 * Q_m3s * H_head", unit: "W" },
      { id: "eta_pump", label: "Pump Efficiency", formula: "rho * 9.80665 * Q_m3s * H_head / P_shaft * 100", unit: "%" }
    ],
    theory: "Pump efficiency is the ratio of useful hydraulic power output to mechanical shaft power input. Losses include hydraulic (friction, turbulence), volumetric (leakage), and mechanical (bearing, seal friction). Peak efficiency occurs at the pump's best efficiency point (BEP).",
    faq: [
      { question: "What is good pump efficiency?", answer: "Small pumps: 50–70%. Medium centrifugal: 70–85%. Large centrifugal: 80–93%. Positive displacement: 80–95%. Always operate near the BEP — efficiency drops significantly at partial loads." },
      { question: "What is the pump curve?", answer: "A graph of head vs flow rate at constant speed. Head decreases as flow increases. The BEP is the point of maximum efficiency on the curve. Pumps should be selected to operate near BEP." },
      { question: "How do I save pumping energy?", answer: "Use variable speed drives (VFDs) — pump power scales with speed³. Right-size the pump for BEP operation. Reduce system friction (larger pipes, fewer fittings). Eliminate unnecessary throttling." }
    ],
    seoMeta: { title: "Pump Efficiency Calculator", description: "Calculate hydraulic pump efficiency.", keywords: "pump efficiency, hydraulic power, head, flow rate, BEP" }
  },
  {
    id: "froude-number-calculator", name: "Froude Number Calculator",
    description: "Calculate the Froude number for open channel flow or ship hydrodynamics.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "Fr = \\frac{v}{\\sqrt{g \\cdot d}}",
    inputs: [
      { id: "v", label: "Flow Velocity (m/s)", type: "number", defaultValue: 3 },
      { id: "d_depth", label: "Hydraulic Depth (m)", type: "number", defaultValue: 1 }
    ],
    outputs: [{ id: "Fr", label: "Froude Number", formula: "v / sqrt(9.80665 * d_depth)", unit: "" }],
    theory: "The Froude number is the ratio of flow velocity to wave propagation velocity in open channels. Fr < 1: subcritical (tranquil) flow. Fr > 1: supercritical (rapid) flow. Fr = 1: critical flow. The Froude number governs surface wave behavior and is used in ship design.",
    faq: [
      { question: "What does Froude number tell us?", answer: "Fr < 1: waves can propagate upstream (subcritical, deep slow flow). Fr > 1: waves cannot propagate upstream (supercritical, shallow fast flow). The transition creates a hydraulic jump — a standing wave." },
      { question: "What is a hydraulic jump?", answer: "The transition from supercritical to subcritical flow. Energy is dissipated in a turbulent roller. Used in stilling basins below dams to dissipate energy and prevent erosion." },
      { question: "How is Froude number used in ship design?", answer: "Ship wave resistance depends on hull Froude number Fr = V/√(gL). Hull speed ≈ 1.34√(L_waterline in ft) in knots corresponds to Fr ≈ 0.4. Above this, wave resistance increases dramatically." }
    ],
    seoMeta: { title: "Froude Number Calculator", description: "Calculate Froude number for open channel flow.", keywords: "Froude number, open channel, subcritical, supercritical, hydraulic jump" }
  },
  {
    id: "weber-number-calculator", name: "Weber Number Calculator",
    description: "Calculate the Weber number (ratio of inertia to surface tension).",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "We = \\frac{\\rho v^2 L}{\\sigma}",
    inputs: [
      { id: "rho", label: "Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "v", label: "Velocity (m/s)", type: "number", defaultValue: 5 },
      { id: "L_char", label: "Characteristic Length (m)", type: "number", defaultValue: 0.002 },
      { id: "sigma", label: "Surface Tension (N/m)", type: "number", defaultValue: 0.072, helpText: "Water: 0.072 N/m" }
    ],
    outputs: [{ id: "We", label: "Weber Number", formula: "rho * v^2 * L_char / sigma", unit: "" }],
    theory: "The Weber number compares inertial forces to surface tension forces. Low We: surface tension dominates (drops stay spherical). High We: inertia dominates (drops deform and break up). Critical We for droplet breakup is approximately 12.",
    faq: [
      { question: "When does Weber number matter?", answer: "Spray atomization, inkjet printing, rain drop formation, bubble dynamics, fuel injection, and any flow where surface tension is significant relative to flow forces." },
      { question: "What is the critical Weber number?", answer: "We_crit ≈ 12 for droplet breakup. Below this, surface tension holds the drop together. Above, the drop deforms and fragments. The exact value depends on viscosity ratio and breakup mode." },
      { question: "How does surface tension work?", answer: "Surface tension is the energy per unit area of the liquid surface, caused by unbalanced molecular forces at the interface. Water: 0.072 N/m. Mercury: 0.485 N/m. Soap solution: ~0.025 N/m (surfactants reduce surface tension)." }
    ],
    seoMeta: { title: "Weber Number Calculator", description: "Calculate Weber number for surface tension analysis.", keywords: "Weber number, surface tension, droplet breakup, atomization" }
  },
  {
    id: "capillary-rise-calculator", name: "Capillary Rise Calculator",
    description: "Calculate the height of capillary rise in a tube.",
    category: "physics", subcategory: "fluid-mechanics",
    scientificFormula: "h = \\frac{2\\sigma \\cos\\theta}{\\rho g r}",
    inputs: [
      { id: "sigma", label: "Surface Tension (N/m)", type: "number", defaultValue: 0.072 },
      { id: "theta_deg", label: "Contact Angle (°)", type: "number", defaultValue: 0, helpText: "Water on glass: ~0°" },
      { id: "rho", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000 },
      { id: "r_tube", label: "Tube Radius (m)", type: "number", defaultValue: 0.0005 }
    ],
    outputs: [
      { id: "h_rise", label: "Capillary Rise", formula: "2 * sigma * cos(theta_deg * pi / 180) / (rho * 9.80665 * r_tube)", unit: "m" }
    ],
    theory: "Capillary action draws liquid into narrow tubes against gravity. The height depends on surface tension, contact angle, tube radius, and fluid density. Wetting fluids (θ < 90°) rise; non-wetting fluids (θ > 90°, like mercury) are depressed.",
    faq: [
      { question: "What causes capillary action?", answer: "Adhesion between liquid and tube wall creates an upward force at the meniscus. Surface tension pulls the liquid column up. The narrower the tube, the higher the rise because the perimeter-to-area ratio increases." },
      { question: "Where does capillary action matter?", answer: "Plant water transport (xylem vessels), paper towel absorption, concrete moisture problems, soil water movement, medical diagnostics (lateral flow tests), and inkjet printing." },
      { question: "What is the contact angle?", answer: "The angle between the liquid surface and the solid at the contact line. Water on clean glass: ~0° (fully wetting). Water on Teflon: ~108° (non-wetting). Mercury on glass: ~140° (strongly non-wetting)." }
    ],
    seoMeta: { title: "Capillary Rise Calculator", description: "Calculate capillary rise height in tubes.", keywords: "capillary rise, surface tension, contact angle, wetting, meniscus" }
  }
];
