import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export interface Article {
  id: string;
  headline: string;
  subheading?: string;
  byline: string;
  date: string;
  category: string;
  body: string[];
  excerpt: string;
  imageUrl?: string;
  imageCaption?: string;
}

const authors = [
  'Emily Thompson',
  'Michael Chen',
  'Sarah Williams',
  'David Rodriguez',
  'Jennifer Martinez',
  'Robert Anderson',
  'Lisa Johnson',
  'James Taylor'
];

const categories = [
  'Politics',
  'World',
  'Business',
  'Technology',
  'Science',
  'Health',
  'Arts',
  'Opinion',
  'Sports'
];

function generateHeadline(): string {
  const templates = [
    'Major Development in',
    'New Study Reveals',
    'Experts Warn About',
    'Breaking:',
    'Investigation Uncovers',
    'Officials Announce',
    'Report Shows',
    'Analysis:'
  ];

  const topics = [
    'Global Economic Policy',
    'Climate Change Impact',
    'Healthcare Reform',
    'Technology Innovation',
    'International Relations',
    'Urban Development',
    'Education System',
    'Environmental Protection'
  ];

  const template = templates[Math.floor(Math.random() * templates.length)];
  const topic = topics[Math.floor(Math.random() * topics.length)];

  return `${template} ${topic}`;
}

function getRandomDate(): string {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 7);
  const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function generateArticle(id?: string): Article {
  const author = authors[Math.floor(Math.random() * authors.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const paragraphCount = Math.floor(Math.random() * 3) + 4; // 4-6 paragraphs

  const body = Array.from({ length: paragraphCount }, () =>
    lorem.generateParagraphs(1)
  );

  return {
    id: id || `article-${Math.random().toString(36).substr(2, 9)}`,
    headline: generateHeadline(),
    subheading: Math.random() > 0.5 ? lorem.generateSentences(1) : undefined,
    byline: `By ${author}`,
    date: getRandomDate(),
    category,
    body,
    excerpt: lorem.generateSentences(2),
    imageUrl: `https://placehold.co/800x600/e5e5e5/666666?text=${category}`,
    imageCaption: lorem.generateSentences(1),
  };
}

export function generateArticles(count: number): Article[] {
  return Array.from({ length: count }, (_, i) => generateArticle(`article-${i + 1}`));
}

export const sections = [
  'U.S.',
  'World',
  'Business',
  'Arts',
  'Lifestyle',
  'Opinion',
  'Science',
  'Sports'
];
