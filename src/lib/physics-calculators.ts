import { CalculatorConfig } from "./calculator-types";

export const PHYSICS_CALCULATORS: CalculatorConfig[] = [
  {
    id: "arrow-speed-calculator",
    name: "Arrow Speed Calculator",
    description: "Estimate arrow speed in feet per second (fps) based on draw weight, draw length, arrow weight, and IBO speed.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v = \\text{IBO} - \\frac{W_{arrow} - 5W_{draw}}{3} + (L_{draw} - 30) \\times 10",
    inputs: [
      { id: "ibo_speed", label: "IBO Speed (fps)", type: "number", defaultValue: 320 },
      { id: "draw_weight", label: "Draw Weight (lbs)", type: "number", defaultValue: 70 },
      { id: "draw_length", label: "Draw Length (inches)", type: "number", defaultValue: 29 },
      { id: "arrow_weight", label: "Arrow Weight (grains)", type: "number", defaultValue: 400 }
    ],
    outputs: [
      { id: "speed", label: "Estimated Arrow Speed", formula: "ibo_speed - (arrow_weight - 5 * draw_weight) / 3 + (draw_length - 30) * 10", unit: "fps" }
    ],
    theory: "Arrow speed calculation is based on the industry standard IBO test parameters (70 lb draw weight, 30 inch draw length, and 350 grain arrow). Deviating from these standard parameters incurs velocity penalties or rewards.",
    seoMeta: { title: "Arrow Speed Calculator", description: "Estimate arrow speed based on bow and arrow configuration.", keywords: "arrow speed, archery, ibo speed, bow speed" }
  },
  {
    id: "ballistic-coefficient-calculator",
    name: "Ballistic Coefficient Calculator",
    description: "Calculate the ballistic coefficient (BC) of a bullet based on its mass, diameter, and form factor.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "BC = \\frac{m}{d^2 \\cdot i}",
    inputs: [
      { id: "mass", label: "Bullet Mass (lbs)", type: "number", defaultValue: 0.02 },
      { id: "diameter", label: "Bullet Diameter (inches)", type: "number", defaultValue: 0.3 },
      { id: "form_factor", label: "Form Factor (i)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "bc", label: "Ballistic Coefficient", formula: "mass / (diameter^2 * form_factor)", unit: "lb/in²" }
    ],
    theory: "The ballistic coefficient measures a bullet's ability to overcome air resistance in flight. It is directly proportional to mass and inversely proportional to the square of diameter and the shape form factor.",
    seoMeta: { title: "Ballistic Coefficient Calculator", description: "Calculate bullet ballistic coefficient.", keywords: "ballistic coefficient, bullet, trajectory, form factor" }
  },
  {
    id: "car-jump-distance-calculator",
    name: "Car Jump Distance Calculator",
    description: "Determine the flight distance of a car jumping from a ramp of a given angle and speed.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "d = \\frac{v^2 \\sin(2\\theta)}{g}",
    inputs: [
      { id: "velocity", label: "Ramp Exit Velocity (m/s)", type: "number", defaultValue: 15 },
      { id: "angle", label: "Ramp Launch Angle (degrees)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "distance", label: "Jump Distance", formula: "(velocity^2 * sin(2 * angle * pi / 180)) / 9.80665", unit: "m" }
    ],
    theory: "Assuming ideal projectile motion without air resistance, the horizontal distance traveled by a jumping car depends on exit velocity, launch ramp angle, and the local acceleration due to gravity.",
    seoMeta: { title: "Car Jump Distance Calculator", description: "Calculate the jump distance of a vehicle.", keywords: "car jump, ramp jump, projectile distance" }
  },
  {
    id: "conservation-of-momentum-calculator",
    name: "Conservation of Momentum Calculator",
    description: "Solve momentum equations for completely inelastic collisions between two objects.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "m_1v_1 + m_2v_2 = (m_1 + m_2)v_f",
    inputs: [
      { id: "m1", label: "Object 1 Mass (kg)", type: "number", defaultValue: 5 },
      { id: "v1", label: "Object 1 Velocity (m/s)", type: "number", defaultValue: 10 },
      { id: "m2", label: "Object 2 Mass (kg)", type: "number", defaultValue: 3 },
      { id: "v2", label: "Object 2 Velocity (m/s)", type: "number", defaultValue: -2 }
    ],
    outputs: [
      { id: "vf", label: "Final Combined Velocity", formula: "(m1 * v1 + m2 * v2) / (m1 + m2)", unit: "m/s" }
    ],
    theory: "In a closed, isolated system, the total linear momentum is conserved. For completely inelastic collisions, the two bodies stick together and move with a unified final velocity.",
    seoMeta: { title: "Conservation of Momentum Calculator", description: "Solve conservation of momentum inelastic collision physics.", keywords: "momentum conservation, collision, physics solver" }
  },
  {
    id: "displacement-calculator",
    name: "Displacement Calculator",
    description: "Calculate displacement over time under constant acceleration.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "d = v_0t + \\frac{1}{2}at^2",
    inputs: [
      { id: "v0", label: "Initial Velocity (m/s)", type: "number", defaultValue: 0 },
      { id: "t", label: "Time Interval (seconds)", type: "number", defaultValue: 5 },
      { id: "a", label: "Acceleration (m/s²)", type: "number", defaultValue: 9.8 }
    ],
    outputs: [
      { id: "displacement", label: "Total Displacement", formula: "v0 * t + 0.5 * a * t^2", unit: "m" }
    ],
    theory: "Displacement measures the change in position of an object. When moving under constant acceleration, the distance traveled accumulates quadratically with time.",
    seoMeta: { title: "Displacement Calculator", description: "Calculate kinematic displacement under constant acceleration.", keywords: "displacement, kinematic, acceleration" }
  },
  {
    id: "free-fall-calculator",
    name: "Free Fall Calculator",
    description: "Calculate speed and fall distance of a falling object under gravity without air drag.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v = gt, \\quad d = \\frac{1}{2}gt^2",
    inputs: [
      { id: "t", label: "Time of Fall (seconds)", type: "number", defaultValue: 3 },
      { id: "g", label: "Gravity Acceleration (m/s²)", type: "number", defaultValue: 9.80665 }
    ],
    outputs: [
      { id: "velocity", label: "Impact Velocity", formula: "g * t", unit: "m/s" },
      { id: "distance", label: "Falling Distance", formula: "0.5 * g * t^2", unit: "m" }
    ],
    theory: "Free fall describes the motion of a body falling solely under the influence of gravitational attraction, neglecting any atmosphere or initial push.",
    seoMeta: { title: "Free Fall Calculator", description: "Solve equations for free fall under gravity.", keywords: "free fall, gravity velocity, fall distance" }
  },
  {
    id: "free-fall-with-air-resistance-calculator",
    name: "Free Fall with Air Resistance Calculator",
    description: "Determine falling velocity and distance including terminal velocity drag bounds.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v(t) = v_t \\tanh\\left(\\frac{gt}{v_t}\\right)",
    inputs: [
      { id: "t", label: "Time of Fall (seconds)", type: "number", defaultValue: 3 },
      { id: "terminal_vel", label: "Terminal Velocity (m/s)", type: "number", defaultValue: 50 },
      { id: "g", label: "Gravity Acceleration (m/s²)", type: "number", defaultValue: 9.8 }
    ],
    outputs: [
      { id: "velocity", label: "Falling Velocity", formula: "terminal_vel * tanh(g * t / terminal_vel)", unit: "m/s" },
      { id: "distance", label: "Falling Distance", formula: "(terminal_vel^2 / g) * log(cosh(g * t / terminal_vel))", unit: "m" }
    ],
    theory: "When factoring in atmospheric air resistance, a falling object ceases to accelerate quadratically and instead asymptotically approaches a maximum speed known as terminal velocity.",
    seoMeta: { title: "Free Fall with Air Resistance Calculator", description: "Calculate free fall with drag.", keywords: "free fall drag, terminal velocity, air resistance" }
  },
  {
    id: "friction-calculator",
    name: "Friction Calculator",
    description: "Calculate dry friction force between two surfaces.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "F = \\mu N",
    inputs: [
      { id: "mu", label: "Coefficient of Friction (μ)", type: "number", defaultValue: 0.3 },
      { id: "n", label: "Normal Force (N)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "f", label: "Friction Force", formula: "mu * n", unit: "N" }
    ],
    theory: "Friction is the force resisting the relative motion of solid surfaces. The maximum static or active kinetic friction is proportional to the normal contact force.",
    seoMeta: { title: "Friction Calculator", description: "Calculate sliding or static friction.", keywords: "friction force, normal force, coefficient of friction" }
  },
  {
    id: "ground-speed-calculator",
    name: "Ground Speed Calculator",
    description: "Determine ground speed of an aircraft based on airspeed, wind speed, and relative wind direction.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v_g = \\sqrt{(v_a + v_w \\cos\\theta)^2 + (v_w \\sin\\theta)^2}",
    inputs: [
      { id: "airspeed", label: "True Airspeed (knots)", type: "number", defaultValue: 200 },
      { id: "wind_speed", label: "Wind Speed (knots)", type: "number", defaultValue: 30 },
      { id: "wind_angle", label: "Relative Wind Angle (degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "ground_speed", label: "Resulting Ground Speed", formula: "sqrt((airspeed + wind_speed * cos(wind_angle * pi / 180))^2 + (wind_speed * sin(wind_angle * pi / 180))^2)", unit: "knots" }
    ],
    theory: "Ground speed represents the speed of an aircraft relative to the surface of the Earth. It results from vector addition of airspeed and the ambient wind vector.",
    seoMeta: { title: "Ground Speed Calculator", description: "Calculate aircraft ground speed under wind vectors.", keywords: "ground speed, wind correction, airspeed" }
  },
  {
    id: "horizontal-projectile-motion-calculator",
    name: "Horizontal Projectile Motion Calculator",
    description: "Calculate parameters of a projectile launched horizontally from a given height.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "t = \\sqrt{\\frac{2h}{g}}, \\quad R = v_x t",
    inputs: [
      { id: "h", label: "Launch Height (m)", type: "number", defaultValue: 10 },
      { id: "vx", label: "Horizontal Launch Velocity (m/s)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "time", label: "Time of Flight", formula: "sqrt(2 * h / 9.80665)", unit: "s" },
      { id: "range", label: "Horizontal Range", formula: "vx * sqrt(2 * h / 9.80665)", unit: "m" }
    ],
    theory: "A horizontally launched projectile possesses no initial vertical velocity. Its time of flight depends exclusively on height, whereas horizontal distance depends on initial horizontal velocity.",
    seoMeta: { title: "Horizontal Projectile Motion Calculator", description: "Solve horizontal launch projectile motion.", keywords: "horizontal projectile, launch height, horizontal range" }
  },
  {
    id: "impulse-and-momentum-calculator",
    name: "Impulse and Momentum Calculator",
    description: "Evaluate active impulse force vectors and resulting changes in momentum/velocity.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "J = F \\Delta t = m \\Delta v",
    inputs: [
      { id: "f", label: "Average Force (N)", type: "number", defaultValue: 20 },
      { id: "dt", label: "Time Interval (seconds)", type: "number", defaultValue: 0.5 },
      { id: "m", label: "Mass of Object (kg)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "impulse", label: "Resulting Impulse", formula: "f * dt", unit: "N·s" },
      { id: "dv", label: "Velocity Change (Δv)", formula: "(f * dt) / m", unit: "m/s" }
    ],
    theory: "Impulse represents the integral of force over time. The impulse-momentum theorem states that the impulse applied to an object equals its change in linear momentum.",
    seoMeta: { title: "Impulse and Momentum Calculator", description: "Solve impulse momentum calculations.", keywords: "impulse, momentum change, impact force" }
  },
  {
    id: "inclined-plane-calculator",
    name: "Inclined Plane Calculator",
    description: "Analyze gravitational force components acting on an object placed on a smooth inclined plane.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "F_\\parallel = mg \\sin\\theta, \\quad F_\\perp = mg \\cos\\theta",
    inputs: [
      { id: "mass", label: "Object Mass (kg)", type: "number", defaultValue: 10 },
      { id: "angle", label: "Plane Incline Angle (degrees)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "fg_parallel", label: "Parallel Gravity Force", formula: "mass * 9.80665 * sin(angle * pi / 180)", unit: "N" },
      { id: "fg_perpendicular", label: "Perpendicular (Normal) Force", formula: "mass * 9.80665 * cos(angle * pi / 180)", unit: "N" }
    ],
    theory: "On an inclined plane, gravity is broken into two components: one acting parallel to the surface (driving sliding motion) and one acting perpendicular (defining normal force).",
    seoMeta: { title: "Inclined Plane Calculator", description: "Calculate gravity forces on inclined planes.", keywords: "inclined plane, gravity components, normal force" }
  },
  {
    id: "magnitude-of-acceleration-calculator",
    name: "Magnitude of Acceleration Calculator",
    description: "Determine acceleration rate based on initial velocity, final velocity, and duration.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "a = \\frac{v_f - v_i}{t}",
    inputs: [
      { id: "vi", label: "Initial Velocity (m/s)", type: "number", defaultValue: 0 },
      { id: "vf", label: "Final Velocity (m/s)", type: "number", defaultValue: 20 },
      { id: "t", label: "Time Interval (seconds)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "acc", label: "Average Acceleration", formula: "(vf - vi) / t", unit: "m/s²" }
    ],
    theory: "Acceleration measures the rate of change of velocity per unit time. Constant linear acceleration corresponds to the slope of a velocity-time graph.",
    seoMeta: { title: "Magnitude of Acceleration Calculator", description: "Calculate average acceleration rate.", keywords: "acceleration rate, velocity change, linear acceleration" }
  },
  {
    id: "maximum-height-calculator-projectile-motion",
    name: "Maximum Height Calculator – Projectile Motion",
    description: "Determine the peak vertical peak height reached by a projectile.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "H = \\frac{v_0^2 \\sin^2\\theta}{2g}",
    inputs: [
      { id: "v0", label: "Launch Velocity (m/s)", type: "number", defaultValue: 20 },
      { id: "angle", label: "Launch Angle (degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "max_height", label: "Maximum Peak Height", formula: "(v0^2 * sin(angle * pi / 180)^2) / (2 * 9.80665)", unit: "m" }
    ],
    theory: "The peak trajectory height occurs when the vertical component of velocity decreases to zero. Peak height depends on launch speed and launch angle.",
    seoMeta: { title: "Maximum Height Calculator", description: "Determine peak height of a projectile.", keywords: "max height, projectile motion, peak height" }
  },
  {
    id: "moa-calculator-minute-of-angle",
    name: "MOA Calculator — Minute of Angle",
    description: "Calculate Minute of Angle adjustments for firearm scope sighting at any distance.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "\\text{MOA} = \\frac{S_{group}}{D_{yards} \\times 0.01047}",
    inputs: [
      { id: "distance", label: "Target Distance (yards)", type: "number", defaultValue: 100 },
      { id: "group_size", label: "Group Size / Deviation (inches)", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "moa", label: "Scope Adjustment (MOA)", formula: "group_size / (distance * 0.01047)", unit: "MOA" }
    ],
    theory: "Minute of Angle (MOA) is an angular measurement corresponding to 1/60th of a degree. It equates to 1.047 inches per 100 yards, serving as standard scopes scaling.",
    seoMeta: { title: "MOA Calculator", description: "Calculate rifle MOA scope adjustments.", keywords: "moa, minute of angle, scope sight, target distance" }
  },
  {
    id: "momentum-calculator",
    name: "Momentum Calculator",
    description: "Determine the linear momentum of a moving object.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "p = mv",
    inputs: [
      { id: "mass", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "velocity", label: "Velocity (m/s)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "momentum", label: "Linear Momentum", formula: "mass * velocity", unit: "kg·m/s" }
    ],
    theory: "Linear momentum is a vector quantity representing the product of a body's mass and its velocity. It represents the difficulty of stopping a moving object.",
    seoMeta: { title: "Momentum Calculator", description: "Calculate linear momentum of a mass.", keywords: "momentum, linear momentum, velocity mass" }
  },
  {
    id: "muzzle-velocity-calculator",
    name: "Muzzle Velocity Calculator",
    description: "Calculate bullet muzzle velocity based on bullet weight and kinetic muzzle energy.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v = \\sqrt{\\frac{2E}{m}}",
    inputs: [
      { id: "weight", label: "Bullet Weight (grains)", type: "number", defaultValue: 150 },
      { id: "energy", label: "Muzzle Energy (ft-lbs)", type: "number", defaultValue: 2500 }
    ],
    outputs: [
      { id: "velocity", label: "Estimated Muzzle Velocity", formula: "sqrt(energy * 450240 / weight)", unit: "fps" }
    ],
    theory: "Muzzle velocity is the speed at which a projectile exits the firearm's muzzle. Using the kinetic energy equation and units adjustments, bullet velocity is determined from energy and grain mass.",
    seoMeta: { title: "Muzzle Velocity Calculator", description: "Calculate bullet muzzle velocity.", keywords: "muzzle velocity, bullet energy, bullet speed" }
  },
  {
    id: "polar-moment-of-inertia-calculator",
    name: "Polar Moment of Inertia Calculator",
    description: "Calculate polar moment of inertia for circular cross-sectional shafts.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "J = \\frac{\\pi d^4}{32}",
    inputs: [
      { id: "d", label: "Shaft Diameter (inches)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "j", label: "Polar Moment of Inertia", formula: "pi * d^4 / 32", unit: "in⁴" }
    ],
    theory: "The polar moment of inertia characterizes a shaft's resistance to torsional deformation. For a solid circular cross-section, it depends exponentially on diameter.",
    seoMeta: { title: "Polar Moment of Inertia Calculator", description: "Calculate torsional polar moment of inertia.", keywords: "polar moment, inertia, torsion shaft" }
  },
  {
    id: "projectile-motion-calculator",
    name: "Projectile Motion Calculator",
    description: "Solve a complete range of projectile motion parameters for an angled launch.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "R = \\frac{v_0^2\\sin(2\\theta)}{g}, \\quad H = \\frac{v_0^2\\sin^2\\theta}{2g}",
    inputs: [
      { id: "v0", label: "Launch Speed (m/s)", type: "number", defaultValue: 20 },
      { id: "angle", label: "Launch Angle (degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "range", label: "Horizontal Range", formula: "(v0^2 * sin(2 * angle * pi / 180)) / 9.80665", unit: "m" },
      { id: "max_height", label: "Maximum Peak Height", formula: "(v0^2 * sin(angle * pi / 180)^2) / (2 * 9.80665)", unit: "m" },
      { id: "flight_time", label: "Total Flight Time", formula: "(2 * v0 * sin(angle * pi / 180)) / 9.80665", unit: "s" }
    ],
    theory: "Projectile motion traces a parabolic path resulting from uniform horizontal speed combined with uniform vertical gravitational acceleration.",
    seoMeta: { title: "Projectile Motion Calculator", description: "Solve projectile motion equations.", keywords: "projectile motion, trajectory, range solver" }
  },
  {
    id: "projectile-range-calculator",
    name: "Projectile Range Calculator",
    description: "Determine the maximum horizontal range of an angled launch projectile.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "R = \\frac{v_0^2 \\sin(2\\theta)}{g}",
    inputs: [
      { id: "v0", label: "Launch Velocity (m/s)", type: "number", defaultValue: 20 },
      { id: "angle", label: "Launch Angle (degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "range", label: "Horizontal Range", formula: "(v0^2 * sin(2 * angle * pi / 180)) / 9.80665", unit: "m" }
    ],
    theory: "Horizontal range is maximum at a 45-degree launch angle (neglecting drag). It is directly proportional to the square of initial speed.",
    seoMeta: { title: "Projectile Range Calculator", description: "Calculate horizontal range of a projectile.", keywords: "projectile range, trajectory distance, max range" }
  },
  {
    id: "quarter-mile-calculator",
    name: "Quarter Mile Calculator",
    description: "Estimate quarter mile elapsed time (ET) and trap speed based on engine horsepower and vehicle weight.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "\\text{ET} = 5.825 \\left(\\frac{W}{\\text{HP}}\\right)^{1/3}",
    inputs: [
      { id: "hp", label: "Engine Horsepower (HP)", type: "number", defaultValue: 300 },
      { id: "weight", label: "Vehicle Weight (lbs)", type: "number", defaultValue: 3000 }
    ],
    outputs: [
      { id: "et", label: "Estimated Elapsed Time (ET)", formula: "5.825 * (weight / hp)^(1/3)", unit: "seconds" },
      { id: "speed", label: "Estimated Trap Speed", formula: "234 * (hp / weight)^(1/3)", unit: "mph" }
    ],
    theory: "Quarter-mile performance metrics are derived from empirical physics models mapping power-to-weight ratios to active kinetic drag limits during drag racing acceleration.",
    seoMeta: { title: "Quarter Mile Calculator", description: "Estimate quarter mile time and speed.", keywords: "quarter mile, drag race, horsepower weight, et estimator" }
  },
  {
    id: "resultant-velocity-calculator",
    name: "Resultant Velocity Calculator",
    description: "Calculate the magnitude of resultant velocity from horizontal and vertical vector components.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v = \\sqrt{v_x^2 + v_y^2}",
    inputs: [
      { id: "vx", label: "Horizontal Velocity Component (m/s)", type: "number", defaultValue: 12 },
      { id: "vy", label: "Vertical Velocity Component (m/s)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "resultant", label: "Resultant Velocity", formula: "sqrt(vx^2 + vy^2)", unit: "m/s" }
    ],
    theory: "Resultant velocity is calculated using the Pythagorean theorem, aggregating orthogonal vector components into a single magnitude.",
    seoMeta: { title: "Resultant Velocity Calculator", description: "Calculate resultant velocity magnitude.", keywords: "resultant velocity, velocity vectors, pythagorean speed" }
  },
  {
    id: "rolling-resistance-calculator",
    name: "Rolling Resistance Calculator",
    description: "Calculate rolling resistance force for wheeled motion.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "F_{rr} = C_{rr} N",
    inputs: [
      { id: "crr", label: "Rolling Resistance Coefficient (Crr)", type: "number", defaultValue: 0.015 },
      { id: "n", label: "Normal Force (N)", type: "number", defaultValue: 800 }
    ],
    outputs: [
      { id: "frr", label: "Rolling Resistance Force", formula: "crr * n", unit: "N" }
    ],
    theory: "Rolling resistance is the force resisting the motion when a body rolls on a surface. It is primarily caused by non-elastic deformations of the wheel or surface.",
    seoMeta: { title: "Rolling Resistance Calculator", description: "Calculate rolling friction resistance.", keywords: "rolling resistance, tire drag, crr coefficient" }
  },
  {
    id: "sled-ride-calculator",
    name: "Sled Ride Calculator",
    description: "Calculate gravity acceleration and resulting speeds of a sled ride down a snowy slope.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "a = g(\\sin\\theta - \\mu\\cos\\theta)",
    inputs: [
      { id: "d", label: "Slope Distance (m)", type: "number", defaultValue: 50 },
      { id: "angle", label: "Slope Incline (degrees)", type: "number", defaultValue: 15 },
      { id: "mu", label: "Kinetic Friction of Snow (μ)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "acceleration", label: "Active Acceleration", formula: "9.80665 * (sin(angle * pi / 180) - mu * cos(angle * pi / 180))", unit: "m/s²" },
      { id: "velocity", label: "Impact Velocity at bottom", formula: "sqrt(2 * max(0, 9.80665 * (sin(angle * pi / 180) - mu * cos(angle * pi / 180))) * d)", unit: "m/s" }
    ],
    theory: "A sled accelerates down a slope driven by the component of gravity parallel to the hill, countered by the frictional resistance of snow.",
    seoMeta: { title: "Sled Ride Calculator", description: "Determine sled velocities down hills.", keywords: "sled ride, friction snow, slope speed" }
  },
  {
    id: "suvat-calculator",
    name: "SUVAT Calculator",
    description: "Solve kinematic equations for linear motion with constant acceleration.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v = u + at, \\quad s = ut + \\frac{1}{2}at^2",
    inputs: [
      { id: "u", label: "Initial Velocity (u, m/s)", type: "number", defaultValue: 0 },
      { id: "a", label: "Acceleration (a, m/s²)", type: "number", defaultValue: 2 },
      { id: "t", label: "Time Interval (t, seconds)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "v", label: "Final Velocity (v)", formula: "u + a * t", unit: "m/s" },
      { id: "s", label: "Displacement (s)", formula: "u * t + 0.5 * a * t^2", unit: "m" }
    ],
    theory: "SUVAT equations describe the relationship between displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t) under uniform acceleration.",
    seoMeta: { title: "SUVAT Calculator", description: "Solve SUVAT linear motion kinematics.", keywords: "suvat, kinematic equations, constant acceleration" }
  },
  {
    id: "terminal-velocity-calculator",
    name: "Terminal Velocity Calculator",
    description: "Calculate terminal velocity of a falling mass under atmospheric fluid drag.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v_t = \\sqrt{\\frac{2mg}{\\rho A C_d}}",
    inputs: [
      { id: "mass", label: "Mass of falling body (kg)", type: "number", defaultValue: 80 },
      { id: "density", label: "Fluid Density (kg/m³)", type: "number", defaultValue: 1.2 },
      { id: "area", label: "Cross-sectional Area (m²)", type: "number", defaultValue: 0.7 },
      { id: "cd", label: "Drag Coefficient (Cd)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "vt", label: "Terminal Velocity", formula: "sqrt((2 * mass * 9.80665) / (density * area * cd))", unit: "m/s" }
    ],
    theory: "Terminal velocity is reached when the upward drag force equals the downward force of gravity, resulting in a net force of zero and zero acceleration.",
    seoMeta: { title: "Terminal Velocity Calculator", description: "Calculate fluid drag terminal velocity.", keywords: "terminal velocity, air drag, fluid mechanics" }
  },
  {
    id: "time-of-flight-calculator-projectile-motion",
    name: "Time of Flight Calculator – Projectile Motion",
    description: "Calculate the total airborne duration of a launched projectile.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "T = \\frac{2v_0\\sin\\theta}{g}",
    inputs: [
      { id: "v0", label: "Launch Speed (m/s)", type: "number", defaultValue: 20 },
      { id: "angle", label: "Launch Angle (degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "flight_time", label: "Total Flight Time", formula: "(2 * v0 * sin(angle * pi / 180)) / 9.80665", unit: "s" }
    ],
    theory: "The duration of airborne travel depends on vertical speed. Peak travel time is symmetric; falling time equals rising time.",
    seoMeta: { title: "Time of Flight Calculator", description: "Calculate projectile flight time.", keywords: "time of flight, projectile duration, airtime" }
  },
  {
    id: "trajectory-calculator",
    name: "Trajectory Calculator",
    description: "Determine vertical displacement at a given horizontal distance along a projectile path.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "y = x\\tan\\theta - \\frac{gx^2}{2v_0^2\\cos^2\\theta}",
    inputs: [
      { id: "v0", label: "Launch Velocity (m/s)", type: "number", defaultValue: 20 },
      { id: "angle", label: "Launch Angle (degrees)", type: "number", defaultValue: 45 },
      { id: "x", label: "Horizontal Distance (x, meters)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "y", label: "Vertical Trajectory Height (y)", formula: "x * tan(angle * pi / 180) - (9.80665 * x^2) / (2 * v0^2 * cos(angle * pi / 180)^2)", unit: "m" }
    ],
    theory: "Trajectory equations model path coordinates, defining the vertical elevation of a projectile at any horizontal coordinate prior to impact.",
    seoMeta: { title: "Trajectory Calculator", description: "Solve projectile trajectory path coordinates.", keywords: "trajectory coordinates, projectile height, path tracking" }
  },
  {
    id: "velocity-calculator",
    name: "Velocity Calculator",
    description: "Calculate linear velocity based on travel distance and time duration.",
    category: "physics",
    subcategory: "kinematics",
    scientificFormula: "v = \\frac{d}{t}",
    inputs: [
      { id: "d", label: "Travel Distance (meters)", type: "number", defaultValue: 100 },
      { id: "t", label: "Duration (seconds)", type: "number", defaultValue: 9.58 }
    ],
    outputs: [
      { id: "velocity", label: "Linear Velocity", formula: "d / t", unit: "m/s" }
    ],
    theory: "Velocity measures displacement over time. Average linear velocity assumes uniform rate of speed across the duration.",
    seoMeta: { title: "Velocity Calculator", description: "Calculate average linear velocity.", keywords: "velocity calculator, speed, distance time speed" }
  },

  // ── Dynamics ────────────────────────────────────────────────────────────────
  {
    id: "acceleration-calculator",
    name: "Acceleration Calculator",
    description: "Calculate acceleration from change in velocity and time.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "a = \\frac{\\Delta v}{t}",
    inputs: [
      { id: "dv", label: "Change in Velocity (m/s)", type: "number", defaultValue: 20 },
      { id: "t", label: "Time (s)", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "a", label: "Acceleration", formula: "dv / t", unit: "m/s²" }],
    theory: "Acceleration is the rate of change of velocity with respect to time.",
    seoMeta: { title: "Acceleration Calculator", description: "Calculate acceleration.", keywords: "acceleration, velocity, time" }
  },
  {
    id: "angle-of-banking-calculator",
    name: "Angle of Banking Calculator",
    description: "Calculate the ideal banking angle for a vehicle on a curved road.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "\\theta = \\arctan\\left(\\frac{v^2}{rg}\\right)",
    inputs: [
      { id: "v", label: "Speed (m/s)", type: "number", defaultValue: 20 },
      { id: "r", label: "Radius (m)", type: "number", defaultValue: 100 }
    ],
    outputs: [{ id: "theta", label: "Banking Angle", formula: "atan(v^2 / (r * 9.80665)) * (180 / pi)", unit: "°" }],
    theory: "Banking angle prevents reliance on friction alone for cornering by using the normal force component.",
    seoMeta: { title: "Angle of Banking Calculator", description: "Find the ideal road banking angle.", keywords: "banking angle, curved road, centripetal" }
  },
  {
    id: "car-crash-calculator",
    name: "Car Crash Calculator",
    description: "Estimate impact force during a car crash using impulse-momentum theorem.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F = \\frac{m \\cdot \\Delta v}{\\Delta t}",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1500 },
      { id: "dv", label: "Speed Change (m/s)", type: "number", defaultValue: 15 },
      { id: "dt", label: "Collision Duration (s)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [{ id: "F", label: "Impact Force", formula: "m * dv / dt", unit: "N" }],
    theory: "The impulse-momentum theorem relates force, mass, and velocity change during a collision.",
    seoMeta: { title: "Car Crash Calculator", description: "Estimate car crash impact force.", keywords: "car crash, impact force, collision" }
  },
  {
    id: "force-calculator",
    name: "Force Calculator",
    description: "Calculate force using Newton's second law F = ma.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F = m \\cdot a",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 10 },
      { id: "a", label: "Acceleration (m/s²)", type: "number", defaultValue: 9.8 }
    ],
    outputs: [{ id: "F", label: "Force", formula: "m * a", unit: "N" }],
    theory: "Newton's second law states that force equals mass times acceleration.",
    seoMeta: { title: "Force Calculator", description: "Calculate force with F=ma.", keywords: "force, mass, acceleration, Newton" }
  },
  {
    id: "gravitational-force-calculator",
    name: "Gravitational Force Calculator",
    description: "Calculate gravitational attraction between two masses.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F = G\\frac{m_1 m_2}{r^2}",
    inputs: [
      { id: "m1", label: "Mass 1 (kg)", type: "number", defaultValue: 5.972e24 },
      { id: "m2", label: "Mass 2 (kg)", type: "number", defaultValue: 70 },
      { id: "r", label: "Distance (m)", type: "number", defaultValue: 6.371e6 }
    ],
    outputs: [{ id: "F", label: "Gravitational Force", formula: "6.674e-11 * m1 * m2 / r^2", unit: "N" }],
    theory: "Newton's law of universal gravitation describes the attractive force between any two masses.",
    seoMeta: { title: "Gravitational Force Calculator", description: "Calculate gravity between two masses.", keywords: "gravitational force, gravity, Newton" }
  },
  {
    id: "hookes-law-calculator",
    name: "Hooke's Law Calculator",
    description: "Calculate spring force using Hooke's Law F = kx.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F = k \\cdot x",
    inputs: [
      { id: "k", label: "Spring Constant (N/m)", type: "number", defaultValue: 200 },
      { id: "x", label: "Displacement (m)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [{ id: "F", label: "Spring Force", formula: "k * x", unit: "N" }],
    theory: "Hooke's Law states a spring's restoring force is proportional to displacement from equilibrium.",
    seoMeta: { title: "Hooke's Law Calculator", description: "Calculate spring force.", keywords: "Hooke's law, spring constant, force" }
  },
  {
    id: "kg-to-newtons-calculator",
    name: "kg to Newtons Calculator",
    description: "Convert mass in kilograms to weight force in Newtons.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "W = m \\cdot g",
    inputs: [{ id: "m", label: "Mass (kg)", type: "number", defaultValue: 10 }],
    outputs: [{ id: "W", label: "Weight", formula: "m * 9.80665", unit: "N" }],
    theory: "Weight is the gravitational force on a mass: W = mg where g ≈ 9.80665 m/s².",
    seoMeta: { title: "kg to Newtons Calculator", description: "Convert kg to Newtons.", keywords: "kg to newtons, weight, mass" }
  },
  {
    id: "newtons-second-law-calculator",
    name: "Newton's Second Law Calculator",
    description: "Apply Newton's second law to find force, mass, or acceleration.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F = m \\cdot a",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "a", label: "Acceleration (m/s²)", type: "number", defaultValue: 3 }
    ],
    outputs: [{ id: "F", label: "Net Force", formula: "m * a", unit: "N" }],
    theory: "Newton's second law: the net force on an object equals its mass multiplied by its acceleration.",
    seoMeta: { title: "Newton's Second Law Calculator", description: "Calculate net force using F=ma.", keywords: "Newton second law, force, mass, acceleration" }
  },
  {
    id: "newtons-third-law-calculator",
    name: "Newton's Third Law Calculator",
    description: "Illustrate action-reaction force pairs using Newton's Third Law.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F_{12} = -F_{21}",
    inputs: [{ id: "F", label: "Action Force (N)", type: "number", defaultValue: 50 }],
    outputs: [{ id: "reaction", label: "Reaction Force", formula: "F", unit: "N (opposite direction)" }],
    theory: "For every action force there is an equal and opposite reaction force.",
    seoMeta: { title: "Newton's Third Law Calculator", description: "Explore action-reaction pairs.", keywords: "Newton third law, action reaction, force" }
  },
  {
    id: "normal-force-calculator",
    name: "Normal Force Calculator",
    description: "Calculate the normal force on a surface, with optional incline angle.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "N = m \\cdot g \\cdot \\cos\\theta",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 70 },
      { id: "theta", label: "Incline Angle (°)", type: "number", defaultValue: 0 }
    ],
    outputs: [{ id: "N", label: "Normal Force", formula: "m * 9.80665 * cos(theta * pi / 180)", unit: "N" }],
    theory: "The normal force is the perpendicular contact force from a surface on an object.",
    seoMeta: { title: "Normal Force Calculator", description: "Calculate normal force on a surface.", keywords: "normal force, incline, surface" }
  },
  {
    id: "net-force-calculator",
    name: "Net Force Calculator",
    description: "Calculate the net force acting on an object from multiple forces.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "F_{net} = \\sum F_i",
    inputs: [
      { id: "F1", label: "Force 1 (N)", type: "number", defaultValue: 30 },
      { id: "F2", label: "Force 2 (N)", type: "number", defaultValue: -10 }
    ],
    outputs: [{ id: "Fnet", label: "Net Force", formula: "F1 + F2", unit: "N" }],
    theory: "Net force is the vector sum of all forces acting on an object.",
    seoMeta: { title: "Net Force Calculator", description: "Sum forces to find net force.", keywords: "net force, resultant force, Newton" }
  },
  {
    id: "stopping-distance-calculator",
    name: "Stopping Distance Calculator",
    description: "Estimate braking/stopping distance from speed and deceleration.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "d = \\frac{v^2}{2a}",
    inputs: [
      { id: "v", label: "Initial Speed (m/s)", type: "number", defaultValue: 20 },
      { id: "a", label: "Deceleration (m/s²)", type: "number", defaultValue: 6 }
    ],
    outputs: [{ id: "d", label: "Stopping Distance", formula: "v^2 / (2 * a)", unit: "m" }],
    theory: "Using kinematics: stopping distance depends on the square of speed and the deceleration rate.",
    seoMeta: { title: "Stopping Distance Calculator", description: "Calculate braking distance.", keywords: "stopping distance, braking, deceleration" }
  },
  {
    id: "tension-calculator",
    name: "Tension Calculator",
    description: "Calculate tension in a rope or string supporting a hanging mass.",
    category: "physics", subcategory: "dynamics",
    scientificFormula: "T = m(g + a)",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 10 },
      { id: "a", label: "Acceleration (m/s²)", type: "number", defaultValue: 0 }
    ],
    outputs: [{ id: "T", label: "Tension", formula: "m * (9.80665 + a)", unit: "N" }],
    theory: "Tension equals the weight plus the net upward force needed to accelerate the mass.",
    seoMeta: { title: "Tension Calculator", description: "Find rope tension for hanging masses.", keywords: "tension, rope, mass, force" }
  }
];

