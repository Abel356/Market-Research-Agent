import { Persona } from '@/types';

// Sample personas data - in production this would come from a database
export const SAMPLE_PERSONAS: Persona[] = [
  {
    id: 'persona-1',
    name: 'Sarah Chen',
    age: 32,
    location: {
      city: 'San Francisco',
      country: 'USA',
      coordinates: [-122.4194, 37.7749]
    },
    demographics: {
      gender: 'female',
      industry: 'Technology',
      jobTitle: 'Senior Software Engineer',
      income: '$120,000-150,000',
      education: 'Masters in Computer Science'
    },
    psychographics: {
      riskTolerance: 'high',
      techAdoption: 'early',
      personalityTraits: {
        openness: 9,
        conscientiousness: 8,
        extraversion: 6,
        agreeableness: 7,
        neuroticism: 3
      }
    },
    interests: ['AI/ML', 'Startups', 'Open Source', 'Productivity Tools'],
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'persona-2',
    name: 'Marcus Johnson',
    age: 45,
    location: {
      city: 'New York',
      country: 'USA',
      coordinates: [-74.0060, 40.7128]
    },
    demographics: {
      gender: 'male',
      industry: 'Finance',
      jobTitle: 'Chief Financial Officer',
      income: '$200,000+',
      education: 'MBA in Finance'
    },
    psychographics: {
      riskTolerance: 'low',
      techAdoption: 'mainstream',
      personalityTraits: {
        openness: 5,
        conscientiousness: 9,
        extraversion: 7,
        agreeableness: 6,
        neuroticism: 4
      }
    },
    interests: ['Financial Planning', 'Risk Management', 'Enterprise Software', 'Golf'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'persona-3',
    name: 'Emma Rodriguez',
    age: 28,
    location: {
      city: 'Barcelona',
      country: 'Spain',
      coordinates: [2.1734, 41.3851]
    },
    demographics: {
      gender: 'female',
      industry: 'Marketing',
      jobTitle: 'Digital Marketing Manager',
      income: '€40,000-50,000',
      education: 'Bachelor in Marketing'
    },
    psychographics: {
      riskTolerance: 'medium',
      techAdoption: 'early',
      personalityTraits: {
        openness: 8,
        conscientiousness: 7,
        extraversion: 9,
        agreeableness: 8,
        neuroticism: 5
      }
    },
    interests: ['Social Media', 'Content Creation', 'Travel', 'Sustainability'],
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'persona-4',
    name: 'Hiroshi Tanaka',
    age: 38,
    location: {
      city: 'Tokyo',
      country: 'Japan',
      coordinates: [139.6917, 35.6895]
    },
    demographics: {
      gender: 'male',
      industry: 'Automotive',
      jobTitle: 'Product Manager',
      income: '¥8,000,000-10,000,000',
      education: 'Masters in Engineering'
    },
    psychographics: {
      riskTolerance: 'medium',
      techAdoption: 'early',
      personalityTraits: {
        openness: 7,
        conscientiousness: 9,
        extraversion: 4,
        agreeableness: 8,
        neuroticism: 3
      }
    },
    interests: ['Automotive Technology', 'IoT', 'Quality Management', 'Kaizen'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'persona-5',
    name: 'Priya Patel',
    age: 35,
    location: {
      city: 'Mumbai',
      country: 'India',
      coordinates: [72.8777, 19.0760]
    },
    demographics: {
      gender: 'female',
      industry: 'Healthcare',
      jobTitle: 'Medical Director',
      income: '₹2,000,000-3,000,000',
      education: 'MD in Internal Medicine'
    },
    psychographics: {
      riskTolerance: 'low',
      techAdoption: 'mainstream',
      personalityTraits: {
        openness: 6,
        conscientiousness: 9,
        extraversion: 5,
        agreeableness: 9,
        neuroticism: 4
      }
    },
    interests: ['Medical Technology', 'Patient Care', 'Healthcare Innovation', 'Yoga'],
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
  }
];

// Generate additional personas programmatically
export function generatePersonas(count: number = 200): Persona[] {
  const cities = [
    { name: 'London', country: 'UK', coordinates: [-0.1276, 51.5074] },
    { name: 'Berlin', country: 'Germany', coordinates: [13.4050, 52.5200] },
    { name: 'Sydney', country: 'Australia', coordinates: [151.2093, -33.8688] },
    { name: 'Toronto', country: 'Canada', coordinates: [-79.3832, 43.6532] },
    { name: 'São Paulo', country: 'Brazil', coordinates: [-46.6333, -23.5505] },
    { name: 'Dubai', country: 'UAE', coordinates: [55.2708, 25.2048] },
    { name: 'Singapore', country: 'Singapore', coordinates: [103.8198, 1.3521] },
    { name: 'Stockholm', country: 'Sweden', coordinates: [18.0686, 59.3293] },
    { name: 'Cape Town', country: 'South Africa', coordinates: [18.4241, -33.9249] },
    { name: 'Mexico City', country: 'Mexico', coordinates: [-99.1332, 19.4326] }
  ];

  const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing', 'Consulting', 'Media', 'Real Estate', 'Automotive'];
  const firstNames = ['Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Sage', 'River'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

  const personas: Persona[] = [...SAMPLE_PERSONAS];

  for (let i = personas.length; i < count; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    personas.push({
      id: `persona-${i + 1}`,
      name: `${firstName} ${lastName}`,
      age: Math.floor(Math.random() * 40) + 25, // 25-65
      location: {
        city: city.name,
        country: city.country,
        coordinates: city.coordinates as [number, number]
      },
      demographics: {
        gender: Math.random() > 0.5 ? 'female' : 'male',
        industry,
        jobTitle: getJobTitle(industry),
        income: getIncomeRange(),
        education: getEducation()
      },
      psychographics: {
        riskTolerance: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
        techAdoption: ['early', 'mainstream', 'late'][Math.floor(Math.random() * 3)] as 'early' | 'mainstream' | 'late',
        personalityTraits: {
          openness: Math.floor(Math.random() * 10) + 1,
          conscientiousness: Math.floor(Math.random() * 10) + 1,
          extraversion: Math.floor(Math.random() * 10) + 1,
          agreeableness: Math.floor(Math.random() * 10) + 1,
          neuroticism: Math.floor(Math.random() * 10) + 1
        }
      },
      interests: generateInterests(industry),
      avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?w=150&h=150&fit=crop&crop=face`
    });
  }

  return personas;
}

function getJobTitle(industry: string): string {
  const titles: Record<string, string[]> = {
    'Technology': ['Software Engineer', 'Product Manager', 'Data Scientist', 'DevOps Engineer', 'UX Designer'],
    'Finance': ['Financial Analyst', 'Investment Manager', 'Risk Analyst', 'CFO', 'Accountant'],
    'Healthcare': ['Doctor', 'Nurse', 'Medical Director', 'Healthcare Administrator', 'Pharmacist'],
    'Education': ['Teacher', 'Principal', 'Professor', 'Education Coordinator', 'Curriculum Designer'],
    'Retail': ['Store Manager', 'Buyer', 'Sales Associate', 'Merchandiser', 'Customer Service Manager']
  };

  const industryTitles = titles[industry] || ['Manager', 'Director', 'Specialist', 'Coordinator', 'Analyst'];
  return industryTitles[Math.floor(Math.random() * industryTitles.length)];
}

function getIncomeRange(): string {
  const ranges = ['$30,000-50,000', '$50,000-75,000', '$75,000-100,000', '$100,000-150,000', '$150,000+'];
  return ranges[Math.floor(Math.random() * ranges.length)];
}

function getEducation(): string {
  const levels = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certification'];
  return levels[Math.floor(Math.random() * levels.length)];
}

function generateInterests(industry: string): string[] {
  const baseInterests = ['Technology', 'Travel', 'Reading', 'Fitness', 'Music', 'Food', 'Art', 'Sports'];
  const industryInterests: Record<string, string[]> = {
    'Technology': ['AI/ML', 'Open Source', 'Startups', 'Gaming', 'Cybersecurity'],
    'Finance': ['Investing', 'Economics', 'Real Estate', 'Cryptocurrency', 'Risk Management'],
    'Healthcare': ['Medical Research', 'Patient Care', 'Health Technology', 'Wellness', 'Pharmaceuticals']
  };

  const interests = [...baseInterests.slice(0, 3)];
  const specific = industryInterests[industry] || [];
  interests.push(...specific.slice(0, 2));

  return interests;
}