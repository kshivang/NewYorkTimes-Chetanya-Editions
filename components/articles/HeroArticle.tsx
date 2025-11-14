import Image from 'next/image';
import Headline from '../typography/Headline';
import Byline from '../typography/Byline';
import { Article } from '@/lib/placeholder-data';

interface HeroArticleProps {
  article: Article;
}

export default function HeroArticle({ article }: HeroArticleProps) {
  return (
    <article className="mb-12 pb-8 border-b-2 border-nyt-border">
      {/* Headline */}
      <div className="mb-4">
        <Headline level={1}>{article.headline}</Headline>
        {article.subheading && (
          <p className="text-xl md:text-2xl text-nyt-gray mt-2 font-body leading-snug">
            {article.subheading}
          </p>
        )}
      </div>

      {/* Byline */}
      <Byline author={article.byline} date={article.date} className="mb-6" />

      {/* Image */}
      {article.imageUrl && (
        <figure className="mb-6">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-200">
            <Image
              src={article.imageUrl}
              alt={article.headline}
              fill
              className="object-cover"
              priority
            />
          </div>
          {article.imageCaption && (
            <figcaption className="text-sm text-nyt-light-gray mt-2 italic">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Multi-column article text with drop cap */}
      <div className="text-justify hyphens-auto md:columns-2 lg:columns-3 gap-x-8 column-rule">
        {article.body.map((paragraph, index) => (
          <p
            key={index}
            className={`mb-4 text-base leading-relaxed ${index === 0 ? 'drop-cap' : ''}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
