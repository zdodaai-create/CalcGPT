import { Trophy, Activity, Flame, Bike, Heart, TrendingUp, Timer, Waves, Dumbbell, HelpCircle } from 'lucide-react';

export const SPORTS_DATA = [
  {
    id: "baseball",
    title: "Baseball calculators ⚾",
    icon: Trophy,
    calculators: [
      { name: "Batting Average Calculator", slug: "batting-average-calculator" },
      { name: "ERA Calculator – Earned Run Average", slug: "era-calculator" },
      { name: "Fielding Percentage Calculator", slug: "fielding-percentage-calculator" },
      { name: "FIP Calculator (Fielding Independent Pitching)", slug: "fip-calculator" },
      { name: "Magic Number Calculator", slug: "magic-number-calculator" },
      { name: "On Base Percentage Calculator", slug: "on-base-percentage-calculator" },
      { name: "Slugging Percentage Calculator", slug: "slugging-percentage-calculator" },
      { name: "WAR Calculator (Wins Above Replacement)", slug: "war-calculator" },
      { name: "WHIP Calculator for Baseball", slug: "whip-calculator" }
    ]
  },
  {
    id: "basketball",
    title: "Basketball calculators 🏀",
    icon: Activity,
    calculators: [
      { name: "Dunk Calculator", slug: "dunk-calculator" },
      { name: "eFG Calculator", slug: "efg-calculator" },
      { name: "Game Score Calculator – Basketball Performance Indicator", slug: "game-score-calculator" },
      { name: "Quiz: Dunk Calculator", slug: "quiz-dunk-calculator" },
      { name: "TS Calculator (True Shooting Percentage)", slug: "ts-calculator" }
    ]
  },
  {
    id: "calories-burned",
    title: "Calories burned calculators 🔥",
    icon: Flame,
    calculators: [
      { name: "Burpee Calorie Calculator", slug: "burpee-calorie-calculator" },
      { name: "Calories Burned Calculator", slug: "calories-burned-calculator" },
      { name: "Calories Burned by Heart Rate Calculator", slug: "calories-burned-by-heart-rate-calculator" },
      { name: "Elliptical Calorie Calculator", slug: "elliptical-calorie-calculator" },
      { name: "Fat Burning Zone Calculator", slug: "fat-burning-zone-calculator" },
      { name: "Hiking Calculator", slug: "hiking-calculator" },
      { name: "Jump Rope Calorie Calculator", slug: "jump-rope-calorie-calculator" },
      { name: "Running Calorie Calculator", slug: "running-calorie-calculator" },
      { name: "Sauna Calories Burned Calculator", slug: "sauna-calories-burned-calculator" },
      { name: "Snow Shoveling Calories Burned Calculator", slug: "snow-shoveling-calories-burned-calculator" },
      { name: "Stairs Calorie Calculator", slug: "stairs-calorie-calculator" },
      { name: "Steps to Calories Calculator", slug: "steps-to-calories-calculator" },
      { name: "Swimming Calorie Calculator", slug: "swimming-calorie-calculator" },
      { name: "Walking Calorie Calculator", slug: "walking-calorie-calculator" },
      { name: "Weight Loss Calculator", slug: "weight-loss-calculator" }
    ]
  },
  {
    id: "cricket",
    title: "Cricket calculators 🏏",
    icon: Trophy,
    calculators: [
      { name: "Batting Strike Rate Calculator", slug: "batting-strike-rate-calculator" },
      { name: "Bowling Average Calculator", slug: "bowling-average-calculator" },
      { name: "Cricket Follow-On Calculator", slug: "cricket-follow-on-calculator" },
      { name: "Duckworth Lewis Calculator", slug: "duckworth-lewis-calculator" },
      { name: "ICC Calculator", slug: "icc-calculator" },
      { name: "Net Run Rate Calculator", slug: "net-run-rate-calculator" }
    ]
  },
  {
    id: "cycling",
    title: "Cycling calculators 🚴‍♀️",
    icon: Bike,
    calculators: [
      { name: "Bike Cadence and Speed Calculator", slug: "bike-cadence-and-speed-calculator" },
      { name: "Bike Gear Calculator", slug: "bike-gear-calculator" },
      { name: "Bike Pace Calculator", slug: "bike-pace-calculator" },
      { name: "Bike Size Calculator", slug: "bike-size-calculator" },
      { name: "Biking Life Gain Calculator", slug: "biking-life-gain-calculator" },
      { name: "Calories Burned Biking Calculator", slug: "calories-burned-biking-calculator" },
      { name: "Chain Length Calculator", slug: "chain-length-calculator" },
      { name: "Cycling Breakaway Calculator", slug: "cycling-breakaway-calculator" },
      { name: "Cycling Heart Rate Zone Calculator", slug: "cycling-heart-rate-zone-calculator" },
      { name: "Cycling Wattage Calculator", slug: "cycling-wattage-calculator" },
      { name: "E-Bike Range Calculator", slug: "e-bike-range-calculator" },
      { name: "Bicycle Lubricant Cost-to-Run Calculator", slug: "bicycle-lubricant-cost-to-run-calculator" }
    ]
  },
  {
    id: "overall-fitness",
    title: "Overall fitness calculators 🏅",
    icon: Heart,
    calculators: [
      { name: "Age Grade Calculator", slug: "age-grade-calculator" },
      { name: "Ape Index Calculator", slug: "ape-index-calculator" },
      { name: "Human Punch Force Calculator", slug: "human-punch-force-calculator" }
    ]
  },
  {
    id: "performance",
    title: "Performance calculators 💪",
    icon: TrendingUp,
    calculators: [
      { name: "Anaerobic Threshold Calculator", slug: "anaerobic-threshold-calculator" },
      { name: "Bruce Protocol METs Calculator", slug: "bruce-protocol-mets-calculator" },
      { name: "ERG Calculator", slug: "erg-calculator" },
      { name: "Heart Rate Calculator", slug: "heart-rate-calculator" },
      { name: "Heart Rate Recovery Calculator", slug: "heart-rate-recovery-calculator" },
      { name: "Heart Rate Zone Calculator", slug: "heart-rate-zone-calculator" },
      { name: "Hiking Time Calculator", slug: "hiking-time-calculator" },
      { name: "Max Heart Rate Calculator", slug: "max-heart-rate-calculator" },
      { name: "MET Minutes Calculator", slug: "met-minutes-calculator" },
      { name: "Target Heart Rate Calculator", slug: "target-heart-rate-calculator" },
      { name: "VO2 Max Calculator – Aerobic Capacity", slug: "vo2-max-calculator" }
    ]
  },
  {
    id: "running",
    title: "Running calculators 🏃",
    icon: Timer,
    calculators: [
      { name: "Magic Mile Calculator", slug: "magic-mile-calculator" },
      { name: "Marathon Pace Calculator", slug: "marathon-pace-calculator" },
      { name: "Pace Calculator", slug: "pace-calculator" },
      { name: "Race Predictor – Running Time Calculator", slug: "race-predictor" },
      { name: "Race Time Improvement Calculator", slug: "race-time-improvement-calculator" },
      { name: "Running Pace Calculator", slug: "running-pace-calculator" },
      { name: "Running Split Calculator", slug: "running-split-calculator" },
      { name: "Steps to km Calculator", slug: "steps-to-km-calculator" },
      { name: "Steps to Miles Calculator", slug: "steps-to-miles-calculator" },
      { name: "Stride Length Calculator", slug: "stride-length-calculator" },
      { name: "Training Pace Calculator", slug: "training-pace-calculator" },
      { name: "VO2 Max Runners Calculator", slug: "vo2-max-runners-calculator" }
    ]
  },
  {
    id: "triathlon",
    title: "Triathlon calculators 🏊🏽‍♀️🚴🏿‍♂️🏃🏻‍♀️",
    icon: Activity,
    calculators: [
      { name: "Average Triathlon Finishing Time Calculator", slug: "average-triathlon-finishing-time-calculator" },
      { name: "Cycling Power Zones Calculator", slug: "cycling-power-zones-calculator" },
      { name: "DIY Sports Drink Calculator", slug: "diy-sports-drink-calculator" },
      { name: "Triathlon Heart Rate Training Zones Calculator", slug: "triathlon-heart-rate-training-zones-calculator" },
      { name: "Triathlon Nutrition Calculator", slug: "triathlon-nutrition-calculator" },
      { name: "Triathlon Training Calculator", slug: "triathlon-training-calculator" }
    ]
  },
  {
    id: "watersports",
    title: "Watersports calculators 🌊",
    icon: Waves,
    calculators: [
      { name: "Fishing Reel Line Capacity Calculator", slug: "fishing-reel-line-capacity-calculator" },
      { name: "Fish Weight Calculator", slug: "fish-weight-calculator" },
      { name: "Hull Speed Calculator", slug: "hull-speed-calculator" },
      { name: "Kiteboarding Calculator", slug: "kiteboarding-calculator" },
      { name: "Scuba Weight Calculator", slug: "scuba-weight-calculator" },
      { name: "Swim Time Converter", slug: "swim-time-converter" },
      { name: "Windsurfing Calculator", slug: "windsurfing-calculator" }
    ]
  },
  {
    id: "weightlifting",
    title: "Weightlifting calculators 🏋️",
    icon: Dumbbell,
    calculators: [
      { name: "5/3/1 Calculator", slug: "5-3-1-calculator" },
      { name: "Bench Press Calculator - Find Your 1RM", slug: "bench-press-calculator-1rm" },
      { name: "Bench Press Pyramid Calculator", slug: "bench-press-pyramid-calculator" },
      { name: "One-Rep Max Calculator", slug: "one-rep-max-calculator" },
      { name: "Wilks Calculator", slug: "wilks-calculator" }
    ]
  },
  {
    id: "other-sports",
    title: "Other calculators",
    icon: HelpCircle,
    calculators: [
      { name: "Arrow FOC Calculator", slug: "arrow-foc-calculator" },
      { name: "DIN Calculator - How to Adjust Ski Bindings?", slug: "din-calculator" },
      { name: "Elo Calculator", slug: "elo-calculator" },
      { name: "Football Calorie Calculator (World Cup Edition)", slug: "football-calorie-calculator" },
      { name: "Goalie Save Percentage Calculator", slug: "goalie-save-percentage-calculator" },
      { name: "GAA Calculator (Goals Against Average)", slug: "gaa-calculator" },
      { name: "Heptathlon Calculator", slug: "heptathlon-calculator" },
      { name: "Passer Rating Calculator", slug: "passer-rating-calculator" },
      { name: "Pool Table Room Size Calculator", slug: "pool-table-room-size-calculator" },
      { name: "Save Percentage Calculator", slug: "save-percentage-calculator" },
      { name: "Ski Size Calculator", slug: "ski-size-calculator" },
      { name: "Tennis Ball Usage Calculator", slug: "tennis-ball-usage-calculator" },
      { name: "Winning Percentage Calculator", slug: "winning-percentage-calculator" }
    ]
  }
];
