const flavorlists = [
  {
    name: "Dark Chocolate",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
    flavor:"chocolate",
    productLink:"https://beastlife.in/products/beast-life-pro-concentrate-whey-protein-with-ultrasorb-tech-924gm-rich-chocolate"
  },
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
    flavor:"stabery",
    productLink:"https://beastlife.in/products/pro-concentrate-whey-protein-strawberry-924g"

  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
    flavor:"cookie",
    productLink:"https://beastlife.in/products/pro-concentrate-whey-protein-with-ultrasorb-tech-924gm-cookies-cream"
  },
  {
    name: "Peanut Butter",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
    flavor:"Pnut",
    productLink:"https://beastlife.in/products/natural-peanut-butter-chocolate-crunchy-100-peanuts-no-palm-oil-800gm"
  },
  {
    name: "Testo Booster",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
    flavor:"capsule",
    productLink:"https://beastlife.in/products/3x-strength-veg-omega-3-6-9-flaxseed-oil-60n"
  },
  {
    name: "Malaikhulfi",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
    flavor:"malaikulfi",
    productLink:"https://beastlife.in/products/pro-concentrate-whey-protein-malai-kulfi-924g"
  },
];

const nutrientLists = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const cards = [
  {
    src: "/brandVIDs/reviews/reu1.webm",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/brandVIDs/reviews/reu2.webm",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/brandVIDs/reviews/reu3.webm",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/brandVIDs/reviews/reu4.webm",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/brandVIDs/reviews/reu6.webm",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/brandVIDs/reviews/reu5.webm",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];


const projects = [
  {
    id: 1,
    name: "Creatine Monohydrate",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "https://beastlife.in/products/super-micronized-creatine-monohydrate-249g",
    image: "/brandIMGs/posters/p1.jpg",
    // image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/brandIMGs/posters/p1.jpg",
    ingredient: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Tropical Tango Flavor",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "https://beastlife.in/products/creatine-monohydrate-tropical-tango-flavor-319g",
    image: "/brandIMGs/posters/p2.jpg",
    bgImage: "/brandIMGs/posters/p2.jpg",
    ingredient: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Shikanji Flavor",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "https://beastlife.in/products/creatine-monohydrate-shikanji-flavor-319g",
    image: "/brandIMGs/posters/p3.jpg",
    bgImage: "/brandIMGs/posters/p3.jpg",
    ingredient: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Peach Flavor",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "https://beastlife.in/products/creatine-monohydrate-peach-flavor-319g",
    image: "/brandIMGs/posters/p4.jpg",
    bgImage: "/brandIMGs/posters/p4.jpg",
    ingredient: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Watermelon Flavor",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "https://beastlife.in/products/creatine-monohydrate-watermelon-flavor-125g",
    image: "/brandIMGs/posters/p5.png",
    bgImage: "/brandIMGs/posters/p5.png",
    ingredient: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "https://beastlife.in/products/creatine-monohydrate-shikanji-flavor-125g",
    image: "/brandIMGs/posters/p1.jpg",
    bgImage: "/brandIMGs/posters/p1.jpg",
    ingredient: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];




const socials = [
  { name: "Instagram", href: "https://www.instagram.com/sujal_jaiswal_25?igsh=bGZvZjA4bWdoZmZp" },
  {
    name: "twitter",
    href: "https://x.com/jaiswal_su37631",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sujaljaiswal25/" },
  { name: "GitHub", href: "https://github.com/Sujaljaiswal25" },
];

export { flavorlists, nutrientLists, cards, socials, projects };
