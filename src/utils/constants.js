// Company Info Section
export const COMPANY_INFO = {
  name: "Babji Best Pipes & Fittings Trading Co. L.L.C",
  tagline: "Your Trusted Supplier of Oil Field, Pipe Fittings, Marine & General Products",
  established: "2024",
  location: "Maryam Building, Shop No. 10 Deira, Dubai, UAE",
  description: [
    "Babji Best Pipes & Fittings Trading Co. L.L.C is a dedicated supplier of high-quality oil field equipment, pipe fittings, valves, camlocks, and general industrial products.",
    "We are known for excellent product quality, competitive pricing, wide product variety, and swift delivery across markets."
  ],
  contact: {
    phone1: "+97142621618",
    phone2: "+971557656454",
    email: "babjibpft@gmail.com",
    address: "Shop No 10, Maryam Building, Dubai, U.A.E."
  },
  // path to logo image stored in public/images
  logo: "/images/LOGO2.png" // update if file name or location changes
};

// Navigation Links
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  {
    id: 'products',
    label: 'Products',
    children: [
      { label: "SS Ball Valves", id: "ss-ball-valves" },
      { label: "SS Pipe Fittings", id: "ss-pipe-fittings" },
      { label: "Forged CS Bothwell Fittings", id: "cs-bothwell-fittings" },
      { label: "Cam & Grooves Camlock Fittings", id: "camlock-fittings" },
      { label: "Brass Camlock Fittings & Valve", id: "brass-camlock" },
      { label: "SS Flanges | CS Flanges & SS Needle Valve", id: "flanges-needle-valve" },
      { label: "Cast Steel Valves", id: "cast-steel-valves" },
      { label: "Storz Coupling | Chicago Fitting Bauer Coupling", id: "storz-coupling" },
      { label: "Bandit | Clamps | Hammer Union", id: "clamps-hammer-union" },
      { label: "GI & MI Fittings", id: "gi-mi-fittings" },
      { label: "Hose | Tarpaulin & Rope", id: "hose-tarpaulin" },
      { label: "SS Butt Weld Type Fitting", id: "ss-butt-weld" },
      { label: "Forged CS Butt Weld Fitting", id: "cs-butt-weld" },
      { label: "Aluminium Camlock Fittings", id: "aluminium-camlock" },
      { label: "Bronze & Pneumatic Fitting & Valve", id: "bronze-pneumatic" },
      { label: "Butterfly Valves", id: "butterfly-valves" },
      { label: "Ductile Cast Iron Valves", id: "ductile-cast-iron" },
      { label: "Flexible Connectors | Sheets & Gaskets", id: "connectors-sheets-gaskets" },
    ],
  },
  { id: "contact", label: "Contact Us" }
];

export const STATS = [
  { label: 'Years of Trading Excellence', value: '10+' },
  { label: 'Industrial Products Supplied', value: '1,000+' },
  { label: 'Serving UAE & GCC Markets', value: '5+' },
  { label: 'Repeat Business Clients', value: '95%' }
];

export const ABOUT_STATS = [
  { label: 'Industrial & Marine Clients', value: '500+' },
  { label: 'Daily Stock Availability', value: '1,000+' },
  { label: 'Trusted Supply Network', value: '50+' },
];

// Main Product Categories (Top Level)
export const PRODUCT_CATEGORIES = [
  { label: "SS Ball Valves", id: "ss-ball-valves", image: '/images/ss ball valve.png' },
  { label: "SS Pipe Fittings", id: "ss-pipe-fittings", image: '/images/ss pipe fitting.png' },
  { label: "Forged CS Bothwell Fittings", id: "cs-bothwell-fittings", image: '/images/forged cs bothwell fittings.png' },
  { label: "Cam & Grooves Camlock Fittings", id: "camlock-fittings", image: '/images/cam and groove fitting.png' },
  { label: "Brass Camlock Fittings & Valve", id: "brass-camlock", image: '/images/brass camlock fitting and valve.png' },
  { label: "SS Flanges | CS Flanges & SS Needle Valve", id: "flanges-needle-valve", image: '/images/ss flanges cs flanges and ss needle valve.png' },
  { label: "Cast Steel Valves", id: "cast-steel-valves", image: '/images/cast steel valve.png' },
  { label: "Storz Coupling | Chicago Fitting Bauer Coupling", id: "storz-coupling", image: '/images/storx coupling.png' },
  { label: "Bandit | Clamps | Hammer Union", id: "clamps-hammer-union", image: '/images/bandit clamps hammer union.png' },
  { label: "GI & MI Fittings", id: "gi-mi-fittings", image: '/images/gi and mi fitting.png' },
  { label: "Hose | Tarpaulin & Rope", id: "hose-tarpaulin", image: '/images/hose taurpaulin and rope.png' },
  { label: "SS Butt Weld Type Fitting", id: "ss-butt-weld", image: '/images/ss butt weld type fitting.png' },
  { label: "Forged CS Butt Weld Fitting", id: "cs-butt-weld", image: '/images/forges cs butt welding.png' },
  { label: "Aluminium Camlock Fittings", id: "aluminium-camlock", image: '/images/aluminum camlock fittings.png' },
  { label: "Bronze & Pneumatic Fitting & Valve", id: "bronze-pneumatic", image: '/images/bronze and pneumatic fitting.png' },
  { label: "Butterfly Valves", id: "butterfly-valves", image: '/images/butterfly valve.png' },
  { label: "Ductile Cast Iron Valves", id: "ductile-cast-iron", image: '/images/ductile cast iron valve.png' },
  { label: "Flexible Connectors | Sheets & Gaskets", id: "connectors-sheets-gaskets", image: '/images/flexible connector sheet and gasket.png' }
];

// Bestseller Product Highlights
export const BESTSELLERS = [
  { name: "SS 2PC Ball Valve FM Model" },
  { name: "SS Ball Valve Flanged End" },
  { name: "SS 1PC Body Ball Valve NPT" },
  { name: "SS 2PC Body Ball Valve Model" },
  { name: "SS Mini Ball Valve" },
  { name: "SS 3PC Body Ball Valve Model" }
];

// Why Choose Us Section (Highlights)
export const WHY_CHOOSE_US = [
  {
    title: "Wide Variety of Products",
    description: "We offer a large range of fittings, valves, camlocks, and industrial products."
  },
  {
    title: "Quality Assurance",
    description: "Committed to delivering products with superior quality and performance."
  },
  {
    title: "Timely Delivery",
    description: "Fast and reliable order fulfillment with best approach."
  }
];

// Contact Form / Info Section
export const CONTACT_INFO = {
  phones: ["+97142621618", "+971557656454"],
  email: "babjibpft@gmail.com",
  address: "Shop No 10, Maryam Building, Deira, Dubai, UAE"
};

// (Optional) Social Links — add if available
export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: ""
};