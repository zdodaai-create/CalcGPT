import { CalculatorConfig } from "./calculator-types";

export const ATMOSPHERIC_CALCULATORS: CalculatorConfig[] = [
  {
    id: "absolute-humidity-calculator", name: "Absolute Humidity Calculator",
    description: "Calculate the mass of water vapor per unit volume of air.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "AH = \\frac{C \\cdot P_v}{T_K}",
    inputs: [
      { id: "Pv_Pa", label: "Water Vapor Pressure (Pa)", type: "number", defaultValue: 2330, helpText: "At 20°C, 100% RH ≈ 2330 Pa" },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 293.15, helpText: "20°C = 293.15 K" }
    ],
    outputs: [
      { id: "AH", label: "Absolute Humidity", formula: "2.1674 * Pv_Pa / T_K", unit: "g/m³" }
    ],
    theory: "Absolute humidity is the total mass of water vapor present in a given volume of air, regardless of temperature. It is calculated using the ideal gas law for water vapor: AH = m_w / V = P_v / (R_v * T) where R_v is the specific gas constant for water vapor (461.5 J/(kg·K)).",
    faq: [
      { question: "Absolute vs Relative Humidity?", answer: "Absolute humidity is the actual mass of water per volume of air (e.g., g/m³). Relative humidity is the ratio of current water vapor pressure to the saturation vapor pressure at that temperature, expressed as a percentage." },
      { question: "How does temperature affect absolute humidity?", answer: "At a constant water content, temperature doesn't change absolute humidity. However, warmer air has a higher capacity to hold water, allowing for higher maximum absolute humidity." },
      { question: "Why is absolute humidity useful?", answer: "It is used in meteorology, HVAC design, and industrial drying processes where knowing the exact water content of the air is required, independent of temperature swings." }
    ],
    seoMeta: { title: "Absolute Humidity Calculator", description: "Calculate absolute humidity from vapor pressure and temperature.", keywords: "absolute humidity, water vapor, meteorology, air moisture" }
  },
  {
    id: "air-density-calculator", name: "Air Density Calculator",
    description: "Calculate air density based on temperature, pressure, and humidity.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "\\rho = \\frac{p_d}{R_d T} + \\frac{p_v}{R_v T}",
    inputs: [
      { id: "P_Pa", label: "Total Air Pressure (Pa)", type: "number", defaultValue: 101325 },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 293.15 },
      { id: "RH", label: "Relative Humidity (%)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "Pv", label: "Vapor Pressure", formula: "(RH / 100) * 610.78 * exp(17.27 * (T_K - 273.15) / (T_K - 35.85))", unit: "Pa" },
      { id: "rho_air", label: "Air Density", formula: "((P_Pa - ((RH / 100) * 610.78 * exp(17.27 * (T_K - 273.15) / (T_K - 35.85)))) / (287.05 * T_K)) + (((RH / 100) * 610.78 * exp(17.27 * (T_K - 273.15) / (T_K - 35.85))) / (461.495 * T_K))", unit: "kg/m³" }
    ],
    theory: "Air density is the mass per unit volume of Earth's atmosphere. It decreases with altitude and increases with pressure. Humid air is paradoxically *less* dense than dry air because water molecules (MW 18) are lighter than nitrogen (MW 28) and oxygen (MW 32) molecules.",
    faq: [
      { question: "Why is humid air less dense than dry air?", answer: "Avogadro's law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. When water vapor (Molar mass ~18 g/mol) is added to air, it displaces heavier nitrogen (~28 g/mol) and oxygen (~32 g/mol) molecules, reducing overall density." },
      { question: "What is standard air density?", answer: "At sea level and 15°C (288.15 K) under ISA conditions, standard dry air density is 1.225 kg/m³ (0.0765 lb/ft³)." },
      { question: "How does air density affect airplanes?", answer: "Lower air density (due to high altitude, high temperature, or high humidity) reduces engine power, aerodynamic lift, and propeller efficiency. This is measured as density altitude." }
    ],
    seoMeta: { title: "Air Density Calculator", description: "Calculate density of air from pressure, temperature, and humidity.", keywords: "air density, meteorology, aerodynamics, aviation, relative humidity" }
  },
  {
    id: "air-pressure-at-altitude-calculator", name: "Air Pressure at Altitude Calculator",
    description: "Estimate atmospheric pressure at a given altitude using the barometric formula.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "P = P_0 \\left(1 - \\frac{L \\cdot h}{T_0}\\right)^{\\frac{g \\cdot M}{R \\cdot L}}",
    inputs: [
      { id: "h_m", label: "Altitude (m)", type: "number", defaultValue: 2000 },
      { id: "P0", label: "Sea Level Pressure (Pa)", type: "number", defaultValue: 101325 }
    ],
    outputs: [
      { id: "P_alt", label: "Pressure at Altitude", formula: "P0 * (1 - 0.0065 * h_m / 288.15)^5.25588", unit: "Pa" },
      { id: "P_hpa", label: "Pressure", formula: "(P0 * (1 - 0.0065 * h_m / 288.15)^5.25588) / 100", unit: "hPa" }
    ],
    theory: "The barometric formula models how atmospheric pressure decreases with altitude. In the troposphere (up to 11 km), temperature drops linearly with height (lapse rate L ≈ 0.0065 K/m), giving a power-law pressure decay. At higher altitudes, exponential models are used.",
    faq: [
      { question: "How fast does pressure drop with altitude?", answer: "Near sea level, pressure drops by about 1.2 kPa (12 hPa) for every 100 meters (or 1 inch of mercury per 1000 feet). At 5,500m, pressure is about half of sea level pressure." },
      { question: "What is the Armstrong limit?", answer: "At ~19,000 meters, atmospheric pressure drops to 6.3 kPa, which is the vapor pressure of water at human body temperature (37°C). Without a pressurized suit, bodily fluids boil at body temperature." },
      { question: "Why does atmospheric pressure change?", answer: "Pressure is the weight of the air column above. As you go higher, there is less air above you, so pressure decreases. Local weather systems (highs and lows) also cause small pressure variations." }
    ],
    seoMeta: { title: "Air Pressure at Altitude Calculator", description: "Calculate atmospheric pressure using the barometric formula.", keywords: "atmospheric pressure, altitude, barometric formula, meteorology" }
  },
  {
    id: "cloud-base-calculator", name: "Cloud Base Calculator",
    description: "Estimate the altitude of the cloud base from surface temperature and dew point.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "h = \\frac{T_{temp} - T_{dew}}{L} \\cdot 1000",
    inputs: [
      { id: "temp_c", label: "Surface Temperature (°C)", type: "number", defaultValue: 22 },
      { id: "dew_c", label: "Surface Dew Point (°C)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "h_m", label: "Cloud Base (AGL)", formula: "(temp_c - dew_c) * 125", unit: "m" },
      { id: "h_ft", label: "Cloud Base (AGL)", formula: "(temp_c - dew_c) * 410", unit: "ft" }
    ],
    theory: "The cloud base (or lifting condensation level) is where rising air cools to its dew point and condensation begins. As dry air rises, it cools at the dry adiabatic lapse rate (~9.8°C/km). Meanwhile, the dew point drops at ~1.8°C/km. The convergence rate is ~8.0°C per km (or 4.4°F per 1000 ft), yielding the rule of thumb: h = (T - T_dew) * 125 meters.",
    faq: [
      { question: "What is the lifting condensation level (LCL)?", answer: "The LCL is the height at which a parcel of air becomes saturated when lifted adiabatically. In convective clouds (like cumulus), the cloud base coincides closely with the LCL." },
      { question: "How accurate is the 125m/°C rule?", answer: "It is a good estimate for convective clouds on warm days. It assumes a well-mixed boundary layer. In stable conditions or under front systems, cloud bases can form differently." },
      { question: "Why do clouds have flat bottoms?", answer: "Because the boundary between unsaturated and saturated air (dew point threshold) is a flat horizontal plane determined by the local temperature and moisture profiles." }
    ],
    seoMeta: { title: "Cloud Base Calculator", description: "Calculate cloud base altitude from temperature and dew point.", keywords: "cloud base, LCL, aviation weather, meteorology, dew point" }
  },
  {
    id: "density-altitude-calculator", name: "Density Altitude Calculator",
    description: "Calculate density altitude, a key aircraft performance metric.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "DA = PA + (T - T_{ISA}) \\cdot 120",
    inputs: [
      { id: "PA_ft", label: "Pressure Altitude (ft)", type: "number", defaultValue: 1000 },
      { id: "temp_c", label: "OAT (Outside Air Temperature) (°C)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "ISA_temp", label: "ISA Temperature at PA", formula: "15 - 0.0019812 * PA_ft", unit: "°C" },
      { id: "DA_ft", label: "Density Altitude", formula: "PA_ft + (temp_c - (15 - 0.0019812 * PA_ft)) * 120", unit: "ft" }
    ],
    theory: "Density altitude is pressure altitude corrected for non-standard temperature. Hot air is less dense, making the aircraft perform as if it were at a much higher altitude. The standard approximation adds 120 feet of altitude per 1°C deviation from standard ISA temperature.",
    faq: [
      { question: "What is standard ISA temperature?", answer: "At sea level, ISA temperature is 15°C. It decreases by 1.98°C per 1,000 feet of pressure altitude." },
      { question: "Why is density altitude dangerous?", answer: "High density altitude reduces engine horsepower (less oxygen), decreases propeller efficiency, and requires a faster true airspeed to generate the same lift. This increases takeoff roll and reduces climb rates, causing accidents on hot days at high-elevation runways." },
      { question: "How does humidity affect density altitude?", answer: "Humidity increases density altitude further because water vapor is less dense than dry air. The standard simple formula neglects humidity, but pilot handbooks suggest adding a margin on humid days." }
    ],
    seoMeta: { title: "Density Altitude Calculator", description: "Calculate density altitude for flight planning.", keywords: "density altitude, pressure altitude, aviation safety, flight planning" }
  },
  {
    id: "dew-point-calculator", name: "Dew Point Calculator",
    description: "Estimate dew point temperature using the Magnus-Tetens formula.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "T_d = \\frac{c \\cdot \\gamma(T, RH)}{b - \\gamma(T, RH)}",
    inputs: [
      { id: "temp_c", label: "Air Temperature (°C)", type: "number", defaultValue: 25 },
      { id: "RH", label: "Relative Humidity (%)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "dew_point", label: "Dew Point Temperature", formula: "243.04 * ((17.625 * temp_c) / (243.04 + temp_c) + log(RH / 100)) / (17.625 - ((17.625 * temp_c) / (243.04 + temp_c) + log(RH / 100)))", unit: "°C" }
    ],
    theory: "The dew point is the temperature to which air must be cooled to become saturated with water vapor. Further cooling leads to condensation (dew, fog, or clouds). The Magnus-Tetens approximation relates dew point to temperature and relative humidity with high accuracy for meteorology.",
    faq: [
      { question: "What does dew point feel like?", answer: "Below 13°C: comfortable. 13-16°C: noticeable humidity. 16-20°C: sticky and humid. 20-24°C: uncomfortable. Above 24°C: miserable. Unlike relative humidity, dew point is an absolute measure of air moisture." },
      { question: "Can dew point be higher than air temperature?", answer: "No. If air cools to its dew point, relative humidity reaches 100% and excess water condenses. Dew point is always less than or equal to current air temperature." },
      { question: "How does dew point relate to frost point?", answer: "If the dew point is below 0°C, it is called the frost point, and condensation forms frost or snow instead of dew." }
    ],
    seoMeta: { title: "Dew Point Calculator", description: "Calculate dew point from temperature and relative humidity.", keywords: "dew point, relative humidity, meteorology, comfort level" }
  },
  {
    id: "heat-index-calculator", name: "Heat Index Calculator",
    description: "Calculate the apparent temperature (felt temperature) based on air temperature and relative humidity.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "\\text{HI} = c_1 + c_2 T + c_3 R + c_4 T R + c_5 T^2 + c_6 R^2 + c_7 T^2 R + c_8 T R^2 + c_9 T^2 R^2",
    inputs: [
      { id: "temp_f", label: "Air Temperature (°F)", type: "number", defaultValue: 90 },
      { id: "RH", label: "Relative Humidity (%)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "HI_f", label: "Heat Index", formula: "-42.379 + 2.04901523 * temp_f + 10.14333127 * RH - 0.22475541 * temp_f * RH - 0.00683783 * temp_f^2 - 0.05481717 * RH^2 + 0.00122874 * temp_f^2 * RH + 0.00085282 * temp_f * RH^2 - 0.00000199 * temp_f^2 * RH^2", unit: "°F" },
      { id: "HI_c", label: "Heat Index", formula: "((-42.379 + 2.04901523 * temp_f + 10.14333127 * RH - 0.22475541 * temp_f * RH - 0.00683783 * temp_f^2 - 0.05481717 * RH^2 + 0.00122874 * temp_f^2 * RH + 0.00085282 * temp_f * RH^2 - 0.00000199 * temp_f^2 * RH^2) - 32) * 5/9", unit: "°C" }
    ],
    theory: "The Heat Index (apparent temperature) measures how hot it feels to the human body. High humidity hinders the evaporation of sweat, making it harder for the body to cool itself. The NOAA formula is a multi-parameter regression valid for temperatures above 80°F (27°C).",
    faq: [
      { question: "What are the heat index thresholds?", answer: "80-90°F: Caution (fatigue possible). 90-103°F: Extreme Caution (heat stroke possible). 103-124°F: Danger (heat cramps and heat exhaustion likely). Above 125°F: Extreme Danger (heat stroke highly likely)." },
      { question: "Why does humidity make it feel hotter?", answer: "Humans cool down by sweating. The evaporation of sweat absorbs heat from our skin. When the air is highly humid, sweat cannot evaporate efficiently, trap heat, and elevate body temperature." },
      { question: "When does the Heat Index not apply?", answer: "It is designed for shady, light wind conditions. Direct sunlight can increase heat index values by up to 15°F (8°C). Strong hot winds can also increase heat stress." }
    ],
    seoMeta: { title: "Heat Index Calculator", description: "Calculate NOAA Heat Index apparent temperature.", keywords: "heat index, weather safety, relative humidity, apparent temperature" }
  },
  {
    id: "kinematic-viscosity-of-air-calculator", name: "Kinematic Viscosity of Air Calculator",
    description: "Calculate kinematic viscosity of air from temperature and pressure.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "\\nu = \\frac{\\mu}{\\rho}",
    inputs: [
      { id: "temp_c", label: "Air Temperature (°C)", type: "number", defaultValue: 20 },
      { id: "P_hpa", label: "Air Pressure (hPa)", type: "number", defaultValue: 1013.25 }
    ],
    outputs: [
      { id: "dyn_visc", label: "Dynamic Viscosity (μ)", formula: "1.458e-6 * (temp_c + 273.15)^1.5 / (temp_c + 273.15 + 110.4)", unit: "Pa·s" },
      { id: "kin_visc", label: "Kinematic Viscosity (ν)", formula: "(1.458e-6 * (temp_c + 273.15)^1.5 / (temp_c + 273.15 + 110.4)) / ((P_hpa * 100) / (287.05 * (temp_c + 273.15)))", unit: "m²/s" }
    ],
    theory: "Dynamic viscosity of air is calculated using Sutherland's law, which depends only on temperature. Kinematic viscosity (ν = μ/ρ) normalizes this by density, which varies with both temperature and pressure. Kinematic viscosity governs boundary layer flow and drag.",
    faq: [
      { question: "What is kinematic viscosity?", answer: "It is the resistance of a fluid to shear flow when acted upon by gravity, equal to dynamic viscosity divided by density. It represents the rate of diffusion of momentum in a fluid." },
      { question: "How does temperature affect air viscosity?", answer: "Unlike liquids (whose viscosity decreases with temperature), gases like air become *more* viscous as temperature increases. This is because higher molecular speed leads to more frequent collisions, resisting bulk shear motion." },
      { question: "Where is air viscosity important?", answer: "Aerodynamics (boundary layer, skin friction drag), drone design, wind tunnel testing, and meteorological calculations of particulate settling." }
    ],
    seoMeta: { title: "Kinematic Viscosity of Air Calculator", description: "Calculate air viscosity from pressure and temperature.", keywords: "air viscosity, kinematic viscosity, Sutherland law, fluid dynamics" }
  },
  {
    id: "lightning-distance-calculator", name: "Lightning Distance Calculator",
    description: "Calculate the distance of a lightning strike from the time delay between flash and thunder.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "d = v_{sound} \\cdot t",
    inputs: [
      { id: "delay_sec", label: "Time Delay (seconds)", type: "number", defaultValue: 5 },
      { id: "temp_c", label: "Air Temperature (°C)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "v_sound", label: "Speed of Sound", formula: "331.3 * sqrt(1 + temp_c / 273.15)", unit: "m/s" },
      { id: "dist_m", label: "Distance", formula: "(331.3 * sqrt(1 + temp_c / 273.15)) * delay_sec", unit: "m" },
      { id: "dist_km", label: "Distance", formula: "((331.3 * sqrt(1 + temp_c / 273.15)) * delay_sec) / 1000", unit: "km" }
    ],
    theory: "Light travels at ~300,000 km/s (essentially instantaneous for human perception). Sound travels much slower — approximately 343 m/s in air at 20°C. By measuring the time between seeing the flash and hearing the thunder, the distance can be calculated using d = v_sound * t.",
    faq: [
      { question: "What is the 5-second rule?", answer: "Since sound travels at ~340 m/s, it takes about 3 seconds to travel 1 kilometer, or 5 seconds to travel 1 mile. If you count 5 seconds between flash and thunder, the strike is about 1 mile (~1.6 km) away." },
      { question: "Why does the speed of sound vary?", answer: "Sound speed depends primarily on temperature (sound is faster in warm air due to faster molecular motion). It is independent of air pressure and has only a very small dependence on humidity." },
      { question: "What is the 30/30 rule for storm safety?", answer: "If the time between lightning and thunder is less than 30 seconds (strike is within 6 miles), go indoors immediately. Stay indoors for at least 30 minutes after the last clap of thunder." }
    ],
    seoMeta: { title: "Lightning Distance Calculator", description: "Calculate lightning distance from thunder time delay.", keywords: "lightning distance, speed of sound, thunder, storm safety" }
  },
  {
    id: "mixing-ratio-of-air-calculator", name: "Mixing Ratio of Air Calculator",
    description: "Calculate the mixing ratio of water vapor to dry air.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "w = \\varepsilon \\frac{p_v}{p - p_v}",
    inputs: [
      { id: "Pv_Pa", label: "Water Vapor Pressure (Pa)", type: "number", defaultValue: 2330 },
      { id: "P_Pa", label: "Total Air Pressure (Pa)", type: "number", defaultValue: 101325 }
    ],
    outputs: [
      { id: "w_ratio", label: "Mixing Ratio", formula: "0.62198 * Pv_Pa / (P_Pa - Pv_Pa)", unit: "kg/kg" },
      { id: "w_g_kg", label: "Mixing Ratio", formula: "0.62198 * Pv_Pa / (P_Pa - Pv_Pa) * 1000", unit: "g/kg" }
    ],
    theory: "The mixing ratio is the mass of water vapor per unit mass of *dry* air. Unlike specific humidity (mass of water per mass of total air), the mixing ratio is expressed relative to dry air. The constant 0.62198 is the ratio of the molecular weight of water to dry air (18.016 / 28.97).",
    faq: [
      { question: "Mixing Ratio vs Specific Humidity?", answer: "Mixing ratio is w = m_water / m_dry_air. Specific humidity is q = m_water / (m_dry_air + m_water). The values are very close because water vapor is a tiny fraction of air (typically <3%)." },
      { question: "Why is the mixing ratio useful?", answer: "It is a conserved quantity during adiabatic lifting or sinking of air parcels (as long as no condensation occurs). Meteorologists track it to identify air masses and compute cloud formation." },
      { question: "What are typical values?", answer: "Desert air: <2 g/kg. Mid-latitude comfort: 5–10 g/kg. Tropical rainforest: 15–25 g/kg." }
    ],
    seoMeta: { title: "Mixing Ratio of Air Calculator", description: "Calculate mixing ratio of water vapor to dry air.", keywords: "mixing ratio, specific humidity, meteorology, humidity ratio" }
  },
  {
    id: "relative-humidity-calculator", name: "Relative Humidity Calculator",
    description: "Calculate relative humidity from dry bulb and wet bulb temperatures.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "\\text{RH} = \\frac{e}{e_s} \\cdot 100",
    inputs: [
      { id: "T_dry", label: "Dry Bulb Temperature (°C)", type: "number", defaultValue: 25 },
      { id: "T_wet", label: "Wet Bulb Temperature (°C)", type: "number", defaultValue: 18 },
      { id: "P_hpa", label: "Station Pressure (hPa)", type: "number", defaultValue: 1013.25 }
    ],
    outputs: [
      { id: "es_dry", label: "Saturation Vapor Pressure", formula: "6.112 * exp(17.67 * T_dry / (T_dry + 243.5))", unit: "hPa" },
      { id: "es_wet", label: "Wet Saturation Vapor Pressure", formula: "6.112 * exp(17.67 * T_wet / (T_wet + 243.5))", unit: "hPa" },
      { id: "e_act", label: "Actual Vapor Pressure", formula: "6.112 * exp(17.67 * T_wet / (T_wet + 243.5)) - 0.00066 * (1 + 0.00115 * T_wet) * (T_dry - T_wet) * P_hpa", unit: "hPa" },
      { id: "RH", label: "Relative Humidity", formula: "( (6.112 * exp(17.67 * T_wet / (T_wet + 243.5)) - 0.00066 * (1 + 0.00115 * T_wet) * (T_dry - T_wet) * P_hpa) / (6.112 * exp(17.67 * T_dry / (T_dry + 243.5))) ) * 100", unit: "%" }
    ],
    theory: "Relative humidity is calculated from psychrometric readings. Wet bulb cooling is caused by evaporation of water from the wick. The difference between dry and wet bulb temperatures (wet bulb depression) is proportional to air dryness, allowing calculation of actual vapor pressure using the psychrometric formula.",
    faq: [
      { question: "What is dry bulb vs wet bulb?", answer: "Dry bulb is the ambient air temperature. Wet bulb is the temperature measured by a thermometer covered in a wet cloth with air blowing over it. Evaporation cools the wet bulb below the dry bulb." },
      { question: "What if dry and wet bulb are equal?", answer: "Then relative humidity is 100%. No evaporation can take place, so no cooling of the wet bulb occurs." },
      { question: "How does relative humidity relate to comfort?", answer: "RH between 30% and 50% is generally preferred. High RH (>70%) prevents sweat evaporation and feels muggy; low RH (<20%) dries skin, lips, and nasal passages." }
    ],
    seoMeta: { title: "Relative Humidity Calculator", description: "Calculate relative humidity from psychrometric temperatures.", keywords: "relative humidity, psychrometer, wet bulb, dry bulb, relative humidity formula" }
  },
  {
    id: "scfm-calculator", name: "SCFM Calculator",
    description: "Convert ACFM (Actual Cubic Feet per Minute) to SCFM (Standard Cubic Feet per Minute).",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "\\text{SCFM} = \\text{ACFM} \\cdot \\frac{P_{\\text{actual}}}{P_{\\text{std}}} \\cdot \\frac{T_{\\text{std}}}{T_{\\text{actual}}}",
    inputs: [
      { id: "acfm", label: "Actual Flow Rate (ACFM)", type: "number", defaultValue: 100 },
      { id: "P_act_psi", label: "Actual Pressure (psi, gauge)", type: "number", defaultValue: 90 },
      { id: "T_act_f", label: "Actual Temperature (°F)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "scfm", label: "Standard Flow Rate", formula: "acfm * ((P_act_psi + 14.696) / 14.696) * (529.67 / (T_act_f + 459.67))", unit: "SCFM" }
    ],
    theory: "SCFM represents the volumetric flow rate of a gas corrected to standard temperature and pressure conditions (typically 68°F / 529.67 R and 14.696 psia). ACFM is the flow rate at the actual running pressure and temperature. The conversion uses the ideal gas law: P_std * V_std / T_std = P_act * V_act / T_act.",
    faq: [
      { question: "Standard conditions for SCFM?", answer: "Compressed Air and Gas Institute (CAGI) standard: P = 14.696 psia, T = 68°F (20°C), RH = 36%. Other industries may use slightly different standard conditions (e.g., 60°F or 0°C)." },
      { question: "ACFM vs SCFM?", answer: "ACFM is the actual volume of gas flowing per minute inside the pipe at operating pressure and temperature. SCFM is the equivalent volume if it were at standard atmospheric conditions. SCFM is a measure of gas mass flow." },
      { question: "Why convert ACFM to SCFM?", answer: "Because gas expands and compresses. A compressor rated for 100 ACFM at 90 psi handles far more actual gas mass than one rated for 100 ACFM at atmospheric pressure. SCFM allows standardized rating and comparison." }
    ],
    seoMeta: { title: "SCFM Calculator", description: "Convert ACFM to SCFM using ideal gas laws.", keywords: "SCFM, ACFM, compressed air, gas flow rate, standard conditions" }
  },
  {
    id: "temperature-at-altitude-calculator", name: "Temperature at Altitude Calculator",
    description: "Calculate the standard atmospheric temperature at a given altitude.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "T = T_0 - L \\cdot h",
    inputs: [
      { id: "h_m", label: "Altitude (m)", type: "number", defaultValue: 3000 },
      { id: "T0_c", label: "Sea Level Temperature (°C)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "T_alt_c", label: "Temperature at Altitude", formula: "T0_c - 0.0065 * h_m", unit: "°C" },
      { id: "T_alt_f", label: "Temperature at Altitude", formula: "(T0_c - 0.0065 * h_m) * 9/5 + 32", unit: "°F" }
    ],
    theory: "In the troposphere (up to 11,000 meters / 36,089 feet), temperature decreases linearly with altitude. The standard environmental lapse rate defined by the International Standard Atmosphere (ISA) is 6.5°C per 1,000 meters (or 1.98°C / 3.56°F per 1,000 feet).",
    faq: [
      { question: "Why does it get colder at high altitude?", answer: "As air rises, it expands because pressure is lower. Expansion causes the air to cool (adiabatic cooling). The atmosphere is also heated from the ground up, so moving away from the surface reduces radiative warming." },
      { question: "What happens above 11 km?", answer: "You enter the tropopause/stratosphere. In the stratosphere, temperature stops falling and actually *increases* with height due to UV absorption by the ozone layer." },
      { question: "Dry vs wet adiabatic lapse rate?", answer: "Dry air cools at ~9.8°C/km as it rises. Wet (saturated) air cools slower (~5°C/km) because condensation releases latent heat of vaporization, warming the air parcel." }
    ],
    seoMeta: { title: "Temperature at Altitude Calculator", description: "Calculate standard atmospheric temperature at any altitude.", keywords: "temperature altitude, lapse rate, ISA, aviation weather" }
  },
  {
    id: "true-airspeed-calculator", name: "True Airspeed Calculator",
    description: "Estimate True Airspeed (TAS) from Indicated Airspeed (IAS) and altitude.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "\\text{TAS} \\approx \\text{IAS} \\cdot \\left(1 + 0.02 \\cdot \\frac{h}{1000}\\right)",
    inputs: [
      { id: "ias_kt", label: "Indicated Airspeed (knots)", type: "number", defaultValue: 120 },
      { id: "h_ft", label: "Altitude (feet)", type: "number", defaultValue: 8000 }
    ],
    outputs: [
      { id: "tas_kt", label: "True Airspeed (approximate)", formula: "ias_kt * (1 + 0.02 * h_ft / 1000)", unit: "knots" }
    ],
    theory: "Indicated Airspeed (IAS) is read directly from the airspeed indicator and depends on dynamic pressure. As altitude increases, air density decreases, so a higher speed through the air (TAS) is required to produce the same dynamic pressure. The rule of thumb is that TAS increases by 2% of IAS per 1,000 feet of altitude.",
    faq: [
      { question: "IAS vs TAS vs GS?", answer: "IAS is what the pilot sees on the instrument (measures pressure). TAS is the actual speed of the aircraft relative to the surrounding air. GS (Ground Speed) is the speed relative to the ground (TAS ± wind)." },
      { question: "Why does TAS increase with altitude?", answer: "Air is thinner at high altitudes. To get the same number of air molecules entering the Pitot tube per second to create pressure, the plane must move faster through the air." },
      { question: "How accurate is the 2% rule?", answer: "It is highly accurate at moderate altitudes and speeds (below Mach 0.3). At high altitudes or speeds, compressibility effects must be accounted for using Mach number equations." }
    ],
    seoMeta: { title: "True Airspeed Calculator", description: "Calculate True Airspeed from IAS and altitude.", keywords: "true airspeed, IAS, TAS, flight planning, aviation calculations" }
  },
  {
    id: "virtual-temperature-calculator", name: "Virtual Temperature Calculator",
    description: "Calculate the virtual temperature of moist air.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "T_v = T_K \\left(1 + 0.61 \\cdot w\\right)",
    inputs: [
      { id: "T_K", label: "Dry Temperature (K)", type: "number", defaultValue: 293.15 },
      { id: "w_ratio", label: "Mixing Ratio (kg/kg)", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "Tv_K", label: "Virtual Temperature", formula: "T_K * (1 + 0.61 * w_ratio)", unit: "K" },
      { id: "Tv_C", label: "Virtual Temperature", formula: "T_K * (1 + 0.61 * w_ratio) - 273.15", unit: "°C" }
    ],
    theory: "Virtual temperature is the temperature that dry air would need to have to have the same density and pressure as a parcel of moist air. Because water vapor is less dense than dry air, virtual temperature is always higher than actual air temperature. It simplifies thermodynamic calculations by allowing the dry-air gas constant to be used.",
    faq: [
      { question: "Why use virtual temperature?", answer: "Moist air density changes with humidity. Instead of modifying the gas constant R in the ideal gas law (P = ρRT), meteorologists define a virtual temperature T_v so they can use the constant R for dry air: P = ρ R_dry T_v." },
      { question: "Is virtual temperature always higher?", answer: "Yes, because water vapor is lighter than dry air. Adding moisture increases the buoyancy of the air, which is mathematically represented by a higher virtual temperature." },
      { question: "What is a typical difference?", answer: "At 20°C and high humidity (w = 15 g/kg), T_v is about 1.8°C higher than the actual temperature. The difference increases with humidity and temperature." }
    ],
    seoMeta: { title: "Virtual Temperature Calculator", description: "Calculate virtual temperature of moist air.", keywords: "virtual temperature, meteorology, air density, mixing ratio" }
  },
  {
    id: "wet-bulb-calculator", name: "Wet Bulb Calculator",
    description: "Estimate wet bulb temperature from air temperature and relative humidity.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "T_w = T \\arctan(0.151977(RH + 8.313651)^{1/2}) + \\dots",
    inputs: [
      { id: "temp_c", label: "Air Temperature (°C)", type: "number", defaultValue: 25 },
      { id: "RH", label: "Relative Humidity (%)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "Tw_c", label: "Wet Bulb Temperature", formula: "temp_c * atan(0.151977 * (RH + 8.313651)^(1/2)) + atan(temp_c + RH) - atan(RH - 1.676331) + 0.00391838 * (RH)^(3/2) * atan(0.023101 * RH) - 4.686035", unit: "°C" }
    ],
    theory: "Stull's formula is an empirical equation that estimates wet bulb temperature from dry bulb temperature and relative humidity. It is accurate to within 0.3°C for standard meteorological conditions (-20°C to 50°C and 5% to 99% RH).",
    faq: [
      { question: "What is the wet bulb limit?", answer: "A wet bulb temperature of 35°C (95°F) is the absolute limit of human survivability. Above this, the body cannot cool itself by sweating, leading to fatal heat stroke in hours, even for healthy people in shade with water." },
      { question: "Why is wet bulb lower than dry bulb?", answer: "Evaporation of water cools the surface. The rate of evaporation depends on relative humidity. If RH is 100%, no evaporation can occur, so dry and wet bulb temperatures are identical." },
      { question: "Where is wet bulb used?", answer: "Determining heat stress limits (WBGT), snowmaking in ski resorts, cooling tower sizing, and predicting thunderstorm severity." }
    ],
    seoMeta: { title: "Wet Bulb Calculator", description: "Calculate wet bulb temperature using Stull's formula.", keywords: "wet bulb, meteorology, relative humidity, heat stress, snowmaking" }
  },
  {
    id: "psychrometric-calculator", name: "Psychrometric Calculator",
    description: "Calculate air properties like dew point, vapor pressure, and saturation vapor pressure from dry bulb temperature and relative humidity.",
    category: "physics", subcategory: "atmospheric-physics",
    scientificFormula: "e_s = 6.112 \\exp\\left(\\frac{17.67 T}{T + 243.5}\\right), \\quad e = e_s \\frac{\\text{RH}}{100}",
    inputs: [
      { id: "temp_c", label: "Dry Bulb Temperature (°C)", type: "number", defaultValue: 25 },
      { id: "RH", label: "Relative Humidity (%)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "es_hpa", label: "Saturation Vapor Pressure", formula: "6.112 * exp(17.67 * temp_c / (temp_c + 243.5))", unit: "hPa" },
      { id: "e_hpa", label: "Actual Vapor Pressure", formula: "6.112 * exp(17.67 * temp_c / (temp_c + 243.5)) * RH / 100", unit: "hPa" },
      { id: "dew_point", label: "Dew Point Temperature", formula: "243.04 * ((17.625 * temp_c) / (243.04 + temp_c) + log(RH / 100)) / (17.625 - ((17.625 * temp_c) / (243.04 + temp_c) + log(RH / 100)))", unit: "°C" }
    ],
    theory: "Psychrometrics is the study of physical and thermodynamic properties of gas-vapor mixtures, most commonly moist air. Using temperature and relative humidity, we can calculate properties like vapor pressure and dew point using the Magnus-Tetens approximations.",
    faq: [
      { question: "What is vapor pressure?", answer: "Vapor pressure is the partial pressure exerted by water vapor molecules in the air. Saturation vapor pressure is the maximum pressure water vapor could exert at the current temperature." },
      { question: "What is a psychrometric chart?", answer: "A graphical representation of moist air properties including dry bulb, wet bulb, dew point, relative humidity, humidity ratio, specific volume, and enthalpy. It is a standard tool in HVAC design." },
      { question: "Why is relative humidity not an absolute measure?", answer: "Because saturation vapor pressure increases exponentially with temperature. Air at 30°C and 50% RH contains much more water vapor than air at 10°C and 50% RH." }
    ],
    seoMeta: { title: "Psychrometric Calculator", description: "Calculate vapor pressure, saturation pressure, and dew point of air.", keywords: "psychrometric, vapor pressure, dew point, relative humidity, HVAC" }
  }
];
