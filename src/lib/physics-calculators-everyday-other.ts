import { CalculatorConfig } from "./calculator-types";

export const EVERYDAY_OTHER_CALCULATORS: CalculatorConfig[] = [
  // ═══════════════════════════════════════════════════════════
  // EVERYDAY PHYSICS & EXPERIMENTS 👩‍🔬
  // ═══════════════════════════════════════════════════════════
  {
    id: "buoyancy-experiment-calculator", name: "Buoyancy Experiment Calculator",
    description: "Calculate buoyant force from displaced volume in classroom experiments.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "F_b = \\rho \\cdot V \\cdot g",
    inputs: [
      { id: "V_disp_ml", label: "Displaced Volume (mL)", type: "number", defaultValue: 100 },
      { id: "rho_fluid_g_ml", label: "Fluid Density (g/mL)", type: "number", defaultValue: 1.0, helpText: "Water: 1.0, Saltwater ≈ 1.025, Alcohol ≈ 0.79" }
    ],
    outputs: [
      { id: "buoyancy_force_n", label: "Buoyant Force", formula: "(V_disp_ml * 1e-6) * (rho_fluid_g_ml * 1000) * 9.80665", unit: "N" },
      { id: "buoyancy_force_gf", label: "Buoyant Force", formula: "V_disp_ml * rho_fluid_g_ml", unit: "gf (grams-force)" }
    ],
    theory: "Archimedes' principle states that the upward buoyant force on an object immersed in a fluid is equal to the weight of the fluid that the object displaces. In classroom lab setups, measuring volume displacement (mL) provides a direct route to calculating buoyant force.",
    faq: [
      { question: "Why does shape not affect buoyant force?", answer: "Buoyancy depends only on the *volume* of the displaced fluid and the fluid's density, not the shape, material, or weight of the submerged object." },
      { question: "What is a gram-force?", answer: "A unit of force equal to the weight of one gram mass under standard gravity (~0.0098 Newton). It is convenient for classroom spring scale measurements." },
      { question: "Will an object sink or float?", answer: "If the buoyant force equals the object's weight, it floats or suspends. If the object's weight is greater, it sinks." }
    ],
    seoMeta: { title: "Buoyancy Experiment Calculator", description: "Calculate buoyant force from volume displacement.", keywords: "buoyancy, Archimedes principle, physics experiment, density, displaced volume" }
  },
  {
    id: "flat-vs-round-earth-calculator", name: "Flat vs. Round Earth Calculator",
    description: "Calculate the geometric curvature drop over a distance on a spherical Earth.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "h_d \\approx \\frac{d^2}{2 R}",
    inputs: [
      { id: "dist_km", label: "Distance (km)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "curvature_drop_m", label: "Curvature Drop", formula: "(dist_km^2) * 0.07848", unit: "m" },
      { id: "curvature_drop_in", label: "Curvature Drop", formula: "(dist_km / 1.60934)^2 * 8", unit: "inches" }
    ],
    theory: "On a spherical Earth of radius R ≈ 6371 km, the surface curves away from a straight line of sight. The drop height (curvature drop) over a distance d is given by h = R * (1 - cos(d/R)), which is closely approximated by d²/(2R) for typical terrestrial distances. This equates to approximately 8 inches per mile squared.",
    faq: [
      { question: "Why doesn't the drop look this big?", answer: "Atmospheric refraction bends light downward, which allows objects to be seen further than geometric line-of-sight formulas predict, reducing the apparent drop by about 15% under standard conditions." },
      { question: "What is the hidden height?", answer: "Hidden height is the portion of a target hidden behind the horizon. It depends on both the observer's eye height and the target's distance. This calculator shows the total curvature drop from a tangent plane." },
      { question: "Does this prove the Earth is round?", answer: "Yes. Curvature drop matches spherical geometry predictions. Over long distances, the lower portions of ships and buildings are hidden below the horizon, which would be impossible on a flat plane." }
    ],
    seoMeta: { title: "Flat vs Round Earth Curvature Calculator", description: "Calculate Earth's geometric curvature drop over a distance.", keywords: "Earth curvature, flat earth, curvature drop, horizon distance, refraction" }
  },
  {
    id: "hair-diffraction-calculator", name: "Hair Diffraction Calculator",
    description: "Estimate the diameter of a human hair using laser pointer diffraction.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "d = \\frac{\\lambda \\cdot L}{y}",
    inputs: [
      { id: "lambda_nm", label: "Laser Wavelength (nm)", type: "number", defaultValue: 650, helpText: "Red: ~650 nm, Green: ~532 nm, Blue-Violet: ~405 nm" },
      { id: "dist_m", label: "Distance to Screen (m)", type: "number", defaultValue: 2.0 },
      { id: "fringe_width_mm", label: "Fringe Separation (mm)", type: "number", defaultValue: 15, helpText: "Distance between first-order dark fringes" }
    ],
    outputs: [
      { id: "hair_diameter_um", label: "Hair Diameter", formula: "(lambda_nm * 1e-9 * dist_m / (fringe_width_mm * 1e-3)) * 1e6", unit: "μm" }
    ],
    theory: "Babinet's principle states that the diffraction pattern from an obstacle (like a hair) is identical to that of an slit of the same size. By shining a laser at a hair and measuring the spacing between diffraction fringes on a wall, you can calculate the hair's thickness using d = λ·L/y.",
    faq: [
      { question: "What is Babinet's Principle?", answer: "It states that the diffraction patterns of complementary screens (e.g., an aperture vs. an opaque obstacle of identical shape) are identical, except for the central spot." },
      { question: "What is the typical diameter of a human hair?", answer: "Human hair diameter ranges from 17 μm (very fine) to 180 μm (very coarse), averaging around 60–100 μm." },
      { question: "Why do we measure the first dark fringes?", answer: "The formula assumes the small-angle approximation for destructive interference: d·sin(θ) = m·λ. For m = 1, sin(θ) ≈ y/L, leading to d = λ·L/y." }
    ],
    seoMeta: { title: "Hair Diffraction Calculator — Laser Lab", description: "Calculate human hair diameter using laser diffraction physics.", keywords: "laser diffraction, hair diameter, Babinet's principle, physics lab, wavelength" }
  },
  {
    id: "immersed-weight-calculator", name: "Immersed Weight Calculator",
    description: "Calculate the apparent weight of an object when submerged in a fluid.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "W_{\\text{immersed}} = W_{\\text{air}} - F_b",
    inputs: [
      { id: "weight_air_n", label: "Weight in Air (N)", type: "number", defaultValue: 50 },
      { id: "V_disp_m3", label: "Object Volume (m³)", type: "number", defaultValue: 0.002 },
      { id: "rho_fluid", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1000, helpText: "Water: 1000, Saltwater: 1025, Oil ≈ 850" }
    ],
    outputs: [
      { id: "buoyancy_n", label: "Buoyant Force", formula: "rho_fluid * V_disp_m3 * 9.80665", unit: "N" },
      { id: "weight_immersed_n", label: "Immersed Weight", formula: "weight_air_n - (rho_fluid * V_disp_m3 * 9.80665)", unit: "N" }
    ],
    theory: "When an object is immersed in a fluid, gravity pulls it down while the buoyant force pushes it upward. The apparent weight of the object is its true weight minus the buoyant force. If the buoyant force exceeds the true weight, the apparent weight becomes negative, meaning the object floats.",
    faq: [
      { question: "Why do things feel lighter in water?", answer: "Because of the buoyant force. The fluid exerts upward pressure on the bottom of the object that is greater than the downward pressure on its top, helping support its weight." },
      { question: "How does scuba diving control this?", answer: "Divers use a Buoyancy Compensator (BC) vest. By inflating or deflating the bladder, they change their displaced volume, adjusting their buoyant force to achieve neutral buoyancy." },
      { question: "Can the apparent weight be zero?", answer: "Yes, when an object is neutrally buoyant (its average density matches the fluid density). It will hover in the fluid without sinking or floating." }
    ],
    seoMeta: { title: "Immersed Weight Calculator — Archimedes", description: "Calculate apparent weight of objects submerged in water or fluids.", keywords: "apparent weight, buoyancy, Archimedes principle, subversion, density" }
  },
  {
    id: "projectile-motion-experiment-calculator", name: "Projectile Motion Experiment Calculator",
    description: "Model simple projectile launches for lab experiments and physics classes.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "R = \\frac{v_0^2 \\sin(2\\theta)}{g}, \\quad H = \\frac{v_0^2 \\sin^2\\theta}{2g}",
    inputs: [
      { id: "v0", label: "Launch Velocity (m/s)", type: "number", defaultValue: 10 },
      { id: "angle_deg", label: "Launch Angle (°)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "max_range", label: "Horizontal Range", formula: "(v0^2) * sin(2 * angle_deg * pi / 180) / 9.80665", unit: "m" },
      { id: "max_height", label: "Maximum Height", formula: "(v0^2) * (sin(angle_deg * pi / 180)^2) / (2 * 9.80665)", unit: "m" },
      { id: "tof", label: "Time of Flight", formula: "2 * v0 * sin(angle_deg * pi / 180) / 9.80665", unit: "s" }
    ],
    theory: "Ignoring air resistance, a projectile's path is a parabola. The range is maximized at a launch angle of 45° on flat ground. Launch velocity has a quadratic effect on both range and maximum height.",
    faq: [
      { question: "Why is 45° the optimal angle?", answer: "The range formula includes sin(2θ). The sine function peaks at 90°, which occurs when 2θ = 90°, or θ = 45°. Air resistance shifts the optimal angle slightly lower (~35-40°)." },
      { question: "Does mass affect projectile range?", answer: "In a vacuum, no. All objects fall with the same acceleration (g), so mass has no effect. In the real world, heavier objects of the same size carry more momentum and are less slowed by air drag." },
      { question: "What is time of flight?", answer: "The total duration of the flight from launch to impact on flat ground: t = 2·v₀·sin(θ)/g." }
    ],
    seoMeta: { title: "Projectile Motion Experiment Calculator", description: "Calculate range, height, and flight time of projectiles.", keywords: "projectile motion, physics lab, launch angle, trajectory range" }
  },
  {
    id: "smartphone-projector-calculator", name: "Smartphone Projector Calculator",
    description: "Determine lens distance and magnification for building a DIY smartphone projector.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "\\frac{1}{f} = \\frac{1}{d_{\\text{phone}}} + \\frac{1}{d_{\\text{wall}}}",
    inputs: [
      { id: "f_lens_cm", label: "Lens Focal Length (cm)", type: "number", defaultValue: 10, helpText: "Magnifying glass lens focal length" },
      { id: "dist_wall_cm", label: "Distance to Wall (cm)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "dist_phone_cm", label: "Phone Distance from Lens", formula: "1 / (1 / f_lens_cm - 1 / dist_wall_cm)", unit: "cm" },
      { id: "magnification", label: "Image Magnification", formula: "dist_wall_cm / (1 / (1 / f_lens_cm - 1 / dist_wall_cm))", unit: "x" }
    ],
    theory: "A simple DIY projector uses a single convex lens. To project a sharp image on the wall, the lens formula must be satisfied. The phone must be placed slightly further than the focal length of the lens (d_phone > f). The resulting projected image will be inverted (upside down), requiring the phone display orientation to be locked upside down.",
    faq: [
      { question: "Why is the projected image upside down?", answer: "A single convex lens forming a real image on a screen always inverts the image. You must mount the phone upside down inside the projector box to see a right-side-up image on the wall." },
      { question: "How do I find my lens focal length?", answer: "Focus sunlight or a distant light onto a sheet of paper. The distance between the lens and the sharpest point of light on the paper is the focal length." },
      { question: "How do I increase the image size?", answer: "Move the projector further from the wall (increase d_wall). You will need to move the phone slightly closer to the lens (closer to the focal point) to refocus the image." }
    ],
    seoMeta: { title: "Smartphone Projector Calculator — Lens Design", description: "Calculate phone distance and magnification for DIY smartphone projectors.", keywords: "smartphone projector, lens formula, convex lens, magnification, DIY physics" }
  },
  {
    id: "sun-angle-calculator", name: "Sun Angle Calculator",
    description: "Calculate the solar elevation angle at solar noon.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "\\alpha = 90^\\circ - |\\phi - \\delta|",
    inputs: [
      { id: "lat_deg", label: "Latitude (°)", type: "number", defaultValue: 40, helpText: "North positive, South negative" },
      { id: "dec_deg", label: "Solar Declination (°)", type: "number", defaultValue: 23.44, helpText: "Summer Solstice: +23.44, Winter Solstice: -23.44, Equinox: 0" }
    ],
    outputs: [
      { id: "noon_elevation_deg", label: "Solar Elevation at Noon", formula: "90 - abs(lat_deg - dec_deg)", unit: "°" }
    ],
    theory: "The solar elevation angle is the altitude of the Sun above the horizon. At solar noon, the Sun reaches its highest point. This angle depends on the observer's latitude and the Earth's tilt relative to the Sun (solar declination), which varies throughout the year.",
    faq: [
      { question: "What is solar declination?", answer: "The angle between the Sun's rays and the Earth's equatorial plane. It varies from +23.44° (Northern Summer Solstice) to -23.44° (Northern Winter Solstice) due to Earth's axial tilt." },
      { question: "Why is solar noon not exactly 12:00?", answer: "Solar noon is when the Sun is at its highest meridian. It deviates from clock time due to time zones, daylight saving time, and Earth's elliptical orbit (modeled by the Equation of Time)." },
      { question: "How is this used in solar panel design?", answer: "Solar panels are tilted at an angle close to the local latitude to maximize year-round solar energy capture. Adjusting the tilt seasonally improves performance." }
    ],
    seoMeta: { title: "Sun Angle Calculator — Solar Noon Elevation", description: "Calculate the Sun's noon elevation angle based on latitude and declination.", keywords: "sun angle, solar elevation, solar declination, solar noon, latitude tilt" }
  },
  {
    id: "sunrise-sunset-calculator", name: "Sunrise Sunset Calculator",
    description: "Calculate day length and approximate solar hour angles.",
    category: "physics", subcategory: "everyday-physics",
    scientificFormula: "\\cos \\omega_0 = -\\tan \\phi \\tan \\delta",
    inputs: [
      { id: "lat_deg", label: "Latitude (°)", type: "number", defaultValue: 40 },
      { id: "dec_deg", label: "Solar Declination (°)", type: "number", defaultValue: 23.44 }
    ],
    outputs: [
      { id: "hour_angle_deg", label: "Sunset Hour Angle", formula: "acos(-tan(lat_deg * pi / 180) * tan(dec_deg * pi / 180)) * 180 / pi", unit: "°" },
      { id: "day_length_hr", label: "Day Length", formula: "2 * (acos(-tan(lat_deg * pi / 180) * tan(dec_deg * pi / 180)) * 180 / pi) / 15", unit: "hours" }
    ],
    theory: "The sunrise/sunset hour angle (ω₀) represents the angular distance from solar noon at which the Sun's center crosses the horizon. The day length equals 2·ω₀/15 because the Earth rotates at 15° per hour. This formula assumes a geometric horizon without refraction.",
    faq: [
      { question: "Why does atmospheric refraction affect sunrise?", answer: "Refraction bends sunlight around the Earth's curvature. Because of this, we see the Sun rise about 2–3 minutes before it geometrically crosses the horizon, adding a few minutes to the day." },
      { question: "What happens at latitudes above 66.5°?", answer: "If |-tan(φ)·tan(δ)| > 1, the Sun either never rises (polar night) or never sets (midnight sun). The mathematical acos function returns undefined/error, representing these extreme polar conditions." },
      { question: "What is solar declination today?", answer: "Equinoxes (March/Sept): 0°. June Solstice: +23.44°. December Solstice: -23.44°. It changes daily, following a sinusoidal curve." }
    ],
    seoMeta: { title: "Sunrise Sunset & Day Length Calculator", description: "Calculate solar hour angle and day length from latitude and declination.", keywords: "day length, hour angle, sunrise sunset, solar declination, polar night" }
  },

  // ═══════════════════════════════════════════════════════════
  // OTHER PHYSICS 🔬
  // ═══════════════════════════════════════════════════════════
  {
    id: "attenuation-calculator", name: "Attenuation Calculator",
    description: "Calculate radiation, light, or sound attenuation using the Beer-Lambert law.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "I = I_0 \\cdot e^{-\\mu x}",
    inputs: [
      { id: "I0", label: "Initial Intensity (I₀)", type: "number", defaultValue: 100 },
      { id: "mu_coeff", label: "Attenuation Coefficient (m⁻¹)", type: "number", defaultValue: 0.1, helpText: "Medium absorption rate" },
      { id: "depth_m", label: "Depth/Thickness (m)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "I_final", label: "Final Intensity (I)", formula: "I0 * exp(-mu_coeff * depth_m)", unit: "" },
      { id: "atten_pct", label: "Percent Attenuated", formula: "(1 - exp(-mu_coeff * depth_m)) * 100", unit: "%" }
    ],
    theory: "Attenuation is the gradual loss of flux intensity through a medium. For radiation or light, this is governed by the Beer-Lambert law, which states that intensity decays exponentially with distance: I = I₀·exp(-μx). For sound, it is often expressed in decibels per meter.",
    faq: [
      { question: "What is the attenuation coefficient?", answer: "A parameter (μ) that characterizes how easily a material is penetrated by a beam of light, sound, or particles. Higher μ means the material absorbs or scatters the beam quickly." },
      { question: "What is half-value layer (HVL)?", answer: "The thickness of material required to reduce the intensity of radiation to half of its original value: HVL = ln(2) / μ ≈ 0.693 / μ." },
      { question: "Why is water blue?", answer: "Water has a lower attenuation coefficient for blue light than for red light. Red light is absorbed within a few meters, while blue light penetrates deeper, scattering back to our eyes." }
    ],
    seoMeta: { title: "Attenuation Calculator — Beer-Lambert Law", description: "Calculate exponential intensity loss of light, sound, or radiation.", keywords: "attenuation, Beer-Lambert, absorption coefficient, half-value layer" }
  },
  {
    id: "blast-radius-calculator", name: "Blast Radius Calculator",
    description: "Estimate the blast radius of an explosion based on yield.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "R \\approx C \\cdot Y^{1/3}",
    inputs: [
      { id: "yield_kt", label: "Explosive Yield (kilotons of TNT)", type: "number", defaultValue: 15, helpText: "Hiroshima: 15 kt, modern warheads: 100-800 kt" }
    ],
    outputs: [
      { id: "radius_5psi_km", label: "Heavy Blast Damage (5 psi) Radius", formula: "1.03 * (yield_kt)^(1/3)", unit: "km" },
      { id: "radius_1psi_km", label: "Light Blast Damage (1 psi) Radius", formula: "3.2 * (yield_kt)^(1/3)", unit: "km" }
    ],
    theory: "Blast wave pressure scales with the cube root of the explosive yield (the scaling law). For airburst explosions, 5 psi overpressure causes heavy structural damage (collapsing residential buildings). The distance scales as R = C · Y^(1/3) where C depends on the target overpressure.",
    faq: [
      { question: "What is overpressure?", answer: "The pressure caused by a blast wave above normal atmospheric pressure. 5 psi overpressure corresponds to wind speeds of ~160 mph (260 km/h), sufficient to destroy houses." },
      { question: "Why does it scale with the cube root?", answer: "An explosion releases energy in a spherical volume. Since volume scales as radius cubed (V ∝ R³), the radius at which a specific energy density (pressure) is reached scales as the cube root of the energy (R ∝ E^(1/3))." },
      { question: "What was the Tsar Bomba yield?", answer: "The largest nuclear weapon ever detonated had a yield of 50 megatons (50,000 kt). Its 5 psi blast radius was approximately 38 km." }
    ],
    seoMeta: { title: "Blast Radius Calculator — Explosion Scale", description: "Calculate explosion blast radius based on TNT yield.", keywords: "blast radius, TNT equivalent, overpressure, nuclear yield, explosion physics" }
  },
  {
    id: "exoplanet-travel-planner-calculator", name: "Exoplanet Travel Planner Calculator",
    description: "Calculate relativistic travel times to exoplanets under constant acceleration.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "t_{\\text{ship}} = \\frac{c}{a} \\operatorname{acosh}\\left(\\frac{a d}{c^2} + 1\\right)",
    inputs: [
      { id: "dist_ly", label: "Distance (light-years)", type: "number", defaultValue: 4.24, helpText: "Proxima Centauri: 4.24 ly, Kepler-186f: 582 ly" },
      { id: "accel_g", label: "Acceleration (g)", type: "number", defaultValue: 1.0, helpText: "1.0 g provides comfortable Earth-like gravity" }
    ],
    outputs: [
      { id: "ship_time_yr", label: "Ship Time (crew's perspective)", formula: "(299792458 / (accel_g * 9.80665 * 31557600)) * acosh((accel_g * 9.80665 * dist_ly * 9.46073e15) / (299792458^2) + 1)", unit: "years" },
      { id: "earth_time_yr", label: "Earth Time (observer's perspective)", formula: "sqrt((dist_ly * 9.46073e15)^2 + 2 * (dist_ly * 9.46073e15) * (299792458^2) / (accel_g * 9.80665)) / 31557600", unit: "years" }
    ],
    theory: "For interstellar voyages, constant acceleration provides simulated gravity for the crew. At relativistic speeds, time dilation slows down the crew's aging. The formula calculates the elapsed ship time and Earth time, showing how time dilation makes journeys across hundreds of light-years possible within a human lifetime.",
    faq: [
      { question: "How does time dilation help the crew?", answer: "As the ship accelerates close to the speed of light, time slows down relative to Earth. A trip of 500 light-years takes 500+ years Earth time, but for the crew, it feels like only ~12 years at 1g acceleration!" },
      { question: "What is the fuel problem?", answer: "To maintain 1g acceleration, the ship must consume enormous amounts of energy. Even with perfect matter-antimatter engines, the required fuel mass would exceed the mass of the observable universe for long journeys." },
      { question: "What is Proxima Centauri ship time?", answer: "At 1.0g acceleration, accelerating halfway and decelerating halfway, it takes about 3.6 years for the crew to reach our nearest stellar neighbor." }
    ],
    seoMeta: { title: "Exoplanet Relativistic Travel Planner", description: "Calculate crew and Earth travel times to exoplanets under constant acceleration.", keywords: "relativistic travel, time dilation, constant acceleration, space flight, exoplanet" }
  },
  {
    id: "inverse-square-law-calculator", name: "Inverse Square Law Calculator",
    description: "Calculate intensity changes at different distances for light, sound, or gravity.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "I_2 = I_1 \\left(\\frac{d_1}{d_2}\\right)^2",
    inputs: [
      { id: "I1", label: "Initial Intensity (I₁)", type: "number", defaultValue: 100 },
      { id: "d1", label: "Initial Distance (d₁)", type: "number", defaultValue: 1 },
      { id: "d2", label: "Target Distance (d₂)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "I2", label: "Target Intensity (I₂)", formula: "I1 * (d1 / d2)^2", unit: "" }
    ],
    theory: "The inverse-square law states that a physical quantity (like radiation intensity) is inversely proportional to the square of the distance from the source. This occurs because energy propagates spherically, spreading over an area that scales as 4πr².",
    faq: [
      { question: "Why does it follow the square of distance?", answer: "When energy leaves a point source, it spreads out uniformly in all directions, forming an expanding sphere. The surface area of a sphere is 4πr². Since the same total energy must pass through this area, the energy density (intensity) must drop as 1/r²." },
      { question: "How does this affect photography?", answer: "Flash brightness drops rapidly with distance. Moving a subject from 2 meters to 4 meters away reduces flash illumination on the subject to one-quarter, requiring a wider aperture or longer exposure." },
      { question: "Does gravity follow this law?", answer: "Yes. Newton's law of universal gravitation state that the gravitational force between two masses drops as 1/r² as they move apart." }
    ],
    seoMeta: { title: "Inverse Square Law Calculator", description: "Calculate intensity drop over distance for light, gravity, or sound.", keywords: "inverse square law, intensity, radiation drop, distance decay" }
  },
  {
    id: "quantum-number-calculator", name: "Quantum Number Calculator",
    description: "Verify and analyze atomic electron quantum numbers and orbital degeneracy.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "0 \\le l < n, \\quad |m_l| \\le l",
    inputs: [
      { id: "n_num", label: "Principal Quantum Number (n)", type: "number", defaultValue: 3, helpText: "Positive integer: 1, 2, 3..." },
      { id: "l_num", label: "Orbital Quantum Number (l)", type: "number", defaultValue: 1, helpText: "Integer from 0 to n-1 (s=0, p=1, d=2, f=3)" },
      { id: "ml_num", label: "Magnetic Quantum Number (ml)", type: "number", defaultValue: 0, helpText: "Integer from -l to +l" }
    ],
    outputs: [
      { id: "is_valid", label: "Is State Allowed? (1=Yes, 0=No)", formula: "(n_num > 0) and (l_num >= 0) and (l_num < n_num) and (abs(ml_num) <= l_num) ? 1 : 0", unit: "" },
      { id: "shell_capacity", label: "Total Shell Capacity (Level n)", formula: "2 * n_num^2", unit: "electrons" },
      { id: "subshell_capacity", label: "Subshell Capacity (s/p/d/f)", formula: "2 * (2 * l_num + 1)", unit: "electrons" }
    ],
    theory: "Quantum numbers describe the unique quantum states of electrons in an atom. The principal quantum number n defines the shell (energy level). The azimuthal quantum number l defines the subshell (shape, s/p/d/f). The magnetic quantum number ml defines the spatial orientation of the orbital. Each state can hold up to two electrons of opposite spin.",
    faq: [
      { question: "What do s, p, d, f stand for?", answer: "Historically from spectral line descriptions: s = sharp (l=0), p = principal (l=1), d = diffuse (l=2), f = fundamental (l=3). Higher orbitals continue alphabetically: g, h, etc." },
      { question: "What is Pauli's Exclusion Principle?", answer: "It dictates that no two electrons in an atom can have the exact same four quantum numbers (n, l, ml, ms). This is why electron shells fill up sequentially, creating the periodic table." },
      { question: "Why is shell capacity 2n²?", answer: "For shell n, there are n subshells (l = 0 to n-1). Each subshell has 2l+1 orbitals. Summing (2l+1) from l=0 to n-1 gives n² orbitals. Since each orbital holds 2 electrons (spin +1/2 and -1/2), the total capacity is 2n²." }
    ],
    seoMeta: { title: "Quantum Number Calculator — Electron Configurations", description: "Validate electron quantum states and orbital capacities.", keywords: "quantum numbers, orbital degeneracy, Pauli exclusion, electron shells, subshells" }
  },
  {
    id: "reaction-time-calculator", name: "Reaction Time Calculator",
    description: "Calculate your reaction time from the ruler drop experiment.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "t = \\sqrt{\\frac{2d}{g}}",
    inputs: [
      { id: "dist_cm", label: "Drop Distance (cm)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "reaction_time_s", label: "Reaction Time", formula: "sqrt((2 * dist_cm / 100) / 9.80665)", unit: "s" },
      { id: "reaction_time_ms", label: "Reaction Time", formula: "sqrt((2 * dist_cm / 100) / 9.80665) * 1000", unit: "ms" }
    ],
    theory: "In the gravity-based ruler drop test, a partner holds a ruler and drops it without warning. You catch it as quickly as possible. The distance the ruler fell before being caught relates directly to your reaction time via the kinematic equation for free fall: d = 1/2·g·t².",
    faq: [
      { question: "What is a normal reaction time?", answer: "Typical visual reaction time for humans is 200–250 milliseconds (0.2–0.25 seconds). Auditory reactions are slightly faster (~170 ms). Elite athletes and gamers can reach 150 ms." },
      { question: "How can I improve my score?", answer: "Reaction time can be trained through practice, proper sleep, and hydration. However, it is also constrained by neural transmission speeds from the eye to the brain and then to the muscles." },
      { question: "What factors slow reaction time?", answer: "Fatigue, distractions, alcohol, aging, and cognitive load (making decisions) all significantly slow reaction times." }
    ],
    seoMeta: { title: "Reaction Time Calculator — Ruler Drop Test", description: "Calculate reaction time in milliseconds from a ruler drop test.", keywords: "reaction time, ruler drop test, kinematic free fall, reflexes, human performance" }
  },
  {
    id: "surface-tension-calculator", name: "Surface Tension Calculator",
    description: "Calculate surface tension of a liquid using the capillary rise method.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "\\gamma = \\frac{\\rho \\cdot g \\cdot r \\cdot h}{2 \\cos\\theta}",
    inputs: [
      { id: "rho_liquid", label: "Liquid Density (kg/m³)", type: "number", defaultValue: 1000, helpText: "Water: 1000" },
      { id: "radius_mm", label: "Capillary Radius (mm)", type: "number", defaultValue: 0.5 },
      { id: "height_mm", label: "Rise Height (mm)", type: "number", defaultValue: 30 },
      { id: "theta_deg", label: "Contact Angle (°)", type: "number", defaultValue: 0, helpText: "Water on clean glass ≈ 0°" }
    ],
    outputs: [
      { id: "tension_n_m", label: "Surface Tension", formula: "(rho_liquid * 9.80665 * (radius_mm / 1000) * (height_mm / 1000)) / (2 * cos(theta_deg * pi / 180))", unit: "N/m" },
      { id: "tension_mN_m", label: "Surface Tension", formula: "((rho_liquid * 9.80665 * (radius_mm / 1000) * (height_mm / 1000)) / (2 * cos(theta_deg * pi / 180))) * 1000", unit: "mN/m" }
    ],
    theory: "Capillary action occurs due to adhesion and cohesion. Surface tension pulls the liquid up a narrow tube until the weight of the liquid column balances the upward tensile force. The relationship is given by Jurin's Law: h = 2γ·cos(θ) / (ρ·g·r).",
    faq: [
      { question: "Why does water climb glass tubes?", answer: "Glass is hydrophilic. Adhesive forces between water and glass are stronger than cohesive forces within the water, causing water to wet the glass and pull upward." },
      { question: "What is standard surface tension of water?", answer: "At 20°C, the surface tension of pure water is approximately 0.0728 N/m (72.8 mN/m), which is exceptionally high for a non-metallic liquid." },
      { question: "How do surfactants affect this?", answer: "Surfactants (like soap) break cohesive hydrogen bonds between water molecules, significantly lowering the surface tension and reducing capillary rise." }
    ],
    seoMeta: { title: "Surface Tension Calculator — Capillary Rise", description: "Calculate liquid surface tension from capillary rise height and tube radius.", keywords: "surface tension, capillary action, Jurin's Law, fluid mechanics, contact angle" }
  },
  {
    id: "warp-speed-calculator", name: "Warp Speed Calculator",
    description: "Convert Star Trek warp factors into multiples of the speed of light.",
    category: "physics", subcategory: "other-physics",
    scientificFormula: "v = w^3 \\cdot c \\quad \\text{(TOS)}, \\quad v = w^{10/3} \\cdot c \\quad \\text{(TNG)}",
    inputs: [
      { id: "warp_factor", label: "Warp Factor", type: "number", defaultValue: 5, helpText: "TOS scales 1-10+, TNG scales 1-9.99..." }
    ],
    outputs: [
      { id: "vel_tos", label: "Velocity (TOS Scale)", formula: "warp_factor^3", unit: "c" },
      { id: "vel_tng", label: "Velocity (TNG Scale)", formula: "warp_factor^(10/3)", unit: "c" },
      { id: "speed_km_s", label: "Speed (TNG Scale)", formula: "(warp_factor^(10/3)) * 299792.458", unit: "km/s" }
    ],
    theory: "Warp factor is the speed scale in Star Trek. In the Original Series (TOS), speed scales as the cube: v = w³·c. In the Next Generation (TNG), the formula was updated to v = w^(10/3)·c for warp factors below 9. As the warp factor approaches 10, the speed reaches infinity, requiring infinite power.",
    faq: [
      { question: "What is Warp 10?", answer: "In TNG lore, Warp 10 is the absolute speed limit — infinite velocity. Travel at Warp 10 means occupying every point in the universe simultaneously, which is theoretically impossible." },
      { question: "How fast is Warp 9?", answer: "On the TNG scale: 9^(10/3) ≈ 1,516 times the speed of light. At this speed, you can cross one light-year in about 6 hours." },
      { question: "Is warp drive physically possible?", answer: "The Alcubierre warp drive is a general relativity solution where space in front of the ship contracts and space behind expands. It allows faster-than-light travel relative to external observers without violating local relativity, but it requires 'negative energy density.'" }
    ],
    seoMeta: { title: "Warp Speed Calculator — Star Trek Physics", description: "Convert Star Trek warp factors to speed of light multiples.", keywords: "warp speed, warp factor, Star Trek science, Alcubierre drive, TNG scale" }
  }
];
