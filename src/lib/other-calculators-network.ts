import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_NETWORK: CalculatorConfig[] = [
  {
    id: "bandwidth-calculator", name: "Bandwidth Calculator", description: "Convert between bandwidth units.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "1\\text{ Byte} = 8\\text{ bits}",
    inputs: [
      { id: "mbps", label: "Megabits per second (Mbps)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "mbs", label: "Megabytes per second (MB/s)", formula: "mbps / 8", unit: "MB/s" },
      { id: "kbps", label: "Kilobits per second (kbps)", formula: "mbps * 1000", unit: "kbps" },
      { id: "gbps", label: "Gigabits per second (Gbps)", formula: "mbps / 1000", unit: "Gbps" }
    ],
    theory: "Bandwidth is usually measured in bits (lowercase b), while file sizes are measured in Bytes (uppercase B). There are 8 bits in a Byte.",
    faq: [],
    seoMeta: { title: "Bandwidth Calculator", description: "Convert between Mbps, MB/s, and Gbps.", keywords: "bandwidth calculator, mbps to mb/s" }
  },
  {
    id: "bandwidth-delay-product-calculator", name: "Bandwidth Delay Product Calculator", description: "Calculate BDP to tune TCP window sizes.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{BDP} = \\text{Bandwidth} \\times \\text{RTT}",
    inputs: [
      { id: "bw", label: "Bandwidth (Mbps)", type: "number", defaultValue: 1000 },
      { id: "rtt", label: "Round Trip Time (ms)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "bdp_bits", label: "BDP (bits)", formula: "(bw * 10^6) * (rtt / 1000)", unit: "bits" },
      { id: "bdp_bytes", label: "BDP (Bytes)", formula: "((bw * 10^6) * (rtt / 1000)) / 8", unit: "Bytes" }
    ],
    theory: "The Bandwidth-Delay Product determines the amount of data that can be in transit in the network. It helps in sizing TCP receive windows.",
    faq: [],
    seoMeta: { title: "Bandwidth Delay Product Calculator", description: "Calculate BDP for network tuning.", keywords: "bdp calculator" }
  },
  {
    id: "base64-encoder-decoder", name: "Base64 Encoder & Decoder", description: "Calculate output length of a Base64 string.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Base64 Length} = 4 \\times \\left\\lceil \\frac{n}{3} \\right\\rceil",
    inputs: [
      { id: "n", label: "Input String Length (characters)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "len", label: "Base64 Encoded Length", formula: "4 * ceil(n / 3)", unit: "chars" }
    ],
    theory: "Base64 encoding takes 3 bytes of data and converts them into 4 printable characters.",
    faq: [],
    seoMeta: { title: "Base64 Encoder Calculator", description: "Calculate base64 string length.", keywords: "base64 calculator" }
  },
  {
    id: "baud-rate-calculator", name: "Baud Rate Calculator", description: "Calculate bit rate from baud rate and symbols.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Bit Rate} = \\text{Baud Rate} \\times \\log_2(\\text{Symbols})",
    inputs: [
      { id: "baud", label: "Baud Rate (symbols/second)", type: "number", defaultValue: 9600 },
      { id: "sym", label: "Number of States/Symbols", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "bps", label: "Bit Rate (bps)", formula: "baud * (log(sym) / log(2))", unit: "bps" }
    ],
    theory: "Baud rate is the number of symbol changes per second. If each symbol represents multiple bits, the bit rate is higher than the baud rate.",
    faq: [],
    seoMeta: { title: "Baud Rate Calculator", description: "Calculate bit rate from baud rate.", keywords: "baud rate calculator" }
  },
  {
    id: "data-transfer-calculator", name: "Data Transfer Calculator", description: "Calculate data limits over a month.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Data} = \\text{Speed} \\times \\text{Time}",
    inputs: [
      { id: "mbps", label: "Continuous Speed (Mbps)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "hr", label: "Data per Hour", formula: "(mbps * 3600) / 8 / 1024", unit: "GB" },
      { id: "day", label: "Data per Day", formula: "(mbps * 86400) / 8 / 1024", unit: "GB" },
      { id: "mo", label: "Data per Month", formula: "(mbps * 2592000) / 8 / 1024", unit: "GB" }
    ],
    theory: "Streaming or downloading continuously at a specific speed will consume a predictable amount of data over time.",
    faq: [],
    seoMeta: { title: "Data Transfer Calculator", description: "Calculate data transfer volume over time.", keywords: "data transfer calculator" }
  },
  {
    id: "download-time-calculator", name: "Download Time Calculator", description: "Calculate how long a file download will take.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Time} = \\frac{\\text{File Size}}{\\text{Speed}}",
    inputs: [
      { id: "size", label: "File Size (GB)", type: "number", defaultValue: 50 },
      { id: "speed", label: "Internet Speed (Mbps)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "s", label: "Total Seconds", formula: "(size * 1024 * 8) / speed", unit: "s" },
      { id: "m", label: "Minutes", formula: "((size * 1024 * 8) / speed) / 60", unit: "min" },
      { id: "h", label: "Hours", formula: "(((size * 1024 * 8) / speed) / 60) / 60", unit: "hrs" }
    ],
    theory: "Convert File Size from GB to Megabits (GB * 1024 * 8) and divide by the speed in Mbps.",
    faq: [],
    seoMeta: { title: "Download Time Calculator", description: "Calculate how long a download will take.", keywords: "download time calculator" }
  },
  {
    id: "ip-address-converter", name: "IP Address Converter", description: "Convert IP values to integer representation.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Int} = (O_1 \\times 2^{24}) + (O_2 \\times 2^{16}) + (O_3 \\times 2^8) + O_4",
    inputs: [
      { id: "o1", label: "Octet 1", type: "number", defaultValue: 192 },
      { id: "o2", label: "Octet 2", type: "number", defaultValue: 168 },
      { id: "o3", label: "Octet 3", type: "number", defaultValue: 1 },
      { id: "o4", label: "Octet 4", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "val", label: "Integer Value", formula: "(o1 * 16777216) + (o2 * 65536) + (o3 * 256) + o4", unit: "" }
    ],
    theory: "An IPv4 address is just a 32-bit integer, usually represented in dot-decimal notation for readability.",
    faq: [],
    seoMeta: { title: "IP Address Converter", description: "Convert IP addresses to integer representations.", keywords: "ip address to integer" }
  },
  {
    id: "ip-subnet-calculator", name: "IP Subnet Calculator", description: "Calculate total hosts from CIDR block.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Hosts} = 2^{(32 - \\text{CIDR})} - 2",
    inputs: [
      { id: "cidr", label: "CIDR Prefix (/xx)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "ip", label: "Total IP Addresses", formula: "2^(32 - cidr)", unit: "IPs" },
      { id: "hosts", label: "Usable Hosts", formula: "(2^(32 - cidr)) - 2", unit: "Hosts" }
    ],
    theory: "The total number of IP addresses in a subnet is 2 raised to the power of (32 - CIDR). Two addresses are reserved for Network and Broadcast.",
    faq: [],
    seoMeta: { title: "IP Subnet Calculator", description: "Calculate subnet sizes and usable hosts.", keywords: "ip subnet calculator, cidr calculator" }
  },
  {
    id: "streaming-bitrate-calculator", name: "Streaming Bitrate Calculator", description: "Calculate recommended bitrate for video resolution.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Bitrate} \\approx \\text{Width} \\times \\text{Height} \\times \\text{FPS} \\times 0.1",
    inputs: [
      { id: "w", label: "Width (px)", type: "number", defaultValue: 1920 },
      { id: "h", label: "Height (px)", type: "number", defaultValue: 1080 },
      { id: "fps", label: "FPS", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "bps", label: "Recommended Bitrate", formula: "(w * h * fps * 0.1) / 1000", unit: "kbps" }
    ],
    theory: "A common formula for H.264 streaming bitrate uses a bits-per-pixel factor of around 0.1 for high motion content.",
    faq: [],
    seoMeta: { title: "Streaming Bitrate Calculator", description: "Calculate Twitch or YouTube streaming bitrates.", keywords: "streaming bitrate calculator" }
  },
  {
    id: "upload-time-calculator", name: "Upload Time Calculator", description: "Calculate file upload time.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Time} = \\frac{\\text{File Size}}{\\text{Upload Speed}}",
    inputs: [
      { id: "size", label: "File Size (GB)", type: "number", defaultValue: 10 },
      { id: "speed", label: "Upload Speed (Mbps)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "m", label: "Minutes", formula: "((size * 1024 * 8) / speed) / 60", unit: "min" },
      { id: "h", label: "Hours", formula: "(((size * 1024 * 8) / speed) / 60) / 60", unit: "hrs" }
    ],
    theory: "Asymmetric internet connections usually have much slower upload speeds than download speeds.",
    faq: [],
    seoMeta: { title: "Upload Time Calculator", description: "Calculate time required to upload files.", keywords: "upload time calculator" }
  },
  {
    id: "uptime-calculator", name: "Uptime Calculator", description: "Calculate allowable downtime for a given SLA percentage.",
    category: "other", subcategory: "internet-network",
    scientificFormula: "\\text{Downtime} = \\text{Total Time} \\times (1 - \\text{SLA})",
    inputs: [
      { id: "sla", label: "Uptime SLA (%)", type: "number", defaultValue: 99.9 }
    ],
    outputs: [
      { id: "day", label: "Daily Downtime", formula: "1440 * (1 - (sla/100))", unit: "minutes" },
      { id: "month", label: "Monthly Downtime", formula: "730.5 * (1 - (sla/100))", unit: "hours" },
      { id: "year", label: "Yearly Downtime", formula: "8760 * (1 - (sla/100))", unit: "hours" }
    ],
    theory: "High availability SLAs like 99.999% ('five nines') allow for just 5.26 minutes of downtime per year.",
    faq: [],
    seoMeta: { title: "Uptime Calculator", description: "Calculate allowable downtime for SLA percentages.", keywords: "uptime calculator, sla calculator" }
  }
];
