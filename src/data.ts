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
    title: 'Cutting Edge Hair & Beauty',
    est: '2007',
    description: 'A premier hair and beauty destination in Gangtok offering world-class styling and grooming services.',
    highlights: ['Expert Styling', 'Premium Products', 'Personalised Consultations'],
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600948836101-f9ff09c1f016?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Blush Fashion Store',
    est: '2010',
    description: 'A curated fashion boutique bringing contemporary trends and elegant traditional wear.',
    highlights: ['Curated Collections', 'Bridal Wear', 'Custom Tailoring'],
    images: [
      'https://images.unsplash.com/photo-1550614000-4b95d4edfa40?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Zayel\'s Pickle',
    est: 'FSSAI Registered',
    description: 'Authentic Himalayan flavours preserved in jars, crafted with traditional recipes and love.',
    highlights: ['Organic Ingredients', 'Traditional Recipes', 'FSSAI Certified'],
    images: [
      'https://images.unsplash.com/photo-1589149091530-02ba441b490d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1626202419088-75c179116e10?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596647976822-48df92c10651?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80'
    ]
  },
  {
    title: 'Block Printing & Arts',
    est: 'Creative Initiative',
    description: 'Preserving and innovating through creative expressions in block printing and fine arts.',
    highlights: ['Handcrafted Designs', 'Sustainable Practices', 'Art Exhibitions'],
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606041011872-596597976b25?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80'
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
  { category: 'Entrepreneurship', url: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80' },
  { category: 'Salon', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80' },
  { category: 'Boutique', url: 'https://images.unsplash.com/photo-1550614000-4b95d4edfa40?auto=format&fit=crop&q=80' },
  { category: 'Pickle Products', url: 'https://images.unsplash.com/photo-1589149091530-02ba441b490d?auto=format&fit=crop&q=80' },
  { category: 'Block Printing', url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80' },
  { category: 'Awards', url: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80' },
  { category: 'Community Activities', url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80' },
  { category: 'Training Programmes', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80' },
  { category: 'Public Speaking', url: 'https://images.unsplash.com/photo-1475721028070-2046f56c8022?auto=format&fit=crop&q=80' },
  { category: 'Art & Paintings', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80' }
];

export const nationalInitiatives = [
  'MSME', 'Startup India', 'Skill India', 'Vocal for Local', 'Women Entrepreneurship Platform', 'Self Help Groups', 'Women Empowerment', 'Sustainable Livelihood'
];

export const testimonials = [
  { name: 'Sita M.', role: 'Student Entrepreneur', content: 'Mrs. Rai\'s baking training gave me the skills and confidence to start my own home bakery. She is a true inspiration to women in Sikkim.' },
  { name: 'Rohan Sharma', role: 'Customer', content: 'Cutting Edge isn\'t just a salon, it\'s an experience. The professionalism and warmth you get there is unmatched in Gangtok.' },
  { name: 'Karma Bhutia', role: 'SHG Member', content: 'The pickle making workshop organized by Shova ma\'am has helped our group generate a steady income. We are forever grateful.' }
];
