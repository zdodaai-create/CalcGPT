import { CalculatorConfig } from "./calculator-types";

export const SPORTS_CALCULATORS_BASE: CalculatorConfig[] = [
  // ⚾ BASEBALL
  {
    id: "batting-average-calculator", name: "Batting Average Calculator",
    description: "Calculate a baseball player's batting average from hits and at bats.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{BA} = \\frac{\\text{Hits}}{\\text{At Bats}}",
    inputs: [
      { id: "hits", label: "Hits (H)", type: "number", defaultValue: 45 },
      { id: "at_bats", label: "At Bats (AB)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "ba", label: "Batting Average", formula: "hits / at_bats", unit: "" }
    ],
    theory: "Batting average is one of the oldest and most common statistics used in baseball to measure a batter's performance. It is the ratio of hits to total official at bats. It does not include walks, hit by pitches, or sacrifice plays.",
    faq: [
      { question: "What is a good batting average?", answer: "In Major League Baseball (MLB), a batting average of .300 or higher is considered excellent, while .250 is about average. A batting average below .200 is often referred to as the 'Mendoza Line'." },
      { question: "Do walks count towards batting average?", answer: "No, walks (bases on balls) do not count as official at bats, so they have no effect on a player's batting average. They do, however, affect On-Base Percentage (OBP)." },
      { question: "Who holds the record for highest career batting average?", answer: "Ty Cobb holds the MLB record with a career batting average of .366. The single-season record belongs to Hugh Duffy, who hit .440 in 1894." }
    ],
    seoMeta: { title: "Batting Average Calculator", description: "Calculate baseball batting average from hits and at bats.", keywords: "batting average, baseball stats, hits, at bats, MLB" }
  },
  {
    id: "era-calculator", name: "ERA Calculator – Earned Run Average",
    description: "Calculate a pitcher's Earned Run Average (ERA) from earned runs and innings pitched.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{ERA} = 9 \\cdot \\frac{\\text{Earned Runs}}{\\text{Innings Pitched}}",
    inputs: [
      { id: "earned_runs", label: "Earned Runs (ER)", type: "number", defaultValue: 15 },
      { id: "innings_pitched", label: "Innings Pitched (IP)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "era", label: "Earned Run Average", formula: "(earned_runs * 9) / innings_pitched", unit: "" }
    ],
    theory: "Earned Run Average (ERA) represents the average number of earned runs a pitcher allows over a standard nine-inning game. It is a key metric for evaluating a pitcher's effectiveness, excluding unearned runs resulting from fielding errors.",
    faq: [
      { question: "What is a good ERA in baseball?", answer: "An ERA below 3.00 is considered excellent. An ERA between 3.00 and 4.00 is good, while an ERA above 5.00 is generally considered below average." },
      { question: "How are partial innings counted in ERA?", answer: "Partial innings are counted as thirds. One out is 1/3 (0.333), and two outs are 2/3 (0.667). In box scores, they are often written as .1 or .2, but are mathematically calculated as 0.33 or 0.67." },
      { question: "What is the difference between earned and unearned runs?", answer: "An earned run is any run that scores against a pitcher without the aid of a fielding error or a passed ball. Unearned runs do not count towards the pitcher's ERA." }
    ],
    seoMeta: { title: "Earned Run Average (ERA) Calculator", description: "Calculate pitcher ERA from earned runs and innings pitched.", keywords: "ERA, earned run average, baseball pitcher, pitching stats" }
  },
  {
    id: "fielding-percentage-calculator", name: "Fielding Percentage Calculator",
    description: "Calculate a baseball player's fielding percentage from putouts, assists, and errors.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{FP} = \\frac{\\text{Putouts} + \\text{Assists}}{\\text{Putouts} + \\text{Assists} + \\text{Errors}}",
    inputs: [
      { id: "putouts", label: "Putouts (PO)", type: "number", defaultValue: 120 },
      { id: "assists", label: "Assists (A)", type: "number", defaultValue: 80 },
      { id: "errors", label: "Errors (E)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "fp", label: "Fielding Percentage", formula: "(putouts + assists) / (putouts + assists + errors)", unit: "" }
    ],
    theory: "Fielding percentage measures the percentage of defensive opportunities a player or team successfully handles without committing an error. It evaluates defensive reliability, though it does not account for a player's range.",
    faq: [
      { question: "What is a good fielding percentage?", answer: "For most positions, a fielding percentage above .980 is considered good. First base and outfielders often have higher averages (.990+), while shortstops and third basemen may have slightly lower averages due to harder plays." },
      { question: "What are putouts and assists?", answer: "A putout is credited to a fielder who physically records an out (catching a fly, tagging a runner, stepping on a base). An assist is credited to any fielder who throws or deflects the ball leading to an out." }
    ],
    seoMeta: { title: "Fielding Percentage Calculator", description: "Calculate fielding percentage from putouts, assists, and errors.", keywords: "fielding percentage, baseball defense, putouts, assists, errors" }
  },
  {
    id: "fip-calculator", name: "FIP Calculator (Fielding Independent Pitching)",
    description: "Calculate a pitcher's Fielding Independent Pitching (FIP) rating.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{FIP} = \\frac{13 \\cdot \\text{HR} + 3 \\cdot \\left(\\text{BB} + \\text{HBP}\\right) - 2 \\cdot \\text{SO}}{\\text{IP}} + C_{\\text{FIP}}",
    inputs: [
      { id: "hr", label: "Home Runs Allowed (HR)", type: "number", defaultValue: 5 },
      { id: "bb", label: "Walks Allowed (BB)", type: "number", defaultValue: 12 },
      { id: "hbp", label: "Hit Batters (HBP)", type: "number", defaultValue: 2 },
      { id: "so", label: "Strikeouts (SO)", type: "number", defaultValue: 48 },
      { id: "ip", label: "Innings Pitched (IP)", type: "number", defaultValue: 45 },
      { id: "c_fip", label: "FIP Constant (C)", type: "number", defaultValue: 3.10 }
    ],
    outputs: [
      { id: "fip", label: "FIP Score", formula: "(13 * hr + 3 * (bb + hbp) - 2 * so) / ip + c_fip", unit: "" }
    ],
    theory: "Fielding Independent Pitching (FIP) evaluates a pitcher's effectiveness by focusing solely on events they control: home runs, walks, hit batters, and strikeouts. It strips out the influence of defensive fielding ability, making it a better predictor of future performance than ERA.",
    faq: [
      { question: "Why is FIP useful?", answer: "Because it focuses only on outcomes that do not rely on defense. Pitchers have little control over whether balls in play become hits; FIP filters out defensive luck to show a pitcher's true talent." },
      { question: "What constant value is typically used?", answer: "The FIP constant is adjusted annually to scale FIP to the league-wide ERA. It is usually around 3.10 to 3.20." }
    ],
    seoMeta: { title: "FIP Calculator — Fielding Independent Pitching", description: "Calculate Fielding Independent Pitching (FIP) for pitchers.", keywords: "FIP, baseball pitcher, fielding independent pitching, sabermetrics" }
  },
  {
    id: "magic-number-calculator", name: "Magic Number Calculator",
    description: "Calculate the magic number for a team to clinch their division or playoff spot.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{Magic Number} = G_{\\text{total}} + 1 - W_{\\text{team}} - L_{\\text{opponent}}",
    inputs: [
      { id: "games_total", label: "Total Games in Season", type: "number", defaultValue: 162 },
      { id: "wins_team", label: "Leading Team Wins", type: "number", defaultValue: 90 },
      { id: "losses_opponent", label: "Second Place Team Losses", type: "number", defaultValue: 72 }
    ],
    outputs: [
      { id: "mn", label: "Magic Number", formula: "games_total + 1 - wins_team - losses_opponent", unit: "" }
    ],
    theory: "In sports, the magic number is the combination of wins by the leader and losses by the runner-up required for the leader to clinch a division or playoff berth. Each win by the leader or loss by the second-place team reduces the magic number by one.",
    faq: [
      { question: "What does a magic number of 0 mean?", answer: "When the magic number reaches zero, the leading team has officially clinched the division or playoff spot and cannot be overtaken." },
      { question: "What is an elimination number?", answer: "The elimination number (or tragic number) is the reverse of the magic number. It represents the combination of losses by the trailing team and wins by the leader that will officially eliminate the trailing team." }
    ],
    seoMeta: { title: "Playoff Magic Number Calculator", description: "Calculate the playoff magic number for a sports team.", keywords: "magic number, baseball playoffs, clinch division, MLB standings" }
  },
  {
    id: "on-base-percentage-calculator", name: "On Base Percentage Calculator",
    description: "Calculate On-Base Percentage (OBP) from hits, walks, hit by pitches, at bats, and sacrifice flies.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{OBP} = \\frac{H + BB + HBP}{AB + BB + HBP + SF}",
    inputs: [
      { id: "hits", label: "Hits (H)", type: "number", defaultValue: 45 },
      { id: "walks", label: "Walks (BB)", type: "number", defaultValue: 15 },
      { id: "hbp", label: "Hit By Pitch (HBP)", type: "number", defaultValue: 3 },
      { id: "at_bats", label: "At Bats (AB)", type: "number", defaultValue: 150 },
      { id: "sf", label: "Sacrifice Flies (SF)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "obp", label: "On-Base Percentage", formula: "(hits + walks + hbp) / (at_bats + walks + hbp + sf)", unit: "" }
    ],
    theory: "On-Base Percentage (OBP) measures how frequently a batter reaches base per plate appearance. Unlike batting average, OBP counts walks and hit-by-pitches as successful outcomes, reflecting a player's ability to avoid making outs.",
    faq: [
      { question: "Why is OBP considered more important than Batting Average?", answer: "OBP is a better measure of a player's offensive value because avoiding outs is the most critical task of a batter. Walking maintains a team's offensive drive just like getting a hit." },
      { question: "Does a sacrifice bunt affect OBP?", answer: "Sacrifice bunts do not count towards the denominator in OBP. However, sacrifice flies do count in the denominator, which decreases OBP." }
    ],
    seoMeta: { title: "On-Base Percentage (OBP) Calculator", description: "Calculate On-Base Percentage for baseball batters.", keywords: "OBP, on-base percentage, baseball stats, walks, hits" }
  },
  {
    id: "slugging-percentage-calculator", name: "Slugging Percentage Calculator",
    description: "Calculate a baseball player's slugging percentage from single, double, triple, and home run hits and at bats.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{SLG} = \\frac{\\text{Singles} + 2 \\cdot \\text{Doubles} + 3 \\cdot \\text{Triples} + 4 \\cdot \\text{HR}}{\\text{At Bats}}",
    inputs: [
      { id: "singles", label: "Singles (1B)", type: "number", defaultValue: 25 },
      { id: "doubles", label: "Doubles (2B)", type: "number", defaultValue: 10 },
      { id: "triples", label: "Triples (3B)", type: "number", defaultValue: 2 },
      { id: "hr", label: "Home Runs (HR)", type: "number", defaultValue: 8 },
      { id: "at_bats", label: "At Bats (AB)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "slg", label: "Slugging Percentage", formula: "(singles + 2 * doubles + 3 * triples + 4 * hr) / at_bats", unit: "" }
    ],
    theory: "Slugging percentage measures the power of a hitter by calculating the average number of bases recorded per at bat. It assigns extra weight to extra-base hits (double = 2, triple = 3, home run = 4).",
    faq: [
      { question: "What is a good slugging percentage?", answer: "An MLB slugging percentage of .450 is good, while .500 or higher is considered excellent. Top power hitters often exceed .550." },
      { question: "Can slugging percentage exceed 1.000?", answer: "Yes. The maximum possible slugging percentage is 4.000 (if a player hits a home run in every official at bat)." }
    ],
    seoMeta: { title: "Slugging Percentage Calculator", description: "Calculate slugging percentage (SLG) for baseball power hitters.", keywords: "slugging percentage, SLG, baseball power, home runs, bases" }
  },
  {
    id: "war-calculator", name: "WAR Calculator (Wins Above Replacement)",
    description: "Calculate a simplified Wins Above Replacement (WAR) score for baseball players.",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{WAR} = \\frac{\\text{Batting Runs} + \\text{Fielding Runs} + \\text{Positional Adj} + \\text{Replacement Runs}}{\\text{Runs Per Win}",
    inputs: [
      { id: "batting_runs", label: "Batting Runs Above Average", type: "number", defaultValue: 15 },
      { id: "fielding_runs", label: "Fielding Runs Above Average", type: "number", defaultValue: 5 },
      { id: "positional_adj", label: "Positional Adjustment Runs", type: "number", defaultValue: 2 },
      { id: "replacement_runs", label: "Replacement Level Runs", type: "number", defaultValue: 18 },
      { id: "runs_per_win", label: "Runs Per Win Constant", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "war", label: "WAR (Wins Above Replacement)", formula: "(batting_runs + fielding_runs + positional_adj + replacement_runs) / runs_per_win", unit: "" }
    ],
    theory: "Wins Above Replacement (WAR) is a comprehensive sabermetric statistic that estimates a player's total contribution to their team in terms of wins compared to a replacement-level player (a standard AAA call-up). It aggregates hitting, fielding, and baserunning into a single value.",
    faq: [
      { question: "What is a replacement-level player?", answer: "A replacement-level player is a player who can be easily and cheaply acquired (such as a minor-league call-up or a waiver wire pickup). A team of replacement-level players would win about 48 games in a 162-game season." },
      { question: "What is a good single-season WAR?", answer: "0-2 WAR is a bench player; 2-4 WAR is a solid starter; 4-6 WAR is an All-Star; 6+ WAR is an MVP candidate. Elite seasons can reach 10+ WAR." }
    ],
    seoMeta: { title: "WAR Calculator — Wins Above Replacement", description: "Calculate Wins Above Replacement (WAR) for baseball players.", keywords: "WAR, wins above replacement, sabermetrics, baseball player value" }
  },
  {
    id: "whip-calculator", name: "WHIP Calculator for Baseball",
    description: "Calculate a pitcher's WHIP (Walks plus Hits per Innings Pitched).",
    category: "sports", subcategory: "baseball",
    scientificFormula: "\\text{WHIP} = \\frac{\\text{Walks} + \\text{Hits}}{\\text{Innings Pitched}}",
    inputs: [
      { id: "walks", label: "Walks Allowed (BB)", type: "number", defaultValue: 15 },
      { id: "hits", label: "Hits Allowed (H)", type: "number", defaultValue: 35 },
      { id: "innings_pitched", label: "Innings Pitched (IP)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "whip", label: "WHIP Score", formula: "(walks + hits) / innings_pitched", unit: "" }
    ],
    theory: "WHIP measures the average number of walks and hits a pitcher allows per inning. It is a critical metric for evaluating a pitcher's control and ability to prevent runners from reaching base, which correlates highly with preventing runs.",
    faq: [
      { question: "What is a good WHIP?", answer: "A WHIP under 1.00 is elite. Under 1.20 is very good, between 1.25 and 1.40 is average, and over 1.50 is below average." },
      { question: "Does WHIP include hit by pitches (HBP)?", answer: "No, the traditional WHIP formula only includes bases on balls (walks) and hits. It excludes hit batters and errors." }
    ],
    seoMeta: { title: "WHIP Calculator for Baseball", description: "Calculate Walks plus Hits per Innings Pitched (WHIP) for baseball pitchers.", keywords: "WHIP, baseball pitcher, walks, hits, innings pitched" }
  },

  // 🏀 BASKETBALL
  {
    id: "dunk-calculator", name: "Dunk Calculator",
    description: "Calculate the vertical jump height needed to dunk a basketball based on your height and standing reach.",
    category: "sports", subcategory: "basketball",
    scientificFormula: "\\text{Vertical Needed (in)} = 126 - \\text{Standing Reach (in)}",
    inputs: [
      { id: "reach_in", label: "Standing Reach (inches)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "vertical_needed", label: "Vertical Jump Needed", formula: "126 - reach_in", unit: "in" }
    ],
    theory: "To dunk a standard basketball, a player's hands must clear the 10-foot (120 inches) rim by about 6 inches (126 inches total) to successfully push the ball downward into the net. The required vertical jump is this target height minus the player's standing reach.",
    faq: [
      { question: "What is an average standing reach?", answer: "For a person of 6 feet height, the standing reach is typically around 96 to 100 inches (8 feet to 8 feet 4 inches)." },
      { question: "How much vertical clearance is needed to dunk?", answer: "At least 6 inches above the rim is recommended to clear the fingers and ball over the rim. 8-10 inches of clearance is ideal for comfortable dunking." }
    ],
    seoMeta: { title: "Basketball Dunk Calculator", description: "Find out the vertical jump you need to dunk a basketball.", keywords: "dunk calculator, basketball dunk, vertical jump, standing reach" }
  },
  {
    id: "efg-calculator", name: "eFG Calculator",
    description: "Calculate Effective Field Goal Percentage (eFG%) for a basketball player.",
    category: "sports", subcategory: "basketball",
    scientificFormula: "\\text{eFG\\%} = \\frac{\\text{FG} + 0.5 \\cdot \\text{3PM}}{\\text{FGA}}",
    inputs: [
      { id: "fgm", label: "Field Goals Made (FG)", type: "number", defaultValue: 8 },
      { id: "pm3", label: "3-Pointers Made (3PM)", type: "number", defaultValue: 2 },
      { id: "fga", label: "Field Goals Attempted (FGA)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "efg", label: "Effective Field Goal %", formula: "(fgm + 0.5 * pm3) / fga", unit: "" }
    ],
    theory: "Effective Field Goal Percentage (eFG%) is an advanced metric that adjusts traditional field goal percentage to account for the fact that three-point shots are worth 50% more points than two-point shots.",
    faq: [
      { question: "What is a good eFG% in basketball?", answer: "An eFG% above 50% is average. Above 55% is very good, and elite players (especially efficient shooters or post players) can exceed 60%." },
      { question: "Why use eFG% instead of standard FG%?", answer: "Standard FG% treats 3-pointers and 2-pointers equally. A player who shoots 4/10 from 3-point range scores 12 points, while a player who shoots 5/10 from 2-point range scores 10 points. eFG% shows the true shooting efficiency by reflecting the higher value of the 3-point shot." }
    ],
    seoMeta: { title: "Effective Field Goal % (eFG%) Calculator", description: "Calculate Effective Field Goal Percentage (eFG%) for basketball.", keywords: "eFG, effective field goal percentage, basketball shooting efficiency" }
  },
  {
    id: "game-score-calculator", name: "Game Score Calculator – Basketball Performance Indicator",
    description: "Calculate a basketball player's game score based on box score statistics.",
    category: "sports", subcategory: "basketball",
    scientificFormula: "\\text{Game Score} = \\text{PTS} + 0.4 \\cdot \\text{FG} - 0.7 \\cdot \\text{FGA} - 0.4 \\cdot \\text{FT} - 0.7 \\cdot \\text{FTA} + 0.7 \\cdot \\text{ORB} + 0.3 \\cdot \\text{DRB} + \\text{STL} + 0.7 \\cdot \\text{AST} + 0.7 \\cdot \\text{BLK} - 0.4 \\cdot \\text{PF} - \\text{TOV}",
    inputs: [
      { id: "pts", label: "Points", type: "number", defaultValue: 24 },
      { id: "fgm", label: "Field Goals Made", type: "number", defaultValue: 9 },
      { id: "fga", label: "Field Goals Attempted", type: "number", defaultValue: 16 },
      { id: "ftm", label: "Free Throws Made", type: "number", defaultValue: 4 },
      { id: "fta", label: "Free Throws Attempted", type: "number", defaultValue: 5 },
      { id: "orb", label: "Offensive Rebounds", type: "number", defaultValue: 2 },
      { id: "drb", label: "Defensive Rebounds", type: "number", defaultValue: 6 },
      { id: "stl", label: "Steals", type: "number", defaultValue: 2 },
      { id: "ast", label: "Assists", type: "number", defaultValue: 5 },
      { id: "blk", label: "Blocks", type: "number", defaultValue: 1 },
      { id: "pf", label: "Personal Fouls", type: "number", defaultValue: 3 },
      { id: "tov", label: "Turnovers", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "score", label: "Game Score", formula: "pts + 0.4 * fgm - 0.7 * fga - 0.4 * ftm - 0.7 * fta + 0.7 * orb + 0.3 * drb + stl + 0.7 * ast + 0.7 * blk - 0.4 * pf - tov", unit: "" }
    ],
    theory: "Developed by John Hollinger, Game Score gives a rough measure of a player's productivity for a single game. It is scaled similarly to points: a score of 10 is average, while 40+ is a legendary performance.",
    faq: [
      { question: "What is an average Game Score?", answer: "An average performance is around 10. A great game is 20+, and 30+ is an outstanding, superstar-level game." },
      { question: "What is the highest game score ever recorded?", answer: "Michael Jordan recorded a game score of 64.6 on March 28, 1990, scoring 69 points with 18 rebounds, 6 assists, and 4 steals." }
    ],
    seoMeta: { title: "Basketball Game Score Calculator", description: "Calculate John Hollinger's Game Score for a basketball player.", keywords: "game score, basketball metrics, Hollinger, player efficiency" }
  },
  {
    id: "quiz-dunk-calculator", name: "Quiz: Dunk Calculator",
    description: "Check if you can dunk a basketball based on height, reach, and vertical jump.",
    category: "sports", subcategory: "basketball",
    scientificFormula: "\\text{Margin} = \\text{Standing Reach (cm)} + \\text{Vertical (cm)} - 305",
    inputs: [
      { id: "height_cm", label: "Height (cm)", type: "number", defaultValue: 180 },
      { id: "reach_cm", label: "Standing Reach (cm)", type: "number", defaultValue: 235 },
      { id: "vertical_cm", label: "Vertical Jump (cm)", type: "number", defaultValue: 75 }
    ],
    outputs: [
      { id: "dunk_margin", label: "Dunk Clearance Margin", formula: "reach_cm + vertical_cm - 305", unit: "cm" }
    ],
    theory: "To dunk, you must exceed the basket height (305 cm) by at least 15 cm (to clear the ball). This calculator computes your peak touch and shows how close you are to dunking a basketball.",
    faq: [
      { question: "How high is a standard basketball rim?", answer: "A standard NBA and FIBA basketball rim is exactly 10 feet or 305 cm high." },
      { question: "Can a 5'9\" player dunk?", answer: "Yes, but they need an exceptional vertical jump. Spud Webb (5'7\") won the NBA Dunk Contest with a vertical jump of around 42 inches (107 cm)." }
    ],
    seoMeta: { title: "Dunk Probability Calculator", description: "Determine if you can dunk based on standing reach and vertical jump.", keywords: "dunk calculator, vertical jump, basketball rim height" }
  },
  {
    id: "ts-calculator", name: "TS Calculator (True Shooting Percentage)",
    description: "Calculate True Shooting Percentage (TS%) for a basketball player.",
    category: "sports", subcategory: "basketball",
    scientificFormula: "\\text{TS\\%} = \\frac{\\text{PTS}}{2 \\cdot \\left(\\text{FGA} + 0.44 \\cdot \\text{FTA}\\right)}",
    inputs: [
      { id: "pts", label: "Points Scored (PTS)", type: "number", defaultValue: 25 },
      { id: "fga", label: "Field Goals Attempted (FGA)", type: "number", defaultValue: 15 },
      { id: "fta", label: "Free Throws Attempted (FTA)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "ts", label: "True Shooting %", formula: "pts / (2 * (fga + 0.44 * fta))", unit: "" }
    ],
    theory: "True Shooting Percentage (TS%) is a measure of shooting efficiency that takes into account field goals, 3-point field goals, and free throws. It provides a single percentage metric that represents a player's scoring efficiency.",
    faq: [
      { question: "Why is the constant 0.44 used in the TS% formula?", answer: "The 0.44 multiplier represents the fraction of free throw attempts that take up a possession (accounting for and-ones, technical free throws, and 3-shot fouls)." },
      { question: "What is an excellent TS%?", answer: "A TS% of 60% or higher is considered elite. The league average in the NBA is typically around 56-57%." }
    ],
    seoMeta: { title: "True Shooting % (TS%) Calculator", description: "Calculate True Shooting Percentage (TS%) for basketball players.", keywords: "TS%, true shooting percentage, shooting efficiency, basketball stats" }
  },

  // 🔥 CALORIES BURNED
  {
    id: "burpee-calorie-calculator", name: "Burpee Calorie Calculator",
    description: "Calculate calories burned performing burpees based on your weight and duration.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 8.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Body Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Duration (minutes)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "8 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Burpees are a high-intensity full-body exercise with an estimated MET (Metabolic Equivalent of Task) value of 8.0. Calorie burning is proportional to body mass and active duration.",
    faq: [
      { question: "Are burpees effective for weight loss?", answer: "Yes, burpees are a full-body calisthenic exercise that raises the heart rate quickly, making them highly effective for burning calories and conditioning." }
    ],
    seoMeta: { title: "Burpee Calorie Burn Calculator", description: "Calculate calories burned doing burpees based on weight.", keywords: "burpees, calories burned, calisthenics, weight loss" }
  },
  {
    id: "calories-burned-calculator", name: "Calories Burned Calculator",
    description: "Calculate calories burned during various physical activities using MET values.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = \\text{MET} \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "met", label: "MET Value of Activity", type: "number", defaultValue: 7.0, helpText: "Walking: 3.5, Running: 10, Swimming: 7, Heavy Weights: 6" },
      { id: "weight_lbs", label: "Body Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "duration_min", label: "Duration (minutes)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "met * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "MET stands for Metabolic Equivalent of Task. 1 MET represents the energy expenditure of sitting quietly (~1 kcal/kg/hour). Calorie burn increases linearly with the intensity (MET value) of the exercise.",
    faq: [
      { question: "What is a MET?", answer: "Metabolic Equivalent of Task (MET) is a ratio of your active metabolic rate compared to your resting metabolic rate." }
    ],
    seoMeta: { title: "General Calories Burned Calculator", description: "Calculate active calorie burn from MET values and body weight.", keywords: "calories burned, MET values, exercise calorie calculator" }
  },
  {
    id: "calories-burned-by-heart-rate-calculator", name: "Calories Burned by Heart Rate Calculator",
    description: "Calculate calories burned during exercise based on your heart rate, age, gender, and weight.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Male Formula} \\quad \\text{or} \\quad \\text{Female Formula based on Gender Switch}",
    inputs: [
      { id: "gender", label: "Gender (1 = Male, 0 = Female)", type: "number", defaultValue: 1 },
      { id: "hr", label: "Average Heart Rate (BPM)", type: "number", defaultValue: 140 },
      { id: "weight_kg", label: "Weight (kg)", type: "number", defaultValue: 75 },
      { id: "age_yr", label: "Age (years)", type: "number", defaultValue: 30 },
      { id: "duration_min", label: "Duration (minutes)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "gender * (duration_min * (0.6309 * hr + 0.1988 * weight_kg + 0.2017 * age_yr - 55.0969) / 4.184) + (1 - gender) * (duration_min * (0.4472 * hr + 0.1263 * weight_kg + 0.074 * age_yr - 20.4022) / 4.184)", unit: "kcal" }
    ],
    theory: "Using heart rate to estimate energy expenditure is more accurate than MET values because it accounts for individual fitness levels and cardiac effort. The formulas differ by biological sex to account for differences in body composition and lean muscle mass.",
    faq: [
      { question: "Is heart rate calorie counting accurate?", answer: "Yes, it is generally more accurate than standard tables since it measures how hard your heart is pumping in real-time." }
    ],
    seoMeta: { title: "Calories Burned by Heart Rate Calculator", description: "Estimate calorie expenditure using average heart rate, age, and sex.", keywords: "heart rate calorie calculator, calories heart rate, fitness tracker" }
  },
  {
    id: "elliptical-calorie-calculator", name: "Elliptical Calorie Calculator",
    description: "Calculate the calories burned on an elliptical trainer.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 7.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Workout Duration (min)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "7 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Elliptical training is a low-impact cardiovascular workout. Moderate resistance has a MET value of around 7.0.",
    faq: [
      { question: "Is elliptical better than running?", answer: "The elliptical offers a similar cardiovascular workout to running but with significantly lower impact on joints, making it ideal for recovery or injury prevention." }
    ],
    seoMeta: { title: "Elliptical Calorie Calculator", description: "Calculate calories burned on an elliptical machine.", keywords: "elliptical calories, cardio, gym calorie calculator" }
  },
  {
    id: "fat-burning-zone-calculator", name: "Fat Burning Zone Calculator",
    description: "Find the optimal heart rate range to maximize fat oxidation.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Zone} = 60\\% \\text{ to } 70\\% \\text{ of } (220 - \\text{Age})",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "max_hr", label: "Max Heart Rate", formula: "220 - age", unit: "BPM" },
      { id: "zone_low", label: "Fat Burn Zone Low (60%)", formula: "0.6 * (220 - age)", unit: "BPM" },
      { id: "zone_high", label: "Fat Burn Zone High (70%)", formula: "0.7 * (220 - age)", unit: "BPM" }
    ],
    theory: "The fat-burning zone represents a moderate-intensity heart rate range where the body utilizes fat as its primary fuel source rather than carbohydrates. This zone occurs between 60% and 70% of your maximum heart rate.",
    faq: [
      { question: "Does training in the fat-burn zone burn more total fat?", answer: "While you burn a higher *percentage* of fat in this zone, high-intensity workouts burn more *total* calories, which can lead to greater fat loss overall." }
    ],
    seoMeta: { title: "Fat Burning Heart Rate Zone Calculator", description: "Find the heart rate range for maximum fat burning during cardio.", keywords: "fat burning zone, heart rate zones, fat oxidation, weight loss" }
  },
  {
    id: "hiking-calculator", name: "Hiking Calculator",
    description: "Calculate calories burned while hiking based on weight and duration.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 6.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Body Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "duration_min", label: "Hiking Duration (min)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "6 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Hiking on uneven terrain demands more core and stabilizing muscle activation than flat surface walking, translating to a higher MET rating of ~6.0.",
    faq: [
      { question: "How does terrain affect hiking calorie burn?", answer: "Steeper inclines or carrying a backpack significantly increase the energy requirements. For backpacking, the MET value can rise to 7.5 or 8.0." }
    ],
    seoMeta: { title: "Hiking Calorie Calculator", description: "Estimate calorie burn during hiking based on time and weight.", keywords: "hiking calories, trail walking, calorie calculator" }
  },
  {
    id: "jump-rope-calorie-calculator", name: "Jump Rope Calorie Calculator",
    description: "Calculate calories burned while jumping rope.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 11.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Body Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Duration (min)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "11 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Jumping rope is a high-intensity cardiovascular activity. At a moderate speed of 100-120 skips per minute, it carries a high MET index of 11.0.",
    faq: [
      { question: "Is jumping rope good for weight loss?", answer: "Yes, it is one of the highest-calorie-burning exercises available, outperforming standard jogging and cycling." }
    ],
    seoMeta: { title: "Jump Rope Calorie Calculator", description: "Find out how many calories you burn jumping rope.", keywords: "jump rope, skip rope, cardio, high-intensity calorie burn" }
  },
  {
    id: "running-calorie-calculator", name: "Running Calorie Calculator",
    description: "Calculate calories burned running based on body weight and duration.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 10.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "duration_min", label: "Duration (min)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "10 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Running requires significant metabolic work to move body mass over distance. A standard 6 mph pace carries a MET of 10.0.",
    faq: [
      { question: "Does speed increase calorie burn per mile?", answer: "Surprisingly, no. Running a mile burns roughly the same calories regardless of speed, though faster running burns more calories per minute." }
    ],
    seoMeta: { title: "Running Calorie Burn Calculator", description: "Estimate energy expenditure while jogging or running.", keywords: "running calories, jog calorie calculator, active metabolic rate" }
  },
  {
    id: "sauna-calories-burned-calculator", name: "Sauna Calories Burned Calculator",
    description: "Calculate estimated calories burned during a sauna session.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 1.5 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Sauna Session Duration (min)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "1.5 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Saunas raise body temperature, which elevates metabolic rate. However, most weight lost in a sauna is water weight, not body fat.",
    faq: [
      { question: "Does sauna burn fat?", answer: "The fat-burning effect is very minimal. The metabolic increase is small compared to active exercise. Ensure you rehydrate to replace lost water." }
    ],
    seoMeta: { title: "Sauna Calorie Calculator", description: "Estimate energy cost of a sauna session.", keywords: "sauna calories, sweat calorie burn, heat therapy" }
  },
  {
    id: "snow-shoveling-calories-burned-calculator", name: "Snow Shoveling Calories Burned Calculator",
    description: "Calculate calories burned while shoveling snow.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 6.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 170 },
      { id: "duration_min", label: "Shoveling Duration (min)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "6 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Shoveling snow is heavy upper body and core resistance work. It carries a MET rating of 6.0, similar to a heavy gym workout.",
    faq: [
      { question: "Why is snow shoveling so tiring?", answer: "It combines cardiovascular work in cold temperatures with isometric contractions of major muscle groups, which increases blood pressure." }
    ],
    seoMeta: { title: "Snow Shoveling Calorie Calculator", description: "Estimate calorie burn from shoveling snow in winter.", keywords: "snow shoveling calories, winter workout, household chores" }
  },
  {
    id: "stairs-calorie-calculator", name: "Stairs Calorie Calculator",
    description: "Calculate calories burned climbing stairs.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 9.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "duration_min", label: "Duration (min)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "9 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Climbing stairs works major lower-body muscle groups against gravity. At a moderate speed, it carries a MET index of 9.0.",
    faq: [
      { question: "Is climbing stairs good cardio?", answer: "Yes, it is excellent lower body conditioning and rapidly increases cardiovascular heart rate." }
    ],
    seoMeta: { title: "Stair Climbing Calorie Calculator", description: "Calculate calories burned climbing stairs based on weight.", keywords: "stair climbing, stairs calorie burn, stepper machine" }
  },
  {
    id: "steps-to-calories-calculator", name: "Steps to Calories Calculator",
    description: "Convert walking steps to estimated calories burned.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = \\text{Steps} \\cdot 0.04 \\cdot \\frac{\\text{Weight (lbs)}}{150}",
    inputs: [
      { id: "steps", label: "Number of Steps", type: "number", defaultValue: 10000 },
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 160 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "steps * 0.04 * (weight_lbs / 150)", unit: "kcal" }
    ],
    theory: "On average, a person burns about 0.04 calories per step. This value is scaled for body weight since heavier individuals expend more energy to move.",
    faq: [
      { question: "How many calories does 10,000 steps burn?", answer: "For a 150 lb person, 10,000 steps burns approximately 400 calories." }
    ],
    seoMeta: { title: "Steps to Calories Burned Calculator", description: "Estimate calorie burn from your daily step count.", keywords: "steps to calories, step converter, walking tracker" }
  },
  {
    id: "swimming-calorie-calculator", name: "Swimming Calorie Calculator",
    description: "Calculate calories burned swimming laps.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 7.0 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Duration (min)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "7 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Swimming provides whole-body muscular resistance. A moderate freestyle swimming pace carries a MET index of 7.0.",
    faq: [
      { question: "Does water temperature affect calorie burn?", answer: "Cold water can slightly increase metabolic heat production, but the effect on overall calorie burn is negligible compared to strokes output." }
    ],
    seoMeta: { title: "Swimming Calorie Calculator", description: "Find out how many calories you burn swimming laps.", keywords: "swimming calories, pool workout, active calorie calculator" }
  },
  {
    id: "walking-calorie-calculator", name: "Walking Calorie Calculator",
    description: "Calculate calories burned walking based on weight and duration.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Calories} = 3.5 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "duration_min", label: "Duration (min)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "3.5 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Walking is a low-impact cardiovascular activity. A brisk walking pace (3.0 mph) carries a MET of 3.5.",
    faq: [
      { question: "Can walking help you lose weight?", answer: "Yes, consistent brisk walking creates a calorie deficit and is a highly sustainable form of daily physical activity." }
    ],
    seoMeta: { title: "Walking Calorie Calculator", description: "Calculate calories burned walking by weight and duration.", keywords: "walking calories, brisk walk, weight loss" }
  },
  {
    id: "weight-loss-calculator", name: "Weight Loss Calculator",
    description: "Calculate the total and daily calorie deficit required to reach your target weight loss.",
    category: "sports", subcategory: "calories-burned",
    scientificFormula: "\\text{Total Deficit} = \\text{Loss (lbs)} \\cdot 3500",
    inputs: [
      { id: "weight_loss_lbs", label: "Weight to Lose (lbs)", type: "number", defaultValue: 10 },
      { id: "target_days", label: "Target Days", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total_deficit", label: "Total Calorie Deficit Needed", formula: "weight_loss_lbs * 3500", unit: "kcal" },
      { id: "daily_deficit", label: "Target Daily Calorie Deficit", formula: "(weight_loss_lbs * 3500) / target_days", unit: "kcal/day" }
    ],
    theory: "To lose one pound of body fat, a calorie deficit of approximately 3,500 kcal is required. Dividing the total deficit by target days determines the necessary daily calorie reduction.",
    faq: [
      { question: "What is a safe rate of weight loss?", answer: "Most health professionals recommend a rate of 1 to 2 pounds of weight loss per week, which translates to a daily deficit of 500 to 1000 kcal." }
    ],
    seoMeta: { title: "Weight Loss Calorie Deficit Calculator", description: "Calculate target daily calorie deficit for weight loss.", keywords: "weight loss, calorie deficit, calorie burn, fat loss" }
  },

  // 🏏 CRICKET
  {
    id: "batting-strike-rate-calculator", name: "Batting Strike Rate Calculator",
    description: "Calculate a cricket batter's strike rate (runs scored per 100 balls faced).",
    category: "sports", subcategory: "cricket",
    scientificFormula: "\\text{SR} = \\frac{\\text{Runs} \\cdot 100}{\\text{Balls Faced}}",
    inputs: [
      { id: "runs", label: "Runs Scored", type: "number", defaultValue: 45 },
      { id: "balls", label: "Balls Faced", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "sr", label: "Strike Rate", formula: "(runs * 100) / balls", unit: "" }
    ],
    theory: "Batting Strike Rate measures the scoring speed of a batter. It is calculated as the average number of runs scored per 100 balls faced.",
    faq: [
      { question: "What is a good strike rate in T20 cricket?", answer: "In T20 cricket, a strike rate above 130 is considered good. Elite batters often maintain strike rates above 140 or 150." }
    ],
    seoMeta: { title: "Cricket Batting Strike Rate Calculator", description: "Calculate batting strike rate (scoring speed) in cricket.", keywords: "strike rate, batting strike rate, cricket stats" }
  },
  {
    id: "bowling-average-calculator", name: "Bowling Average Calculator",
    description: "Calculate a bowler's average runs conceded per wicket taken.",
    category: "sports", subcategory: "cricket",
    scientificFormula: "\\text{Average} = \\frac{\\text{Runs Conceded}}{\\text{Wickets Taken}}",
    inputs: [
      { id: "runs_conceded", label: "Runs Conceded", type: "number", defaultValue: 120 },
      { id: "wickets", label: "Wickets Taken", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "avg", label: "Bowling Average", formula: "runs_conceded / wickets", unit: "" }
    ],
    theory: "Bowling average measures a bowler's cost-effectiveness in terms of runs conceded. A lower average indicates a more effective bowler who takes wickets at a lower run expense.",
    faq: [
      { question: "What is a good bowling average in Test matches?", answer: "In Test cricket, a bowling average under 25 is considered outstanding. Under 30 is good." }
    ],
    seoMeta: { title: "Bowling Average Calculator", description: "Calculate cricket bowler average runs per wicket.", keywords: "bowling average, wickets, runs conceded, cricket stats" }
  },
  {
    id: "cricket-follow-on-calculator", name: "Cricket Follow-On Calculator",
    description: "Calculate the follow-on margin in test cricket matches.",
    category: "sports", subcategory: "cricket",
    scientificFormula: "\\text{Margin} = \\text{First Innings Score} - \\text{Second Innings Score}",
    inputs: [
      { id: "runs_team1", label: "Team 1 First Innings Runs", type: "number", defaultValue: 450 },
      { id: "runs_team2", label: "Team 2 First Innings Runs", type: "number", defaultValue: 230 },
      { id: "follow_on_target", label: "Follow-On Target Difference", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "margin", label: "First Innings Lead", formula: "runs_team1 - runs_team2", unit: "runs" }
    ],
    theory: "In test cricket, if the team batting second scores significantly fewer runs than the team batting first, the leading captain can enforce a follow-on, forcing the trailing team to bat again immediately. The minimum lead required is usually 200 runs for a 5-day match.",
    faq: [
      { question: "What are follow-on limits based on match length?", answer: "5 days: 200 runs lead; 3-4 days: 150 runs lead; 2 days: 100 runs lead; 1 day: 75 runs lead." }
    ],
    seoMeta: { title: "Cricket Follow-On Calculator", description: "Check if a team can enforce the follow-on in test cricket.", keywords: "follow-on, test cricket, first innings lead" }
  },
  {
    id: "duckworth-lewis-calculator", name: "Duckworth Lewis Calculator",
    description: "Calculate a simplified revised target in rain-interrupted cricket matches using Duckworth-Lewis resource percentages.",
    category: "sports", subcategory: "cricket",
    scientificFormula: "\\text{Target} = \\text{Original Target} \\cdot \\frac{\\text{Resources Team 2}}{\\text{Resources Team 1}}",
    inputs: [
      { id: "target", label: "Original Target Score", type: "number", defaultValue: 280 },
      { id: "res1", label: "Team 1 Resource % Available", type: "number", defaultValue: 100 },
      { id: "res2", label: "Team 2 Resource % Available", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "revised_target", label: "Revised Target Score", formula: "target * (res2 / res1)", unit: "runs" }
    ],
    theory: "The Duckworth-Lewis-Stern (DLS) method recalculates targets in rain-affected limited-overs matches based on the percentage of batting resources (overs and wickets) remaining for each team.",
    faq: [
      { question: "What are cricket resource percentages?", answer: "Each team starts with 100% resources (50 overs, 10 wickets). Losing overs reduces resources; losing wickets reduces resources more quickly." }
    ],
    seoMeta: { title: "Duckworth Lewis Calculator", description: "Calculate revised cricket target scores in rain-affected games.", keywords: "Duckworth Lewis, DLS method, cricket target, rain delay" }
  },
  {
    id: "icc-calculator", name: "ICC Calculator",
    description: "Calculate team rating points based on points and matches played.",
    category: "sports", subcategory: "cricket",
    scientificFormula: "\\text{Rating} = \\frac{\\text{Points}}{\\text{Matches}}",
    inputs: [
      { id: "points", label: "Total Rating Points", type: "number", defaultValue: 3450 },
      { id: "matches", label: "Total Matches Played", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "rating", label: "ICC Team Rating", formula: "points / matches", unit: "" }
    ],
    theory: "The ICC team rankings are calculated by dividing the total points accumulated in matches by the total number of matches played.",
    faq: [
      { question: "How does the rating update?", answer: "Matches played in the last 3-4 years are weighted, with recent matches carrying more significance." }
    ],
    seoMeta: { title: "ICC Ranking Rating Calculator", description: "Calculate ICC cricket team rating index.", keywords: "ICC rankings, team ratings, cricket points" }
  },
  {
    id: "net-run-rate-calculator", name: "Net Run Rate Calculator",
    description: "Calculate Net Run Rate (NRR) for cricket tournaments.",
    category: "sports", subcategory: "cricket",
    scientificFormula: "\\text{NRR} = \\frac{\\text{Runs Scored}}{\\text{Overs Faced}} - \\frac{\\text{Runs Conceded}}{\\text{Overs Bowled}}",
    inputs: [
      { id: "runs_scored", label: "Total Runs Scored", type: "number", defaultValue: 1250 },
      { id: "overs_faced", label: "Total Overs Faced", type: "number", defaultValue: 245 },
      { id: "runs_conceded", label: "Total Runs Conceded", type: "number", defaultValue: 1180 },
      { id: "overs_bowled", label: "Total Overs Bowled", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "nrr", label: "Net Run Rate", formula: "(runs_scored / overs_faced) - (runs_conceded / overs_bowled)", unit: "" }
    ],
    theory: "Net Run Rate (NRR) is a tie-breaker method used in cricket tournaments to rank teams with equal points. It is the difference between a team's average runs scored per over and average runs conceded per over.",
    faq: [
      { question: "What happens if a team is bowled out?", answer: "If a team is bowled out before completing their overs, the full quota of overs (e.g. 50 overs) is used as the denominator for NRR calculation." }
    ],
    seoMeta: { title: "Net Run Rate (NRR) Calculator", description: "Calculate Net Run Rate for cricket tournament standings.", keywords: "net run rate, NRR, cricket standings, tie breaker" }
  },

  // 🚴‍♀️ CYCLING
  {
    id: "bike-cadence-and-speed-calculator", name: "Bike Cadence and Speed Calculator",
    description: "Calculate bicycle speed from pedaling cadence, gear ratio, and wheel size.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Speed (mph)} = \\frac{\\text{Cadence} \\cdot \\frac{\\text{Chainring}}{\\text{Cog}} \\cdot \\text{Circumference (in)} \\cdot 60}{63360}",
    inputs: [
      { id: "cadence", label: "Pedaling Cadence (RPM)", type: "number", defaultValue: 90 },
      { id: "chainring", label: "Chainring Teeth", type: "number", defaultValue: 50 },
      { id: "cog", label: "Rear Cog Teeth", type: "number", defaultValue: 15 },
      { id: "circumference_in", label: "Wheel Circumference (inches)", type: "number", defaultValue: 82.5, helpText: "700x25c is ~82.5 inches" }
    ],
    outputs: [
      { id: "speed_mph", label: "Speed", formula: "(cadence * (chainring / cog) * circumference_in * 60) / 63360", unit: "mph" }
    ],
    theory: "Bicycle speed is determined by pedaling cadence (rotations per minute) multiplied by the mechanical advantage of the gear ratio, multiplied by wheel circumference.",
    faq: [
      { question: "What is an ideal cadence?", answer: "A cadence of 80 to 90 RPM is generally recommended to minimize muscle fatigue and optimize cardiovascular efficiency." }
    ],
    seoMeta: { title: "Bike Speed and Cadence Calculator", description: "Calculate bicycle speed from cadence and gear teeth counts.", keywords: "bike speed, cadence, gear ratio, chainring, wheel size" }
  },
  {
    id: "bike-gear-calculator", name: "Bike Gear Calculator",
    description: "Calculate bicycle gear inches based on chainring, cog, and wheel size.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Gear Inches} = \\text{Wheel Diameter (in)} \\cdot \\frac{\\text{Chainring}}{\\text{Cog}}",
    inputs: [
      { id: "diameter_in", label: "Wheel Diameter (inches)", type: "number", defaultValue: 27 },
      { id: "chainring", label: "Chainring Teeth", type: "number", defaultValue: 52 },
      { id: "cog", label: "Rear Cog Teeth", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "gear_inches", label: "Gear Inches", formula: "diameter_in * (chainring / cog)", unit: "in" }
    ],
    theory: "Gear inches represents the equivalent wheel diameter of a direct-drive bicycle (like a penny-farthing) for a given gear combination. A higher value indicates a harder gear built for high speeds.",
    faq: [
      { question: "What does gear inches measure?", answer: "It measures the mechanical advantage of a gear combination. Higher numbers require more force to pedal but yield more distance per revolution." }
    ],
    seoMeta: { title: "Bike Gear Calculator", description: "Calculate bike gear inches and pedal ratios.", keywords: "gear inches, bike gears, gear ratio, chainring, sprocket" }
  },
  {
    id: "bike-pace-calculator", name: "Bike Pace Calculator",
    description: "Calculate speed or average pace for a bike ride.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Pace} = \\frac{\\text{Time}}{\\text{Distance}}",
    inputs: [
      { id: "time_min", label: "Total Ride Time (minutes)", type: "number", defaultValue: 120 },
      { id: "distance_miles", label: "Distance (miles)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "pace", label: "Pace", formula: "time_min / distance_miles", unit: "min/mile" }
    ],
    theory: "Pace indicates the average time taken to complete a unit distance. In cycling, pace is often stated as speed (mph or km/h), but track workouts use minutes per mile/km.",
    faq: [
      { question: "What is an average cycling pace?", answer: "For recreational riders, 12-15 mph (~4-5 min/mile) is standard. Trained amateurs average 18-22 mph (~3 min/mile)." }
    ],
    seoMeta: { title: "Cycling Pace Calculator", description: "Calculate your average speed or pace in minutes per mile.", keywords: "cycling pace, bike speed, average speed, ride pace" }
  },
  {
    id: "bike-size-calculator", name: "Bike Size Calculator",
    description: "Determine the recommended bicycle frame size based on your inseam length.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Road Frame (cm)} = \\text{Inseam (cm)} \\cdot 0.66, \\quad \\text{MTB Frame (cm)} = \\text{Inseam (cm)} \\cdot 0.57",
    inputs: [
      { id: "inseam_cm", label: "Leg Inseam Length (cm)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "road_size", label: "Recommended Road Bike Frame", formula: "inseam_cm * 0.66", unit: "cm" },
      { id: "mtb_size", label: "Recommended Mountain Bike Frame", formula: "inseam_cm * 0.57", unit: "cm" }
    ],
    theory: "Bicycle frame size is primarily determined by your leg inseam length rather than overall height. Road bikes require larger frames to optimize aerodynamics, while mountain bikes use smaller frames to maximize agility.",
    faq: [
      { question: "How do I measure my inseam?", answer: "Stand against a wall, place a hard book between your legs up to your crotch, and measure the distance from the top of the book to the floor." }
    ],
    seoMeta: { title: "Bike Frame Size Calculator", description: "Find the recommended frame size for road and mountain bikes.", keywords: "bike size, road bike frame, mountain bike size, inseam measurement" }
  },
  {
    id: "biking-life-gain-calculator", name: "Biking Life Gain Calculator",
    description: "Estimate the life expectancy gain accumulated by riding a bicycle.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Life Gain (min)} = \\text{Distance (km)} \\cdot 1.1",
    inputs: [
      { id: "distance_km", label: "Distance Cycled (km)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "life_gain", label: "Life Expectancy Gained", formula: "distance_km * 1.1", unit: "min" }
    ],
    theory: "Public health research shows that the health benefits of regular bicycling (cardiovascular exercise, stress reduction) outweigh the risks of air pollution and traffic accidents, extending life expectancy by about 1.1 minutes per kilometer ridden.",
    faq: [
      { question: "Is this based on scientific studies?", answer: "Yes, studies published in Environmental Health Perspectives found that switching commuting habits to cycling added 3 to 14 months to overall life expectancy." }
    ],
    seoMeta: { title: "Biking Life Gain Calculator", description: "Estimate life expectancy benefits of riding a bicycle.", keywords: "biking health benefits, life expectancy, active transit, cycling longevity" }
  },
  {
    id: "calories-burned-biking-calculator", name: "Calories Burned Biking Calculator",
    description: "Calculate calories burned cycling based on body weight and ride time.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Calories} = 7.5 \\cdot 3.5 \\cdot \\frac{\\text{Weight (lbs)}}{2.20462} \\cdot \\frac{\\text{Duration (min)}}{200}",
    inputs: [
      { id: "weight_lbs", label: "Weight (lbs)", type: "number", defaultValue: 160 },
      { id: "duration_min", label: "Ride Duration (min)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "calories", label: "Calories Burned", formula: "7.5 * 3.5 * (weight_lbs / 2.20462) / 200 * duration_min", unit: "kcal" }
    ],
    theory: "Cycled calorie burn is calculated using a standard MET value of 7.5, representing a moderate cycling speed of 12-14 mph on flat terrain.",
    faq: [
      { question: "Does wind resistance affect calorie burn?", answer: "Yes, wind resistance increases exponentially with speed. Fighting a headwind or cycling fast burns significantly more energy." }
    ],
    seoMeta: { title: "Cycling Calories Burned Calculator", description: "Estimate calories burned cycling by weight and time.", keywords: "cycling calories, bike calorie burn, active metabolic rate" }
  },
  {
    id: "chain-length-calculator", name: "Chain Length Calculator",
    description: "Calculate the recommended bicycle chain length based on frame geometry.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Length} = 2 \\cdot \\text{Chainstay} + 0.25 \\cdot C + 0.25 \\cdot G + 1",
    inputs: [
      { id: "chainstay_in", label: "Chainstay Length (inches)", type: "number", defaultValue: 16.5 },
      { id: "chainring_t", label: "Teeth on Largest Front Chainring", type: "number", defaultValue: 50 },
      { id: "cog_t", label: "Teeth on Largest Rear Cog", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "chain_length", label: "Recommended Chain Length", formula: "2 * chainstay_in + 0.25 * chainring_t + 0.25 * cog_t + 1", unit: "in" }
    ],
    theory: "Proper chain length is essential for smooth shifting and preventing damage to the derailleur. The calculation represents the length needed to wrap around the largest chainring and largest cog plus an extra link clearance margin.",
    faq: [
      { question: "Why does chainstay length matter?", answer: "The chainstay length is the distance from the center of the bottom bracket to the rear axle. It forms the baseline distance the chain must traverse twice." }
    ],
    seoMeta: { title: "Bicycle Chain Length Calculator", description: "Calculate correct bike chain length from gears and chainstay length.", keywords: "chain length, bike chain, chainstay, drivetrain" }
  },
  {
    id: "cycling-breakaway-calculator", name: "Cycling Breakaway Calculator",
    description: "Calculate the time and distance needed for a chasing group to catch a breakaway group.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Time (s)} = \\frac{\\text{Gap (m)}}{\\text{Chaser Speed (m/s)} - \\text{Breakaway Speed (m/s)}}",
    inputs: [
      { id: "gap_m", label: "Initial Gap Distance (meters)", type: "number", defaultValue: 500 },
      { id: "chaser_speed", label: "Chaser Speed (m/s)", type: "number", defaultValue: 12.5, helpText: "12.5 m/s = 45 km/h" },
      { id: "breakaway_speed", label: "Breakaway Speed (m/s)", type: "number", defaultValue: 11.1, helpText: "11.1 m/s = 40 km/h" }
    ],
    outputs: [
      { id: "catch_time", label: "Time to Catch", formula: "gap_m / (chaser_speed - breakaway_speed)", unit: "s" }
    ],
    theory: "Catching a breakaway relies on the difference in velocity between the two groups. If the chasers move faster than the breakaway, the gap closes at a rate equal to the speed difference.",
    faq: [
      { question: "Why do chasers have a speed advantage?", answer: "A larger group of chasers can rotate riders to share the work of fighting wind resistance, allowing individuals to rest and maintain a higher collective pace." }
    ],
    seoMeta: { title: "Cycling Breakaway Catch Calculator", description: "Calculate catch time for cycling race groups.", keywords: "breakaway calculator, road racing, catch time, peloton physics" }
  },
  {
    id: "cycling-heart-rate-zone-calculator", name: "Cycling Heart Rate Zone Calculator",
    description: "Calculate heart rate training zones for cycling recovery.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Recovery HR} = 50\\% \\text{ to } 60\\% \\text{ of } (220 - \\text{Age})",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "recovery_low", label: "Zone 1 Low (50%)", formula: "0.5 * (220 - age)", unit: "BPM" },
      { id: "recovery_high", label: "Zone 1 High (60%)", formula: "0.6 * (220 - age)", unit: "BPM" }
    ],
    theory: "Cycling heart rate zones guide training intensity. Zone 1 (active recovery) flushes waste products from muscles without inducing metabolic strain.",
    faq: [
      { question: "Why is recovery zone training important?", answer: "It increases blood flow to muscles to aid recovery while keeping intensity low enough to allow structural adaptation." }
    ],
    seoMeta: { title: "Cycling Heart Rate Zones Calculator", description: "Find heart rate ranges for cycling training zones.", keywords: "cycling heart rate, training zones, cardio recovery" }
  },
  {
    id: "cycling-wattage-calculator", name: "Cycling Wattage Calculator",
    description: "Calculate the mechanical power output (watts) needed to maintain a given speed.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "P = v \\cdot \\left(m \\cdot g \\cdot \\sin\\theta + C_{rr} \\cdot m \\cdot g \\cdot \\cos\\theta + 0.5 \\cdot \\rho \\cdot C_d \\cdot A \\cdot v^2\\right)",
    inputs: [
      { id: "weight_kg", label: "Rider + Bike Mass (kg)", type: "number", defaultValue: 85 },
      { id: "slope_pct", label: "Road Incline (Grade %)", type: "number", defaultValue: 5 },
      { id: "speed_mps", label: "Target Speed (m/s)", type: "number", defaultValue: 5.5, helpText: "5.5 m/s = 20 km/h" }
    ],
    outputs: [
      { id: "power", label: "Estimated Mechanical Power", formula: "speed_mps * (weight_kg * 9.80665 * (slope_pct / 100) + 0.15 * speed_mps^2)", unit: "W" }
    ],
    theory: "Cycling wattage represents the power required to overcome gravity (climbing), rolling resistance (tires on road), and aerodynamic drag (air friction). On slopes, overcoming gravity dominates the power equation.",
    faq: [
      { question: "What is a good power-to-weight ratio?", answer: "A healthy amateur outputs 2.0 to 3.0 W/kg. Professional climbers can sustain over 6.0 W/kg on alpine climbs." }
    ],
    seoMeta: { title: "Cycling Wattage Calculator", description: "Calculate mechanical power output (watts) for road cycling.", keywords: "cycling power, wattage calculator, road cycling physics, CdA, rolling resistance" }
  },
  {
    id: "e-bike-range-calculator", name: "E-Bike Range Calculator",
    description: "Estimate the maximum range of an electric bicycle based on battery capacity and energy use.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Range} = \\frac{\\text{Battery Capacity (Wh)}}{\\text{Energy Consumption (Wh/mile)}}",
    inputs: [
      { id: "capacity_wh", label: "Battery Capacity (Wh)", type: "number", defaultValue: 500, helpText: "Voltage (V) × Amp-hours (Ah)" },
      { id: "consumption_wh_mi", label: "Energy Consumption (Wh/mile)", type: "number", defaultValue: 20, helpText: "Typically 15-25 Wh/mile" }
    ],
    outputs: [
      { id: "range_mi", label: "Estimated Range", formula: "capacity_wh / consumption_wh_mi", unit: "miles" }
    ],
    theory: "E-bike range is determined by the total energy stored in the battery (watt-hours) and the efficiency of the rider/motor combination (energy consumed per mile).",
    faq: [
      { question: "How can I increase my e-bike range?", answer: "Pedal more, use lower assist modes, keep tires properly inflated, and avoid frequent starts and stops." }
    ],
    seoMeta: { title: "E-Bike Range Calculator", description: "Estimate electric bike range based on battery and energy use.", keywords: "e-bike range, electric bicycle, battery capacity, Wh/mile" }
  },
  {
    id: "bicycle-lubricant-cost-to-run-calculator", name: "Bicycle Lubricant Cost-to-Run Calculator",
    description: "Calculate the cost per mile of running a specific chain lubricant.",
    category: "sports", subcategory: "cycling",
    scientificFormula: "\\text{Cost per Mile} = \\frac{\\text{Lubricant Price}}{\\frac{\\text{Lubricant Volume}}{\\text{Volume per Application}} \\cdot \\text{Miles per Application}}",
    inputs: [
      { id: "lube_price", label: "Bottle Price ($)", type: "number", defaultValue: 15.00 },
      { id: "lube_vol_ml", label: "Bottle Volume (ml)", type: "number", defaultValue: 120 },
      { id: "ml_per_apply", label: "Volume per Application (ml)", type: "number", defaultValue: 3 },
      { id: "miles_per_apply", label: "Miles per Application", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "cost_per_mile", label: "Cost per Mile", formula: "lube_price / ((lube_vol_ml / ml_per_apply) * miles_per_apply)", unit: "$/mile" }
    ],
    theory: "Bicycle chain lubes vary in cost and durability. Liquid lubes are cheap but need frequent application; waxes are expensive initially but last longer and reduce drivetrain friction wear.",
    faq: [
      { question: "Why do some lubes last longer?", answer: "Wax-based lubes solidify on the chain, creating a dry barrier that repels dirt. Wet lubes remain liquid, attracting road grit which accelerates wear." }
    ],
    seoMeta: { title: "Bicycle Lubricant Cost Calculator", description: "Calculate the cost per mile of bicycle chain lubricants.", keywords: "chain lube, cost per mile, bicycle maintenance, chain wax" }
  },

  // 🏅 OVERALL FITNESS
  {
    id: "age-grade-calculator", name: "Age Grade Calculator",
    description: "Calculate your age-graded running score compared to world-record performances.",
    category: "sports", subcategory: "overall-fitness",
    scientificFormula: "\\text{Score (\\%)} = \\frac{\\text{Age-Group World Record Time}}{\\text{Your Time}} \\cdot 100",
    inputs: [
      { id: "record_time_sec", label: "World Record Time for Age/Distance (s)", type: "number", defaultValue: 900 },
      { id: "runner_time_sec", label: "Your Running Time (s)", type: "number", defaultValue: 1200 }
    ],
    outputs: [
      { id: "score", label: "Age-Graded Performance Score", formula: "(record_time_sec / runner_time_sec) * 100", unit: "%" }
    ],
    theory: "Age grading allows runners of different ages and biological sexes to compare their performances on a level playing field. A score of 100% represents a world-record level run.",
    faq: [
      { question: "What do the scores mean?", answer: "100%: World Record level; 90%+: World class; 80%+: National class; 70%+: Regional class; 60%+: Local class." }
    ],
    seoMeta: { title: "Age Grade Runner Calculator", description: "Calculate your age-graded score for running races.", keywords: "age grade, running calculator, race times, master runners" }
  },
  {
    id: "ape-index-calculator", name: "Ape Index Calculator",
    description: "Calculate your ape index (wingspan compared to height).",
    category: "sports", subcategory: "overall-fitness",
    scientificFormula: "\\text{Ratio} = \\frac{\\text{Wingspan}}{\\text{Height}}, \\quad \\text{Difference} = \\text{Wingspan} - \\text{Height}",
    inputs: [
      { id: "wingspan_in", label: "Wingspan (inches)", type: "number", defaultValue: 72 },
      { id: "height_in", label: "Height (inches)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "ratio", label: "Ape Index Ratio", formula: "wingspan_in / height_in", unit: "" },
      { id: "diff", label: "Wingspan/Height Difference", formula: "wingspan_in - height_in", unit: "in" }
    ],
    theory: "Ape index compares a person's wingspan (arm reach) to their standing height. A positive index (wingspan greater than height) provides mechanical advantages in sports like rock climbing, swimming, and boxing.",
    faq: [
      { question: "What is an average Ape Index?", answer: "For most humans, the ape index is 1.0 (neutral difference of 0). Professional climbers and basketball players often have indexes of 1.05 or higher." }
    ],
    seoMeta: { title: "Ape Index Calculator", description: "Calculate your ape index wingspan-to-height ratio.", keywords: "ape index, wingspan, climbing reach, arm length" }
  },
  {
    id: "human-punch-force-calculator", name: "Human Punch Force Calculator",
    description: "Estimate the force of a punch from hand mass, velocity, and deceleration distance.",
    category: "sports", subcategory: "overall-fitness",
    scientificFormula: "\\text{Force (N)} = \\frac{0.5 \\cdot m \\cdot v^2}{d}",
    inputs: [
      { id: "hand_mass", label: "Effective Hand + Arm Mass (kg)", type: "number", defaultValue: 4.5, helpText: "Typically 4-6% of total body weight" },
      { id: "speed_mps", label: "Punch Impact Speed (m/s)", type: "number", defaultValue: 8.0, helpText: "Amateur: 6-8 m/s, Pro: 9-12 m/s" },
      { id: "distance_m", label: "Deceleration/Impact Distance (m)", type: "number", defaultValue: 0.05, helpText: "Target indentation depth (usually 0.03 - 0.08 m)" }
    ],
    outputs: [
      { id: "force", label: "Impact Force", formula: "0.5 * hand_mass * speed_mps^2 / distance_m", unit: "N" }
    ],
    theory: "Impact force is computed using the work-energy theorem. The kinetic energy of the punching fist (0.5 × m × v²) is dissipated over the distance it travels during deceleration upon impact.",
    faq: [
      { question: "How hard does an average human punch?", answer: "An untrained person punches with about 500-800 Newtons of force (~110-180 lbs of force). Professional boxers can exceed 4000 Newtons (~900 lbs)." }
    ],
    seoMeta: { title: "Human Punch Force Calculator", description: "Estimate punching impact force in Newtons.", keywords: "punch force, boxing physics, impact force, kinetic energy, strike power" }
  }
];
