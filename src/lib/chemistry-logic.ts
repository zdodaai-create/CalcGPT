export const ATOMIC_WEIGHTS: Record<string, number> = {
  H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.180,
  Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974, S: 32.06, Cl: 35.45, Ar: 39.95, K: 39.098, Ca: 40.078,
  Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38,
  Ga: 69.723, Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798, Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.224,
  Nb: 92.906, Mo: 95.95, Tc: 98, Ru: 101.07, Rh: 102.91, Pd: 106.42, Ag: 107.87, Cd: 112.41, In: 114.82, Sn: 118.71,
  Sb: 121.76, Te: 127.60, I: 126.90, Xe: 131.29, Cs: 132.91, Ba: 137.33, La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24,
  Pm: 145, Sm: 150.36, Eu: 151.96, Gd: 157.25, Tb: 158.93, Dy: 162.50, Ho: 164.93, Er: 167.26, Tm: 168.93, Yb: 173.05,
  Lu: 174.97, Hf: 178.49, Ta: 180.95, W: 183.84, Re: 186.21, Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97, Hg: 200.59,
  Tl: 204.38, Pb: 207.2, Bi: 208.98, Po: 209, At: 210, Rn: 222, Fr: 223, Ra: 226, Ac: 227, Th: 232.04, Pa: 231.04,
  U: 238.03, Np: 237, Pu: 244, Am: 243, Cm: 247, Bk: 247, Cf: 251, Es: 252, Fm: 257, Md: 258, No: 259, Lr: 262,
  Rf: 267, Db: 268, Sg: 271, Bh: 272, Hs: 270, Mt: 276, Ds: 281, Rg: 280, Cn: 285, Nh: 284, Fl: 289, Mc: 288, Lv: 293, Ts: 294, Og: 294
};

export function calculateMolarMass(formula: string): number {
  if (!formula) return 0;
  
  try {
    // Basic parser for formulas like H2O, C6H12O6, Ca(OH)2
    let i = 0;
    
    function parseGroup(): Record<string, number> {
      const counts: Record<string, number> = {};
      while (i < formula.length && formula[i] !== ')') {
        if (formula[i] === '(') {
          i++;
          const inner = parseGroup();
          if (formula[i] !== ')') throw new Error("Missing closing parenthesis");
          i++; // skip ')'
          let multStr = '';
          while (i < formula.length && /[0-9]/.test(formula[i])) {
            multStr += formula[i];
            i++;
          }
          const mult = multStr ? parseInt(multStr) : 1;
          for (const [el, count] of Object.entries(inner)) {
            counts[el] = (counts[el] || 0) + count * mult;
          }
        } else {
          let el = formula[i];
          i++;
          if (i < formula.length && /[a-z]/.test(formula[i])) {
            el += formula[i];
            i++;
          }
          let numStr = '';
          while (i < formula.length && /[0-9]/.test(formula[i])) {
            numStr += formula[i];
            i++;
          }
          const num = numStr ? parseInt(numStr) : 1;
          counts[el] = (counts[el] || 0) + num;
        }
      }
      return counts;
    }
    
    const elements = parseGroup();
    let mass = 0;
    for (const [el, count] of Object.entries(elements)) {
      if (!ATOMIC_WEIGHTS[el]) throw new Error(`Unknown element: ${el}`);
      mass += ATOMIC_WEIGHTS[el] * count;
    }
    return mass;
  } catch (e) {
    return NaN; // Indicate error
  }
}

export function getElectronConfiguration(atomicNumber: number): string {
  if (atomicNumber < 1 || atomicNumber > 118 || isNaN(atomicNumber)) return "Invalid Atomic Number";
  
  const orbitals = [
    { label: "1s", capacity: 2 },
    { label: "2s", capacity: 2 },
    { label: "2p", capacity: 6 },
    { label: "3s", capacity: 2 },
    { label: "3p", capacity: 6 },
    { label: "4s", capacity: 2 },
    { label: "3d", capacity: 10 },
    { label: "4p", capacity: 6 },
    { label: "5s", capacity: 2 },
    { label: "4d", capacity: 10 },
    { label: "5p", capacity: 6 },
    { label: "6s", capacity: 2 },
    { label: "4f", capacity: 14 },
    { label: "5d", capacity: 10 },
    { label: "6p", capacity: 6 },
    { label: "7s", capacity: 2 },
    { label: "5f", capacity: 14 },
    { label: "6d", capacity: 10 },
    { label: "7p", capacity: 6 }
  ];
  
  let remaining = atomicNumber;
  let config: string[] = [];
  
  for (const orb of orbitals) {
    if (remaining <= 0) break;
    const fill = Math.min(remaining, orb.capacity);
    config.push(`${orb.label}${fill}`);
    remaining -= fill;
  }
  
  return config.join(" ");
}
