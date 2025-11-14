import { clsx } from 'clsx';

interface BylineProps {
  author: string;
  date: string;
  className?: string;
}

export default function Byline({ author, date, className }: BylineProps) {
  return (
    <div className={clsx('flex items-center gap-2 text-sm text-nyt-light-gray', className)}>
      <span className="font-sans">{author}</span>
      <span className="text-nyt-border">•</span>
      <time className="font-sans">{date}</time>
    </div>
  );
}
