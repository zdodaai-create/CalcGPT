import { CalculatorConfig } from "./calculator-types";

export const QUANTUM_CALCULATORS: CalculatorConfig[] = [
  {
    id: "bohr-model-calculator", name: "Bohr Model Calculator",
    description: "Calculate the orbital radius and energy level of an electron in a hydrogen-like atom using the Bohr model.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "r_n = \\frac{n^2 a_0}{Z}, \\quad E_n = -E_0 \\frac{Z^2}{n^2}",
    inputs: [
      { id: "n_level", label: "Principal Quantum Number (n)", type: "number", defaultValue: 1, helpText: "Positive integer: 1, 2, 3..." },
      { id: "Z_num", label: "Atomic Number (Z)", type: "number", defaultValue: 1, helpText: "Hydrogen = 1, Helium+ = 2" }
    ],
    outputs: [
      { id: "radius", label: "Orbital Radius", formula: "(n_level^2 * 5.29177e-11) / Z_num", unit: "m" },
      { id: "radius_pm", label: "Orbital Radius", formula: "((n_level^2 * 5.29177e-11) / Z_num) * 1e12", unit: "pm" },
      { id: "energy_ev", label: "Energy Level", formula: "-13.60569 * (Z_num^2) / (n_level^2)", unit: "eV" },
      { id: "energy_j", label: "Energy Level", formula: "(-13.60569 * (Z_num^2) / (n_level^2)) * 1.60218e-19", unit: "J" }
    ],
    theory: "Niels Bohr's 1913 model of the atom introduced quantized electron orbits. It successfully predicted the spectral lines of hydrogen. Although superseded by modern quantum mechanics, it remains a vital stepping stone. The radius scales as n²/Z, and energy scales as -Z²/n².",
    faq: [
      { question: "What are the limitations of the Bohr model?", answer: "It fails for multi-electron atoms (cannot explain electron-electron repulsion), violates the Heisenberg uncertainty principle by assigning precise orbits, and cannot explain the Zeeman effect or fine structure of spectral lines." },
      { question: "What is the Bohr radius?", answer: "The Bohr radius (a₀ ≈ 5.29177 × 10⁻¹¹ m) is the most probable distance between the proton and electron in a ground-state hydrogen atom." },
      { question: "What is a hydrogen-like atom?", answer: "An atom with only one electron orbiting a nucleus of charge Z·e. Examples include neutral Hydrogen (Z=1), singly ionized Helium (He+, Z=2), and doubly ionized Lithium (Li2+, Z=3)." }
    ],
    seoMeta: { title: "Bohr Model Calculator — Hydrogen Atom Energy & Radius", description: "Calculate electron orbital radius and energy levels using the Bohr model.", keywords: "Bohr model, hydrogen atom, orbital radius, energy level, Bohr radius" }
  },
  {
    id: "compton-scattering-calculator", name: "Compton Scattering Calculator",
    description: "Calculate the shift in wavelength of an X-ray or gamma-ray photon when scattered by an electron.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\Delta \\lambda = \\lambda' - \\lambda = \\lambda_c (1 - \\cos\\theta)",
    inputs: [
      { id: "lambda_pm", label: "Initial Wavelength (pm)", type: "number", defaultValue: 10 },
      { id: "theta_deg", label: "Scattering Angle (°)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "delta_lambda", label: "Wavelength Shift", formula: "2.42631 * (1 - cos(theta_deg * pi / 180))", unit: "pm" },
      { id: "final_lambda", label: "Final Wavelength", formula: "lambda_pm + (2.42631 * (1 - cos(theta_deg * pi / 180)))", unit: "pm" },
      { id: "energy_lost_pct", label: "Energy Lost by Photon", formula: "(1 - (lambda_pm / (lambda_pm + (2.42631 * (1 - cos(theta_deg * pi / 180)))))) * 100", unit: "%" }
    ],
    theory: "Compton scattering, discovered by Arthur Compton in 1923, demonstrated the particle nature of light. When a high-energy photon collides with a stationary electron, it transfers momentum to the electron and emerges with lower energy (longer wavelength). The shift depends only on the scattering angle and the Compton wavelength of the electron (λ_c ≈ 2.4263 pm).",
    faq: [
      { question: "Why does Compton scattering prove light is a particle?", answer: "Classical wave theory predicts that scattered light should have the same wavelength as the incident light. The observed wavelength shift can only be explained by treating the photon as a particle carrying discrete momentum (h/λ) that undergoes a billiard-ball collision with the electron." },
      { question: "At what angle is the shift maximized?", answer: "At 180° (backscattering), where cos(180°) = -1, the wavelength shift is exactly 2λ_c ≈ 4.85 pm. At 0° (no deflection), the shift is zero." },
      { question: "Is Compton scattering dangerous?", answer: "It is the dominant interaction mechanism for middle-energy gamma rays and high-energy X-rays in matter, including human tissue. It leads to secondary radiation dose (scattered photons and recoil electrons) and is a key concern in radiation shielding." }
    ],
    seoMeta: { title: "Compton Scattering Calculator — Wavelength Shift", description: "Calculate Compton wavelength shift and final wavelength of scattered photons.", keywords: "Compton scattering, wavelength shift, photon, electron, quantum collision" }
  },
  {
    id: "compton-wavelength-calculator", name: "Compton Wavelength Calculator",
    description: "Calculate the Compton wavelength for any particle given its mass.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\lambda_c = \\frac{h}{m c}",
    inputs: [
      { id: "mass_kg", label: "Particle Mass (kg)", type: "number", defaultValue: 9.1093837e-31, helpText: "Electron: 9.109e-31 kg, Proton: 1.673e-27 kg" }
    ],
    outputs: [
      { id: "compton_lambda", label: "Compton Wavelength", formula: "6.62607e-34 / (mass_kg * 299792458)", unit: "m" },
      { id: "compton_pm", label: "Compton Wavelength", formula: "(6.62607e-34 / (mass_kg * 299792458)) * 1e12", unit: "pm" }
    ],
    theory: "The Compton wavelength of a particle is a fundamental quantum property equal to the wavelength of a photon whose energy is equal to the rest mass-energy of the particle (hν = mc²). It represents a fundamental limitation on measuring a particle's position due to quantum field effects.",
    faq: [
      { question: "What is the physical meaning of Compton wavelength?", answer: "It is the scale at which quantum field theory and particle creation become important. If you try to localize a particle to a volume smaller than its Compton wavelength, the energy uncertainty is high enough to create virtual particle-antiparticle pairs." },
      { question: "What is the reduced Compton wavelength?", answer: "It is the Compton wavelength divided by 2π (hbar / mc). It is the characteristic length scale in relativistic quantum mechanics (e.g., in the Klein-Gordon and Dirac equations)." },
      { question: "Why is the electron Compton wavelength important?", answer: "The electron Compton wavelength (λ_c ≈ 2.426 × 10⁻¹² m) appears in the Compton scattering formula and is closely related to the Bohr radius and the classical electron radius via the fine-structure constant." }
    ],
    seoMeta: { title: "Compton Wavelength Calculator", description: "Calculate the Compton wavelength for any elementary particle.", keywords: "Compton wavelength, rest mass, Planck constant, relativistic quantum mechanics" }
  },
  {
    id: "curie-constant-calculator", name: "Curie Constant Calculator",
    description: "Calculate the Curie constant of a paramagnetic material.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "C = \\frac{\\mu_0 n \\mu_B^2 g^2 J(J+1)}{3 k_B}",
    inputs: [
      { id: "n_density", label: "Number Density (m⁻³)", type: "number", defaultValue: 1e28 },
      { id: "J_val", label: "Total Angular Momentum Quantum Number J", type: "number", defaultValue: 1.5, helpText: "Typically integer or half-integer" },
      { id: "g_factor", label: "Landé g-factor", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "curie_C", label: "Curie Constant", formula: "(1.256637e-6 * n_density * (9.27401e-24)^2 * (g_factor^2) * J_val * (J_val + 1)) / (3 * 1.380649e-23)", unit: "K" }
    ],
    theory: "Curie's law states that the magnetic susceptibility of a paramagnetic material is inversely proportional to its absolute temperature: χ = C / T. The Curie constant C is calculated quantum-mechanically using the angular momentum J and the Landé g-factor of the magnetic ions.",
    faq: [
      { question: "What is the Landé g-factor?", answer: "A dimensionless value that characterizes the magnetic moment and gyromagnetic ratio of an atom, nucleus, or electron. For a free electron, g ≈ 2." },
      { question: "What happens when temperature decreases?", answer: "According to Curie's law, susceptibility increases as temperature drops. The thermal agitation that randomizes magnetic moments weakens, allowing the moments to align more easily with an external magnetic field." },
      { question: "When does Curie's law fail?", answer: "At very low temperatures or high magnetic fields, where the magnetic moments saturate (all align), or near the Curie temperature where ferromagnetic/antiferromagnetic ordering occurs." }
    ],
    seoMeta: { title: "Curie Constant Calculator — Paramagnetism", description: "Calculate the Curie constant of a paramagnetic material using quantum mechanics.", keywords: "Curie constant, Curie's law, paramagnetism, Lande g-factor, angular momentum" }
  },
  {
    id: "de-broglie-wavelength-calculator", name: "De Broglie Wavelength Calculator",
    description: "Calculate the de Broglie wavelength of a moving particle.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\lambda = \\frac{h}{p} = \\frac{h}{m v}",
    inputs: [
      { id: "mass_kg", label: "Particle Mass (kg)", type: "number", defaultValue: 9.1093837e-31, helpText: "Electron: 9.109e-31 kg" },
      { id: "vel_ms", label: "Velocity (m/s)", type: "number", defaultValue: 1000000 }
    ],
    outputs: [
      { id: "wavelength", label: "De Broglie Wavelength", formula: "6.62607e-34 / (mass_kg * vel_ms)", unit: "m" },
      { id: "wavelength_nm", label: "De Broglie Wavelength", formula: "(6.62607e-34 / (mass_kg * vel_ms)) * 1e9", unit: "nm" }
    ],
    theory: "In 1924, Louis de Broglie proposed that all matter exhibits wave-like behavior. The wavelength of a particle is inversely proportional to its momentum. This duality is fundamental to quantum mechanics and is exploited in electron microscopes, where short wavelengths allow high resolution.",
    faq: [
      { question: "Do macroscopic objects have wavelengths?", answer: "Yes, but because their mass is enormous compared to Planck's constant, their wavelengths are inconceivably small (e.g., a baseball has a wavelength of ~10⁻³⁴ meters), making wave effects completely unobservable." },
      { question: "How does de Broglie wavelength affect microscopy?", answer: "Light microscopes are limited by the wavelength of visible light (~400–700 nm). Electrons accelerated to high speeds have de Broglie wavelengths of less than 0.1 nm, allowing electron microscopes to resolve atomic details." },
      { question: "Is this formula valid at relativistic speeds?", answer: "Only if you use relativistic momentum: p = γmv, where γ = 1 / sqrt(1 - v²/c²). For speeds above ~10% c, the relativistic momentum should be used." }
    ],
    seoMeta: { title: "De Broglie Wavelength Calculator — Wave-Particle Duality", description: "Calculate the de Broglie wavelength of any moving particle.", keywords: "de Broglie wavelength, wave-particle duality, electron wavelength, quantum mechanics" }
  },
  {
    id: "fermi-level-calculator", name: "Fermi Level Calculator",
    description: "Calculate the Fermi energy of a free electron gas (metals) at 0 K.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "E_F = \\frac{\\hbar^2}{2m_e} \\left(3\\pi^2 n\\right)^{2/3}",
    inputs: [
      { id: "n_density", label: "Electron Number Density (m⁻³)", type: "number", defaultValue: 8.47e28, helpText: "Copper: ~8.47e28 m⁻³" }
    ],
    outputs: [
      { id: "EF_j", label: "Fermi Energy", formula: "((1.05457e-34)^2 / (2 * 9.10938e-31)) * (3 * pi^2 * n_density)^(2/3)", unit: "J" },
      { id: "EF_ev", label: "Fermi Energy", formula: "(((1.05457e-34)^2 / (2 * 9.10938e-31)) * (3 * pi^2 * n_density)^(2/3)) / 1.60218e-19", unit: "eV" },
      { id: "fermi_temp", label: "Fermi Temperature", formula: "(((1.05457e-34)^2 / (2 * 9.10938e-31)) * (3 * pi^2 * n_density)^(2/3)) / 1.38065e-23", unit: "K" }
    ],
    theory: "The Fermi energy is the energy of the highest occupied quantum state in a system of non-interacting fermions (such as electrons in a metal) at absolute zero temperature. It is a direct consequence of the Pauli exclusion principle. For copper, the Fermi energy is about 7.0 eV, which corresponds to a Fermi temperature of over 80,000 K.",
    faq: [
      { question: "What is the Pauli exclusion principle?", answer: "A quantum mechanical principle stating that no two identical fermions (particles with half-integer spin) can occupy the same quantum state simultaneously." },
      { question: "What is Fermi temperature?", answer: "The temperature at which thermal energy (kT) equals the Fermi energy. Below the Fermi temperature, the electron gas is 'degenerate,' and its properties are dominated by quantum mechanics rather than thermal motion." },
      { question: "What is the Fermi velocity?", answer: "The velocity of electrons at the Fermi energy. Even at absolute zero, electrons move at enormous speeds (typically ~10⁶ m/s) because they are forced into high-energy states by the exclusion principle." }
    ],
    seoMeta: { title: "Fermi Level Calculator — Fermi Energy in Metals", description: "Calculate the Fermi energy and Fermi temperature of a free electron gas.", keywords: "Fermi level, Fermi energy, free electron gas, copper, Pauli exclusion" }
  },
  {
    id: "frequency-of-light-calculator", name: "Frequency of Light Calculator",
    description: "Convert between wavelength, frequency, and photon energy of light.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "f = \\frac{c}{\\lambda}, \\quad E = h f",
    inputs: [
      { id: "wavelength_nm", label: "Wavelength (nm)", type: "number", defaultValue: 550, helpText: "Green light ≈ 550 nm" }
    ],
    outputs: [
      { id: "frequency_hz", label: "Frequency", formula: "299792458 / (wavelength_nm * 1e-9)", unit: "Hz" },
      { id: "frequency_thz", label: "Frequency", formula: "(299792458 / (wavelength_nm * 1e-9)) / 1e12", unit: "THz" },
      { id: "energy_j", label: "Photon Energy", formula: "6.62607e-34 * (299792458 / (wavelength_nm * 1e-9))", unit: "J" },
      { id: "energy_ev", label: "Photon Energy", formula: "(6.62607e-34 * (299792458 / (wavelength_nm * 1e-9))) / 1.60218e-19", unit: "eV" }
    ],
    theory: "Light behaves as both a wave and a stream of discrete energy packets called photons. The wavelength and frequency are related by the speed of light (c = f·λ). The energy of each photon is proportional to its frequency (E = h·f) via Planck's constant.",
    faq: [
      { question: "What is the visible light spectrum?", answer: "Visible light has wavelengths from approximately 380 nm (violet, highest energy/frequency) to 750 nm (red, lowest energy/frequency)." },
      { question: "Why does frequency determine color?", answer: "Wavelength changes when light passes through different media (like water or glass) because the speed of light changes. However, frequency remains constant, which is why color perception is fundamentally linked to frequency." },
      { question: "What is a photon?", answer: "The quantum of electromagnetic radiation. It is an elementary particle with zero rest mass and no electric charge that travels at the speed of light in vacuum." }
    ],
    seoMeta: { title: "Frequency of Light Calculator — Energy & Wavelength", description: "Convert wavelength to frequency and photon energy in eV/Joules.", keywords: "frequency of light, photon energy, wavelength, Planck constant, speed of light" }
  },
  {
    id: "heisenbergs-uncertainty-principle-calculator", name: "Heisenberg's Uncertainty Principle Calculator",
    description: "Calculate the minimum uncertainty in position or momentum.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}",
    inputs: [
      { id: "delta_x", label: "Position Uncertainty Δx (m)", type: "number", defaultValue: 1e-10, helpText: "Atomic scale: 10⁻¹⁰ m (1 Å)" }
    ],
    outputs: [
      { id: "delta_p", label: "Min Momentum Uncertainty Δp", formula: "1.05457e-34 / (2 * delta_x)", unit: "kg·m/s" },
      { id: "min_vel_uncertainty_electron", label: "Min Velocity Uncertainty (Electron)", formula: "(1.05457e-34 / (2 * delta_x)) / 9.10938e-31", unit: "m/s" }
    ],
    theory: "Formulated by Werner Heisenberg in 1927, this principle states that it is physically impossible to simultaneously measure the precise position and momentum of a particle. The more precisely one is known, the less precisely the other can be known. This is a fundamental property of wave-like systems, not a limitation of measurement instruments.",
    faq: [
      { question: "Why is the uncertainty principle fundamental?", answer: "In quantum mechanics, particles behave like waves. A well-defined position requires combining many waves of different wavelengths (momentum), which increases momentum uncertainty. Conversely, a pure single-wavelength wave has a well-defined momentum but is infinitely spread out in space." },
      { question: "Does this affect macroscopic objects?", answer: "Yes, but because hbar is extremely small (~10⁻³⁴ J·s), the minimum uncertainty in macroscopic objects is completely unnoticeable." },
      { question: "What is the energy-time uncertainty principle?", answer: "A related form of the principle: ΔE·Δt ≥ hbar/2. It implies that a state that lives for a short time (Δt) must have an uncertainty in its energy (ΔE), leading to the natural line width of atomic transitions." }
    ],
    seoMeta: { title: "Heisenberg's Uncertainty Principle Calculator", description: "Calculate the minimum quantum uncertainty in position, momentum, or velocity.", keywords: "Heisenberg uncertainty principle, quantum mechanics, position uncertainty, wave mechanics" }
  },
  {
    id: "hydrogen-energy-levels-calculator", name: "Hydrogen Energy Levels Calculator",
    description: "Calculate the energy levels and electron transition wavelengths of hydrogen.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "E_n = -\\frac{13.6}{n^2}\\text{ eV}, \\quad \\Delta E = E_{high} - E_{low}",
    inputs: [
      { id: "n_initial", label: "Initial Energy Level (n_initial)", type: "number", defaultValue: 3, helpText: "Integer value" },
      { id: "n_final", label: "Final Energy Level (n_final)", type: "number", defaultValue: 2, helpText: "Integer value" }
    ],
    outputs: [
      { id: "E_init", label: "Initial Energy", formula: "-13.60569 / (n_initial^2)", unit: "eV" },
      { id: "E_fin", label: "Final Energy", formula: "-13.60569 / (n_final^2)", unit: "eV" },
      { id: "dE_ev", label: "Photon Energy (ΔE)", formula: "abs((-13.60569 / (n_initial^2)) - (-13.60569 / (n_final^2)))", unit: "eV" },
      { id: "lambda_nm", label: "Transition Wavelength", formula: "1239.84 / abs((-13.60569 / (n_initial^2)) - (-13.60569 / (n_final^2)))", unit: "nm" }
    ],
    theory: "The energy levels of a hydrogen atom are quantized. When an electron falls from a higher energy orbit to a lower one, it emits a photon with an energy equal to the difference (ΔE = E_init - E_fin). Transitions to n=1 produce the UV Lyman series; transitions to n=2 produce the visible Balmer series; transitions to n=3 produce the IR Paschen series.",
    faq: [
      { question: "What is the Balmer series?", answer: "Transitions ending at n=2. The visible red line of hydrogen (H-alpha, 656.3 nm) is the n=3 to n=2 transition, which is prominent in astronomical nebulae." },
      { question: "What is the ionization energy of hydrogen?", answer: "13.6 eV. This is the energy required to lift an electron from the ground state (n=1) to an infinite distance (n=∞), completely removing it from the proton." },
      { question: "Why are the energy levels negative?", answer: "By convention, zero energy is defined as a free, stationary electron far from the proton. A bound electron has negative energy, representing a stable, attractive potential well." }
    ],
    seoMeta: { title: "Hydrogen Energy Levels Calculator — Spectral Lines", description: "Calculate hydrogen electron energy levels and transition emission wavelengths.", keywords: "hydrogen energy levels, Balmer series, Lyman series, spectral lines, quantum transition" }
  },
  {
    id: "magnetic-moment-calculator", name: "Magnetic Moment Calculator",
    description: "Calculate the orbital magnetic dipole moment of a circulating electron.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\mu = \\frac{e}{2m_e} L = I \\cdot A",
    inputs: [
      { id: "n_level", label: "Orbital Quantum Number (n)", type: "number", defaultValue: 1, helpText: "Usually 1, 2, 3..." }
    ],
    outputs: [
      { id: "mag_moment", label: "Orbital Magnetic Moment", formula: "n_level * 9.27401e-24", unit: "J/T (A·m²)" },
      { id: "bohr_magnetons", label: "Bohr Magnetons", formula: "n_level", unit: "μ_B" }
    ],
    theory: "An electron orbiting a nucleus behaves like a tiny current loop, producing a magnetic dipole moment. Quantum-mechanically, the orbital angular momentum is quantized in units of hbar, which means the magnetic moment is quantized in units of the Bohr magneton: μ_B = e·hbar / (2m_e) ≈ 9.274 × 10⁻²⁴ J/T.",
    faq: [
      { question: "What is a Bohr Magneton?", answer: "The Bohr magneton (μ_B) is a physical constant that represents the natural unit of the magnetic dipole moment of an electron due to either its orbital angular momentum or its spin." },
      { question: "What about electron spin magnetic moment?", answer: "An electron also has an intrinsic spin magnetic moment, which is approximately 1 Bohr magneton: μ_s ≈ -g_s * μ_B * S where g_s ≈ 2 and S = 1/2, so μ_s ≈ 1 μ_B." },
      { question: "Why do some atoms have zero magnetic moment?", answer: "In atoms with completely filled electron shells, the magnetic moments of the individual electrons point in opposite directions and cancel out, resulting in zero net magnetic moment." }
    ],
    seoMeta: { title: "Orbital Magnetic Moment Calculator", description: "Calculate orbital magnetic dipole moment of an electron.", keywords: "magnetic moment, Bohr magneton, orbital angular momentum, quantum magnetism" }
  },
  {
    id: "photoelectric-effect-calculator", name: "Photoelectric Effect Calculator",
    description: "Calculate the maximum kinetic energy and velocity of photoelectrons emitted from a metal surface.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "K_{max} = h f - \\Phi = \\frac{h c}{\\lambda} - \\Phi",
    inputs: [
      { id: "wavelength_nm", label: "Incident Light Wavelength (nm)", type: "number", defaultValue: 300, helpText: "UV light ≈ 300 nm" },
      { id: "work_function_ev", label: "Metal Work Function (eV)", type: "number", defaultValue: 2.3, helpText: "Sodium: 2.3 eV, Potassium: 2.29 eV, Gold: 5.1 eV" }
    ],
    outputs: [
      { id: "photon_energy_ev", label: "Photon Energy", formula: "1239.84 / wavelength_nm", unit: "eV" },
      { id: "kmax_ev", label: "Max Kinetic Energy", formula: "(1239.84 / wavelength_nm) - work_function_ev", unit: "eV" },
      { id: "kmax_j", label: "Max Kinetic Energy", formula: "((1239.84 / wavelength_nm) - work_function_ev) * 1.60218e-19", unit: "J" },
      { id: "max_vel", label: "Max Photoelectron Velocity", formula: "sqrt(2 * max(0, ((1239.84 / wavelength_nm) - work_function_ev) * 1.60218e-19) / 9.10938e-31)", unit: "m/s" },
      { id: "threshold_wavelength", label: "Threshold Wavelength", formula: "1239.84 / work_function_ev", unit: "nm" }
    ],
    theory: "Albert Einstein explained the photoelectric effect in 1905, proposing that light is composed of localized packets of energy (photons). If a photon has more energy than the binding energy of the electron (work function Φ), it can eject the electron. Any remaining energy becomes the kinetic energy of the electron. This discovery earned Einstein the 1921 Nobel Prize.",
    faq: [
      { question: "Why does wave theory fail for this effect?", answer: "Classical wave theory predicts that increasing light intensity (brightness) should increase the energy of emitted electrons. Instead, experiment shows that electron energy depends only on frequency (color), and increasing brightness only increases the *number* of emitted electrons." },
      { question: "What is the threshold frequency?", answer: "The minimum frequency of light required to eject electrons (f_0 = Φ/h). Below this threshold, no electrons are emitted, no matter how bright the light is." },
      { question: "What is the work function?", answer: "The minimum energy required to remove an electron from the surface of a metal. Clean metals typically have work functions between 2 and 5 eV." }
    ],
    seoMeta: { title: "Photoelectric Effect Calculator", description: "Calculate photoelectron kinetic energy, velocity, and threshold wavelength.", keywords: "photoelectric effect, work function, Einstein, photon, quantum threshold" }
  },
  {
    id: "photon-energy-calculator", name: "Photon Energy Calculator",
    description: "Calculate the energy and momentum of a photon given its wavelength or frequency.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "E = h f = \\frac{h c}{\\lambda}, \\quad p = \\frac{E}{c} = \\frac{h}{\\lambda}",
    inputs: [
      { id: "wavelength_nm", label: "Wavelength (nm)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "energy_j", label: "Photon Energy", formula: "6.62607e-34 * 299792458 / (wavelength_nm * 1e-9)", unit: "J" },
      { id: "energy_ev", label: "Photon Energy", formula: "(6.62607e-34 * 299792458 / (wavelength_nm * 1e-9)) / 1.60218e-19", unit: "eV" },
      { id: "momentum", label: "Photon Momentum", formula: "6.62607e-34 / (wavelength_nm * 1e-9)", unit: "kg·m/s" }
    ],
    theory: "Photons are quantum packets of electromagnetic energy. Although they have zero rest mass, they carry both energy and momentum, which allows them to exert pressure (radiation pressure) on objects they strike.",
    faq: [
      { question: "How does photon energy relate to damage?", answer: "UV, X-ray, and gamma-ray photons have high energies (>3 eV), which can break chemical bonds and damage DNA. Visible and IR photons have lower energies and only cause heating." },
      { question: "Do photons have momentum without mass?", answer: "Yes. Relativistic mechanics gives E² = (pc)² + (m₀c²)². Since a photon has zero rest mass (m₀ = 0), E = pc, which means it has momentum p = E/c = h/λ." },
      { question: "What is the energy of a green photon?", answer: "At 500 nm, a photon has an energy of approximately 2.48 eV or 3.98 × 10⁻¹⁹ Joules." }
    ],
    seoMeta: { title: "Photon Energy & Momentum Calculator", description: "Calculate photon energy in Joules/eV and momentum from wavelength.", keywords: "photon energy, wavelength, frequency, photon momentum, Planck constant" }
  },
  {
    id: "rydberg-equation-calculator", name: "Rydberg Equation Calculator",
    description: "Calculate the wavelengths of spectral lines of hydrogen transitions.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\frac{1}{\\lambda} = R_{\\infty} \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
    inputs: [
      { id: "n1", label: "Lower Energy Level (n1)", type: "number", defaultValue: 2, helpText: "Lyman: 1, Balmer: 2, Paschen: 3" },
      { id: "n2", label: "Upper Energy Level (n2)", type: "number", defaultValue: 3, helpText: "Must be greater than n1" }
    ],
    outputs: [
      { id: "inv_lambda", label: "Wave Number (1/λ)", formula: "10973731.568 * (1/(n1^2) - 1/(n2^2))", unit: "m⁻¹" },
      { id: "lambda_m", label: "Wavelength", formula: "1 / (10973731.568 * (1/(n1^2) - 1/(n2^2)))", unit: "m" },
      { id: "lambda_nm", label: "Wavelength", formula: "(1 / (10973731.568 * (1/(n1^2) - 1/(n2^2)))) * 1e9", unit: "nm" }
    ],
    theory: "The Rydberg equation describes the wavelengths of spectral lines emitted during electronic transitions in hydrogen-like atoms. Johannes Rydberg generalized this empirical formula in 1888, which Bohr later explained using quantum theory. R_inf is the Rydberg constant (1.097373 × 10⁷ m⁻¹).",
    faq: [
      { question: "What is the Lyman series?", answer: "Transitions ending in n1=1. These transitions emit high-energy ultraviolet light. The Lyman limit (transition from ∞ to 1) is at 91.18 nm." },
      { question: "Why is the Rydberg constant so important?", answer: "It is one of the most precisely measured physical constants, which makes it critical for testing quantum electrodynamics (QED) and atomic models." },
      { question: "How does it change for helium?", answer: "For helium-plus (single electron), the Rydberg constant is multiplied by Z² = 4, which shifts all spectral lines to four times higher energy (shorter wavelength)." }
    ],
    seoMeta: { title: "Rydberg Equation Calculator — Spectral Line Wavelengths", description: "Calculate hydrogen spectral lines using the Rydberg formula.", keywords: "Rydberg equation, spectral lines, hydrogen spectrum, Lyman series, Balmer series" }
  },
  {
    id: "stefan-boltzmann-law-calculator", name: "Stefan Boltzmann Law Calculator",
    description: "Calculate the total power radiated per unit area of a blackbody.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "j^* = \\sigma T^4",
    inputs: [
      { id: "temp_k", label: "Absolute Temperature (K)", type: "number", defaultValue: 300, helpText: "Room temp ≈ 300 K, Sun surface ≈ 5778 K" }
    ],
    outputs: [
      { id: "rad_flux", label: "Radiant Emissive Power", formula: "5.67037e-8 * (temp_k^4)", unit: "W/m²" }
    ],
    theory: "The Stefan-Boltzmann law states that the total energy radiated per unit surface area of a blackbody per unit time is directly proportional to the fourth power of the blackbody's thermodynamic temperature. The constant of proportionality is the Stefan-Boltzmann constant (σ ≈ 5.67 × 10⁻⁸ W/(m²·K⁴)).",
    faq: [
      { question: "What is a blackbody?", answer: "An idealized physical body that absorbs all incident electromagnetic radiation, reflecting none. It is also a perfect emitter, emitting thermal radiation in a continuous spectrum that depends only on temperature." },
      { question: "How does temperature affect heat loss?", answer: "The T⁴ dependency means that radiation heat transfer increases dramatically as temperature rises. Doubling the absolute temperature increases the radiated energy by a factor of 16." },
      { question: "Does this apply to non-blackbodies?", answer: "Yes, but we must multiply by the material's emissivity (ε, ranging from 0 to 1): P/A = ε σ T⁴. Shiny metal foils have low emissivity (0.05), while matte black paint is close to 0.98." }
    ],
    seoMeta: { title: "Stefan-Boltzmann Law Calculator — Radiant Flux", description: "Calculate blackbody radiant energy flux from temperature.", keywords: "Stefan-Boltzmann law, blackbody radiation, thermal radiation, emissive power" }
  },
  {
    id: "wiens-law-calculator", name: "Wien's Law Calculator",
    description: "Calculate the peak wavelength of blackbody radiation at a given temperature.",
    category: "physics", subcategory: "quantum-mechanics",
    scientificFormula: "\\lambda_{max} = \\frac{b}{T}",
    inputs: [
      { id: "temp_k", label: "Absolute Temperature (K)", type: "number", defaultValue: 5778, helpText: "Sun surface: 5778 K, Room temp: 293 K" }
    ],
    outputs: [
      { id: "peak_wavelength_m", label: "Peak Wavelength", formula: "0.00289777 / temp_k", unit: "m" },
      { id: "peak_wavelength_nm", label: "Peak Wavelength", formula: "(0.00289777 / temp_k) * 1e9", unit: "nm" },
      { id: "peak_freq_hz", label: "Peak Frequency (approximate)", formula: "299792458 / (0.00289777 / temp_k)", unit: "Hz" }
    ],
    theory: "Wien's displacement law states that the blackbody radiation curve peaks at a wavelength inversely proportional to the absolute temperature. The constant b is Wien's displacement constant (≈ 2.89777 × 10⁻³ m·K). This explains why objects change color from red-hot to yellow-hot, and finally white/blue-hot as they heat up.",
    faq: [
      { question: "Why is the Sun's light yellowish-green?", answer: "The Sun's surface temperature is 5,778 K. Wien's law gives a peak wavelength of ~500 nm, which lies in the green part of the visible spectrum. Our eyes perceive the combined solar output as white-yellow." },
      { question: "What is the peak wavelength of human body heat?", answer: "At 37°C (310 K), the peak wavelength is ~9,300 nm (9.3 μm), which is in the mid-infrared. This is why thermal imaging cameras are designed to detect infrared light around this band." },
      { question: "How do astronomers find star temperatures?", answer: "By measuring a star's spectrum and finding the wavelength at which it is brightest. Using Wien's law, they can calculate the star's surface temperature directly." }
    ],
    seoMeta: { title: "Wien's Displacement Law Calculator", description: "Calculate the peak emission wavelength of a blackbody from its temperature.", keywords: "Wien's law, blackbody peak wavelength, stellar temperature, thermal imaging" }
  }
];
