import { CalculatorConfig } from "./calculator-types";

export const ELECTRONICS_CALCULATORS: CalculatorConfig[] = [
  {
    id: "555-timer-calculator", name: "555 Timer Calculator",
    description: "Calculate 555 timer frequency and duty cycle in astable mode.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "f = \\frac{1.44}{(R_1 + 2R_2)C}",
    inputs: [
      { id: "R1", label: "R₁ (Ω)", type: "number", defaultValue: 10000 },
      { id: "R2", label: "R₂ (Ω)", type: "number", defaultValue: 22000 },
      { id: "C_F", label: "C (F)", type: "number", defaultValue: 1e-7 }
    ],
    outputs: [
      { id: "freq", label: "Frequency", formula: "1.44 / ((R1 + 2 * R2) * C_F)", unit: "Hz" },
      { id: "duty", label: "Duty Cycle", formula: "(R1 + R2) / (R1 + 2 * R2) * 100", unit: "%" }
    ],
    theory: "The 555 timer in astable mode generates a continuous square wave. The capacitor charges through R₁+R₂ and discharges through R₂ only, creating an asymmetric waveform. The duty cycle is always > 50% in the standard configuration.",
    faq: [
      { question: "How do I get 50% duty cycle?", answer: "Add a diode across R₂ so charging bypasses it. Then duty ≈ R₁/(R₁+R₂). Or use two 555s, or a CMOS 555 variant. Some modern ICs have built-in 50% duty cycle modes." },
      { question: "What is the 555 used for?", answer: "Pulse generation, LED flashers, PWM motor control, tone generation, timing delays, debouncing, and clock generation. It's the world's most popular integrated circuit." },
      { question: "What is monostable mode?", answer: "One-shot mode: produces a single pulse of width T = 1.1×R×C when triggered. Used for debouncing, missing pulse detection, and timed events." }
    ],
    seoMeta: { title: "555 Timer Calculator", description: "Calculate 555 timer frequency and duty cycle.", keywords: "555 timer, astable, frequency, duty cycle, oscillator" }
  },
  {
    id: "battery-life-calculator", name: "Battery Life Calculator",
    description: "Estimate battery life from capacity and current draw.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "t = \\frac{C_{Ah}}{I}",
    inputs: [
      { id: "C_mAh", label: "Battery Capacity (mAh)", type: "number", defaultValue: 3000 },
      { id: "I_mA", label: "Current Draw (mA)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "t_hours", label: "Battery Life", formula: "C_mAh / I_mA", unit: "hours" },
      { id: "t_days", label: "Battery Life", formula: "C_mAh / I_mA / 24", unit: "days" }
    ],
    theory: "Battery life = capacity / current draw. This is an idealized estimate — actual life is affected by discharge rate (Peukert's law), temperature, voltage cutoff, self-discharge, and efficiency of voltage regulators.",
    faq: [
      { question: "Why is real battery life shorter?", answer: "Peukert's effect (high drain reduces effective capacity), voltage regulator efficiency (80–95%), self-discharge (1–5%/month), temperature effects, and the battery is considered dead above 0V but usable range ends at cutoff voltage." },
      { question: "What is Peukert's Law?", answer: "t = C/(I^n) where n ≈ 1.1–1.3. Higher drain rates reduce effective capacity. A battery rated 3000 mAh at 300 mA might only deliver 2500 mAh at 1500 mA." },
      { question: "How do I extend battery life?", answer: "Use sleep modes, reduce clock speed, dim displays, use efficient voltage regulators, minimize radio transmissions, and choose components with low quiescent current." }
    ],
    seoMeta: { title: "Battery Life Calculator", description: "Estimate battery life from capacity and drain.", keywords: "battery life, capacity, mAh, current draw, battery runtime" }
  },
  {
    id: "capacitor-energy-calculator", name: "Capacitor Energy Calculator",
    description: "Calculate the energy stored in a capacitor.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "E = \\frac{1}{2}CV^2",
    inputs: [
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 0.001 },
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "E_J", label: "Energy", formula: "0.5 * C_F * V^2", unit: "J" },
      { id: "E_mJ", label: "Energy", formula: "0.5 * C_F * V^2 * 1000", unit: "mJ" }
    ],
    theory: "A charged capacitor stores energy in the electric field between its plates. Energy = ½CV². The V² dependence means doubling voltage quadruples stored energy. This energy can be released rapidly (camera flash, defibrillator) or slowly (power supply filtering).",
    faq: [
      { question: "How dangerous are charged capacitors?", answer: "Very! A 400V, 1000μF capacitor stores 80J — enough to be lethal. Large electrolytic and film capacitors in power supplies can retain charge for hours after power off. Always discharge safely before servicing." },
      { question: "How fast can a capacitor discharge?", answer: "Theoretically instantly (infinite current). In practice, limited by internal resistance (ESR) and circuit resistance. Supercapacitors can deliver thousands of amps briefly. Flash capacitors discharge in microseconds." },
      { question: "How do supercapacitors compare to batteries?", answer: "Supercapacitors: 5–10 Wh/kg, millions of cycles, seconds to charge. Batteries: 100–250 Wh/kg, hundreds of cycles, hours to charge. Supercapacitors excel at high-power, short-duration applications." }
    ],
    seoMeta: { title: "Capacitor Energy Calculator", description: "Calculate energy stored in a capacitor.", keywords: "capacitor energy, stored energy, CV², capacitor, joules" }
  },
  {
    id: "rc-time-constant-calculator", name: "RC Time Constant Calculator",
    description: "Calculate the RC time constant and charge/discharge times.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "\\tau = RC",
    inputs: [
      { id: "R", label: "Resistance (Ω)", type: "number", defaultValue: 10000 },
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 1e-6 }
    ],
    outputs: [
      { id: "tau", label: "Time Constant τ", formula: "R * C_F", unit: "s" },
      { id: "t_63", label: "63.2% Charge Time (1τ)", formula: "R * C_F", unit: "s" },
      { id: "t_95", label: "95% Charge Time (3τ)", formula: "3 * R * C_F", unit: "s" },
      { id: "t_99", label: "99.3% Charge Time (5τ)", formula: "5 * R * C_F", unit: "s" }
    ],
    theory: "The RC time constant τ = RC determines charging and discharging speed. After 1τ, the capacitor reaches 63.2% of final voltage. After 5τ, it's 99.3% charged. The same exponential behavior governs signal filtering and pulse shaping.",
    faq: [
      { question: "Why 63.2%?", answer: "At t = τ, V(t) = V₀(1 - e⁻¹) = V₀ × 0.6321. The value e⁻¹ = 0.3679 is a natural consequence of exponential decay. This is not a design choice — it's a mathematical result." },
      { question: "How is RC used in filters?", answer: "A low-pass RC filter has fc = 1/(2πRC). Signals below fc pass through; above fc are attenuated. RC circuits also debounce switches, create delays, and shape pulses." },
      { question: "What about RL circuits?", answer: "RL circuits have τ = L/R. They behave similarly but with current instead of voltage. RL time constants are typically much shorter than RC because practical inductors have small L/R ratios." }
    ],
    seoMeta: { title: "RC Time Constant Calculator", description: "Calculate RC time constant and charge times.", keywords: "RC time constant, tau, capacitor charging, exponential, filter" }
  },
  {
    id: "led-resistor-calculator", name: "LED Resistor Calculator",
    description: "Calculate the resistor needed for an LED circuit.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "R = \\frac{V_s - V_f}{I_f}",
    inputs: [
      { id: "Vs", label: "Supply Voltage (V)", type: "number", defaultValue: 5 },
      { id: "Vf", label: "LED Forward Voltage (V)", type: "number", defaultValue: 2.0, helpText: "Red: 1.8–2.2, Green: 2.0–3.5, Blue/White: 3.0–3.6" },
      { id: "If_mA", label: "Desired LED Current (mA)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "R_led", label: "Resistor Value", formula: "(Vs - Vf) / (If_mA / 1000)", unit: "Ω" },
      { id: "P_resistor", label: "Resistor Power", formula: "(Vs - Vf) * If_mA / 1000", unit: "W" }
    ],
    theory: "LEDs require current limiting because they have very low dynamic resistance. Without a resistor, current would increase rapidly and destroy the LED. The resistor drops the excess voltage (Vs - Vf) and limits current to the safe operating level.",
    faq: [
      { question: "What happens without a resistor?", answer: "The LED draws excessive current and burns out instantly or within seconds. LEDs are current-controlled devices — they need external current limiting. Even a brief overshoot can damage them." },
      { question: "What are typical forward voltages?", answer: "Red: 1.8–2.2V. Yellow/Orange: 2.0–2.1V. Green: 2.0–3.5V. Blue: 2.8–3.6V. White: 3.0–3.6V. UV: 3.2–4.0V. IR: 1.1–1.6V." },
      { question: "Can I drive LEDs from a microcontroller?", answer: "Most MCU pins can source/sink 10–20 mA safely. At 3.3V with a red LED (2V, 10mA): R = 130Ω. For high-power LEDs (>50mA), use a MOSFET or dedicated LED driver." }
    ],
    seoMeta: { title: "LED Resistor Calculator", description: "Calculate the right resistor for LED circuits.", keywords: "LED resistor, forward voltage, current limiting, LED circuit" }
  },
  {
    id: "ohms-law-calculator", name: "Ohm's Law Calculator",
    description: "Calculate voltage, current, or resistance using Ohm's Law.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "V = IR",
    inputs: [
      { id: "V", label: "Voltage (V)", type: "number", defaultValue: 12 },
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "R_val", label: "Resistance", formula: "V / I_amps", unit: "Ω" },
      { id: "P_val", label: "Power", formula: "V * I_amps", unit: "W" }
    ],
    theory: "Ohm's Law (V = IR) is the most fundamental circuit equation. Voltage equals current times resistance. It applies to any linear (ohmic) resistive element. Combined with Kirchhoff's laws, it can solve any resistive circuit.",
    faq: [
      { question: "Does Ohm's Law always apply?", answer: "Only for ohmic (linear) materials where resistance is constant. Diodes, transistors, gas discharges, and superconductors are non-ohmic — their V-I relationship is nonlinear." },
      { question: "What determines resistance?", answer: "R = ρL/A where ρ is resistivity, L is length, A is cross-section. Longer wires = more resistance. Thicker wires = less resistance. Material determines ρ." },
      { question: "What are Kirchhoff's Laws?", answer: "KVL: sum of voltages around any loop = 0 (energy conservation). KCL: sum of currents at any node = 0 (charge conservation). These plus Ohm's Law can solve any circuit." }
    ],
    seoMeta: { title: "Ohm's Law Calculator", description: "Calculate V, I, R using Ohm's Law.", keywords: "Ohm's law, voltage, current, resistance, circuit" }
  },
  {
    id: "resistor-color-code-calculator", name: "Resistor Color Code Calculator",
    description: "Calculate resistor value from color code bands.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "R = (10 \\cdot B_1 + B_2) \\times 10^{B_3}",
    inputs: [
      { id: "B1", label: "Band 1 (0-9)", type: "number", defaultValue: 4, helpText: "0=Black, 1=Brown, 2=Red, 3=Orange, 4=Yellow, 5=Green, 6=Blue, 7=Violet, 8=Grey, 9=White" },
      { id: "B2", label: "Band 2 (0-9)", type: "number", defaultValue: 7 },
      { id: "B3", label: "Multiplier Band (0-9)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "R_val", label: "Resistance", formula: "(10 * B1 + B2) * 10^B3", unit: "Ω" },
      { id: "R_kOhm", label: "Resistance", formula: "(10 * B1 + B2) * 10^B3 / 1000", unit: "kΩ" }
    ],
    theory: "Resistor color codes use colored bands to indicate resistance value. The first two bands are digits, the third is a power-of-10 multiplier, and the optional fourth band indicates tolerance (gold: ±5%, silver: ±10%, none: ±20%).",
    faq: [
      { question: "How do I remember the color codes?", answer: "Common mnemonic: 'Bad Beer Rots Our Young Guts But Vodka Goes Well.' Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9." },
      { question: "What is the tolerance band?", answer: "Gold: ±5%. Silver: ±10%. Brown: ±1%. Red: ±2%. No band: ±20%. Higher precision resistors have 5 or 6 bands with a third significant digit." },
      { question: "What are standard resistor values?", answer: "E12 series (±10%): 1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2 (×10^n). E24 (±5%) adds intermediate values. E96 (±1%) has 96 values per decade." }
    ],
    seoMeta: { title: "Resistor Color Code Calculator", description: "Calculate resistor value from color bands.", keywords: "resistor color code, bands, color, resistance value" }
  },
  {
    id: "series-parallel-resistors-calculator", name: "Series & Parallel Resistors Calculator",
    description: "Calculate equivalent resistance for resistors in series or parallel.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "R_s = R_1+R_2, \\quad \\frac{1}{R_p} = \\frac{1}{R_1}+\\frac{1}{R_2}",
    inputs: [
      { id: "R1", label: "Resistor 1 (Ω)", type: "number", defaultValue: 100 },
      { id: "R2", label: "Resistor 2 (Ω)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "R_series", label: "Series Total", formula: "R1 + R2", unit: "Ω" },
      { id: "R_parallel", label: "Parallel Total", formula: "R1 * R2 / (R1 + R2)", unit: "Ω" }
    ],
    theory: "Series: R_total = R₁ + R₂ + ... (current same through all, voltages add). Parallel: 1/R_total = 1/R₁ + 1/R₂ + ... (voltage same across all, currents add). These rules, with Ohm's law, solve most resistive networks.",
    faq: [
      { question: "Why is parallel resistance always less than the smallest?", answer: "Adding a parallel path always provides more ways for current to flow, reducing total resistance. The parallel combination of any two resistors is always less than either individual value." },
      { question: "What about series-parallel combinations?", answer: "Identify which resistors are in series and which in parallel. Reduce groups step by step. Some circuits (like Wheatstone bridges) need delta-wye conversion to simplify." },
      { question: "Quick formula for two parallel resistors?", answer: "R_parallel = (R₁ × R₂) / (R₁ + R₂). For equal resistors: R/2. For one much larger: result ≈ the smaller one. This 'product over sum' formula only works for exactly two resistors." }
    ],
    seoMeta: { title: "Series & Parallel Resistors Calculator", description: "Calculate equivalent resistance.", keywords: "series resistance, parallel resistance, equivalent, circuit analysis" }
  },
  {
    id: "voltage-divider-calculator", name: "Voltage Divider Calculator",
    description: "Calculate the output voltage of a resistive voltage divider.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}",
    inputs: [
      { id: "Vin", label: "Input Voltage (V)", type: "number", defaultValue: 12 },
      { id: "R1", label: "R₁ (top, Ω)", type: "number", defaultValue: 10000 },
      { id: "R2", label: "R₂ (bottom, Ω)", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "Vout", label: "Output Voltage", formula: "Vin * R2 / (R1 + R2)", unit: "V" },
      { id: "I_div", label: "Divider Current", formula: "Vin / (R1 + R2)", unit: "A" }
    ],
    theory: "A voltage divider uses two series resistors to produce a fraction of the input voltage. The output is the voltage across the bottom resistor. For equal resistors, Vout = Vin/2. The output is loaded down if the connected load has comparable impedance to the divider.",
    faq: [
      { question: "Why do voltage dividers fail under load?", answer: "The load acts as a resistor in parallel with R₂, reducing the effective R₂ and lowering Vout. For minimal loading, keep the load resistance at least 10× larger than R₂." },
      { question: "Where are voltage dividers used?", answer: "ADC input scaling, bias networks, reference voltages (with zener diode), potentiometers, level shifting, and sensor signal conditioning." },
      { question: "Why not use a divider as a power supply?", answer: "Voltage dividers waste power in R₁ and provide poor regulation (Vout changes with load). Use a voltage regulator (LDO or switching) for power supply applications." }
    ],
    seoMeta: { title: "Voltage Divider Calculator", description: "Calculate voltage divider output.", keywords: "voltage divider, resistive divider, R1 R2, output voltage" }
  },
  {
    id: "lc-resonance-calculator", name: "LC Resonance Calculator",
    description: "Calculate the resonant frequency of an LC circuit.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}",
    inputs: [
      { id: "L_H", label: "Inductance (H)", type: "number", defaultValue: 0.001 },
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 1e-9 }
    ],
    outputs: [
      { id: "f0", label: "Resonant Frequency", formula: "1 / (2 * pi * sqrt(L_H * C_F))", unit: "Hz" },
      { id: "f0_kHz", label: "Resonant Frequency", formula: "1 / (2 * pi * sqrt(L_H * C_F)) / 1000", unit: "kHz" }
    ],
    theory: "An LC circuit oscillates at its natural frequency f₀ = 1/(2π√LC). At resonance, energy oscillates between the inductor (magnetic) and capacitor (electric) fields. The impedance of a series LC circuit is zero at resonance; for parallel LC, it's maximum (ideally infinite).",
    faq: [
      { question: "What is resonance?", answer: "At f₀, inductive reactance (XL = 2πfL) exactly equals capacitive reactance (XC = 1/2πfC). They cancel, leaving only resistance. The circuit acts as a filter, passing only frequencies near f₀." },
      { question: "What determines Q factor?", answer: "Q = (1/R)√(L/C) for series RLC. Higher Q means sharper resonance (narrower bandwidth), less damping, and more energy stored per cycle. Practical Q ranges from 5 (lossy) to 10,000+ (quartz crystals)." },
      { question: "Where is LC resonance used?", answer: "Radio tuning, band-pass/band-stop filters, oscillators, power supply filtering, wireless charging, and MRI machines. Every radio station is selected by tuning an LC circuit to its frequency." }
    ],
    seoMeta: { title: "LC Resonance Calculator", description: "Calculate LC circuit resonant frequency.", keywords: "LC resonance, resonant frequency, inductor, capacitor, tuning" }
  },
  {
    id: "transformer-calculator", name: "Transformer Calculator",
    description: "Calculate transformer turns ratio, voltage, and current transformation.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}",
    inputs: [
      { id: "Vp", label: "Primary Voltage (V)", type: "number", defaultValue: 120 },
      { id: "Np", label: "Primary Turns", type: "number", defaultValue: 1000 },
      { id: "Ns", label: "Secondary Turns", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "Vs", label: "Secondary Voltage", formula: "Vp * Ns / Np", unit: "V" },
      { id: "turns_ratio", label: "Turns Ratio", formula: "Np / Ns", unit: ":1" }
    ],
    theory: "A transformer transfers energy between circuits through electromagnetic induction. The turns ratio determines voltage transformation: V_s/V_p = N_s/N_p. Current transforms inversely. Power is conserved (ideal): P_p = P_s. Step-up transformers increase voltage; step-down decrease it.",
    faq: [
      { question: "Why are transformers used?", answer: "Power transmission at high voltage (low current) minimizes I²R losses. Transformers step up voltage for transmission and step down for distribution. They also provide electrical isolation and impedance matching." },
      { question: "What limits transformer efficiency?", answer: "Copper losses (I²R in windings), core losses (hysteresis and eddy currents), and leakage flux. Modern power transformers achieve 98–99.5% efficiency. Distribution transformers: 95–98%." },
      { question: "Do transformers work with DC?", answer: "No. Transformers require changing current to create changing flux (Faraday's Law). DC produces constant flux and no induced voltage. Switching power supplies convert DC to high-frequency AC for transformation." }
    ],
    seoMeta: { title: "Transformer Calculator", description: "Calculate transformer voltage and turns ratio.", keywords: "transformer, turns ratio, step-up, step-down, voltage" }
  },
  {
    id: "wire-gauge-calculator", name: "Wire Gauge Calculator",
    description: "Calculate wire diameter and resistance from AWG gauge.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "d = 0.127 \\times 92^{\\frac{36-AWG}{39}}",
    inputs: [
      { id: "AWG", label: "Wire Gauge (AWG)", type: "number", defaultValue: 14 },
      { id: "L_ft", label: "Wire Length (ft)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "d_mm", label: "Diameter", formula: "0.127 * 92^((36 - AWG) / 39)", unit: "mm" },
      { id: "R_wire", label: "Resistance (copper)", formula: "L_ft * 10.37 / (1000 * 92^((36 - AWG) / 39)^2 * pi / 4)", unit: "Ω" }
    ],
    theory: "American Wire Gauge (AWG) is a standardized system for wire diameter. Lower AWG = thicker wire. Each 3-gauge decrease doubles the cross-sectional area. AWG determines ampacity (safe current carrying capacity), resistance per unit length, and voltage drop.",
    faq: [
      { question: "What AWG for what current?", answer: "14 AWG: 15A (household lighting). 12 AWG: 20A (outlets). 10 AWG: 30A (dryers, ACs). 8 AWG: 40A. 6 AWG: 55A. 4 AWG: 70A. These are NEC ratings for copper in NM cable at 60°C." },
      { question: "What is the 3-gauge rule?", answer: "Every 3 AWG steps doubles the cross-section and halves the resistance. So 11 AWG has twice the area of 14 AWG. This is a handy rule of thumb for wire sizing." },
      { question: "AWG vs metric?", answer: "AWG is used in North America. The rest of the world uses mm² (cross-section area). 14 AWG ≈ 2.08 mm². 12 AWG ≈ 3.31 mm². Online converters are widely available." }
    ],
    seoMeta: { title: "Wire Gauge Calculator", description: "Calculate wire diameter and resistance from AWG.", keywords: "wire gauge, AWG, wire diameter, ampacity, resistance" }
  },
  {
    id: "inductor-energy-calculator", name: "Inductor Energy Calculator",
    description: "Calculate the energy stored in an inductor.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "E = \\frac{1}{2}LI^2",
    inputs: [
      { id: "L_H", label: "Inductance (H)", type: "number", defaultValue: 0.01 },
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "E_J", label: "Energy", formula: "0.5 * L_H * I_amps^2", unit: "J" }
    ],
    theory: "An inductor stores energy in its magnetic field: E = ½LI². The I² dependence means doubling current quadruples stored energy. When current through an inductor is interrupted, this energy must go somewhere — often causing voltage spikes (inductive kick).",
    faq: [
      { question: "What is inductive kick?", answer: "When current through an inductor is suddenly interrupted, it tries to maintain current flow (Lenz's Law), generating a high voltage spike: V = -L(di/dt). This can damage transistors and is why flyback diodes are used across relay coils." },
      { question: "Inductor vs capacitor energy storage?", answer: "Capacitors store energy in E-fields (½CV²), inductors in B-fields (½LI²). Capacitors are better for voltage sources; inductors for current sources. Switching power supplies alternate between both." },
      { question: "What are inductors used for?", answer: "Filters (EMI suppression, power supply ripple), energy storage (switching regulators), transformers, motors/generators, wireless charging, and RF tuning circuits." }
    ],
    seoMeta: { title: "Inductor Energy Calculator", description: "Calculate energy stored in an inductor.", keywords: "inductor energy, magnetic energy, LI², stored energy" }
  },
  {
    id: "wheatstone-bridge-calculator", name: "Wheatstone Bridge Calculator",
    description: "Calculate the unknown resistance in a balanced Wheatstone bridge.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "R_x = \\frac{R_3 \\cdot R_2}{R_1}",
    inputs: [
      { id: "R1", label: "R₁ (Ω)", type: "number", defaultValue: 100 },
      { id: "R2", label: "R₂ (Ω)", type: "number", defaultValue: 200 },
      { id: "R3", label: "R₃ (Ω)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "Rx", label: "Unknown Resistance Rx", formula: "R3 * R2 / R1", unit: "Ω" }
    ],
    theory: "A Wheatstone bridge uses four resistors in a diamond configuration to measure unknown resistance with high precision. When the bridge is balanced (galvanometer reads zero), R_x = R₃R₂/R₁. The bridge is highly sensitive to small resistance changes, making it ideal for sensor measurements.",
    faq: [
      { question: "Why is the bridge so sensitive?", answer: "The differential measurement cancels common-mode changes (temperature drift, supply variations). Small changes in Rx produce measurable voltage imbalance. Sensitivity can be enhanced by using amplifiers." },
      { question: "Where is it used?", answer: "Strain gauges, RTDs (temperature), pressure sensors, load cells, and precision resistance measurement. Most electronic scales use Wheatstone bridges with strain gauge sensors." },
      { question: "What if the bridge is unbalanced?", answer: "The voltage across the galvanometer is V_g = V_s × [R₃/(R₃+R₄) - R₂/(R₁+R₂)]. For small imbalances ΔR, V_g ≈ V_s × ΔR/(4R), providing a linear output proportional to resistance change." }
    ],
    seoMeta: { title: "Wheatstone Bridge Calculator", description: "Calculate unknown resistance using Wheatstone bridge.", keywords: "Wheatstone bridge, resistance measurement, balanced bridge, strain gauge" }
  },
  {
    id: "rlc-impedance-calculator", name: "RLC Impedance Calculator",
    description: "Calculate the total impedance of a series RLC circuit.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "Z = \\sqrt{R^2 + (X_L - X_C)^2}",
    inputs: [
      { id: "R", label: "Resistance (Ω)", type: "number", defaultValue: 100 },
      { id: "L_H", label: "Inductance (H)", type: "number", defaultValue: 0.01 },
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 1e-6 },
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "XL", label: "Inductive Reactance", formula: "2 * pi * f * L_H", unit: "Ω" },
      { id: "XC", label: "Capacitive Reactance", formula: "1 / (2 * pi * f * C_F)", unit: "Ω" },
      { id: "Z_total", label: "Total Impedance", formula: "sqrt(R^2 + (2 * pi * f * L_H - 1 / (2 * pi * f * C_F))^2)", unit: "Ω" },
      { id: "phi_deg", label: "Phase Angle", formula: "atan((2 * pi * f * L_H - 1 / (2 * pi * f * C_F)) / R) * 180 / pi", unit: "°" }
    ],
    theory: "In a series RLC circuit, impedance combines resistance with inductive and capacitive reactances. XL and XC partially cancel (they oppose each other). At resonance (XL = XC), impedance equals pure resistance R. Below resonance, the circuit is capacitive; above, inductive.",
    faq: [
      { question: "What happens at resonance?", answer: "XL = XC, so they cancel. Z = R (minimum). Current is maximum. The circuit is purely resistive (voltage and current in phase). Energy oscillates between L and C without loss." },
      { question: "What is the phase angle?", answer: "φ = arctan((XL-XC)/R). Positive φ: inductive (current lags voltage). Negative φ: capacitive (current leads voltage). At resonance: φ = 0°." },
      { question: "What determines bandwidth?", answer: "BW = R/L (for series RLC). The Q factor Q = f₀/BW = (1/R)√(L/C). Higher Q means narrower bandwidth and sharper resonance." }
    ],
    seoMeta: { title: "RLC Impedance Calculator", description: "Calculate series RLC circuit impedance.", keywords: "RLC circuit, impedance, reactance, resonance, phase angle" }
  },
  {
    id: "thevenin-equivalent-calculator", name: "Thévenin Equivalent Calculator",
    description: "Calculate the Thévenin equivalent voltage and resistance of a simple circuit.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "V_{Th} = V_s \\cdot \\frac{R_2}{R_1 + R_2}",
    inputs: [
      { id: "Vs", label: "Source Voltage (V)", type: "number", defaultValue: 12 },
      { id: "R1", label: "R₁ (Ω)", type: "number", defaultValue: 4000 },
      { id: "R2", label: "R₂ (Ω)", type: "number", defaultValue: 6000 }
    ],
    outputs: [
      { id: "Vth", label: "Thévenin Voltage", formula: "Vs * R2 / (R1 + R2)", unit: "V" },
      { id: "Rth", label: "Thévenin Resistance", formula: "R1 * R2 / (R1 + R2)", unit: "Ω" }
    ],
    theory: "Thévenin's theorem states that any linear circuit can be replaced by an equivalent voltage source (V_Th) in series with a resistance (R_Th). V_Th is the open-circuit voltage at the terminals. R_Th is the resistance seen from the terminals with sources deactivated.",
    faq: [
      { question: "Why is Thévenin's theorem useful?", answer: "It simplifies complex circuits to a single source and resistor. This makes it easy to analyze how different loads affect the circuit without re-solving the entire network each time." },
      { question: "How do I find V_Th and R_Th?", answer: "V_Th: remove the load and measure/calculate the open-circuit voltage. R_Th: deactivate all sources (short voltage sources, open current sources) and calculate resistance from the terminals." },
      { question: "What about Norton's theorem?", answer: "Norton's equivalent is a current source (I_N = V_Th/R_Th) in parallel with R_Th (= R_N). Thévenin and Norton are interchangeable — use whichever is more convenient." }
    ],
    seoMeta: { title: "Thévenin Equivalent Calculator", description: "Calculate Thévenin equivalent circuit.", keywords: "Thévenin, equivalent circuit, voltage source, resistance, Norton" }
  },
  {
    id: "decibel-calculator", name: "Decibel Calculator",
    description: "Convert power and voltage ratios to decibels.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "dB = 10\\log_{10}\\left(\\frac{P_2}{P_1}\\right) = 20\\log_{10}\\left(\\frac{V_2}{V_1}\\right)",
    inputs: [
      { id: "P1", label: "Reference Power (W)", type: "number", defaultValue: 1 },
      { id: "P2", label: "Measured Power (W)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "dB_power", label: "Power Ratio", formula: "10 * log10(P2 / P1)", unit: "dB" }
    ],
    theory: "The decibel is a logarithmic unit for expressing ratios. 10 dB = 10× power. 20 dB = 100× power. 3 dB = 2× power. The logarithmic scale compresses enormous ranges into manageable numbers — the human ear responds to power levels spanning 12 orders of magnitude (0–120 dB).",
    faq: [
      { question: "Why use decibels?", answer: "1) Compresses huge dynamic ranges. 2) Gains and losses in series simply add in dB. 3) Human perception of loudness and brightness is roughly logarithmic, so dB matches perception." },
      { question: "What are common dB references?", answer: "dBm: power relative to 1 mW. dBW: power relative to 1W. dBV: voltage relative to 1V. dBSPL: sound pressure relative to 20 μPa. dBi: antenna gain relative to isotropic." },
      { question: "Quick dB conversions?", answer: "3 dB = 2×. 6 dB = 4×. 10 dB = 10×. 20 dB = 100×. 30 dB = 1000×. -3 dB = ½. -10 dB = 1/10. Combine: 13 dB = 10 + 3 = 10 × 2 = 20×." }
    ],
    seoMeta: { title: "Decibel Calculator", description: "Convert power ratios to decibels.", keywords: "decibel, dB, power ratio, logarithmic, signal level" }
  },
  {
    id: "capacitor-series-parallel-calculator", name: "Capacitors in Series/Parallel Calculator",
    description: "Calculate equivalent capacitance for series and parallel configurations.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "C_p = C_1+C_2, \\quad \\frac{1}{C_s} = \\frac{1}{C_1}+\\frac{1}{C_2}",
    inputs: [
      { id: "C1_F", label: "Capacitor 1 (F)", type: "number", defaultValue: 1e-6 },
      { id: "C2_F", label: "Capacitor 2 (F)", type: "number", defaultValue: 2e-6 }
    ],
    outputs: [
      { id: "C_parallel", label: "Parallel Total", formula: "C1_F + C2_F", unit: "F" },
      { id: "C_series", label: "Series Total", formula: "C1_F * C2_F / (C1_F + C2_F)", unit: "F" }
    ],
    theory: "Capacitors in parallel add directly (more plate area). Capacitors in series follow the reciprocal rule (like resistors in parallel). Series connection increases voltage rating but decreases total capacitance. Parallel connection increases total capacitance at the same voltage rating.",
    faq: [
      { question: "Why are capacitor rules opposite to resistors?", answer: "Capacitance is proportional to area (parallel adds area) and inversely proportional to distance (series increases effective distance). Resistance is the opposite: proportional to length and inversely proportional to area." },
      { question: "When do you put capacitors in series?", answer: "To increase voltage rating. Two 250V capacitors in series handle 500V (but total C is halved). Also used in voltage multiplier circuits and for impedance matching." },
      { question: "Why put capacitors in parallel?", answer: "To increase total capacitance, to combine different types (electrolytic for bulk energy, ceramic for high-frequency bypassing), and to distribute current in high-ripple applications." }
    ],
    seoMeta: { title: "Capacitors in Series/Parallel Calculator", description: "Calculate equivalent capacitance.", keywords: "capacitor series, capacitor parallel, equivalent capacitance" }
  },
  {
    id: "charge-time-calculator", name: "Charge Time Calculator",
    description: "Calculate time to charge a capacitor to a target voltage through a resistor.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "t = -RC \\ln\\left(1 - \\frac{V_{target}}{V_{supply}}\\right)",
    inputs: [
      { id: "R", label: "Resistance (Ω)", type: "number", defaultValue: 10000 },
      { id: "C_F", label: "Capacitance (F)", type: "number", defaultValue: 100e-6 },
      { id: "V_supply", label: "Supply Voltage (V)", type: "number", defaultValue: 5 },
      { id: "V_target", label: "Target Voltage (V)", type: "number", defaultValue: 3.3 }
    ],
    outputs: [
      { id: "t_charge", label: "Charge Time", formula: "-R * C_F * log(1 - V_target / V_supply)", unit: "s" }
    ],
    theory: "Capacitor voltage during charging follows V(t) = V_s(1 - e^(-t/RC)). Solving for the time to reach V_target: t = -RC·ln(1 - V_target/V_s). The capacitor can never fully reach V_s — it asymptotically approaches it.",
    faq: [
      { question: "Why can't a capacitor fully charge?", answer: "As voltage approaches V_supply, the voltage difference (driving force) approaches zero, so current approaches zero. The capacitor reaches 99.3% in 5τ and 99.99% in ~10τ, but theoretically never reaches 100%." },
      { question: "What is a constant current charger?", answer: "Instead of charging through a resistor (exponential, slow at the end), a constant current source provides linear charging: t = CV/I. This is how lithium batteries are charged (CC-CV method)." },
      { question: "How does this apply to power-on reset?", answer: "Many circuits use RC charging to create a time delay at power-up. The voltage comparator triggers when the capacitor reaches a threshold, ensuring the circuit resets reliably." }
    ],
    seoMeta: { title: "Charge Time Calculator", description: "Calculate RC charging time to target voltage.", keywords: "charge time, RC circuit, capacitor charging, exponential" }
  },
  {
    id: "op-amp-gain-calculator", name: "Op-Amp Gain Calculator",
    description: "Calculate the gain of inverting and non-inverting op-amp configurations.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "A_{inv} = -\\frac{R_f}{R_{in}}, \\quad A_{non} = 1 + \\frac{R_f}{R_{in}}",
    inputs: [
      { id: "Rf", label: "Feedback Resistor Rf (Ω)", type: "number", defaultValue: 100000 },
      { id: "Rin", label: "Input Resistor Rin (Ω)", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "A_inv", label: "Inverting Gain", formula: "-Rf / Rin", unit: "V/V" },
      { id: "A_non", label: "Non-inverting Gain", formula: "1 + Rf / Rin", unit: "V/V" },
      { id: "A_dB", label: "Non-inverting Gain", formula: "20 * log10(1 + Rf / Rin)", unit: "dB" }
    ],
    theory: "Operational amplifiers use negative feedback to set precise gain. Inverting configuration: gain = -Rf/Rin (negative = phase inversion). Non-inverting: gain = 1 + Rf/Rin (always ≥ 1). Both assume infinite open-loop gain and infinite input impedance (ideal op-amp).",
    faq: [
      { question: "What is an ideal op-amp?", answer: "Infinite open-loop gain, infinite input impedance, zero output impedance, infinite bandwidth, and zero offset. Real op-amps approach these but have finite gain (~100 dB), finite bandwidth (GBW ~1–100 MHz), and small offset voltages." },
      { question: "What is gain-bandwidth product?", answer: "GBW is constant for a given op-amp. If GBW = 1 MHz, gain of 10 limits bandwidth to 100 kHz. Gain of 100 limits bandwidth to 10 kHz. Higher gain = lower bandwidth." },
      { question: "When to use inverting vs non-inverting?", answer: "Non-inverting: high input impedance, gain ≥ 1, no phase inversion. Inverting: virtual ground at input (easier summing), gain can be < 1 (attenuator), 180° phase shift." }
    ],
    seoMeta: { title: "Op-Amp Gain Calculator", description: "Calculate op-amp gain for inverting and non-inverting.", keywords: "op-amp, operational amplifier, gain, inverting, non-inverting, feedback" }
  },
  {
    id: "filter-calculator", name: "Filter Calculator",
    description: "Calculate component values for RC and RL low-pass/high-pass filters.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "f_c = \\frac{1}{2\\pi RC}",
    inputs: [
      { id: "fc_target", label: "Target Cutoff Frequency (Hz)", type: "number", defaultValue: 1000 },
      { id: "R", label: "Resistance (Ω)", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "C_needed", label: "Capacitor Needed", formula: "1 / (2 * pi * fc_target * R)", unit: "F" },
      { id: "C_nF", label: "Capacitor Needed", formula: "1 / (2 * pi * fc_target * R) * 1e9", unit: "nF" }
    ],
    theory: "RC filters are the simplest frequency-selective circuits. For a given cutoff frequency and chosen resistance, the required capacitance is C = 1/(2πfcR). Low-pass filters attenuate above fc; high-pass filters attenuate below fc.",
    faq: [
      { question: "How do I choose R?", answer: "For audio: 1kΩ–100kΩ. Too low: excessive current, loading on source. Too high: noise pickup, stray capacitance effects. 10kΩ is a common starting point." },
      { question: "What about higher-order filters?", answer: "Single RC: -20 dB/decade rolloff. Two cascaded: -40 dB/decade (but interaction complicates design). Active filters (Butterworth, Chebyshev, Bessel) provide steeper rolloff with predictable response." },
      { question: "What is the difference between filter types?", answer: "Butterworth: maximally flat passband. Chebyshev: steeper rolloff but ripple in passband. Bessel: best phase response (preserves waveform shape). Elliptic: steepest rolloff but ripple in both bands." }
    ],
    seoMeta: { title: "Filter Calculator", description: "Calculate RC filter component values.", keywords: "filter, RC filter, cutoff frequency, low-pass, high-pass" }
  },
  {
    id: "wavelength-to-frequency-calculator", name: "Wavelength to Frequency Calculator",
    description: "Convert between wavelength and frequency for electromagnetic waves.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "f = \\frac{c}{\\lambda}",
    inputs: [
      { id: "lambda_m", label: "Wavelength (m)", type: "number", defaultValue: 0.125, helpText: "WiFi 2.4 GHz ≈ 0.125 m" }
    ],
    outputs: [
      { id: "f_Hz", label: "Frequency", formula: "2.998e8 / lambda_m", unit: "Hz" },
      { id: "f_GHz", label: "Frequency", formula: "2.998e8 / lambda_m / 1e9", unit: "GHz" }
    ],
    theory: "For electromagnetic waves in free space, wavelength × frequency = speed of light (c ≈ 3 × 10⁸ m/s). Longer wavelength = lower frequency. AM radio: ~300m wavelength. Visible light: ~400–700 nm. X-rays: ~0.01–10 nm.",
    faq: [
      { question: "What are the EM spectrum bands?", answer: "Radio: >1mm. Microwave: 1mm–1m. Infrared: 700nm–1mm. Visible: 380–700nm. UV: 10–380nm. X-ray: 0.01–10nm. Gamma: <0.01nm. All travel at c in vacuum." },
      { question: "Why does wavelength matter for antennas?", answer: "Antenna size is typically λ/4 to λ/2 for resonance. At 2.4 GHz (λ=12.5cm), antennas are ~3–6 cm. At 900 MHz (λ=33cm), antennas are ~8–17 cm. Lower frequencies need larger antennas." },
      { question: "Does wavelength change in a medium?", answer: "Yes. In glass (n=1.5), wavelength shrinks by factor n: λ_glass = λ_vacuum/1.5. Frequency stays the same. Speed = c/n. This is why light bends (refracts) at interfaces." }
    ],
    seoMeta: { title: "Wavelength to Frequency Calculator", description: "Convert between wavelength and frequency.", keywords: "wavelength, frequency, speed of light, electromagnetic, conversion" }
  },
  {
    id: "buck-converter-calculator", name: "Buck Converter Calculator",
    description: "Calculate output voltage and inductor ripple for a buck converter.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "V_{out} = D \\cdot V_{in}",
    inputs: [
      { id: "Vin", label: "Input Voltage (V)", type: "number", defaultValue: 12 },
      { id: "Vout_target", label: "Output Voltage (V)", type: "number", defaultValue: 3.3 },
      { id: "f_sw", label: "Switching Frequency (Hz)", type: "number", defaultValue: 500000 },
      { id: "I_out", label: "Output Current (A)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "D", label: "Duty Cycle", formula: "Vout_target / Vin", unit: "" },
      { id: "L_min", label: "Min Inductance (CCM)", formula: "(Vin - Vout_target) * Vout_target / (2 * Vin * f_sw * I_out * 0.3)", unit: "H" }
    ],
    theory: "A buck converter steps down voltage using a switch, diode, and inductor. The output voltage equals duty cycle × input voltage. The inductor smooths current; the capacitor smooths voltage. Buck converters achieve 85–98% efficiency, far better than linear regulators.",
    faq: [
      { question: "Why use a buck converter instead of an LDO?", answer: "Efficiency. An LDO dropping 12V to 3.3V wastes 72.5% as heat. A buck converter is 85–95% efficient. The efficiency advantage grows with larger Vin-Vout difference." },
      { question: "What determines switching frequency?", answer: "Higher fsw allows smaller L and C (smaller, cheaper). But switching losses increase with frequency. Typical: 100 kHz–2 MHz. Higher-frequency converters use GaN FETs for lower switching losses." },
      { question: "What is CCM vs DCM?", answer: "CCM (continuous conduction): inductor current never reaches zero. DCM: current reaches zero each cycle. CCM is preferred for higher loads (easier to filter, predict). DCM occurs at light loads." }
    ],
    seoMeta: { title: "Buck Converter Calculator", description: "Calculate buck converter duty cycle and components.", keywords: "buck converter, step-down, duty cycle, switching regulator, inductor" }
  },
  {
    id: "antenna-gain-calculator", name: "Antenna Gain Calculator",
    description: "Calculate antenna gain from beamwidth.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "G \\approx \\frac{41253}{\\theta_H \\cdot \\theta_V}",
    inputs: [
      { id: "theta_H", label: "Horizontal Beamwidth (°)", type: "number", defaultValue: 30 },
      { id: "theta_V", label: "Vertical Beamwidth (°)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "G_linear", label: "Gain (linear)", formula: "41253 / (theta_H * theta_V)", unit: "" },
      { id: "G_dBi", label: "Gain", formula: "10 * log10(41253 / (theta_H * theta_V))", unit: "dBi" }
    ],
    theory: "Antenna gain measures how well an antenna concentrates energy in a particular direction compared to an isotropic radiator. Narrower beamwidths correspond to higher gain. The approximation 41,253/(θH×θV) works well for typical directional antennas.",
    faq: [
      { question: "What is dBi vs dBd?", answer: "dBi: gain relative to an isotropic (point source) antenna. dBd: gain relative to a half-wave dipole. dBi = dBd + 2.15. A dipole has 2.15 dBi = 0 dBd." },
      { question: "Typical antenna gains?", answer: "Rubber duck: 2 dBi. Yagi (TV): 10–15 dBi. Parabolic dish: 20–45 dBi. Sector (cellular): 12–18 dBi. Phased array radar: 30–45 dBi." },
      { question: "Can an antenna create energy?", answer: "No. Antenna gain comes from focusing energy in one direction at the expense of others. Total radiated power is the same; gain just redistributes it spatially. An isotropic antenna has uniform 0 dBi gain in all directions." }
    ],
    seoMeta: { title: "Antenna Gain Calculator", description: "Calculate antenna gain from beamwidth.", keywords: "antenna gain, beamwidth, dBi, directivity, radiation pattern" }
  },
  {
    id: "pcb-trace-width-calculator", name: "PCB Trace Width Calculator",
    description: "Calculate the minimum PCB trace width for a given current (IPC-2221).",
    category: "physics", subcategory: "electronics",
    scientificFormula: "W = \\frac{I}{k \\cdot \\Delta T^{0.44} \\cdot t^{0.725}}",
    inputs: [
      { id: "I_amps", label: "Current (A)", type: "number", defaultValue: 3 },
      { id: "t_oz", label: "Copper Weight (oz)", type: "number", defaultValue: 1, helpText: "1 oz = 35 μm = 1.4 mil" },
      { id: "dT", label: "Temperature Rise (°C)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "area", label: "Cross-section Area", formula: "(I_amps / (0.048 * dT^0.44))^(1/0.725)", unit: "mil²" },
      { id: "width_mil", label: "Trace Width", formula: "(I_amps / (0.048 * dT^0.44))^(1/0.725) / (t_oz * 1.378)", unit: "mil" },
      { id: "width_mm", label: "Trace Width", formula: "(I_amps / (0.048 * dT^0.44))^(1/0.725) / (t_oz * 1.378) * 0.0254", unit: "mm" }
    ],
    theory: "IPC-2221 provides empirical formulas for PCB trace width based on current, copper thickness, and allowable temperature rise. External (outer) layer traces can carry more current due to better convection cooling. The formula accounts for the thermal relationship between I²R heating and trace geometry.",
    faq: [
      { question: "What is 1 oz copper?", answer: "1 oz/ft² = 35 μm (1.4 mil) thick copper. Standard for most PCBs. 2 oz (70 μm) for power applications. Heavy copper: 4–20 oz for high-current busbars." },
      { question: "How wide for 1A?", answer: "1A at 10°C rise, 1 oz copper: ~10 mil (0.25mm) external trace. For internal layers, use ~2× wider. Always verify with IPC-2221 tables and consider worst-case ambient temperature." },
      { question: "What about thermal vias?", answer: "Thermal vias transfer heat from inner layers to outer layers for better dissipation. They also carry current between layers. A typical 10-mil via can handle ~1A, but arrays of vias are used for higher currents." }
    ],
    seoMeta: { title: "PCB Trace Width Calculator", description: "Calculate PCB trace width for current carrying.", keywords: "PCB trace width, IPC-2221, copper, current, temperature rise" }
  },
  {
    id: "power-supply-ripple-calculator", name: "Power Supply Ripple Calculator",
    description: "Calculate capacitor ripple voltage in a full-wave rectifier.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "V_{ripple} = \\frac{I_{load}}{2fC}",
    inputs: [
      { id: "I_load", label: "Load Current (A)", type: "number", defaultValue: 1 },
      { id: "f_line", label: "Line Frequency (Hz)", type: "number", defaultValue: 60 },
      { id: "C_F", label: "Filter Capacitor (F)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "V_ripple", label: "Ripple Voltage (full-wave)", formula: "I_load / (2 * f_line * C_F)", unit: "V" },
      { id: "V_ripple_hw", label: "Ripple Voltage (half-wave)", formula: "I_load / (f_line * C_F)", unit: "V" }
    ],
    theory: "After rectification, a filter capacitor smooths the pulsating DC. During the diode off-time, the capacitor discharges through the load, creating ripple. More capacitance, higher frequency, or lower current all reduce ripple. A voltage regulator after the filter removes remaining ripple.",
    faq: [
      { question: "What is acceptable ripple?", answer: "For most linear regulators, input ripple should keep voltage above dropout. For audio: <1% ripple for preamps, <5% for power amps. Sensitive circuits need <1 mV ripple (use switching regulators with LC filters)." },
      { question: "Full-wave vs half-wave?", answer: "Full-wave (bridge rectifier) has half the ripple of half-wave because it conducts on both half-cycles. The ripple frequency is 2× line frequency (120 Hz for 60 Hz line), making filtering easier." },
      { question: "How big should the capacitor be?", answer: "For 1A load, 10°C ripple, 60 Hz full-wave: C = 1/(2×60×1) ≈ 8,333 μF. Common values: 1,000–10,000 μF. Use the next larger standard value. Ensure voltage rating exceeds peak rectified voltage." }
    ],
    seoMeta: { title: "Power Supply Ripple Calculator", description: "Calculate capacitor ripple in rectifier circuits.", keywords: "ripple voltage, filter capacitor, rectifier, power supply, smoothing" }
  },
  {
    id: "mosfet-power-loss-calculator", name: "MOSFET Power Loss Calculator",
    description: "Calculate conduction and switching losses in a MOSFET.",
    category: "physics", subcategory: "electronics",
    scientificFormula: "P_{cond} = I_D^2 \\cdot R_{DS(on)}, \\quad P_{sw} = \\frac{1}{2}V_{DS} I_D (t_r + t_f) f",
    inputs: [
      { id: "I_D", label: "Drain Current (A)", type: "number", defaultValue: 10 },
      { id: "Rdson", label: "RDS(on) (Ω)", type: "number", defaultValue: 0.01 },
      { id: "Vds", label: "Drain-Source Voltage (V)", type: "number", defaultValue: 48 },
      { id: "tr_ns", label: "Rise Time (ns)", type: "number", defaultValue: 20 },
      { id: "tf_ns", label: "Fall Time (ns)", type: "number", defaultValue: 15 },
      { id: "f_sw", label: "Switching Frequency (Hz)", type: "number", defaultValue: 100000 }
    ],
    outputs: [
      { id: "P_cond", label: "Conduction Loss", formula: "I_D^2 * Rdson", unit: "W" },
      { id: "P_sw", label: "Switching Loss", formula: "0.5 * Vds * I_D * (tr_ns + tf_ns) * 1e-9 * f_sw", unit: "W" },
      { id: "P_total", label: "Total Loss", formula: "I_D^2 * Rdson + 0.5 * Vds * I_D * (tr_ns + tf_ns) * 1e-9 * f_sw", unit: "W" }
    ],
    theory: "MOSFET losses have two components: conduction loss (I²×RDS(on)) when fully on, and switching loss (energy dissipated during on/off transitions). Switching loss scales with frequency, which is why high-frequency converters use low-capacitance MOSFETs or GaN FETs.",
    faq: [
      { question: "How do I reduce MOSFET losses?", answer: "Conduction: use lower RDS(on) MOSFET (parallel MOSFETs halve RDS(on)). Switching: use faster MOSFETs, lower frequency, or GaN/SiC devices. Gate driver: faster rise/fall reduces transition time." },
      { question: "What is RDS(on)?", answer: "On-state drain-source resistance. Modern MOSFETs: 1–100 mΩ. It increases with temperature (~1.5× at 100°C vs 25°C) and voltage rating. Low-voltage MOSFETs have the lowest RDS(on)." },
      { question: "GaN vs Si MOSFETs?", answer: "GaN FETs have ~10× lower switching losses due to smaller gate charge and faster switching. They enable >1 MHz operation with >95% efficiency. Cost is higher but shrinking rapidly." }
    ],
    seoMeta: { title: "MOSFET Power Loss Calculator", description: "Calculate MOSFET conduction and switching losses.", keywords: "MOSFET, power loss, conduction, switching, RDS(on)" }
  }
];
