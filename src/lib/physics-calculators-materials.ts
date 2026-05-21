import { CalculatorConfig } from "./calculator-types";

export const MATERIALS_CALCULATORS: CalculatorConfig[] = [
  {
    id: "angle-of-repose-calculator", name: "Angle of Repose Calculator",
    description: "Calculate the steepest angle at which a granular material can be piled without slumping.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\theta = \\arctan\\left(\\frac{\\mu_s}{1}\\right)",
    inputs: [
      { id: "mu_s", label: "Static Friction Coefficient", type: "number", defaultValue: 0.577 }
    ],
    outputs: [
      { id: "theta", label: "Angle of Repose", formula: "atan(mu_s) * 180 / pi", unit: "°" }
    ],
    theory: "The angle of repose is the maximum slope angle at which loose material remains stable. It depends on particle shape, size distribution, moisture, and surface roughness. Round, smooth particles have lower repose angles (~25°) while angular, rough particles can reach 45°+.",
    faq: [
      { question: "What affects the angle of repose?", answer: "Particle shape (angular vs round), size distribution, moisture content, and surface roughness all affect it. Wet sand has a higher repose angle than dry sand due to cohesion from water bridges." },
      { question: "Why is angle of repose important?", answer: "It determines stockpile geometry, hopper design, slope stability, and silo filling. Engineers use it to design safe embankments and storage facilities." },
      { question: "What is a typical angle of repose?", answer: "Dry sand: ~34°. Gravel: ~45°. Flour: ~45°. Coal: ~38°. Wet clay: ~15°. Steel balls: ~20°." }
    ],
    seoMeta: { title: "Angle of Repose Calculator", description: "Calculate the angle of repose for granular materials.", keywords: "angle of repose, granular material, slope stability, friction" }
  },
  {
    id: "angle-of-twist-calculator", name: "Angle of Twist Calculator",
    description: "Calculate the angular twist of a shaft under applied torque.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\phi = \\frac{TL}{GJ}",
    inputs: [
      { id: "T", label: "Torque (N·m)", type: "number", defaultValue: 100 },
      { id: "L", label: "Shaft Length (m)", type: "number", defaultValue: 1 },
      { id: "G", label: "Shear Modulus (Pa)", type: "number", defaultValue: 79.3e9, helpText: "Steel: ~79.3 GPa" },
      { id: "J", label: "Polar Moment of Inertia (m⁴)", type: "number", defaultValue: 1e-7 }
    ],
    outputs: [
      { id: "phi_rad", label: "Angle of Twist", formula: "T * L / (G * J)", unit: "rad" },
      { id: "phi_deg", label: "Angle of Twist", formula: "T * L / (G * J) * 180 / pi", unit: "°" }
    ],
    theory: "When a torque is applied to a shaft, it twists through an angle proportional to the torque, length, and inversely proportional to the shear modulus and polar moment of inertia. The formula φ = TL/GJ assumes elastic deformation and uniform cross-section.",
    faq: [
      { question: "What is the polar moment of inertia for a solid shaft?", answer: "For a solid circular shaft of radius r: J = πr⁴/2. For a hollow shaft with outer radius R and inner radius r: J = π(R⁴ - r⁴)/2." },
      { question: "How much twist is acceptable?", answer: "Typical limits are 0.25–1.0° per meter of shaft length. Drive shafts usually require less than 0.25°/m, while general machinery allows up to 1°/m." },
      { question: "What is shear modulus?", answer: "Shear modulus (G) measures a material's resistance to shearing deformation. Steel: ~79 GPa, Aluminum: ~26 GPa, Copper: ~45 GPa." }
    ],
    seoMeta: { title: "Angle of Twist Calculator", description: "Calculate shaft twist under torque.", keywords: "angle of twist, shaft, torque, polar moment, torsion" }
  },
  {
    id: "bend-allowance-calculator", name: "Bend Allowance Calculator",
    description: "Calculate the bend allowance for sheet metal bending operations.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "BA = \\theta \\cdot \\left(r + K \\cdot t\\right)",
    inputs: [
      { id: "theta_deg", label: "Bend Angle (°)", type: "number", defaultValue: 90 },
      { id: "r", label: "Inside Bend Radius (mm)", type: "number", defaultValue: 2 },
      { id: "K", label: "K-Factor", type: "number", defaultValue: 0.33, helpText: "Typically 0.3–0.5" },
      { id: "t", label: "Material Thickness (mm)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "BA", label: "Bend Allowance", formula: "(theta_deg * pi / 180) * (r + K * t)", unit: "mm" }
    ],
    theory: "Bend allowance is the arc length of the neutral axis during a bend. The K-factor (0 to 1) defines where the neutral axis lies within the material thickness. A K-factor of 0.33 means the neutral axis is at 1/3 of the thickness from the inside surface.",
    faq: [
      { question: "What is the K-factor?", answer: "The K-factor defines the neutral axis position as a ratio of thickness. Soft materials like aluminum use K ≈ 0.33, while harder materials like stainless steel use K ≈ 0.4–0.5." },
      { question: "Why is bend allowance important?", answer: "It determines the flat pattern length needed for a sheet metal part. Without proper bend allowance, parts will be the wrong size after bending." },
      { question: "How does bend radius affect the result?", answer: "Tighter bends (smaller radius) produce shorter bend allowances. However, too tight a bend can crack the material. Minimum bend radius is typically 1–2× material thickness." }
    ],
    seoMeta: { title: "Bend Allowance Calculator", description: "Calculate sheet metal bend allowance.", keywords: "bend allowance, sheet metal, K-factor, bending, fabrication" }
  },
  {
    id: "brinell-hardness-number-calculator", name: "Brinell Hardness Number Calculator",
    description: "Calculate the Brinell hardness number from the test load and indentation diameter.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "BHN = \\frac{2F}{\\pi D(D - \\sqrt{D^2 - d^2})}",
    inputs: [
      { id: "F", label: "Applied Force (kgf)", type: "number", defaultValue: 3000 },
      { id: "D", label: "Ball Diameter (mm)", type: "number", defaultValue: 10 },
      { id: "d_indent", label: "Indentation Diameter (mm)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "BHN", label: "Brinell Hardness Number", formula: "(2 * F) / (pi * D * (D - sqrt(D^2 - d_indent^2)))", unit: "HB" }
    ],
    theory: "The Brinell hardness test presses a hardened steel or tungsten carbide ball into a material under a specified load. The resulting indentation diameter is measured and used to calculate the BHN, which represents the load divided by the surface area of the indentation.",
    faq: [
      { question: "What is a typical Brinell hardness?", answer: "Soft aluminum: ~20 HB. Mild steel: ~120 HB. Medium carbon steel: ~200 HB. Hardened steel: ~600 HB. Pure copper: ~35 HB." },
      { question: "When is the Brinell test preferred?", answer: "Brinell testing is ideal for coarse-grained materials like castings and forgings. The large indenter averages over multiple grains, giving more representative results than smaller-indenter methods." },
      { question: "How does BHN relate to tensile strength?", answer: "For carbon and low-alloy steels: Tensile Strength (MPa) ≈ 3.45 × BHN. This empirical relationship is widely used for quick strength estimation." }
    ],
    seoMeta: { title: "Brinell Hardness Calculator", description: "Calculate Brinell hardness number from test parameters.", keywords: "Brinell hardness, BHN, indentation, material testing" }
  },
  {
    id: "buckling-calculator", name: "Buckling Calculator",
    description: "Calculate the critical buckling load for a column using Euler's formula.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "P_{cr} = \\frac{\\pi^2 E I}{(KL)^2}",
    inputs: [
      { id: "E", label: "Young's Modulus (Pa)", type: "number", defaultValue: 200e9 },
      { id: "I", label: "Area Moment of Inertia (m⁴)", type: "number", defaultValue: 1e-6 },
      { id: "K_eff", label: "Effective Length Factor K", type: "number", defaultValue: 1, helpText: "Fixed-free: 2, Pinned-pinned: 1, Fixed-pinned: 0.7, Fixed-fixed: 0.5" },
      { id: "L", label: "Column Length (m)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "Pcr", label: "Critical Buckling Load", formula: "pi^2 * E * I / (K_eff * L)^2", unit: "N" }
    ],
    theory: "Euler's buckling formula predicts the critical axial load at which a slender column becomes unstable and buckles. Below this load, the column remains straight; at or above it, any small lateral disturbance causes catastrophic bending failure. The effective length factor K accounts for different end conditions.",
    faq: [
      { question: "What is the effective length factor?", answer: "K depends on end conditions: Fixed-Fixed: K=0.5, Fixed-Pinned: K=0.7, Pinned-Pinned: K=1.0, Fixed-Free (cantilever): K=2.0. Lower K means better resistance to buckling." },
      { question: "When does Euler's formula apply?", answer: "Euler's formula is valid for long, slender columns that fail by elastic buckling (slenderness ratio > critical value). Short, stocky columns fail by crushing, not buckling, and require different analysis." },
      { question: "How can I increase buckling resistance?", answer: "Use a stiffer material (higher E), increase the moment of inertia (larger or hollow cross-section), reduce unsupported length, or improve end fixity conditions." }
    ],
    seoMeta: { title: "Buckling Calculator — Euler's Formula", description: "Calculate critical buckling load for columns.", keywords: "buckling, Euler, critical load, column, stability" }
  },
  {
    id: "bulk-modulus-calculator", name: "Bulk Modulus Calculator",
    description: "Calculate the bulk modulus from applied pressure and volumetric strain.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "K = -\\frac{\\Delta P}{\\Delta V / V}",
    inputs: [
      { id: "dP", label: "Change in Pressure (Pa)", type: "number", defaultValue: 1e6 },
      { id: "dV_V", label: "Volumetric Strain (ΔV/V)", type: "number", defaultValue: 0.0005 }
    ],
    outputs: [
      { id: "K_bulk", label: "Bulk Modulus", formula: "dP / dV_V", unit: "Pa" }
    ],
    theory: "Bulk modulus measures a material's resistance to uniform compression. It is the ratio of the pressure increase to the relative volume decrease. Water has K ≈ 2.2 GPa, steel ≈ 160 GPa, and diamond ≈ 443 GPa.",
    faq: [
      { question: "What does bulk modulus tell us?", answer: "Higher bulk modulus means the material is harder to compress. It is essential for hydraulic system design, acoustic wave propagation, and geophysics. Incompressible fluids would have infinite bulk modulus." },
      { question: "How does bulk modulus relate to other elastic constants?", answer: "For isotropic materials: K = E / (3(1 - 2ν)), where E is Young's modulus and ν is Poisson's ratio. This connects volumetric and tensile behavior." },
      { question: "Why is water nearly incompressible?", answer: "Water has K ≈ 2.2 GPa, meaning 1 MPa pressure reduces volume by only 0.045%. At the bottom of the Mariana Trench (~110 MPa), water is compressed by only about 5%." }
    ],
    seoMeta: { title: "Bulk Modulus Calculator", description: "Calculate bulk modulus from pressure and volume change.", keywords: "bulk modulus, compressibility, volumetric strain, pressure" }
  },
  {
    id: "copper-wire-weight-calculator", name: "Copper Wire Weight Calculator",
    description: "Calculate the weight of copper wire from its diameter and length.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "W = \\rho \\cdot \\pi \\left(\\frac{d}{2}\\right)^2 \\cdot L",
    inputs: [
      { id: "d_mm", label: "Wire Diameter (mm)", type: "number", defaultValue: 2 },
      { id: "L_m", label: "Wire Length (m)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "W_kg", label: "Weight", formula: "8960 * pi * (d_mm / 2000)^2 * L_m", unit: "kg" }
    ],
    theory: "Copper wire weight depends on its cross-sectional area and length. Copper has a density of 8,960 kg/m³. The formula calculates volume from the circular cross-section (πr²) times length, then multiplies by density.",
    faq: [
      { question: "What is the density of copper?", answer: "Pure copper has a density of 8,960 kg/m³ (8.96 g/cm³). This makes it one of the heavier common metals — about 3× heavier than aluminum." },
      { question: "How much does 100m of 2mm copper wire weigh?", answer: "Using the formula: π × (0.001)² × 100 × 8960 ≈ 2.81 kg. AWG wire sizes have standardized diameters that can be converted to mm." },
      { question: "Why is copper used for wiring?", answer: "Copper has the second-best electrical conductivity of all metals (after silver), excellent ductility for drawing into wire, good corrosion resistance, and high thermal conductivity." }
    ],
    seoMeta: { title: "Copper Wire Weight Calculator", description: "Calculate copper wire weight from diameter and length.", keywords: "copper wire, weight, diameter, AWG, electrical wire" }
  },
  {
    id: "density-calculator", name: "Density Calculator",
    description: "Calculate the density of an object from its mass and volume.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\rho = \\frac{m}{V}",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "V", label: "Volume (m³)", type: "number", defaultValue: 0.002 }
    ],
    outputs: [
      { id: "rho", label: "Density", formula: "m / V", unit: "kg/m³" }
    ],
    theory: "Density is mass per unit volume — a fundamental physical property that determines whether objects float or sink, how materials transmit sound, and is used for material identification. Each substance has a characteristic density at standard conditions.",
    faq: [
      { question: "What are densities of common materials?", answer: "Air: 1.2 kg/m³. Water: 1,000 kg/m³. Aluminum: 2,700. Steel: 7,800. Gold: 19,300. Lead: 11,340." },
      { question: "Does density change with temperature?", answer: "Yes, most materials expand when heated, decreasing their density. Water is unusual — it is densest at 4°C and less dense both above and below that temperature." },
      { question: "How is density measured?", answer: "Common methods: weighing + volume displacement (Archimedes), pycnometer for liquids, gas pycnometer for solids, hydrometer for liquid density." }
    ],
    seoMeta: { title: "Density Calculator", description: "Calculate density from mass and volume.", keywords: "density, mass, volume, specific gravity, material" }
  },
  {
    id: "elastic-constants-calculator", name: "Elastic Constants Calculator",
    description: "Calculate the relationship between Young's modulus, shear modulus, and Poisson's ratio.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "G = \\frac{E}{2(1 + \\nu)}",
    inputs: [
      { id: "E", label: "Young's Modulus (Pa)", type: "number", defaultValue: 200e9 },
      { id: "nu", label: "Poisson's Ratio", type: "number", defaultValue: 0.3 }
    ],
    outputs: [
      { id: "G_val", label: "Shear Modulus", formula: "E / (2 * (1 + nu))", unit: "Pa" },
      { id: "K_val", label: "Bulk Modulus", formula: "E / (3 * (1 - 2 * nu))", unit: "Pa" }
    ],
    theory: "For isotropic materials, only two independent elastic constants are needed — all others can be derived. The three most common are Young's modulus (E), shear modulus (G), and Poisson's ratio (ν). They are related by G = E/(2(1+ν)) and K = E/(3(1-2ν)).",
    faq: [
      { question: "How many elastic constants does an isotropic material have?", answer: "Only 2 independent constants. Given any two of E, G, ν, K, you can calculate the others. Anisotropic materials (like wood or composites) need up to 21 independent constants." },
      { question: "What are typical values for steel?", answer: "E ≈ 200 GPa, G ≈ 79 GPa, ν ≈ 0.30, K ≈ 167 GPa. These vary slightly with alloy composition and heat treatment." },
      { question: "What happens when Poisson's ratio approaches 0.5?", answer: "At ν = 0.5, bulk modulus becomes infinite — the material is incompressible (like rubber). Most metals have ν between 0.25–0.35. Cork has ν ≈ 0." }
    ],
    seoMeta: { title: "Elastic Constants Calculator", description: "Calculate relationships between E, G, K, and ν.", keywords: "elastic constants, Young's modulus, shear modulus, Poisson ratio, bulk modulus" }
  },
  {
    id: "elongation-calculator", name: "Elongation Calculator",
    description: "Calculate the elongation of a bar under axial tensile load.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\delta = \\frac{FL}{AE}",
    inputs: [
      { id: "F", label: "Axial Force (N)", type: "number", defaultValue: 10000 },
      { id: "L", label: "Original Length (m)", type: "number", defaultValue: 1 },
      { id: "A", label: "Cross-sectional Area (m²)", type: "number", defaultValue: 1e-4 },
      { id: "E", label: "Young's Modulus (Pa)", type: "number", defaultValue: 200e9 }
    ],
    outputs: [
      { id: "delta", label: "Elongation", formula: "F * L / (A * E)", unit: "m" },
      { id: "strain", label: "Strain", formula: "F / (A * E)", unit: "" }
    ],
    theory: "When an axial load is applied to a bar, it stretches by δ = FL/(AE). This is the 1D form of Hooke's Law for elastic deformation. The elongation is proportional to force and length, and inversely proportional to cross-sectional area and material stiffness.",
    faq: [
      { question: "What is strain?", answer: "Engineering strain ε = ΔL/L₀ is the fractional change in length. It is dimensionless. Typical elastic strains in metals are less than 0.2% (0.002)." },
      { question: "Is this valid for large deformations?", answer: "No, δ = FL/AE assumes linear elastic behavior (Hooke's Law). Beyond the yield point, plastic deformation occurs and true stress-strain analysis is needed." },
      { question: "How much does a 1m steel bar stretch under 10kN?", answer: "With A = 100 mm² and E = 200 GPa: δ = 10000 × 1 / (10⁻⁴ × 200×10⁹) = 0.5 mm. Steel is very stiff, so elastic elongations are small." }
    ],
    seoMeta: { title: "Elongation Calculator", description: "Calculate bar elongation under axial load.", keywords: "elongation, tensile, axial load, Hooke's law, strain" }
  },
  {
    id: "factor-of-safety-calculator", name: "Factor of Safety Calculator",
    description: "Calculate the factor of safety (FoS) as the ratio of material strength to applied stress.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "FoS = \\frac{\\sigma_{\\text{yield}}}{\\sigma_{\\text{applied}}}",
    inputs: [
      { id: "sigma_yield", label: "Yield Strength (Pa)", type: "number", defaultValue: 250e6 },
      { id: "sigma_applied", label: "Applied Stress (Pa)", type: "number", defaultValue: 100e6 }
    ],
    outputs: [
      { id: "FoS", label: "Factor of Safety", formula: "sigma_yield / sigma_applied", unit: "" }
    ],
    theory: "Factor of safety is a design margin that accounts for uncertainties in loads, material properties, manufacturing defects, and analysis approximations. An FoS of 2.0 means the structure can withstand twice the expected load. Different industries mandate different minimum FoS values.",
    faq: [
      { question: "What is a good factor of safety?", answer: "Building structures: 1.5–3.0. Aircraft: 1.25–1.5 (weight is critical). Pressure vessels: 3.5–4.0. Consumer products: 3–5. Nuclear: 4+." },
      { question: "Why not use a very high FoS?", answer: "Higher FoS means more material, more weight, and higher cost. In aerospace, excessive FoS adds weight that reduces payload and increases fuel consumption. Engineers optimize FoS to balance safety and efficiency." },
      { question: "Should I use yield or ultimate strength?", answer: "Use yield strength for ductile materials (prevents permanent deformation). Use ultimate strength for brittle materials (they fracture without yielding). Fatigue loading requires additional analysis." }
    ],
    seoMeta: { title: "Factor of Safety Calculator", description: "Calculate the safety factor for structural design.", keywords: "factor of safety, safety factor, yield strength, stress, structural design" }
  },
  {
    id: "gold-weight-calculator", name: "Gold Weight Calculator",
    description: "Calculate the weight of gold from its volume using gold's density.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "W = \\rho_{Au} \\cdot V",
    inputs: [
      { id: "V_cm3", label: "Volume (cm³)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "W_g", label: "Weight", formula: "19.32 * V_cm3", unit: "grams" },
      { id: "W_troy_oz", label: "Weight (Troy Ounces)", formula: "19.32 * V_cm3 / 31.1035", unit: "troy oz" }
    ],
    theory: "Gold has a density of 19,320 kg/m³ (19.32 g/cm³), making it one of the densest elements. A cube of gold just 3.7 cm on each side weighs about 1 kg. Gold is traditionally measured in troy ounces (31.1 grams) for trade.",
    faq: [
      { question: "How heavy is a gold bar?", answer: "A standard gold bar (London Good Delivery) weighs approximately 400 troy ounces (12.4 kg). It measures roughly 25.4 × 8.1 × 4.5 cm — about the size of a small brick." },
      { question: "Why is gold so dense?", answer: "Gold atoms are heavy (atomic mass 197) and pack efficiently in a face-centered cubic crystal structure. Relativistic effects on gold's electrons actually cause its atoms to be smaller than expected, increasing density." },
      { question: "What is a troy ounce?", answer: "A troy ounce = 31.1035 grams, slightly heavier than an avoirdupois ounce (28.35 g). Troy weight is the standard for precious metals trading worldwide." }
    ],
    seoMeta: { title: "Gold Weight Calculator", description: "Calculate gold weight from volume.", keywords: "gold weight, density, troy ounce, precious metals" }
  },
  {
    id: "hoop-stress-calculator", name: "Hoop Stress Calculator",
    description: "Calculate circumferential (hoop) stress in a thin-walled pressure vessel.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma_h = \\frac{pr}{t}",
    inputs: [
      { id: "p", label: "Internal Pressure (Pa)", type: "number", defaultValue: 1e6 },
      { id: "r", label: "Vessel Radius (m)", type: "number", defaultValue: 0.5 },
      { id: "t", label: "Wall Thickness (m)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "sigma_h", label: "Hoop Stress", formula: "p * r / t", unit: "Pa" },
      { id: "sigma_a", label: "Axial Stress", formula: "p * r / (2 * t)", unit: "Pa" }
    ],
    theory: "Hoop stress is the circumferential stress in a cylindrical pressure vessel. It is always twice the axial (longitudinal) stress, which is why pressure vessels typically fail along their length (bursting open like a hot dog). The thin-wall assumption requires r/t > 10.",
    faq: [
      { question: "Why is hoop stress twice the axial stress?", answer: "The circumferential direction must resist pressure acting over a larger projected area. Mathematically, σ_hoop = pr/t while σ_axial = pr/2t. This 2:1 ratio explains why pipes split lengthwise, not circumferentially." },
      { question: "When does the thin-wall formula apply?", answer: "The thin-wall assumption is valid when r/t > 10 (wall thickness is less than 10% of radius). For thick-walled vessels, use Lamé's equations which account for stress variation through the wall." },
      { question: "What is a real-world example?", answer: "A scuba tank at 200 bar with r=10 cm and t=8 mm: σ_hoop = 200×10⁵ × 0.10 / 0.008 = 25 MPa. This is well below steel's yield strength of ~250 MPa." }
    ],
    seoMeta: { title: "Hoop Stress Calculator", description: "Calculate hoop stress in pressure vessels.", keywords: "hoop stress, pressure vessel, circumferential stress, thin wall" }
  },
  {
    id: "impact-test-calculator", name: "Impact Test Calculator",
    description: "Calculate the impact energy absorbed by a specimen in a Charpy or Izod impact test.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "E = mg(h_1 - h_2)",
    inputs: [
      { id: "m_pend", label: "Pendulum Mass (kg)", type: "number", defaultValue: 20 },
      { id: "h1", label: "Initial Height (m)", type: "number", defaultValue: 1.5 },
      { id: "h2", label: "Final Height (m)", type: "number", defaultValue: 0.8 }
    ],
    outputs: [
      { id: "E_absorbed", label: "Energy Absorbed", formula: "m_pend * 9.80665 * (h1 - h2)", unit: "J" }
    ],
    theory: "Impact testing measures a material's toughness — its ability to absorb energy before fracturing. The Charpy and Izod tests swing a heavy pendulum into a notched specimen. The energy absorbed equals the potential energy difference between the pendulum's initial and final heights.",
    faq: [
      { question: "What is the difference between Charpy and Izod?", answer: "Charpy: specimen is supported horizontally on both ends, struck in the middle behind the notch. Izod: specimen is clamped vertically, struck on the same side as the notch. Charpy is more common for metals." },
      { question: "What affects impact toughness?", answer: "Temperature (ductile-to-brittle transition), strain rate, notch geometry, grain size, and alloy composition all affect toughness. Low temperatures make many steels dangerously brittle." },
      { question: "What is the ductile-to-brittle transition?", answer: "BCC metals (most steels) become brittle below a characteristic temperature. The Titanic sank partly because its steel was brittle in cold North Atlantic waters. Modern steels are formulated to have low transition temperatures." }
    ],
    seoMeta: { title: "Impact Test Calculator", description: "Calculate energy absorbed in Charpy/Izod impact tests.", keywords: "impact test, Charpy, Izod, toughness, fracture energy" }
  },
  {
    id: "intrinsic-carrier-concentration-calculator", name: "Intrinsic Carrier Concentration Calculator",
    description: "Estimate the intrinsic carrier concentration in a semiconductor at a given temperature.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "n_i = \\sqrt{N_c N_v} \\cdot e^{-E_g / (2k_B T)}",
    inputs: [
      { id: "Nc", label: "Effective DOS (conduction) (m⁻³)", type: "number", defaultValue: 2.8e25 },
      { id: "Nv", label: "Effective DOS (valence) (m⁻³)", type: "number", defaultValue: 1.04e25 },
      { id: "Eg", label: "Band Gap Energy (eV)", type: "number", defaultValue: 1.12, helpText: "Si: 1.12, Ge: 0.66, GaAs: 1.42" },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "ni", label: "Intrinsic Carrier Concentration", formula: "sqrt(Nc * Nv) * exp(-Eg * 1.60218e-19 / (2 * 1.380649e-23 * T_K))", unit: "m⁻³" }
    ],
    theory: "Intrinsic carrier concentration (nᵢ) determines the number of electrons and holes in an undoped semiconductor at thermal equilibrium. It increases exponentially with temperature and decreases with band gap energy. For silicon at 300K, nᵢ ≈ 1.5 × 10¹⁶ m⁻³.",
    faq: [
      { question: "What is nᵢ for silicon at room temperature?", answer: "At 300K, silicon has nᵢ ≈ 1.5 × 10¹⁰ cm⁻³ (1.5 × 10¹⁶ m⁻³). This is tiny compared to typical doping levels (10¹⁵–10¹⁸ cm⁻³), which is why doping dominates carrier concentration." },
      { question: "Why does nᵢ increase with temperature?", answer: "Higher temperature provides more thermal energy to excite electrons across the band gap. The exponential factor exp(-Eg/2kT) grows rapidly with T, approximately doubling nᵢ for every ~11°C increase in silicon." },
      { question: "Why does band gap matter?", answer: "Wider band gaps require more energy to create electron-hole pairs, reducing nᵢ. GaAs (Eg=1.42 eV) has much lower nᵢ than Ge (Eg=0.66 eV) at the same temperature." }
    ],
    seoMeta: { title: "Intrinsic Carrier Concentration Calculator", description: "Calculate semiconductor intrinsic carrier concentration.", keywords: "intrinsic carrier, semiconductor, band gap, silicon, carrier concentration" }
  },
  {
    id: "mohrs-circle-calculator", name: "Mohr's Circle Calculator",
    description: "Calculate the principal stresses and maximum shear stress from a 2D stress state using Mohr's circle.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}",
    inputs: [
      { id: "sx", label: "Normal Stress σx (Pa)", type: "number", defaultValue: 80e6 },
      { id: "sy", label: "Normal Stress σy (Pa)", type: "number", defaultValue: -40e6 },
      { id: "txy", label: "Shear Stress τxy (Pa)", type: "number", defaultValue: 30e6 }
    ],
    outputs: [
      { id: "s1", label: "Principal Stress σ₁ (max)", formula: "(sx + sy) / 2 + sqrt(((sx - sy) / 2)^2 + txy^2)", unit: "Pa" },
      { id: "s2", label: "Principal Stress σ₂ (min)", formula: "(sx + sy) / 2 - sqrt(((sx - sy) / 2)^2 + txy^2)", unit: "Pa" },
      { id: "tau_max", label: "Maximum Shear Stress", formula: "sqrt(((sx - sy) / 2)^2 + txy^2)", unit: "Pa" }
    ],
    theory: "Mohr's circle is a graphical representation of the 2D stress transformation equations. It shows how normal and shear stresses vary with orientation. The principal stresses are the extreme normal stresses (where shear is zero), and the maximum shear stress equals the circle's radius.",
    faq: [
      { question: "What are principal stresses?", answer: "Principal stresses are the maximum and minimum normal stresses at a point, occurring on planes where shear stress is zero. They represent the extreme values of normal stress at that point." },
      { question: "What is the maximum shear stress?", answer: "The max shear stress equals (σ₁ - σ₂)/2, which is the radius of Mohr's circle. It occurs on planes oriented at 45° to the principal stress planes." },
      { question: "Why is Mohr's circle useful?", answer: "It provides visual intuition for stress transformation and is essential for failure analysis. It quickly shows the complete stress state, helping engineers identify critical planes and apply failure criteria." }
    ],
    seoMeta: { title: "Mohr's Circle Calculator", description: "Calculate principal stresses and max shear stress.", keywords: "Mohr's circle, principal stress, shear stress, stress transformation" }
  },
  {
    id: "natural-frequency-calculator", name: "Natural Frequency Calculator",
    description: "Calculate the natural frequency of a spring-mass system.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "f_n = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
    inputs: [
      { id: "k", label: "Spring Constant (N/m)", type: "number", defaultValue: 1000 },
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "fn", label: "Natural Frequency", formula: "1 / (2 * pi) * sqrt(k / m)", unit: "Hz" },
      { id: "omega_n", label: "Natural Angular Frequency", formula: "sqrt(k / m)", unit: "rad/s" }
    ],
    theory: "Natural frequency is the frequency at which a system oscillates when displaced and released without external forcing. At resonance (forcing frequency = natural frequency), amplitude can grow dramatically, potentially causing structural failure. Understanding natural frequencies is critical for avoiding resonance disasters.",
    faq: [
      { question: "What is resonance?", answer: "Resonance occurs when an external force oscillates at the natural frequency, causing amplitude to grow dramatically. Famous examples: Tacoma Narrows Bridge collapse, wine glass shattering from a singer's voice." },
      { question: "How do engineers avoid resonance?", answer: "By designing natural frequencies away from expected forcing frequencies. Methods include adding mass (lowers fₙ), adding stiffness (raises fₙ), and adding damping (limits resonance amplitude)." },
      { question: "Does a bridge have natural frequencies?", answer: "Yes, all structures have natural frequencies. Engineers analyze these to ensure they don't coincide with wind, traffic, or seismic excitation frequencies." }
    ],
    seoMeta: { title: "Natural Frequency Calculator", description: "Calculate the natural frequency of a spring-mass system.", keywords: "natural frequency, resonance, spring-mass, vibration, modal analysis" }
  },
  {
    id: "number-density-calculator", name: "Number Density Calculator",
    description: "Calculate the number density of particles from mass density, molar mass, and Avogadro's number.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "n = \\frac{\\rho N_A}{M}",
    inputs: [
      { id: "rho", label: "Mass Density (kg/m³)", type: "number", defaultValue: 8960 },
      { id: "M_molar", label: "Molar Mass (kg/mol)", type: "number", defaultValue: 0.06355, helpText: "Copper: 0.06355 kg/mol" }
    ],
    outputs: [
      { id: "n_density", label: "Number Density", formula: "rho * 6.02214076e23 / M_molar", unit: "m⁻³" }
    ],
    theory: "Number density is the number of particles per unit volume. It connects macroscopic density to the atomic/molecular scale through Avogadro's number (6.022 × 10²³ mol⁻¹). It's essential in plasma physics, semiconductor physics, and gas dynamics.",
    faq: [
      { question: "What is the number density of air?", answer: "At STP: n ≈ 2.7 × 10²⁵ m⁻³ (Loschmidt's number). This means about 27 billion trillion molecules in every cubic meter of air." },
      { question: "How is number density used?", answer: "In plasma physics for electron density, in semiconductor physics for carrier concentration, in gas kinetics for collision rates, and in astrophysics for stellar interiors." },
      { question: "What is Avogadro's number?", answer: "Nₐ = 6.02214076 × 10²³ mol⁻¹. It is the number of entities in one mole of substance, defined exactly since the 2019 SI redefinition." }
    ],
    seoMeta: { title: "Number Density Calculator", description: "Calculate particle number density.", keywords: "number density, Avogadro, molar mass, particle density" }
  },
  {
    id: "poissons-ratio-calculator", name: "Poisson's Ratio Calculator",
    description: "Calculate Poisson's ratio from lateral and axial strain.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\nu = -\\frac{\\epsilon_{\\text{lateral}}}{\\epsilon_{\\text{axial}}}",
    inputs: [
      { id: "e_lat", label: "Lateral Strain (absolute value)", type: "number", defaultValue: 0.003 },
      { id: "e_ax", label: "Axial Strain", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "nu", label: "Poisson's Ratio", formula: "e_lat / e_ax", unit: "" }
    ],
    theory: "Poisson's ratio describes how a material contracts laterally when stretched axially (or expands laterally when compressed). Most materials have ν between 0 and 0.5. Cork has ν ≈ 0 (no lateral expansion), rubber has ν ≈ 0.5 (incompressible), and auxetic materials have negative ν.",
    faq: [
      { question: "What are typical Poisson's ratios?", answer: "Steel: 0.30. Aluminum: 0.33. Copper: 0.34. Rubber: ~0.50. Cork: ~0. Concrete: 0.2. Bone: 0.3." },
      { question: "Can Poisson's ratio be negative?", answer: "Yes! Auxetic materials expand laterally when stretched. Examples include some foams, metamaterials, and certain crystal structures. They have unique properties for impact absorption and fastening." },
      { question: "What does ν = 0.5 mean?", answer: "A Poisson's ratio of 0.5 means the material is perfectly incompressible — its volume doesn't change under stress. Rubber approximates this. Values above 0.5 are physically impossible for stable isotropic materials." }
    ],
    seoMeta: { title: "Poisson's Ratio Calculator", description: "Calculate Poisson's ratio from lateral and axial strain.", keywords: "Poisson's ratio, lateral strain, axial strain, elastic constant" }
  },
  {
    id: "principal-stress-calculator", name: "Principal Stress Calculator",
    description: "Calculate principal stresses from a 2D stress state.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}",
    inputs: [
      { id: "sx", label: "σx (Pa)", type: "number", defaultValue: 100e6 },
      { id: "sy", label: "σy (Pa)", type: "number", defaultValue: 50e6 },
      { id: "txy", label: "τxy (Pa)", type: "number", defaultValue: 30e6 }
    ],
    outputs: [
      { id: "s1", label: "σ₁ (max principal)", formula: "(sx + sy)/2 + sqrt(((sx-sy)/2)^2 + txy^2)", unit: "Pa" },
      { id: "s2", label: "σ₂ (min principal)", formula: "(sx + sy)/2 - sqrt(((sx-sy)/2)^2 + txy^2)", unit: "Pa" },
      { id: "theta_p", label: "Principal Angle", formula: "0.5 * atan(2*txy / (sx - sy)) * 180 / pi", unit: "°" }
    ],
    theory: "Principal stresses are the eigenvalues of the stress tensor — the maximum and minimum normal stresses that occur on planes where shear stress is zero. They are fundamental to failure analysis and determine whether a material will yield or fracture.",
    faq: [
      { question: "Why are principal stresses important?", answer: "Most failure criteria (Von Mises, Tresca, Mohr-Coulomb) are expressed in terms of principal stresses. They represent the most critical stress state for design decisions." },
      { question: "What is the principal angle?", answer: "The angle at which the coordinate axes must be rotated to align with the principal stress directions. Shear stress is zero on these planes." },
      { question: "How do principal stresses relate to failure?", answer: "Von Mises criterion: yielding occurs when a combination of principal stresses exceeds the yield strength. Tresca criterion: yielding when maximum shear stress (σ₁-σ₂)/2 exceeds τ_yield." }
    ],
    seoMeta: { title: "Principal Stress Calculator", description: "Calculate principal stresses and angles.", keywords: "principal stress, stress transformation, Mohr's circle, failure analysis" }
  },
  {
    id: "rockwell-hardness-conversion-calculator", name: "Rockwell Hardness Conversion Calculator",
    description: "Approximate conversion between Rockwell C hardness and Brinell/Vickers hardness numbers.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "BHN \\approx \\frac{HRC \\cdot 5.97 + 104.7}{1}",
    inputs: [
      { id: "HRC", label: "Rockwell C Hardness (HRC)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "BHN_approx", label: "≈ Brinell (BHN)", formula: "HRC * 5.97 + 104.7", unit: "HB" },
      { id: "HV_approx", label: "≈ Vickers (HV)", formula: "HRC * 7.3 + 145", unit: "HV" }
    ],
    theory: "Hardness scale conversions are approximate empirical relationships since different tests measure different aspects of material resistance. Rockwell C uses a diamond cone indenter, Brinell uses a steel/WC ball, and Vickers uses a diamond pyramid. ASTM E140 provides standard conversion tables.",
    faq: [
      { question: "When do I use Rockwell C vs. B?", answer: "HRC (Rockwell C, diamond cone): for hardened steels above 20 HRC. HRB (Rockwell B, ball): for softer materials like annealed steel and copper alloys. Different scales cannot be directly compared." },
      { question: "Are hardness conversions exact?", answer: "No, conversions are approximate because each test applies load differently and measures different responses. The relationships work well for similar steel types but may be inaccurate for non-ferrous metals or unusual microstructures." },
      { question: "What HRC values are typical for tools?", answer: "Knives: 55–62 HRC. Drill bits: 60–68 HRC. Ball bearings: 58–65 HRC. Spring steel: 44–50 HRC. Mild steel: not measurable on HRC scale (too soft)." }
    ],
    seoMeta: { title: "Rockwell Hardness Conversion Calculator", description: "Convert between Rockwell, Brinell, and Vickers hardness.", keywords: "Rockwell, Brinell, Vickers, hardness conversion, HRC" }
  },
  {
    id: "section-modulus-calculator", name: "Section Modulus Calculator",
    description: "Calculate the elastic section modulus for a rectangular cross-section.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "S = \\frac{bh^2}{6}",
    inputs: [
      { id: "b", label: "Width (m)", type: "number", defaultValue: 0.05 },
      { id: "h", label: "Height (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "S", label: "Elastic Section Modulus", formula: "b * h^2 / 6", unit: "m³" },
      { id: "I_val", label: "Moment of Inertia", formula: "b * h^3 / 12", unit: "m⁴" }
    ],
    theory: "Section modulus S = I/c relates the moment of inertia to the extreme fiber distance. It determines the maximum bending stress: σ_max = M/S. A larger section modulus means a beam can carry larger bending moments before reaching the yield stress.",
    faq: [
      { question: "What is the difference between section modulus and moment of inertia?", answer: "Moment of inertia (I) relates to bending stiffness (deflection). Section modulus (S = I/c) relates to bending strength (stress). S is I divided by the distance to the extreme fiber." },
      { question: "Why are I-beams so efficient?", answer: "I-beams concentrate material at the flanges (far from neutral axis), maximizing section modulus for a given weight. A solid rectangle uses much of its material near the neutral axis where it contributes little to bending resistance." },
      { question: "What is plastic section modulus?", answer: "The plastic section modulus (Z) is used for ultimate strength analysis, where the entire cross-section has yielded. Z ≥ S always. For rectangles, Z = bh²/4 vs S = bh²/6, so Z/S = 1.5." }
    ],
    seoMeta: { title: "Section Modulus Calculator", description: "Calculate elastic section modulus for beam design.", keywords: "section modulus, moment of inertia, beam, bending stress, structural" }
  },
  {
    id: "shear-modulus-calculator", name: "Shear Modulus Calculator",
    description: "Calculate the shear modulus from shear stress and shear strain.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "G = \\frac{\\tau}{\\gamma}",
    inputs: [
      { id: "tau", label: "Shear Stress (Pa)", type: "number", defaultValue: 50e6 },
      { id: "gamma", label: "Shear Strain", type: "number", defaultValue: 0.001 }
    ],
    outputs: [
      { id: "G", label: "Shear Modulus", formula: "tau / gamma", unit: "Pa" }
    ],
    theory: "Shear modulus (G or μ) measures a material's resistance to shearing deformation. It is the ratio of shear stress to shear strain in the elastic region. Shear modulus is related to Young's modulus by G = E/(2(1+ν)).",
    faq: [
      { question: "What are typical shear moduli?", answer: "Steel: ~79 GPa. Aluminum: ~26 GPa. Copper: ~45 GPa. Rubber: ~0.3 MPa. Glass: ~26 GPa." },
      { question: "How does shear modulus relate to rigidity?", answer: "Shear modulus is also called the 'modulus of rigidity.' Higher G means greater resistance to shape change without volume change. It determines torsional stiffness and shear wave velocity." },
      { question: "Why is G important for shafts?", answer: "Shaft twist angle φ = TL/GJ depends directly on G. Materials with higher shear modulus resist torsional deformation better, making them suitable for power transmission shafts." }
    ],
    seoMeta: { title: "Shear Modulus Calculator", description: "Calculate shear modulus from stress and strain.", keywords: "shear modulus, rigidity, shear stress, shear strain, torsion" }
  },
  {
    id: "shear-strain-calculator", name: "Shear Strain Calculator",
    description: "Calculate shear strain from angular deformation.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\gamma = \\frac{\\delta}{L}",
    inputs: [
      { id: "delta", label: "Lateral Displacement (m)", type: "number", defaultValue: 0.001 },
      { id: "L", label: "Height/Length (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "gamma", label: "Shear Strain", formula: "delta / L", unit: "rad" }
    ],
    theory: "Shear strain measures the angular distortion of a material element. It is defined as the tangent of the deformation angle, which for small angles equals δ/L. Unlike normal strain (length change), shear strain represents shape change without volume change.",
    faq: [
      { question: "How is shear strain different from normal strain?", answer: "Normal strain changes length. Shear strain changes shape (angle). A square element becomes a parallelogram under shear strain. Shear strain is measured in radians (dimensionless)." },
      { question: "What is engineering shear strain vs tensor shear strain?", answer: "Engineering shear strain γ = 2ε₁₂ (tensor shear strain). Engineering shear strain is twice the tensor notation. Be careful which convention is used in equations." },
      { question: "What is shear strain at yield?", answer: "Shear yield strain = τ_yield/G. For steel: ≈ 145 MPa / 79 GPa ≈ 0.0018 rad (about 0.1°). Rubber can undergo enormous shear strains (>100%) elastically." }
    ],
    seoMeta: { title: "Shear Strain Calculator", description: "Calculate shear strain from displacement.", keywords: "shear strain, angular distortion, deformation, shear" }
  },
  {
    id: "shear-stress-calculator", name: "Shear Stress Calculator",
    description: "Calculate shear stress from applied force and cross-sectional area.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\tau = \\frac{V}{A}",
    inputs: [
      { id: "V", label: "Shear Force (N)", type: "number", defaultValue: 5000 },
      { id: "A", label: "Cross-sectional Area (m²)", type: "number", defaultValue: 1e-4 }
    ],
    outputs: [
      { id: "tau", label: "Average Shear Stress", formula: "V / A", unit: "Pa" }
    ],
    theory: "Shear stress acts parallel to the cross-section, tending to slide one face past the other. Average shear stress τ = V/A assumes uniform distribution, which is a simplification. In beams, the actual shear stress varies parabolically across the cross-section (maximum at the neutral axis).",
    faq: [
      { question: "Where is shear stress highest in a beam?", answer: "Maximum shear stress in a beam occurs at the neutral axis, not at the surface. For a rectangular beam, τ_max = 1.5V/A (50% higher than average). For circular sections, τ_max = 4V/(3A)." },
      { question: "What causes shear failure?", answer: "Shear failure occurs when shear stress exceeds the material's shear strength. Bolts fail in shear when lateral forces cut across them. Beams can fail in shear near supports where shear forces are highest." },
      { question: "How does shear strength relate to tensile strength?", answer: "For most ductile metals, shear yield strength ≈ 0.577 × tensile yield strength (Von Mises criterion) or 0.5 × tensile yield strength (Tresca criterion)." }
    ],
    seoMeta: { title: "Shear Stress Calculator", description: "Calculate average shear stress.", keywords: "shear stress, shear force, cross-section, beam shear" }
  },
  {
    id: "shear-wave-velocity-calculator", name: "Shear Wave Velocity Calculator",
    description: "Calculate the velocity of shear (S) waves through a material.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "v_s = \\sqrt{\\frac{G}{\\rho}}",
    inputs: [
      { id: "G", label: "Shear Modulus (Pa)", type: "number", defaultValue: 79.3e9 },
      { id: "rho", label: "Density (kg/m³)", type: "number", defaultValue: 7800 }
    ],
    outputs: [
      { id: "vs", label: "Shear Wave Velocity", formula: "sqrt(G / rho)", unit: "m/s" }
    ],
    theory: "Shear (S) waves propagate through solids by displacing particles perpendicular to the wave direction. Their velocity depends on the shear modulus and density. S-waves cannot travel through liquids (G = 0 for fluids), which is how seismologists know the Earth's outer core is liquid.",
    faq: [
      { question: "Why can't shear waves travel through liquids?", answer: "Liquids have zero shear modulus — they cannot resist shearing forces. Since vs = √(G/ρ), G = 0 gives vs = 0. This is how seismologists discovered Earth's liquid outer core: S-waves disappear beyond it." },
      { question: "How fast are shear waves in steel?", answer: "Steel: vs ≈ √(79×10⁹/7800) ≈ 3,190 m/s. This is about 55% of the compressional (P) wave velocity in steel (~5,900 m/s)." },
      { question: "What are S-waves used for?", answer: "Seismology (earthquake analysis, Earth structure), ultrasonic testing (material inspection), and geophysics (soil characterization for earthquake engineering)." }
    ],
    seoMeta: { title: "Shear Wave Velocity Calculator", description: "Calculate shear wave speed through materials.", keywords: "shear wave, S-wave, seismic velocity, shear modulus" }
  },
  {
    id: "slenderness-ratio-calculator", name: "Slenderness Ratio Calculator",
    description: "Calculate the slenderness ratio of a column to determine buckling susceptibility.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\lambda = \\frac{KL}{r}",
    inputs: [
      { id: "K_eff", label: "Effective Length Factor", type: "number", defaultValue: 1 },
      { id: "L", label: "Column Length (m)", type: "number", defaultValue: 3 },
      { id: "r_gyration", label: "Radius of Gyration (m)", type: "number", defaultValue: 0.03 }
    ],
    outputs: [
      { id: "lambda", label: "Slenderness Ratio", formula: "K_eff * L / r_gyration", unit: "" }
    ],
    theory: "The slenderness ratio determines whether a column fails by buckling (elastic instability) or crushing (material yielding). High slenderness ratio = slender column → Euler buckling. Low slenderness ratio = short column → material yielding. The transition occurs around λ ≈ 80–120 for steel.",
    faq: [
      { question: "What is radius of gyration?", answer: "r = √(I/A), where I is moment of inertia and A is area. It represents the distance from the centroid at which the area would need to be concentrated to give the same moment of inertia." },
      { question: "What slenderness ratio means 'short' vs 'long' column?", answer: "For steel: λ < ~60 = short (crushing governs). λ > ~120 = long (Euler buckling governs). 60 < λ < 120 = intermediate (use empirical formulas like Johnson's)." },
      { question: "How do I reduce the slenderness ratio?", answer: "Use a larger cross-section (increases r), add bracing (reduces effective length KL), or use fixed end conditions (reduces K). All these reduce buckling risk." }
    ],
    seoMeta: { title: "Slenderness Ratio Calculator", description: "Calculate column slenderness ratio.", keywords: "slenderness ratio, column buckling, radius of gyration, Euler" }
  },
  {
    id: "specific-gravity-calculator", name: "Specific Gravity Calculator",
    description: "Calculate specific gravity as the ratio of a substance's density to water's density.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "SG = \\frac{\\rho_{\\text{substance}}}{\\rho_{\\text{water}}}",
    inputs: [
      { id: "rho_sub", label: "Substance Density (kg/m³)", type: "number", defaultValue: 7800 }
    ],
    outputs: [
      { id: "SG", label: "Specific Gravity", formula: "rho_sub / 1000", unit: "" }
    ],
    theory: "Specific gravity is the dimensionless ratio of a substance's density to water's density (1,000 kg/m³ at 4°C). SG > 1 means the substance sinks in water; SG < 1 means it floats. It is widely used in mineralogy, brewing, petroleum, and battery testing.",
    faq: [
      { question: "What are specific gravities of common materials?", answer: "Ice: 0.92 (floats). Aluminum: 2.7. Iron: 7.87. Gold: 19.3. Mercury: 13.6. Gasoline: 0.72. Seawater: 1.025." },
      { question: "How is specific gravity measured?", answer: "Using a hydrometer (floating device), pycnometer (precision flask), or by weighing in air and then in water (Archimedes method). Digital density meters use vibrating tube technology." },
      { question: "Why is SG used instead of density?", answer: "SG is dimensionless and numerically equals density in g/cm³, making calculations simpler. It also allows quick comparison between substances and immediate determination of whether something will float." }
    ],
    seoMeta: { title: "Specific Gravity Calculator", description: "Calculate specific gravity relative to water.", keywords: "specific gravity, relative density, density ratio, float sink" }
  },
  {
    id: "stiffness-matrix-calculator", name: "Stiffness Matrix Calculator",
    description: "Calculate the axial stiffness of a structural element for finite element analysis.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "k = \\frac{EA}{L}",
    inputs: [
      { id: "E", label: "Young's Modulus (Pa)", type: "number", defaultValue: 200e9 },
      { id: "A", label: "Cross-sectional Area (m²)", type: "number", defaultValue: 1e-4 },
      { id: "L", label: "Element Length (m)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "k_stiff", label: "Axial Stiffness", formula: "E * A / L", unit: "N/m" }
    ],
    theory: "The axial stiffness k = EA/L is the fundamental building block of the stiffness method in structural analysis and finite element analysis (FEA). It relates the applied axial force to the resulting displacement: F = kδ. For a 2-node bar element, the stiffness matrix is [[k,-k],[-k,k]].",
    faq: [
      { question: "What is the stiffness method?", answer: "The stiffness (displacement) method assembles individual element stiffness matrices into a global stiffness matrix: [K]{u} = {F}. Solving for displacements {u} gives the structural response. It is the basis of all FEA software." },
      { question: "What affects structural stiffness?", answer: "Material stiffness (E), cross-section size (A or I), and element length (L). Stiffness increases with E and A, and decreases with L. Boundary conditions also greatly affect global stiffness." },
      { question: "Why is FEA important?", answer: "FEA allows engineers to analyze complex structures that have no analytical solution. It predicts stresses, deformations, vibration modes, heat transfer, and fluid flow in virtually any geometry." }
    ],
    seoMeta: { title: "Stiffness Matrix Calculator", description: "Calculate structural element stiffness for FEA.", keywords: "stiffness matrix, FEA, finite element, structural analysis" }
  },
  {
    id: "stress-calculator", name: "Stress Calculator",
    description: "Calculate normal stress from applied force and cross-sectional area.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma = \\frac{F}{A}",
    inputs: [
      { id: "F", label: "Applied Force (N)", type: "number", defaultValue: 10000 },
      { id: "A", label: "Cross-sectional Area (m²)", type: "number", defaultValue: 1e-4 }
    ],
    outputs: [
      { id: "sigma", label: "Normal Stress", formula: "F / A", unit: "Pa" },
      { id: "sigma_MPa", label: "Stress (MPa)", formula: "F / A / 1e6", unit: "MPa" }
    ],
    theory: "Stress is the internal force per unit area within a material, measured in Pascals (Pa) or MPa. Tensile stress (positive) pulls material apart; compressive stress (negative) pushes it together. Stress is fundamental to all structural and mechanical engineering.",
    faq: [
      { question: "What is the difference between stress and pressure?", answer: "Stress is internal force intensity within a material; pressure is external force on a surface. Stress is a tensor (varies with orientation); pressure is a scalar. They have the same units (Pa)." },
      { question: "What is yield stress?", answer: "Yield stress is the stress at which permanent (plastic) deformation begins. Below it, deformation is elastic (reversible). Mild steel: ~250 MPa. Aluminum 6061: ~276 MPa. Titanium: ~880 MPa." },
      { question: "What is the difference between engineering and true stress?", answer: "Engineering stress = F/A₀ (original area). True stress = F/A (instantaneous area). They diverge significantly during plastic deformation as the cross-section changes." }
    ],
    seoMeta: { title: "Stress Calculator", description: "Calculate normal stress from force and area.", keywords: "stress, force, area, Pascal, tensile, compressive" }
  },
  {
    id: "stress-concentration-factor-calculator", name: "Stress Concentration Factor Calculator",
    description: "Calculate the maximum stress at a notch or hole using the stress concentration factor.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma_{\\max} = K_t \\cdot \\sigma_{\\text{nom}}",
    inputs: [
      { id: "Kt", label: "Stress Concentration Factor (Kt)", type: "number", defaultValue: 3, helpText: "Circular hole in plate: ~3" },
      { id: "sigma_nom", label: "Nominal Stress (Pa)", type: "number", defaultValue: 50e6 }
    ],
    outputs: [
      { id: "sigma_max", label: "Maximum Local Stress", formula: "Kt * sigma_nom", unit: "Pa" }
    ],
    theory: "Geometric discontinuities (holes, notches, fillets) cause local stress amplification. The stress concentration factor Kt = σ_max/σ_nom quantifies this amplification. A circular hole in a wide plate has Kt ≈ 3, meaning the stress at the hole edge is three times the far-field stress.",
    faq: [
      { question: "What are typical Kt values?", answer: "Circular hole in plate: ~3. Semicircular notch: ~3. Sharp V-notch: 4–8+. Filleted shoulder: 1.5–3. Keyway: 3–5. Sharper features produce higher Kt." },
      { question: "How can I reduce stress concentration?", answer: "Use generous fillets (rounded corners), remove sharp notches, add relief holes near stress risers, and smooth surface finishes. Gradual geometry transitions reduce Kt significantly." },
      { question: "Does Kt apply to fatigue?", answer: "For fatigue, the fatigue stress concentration factor Kf ≤ Kt is used. Kf depends on material sensitivity to notches (notch sensitivity q): Kf = 1 + q(Kt - 1). Ductile materials are less notch-sensitive." }
    ],
    seoMeta: { title: "Stress Concentration Factor Calculator", description: "Calculate peak stress at geometric discontinuities.", keywords: "stress concentration, Kt, notch, hole, fatigue" }
  },
  {
    id: "thermal-stress-calculator", name: "Thermal Stress Calculator",
    description: "Calculate the stress induced in a constrained material due to temperature change.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma = E \\cdot \\alpha \\cdot \\Delta T",
    inputs: [
      { id: "E", label: "Young's Modulus (Pa)", type: "number", defaultValue: 200e9 },
      { id: "alpha", label: "Thermal Expansion Coefficient (1/K)", type: "number", defaultValue: 12e-6, helpText: "Steel: 12e-6, Aluminum: 23e-6" },
      { id: "dT", label: "Temperature Change (K or °C)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "sigma_th", label: "Thermal Stress", formula: "E * alpha * dT", unit: "Pa" }
    ],
    theory: "When a material is heated but constrained from expanding, compressive thermal stress develops. Conversely, cooling a constrained material induces tensile stress. Thermal stress = EαΔT, which can be significant — a 100°C temperature rise in constrained steel produces ~240 MPa, near the yield stress.",
    faq: [
      { question: "When do thermal stresses occur?", answer: "Whenever thermal expansion is constrained: railroad rails (expansion joints needed), concrete slabs, piping systems, engine blocks, welded joints, and composite materials with mismatched expansion coefficients." },
      { question: "How are thermal stresses managed?", answer: "Expansion joints, bellows, sliding supports, material selection (match expansion coefficients), and stress-relief heat treatment. Good design accommodates thermal movement rather than resisting it." },
      { question: "Can thermal stress cause failure?", answer: "Yes. Thermal fatigue (cyclic heating/cooling) causes crack initiation and growth. Thermal shock can fracture brittle materials like ceramics and glass when subjected to rapid temperature changes." }
    ],
    seoMeta: { title: "Thermal Stress Calculator", description: "Calculate stress from constrained thermal expansion.", keywords: "thermal stress, thermal expansion, temperature, constrained expansion" }
  },
  {
    id: "torsional-constant-calculator", name: "Torsional Constant Calculator",
    description: "Calculate the torsional constant (polar moment of inertia) for a solid circular cross-section.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "J = \\frac{\\pi d^4}{32}",
    inputs: [
      { id: "d_m", label: "Shaft Diameter (m)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "J_val", label: "Torsional Constant (J)", formula: "pi * d_m^4 / 32", unit: "m⁴" }
    ],
    theory: "The torsional constant J (polar moment of inertia for circular sections) determines a shaft's resistance to torsion. It depends on the fourth power of the diameter, meaning a small increase in diameter dramatically increases torsional strength and stiffness.",
    faq: [
      { question: "Why does J depend on d⁴?", answer: "Material farther from the center contributes more to torsional resistance. The fourth-power dependence means doubling the diameter increases J by 16×. This is why hollow shafts are efficient — they put material where it matters most." },
      { question: "What about hollow shafts?", answer: "For hollow circular shafts: J = π(D⁴ - d⁴)/32, where D is outer and d is inner diameter. A hollow shaft can achieve 90% of the solid shaft's J with only 60% of the weight." },
      { question: "Is J the same as polar moment of inertia?", answer: "For circular cross-sections, yes: J = Ip = πd⁴/32. For non-circular sections, the torsional constant differs from the polar moment of inertia and requires more complex analysis." }
    ],
    seoMeta: { title: "Torsional Constant Calculator", description: "Calculate torsional constant for circular shafts.", keywords: "torsional constant, polar moment, shaft, torsion, J" }
  },
  {
    id: "torsional-stiffness-calculator", name: "Torsional Stiffness Calculator",
    description: "Calculate the torsional stiffness of a shaft from material and geometry.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "k_t = \\frac{GJ}{L}",
    inputs: [
      { id: "G", label: "Shear Modulus (Pa)", type: "number", defaultValue: 79.3e9 },
      { id: "J", label: "Torsional Constant (m⁴)", type: "number", defaultValue: 1e-7 },
      { id: "L", label: "Shaft Length (m)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "kt", label: "Torsional Stiffness", formula: "G * J / L", unit: "N·m/rad" }
    ],
    theory: "Torsional stiffness k_t = GJ/L determines the torque required per unit angle of twist. Higher torsional stiffness means less angular deflection under load, which is critical for precise power transmission, vibration control, and mechanical accuracy.",
    faq: [
      { question: "How do I increase torsional stiffness?", answer: "Use stiffer material (higher G), increase shaft diameter (J ∝ d⁴), or shorten the shaft (inverse L). Hollow shafts provide high J with less weight." },
      { question: "Why is torsional stiffness important?", answer: "In drive shafts, insufficient torsional stiffness causes wind-up and vibration. In precision machines, it affects positioning accuracy. In vehicles, it affects drivetrain response." },
      { question: "How does torsional stiffness relate to natural frequency?", answer: "The torsional natural frequency ωₙ = √(kt/I_mass), where I_mass is the mass moment of inertia of the rotating component. This determines torsional vibration characteristics." }
    ],
    seoMeta: { title: "Torsional Stiffness Calculator", description: "Calculate shaft torsional stiffness.", keywords: "torsional stiffness, shaft, torque, twist, drive shaft" }
  },
  {
    id: "true-strain-calculator", name: "True Strain Calculator",
    description: "Calculate true (logarithmic) strain from original and final lengths.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\epsilon_{\\text{true}} = \\ln\\left(\\frac{L_f}{L_0}\\right)",
    inputs: [
      { id: "L0", label: "Original Length (m)", type: "number", defaultValue: 0.1 },
      { id: "Lf", label: "Final Length (m)", type: "number", defaultValue: 0.12 }
    ],
    outputs: [
      { id: "e_true", label: "True Strain", formula: "log(Lf / L0)", unit: "" },
      { id: "e_eng", label: "Engineering Strain", formula: "(Lf - L0) / L0", unit: "" }
    ],
    theory: "True (logarithmic) strain accounts for the continuously changing gauge length during deformation: ε_true = ln(L_f/L₀). It is additive for sequential deformations and is more physically meaningful for large strains. Engineering strain ε = ΔL/L₀ is simpler but inaccurate for large deformations.",
    faq: [
      { question: "When does true strain matter?", answer: "True strain is important for large plastic deformations (>5%): metal forming, forging, rolling, and drawing operations. For small elastic strains (<2%), engineering and true strain are nearly identical." },
      { question: "How do engineering and true strain differ?", answer: "For 20% elongation: engineering strain = 0.20, true strain = ln(1.2) = 0.182. For 100% elongation: engineering = 1.0, true = ln(2) = 0.693. The difference grows with deformation." },
      { question: "Why is true strain additive?", answer: "Stretching from L₀ to L₁ then to L₂: ε_total = ln(L₂/L₀) = ln(L₁/L₀) + ln(L₂/L₁). Engineering strain does not have this useful property." }
    ],
    seoMeta: { title: "True Strain Calculator", description: "Calculate true and engineering strain.", keywords: "true strain, logarithmic strain, engineering strain, deformation" }
  },
  {
    id: "vickers-hardness-number-calculator", name: "Vickers Hardness Number Calculator",
    description: "Calculate Vickers hardness from the test load and indentation diagonal.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "HV = \\frac{1.8544 \\cdot F}{d^2}",
    inputs: [
      { id: "F_kgf", label: "Applied Force (kgf)", type: "number", defaultValue: 10 },
      { id: "d_mm", label: "Average Diagonal (mm)", type: "number", defaultValue: 0.2 }
    ],
    outputs: [
      { id: "HV", label: "Vickers Hardness", formula: "1.8544 * F_kgf / d_mm^2", unit: "HV" }
    ],
    theory: "The Vickers test uses a diamond pyramid indenter (136° square-based) pressed into the material. The resulting square impression's diagonals are measured microscopically. The Vickers scale covers the full hardness range from soft lead to hard ceramics with a single test type.",
    faq: [
      { question: "What are the advantages of Vickers testing?", answer: "One scale covers all materials (HV 5 to HV 3000+). The square indentation allows precise measurement. It works for thin coatings and small areas (microhardness). The indent shape is geometrically self-similar at all loads." },
      { question: "What are typical Vickers values?", answer: "Lead: ~5 HV. Copper: ~50 HV. Mild steel: ~150 HV. Hardened steel: ~700 HV. Tungsten carbide: ~1500 HV. Diamond: ~10,000 HV." },
      { question: "How does Vickers compare to Rockwell?", answer: "Vickers is more precise and versatile but slower (requires microscope measurement). Rockwell is faster (direct dial reading) but less versatile. Conversion tables exist but are approximate." }
    ],
    seoMeta: { title: "Vickers Hardness Calculator", description: "Calculate Vickers hardness from test parameters.", keywords: "Vickers hardness, HV, microhardness, diamond pyramid, material testing" }
  },
  {
    id: "volume-to-mass-calculator", name: "Volume to Mass Calculator",
    description: "Calculate the mass of a substance from its volume and density.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "m = \\rho \\cdot V",
    inputs: [
      { id: "rho", label: "Density (kg/m³)", type: "number", defaultValue: 7800, helpText: "Steel: 7800, Aluminum: 2700, Water: 1000" },
      { id: "V", label: "Volume (m³)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "mass", label: "Mass", formula: "rho * V", unit: "kg" }
    ],
    theory: "Mass equals density times volume. This fundamental relationship is used in material estimation, shipping weight calculations, structural loading, and process engineering. Different materials have vastly different densities, making volume alone insufficient for weight estimation.",
    faq: [
      { question: "How do I estimate the weight of a steel part?", answer: "Calculate the volume (from dimensions or CAD), multiply by steel density (7,800 kg/m³). For example, a steel block 10×10×10 cm = 0.001 m³ × 7800 = 7.8 kg." },
      { question: "Why is density important for material selection?", answer: "Aerospace applications need low density (aluminum, titanium, composites). Heavy counterweights need high density (lead, tungsten). Buoyancy depends on comparing object density to fluid density." },
      { question: "Can I convert between volume units easily?", answer: "1 m³ = 1000 liters = 10⁶ cm³. 1 gallon = 3.785 liters. 1 cubic foot = 28.317 liters." }
    ],
    seoMeta: { title: "Volume to Mass Calculator", description: "Calculate mass from volume and density.", keywords: "volume to mass, density, weight estimation, material" }
  },
  {
    id: "von-mises-stress-calculator", name: "Von Mises Stress Calculator",
    description: "Calculate the Von Mises equivalent stress for a 2D or 3D stress state.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "\\sigma_v = \\sqrt{\\sigma_x^2 - \\sigma_x \\sigma_y + \\sigma_y^2 + 3\\tau_{xy}^2}",
    inputs: [
      { id: "sx", label: "σx (Pa)", type: "number", defaultValue: 100e6 },
      { id: "sy", label: "σy (Pa)", type: "number", defaultValue: -50e6 },
      { id: "txy", label: "τxy (Pa)", type: "number", defaultValue: 30e6 }
    ],
    outputs: [
      { id: "sv", label: "Von Mises Stress", formula: "sqrt(sx^2 - sx * sy + sy^2 + 3 * txy^2)", unit: "Pa" }
    ],
    theory: "Von Mises stress is a scalar value that combines all stress components into a single equivalent stress for comparison against the yield strength. The Von Mises yield criterion states that yielding occurs when σ_v ≥ σ_yield. It is the most widely used failure criterion for ductile metals and is the default in most FEA software.",
    faq: [
      { question: "Why use Von Mises instead of maximum stress?", answer: "Von Mises accounts for the distortion energy in all directions simultaneously. A material can withstand higher individual stresses if they are combined favorably. Pure hydrostatic pressure, for example, does not cause yielding regardless of magnitude." },
      { question: "When is Von Mises NOT appropriate?", answer: "Von Mises is for ductile materials under static loading. For brittle materials, use maximum normal stress or Mohr-Coulomb. For fatigue, use fatigue-specific criteria. For pressure-dependent materials (soil, rock), use Drucker-Prager." },
      { question: "What is the physical meaning of Von Mises?", answer: "Von Mises stress represents the distortion (shape-change) energy per unit volume. Yielding occurs when the distortion energy reaches a critical value, regardless of the specific stress combination that caused it." }
    ],
    seoMeta: { title: "Von Mises Stress Calculator", description: "Calculate equivalent Von Mises stress.", keywords: "Von Mises, equivalent stress, yield criterion, ductile failure, FEA" }
  },
  {
    id: "youngs-modulus-calculator", name: "Young's Modulus Calculator",
    description: "Calculate Young's modulus (elastic modulus) from stress and strain.",
    category: "physics", subcategory: "materials-continuum",
    scientificFormula: "E = \\frac{\\sigma}{\\epsilon}",
    inputs: [
      { id: "sigma", label: "Stress (Pa)", type: "number", defaultValue: 200e6 },
      { id: "epsilon", label: "Strain", type: "number", defaultValue: 0.001 }
    ],
    outputs: [
      { id: "E_val", label: "Young's Modulus", formula: "sigma / epsilon", unit: "Pa" }
    ],
    theory: "Young's modulus (E) is the fundamental measure of material stiffness — the slope of the stress-strain curve in the elastic region. Higher E means less deformation under load. It is named after Thomas Young, though Leonhard Euler described it earlier.",
    faq: [
      { question: "What are typical Young's modulus values?", answer: "Rubber: ~0.01 GPa. Wood: ~10 GPa. Bone: ~18 GPa. Aluminum: ~69 GPa. Steel: ~200 GPa. Tungsten: ~411 GPa. Diamond: ~1,220 GPa." },
      { question: "Does Young's modulus change with heat treatment?", answer: "Not significantly. E is determined by atomic bond stiffness, which is largely unaffected by microstructure. Heat treatment changes yield strength and ductility but barely affects E. All steels have E ≈ 200 GPa regardless of grade." },
      { question: "What is the difference between E and stiffness?", answer: "E is a material property (inherent to the material). Stiffness is a structural property that depends on E, geometry, and boundary conditions: k = EA/L for axial, k = 3EI/L³ for a cantilever, etc." }
    ],
    seoMeta: { title: "Young's Modulus Calculator", description: "Calculate Young's modulus from stress and strain.", keywords: "Young's modulus, elastic modulus, stiffness, stress, strain, Hooke's law" }
  }
];
