import { CalculatorConfig } from "./calculator-types";

export const SPORTS_CALCULATORS_PERFORMANCE: CalculatorConfig[] = [
  // 💪 PERFORMANCE
  {
    id: "anaerobic-threshold-calculator", name: "Anaerobic Threshold Calculator",
    description: "Estimate your anaerobic threshold heart rate using age or maximum heart rate.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{AT HR} = 0.85 \\cdot (220 - \\text{Age})",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "at_hr", label: "Estimated Anaerobic Threshold Heart Rate", formula: "0.85 * (220 - age)", unit: "BPM" }
    ],
    theory: "Anaerobic threshold (AT) is the exertion level where lactate begins to accumulate in the bloodstream faster than it can be cleared. Training near this threshold improves endurance by delaying the onset of muscle fatigue.",
    faq: [
      { question: "What is anaerobic threshold?", answer: "It is the point during intense exercise at which your body switches from aerobic metabolism to anaerobic metabolism, causing lactic acid to build up rapidly." }
    ],
    seoMeta: { title: "Anaerobic Threshold Calculator", description: "Calculate your anaerobic threshold heart rate for endurance training.", keywords: "anaerobic threshold, lactate threshold, heart rate zone" }
  },
  {
    id: "bruce-protocol-mets-calculator", name: "Bruce Protocol METs Calculator",
    description: "Calculate METs and VO2 Max from a treadmill Bruce Protocol stress test.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{VO2 Max} = 14.8 - 1.379 \\cdot T + 0.451 \\cdot T^2 - 0.012 \\cdot T^3",
    inputs: [
      { id: "time_min", label: "Treadmill Time (minutes)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "vo2_max", label: "Estimated VO2 Max", formula: "14.8 - 1.379 * time_min + 0.451 * time_min^2 - 0.012 * time_min^3", unit: "ml/kg/min" },
      { id: "mets", label: "METs", formula: "(14.8 - 1.379 * time_min + 0.451 * time_min^2 - 0.012 * time_min^3) / 3.5", unit: "" }
    ],
    theory: "The Bruce Protocol is a standardized cardiovascular treadmill test. The total duration of the test determines a mathematical estimate of the individual's maximal oxygen uptake (VO2 Max) and MET capacity.",
    faq: [
      { question: "What is the Bruce Protocol?", answer: "It is a treadmill test where speed and incline increase every 3 minutes. It is used to assess cardiac capacity and aerobic fitness." }
    ],
    seoMeta: { title: "Bruce Protocol Treadmill METs Calculator", description: "Calculate METs and VO2 Max from your Bruce Protocol duration.", keywords: "Bruce Protocol, METs, treadmill test, VO2 Max" }
  },
  {
    id: "erg-calculator", name: "ERG Calculator",
    description: "Calculate split times, speed, and distance on a rowing ergometer.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{Pace} = 500 \\cdot \\frac{\\text{Time}}{\\text{Distance}}",
    inputs: [
      { id: "time_sec", label: "Total Time (seconds)", type: "number", defaultValue: 480 },
      { id: "distance_m", label: "Distance (meters)", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "pace_500m", label: "Pace per 500m", formula: "500 * time_sec / distance_m", unit: "s" }
    ],
    theory: "On a rowing machine (ergometer), performance is measured as the time required to row 500 meters. The erg split time represents this rate.",
    faq: [
      { question: "What is a split time?", answer: "Split time is the time it takes to complete a specific distance segment. In rowing, the standard segment is 500 meters." }
    ],
    seoMeta: { title: "Rowing Ergometer Split Calculator", description: "Calculate rowing machine pace split per 500 meters.", keywords: "rowing erg, split calculator, ergometer, 500m pace" }
  },
  {
    id: "heart-rate-calculator", name: "Heart Rate Calculator",
    description: "Calculate your basic target heart rate ranges based on age.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{Max HR} = 220 - \\text{Age}",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "max_hr", label: "Max Heart Rate", formula: "220 - age", unit: "BPM" }
    ],
    theory: "Your maximum heart rate decreases with age. Training intensities are structured as percentages of this maximum heart rate.",
    faq: [
      { question: "How accurate is the 220-age formula?", answer: "It is a standard estimation formula. Actual maximum heart rates can vary by 10-15 BPM depending on genetics and fitness levels." }
    ],
    seoMeta: { title: "Maximum Heart Rate Calculator", description: "Calculate your age-based maximum heart rate.", keywords: "max heart rate, HR zones, age-based heart rate" }
  },
  {
    id: "heart-rate-recovery-calculator", name: "Heart Rate Recovery Calculator",
    description: "Evaluate cardiovascular fitness by measuring how quickly heart rate drops after intense exercise.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{HRR} = \\text{HR}_{\\text{peak}} - \\text{HR}_{\\text{1-min}}",
    inputs: [
      { id: "hr_peak", label: "Peak Heart Rate during Exercise", type: "number", defaultValue: 175 },
      { id: "hr_1min", label: "Heart Rate 1 Minute Post-Exercise", type: "number", defaultValue: 145 }
    ],
    outputs: [
      { id: "hrr", label: "Heart Rate Recovery", formula: "hr_peak - hr_1min", unit: "BPM" }
    ],
    theory: "Heart Rate Recovery (HRR) measures the drop in heart rate one minute after halting exercise. A faster drop indicates a stronger, more efficient parasympathetic nervous system and superior cardiac fitness.",
    faq: [
      { question: "What is a normal heart rate recovery score?", answer: "A drop of 12 BPM or more in the first minute is considered normal. Elite athletes often experience drops of 30-50 BPM." }
    ],
    seoMeta: { title: "Heart Rate Recovery Calculator", description: "Calculate your heart rate recovery index after workouts.", keywords: "heart rate recovery, HRR, cardiac health, fitness assessment" }
  },
  {
    id: "heart-rate-zone-calculator", name: "Heart Rate Zone Calculator",
    description: "Calculate five heart rate training zones based on your maximum heart rate.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{Zone 5 Range} = 90\\% \\text{ to } 100\\% \\text{ of } \\text{Max HR}",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "max_hr", label: "Max Heart Rate", formula: "220 - age", unit: "BPM" },
      { id: "z5_low", label: "Zone 5 (Anaerobic) Low Limit", formula: "0.90 * (220 - age)", unit: "BPM" }
    ],
    theory: "Heart rate training is divided into five metabolic zones, from Zone 1 (active recovery) to Zone 5 (maximal anaerobic effort). Each zone develops specific physiological adaptations.",
    faq: [
      { question: "What are the training zones?", answer: "Zone 1: Active Recovery. Zone 2: Aerobic Endurance. Zone 3: Tempo. Zone 4: Lactate Threshold. Zone 5: Anaerobic Power." }
    ],
    seoMeta: { title: "Heart Rate Zones Calculator", description: "Find your 5 heart rate training zones for optimal fitness.", keywords: "heart rate zones, aerobic training, zone 2 cardio" }
  },
  {
    id: "hiking-time-calculator", name: "Hiking Time Calculator",
    description: "Calculate hiking duration using Naismith's Rule for mountain trekking.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{Time (min)} = 60 \\cdot \\left(\\frac{\\text{Distance (km)}}{5} + \\frac{\\text{Ascent (m)}}{600}\\right)",
    inputs: [
      { id: "distance_km", label: "Trail Distance (km)", type: "number", defaultValue: 10 },
      { id: "ascent_m", label: "Total Ascent (meters)", type: "number", defaultValue: 600 }
    ],
    outputs: [
      { id: "duration_min", label: "Estimated Hiking Time", formula: "(distance_km / 5 + ascent_m / 600) * 60", unit: "min" }
    ],
    theory: "Naismith's Rule estimates hiking time by allowing 1 hour for every 5 km of horizontal distance, plus an additional 1 hour for every 600 meters of vertical ascent.",
    faq: [
      { question: "Does this account for descent?", answer: "No, standard Naismith's Rule only adds time for climbing. Descending steep, technical trails can also slow pace, which may require adjustments." }
    ],
    seoMeta: { title: "Hiking Time Calculator", description: "Calculate trail trekking time using Naismith's Rule.", keywords: "hiking time, trail pace, Naismith rule, mountain walk duration" }
  },
  {
    id: "max-heart-rate-calculator", name: "Max Heart Rate Calculator",
    description: "Estimate your maximum heart rate using both the standard and Tanaka formulas.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{Standard: } 220 - A, \\quad \\text{Tanaka: } 208 - 0.7 \\cdot A",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "max_hr_standard", label: "Standard formula (220 - Age)", formula: "220 - age", unit: "BPM" },
      { id: "max_hr_tanaka", label: "Tanaka formula (208 - 0.7 * Age)", formula: "208 - 0.7 * age", unit: "BPM" }
    ],
    theory: "Maximum heart rate is the highest heart rate achievable by an individual under maximal stress. The Tanaka formula is scientifically regarded as more accurate for older populations.",
    faq: [
      { question: "Why are there different formulas?", answer: "The 220-age formula was developed from general observations, while the Tanaka formula was created using a meta-analysis of scientific heart rate studies to provide a better fit." }
    ],
    seoMeta: { title: "Max Heart Rate Calculator", description: "Compare Standard and Tanaka max heart rate estimations.", keywords: "max heart rate, Tanaka formula, cardiovascular threshold" }
  },
  {
    id: "met-minutes-calculator", name: "MET Minutes Calculator",
    description: "Calculate weekly MET-minutes to monitor total physical exercise volume.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{MET Minutes} = \\text{MET} \\cdot \\text{Duration (min)}",
    inputs: [
      { id: "met", label: "Activity MET Intensity", type: "number", defaultValue: 6.0 },
      { id: "duration_min", label: "Activity Duration (min)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "met_minutes", label: "MET-minutes Score", formula: "met * duration_min", unit: "MET-min" }
    ],
    theory: "MET-minutes represent the exercise intensity (MET) multiplied by duration. Health guidelines recommend a minimum volume of 500 to 1,000 MET-minutes per week for general cardiovascular health benefits.",
    faq: [
      { question: "What is a healthy MET-minute goal?", answer: "Most medical guidelines suggest hitting a target of 500-1000 MET-minutes per week, which is equivalent to 150 minutes of brisk walking." }
    ],
    seoMeta: { title: "MET Minutes Activity Calculator", description: "Calculate exercise volume in MET-minutes.", keywords: "MET minutes, exercise volume, physical activity index" }
  },
  {
    id: "target-heart-rate-calculator", name: "Target Heart Rate Calculator",
    description: "Calculate target training heart rate zones using the Karvonen formula.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{THR} = \\left(\\text{Max HR} - \\text{Resting HR}\\right) \\cdot I + \\text{Resting HR}",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 },
      { id: "resting_hr", label: "Resting Heart Rate (BPM)", type: "number", defaultValue: 60 },
      { id: "intensity_pct", label: "Target Intensity (%)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "target_hr", label: "Target Heart Rate", formula: "((220 - age - resting_hr) * (intensity_pct / 100)) + resting_hr", unit: "BPM" }
    ],
    theory: "The Karvonen formula calculates target heart rate based on Heart Rate Reserve (Max HR - Resting HR). It accounts for resting fitness levels, making target zones highly personalized.",
    faq: [
      { question: "Why account for resting heart rate?", answer: "A lower resting heart rate indicates a larger heart stroke volume and superior cardiovascular fitness. Including resting rate scales intensity appropriately." }
    ],
    seoMeta: { title: "Target Heart Rate (Karvonen) Calculator", description: "Calculate target heart rates using heart rate reserve.", keywords: "target heart rate, Karvonen formula, heart rate reserve, resting HR" }
  },
  {
    id: "vo2-max-calculator", name: "VO2 Max Calculator – Aerobic Capacity",
    description: "Calculate VO2 Max from resting heart rate and maximum heart rate using the Uth-Sørensen-Overgaard-Pedersen method.",
    category: "sports", subcategory: "performance",
    scientificFormula: "\\text{VO2 Max} = 15 \\cdot \\frac{\\text{Max HR}}{\\text{Resting HR}}",
    inputs: [
      { id: "resting_hr", label: "Resting Heart Rate (BPM)", type: "number", defaultValue: 60 },
      { id: "max_hr", label: "Maximum Heart Rate (BPM)", type: "number", defaultValue: 180 }
    ],
    outputs: [
      { id: "vo2_max", label: "VO2 Max", formula: "15 * (max_hr / resting_hr)", unit: "ml/kg/min" }
    ],
    theory: "This simple method estimates VO2 Max (the maximum volume of oxygen your body can consume during peak physical work) using the ratio of maximum to resting heart rates.",
    faq: [
      { question: "What is VO2 Max?", answer: "It measures the maximum amount of oxygen your body can use during intense exercise. It is the gold standard metric of aerobic capacity." }
    ],
    seoMeta: { title: "VO2 Max Aerobic Capacity Calculator", description: "Calculate VO2 Max using resting and maximum heart rates.", keywords: "VO2 Max, aerobic capacity, fitness test, oxygen intake" }
  },

  // 🏃 RUNNING
  {
    id: "magic-mile-calculator", name: "Magic Mile Calculator",
    description: "Estimate race paces for different distances based on a one-mile time trial.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Marathon Pace (s/mi)} = \\text{Mile Time (s)} \\cdot 1.3",
    inputs: [
      { id: "mile_time_sec", label: "One-Mile Run Time (seconds)", type: "number", defaultValue: 420 }
    ],
    outputs: [
      { id: "marathon_pace", label: "Estimated Marathon Pace", formula: "mile_time_sec * 1.3", unit: "s/mile" }
    ],
    theory: "Jeff Galloway's 'Magic Mile' predicts training and racing paces based on a one-mile time trial. Marathon pace is typically 1.3 times the pace of the test mile.",
    faq: [
      { question: "What is the Magic Mile?", answer: "It is a time trial run to gauge fitness, set training paces, and predict potential race finishes." }
    ],
    seoMeta: { title: "Galloway Magic Mile Pace Calculator", description: "Predict long-distance running paces from a mile time trial.", keywords: "magic mile, Jeff Galloway, race predictor, running pace" }
  },
  {
    id: "marathon-pace-calculator", name: "Marathon Pace Calculator",
    description: "Calculate the average running pace needed to finish a marathon in your goal time.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Pace (min/mi)} = \\frac{\\text{Total Goal Time (min)}}{26.2}",
    inputs: [
      { id: "time_min", label: "Goal Marathon Time (minutes)", type: "number", defaultValue: 240 }
    ],
    outputs: [
      { id: "pace_mi", label: "Required Pace", formula: "time_min / 26.2", unit: "min/mile" }
    ],
    theory: "A marathon is exactly 26.2 miles (42.195 km). Maintaining a steady pace is essential to avoid running out of glycogen (hitting the wall) late in the race.",
    faq: [
      { question: "What is a good marathon time?", answer: "Finishing a marathon under 4 hours is a common milestone for recreational runners. The world record is just over 2 hours." }
    ],
    seoMeta: { title: "Marathon Pace Calculator", description: "Find the pace required to hit your target marathon finishing time.", keywords: "marathon pace, marathon time, run pace, pace per mile" }
  },
  {
    id: "pace-calculator", name: "Pace Calculator",
    description: "Calculate running pace from time and distance.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Pace} = \\frac{\\text{Time}}{\\text{Distance}}",
    inputs: [
      { id: "time_min", label: "Duration (minutes)", type: "number", defaultValue: 50 },
      { id: "distance", label: "Distance (miles or km)", type: "number", defaultValue: 6.2 }
    ],
    outputs: [
      { id: "pace", label: "Average Pace", formula: "time_min / distance", unit: "min/unit" }
    ],
    theory: "Pace measures speed in terms of the minutes taken to complete one unit of distance. It is the primary metric runners use to manage effort.",
    faq: [
      { question: "What is the difference between speed and pace?", answer: "Speed is distance over time (e.g. miles per hour), while pace is time over distance (e.g. minutes per mile). Pace is easier to monitor on watches during runs." }
    ],
    seoMeta: { title: "Running Pace Calculator", description: "Calculate average pace per mile or kilometer.", keywords: "pace calculator, running pace, time distance pace" }
  },
  {
    id: "race-predictor", name: "Race Predictor – Running Time Calculator",
    description: "Predict future race times using the Riegel formula based on a recent race result.",
    category: "sports", subcategory: "running",
    scientificFormula: "T_2 = T_1 \\cdot \\left(\\frac{D_2}{D_1}\\right)^{1.06}",
    inputs: [
      { id: "time1_min", label: "Recent Race Time (minutes)", type: "number", defaultValue: 22 },
      { id: "dist1", label: "Recent Race Distance (km)", type: "number", defaultValue: 5 },
      { id: "dist2", label: "Target Race Distance (km)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "predicted_time", label: "Predicted Race Time", formula: "time1_min * (dist2 / dist1)^1.06", unit: "min" }
    ],
    theory: "Pete Riegel's formula predicts race finish times for other distances based on a current performance, assuming equivalent conditioning and endurance levels.",
    faq: [
      { question: "How accurate is the Riegel formula?", answer: "It is highly accurate for distances from 1,500m up to the marathon. It assumes you train specifically for the target distance." }
    ],
    seoMeta: { title: "Riegel Race Predictor Calculator", description: "Predict future race times from recent run results.", keywords: "race predictor, Riegel formula, running times, race prediction" }
  },
  {
    id: "race-time-improvement-calculator", name: "Race Time Improvement Calculator",
    description: "Calculate the time difference and percentage improvement between two runs.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\Delta T = T_{\\text{old}} - T_{\\text{new}}",
    inputs: [
      { id: "old_time_sec", label: "Previous Race Time (seconds)", type: "number", defaultValue: 1320 },
      { id: "new_time_sec", label: "New Race Time (seconds)", type: "number", defaultValue: 1260 }
    ],
    outputs: [
      { id: "diff_sec", label: "Time Saved", formula: "old_time_sec - new_time_sec", unit: "s" },
      { id: "improvement_pct", label: "Percentage Improvement", formula: "((old_time_sec - new_time_sec) / old_time_sec) * 100", unit: "%" }
    ],
    theory: "This tool measures the improvement in running times over a specific course or distance, displaying progress in both total seconds saved and percentage gain.",
    faq: [
      { question: "What is a significant time improvement?", answer: "Even a 1-2% improvement is significant for competitive runners. Novice runners may see larger jumps (5-10%) as they build baseline endurance." }
    ],
    seoMeta: { title: "Race Time Improvement Calculator", description: "Calculate running time progression and percentage gains.", keywords: "running improvement, PR calculator, time saved, race progress" }
  },
  {
    id: "running-pace-calculator", name: "Running Pace Calculator",
    description: "Determine the pace required to cover a distance in a target time.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Pace} = \\frac{\\text{Time}}{\\text{Distance}}",
    inputs: [
      { id: "time_min", label: "Total Target Time (minutes)", type: "number", defaultValue: 45 },
      { id: "distance", label: "Distance (miles or km)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "pace", label: "Target Pace", formula: "time_min / distance", unit: "min/unit" }
    ],
    theory: "Pace calculations help runners structure workouts and pacing plans to achieve a specific finish time.",
    faq: [
      { question: "How do I maintain a target pace?", answer: "Use a GPS sports watch, follow marker guides on tracks, and run consistent intervals to build muscle memory." }
    ],
    seoMeta: { title: "Running Pace Target Calculator", description: "Calculate the running pace needed for a target finish time.", keywords: "running pace, target time pace, pacing index" }
  },
  {
    id: "running-split-calculator", name: "Running Split Calculator",
    description: "Calculate equal split times for a run or track workout.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Split Time} = \\frac{\\text{Total Time}}{\\text{Splits}}",
    inputs: [
      { id: "time_sec", label: "Total Goal Time (seconds)", type: "number", defaultValue: 1200 },
      { id: "splits_count", label: "Number of Splits", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "split_time", label: "Time per Split", formula: "time_sec / splits_count", unit: "s" }
    ],
    theory: "Splits divide a workout distance into equal segments (e.g. kilometers or miles) to help runners evaluate their pacing consistency and stamina throughout a workout.",
    faq: [
      { question: "What is a negative split?", answer: "A negative split means running the second half of a race faster than the first half. It is considered the optimal strategy for long-distance racing." }
    ],
    seoMeta: { title: "Running Split Calculator", description: "Calculate equal running split times for pacing workouts.", keywords: "running splits, interval times, track split calculator" }
  },
  {
    id: "steps-to-km-calculator", name: "Steps to km Calculator",
    description: "Convert walking or running steps into kilometers based on stride length.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Distance (km)} = \\frac{\\text{Steps} \\cdot \\text{Stride (cm)}}{100000}",
    inputs: [
      { id: "steps", label: "Step Count", type: "number", defaultValue: 8000 },
      { id: "stride_cm", label: "Average Stride Length (cm)", type: "number", defaultValue: 75 }
    ],
    outputs: [
      { id: "distance_km", label: "Distance in Kilometers", formula: "steps * (stride_cm / 100) / 1000", unit: "km" }
    ],
    theory: "This calculator determines walking or running distance by multiplying the total step count by average stride length, converting the result to kilometers.",
    faq: [
      { question: "What is an average stride length?", answer: "For walking, the average stride length is about 70-75 cm (2.3 to 2.5 feet). For running, stride length increases to 100-140 cm." }
    ],
    seoMeta: { title: "Steps to Kilometers (km) Calculator", description: "Convert pedometer steps to kilometers using stride length.", keywords: "steps to km, steps converter, walk distance" }
  },
  {
    id: "steps-to-miles-calculator", name: "Steps to Miles Calculator",
    description: "Convert your pedometer steps into miles based on average stride length.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Distance (mi)} = \\frac{\\text{Steps} \\cdot \\text{Stride (in)}}{63360}",
    inputs: [
      { id: "steps", label: "Step Count", type: "number", defaultValue: 10000 },
      { id: "stride_in", label: "Average Stride Length (inches)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "distance_miles", label: "Distance in Miles", formula: "steps * stride_in / 63360", unit: "mi" }
    ],
    theory: "Convert steps to miles by multiplying the step count by stride length in inches, and dividing the result by the number of inches in a mile (63,360).",
    faq: [
      { question: "How many steps are in a mile?", answer: "For an average stride of 30 inches, 10,000 steps is approximately 4.7 miles. A mile takes roughly 2,000 steps." }
    ],
    seoMeta: { title: "Steps to Miles Calculator", description: "Convert steps to distance in miles using stride length.", keywords: "steps to miles, step count converter, walking miles" }
  },
  {
    id: "stride-length-calculator", name: "Stride Length Calculator",
    description: "Calculate your average stride length from a known walking or running distance and step count.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Stride (cm)} = \\frac{\\text{Distance (m)} \\cdot 100}{\\text{Steps}}",
    inputs: [
      { id: "distance_m", label: "Covered Distance (meters)", type: "number", defaultValue: 100 },
      { id: "steps", label: "Steps Counted", type: "number", defaultValue: 135 }
    ],
    outputs: [
      { id: "stride_cm", label: "Average Stride Length", formula: "(distance_m * 100) / steps", unit: "cm" }
    ],
    theory: "Stride length is the distance from heel-strike to heel-strike of the same foot. It is calculated by dividing total distance by steps and scaling to centimeters.",
    faq: [
      { question: "How do I measure my stride length accurately?", answer: "Walk or run a known distance (like 100 meters on a track), count your steps, and divide the distance by the step count." }
    ],
    seoMeta: { title: "Stride Length Calculator", description: "Calculate your average stride length in centimeters.", keywords: "stride length, walking stride, run gait, step distance" }
  },
  {
    id: "training-pace-calculator", name: "Training Pace Calculator",
    description: "Calculate recommended easy and tempo paces for training based on target race pace.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{Easy} = 1.25 \\cdot P, \\quad \\text{Tempo} = 1.08 \\cdot P",
    inputs: [
      { id: "target_pace_sec", label: "Target Race Pace (seconds/mile)", type: "number", defaultValue: 480 }
    ],
    outputs: [
      { id: "easy_pace", label: "Easy Run Pace", formula: "target_pace_sec * 1.25", unit: "s/mile" },
      { id: "tempo_pace", label: "Tempo Run Pace", formula: "target_pace_sec * 1.08", unit: "s/mile" }
    ],
    theory: "To build a strong aerobic foundation, training should vary in intensity. Easy runs build capillary networks, while tempo runs improve lactate clearance.",
    faq: [
      { question: "Why run slower than race pace?", answer: "Running slower (easy pace) builds aerobic capacity and strengthens joints with minimal fatigue, allowing for more training volume." }
    ],
    seoMeta: { title: "Training Pace Calculator", description: "Find your easy and tempo training running paces.", keywords: "training pace, running zones, easy run, tempo pace" }
  },
  {
    id: "vo2-max-runners-calculator", name: "VO2 Max Runners Calculator",
    description: "Estimate VO2 Max from running pace using the ACSM running equation.",
    category: "sports", subcategory: "running",
    scientificFormula: "\\text{VO2 Max} = 0.2 \\cdot \\text{Velocity (m/min)} + 31.8",
    inputs: [
      { id: "pace_min_mile", label: "Running Pace (min/mile)", type: "number", defaultValue: 8.5 }
    ],
    outputs: [
      { id: "vo2_est", label: "Estimated VO2 Max", formula: "0.2 * (1609.34 / pace_min_mile) + 0.9", unit: "ml/kg/min" }
    ],
    theory: "The American College of Sports Medicine (ACSM) running formula estimates oxygen consumption from running velocity, helping runners track fitness gains.",
    faq: [
      { question: "How does running speed relate to VO2?", answer: "Faster running requires more muscle work, which exponentially increases oxygen demand." }
    ],
    seoMeta: { title: "Runners VO2 Max Calculator", description: "Estimate VO2 Max from running pace speed.", keywords: "VO2 Max, running pace, ACSM equation, oxygen uptake" }
  },

  // 🏊🏽‍♀️🚴🏿‍♂️🏃🏻‍♀️ TRIATHLON
  {
    id: "average-triathlon-finishing-time-calculator", name: "Average Triathlon Finishing Time Calculator",
    description: "Sum the segments and transition times to estimate your total triathlon finishing time.",
    category: "sports", subcategory: "triathlon",
    scientificFormula: "\\text{Total Time} = \\text{Swim} + \\text{T1} + \\text{Bike} + \\text{T2} + \\text{Run}",
    inputs: [
      { id: "swim_min", label: "Swim Duration (minutes)", type: "number", defaultValue: 30 },
      { id: "t1_min", label: "Transition 1 (minutes)", type: "number", defaultValue: 4 },
      { id: "bike_min", label: "Bike Duration (minutes)", type: "number", defaultValue: 150 },
      { id: "t2_min", label: "Transition 2 (minutes)", type: "number", defaultValue: 3 },
      { id: "run_min", label: "Run Duration (minutes)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total_time", label: "Total Finishing Time", formula: "swim_min + t1_min + bike_min + t2_min + run_min", unit: "min" }
    ],
    theory: "Triathlon times include the swim, bike, and run legs, along with the transition periods (T1 and T2) between sports.",
    faq: [
      { question: "What are T1 and T2?", answer: "T1 (Transition 1) is the swap from swim to bike. T2 (Transition 2) is the swap from bike to run." }
    ],
    seoMeta: { title: "Triathlon Time Calculator", description: "Calculate total triathlon finishing time from split segments.", keywords: "triathlon time, transitions, split calculator" }
  },
  {
    id: "cycling-power-zones-calculator", name: "Cycling Power Zones Calculator",
    description: "Calculate Coggan power zones based on your Functional Threshold Power (FTP).",
    category: "sports", subcategory: "triathlon",
    scientificFormula: "\\text{Zone 2 (Endurance)} = 56\\% \\text{ to } 75\\% \\text{ of } \\text{FTP}",
    inputs: [
      { id: "ftp", label: "Functional Threshold Power (Watts)", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "z2_low", label: "Zone 2 Low (56%)", formula: "0.56 * ftp", unit: "W" },
      { id: "z2_high", label: "Zone 2 High (75%)", formula: "0.75 * ftp", unit: "W" }
    ],
    theory: "Andrew Coggan's power training zones define workload intensities relative to Functional Threshold Power (FTP), which is the maximum power a cyclist can sustain for one hour.",
    faq: [
      { question: "What is FTP?", answer: "Functional Threshold Power (FTP) is the highest average power output you can sustain for 60 minutes. It is the baseline metric for power training." }
    ],
    seoMeta: { title: "Cycling Power Zones (FTP) Calculator", description: "Calculate Coggan cycling power training zones.", keywords: "power zones, FTP, cycling wattage, Coggan zones" }
  },
  {
    id: "diy-sports-drink-calculator", name: "DIY Sports Drink Calculator",
    description: "Calculate carbohydrate and electrolyte proportions to make your own sports drink.",
    category: "sports", subcategory: "triathlon",
    scientificFormula: "\\text{Sugar (g)} = V \\cdot I_{\\text{carb}}, \\quad \\text{Salt (g)} = V \\cdot 1.2",
    inputs: [
      { id: "volume_ml", label: "Total Drink Volume (ml)", type: "number", defaultValue: 1000 },
      { id: "sugar_pct", label: "Target Carb Concentration (%)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "sugar_g", label: "Sugar Required", formula: "volume_ml * (sugar_pct / 100)", unit: "g" },
      { id: "salt_g", label: "Salt Required", formula: "volume_ml * 0.001", unit: "g" }
    ],
    theory: "Optimal hydration drinks contain a carbohydrate concentration of 6-8% along with small amounts of sodium to maximize fluid absorption and sustain blood glucose levels during workouts.",
    faq: [
      { question: "Why a 6% concentration?", answer: "Studies show concentrations above 8% slow down stomach emptying, which can cause cramping and digestive issues during workouts." }
    ],
    seoMeta: { title: "DIY Sports Drink Formula Calculator", description: "Calculate sugar and salt targets for homemade hydration drinks.", keywords: "sports drink, hydration, electrolyte drink, homemade sports drink" }
  },
  {
    id: "triathlon-heart-rate-training-zones-calculator", name: "Triathlon Heart Rate Training Zones Calculator",
    description: "Calculate heart rate zones based on Lactate Threshold Heart Rate (LTHR).",
    category: "sports", subcategory: "triathlon",
    scientificFormula: "\\text{Zone 2 Range} = 85\\% \\text{ to } 89\\% \\text{ of } \\text{LTHR}",
    inputs: [
      { id: "lthr", label: "Lactate Threshold Heart Rate (BPM)", type: "number", defaultValue: 165 }
    ],
    outputs: [
      { id: "z2_low", label: "Zone 2 Low (85% LTHR)", formula: "0.85 * lthr", unit: "BPM" },
      { id: "z2_high", label: "Zone 2 High (89% LTHR)", formula: "0.89 * lthr", unit: "BPM" }
    ],
    theory: "Joe Friel's heart rate zones are built around Lactate Threshold Heart Rate (LTHR). This provides a more accurate metric of cardiorespiratory threshold than simple age-based formulas.",
    faq: [
      { question: "What is LTHR?", answer: "Lactate Threshold Heart Rate (LTHR) is the average heart rate sustained during a maximum-effort 30-minute time trial." }
    ],
    seoMeta: { title: "Triathlon HR Zones (Joe Friel) Calculator", description: "Calculate training heart rate zones using LTHR.", keywords: "triathlon heart rate, Joe Friel zones, LTHR, lactate threshold" }
  },
  {
    id: "triathlon-nutrition-calculator", name: "Triathlon Nutrition Calculator",
    description: "Estimate carbohydrate requirements during a triathlon based on race duration.",
    category: "sports", subcategory: "triathlon",
    scientificFormula: "\\text{Carbs (g)} = \\text{Duration (hours)} \\cdot \\text{Carb Rate (g/h)}",
    inputs: [
      { id: "duration_hr", label: "Total Race Duration (hours)", type: "number", defaultValue: 5.5 },
      { id: "carb_rate_g_hr", label: "Carb Intake Rate (g/hour)", type: "number", defaultValue: 60, helpText: "Standard: 60-90 g/hr" }
    ],
    outputs: [
      { id: "total_carbs_g", label: "Total Carbohydrates Needed", formula: "duration_hr * carb_rate_g_hr", unit: "g" }
    ],
    theory: "Sustained endurance performance requires replenishing glycogen stores. Athletes typically target 60 to 90 grams of carbohydrate per hour, using a mix of glucose and fructose.",
    faq: [
      { question: "Can the body process more than 90g of carbs per hour?", answer: "Yes, by training your gut and using a multi-transport carbohydrate formula (such as a 2:1 ratio of maltodextrin to fructose), you can absorb up to 120 grams per hour." }
    ],
    seoMeta: { title: "Triathlon Carb Nutrition Calculator", description: "Estimate carbohydrate intake requirements during long races.", keywords: "triathlon nutrition, carbs per hour, endurance fuel, glycogen" }
  },
  {
    id: "triathlon-training-calculator", name: "Triathlon Training Calculator",
    description: "Determine weekly training volume targets based on target hours.",
    category: "sports", subcategory: "triathlon",
    scientificFormula: "\\text{Swim Vol} = 15\\% \\text{ of } T, \\quad \\text{Bike Vol} = 50\\% \\text{ of } T, \\quad \\text{Run Vol} = 35\\% \\text{ of } T",
    inputs: [
      { id: "target_hours_week", label: "Total Weekly Training Hours", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "swim_hours", label: "Swim Training Target", formula: "0.15 * target_hours_week", unit: "hours" },
      { id: "bike_hours", label: "Bike Training Target", formula: "0.50 * target_hours_week", unit: "hours" },
      { id: "run_hours", label: "Run Training Target", formula: "0.35 * target_hours_week", unit: "hours" }
    ],
    theory: "A standard triathlon training plan splits weekly hours into roughly 15% swimming, 50% cycling, and 35% running to reflect the physiological demands of each sport.",
    faq: [
      { question: "Why is cycling volume so high?", answer: "Cycling represents the longest leg of any triathlon (usually covering about half the total race duration) and builds non-impact aerobic capacity." }
    ],
    seoMeta: { title: "Triathlon Weekly Training Volume Calculator", description: "Calculate target training hours for swim, bike, and run.", keywords: "triathlon training, weekly volume, training split" }
  },

  // 🌊 WATERSPORTS
  {
    id: "fishing-reel-line-capacity-calculator", name: "Fishing Reel Line Capacity Calculator",
    description: "Estimate fishing reel capacity for different line diameters.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "\\text{Capacity}_2 = \\text{Capacity}_1 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2",
    inputs: [
      { id: "capacity_mono", label: "Rated Capacity with Line 1 (yards)", type: "number", defaultValue: 200 },
      { id: "dia_mono", label: "Diameter of Line 1 (mm)", type: "number", defaultValue: 0.35 },
      { id: "dia_new", label: "Diameter of Target Line 2 (mm)", type: "number", defaultValue: 0.25 }
    ],
    outputs: [
      { id: "capacity_new", label: "Estimated Line 2 Capacity", formula: "capacity_mono * (dia_mono / dia_new)^2", unit: "yd" }
    ],
    theory: "Reel spool capacity is limited by the total volume of the spool. Because line behaves as a cylinder, line capacity varies inversely with the square of the line diameter.",
    faq: [
      { question: "Is this formula accurate for braided line?", answer: "Yes, it provides a solid mathematical estimate, though braid pack tension can affect the actual amount of line that fits." }
    ],
    seoMeta: { title: "Fishing Reel Line Capacity Calculator", description: "Calculate spool capacity for different line diameters.", keywords: "fishing reel, line capacity, spool yardage, monofilament, braid" }
  },
  {
    id: "fish-weight-calculator", name: "Fish Weight Calculator",
    description: "Estimate a fish's weight using length and girth measurements.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "\\text{Weight (lbs)} = \\frac{\\text{Girth}^2 \\cdot \\text{Length}}{800}",
    inputs: [
      { id: "girth_in", label: "Fish Girth (inches)", type: "number", defaultValue: 15 },
      { id: "length_in", label: "Fish Length (inches)", type: "number", defaultValue: 32 }
    ],
    outputs: [
      { id: "weight_lbs", label: "Estimated Weight", formula: "(girth_in^2 * length_in) / 800", unit: "lbs" }
    ],
    theory: "This classic empirical formula estimates a fish's weight using girth and length measurements. The constant factor of 800 is optimized for standard fish body shapes.",
    faq: [
      { question: "How do I measure fish girth?", answer: "Girth is the circumference of the fish at its widest point (typically right in front of the dorsal fin)." }
    ],
    seoMeta: { title: "Fish Weight Estimation Calculator", description: "Estimate fish weight from length and girth.", keywords: "fish weight, catch and release, fish girth, angling stats" }
  },
  {
    id: "hull-speed-calculator", name: "Hull Speed Calculator",
    description: "Calculate the maximum theoretical displacement hull speed of a boat.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "v_{\\text{hull}} = 1.34 \\cdot \\sqrt{\\text{LWL}}",
    inputs: [
      { id: "lwl_ft", label: "Waterline Length (feet)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "hull_speed_knots", label: "Theoretical Hull Speed", formula: "1.34 * sqrt(lwl_ft)", unit: "knots" }
    ],
    theory: "For displacement hulls, the maximum speed is limited by the wave pattern generated by the boat. The maximum speed is proportional to the square root of the waterline length.",
    faq: [
      { question: "What is LWL?", answer: "LWL stands for Length on Waterline. It is the length of the boat hull where it meets the water surface, excluding overhangs." }
    ],
    seoMeta: { title: "Theoretical Hull Speed Calculator", description: "Calculate maximum hull speed for displacement boats.", keywords: "hull speed, sailing physics, LWL, displacement hull" }
  },
  {
    id: "kiteboarding-calculator", name: "Kiteboarding Calculator",
    description: "Estimate the recommended kite size based on body weight and wind speed.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "\\text{Kite Size (m}^2\\text{)} = \\frac{\\text{Weight (kg)}}{\\text{Wind (knots)}} \\cdot 2.2",
    inputs: [
      { id: "weight_kg", label: "Rider Weight (kg)", type: "number", defaultValue: 75 },
      { id: "wind_knots", label: "Wind Speed (knots)", type: "number", defaultValue: 18 }
    ],
    outputs: [
      { id: "kite_size", label: "Recommended Kite Area", formula: "(weight_kg / wind_knots) * 2.2", unit: "m²" }
    ],
    theory: "Kiteboarding requires balancing wind aerodynamic lift forces with body weight. Stronger wind or lighter riders require smaller kites to maintain safe control.",
    faq: [
      { question: "What is a standard kite size range?", answer: "Most riders own a quiver of 2 or 3 kites (e.g. 9m and 12m) to cover wind ranges from 12 to 25 knots." }
    ],
    seoMeta: { title: "Kiteboarding Kite Size Calculator", description: "Calculate recommended kite sizes for wind conditions.", keywords: "kiteboarding, kite size, wind range, kitesurfing gear" }
  },
  {
    id: "scuba-weight-calculator", name: "Scuba Weight Calculator",
    description: "Estimate the ballast weight needed to achieve neutral buoyancy during a dive.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "\\text{Ballast (lbs)} = \\text{Weight} \\cdot B + \\text{Wetsuit Allowance}",
    inputs: [
      { id: "weight_lbs", label: "Diver Weight (lbs)", type: "number", defaultValue: 180 },
      { id: "buoyancy_pct", label: "Basic Body Buoyancy Factor (%)", type: "number", defaultValue: 10 },
      { id: "wetsuit_lbs", label: "Wetsuit Thickness Compensation (lbs)", type: "number", defaultValue: 4, helpText: "3mm wetsuit is ~4 lbs, 5mm is ~6-8 lbs" }
    ],
    outputs: [
      { id: "ballast_weight", label: "Recommended Ballast Weight", formula: "weight_lbs * (buoyancy_pct / 100) + wetsuit_lbs", unit: "lbs" }
    ],
    theory: "Scuba divers use lead weights to counteract the positive buoyancy of their bodies and wetsuits. Correct weighting is essential for control during descents and safety stops.",
    faq: [
      { question: "How do I perform a buoyancy check?", answer: "With a nearly empty tank, float at eye level at the surface with a normal breath, holding the deflator. When you exhale, you should slowly sink." }
    ],
    seoMeta: { title: "Scuba Diving Ballast Weight Calculator", description: "Estimate lead weight needed for scuba diving.", keywords: "scuba ballast, dive weights, buoyancy check" }
  },
  {
    id: "swim-time-converter", name: "Swim Time Converter",
    description: "Convert a swimming split time between meters and yards.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "\\text{Yards Time} = \\text{Meters Time} \\cdot 0.9144",
    inputs: [
      { id: "time_sec", label: "Time for 100 Meters (seconds)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "time_yd", label: "Converted Time for 100 Yards", formula: "time_sec * 0.9144", unit: "s" }
    ],
    theory: "Competitive swimming uses both short-course yards (SCY) and short-course meters (SCM). Converted times scale according to the physical distance difference (1 yard = 0.9144 meters).",
    faq: [
      { question: "Why are meters times slower?", answer: "Because a meter is about 9% longer than a yard, it takes longer to swim the same numerical distance in meters." }
    ],
    seoMeta: { title: "Swimming Time Converter (Meters to Yards)", description: "Convert swim times between yards and meters pools.", keywords: "swim times, meters to yards, short course yards, swimming pace" }
  },
  {
    id: "windsurfing-calculator", name: "Windsurfing Calculator",
    description: "Calculate the recommended windsurf board volume based on rider weight.",
    category: "sports", subcategory: "watersports",
    scientificFormula: "\\text{Board Volume (L)} = \\text{Weight (kg)} + \\text{Margin}",
    inputs: [
      { id: "weight_kg", label: "Rider Weight (kg)", type: "number", defaultValue: 75 },
      { id: "margin_l", label: "Buoyancy Volume Margin (L)", type: "number", defaultValue: 80, helpText: "Beginner: 80-100L, Intermediate: 40-60L, Pro: 15-30L" }
    ],
    outputs: [
      { id: "volume_l", label: "Recommended Board Volume", formula: "weight_kg + margin_l", unit: "L" }
    ],
    theory: "Windsurf board volume (measured in liters) determines the board's buoyancy. 1 liter of volume supports 1 kg of weight. Beginner boards require a large margin to ensure stability when not planing.",
    faq: [
      { question: "What happens if a board has too little volume?", answer: "The board will sink below the water line when not moving, making it difficult to pull up the sail (uphauling) and balance." }
    ],
    seoMeta: { title: "Windsurfing Board Volume Calculator", description: "Calculate recommended windsurf board volume in liters.", keywords: "windsurfing board, volume, board buoyancy, board liters" }
  },

  // 🏋️ WEIGHTLIFTING
  {
    id: "5-3-1-calculator", name: "5/3/1 Calculator",
    description: "Calculate training max and target sets for Jim Wendler's 5/3/1 lifting system.",
    category: "sports", subcategory: "weightlifting",
    scientificFormula: "\\text{Training Max} = 0.90 \\cdot \\text{1RM}",
    inputs: [
      { id: "one_rm", label: "One-Rep Max (1RM)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "training_max", label: "Training Max (90% 1RM)", formula: "0.9 * one_rm", unit: "lbs/kg" },
      { id: "week1_set3", label: "Week 1 Set 3 Target (85% TM)", formula: "0.85 * 0.9 * one_rm", unit: "lbs/kg" }
    ],
    theory: "Jim Wendler's 5/3/1 program structures training around a 'Training Max' set at 90% of the true one-rep max. This manages central nervous system fatigue and allows for consistent, long-term progression.",
    faq: [
      { question: "Why train with a 90% max?", answer: "Training slightly submaximally prevents injury, ensures clean form, and allows for consistent gains without hitting plateaus." }
    ],
    seoMeta: { title: "Jim Wendler 5/3/1 Training Max Calculator", description: "Calculate 5/3/1 training targets based on one-rep max.", keywords: "5/3/1 program, training max, Wendler, powerlifting" }
  },
  {
    id: "bench-press-calculator-1rm", name: "Bench Press Calculator - Find Your 1RM",
    description: "Calculate your bench press one-rep max (1RM) using the Epley formula.",
    category: "sports", subcategory: "weightlifting",
    scientificFormula: "\\text{1RM} = W \\cdot \\left(1 + \\frac{R}{30}\\right)",
    inputs: [
      { id: "weight", label: "Weight Lifted", type: "number", defaultValue: 185 },
      { id: "reps", label: "Repetitions Completed", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "one_rm", label: "Estimated One-Rep Max", formula: "weight * (1 + reps / 30)", unit: "lbs/kg" }
    ],
    theory: "The Epley formula estimates the maximum weight an athlete can lift for a single rep based on the weight and reps achieved during a submaximal set.",
    faq: [
      { question: "How accurate is the 1RM estimate?", answer: "It is highly accurate for rep ranges under 10. For reps above 10, cardiovascular endurance starts to skew the strength prediction." }
    ],
    seoMeta: { title: "Bench Press One-Rep Max (1RM) Calculator", description: "Estimate your bench press 1RM from submaximal sets.", keywords: "bench press 1RM, one-rep max, Epley formula, weightlifting strength" }
  },
  {
    id: "bench-press-pyramid-calculator", name: "Bench Press Pyramid Calculator",
    description: "Calculate weights for a standard bench press pyramid workout.",
    category: "sports", subcategory: "weightlifting",
    scientificFormula: "\\text{Weights at 60\\%, 70\\%, and 80\\% of 1RM}",
    inputs: [
      { id: "one_rm", label: "One-Rep Max (1RM)", type: "number", defaultValue: 225 }
    ],
    outputs: [
      { id: "w60", label: "Set 1: Warmup (60% 1RM)", formula: "0.6 * one_rm", unit: "lbs/kg" },
      { id: "w70", label: "Set 2: Working (70% 1RM)", formula: "0.7 * one_rm", unit: "lbs/kg" },
      { id: "w80", label: "Set 3: Heavy Working (80% 1RM)", formula: "0.8 * one_rm", unit: "lbs/kg" }
    ],
    theory: "Pyramid training builds strength and volume by starting with lighter weights and high reps, and progressing to heavier weights with lower reps.",
    faq: [
      { question: "Why use pyramid training?", answer: "It ensures a thorough warmup of muscle groups and joints before working with heavy loads, reducing injury risk while maximizing muscle fibers stimulation." }
    ],
    seoMeta: { title: "Bench Press Pyramid Workout Calculator", description: "Generate target weights for pyramid bench workouts.", keywords: "pyramid training, bench press pyramid, strength workout" }
  },
  {
    id: "one-rep-max-calculator", name: "One-Rep Max Calculator",
    description: "Calculate estimated 1RM for any lift using weight and reps.",
    category: "sports", subcategory: "weightlifting",
    scientificFormula: "\\text{1RM} = W \\cdot \\left(1 + \\frac{R}{30}\\right)",
    inputs: [
      { id: "weight", label: "Weight Lifted", type: "number", defaultValue: 225 },
      { id: "reps", label: "Reps Completed", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "one_rm", label: "One-Rep Max", formula: "weight * (1 + reps / 30)", unit: "lbs/kg" }
    ],
    theory: "Knowing your 1RM is essential for structuring training programs, as most percentage-based routines require this baseline value.",
    faq: [
      { question: "Should I test my actual 1RM?", answer: "Testing a true 1RM carries a higher risk of injury. Estimating it from a 3-5 rep set is safer and sufficiently accurate for program design." }
    ],
    seoMeta: { title: "One-Rep Max (1RM) Strength Calculator", description: "Estimate your 1RM for squats, deadlifts, and presses.", keywords: "1RM, one-rep max, lift strength, Epley formula" }
  },
  {
    id: "wilks-calculator", name: "Wilks Calculator",
    description: "Calculate your Wilks score to compare strength across different body weights.",
    category: "sports", subcategory: "weightlifting",
    scientificFormula: "\\text{Wilks} = \\text{Lifted} \\cdot \\text{Coefficient}",
    inputs: [
      { id: "weight", label: "Body Weight (kg)", type: "number", defaultValue: 80 },
      { id: "lifted", label: "Total Lifted (kg)", type: "number", defaultValue: 450 }
    ],
    outputs: [
      { id: "wilks_score", label: "Wilks Score", formula: "lifted * 500 / (-216.0475144 + 16.2606339*weight - 0.002388645*weight^2 - 0.00113732*weight^3 + 7.01863e-6*weight^4 - 1.291e-8*weight^5)", unit: "points" }
    ],
    theory: "The Wilks formula compares the relative strength of powerlifters of different body weights, acting as a handicap system to determine the absolute strongest lifter.",
    faq: [
      { question: "What is a good Wilks score?", answer: "A score of 300 is respectable. 350-400 is considered competitive, and 450+ is national or international level strength." }
    ],
    seoMeta: { title: "Powerlifting Wilks Score Calculator", description: "Calculate your Wilks points score based on body weight.", keywords: "Wilks calculator, powerlifting, relative strength index" }
  },

  // 🎯 OTHER SPORTS
  {
    id: "arrow-foc-calculator", name: "Arrow FOC Calculator",
    description: "Calculate an arrow's Front of Center (FOC) percentage.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{FOC\\%} = \\left(\\frac{\\text{COG from rear}}{\\text{Length}} - 0.5\\right) \\cdot 100",
    inputs: [
      { id: "cog_in", label: "Center of Gravity from Rear (inches)", type: "number", defaultValue: 18.5 },
      { id: "length_in", label: "Total Arrow Length (inches)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "foc", label: "Front of Center (FOC)", formula: "((cog_in / length_in) - 0.5) * 100", unit: "%" }
    ],
    theory: "Front of Center (FOC) describes the percentage of an arrow's total weight that is located in the front half. Proper FOC improves arrow stability and accuracy in flight.",
    faq: [
      { question: "What is an ideal FOC percentage?", answer: "Target archery: 7% to 11%. Hunting setups: 10% to 15% for optimal penetration and stability in wind." }
    ],
    seoMeta: { title: "Arrow FOC Percentage Calculator", description: "Calculate Front of Center (FOC) for archery setups.", keywords: "arrow FOC, archery tuning, bow hunting, arrow flight" }
  },
  {
    id: "din-calculator", name: "DIN Calculator - How to Adjust Ski Bindings?",
    description: "Calculate the recommended ski binding release setting (DIN) based on weight, height, and skill.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{DIN} = \\frac{\\text{Weight (lbs)}}{12} + \\frac{\\text{Height (in)}}{12} + S_{\\text{factor}}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "height_in", label: "Height (inches)", type: "number", defaultValue: 68 },
      { id: "skier_type_factor", label: "Skier Skill Factor (1 to 3)", type: "number", defaultValue: 2, helpText: "1: Beginner, 2: Intermediate, 3: Expert" }
    ],
    outputs: [
      { id: "din_setting", label: "Estimated DIN Setting", formula: "(weight_lbs / 12) + (height_in / 12) + skier_type_factor", unit: "" }
    ],
    theory: "The DIN index determines the force at which ski bindings release during a fall. Correct DIN settings prevent bindings from releasing prematurely while ensuring they release during crashes to prevent knee injuries.",
    faq: [
      { question: "What does DIN stand for?", answer: "DIN stands for Deutsches Institut für Normung (German Institute for Standardization), which established the standard scale for ski binding releases." }
    ],
    seoMeta: { title: "Ski Binding DIN Setting Calculator", description: "Estimate correct DIN settings for ski safety bindings.", keywords: "DIN calculator, ski bindings, skiing safety, release settings" }
  },
  {
    id: "elo-calculator", name: "Elo Calculator",
    description: "Calculate the Elo rating changes for competitors after a match.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "R_{\\text{new}} = R + K \\cdot \\left(S - \\frac{1}{1 + 10^{\\frac{R_{\\text{opp}} - R}{400}}}\\right)",
    inputs: [
      { id: "rating", label: "Your Current Elo Rating", type: "number", defaultValue: 1500 },
      { id: "opponent_rating", label: "Opponent's Elo Rating", type: "number", defaultValue: 1520 },
      { id: "k", label: "K-Factor (Weight)", type: "number", defaultValue: 32 },
      { id: "outcome", label: "Match Outcome (1 = Win, 0.5 = Draw, 0 = Loss)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "new_rating", label: "Revised Elo Rating", formula: "rating + k * (outcome - 1 / (1 + 10^((opponent_rating - rating) / 400)))", unit: "points" }
    ],
    theory: "The Elo rating system evaluates relative skill levels in zero-sum games (such as chess or esports). Ratings adjust based on match outcomes and the prior probability of winning.",
    faq: [
      { question: "What is the K-factor?", answer: "The K-factor determines how heavily a single match outcome affects ratings. Higher K-factors lead to larger rating swings, suitable for new players." }
    ],
    seoMeta: { title: "Elo Rating Change Calculator", description: "Calculate match-based Elo rating adjustments.", keywords: "Elo calculator, ratings adjustment, matchmaking index" }
  },
  {
    id: "football-calorie-calculator", name: "Football Calorie Calculator (World Cup Edition)",
    description: "Calculate calories burned playing association football.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Calories} = 8.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Body Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Match Play Duration (min)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "8 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Playing football involves constant interval running and sprinting, which corresponds to an average MET intensity of 8.0.",
    faq: [
      { question: "How far does a midfielder run in a match?", answer: "Professional soccer midfielders run up to 11-13 km (7-8 miles) per 90-minute match, which is the highest mileage among all positions." }
    ],
    seoMeta: { title: "Football Calorie Burn Calculator", description: "Estimate energy burned playing soccer.", keywords: "soccer calories, football calorie calculator, match calorie burn" }
  },
  {
    id: "goalie-save-percentage-calculator", name: "Goalie Save Percentage Calculator",
    description: "Calculate a hockey goalie's save percentage from shots faced and goals allowed.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Save \\%} = \\frac{\\text{Shots} - \\text{Goals}}{\\text{Shots}}",
    inputs: [
      { id: "shots_faced", label: "Total Shots on Goal Faced", type: "number", defaultValue: 30 },
      { id: "goals_allowed", label: "Goals Allowed", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "save_pct", label: "Save Percentage", formula: "(shots_faced - goals_allowed) / shots_faced", unit: "" }
    ],
    theory: "Save percentage measures a goalie's effectiveness at stopping pucks. It is calculated by dividing total saves (shots minus goals) by shots faced.",
    faq: [
      { question: "What is a good NHL save percentage?", answer: "A save percentage above .915 is considered excellent in the modern NHL. Below .900 is below average." }
    ],
    seoMeta: { title: "Hockey Goalie Save Percentage Calculator", description: "Calculate goalie save percentage from shots and goals.", keywords: "save percentage, hockey stats, goaltending, saves" }
  },
  {
    id: "gaa-calculator", name: "GAA Calculator (Goals Against Average)",
    description: "Calculate GAA score (total points equivalent) for Gaelic Football and Hurling.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Total Score} = 3 \\cdot \\text{Goals} + \\text{Points}",
    inputs: [
      { id: "goals", label: "Goals Scored (worth 3 pts each)", type: "number", defaultValue: 2 },
      { id: "points", label: "Points Scored (worth 1 pt each)", type: "number", defaultValue: 14 }
    ],
    outputs: [
      { id: "total_score", label: "Total Combined Score", formula: "3 * goals + points", unit: "points" }
    ],
    theory: "In Gaelic games (Gaelic football and hurling), a goal into the net is worth 3 points, while kicking the ball over the crossbar scores 1 point. Scores are usually written as 'Goals-Points' (e.g. 2-14 = 20 points).",
    faq: [
      { question: "How are Gaelic match scores displayed?", answer: "For example, a score of 1-15 means 1 goal and 15 points, which equals a total score of 18 points." }
    ],
    seoMeta: { title: "GAA Combined Score Calculator", description: "Convert GAA goals and points into a total combined score.", keywords: "GAA score, Gaelic football, hurling, points conversion" }
  },
  {
    id: "heptathlon-calculator", name: "Heptathlon Calculator",
    description: "Calculate scores for athletic events in multi-event heptathlon championships.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Total Points} = P_1 + P_2 + P_3",
    inputs: [
      { id: "p1", label: "Hurdles Points", type: "number", defaultValue: 1000 },
      { id: "p2", label: "High Jump Points", type: "number", defaultValue: 950 },
      { id: "p3", label: "Shot Put Points", type: "number", defaultValue: 800 }
    ],
    outputs: [
      { id: "total_points", label: "Combined Event Points", formula: "p1 + p2 + p3", unit: "points" }
    ],
    theory: "The heptathlon is a track and field combined events contest made up of 7 events. Scores are calculated using specialized coefficients for each discipline.",
    faq: [
      { question: "What are the heptathlon events?", answer: "100m hurdles, high jump, shot put, 200m run, long jump, javelin throw, and 800m run." }
    ],
    seoMeta: { title: "Track Heptathlon Score Calculator", description: "Sum up heptathlon event points for overall championship scoring.", keywords: "heptathlon, combined events, track and field, decathlon points" }
  },
  {
    id: "passer-rating-calculator", name: "Passer Rating Calculator",
    description: "Calculate NFL passer rating for quarterbacks based on completions, attempts, yards, touchdowns, and interceptions.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Rating} = \\frac{\\text{Comp/Att Adjustment} + \\text{Yds/Att Adjustment} + \\text{TD/Att Adjustment} + \\text{Int/Att Adjustment}}{6} \\cdot 100",
    inputs: [
      { id: "comp", label: "Completions", type: "number", defaultValue: 20 },
      { id: "att", label: "Pass Attempts", type: "number", defaultValue: 30 },
      { id: "yds", label: "Passing Yards", type: "number", defaultValue: 250 },
      { id: "td", label: "Touchdown Passes", type: "number", defaultValue: 2 },
      { id: "int", label: "Interceptions Thrown", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "rating", label: "Passer Rating", formula: "((((comp/att) - 0.3) * 5 + ((yds/att) - 3) * 0.25 + (td/att) * 20 + (2.375 - (int/att) * 25)) / 6) * 100", unit: "" }
    ],
    theory: "The NFL passer rating formula scores quarterback efficiency using completions, yards, touchdowns, and interceptions. The maximum possible rating is 158.3.",
    faq: [
      { question: "What is a perfect NFL passer rating?", answer: "158.3 is a perfect rating. A score above 100 is considered outstanding." }
    ],
    seoMeta: { title: "NFL Passer Rating Calculator", description: "Calculate quarterback passer rating based on passing stats.", keywords: "passer rating, NFL stats, quarterback efficiency, passing rating" }
  },
  {
    id: "pool-table-room-size-calculator", name: "Pool Table Room Size Calculator",
    description: "Determine the minimum room dimensions needed for a pool table based on table size and cue length.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Room Dimension} = \\text{Table Dimension} + 2 \\cdot \\text{Cue Length}",
    inputs: [
      { id: "table_length_in", label: "Pool Table Length (inches)", type: "number", defaultValue: 96, helpText: "Standard 8ft table is 96 inches" },
      { id: "cue_length_in", label: "Pool Cue Length (inches)", type: "number", defaultValue: 57, helpText: "Standard cue is 57-58 inches" }
    ],
    outputs: [
      { id: "room_length_in", label: "Minimum Room Length Required", formula: "table_length_in + 2 * cue_length_in", unit: "in" }
    ],
    theory: "To play pool comfortably, you need enough space around the table to stroke the cue without hitting the walls. This requires adding twice the cue length to both table dimensions.",
    faq: [
      { question: "What is the standard cue length?", answer: "Standard pool cues are 57 or 58 inches long. Shorter cues (48 or 52 inches) can be used for tight spaces." }
    ],
    seoMeta: { title: "Pool Table Room Size Calculator", description: "Calculate minimum room size needed for pool tables.", keywords: "pool table space, room size, billiard table cue length" }
  },
  {
    id: "save-percentage-calculator", name: "Save Percentage Calculator",
    description: "Calculate goalie save percentage from shots faced and goals allowed.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Save Percentage} = \\frac{\\text{Saves}}{\\text{Shots faced}}",
    inputs: [
      { id: "shots_on_goal", label: "Shots Faced", type: "number", defaultValue: 35 },
      { id: "goals_allowed", label: "Goals Allowed", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "save_pct", label: "Save Percentage", formula: "(shots_on_goal - goals_allowed) / shots_on_goal", unit: "" }
    ],
    theory: "Save percentage measures a goalkeeper's stopping efficiency in sports like soccer, ice hockey, and lacrosse.",
    faq: [
      { question: "Does save percentage include off-target shots?", answer: "No, only shots that would have gone into the goal (shots on target) are counted as shots faced." }
    ],
    seoMeta: { title: "Goalie Save Percentage Calculator", description: "Calculate goalie save percentage from shots faced.", keywords: "save percentage, goaltending stats, soccer, lacrosse" }
  },
  {
    id: "ski-size-calculator", name: "Ski Size Calculator",
    description: "Determine the recommended alpine ski length based on your height.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Beginner Length (cm)} = \\text{Height} - 10, \\quad \\text{Advanced} = \\text{Height} + 5",
    inputs: [
      { id: "height_cm", label: "Skier Height (cm)", type: "number", defaultValue: 175 }
    ],
    outputs: [
      { id: "beginner_size", label: "Recommended Beginner Length", formula: "height_cm - 10", unit: "cm" },
      { id: "advanced_size", label: "Recommended Advanced Length", formula: "height_cm + 5", unit: "cm" }
    ],
    theory: "Shorter skis are easier to turn and control, making them ideal for beginners. Longer skis provide more stability at speed, preferred by advanced skiers.",
    faq: [
      { question: "Where should skis reach on my body?", answer: "Skis should generally stand between your chest and the top of your head." }
    ],
    seoMeta: { title: "Ski Size and Length Calculator", description: "Determine recommended alpine ski length based on skier height.", keywords: "ski size, ski length, alpine skiing gear" }
  },
  {
    id: "tennis-ball-usage-calculator", name: "Tennis Ball Usage Calculator",
    description: "Estimate the number of tennis balls needed for matches and practice sessions.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Balls} = \\text{Players} \\cdot \\text{Matches} \\cdot 3",
    inputs: [
      { id: "players", label: "Number of Players", type: "number", defaultValue: 4 },
      { id: "matches", label: "Matches Planned", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "balls_needed", label: "Estimated Balls Needed", formula: "players * matches * 3", unit: "balls" }
    ],
    theory: "Tennis balls lose pressure and felt quality during play. This tool estimates ball usage for club practice sessions and tournaments.",
    faq: [
      { question: "How long do tennis balls last?", answer: "In professional tournaments, balls are changed every 9 games. For recreational play, a can of balls lasts 1 to 3 matches." }
    ],
    seoMeta: { title: "Tennis Ball Usage Calculator", description: "Estimate the number of tennis balls needed for practice sessions.", keywords: "tennis balls, match play, tennis gear budget" }
  },
  {
    id: "winning-percentage-calculator", name: "Winning Percentage Calculator",
    description: "Calculate win percentage from wins, losses, and ties.",
    category: "sports", subcategory: "other-sports",
    scientificFormula: "\\text{Win \\%} = \\frac{\\text{Wins}}{\\text{Wins} + \\text{Losses} + 0.5 \\cdot \\text{Ties}}",
    inputs: [
      { id: "wins", label: "Wins", type: "number", defaultValue: 54 },
      { id: "losses", label: "Losses", type: "number", defaultValue: 24 },
      { id: "ties", label: "Ties", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "win_pct", label: "Winning Percentage", formula: "wins / (wins + losses + 0.5 * ties)", unit: "" }
    ],
    theory: "Winning percentage represents the proportion of matches a team wins out of their total games played. Ties count as half a win and half a loss.",
    faq: [
      { question: "How are ties handled in NFL standings?", answer: "In the NFL, ties count as half a win and half a loss for winning percentage calculations." }
    ],
    seoMeta: { title: "Sports Team Winning Percentage Calculator", description: "Calculate team winning percentage from wins, losses, and ties.", keywords: "winning percentage, sports record, win loss record" }
  }
];
