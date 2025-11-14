import Image from 'next/image';
import Headline from '../typography/Headline';
import Byline from '../typography/Byline';
import { Article } from '@/lib/placeholder-data';
import { clsx } from 'clsx';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'horizontal' | 'minimal';
  className?: string;
}

export default function ArticleCard({
  article,
  variant = 'default',
  className
}: ArticleCardProps) {
  const isHorizontal = variant === 'horizontal';
  const isMinimal = variant === 'minimal';

  return (
    <article className={clsx(
      'group cursor-pointer',
      isHorizontal && 'flex gap-4',
      className
    )}>
      {/* Image */}
      {article.imageUrl && !isMinimal && (
        <div className={clsx(
          'relative bg-gray-200 mb-3',
          isHorizontal ? 'w-32 h-24 flex-shrink-0' : 'w-full h-48'
        )}>
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className={clsx(isHorizontal && 'flex-1')}>
        {/* Category */}
        <div className="text-xs font-sans font-semibold uppercase tracking-wide text-nyt-link mb-1">
          {article.category}
        </div>

        {/* Headline */}
        <Headline
          level={isMinimal ? 4 : 3}
          className="group-hover:text-nyt-link transition-colors"
        >
          {article.headline}
        </Headline>

        {/* Excerpt */}
        {!isMinimal && (
          <p className="text-sm text-nyt-gray leading-relaxed mt-2 mb-2">
            {article.excerpt}
          </p>
        )}

        {/* Byline */}
        <Byline
          author={article.byline}
          date={article.date}
          className={clsx(isMinimal && 'text-xs')}
        />
      </div>
    </article>
  );
}
