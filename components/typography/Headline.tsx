import { clsx } from 'clsx';

interface HeadlineProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Headline({ children, level = 1, className }: HeadlineProps) {
  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-fluid-display',
    2: 'text-3xl md:text-4xl lg:text-fluid-2xl',
    3: 'text-2xl md:text-3xl lg:text-fluid-xl',
    4: 'text-xl md:text-2xl lg:text-fluid-lg',
  };

  const Component = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';

  return (
    <Component
      className={clsx(
        'font-headline font-bold text-nyt-black leading-tight tracking-tight',
        sizes[level],
        className
      )}
    >
      {children}
    </Component>
  );
}
