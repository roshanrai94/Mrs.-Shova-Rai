import { 
  Scissors, 
  Paintbrush, 
  Cake, 
  GraduationCap, 
  Users, 
  Award,
  Briefcase,
  Heart,
  Globe,
  MapPin,
  Clock
} from 'lucide-react';

import hairSalon1 from '/hair_salon_1.jpg';
import shovaRai from '/assets/shova_rai.jpg';
import heroImg from '/assets/Hero.jpg';
import hero1 from '/assets/hero1.jpg';
import review1 from '/assets/Review1.jpg';
import review2 from '/assets/Review2.jpg';
import review3 from '/assets/Review3.jpg';
import review4 from '/assets/Review4.jpg';
import review5 from '/assets/Review5.jpg';
import review6 from '/assets/Review6.jpg';
import award1 from '/assets/Award1.jpeg';
import award2 from '/assets/Award2.jpeg';
import award3 from '/assets/Award3.jpeg';
import award4 from '/assets/Award4.jpg';
import award5 from '/assets/Award5.jpeg';
import award6 from '/assets/Award6.jpg';
import cut1 from '/assets/cut1.jpg';
import cut2 from '/assets/cut2.jpg';
import cut3 from '/assets/Cut3.jpg';
import blushImg from '/assets/Blush.jpeg';
import pickle1 from '/assets/Pickle1.PNG';
import pickle2 from '/assets/Pickle2.PNG';
import block1 from '/assets/Block1.jpeg';
import block2 from '/assets/Block2.jpeg';
import block3 from '/assets/Block3.jpeg';

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Impact', href: '#impact' },
  { name: 'Recognition', href: '#recognition' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const heroContent = {
  headline: 'Empowering Sikkim Through Entrepreneurship, Creativity & Skill Development',
  subheading: 'Entrepreneur • Artist • Mentor • Baker • Hairstylist • Community Builder',
};

export const aboutContent = {
  openingMessage: 'Welcome! I am Shova Rai—an entrepreneur, master artisan, hairstylist, baker, mentor, and community builder dedicated to bringing beauty, authentic Himalayan flavours, creativity, and sustainable livelihood opportunities to Gangtok and beyond.',
  intro: 'Mrs. Shova Rai is a self-made, second-generation entrepreneur from Gangtok, Sikkim, with over two decades of experience across beauty, fashion, food entrepreneurship, arts, and community empowerment.\n\nThrough resilience, determination, and continuous learning, she has successfully built multiple enterprises while mentoring women, youth, and Self-Help Groups (SHGs).\n\nHer mission extends far beyond business. She is committed to preserving local traditions, creating employment opportunities, promoting sustainable livelihoods, and inspiring the next generation of entrepreneurs across Sikkim.',
  quickFacts: [
    { label: 'Name', value: 'Mrs. Shova Rai' },
    { label: 'Location', value: 'Gangtok, Sikkim, India' },
    { label: 'Experience', value: '20+ Years' }
  ],
  roles: [
    { name: 'Entrepreneur', icon: Briefcase },
    { name: 'Hairstylist', icon: Scissors },
    { name: 'Artist', icon: Paintbrush },
    { name: 'Baker', icon: Cake },
    { name: 'Mentor', icon: GraduationCap },
    { name: 'Trainer', icon: Users },
    { name: 'Community Leader', icon: Heart }
  ],
  qualifications: [
    'Trained at Nalini & Yasmin Hair Academy, Mumbai',
    'Certified Baker – Truffle Nation Baking School',
    'UDYAM Registered MSME',
    'FSSAI Registered Food Entrepreneur'
  ]
};

export const journeyTimeline = [
  { year: 'Early Years', title: 'Financial Struggles & Resilience', description: 'Overcoming early financial challenges with determination and a strong work ethic.' },
  { year: 'Foundation', title: 'Professional Training in Mumbai', description: 'Honing skills at Nalini & Yasmin Hair Academy, laying the groundwork for a future in beauty.' },
  { year: 'Transition', title: 'Working as a Night Singer', description: 'Supporting dreams through dedication and multifaceted talents before transitioning to entrepreneurship.' },
  { year: 'Return', title: 'Returning to Gangtok', description: 'Bringing world-class skills back home to Sikkim.' },
  { year: '2007', title: 'Establishing Cutting Edge', description: 'Opening the flagship hair and beauty salon in Gangtok.' },
  { year: '2010+', title: 'Expanding into Multiple Businesses', description: 'Launching Blush Fashion Store, Zayel\'s Pickle, and engaging in Arts & Block Printing.' },
  { year: 'Ongoing', title: 'Mentoring Women & SHGs', description: 'Sharing knowledge and empowering the community through skill development.' },
  { year: '2026', title: 'National Recognition', description: 'Felicitation by the National Commission for Woman in New Delhi.' },
];

export const ventures = [
  {
    id: 'cutting-edge',
    title: 'Cutting Edge Hair & Beauty',
    est: '2007',
    tagline: 'Premier Styling & Grooming Sanctuary',
    description: 'Established in 2007 in the heart of Gangtok, Cutting Edge Hair & Beauty is a pioneer in professional hair care and personal grooming in Sikkim. Combining modern international styling techniques with warm hospitality, the salon offers high-end hair transformations, skin care treatments, bridal packages, and personalized styling consultations.',
    highlights: ['Expert Styling & Transformations', 'Premium Hair & Skincare Products', 'Personalised Grooming Consultations', 'Professional Skill Training Workshops'],
    images: [
      hairSalon1,
      shovaRai,
      cut3,
      cut1,
      cut2
    ],
    imageFallbacks: [
      '/hair_salon_1.jpg',
      '/shova_rai.jpg',
      '/Cut3.jpg',
      '/cut1.jpg',
      '/cut2.jpg'
    ],
    imageCaptions: [
      'Salon Ambience & Hair Care Station',
      'Mrs. Shova Rai at Work',
      'Cutting Edge Brand & Academy Emblem',
      'Cutting Edge Salon & Styling Showcase 1',
      'Cutting Edge Salon & Styling Showcase 2'
    ]
  },
  {
    id: 'blush-fashion',
    title: 'Blush Fashion Store',
    est: '2010',
    tagline: 'Curated Boutique & Designer Apparel',
    description: 'A Boutique established in 2010, offering curated fashion and supporting local textile traditions.',
    highlights: ['Curated Designer & Ethnic Collections', 'Bespoke Traditional & Modern Apparel', 'Custom Fitting & Tailoring Services', 'Supporting Local Textile Traditions'],
    images: [
      blushImg,
      hero1,
      cut1,
      shovaRai
    ],
    imageFallbacks: [
      '/Blush.jpeg',
      '/hero1.jpg',
      '/cut1.jpg',
      '/shova_rai.jpg'
    ],
    imageCaptions: [
      'Blush Boutique Storefront & Collection Showcase',
      'Curated Ethnic & Designer Collections',
      'Bespoke Fashion & Apparel',
      'Boutique Interior & Custom Fitting'
    ]
  },
  {
    id: 'zayels-pickle',
    title: "A Taste of Sikkim Zayel's Pickle",
    est: 'FSSAI Registered',
    tagline: 'Authentic Himalayan Culinary Heritage',
    description: "A regional food brand utilizing locally sourced organic Himalayan ingredients with formal FSSAI registration captures the rich culinary heritage of the region, producing artisanal homemade pickles of Filinge & Silam Traditional local condiments of Sikkim, Himalayan Timbur Szechuan pepper — a prized regional spice, Matar Mula Peas and radish pickle, plus meat-based varieties, Lapsi Achar Traditional hog plum pickle-tangy, spicy and rich in authentic Himalayan flavour.",
    highlights: ['Filinge & Silam Traditional Local Condiments', 'Himalayan Timbur Szechuan Pepper Pickles', 'Matar Mula (Peas & Radish) & Meat Varieties', 'Lapsi Achar (Tangy Hog Plum Pickle)'],
    images: [
      pickle1,
      pickle2
    ],
    imageFallbacks: [
      '/Pickle1.PNG',
      '/Pickle2.PNG'
    ],
    imageCaptions: [
      "Zayel's Himalayan Pickle Product Pack 1",
      "Zayel's Authentic Sikkim Gourmet Pickle 2"
    ]
  },
  {
    id: 'block-printing',
    title: 'Block Printing and Art',
    est: 'Launch Phase',
    tagline: 'First Block Printing Initiative in Sikkim',
    description: 'A pioneering new venture — believed to be the first block printing initiative in Sikkim — currently in its launch phase. Mrs. Rai initiating the handcrafted block printing and blending cultural heritage with contemporary textile design.',
    highlights: ['Pioneering Block Printing in Sikkim', 'Handcrafted Woodblock Textile Designs', 'Blending Cultural Heritage with Modern Style', 'Empowering Local Craft Artisans'],
    images: [
      block1,
      block2,
      block3
    ],
    imageFallbacks: [
      '/Block1.jpeg',
      '/Block2.jpeg',
      '/Block3.jpeg'
    ],
    imageCaptions: [
      'Handcrafted Block Printing Artwork 1',
      'Artisan Woodblock Print Design 2',
      'Traditional Sikkim Heritage Textile Craft 3'
    ]
  }
];

export const skillsTraining = [
  'Baking', 'Pickle Making', 'Hair Styling', 'Beauty', 'Fashion Entrepreneurship', 'Embroidery', 'Arts & Painting', 'Creative Design', 'Livelihood Development'
];

export const awards = [
  { year: 'March 2026', title: 'National Commission for Woman Felicitation', venue: 'New Delhi' },
  { year: 'Recent', title: 'Interaction with Hon\'ble Union Minister of State for MSME', venue: 'Smt. Shobha Karandlaje' },
  { year: 'Recent', title: 'Sikkim Gyan Manch Award', venue: 'Sikkim' },
  { year: 'Recent', title: 'Felicitation by Divyangjan Welfare Department', venue: 'Government of Sikkim' },
  { year: 'Recent', title: 'Certificate of Appreciation', venue: 'Sikkim University' },
];

export const mediaFeatures = [
  'SEED Cell Magazine',
  'Window Magazine',
  'Breaking the Mould Magazine',
  '"Sikkim: An Inspiring Story of Shova Rai"'
];

export const speakingEngagements = [
  { title: 'Guest Speaker', venue: 'Cluny Women\'s College, Kalimpong, West Bengal' },
  { title: 'Resource Person', venue: 'Workshop at Sikkim University, Gangtok, Sikkim' },
  { title: 'Resource Person', venue: 'Titan Company, Rangpo, Gangtok' },
  { title: 'Motivational Speaker', venue: 'Sun Talks / Pasla (Organized by District Administration & Sun Pharma)' }
];

export const milestones = [
  { value: '20+', label: 'Years Experience' },
  { value: '4+', label: 'Business Ventures' },
  { value: '10+', label: 'National Recognitions' },
  { value: '50+', label: 'Community Trainings' },
  { value: '100+', label: 'Creative Projects' }
];

export const galleryImages = [
  { category: 'Cutting Edge Salon', url: hairSalon1 },
  { category: 'Master Styling & Studio', url: shovaRai },
  { category: 'Entrepreneurship & Leadership', url: heroImg },
  { category: 'Blush Fashion Boutique', url: blushImg },
  { category: 'Handcrafted Pickle & Spices', url: pickle1 },
  { category: 'Heritage Block Printing', url: block1 }
];

export const nationalInitiatives = [
  'MSME', 'Startup India', 'Skill India', 'Vocal for Local', 'Women Entrepreneurship Platform', 'Self Help Groups', 'Women Empowerment', 'Sustainable Livelihood'
];

export const testimonials = [
  { 
    name: 'Sita M.', 
    role: 'Student Entrepreneur', 
    image: review1,
    content: 'Mrs. Rai\'s baking training gave me the skills and confidence to start my own home bakery. She is a true inspiration to women in Sikkim.' 
  },
  { 
    name: 'Rohan Sharma', 
    role: 'Customer', 
    image: review2,
    content: 'Cutting Edge isn\'t just a salon, it\'s an experience. The professionalism and warmth you get there is unmatched in Gangtok.' 
  },
  { 
    name: 'Karma Bhutia', 
    role: 'SHG Member', 
    image: review3,
    content: 'The pickle making workshop organized by Shova ma\'am has helped our group generate a steady income. We are forever grateful.' 
  },
  { 
    name: 'Pema Lepcha', 
    role: 'Boutique Client', 
    image: review4,
    content: 'The custom ethnic designs from Blush Boutique are exquisite. Mrs. Rai brings Sikkim tradition to contemporary couture.' 
  },
  { 
    name: 'Anil Pradhan', 
    role: 'Community Partner', 
    image: review5,
    content: 'Collaborating with Mrs. Shova Rai on skill development workshops across Gangtok has empowered hundreds of youth.' 
  },
  { 
    name: 'Sunita Chettri', 
    role: 'Trainee & Entrepreneur', 
    image: review6,
    content: 'Learning hair styling and salon management at Cutting Edge changed my life. I now manage my own successful studio.' 
  }
];

export const awardPhotos = [
  { id: 1, title: 'Award & Honour Recognition', image: award1, fallbackImage: '/Award1.jpeg' },
  { id: 2, title: 'Award & Honour Recognition', image: award2, fallbackImage: '/Award2.jpeg' },
  { id: 3, title: 'Award & Honour Recognition', image: award3, fallbackImage: '/Award3.jpeg' },
  { id: 4, title: 'Award & Honour Recognition', image: award4, fallbackImage: '/Award4.jpg' },
  { id: 5, title: 'Award & Honour Recognition', image: award5, fallbackImage: '/Award5.jpeg' },
  { id: 6, title: 'Award & Honour Recognition', image: award6, fallbackImage: '/Award6.jpg' },
];
