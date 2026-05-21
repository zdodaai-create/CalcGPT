import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_PHOTO: CalculatorConfig[] = [
  {
    id: "3d-render-calculator", name: "3D Render Calculator", description: "Calculate total rendering time for an animation.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Total Time} = \\text{Frames} \\times \\text{Time per Frame}",
    inputs: [
      { id: "f", label: "Total Frames", type: "number", defaultValue: 240 },
      { id: "t", label: "Time per Frame (minutes)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "mins", label: "Total Minutes", formula: "f * t", unit: "min" },
      { id: "hrs", label: "Total Hours", formula: "(f * t) / 60", unit: "hrs" }
    ],
    theory: "Rendering an animation requires rendering each individual frame. Total time is just frames multiplied by average render time per frame.",
    faq: [],
    seoMeta: { title: "3D Render Time Calculator", description: "Estimate how long your 3D animation will take to render.", keywords: "render time calculator, 3d render" }
  },
  {
    id: "aspect-ratio-calculator", name: "Aspect Ratio Calculator", description: "Calculate the missing dimension to maintain an aspect ratio.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\frac{W_1}{H_1} = \\frac{W_2}{H_2}",
    inputs: [
      { id: "w1", label: "Original Width", type: "number", defaultValue: 1920 },
      { id: "h1", label: "Original Height", type: "number", defaultValue: 1080 },
      { id: "w2", label: "New Width", type: "number", defaultValue: 1280 }
    ],
    outputs: [
      { id: "h2", label: "New Height", formula: "(h1 * w2) / w1", unit: "px" }
    ],
    theory: "Aspect ratio describes the proportional relationship between its width and its height.",
    faq: [],
    seoMeta: { title: "Aspect Ratio Calculator", description: "Calculate width and height while maintaining aspect ratio.", keywords: "aspect ratio calculator, resize image proportional" }
  },
  {
    id: "blink-free-photo-calculator", name: "Blink-free Photo Calculator", description: "Calculate how many photos to take of a group to ensure at least one without blinking.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "n = \\frac{\\log(1 - p_{\\text{success}})}{\\log(1 - (1 - p_{\\text{blink}})^P)}",
    inputs: [
      { id: "p", label: "Number of People", type: "number", defaultValue: 10 },
      { id: "good", label: "Good Lighting? (1=yes, 0=no)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "photos", label: "Photos to Take", formula: "ceil(p / (good > 0 ? 3 : 2))", unit: "shots" }
    ],
    theory: "A common rule of thumb (developed by Piers Barnes) suggests taking (Group Size / 3) shots in good light, or (Group Size / 2) in bad light.",
    faq: [],
    seoMeta: { title: "Blink-free Photo Calculator", description: "How many group photos should you take?", keywords: "blink free photo, group photo calculator" }
  },
  {
    id: "camera-field-of-view", name: "Camera Field of View Calculator", description: "Calculate the FOV based on sensor size and focal length.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{FOV} = 2 \\times \\arctan\\left(\\frac{d}{2f}\\right)",
    inputs: [
      { id: "d", label: "Sensor Dimension (mm)", type: "number", defaultValue: 36 },
      { id: "f", label: "Focal Length (mm)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "fov", label: "Field of View", formula: "(2 * atan(d / (2 * f))) * (180 / 3.14159265)", unit: "°" }
    ],
    theory: "Field of view depends on the focal length of the lens and the size of the camera sensor.",
    faq: [],
    seoMeta: { title: "Camera Field of View Calculator", description: "Calculate angular field of view.", keywords: "fov calculator, camera field of view" }
  },
  {
    id: "contrast-ratio-calculator", name: "Contrast Ratio Calculator", description: "Calculate color contrast ratio.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{CR} = \\frac{L_1 + 0.05}{L_2 + 0.05}",
    inputs: [
      { id: "l1", label: "Luminance of lighter color (0-1)", type: "number", defaultValue: 1.0 },
      { id: "l2", label: "Luminance of darker color (0-1)", type: "number", defaultValue: 0.0 }
    ],
    outputs: [
      { id: "cr", label: "Contrast Ratio", formula: "(l1 + 0.05) / (l2 + 0.05)", unit: ":1" }
    ],
    theory: "The WCAG defines contrast ratio using relative luminance values.",
    faq: [],
    seoMeta: { title: "Contrast Ratio Calculator", description: "Calculate relative luminance contrast ratio.", keywords: "contrast ratio calculator" }
  },
  {
    id: "crop-factor-calculator", name: "Crop Factor Calculator", description: "Calculate effective focal length using crop factor.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Effective } f = f \\times \\text{Crop Factor}",
    inputs: [
      { id: "f", label: "Lens Focal Length (mm)", type: "number", defaultValue: 50 },
      { id: "crop", label: "Sensor Crop Factor", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "eff", label: "Effective Focal Length", formula: "f * crop", unit: "mm" }
    ],
    theory: "Crop factor is the ratio of a 35mm full-frame sensor's diagonal to the diagonal of a smaller sensor.",
    faq: [],
    seoMeta: { title: "Crop Factor Calculator", description: "Find the 35mm equivalent focal length of a lens on a cropped sensor.", keywords: "crop factor calculator, aps-c focal length" }
  },
  {
    id: "depth-of-field-calculator", name: "Depth of Field Calculator", description: "Estimate depth of field limits.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{DOF} \\approx \\frac{2 N c f^2 s^2}{f^4 - N^2 c^2 s^2}",
    inputs: [
      { id: "f", label: "Focal Length (mm)", type: "number", defaultValue: 50 },
      { id: "n", label: "Aperture (f-number)", type: "number", defaultValue: 2.8 },
      { id: "s", label: "Subject Distance (m)", type: "number", defaultValue: 5 },
      { id: "c", label: "Circle of Confusion (mm)", type: "number", defaultValue: 0.03 }
    ],
    outputs: [
      { id: "hyp", label: "Hyperfocal Distance", formula: "(f^2) / (n * c) / 1000", unit: "m" }
    ],
    theory: "Hyperfocal distance is the distance beyond which all objects can be brought into an 'acceptable' focus.",
    faq: [],
    seoMeta: { title: "Depth of Field Calculator", description: "Calculate hyperfocal distance and depth of field.", keywords: "depth of field calculator, hyperfocal distance" }
  },
  {
    id: "exposure-calculator", name: "Exposure Calculator", description: "Calculate equivalent exposure settings.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\frac{N_1^2}{t_1 S_1} = \\frac{N_2^2}{t_2 S_2}",
    inputs: [
      { id: "n1", label: "Original Aperture (f/)", type: "number", defaultValue: 4 },
      { id: "t1", label: "Original Shutter (s)", type: "number", defaultValue: 0.01 },
      { id: "n2", label: "New Aperture (f/)", type: "number", defaultValue: 2.8 }
    ],
    outputs: [
      { id: "t2", label: "New Shutter Speed", formula: "t1 * ((n2^2) / (n1^2))", unit: "s" }
    ],
    theory: "Maintains Exposure Value (EV) by trading off aperture and shutter speed.",
    faq: [],
    seoMeta: { title: "Exposure Calculator", description: "Calculate equivalent exposure for cameras.", keywords: "equivalent exposure calculator" }
  },
  {
    id: "film-calculator", name: "Film Calculator", description: "Calculate how long a film roll will last.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Duration} = \\frac{\\text{Length}}{\\text{Speed}}",
    inputs: [
      { id: "len", label: "Film Length (ft)", type: "number", defaultValue: 400 },
      { id: "fps", label: "Frames Per Second", type: "number", defaultValue: 24 },
      { id: "fpf", label: "Frames Per Foot (e.g. 16 for 35mm)", type: "number", defaultValue: 16 }
    ],
    outputs: [
      { id: "frames", label: "Total Frames", formula: "len * fpf", unit: "" },
      { id: "sec", label: "Duration", formula: "(len * fpf) / fps", unit: "s" },
      { id: "min", label: "Duration", formula: "((len * fpf) / fps) / 60", unit: "min" }
    ],
    theory: "Determines motion picture film run time.",
    faq: [],
    seoMeta: { title: "Film Length to Time Calculator", description: "Calculate motion picture film duration.", keywords: "film calculator" }
  },
  {
    id: "focal-length-calculator", name: "Focal Length Calculator", description: "Determine required focal length for a subject.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "f = \\frac{d \\times h_s}{h_o}",
    inputs: [
      { id: "d", label: "Distance to Subject (m)", type: "number", defaultValue: 10 },
      { id: "hs", label: "Sensor Height (mm)", type: "number", defaultValue: 24 },
      { id: "ho", label: "Object Height (m)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "f", label: "Required Focal Length", formula: "(d * hs) / ho", unit: "mm" }
    ],
    theory: "Using similar triangles, the ratio of sensor size to object size is proportional to focal length over distance.",
    faq: [],
    seoMeta: { title: "Focal Length Calculator", description: "Calculate focal length needed to fit a subject in frame.", keywords: "focal length calculator" }
  },
  {
    id: "frames-to-timecode", name: "Frames to Timecode Calculator", description: "Convert raw frame counts to SMPTE timecode.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Timecode} = \\text{HH:MM:SS:FF}",
    inputs: [
      { id: "f", label: "Total Frames", type: "number", defaultValue: 1000 },
      { id: "fps", label: "FPS", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "sec", label: "Total Seconds", formula: "floor(f / fps)", unit: "s" },
      { id: "frames", label: "Remaining Frames", formula: "f % fps", unit: "f" }
    ],
    theory: "Converts frames into standard duration.",
    faq: [],
    seoMeta: { title: "Frames to Timecode", description: "Convert frames to time.", keywords: "frames to timecode" }
  },
  {
    id: "hyperfocal-distance-calculator", name: "Hyperfocal Distance Calculator", description: "Calculate hyperfocal distance for maximum depth of field.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "H = \\frac{f^2}{N c}",
    inputs: [
      { id: "f", label: "Focal Length (mm)", type: "number", defaultValue: 35 },
      { id: "n", label: "Aperture (f-number)", type: "number", defaultValue: 8 },
      { id: "c", label: "Circle of Confusion (mm)", type: "number", defaultValue: 0.03 }
    ],
    outputs: [
      { id: "h", label: "Hyperfocal Distance", formula: "((f^2) / (n * c)) / 1000", unit: "m" }
    ],
    theory: "Focusing at the hyperfocal distance keeps everything from half that distance to infinity acceptably sharp.",
    faq: [],
    seoMeta: { title: "Hyperfocal Distance Calculator", description: "Calculate hyperfocal distance.", keywords: "hyperfocal calculator" }
  },
  {
    id: "image-file-size-calculator", name: "Image File Size Calculator", description: "Estimate uncompressed image file size.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Size} = \\text{Pixels} \\times \\text{Bit Depth} \\times \\text{Channels}",
    inputs: [
      { id: "w", label: "Width (px)", type: "number", defaultValue: 1920 },
      { id: "h", label: "Height (px)", type: "number", defaultValue: 1080 },
      { id: "b", label: "Bit Depth (bits per channel)", type: "number", defaultValue: 8 },
      { id: "c", label: "Channels (e.g. 3 for RGB)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "bytes", label: "Uncompressed Size", formula: "(w * h * b * c) / 8", unit: "Bytes" },
      { id: "mb", label: "Size in MB", formula: "((w * h * b * c) / 8) / 1048576", unit: "MB" }
    ],
    theory: "Uncompressed image size relies on total pixels, color channels, and bit depth.",
    faq: [],
    seoMeta: { title: "Image File Size Calculator", description: "Calculate uncompressed image size in MB.", keywords: "image file size calculator" }
  },
  {
    id: "image-ratio-calculator", name: "Image Ratio Calculator", description: "Calculate image aspect ratio from pixels.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Ratio} = \\frac{\\text{Width}}{\\text{Height}}",
    inputs: [
      { id: "w", label: "Width (px)", type: "number", defaultValue: 1920 },
      { id: "h", label: "Height (px)", type: "number", defaultValue: 1080 }
    ],
    outputs: [
      { id: "ratio", label: "Decimal Ratio", formula: "w / h", unit: "" }
    ],
    theory: "Divides width by height.",
    faq: [],
    seoMeta: { title: "Image Ratio Calculator", description: "Find the ratio of an image.", keywords: "image ratio calculator" }
  },
  {
    id: "magnification-lens-calculator", name: "Magnification of a Lens Calculator", description: "Calculate optical magnification.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "M = \\frac{v}{u}",
    inputs: [
      { id: "v", label: "Image Distance (mm)", type: "number", defaultValue: 50 },
      { id: "u", label: "Object Distance (mm)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "m", label: "Magnification", formula: "v / u", unit: "x" }
    ],
    theory: "Magnification is the ratio of image distance to object distance.",
    faq: [],
    seoMeta: { title: "Lens Magnification Calculator", description: "Calculate lens magnification.", keywords: "lens magnification" }
  },
  {
    id: "pixels-to-print-size", name: "Pixels to Print Size Calculator", description: "Determine how large an image can be printed.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Size} = \\frac{\\text{Pixels}}{\\text{PPI}}",
    inputs: [
      { id: "px", label: "Image Width (px)", type: "number", defaultValue: 3000 },
      { id: "ppi", label: "Print Resolution (PPI)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "inch", label: "Print Width", formula: "px / ppi", unit: "inches" },
      { id: "cm", label: "Print Width", formula: "(px / ppi) * 2.54", unit: "cm" }
    ],
    theory: "High quality prints usually require 300 Pixels Per Inch (PPI).",
    faq: [],
    seoMeta: { title: "Pixels to Print Size", description: "Convert pixels to inches for printing.", keywords: "pixels to print size" }
  },
  {
    id: "ppi-calculator", name: "PPI Calculator (Pixels Per Inch)", description: "Calculate display pixel density.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{PPI} = \\frac{\\sqrt{W^2 + H^2}}{\\text{Diagonal}}",
    inputs: [
      { id: "w", label: "Resolution Width", type: "number", defaultValue: 1920 },
      { id: "h", label: "Resolution Height", type: "number", defaultValue: 1080 },
      { id: "d", label: "Diagonal Size (inches)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "ppi", label: "Pixels Per Inch (PPI)", formula: "sqrt((w^2) + (h^2)) / d", unit: "ppi" }
    ],
    theory: "PPI is the diagonal resolution in pixels divided by the physical diagonal in inches.",
    faq: [],
    seoMeta: { title: "PPI Calculator", description: "Calculate pixel density of a screen.", keywords: "ppi calculator, pixel density" }
  },
  {
    id: "projector-calculator", name: "Projector Calculator", description: "Calculate projector throw distance or image size.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Distance} = \\text{Throw Ratio} \\times \\text{Image Width}",
    inputs: [
      { id: "tr", label: "Throw Ratio", type: "number", defaultValue: 1.5 },
      { id: "w", label: "Image Width (inches)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "d", label: "Throw Distance", formula: "tr * w", unit: "inches" }
    ],
    theory: "Throw ratio determines how large an image will be at a given distance from the projector lens.",
    faq: [],
    seoMeta: { title: "Projector Throw Distance Calculator", description: "Calculate projector throw distance.", keywords: "projector calculator" }
  },
  {
    id: "resolution-scale-calculator", name: "Resolution Scale Calculator", description: "Scale image resolutions by percentage.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "W_2 = W_1 \\times P",
    inputs: [
      { id: "w", label: "Width (px)", type: "number", defaultValue: 1920 },
      { id: "scale", label: "Scale (%)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "w2", label: "New Width", formula: "w * (scale / 100)", unit: "px" }
    ],
    theory: "Multiplies pixels by scale percentage.",
    faq: [],
    seoMeta: { title: "Resolution Scale Calculator", description: "Scale resolution.", keywords: "resolution scale" }
  },
  {
    id: "screen-size-calculator", name: "Screen Size Calculator", description: "Calculate physical dimensions of a screen from its diagonal.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "W = \\frac{D \\times R_w}{\\sqrt{R_w^2 + R_h^2}}",
    inputs: [
      { id: "d", label: "Diagonal (inches)", type: "number", defaultValue: 27 },
      { id: "rw", label: "Aspect Ratio Width (e.g. 16)", type: "number", defaultValue: 16 },
      { id: "rh", label: "Aspect Ratio Height (e.g. 9)", type: "number", defaultValue: 9 }
    ],
    outputs: [
      { id: "w", label: "Width", formula: "(d * rw) / sqrt((rw^2) + (rh^2))", unit: "in" },
      { id: "h", label: "Height", formula: "(d * rh) / sqrt((rw^2) + (rh^2))", unit: "in" },
      { id: "area", label: "Screen Area", formula: "((d * rw) / sqrt((rw^2) + (rh^2))) * ((d * rh) / sqrt((rw^2) + (rh^2)))", unit: "sq in" }
    ],
    theory: "Using Pythagoras theorem and the aspect ratio, diagonal length can be converted into physical width and height.",
    faq: [],
    seoMeta: { title: "Screen Size Calculator", description: "Calculate screen width and height from diagonal.", keywords: "screen size calculator" }
  },
  {
    id: "shutter-speed-calculator", name: "Shutter Speed Calculator", description: "Calculate shutter speed for motion blur.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Rule of } 500 = \\frac{500}{\\text{Focal Length}}",
    inputs: [
      { id: "f", label: "Focal Length (mm)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "t", label: "Max Shutter Speed (for astrophotography)", formula: "500 / f", unit: "s" }
    ],
    theory: "The 500 Rule calculates the maximum exposure time before star trails become visible.",
    faq: [],
    seoMeta: { title: "Shutter Speed Calculator", description: "500 rule calculator for astrophotography.", keywords: "shutter speed calculator, 500 rule" }
  },
  {
    id: "timecode-to-frames", name: "Timecode to Frames Calculator", description: "Convert SMPTE timecode to total frames.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Frames} = (H \\times 3600 + M \\times 60 + S) \\times \\text{FPS} + F",
    inputs: [
      { id: "h", label: "Hours", type: "number", defaultValue: 1 },
      { id: "m", label: "Minutes", type: "number", defaultValue: 30 },
      { id: "s", label: "Seconds", type: "number", defaultValue: 0 },
      { id: "f", label: "Frames", type: "number", defaultValue: 12 },
      { id: "fps", label: "FPS", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "tot", label: "Total Frames", formula: "((h * 3600) + (m * 60) + s) * fps + f", unit: "frames" }
    ],
    theory: "Converts standard timecode back into raw frame count.",
    faq: [],
    seoMeta: { title: "Timecode to Frames Calculator", description: "Convert video timecode to frames.", keywords: "timecode to frames" }
  },
  {
    id: "time-lapse-calculator", name: "Time Lapse Calculator", description: "Calculate parameters for a time-lapse video.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Total Shots} = \\text{Video Duration} \\times \\text{FPS}",
    inputs: [
      { id: "vd", label: "Desired Video Duration (s)", type: "number", defaultValue: 10 },
      { id: "fps", label: "Playback FPS", type: "number", defaultValue: 24 },
      { id: "int", label: "Interval Between Shots (s)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "shots", label: "Total Photos Needed", formula: "vd * fps", unit: "shots" },
      { id: "time", label: "Shooting Time Required", formula: "(vd * fps * int) / 60", unit: "minutes" }
    ],
    theory: "A time-lapse requires a specific number of photos played back at a fast frame rate.",
    faq: [],
    seoMeta: { title: "Time Lapse Calculator", description: "Calculate time lapse shooting times and intervals.", keywords: "time lapse calculator" }
  },
  {
    id: "tv-mounting-height-calculator", name: "TV Mounting Height Calculator", description: "Calculate optimal TV mounting height.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Eye Level} \\approx 42\\text{ inches}",
    inputs: [
      { id: "eye", label: "Eye Level Height (inches)", type: "number", defaultValue: 42 },
      { id: "tvh", label: "TV Height (inches)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "bottom", label: "Bottom of TV to Floor", formula: "eye - (tvh / 2)", unit: "inches" },
      { id: "center", label: "Center of TV to Floor", formula: "eye", unit: "inches" }
    ],
    theory: "Optimal TV viewing angle requires the center of the TV to be at eye level when seated.",
    faq: [],
    seoMeta: { title: "TV Mounting Height Calculator", description: "Find the best height to mount your TV.", keywords: "tv mounting height calculator" }
  },
  {
    id: "tv-size-calculator", name: "TV Size Calculator", description: "Calculate optimal TV size for your viewing distance.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Size} = \\text{Distance} \\div 1.2",
    inputs: [
      { id: "d", label: "Viewing Distance (inches)", type: "number", defaultValue: 96 }
    ],
    outputs: [
      { id: "cinema", label: "Cinematic Size (40° FOV)", formula: "d / 1.2", unit: "in" },
      { id: "mixed", label: "Mixed Usage (30° FOV)", formula: "d / 1.6", unit: "in" }
    ],
    theory: "SMPTE recommends a viewing angle of 30 degrees for mixed usage, while THX recommends 40 degrees for cinema viewing.",
    faq: [],
    seoMeta: { title: "TV Size Calculator", description: "Calculate optimal TV size based on viewing distance.", keywords: "tv size calculator, viewing distance" }
  },
  {
    id: "vertical-exaggeration-calculator", name: "Vertical Exaggeration Calculator", description: "Calculate vertical exaggeration in 3D maps or aerial photos.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{VE} = \\frac{\\text{Horizontal Scale}}{\\text{Vertical Scale}}",
    inputs: [
      { id: "h", label: "Horizontal Scale (1:x)", type: "number", defaultValue: 24000 },
      { id: "v", label: "Vertical Scale (1:x)", type: "number", defaultValue: 12000 }
    ],
    outputs: [
      { id: "ve", label: "Vertical Exaggeration", formula: "h / v", unit: "x" }
    ],
    theory: "Vertical exaggeration stretches the Z-axis in a 3D model relative to the X/Y axes to make topography more visible.",
    faq: [],
    seoMeta: { title: "Vertical Exaggeration Calculator", description: "Calculate vertical exaggeration for maps and 3D rendering.", keywords: "vertical exaggeration calculator" }
  },
  {
    id: "video-file-size-calculator", name: "Video File Size Calculator (by format)", description: "Estimate video file size based on bitrate.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Size} = \\text{Bitrate} \\times \\text{Duration}",
    inputs: [
      { id: "bit", label: "Video Bitrate (Mbps)", type: "number", defaultValue: 15 },
      { id: "sec", label: "Duration (seconds)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "size", label: "Estimated File Size", formula: "(bit * sec) / 8", unit: "MB" }
    ],
    theory: "File size is strictly a function of the total bitrate (video + audio) multiplied by time.",
    faq: [],
    seoMeta: { title: "Video File Size Calculator", description: "Estimate video file size from bitrate.", keywords: "video file size calculator" }
  },
  {
    id: "video-frame-size-calculator", name: "Video Frame Size Calculator", description: "Calculate total uncompressed video size.",
    category: "other", subcategory: "photo-video",
    scientificFormula: "\\text{Size} = W \\times H \\times \\text{Bit Depth} \\times \\text{FPS} \\times \\text{Duration}",
    inputs: [
      { id: "w", label: "Width", type: "number", defaultValue: 1920 },
      { id: "h", label: "Height", type: "number", defaultValue: 1080 },
      { id: "fps", label: "FPS", type: "number", defaultValue: 60 },
      { id: "sec", label: "Duration (s)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "gb", label: "Uncompressed Size (10-bit RGB)", formula: "(w * h * 30 * fps * sec) / 8589934592", unit: "GB" }
    ],
    theory: "Uncompressed video consumes enormous amounts of space. This calculates size based on a 10-bit per channel RGB signal (30 bits per pixel).",
    faq: [],
    seoMeta: { title: "Video Frame Size Calculator", description: "Calculate uncompressed video data rate.", keywords: "uncompressed video size" }
  }
];
