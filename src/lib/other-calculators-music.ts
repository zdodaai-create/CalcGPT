import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_MUSIC: CalculatorConfig[] = [
  {
    id: "audio-file-size-calculator", name: "Audio File Size Calculator", description: "Estimate uncompressed audio file size.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Size} = \\text{Sample Rate} \\times \\text{Bit Depth} \\times \\text{Channels} \\times \\text{Duration}",
    inputs: [
      { id: "sr", label: "Sample Rate (Hz)", type: "number", defaultValue: 44100 },
      { id: "bd", label: "Bit Depth", type: "number", defaultValue: 16 },
      { id: "ch", label: "Channels", type: "number", defaultValue: 2 },
      { id: "sec", label: "Duration (s)", type: "number", defaultValue: 180 }
    ],
    outputs: [
      { id: "mb", label: "Estimated Size", formula: "(sr * bd * ch * sec) / 8388608", unit: "MB" }
    ],
    theory: "Audio file size depends on the number of samples taken per second, the size of each sample, and the number of channels.",
    faq: [],
    seoMeta: { title: "Audio File Size Calculator", description: "Calculate WAV file size.", keywords: "audio file size calculator" }
  },
  {
    id: "bpm-calculator", name: "BPM Calculator", description: "Calculate Beats Per Minute from duration and beats.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{BPM} = \\frac{\\text{Total Beats}}{\\text{Minutes}}",
    inputs: [
      { id: "b", label: "Total Beats", type: "number", defaultValue: 32 },
      { id: "s", label: "Duration (s)", type: "number", defaultValue: 16 }
    ],
    outputs: [
      { id: "bpm", label: "BPM", formula: "(b / s) * 60", unit: "BPM" }
    ],
    theory: "BPM is the tempo of the music, calculated as the total number of beats divided by the total time in minutes.",
    faq: [],
    seoMeta: { title: "BPM Calculator", description: "Calculate beats per minute.", keywords: "bpm calculator, tempo calculator" }
  },
  {
    id: "chord-calculator", name: "Chord Calculator", description: "Calculate chord notes numerically (Root = 0).",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Major Triad} = [0, 4, 7]",
    inputs: [
      { id: "root", label: "Root Note (0-11)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "maj_3", label: "Major Third (+4)", formula: "(root + 4) % 12", unit: "" },
      { id: "perf_5", label: "Perfect Fifth (+7)", formula: "(root + 7) % 12", unit: "" }
    ],
    theory: "A major chord consists of the root, a major third (4 semitones up), and a perfect fifth (7 semitones up).",
    faq: [],
    seoMeta: { title: "Chord Calculator", description: "Calculate intervals for chords.", keywords: "chord calculator" }
  },
  {
    id: "chord-finder", name: "Chord Finder", description: "Identify a chord's base type based on intervals.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Intervals determine chord type}",
    inputs: [
      { id: "i1", label: "Interval 1 (semitones)", type: "number", defaultValue: 4 },
      { id: "i2", label: "Interval 2 (semitones)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "is_maj", label: "Is Major Triad? (1=Yes)", formula: "i1 == 4 and i2 == 7 ? 1 : 0", unit: "" },
      { id: "is_min", label: "Is Minor Triad? (1=Yes)", formula: "i1 == 3 and i2 == 7 ? 1 : 0", unit: "" }
    ],
    theory: "Major triads are 4/7. Minor triads are 3/7. Diminished are 3/6. Augmented are 4/8.",
    faq: [],
    seoMeta: { title: "Chord Finder", description: "Identify chords from intervals.", keywords: "chord finder" }
  },
  {
    id: "chord-inversion-calculator", name: "Chord Inversion Calculator", description: "Shift the bass note of a triad.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{1st Inversion} = [3rd, 5th, Root+12]",
    inputs: [
      { id: "r", label: "Root Note (0-11)", type: "number", defaultValue: 0 },
      { id: "t", label: "Third Note (0-11)", type: "number", defaultValue: 4 },
      { id: "f", label: "Fifth Note (0-11)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "b1", label: "1st Inversion Bass", formula: "t", unit: "" },
      { id: "b2", label: "2nd Inversion Bass", formula: "f", unit: "" }
    ],
    theory: "Inversions change the lowest sounding note. First inversion has the third in the bass; second has the fifth.",
    faq: [],
    seoMeta: { title: "Chord Inversion Calculator", description: "Calculate chord inversions.", keywords: "chord inversion calculator" }
  },
  {
    id: "chord-progression-generator", name: "Chord Progression Generator", description: "Generate standard Roman numeral progressions numerically.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{I - IV - V - I}",
    inputs: [
      { id: "r", label: "Key Root (0-11)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "iv", label: "IV Chord Root", formula: "(r + 5) % 12", unit: "" },
      { id: "v", label: "V Chord Root", formula: "(r + 7) % 12", unit: "" },
      { id: "vi", label: "vi Chord Root", formula: "(r + 9) % 12", unit: "" }
    ],
    theory: "Common progressions like I-V-vi-IV are the foundation of modern music.",
    faq: [],
    seoMeta: { title: "Chord Progression Generator", description: "Generate chord progressions.", keywords: "chord progression generator" }
  },
  {
    id: "chord-transposer", name: "Chord Transposer", description: "Transpose notes by a set number of semitones.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{New Note} = (\\text{Old Note} + \\text{Steps}) \\mod 12",
    inputs: [
      { id: "n", label: "Original Note (0-11)", type: "number", defaultValue: 0 },
      { id: "steps", label: "Steps to Transpose (+/-)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "new", label: "Transposed Note (0-11)", formula: "(n + steps + 12) % 12", unit: "" }
    ],
    theory: "Transposition shifts a piece of music to a different pitch level.",
    faq: [],
    seoMeta: { title: "Chord Transposer", description: "Transpose chords up or down.", keywords: "chord transposer" }
  },
  {
    id: "delay-and-reverb-calculator", name: "Delay and Reverb Calculator", description: "Calculate delay times (in ms) based on BPM.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Quarter Note (ms)} = \\frac{60,000}{\\text{BPM}}",
    inputs: [
      { id: "bpm", label: "Tempo (BPM)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "q", label: "1/4 Note Delay", formula: "60000 / bpm", unit: "ms" },
      { id: "e", label: "1/8 Note Delay", formula: "30000 / bpm", unit: "ms" },
      { id: "trip", label: "1/4 Triplet Delay", formula: "(60000 / bpm) * (2/3)", unit: "ms" }
    ],
    theory: "Delay times mathematically synced to tempo create cleaner, more rhythmic mixes.",
    faq: [],
    seoMeta: { title: "Delay Time Calculator", description: "Calculate delay and reverb pre-delay times.", keywords: "delay time calculator" }
  },
  {
    id: "fret-calculator", name: "Fret Calculator", description: "Calculate the position of a fret on a guitar.",
    category: "other", subcategory: "music",
    scientificFormula: "D_n = L - \\frac{L}{2^{n/12}}",
    inputs: [
      { id: "l", label: "Scale Length (inches/mm)", type: "number", defaultValue: 25.5 },
      { id: "n", label: "Fret Number", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "d", label: "Distance from Nut", formula: "l - (l / (2^(n/12)))", unit: "" }
    ],
    theory: "Frets are spaced logarithmically. The 12th fret is exactly halfway down the string.",
    faq: [],
    seoMeta: { title: "Fret Calculator", description: "Calculate fret spacing for string instruments.", keywords: "fret spacing calculator" }
  },
  {
    id: "guitar-string-tension-calculator", name: "Guitar String Tension Calculator", description: "Calculate tension of a guitar string.",
    category: "other", subcategory: "music",
    scientificFormula: "T = \\frac{UW \\times (2 \\times L \\times F)^2}{386.4}",
    inputs: [
      { id: "uw", label: "Unit Weight (lbs/inch)", type: "number", defaultValue: 0.00002 },
      { id: "l", label: "Scale Length (inches)", type: "number", defaultValue: 25.5 },
      { id: "f", label: "Frequency (Hz)", type: "number", defaultValue: 329.6 }
    ],
    outputs: [
      { id: "t", label: "Tension", formula: "(uw * (2 * l * f)^2) / 386.4", unit: "lbs" }
    ],
    theory: "String tension relies on its mass, length, and the pitch (frequency) it is tuned to.",
    faq: [],
    seoMeta: { title: "Guitar String Tension Calculator", description: "Calculate guitar string tension.", keywords: "string tension calculator" }
  },
  {
    id: "harmonic-series-calculator", name: "Harmonic Series Calculator", description: "Calculate the frequencies of harmonics.",
    category: "other", subcategory: "music",
    scientificFormula: "f_n = n \\times f_1",
    inputs: [
      { id: "f1", label: "Fundamental Frequency (Hz)", type: "number", defaultValue: 110 }
    ],
    outputs: [
      { id: "h2", label: "2nd Harmonic", formula: "f1 * 2", unit: "Hz" },
      { id: "h3", label: "3rd Harmonic", formula: "f1 * 3", unit: "Hz" },
      { id: "h4", label: "4th Harmonic", formula: "f1 * 4", unit: "Hz" }
    ],
    theory: "Harmonics are integer multiples of the fundamental frequency.",
    faq: [],
    seoMeta: { title: "Harmonic Series Calculator", description: "Calculate harmonic frequencies.", keywords: "harmonic series calculator" }
  },
  {
    id: "key-signature-calculator", name: "Key Signature Calculator", description: "Calculate number of sharps/flats from circle of fifths position.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Position on Circle of Fifths determines accidental count}",
    inputs: [
      { id: "pos", label: "Position on Circle of Fifths (0=C, 1=G, -1=F)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "acc", label: "Number of Sharps (+) or Flats (-)", formula: "pos", unit: "" }
    ],
    theory: "The circle of fifths is a geometric representation of relationships among the 12 pitch classes of the chromatic scale.",
    faq: [],
    seoMeta: { title: "Key Signature Calculator", description: "Calculate key signatures.", keywords: "key signature calculator" }
  },
  {
    id: "music-duration-calculator", name: "Music Duration Calculator", description: "Calculate total duration of a sheet music piece.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Duration (s)} = \\text{Measures} \\times \\frac{\\text{Beats per Measure}}{\\text{BPM}/60}",
    inputs: [
      { id: "m", label: "Total Measures", type: "number", defaultValue: 100 },
      { id: "bpm", label: "BPM", type: "number", defaultValue: 120 },
      { id: "bpm_m", label: "Beats per Measure", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "dur", label: "Total Duration", formula: "m * (bpm_m / (bpm / 60))", unit: "s" },
      { id: "min", label: "Minutes", formula: "(m * (bpm_m / (bpm / 60))) / 60", unit: "min" }
    ],
    theory: "Multiplies total beats by the time per beat.",
    faq: [],
    seoMeta: { title: "Music Duration Calculator", description: "Calculate sheet music duration.", keywords: "music duration calculator" }
  },
  {
    id: "music-interval-calculator", name: "Music Interval Calculator", description: "Calculate semitone distance between two numeric notes.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Interval} = |N_2 - N_1|",
    inputs: [
      { id: "n1", label: "Note 1 (MIDI Note Number)", type: "number", defaultValue: 60 },
      { id: "n2", label: "Note 2 (MIDI Note Number)", type: "number", defaultValue: 67 }
    ],
    outputs: [
      { id: "int", label: "Semitone Difference", formula: "abs(n2 - n1)", unit: "semitones" }
    ],
    theory: "In MIDI notation, each integer step is one semitone. C4 is typically 60.",
    faq: [],
    seoMeta: { title: "Music Interval Calculator", description: "Calculate semitones between notes.", keywords: "music interval calculator" }
  },
  {
    id: "music-scale-calculator", name: "Music Scale Calculator", description: "Generate numeric steps for a scale.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Major Scale} = [2, 2, 1, 2, 2, 2, 1]",
    inputs: [
      { id: "r", label: "Root Note (MIDI, e.g. 60=C)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "m2", label: "Major 2nd Note", formula: "r + 2", unit: "" },
      { id: "m3", label: "Major 3rd Note", formula: "r + 4", unit: "" },
      { id: "p4", label: "Perfect 4th Note", formula: "r + 5", unit: "" }
    ],
    theory: "Scales are defined by specific intervals (steps) from the root note.",
    faq: [],
    seoMeta: { title: "Music Scale Calculator", description: "Calculate notes in a scale.", keywords: "music scale calculator" }
  },
  {
    id: "music-transposition-calculator", name: "Music Transposition Calculator", description: "Calculate transposed frequency.",
    category: "other", subcategory: "music",
    scientificFormula: "f_2 = f_1 \\times 2^{n/12}",
    inputs: [
      { id: "f1", label: "Original Frequency (Hz)", type: "number", defaultValue: 440 },
      { id: "n", label: "Semitones to Transpose", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "f2", label: "New Frequency", formula: "f1 * 2^(n/12)", unit: "Hz" }
    ],
    theory: "Because the musical scale is logarithmic, each semitone increases frequency by a factor of 2^(1/12).",
    faq: [],
    seoMeta: { title: "Music Transposition Calculator", description: "Calculate pitch transposition.", keywords: "pitch transposition calculator" }
  },
  {
    id: "note-frequency-calculator", name: "Note Frequency Calculator", description: "Calculate frequency from MIDI note number.",
    category: "other", subcategory: "music",
    scientificFormula: "f = 440 \\times 2^{(d - 69)/12}",
    inputs: [
      { id: "d", label: "MIDI Note Number (A4 = 69)", type: "number", defaultValue: 69 },
      { id: "a4", label: "A4 Tuning Reference (Hz)", type: "number", defaultValue: 440 }
    ],
    outputs: [
      { id: "f", label: "Frequency", formula: "a4 * 2^((d - 69)/12)", unit: "Hz" }
    ],
    theory: "MIDI note 69 is A4. This formula calculates the exact Hertz frequency for any MIDI note.",
    faq: [],
    seoMeta: { title: "Note to Frequency Calculator", description: "Convert MIDI notes to Hertz.", keywords: "note frequency calculator" }
  },
  {
    id: "port-length-calculator", name: "Port Length Calculator", description: "Calculate subwoofer port length for tuning.",
    category: "other", subcategory: "music",
    scientificFormula: "L_v = \\frac{23562.5 \\times D_v^2 \\times N_p}{V_b \\times F_b^2} - 0.732 \\times D_v",
    inputs: [
      { id: "dv", label: "Port Diameter (inches)", type: "number", defaultValue: 4 },
      { id: "np", label: "Number of Ports", type: "number", defaultValue: 1 },
      { id: "vb", label: "Box Volume (cu ft)", type: "number", defaultValue: 2 },
      { id: "fb", label: "Tuning Frequency (Hz)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "lv", label: "Port Length", formula: "((23562.5 * dv^2 * np) / (vb * fb^2)) - (0.732 * dv)", unit: "inches" }
    ],
    theory: "Calculates the length of a cylindrical port needed to tune a subwoofer enclosure to a specific frequency.",
    faq: [],
    seoMeta: { title: "Subwoofer Port Length Calculator", description: "Calculate port length for subwoofer tuning.", keywords: "port length calculator, subwoofer tuning" }
  },
  {
    id: "quiz-port-length-calculator", name: "Quiz: Port Length Calculator", description: "Interactive quiz logic for port lengths.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Same as Port Length}",
    inputs: [
      { id: "dv", label: "Port Diameter (inches)", type: "number", defaultValue: 4 },
      { id: "vb", label: "Box Volume (cu ft)", type: "number", defaultValue: 2 },
      { id: "fb", label: "Tuning Frequency (Hz)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "lv", label: "Required Length", formula: "((23562.5 * dv^2 * 1) / (vb * fb^2)) - (0.732 * dv)", unit: "inches" }
    ],
    theory: "A simplified version of the port length tool.",
    faq: [],
    seoMeta: { title: "Quiz: Port Length", description: "Port length quiz tool.", keywords: "port length quiz" }
  },
  {
    id: "semitone-calculator", name: "Semitone Calculator", description: "Calculate frequency ratio for N semitones.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Ratio} = 2^{n/12}",
    inputs: [
      { id: "n", label: "Number of Semitones", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "r", label: "Frequency Multiplier", formula: "2^(n/12)", unit: "x" }
    ],
    theory: "A perfect fifth (7 semitones) has a ratio of approximately 1.498 (close to 3:2).",
    faq: [],
    seoMeta: { title: "Semitone Ratio Calculator", description: "Calculate frequency ratios.", keywords: "semitone calculator" }
  },
  {
    id: "speaker-box-calculator", name: "Speaker Box Calculator", description: "Calculate interior volume of a speaker box.",
    category: "other", subcategory: "music",
    scientificFormula: "V = (W - 2t) \\times (H - 2t) \\times (D - 2t)",
    inputs: [
      { id: "w", label: "External Width (inches)", type: "number", defaultValue: 16 },
      { id: "h", label: "External Height (inches)", type: "number", defaultValue: 14 },
      { id: "d", label: "External Depth (inches)", type: "number", defaultValue: 12 },
      { id: "t", label: "Wood Thickness (inches)", type: "number", defaultValue: 0.75 }
    ],
    outputs: [
      { id: "v_in", label: "Internal Volume", formula: "(w - 2*t) * (h - 2*t) * (d - 2*t)", unit: "cu in" },
      { id: "v_ft", label: "Internal Volume", formula: "((w - 2*t) * (h - 2*t) * (d - 2*t)) / 1728", unit: "cu ft" }
    ],
    theory: "Subtracts the material thickness from external dimensions to find true internal airspace.",
    faq: [],
    seoMeta: { title: "Speaker Box Volume Calculator", description: "Calculate internal airspace for speaker enclosures.", keywords: "speaker box calculator" }
  },
  {
    id: "vocal-range-calculator", name: "Vocal Range Calculator", description: "Calculate vocal range span in semitones.",
    category: "other", subcategory: "music",
    scientificFormula: "\\text{Range} = |\\text{Highest MIDI} - \\text{Lowest MIDI}|",
    inputs: [
      { id: "low", label: "Lowest Note (MIDI, e.g. E2 = 40)", type: "number", defaultValue: 40 },
      { id: "high", label: "Highest Note (MIDI, e.g. C5 = 72)", type: "number", defaultValue: 72 }
    ],
    outputs: [
      { id: "semi", label: "Total Semitones", formula: "high - low", unit: "semitones" },
      { id: "oct", label: "Total Octaves", formula: "(high - low) / 12", unit: "octaves" }
    ],
    theory: "Vocal range is the measure of the breadth of pitches that a human voice can phonate.",
    faq: [],
    seoMeta: { title: "Vocal Range Calculator", description: "Calculate octaves and semitones in your vocal range.", keywords: "vocal range calculator" }
  }
];
